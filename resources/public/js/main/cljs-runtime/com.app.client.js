goog.provide('com.app.client');
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.client !== 'undefined') && (typeof com.app.client.stats_accumulator !== 'undefined')){
} else {
com.app.client.stats_accumulator = taoensso.tufte.add_accumulating_handler_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986),"*"], null));
}
/**
 * 
 */
com.app.client.fix_route = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.app.client","fix-route","com.app.client/fix-route",-1632557984,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.app.client","fix-route","com.app.client/fix-route",-1632557984,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$app$client$action(p__60579){
var map__60580 = p__60579;
var map__60580__$1 = cljs.core.__destructure_map(map__60580);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60580__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__60581_60585 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60582_60586 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60582_60586);

try{var logged_in_60587 = com.fulcrologic.rad.authorization.verified_authorities(app);
if(cljs.core.empty_QMARK_(logged_in_60587)){
com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(app,com.app.ui.LandingPage,cljs.core.PersistentArrayMap.EMPTY);
} else {
com.fulcrologic.rad.routing.html5_history.restore_route_BANG_(app,com.app.ui.LandingPage,cljs.core.PersistentArrayMap.EMPTY);
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60581_60585);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__60583 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__60584 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__60584);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__60583);
}})], null);
}));
com.app.client.setup_RAD = (function com$app$client$setup_RAD(app){
com.fulcrologic.rad.application.install_ui_controls_BANG_(app,com.fulcrologic.rad.rendering.semantic_ui.semantic_ui_controls.all_controls);

return com.fulcrologic.rad.report.install_formatter_BANG_(app,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"affirmation","affirmation",1356412315),(function (_,value){
if(cljs.core.truth_(value)){
return "yes";
} else {
return "no";
}
}));
});
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.client !== 'undefined') && (typeof com.app.client.app !== 'undefined')){
} else {
com.app.client.app = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.version18.with_react18(com.fulcrologic.rad.application.fulcro_rad_app(cljs.core.PersistentArrayMap.EMPTY))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null));
}
com.app.client.refresh = (function com$app$client$refresh(){
com.app.client.setup_RAD(com.app.client.app);

com.fulcrologic.fulcro.components.refresh_dynamic_queries_BANG_.cljs$core$IFn$_invoke$arity$1(com.app.client.app);

return com.fulcrologic.fulcro.application.force_root_render_BANG_(com.app.client.app);
});
com.app.client.init = (function com$app$client$init(){
taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),com.fulcrologic.fulcro.algorithms.timbre_support.prefix_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),com.fulcrologic.fulcro.algorithms.timbre_support.console_appender()], null)], null));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.app.client",null,52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting App"], null);
}),null)),null,-1349877128,null);

com.fulcrologic.rad.type_support.date_time.set_timezone_BANG_("America/Bogota");

com.fulcrologic.fulcro.application.set_root_BANG_(com.app.client.app,com.app.ui.Root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),true], null));

com.fulcrologic.fulcro.routing.dynamic_routing.initialize_BANG_(com.app.client.app);

com.app.client.setup_RAD(com.app.client.app);

com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2(com.app.client.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["landing-page"], null));

com.fulcrologic.rad.routing.history.install_route_history_BANG_.cljs$core$IFn$_invoke$arity$2(com.app.client.app,com.fulcrologic.rad.routing.html5_history.new_html5_history(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),com.app.client.app,new cljs.core.Keyword(null,"default-route","default-route",-1491022475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["landing-page"], null)], null)], null)));

com.fulcrologic.rad.authorization.start_BANG_.cljs$core$IFn$_invoke$arity$3(com.app.client.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.ui.login_dialog.LoginForm], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after-session-check","after-session-check",918954954),new cljs.core.Symbol("com.app.client","fix-route","com.app.client/fix-route",-1632557984,null)], null));

return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$4(com.app.client.app,com.app.ui.Root,"app",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize-state?","initialize-state?",-189550519),false], null));
});
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.client !== 'undefined') && (typeof com.app.client.performance_stats !== 'undefined')){
} else {
com.app.client.performance_stats = taoensso.tufte.add_accumulating_handler_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Dump the currently-collected performance stats
 */
com.app.client.pperf = (function com$app$client$pperf(){
var stats = cljs.core.not_empty(cljs.core.deref(com.app.client.performance_stats));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$1(stats)], 0));
});

//# sourceMappingURL=com.app.client.js.map
