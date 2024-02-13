goog.provide('com.fulcrologic.rad.report');
/**
 * Returns the ident of a RAD report. The parameter can be a react instance, a class, or the registry key(word)
 * of the report.
 */
com.fulcrologic.rad.report.report_ident = (function com$fulcrologic$rad$report$report_ident(report_class_or_registry_key){
if((report_class_or_registry_key instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),report_class_or_registry_key], null);
} else {
var G__92490 = report_class_or_registry_key;
var G__92491 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92490,G__92491) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92490,G__92491));
}
});
com.fulcrologic.rad.report.default_render_layout = (function com$fulcrologic$rad$report$default_render_layout(report_instance){
var map__92492 = com.fulcrologic.fulcro.components.any__GT_app(report_instance);
var map__92492__$1 = cljs.core.__destructure_map(map__92492);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92492__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var layout_style = (function (){var or__5045__auto__ = (function (){var G__92493 = report_instance;
var G__92493__$1 = (((G__92493 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__92493) : com.fulcrologic.fulcro.components.component_options.call(null,G__92493)));
if((G__92493__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.report","layout-style","com.fulcrologic.rad.report/layout-style",-1879722909).cljs$core$IFn$_invoke$arity$1(G__92493__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var layout = (function (){var G__92494 = runtime_atom;
var G__92494__$1 = (((G__92494 == null))?null:cljs.core.deref(G__92494));
var G__92494__$2 = (((G__92494__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__92494__$1));
var G__92494__$3 = (((G__92494__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.report","style->layout","com.fulcrologic.rad.report/style->layout",-2137264366).cljs$core$IFn$_invoke$arity$1(G__92494__$2));
if((G__92494__$3 == null)){
return null;
} else {
return (layout_style.cljs$core$IFn$_invoke$arity$1 ? layout_style.cljs$core$IFn$_invoke$arity$1(G__92494__$3) : layout_style.call(null,G__92494__$3));
}
})();
if(cljs.core.truth_(layout)){
return (layout.cljs$core$IFn$_invoke$arity$1 ? layout.cljs$core$IFn$_invoke$arity$1(report_instance) : layout.call(null,report_instance));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No layout function found for form layout style",layout_style], null);
}),null)),null,1980306182,null);

return null;
}
});
com.fulcrologic.rad.report.render_layout = (function com$fulcrologic$rad$report$render_layout(report_instance){
return com.fulcrologic.rad.report_render.render_report.cljs$core$IFn$_invoke$arity$2(report_instance,com.fulcrologic.fulcro.raw.components.component_options(report_instance));
});
com.fulcrologic.rad.report.default_render_row = (function com$fulcrologic$rad$report$default_render_row(report_instance,row_class,row_props){
var map__92495 = com.fulcrologic.fulcro.components.any__GT_app(report_instance);
var map__92495__$1 = cljs.core.__destructure_map(map__92495);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92495__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var layout_style = (function (){var or__5045__auto__ = (function (){var G__92496 = report_instance;
var G__92496__$1 = (((G__92496 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__92496) : com.fulcrologic.fulcro.components.component_options.call(null,G__92496)));
if((G__92496__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.report","row-style","com.fulcrologic.rad.report/row-style",626537415).cljs$core$IFn$_invoke$arity$1(G__92496__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var render = (function (){var G__92497 = runtime_atom;
var G__92497__$1 = (((G__92497 == null))?null:cljs.core.deref(G__92497));
var G__92497__$2 = (((G__92497__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__92497__$1));
var G__92497__$3 = (((G__92497__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.report","row-style->row-layout","com.fulcrologic.rad.report/row-style->row-layout",-622996728).cljs$core$IFn$_invoke$arity$1(G__92497__$2));
if((G__92497__$3 == null)){
return null;
} else {
return (layout_style.cljs$core$IFn$_invoke$arity$1 ? layout_style.cljs$core$IFn$_invoke$arity$1(G__92497__$3) : layout_style.call(null,G__92497__$3));
}
})();
if(cljs.core.truth_(render)){
return (render.cljs$core$IFn$_invoke$arity$3 ? render.cljs$core$IFn$_invoke$arity$3(report_instance,row_class,row_props) : render.call(null,report_instance,row_class,row_props));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No layout function found for form layout style",layout_style], null);
}),null)),null,-816795558,null);

return null;
}
});
/**
 * Render a row of the report. Leverages report-render/render-row, whose default uses whatever UI plugin you have.
 */
com.fulcrologic.rad.report.render_row = (function com$fulcrologic$rad$report$render_row(report_instance,row_class,row_props){
return com.fulcrologic.rad.report_render.render_row.cljs$core$IFn$_invoke$arity$3(report_instance,com.fulcrologic.fulcro.raw.components.component_options(report_instance),row_props);
});
/**
 * Get the report controls renderer for the given report instance. Returns a `(fn [this])`.
 */
com.fulcrologic.rad.report.control_renderer = (function com$fulcrologic$rad$report$control_renderer(report_instance){
var map__92498 = com.fulcrologic.fulcro.components.any__GT_app(report_instance);
var map__92498__$1 = cljs.core.__destructure_map(map__92498);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92498__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var control_style = (function (){var or__5045__auto__ = (function (){var G__92499 = report_instance;
var G__92499__$1 = (((G__92499 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__92499) : com.fulcrologic.fulcro.components.component_options.call(null,G__92499)));
if((G__92499__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.report","control-style","com.fulcrologic.rad.report/control-style",1043015272).cljs$core$IFn$_invoke$arity$1(G__92499__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var control = (function (){var G__92500 = runtime_atom;
var G__92500__$1 = (((G__92500 == null))?null:cljs.core.deref(G__92500));
var G__92500__$2 = (((G__92500__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__92500__$1));
var G__92500__$3 = (((G__92500__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.report","control-style->control","com.fulcrologic.rad.report/control-style->control",-1096810425).cljs$core$IFn$_invoke$arity$1(G__92500__$2));
if((G__92500__$3 == null)){
return null;
} else {
return (control_style.cljs$core$IFn$_invoke$arity$1 ? control_style.cljs$core$IFn$_invoke$arity$1(G__92500__$3) : control_style.call(null,G__92500__$3));
}
})();
if(cljs.core.truth_(control)){
return control;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,96,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No layout function found for report control style",control_style], null);
}),null)),null,-1868991437,null);

return null;
}
});
/**
 * Renders just the control section of the report. See also `control-renderer` if you desire rendering the controls in
 * more than one place in the UI at once (e.g. top/bottom).
 */
com.fulcrologic.rad.report.render_controls = (function com$fulcrologic$rad$report$render_controls(report_instance){
return com.fulcrologic.rad.report_render.render_controls.cljs$core$IFn$_invoke$arity$2(report_instance,com.fulcrologic.fulcro.raw.components.component_options(report_instance));
});
/**
 * Returns a vector of maps describing what should be shown for column headings. Each
 * map may contain:
 * 
 * :label - The text label
 * :help - A string that could be shown as a longer description (e.g. on hover)
 * :column - The actual column attribute from the RAD model.
 * 
 */
com.fulcrologic.rad.report.column_heading_descriptors = (function com$fulcrologic$rad$report$column_heading_descriptors(report_instance,report_options){
var map__92501 = report_options;
var map__92501__$1 = cljs.core.__destructure_map(map__92501);
var report_column_headings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92501__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-headings","com.fulcrologic.rad.report/column-headings",1666271609));
var report_column_infos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92501__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-infos","com.fulcrologic.rad.report/column-infos",961152363));
var columns = com.fulcrologic.rad.report_options.columns.cljs$core$IFn$_invoke$arity$1(report_options);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__92502){
var map__92503 = p__92502;
var map__92503__$1 = cljs.core.__destructure_map(map__92503);
var attr = map__92503__$1;
var column_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92503__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-heading","com.fulcrologic.rad.report/column-heading",-1327880348));
var column_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92503__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-info","com.fulcrologic.rad.report/column-info",887310264));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92503__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column","column",2078222095),attr,new cljs.core.Keyword(null,"help","help",-439233446),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(report_column_infos,qualified_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(column_info,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
}
})(),new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(report_column_headings,qualified_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(column_heading,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.attributes_options.label.cljs$core$IFn$_invoke$arity$1(attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = (function (){var G__92504 = qualified_key;
var G__92504__$1 = (((G__92504 == null))?null:cljs.core.name(G__92504));
if((G__92504__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__92504__$1);
}
})();
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return "";
}
}
}
}
})()], null);
}),columns);
});
com.fulcrologic.rad.report_render.render_row.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (report_instance,options,row_props){
var row_class = com.fulcrologic.rad.report_options.BodyItem.cljs$core$IFn$_invoke$arity$1(options);
return com.fulcrologic.rad.report.default_render_row(report_instance,row_class,row_props);
}));
com.fulcrologic.rad.report_render.render_report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (report_instance,options){
return com.fulcrologic.rad.report.default_render_layout(report_instance);
}));
com.fulcrologic.rad.report_render.render_controls.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,options){
var fexpr__92505 = com.fulcrologic.rad.report.control_renderer(this$);
return (fexpr__92505.cljs$core$IFn$_invoke$arity$1 ? fexpr__92505.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__92505.call(null,this$));
}));
/**
 * [report-instance control-key]
 * 
 * Render a single control, wrapped by minimal chrome. This is just an alias for control/render-control.
 */
com.fulcrologic.rad.report.render_control = com.fulcrologic.rad.control.render_control;
com.fulcrologic.rad.report.global_events = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","clear-sort","event/clear-sort",457469097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.dissoc_aliased.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
})], null)], null);
/**
 * Returns the report options from the current report actor.
 */
com.fulcrologic.rad.report.report_options = (function com$fulcrologic$rad$report$report_options(var_args){
var args__5775__auto__ = [];
var len__5769__auto___92814 = arguments.length;
var i__5770__auto___92815 = (0);
while(true){
if((i__5770__auto___92815 < len__5769__auto___92814)){
args__5775__auto__.push((arguments[i__5770__auto___92815]));

var G__92816 = (i__5770__auto___92815 + (1));
i__5770__auto___92815 = G__92816;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic = (function (uism_env,k_or_ks){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.component_options,com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","report","actor/report",1572193549)),k_or_ks);
}));

(com.fulcrologic.rad.report.report_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.rad.report.report_options.cljs$lang$applyTo = (function (seq92506){
var G__92507 = cljs.core.first(seq92506);
var seq92506__$1 = cljs.core.next(seq92506);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92507,seq92506__$1);
}));

/**
 * Path within the EDN stored on the URL (route params) where the given control key should be stored. When more than
 * one report is one the screen these would collide, so when it is a global control it can be stored just by key, but
 * when it is local it must be stored by report ID + key. This helper can be used by extensions to the stock state machine.
 */
com.fulcrologic.rad.report.route_params_path = (function com$fulcrologic$rad$report$route_params_path(env,control_key){
var report_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__92508 = (function (){var G__92509 = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var G__92510 = new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232);
var G__92511 = control_key;
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(G__92509,G__92510,G__92511) : com.fulcrologic.fulcro.components.component_options.call(null,G__92509,G__92510,G__92511));
})();
var map__92508__$1 = cljs.core.__destructure_map(map__92508);
var control = map__92508__$1;
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92508__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var id = cljs.core.second(report_ident);
if(cljs.core.truth_((function (){var or__5045__auto__ = local_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (control == null);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,control_key], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [control_key], null);
}
});
com.fulcrologic.rad.report.initial_sort_params = (function com$fulcrologic$rad$report$initial_sort_params(env){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null),com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","initial-sort-params","com.fulcrologic.rad.report/initial-sort-params",597353424)], 0))], 0));
});
com.fulcrologic.rad.report.initialize_parameters = (function com$fulcrologic$rad$report$initialize_parameters(p__92512){
var map__92513 = p__92512;
var map__92513__$1 = cljs.core.__destructure_map(map__92513);
var env = map__92513__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92513__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92513__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var report_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(report_ident,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160));
var map__92514 = event_data;
var map__92514__$1 = cljs.core.__destructure_map(map__92514);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92514__$1,new cljs.core.Keyword(null,"params","params",710516235));
var externally_controlled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92514__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","externally-controlled?","com.fulcrologic.rad.report/externally-controlled?",607281641));
var map__92515 = com.fulcrologic.rad.routing.history.current_route(app);
var map__92515__$1 = cljs.core.__destructure_map(map__92515);
var history_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92515__$1,new cljs.core.Keyword(null,"params","params",710516235));
var sort_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647));
var selected_row = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(history_params,com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)));
var current_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(history_params,com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)),(1));
var controls = com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)], 0));
var original_state_map = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env);
var initial_parameters = (function (){var G__92516 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),com.fulcrologic.rad.report.initial_sort_params(env),new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601),current_page], null);
if(cljs.core.truth_(selected_row)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__92516,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398),selected_row);
} else {
return G__92516;
}
})();
var $ = env;
var $__$1 = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic($,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_parameters,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(history_params,sort_path,cljs.core.PersistentArrayMap.EMPTY)], null)], 0))], 0));
return cljs.core.reduce_kv((function (new_env,control_key,p__92517){
var map__92518 = p__92517;
var map__92518__$1 = cljs.core.__destructure_map(map__92518);
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92518__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var retain_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92518__$1,new cljs.core.Keyword(null,"retain?","retain?",-1235215764));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92518__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var param_path = com.fulcrologic.rad.report.route_params_path(env,control_key);
var event_value = taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,param_path),cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,control_key));
var control_value_path = (cljs.core.truth_(local_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(report_ident,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([control_key], 0)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),control_key,new cljs.core.Keyword("com.fulcrologic.rad.control","value","com.fulcrologic.rad.control/value",656191245)], null));
var state_value = ((retain_QMARK_ === false)?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(original_state_map,control_value_path));
var url_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(history_params,param_path);
var explicit_value = taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2(event_value,url_value);
var default_value__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(default_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app], 0));
var v = taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3(explicit_value,state_value,default_value__$1);
var skip_assignment_QMARK_ = (function (){var or__5045__auto__ = (function (){var and__5043__auto__ = cljs.core.not(local_QMARK_);
if(and__5043__auto__){
return externally_controlled_QMARK_;
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (v == null);
}
})();
if(cljs.core.truth_(skip_assignment_QMARK_)){
return new_env;
} else {
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(new_env,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([control_value_path,v], 0));
}
}),$__$1,controls);
});
/**
 * Internal state machine helper. May be used by extensions to the stock state machine.
 */
com.fulcrologic.rad.report.current_control_parameters = (function com$fulcrologic$rad$report$current_control_parameters(p__92519){
var map__92520 = p__92519;
var map__92520__$1 = cljs.core.__destructure_map(map__92520);
var env = map__92520__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92520__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var report_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var controls = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(Report,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)) : com.fulcrologic.fulcro.components.component_options.call(null,Report,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232)));
var controls__$1 = com.fulcrologic.rad.control.control_map__GT_controls(controls);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__92521){
var map__92522 = p__92521;
var map__92522__$1 = cljs.core.__destructure_map(map__92522);
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92522__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92522__$1,new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504));
var v = (cljs.core.truth_(local_QMARK_)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(report_ident,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0))):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),id,new cljs.core.Keyword("com.fulcrologic.rad.control","value","com.fulcrologic.rad.control/value",656191245)], null)));
if((v == null)){
return result;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,id,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,controls__$1);
});
com.fulcrologic.rad.report.load_report_BANG_ = (function com$fulcrologic$rad$report$load_report_BANG_(env){
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var report_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__92523 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_options.call(null,Report));
var map__92523__$1 = cljs.core.__destructure_map(map__92523);
var BodyItem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92523__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373));
var source_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92523__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859));
var load_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92523__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","load-options","com.fulcrologic.rad.report/load-options",-906938492));
var before_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92523__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","before-load","com.fulcrologic.rad.report/before-load",-776481349));
var load_options__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(load_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var current_params = com.fulcrologic.rad.report.current_control_parameters(env);
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(report_ident,new cljs.core.Keyword("ui","loaded-data","ui/loaded-data",-1515082445));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.report",null,239,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loading report",source_attribute,(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_name.call(null,Report)),(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(BodyItem) : com.fulcrologic.fulcro.components.component_name.call(null,BodyItem))], null);
}),null)),null,-636159877,null);

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4((function (){var G__92524 = env;
if(cljs.core.truth_(before_load)){
return (before_load.cljs$core$IFn$_invoke$arity$1 ? before_load.cljs$core$IFn$_invoke$arity$1(G__92524) : before_load.call(null,G__92524));
} else {
return G__92524;
}
})(),source_attribute,BodyItem,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),current_params,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.Keyword(null,"marker","marker",865118313),report_ident,new cljs.core.Keyword(null,"target","target",253001721),path], null),load_options__$1], 0))),new cljs.core.Keyword("state","loading","state/loading",-628573180));
});
/**
 * Generates filtered rows, which is an intermediate cached value (not displayed). This function is used in the
 * internal state machine, and may be useful when extending the pre-defined machine.
 */
com.fulcrologic.rad.report.filter_rows = (function com$fulcrologic$rad$report$filter_rows(p__92525){
var map__92526 = p__92525;
var map__92526__$1 = cljs.core.__destructure_map(map__92526);
var uism_env = map__92526__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92526__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var all_rows = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748));
var parameters = com.fulcrologic.rad.report.current_control_parameters(uism_env);
var map__92527 = com.fulcrologic.rad.report.report_options(uism_env);
var map__92527__$1 = cljs.core.__destructure_map(map__92527);
var row_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92527__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-visible?","com.fulcrologic.rad.report/row-visible?",1268447481));
var skip_filtering_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92527__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","skip-filtering?","com.fulcrologic.rad.report/skip-filtering?",1432335353));
if(cljs.core.truth_((function (){var and__5043__auto__ = row_visible_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(skip_filtering_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parameters], 0)) === true));
} else {
return and__5043__auto__;
}
})())){
var normalized_QMARK_ = (function (){var G__92528 = all_rows;
var G__92528__$1 = (((G__92528 == null))?null:cljs.core.first(G__92528));
if((G__92528__$1 == null)){
return null;
} else {
return edn_query_language.core.ident_QMARK_(G__92528__$1);
}
})();
var report = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var BodyItem = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report,com.fulcrologic.rad.report_options.BodyItem) : com.fulcrologic.fulcro.components.component_options.call(null,report,com.fulcrologic.rad.report_options.BodyItem));
var filtered_rows = cljs.core.filterv((function (row){
var row__$1 = (cljs.core.truth_(normalized_QMARK_)?com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,BodyItem,row):row);
return (row_visible_QMARK_.cljs$core$IFn$_invoke$arity$2 ? row_visible_QMARK_.cljs$core$IFn$_invoke$arity$2(parameters,row__$1) : row_visible_QMARK_.call(null,parameters,row__$1));
}),all_rows);
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716),filtered_rows);
} else {
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716),all_rows);
}
});
/**
 * Sorts the filtered rows. Input is the cached intermediate filtered rows, output is cached sorted rows (not visible). This function is used in the
 * internal state machine, and may be useful when extending the pre-defined machine.
 */
com.fulcrologic.rad.report.sort_rows = (function com$fulcrologic$rad$report$sort_rows(p__92530){
var map__92531 = p__92530;
var map__92531__$1 = cljs.core.__destructure_map(map__92531);
var uism_env = map__92531__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92531__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__92532 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"sort-params","sort-params",-2134692887)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),state_map], null)], 0));
var map__92532__$1 = cljs.core.__destructure_map(map__92532);
var sort_params = map__92532__$1;
var desired_sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92532__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var all_rows = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716));
if(cljs.core.truth_(desired_sort_by)){
var compare_rows = com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509)], 0));
var normalized_QMARK_ = (function (){var G__92533 = all_rows;
var G__92533__$1 = (((G__92533 == null))?null:cljs.core.first(G__92533));
if((G__92533__$1 == null)){
return null;
} else {
return edn_query_language.core.ident_QMARK_(G__92533__$1);
}
})();
var sorted_rows = (cljs.core.truth_(compare_rows)?(function (){var keyfn = (cljs.core.truth_(normalized_QMARK_)?(function (p1__92529_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,p1__92529_SHARP_);
}):cljs.core.identity);
var comparefn = (function (a,b){
return (compare_rows.cljs$core$IFn$_invoke$arity$3 ? compare_rows.cljs$core$IFn$_invoke$arity$3(sort_params,a,b) : compare_rows.call(null,sort_params,a,b));
});
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,comparefn,all_rows));
})():all_rows);
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010),sorted_rows);
} else {
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010),all_rows);
}
});
/**
 * Internal state machine helper. May be used by extensions.
 * Sends a message to routing system that the page number changed. 
 */
com.fulcrologic.rad.report.page_number_changed = (function com$fulcrologic$rad$report$page_number_changed(env){
if(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false){
} else {
var pg_92843 = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var row_path_92844 = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398));
var page_path_92845 = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601));
com.fulcrologic.rad.routing.update_route_params_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489).cljs$core$IFn$_invoke$arity$1(env),(function (p){
return cljs.core.assoc_in(cljs.core.assoc_in(p,row_path_92844,(-1)),page_path_92845,pg_92843);
}));
}

return env;
});
/**
 * Internal state machine helper.
 * 
 * Apply the user-defined UISM operation to the report state machine just after the current page has
 * been populated. The :current-rows alias will have the result of filter/sort/paginate, and the
 * report actor is :actor/report. See the definition of the report state machine for more information.
 */
com.fulcrologic.rad.report.postprocess_page = (function com$fulcrologic$rad$report$postprocess_page(uism_env){
var xform = com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.post_process], 0));
if(cljs.core.truth_(xform)){
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(uism_env) : xform.call(null,uism_env));
} else {
return uism_env;
}
});
/**
 * Internal state machine implementation. May be used by extensions to the stock state machine.
 */
com.fulcrologic.rad.report.populate_current_page = (function com$fulcrologic$rad$report$populate_current_page(uism_env){
return com.fulcrologic.rad.report.postprocess_page((cljs.core.truth_(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","paginate?","com.fulcrologic.rad.report/paginate?",505904825)], 0)))?(function (){var current_page = (function (){var x__5130__auto__ = (1);
var y__5131__auto__ = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var page_size = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","page-size","com.fulcrologic.rad.report/page-size",-1307273282)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uism_env], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (20);
}
})();
var available_rows = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var n = cljs.core.count(available_rows);
var stragglers_QMARK_ = (cljs.core.rem(n,page_size) > (0));
var pages = (function (){var G__92534 = ((n / page_size) | (0));
if(stragglers_QMARK_){
return (G__92534 + (1));
} else {
return G__92534;
}
})();
var current_page__$1 = (((pages === (0)))?(1):(((current_page > pages))?pages:current_page
));
var page_start = ((current_page__$1 - (1)) * page_size);
var rows = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pages,current_page__$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(available_rows,page_start,n):(((n > page_size))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(available_rows,page_start,(page_start + page_size)):available_rows
));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),current_page__$1)) && (cljs.core.empty_QMARK_(rows)))){
return (com.fulcrologic.rad.report.goto_page_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.report.goto_page_STAR_.cljs$core$IFn$_invoke$arity$2(uism_env,(1)) : com.fulcrologic.rad.report.goto_page_STAR_.call(null,uism_env,(1)));
} else {
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic(uism_env,new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page__$1,new cljs.core.Keyword(null,"current-rows","current-rows",-1679322818),rows,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-count","page-count",2081744960),pages], 0));
}
})():com.fulcrologic.fulcro.ui_state_machines.assoc_aliased(uism_env,new cljs.core.Keyword(null,"page-count","page-count",2081744960),(1),new cljs.core.Keyword(null,"current-rows","current-rows",-1679322818),com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010)))));
});
/**
 * Internal state machine implementation. May be used by extensions to the stock state machine.
 */
com.fulcrologic.rad.report.goto_page_STAR_ = (function com$fulcrologic$rad$report$goto_page_STAR_(env,page){
var pg = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pg,page)){
return com.fulcrologic.rad.report.page_number_changed(com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(function (){var x__5130__auto__ = (1);
var y__5131__auto__ = page;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),(-1))));
} else {
return env;
}
});
/**
 * Given a report class that has columns, and a raw result grouped by those columns: returns a vector of rows that
 * rotate the grouped result into a normal report shape.
 */
com.fulcrologic.rad.report.rotate_result = (function com$fulcrologic$rad$report$rotate_result(report_class,grouped_result){
if(cljs.core.map_QMARK_(grouped_result)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.report",null,364,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The incoming result looks like it was normalized. Did you forget `ro/denormalize? true` on your report?"], null);
}),null)),null,1829772041,null);
}

var columns = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report_class,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549)) : com.fulcrologic.fulcro.components.component_options.call(null,report_class,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549)));
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949),columns);
var row_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__92535){
var map__92536 = p__92535;
var map__92536__$1 = cljs.core.__destructure_map(map__92536);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92536__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(grouped_result,qualified_key,cljs.core.PersistentVector.EMPTY);
}),columns);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,(function() { 
var G__92874__delegate = function (args){
return cljs.core.zipmap(ks,args);
};
var G__92874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92875__i = 0, G__92875__a = new Array(arguments.length -  0);
while (G__92875__i < G__92875__a.length) {G__92875__a[G__92875__i] = arguments[G__92875__i + 0]; ++G__92875__i;}
  args = new cljs.core.IndexedSeq(G__92875__a,0,null);
} 
return G__92874__delegate.call(this,args);};
G__92874.cljs$lang$maxFixedArity = 0;
G__92874.cljs$lang$applyTo = (function (arglist__92876){
var args = cljs.core.seq(arglist__92876);
return G__92874__delegate(args);
});
G__92874.cljs$core$IFn$_invoke$arity$variadic = G__92874__delegate;
return G__92874;
})()
,row_data);
});
/**
 * Internal state machine implementation. May be used by extensions to the stock state machine.
 * Apply the raw result transform, if it is defined.
 */
com.fulcrologic.rad.report.preprocess_raw_result = (function com$fulcrologic$rad$report$preprocess_raw_result(uism_env){
var xform = com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","raw-result-xform","com.fulcrologic.rad.report/raw-result-xform",-478513875)], 0));
if(cljs.core.truth_(xform)){
var raw_result = com.fulcrologic.fulcro.ui_state_machines.alias_value(uism_env,new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748));
var report = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var new_result = (xform.cljs$core$IFn$_invoke$arity$2 ? xform.cljs$core$IFn$_invoke$arity$2(report,raw_result) : xform.call(null,report,raw_result));
var G__92537 = uism_env;
if(cljs.core.truth_(new_result)){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__92537,new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748),new_result);
} else {
return G__92537;
}
} else {
return uism_env;
}
});
/**
 * Internal state machien implementation of handling :event/filter.
 */
com.fulcrologic.rad.report.handle_filter_event = (function com$fulcrologic$rad$report$handle_filter_event(p__92538){
var map__92539 = p__92538;
var map__92539__$1 = cljs.core.__destructure_map(map__92539);
var env = map__92539__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.fulcro.ui_state_machines.asm_id(env),new cljs.core.Keyword("event","do-filter","event/do-filter",-178720636));

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),true);
});
/**
 * Helper for state machines. Returns true if the report data looks like it has expired according to configured
 * caching parameters.
 */
com.fulcrologic.rad.report.report_cache_expired_QMARK_ = (function com$fulcrologic$rad$report$report_cache_expired_QMARK_(p__92540){
var map__92541 = p__92540;
var map__92541__$1 = cljs.core.__destructure_map(map__92541);
var uism_env = map__92541__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92541__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__92542 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_options.call(null,Report));
var map__92542__$1 = cljs.core.__destructure_map(map__92542);
var load_cache_seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92542__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","load-cache-seconds","com.fulcrologic.rad.report/load-cache-seconds",1857942909));
var load_cache_expired_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92542__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","load-cache-expired?","com.fulcrologic.rad.report/load-cache-expired?",1495950132));
var row_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92542__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951));
var now_ms = cljs.core.inst_ms(com.fulcrologic.rad.type_support.date_time.now());
var last_load_time = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(uism_env,new cljs.core.Keyword(null,"last-load-time","last-load-time",-45200749));
var last_table_count = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(uism_env,new cljs.core.Keyword(null,"raw-items-in-table","raw-items-in-table",212849270));
var cache_expiration_ms = ((1000) * (function (){var or__5045__auto__ = load_cache_seconds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})());
var table_name = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(row_pk);
var current_table_count = cljs.core.count(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,table_name)));
var cache_looks_stale_QMARK_ = (((last_load_time == null)) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_table_count,last_table_count)) || ((last_load_time < (now_ms - cache_expiration_ms))))));
var user_cache_expired_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(load_cache_expired_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uism_env,cache_looks_stale_QMARK_], 0));
if(cljs.core.boolean$(user_cache_expired_QMARK_)){
return user_cache_expired_QMARK_;
} else {
return cache_looks_stale_QMARK_;
}
});
/**
 * Internal state machine implementation. Called on :event/resumt to do the steps to resume an already running report
 * that has just been re-mounted.
 */
com.fulcrologic.rad.report.handle_resume_report = (function com$fulcrologic$rad$report$handle_resume_report(env){
var env__$1 = com.fulcrologic.rad.report.initialize_parameters(env);
if(cljs.core.truth_(com.fulcrologic.rad.report.report_cache_expired_QMARK_(env__$1))){
return com.fulcrologic.rad.report.load_report_BANG_(env__$1);
} else {
return com.fulcrologic.rad.report.handle_filter_event(env__$1);
}
});
com.fulcrologic.rad.report.report_machine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","report","actor/report",1572193549),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"page-count","page-count",2081744960),new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010),new cljs.core.Keyword(null,"sort-params","sort-params",-2134692887),new cljs.core.Keyword(null,"ascending?","ascending?",715983116),new cljs.core.Keyword(null,"busy?","busy?",1047519572),new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),new cljs.core.Keyword(null,"current-rows","current-rows",-1679322818)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),new cljs.core.Keyword(null,"ascending?","ascending?",715983116)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","loaded-data","ui/loaded-data",-1515082445)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494)], null)]),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__92543 = env;
var map__92543__$1 = cljs.core.__destructure_map(map__92543);
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92543__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92543__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__92544 = com.fulcrologic.rad.report.report_options(env);
var map__92544__$1 = cljs.core.__destructure_map(map__92544);
var run_on_mount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92544__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","run-on-mount?","com.fulcrologic.rad.report/run-on-mount?",-1246209180));
var page_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601));
var desired_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.history.current_route(fulcro_app)),page_path);
var run_now_QMARK_ = (function (){var or__5045__auto__ = desired_page;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return run_on_mount_QMARK_;
}
})();
var G__92545 = com.fulcrologic.rad.report.initialize_parameters((function (){var G__92546 = com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(event_data));
if((desired_page == null)){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__92546,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1));
} else {
return G__92546;
}
})());
var G__92545__$1 = (cljs.core.truth_(run_now_QMARK_)?com.fulcrologic.rad.report.load_report_BANG_(G__92545):G__92545);
if(cljs.core.not(run_now_QMARK_)){
return com.fulcrologic.fulcro.ui_state_machines.activate(G__92545__$1,new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
} else {
return G__92545__$1;
}
})], null),new cljs.core.Keyword("state","loading","state/loading",-628573180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92547){
var map__92548 = p__92547;
var map__92548__$1 = cljs.core.__destructure_map(map__92548);
var env = map__92548__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92548__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__92549 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_options.call(null,Report));
var map__92549__$1 = cljs.core.__destructure_map(map__92549);
var row_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92549__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951));
var report_loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92549__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","report-loaded","com.fulcrologic.rad.report/report-loaded",-1314066509));
var table_name = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(row_pk);
var G__92550 = com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.rad.report.filter_rows(com.fulcrologic.rad.report.preprocess_raw_result(env)))),new cljs.core.Keyword(null,"last-load-time","last-load-time",-45200749),cljs.core.inst_ms(com.fulcrologic.rad.type_support.date_time.now())),new cljs.core.Keyword(null,"raw-items-in-table","raw-items-in-table",212849270),cljs.core.count(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,table_name)))),new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
if(cljs.core.truth_(report_loaded)){
return (report_loaded.cljs$core$IFn$_invoke$arity$1 ? report_loaded.cljs$core$IFn$_invoke$arity$1(G__92550) : report_loaded.call(null,G__92550));
} else {
return G__92550;
}
})], null),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,476,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Report failed to load."], null);
}),null)),null,535912539,null);

return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report.global_events,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","filter","event/filter",-1055160832),new cljs.core.Keyword("event","do-filter","event/do-filter",-178720636),new cljs.core.Keyword("event","resume","event/resume",-288995771),new cljs.core.Keyword("event","sort","event/sort",856863144),new cljs.core.Keyword("event","prior-page","event/prior-page",-211513912),new cljs.core.Keyword("event","goto-page","event/goto-page",-1389704179),new cljs.core.Keyword("event","run","event/run",1832485709),new cljs.core.Keyword("event","next-page","event/next-page",-1122352529),new cljs.core.Keyword("event","set-ui-parameters","event/set-ui-parameters",446035604),new cljs.core.Keyword("event","select-row","event/select-row",-2109973162),new cljs.core.Keyword("event","do-sort","event/do-sort",1759129113)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.handle_filter_event], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92551){
var map__92552 = p__92551;
var map__92552__$1 = cljs.core.__destructure_map(map__92552);
var env = map__92552__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92552__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
return com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.rad.report.filter_rows(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false))));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.handle_resume_report], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92553){
var map__92554 = p__92553;
var map__92554__$1 = cljs.core.__destructure_map(map__92554);
var env = map__92554__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92554__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92554__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.fulcro.ui_state_machines.asm_id(env),new cljs.core.Keyword("event","do-sort","event/do-sort",1759129113),event_data);

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),true);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var page = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return com.fulcrologic.rad.report.goto_page_STAR_(env,((function (){var x__5130__auto__ = (2);
var y__5131__auto__ = page;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() - (1)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92555){
var map__92556 = p__92555;
var map__92556__$1 = cljs.core.__destructure_map(map__92556);
var env = map__92556__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92556__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__92557 = event_data;
var map__92557__$1 = cljs.core.__destructure_map(map__92557);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92557__$1,new cljs.core.Keyword(null,"page","page",849072397));
return com.fulcrologic.rad.report.goto_page_STAR_(env,page);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.load_report_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var page = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return com.fulcrologic.rad.report.goto_page_STAR_(env,((function (){var x__5130__auto__ = (1);
var y__5131__auto__ = page;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() + (1)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.initialize_parameters], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92558){
var map__92559 = p__92558;
var map__92559__$1 = cljs.core.__destructure_map(map__92559);
var env = map__92559__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92559__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92559__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var row = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(event_data);
var selected_row_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398));
if(((cljs.core.nat_int_QMARK_(row)) && ((!(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false))))){
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_row_path,row], 0));
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),row);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92560){
var map__92561 = p__92560;
var map__92561__$1 = cljs.core.__destructure_map(map__92561);
var env = map__92561__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92561__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92561__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_data,new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681));
if(cljs.core.truth_(temp__5802__auto__)){
var map__92562 = temp__5802__auto__;
var map__92562__$1 = cljs.core.__destructure_map(map__92562);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92562__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var sort_by = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var sort_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647));
var ascending_QMARK_ = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"ascending?","ascending?",715983116));
var ascending_QMARK___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qualified_key,sort_by))?cljs.core.not(ascending_QMARK_):true);
if(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false){
} else {
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sort_path,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ascending?","ascending?",715983116),ascending_QMARK___$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),qualified_key], null)], 0));
}

return com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),qualified_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ascending?","ascending?",715983116),ascending_QMARK___$1], 0))));
} else {
return env;
}
})], null)])], 0))], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.rad.report","report-machine","com.fulcrologic.rad.report/report-machine",-1783439230,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.rad.report","report-machine","com.fulcrologic.rad.report/report-machine",-1783439230,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","report","actor/report",1572193549),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"page-count","page-count",2081744960),new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010),new cljs.core.Keyword(null,"sort-params","sort-params",-2134692887),new cljs.core.Keyword(null,"ascending?","ascending?",715983116),new cljs.core.Keyword(null,"busy?","busy?",1047519572),new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"raw-rows","raw-rows",-1603871748),new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),new cljs.core.Keyword(null,"current-rows","current-rows",-1679322818)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword(null,"sorted-rows","sorted-rows",1684987010)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),new cljs.core.Keyword(null,"ascending?","ascending?",715983116)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword(null,"filtered-rows","filtered-rows",2135225716)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","loaded-data","ui/loaded-data",-1515082445)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","report","actor/report",1572193549),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494)], null)]),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__92563 = env;
var map__92563__$1 = cljs.core.__destructure_map(map__92563);
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92563__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92563__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__92564 = com.fulcrologic.rad.report.report_options(env);
var map__92564__$1 = cljs.core.__destructure_map(map__92564);
var run_on_mount_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92564__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","run-on-mount?","com.fulcrologic.rad.report/run-on-mount?",-1246209180));
var page_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601));
var desired_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.history.current_route(fulcro_app)),page_path);
var run_now_QMARK_ = (function (){var or__5045__auto__ = desired_page;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return run_on_mount_QMARK_;
}
})();
var G__92565 = com.fulcrologic.rad.report.initialize_parameters((function (){var G__92566 = com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(event_data));
if((desired_page == null)){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__92566,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1));
} else {
return G__92566;
}
})());
var G__92565__$1 = (cljs.core.truth_(run_now_QMARK_)?com.fulcrologic.rad.report.load_report_BANG_(G__92565):G__92565);
if(cljs.core.not(run_now_QMARK_)){
return com.fulcrologic.fulcro.ui_state_machines.activate(G__92565__$1,new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
} else {
return G__92565__$1;
}
})], null),new cljs.core.Keyword("state","loading","state/loading",-628573180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92567){
var map__92568 = p__92567;
var map__92568__$1 = cljs.core.__destructure_map(map__92568);
var env = map__92568__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92568__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var Report = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","report","actor/report",1572193549));
var map__92569 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(Report) : com.fulcrologic.fulcro.components.component_options.call(null,Report));
var map__92569__$1 = cljs.core.__destructure_map(map__92569);
var row_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92569__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951));
var report_loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92569__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","report-loaded","com.fulcrologic.rad.report/report-loaded",-1314066509));
var table_name = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(row_pk);
var G__92570 = com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.rad.report.filter_rows(com.fulcrologic.rad.report.preprocess_raw_result(env)))),new cljs.core.Keyword(null,"last-load-time","last-load-time",-45200749),cljs.core.inst_ms(com.fulcrologic.rad.type_support.date_time.now())),new cljs.core.Keyword(null,"raw-items-in-table","raw-items-in-table",212849270),cljs.core.count(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,table_name)))),new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
if(cljs.core.truth_(report_loaded)){
return (report_loaded.cljs$core$IFn$_invoke$arity$1 ? report_loaded.cljs$core$IFn$_invoke$arity$1(G__92570) : report_loaded.call(null,G__92570));
} else {
return G__92570;
}
})], null),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,476,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Report failed to load."], null);
}),null)),null,-1746551128,null);

return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","gathering-parameters","state/gathering-parameters",-1606415090),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report.global_events,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","filter","event/filter",-1055160832),new cljs.core.Keyword("event","do-filter","event/do-filter",-178720636),new cljs.core.Keyword("event","resume","event/resume",-288995771),new cljs.core.Keyword("event","sort","event/sort",856863144),new cljs.core.Keyword("event","prior-page","event/prior-page",-211513912),new cljs.core.Keyword("event","goto-page","event/goto-page",-1389704179),new cljs.core.Keyword("event","run","event/run",1832485709),new cljs.core.Keyword("event","next-page","event/next-page",-1122352529),new cljs.core.Keyword("event","set-ui-parameters","event/set-ui-parameters",446035604),new cljs.core.Keyword("event","select-row","event/select-row",-2109973162),new cljs.core.Keyword("event","do-sort","event/do-sort",1759129113)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.handle_filter_event], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92571){
var map__92572 = p__92571;
var map__92572__$1 = cljs.core.__destructure_map(map__92572);
var env = map__92572__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92572__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
return com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.rad.report.filter_rows(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false))));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.handle_resume_report], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92573){
var map__92574 = p__92573;
var map__92574__$1 = cljs.core.__destructure_map(map__92574);
var env = map__92574__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92574__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92574__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.fulcro.ui_state_machines.asm_id(env),new cljs.core.Keyword("event","do-sort","event/do-sort",1759129113),event_data);

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),true);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var page = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return com.fulcrologic.rad.report.goto_page_STAR_(env,((function (){var x__5130__auto__ = (2);
var y__5131__auto__ = page;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() - (1)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92575){
var map__92576 = p__92575;
var map__92576__$1 = cljs.core.__destructure_map(map__92576);
var env = map__92576__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92576__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__92577 = event_data;
var map__92577__$1 = cljs.core.__destructure_map(map__92577);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92577__$1,new cljs.core.Keyword(null,"page","page",849072397));
return com.fulcrologic.rad.report.goto_page_STAR_(env,page);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.load_report_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var page = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
return com.fulcrologic.rad.report.goto_page_STAR_(env,((function (){var x__5130__auto__ = (1);
var y__5131__auto__ = page;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() + (1)));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.report.initialize_parameters], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92578){
var map__92579 = p__92578;
var map__92579__$1 = cljs.core.__destructure_map(map__92579);
var env = map__92579__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92579__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92579__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var row = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(event_data);
var selected_row_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398));
if(((cljs.core.nat_int_QMARK_(row)) && ((!(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false))))){
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_row_path,row], 0));
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"selected-row","selected-row",-750259683),row);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__92580){
var map__92581 = p__92580;
var map__92581__$1 = cljs.core.__destructure_map(map__92581);
var env = map__92581__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92581__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92581__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_data,new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681));
if(cljs.core.truth_(temp__5802__auto__)){
var map__92582 = temp__5802__auto__;
var map__92582__$1 = cljs.core.__destructure_map(map__92582);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92582__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var sort_by = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var sort_path = com.fulcrologic.rad.report.route_params_path(env,new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647));
var ascending_QMARK_ = com.fulcrologic.fulcro.ui_state_machines.alias_value(env,new cljs.core.Keyword(null,"ascending?","ascending?",715983116));
var ascending_QMARK___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qualified_key,sort_by))?cljs.core.not(ascending_QMARK_):true);
if(com.fulcrologic.rad.report.report_options.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.report_options.track_in_url_QMARK_], 0)) === false){
} else {
com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sort_path,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ascending?","ascending?",715983116),ascending_QMARK___$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),qualified_key], null)], 0));
}

return com.fulcrologic.rad.report.populate_current_page(com.fulcrologic.rad.report.sort_rows(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"busy?","busy?",1047519572),false,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),qualified_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ascending?","ascending?",715983116),ascending_QMARK___$1], 0))));
} else {
return env;
}
})], null)])], 0))], null)], null)], null));
/**
 * Run a report with the current parameters
 */
com.fulcrologic.rad.report.run_report_BANG_ = (function com$fulcrologic$rad$report$run_report_BANG_(var_args){
var G__92584 = arguments.length;
switch (G__92584) {
case 1:
return com.fulcrologic.rad.report.run_report_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.run_report_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.run_report_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","run","event/run",1832485709));
}));

(com.fulcrologic.rad.report.run_report_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,class_or_registry_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,com.fulcrologic.rad.report.report_ident(class_or_registry_key),new cljs.core.Keyword("event","run","event/run",1832485709));
}));

(com.fulcrologic.rad.report.run_report_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Start a report. Not normally needed, since a report is started when it is routed to; however, if you put
 *   a report on-screen initially (or don't use dynamic router), then you must call this to start your report.
 * 
 *   `options` can contain `::id`, which will cause an instance of the report to be started. Used by containers so that
 *   multiple instances of the same report can co-exist with different views on the same screen.
 */
com.fulcrologic.rad.report.start_report_BANG_ = (function com$fulcrologic$rad$report$start_report_BANG_(var_args){
var G__92586 = arguments.length;
switch (G__92586) {
case 2:
return com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,report_class){
return com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3(app,report_class,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,report_class,options){
var machine_def = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report_class,new cljs.core.Keyword("com.fulcrologic.rad.report","machine","com.fulcrologic.rad.report/machine",-2080954567)) : com.fulcrologic.fulcro.components.component_options.call(null,report_class,new cljs.core.Keyword("com.fulcrologic.rad.report","machine","com.fulcrologic.rad.report/machine",-2080954567)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.report.report_machine;
}
})();
var params = new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(options);
var asm_id = com.fulcrologic.fulcro.components.ident(report_class,options);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var asm = (function (){var G__92587 = state_map;
if((G__92587 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__92587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),asm_id], null));
}
})();
var running_QMARK_ = (function (){var G__92588 = asm;
var G__92588__$1 = (((G__92588 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","active-state","com.fulcrologic.fulcro.ui-state-machines/active-state",235193193).cljs$core$IFn$_invoke$arity$1(G__92588));
if((G__92588__$1 == null)){
return null;
} else {
return cljs.core.boolean$(G__92588__$1);
}
})();
if(cljs.core.not(running_QMARK_)){
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app,machine_def,asm_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","report","actor/report",1572193549),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(asm_id,report_class)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"params","params",710516235),params));
} else {
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,asm_id,new cljs.core.Keyword("event","resume","event/resume",-288995771),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"params","params",710516235),params));
}
}));

(com.fulcrologic.rad.report.start_report_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.rad.report.default_compare_rows = (function com$fulcrologic$rad$report$default_compare_rows(p__92589,a,b){
var map__92590 = p__92589;
var map__92590__$1 = cljs.core.__destructure_map(map__92590);
var sort_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92590__$1,new cljs.core.Keyword(null,"sort-by","sort-by",-322599303));
var ascending_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92590__$1,new cljs.core.Keyword(null,"ascending?","ascending?",715983116));
try{var av = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,sort_by);
var bv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,sort_by);
if(cljs.core.truth_(ascending_QMARK_)){
return cljs.core.compare(av,bv);
} else {
return cljs.core.compare(bv,av);
}
}catch (e92591){var _ = e92591;
return (0);
}});
com.fulcrologic.rad.report.report_will_enter = (function com$fulcrologic$rad$report$report_will_enter(app,route_params,report_class){
var report_ident = (function (){var G__92592 = report_class;
var G__92593 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92592,G__92593) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92592,G__92593));
})();
return com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred(report_ident,(function (){
com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3(app,report_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__92594 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),report_ident], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__92594) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__92594));
})()], null));
}));
});
/**
 * Alias to `control/run!`. Runs the report.
 */
com.fulcrologic.rad.report.reload_BANG_ = com.fulcrologic.rad.control.run_BANG_;
/**
 * [instance k v]
 * 
 * Alias to `control/set-parameter!`. Set the given parameter value on the report. Usually used internally by controls.
 */
com.fulcrologic.rad.report.set_parameter_BANG_ = com.fulcrologic.rad.control.set_parameter_BANG_;
/**
 * Get the form link info for a given (column) key.
 * 
 *   Returns nil if there is no link info, otherwise returns:
 * 
 *   ```
 *   {:edit-form FormClass
 * :entity-id id-of-entity-to-edit}
 *   ```
 *   
 */
com.fulcrologic.rad.report.form_link = (function com$fulcrologic$rad$report$form_link(report_instance,row_props,column_key){
var map__92609 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__92609__$1 = cljs.core.__destructure_map(map__92609);
var form_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92609__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799));
var cls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_links,column_key);
var id_key = (function (){var G__92610 = cls;
if((G__92610 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(G__92610,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)) : com.fulcrologic.fulcro.components.component_options.call(null,G__92610,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)));
}
})();
if(cljs.core.truth_(cls)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit-form","edit-form",1081227988),cls,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_props,id_key)], null);
} else {
return null;
}
});
/**
 * Get a regular lambda link for a given (column) key.
 * 
 *   Returns nil if there is no link info, otherwise returns:
 * 
 *   ```
 *   {:edit-form FormClass
 * :entity-id id-of-entity-to-edit}
 *   ```
 *   
 */
com.fulcrologic.rad.report.link = (function com$fulcrologic$rad$report$link(report_instance,row_props,column_key){
var map__92611 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__92611__$1 = cljs.core.__destructure_map(map__92611);
var form_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92611__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799));
var cls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_links,column_key);
var id_key = (function (){var G__92612 = cls;
if((G__92612 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(G__92612,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)) : com.fulcrologic.fulcro.components.component_options.call(null,G__92612,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)));
}
})();
if(cljs.core.truth_(cls)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edit-form","edit-form",1081227988),cls,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_props,id_key)], null);
} else {
return null;
}
});
com.fulcrologic.rad.report.built_in_formatter = (function com$fulcrologic$rad$report$built_in_formatter(type,style){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
})], null),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.inst__GT_human_readable_date(value);
}),new cljs.core.Keyword(null,"short-timestamp","short-timestamp",270490461),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("MMM d, h:mma",value);
}),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("MMM d, yyyy h:mma",value);
}),new cljs.core.Keyword(null,"date","date",-1463434462),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("MMM d, yyyy",value);
}),new cljs.core.Keyword(null,"month-day","month-day",-1633369133),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("MMM d",value);
}),new cljs.core.Keyword(null,"time","time",1385887882),(function (_,value){
return com.fulcrologic.rad.type_support.date_time.tformat("h:mma",value);
})], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value,___$1,column_attribute){
var temp__5802__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.attributes","enumerated-labels","com.fulcrologic.rad.attributes/enumerated-labels",-2136251655).cljs$core$IFn$_invoke$arity$1(column_attribute);
if(cljs.core.truth_(temp__5802__auto__)){
var labels = temp__5802__auto__;
return (labels.cljs$core$IFn$_invoke$arity$1 ? labels.cljs$core$IFn$_invoke$arity$1(value) : labels.call(null,value));
} else {
var G__92613 = value;
var G__92613__$1 = (((G__92613 == null))?null:cljs.core.name(G__92613));
if((G__92613__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__92613__$1);
}
}
})], null),new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value,___$1,column_attribute){
var temp__5802__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.attributes","enumerated-labels","com.fulcrologic.rad.attributes/enumerated-labels",-2136251655).cljs$core$IFn$_invoke$arity$1(column_attribute);
if(cljs.core.truth_(temp__5802__auto__)){
var labels = temp__5802__auto__;
return (labels.cljs$core$IFn$_invoke$arity$1 ? labels.cljs$core$IFn$_invoke$arity$1(value) : labels.call(null,value));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}
})], null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
})], null),new cljs.core.Keyword(null,"decimal","decimal",-170212044),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_str(value);
}),new cljs.core.Keyword(null,"currency","currency",-898327568),(function (_,value){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_str(com.fulcrologic.rad.type_support.decimal.round.cljs$core$IFn$_invoke$arity$2(value,(2)));
}),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),(function (_,value){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_percent_str(value);
}),new cljs.core.Keyword(null,"USD","USD",-801544589),(function (_,value){
return com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str.cljs$core$IFn$_invoke$arity$1(value);
})], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
if(cljs.core.truth_(value)){
return com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("true");
} else {
return com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("false");
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,style], null));
});
/**
 * Given a report instance, a row of props, and a column attribute for that report:
 * returns the formatted value of that column using the field formatter(s) defined
 * on the column attribute or report. If no formatter is provided a default formatter
 * will be used.
 */
com.fulcrologic.rad.report.formatted_column_value = (function com$fulcrologic$rad$report$formatted_column_value(report_instance,row_props,p__92614){
var map__92615 = p__92614;
var map__92615__$1 = cljs.core.__destructure_map(map__92615);
var column_attribute = map__92615__$1;
var field_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92615__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","field-formatter","com.fulcrologic.rad.report/field-formatter",-2121015462));
var column_formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92615__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatter","com.fulcrologic.rad.report/column-formatter",1459791387));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92615__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92615__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92615__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","style","com.fulcrologic.rad.attributes/style",816608992));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_props,qualified_key);
var report_field_formatter = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatters","com.fulcrologic.rad.report/column-formatters",-1998185551),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatters","com.fulcrologic.rad.report/column-formatters",-1998185551),qualified_key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","field-formatters","com.fulcrologic.rad.report/field-formatters",61144273),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","field-formatters","com.fulcrologic.rad.report/field-formatters",61144273),qualified_key));
}
})();
var map__92616 = com.fulcrologic.fulcro.components.any__GT_app(report_instance);
var map__92616__$1 = cljs.core.__destructure_map(map__92616);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92616__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var formatter = (cljs.core.truth_(report_field_formatter)?report_field_formatter:(cljs.core.truth_(column_formatter)?column_formatter:(cljs.core.truth_(field_formatter)?field_formatter:(function (){var style__$1 = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","column-styles","com.fulcrologic.rad.report/column-styles",366052571),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","column-styles","com.fulcrologic.rad.report/column-styles",366052571),qualified_key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = style;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
})();
var installed_formatters = (function (){var G__92617 = runtime_atom;
var G__92617__$1 = (((G__92617 == null))?null:cljs.core.deref(G__92617));
var G__92617__$2 = (((G__92617__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__92617__$1));
if((G__92617__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.report","type->style->formatter","com.fulcrologic.rad.report/type->style->formatter",1525751656).cljs$core$IFn$_invoke$arity$1(G__92617__$2);
}
})();
var formatter = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(installed_formatters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,style__$1], null));
var or__5045__auto__ = formatter;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.report.built_in_formatter(type,style__$1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (function (_,v){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
});
}
}
})()
)));
var formatted_value = (formatter.cljs$core$IFn$_invoke$arity$4 ? formatter.cljs$core$IFn$_invoke$arity$4(report_instance,value,row_props,column_attribute) : formatter.call(null,report_instance,value,row_props,column_attribute));
return formatted_value;
});
/**
 * Install a formatter for the given data type and style. The data type must match a supported data type
 * of attributes, and the style can either be `:default` or a user-defined keyword the represents the
 * style you want to support. Some common styles have predefined support, such as `:USD` for US Dollars.
 * 
 * This should be called before mounting your app.
 * 
 * Ex.:
 * 
 * ```clojure
 * (install-formatter! app :boolean :default (fn [report-instance value] (if value "yes" "no")))
 * ```
 */
com.fulcrologic.rad.report.install_formatter_BANG_ = (function com$fulcrologic$rad$report$install_formatter_BANG_(app,type,style,formatter){
var map__92618 = app;
var map__92618__$1 = cljs.core.__destructure_map(map__92618);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92618__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.report","type->style->formatter","com.fulcrologic.rad.report/type->style->formatter",1525751656),type,style], null),formatter);
});
/**
 * Install a report layout renderer for the given style. `render-row` is a `(fn [report-instance])`.
 * 
 *   See other support functions in this ns for help rendering, such as `formatted-column-value`, `form-link`,
 *   `select-row!`.
 * 
 * This should be called before mounting your app.
 * 
 */
com.fulcrologic.rad.report.install_layout_BANG_ = (function com$fulcrologic$rad$report$install_layout_BANG_(app,report_style,render){
var map__92619 = app;
var map__92619__$1 = cljs.core.__destructure_map(map__92619);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92619__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.report","style->layout","com.fulcrologic.rad.report/style->layout",-2137264366),report_style], null),render);
});
/**
 * Install a row layout renderer for the given style. `render-row` is a `(fn [report-instance row-class row-props])`.
 * 
 *   See other support functions in this ns for help rendering, such as `formatted-column-value`, `form-link`,
 *   `select-row!`.
 * 
 * This should be called before mounting your app.
 * 
 */
com.fulcrologic.rad.report.install_row_layout_BANG_ = (function com$fulcrologic$rad$report$install_row_layout_BANG_(app,row_style,render_row){
var map__92620 = app;
var map__92620__$1 = cljs.core.__destructure_map(map__92620);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92620__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.report","row-style->row-layout","com.fulcrologic.rad.report/row-style->row-layout",-622996728),row_style], null),render_row);
});
/**
 * Get a vector of the current rows that should be shown by the renderer (sorted/paginated/filtered). `report-instance`
 * is available in the rendering `env`.
 */
com.fulcrologic.rad.report.current_rows = (function com$fulcrologic$rad$report$current_rows(report_instance){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),cljs.core.PersistentVector.EMPTY);
});
/**
 * Returns true if the given report instance has an active network load in progress.
 */
com.fulcrologic.rad.report.loading_QMARK_ = (function com$fulcrologic$rad$report$loading_QMARK_(report_instance){
if(cljs.core.truth_(report_instance)){
return com.fulcrologic.fulcro.data_fetch.loading_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,report_instance))], null)));
} else {
return null;
}
});
/**
 * Sort the report by the given attribute. Changes direction if the report is already sorted by that attribute. The implementation
 * of sorting is built-in and uses compare, but you can override how sorting works by defining `ro/compare-rows` on your report.
 */
com.fulcrologic.rad.report.sort_rows_BANG_ = (function com$fulcrologic$rad$report$sort_rows_BANG_(var_args){
var G__92622 = arguments.length;
switch (G__92622) {
case 2:
return com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,by_attribute){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","sort","event/sort",856863144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),by_attribute], null));
}));

(com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,class_or_reg_key,by_attribute){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","sort","event/sort",856863144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),by_attribute], null));
}));

(com.fulcrologic.rad.report.sort_rows_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Make it so the report is not sorted (skips the sort step on any action that would normally (re)sort
 * the report). This can be used to speed up loading of large results, especially if they were
 * already in an acceptable order from the server.
 * 
 * NOTE: This does NOT refresh the report. The natural order will appear next time the report needs sorted.
 */
com.fulcrologic.rad.report.clear_sort_BANG_ = (function com$fulcrologic$rad$report$clear_sort_BANG_(var_args){
var G__92624 = arguments.length;
switch (G__92624) {
case 1:
return com.fulcrologic.rad.report.clear_sort_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.clear_sort_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.clear_sort_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","clear-sort","event/clear-sort",457469097));
}));

(com.fulcrologic.rad.report.clear_sort_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,class_or_reg_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","clear-sort","event/clear-sort",457469097));
}));

(com.fulcrologic.rad.report.clear_sort_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Update the filtered rows based on current report parameters.
 */
com.fulcrologic.rad.report.filter_rows_BANG_ = (function com$fulcrologic$rad$report$filter_rows_BANG_(var_args){
var G__92626 = arguments.length;
switch (G__92626) {
case 1:
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","filter","event/filter",-1055160832));
}));

(com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,class_or_reg_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","filter","event/filter",-1055160832));
}));

(com.fulcrologic.rad.report.filter_rows_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Move to the next page (if there is one)
 */
com.fulcrologic.rad.report.goto_page_BANG_ = (function com$fulcrologic$rad$report$goto_page_BANG_(var_args){
var G__92628 = arguments.length;
switch (G__92628) {
case 2:
return com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,page_number){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","goto-page","event/goto-page",-1389704179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_number], null));
}));

(com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,class_or_reg_key,page_number){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","goto-page","event/goto-page",-1389704179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_number], null));
}));

(com.fulcrologic.rad.report.goto_page_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Move to the next page (if there is one)
 */
com.fulcrologic.rad.report.next_page_BANG_ = (function com$fulcrologic$rad$report$next_page_BANG_(var_args){
var G__92630 = arguments.length;
switch (G__92630) {
case 1:
return com.fulcrologic.rad.report.next_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.next_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.next_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","next-page","event/next-page",-1122352529));
}));

(com.fulcrologic.rad.report.next_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,class_or_reg_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","next-page","event/next-page",-1122352529));
}));

(com.fulcrologic.rad.report.next_page_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Move to the next page (if there is one)
 */
com.fulcrologic.rad.report.prior_page_BANG_ = (function com$fulcrologic$rad$report$prior_page_BANG_(var_args){
var G__92632 = arguments.length;
switch (G__92632) {
case 1:
return com.fulcrologic.rad.report.prior_page_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.prior_page_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.prior_page_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","prior-page","event/prior-page",-211513912));
}));

(com.fulcrologic.rad.report.prior_page_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,class_or_reg_key){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","prior-page","event/prior-page",-211513912));
}));

(com.fulcrologic.rad.report.prior_page_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Returns the current page number displayed on the report
 */
com.fulcrologic.rad.report.current_page = (function com$fulcrologic$rad$report$current_page(var_args){
var G__92634 = arguments.length;
switch (G__92634) {
case 1:
return com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$1 = (function (report_instance){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)], null),(1));
}));

(com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$2 = (function (state_map,report_class_or_registry_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.report.report_ident(report_class_or_registry_key),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","current-page","com.fulcrologic.rad.report/current-page",-1422719601)], 0)),(1));
}));

(com.fulcrologic.rad.report.current_page.cljs$lang$maxFixedArity = 2);

/**
 * Returns how many pages the current report has.
 */
com.fulcrologic.rad.report.page_count = (function com$fulcrologic$rad$report$page_count(var_args){
var G__92636 = arguments.length;
switch (G__92636) {
case 1:
return com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$1 = (function (report_instance){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916)], null),(1));
}));

(com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$2 = (function (state_map,report_class_or_registry_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.report.report_ident(report_class_or_registry_key),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916)),(1));
}));

(com.fulcrologic.rad.report.page_count.cljs$lang$maxFixedArity = 2);

/**
 * Returns the currently-selected row index, if any (-1 if nothing is selected).
 */
com.fulcrologic.rad.report.currently_selected_row = (function com$fulcrologic$rad$report$currently_selected_row(var_args){
var G__92638 = arguments.length;
switch (G__92638) {
case 1:
return com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$1 = (function (report_instance){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)], null),(-1));
}));

(com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$2 = (function (state_map,report_class_or_registry_key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.report.report_ident(report_class_or_registry_key),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","selected-row","com.fulcrologic.rad.report/selected-row",-2138172398)], 0)),(-1));
}));

(com.fulcrologic.rad.report.currently_selected_row.cljs$lang$maxFixedArity = 2);

com.fulcrologic.rad.report.select_row_BANG_ = (function com$fulcrologic$rad$report$select_row_BANG_(var_args){
var G__92640 = arguments.length;
switch (G__92640) {
case 2:
return com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (report_instance,idx){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(report_instance,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,report_instance)),new cljs.core.Keyword("event","select-row","event/select-row",-2109973162),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),idx], null));
}));

(com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,class_or_reg_key,idx){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.rad.report.report_ident(class_or_reg_key),new cljs.core.Keyword("event","select-row","event/select-row",-2109973162),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),idx], null));
}));

(com.fulcrologic.rad.report.select_row_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns a string of column classes that can be defined on the attribute at ::report/column-class or on the
 * report in the ::report/column-classes map. The report map overrides the attribute
 */
com.fulcrologic.rad.report.column_classes = (function com$fulcrologic$rad$report$column_classes(report_instance_or_class,p__92641){
var map__92642 = p__92641;
var map__92642__$1 = cljs.core.__destructure_map(map__92642);
var attr = map__92642__$1;
var column_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92642__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-class","com.fulcrologic.rad.report/column-class",-562089245));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92642__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var rpt_column_class = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(report_instance_or_class,new cljs.core.Keyword("com.fulcrologic.rad.report","column-classes","com.fulcrologic.rad.report/column-classes",1997266085),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance_or_class,new cljs.core.Keyword("com.fulcrologic.rad.report","column-classes","com.fulcrologic.rad.report/column-classes",1997266085),qualified_key));
var or__5045__auto__ = rpt_column_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return column_class;
}
});
/**
 * Generates a row class for reports. Mainly meant for internal use, but might be useful in custom report generation code.
 * 
 *   registry-key - The unique key to register the generated class under
 *   options - The top report options
 */
com.fulcrologic.rad.report.genrow = (function com$fulcrologic$rad$report$genrow(registry_key,options){
var map__92644 = options;
var map__92644__$1 = cljs.core.__destructure_map(map__92644);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92644__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var row_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92644__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951));
var form_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92644__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799));
var initLocalState = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92644__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","initLocalState","com.fulcrologic.rad.report/initLocalState",578239055));
var row_query_inclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92644__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-query-inclusion","com.fulcrologic.rad.report/row-query-inclusion",-656135832));
var denormalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92644__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","denormalize?","com.fulcrologic.rad.report/denormalize?",889862364));
var row_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92644__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371));
var normalize_QMARK_ = cljs.core.not(denormalize_QMARK_);
var row_query = (function (){var id_attrs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__92643_SHARP_){
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(p1__92643_SHARP_,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,p1__92643_SHARP_,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
}),cljs.core.vals(form_links));
return cljs.core.vec(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(row_query_inclusion),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attr){
var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","column-EQL","com.fulcrologic.rad.report/column-EQL",1268674699).cljs$core$IFn$_invoke$arity$1(attr);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr);
}
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(id_attrs,columns)),row_pk))));
})();
var row_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(row_pk);
var row_ident = (function (this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,row_key)], null);
});
var row_actions__$1 = (function (){var or__5045__auto__ = row_actions;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var row_render = (function (this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.report.render_row(this$,com.fulcrologic.fulcro.raw.components.registry_key__GT_class(registry_key),props);
}));
});
var body_options = (function (){var G__92645 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (this$){
return row_query;
}),new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),row_actions__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),columns], null);
var G__92645__$1 = ((normalize_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__92645,new cljs.core.Keyword(null,"ident","ident",-742346),row_ident):G__92645);
if(cljs.core.truth_(form_links)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__92645__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),form_links);
} else {
return G__92645__$1;
}
})();
return com.fulcrologic.fulcro.components.sc(registry_key,body_options,row_render);
});
/**
 * Create a RAD report component. `options` is the map of report/Fulcro options. The `registry-key` is the globally
 * unique name (as a keyword) that this component should be known by, and `render` is a `(fn [this props])` (optional)
 * for rendering the body, which defaults to the built-in `render-layout`.
 * 
 * WARNING: The macro version ensures that there is a constant react type to refer to. Using this function MAY cause
 * hot code reload behaviors that rely on react-type to misbehave due to the mismatch (closure over old version).
 */
com.fulcrologic.rad.report.report = (function com$fulcrologic$rad$report$report(var_args){
var G__92648 = arguments.length;
switch (G__92648) {
case 2:
return com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$2 = (function (registry_key,options){
return com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$3(registry_key,options,(function (this$,_){
return com.fulcrologic.rad.report.render_layout(this$);
}));
}));

(com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$3 = (function (registry_key,options,render){
if(cljs.core.vector_QMARK_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549)) : options.call(null,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549))))){
} else {
throw (new Error("Assert failed: (vector? (options :com.fulcrologic.rad.report/columns))"));
}

if(com.fulcrologic.rad.attributes.attribute_QMARK_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951)) : options.call(null,new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951))))){
} else {
throw (new Error("Assert failed: (attr/attribute? (options :com.fulcrologic.rad.report/row-pk))"));
}

if(((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859)) : options.call(null,new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859))) instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? (options :com.fulcrologic.rad.report/source-attribute))"));
}

var generated_row_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(registry_key),[cljs.core.name(registry_key),"-Row"].join(''));
var map__92649 = options;
var map__92649__$1 = cljs.core.__destructure_map(map__92649);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92649__$1,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232));
var BodyItem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92649__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373));
var query_inclusions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92649__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92649__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","route","com.fulcrologic.rad.report/route",-563601438));
var constructor$ = com.fulcrologic.fulcro.components.react_constructor(new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876).cljs$core$IFn$_invoke$arity$1(options));
var generated_class = cljs.core.volatile_BANG_(null);
var get_class = (function (){
return cljs.core.deref(generated_class);
});
var ItemClass = (function (){var or__5045__auto__ = BodyItem;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.report.genrow(generated_row_key,options);
}
})();
var query = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),registry_key], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.control.Control)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(ItemClass)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.data_fetch.marker_table,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),query_inclusions);
var render__$1 = (function (this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(this$,props) : render.call(null,this$,props));
}));
});
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509),com.fulcrologic.rad.report.default_compare_rows,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),(function (app,route_params){
return com.fulcrologic.rad.report.report_will_enter(app,route_params,get_class());
})], null),options,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),((cljs.core.vector_QMARK_(route))?route:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [route], null)),new cljs.core.Keyword(null,"render","render",-1408033454),render__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373),ItemClass,new cljs.core.Keyword(null,"query","query",-1288509510),(function (){
return query;
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function (params){
var G__92650 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","controls","ui/controls",1340762784),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__92646_SHARP_){
return cljs.core.select_keys(p1__92646_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),null], null), null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local?","local?",-1422786101),com.fulcrologic.rad.control.control_map__GT_controls(controls))),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),false,new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),(1),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),(1),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),cljs.core.PersistentVector.EMPTY], null);
if(cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__92650,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(params));
} else {
return G__92650;
}
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function (this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),(function (){var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return registry_key;
}
})()], null);
})], null)], 0));
var cls = com.fulcrologic.fulcro.components.sc(registry_key,options__$1,render__$1);
cljs.core.vreset_BANG_(generated_class,cls);

return cls;
}));

(com.fulcrologic.rad.report.report.cljs$lang$maxFixedArity = 3);

/**
 * Accidental duplication. Use genrow instead
 */
com.fulcrologic.rad.report.generated_row_class = com.fulcrologic.rad.report.genrow;
/**
 * Accidental duplication. Use `report` instead.
 */
com.fulcrologic.rad.report.sc_report = com.fulcrologic.rad.report.report;
/**
 * Mutation helper. Clear a report out of app state. The report should not be visible when you do this.
 */
com.fulcrologic.rad.report.clear_report_STAR_ = (function com$fulcrologic$rad$report$clear_report_STAR_(state_map,ReportClass){
var report_ident = (function (){var G__92654 = ReportClass;
var G__92655 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92654,G__92655) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92654,G__92655));
})();
var vec__92651 = report_ident;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92651,(0),null);
var report_class_registry_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92651,(1),null);
return com.fulcrologic.fulcro.algorithms.merge.merge_component(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state_map,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),cljs.core.dissoc,report_ident),table,cljs.core.dissoc,report_class_registry_key),ReportClass,(function (){var G__92656 = ReportClass;
var G__92657 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__92656,G__92657) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__92656,G__92657));
})());
});
/**
 * MUTATION: Clear a report (which should not be on screen) out of app state.
 */
com.fulcrologic.rad.report.clear_report = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.report","clear-report","com.fulcrologic.rad.report/clear-report",-2048935716,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.report","clear-report","com.fulcrologic.rad.report/clear-report",-2048935716,null),(function (fulcro_mutation_env_symbol){
var map__92658 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__92658__$1 = cljs.core.__destructure_map(map__92658);
var report_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92658__$1,new cljs.core.Keyword(null,"report-ident","report-ident",574278233));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$report$action(p__92659){
var map__92660 = p__92659;
var map__92660__$1 = cljs.core.__destructure_map(map__92660);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92660__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__92661_92890 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__92662_92891 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__92662_92891);

try{var vec__92663_92892 = report_ident;
var table_92893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92663_92892,(0),null);
var report_class_registry_key_92894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92663_92892,(1),null);
var Report_92895 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(report_class_registry_key_92894) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,report_class_registry_key_92894));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.rad.report.clear_report_STAR_,Report_92895);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__92661_92890);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__92666 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__92667 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__92667);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__92666);
}})], null);
}));
/**
 * Run a transaction that completely clears a report (which should not be on-screen) out of app state.
 */
com.fulcrologic.rad.report.clear_report_BANG_ = (function com$fulcrologic$rad$report$clear_report_BANG_(app_ish,ReportClass){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app_ish,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__92668 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"report-ident","report-ident",574278233),(function (){var G__92669 = ReportClass;
var G__92670 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92669,G__92670) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92669,G__92670));
})()], null);
return (com.fulcrologic.rad.report.clear_report.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.report.clear_report.cljs$core$IFn$_invoke$arity$1(G__92668) : com.fulcrologic.rad.report.clear_report.call(null,G__92668));
})()], null));
});
/**
 * Trigger an event on a report. You can use the `this` of the report with arity-2 and -3.
 * 
 * For arity-4 the `report-class-ish` is something from which the report's ident can be derived: I.e. The
 * report class, report's Fulcro registry key, or the ident itself.
 * 
 * This should not be used from within the state machine itself. Use `uism/trigger` for that.
 */
com.fulcrologic.rad.report.trigger_BANG_ = (function com$fulcrologic$rad$report$trigger_BANG_(var_args){
var G__92672 = arguments.length;
switch (G__92672) {
case 2:
return com.fulcrologic.rad.report.trigger_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.report.trigger_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.report.trigger_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.report.trigger_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (report_instance,event){
return com.fulcrologic.rad.report.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(report_instance,event,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.report.trigger_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (report_instance,event,event_data){
return com.fulcrologic.rad.report.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(report_instance,report_instance,event,event_data);
}));

(com.fulcrologic.rad.report.trigger_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_ish,report_class_ish,event,event_data){
var report_ident = ((((typeof report_class_ish === 'string') || ((((report_class_ish instanceof cljs.core.Symbol)) || ((report_class_ish instanceof cljs.core.Keyword))))))?(function (){var G__92673 = report_class_ish;
var G__92673__$1 = (((G__92673 == null))?null:(com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__92673) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__92673)));
if((G__92673__$1 == null)){
return null;
} else {
var G__92674 = G__92673__$1;
var G__92675 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92674,G__92675) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92674,G__92675));
}
})():((cljs.core.vector_QMARK_(report_class_ish))?report_class_ish:((com.fulcrologic.fulcro.components.component_class_QMARK_(report_class_ish))?(function (){var G__92676 = report_class_ish;
var G__92677 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92676,G__92677) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92676,G__92677));
})():((com.fulcrologic.fulcro.components.component_instance_QMARK_(report_class_ish))?(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(report_class_ish) : com.fulcrologic.fulcro.components.get_ident.call(null,report_class_ish)):null))));
if(cljs.core.vector_QMARK_(report_ident)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.report",null,1064,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot trigger an event on a report with invalid report identifier",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),report_class_ish,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(report_class_ish)], null))], null);
}),null)),null,-771061087,null);
}

return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4(app_ish,report_ident,event,event_data);
}));

(com.fulcrologic.rad.report.trigger_BANG_.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=com.fulcrologic.rad.report.js.map
