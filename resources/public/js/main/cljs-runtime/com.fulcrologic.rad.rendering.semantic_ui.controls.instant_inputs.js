goog.provide('com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs');
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_instant_input = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$ui_date_instant_input(p__93207,p__93208){
var map__93209 = p__93207;
var map__93209__$1 = cljs.core.__destructure_map(map__93209);
var default_local_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93209__$1,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs","default-local-time","com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs/default-local-time",1906185405));
var map__93210 = p__93208;
var map__93210__$1 = cljs.core.__destructure_map(map__93210);
var props = map__93210__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93210__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93210__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var local_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93210__$1,new cljs.core.Keyword(null,"local-time","local-time",-1873195290));
var value__$1 = (((value == null))?"":com.fulcrologic.rad.type_support.date_time.inst__GT_html_date.cljs$core$IFn$_invoke$arity$1(value));
var local_time__$1 = (function (){var or__5045__auto__ = local_time;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default_local_time;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var date_string = com.fulcrologic.fulcro.dom.events.target_value(evt);
var instant = com.fulcrologic.rad.type_support.date_time.html_date__GT_inst(date_string,local_time__$1);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(instant) : onChange.call(null,instant));
} else {
return null;
}
})], null)], 0))], null),null);
});
/**
 * Display the date the user selects, but control a value that is midnight on the next date. Used for generating ending
 *   instants that can be used for a proper non-inclusive end date.
 */
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_ending_date_instant_input = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$ui_ending_date_instant_input(_,p__93211){
var map__93212 = p__93211;
var map__93212__$1 = cljs.core.__destructure_map(map__93212);
var props = map__93212__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93212__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93212__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var value__$1 = (((value == null))?"":com.fulcrologic.rad.type_support.date_time.local_date__GT_html_date_string(cljc.java_time.local_date_time.to_local_date(cljc.java_time.local_date_time.minus_days(com.fulcrologic.rad.type_support.date_time.inst__GT_local_datetime.cljs$core$IFn$_invoke$arity$1(value),(1)))));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var G__93213 = (function (){var G__93214 = com.fulcrologic.fulcro.dom.events.target_value(evt);
var G__93214__$1 = (((G__93214 == null))?null:com.fulcrologic.rad.type_support.date_time.html_date_string__GT_local_date(G__93214));
var G__93214__$2 = (((G__93214__$1 == null))?null:cljc.java_time.local_date.plus_days(G__93214__$1,(1)));
var G__93214__$3 = (((G__93214__$2 == null))?null:cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2(G__93214__$2,cljc.java_time.local_time.midnight));
if((G__93214__$3 == null)){
return null;
} else {
return com.fulcrologic.rad.type_support.date_time.local_datetime__GT_inst.cljs$core$IFn$_invoke$arity$1(G__93214__$3);
}
})();
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__93213) : onChange.call(null,G__93213));
} else {
return null;
}
})], null)], 0))], null),null);
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_time_instant_input = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$ui_date_time_instant_input(_,p__93215){
var map__93216 = p__93215;
var map__93216__$1 = cljs.core.__destructure_map(map__93216);
var props = map__93216__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93216__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93216__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93216__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var value__$1 = (((value == null))?"":com.fulcrologic.rad.type_support.date_time.inst__GT_html_datetime_string.cljs$core$IFn$_invoke$arity$1(value));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,(function (){var G__93217 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var date_time_string = com.fulcrologic.fulcro.dom.events.target_value(evt);
var instant = com.fulcrologic.rad.type_support.date_time.html_datetime_string__GT_inst.cljs$core$IFn$_invoke$arity$1(date_time_string);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(instant) : onChange.call(null,instant));
} else {
return null;
}
})], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93217,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true);
} else {
return G__93217;
}
})()], 0))], null),null);
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.date_time_control = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$date_time_control(render_env){
var G__93218 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(render_env,new cljs.core.Keyword(null,"input-factory","input-factory",-1266208972),com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_time_instant_input);
return (com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1(G__93218) : com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.call(null,G__93218));
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.midnight_on_date_control = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$midnight_on_date_control(render_env){
var G__93219 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(render_env,new cljs.core.Keyword(null,"input-factory","input-factory",-1266208972),com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_instant_input,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs","default-local-time","com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs/default-local-time",1906185405),cljc.java_time.local_time.midnight], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1(G__93219) : com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.call(null,G__93219));
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.midnight_next_date_control = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$midnight_next_date_control(render_env){
var G__93220 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(render_env,new cljs.core.Keyword(null,"input-factory","input-factory",-1266208972),com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_ending_date_instant_input);
return (com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1(G__93220) : com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.call(null,G__93220));
});
com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.date_at_noon_control = (function com$fulcrologic$rad$rendering$semantic_ui$controls$instant_inputs$date_at_noon_control(render_env){
var G__93221 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(render_env,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs","default-local-time","com.fulcrologic.rad.rendering.semantic-ui.controls.instant-inputs/default-local-time",1906185405),cljc.java_time.local_time.noon,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-factory","input-factory",-1266208972),com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.ui_date_instant_input], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.cljs$core$IFn$_invoke$arity$1(G__93221) : com.fulcrologic.rad.rendering.semantic_ui.controls.control.ui_control.call(null,G__93221));
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.controls.instant_inputs.js.map
