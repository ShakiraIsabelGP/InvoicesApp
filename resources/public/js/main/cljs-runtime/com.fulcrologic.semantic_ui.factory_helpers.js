goog.provide('com.fulcrologic.semantic_ui.factory_helpers');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Creates a function that can make elements of the given class.
 */
com.fulcrologic.semantic_ui.factory_helpers.factory_apply = (function com$fulcrologic$semantic_ui$factory_helpers$factory_apply(class$){
return (function() { 
var G__52903__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,class$,cljs.core.clj__GT_js(props),children);
};
var G__52903 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__52904__i = 0, G__52904__a = new Array(arguments.length -  1);
while (G__52904__i < G__52904__a.length) {G__52904__a[G__52904__i] = arguments[G__52904__i + 1]; ++G__52904__i;}
  children = new cljs.core.IndexedSeq(G__52904__a,0,null);
} 
return G__52903__delegate.call(this,props,children);};
G__52903.cljs$lang$maxFixedArity = 1;
G__52903.cljs$lang$applyTo = (function (arglist__52905){
var props = cljs.core.first(arglist__52905);
var children = cljs.core.rest(arglist__52905);
return G__52903__delegate(props,children);
});
G__52903.cljs$core$IFn$_invoke$arity$variadic = G__52903__delegate;
return G__52903;
})()
;
});
/**
 * Returns a factory that wraps the given class as an input. Requires that the target item support `:value` as a prop.
 */
com.fulcrologic.semantic_ui.factory_helpers.wrapped_factory_apply = (function com$fulcrologic$semantic_ui$factory_helpers$wrapped_factory_apply(class$){
var factory = com.fulcrologic.fulcro.dom.wrap_form_element(class$);
return (function() { 
var G__52906__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(factory,cljs.core.clj__GT_js(props),children);
};
var G__52906 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__52907__i = 0, G__52907__a = new Array(arguments.length -  1);
while (G__52907__i < G__52907__a.length) {G__52907__a[G__52907__i] = arguments[G__52907__i + 1]; ++G__52907__i;}
  children = new cljs.core.IndexedSeq(G__52907__a,0,null);
} 
return G__52906__delegate.call(this,props,children);};
G__52906.cljs$lang$maxFixedArity = 1;
G__52906.cljs$lang$applyTo = (function (arglist__52908){
var props = cljs.core.first(arglist__52908);
var children = cljs.core.rest(arglist__52908);
return G__52906__delegate(props,children);
});
G__52906.cljs$core$IFn$_invoke$arity$variadic = G__52906__delegate;
return G__52906;
})()
;
});

//# sourceMappingURL=com.fulcrologic.semantic_ui.factory_helpers.js.map
