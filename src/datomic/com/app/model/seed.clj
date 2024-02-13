(ns com.app.model.seed
  (:require
    [com.fulcrologic.rad.type-support.decimal :as math]
    [com.fulcrologic.rad.ids :refer [new-uuid]]
    [com.fulcrologic.rad.attributes :as attr]))

(defn new-account
  [id name email password & {:as extras}]
  (let [salt (attr/gen-salt)]
    (merge
      {:db/id                 name
       :account/id            id
       :account/email         email
       :account/name          name
       :password/hashed-value (attr/encrypt password salt 100)
       :password/salt         salt
       :password/iterations   100
       :account/active?       true}
      extras)))


(defn new-item
  [id name price & {:as extras}]
  (merge
    {:db/id      name
     :item/id    id
     :item/name  name
     :item/price (math/numeric price)}
    extras))