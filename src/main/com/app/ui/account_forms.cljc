(ns com.app.ui.account-forms
  (:require
    #?(:clj  [com.fulcrologic.fulcro.dom-server :as dom :refer [div label input]]
       :cljs [com.fulcrologic.fulcro.dom :as dom :refer [div label input]])
    [clojure.string :as str]
    [com.app.model.account :as account]
    [com.app.ui.file-forms :refer [FileForm]]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.rad.blob :as blob]
    [com.fulcrologic.rad.control :as control]
    [com.fulcrologic.rad.form :as form]
    [com.fulcrologic.rad.form-options :as fo]
    [com.fulcrologic.rad.report :as report]
    [com.fulcrologic.rad.report-options :as ro]
    [com.fulcrologic.rad.semantic-ui-options :as suo]))


(form/defsc-form AccountForm [this props]
                 {fo/id              account/id
                  fo/query-inclusion [(blob/status-key :account/avatar)
                                      (blob/url-key :account/avatar)
                                      (blob/progress-key :account/avatar)]
                  fo/attributes      [account/avatar
                                      account/name
                                      account/email
                                      account/active?
                                      account/files]
                  fo/default-values  {:account/active? true}
                  fo/route-prefix    "account"
                  fo/title           "Edit Account"
                  fo/subforms {:account/files {fo/ui FileForm
                                               fo/title "Files"
                                               fo/can-delete? (fn [_ _] true)
                                               fo/layout-styles {:ref-container :file}
                                               ::form/added-via-upload? true}}})

(form/defsc-form BriefAccountForm [this props]
                 {fo/id             account/id
                  fo/controls       {}
                  fo/attributes     [account/name
                                     account/email
                                     account/active?]
                  fo/default-values {:account/active? true}})

(report/defsc-report AccountList [this props]
                     {ro/title               "All Accounts"
                      suo/rendering-options  {suo/action-button-render      (fn [this {:keys [key onClick label]}]
                                                                              (when (= key ::new-account)
                                                                                (dom/button :.ui.tiny.basic.button {:onClick onClick}
                                                                                            (dom/i {:className "icon user"})
                                                                                            label)))
                                              suo/body-class                ""
                                              suo/controls-class            ""
                                              suo/layout-class              ""
                                              suo/report-table-class        "ui very compact celled selectable table"
                                              suo/report-table-header-class (fn [this i] (case i
                                                                                           0 ""
                                                                                           1 "center aligned"
                                                                                           "collapsing"))
                                              suo/report-table-cell-class   (fn [this i] (case i
                                                                                           0 ""
                                                                                           1 "center aligned"
                                                                                           "collapsing"))}
                      ro/form-links          {account/name AccountForm}
                      ro/column-formatters   {:account/active? (fn [this v] (if v "Yes" "No"))}
                      ro/column-headings     {:account/name "Account Name"}
                      ro/columns             [account/name account/active?]
                      ro/row-pk              account/id
                      ro/source-attribute    :account/all-accounts
                      ro/row-visible?        (fn [{::keys [filter-name]} {:account/keys [name]}]
                                               (let [nm     (some-> name (str/lower-case))
                                                     target (some-> filter-name (str/trim) (str/lower-case))]
                                                 (or
                                                   (nil? target)
                                                   (empty? target)
                                                   (and nm (str/includes? nm target)))))
                      ro/run-on-mount?       true

                      ro/initial-sort-params {:sort-by          :account/name
                                              :ascending?       false
                                              :sortable-columns #{:account/name}}

                      ro/controls            {::new-account   {:type   :button
                                                               :local? true
                                                               :label  "New Account"
                                                               :action (fn [this _] (form/create! this AccountForm))}
                                              ::search!       {:type   :button
                                                               :local? true
                                                               :label  "Filter"
                                                               :class  "ui basic compact mini red button"
                                                               :action (fn [this _] (report/filter-rows! this))}
                                              ::filter-name   {:type        :string
                                                               :local?      true
                                                               :placeholder "Type a partial name and press enter."
                                                               :onChange    (fn [this _] (report/filter-rows! this))}
                                              :show-inactive? {:type          :boolean
                                                               :local?        true
                                                               :style         :toggle
                                                               :default-value false
                                                               :onChange      (fn [this _] (control/run! this))
                                                               :label         "Show Inactive Accounts?"}
                                              }

                      ro/control-layout      {:action-buttons [::new-account]
                                              :inputs         [[::filter-name ::search! :_]
                                                               [:show-inactive?]]}

                      ro/row-actions         [{:label     "Enable"
                                               :action    (fn [report-instance {:account/keys [id]}]
                                                            #?(:cljs
                                                               (comp/transact! report-instance [(account/set-account-active {:account/id      id
                                                                                                                             :account/active? true})])))
                                               :disabled? (fn [_ row-props] (:account/active? row-props))}
                                              {:label     "Disable"
                                               :action    (fn [report-instance {:account/keys [id]}]
                                                            #?(:cljs
                                                               (comp/transact! report-instance [(account/set-account-active {:account/id      id
                                                                                                                             :account/active? false})])))
                                               :disabled? (fn [_ row-props] (not (:account/active? row-props)))}
                                              {:label  "Delete"
                                               :action (fn [this {:account/keys [id] :as row}] (form/delete! this :account/id id))}
                                              {:label  "Edit"
                                               :action (fn [this {:account/keys [id] :as row}] (form/edit! this AccountForm id))}]

                      ro/route               "accounts"})
