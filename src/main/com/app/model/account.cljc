(ns com.app.model.account
  (:refer-clojure :exclude [name])
  (:require
    #?@(:clj
        [[com.wsscode.pathom.connect :as pc :refer [defmutation]]
         [com.app.model.authorization :as exauth]
         [com.app.model.mail :refer [sendmail]]
         [com.app.components.dbqueries :as queries]]
        :cljs
        [[com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]])
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.wsscode.pathom.connect :as pc]
    [com.fulcrologic.rad.form :as form]
    [com.fulcrologic.rad.form-options :as fo]
    [com.fulcrologic.rad.attributes :as attr :refer [defattr]]
    [com.fulcrologic.rad.attributes-options :as ao]
    [com.fulcrologic.rad.authorization :as auth]
    [com.fulcrologic.rad.middleware.save-middleware :as save-middleware]
    [com.fulcrologic.rad.blob :as blob]
    [taoensso.timbre :as log]
    [com.fulcrologic.fulcro.ui-state-machines :as uism]
    [com.fulcrologic.rad.type-support.date-time :as datetime]))

(defsc AccountQuery [_ _]
       {:query [:account/id :account/name :account/email]
        :ident :account/id})

(defattr id :account/id :uuid
         {ao/identity? true
          ao/schema :production})

(defattr email :account/email :string
         {ao/identities #{:account/id}
          ao/required? true
          ao/schema :production
          :com.fulcrologic.rad.database-adapters.datomic/attribute-schema
          {:db/unique :db.unique/value}})

(defattr active? :account/active? :boolean
         {ao/identities #{:account/id}
          ao/schema :production
          fo/default-value true})

(defattr password :password/hashed-value :string
         {ao/required? true
          ao/identities #{:account/id}
          ::auth/permissions (fn [_] #{})
          ao/schema :production})

(defattr password-salt :password/salt :string
         {::auth/permissions (fn [_] #{})
          ao/schema :production
          ao/identities #{:account/id}
          ao/required? true})

(defattr password-iterations :password/iterations :int
         {ao/identities  #{:account/id}
          ::auth/permissions (fn [_] #{})
          ao/schema :production
          ao/required? true})

(defattr name :account/name :string
         {fo/field-label "Name"
          ao/identities  #{:account/id}
          ao/schema      :production
          ao/required?   true})

(blob/defblobattr avatar :account/avatar :avatar-images :remote
                  {ao/identities  #{:account/id}
                   ao/schema      :production
                   fo/field-style ::blob/image-upload})

(defattr files :account/files :ref
         {ao/target      :file/id
          ao/cardinality :many
          ao/identities  #{:account/id}
          ao/schema      :production})

(defattr all-accounts :account/all-accounts :ref
         {ao/target     :account/id
          ao/pc-output  [{:account/all-accounts [:account/id]}]
          ao/pc-resolve (fn [{:keys [query-params] :as env} _]
                          #?(:clj
                             {:account/all-accounts (queries/get-all-accounts env query-params)}))})

(defattr account-invoices :account/invoices :ref
         {ao/target     :account/id
          ao/pc-output  [{:account/invoices [:invoice/id]}]
          ao/pc-resolve (fn [{:keys [query-params] :as env} _]
                          #?(:clj
                             {:account/invoices (queries/get-customer-invoices env query-params)}))})


#?(:clj
   (defmutation sendemail [env {:account/keys [email]}]
                {::pc/params #{:account/email}
                 ::pc/output [:account/email :response]}
                (let [send (sendmail email)
                      response (get send :status)]
                (if (= response 202)
                  {:account/email email
                   :response "Done"}
                  {:response "Error"})))

   :cljs
   (defmutation sendemail [{:account/keys [email]}]
     (ok-action [{:keys [env result]}]
                    (let [response (get-in result [:body `sendemail])
                          status (get response :response)]
                      (if (= status "Done")
                        (js/alert "Email Sent Successfully")
                        (js/alert "Error"))))
     (remote [env] true)))


#?(:clj
   (defmutation logout [env _]
                {}
                (exauth/logout! env))
   :cljs
   (defmutation logout [_]
     (remote [env]
             true)))

#?(:clj
   (defmutation login [env params]
                {::pc/params #{:username :password}}
                (exauth/login! env params))
   :cljs
   (defmutation login [params]
     (ok-action [{:keys [app state]}]
                (let [{:time-zone/keys [zone-id]
                       ::auth/keys     [status]} (some-> state deref ::auth/authorization :local)]
                  (if (= status :success)
                    (do
                      (auth/logged-in! app :local))
                    (auth/failed! app :local))))
     (error-action [{:keys [app]}]
                   (log/error "Login failed.")
                   (auth/failed! app :local))
     (remote [env]
             (m/returning env auth/Session))))

(declare disable-account)

#?(:clj
   (defmutation check-session [env _]
                {}
                (exauth/check-session! env))
   :cljs
   (defmutation check-session [_]
     (ok-action [{:keys [state app result]}]
                (let [{::auth/keys [provider]} (get-in result [:body `check-session])
                      {:time-zone/keys [zone-id]
                       ::auth/keys     [status]} (some-> state deref ::auth/authorization (get provider))]
                  (uism/trigger! app auth/machine-id :event/session-checked {:provider provider})))
     (remote [env]
             (m/returning env auth/Session))))


#?(:clj
   (defmutation set-account-active [env {:account/keys [id active?]}]
                {::pc/params #{:account/id}
                 ::pc/output [:account/id]}
                (form/save-form* env {::form/id        id
                                      ::form/master-pk :account/id
                                      ::form/delta     {[:account/id id] {:account/active? {:before (not active?) :after (boolean active?)}}}}))
   :cljs
   (defmutation set-account-active [{:account/keys [id active?]}]
     (action [{:keys [state]}]
             (swap! state assoc-in [:account/id id :account/active?] active?))
     (remote [_] true)))

(def attributes [id name email password password-iterations password-salt active?
                 all-accounts avatar files account-invoices])

#?(:clj
   (def resolvers [sendemail login logout set-account-active check-session]))
