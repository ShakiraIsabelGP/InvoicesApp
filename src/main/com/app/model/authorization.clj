(ns com.app.model.authorization
  (:require
    [com.app.components.dbqueries :as queries]
    [com.fulcrologic.fulcro.server.api-middleware :as fmw]
    [com.fulcrologic.rad.attributes :as attr]
    [com.fulcrologic.rad.authorization :as auth]
    [taoensso.encore :as enc]
    [taoensso.timbre :as log]))

(defn login!
  [env {:keys [username password]}]
  (enc/if-let [{:account/keys   [name]
                :password/keys  [hashed-value salt iterations]}
               (log/spy :info (queries/get-login-info env username))
               current-hashed-value (attr/encrypt password salt iterations)]
              (if (= hashed-value current-hashed-value)
                (do
                  (log/info "Login for" username)
                  (let [s {::auth/provider    :local
                           ::auth/status      :success
                           :account/name      name}]
                    (fmw/augment-response s (fn [resp]
                                              (let [current-session (-> env :ring/request :session)]
                                                (assoc resp :session (vary-meta (merge current-session s) assoc :recreate true)))))))
                (do
                  (log/error "Login failure for" username)
                  {::auth/provider :local
                   ::auth/status   :failed}))
              (do
                (log/fatal "Login cannot find user" username)
                {::auth/provider :local
                 ::auth/status   :failed})))

(defn logout!
  [env]
  (fmw/augment-response {} (fn [resp] (assoc resp :session (vary-meta (select-keys (-> env :ring/request :session) [:ring.middleware.anti-forgery/anti-forgery-token]) assoc :recreate true)))))

(defn check-session! [env]
  (log/info "Checking for existing session")
  (or
    (some-> env :ring/request :session)
    {::auth/provider :local
     ::auth/status   :not-logged-in}))