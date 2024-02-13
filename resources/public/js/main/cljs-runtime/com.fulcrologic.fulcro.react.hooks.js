goog.provide('com.fulcrologic.fulcro.react.hooks');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * A simple CLJC wrapper around React/useState. Returns a JS vector for speed. You probably want use-state, which is more
 *   convenient.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usestate
 */
com.fulcrologic.fulcro.react.hooks.useState = (function com$fulcrologic$fulcro$react$hooks$useState(initial_value){
return module$node_modules$react$index.useState(initial_value);
});
/**
 * A simple wrapper around React/useState. Returns a cljs vector for easy destructuring.
 * 
 *   `initial-value` can be a function.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usestate
 */
com.fulcrologic.fulcro.react.hooks.use_state = (function com$fulcrologic$fulcro$react$hooks$use_state(initial_value){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(module$node_modules$react$index.useState(initial_value));
});
/**
 * A CLJC wrapper around js/React.useEffect that does NO conversion of
 *   dependencies. You probably want the macro use-effect instead.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#useeffect
 */
com.fulcrologic.fulcro.react.hooks.useEffect = (function com$fulcrologic$fulcro$react$hooks$useEffect(var_args){
var G__91548 = arguments.length;
switch (G__91548) {
case 1:
return com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useEffect(f);
}));

(com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2 = (function (f,js_deps){
return module$node_modules$react$index.useEffect(f,js_deps);
}));

(com.fulcrologic.fulcro.react.hooks.useEffect.cljs$lang$maxFixedArity = 2);

/**
 * A simple wrapper around the RAW React/useContext. You should probably prefer the context support from c.f.f.r.context.
 */
com.fulcrologic.fulcro.react.hooks.use_context = (function com$fulcrologic$fulcro$react$hooks$use_context(ctx){
return module$node_modules$react$index.useContext(ctx);
});
/**
 * A simple wrapper around React/useReducer. Returns a cljs vector for easy destructuring
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usecontext
 */
com.fulcrologic.fulcro.react.hooks.use_reducer = (function com$fulcrologic$fulcro$react$hooks$use_reducer(var_args){
var G__91550 = arguments.length;
switch (G__91550) {
case 2:
return com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (reducer,initial_arg){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(module$node_modules$react$index.useReducer(reducer,initial_arg));
}));

(com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (reducer,initial_arg,init){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(module$node_modules$react$index.useReducer(reducer,initial_arg,init));
}));

(com.fulcrologic.fulcro.react.hooks.use_reducer.cljs$lang$maxFixedArity = 3);

/**
 * A simple wrapper around React/useCallback. Converts args to js array before send.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usecallback
 */
com.fulcrologic.fulcro.react.hooks.use_callback = (function com$fulcrologic$fulcro$react$hooks$use_callback(var_args){
var G__91552 = arguments.length;
switch (G__91552) {
case 1:
return com.fulcrologic.fulcro.react.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (cb){
return module$node_modules$react$index.useCallback(cb);
}));

(com.fulcrologic.fulcro.react.hooks.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (cb,args){
return module$node_modules$react$index.useCallback(cb,cljs.core.to_array(args));
}));

(com.fulcrologic.fulcro.react.hooks.use_callback.cljs$lang$maxFixedArity = 2);

/**
 * A simple wrapper around React/useMemo. Converts args to js array before send.
 * 
 * NOTE: React does NOT guarantee it won't re-create the value during the lifetime of the
 * component, so it is sorta crappy in terms of actual memoization. Purely for optimizations, not
 * for guarantees.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usememo
 */
com.fulcrologic.fulcro.react.hooks.use_memo = (function com$fulcrologic$fulcro$react$hooks$use_memo(var_args){
var G__91554 = arguments.length;
switch (G__91554) {
case 1:
return com.fulcrologic.fulcro.react.hooks.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (value_factory_fn){
return module$node_modules$react$index.useMemo(value_factory_fn);
}));

(com.fulcrologic.fulcro.react.hooks.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (value_factory_fn,dependencies){
return module$node_modules$react$index.useMemo(value_factory_fn,cljs.core.to_array(dependencies));
}));

(com.fulcrologic.fulcro.react.hooks.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * A simple wrapper around React/useRef.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#useref
 */
com.fulcrologic.fulcro.react.hooks.use_ref = (function com$fulcrologic$fulcro$react$hooks$use_ref(var_args){
var G__91556 = arguments.length;
switch (G__91556) {
case 0:
return com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$0 = (function (){
return module$node_modules$react$index.useRef(null);
}));

(com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 = (function (value){
return module$node_modules$react$index.useRef(value);
}));

(com.fulcrologic.fulcro.react.hooks.use_ref.cljs$lang$maxFixedArity = 1);

/**
 * A simple wrapper around React/useImperativeHandle.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#useimperativehandle
 */
com.fulcrologic.fulcro.react.hooks.use_imperative_handle = (function com$fulcrologic$fulcro$react$hooks$use_imperative_handle(ref,f){
return module$node_modules$react$index.useImperativeHandle(ref,f);
});
/**
 * A simple wrapper around React/useLayoutEffect.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
com.fulcrologic.fulcro.react.hooks.use_layout_effect = (function com$fulcrologic$fulcro$react$hooks$use_layout_effect(var_args){
var G__91558 = arguments.length;
switch (G__91558) {
case 1:
return com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useLayoutEffect(f);
}));

(com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,args){
return module$node_modules$react$index.useLayoutEffect(f,cljs.core.to_array(args));
}));

(com.fulcrologic.fulcro.react.hooks.use_layout_effect.cljs$lang$maxFixedArity = 2);

/**
 * A simple wrapper around React/useDebugValue.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
com.fulcrologic.fulcro.react.hooks.use_debug_value = (function com$fulcrologic$fulcro$react$hooks$use_debug_value(var_args){
var G__91560 = arguments.length;
switch (G__91560) {
case 1:
return com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$core$IFn$_invoke$arity$1 = (function (value){
return module$node_modules$react$index.useDebugValue(value);
}));

(com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$core$IFn$_invoke$arity$2 = (function (value,formatter){
return module$node_modules$react$index.useDebugValue(value,formatter);
}));

(com.fulcrologic.fulcro.react.hooks.use_debug_value.cljs$lang$maxFixedArity = 2);

/**
 * A simple wrapper around React/useDeferredValue.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usedeferredvalue
 */
com.fulcrologic.fulcro.react.hooks.use_deferred_value = (function com$fulcrologic$fulcro$react$hooks$use_deferred_value(value){
return module$node_modules$react$index.useDeferredValue(value);
});
/**
 * A simple wrapper around React/useTransition.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usetransition
 */
com.fulcrologic.fulcro.react.hooks.use_transition = (function com$fulcrologic$fulcro$react$hooks$use_transition(value){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(module$node_modules$react$index.useTransition(value));
});
/**
 * A simple wrapper around React/useId. See also use-generated-id, which is a Fulcro-specific function for generating
 * random uuids.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#useid
 */
com.fulcrologic.fulcro.react.hooks.use_id = (function com$fulcrologic$fulcro$react$hooks$use_id(){
return module$node_modules$react$index.useId();
});
/**
 * A simple wrapper around React/useSyncExternalStore.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore
 */
com.fulcrologic.fulcro.react.hooks.use_sync_external_store = (function com$fulcrologic$fulcro$react$hooks$use_sync_external_store(var_args){
var G__91562 = arguments.length;
switch (G__91562) {
case 3:
return com.fulcrologic.fulcro.react.hooks.use_sync_external_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.react.hooks.use_sync_external_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.react.hooks.use_sync_external_store.cljs$core$IFn$_invoke$arity$3 = (function (subscribe,get_snapshot,get_server_ss){
return module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot,get_server_ss);
}));

(com.fulcrologic.fulcro.react.hooks.use_sync_external_store.cljs$core$IFn$_invoke$arity$2 = (function (subscribe,get_snapshot){
return module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot);
}));

(com.fulcrologic.fulcro.react.hooks.use_sync_external_store.cljs$lang$maxFixedArity = 3);

/**
 * A simple wrapper around React/useInsertionEffect.
 * 
 *   React docs: https://reactjs.org/docs/hooks-reference.html#useinsertioneffect
 */
com.fulcrologic.fulcro.react.hooks.use_insertion_effect = (function com$fulcrologic$fulcro$react$hooks$use_insertion_effect(didUpdate){
return module$node_modules$react$index.useInsertionEffect(didUpdate);
});
var id_91601 = (function (){
return com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
});
/**
 * Returns a constant ident with a generated ID component.
 */
com.fulcrologic.fulcro.react.hooks.use_generated_id = (function com$fulcrologic$fulcro$react$hooks$use_generated_id(){
return (com.fulcrologic.fulcro.react.hooks.useState(id_91601)[(0)]);
});
/**
 * Effect handler. Creates an effect that will garbage-collect the given ident from fulcro app state on cleanup, and
 *   will follow any `edges` (a set of keywords) and remove any things pointed through those keywords as well. See
 *   normalized-state's `remove-entity`.
 * 
 *   ```
 *   (defsc NewRoot [this props]
 *  {:use-hooks? true}
 *  (let [generated-id (hooks/use-generated-id)
 *        f (use-fulcro-mount this {:child-class SomeChild
 *                                  :initial-state-params {:id generated-id})]
 *    ;; will garbage-collect the floating root child on unmount
 *    (use-gc this [:child/id generated-id] #{})
 *    (f props)))
 *   ```
 *   
 */
com.fulcrologic.fulcro.react.hooks.use_gc = (function com$fulcrologic$fulcro$react$hooks$use_gc(this_or_app,ident,edges){
return com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
return (function (){
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.any__GT_app(this_or_app));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity,ident,edges);
});
}),[]);
});
var initial_mount_state_91602 = (function (){
var componentName = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.floating-root",cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("generated-root"));
return [componentName,null];
});
/**
 * 
 *  NOTE: In many cases you are better off using the other hooks support in this ns, such as `use-component`, since
 *  they do not have a render integration requirement.
 * 
 *  Generate a new sub-root that is controlled and rendered by Fulcro's multi-root-renderer.
 * 
 *  ```
 *  ;; important, you must use hooks (`defhc` or `:use-hooks? true`)
 *  (defsc NewRoot [this props]
 *    {:use-hooks? true}
 *    (let [f (use-fulcro-mount this {:child-class SomeChild})]
 *      ;; parent props will show up in SomeChild as computed props.
 *      (f props)))
 *  ```
 * 
 *  WARNING: Requires you use multi-root-renderer.
 */
com.fulcrologic.fulcro.react.hooks.use_fulcro_mount = (function com$fulcrologic$fulcro$react$hooks$use_fulcro_mount(parent_this,p__91563){
var map__91564 = p__91563;
var map__91564__$1 = cljs.core.__destructure_map(map__91564);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91564__$1,new cljs.core.Keyword(null,"child-class","child-class",216780503));
var initial_state_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91564__$1,new cljs.core.Keyword(null,"initial-state-params","initial-state-params",-1309280029));
var st = com.fulcrologic.fulcro.react.hooks.useState(initial_mount_state_91602);
var pass_through_props = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var key_and_root = (st[(0)]);
var setRoot_BANG_ = (st[(1)]);
var _ = com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
var join_key = (key_and_root[(0)]);
var child_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(child_class);
var initial_state = (function (){var G__91565 = child_class;
var G__91566 = (function (){var or__5045__auto__ = initial_state_params;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__91565,G__91566) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__91565,G__91566));
})();
var cls = com.fulcrologic.fulcro.components.configure_hooks_component_BANG_((function (this$,fulcro_props){
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})();

return (function (){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
});
}),[]);

var parent__50736__auto__ = parent_this;
var app__50737__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(parent__50736__auto__);
}
})();
var s__50738__auto__ = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__50737__auto__);
var p__50739__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return parent__50736__auto__;
}
})();
var _STAR_app_STAR__orig_val__91567 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__91568 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__91569 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__91570 = app__50737__auto__;
var _STAR_shared_STAR__temp_val__91571 = s__50738__auto__;
var _STAR_parent_STAR__temp_val__91572 = p__50739__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__91570);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__91571);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__91572);

try{var G__91573 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro_props,join_key,initial_state);
var G__91574 = cljs.core.deref(pass_through_props);
return (child_factory.cljs$core$IFn$_invoke$arity$2 ? child_factory.cljs$core$IFn$_invoke$arity$2(G__91573,G__91574) : child_factory.call(null,G__91573,G__91574));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__91569);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__91568);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__91567);
}}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([join_key,com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(child_class)])], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function (_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([join_key,initial_state]);
}),new cljs.core.Keyword(null,"componentName","componentName",-2103437555),join_key], null));
var real_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (_){
return join_key;
})], null));
var factory = (function (props){
cljs.core.reset_BANG_(pass_through_props,props);

var G__91575 = cljs.core.PersistentArrayMap.EMPTY;
return (real_factory.cljs$core$IFn$_invoke$arity$1 ? real_factory.cljs$core$IFn$_invoke$arity$1(G__91575) : real_factory.call(null,G__91575));
});
var G__91576 = [join_key,factory];
return (setRoot_BANG_.cljs$core$IFn$_invoke$arity$1 ? setRoot_BANG_.cljs$core$IFn$_invoke$arity$1(G__91576) : setRoot_BANG_.call(null,G__91576));
})();

return (function (){
var join_key = (key_and_root[(0)]);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.any__GT_app(parent_this));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,join_key);
});
}),[]);
return (key_and_root[(1)]);
});
com.fulcrologic.fulcro.react.hooks.pcs = (function com$fulcrologic$fulcro$react$hooks$pcs(app,component,prior_props_tree_or_ident){
var ident = ((edn_query_language.core.ident_QMARK_(prior_props_tree_or_ident))?prior_props_tree_or_ident:(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,prior_props_tree_or_ident) : com.fulcrologic.fulcro.components.get_ident.call(null,component,prior_props_tree_or_ident)));
var state_map = com.fulcrologic.fulcro.raw.application.current_state(app);
var starting_entity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
return com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,starting_entity,state_map);
});
com.fulcrologic.fulcro.react.hooks.use_db_lifecycle = (function com$fulcrologic$fulcro$react$hooks$use_db_lifecycle(app,component,current_props_tree,set_state_BANG_){
var vec__91577 = com.fulcrologic.fulcro.react.hooks.use_state(cljs.core.random_uuid());
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91577,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91577,(1),null);
return com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
var state_map = com.fulcrologic.fulcro.raw.application.current_state(app);
var ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,current_props_tree) : com.fulcrologic.fulcro.components.get_ident.call(null,component,current_props_tree));
var exists_QMARK_ = cljs.core.map_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,ident));
if(exists_QMARK_){
} else {
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_(app,component,current_props_tree);
}

return com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app,id,(function (app__$1,___$1){
var props = com.fulcrologic.fulcro.react.hooks.pcs(app__$1,component,ident);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(props) : set_state_BANG_.call(null,props));
}));
})();

return (function (){
return com.fulcrologic.fulcro.raw.application.remove_render_listener_BANG_(app,id);
});
}),[]);
});
/**
 * Use Fulcro from raw React. This is a Hook effect/state combo that will connect you to the transaction/network/data
 *   processing of Fulcro, but will not rely on Fulcro's render. Thus, you can embed the use of the returned props in any
 *   stock React context. Technically, you do not have to use Fulcro components for rendering, but they are necessary to define the
 *   query/ident/initial-state for startup and normalization. You may also use this within normal (Fulcro)
 *   components to generate dynamic components on-the-fly (see `nc`).
 * 
 *   The arguments are:
 * 
 *   `app` - A Fulcro app
 *   `component` - A component with query/ident. Queries MUST have co-located normalization info. You
 *            can create this with normal `defsc` or as an anonymous component via `raw.components/nc`.
 *   `options` - A map of options, containing:
 *  * `:initial-params` - The parameters to use when getting the initial state of the component. See `comp/get-initial-state`.
 *    If no initial state exists on the top-level component, then an empty map will be used. This will mean your props will be
 *    empty to start.
 *  * `initialize?` - A boolean (default true). If true then the initial state of the component will be used to pre-populate the component's state
 *    in the app database.
 *  * `:keep-existing?` - A boolean. If true, then the state of the component will not be initialized if there
 *    is already data at the component's ident (which will be computed using the initial state params provided, if
 *    necessary).
 *  * `:ident` - Only needed if you are NOT initializing state, AND the component has a dynamic ident.
 * 
 *   Returns the props from the Fulcro database. The component using this function will automatically refresh after Fulcro
 *   transactions run (Fulcro is not a watched-atom system. Updates happen at transaction boundaries).
 * 
 *   MAY return nil if no data is at that component's ident.
 * 
 *   See also `use-root`.
 *   
 */
com.fulcrologic.fulcro.react.hooks.use_component = (function com$fulcrologic$fulcro$react$hooks$use_component(app,component,p__91580){
var map__91581 = p__91580;
var map__91581__$1 = cljs.core.__destructure_map(map__91581);
var options = map__91581__$1;
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91581__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var initial_params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91581__$1,new cljs.core.Keyword(null,"initial-params","initial-params",1980851682),cljs.core.PersistentArrayMap.EMPTY);
var keep_existing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91581__$1,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180));
var prior_props_ref = com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var get_props = (function (ident){
return com.fulcrologic.fulcro.raw.components.get_traced_props(com.fulcrologic.fulcro.raw.application.current_state(app),component,ident,prior_props_ref.current);
});
var vec__91582 = com.fulcrologic.fulcro.react.hooks.use_state((function com$fulcrologic$fulcro$react$hooks$use_component_$_initialize_component_state(){
var initial_entity = (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(component,initial_params) : com.fulcrologic.fulcro.components.get_initial_state.call(null,component,initial_params));
var initial_ident = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,initial_entity);
}
})();
com.fulcrologic.fulcro.raw.application.maybe_merge_new_component_BANG_(app,component,initial_entity,options);

var initial_props = get_props(initial_ident);
(prior_props_ref.current = initial_props);

return initial_props;
}));
var current_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91582,(0),null);
var set_props_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91582,(1),null);
var current_ident = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(component,current_props);
}
})();
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
var listener_id = cljs.core.random_uuid();
com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app,listener_id,(function (app__$1,_){
var props = get_props(current_ident);
if((prior_props_ref.current === props)){
return null;
} else {
(prior_props_ref.current = props);

return (set_props_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_props_BANG_.cljs$core$IFn$_invoke$arity$1(props) : set_props_BANG_.call(null,props));
}
}));

return (function com$fulcrologic$fulcro$react$hooks$use_component_$_use_tree_remove_render_listener_STAR_(){
com.fulcrologic.fulcro.raw.application.remove_render_listener_BANG_(app,listener_id);

return (prior_props_ref.current = null);
});
}),[cljs.core.hash(current_ident)]);

return current_props;
});
/**
 * Use a root key and component as a subtree managed by Fulcro from raw React. The `root-key` must be a unique
 * (namespace recommended) key among all keys used within the application, since the root of the database is where it
 * will live.
 * 
 * The `component` should be a real Fulcro component or a generated normalizing component from `nc` (or similar).
 * 
 * Returns the props (not including `root-key`) that satisfy the query of `component`. MAY return nil if no data is available.
 * 
 * See also `use-component`.
 *   
 */
com.fulcrologic.fulcro.react.hooks.use_root = (function com$fulcrologic$fulcro$react$hooks$use_root(app,root_key,component,p__91585){
var map__91586 = p__91585;
var map__91586__$1 = cljs.core.__destructure_map(map__91586);
var options = map__91586__$1;
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91586__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var keep_existing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91586__$1,new cljs.core.Keyword(null,"keep-existing?","keep-existing?",-916245180));
var initial_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91586__$1,new cljs.core.Keyword(null,"initial-params","initial-params",1980851682));
var prior_props_ref = com.fulcrologic.fulcro.react.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null);
var get_props = (function (){
return com.fulcrologic.fulcro.raw.application.get_root_subtree_props(app,root_key,component,prior_props_ref.current);
});
var vec__91587 = com.fulcrologic.fulcro.react.hooks.use_state((function (){
com.fulcrologic.fulcro.raw.application.maybe_merge_new_root_BANG_(app,root_key,component,options);

var initial_props = get_props();
(prior_props_ref.current = initial_props);

return initial_props;
}));
var current_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91587,(0),null);
var set_props_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91587,(1),null);
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
return com.fulcrologic.fulcro.raw.application.add_render_listener_BANG_(app,root_key,(function com$fulcrologic$fulcro$react$hooks$use_root_$_use_root_render_listener_STAR_(app__$1,_){
var props = get_props();
if((prior_props_ref.current === props)){
return null;
} else {
(prior_props_ref.current = props);

return (set_props_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_props_BANG_.cljs$core$IFn$_invoke$arity$1(props) : set_props_BANG_.call(null,props));
}
}));
})();

return (function com$fulcrologic$fulcro$react$hooks$use_root_$_use_tree_remove_render_listener_STAR_(){
return com.fulcrologic.fulcro.raw.application.remove_root_BANG_(app,root_key);
});
}),[]);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_props,root_key);
});
/**
 * Use a UISM as an effect hook. This will set up the given state machine under the given ID, and start it (if not
 * already started). Your initial state handler MUST set up actors and otherwise initialize based on options.
 * 
 * If the machine is already started at the given ID then this effect will send it an `:event/remounted` event.
 * 
 * You MUST include `:componentName` in each of your actor's normalizing component options (e.g. `(nc query {:componentName ::uniqueName})`)
 * because UISM requires component appear in the component registry (components cannot be safely stored in app state, just their
 * names).
 * 
 * `options` is a map that can contain `::uism/actors` as an actor definition map (see `begin!`). Any other keys in options
 * are sent as the initial event data when the machine is started.
 * 
 * Returns a map that contains the actor props (by actor name) and the current state of the state machine as `:active-state`.
 */
com.fulcrologic.fulcro.react.hooks.use_uism = (function com$fulcrologic$fulcro$react$hooks$use_uism(app,state_machine_definition,id,options){
var vec__91590 = com.fulcrologic.fulcro.react.hooks.use_state((function com$fulcrologic$fulcro$react$hooks$use_uism_$_initialize_component_state(){
return com.fulcrologic.fulcro.ui_state_machines.current_state_and_actors(com.fulcrologic.fulcro.application.current_state(app),id);
}));
var uism_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91590,(0),null);
var set_uism_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91590,(1),null);
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
return com.fulcrologic.fulcro.ui_state_machines.add_uism_BANG_(app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state-machine-definition","state-machine-definition",-64300746),state_machine_definition,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"receive-props","receive-props",-391890642),set_uism_data_BANG_,new cljs.core.Keyword(null,"actors","actors",-1845636398),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"initial-event-data","initial-event-data",184944047),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064))], null));
})();

return (function (){
return com.fulcrologic.fulcro.ui_state_machines.remove_uism_BANG_(app,id);
});
}),[]);

return uism_data;
});

//# sourceMappingURL=com.fulcrologic.fulcro.react.hooks.js.map
