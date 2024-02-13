(ns com.app.model
  (:require
    [com.app.model.account :as account]
    [com.app.model.item :as item]
    [com.app.model.file :as file]
    [com.app.model.invoice :as invoice]
    [com.app.model.line-item :as line-item]
    [com.fulcrologic.rad.attributes :as attr]))

(def all-attributes (vec (concat
                           account/attributes
                           item/attributes
                           line-item/attributes
                           invoice/attributes
                           file/attributes
                           )))

(def all-attribute-validator (attr/make-attribute-validator all-attributes))
