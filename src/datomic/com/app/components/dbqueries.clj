(ns com.app.components.dbqueries
  (:require
    [com.fulcrologic.rad.database-adapters.datomic-options :as do]
    [datomic.client.api :as d]
    [taoensso.timbre :as log]
    [taoensso.encore :as enc]))

(defn- env->db [env]
  (some-> env (get-in [do/databases :production]) (deref)))

(defn get-login-info
  [env username]
  (enc/if-let [db (env->db env)]
              (d/pull db [:account/name
                          :password/hashed-value
                          :password/salt
                          :password/iterations]
                      [:account/email username])))

(defn get-all-accounts
  [env query-params]
  (if-let [db (env->db env)]
    (let [ids (if (:show-inactive? query-params)
                (d/q '[:find ?uuid
                       :where
                       [?dbid :account/id ?uuid]] db)
                (d/q '[:find ?uuid
                       :where
                       [?dbid :account/active? true]
                       [?dbid :account/id ?uuid]] db))]
      (mapv (fn [[id]] {:account/id id}) ids))))

(defn get-all-items
  [env query-params]
  (if-let [db (env->db env)]
    (let [ids (d/q '[:find ?uuid
                     :where
                     [?dbid :item/id ?uuid]] db)]
      (mapv (fn [[id]] {:item/id id}) ids))))

(defn get-all-invoices
  [env query-params]
  (if-let [db (env->db env)]
    (let [ids (d/q '[:find ?uuid
                     :where
                     [?dbid :invoice/id ?uuid]] db)]
      (mapv (fn [[id]] {:invoice/id id}) ids))))

(defn get-customer-invoices [env {:account/keys [id]}]
  (if-let [db (env->db env)]
    (let [ids (d/q '[:find ?uuid
                     :in $ ?cid
                     :where
                     [?dbid :invoice/id ?uuid]
                     [?dbid :invoice/customer ?c]
                     [?c :account/id ?cid]] db id)]
      (mapv (fn [[id]] {:invoice/id id}) ids))))

(defn get-invoice-customer-id
  [env invoice-id]
  (if-let [db (env->db env)]
    (ffirst
      (d/q '[:find ?account-uuid
             :in $ ?invoice-uuid
             :where
             [?i :invoice/id ?invoice-uuid]
             [?i :invoice/customer ?c]
             [?c :account/id ?account-uuid]] db invoice-id))))