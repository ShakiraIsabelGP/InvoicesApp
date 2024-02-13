goog.provide('com.fulcrologic.rad.routing');
/**
 * Get the absolute path for the given route target. NOTE: Using a route target in multiple paths of your application
 * can lead to ambiguity and failure of general routing, since this will then return an unpredictable result.
 */
com.fulcrologic.rad.routing.absolute_path = (function com$fulcrologic$rad$routing$absolute_path(app_ish,RouteTarget,route_params){
var app = com.fulcrologic.fulcro.components.any__GT_app(app_ish);
var app_root = com.fulcrologic.fulcro.application.root_class(app);
var state_map = com.fulcrologic.fulcro.application.current_state(app);
var _STAR_query_state_STAR__orig_val__86072 = com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_;
var _STAR_query_state_STAR__temp_val__86073 = state_map;
(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__86073);

try{return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3(app_root,RouteTarget,route_params);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__86072);
}});
com.fulcrologic.rad.routing.can_change_route_QMARK_ = (function com$fulcrologic$rad$routing$can_change_route_QMARK_(app_or_component,new_route){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_or_component);
var root = com.fulcrologic.fulcro.application.root_class(app);
var vec__86074 = com.fulcrologic.fulcro.routing.dynamic_routing.evaluate_relative_path(root,new_route);
var relative_class_or_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86074,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86074,(1),null);
var relative_class = (cljs.core.truth_((com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(relative_class_or_instance) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,relative_class_or_instance)))?com.fulcrologic.fulcro.components.react_type(relative_class_or_instance):relative_class_or_instance);
return com.fulcrologic.fulcro.routing.dynamic_routing.can_change_route_QMARK_.cljs$core$IFn$_invoke$arity$2(app,relative_class);
});
/**
 * Change the UI to display the route to the specified class, with the additional parameter map as route params. If
 *   route history is installed, then it will be notified of the change. This function is also integrated into the RAD
 *   authorization system.
 * 
 *   The `RouteTarget` should be a _leaf_ target. Fulcro will correctly route through all the parent routers - just
 *   make sure that `route-params` includes all the params that are needed.
 * 
 *   NOTES:
 *  * The RouteTarget can be a component class or Fulcro registry key.
 *  * This function derives the absolute path. If the given target exists as a sibling to itself in your UI
 *    composition, then the result will be ambiguous and you must use `dr/change-route!` directly instead, which
 *    does not suffer from this ambiguity.
 * 
 *   You may include `::rad-routing/replace-route? true` in route-params as a hint to the history that you'd prefer to
 *   replace the top history element instead of pushing a new one.
 * 
 *   `options` is a map that is the same as `dr/route-to!`, and supports things like `:route-params`, `:target`,
 *   and dynamic route injection/loading.
 */
com.fulcrologic.rad.routing.route_to_BANG_ = (function com$fulcrologic$rad$routing$route_to_BANG_(var_args){
var G__86078 = arguments.length;
switch (G__86078) {
case 2:
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,options){
return com.fulcrologic.fulcro.routing.dynamic_routing.route_to_BANG_(app,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"before-change","before-change",-514763340),(function (app__$1,p__86079){
var map__86080 = p__86079;
var map__86080__$1 = cljs.core.__destructure_map(map__86080);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86080__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86080__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.rad.routing","replace-route?","com.fulcrologic.rad.routing/replace-route?",-1831467006).cljs$core$IFn$_invoke$arity$1(route_params))){
return com.fulcrologic.rad.routing.history.replace_route_BANG_(app__$1,path,route_params);
} else {
return com.fulcrologic.rad.routing.history.push_route_BANG_(app__$1,path,route_params);
}
})));
}));

(com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_or_component,RouteTarget,route_params){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2(app_or_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),RouteTarget,new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));
}));

(com.fulcrologic.rad.routing.route_to_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Attempt to navigate back to the last point in history. Returns true if there is history support, false if
 * it is impossible to even try to go back.
 */
com.fulcrologic.rad.routing.back_BANG_ = (function com$fulcrologic$rad$routing$back_BANG_(app_or_component){
if(com.fulcrologic.rad.routing.history.history_support_QMARK_(app_or_component)){
com.fulcrologic.rad.routing.history.back_BANG_(app_or_component);

return true;
} else {
return false;
}
});
/**
 * Like `clojure.core/update`. Has no effect if history support isn't installed.
 * 
 *   Run `(apply f current-route-params args)` and store those as the current route params.
 */
com.fulcrologic.rad.routing.update_route_params_BANG_ = (function com$fulcrologic$rad$routing$update_route_params_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___86089 = arguments.length;
var i__5770__auto___86090 = (0);
while(true){
if((i__5770__auto___86090 < len__5769__auto___86089)){
args__5775__auto__.push((arguments[i__5770__auto___86090]));

var G__86091 = (i__5770__auto___86090 + (1));
i__5770__auto___86090 = G__86091;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_or_component,f,args){
if(com.fulcrologic.rad.routing.history.history_support_QMARK_(app_or_component)){
var map__86085 = com.fulcrologic.rad.routing.history.current_route(app_or_component);
var map__86085__$1 = cljs.core.__destructure_map(map__86085);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86085__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86085__$1,new cljs.core.Keyword(null,"params","params",710516235));
var new_params = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,params,args);
return com.fulcrologic.rad.routing.history.replace_route_BANG_(app_or_component,route,new_params);
} else {
return null;
}
}));

(com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.rad.routing.update_route_params_BANG_.cljs$lang$applyTo = (function (seq86082){
var G__86083 = cljs.core.first(seq86082);
var seq86082__$1 = cljs.core.next(seq86082);
var G__86084 = cljs.core.first(seq86082__$1);
var seq86082__$2 = cljs.core.next(seq86082__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86083,G__86084,seq86082__$2);
}));


//# sourceMappingURL=com.fulcrologic.rad.routing.js.map
