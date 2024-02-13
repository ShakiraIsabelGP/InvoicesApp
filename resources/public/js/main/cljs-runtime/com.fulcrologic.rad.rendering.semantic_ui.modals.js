goog.provide('com.fulcrologic.rad.rendering.semantic_ui.modals');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.modals !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.modals.FormModal !== 'undefined')){
} else {
com.fulcrologic.rad.rendering.semantic_ui.modals.FormModal = (function com$fulcrologic$rad$rendering$semantic_ui$modals$FormModal(js_props__50841__auto__){
var render__50842__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.modals.FormModal) : com.fulcrologic.fulcro.components.component_options.call(null,com.fulcrologic.rad.rendering.semantic_ui.modals.FormModal)));
var vec__92949 = com.fulcrologic.fulcro.components.use_fulcro(js_props__50841__auto__,com.fulcrologic.rad.rendering.semantic_ui.modals.FormModal);
var this__50843__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92949,(0),null);
var props__50844__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92949,(1),null);
return (render__50842__auto__.cljs$core$IFn$_invoke$arity$2 ? render__50842__auto__.cljs$core$IFn$_invoke$arity$2(this__50843__auto__,props__50844__auto__) : render__50842__auto__.call(null,this__50843__auto__,props__50844__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(com.fulcrologic.rad.rendering.semantic_ui.modals.FormModal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.modals","FormModal","com.fulcrologic.rad.rendering.semantic-ui.modals/FormModal",1094007916),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$modals$render_FormModal(this$,p__92952){
var map__92953 = p__92952;
var map__92953__$1 = cljs.core.__destructure_map(map__92953);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92953__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var Form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92953__$1,new cljs.core.Keyword(null,"Form","Form",-626910483));
var save_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92953__$1,new cljs.core.Keyword(null,"save-mutation","save-mutation",-1831097868));
var cancel_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92953__$1,new cljs.core.Keyword(null,"cancel-mutation","cancel-mutation",-504988973));
var save_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92953__$1,new cljs.core.Keyword(null,"save-params","save-params",-537403168));
var cancel_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92953__$1,new cljs.core.Keyword(null,"cancel-params","cancel-params",-295084512));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__92954 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__92955 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__92956 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__92957 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__92960 = this$;
var G__92961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__92960,G__92961) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__92960,G__92961));
}
})();
var _STAR_shared_STAR__temp_val__92958 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__92962 = this$;
var G__92963 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__92962,G__92963) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__92962,G__92963));
}
})());
var _STAR_parent_STAR__temp_val__92959 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__92957);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__92958);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__92959);

try{return com.fulcrologic.semantic_ui.modules.modal.ui_modal.ui_modal(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null),com.fulcrologic.semantic_ui.modules.modal.ui_modal_content.ui_modal_content(cljs.core.PersistentArrayMap.EMPTY,(function (){var vec__92964 = com.fulcrologic.fulcro.react.hooks.use_state((function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
}
})());
var generated_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92964,(0),null);
var map__92967 = com.fulcrologic.rad.rad_hooks.use_form.cljs$core$IFn$_invoke$arity$6(this$,Form,generated_id,save_mutation,cancel_mutation,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-mutation-params","save-mutation-params",2087116247),save_params,new cljs.core.Keyword(null,"cancel-mutation-params","cancel-mutation-params",-1222312325),cancel_params], null));
var map__92967__$1 = cljs.core.__destructure_map(map__92967);
var form_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92967__$1,new cljs.core.Keyword(null,"form-factory","form-factory",132138366));
var form_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92967__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92967__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
return (form_factory.cljs$core$IFn$_invoke$arity$1 ? form_factory.cljs$core$IFn$_invoke$arity$1(form_props) : form_factory.call(null,form_props));
})()));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__92956);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__92955);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__92954);
}}));
})], null));
/**
 * [{:keys [id Form save-mutation cancel-mutation save-params cancel-params]}]
 * 
 *  Render a form in a Semantic UI Modal.
 * 
 *  :Form - Required. The form to use for edit/create
 *  :save-mutation - Required. A *mutation* that will be transacted with the final ident if/when the form is saved.
 *  :cancel-mutation - Required. A *mutation* that will be transacted if the cancel button is pressed.
 *  :id - Optional. If not supplied will create a new instance. If supplied it will load and edit it.
 *  :save-params - Optional. Extra parameters (beyond the `:ident` that is auto-included) to pass to the save-mutation`
 *  :cancel-params - Optional. Parameters to pass to the cancel-mutation`
 * 
 *  Example usage:
 * 
 *  ```
 *  (defmutation saved [{:keys [ident]}]
 *    (action [{:keys [state]}]
 *      (swap! state update-in [:component/id ::Container] assoc
 *        :ui/selected-account ident
 *        :ui/open? false)))
 * 
 *  (defmutation cancel [_]
 *    (action [{:keys [state]}]
 *      (swap! state update-in [:component/id ::Container] assoc
 *        :ui/open? false)))
 * 
 *  (defsc Container [this {:ui/keys [open? selected-account edit-id] :as props}]
 *    {:query         [:ui/open? :ui/selected-account]
 *     :ident         (fn [] [:component/id ::Container])
 *     :initial-state {}}
 *    (comp/fragment {}
 *      (when open?
 *        (ui-form-modal {:Form            BriefAccountForm
 *                        :save-mutation   saved
 *                        :cancel-mutation cancel}))
 *      (dom/div (str selected-account))
 *      (dom/button {:onClick (fn []
 *                              (comp/transact! this [(m/set-props {:ui/open?   true})]))} "New")))
 * 
 *      ```
 *   
 */
com.fulcrologic.rad.rendering.semantic_ui.modals.ui_form_modal = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.modals.FormModal);

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.modals.js.map
