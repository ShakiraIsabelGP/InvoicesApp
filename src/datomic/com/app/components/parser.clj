(ns com.app.components.parser
  (:require
    [com.app.components.auto-resolvers :refer [automatic-resolvers]]
    [com.app.components.blob-store :as bs]
    [com.app.components.config :refer [config]]
    [com.app.components.datomic :refer [datomic-connections]]
    [com.app.components.delete-middleware :as delete]
    [com.app.components.save-middleware :as save]
    [com.app.model :refer [all-attributes]]
    [com.app.model.account :as account]
    [com.app.model.invoice :as invoice]
    [com.fulcrologic.rad.attributes :as attr]
    [com.fulcrologic.rad.blob :as blob]
    [com.fulcrologic.rad.database-adapters.datomic-cloud :as datomic]
    [com.fulcrologic.rad.form :as form]
    [com.fulcrologic.rad.pathom :as pathom]
    [mount.core :refer [defstate]]
    [com.wsscode.pathom.core :as p]
    [com.fulcrologic.rad.type-support.date-time :as dt]
    [com.wsscode.pathom.connect :as pc]))

(pc/defresolver index-explorer [{::pc/keys [indexes]} _]
                {::pc/input  #{:com.wsscode.pathom.viz.index-explorer/id}
                 ::pc/output [:com.wsscode.pathom.viz.index-explorer/index]}
                {:com.wsscode.pathom.viz.index-explorer/index
                 (p/transduce-maps
                   (remove (comp #{::pc/resolve ::pc/mutate} key))
                   indexes)})

(defstate parser
          :start
          (pathom/new-parser config
                             [(attr/pathom-plugin all-attributes)
                              (form/pathom-plugin save/middleware delete/middleware)
                              (datomic/pathom-plugin (fn [env] {:production (:main datomic-connections)}))
                              (blob/pathom-plugin bs/temporary-blob-store {:files         bs/file-blob-store
                                                                           :avatar-images bs/image-blob-store})
                              {::p/wrap-parser
                               (fn transform-parser-out-plugin-external [parser]
                                 (fn transform-parser-out-plugin-internal [env tx]
                                   (dt/with-timezone "America/Bogota"
                                                     (if (and (map? env) (seq tx))
                                                       (parser env tx)
                                                       {}))))}]
                             [automatic-resolvers
                              form/resolvers
                              (blob/resolvers all-attributes)
                              account/resolvers
                              invoice/resolvers
                              index-explorer]))
