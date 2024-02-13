goog.provide('com.fulcrologic.fulcro.routing.dynamic_routing');
goog.scope(function(){
  com.fulcrologic.fulcro.routing.dynamic_routing.goog$module$shadow$loader = goog.module.get('shadow.loader');
  com.fulcrologic.fulcro.routing.dynamic_routing.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * INTERNAL USE ONLY. Not guaranteed to be available at runtime in production builds. This is used to aid in giving
 * development-time warnings/errors.
 * 
 * Class of the routing target component, available in the notifications fns
 * (:will-enter, :route-cancelled, :will-leave)
 */
com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = null;
/**
 * Returns a vector that describes the sub-path that a given route target represents. String elements represent
 *   explicit path elements, and keywords represent variable values (which are always pulled as strings).
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_segment = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_segment(class$){
var result = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (!((((result == null)) || (cljs.core.vector_QMARK_(result)))));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route segment should be a vector!"], null);
}),null)),null,-90433102,null);
} else {
}

return result;
});
/**
 * Returns the function that should be called if this target was in a deferred state and a different routing choice was made. Is given the same route parameters that were sent to `will-enter`.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_route_cancelled(class$){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-cancelled","route-cancelled",-1402397214)], 0));
});
/**
 * Universal CLJC version of route-cancelled.  Don't use the protocol method in CLJ.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_cancelled(class$,route_params){
var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_route_cancelled(class$);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__83373 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__83374 = class$;
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__83374);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(route_params) : f.call(null,route_params));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__83373);
}} else {
return null;
}
});
/**
 * Returns the function that is called before a route target is activated (if the route segment of interest has changed and the
 *   target of the result is this target).  MUST return (r/route-immediate ident) or (r/route-deferred ident) to indicate
 *   what ident should be used in app state to connect the router's join.  If deferred, the router must cause a call to
 *   the r/target-ready mutation (or use the target-ready* mutation helper) with a {:target ident} parameter to indicate
 *   that the route target is loaded and ready for display.
 * 
 *   `params` will be a map from any keywords found in `route-segment` to the string value of that path element.
 * 
 *   WARNING: This method MUST be side-effect free.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_enter(class$){
var temp__5802__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(class$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-enter","will-enter",-692415624)], 0));
if(cljs.core.truth_(temp__5802__auto__)){
var will_enter = temp__5802__auto__;
return will_enter;
} else {
var ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(ident)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,77,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Component must have an ident for routing to work properly:",com.fulcrologic.fulcro.raw.components.component_name(class$),"See https://book.fulcrologic.com/#err-dr-comp-needs-ident"], null);
}),null)),null,-2067255549,null);
}

return (function (_,___$1){
return (com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.cljs$core$IFn$_invoke$arity$1(ident) : com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate.call(null,ident));
});
}
});
/**
 * Universal CLJC version of will-enter.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.will_enter = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_enter(class$,app,params){
var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_enter(class$);
if(cljs.core.truth_(temp__5804__auto__)){
var will_enter = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__83375 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__83376 = class$;
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__83376);

try{return (will_enter.cljs$core$IFn$_invoke$arity$2 ? will_enter.cljs$core$IFn$_invoke$arity$2(app,params) : will_enter.call(null,app,params));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__83375);
}} else {
return null;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0)));
});
/**
 * Returns the function of a route target to be called with
 *   the current component and props. If it returns `true` then the routing operation will continue.  If it returns `false`
 *   then whatever new route was requested will be completely abandoned. If this component has a `allow-route-change?`
 *   then the return value of will-leave will be ignored.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_will_leave(this$){
var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.constantly(true);
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.will_leave = (function com$fulcrologic$fulcro$routing$dynamic_routing$will_leave(c,props){
var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_will_leave(c);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__83377 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__83378 = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"type","type",1174270348));
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__83378);

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(c,props) : f.call(null,c,props));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__83377);
}} else {
return null;
}
});
/**
 * Returns the function of a route target to be called with the current component and props.
 * If it returns `true` then the routing operation can continue.  If it returns `false`
 * then whatever new route was requested will be completely abandoned. This handler MUST NOT side-effect, and
 * may be called multiple times on a single route request.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_allow_route_change_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_allow_route_change_QMARK_(this$){
var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"allow-route-change?","allow-route-change?",173143289)], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0));
if(cljs.core.truth_(temp__5804__auto__)){
var will_leave = temp__5804__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,111,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEPRECATED USE OF `:will-leave` to check for allowable routing. You should add :allow-route-change? to: ",com.fulcrologic.fulcro.raw.components.component_name(this$),"See https://book.fulcrologic.com/#warn-routing-will-leave-deprecated"], null);
}),null)),null,-1474639985,null);

return (function (){
var G__83379 = this$;
var G__83380 = com.fulcrologic.fulcro.raw.components.props(this$);
return (will_leave.cljs$core$IFn$_invoke$arity$2 ? will_leave.cljs$core$IFn$_invoke$arity$2(G__83379,G__83380) : will_leave.call(null,G__83379,G__83380));
});
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.constantly(true);
}
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.allow_route_change_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$allow_route_change_QMARK_(c){
try{var temp__5804__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.get_allow_route_change_QMARK_(c);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var _STAR_target_class_STAR__orig_val__83382 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
var _STAR_target_class_STAR__temp_val__83383 = com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"type","type",1174270348));
(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__temp_val__83383);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}finally {(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_ = _STAR_target_class_STAR__orig_val__83382);
}} else {
return null;
}
}catch (e83381){var e = e83381;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,121,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot evaluate route change. Assuming ok. Exception message: ",cljs.core.ex_message(e),"See https://book.fulcrologic.com/#err-dr-cant-eval-route-chng"], null);
}),null)),null,-1298244854,null);

return true;
}});
com.fulcrologic.fulcro.routing.dynamic_routing.route_lifecycle_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_lifecycle_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517)], 0)));
});
/**
 * Returns a set of classes to which this router routes, including dynamic ones if possible.
 * 
 * `router` - A router instance, class, or registry key, or ident.
 * `state-map` - The current app state
 * 
 * If `router` is a class or registry key you'll get the static list
 * from component options unless you also supply the state-map (it will attempt to use rc/*query-state* if it is bound). 
 */
com.fulcrologic.fulcro.routing.dynamic_routing.get_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$get_targets(var_args){
var G__83385 = arguments.length;
switch (G__83385) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$core$IFn$_invoke$arity$1 = (function (router){
var sm = ((com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(router))?com.fulcrologic.fulcro.application.current_state(router):(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
return com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$core$IFn$_invoke$arity$2(router,sm);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$core$IFn$_invoke$arity$2 = (function (router,state_map){
var b2__2953__auto__ = ((com.fulcrologic.fulcro.raw.components.component_class_QMARK_(router))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [router,com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(router,cljs.core.PersistentArrayMap.EMPTY)], null):((com.fulcrologic.fulcro.raw.components.component_instance_QMARK_(router))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [router,com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$1(router)], null):((edn_query_language.core.ident_QMARK_(router))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.raw.components.registry_key__GT_class(cljs.core.second(router)),router], null):((com.fulcrologic.fulcro.raw.components.legal_registry_lookup_key_QMARK_(router))?(function (){var b2__2953__auto__ = (function (){var G__83386 = router;
if((G__83386 == null)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.registry_key__GT_class(G__83386);
}
})();
if(cljs.core.truth_(b2__2953__auto__)){
var cls = b2__2953__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cls,com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(cls,cljs.core.PersistentArrayMap.EMPTY)], null);
} else {
return null;
}
})():null))));
if(cljs.core.truth_(b2__2953__auto__)){
var vec__83387 = b2__2953__auto__;
var router__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83387,(0),null);
var router_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83387,(1),null);
var b2__2953__auto____$1 = cljs.core.set(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(router__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
if(cljs.core.truth_(b2__2953__auto____$1)){
var static_router_targets = b2__2953__auto____$1;
var b2__2953__auto____$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(static_router_targets,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.registry_key__GT_class),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","dynamic-router-targets","com.fulcrologic.fulcro.routing.dynamic-routing/dynamic-router-targets",-786251636))));
if(cljs.core.truth_(b2__2953__auto____$2)){
var router_targets = b2__2953__auto____$2;
return router_targets;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.routing.dynamic_routing.ident_matches_expectation_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$ident_matches_expectation_QMARK_(p__83390,p__83391){
var vec__83392 = p__83390;
var expected_table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83392,(0),null);
var maybe_expected_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83392,(1),null);
var vec__83395 = p__83391;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83395,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83395,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected_table,table)) && ((((maybe_expected_id == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(maybe_expected_id,id)))));
});
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$check_ident_matches_expectation_QMARK_(fn_name,ident){
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_;
if(cljs.core.truth_(and__5043__auto____$1)){
return (!(com.fulcrologic.fulcro.routing.dynamic_routing.ident_matches_expectation_QMARK_(com.fulcrologic.fulcro.raw.components.ident(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_,cljs.core.PersistentArrayMap.EMPTY),ident)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,162,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_name," was invoked with the ident ",ident," which doesn't seem to match the ident of the wrapping component (class ",com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_," , ident [",cljs.core.first(com.fulcrologic.fulcro.raw.components.ident(com.fulcrologic.fulcro.routing.dynamic_routing._STAR_target_class_STAR_,cljs.core.PersistentArrayMap.EMPTY))," ...]) See https://book.fulcrologic.com/#err-dr-ident-mismatch"], null);
}),null)),null,-1399580335,null);
} else {
return null;
}
});
/**
 * Used as a return value from `will-enter`. Instructs the routing system that you would like this target to be
 * routed to as soon as possible. UI switching defaults to depth-first to prevent flicker.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_immediate = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_immediate(ident){
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_("route-immediate",ident);

return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),true], null));
});
/**
 * Used as a return value from `will-enter`. Instructs the router to run the `completion-fn`. The completion function
 * *must* use the mutation `target-ready` or function `target-ready!` to indicate when it is ready for the target to
 * appear on-screen.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_deferred(ident,completion_fn){
com.fulcrologic.fulcro.routing.dynamic_routing.check_ident_matches_expectation_QMARK_("route-deferred",ident);

return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"immediate","immediate",-1684692069),false,new cljs.core.Keyword(null,"fn","fn",-1175266204),completion_fn], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$immediate_QMARK_(ident){
var G__83399 = ident;
var G__83399__$1 = (((G__83399 == null))?null:cljs.core.meta(G__83399));
if((G__83399__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"immediate","immediate",-1684692069).cljs$core$IFn$_invoke$arity$1(G__83399__$1);
}
});
/**
 * Used as a return value from `will-enter`. Instructs the routing system to execute the `txn` in *routing path order*,
 * and optionally couples these operations into a single transaction. This can be used in cases where you need the
 * side-effects (potentially full-stack) to complete for a parent target before those of a nested target.
 * 
 * The `options` can contain:
 * 
 * * `:optimistic?`  (default false) - When true, don't wait for this transaction to (full-stack) complete before starting
 *   child target effects.
 * * `:route-immediate?` (default false) - When true, apply the UI routing immediately instead of waiting for the transaction
 *   to finish. Of course the UI of the target should then be willing to tolerate the lack of any full-stack result.
 * * `:show-early?` - (default false) - When true each transaction that completes will cause that target to appear. When
 *  false the target won't appear until after all children have completed their non-optimistic path-based transactions.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_with_path_ordered_transaction(var_args){
var G__83401 = arguments.length;
switch (G__83401) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$2 = (function (ident,txn){
return com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3(ident,txn,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$core$IFn$_invoke$arity$3 = (function (ident,txn,p__83402){
var map__83405 = p__83402;
var map__83405__$1 = cljs.core.__destructure_map(map__83405);
var options = map__83405__$1;
var optimistic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83405__$1,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869));
var route_immediate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83405__$1,new cljs.core.Keyword(null,"route-immediate?","route-immediate?",-681888697));
var optimistic_QMARK___$1 = (((!((optimistic_QMARK_ == null))))?optimistic_QMARK_:false);
var route_immediate_QMARK___$1 = (((!((route_immediate_QMARK_ == null))))?route_immediate_QMARK_:false);
return cljs.core.with_meta(ident,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path-ordered?","path-ordered?",1510080295),true,new cljs.core.Keyword(null,"immediate","immediate",-1684692069),route_immediate_QMARK___$1,new cljs.core.Keyword(null,"txn","txn",-469204789),txn,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),optimistic_QMARK___$1], null));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_with_path_ordered_transaction.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$apply_route_STAR_(state_map,p__83406){
var map__83407 = p__83406;
var map__83407__$1 = cljs.core.__destructure_map(map__83407);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83407__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83407__$1,new cljs.core.Keyword(null,"target","target",253001721));
var router_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(router));
var router_id = cljs.core.second(router);
var target_class = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(target));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,211,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Applying route ident",target,"to router",router_id], null);
}),null)),null,1902044889,null);

if((router_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,213,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* was called without a proper :router argument. See https://book.fulcrologic.com/#err-dr-apply-route-lacks-router"], null);
}),null)),null,1365078686,null);
} else {
}

if((target_class == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,215,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["apply-route* for router ",router_class,"was given a target that did not have a component. ","Did you remember to call route-deferred or route-immediate? See https://book.fulcrologic.com/#err-dr-apply-route-no-component"], null);
}),null)),null,-1338784212,null);
} else {
}

return com.fulcrologic.fulcro.raw.components.set_query_STAR_(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)),target),router,cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),router_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(target_class,state_map)], null)], null)], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_for_pending_target(state_map,target){
var routers = (function (){var G__83408 = state_map;
var G__83408__$1 = (((G__83408 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(G__83408));
if((G__83408__$1 == null)){
return null;
} else {
return cljs.core.vals(G__83408__$1);
}
})();
var router_id = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,r){
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r) == null);
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,226,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a router in state that is missing an ID. This indicates that","you forgot to compose it into your initial state! It will fail to operate properly. See https://book.fulcrologic.com/#err-dr-router-missing-id"], null);
}),null)),null,-267733643,null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,(function (){var G__83409 = r;
var G__83409__$1 = (((G__83409 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373).cljs$core$IFn$_invoke$arity$1(G__83409));
if((G__83409__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__83409__$1);
}
})())){
return cljs.core.reduced(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(r));
} else {
return null;
}
}),null,routers);
return router_id;
});
/**
 * Mutation: Indicate that a target is ready.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),(function (fulcro_mutation_env_symbol){
var map__83410 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__83410__$1 = cljs.core.__destructure_map(map__83410);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83410__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function com$fulcrologic$fulcro$routing$dynamic_routing$refresh(_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null);
}),new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__83411){
var map__83412 = p__83411;
var map__83412__$1 = cljs.core.__destructure_map(map__83412);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83412__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__83413_83710 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__83414_83711 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__83414_83711);

try{var state_map_83712 = com.fulcrologic.fulcro.application.current_state(app);
var router_id_83713 = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map_83712,target);
if(cljs.core.truth_(router_id_83713)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,242,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Router",router_id_83713,"notified that pending route is ready."], null);
}),null)),null,361639279,null);

if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map_83712,target) == null);
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,244,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","target-ready","com.fulcrologic.fulcro.routing.dynamic-routing/target-ready",-111862826,null),"should route to",target,"but there is no data in the DB for the ident.","Perhaps you supplied a wrong ident? See https://book.fulcrologic.com/#err-dr-target-ready-missing-data"], null);
}),null)),null,666556408,null);
} else {
}

com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app,router_id_83713,new cljs.core.Keyword(null,"ready!","ready!",-1695278696));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,247,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dr/target-ready! was called but there was no router waiting for the target listed: ",target,"This could mean you sent one ident, and indicated ready on another. See https://book.fulcrologic.com/#err-dr-target-ready-no-router-waiting"], null);
}),null)),null,-1943383367,null);
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__83413_83710);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__83415 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__83416 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__83416);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__83415);
}})], null);
}));
/**
 * Indicate a target is ready.  Safe to use from within mutations.
 * 
 *   target - The ident that was originally listed as a deferred target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_ready_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_BANG_(component_or_app,target){
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component_or_app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__83417 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__83417) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__83417));
})()], null));
});
com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$router_QMARK_(component){
return cljs.core.boolean$(com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router-targets","router-targets",1582229763)], 0)));
});
/**
 * Returns the elements of actual-path that match the route-segment definition.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix = (function com$fulcrologic$fulcro$routing$dynamic_routing$matching_prefix(route_segment,actual_path){
var matching_segment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__83418){
var vec__83419 = p__83418;
var expected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83419,(0),null);
var actual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83419,(1),null);
if(((typeof expected === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,actual);
} else {
if((((expected instanceof cljs.core.Keyword)) && (cljs.core.seq(cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual));
} else {
return result;

}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),route_segment,actual_path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matching_segment),cljs.core.count(route_segment))){
return matching_segment;
} else {
return null;
}
});
/**
 * Get the class of the component that is currently being routed to.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route_class(this$){
var state_map = com.fulcrologic.fulcro.application.current_state(com.fulcrologic.fulcro.raw.components.any__GT_app(this$));
var class$ = (function (){var G__83423 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(this$,state_map);
var G__83423__$1 = (((G__83423 == null))?null:edn_query_language.core.query__GT_ast(G__83423));
var G__83423__$2 = (((G__83423__$1 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__83423__$1));
var G__83423__$3 = (((G__83423__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83422_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__83422_SHARP_));
}),G__83423__$2));
var G__83423__$4 = (((G__83423__$3 == null))?null:cljs.core.first(G__83423__$3));
if((G__83423__$4 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__83423__$4);
}
})();
var class$__$1 = (cljs.core.truth_(goog.DEBUG)?com.fulcrologic.fulcro.raw.components.registry_key__GT_class(com.fulcrologic.fulcro.raw.components.class__GT_registry_key(class$)):class$);
return class$__$1;
});
/**
 * Given a router class and a path segment, returns the class of *that router's* target that accepts the given URI path,
 *   which is a vector of (string) URI components. `state-map` is required if you want it to work with dynamic targets.
 * 
 *   Returns nil if there is no target that accepts the path, or a map containing:
 * 
 *   {:target class
 * :matching-prefix prefix}
 * 
 *   where `class` is the component class that accepts the path (the target, NOT the router), and `matching-prefix` is the
 *   portion of the path that is accepted by that class.
 * 
 *   NOTE: If more than one target matches, then the target with the longest match will be returned. A warning will be
 *   printed if more than one match of equal length is found.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_target(var_args){
var G__83426 = arguments.length;
switch (G__83426) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$core$IFn$_invoke$arity$2 = (function (router_class,path){
return com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$core$IFn$_invoke$arity$3(router_class,path,com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$core$IFn$_invoke$arity$3 = (function (router_class,path,state_map){
if(cljs.core.truth_((function (){var and__5043__auto__ = router_class;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class);
} else {
return and__5043__auto__;
}
})())){
var targets = com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$core$IFn$_invoke$arity$2(router_class,state_map);
var matches = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"length","length",588987862),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,target_class){
var prefix = (function (){var and__5043__auto__ = target_class;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target_QMARK_(target_class);
if(and__5043__auto____$1){
var G__83428 = target_class;
var G__83428__$1 = (((G__83428 == null))?null:com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__83428));
if((G__83428__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.matching_prefix(G__83428__$1,path);
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = prefix;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq(prefix);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"length","length",588987862),cljs.core.count(prefix),new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173),prefix,new cljs.core.Keyword(null,"target","target",253001721),target_class], null));
} else {
return result;
}
}),cljs.core.PersistentVector.EMPTY,targets)));
var max_length = (function (){var G__83429 = matches;
var G__83429__$1 = (((G__83429 == null))?null:cljs.core.first(G__83429));
if((G__83429__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(G__83429__$1);
}
})();
var match = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83424_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_length,new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p1__83424_SHARP_));
}),matches);
if(cljs.core.truth_(cljs.core.second(match))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,322,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["More than one route target matches",path,"See https://book.fulcrologic.com/#warn-routing-multiple-target-matches"], null);
}),null)),null,1995588258,null);
} else {
}

return cljs.core.first(match);
} else {
return null;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if the given component is a router that manages a route target that will accept the given path.
 * Requires `state-map` to work on dynamically-added routes.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$accepts_route_QMARK_(var_args){
var G__83431 = arguments.length;
switch (G__83431) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (component,path){
return com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_.cljs$core$IFn$_invoke$arity$3(component,path,com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (component,path,state_map){
return cljs.core.boolean$(com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$core$IFn$_invoke$arity$3(component,path,state_map));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Returns the AST node for a query that represents the router that has a target that can accept the given path. This is a breadth-first
 *   search.
 * 
 *   ast - A query AST node
 *   path - A vector of the current URI segments.
 *   state-map - Application state map, required for support of dynamically-added routes.
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_route(var_args){
var G__83435 = arguments.length;
switch (G__83435) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$2 = (function (p__83436,path){
var map__83437 = p__83436;
var map__83437__$1 = cljs.core.__destructure_map(map__83437);
var ast_node = map__83437__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83437__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3(ast_node,path,com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3 = (function (p__83438,path,state_map){
var map__83439 = p__83438;
var map__83439__$1 = cljs.core.__destructure_map(map__83439);
var ast_node = map__83439__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83439__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83439__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__5045__auto__ = (function (){var and__5043__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_.cljs$core$IFn$_invoke$arity$3(component,path,state_map);
if(and__5043__auto__){
return ast_node;
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.some((function (p1__83432_SHARP_){
var and__5043__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.accepts_route_QMARK_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__83432_SHARP_),path,state_map);
if(and__5043__auto__){
return p1__83432_SHARP_;
} else {
return and__5043__auto__;
}
}),children);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.some((function (p1__83433_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3(p1__83433_SHARP_,path,state_map);
}),children);
}
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$lang$maxFixedArity = 3);

/**
 * Returns the AST node for a query that represents the closest "live" (on-screen) router
 * 
 *   ast - A query AST node
 * 
 *   Returns an AST node or nil if none is found.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router(app,p__83442){
var map__83443 = p__83442;
var map__83443__$1 = cljs.core.__destructure_map(map__83443);
var ast_node = map__83443__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83443__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var live_router_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$ast_node_for_live_router_$_live_router_QMARK_(c){
return ((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(c)) && (cljs.core.boolean$(com.fulcrologic.fulcro.components.class__GT_any(app,c))));
});
var or__5045__auto__ = (function (){var and__5043__auto__ = live_router_QMARK_(component);
if(cljs.core.truth_(and__5043__auto__)){
return ast_node;
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.some((function (p1__83440_SHARP_){
var and__5043__auto__ = live_router_QMARK_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(p1__83440_SHARP_));
if(cljs.core.truth_(and__5043__auto__)){
return p1__83440_SHARP_;
} else {
return and__5043__auto__;
}
}),children);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.some((function (p1__83441_SHARP_){
return (com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.cljs$core$IFn$_invoke$arity$2(app,p1__83441_SHARP_) : com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router.call(null,app,p1__83441_SHARP_));
}),children);
}
}
});
/**
 * Mutation: Indicate that a given route is ready and should show the result.
 * 
 *   router - The ident of the router, with metadata :component that is the class of the router.
 *   target - The ident of the target route, with metadata :component that is the class of the target.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.apply_route = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","apply-route","com.fulcrologic.fulcro.routing.dynamic-routing/apply-route",-2135500172,null),(function (fulcro_mutation_env_symbol){
var map__83445 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__83445__$1 = cljs.core.__destructure_map(map__83445);
var params = map__83445__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83445__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83445__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__83446){
var map__83447 = p__83446;
var map__83447__$1 = cljs.core.__destructure_map(map__83447);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83447__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83447__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__83448_83717 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__83449_83718 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__83449_83718);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,params);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__83448_83717);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__83450 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__83451 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__83451);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__83450);
}})], null);
}));
com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$mark_route_pending_STAR_(state_map,p__83452){
var map__83453 = p__83452;
var map__83453__$1 = cljs.core.__destructure_map(map__83453);
var params = map__83453__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83453__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83453__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)),params);
});
var target_ready_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_ready_STAR_(state_map,target){
var router_id = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,target);
if(cljs.core.truth_(router_id)){
return com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_(state_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)], null)));
} else {
return state_map;
}
});
com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$ready_handler(env){
var new_env = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268))),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),cljs.core.PersistentVector.EMPTY),target_ready_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"target","target",253001721))], 0));
var app = new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(app)){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$fail_handler(env){
return env;
});
com.fulcrologic.fulcro.routing.dynamic_routing.route_handler = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_handler(p__83454){
var map__83455 = p__83454;
var map__83455__$1 = cljs.core.__destructure_map(map__83455);
var env = map__83455__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83455__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83455__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__83456 = event_data;
var map__83456__$1 = cljs.core.__destructure_map(map__83456);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83456__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83456__$1,new cljs.core.Keyword(null,"target","target",253001721));
var error_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83456__$1,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000));
var deferred_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83456__$1,new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(20));
var path_segment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83456__$1,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var immediate_QMARK_ = com.fulcrologic.fulcro.routing.dynamic_routing.immediate_QMARK_(target);
return com.fulcrologic.fulcro.ui_state_machines.store((cljs.core.truth_(immediate_QMARK_)?(function (){var new_env = com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.apply_route_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"routed","routed",-707282794));
if(cljs.core.truth_(app)){
com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0 ? com.fulcrologic.fulcro.algorithms.indexing.reindex.cljs$core$IFn$_invoke$arity$0() : com.fulcrologic.fulcro.algorithms.indexing.reindex.call(null))], null));
} else {
}

return new_env;
})():com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.set_timeout.cljs$core$IFn$_invoke$arity$6(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),path_segment),com.fulcrologic.fulcro.routing.dynamic_routing.mark_route_pending_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0)),new cljs.core.Keyword(null,"error-timer","error-timer",347765002),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),cljs.core.PersistentArrayMap.EMPTY,error_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"delay-timer","delay-timer",-920427787),new cljs.core.Keyword(null,"waiting!","waiting!",373081239),cljs.core.PersistentArrayMap.EMPTY,deferred_timeout,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),null,new cljs.core.Keyword(null,"ready!","ready!",-1695278696),null], null), null)),new cljs.core.Keyword(null,"deferred","deferred",-1976960688))),new cljs.core.Keyword(null,"target","target",253001721),target);
});
com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","RouterStateMachine","com.fulcrologic.fulcro.routing.dynamic-routing/RouterStateMachine",1134286079,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-state","com.fulcrologic.fulcro.routing.dynamic-routing/current-state",2011639269)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.fail_handler], null)], null)], null),new cljs.core.Keyword(null,"failed","failed",-1397425762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null),new cljs.core.Keyword(null,"ready!","ready!",-1695278696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","target-state","com.fulcrologic.fulcro.ui-state-machines/target-state",-332924947),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.ready_handler], null)], null)], null),new cljs.core.Keyword(null,"routed","routed",-707282794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"waiting!","waiting!",373081239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"timeout!","timeout!",-316117497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),cljs.core.identity], null),new cljs.core.Keyword(null,"route!","route!",-1286958144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.fulcro.routing.dynamic_routing.route_handler], null)], null)], null)], null)], null));
/**
 * Internal algorithm: Returns a sequence of idents of the targets that the `new-route` goes through by analyzing the current
 *   application query and state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$proposed_new_path(var_args){
var G__83458 = arguments.length;
switch (G__83458) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4 = (function (this_or_app,relative_class_or_instance,new_route,timeouts_and_params){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(relative_class_or_instance,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3(ast,new_route,state_map);
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__83460_83720 = root;
var map__83461_83721 = G__83460_83720;
var map__83461_83722__$1 = cljs.core.__destructure_map(map__83461_83721);
var component_83723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83461_83722__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_83724 = new_route;
var G__83460_83725__$1 = G__83460_83720;
var path_83726__$1 = path_83724;
while(true){
var map__83470_83727 = G__83460_83725__$1;
var map__83470_83728__$1 = cljs.core.__destructure_map(map__83470_83727);
var component_83729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83470_83728__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_83730__$2 = path_83726__$1;
if(cljs.core.truth_((function (){var and__5043__auto__ = component_83729__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_83729__$1);
} else {
return and__5043__auto__;
}
})())){
var map__83471_83731 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$core$IFn$_invoke$arity$3(component_83729__$1,path_83730__$2,state_map);
var map__83471_83732__$1 = cljs.core.__destructure_map(map__83471_83731);
var target_83733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83471_83732__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_83734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83471_83732__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_83735 = (function (){var G__83472 = target_83733;
var G__83472__$1 = (((G__83472 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__83472,state_map));
if((G__83472__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__83472__$1);
}
})();
var prefix_length_83736 = cljs.core.count(matching_prefix_83734);
var remaining_path_83737 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_83736,path_83730__$2));
var segment_83738 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_83733);
var params_83739 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__83460_83725__$1,path_83726__$1,map__83471_83731,map__83471_83732__$1,target_83733,matching_prefix_83734,target_ast_83735,prefix_length_83736,remaining_path_83737,segment_83738,map__83470_83727,map__83470_83728__$1,component_83729__$1,path_83730__$2,G__83460_83720,map__83461_83721,map__83461_83722__$1,component_83723,path_83724,app,state_map,root_query,ast,root,result){
return (function (p,p__83473){
var vec__83474 = p__83473;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83474,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83474,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__83460_83725__$1,path_83726__$1,map__83471_83731,map__83471_83732__$1,target_83733,matching_prefix_83734,target_ast_83735,prefix_length_83736,remaining_path_83737,segment_83738,map__83470_83727,map__83470_83728__$1,component_83729__$1,path_83730__$2,G__83460_83720,map__83461_83721,map__83461_83722__$1,component_83723,path_83724,app,state_map,root_query,ast,root,result))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(timeouts_and_params,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__83460_83725__$1,path_83726__$1,map__83471_83731,map__83471_83732__$1,target_83733,matching_prefix_83734,target_ast_83735,prefix_length_83736,remaining_path_83737,segment_83738,map__83470_83727,map__83470_83728__$1,component_83729__$1,path_83730__$2,G__83460_83720,map__83461_83721,map__83461_83722__$1,component_83723,path_83724,app,state_map,root_query,ast,root,result){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__83460_83725__$1,path_83726__$1,map__83471_83731,map__83471_83732__$1,target_83733,matching_prefix_83734,target_ast_83735,prefix_length_83736,remaining_path_83737,segment_83738,map__83470_83727,map__83470_83728__$1,component_83729__$1,path_83730__$2,G__83460_83720,map__83461_83721,map__83461_83722__$1,component_83723,path_83724,app,state_map,root_query,ast,root,result))
,segment_83738,matching_prefix_83734));
var target_ident_83740 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_83733,app,params_83739);
if((((!(edn_query_language.core.ident_QMARK_(target_ident_83740)))) || ((cljs.core.second(target_ident_83740) == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,475,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__83460_83725__$1,path_83726__$1,map__83471_83731,map__83471_83732__$1,target_83733,matching_prefix_83734,target_ast_83735,prefix_length_83736,remaining_path_83737,segment_83738,params_83739,target_ident_83740,map__83470_83727,map__83470_83728__$1,component_83729__$1,path_83730__$2,G__83460_83720,map__83461_83721,map__83461_83722__$1,component_83723,path_83724,app,state_map,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.raw.components.component_name(target_83733),"did not return a valid ident. Instead it returned: ",target_ident_83740,"See https://book.fulcrologic.com/#err-dr-will-enter-invalid-ident"], null);
});})(G__83460_83725__$1,path_83726__$1,map__83471_83731,map__83471_83732__$1,target_83733,matching_prefix_83734,target_ast_83735,prefix_length_83736,remaining_path_83737,segment_83738,params_83739,target_ident_83740,map__83470_83727,map__83470_83728__$1,component_83729__$1,path_83730__$2,G__83460_83720,map__83461_83721,map__83461_83722__$1,component_83723,path_83724,app,state_map,root_query,ast,root,result))
,null)),null,1668650219,null);
} else {
}

if(((edn_query_language.core.ident_QMARK_(target_ident_83740)) && ((!(cljs.core.contains_QMARK_((function (){var G__83478 = target_ident_83740;
if((G__83478 == null)){
return null;
} else {
return cljs.core.meta(G__83478);
}
})(),new cljs.core.Keyword(null,"immediate","immediate",-1684692069))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,478,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__83460_83725__$1,path_83726__$1,map__83471_83731,map__83471_83732__$1,target_83733,matching_prefix_83734,target_ast_83735,prefix_length_83736,remaining_path_83737,segment_83738,params_83739,target_ident_83740,map__83470_83727,map__83470_83728__$1,component_83729__$1,path_83730__$2,G__83460_83720,map__83461_83721,map__83461_83722__$1,component_83723,path_83724,app,state_map,root_query,ast,root,result){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["will-enter for router target",com.fulcrologic.fulcro.raw.components.component_name(target_83733),"did not wrap the ident in route-immediate, route-deferred, or route-with-path-ordered-transaction. See https://book.fulcrologic.com/#err-dr-will-enter-missing-metadata"], null);
});})(G__83460_83725__$1,path_83726__$1,map__83471_83731,map__83471_83732__$1,target_83733,matching_prefix_83734,target_ast_83735,prefix_length_83736,remaining_path_83737,segment_83738,params_83739,target_ident_83740,map__83470_83727,map__83470_83728__$1,component_83729__$1,path_83730__$2,G__83460_83720,map__83461_83721,map__83461_83722__$1,component_83723,path_83724,app,state_map,root_query,ast,root,result))
,null)),null,-1818587973,null);
} else {
}

if(cljs.core.vector_QMARK_(target_ident_83740)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.conj,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_83740,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_83733,new cljs.core.Keyword(null,"params","params",710516235),params_83739));
} else {
}

if(cljs.core.seq(remaining_path_83737)){
var G__83741 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3(target_ast_83735,remaining_path_83737,state_map);
var G__83742 = remaining_path_83737;
G__83460_83725__$1 = G__83741;
path_83726__$1 = G__83742;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$lang$maxFixedArity = 4);

/**
 * Tell active routers that they are about to leave the screen. Returns false if any of them deny the route change.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving = (function com$fulcrologic$fulcro$routing$dynamic_routing$signal_router_leaving(var_args){
var G__83483 = arguments.length;
switch (G__83483) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts_and_params){
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance,new_route,timeouts_and_params);
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,ast);
var to_signal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var to_cancel = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var _ = (function (){var G__83485 = root;
var map__83486 = G__83485;
var map__83486__$1 = cljs.core.__destructure_map(map__83486);
var node = map__83486__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83486__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining = new_path;
var G__83485__$1 = G__83485;
var new_path_remaining__$1 = new_path_remaining;
while(true){
var map__83487 = G__83485__$1;
var map__83487__$1 = cljs.core.__destructure_map(map__83487);
var node__$1 = map__83487__$1;
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83487__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_path_remaining__$2 = new_path_remaining__$1;
if(cljs.core.truth_((function (){var and__5043__auto__ = component__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__5043__auto__;
}
})())){
var new_target = cljs.core.first(new_path_remaining__$2);
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var map__83488 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","pending-route","com.fulcrologic.fulcro.routing.dynamic-routing/pending-route",-1358888373)));
var map__83488__$1 = cljs.core.__destructure_map(map__83488);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83488__$1,new cljs.core.Keyword(null,"target","target",253001721));
var next_router = cljs.core.some(((function (G__83485__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__83488,map__83488__$1,target,map__83487,map__83487__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__83485,map__83486,map__83486__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (p1__83480_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,p1__83480_SHARP_);
});})(G__83485__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__83488,map__83488__$1,target,map__83487,map__83487__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__83485,map__83486,map__83486__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel))
,children__$1);
if(edn_query_language.core.ident_QMARK_(target)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_cancel,cljs.core.conj,target);
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_target,active_target)) && (cljs.core.vector_QMARK_(active_target)))){
var mounted_target_class_83744 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__83485__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__83488,map__83488__$1,target,next_router,map__83487,map__83487__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__83485,map__83486,map__83486__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel){
return (function (acc,p__83489){
var map__83490 = p__83489;
var map__83490__$1 = cljs.core.__destructure_map(map__83490);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83490__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83490__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component__$2);
} else {
return null;
}
});})(G__83485__$1,new_path_remaining__$1,new_target,router_ident,active_target,map__83488,map__83488__$1,target,next_router,map__83487,map__83487__$1,node__$1,component__$1,children__$1,new_path_remaining__$2,G__83485,map__83486,map__83486__$1,node,component,children,new_path_remaining,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel))
,null,(function (){var G__83491 = component__$1;
var G__83491__$1 = (((G__83491 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__83491,state_map));
var G__83491__$2 = (((G__83491__$1 == null))?null:edn_query_language.core.query__GT_ast(G__83491__$1));
if((G__83491__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__83491__$2);
}
})());
var mounted_targets_83745 = com.fulcrologic.fulcro.components.class__GT_all(app,mounted_target_class_83744);
if(cljs.core.seq(mounted_targets_83745)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(to_signal,cljs.core.into,mounted_targets_83745);
} else {
}
} else {
}

if(cljs.core.truth_(next_router)){
var G__83746 = next_router;
var G__83747 = cljs.core.rest(new_path_remaining__$2);
G__83485__$1 = G__83746;
new_path_remaining__$1 = G__83747;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
})();
var components = cljs.core.reverse(cljs.core.deref(to_signal));
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var seq__83492_83748 = cljs.core.seq(components);
var chunk__83493_83749 = null;
var count__83494_83750 = (0);
var i__83495_83751 = (0);
while(true){
if((i__83495_83751 < count__83494_83750)){
var c_83752 = chunk__83493_83749.cljs$core$IIndexed$_nth$arity$2(null,i__83495_83751);
var will_leave_result_83753 = com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_83752,com.fulcrologic.fulcro.raw.components.props(c_83752));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__83492_83748,chunk__83493_83749,count__83494_83750,i__83495_83751,will_leave_result_83753,c_83752,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__83481_SHARP_){
var and__5043__auto__ = p1__83481_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return will_leave_result_83753;
} else {
return and__5043__auto__;
}
});})(seq__83492_83748,chunk__83493_83749,count__83494_83750,i__83495_83751,will_leave_result_83753,c_83752,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__83754 = seq__83492_83748;
var G__83755 = chunk__83493_83749;
var G__83756 = count__83494_83750;
var G__83757 = (i__83495_83751 + (1));
seq__83492_83748 = G__83754;
chunk__83493_83749 = G__83755;
count__83494_83750 = G__83756;
i__83495_83751 = G__83757;
continue;
} else {
var temp__5804__auto___83758 = cljs.core.seq(seq__83492_83748);
if(temp__5804__auto___83758){
var seq__83492_83759__$1 = temp__5804__auto___83758;
if(cljs.core.chunked_seq_QMARK_(seq__83492_83759__$1)){
var c__5568__auto___83760 = cljs.core.chunk_first(seq__83492_83759__$1);
var G__83761 = cljs.core.chunk_rest(seq__83492_83759__$1);
var G__83762 = c__5568__auto___83760;
var G__83763 = cljs.core.count(c__5568__auto___83760);
var G__83764 = (0);
seq__83492_83748 = G__83761;
chunk__83493_83749 = G__83762;
count__83494_83750 = G__83763;
i__83495_83751 = G__83764;
continue;
} else {
var c_83765 = cljs.core.first(seq__83492_83759__$1);
var will_leave_result_83766 = com.fulcrologic.fulcro.routing.dynamic_routing.will_leave(c_83765,com.fulcrologic.fulcro.raw.components.props(c_83765));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(result,((function (seq__83492_83748,chunk__83493_83749,count__83494_83750,i__83495_83751,will_leave_result_83766,c_83765,seq__83492_83759__$1,temp__5804__auto___83758,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result){
return (function (p1__83481_SHARP_){
var and__5043__auto__ = p1__83481_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return will_leave_result_83766;
} else {
return and__5043__auto__;
}
});})(seq__83492_83748,chunk__83493_83749,count__83494_83750,i__83495_83751,will_leave_result_83766,c_83765,seq__83492_83759__$1,temp__5804__auto___83758,new_path,app,state_map,router,root_query,ast,root,to_signal,to_cancel,_,components,result))
);


var G__83767 = cljs.core.next(seq__83492_83759__$1);
var G__83768 = null;
var G__83769 = (0);
var G__83770 = (0);
seq__83492_83748 = G__83767;
chunk__83493_83749 = G__83768;
count__83494_83750 = G__83769;
i__83495_83751 = G__83770;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(result))){
var seq__83502_83771 = cljs.core.seq(cljs.core.deref(to_cancel));
var chunk__83503_83772 = null;
var count__83504_83773 = (0);
var i__83505_83774 = (0);
while(true){
if((i__83505_83774 < count__83504_83773)){
var t_83775 = chunk__83503_83772.cljs$core$IIndexed$_nth$arity$2(null,i__83505_83774);
var map__83513_83776 = (function (){var G__83514 = t_83775;
if((G__83514 == null)){
return null;
} else {
return cljs.core.meta(G__83514);
}
})();
var map__83513_83777__$1 = cljs.core.__destructure_map(map__83513_83776);
var component_83778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83513_83777__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_83779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83513_83777__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_83778,params_83779);


var G__83780 = seq__83502_83771;
var G__83781 = chunk__83503_83772;
var G__83782 = count__83504_83773;
var G__83783 = (i__83505_83774 + (1));
seq__83502_83771 = G__83780;
chunk__83503_83772 = G__83781;
count__83504_83773 = G__83782;
i__83505_83774 = G__83783;
continue;
} else {
var temp__5804__auto___83784 = cljs.core.seq(seq__83502_83771);
if(temp__5804__auto___83784){
var seq__83502_83785__$1 = temp__5804__auto___83784;
if(cljs.core.chunked_seq_QMARK_(seq__83502_83785__$1)){
var c__5568__auto___83786 = cljs.core.chunk_first(seq__83502_83785__$1);
var G__83787 = cljs.core.chunk_rest(seq__83502_83785__$1);
var G__83788 = c__5568__auto___83786;
var G__83789 = cljs.core.count(c__5568__auto___83786);
var G__83790 = (0);
seq__83502_83771 = G__83787;
chunk__83503_83772 = G__83788;
count__83504_83773 = G__83789;
i__83505_83774 = G__83790;
continue;
} else {
var t_83791 = cljs.core.first(seq__83502_83785__$1);
var map__83515_83792 = (function (){var G__83516 = t_83791;
if((G__83516 == null)){
return null;
} else {
return cljs.core.meta(G__83516);
}
})();
var map__83515_83793__$1 = cljs.core.__destructure_map(map__83515_83792);
var component_83794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83515_83793__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var params_83795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83515_83793__$1,new cljs.core.Keyword(null,"params","params",710516235));
com.fulcrologic.fulcro.routing.dynamic_routing.route_cancelled(component_83794,params_83795);


var G__83796 = cljs.core.next(seq__83502_83785__$1);
var G__83797 = null;
var G__83798 = (0);
var G__83799 = (0);
seq__83502_83771 = G__83796;
chunk__83503_83772 = G__83797;
count__83504_83773 = G__83798;
i__83505_83774 = G__83799;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$lang$maxFixedArity = 4);

/**
 * Returns the current active route, starting from the relative Fulcro class or instance.
 * 
 *   Any component using this as a basis for rendering will need to add the following to their query to
 *   ensure the props of that component change on route changes:
 * 
 *   ```
 *   [::uism/asm-id fq-router-kw]
 *   ```
 * 
 *   where `fq-router-kw` is a keyword that has the exact namespace and name of the router you're interested in. If you want
 *   to just over-render you can use a quoted `_` instead.
 * 
 *   NOTE: This function is primarily meant to be used in mutation implementations or with global routing.
 *   It is not reliable to use this function during render because it relies on the router being mounted (and render gets
 *   called in order to determine what to render). If you want to know the current state of a particular
 *   router you should query for it's ASM as indicated above.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.current_route = (function com$fulcrologic$fulcro$routing$dynamic_routing$current_route(var_args){
var G__83519 = arguments.length;
switch (G__83519) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
var temp__5802__auto__ = (function (){var G__83520 = this_or_app;
var G__83520__$1 = (((G__83520 == null))?null:com.fulcrologic.fulcro.raw.components.any__GT_app(G__83520));
if((G__83520__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.application.root_class(G__83520__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var cls = temp__5802__auto__;
return com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2(this_or_app,cls);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class_or_instance){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var router = relative_class_or_instance;
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__83525_83801 = root;
var map__83526_83802 = G__83525_83801;
var map__83526_83803__$1 = cljs.core.__destructure_map(map__83526_83802);
var node_83804 = map__83526_83803__$1;
var component_83805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83526_83803__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__83525_83806__$1 = G__83525_83801;
while(true){
var map__83528_83807 = G__83525_83806__$1;
var map__83528_83808__$1 = cljs.core.__destructure_map(map__83528_83807);
var node_83809__$1 = map__83528_83808__$1;
var component_83810__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83528_83808__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core.truth_((function (){var and__5043__auto__ = component_83810__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_83810__$1);
} else {
return and__5043__auto__;
}
})())){
var router_ident_83811 = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_83810__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_83812 = cljs.core.second(router_ident_83811);
var sm_env_83813 = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,router_id_83812,new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.PersistentArrayMap.EMPTY);
var path_segment_83814 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env_83813,new cljs.core.Keyword(null,"path-segment","path-segment",1516798997));
var next_router_83815 = cljs.core.some(((function (G__83525_83806__$1,router_ident_83811,router_id_83812,sm_env_83813,path_segment_83814,map__83528_83807,map__83528_83808__$1,node_83809__$1,component_83810__$1,G__83525_83801,map__83526_83802,map__83526_83803__$1,node_83804,component_83805,app,state_map,router,root_query,ast,root,result){
return (function (p1__83517_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,p1__83517_SHARP_);
});})(G__83525_83806__$1,router_ident_83811,router_id_83812,sm_env_83813,path_segment_83814,map__83528_83807,map__83528_83808__$1,node_83809__$1,component_83810__$1,G__83525_83801,map__83526_83802,map__83526_83803__$1,node_83804,component_83805,app,state_map,router,root_query,ast,root,result))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node_83809__$1));
if(cljs.core.seq(path_segment_83814)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.into,path_segment_83814);
} else {
}

if(cljs.core.truth_(next_router_83815)){
var G__83816 = next_router_83815;
G__83525_83806__$1 = G__83816;
continue;
} else {
}
} else {
}
break;
}

return cljs.core.deref(result);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.routing.dynamic_routing.mounted_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$mounted_targets(app,router_class){
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var mounted_target_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__83529){
var map__83530 = p__83529;
var map__83530__$1 = cljs.core.__destructure_map(map__83530);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83530__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83530__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key)){
return cljs.core.reduced(component);
} else {
return null;
}
}),null,(function (){var G__83531 = router_class;
var G__83531__$1 = (((G__83531 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__83531,state_map));
var G__83531__$2 = (((G__83531__$1 == null))?null:edn_query_language.core.query__GT_ast(G__83531__$1));
if((G__83531__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__83531__$2);
}
})());
return com.fulcrologic.fulcro.components.class__GT_all(app,mounted_target_class);
});
com.fulcrologic.fulcro.routing.dynamic_routing.set_force_route_flag_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$set_force_route_flag_BANG_(route_target){
return com.fulcrologic.fulcro.routing.dynamic_routing.goog$module$goog$object.set(route_target,"fulcro$routing$force_route",true);
});
/**
 * returns true if the given route target's allow-route-change? should be ignored.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.force_route_flagged_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$force_route_flagged_QMARK_(route_target){
return com.fulcrologic.fulcro.raw.components.isoget.cljs$core$IFn$_invoke$arity$2(route_target,"fulcro$routing$force_route");
});
/**
 * This function will return the first mounted instance of a route target that is currently indicating it would
 *   deny a route change. If a `relative-class` is given then it only looks for targets that would deny a change within
 *   that router's subtree.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes = (function com$fulcrologic$fulcro$routing$dynamic_routing$target_denying_route_changes(var_args){
var G__83534 = arguments.length;
switch (G__83534) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(relative_class,state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,ast);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
var G__83536 = root;
var map__83537 = G__83536;
var map__83537__$1 = cljs.core.__destructure_map(map__83537);
var router_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83537__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__83536__$1 = G__83536;
while(true){
var map__83539 = G__83536__$1;
var map__83539__$1 = cljs.core.__destructure_map(map__83539);
var router_class__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83539__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var and__5043__auto__ = router_class__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(router_class__$1);
} else {
return and__5043__auto__;
}
})())){
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(router_class__$1,cljs.core.PersistentArrayMap.EMPTY);
var active_target = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871)));
var next_router = cljs.core.some(((function (G__83536__$1,router_ident,active_target,map__83539,map__83539__$1,router_class__$1,children__$1,G__83536,map__83537,map__83537__$1,router_class,children,app,state_map,root_query,ast,root){
return (function (p1__83532_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_live_router(app,p1__83532_SHARP_);
});})(G__83536__$1,router_ident,active_target,map__83539,map__83539__$1,router_class__$1,children__$1,G__83536,map__83537,map__83537__$1,router_class,children,app,state_map,root_query,ast,root))
,children__$1);
var rejecting_target = ((cljs.core.vector_QMARK_(active_target))?cljs.core.some(((function (G__83536__$1,router_ident,active_target,next_router,map__83539,map__83539__$1,router_class__$1,children__$1,G__83536,map__83537,map__83537__$1,router_class,children,app,state_map,root_query,ast,root){
return (function (c){
if(((com.fulcrologic.fulcro.routing.dynamic_routing.allow_route_change_QMARK_(c) === false) && (cljs.core.not(com.fulcrologic.fulcro.routing.dynamic_routing.force_route_flagged_QMARK_(c))))){
return c;
} else {
return null;
}
});})(G__83536__$1,router_ident,active_target,next_router,map__83539,map__83539__$1,router_class__$1,children__$1,G__83536,map__83537,map__83537__$1,router_class,children,app,state_map,root_query,ast,root))
,com.fulcrologic.fulcro.routing.dynamic_routing.mounted_targets(app,router_class__$1)):null);
if(cljs.core.truth_(rejecting_target)){
return rejecting_target;
} else {
if(cljs.core.truth_(next_router)){
var G__83818 = next_router;
G__83536__$1 = G__83818;
continue;
} else {
return null;
}
}
} else {
return null;
}
break;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this_or_app);
var router = com.fulcrologic.fulcro.application.root_class(app);
return com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(app,router);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the active on-screen targets indicate they will allow navigation.
 * 
 *   NOTE: If your route targets have an `:allow-route-change?`, then that will be used to determine if the route can
 *   be abandoned; otherwise `:will-leave` will be called to answer the question; however, this USE of `will-leave`
 *   is DEPRECATED (though the hook is NOT because it serves another purpose). If you side-effect in `:will-leave` this could cause strange
 *   behavior throughout the application.  It is recommended that your targets implement `:allow-route-change?` if they need
 *   to prevent routing, and only leverage `:will-leave` to do things like cancel in-progress loads.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$can_change_route_QMARK_(var_args){
var G__83541 = arguments.length;
switch (G__83541) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (this_or_app){
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$1(this_or_app) == null);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (this_or_app,relative_class){
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(this_or_app,relative_class) == null);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Takes an on-screen *instance* of a react element and a new route (vector of strings) and returns a vector containing
 * either the original arguments, or an evaluation of relative navigation up the live routing tree.
 * 
 * If `new-route` starts with `:..` (any number of times) then this function finds (and returns) the parent *router*
 * and the new route stripped of `:..` prefix.
 * 
 * For example, say you were in a target instance that has a parent router, which in turn has a parent router called
 * `SomeRouter`. Then:
 * 
 * ```
 * (dr/evaluate-relative-path this [:.. :.. "some-target"])
 * => [SomeRouter ["some-target"]]
 * ```
 * 
 * This function does *not* work on classes. It is meant for live evaluation of on-screen instances to enable relative
 * routing based on the actual on-screen route targets.
 * 
 * CAN return `nil` for the router if no such parent is found.
 * 
 * Returns unmodified input argument if `new-route` does not begin with `:..`.
 * 
 */
com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$evaluate_relative_path(relative_instance,new_route){
var current_instance = relative_instance;
var G__83545 = new_route;
var vec__83546 = G__83545;
var seq__83547 = cljs.core.seq(vec__83546);
var first__83548 = cljs.core.first(seq__83547);
var seq__83547__$1 = cljs.core.next(seq__83547);
var lead_element = first__83548;
var remainder = seq__83547__$1;
var path = vec__83546;
var looking_for_router_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),lead_element);
var current_instance__$1 = current_instance;
var G__83545__$1 = G__83545;
var looking_for_router_QMARK___$1 = looking_for_router_QMARK_;
while(true){
var current_instance__$2 = current_instance__$1;
var vec__83552 = G__83545__$1;
var seq__83553 = cljs.core.seq(vec__83552);
var first__83554 = cljs.core.first(seq__83553);
var seq__83553__$1 = cljs.core.next(seq__83553);
var lead_element__$1 = first__83554;
var remainder__$1 = seq__83553__$1;
var path__$1 = vec__83552;
var looking_for_router_QMARK___$2 = looking_for_router_QMARK___$1;
if((((current_instance__$2 == null)) || (cljs.core.empty_QMARK_(path__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_instance__$2,path__$1], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = looking_for_router_QMARK___$2;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(current_instance__$2);
} else {
return and__5043__auto__;
}
})())){
var G__83820 = current_instance__$2;
var G__83821 = cljs.core.vec(remainder__$1);
var G__83822 = false;
current_instance__$1 = G__83820;
G__83545__$1 = G__83821;
looking_for_router_QMARK___$1 = G__83822;
continue;
} else {
if(cljs.core.truth_(looking_for_router_QMARK___$2)){
var G__83823 = com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(current_instance__$2);
var G__83824 = path__$1;
var G__83825 = true;
current_instance__$1 = G__83823;
G__83545__$1 = G__83824;
looking_for_router_QMARK___$1 = G__83825;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),lead_element__$1)){
var G__83826 = com.fulcrologic.fulcro.components.get_parent.cljs$core$IFn$_invoke$arity$1(current_instance__$2);
var G__83827 = path__$1;
var G__83828 = true;
current_instance__$1 = G__83826;
G__83545__$1 = G__83827;
looking_for_router_QMARK___$1 = G__83828;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_instance__$2,path__$1], null);

}
}
}
}
break;
}
});
/**
 * Change the route, starting at the given Fulcro class or instance (scanning for the first router from there).  `new-route` is a vector
 *   of string components to pass through to the nearest child router as the new path. The first argument is any live component
 *   or the app.  The `timeouts-and-params` are as in `change-route`.
 * 
 *   When possible (i.e. no circular references to components) you can maintain better code navigation by
 *   generating `new-route` via `path-to`.  This will allow readers of your code to quickly jump to the actual
 *   components that implement the targets when reading the code.
 * 
 *   You may include the special keyword `:..` any number of times at the beginning of `new-route` to indicate the
 *   parent(s) of `relative-class-or-instance`, which allows you to do relative routing to a sibling.
 * 
 *   ```
 *   (dr/change-route-relative this this [:.. "sibling-pattern"])
 *   ```
 * 
 *   Returns one of:
 * 
 *   `:already-there` - The old and new route are the same, and there was no request to force an idempotent routing operation.
 *   `:invalid` - The new route didn't evaluate to a valid location
 *   `:denied` - One or more on-screen targets refused to allow the routing operation
 *   `:routing` - The routing operation is in progress, but deferred operations may still delay the route becoming visible.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_relative_BANG_(var_args){
var G__83556 = arguments.length;
switch (G__83556) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this_or_app,relative_class_or_instance,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(this_or_app,relative_class_or_instance,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp,relative_class_or_instance,new_route,timeouts_and_params){
var vec__83557 = com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path(relative_class_or_instance,new_route);
var relative_class_or_instance__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83557,(0),null);
var new_route__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83557,(1),null);
var relative_class = (cljs.core.truth_((com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(relative_class_or_instance__$1) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,relative_class_or_instance__$1)))?com.fulcrologic.fulcro.components.react_type(relative_class_or_instance__$1):relative_class_or_instance__$1);
var old_route = com.fulcrologic.fulcro.routing.dynamic_routing.current_route.cljs$core$IFn$_invoke$arity$2(app_or_comp,relative_class);
var new_path = com.fulcrologic.fulcro.routing.dynamic_routing.proposed_new_path.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class,new_route__$1,timeouts_and_params);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,new_route__$1)) && (cljs.core.not(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","force?","com.fulcrologic.fulcro.routing.dynamic-routing/force?",-1506318960).cljs$core$IFn$_invoke$arity$1(timeouts_and_params))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,710,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Request to change route, but path is the current route. Ignoring change request."], null);
}),null)),null,1498707383,null);

return new cljs.core.Keyword(null,"already-there","already-there",1156142236);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.seq(new_path));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not find route targets for new-route",new_route__$1,"See https://book.fulcrologic.com/#err-dr-new-route-target-not-found"], null);
}),null)),null,-1068204452,null);

return new cljs.core.Keyword(null,"invalid","invalid",412869516);
} else {
if((!(com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2(app_or_comp,relative_class)))){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var target = com.fulcrologic.fulcro.routing.dynamic_routing.target_denying_route_changes.cljs$core$IFn$_invoke$arity$2(app,relative_class);
var route_denied = com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-denied","route-denied",-1140339590)], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,722,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route request denied by on-screen target",target,". Calling component's :route-denied (if defined)."], null);
}),null)),null,-1209356809,null);

if(cljs.core.truth_(route_denied)){
(route_denied.cljs$core$IFn$_invoke$arity$4 ? route_denied.cljs$core$IFn$_invoke$arity$4(target,relative_class_or_instance__$1,new_route__$1,timeouts_and_params) : route_denied.call(null,target,relative_class_or_instance__$1,new_route__$1,timeouts_and_params));
} else {
}

return new cljs.core.Keyword(null,"denied","denied",-1141109291);
} else {
com.fulcrologic.fulcro.routing.dynamic_routing.signal_router_leaving.cljs$core$IFn$_invoke$arity$4(app_or_comp,relative_class_or_instance__$1,new_route__$1,timeouts_and_params);

var app_83830 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_comp);
var state_map_83831 = com.fulcrologic.fulcro.application.current_state(app_83830);
var router_83832 = relative_class_or_instance__$1;
var root_query_83833 = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(router_83832,state_map_83831);
var ast_83834 = edn_query_language.core.query__GT_ast(root_query_83833);
var root_83835 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3(ast_83834,new_route__$1,state_map_83831);
var routing_actions_83836 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var pessimistic_txn_83837 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var delayed_targets_83838 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var G__83561_83839 = root_83835;
var map__83562_83840 = G__83561_83839;
var map__83562_83841__$1 = cljs.core.__destructure_map(map__83562_83840);
var component_83842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83562_83841__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_83843 = new_route__$1;
var G__83561_83844__$1 = G__83561_83839;
var path_83845__$1 = path_83843;
while(true){
var map__83576_83846 = G__83561_83844__$1;
var map__83576_83847__$1 = cljs.core.__destructure_map(map__83576_83846);
var component_83848__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83576_83847__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path_83849__$2 = path_83845__$1;
if(cljs.core.truth_((function (){var and__5043__auto__ = component_83848__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component_83848__$1);
} else {
return and__5043__auto__;
}
})())){
var map__83577_83850 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$core$IFn$_invoke$arity$3(component_83848__$1,path_83849__$2,state_map_83831);
var map__83577_83851__$1 = cljs.core.__destructure_map(map__83577_83850);
var target_83852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83577_83851__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix_83853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83577_83851__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast_83854 = (function (){var G__83579 = target_83852;
var G__83579__$1 = (((G__83579 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__83579,state_map_83831));
if((G__83579__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__83579__$1);
}
})();
var prefix_length_83855 = cljs.core.count(matching_prefix_83853);
var remaining_path_83856 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length_83855,path_83849__$2));
var segment_83857 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(target_83852);
var params_83858 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__83561_83844__$1,path_83845__$1,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (p,p__83580){
var vec__83581 = p__83580;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83581,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,k,v);
} else {
return p;
}
});})(G__83561_83844__$1,path_83845__$1,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(timeouts_and_params,new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530)], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__83561_83844__$1,path_83845__$1,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});})(G__83561_83844__$1,path_83845__$1,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,segment_83857,matching_prefix_83853));
var router_ident_83859 = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component_83848__$1,cljs.core.PersistentArrayMap.EMPTY);
var router_id_83860 = cljs.core.second(router_ident_83859);
var target_ident_83861 = com.fulcrologic.fulcro.routing.dynamic_routing.will_enter(target_83852,app_83830,params_83858);
var map__83578_83862 = cljs.core.meta(target_ident_83861);
var map__83578_83863__$1 = cljs.core.__destructure_map(map__83578_83862);
var path_ordered_QMARK__83864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83578_83863__$1,new cljs.core.Keyword(null,"path-ordered?","path-ordered?",1510080295));
var txn_83865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83578_83863__$1,new cljs.core.Keyword(null,"txn","txn",-469204789));
var show_early_QMARK__83866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83578_83863__$1,new cljs.core.Keyword(null,"show-early?","show-early?",-1632022246));
var optimistic_QMARK__83867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83578_83863__$1,new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869));
var completing_action_83868 = (function (){var or__5045__auto__ = (function (){var G__83584 = target_ident_83861;
var G__83584__$1 = (((G__83584 == null))?null:cljs.core.meta(G__83584));
if((G__83584__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__83584__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = optimistic_QMARK__83867;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.seq(txn_83865);
if(and__5043__auto____$1){
return ((function (G__83561_83844__$1,path_83845__$1,and__5043__auto____$1,and__5043__auto__,or__5045__auto__,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,params_83858,router_ident_83859,router_id_83860,target_ident_83861,map__83578_83862,map__83578_83863__$1,path_ordered_QMARK__83864,txn_83865,show_early_QMARK__83866,optimistic_QMARK__83867,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app_83830,txn_83865);
});
;})(G__83561_83844__$1,path_83845__$1,and__5043__auto____$1,and__5043__auto__,or__5045__auto__,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,params_83858,router_ident_83859,router_id_83860,target_ident_83861,map__83578_83862,map__83578_83863__$1,path_ordered_QMARK__83864,txn_83865,show_early_QMARK__83866,optimistic_QMARK__83867,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.constantly(true);
}
}
})();
var event_data_83869 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-timeout","error-timeout",-1004615840),(5000),new cljs.core.Keyword(null,"deferred-timeout","deferred-timeout",1616220530),(20)], null),timeouts_and_params,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),matching_prefix_83853,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident_83859,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component_83848__$1),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(target_ident_83861,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),target_83852,new cljs.core.Keyword(null,"params","params",710516235),params_83858)], null)], 0));
if(cljs.core.truth_((function (){var and__5043__auto__ = path_ordered_QMARK__83864;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.seq(txn_83865)) && (cljs.core.not(optimistic_QMARK__83867)));
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pessimistic_txn_83837,cljs.core.into,txn_83865);

if(cljs.core.truth_(show_early_QMARK__83866)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pessimistic_txn_83837,cljs.core.conj,(function (){var G__83585 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target_ident_83861], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__83585) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__83585));
})());
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(delayed_targets_83838,cljs.core.conj,(function (){var G__83586 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target_ident_83861], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__83586) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__83586));
})());
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(routing_actions_83836,cljs.core.conj,((function (G__83561_83844__$1,path_83845__$1,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,params_83858,router_ident_83859,router_id_83860,target_ident_83861,map__83578_83862,map__83578_83863__$1,path_ordered_QMARK__83864,txn_83865,show_early_QMARK__83866,optimistic_QMARK__83867,completing_action_83868,event_data_83869,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
if(cljs.core.not(com.fulcrologic.fulcro.ui_state_machines.get_active_state(app_83830,router_id_83860))){
var state_map_83870__$1 = com.fulcrologic.fulcro.components.component__GT_state_map(app_or_comp);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961).cljs$core$IFn$_invoke$arity$1(state_map_83870__$1),router_id_83860))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,779,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__83561_83844__$1,path_83845__$1,state_map_83870__$1,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,params_83858,router_ident_83859,router_id_83860,target_ident_83861,map__83578_83862,map__83578_83863__$1,path_ordered_QMARK__83864,txn_83865,show_early_QMARK__83866,optimistic_QMARK__83867,completing_action_83868,event_data_83869,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You are routing to a router ",router_id_83860,"whose state was not composed into the app from root. Please check your :initial-state. See https://book.fulcrologic.com/#err-dr-router-state-missing"], null);
});})(G__83561_83844__$1,path_83845__$1,state_map_83870__$1,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,params_83858,router_ident_83859,router_id_83860,target_ident_83861,map__83578_83862,map__83578_83863__$1,path_ordered_QMARK__83864,txn_83865,show_early_QMARK__83866,optimistic_QMARK__83867,completing_action_83868,event_data_83869,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
,null)),null,1170527101,null);
}

com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app_or_comp,com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine,router_id_83860,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident_83859,component_83848__$1)], null),event_data_83869);
} else {
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_83830,router_id_83860,new cljs.core.Keyword(null,"route!","route!",-1286958144),event_data_83869);
}

var _STAR_after_render_STAR__orig_val__83587 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__83588 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__83588);

try{return (completing_action_83868.cljs$core$IFn$_invoke$arity$0 ? completing_action_83868.cljs$core$IFn$_invoke$arity$0() : completing_action_83868.call(null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__83587);
}});})(G__83561_83844__$1,path_83845__$1,map__83577_83850,map__83577_83851__$1,target_83852,matching_prefix_83853,target_ast_83854,prefix_length_83855,remaining_path_83856,segment_83857,params_83858,router_ident_83859,router_id_83860,target_ident_83861,map__83578_83862,map__83578_83863__$1,path_ordered_QMARK__83864,txn_83865,show_early_QMARK__83866,optimistic_QMARK__83867,completing_action_83868,event_data_83869,map__83576_83846,map__83576_83847__$1,component_83848__$1,path_83849__$2,G__83561_83839,map__83562_83840,map__83562_83841__$1,component_83842,path_83843,app_83830,state_map_83831,router_83832,root_query_83833,ast_83834,root_83835,routing_actions_83836,pessimistic_txn_83837,delayed_targets_83838,vec__83557,relative_class_or_instance__$1,new_route__$1,relative_class,old_route,new_path))
);

if(cljs.core.seq(remaining_path_83856)){
var G__83871 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3(target_ast_83854,remaining_path_83856,state_map_83831);
var G__83872 = remaining_path_83856;
G__83561_83844__$1 = G__83871;
path_83845__$1 = G__83872;
continue;
} else {
}
} else {
}
break;
}

var seq__83589_83873 = cljs.core.seq(cljs.core.deref(routing_actions_83836));
var chunk__83590_83874 = null;
var count__83591_83875 = (0);
var i__83592_83876 = (0);
while(true){
if((i__83592_83876 < count__83591_83875)){
var action_83877 = chunk__83590_83874.cljs$core$IIndexed$_nth$arity$2(null,i__83592_83876);
(action_83877.cljs$core$IFn$_invoke$arity$0 ? action_83877.cljs$core$IFn$_invoke$arity$0() : action_83877.call(null));


var G__83878 = seq__83589_83873;
var G__83879 = chunk__83590_83874;
var G__83880 = count__83591_83875;
var G__83881 = (i__83592_83876 + (1));
seq__83589_83873 = G__83878;
chunk__83590_83874 = G__83879;
count__83591_83875 = G__83880;
i__83592_83876 = G__83881;
continue;
} else {
var temp__5804__auto___83882 = cljs.core.seq(seq__83589_83873);
if(temp__5804__auto___83882){
var seq__83589_83883__$1 = temp__5804__auto___83882;
if(cljs.core.chunked_seq_QMARK_(seq__83589_83883__$1)){
var c__5568__auto___83884 = cljs.core.chunk_first(seq__83589_83883__$1);
var G__83885 = cljs.core.chunk_rest(seq__83589_83883__$1);
var G__83886 = c__5568__auto___83884;
var G__83887 = cljs.core.count(c__5568__auto___83884);
var G__83888 = (0);
seq__83589_83873 = G__83885;
chunk__83590_83874 = G__83886;
count__83591_83875 = G__83887;
i__83592_83876 = G__83888;
continue;
} else {
var action_83889 = cljs.core.first(seq__83589_83883__$1);
(action_83889.cljs$core$IFn$_invoke$arity$0 ? action_83889.cljs$core$IFn$_invoke$arity$0() : action_83889.call(null));


var G__83890 = cljs.core.next(seq__83589_83883__$1);
var G__83891 = null;
var G__83892 = (0);
var G__83893 = (0);
seq__83589_83873 = G__83890;
chunk__83590_83874 = G__83891;
count__83591_83875 = G__83892;
i__83592_83876 = G__83893;
continue;
}
} else {
}
}
break;
}

if(((cljs.core.seq(cljs.core.deref(pessimistic_txn_83837))) || (cljs.core.seq(cljs.core.deref(delayed_targets_83838))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,794,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running pessimistic transaction",cljs.core.deref(pessimistic_txn_83837),"with delayed targets",cljs.core.deref(delayed_targets_83838)], null);
}),null)),null,211225142,null);

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app_83830,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pessimistic_txn_83837),cljs.core.reverse(cljs.core.deref(delayed_targets_83838)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),false], null));
} else {
}

return new cljs.core.Keyword(null,"routing","routing",1440253662);

}
}
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * DEPRECATED NAME: Use change-route-relative!
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative = com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_;
/**
 * Retry a route that the receiving component just denied, and ignore this target's answer. All other targets will still
 *   be asked. This is primarily used when you want to be able to use js/confirm in a component to ask the user if
 *   they "really mean to navigate away". You MUST pass the arguments that `:route-denied` received
 *   or you can easily cause an infinite loop. Other on-screen targets can still potentially abort the route.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$retry_route_BANG_(var_args){
var G__83594 = arguments.length;
switch (G__83594) {
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (denied_target_instance,relative_root,path){
return com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4(denied_target_instance,relative_root,path,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (denied_target_instance,relative_root,path,timeouts_and_params){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.routing.dynamic-routing",null,811,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retrying route at the request of ",com.fulcrologic.fulcro.raw.components.component_name(denied_target_instance)], null);
}),null)),null,-77521778,null);

com.fulcrologic.fulcro.routing.dynamic_routing.set_force_route_flag_BANG_(denied_target_instance);

return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(denied_target_instance,relative_root,path,timeouts_and_params);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Trigger a route change.
 * 
 *   * `this` - The component (or app) that is causing the route change.
 *   * `new-route` - A vector of URI components to pass to the router.
 *   * `timeouts-and-params` - A map of additional parameters and route timeouts that affect UI during deferred routes:
 *   `{:error-timeout ms :deferred-timeout ms}`.  Anything extra will appear in the `params` of `will-enter`.
 * 
 *   The error timeout is how long to wait  (default 5000ms) before showing the error-ui of a route (which must be defined on the
 *   router that is having problems).  The deferred-timeout (default 100ms) is how long to wait before showing the loading-ui of
 *   a deferred router (to prevent flicker).
 * 
 *   Returns one of:
 * 
 *   `:already-there` - The old and new route are the same, and there was no request to force an idempotent routing operation.
 *   `:invalid` - The new route didn't evaluate to a valid location
 *   `:denied` - One or more on-screen targets refused to allow the routing operation
 *   `:routing` - The routing operation is in progress, but deferred operations may still delay the route becoming visible.
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$change_route_BANG_(var_args){
var G__83596 = arguments.length;
switch (G__83596) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,new_route){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new_route,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,new_route,timeouts_and_params){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(this$);
var root = com.fulcrologic.fulcro.application.root_class(app);
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_relative_BANG_.cljs$core$IFn$_invoke$arity$4(app,root,new_route,timeouts_and_params);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$lang$maxFixedArity = 3);

com.fulcrologic.fulcro.routing.dynamic_routing.change_route = com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_;
/**
 * Run a runtime validation on route targets to verify that they at least declare a route-segment that is a vector.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets = (function com$fulcrologic$fulcro$routing$dynamic_routing$validate_route_targets(router_instance){
if(cljs.core.truth_(goog.DEBUG)){
var state_map = com.fulcrologic.fulcro.application.current_state(router_instance);
var seq__83598 = cljs.core.seq(com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$core$IFn$_invoke$arity$2(router_instance,state_map));
var chunk__83600 = null;
var count__83601 = (0);
var i__83602 = (0);
while(true){
if((i__83602 < count__83601)){
var t = chunk__83600.cljs$core$IIndexed$_nth$arity$2(null,i__83602);
var segment_83896 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__83897 = ((cljs.core.vector_QMARK_(segment_83896)) && ((((!(cljs.core.empty_QMARK_(segment_83896)))) && (cljs.core.every_QMARK_(((function (seq__83598,chunk__83600,count__83601,i__83602,segment_83896,t,state_map){
return (function (p1__83597_SHARP_){
return (((p1__83597_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__83597_SHARP_ === 'string'));
});})(seq__83598,chunk__83600,count__83601,i__83602,segment_83896,t,state_map))
,segment_83896)))));
if(valid_QMARK__83897){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,863,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__83598,chunk__83600,count__83601,i__83602,segment_83896,valid_QMARK__83897,t,state_map){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.raw.components.component_name(t),"of router",com.fulcrologic.fulcro.raw.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords. See https://book.fulcrologic.com/#err-dr-target-lacks-r-segment"], null);
});})(seq__83598,chunk__83600,count__83601,i__83602,segment_83896,valid_QMARK__83897,t,state_map))
,null)),null,1447676813,null);
}


var G__83898 = seq__83598;
var G__83899 = chunk__83600;
var G__83900 = count__83601;
var G__83901 = (i__83602 + (1));
seq__83598 = G__83898;
chunk__83600 = G__83899;
count__83601 = G__83900;
i__83602 = G__83901;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__83598);
if(temp__5804__auto__){
var seq__83598__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83598__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__83598__$1);
var G__83902 = cljs.core.chunk_rest(seq__83598__$1);
var G__83903 = c__5568__auto__;
var G__83904 = cljs.core.count(c__5568__auto__);
var G__83905 = (0);
seq__83598 = G__83902;
chunk__83600 = G__83903;
count__83601 = G__83904;
i__83602 = G__83905;
continue;
} else {
var t = cljs.core.first(seq__83598__$1);
var segment_83906 = com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(t);
var valid_QMARK__83907 = ((cljs.core.vector_QMARK_(segment_83906)) && ((((!(cljs.core.empty_QMARK_(segment_83906)))) && (cljs.core.every_QMARK_(((function (seq__83598,chunk__83600,count__83601,i__83602,segment_83906,t,seq__83598__$1,temp__5804__auto__,state_map){
return (function (p1__83597_SHARP_){
return (((p1__83597_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__83597_SHARP_ === 'string'));
});})(seq__83598,chunk__83600,count__83601,i__83602,segment_83906,t,seq__83598__$1,temp__5804__auto__,state_map))
,segment_83906)))));
if(valid_QMARK__83907){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,863,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__83598,chunk__83600,count__83601,i__83602,segment_83906,valid_QMARK__83907,t,seq__83598__$1,temp__5804__auto__,state_map){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Route target ",com.fulcrologic.fulcro.raw.components.component_name(t),"of router",com.fulcrologic.fulcro.raw.components.component_name(router_instance),"does not declare a valid :route-segment. Route segments must be non-empty vector that contain only strings","and keywords. See https://book.fulcrologic.com/#err-dr-target-lacks-r-segment"], null);
});})(seq__83598,chunk__83600,count__83601,i__83602,segment_83906,valid_QMARK__83907,t,seq__83598__$1,temp__5804__auto__,state_map))
,null)),null,-1034331637,null);
}


var G__83908 = cljs.core.next(seq__83598__$1);
var G__83909 = null;
var G__83910 = (0);
var G__83911 = (0);
seq__83598 = G__83908;
chunk__83600 = G__83909;
count__83601 = G__83910;
i__83602 = G__83911;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Returns a sequence of all of the routers reachable in the query of the app.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers(state_map,component_class){
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component_class,state_map);
var map__83605 = edn_query_language.core.query__GT_ast(root_query);
var map__83605__$1 = cljs.core.__destructure_map(map__83605);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83605__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var get_routers = (function com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__83606){
var map__83607 = p__83606;
var map__83607__$1 = cljs.core.__destructure_map(map__83607);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83607__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,component):acc),com$fulcrologic$fulcro$routing$dynamic_routing$all_reachable_routers_$_get_routers_STAR_(children__$1));
}),cljs.core.PersistentVector.EMPTY,nodes);
});
return get_routers(children);
});
/**
 * Initialize the routing system.  This ensures that all routers have state machines in app state.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.initialize_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$initialize_BANG_(app){
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var root = com.fulcrologic.fulcro.application.root_class(app);
var routers = com.fulcrologic.fulcro.routing.dynamic_routing.all_reachable_routers(state_map,root);
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(r,cljs.core.PersistentArrayMap.EMPTY);
var router_id = cljs.core.second(router_ident);
var G__83608 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.routing.dynamic_routing.RouterStateMachine),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-segment","path-segment",1516798997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(router_ident,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),r)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actor->ident","com.fulcrologic.fulcro.ui-state-machines/actor->ident",-1901210928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(router_ident,r)], null)], null);
return (com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.ui_state_machines.begin.cljs$core$IFn$_invoke$arity$1(G__83608) : com.fulcrologic.fulcro.ui_state_machines.begin.call(null,G__83608));
}),routers);
return com.fulcrologic.fulcro.raw.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,tx);
});
/**
 * Returns the given `prefix` with the TargetClass segment appended onto it, replacing the final elements with the
 * given (optional) path args.
 * 
 *   ```
 *   (defsc X [_ _]
 *  {:route-segment ["a" :b]})
 * 
 *   (into ["f" "g"] X "22") ; => ["f" "g" "a" "22"]
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.into_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$into_path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___83912 = arguments.length;
var i__5770__auto___83913 = (0);
while(true){
if((i__5770__auto___83913 < len__5769__auto___83912)){
args__5775__auto__.push((arguments[i__5770__auto___83913]));

var G__83914 = (i__5770__auto___83913 + (1));
i__5770__auto___83913 = G__83914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$core$IFn$_invoke$arity$variadic = (function (prefix,TargetClass,path_args){
var nargs = cljs.core.count(path_args);
var path = (function (){var G__83612 = TargetClass;
var G__83612__$1 = (((G__83612 == null))?null:com.fulcrologic.fulcro.raw.components.component_options(G__83612));
if((G__83612__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"route-segment","route-segment",1812935886).cljs$core$IFn$_invoke$arity$1(G__83612__$1);
}
})();
var static_elements = (cljs.core.count(path) - nargs);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(static_elements,path),path_args));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.into_path.cljs$lang$applyTo = (function (seq83609){
var G__83610 = cljs.core.first(seq83609);
var seq83609__$1 = cljs.core.next(seq83609);
var G__83611 = cljs.core.first(seq83609__$1);
var seq83609__$2 = cljs.core.next(seq83609__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83610,G__83611,seq83609__$2);
}));

/**
 * Returns the route segment of the given TargetClass with the trailing elements replaced by path-args.
 * 
 *   ```
 *   (defsc X [_ _]
 *  {:route-segment ["a" :b]})
 * 
 *   (subpath X "22") ; => ["a" "22"]
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.subpath = (function com$fulcrologic$fulcro$routing$dynamic_routing$subpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___83915 = arguments.length;
var i__5770__auto___83916 = (0);
while(true){
if((i__5770__auto___83916 < len__5769__auto___83915)){
args__5775__auto__.push((arguments[i__5770__auto___83916]));

var G__83917 = (i__5770__auto___83916 + (1));
i__5770__auto___83916 = G__83917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$core$IFn$_invoke$arity$variadic = (function (TargetClass,path_args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.routing.dynamic_routing.into_path,cljs.core.PersistentVector.EMPTY,TargetClass,path_args);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.subpath.cljs$lang$applyTo = (function (seq83613){
var G__83614 = cljs.core.first(seq83613);
var seq83613__$1 = cljs.core.next(seq83613);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83614,seq83613__$1);
}));

/**
 * Convert a sequence of router targets and parameters into a vector of strings that represents the target route. Parameters
 *   can be sequenced inline:
 * 
 *   ```
 *   (defsc A [_ _]
 *  {:route-segment ["a" :a-param]})
 * 
 *   (defsc B [_ _]
 *  {:route-segment ["b" :b-param]})
 * 
 *   (route-segment A a-param1 B b-param ...)
 *   ```
 * 
 *   where the parameters for a target immediately follow the component that requires them. Alternatively
 *   one can specify all of the parameters at the end as a single map using the parameter names that are used in
 *   the component `:route-segment` itself:
 * 
 *   ```
 *   (defsc A [_ _]
 *  {:route-segment ["a" :a-param]})
 * 
 *   (route-segment A B C D {:a-param 1})
 *   ```
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.path_to = (function com$fulcrologic$fulcro$routing$dynamic_routing$path_to(var_args){
var args__5775__auto__ = [];
var len__5769__auto___83918 = arguments.length;
var i__5770__auto___83919 = (0);
while(true){
if((i__5770__auto___83919 < len__5769__auto___83918)){
args__5775__auto__.push((arguments[i__5770__auto___83919]));

var G__83920 = (i__5770__auto___83919 + (1));
i__5770__auto___83919 = G__83920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$core$IFn$_invoke$arity$variadic = (function (targets_and_params){
var segments = cljs.core.seq(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__83615_SHARP_){
var and__5043__auto__ = cljs.core.fn_QMARK_(p1__83615_SHARP_);
if(and__5043__auto__){
var or__5045__auto__ = (com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__83615_SHARP_) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,p1__83615_SHARP_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.component_class_QMARK_(p1__83615_SHARP_);
}
} else {
return and__5043__auto__;
}
}),targets_and_params));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(segments))) && (cljs.core.map_QMARK_(cljs.core.first(cljs.core.second(segments)))))){
var path = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__83616_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__83616_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(segments)], 0));
var params = cljs.core.first(cljs.core.second(segments));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,i,i);
}),path);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (path,p__83619){
var vec__83620 = p__83619;
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83620,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83620,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__83617_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__83617_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.butlast(classes)], 0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.routing.dynamic_routing.subpath,cljs.core.last(classes),params));
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),segments));
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.routing.dynamic_routing.path_to.cljs$lang$applyTo = (function (seq83618){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq83618));
}));

com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_path_components(var_args){
var G__83626 = arguments.length;
switch (G__83626) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$2 = (function (StartingClass,RouteTarget){
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$4(StartingClass,RouteTarget,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$3 = (function (StartingClass,RouteTarget,base_path){
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$4(StartingClass,RouteTarget,base_path,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$4 = (function (StartingClass,RouteTarget,base_path,p__83627){
var map__83628 = p__83627;
var map__83628__$1 = cljs.core.__destructure_map(map__83628);
var options = map__83628__$1;
var ParentRouter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83628__$1,new cljs.core.Keyword(null,"ParentRouter","ParentRouter",-1372476111));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(StartingClass,RouteTarget)){
var parent = cljs.core.last(base_path);
var final_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_path,RouteTarget);
if(((com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(parent)) && ((((ParentRouter == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ParentRouter,parent)))))){
return final_path;
} else {
return null;
}
} else {
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_path,StartingClass);
if(com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(StartingClass)){
var targets = com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$core$IFn$_invoke$arity$2(StartingClass,com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_);
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83623_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$4(p1__83623_SHARP_,RouteTarget,path,options);
}),targets));
} else {
var candidates = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(StartingClass))));
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__83624_SHARP_){
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$4(p1__83624_SHARP_,RouteTarget,path,options);
}),candidates));
}
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$lang$maxFixedArity = 4);

/**
 * Attempts to resolve a path from StartingClass to the given RouteTarget. Can also be passed `resolved-components`, which
 * is the output of `resolve-path-components`. If ParentRouter is supplied, then if RouteTarget is in multiple places in the
 * UI this function will only consider the path that includes ParentRouter as the immediate parent of the target.
 * 
 * NOTE: This function works against static queries UNLESS you bind `rc/*query-state*` to `app/current-state`.
 * 
 * Returns a vector of route segments. Any keywords in the result will be replaced by the values from `params`, if present.
 * 
 * Returns nil if no path can be found. Be sure rc/*query-state* is bound to current app state if you want to include dynamic queries.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_path(var_args){
var G__83631 = arguments.length;
switch (G__83631) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2 = (function (resolved_components,params){
if(cljs.core.seq(resolved_components)){
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__83629_SHARP_){
return com.fulcrologic.fulcro.raw.components.component_options.cljs$core$IFn$_invoke$arity$variadic(p1__83629_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route-segment","route-segment",1812935886)], 0));
})),resolved_components);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ele){
if(cljs.core.contains_QMARK_(params,ele)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,ele));
} else {
return ele;
}
}),base_path);
} else {
return null;
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3 = (function (StartingClass,RouteTarget,params){
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$4(StartingClass,RouteTarget,params,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$4 = (function (StartingClass,RouteTarget,params,p__83632){
var map__83633 = p__83632;
var map__83633__$1 = cljs.core.__destructure_map(map__83633);
var options = map__83633__$1;
var ParentRouter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83633__$1,new cljs.core.Keyword(null,"ParentRouter","ParentRouter",-1372476111));
if(cljs.core.truth_(new cljs.core.Keyword(null,"route-segment","route-segment",1812935886).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(RouteTarget) : com.fulcrologic.fulcro.components.component_options.call(null,RouteTarget))))){
return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path_components.cljs$core$IFn$_invoke$arity$4(StartingClass,RouteTarget,cljs.core.PersistentVector.EMPTY,options),params);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,1139,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attempt to resolve the path to a component that has no route-segment"], null);
}),null)),null,-908167782,null);
}
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$lang$maxFixedArity = 4);

/**
 * Given a new-route path (vector of strings): resolves the target (class) that is the ultimate target of that path.
 */
com.fulcrologic.fulcro.routing.dynamic_routing.resolve_target = (function com$fulcrologic$fulcro$routing$dynamic_routing$resolve_target(app,new_route){
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var root_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.application.root_class(app),state_map);
var ast = edn_query_language.core.query__GT_ast(root_query);
var root = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3(ast,new_route,state_map);
var G__83635 = root;
var map__83636 = G__83635;
var map__83636__$1 = cljs.core.__destructure_map(map__83636);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83636__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path = new_route;
var G__83635__$1 = G__83635;
var path__$1 = path;
while(true){
var map__83640 = G__83635__$1;
var map__83640__$1 = cljs.core.__destructure_map(map__83640);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83640__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var path__$2 = path__$1;
if(cljs.core.truth_((function (){var and__5043__auto__ = component__$1;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(component__$1);
} else {
return and__5043__auto__;
}
})())){
var map__83641 = com.fulcrologic.fulcro.routing.dynamic_routing.route_target.cljs$core$IFn$_invoke$arity$3(component__$1,path__$2,state_map);
var map__83641__$1 = cljs.core.__destructure_map(map__83641);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83641__$1,new cljs.core.Keyword(null,"target","target",253001721));
var matching_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83641__$1,new cljs.core.Keyword(null,"matching-prefix","matching-prefix",-539262173));
var target_ast = (function (){var G__83642 = target;
var G__83642__$1 = (((G__83642 == null))?null:com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(G__83642,state_map));
if((G__83642__$1 == null)){
return null;
} else {
return edn_query_language.core.query__GT_ast(G__83642__$1);
}
})();
var prefix_length = cljs.core.count(matching_prefix);
var remaining_path = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(prefix_length,path__$2));
if(cljs.core.seq(remaining_path)){
var G__83923 = com.fulcrologic.fulcro.routing.dynamic_routing.ast_node_for_route.cljs$core$IFn$_invoke$arity$3(target_ast,remaining_path,state_map);
var G__83924 = remaining_path;
G__83635__$1 = G__83923;
path__$1 = G__83924;
continue;
} else {
return target;
}
} else {
return null;
}
break;
}
});
var active_routes_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,p__83656,parent_component,ast_nodes){
var map__83657 = p__83656;
var map__83657__$1 = cljs.core.__destructure_map(map__83657);
var result = map__83657__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83657__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var segment = (function (){var G__83658 = parent_component;
if((G__83658 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(G__83658);
}
})();
if((parent_component == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
} else {
if(cljs.core.truth_((function (){var G__83659 = parent_component;
if((G__83659 == null)){
return null;
} else {
return com.fulcrologic.fulcro.routing.dynamic_routing.router_QMARK_(G__83659);
}
})())){
var ident = (function (){var G__83660 = parent_component;
if((G__83660 == null)){
return null;
} else {
var G__83661 = G__83660;
var G__83662 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__83661,G__83662) : com.fulcrologic.fulcro.components.get_ident.call(null,G__83661,G__83662));
}
})();
var active_ast_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__83663){
var map__83664 = p__83663;
var map__83664__$1 = cljs.core.__destructure_map(map__83664);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83664__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),dispatch_key);
}),ast_nodes));
var new_parent = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(active_ast_node);
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,segment),new cljs.core.Keyword(null,"target-class","target-class",-955367984),parent_component], null),new_parent,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(active_ast_node));
} else {
if(cljs.core.truth_(segment)){
var subpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,segment);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__83665){
var map__83666 = p__83665;
var map__83666__$1 = cljs.core.__destructure_map(map__83666);
var node = map__83666__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83666__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),subpath,new cljs.core.Keyword(null,"target-class","target-class",-955367984),parent_component], null),component,children);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_nodes], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__83667){
var map__83668 = p__83667;
var map__83668__$1 = cljs.core.__destructure_map(map__83668);
var node = map__83668__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83668__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return com$fulcrologic$fulcro$routing$dynamic_routing$active_routes_STAR_(state_map,result,component,children);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_nodes], 0));

}
}
}
});
/**
 * Return a sequence of the leaf router targets that are routed to in the given app using the active dynamic query
 *   and app state.
 * 
 *   The return values are maps that currently contain a `:path` and `:target-component` key.
 *   Future versions of this function may include additional information.
 * 
 *   Note that dynamic routing purposely supports the ability to have more than one UI path active at a time, as it
 *   is NOT a strict URL-style UI router. However, since your code is ultimately responsible for determining what
 *   parts of the active query are rendered, it is possible for this to return routes that are available (in the props
 *   of components) but are not being rendered by your logic. Thus, the return value of this function isn't necessarily
 *   proof that the routes listed are visible to the user.
 * 
 *   WARNING: If you use disconnected roots (via hooks or otherwise), then you must specify a starting component that is
 *   well-connected (graph/state) from which to scan, and will get back paths relative to that `starting-from`
 *   (a component, element, or factory if you're using factory-based dynamic queries).
 */
com.fulcrologic.fulcro.routing.dynamic_routing.active_routes = (function com$fulcrologic$fulcro$routing$dynamic_routing$active_routes(var_args){
var G__83670 = arguments.length;
switch (G__83670) {
case 1:
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2(app,com.fulcrologic.fulcro.application.root_class(app));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$core$IFn$_invoke$arity$2 = (function (app,starting_from){
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(starting_from,state_map);
var map__83671 = edn_query_language.core.query__GT_ast(query);
var map__83671__$1 = cljs.core.__destructure_map(map__83671);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.set(active_routes_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY], null),starting_from,children));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.active_routes.cljs$lang$maxFixedArity = 2);

/**
 * The functional version of `defrouter`. Generates a router (particularly useful at runtime for use with dynamically
 * generated components) with the given Fulcro registry-key and list of router-targets. The options map can contain:
 * 
 * * `:render` - A (fn [this props] ...) that needs to function as described in `defrouter`.
 * * Any other options that `defrouter` supports in the component options map.
 * 
 */
com.fulcrologic.fulcro.routing.dynamic_routing.dynamic_router = (function com$fulcrologic$fulcro$routing$dynamic_routing$dynamic_router(var_args){
var G__83673 = arguments.length;
switch (G__83673) {
case 2:
return com.fulcrologic.fulcro.routing.dynamic_routing.dynamic_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.dynamic_router.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.dynamic_router.cljs$core$IFn$_invoke$arity$2 = (function (registry_key,targets){
return com.fulcrologic.fulcro.routing.dynamic_routing.dynamic_router.cljs$core$IFn$_invoke$arity$3(registry_key,targets,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.dynamic_router.cljs$core$IFn$_invoke$arity$3 = (function (router_registry_key,router_targets,p__83674){
var map__83675 = p__83674;
var map__83675__$1 = cljs.core.__destructure_map(map__83675);
var options = map__83675__$1;
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83675__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var always_render_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83675__$1,new cljs.core.Keyword(null,"always-render-body?","always-render-body?",-17343266));
var main_target = cljs.core.first(router_targets);
var alt_targets = cljs.core.rest(router_targets);
var static_query = cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("uism","asm-id","uism/asm-id",-1720055638),router_registry_key], null),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","dynamic-router-targets","com.fulcrologic.fulcro.routing.dynamic-routing/dynamic-router-targets",-786251636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(main_target);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(main_target))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,c){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("alt",idx),com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(c)]);
})),alt_targets);
var addl_options = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"render","render",-1408033454));
var user_render = (function (this$,router_props,route_factory,current_route_target_props){
if(cljs.core.truth_(render)){
var current_state = com.fulcrologic.fulcro.ui_state_machines.get_active_state(this$,router_registry_key);
var state_map = com.fulcrologic.fulcro.components.component__GT_state_map(this$);
var sm_env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,router_registry_key,new cljs.core.Keyword(null,"fake","fake",-904846741),cljs.core.PersistentArrayMap.EMPTY);
var pending_path_segment = ((com.fulcrologic.fulcro.ui_state_machines.asm_active_QMARK_(this$,router_registry_key))?com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268)):null);
var render_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),pending_path_segment,new cljs.core.Keyword(null,"route-props","route-props",-836332554),current_route_target_props,new cljs.core.Keyword(null,"route-factory","route-factory",-1848194547),route_factory,new cljs.core.Keyword(null,"current-state","current-state",1048284452),current_state,new cljs.core.Keyword(null,"router-state","router-state",-429575372),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(router_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),router_registry_key], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null))], null);
return (render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(this$,render_props) : render.call(null,this$,render_props));
} else {
return null;
}
});
var render_target_only = (function (this$,route_target_props,route_factory){
if(cljs.core.truth_(route_factory)){
var G__83676 = route_target_props;
var G__83677 = com.fulcrologic.fulcro.raw.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
return (route_factory.cljs$core$IFn$_invoke$arity$2 ? route_factory.cljs$core$IFn$_invoke$arity$2(G__83676,G__83677) : route_factory.call(null,G__83676,G__83677));
} else {
return null;
}
});
return com.fulcrologic.fulcro.components.sc(router_registry_key,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl_options,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297),true,new cljs.core.Keyword(null,"router-targets","router-targets",1582229763),router_targets,new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),router_registry_key], null);
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
return com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets(this$);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function (params){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),router_registry_key,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(cljs.core.first(router_targets),params)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["alt",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY)], null);
})),cljs.core.rest(router_targets));
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
return static_query;
})], null)], 0)),(function (this$,p__83678){
var map__83679 = p__83678;
var map__83679__$1 = cljs.core.__destructure_map(map__83679);
var props = map__83679__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83679__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961));
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83679__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871));
var TargetClass = com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class(this$);
var route_factory = (function (){var G__83680 = TargetClass;
if((G__83680 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(G__83680);
}
})();
if(cljs.core.truth_(always_render_body_QMARK_)){
return user_render(this$,props,route_factory,current_route);
} else {
var TargetClass__$1 = com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class(this$);
var current_state = com.fulcrologic.fulcro.ui_state_machines.get_active_state(this$,router_registry_key);
var states_to_render_route = (cljs.core.truth_(render)?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deferred","deferred",-1976960688),null,new cljs.core.Keyword(null,"routed","routed",-707282794),null], null), null):cljs.core.constantly(true));
if(cljs.core.truth_((states_to_render_route.cljs$core$IFn$_invoke$arity$1 ? states_to_render_route.cljs$core$IFn$_invoke$arity$1(current_state) : states_to_render_route.call(null,current_state)))){
return render_target_only(this$,current_route,route_factory);
} else {
return user_render(this$,props,route_factory,current_route);
}
}
}));
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.dynamic_router.cljs$lang$maxFixedArity = 3);

/**
 * Mutation helper. Add a target to a router dynamically.
 * 
 *   `router` - A class or registry key
 *   `target` - A class or registry key
 *   `initial-state-params` - Parameters to pass to `get-initial-state` when merging the state of `target` (which is only
 *   done if that component has a stable ident).
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target_STAR_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$add_route_target_STAR_(state_map,p__83681){
var map__83682 = p__83681;
var map__83682__$1 = cljs.core.__destructure_map(map__83682);
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83682__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83682__$1,new cljs.core.Keyword(null,"target","target",253001721));
var initial_state_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83682__$1,new cljs.core.Keyword(null,"initial-state-params","initial-state-params",-1309280029));
var Router = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(router);
var Target = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(target);
var stable_ident_QMARK_ = (function (){var and__5043__auto__ = Target;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.second((function (){var G__83683 = Target;
var G__83684 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__83683,G__83684) : com.fulcrologic.fulcro.components.get_ident.call(null,G__83683,G__83684));
})()) == null)));
} else {
return and__5043__auto__;
}
})();
var router_ident = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(Router,cljs.core.PersistentArrayMap.EMPTY);
var target_registry_key = com.fulcrologic.fulcro.raw.components.class__GT_registry_key(Target);
if((Router == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,1293,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot add route target. Router class not found for",router], null);
}),null)),null,1013382326,null);

return state_map;
} else {
if((Target == null)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,1298,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot add route target. Target class not found for",target], null);
}),null)),null,2034622099,null);

return state_map;
} else {
if((!(cljs.core.vector_QMARK_(com.fulcrologic.fulcro.routing.dynamic_routing.route_segment(Target))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,1303,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot add route target. Target class has a missing or invalid :route-segment: ",target], null);
}),null)),null,411910936,null);

return state_map;
} else {
var G__83685 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(router_ident,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","dynamic-router-targets","com.fulcrologic.fulcro.routing.dynamic-routing/dynamic-router-targets",-786251636)),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),target_registry_key);
if(cljs.core.truth_(stable_ident_QMARK_)){
return com.fulcrologic.fulcro.algorithms.merge.merge_component(G__83685,Target,com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(Target,(function (){var or__5045__auto__ = initial_state_params;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return G__83685;
}

}
}
}
});
/**
 * Mutation. Add a target to a router dynamically.
 * 
 * params:
 * * router - A router class or registry key
 * * target - A target class or registry key (must have :route-segment)
 * * initial-state-params - Parameters for the initial state for merging the target into state (if it has a stable ident)
 * 
 * See also `add-route-target!` and `add-route-target*`.
 * 
 */
com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","add-route-target","com.fulcrologic.fulcro.routing.dynamic-routing/add-route-target",966361223,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.fulcro.routing.dynamic-routing","add-route-target","com.fulcrologic.fulcro.routing.dynamic-routing/add-route-target",966361223,null),(function (fulcro_mutation_env_symbol){
var map__83686 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__83686__$1 = cljs.core.__destructure_map(map__83686);
var params = map__83686__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83686__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83686__$1,new cljs.core.Keyword(null,"target","target",253001721));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$fulcro$routing$dynamic_routing$action(p__83687){
var map__83688 = p__83687;
var map__83688__$1 = cljs.core.__destructure_map(map__83688);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83688__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__83689_83927 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__83690_83928 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__83690_83928);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target_STAR_,router,target);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__83689_83927);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__83691 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__83692 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__83692);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__83691);
}})], null);
}));
/**
 * Add a target to an existing router.
 * 
 *   app-ish - An app or component
 *   options - A map:
 * * router - A router class or registry key
 * * target - A target class or registry key (must have :route-segment)
 * * initial-state-params - Parameters for the initial state for merging the target into state (if it has a stable ident)
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$add_route_target_BANG_(app_ish,options){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app_ish,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target.cljs$core$IFn$_invoke$arity$1(options) : com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target.call(null,options))], null));
});
/**
 * Add a target to an existing router synchronously. This will NOT show in Fulcro Inspect as a transaction.
 * 
 *   app-ish - An app or component
 *   options - A map:
 * * router - A router class or registry key
 * * target - A target class or registry key (must have :route-segment)
 * * initial-state-params - Parameters for the initial state for merging the target into state (if it has a stable ident)
 *   
 */
com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target_BANG__BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$add_route_target_BANG__BANG_(app_ish,options){
var state_atom = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.any__GT_app(app_ish));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target_STAR_,options);
});
/**
 * Get the absolute path for the given route target.
 * 
 * NOTE: Using this on a route target that is on multiple paths of your application
 * can lead to ambiguity and failure of general routing, since this will then return an unpredictable result.
 * In those cases you must supply the options map with the ParentRouter of the RouteTarget, which will resolve the ambiguity. 
 */
com.fulcrologic.fulcro.routing.dynamic_routing.absolute_path = (function com$fulcrologic$fulcro$routing$dynamic_routing$absolute_path(var_args){
var G__83694 = arguments.length;
switch (G__83694) {
case 4:
return com.fulcrologic.fulcro.routing.dynamic_routing.absolute_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return com.fulcrologic.fulcro.routing.dynamic_routing.absolute_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.routing.dynamic_routing.absolute_path.cljs$core$IFn$_invoke$arity$4 = (function (app_ish,RouteTarget,route_params,p__83695){
var map__83696 = p__83695;
var map__83696__$1 = cljs.core.__destructure_map(map__83696);
var options = map__83696__$1;
var ParentRouter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83696__$1,new cljs.core.Keyword(null,"ParentRouter","ParentRouter",-1372476111));
var app = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var app_root = com.fulcrologic.fulcro.application.root_class(app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var _STAR_query_state_STAR__orig_val__83697 = com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_;
var _STAR_query_state_STAR__temp_val__83698 = state_map;
(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__83698);

try{return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$4(app_root,RouteTarget,route_params,options);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__83697);
}}));

(com.fulcrologic.fulcro.routing.dynamic_routing.absolute_path.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,RouteTarget,route_params){
return com.fulcrologic.fulcro.routing.dynamic_routing.absolute_path.cljs$core$IFn$_invoke$arity$4(app_ish,RouteTarget,route_params,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.routing.dynamic_routing.absolute_path.cljs$lang$maxFixedArity = 4);

com.fulcrologic.fulcro.routing.dynamic_routing.loaded_QMARK_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$loaded_QMARK_(k){
var or__5045__auto__ = (k == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
try{return com.fulcrologic.fulcro.routing.dynamic_routing.goog$module$shadow$loader.loaded_QMARK_(k);
}catch (e83699){var __ = e83699;
return null;
}}
});
/**
 * Route to a specific `target` of the given `Router`. This is different from `change-route!` in that it makes the
 * code a bit more navigable (though a bit less easily refactored), and supports some additional dynamic features:
 * 
 * * Dynamically adding the target to the router if it isn't there
 * * Loading a module that contains the router (dynamic code load through cljs.loader) and adding it to the router
 * 
 * `app-ish` - An app or component instance
 * 
 * The `options` map can contain:
 * 
 * * `router` (OPTIONAL/REQUIRED) - A router class or registry key for that router. Required if you want auto-add or loading to work.
 * * `target` (REQUIRED) - A target class or registry key.
 * * `:route-params` - A map from keywords to values for any of the route parameters expected for the given target.
 * * `:auto-add?` - Default false. Automatically add the target to the router if it isn't already there.
 * * `:load-from <module-name>` - Default nil. Check to see if <module-name> is loaded. If not, load it, IMPLIES `auto-add? true`.
 * * `:initial-state-params` - Parameters to use for the merge with get-initial-state if the component is added, and has a stable ident.
 * * `after-load (fn [app] ...)` - IF dynamically loaded, this function will be called before attempting to add the target, allowing
 *   you to dynamically generate the component from the loaded code if necessary. Such generation MUST be synchronous.
 * * `before-change (fn [app {:keys [target path route-params]}] ...)` - If the routing is possible and is not denied,
 *   this will be called just before the route is put into effect.
 * 
 */
com.fulcrologic.fulcro.routing.dynamic_routing.route_to_BANG_ = (function com$fulcrologic$fulcro$routing$dynamic_routing$route_to_BANG_(app_ish,p__83700){
var map__83701 = p__83700;
var map__83701__$1 = cljs.core.__destructure_map(map__83701);
var options = map__83701__$1;
var Router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83701__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83701__$1,new cljs.core.Keyword(null,"target","target",253001721));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83701__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var auto_add_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83701__$1,new cljs.core.Keyword(null,"auto-add?","auto-add?",-374601769));
var after_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83701__$1,new cljs.core.Keyword(null,"after-load","after-load",-1278503285));
var before_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83701__$1,new cljs.core.Keyword(null,"before-change","before-change",-514763340));
var initial_state_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83701__$1,new cljs.core.Keyword(null,"initial-state-params","initial-state-params",-1309280029));
var load_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83701__$1,new cljs.core.Keyword(null,"load-from","load-from",-185174201));
var app = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var auto_add_QMARK___$1 = (function (){var or__5045__auto__ = auto_add_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.boolean$(load_from);
}
})();
var Router__$1 = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(Router);
var target_key = ((com.fulcrologic.fulcro.raw.components.legal_registry_lookup_key_QMARK_(target))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(target):com.fulcrologic.fulcro.raw.components.class__GT_registry_key(target));
var RouteTarget = com.fulcrologic.fulcro.raw.components.registry_key__GT_class(target_key);
var existing_targets = (function (){var and__5043__auto__ = Router__$1;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.class__GT_registry_key),com.fulcrologic.fulcro.routing.dynamic_routing.get_targets.cljs$core$IFn$_invoke$arity$2(Router__$1,state_map));
} else {
return and__5043__auto__;
}
})();
var present_QMARK_ = (((Router__$1 == null)) || (cljs.core.contains_QMARK_(existing_targets,target_key)));
var loaded_QMARK_ = com.fulcrologic.fulcro.routing.dynamic_routing.loaded_QMARK_(load_from);
if(cljs.core.truth_((function (){var and__5043__auto__ = Router__$1;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = auto_add_QMARK___$1;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = loaded_QMARK_;
if(cljs.core.truth_(and__5043__auto____$2)){
return (!(present_QMARK_));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target_BANG__BANG_(app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"router","router",1091916230),Router__$1,new cljs.core.Keyword(null,"initial-state-params","initial-state-params",-1309280029),initial_state_params,new cljs.core.Keyword(null,"target","target",253001721),RouteTarget], null));

var G__83702 = app;
var G__83703 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"router","router",1091916230),Router__$1,new cljs.core.Keyword(null,"target","target",253001721),RouteTarget,new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params,new cljs.core.Keyword(null,"auto-add?","auto-add?",-374601769),false], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2(G__83702,G__83703) : com.fulcrologic.fulcro.routing.dynamic_routing.route_to_BANG_.call(null,G__83702,G__83703));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = Router__$1;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(loaded_QMARK_);
} else {
return and__5043__auto__;
}
})())){
return com.fulcrologic.fulcro.routing.dynamic_routing.goog$module$shadow$loader.load(load_from,(function (){
if(cljs.core.fn_QMARK_(after_load)){
(after_load.cljs$core$IFn$_invoke$arity$1 ? after_load.cljs$core$IFn$_invoke$arity$1(app) : after_load.call(null,app));
} else {
}

com.fulcrologic.fulcro.routing.dynamic_routing.add_route_target_BANG__BANG_(app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"router","router",1091916230),Router__$1,new cljs.core.Keyword(null,"initial-state-params","initial-state-params",-1309280029),initial_state_params,new cljs.core.Keyword(null,"target","target",253001721),target_key], null));

var G__83704 = app;
var G__83705 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"router","router",1091916230),Router__$1,new cljs.core.Keyword(null,"target","target",253001721),target_key,new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params,new cljs.core.Keyword(null,"auto-add?","auto-add?",-374601769),false], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.routing.dynamic_routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2(G__83704,G__83705) : com.fulcrologic.fulcro.routing.dynamic_routing.route_to_BANG_.call(null,G__83704,G__83705));
}));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = present_QMARK_;
if(and__5043__auto__){
return RouteTarget;
} else {
return and__5043__auto__;
}
})())){
var temp__5802__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.absolute_path.cljs$core$IFn$_invoke$arity$4(app,RouteTarget,route_params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ParentRouter","ParentRouter",-1372476111),Router__$1], null));
if(cljs.core.truth_(temp__5802__auto__)){
var path = temp__5802__auto__;
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,path)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.routing.dynamic-routing",null,1436,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Insufficient route parameters passed. Resulting route is probably invalid.",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(RouteTarget) : com.fulcrologic.fulcro.components.component_name.call(null,RouteTarget)),route_params], null);
}),null)),null,-16805442,null);
}

if((function (){var and__5043__auto__ = (cljs.core.truth_(Router__$1)?com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2(app,Router__$1):com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$1(app));
if(and__5043__auto__){
return cljs.core.fn_QMARK_(before_change);
} else {
return and__5043__auto__;
}
})()){
var G__83706_83930 = app;
var G__83707_83931 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),RouteTarget,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null);
(before_change.cljs$core$IFn$_invoke$arity$2 ? before_change.cljs$core$IFn$_invoke$arity$2(G__83706_83930,G__83707_83931) : before_change.call(null,G__83706_83930,G__83707_83931));
} else {
}

return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(app,path,route_params);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,1447,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Routing failed. Unable to construct route path from given arguments",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"router","router",1091916230),Router__$1,new cljs.core.Keyword(null,"target","target",253001721),target_key], null)], null);
}),null)),null,-1104316411,null);
}
} else {
if((((!(present_QMARK_))) && (cljs.core.not(auto_add_QMARK___$1)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.routing.dynamic-routing",null,1451,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot route to target because the router does not have that target (perhaps it failed to load?, or auto-add? was false).",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"router","router",1091916230),Router__$1,new cljs.core.Keyword(null,"target","target",253001721),target], null)], null);
}),null)),null,-2144741980,null);
} else {
return null;
}
}
}
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.routing.dynamic_routing.js.map
