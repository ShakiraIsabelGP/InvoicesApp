(ns development
  (:require
    [clojure.tools.namespace.repl :as tools-ns :refer [set-refresh-dirs]]
    [com.app.components.datomic :refer [datomic-connections]]
    [com.app.components.ring-middleware]
    [com.app.components.server]
    [com.app.model.seed :as seed]
    [com.fulcrologic.rad.ids :refer [new-uuid]]
    [datomic.client.api :as d]
    [mount.core :as mount]
    [taoensso.timbre :as log]))

(set-refresh-dirs "src/datomic" "src/dev" "src/main")

(comment
  (let [db (d/db (:main datomic-connections))]
    (d/pull db '[*] [:account/id (new-uuid 1)])))

(defn seed! []
  (let [connection (:main datomic-connections)]
    (when connection
      (log/info "SEEDING data.")
      (d/transact connection {:tx-data
                              [(seed/new-account (new-uuid 2) "Mom" "marisolparraalzate2703@gmail.com" "password")
                               (seed/new-account (new-uuid 1) "Shakira" "shakira@example.com" "password")
                               (seed/new-item (new-uuid 201) "Screwdriver" 4.99)]}))))

(defn start []
  (mount/start-with-args {:config "config/dev.edn"})
  (seed!)
  :ok)

(defn cli-start "Start & seed the app from the CLI using `clojure -X ..`" [_] (start))

(defn stop
  "Stop the server."
  []
  (mount/stop))

(def go start)

(defn restart
  "Stop, refresh, and restart the server."
  []
  (stop)
  (tools-ns/refresh :after 'development/start))

(def reset #'restart)


