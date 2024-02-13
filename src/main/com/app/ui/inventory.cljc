(ns com.app.ui.inventory
  (:require
    [com.app.model.item :as item]
    [com.fulcrologic.rad.report :as report]
    [com.fulcrologic.rad.report-options :as ro]
    [com.fulcrologic.rad.picker-options :as picker-options]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.rad.control :as control]
    [com.fulcrologic.rad.form :as form]
    [clojure.string :as str]
    [com.fulcrologic.rad.form-options :as fo]
    [taoensso.timbre :as log]))

(def categories {:all-categories
                 {:category/services "Supplies & Services"
                  :category/tool     "Tool"
                  :category/food     "Food"
                  :category/item     "Item"
                  :category/other    "Other"}})

(form/defsc-form ItemForm [this props]
                 {fo/id            item/id
                  fo/attributes    [item/item-name
                                    item/category
                                    item/description
                                    item/in-stock
                                    item/price]
                  fo/route-prefix  "item"
                  fo/title         "Edit Item"})

(report/defsc-report InventoryReport [this props]
                     {ro/title               "Inventory Report"
                      ro/source-attribute    :item/all-items
                      ro/row-pk              item/id
                      ro/columns             [item/item-name item/category item/price item/in-stock]
                      ro/initial-sort-params {:sort-by          :item/name
                                              :ascending?       false
                                              :sortable-columns #{:item/name}}
                      ro/row-visible?        (fn [{::keys [filter-name]} {:item/keys [name]}]
                                               (let [nm     (some-> name (str/lower-case))
                                                     target (some-> filter-name (str/trim) (str/lower-case))]
                                                 (or
                                                   (nil? target)
                                                   (empty? target)
                                                   (and nm (str/includes? nm target)))))

                      ro/controls            {::new-item   {:type   :button
                                                               :local? true
                                                               :label  "New Item"
                                                               :action (fn [this _] (form/create! this ItemForm))}
                                              ::search!       {:type   :button
                                                               :local? true
                                                               :label  "Filter"
                                                               :class  "ui basic compact mini red button"
                                                               :action (fn [this _] (report/filter-rows! this))}
                                              ::filter-name   {:type        :string
                                                               :local?      true
                                                               :placeholder "Type a partial name and press enter."
                                                               :onChange    (fn [this _] (report/filter-rows! this))}}


                      ro/control-layout      {:action-buttons [::new-item]
                                              :inputs         [[::filter-name ::search! :_]]}

                      ro/row-actions         [{:label  "Delete"
                                               :action (fn [this {:item/keys [id] :as row}] (form/delete! this :item/id id))}
                                              {:label  "Edit"
                                               :action (fn [this {:item/keys [id] :as row}] (form/edit! this ItemForm id))}]

                      ro/form-links          {item/item-name ItemForm}

                      ro/links               {:category/label (fn [this {:category/keys [label]}]
                                                                (control/set-parameter! this ::category label)
                                                                (report/filter-rows! this))}

                      ro/run-on-mount?       true
                      ro/route               "item-inventory-report"})
