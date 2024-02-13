(ns com.app.ui.invoice-forms
  (:require
    [clojure.string :as str]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.algorithms.tempid :as tempid]
    [com.fulcrologic.rad.picker-options :as po]
    [com.fulcrologic.rad.type-support.decimal :as math]
    [com.app.model :as model]
    [com.app.model.account :as account :refer [AccountQuery]]
    [com.app.model.invoice :as invoice]
    [com.fulcrologic.fulcro.algorithms.form-state :as fs]
    [com.fulcrologic.rad.picker-options :as picker-options]
    [com.app.ui.account-forms :refer [BriefAccountForm AccountForm]]
    [com.fulcrologic.rad.form :as form]
    [com.fulcrologic.rad.form-options :as fo]
    [com.fulcrologic.rad.routing :as rroute]
    [com.fulcrologic.rad.type-support.date-time :as datetime]
    [com.fulcrologic.rad.report :as report]
    [com.fulcrologic.rad.type-support.date-time :as dt]
    [com.fulcrologic.rad.report-options :as ro]
    [com.app.model.line-item :as line-item]
    [com.app.ui.inventory :as item-forms]
    [com.fulcrologic.rad.type-support.decimal :as math]
    [com.fulcrologic.fulcro.ui-state-machines :as uism]
    [com.fulcrologic.fulcro.algorithms.normalized-state :as fns]
    #?(:clj  [com.fulcrologic.fulcro.dom-server :as dom :refer [div label input]]
       :cljs [com.fulcrologic.fulcro.dom :as dom :refer [div label input]])))


(defn add-subtotal* [{:line-item/keys [quantity quoted-price] :as item}]
  (assoc item :line-item/subtotal (math/* quantity quoted-price)))

(form/defsc-form LineItemForm [this props]
                 {fo/id line-item/id
                  fo/attributes [line-item/item line-item/quantity line-item/quoted-price line-item/subtotal]
                  fo/route-prefix "line-item"
                  fo/title "Line Items"
                  fo/layout [[:line-item/item :line-item/quantity :line-item/quoted-price :line-item/subtotal]]
                  fo/triggers {:derive-fields (fn [new-form-tree] (add-subtotal* new-form-tree))
                               :on-change (fn [{::uism/keys [state-map fulcro-app] :as uism-env} form-ident k old-value new-value]
                                            (case k :line-item/item
                                                    (let [item-price  (get-in state-map (conj new-value :item/price))
                                                          target-path (conj form-ident :line-item/quoted-price)]
                                                      (uism/apply-action uism-env assoc-in target-path item-price)) uism-env))}
                  fo/field-styles  {:line-item/item :pick-one}
                  fo/field-options {:line-item/item {::picker-options/query-key :item/all-items
                                                     ::picker-options/query-component item-forms/ItemForm
                                                     ::picker-options/options-xform (fn [_ options]
                                                                                      (mapv (fn [{:item/keys [id name price]}]
                                                                                              {:text (str name " - " (math/numeric->currency-str price)) :value [:item/id id]})
                                                                                            (sort-by :item/name options)))}}})
(def tax-rate 0.19)
(defn sum-subtotals* [{:invoice/keys [line-items] :as invoice}]
  (assoc invoice :invoice/total
                 (reduce
                   (fn [t {:line-item/keys [subtotal]}]
                     (math/+ t subtotal (math/* subtotal tax-rate)))
                   (math/zero)
                   line-items)))



(form/defsc-form InvoiceForm [this props]
                 {fo/id             invoice/id
                  fo/attributes     [invoice/customer invoice/date invoice/line-items invoice/total]
                  fo/default-values {:invoice/date (datetime/now)}
                  fo/layout         [[:invoice/customer :invoice/date]
                                     [:invoice/line-items]
                                     [:invoice/total]]
                  fo/field-styles   {:invoice/customer :pick-one}
                  fo/field-options  {:invoice/customer {po/form            BriefAccountForm
                                                        fo/title           (fn [i {:account/keys [id]}]
                                                                             (if (tempid/tempid? id)
                                                                               "New Account"
                                                                               "Edit Account"))
                                                        po/quick-create    (fn [v] {:account/id        (tempid/tempid)
                                                                                    :account/email     (str/lower-case (str v "@example.com"))
                                                                                    :account/active?   true
                                                                                    :account/name      v})
                                                        po/allow-create?   true
                                                        po/allow-edit?     true
                                                        po/query-key       :account/all-accounts
                                                        po/query-component AccountQuery
                                                        po/options-xform   (fn [_ options] (mapv
                                                                                             (fn [{:account/keys [id name email]}]
                                                                                               {:text (str name ", " email) :value [:account/id id]})
                                                                                             (sort-by :account/name options)))
                                                        po/cache-time-ms   30000}}
                  fo/subforms       {:invoice/line-items {fo/ui          LineItemForm
                                                          fo/can-delete? (fn [_ _] true)
                                                          fo/can-add?    (fn [_ _] true)}}
                  fo/triggers       {:derive-fields (fn [new-form-tree] (sum-subtotals* new-form-tree))}
                  fo/route-prefix   "invoice"
                  fo/title          (fn [_ {:invoice/keys [id]}]
                                      (if (tempid/tempid? id)
                                        (str "New Invoice")
                                        (str "Invoice " id)))})

(def AccountInvoices
  (report/report ::AccountInvoices
                 {ro/title            "Customer Invoices"
                  ro/source-attribute :account/invoices
                  ro/row-pk           invoice/id
                  ro/columns          [invoice/id invoice/date invoice/total]
                  ro/column-headings  {:invoice/id "Invoice Number"}

                  ro/form-links       {:invoice/id InvoiceForm}
                  ro/controls         {:account/id {:type   :uuid
                                                    :local? true
                                                    :label  "Account"}}
                  ro/run-on-mount?    true
                  ro/route            "account-invoices"}))



(report/defsc-report InvoiceList [this props]
                     {ro/title               "All Invoices"
                      ro/source-attribute    :invoice/all-invoices
                      ro/row-pk              invoice/id
                      ro/columns             [invoice/id invoice/date account/email account/name invoice/total]

                      ro/row-query-inclusion [:account/id]

                      ro/column-headings     {:invoice/id   "Invoice Number"
                                              :account/name "Customer Name"
                                              :account/email "Email Name"}
                      ro/initial-sort-params {:sort-by          :invoice/date
                                              :sortable-columns #{:invoice/date}
                                              :ascending?       true}

                      ro/controls            {::new-invoice {:label  "New Invoice"
                                                             :type   :button
                                                             :action (fn [this] (form/create! this InvoiceForm))}
                                              ::new-account {:label  "New Account"
                                                             :type   :button
                                                             :action (fn [this] (form/create! this AccountForm))}
                                              :start-date {:type          :instant
                                                           :style         :starting-date
                                                           :default-value (fn [app] #inst "2020-01-01T12:00")
                                                           :label         "From"}
                                              :end-date   {:type          :instant
                                                           :style         :ending-date
                                                           :default-value (fn [app] (dt/end-of-year))
                                                           :label         "To"}}

                      ro/control-layout      {:action-buttons [::new-invoice ::new-account]
                                              :inputs         [[:start-date :end-date]]}

                      ro/row-actions         [{:label  "Account Invoices"
                                               :action (fn [this {:account/keys [id] :as row}]
                                                         (rroute/route-to! this AccountInvoices {:account/id id}))}
                                              {:label  "Delete"
                                               :action (fn [this {:invoice/keys [id] :as row}] (form/delete! this :invoice/id id))}
                                              {:label  "Edit"
                                               :action (fn [this {:invoice/keys [id] :as row}] (form/edit! this InvoiceForm id))}
                                              {:label     "Send Invoice"
                                               :action    (fn [report-instance {:account/keys [email]}]
                                                            #?(:cljs (comp/transact! report-instance [(account/sendemail {:account/email email})])))}]

                      ro/form-links          {:invoice/total InvoiceForm
                                              :account/name  AccountForm}

                      ro/run-on-mount?       true
                      ro/route               "invoices"})
