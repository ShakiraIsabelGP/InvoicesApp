goog.provide('com.fulcrologic.rad.middleware.save_middleware');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.middleware !== 'undefined') && (typeof com.fulcrologic.rad.middleware.save_middleware !== 'undefined') && (typeof com.fulcrologic.rad.middleware.save_middleware.rewrite_value !== 'undefined')){
} else {
/**
 * 
 *   [save-env ident save-diff]
 * 
 *   Given the save-env, ident of an entity, and incoming save diff (map from :before to :after for each
 *   changed attribute): Return an updated save-diff.  The default method for this simply returns save-diff.
 *   Returning nil from this method will have the effect of removing all values for `ident` from the save.
 */
com.fulcrologic.rad.middleware.save_middleware.rewrite_value = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__90545 = cljs.core.get_global_hierarchy;
return (fexpr__90545.cljs$core$IFn$_invoke$arity$0 ? fexpr__90545.cljs$core$IFn$_invoke$arity$0() : fexpr__90545.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.middleware.save-middleware","rewrite-value"),(function (save_env,ident,value){
return cljs.core.first(ident);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
com.fulcrologic.rad.middleware.save_middleware.rewrite_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,v){
return v;
}));
/**
 * Rewrite the delta in ::form/params of save-env. Returns the new save-env.
 */
com.fulcrologic.rad.middleware.save_middleware.rewrite_values = (function com$fulcrologic$rad$middleware$save_middleware$rewrite_values(pathom_env){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(pathom_env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","params","com.fulcrologic.rad.form/params",267016742),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),(function (p1__90546_SHARP_){
return cljs.core.reduce_kv((function com$fulcrologic$rad$middleware$save_middleware$rewrite_values_$_rewrite_value_step_STAR_(m,ident,new_value){
var rewritten_value = com.fulcrologic.rad.middleware.save_middleware.rewrite_value.cljs$core$IFn$_invoke$arity$3(pathom_env,ident,new_value);
if((rewritten_value == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,ident);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ident,rewritten_value);
}
}),cljs.core.PersistentArrayMap.EMPTY,p1__90546_SHARP_);
}));
});
/**
 * Middleware that allows the distribution of incoming save diff rewrite across models. Should be at the bottom
 * (early side) of the middleware if used.
 */
com.fulcrologic.rad.middleware.save_middleware.wrap_rewrite_values = (function com$fulcrologic$rad$middleware$save_middleware$wrap_rewrite_values(handler){
return (function (pathom_env){
var new_save_env = com.fulcrologic.rad.middleware.save_middleware.rewrite_values(pathom_env);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(new_save_env) : handler.call(null,new_save_env));
});
});
/**
 * Save middleware that adds a step in the middleware that can rewrite the incoming delta of a save.
 *   The rewrite is allowed to do anything at all to the delta: add extra entities, create relations, augment
 *   entities, or even clear the delta to an empty map so nothing will be saved.
 * 
 *   The `rewrite-fn` should be a `(fn [pathom-env delta] updated-delta)`. You *can* return nil to indicate no
 *   rewrite is needed, but any other return will be used as the new thing to save (instead of what was sent).
 * 
 *   The `delta` has the format of a normalized Fulcro form save:
 * 
 *   ```
 *   {[:account/id 19] {:account/age {:before 42 :after 43}
 *                   :account/items {:before [] :after [[:item/id 1]]}}
 * [:item/id 1] {:item/value {:before 22M :after 19.53M}}}
 *   ```
 *   
 */
com.fulcrologic.rad.middleware.save_middleware.wrap_rewrite_delta = (function com$fulcrologic$rad$middleware$save_middleware$wrap_rewrite_delta(handler,rewrite_fn){
return (function (env){
var old_delta = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","params","com.fulcrologic.rad.form/params",267016742),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null));
var new_delta = (function (){var or__5045__auto__ = (rewrite_fn.cljs$core$IFn$_invoke$arity$2 ? rewrite_fn.cljs$core$IFn$_invoke$arity$2(env,old_delta) : rewrite_fn.call(null,env,old_delta));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return old_delta;
}
})();
var G__90547 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","params","com.fulcrologic.rad.form/params",267016742),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),new_delta);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__90547) : handler.call(null,G__90547));
});
});

//# sourceMappingURL=com.fulcrologic.rad.middleware.save_middleware.js.map
