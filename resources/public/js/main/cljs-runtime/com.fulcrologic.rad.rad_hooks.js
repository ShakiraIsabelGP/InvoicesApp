goog.provide('com.fulcrologic.rad.rad_hooks');
/**
 * React hook. Use a RAD form.
 * 
 * This hook:
 * 
 * * Attaches the form to the parent component's lifecycle. The form will only exist as long as the parent is mounted
 *   on the DOM.
 * * Creates a form state machine.
 * * Runs the proper sequence for create/edit (based on the id you give. A tempid will cause a create, otherwise edit).
 * * Returns a map with:
 * 
 * `:form-factory` - A react factory for rendering the form
 * `:form-props` - The current value of the form. Must be passed to `form-factory`.
 * `:form-state` - The state of the state machine. See the form state machine definition for possible values.
 * 
 *   The component that calls this hook will trigger the form to start (load if it is a real ID, and do NEW if `id` is
 *   a tempid). The form machine will run until the containing component (that calls this) is unmounted from the DOM (not
 *   just hidden).
 * 
 *   The save-completion-mutation will be invoked with `:ident final-ident`, where `final-ident` is the potentially remapped
 *   (permanent) ID of the entity that was saved.
 * 
 *   The `cancel-mutation` is invoked if the user cancels out of the form and has made no changes.
 * 
 *   The options can include (extra) parameters that will be passed to the mutations when called (in addition to the
 *   auto-included `final-ident`).
 * 
 *   If you leave the form mounted, then it is possible for you to see multiple saves, BUT, if the cancel mutation is called
 *   then the form machine WILL exit, so the form will stop working and you really should unmount it from the DOM.
 *   
 */
com.fulcrologic.rad.rad_hooks.use_form = (function com$fulcrologic$rad$rad_hooks$use_form(var_args){
var G__92924 = arguments.length;
switch (G__92924) {
case 5:
return com.fulcrologic.rad.rad_hooks.use_form.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.fulcrologic.rad.rad_hooks.use_form.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.rad_hooks.use_form.cljs$core$IFn$_invoke$arity$5 = (function (app_ish,Form,id,save_complete_mutation,cancel_mutation){
return com.fulcrologic.rad.rad_hooks.use_form.cljs$core$IFn$_invoke$arity$6(app_ish,Form,id,save_complete_mutation,cancel_mutation,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.rad_hooks.use_form.cljs$core$IFn$_invoke$arity$6 = (function (app_ish,Form,id,save_complete_mutation,cancel_mutation,p__92925){
var map__92926 = p__92925;
var map__92926__$1 = cljs.core.__destructure_map(map__92926);
var save_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92926__$1,new cljs.core.Keyword(null,"save-mutation-params","save-mutation-params",2087116247));
var cancel_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92926__$1,new cljs.core.Keyword(null,"cancel-mutation-params","cancel-mutation-params",-1222312325));
var container_id = com.fulcrologic.fulcro.react.hooks.use_generated_id();
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var id_key = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.form_options.id.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_options(Form)));
var machine = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(Form,com.fulcrologic.rad.form_options.machine) : com.fulcrologic.fulcro.components.component_options.call(null,Form,com.fulcrologic.rad.form_options.machine));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.form.form_machine;
}
})();
var form_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key,id], null);
var vec__92927 = com.fulcrologic.fulcro.react.hooks.use_state((function (){
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","form","ui/form",-1624098675),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(Form)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","form","ui/form",-1624098675),cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,id])], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rad-hooks","id","com.fulcrologic.rad.rad-hooks/id",-1763747371),container_id], null);
})], null));
}));
var container_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92927,(0),null);
var container_props = com.fulcrologic.fulcro.react.hooks.use_component(app,container_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initialize","initialize",609952913),true,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180),false], null));
var vec__92930 = com.fulcrologic.fulcro.react.hooks.use_state((function (){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(Form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),id_key], null));
}));
var form_factory = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92930,(0),null);
var active_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(container_props,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","form","ui/form",-1624098675),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),form_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193)], null));
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app,machine,form_ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(form_ident,Form)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"embedded?","embedded?",298781012),true,new cljs.core.Keyword(null,"on-saved","on-saved",1116356889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__92933 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([save_mutation_params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ident","ident",-742346),form_ident], null)], 0));
return (save_complete_mutation.cljs$core$IFn$_invoke$arity$1 ? save_complete_mutation.cljs$core$IFn$_invoke$arity$1(G__92933) : save_complete_mutation.call(null,G__92933));
})()], null),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__92934 = (function (){var or__5045__auto__ = cancel_mutation_params;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ident","ident",-742346),form_ident], null);
}
})();
return (cancel_mutation.cljs$core$IFn$_invoke$arity$1 ? cancel_mutation.cljs$core$IFn$_invoke$arity$1(G__92934) : cancel_mutation.call(null,G__92934));
})()], null),new cljs.core.Keyword("com.fulcrologic.rad.form","create?","com.fulcrologic.rad.form/create?",-1691842893),com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(id)], null));
})();

return (function (){
return com.fulcrologic.fulcro.ui_state_machines.remove_uism_BANG_(app,form_ident);
});
}),[]);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-factory","form-factory",132138366),(function (props){
if(((cljs.core.map_QMARK_(props)) && (cljs.core.contains_QMARK_(props,id_key)))){
return (form_factory.cljs$core$IFn$_invoke$arity$1 ? form_factory.cljs$core$IFn$_invoke$arity$1(props) : form_factory.call(null,props));
} else {
return null;
}
}),new cljs.core.Keyword(null,"form-props","form-props",202171605),cljs.core.get.cljs$core$IFn$_invoke$arity$2(container_props,new cljs.core.Keyword("ui","form","ui/form",-1624098675)),new cljs.core.Keyword(null,"form-state","form-state",-1897375037),active_state], null);
}));

(com.fulcrologic.rad.rad_hooks.use_form.cljs$lang$maxFixedArity = 6);

/**
 * React hook. Use a RAD Report.
 */
com.fulcrologic.rad.rad_hooks.use_report = (function com$fulcrologic$rad$rad_hooks$use_report(var_args){
var G__92936 = arguments.length;
switch (G__92936) {
case 2:
return com.fulcrologic.rad.rad_hooks.use_report.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.rad_hooks.use_report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.rad_hooks.use_report.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,Report){
return com.fulcrologic.rad.rad_hooks.use_report.cljs$core$IFn$_invoke$arity$3(app_ish,Report,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.rad_hooks.use_report.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,Report,p__92937){
var map__92938 = p__92937;
var map__92938__$1 = cljs.core.__destructure_map(map__92938);
var options = map__92938__$1;
var keep_existing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92938__$1,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180));
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var vec__92939 = (function (){var G__92945 = Report;
var G__92946 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92945,G__92946) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92945,G__92946));
})();
var id_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92939,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92939,(1),null);
var report_ident = vec__92939;
var report_props = com.fulcrologic.fulcro.react.hooks.use_component(app,Report,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),false], null));
var vec__92942 = com.fulcrologic.fulcro.react.hooks.use_state((function (){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(Report,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),id_key], null));
}));
var report_factory = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92942,(0),null);
var active_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report_props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),report_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193)], null));
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
return com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3(app,Report,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"embedded?","embedded?",298781012),true));
})();

return (function (){
if(cljs.core.truth_(keep_existing_QMARK_)){
return null;
} else {
return com.fulcrologic.fulcro.ui_state_machines.remove_uism_BANG_(app,report_ident);
}
});
}),[]);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report-factory","report-factory",-1077244477),(function (props){
if(cljs.core.map_QMARK_(props)){
return (report_factory.cljs$core$IFn$_invoke$arity$1 ? report_factory.cljs$core$IFn$_invoke$arity$1(props) : report_factory.call(null,props));
} else {
return null;
}
}),new cljs.core.Keyword(null,"report-props","report-props",1417366804),report_props,new cljs.core.Keyword(null,"report-state","report-state",-417306686),active_state], null);
}));

(com.fulcrologic.rad.rad_hooks.use_report.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=com.fulcrologic.rad.rad_hooks.js.map
