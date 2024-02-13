goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__52454){
var vec__52455 = p__52454;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52455,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52455,(1),null);
var pair = vec__52455;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__52458){
var vec__52459 = p__52458;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459,(1),null);
var pair = vec__52459;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__52462){
var vec__52463 = p__52462;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52463,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52463,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__52466 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52466,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__52466;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * This fn is outdated - it expects js/ReactDOMServer to be defined (used to be provided cljsjs.react.dom.server).
 *   It is better to do it yourself (under shadow-cljs):
 * 
 * ```clj
 * (ns ex (:require ["react-dom/server" :as react-dom-server] ...))
 * (react-dom-server/renderToString c)
 * ```
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__52468 = arguments.length;
switch (G__52468) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__52469 = component.refs;
var G__52469__$1 = (((G__52469 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__52469,name));
if((G__52469__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__52469__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5802__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5802__auto__)){
var ref = temp__5802__auto__;
var G__52470 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__52471 = (function (){var G__52472 = r;
if((G__52472 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__52472);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__52471) : ref.call(null,G__52471));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__52470) : factory.call(null,G__52470));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__52477 = arguments.length;
switch (G__52477) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___52911 = arguments.length;
var i__5770__auto___52912 = (0);
while(true){
if((i__5770__auto___52912 < len__5769__auto___52911)){
args_arr__5794__auto__.push((arguments[i__5770__auto___52912]));

var G__52913 = (i__5770__auto___52912 + (1));
i__5770__auto___52912 = G__52913;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq52474){
var G__52475 = cljs.core.first(seq52474);
var seq52474__$1 = cljs.core.next(seq52474);
var G__52476 = cljs.core.first(seq52474__$1);
var seq52474__$2 = cljs.core.next(seq52474__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52475,G__52476,seq52474__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__52478 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__52478) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__52478));
} else {
return and__5043__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x52480_52914 = ctor.prototype;
(x52480_52914.onChange = (function (event){
var this$ = this;
var temp__5804__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x52480_52914.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__52479_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__52479_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,187,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-1993709815,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x52480_52914.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__52915__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__52915 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52916__i = 0, G__52916__a = new Array(arguments.length -  0);
while (G__52916__i < G__52916__a.length) {G__52916__a[G__52916__i] = arguments[G__52916__i + 0]; ++G__52916__i;}
  args = new cljs.core.IndexedSeq(G__52916__a,0,null);
} 
return G__52915__delegate.call(this,args);};
G__52915.cljs$lang$maxFixedArity = 0;
G__52915.cljs$lang$applyTo = (function (arglist__52917){
var args = cljs.core.seq(arglist__52917);
return G__52915__delegate(args);
});
G__52915.cljs$core$IFn$_invoke$arity$variadic = G__52915__delegate;
return G__52915;
})()
;
return (function() { 
var G__52918__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5802__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__52918 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__52919__i = 0, G__52919__a = new Array(arguments.length -  1);
while (G__52919__i < G__52919__a.length) {G__52919__a[G__52919__i] = arguments[G__52919__i + 1]; ++G__52919__i;}
  children = new cljs.core.IndexedSeq(G__52919__a,0,null);
} 
return G__52918__delegate.call(this,props,children);};
G__52918.cljs$lang$maxFixedArity = 1;
G__52918.cljs$lang$applyTo = (function (arglist__52920){
var props = cljs.core.first(arglist__52920);
var children = cljs.core.rest(arglist__52920);
return G__52918__delegate(props,children);
});
G__52918.cljs$core$IFn$_invoke$arity$variadic = G__52918__delegate;
return G__52918;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__52481 = tag;
switch (G__52481) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52481)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__52483 = arguments.length;
switch (G__52483) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__52484 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__52485 = cljs.core.seq(vec__52484);
var first__52486 = cljs.core.first(seq__52485);
var seq__52485__$1 = cljs.core.next(seq__52485);
var head = first__52486;
var tail = seq__52485__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__52487 = (function (){var G__52488 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52488,tail);

return G__52488;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52487) : f.call(null,G__52487));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__52489 = (function (){var G__52490 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52490,args);

return G__52490;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52489) : f.call(null,G__52489));
} else {
if(cljs.core.object_QMARK_(head)){
var G__52491 = (function (){var G__52492 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52492,tail);

return G__52492;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52491) : f.call(null,G__52491));
} else {
if(cljs.core.map_QMARK_(head)){
var G__52493 = (function (){var G__52494 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__52494,tail);

return G__52494;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52493) : f.call(null,G__52493));
} else {
var G__52495 = (function (){var G__52496 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52496,args);

return G__52496;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52495) : f.call(null,G__52495));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__52498 = arguments.length;
switch (G__52498) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__52499 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__52500 = cljs.core.seq(vec__52499);
var first__52501 = cljs.core.first(seq__52500);
var seq__52500__$1 = cljs.core.next(seq__52500);
var head = first__52501;
var tail = seq__52500__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52502 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52502,tail);

return G__52502;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52503 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52503,args);

return G__52503;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52504 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52504,tail);

return G__52504;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52505 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__52505,tail);

return G__52505;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52506 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52506,args);

return G__52506;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52924 = arguments.length;
var i__5770__auto___52925 = (0);
while(true){
if((i__5770__auto___52925 < len__5769__auto___52924)){
args__5775__auto__.push((arguments[i__5770__auto___52925]));

var G__52926 = (i__5770__auto___52925 + (1));
i__5770__auto___52925 = G__52926;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52508 = conformed_args__51242__auto__;
var map__52508__$1 = cljs.core.__destructure_map(map__52508);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq52507){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52507));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52927 = arguments.length;
var i__5770__auto___52928 = (0);
while(true){
if((i__5770__auto___52928 < len__5769__auto___52927)){
args__5775__auto__.push((arguments[i__5770__auto___52928]));

var G__52929 = (i__5770__auto___52928 + (1));
i__5770__auto___52928 = G__52929;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52510 = conformed_args__51242__auto__;
var map__52510__$1 = cljs.core.__destructure_map(map__52510);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52510__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq52509){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52509));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52930 = arguments.length;
var i__5770__auto___52931 = (0);
while(true){
if((i__5770__auto___52931 < len__5769__auto___52930)){
args__5775__auto__.push((arguments[i__5770__auto___52931]));

var G__52932 = (i__5770__auto___52931 + (1));
i__5770__auto___52931 = G__52932;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52512 = conformed_args__51242__auto__;
var map__52512__$1 = cljs.core.__destructure_map(map__52512);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52512__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52512__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq52511){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52511));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52933 = arguments.length;
var i__5770__auto___52934 = (0);
while(true){
if((i__5770__auto___52934 < len__5769__auto___52933)){
args__5775__auto__.push((arguments[i__5770__auto___52934]));

var G__52935 = (i__5770__auto___52934 + (1));
i__5770__auto___52934 = G__52935;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52514 = conformed_args__51242__auto__;
var map__52514__$1 = cljs.core.__destructure_map(map__52514);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq52513){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52513));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52936 = arguments.length;
var i__5770__auto___52937 = (0);
while(true){
if((i__5770__auto___52937 < len__5769__auto___52936)){
args__5775__auto__.push((arguments[i__5770__auto___52937]));

var G__52938 = (i__5770__auto___52937 + (1));
i__5770__auto___52937 = G__52938;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52516 = conformed_args__51242__auto__;
var map__52516__$1 = cljs.core.__destructure_map(map__52516);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq52515){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52515));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52939 = arguments.length;
var i__5770__auto___52940 = (0);
while(true){
if((i__5770__auto___52940 < len__5769__auto___52939)){
args__5775__auto__.push((arguments[i__5770__auto___52940]));

var G__52941 = (i__5770__auto___52940 + (1));
i__5770__auto___52940 = G__52941;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52518 = conformed_args__51242__auto__;
var map__52518__$1 = cljs.core.__destructure_map(map__52518);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq52517){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52517));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52942 = arguments.length;
var i__5770__auto___52943 = (0);
while(true){
if((i__5770__auto___52943 < len__5769__auto___52942)){
args__5775__auto__.push((arguments[i__5770__auto___52943]));

var G__52944 = (i__5770__auto___52943 + (1));
i__5770__auto___52943 = G__52944;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52520 = conformed_args__51242__auto__;
var map__52520__$1 = cljs.core.__destructure_map(map__52520);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq52519){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52519));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52945 = arguments.length;
var i__5770__auto___52946 = (0);
while(true){
if((i__5770__auto___52946 < len__5769__auto___52945)){
args__5775__auto__.push((arguments[i__5770__auto___52946]));

var G__52947 = (i__5770__auto___52946 + (1));
i__5770__auto___52946 = G__52947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52522 = conformed_args__51242__auto__;
var map__52522__$1 = cljs.core.__destructure_map(map__52522);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq52521){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52521));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52948 = arguments.length;
var i__5770__auto___52949 = (0);
while(true){
if((i__5770__auto___52949 < len__5769__auto___52948)){
args__5775__auto__.push((arguments[i__5770__auto___52949]));

var G__52950 = (i__5770__auto___52949 + (1));
i__5770__auto___52949 = G__52950;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52524 = conformed_args__51242__auto__;
var map__52524__$1 = cljs.core.__destructure_map(map__52524);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq52523){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52523));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52951 = arguments.length;
var i__5770__auto___52952 = (0);
while(true){
if((i__5770__auto___52952 < len__5769__auto___52951)){
args__5775__auto__.push((arguments[i__5770__auto___52952]));

var G__52953 = (i__5770__auto___52952 + (1));
i__5770__auto___52952 = G__52953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52526 = conformed_args__51242__auto__;
var map__52526__$1 = cljs.core.__destructure_map(map__52526);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq52525){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52525));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52954 = arguments.length;
var i__5770__auto___52955 = (0);
while(true){
if((i__5770__auto___52955 < len__5769__auto___52954)){
args__5775__auto__.push((arguments[i__5770__auto___52955]));

var G__52956 = (i__5770__auto___52955 + (1));
i__5770__auto___52955 = G__52956;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52528 = conformed_args__51242__auto__;
var map__52528__$1 = cljs.core.__destructure_map(map__52528);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52528__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq52527){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52957 = arguments.length;
var i__5770__auto___52958 = (0);
while(true){
if((i__5770__auto___52958 < len__5769__auto___52957)){
args__5775__auto__.push((arguments[i__5770__auto___52958]));

var G__52959 = (i__5770__auto___52958 + (1));
i__5770__auto___52958 = G__52959;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52530 = conformed_args__51242__auto__;
var map__52530__$1 = cljs.core.__destructure_map(map__52530);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52530__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52530__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52530__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq52529){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52529));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52960 = arguments.length;
var i__5770__auto___52961 = (0);
while(true){
if((i__5770__auto___52961 < len__5769__auto___52960)){
args__5775__auto__.push((arguments[i__5770__auto___52961]));

var G__52962 = (i__5770__auto___52961 + (1));
i__5770__auto___52961 = G__52962;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52532 = conformed_args__51242__auto__;
var map__52532__$1 = cljs.core.__destructure_map(map__52532);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq52531){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52531));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52963 = arguments.length;
var i__5770__auto___52964 = (0);
while(true){
if((i__5770__auto___52964 < len__5769__auto___52963)){
args__5775__auto__.push((arguments[i__5770__auto___52964]));

var G__52965 = (i__5770__auto___52964 + (1));
i__5770__auto___52964 = G__52965;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52534 = conformed_args__51242__auto__;
var map__52534__$1 = cljs.core.__destructure_map(map__52534);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq52533){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52533));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52966 = arguments.length;
var i__5770__auto___52967 = (0);
while(true){
if((i__5770__auto___52967 < len__5769__auto___52966)){
args__5775__auto__.push((arguments[i__5770__auto___52967]));

var G__52968 = (i__5770__auto___52967 + (1));
i__5770__auto___52967 = G__52968;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52536 = conformed_args__51242__auto__;
var map__52536__$1 = cljs.core.__destructure_map(map__52536);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq52535){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52535));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52969 = arguments.length;
var i__5770__auto___52970 = (0);
while(true){
if((i__5770__auto___52970 < len__5769__auto___52969)){
args__5775__auto__.push((arguments[i__5770__auto___52970]));

var G__52971 = (i__5770__auto___52970 + (1));
i__5770__auto___52970 = G__52971;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52538 = conformed_args__51242__auto__;
var map__52538__$1 = cljs.core.__destructure_map(map__52538);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52538__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52538__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52538__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq52537){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52537));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52972 = arguments.length;
var i__5770__auto___52973 = (0);
while(true){
if((i__5770__auto___52973 < len__5769__auto___52972)){
args__5775__auto__.push((arguments[i__5770__auto___52973]));

var G__52974 = (i__5770__auto___52973 + (1));
i__5770__auto___52973 = G__52974;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52540 = conformed_args__51242__auto__;
var map__52540__$1 = cljs.core.__destructure_map(map__52540);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq52539){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52539));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52975 = arguments.length;
var i__5770__auto___52976 = (0);
while(true){
if((i__5770__auto___52976 < len__5769__auto___52975)){
args__5775__auto__.push((arguments[i__5770__auto___52976]));

var G__52977 = (i__5770__auto___52976 + (1));
i__5770__auto___52976 = G__52977;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52542 = conformed_args__51242__auto__;
var map__52542__$1 = cljs.core.__destructure_map(map__52542);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq52541){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52541));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52978 = arguments.length;
var i__5770__auto___52979 = (0);
while(true){
if((i__5770__auto___52979 < len__5769__auto___52978)){
args__5775__auto__.push((arguments[i__5770__auto___52979]));

var G__52980 = (i__5770__auto___52979 + (1));
i__5770__auto___52979 = G__52980;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52544 = conformed_args__51242__auto__;
var map__52544__$1 = cljs.core.__destructure_map(map__52544);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52544__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52544__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52544__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq52543){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52543));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52981 = arguments.length;
var i__5770__auto___52982 = (0);
while(true){
if((i__5770__auto___52982 < len__5769__auto___52981)){
args__5775__auto__.push((arguments[i__5770__auto___52982]));

var G__52983 = (i__5770__auto___52982 + (1));
i__5770__auto___52982 = G__52983;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52546 = conformed_args__51242__auto__;
var map__52546__$1 = cljs.core.__destructure_map(map__52546);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq52545){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52545));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52984 = arguments.length;
var i__5770__auto___52985 = (0);
while(true){
if((i__5770__auto___52985 < len__5769__auto___52984)){
args__5775__auto__.push((arguments[i__5770__auto___52985]));

var G__52986 = (i__5770__auto___52985 + (1));
i__5770__auto___52985 = G__52986;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52548 = conformed_args__51242__auto__;
var map__52548__$1 = cljs.core.__destructure_map(map__52548);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52548__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52548__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52548__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq52547){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52547));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52987 = arguments.length;
var i__5770__auto___52988 = (0);
while(true){
if((i__5770__auto___52988 < len__5769__auto___52987)){
args__5775__auto__.push((arguments[i__5770__auto___52988]));

var G__52989 = (i__5770__auto___52988 + (1));
i__5770__auto___52988 = G__52989;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52550 = conformed_args__51242__auto__;
var map__52550__$1 = cljs.core.__destructure_map(map__52550);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq52549){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52549));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52990 = arguments.length;
var i__5770__auto___52991 = (0);
while(true){
if((i__5770__auto___52991 < len__5769__auto___52990)){
args__5775__auto__.push((arguments[i__5770__auto___52991]));

var G__52992 = (i__5770__auto___52991 + (1));
i__5770__auto___52991 = G__52992;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52552 = conformed_args__51242__auto__;
var map__52552__$1 = cljs.core.__destructure_map(map__52552);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq52551){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52551));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52993 = arguments.length;
var i__5770__auto___52994 = (0);
while(true){
if((i__5770__auto___52994 < len__5769__auto___52993)){
args__5775__auto__.push((arguments[i__5770__auto___52994]));

var G__52995 = (i__5770__auto___52994 + (1));
i__5770__auto___52994 = G__52995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52554 = conformed_args__51242__auto__;
var map__52554__$1 = cljs.core.__destructure_map(map__52554);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq52553){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52553));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52996 = arguments.length;
var i__5770__auto___52997 = (0);
while(true){
if((i__5770__auto___52997 < len__5769__auto___52996)){
args__5775__auto__.push((arguments[i__5770__auto___52997]));

var G__52998 = (i__5770__auto___52997 + (1));
i__5770__auto___52997 = G__52998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52556 = conformed_args__51242__auto__;
var map__52556__$1 = cljs.core.__destructure_map(map__52556);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq52555){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52555));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52999 = arguments.length;
var i__5770__auto___53000 = (0);
while(true){
if((i__5770__auto___53000 < len__5769__auto___52999)){
args__5775__auto__.push((arguments[i__5770__auto___53000]));

var G__53001 = (i__5770__auto___53000 + (1));
i__5770__auto___53000 = G__53001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52558 = conformed_args__51242__auto__;
var map__52558__$1 = cljs.core.__destructure_map(map__52558);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq52557){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52557));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53002 = arguments.length;
var i__5770__auto___53003 = (0);
while(true){
if((i__5770__auto___53003 < len__5769__auto___53002)){
args__5775__auto__.push((arguments[i__5770__auto___53003]));

var G__53004 = (i__5770__auto___53003 + (1));
i__5770__auto___53003 = G__53004;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52560 = conformed_args__51242__auto__;
var map__52560__$1 = cljs.core.__destructure_map(map__52560);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52560__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52560__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq52559){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52559));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53005 = arguments.length;
var i__5770__auto___53006 = (0);
while(true){
if((i__5770__auto___53006 < len__5769__auto___53005)){
args__5775__auto__.push((arguments[i__5770__auto___53006]));

var G__53007 = (i__5770__auto___53006 + (1));
i__5770__auto___53006 = G__53007;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52562 = conformed_args__51242__auto__;
var map__52562__$1 = cljs.core.__destructure_map(map__52562);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq52561){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52561));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53008 = arguments.length;
var i__5770__auto___53009 = (0);
while(true){
if((i__5770__auto___53009 < len__5769__auto___53008)){
args__5775__auto__.push((arguments[i__5770__auto___53009]));

var G__53010 = (i__5770__auto___53009 + (1));
i__5770__auto___53009 = G__53010;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52564 = conformed_args__51242__auto__;
var map__52564__$1 = cljs.core.__destructure_map(map__52564);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq52563){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52563));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53011 = arguments.length;
var i__5770__auto___53012 = (0);
while(true){
if((i__5770__auto___53012 < len__5769__auto___53011)){
args__5775__auto__.push((arguments[i__5770__auto___53012]));

var G__53013 = (i__5770__auto___53012 + (1));
i__5770__auto___53012 = G__53013;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52566 = conformed_args__51242__auto__;
var map__52566__$1 = cljs.core.__destructure_map(map__52566);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq52565){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52565));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53014 = arguments.length;
var i__5770__auto___53015 = (0);
while(true){
if((i__5770__auto___53015 < len__5769__auto___53014)){
args__5775__auto__.push((arguments[i__5770__auto___53015]));

var G__53016 = (i__5770__auto___53015 + (1));
i__5770__auto___53015 = G__53016;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52568 = conformed_args__51242__auto__;
var map__52568__$1 = cljs.core.__destructure_map(map__52568);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52568__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52568__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52568__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq52567){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52567));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53017 = arguments.length;
var i__5770__auto___53018 = (0);
while(true){
if((i__5770__auto___53018 < len__5769__auto___53017)){
args__5775__auto__.push((arguments[i__5770__auto___53018]));

var G__53019 = (i__5770__auto___53018 + (1));
i__5770__auto___53018 = G__53019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52570 = conformed_args__51242__auto__;
var map__52570__$1 = cljs.core.__destructure_map(map__52570);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52570__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52570__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52570__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq52569){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53020 = arguments.length;
var i__5770__auto___53021 = (0);
while(true){
if((i__5770__auto___53021 < len__5769__auto___53020)){
args__5775__auto__.push((arguments[i__5770__auto___53021]));

var G__53022 = (i__5770__auto___53021 + (1));
i__5770__auto___53021 = G__53022;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52572 = conformed_args__51242__auto__;
var map__52572__$1 = cljs.core.__destructure_map(map__52572);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq52571){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52571));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53023 = arguments.length;
var i__5770__auto___53024 = (0);
while(true){
if((i__5770__auto___53024 < len__5769__auto___53023)){
args__5775__auto__.push((arguments[i__5770__auto___53024]));

var G__53025 = (i__5770__auto___53024 + (1));
i__5770__auto___53024 = G__53025;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52574 = conformed_args__51242__auto__;
var map__52574__$1 = cljs.core.__destructure_map(map__52574);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52574__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52574__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52574__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq52573){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52573));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53026 = arguments.length;
var i__5770__auto___53027 = (0);
while(true){
if((i__5770__auto___53027 < len__5769__auto___53026)){
args__5775__auto__.push((arguments[i__5770__auto___53027]));

var G__53028 = (i__5770__auto___53027 + (1));
i__5770__auto___53027 = G__53028;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52576 = conformed_args__51242__auto__;
var map__52576__$1 = cljs.core.__destructure_map(map__52576);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52576__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52576__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq52575){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52575));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53029 = arguments.length;
var i__5770__auto___53030 = (0);
while(true){
if((i__5770__auto___53030 < len__5769__auto___53029)){
args__5775__auto__.push((arguments[i__5770__auto___53030]));

var G__53031 = (i__5770__auto___53030 + (1));
i__5770__auto___53030 = G__53031;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52578 = conformed_args__51242__auto__;
var map__52578__$1 = cljs.core.__destructure_map(map__52578);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq52577){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52577));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53032 = arguments.length;
var i__5770__auto___53033 = (0);
while(true){
if((i__5770__auto___53033 < len__5769__auto___53032)){
args__5775__auto__.push((arguments[i__5770__auto___53033]));

var G__53034 = (i__5770__auto___53033 + (1));
i__5770__auto___53033 = G__53034;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52580 = conformed_args__51242__auto__;
var map__52580__$1 = cljs.core.__destructure_map(map__52580);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq52579){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52579));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53035 = arguments.length;
var i__5770__auto___53036 = (0);
while(true){
if((i__5770__auto___53036 < len__5769__auto___53035)){
args__5775__auto__.push((arguments[i__5770__auto___53036]));

var G__53037 = (i__5770__auto___53036 + (1));
i__5770__auto___53036 = G__53037;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52582 = conformed_args__51242__auto__;
var map__52582__$1 = cljs.core.__destructure_map(map__52582);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq52581){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52581));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53038 = arguments.length;
var i__5770__auto___53039 = (0);
while(true){
if((i__5770__auto___53039 < len__5769__auto___53038)){
args__5775__auto__.push((arguments[i__5770__auto___53039]));

var G__53040 = (i__5770__auto___53039 + (1));
i__5770__auto___53039 = G__53040;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52584 = conformed_args__51242__auto__;
var map__52584__$1 = cljs.core.__destructure_map(map__52584);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq52583){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52583));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53041 = arguments.length;
var i__5770__auto___53042 = (0);
while(true){
if((i__5770__auto___53042 < len__5769__auto___53041)){
args__5775__auto__.push((arguments[i__5770__auto___53042]));

var G__53043 = (i__5770__auto___53042 + (1));
i__5770__auto___53042 = G__53043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52586 = conformed_args__51242__auto__;
var map__52586__$1 = cljs.core.__destructure_map(map__52586);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq52585){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52585));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53044 = arguments.length;
var i__5770__auto___53045 = (0);
while(true){
if((i__5770__auto___53045 < len__5769__auto___53044)){
args__5775__auto__.push((arguments[i__5770__auto___53045]));

var G__53046 = (i__5770__auto___53045 + (1));
i__5770__auto___53045 = G__53046;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52588 = conformed_args__51242__auto__;
var map__52588__$1 = cljs.core.__destructure_map(map__52588);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq52587){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52587));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53047 = arguments.length;
var i__5770__auto___53048 = (0);
while(true){
if((i__5770__auto___53048 < len__5769__auto___53047)){
args__5775__auto__.push((arguments[i__5770__auto___53048]));

var G__53049 = (i__5770__auto___53048 + (1));
i__5770__auto___53048 = G__53049;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52590 = conformed_args__51242__auto__;
var map__52590__$1 = cljs.core.__destructure_map(map__52590);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52590__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52590__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52590__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq52589){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52589));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53050 = arguments.length;
var i__5770__auto___53051 = (0);
while(true){
if((i__5770__auto___53051 < len__5769__auto___53050)){
args__5775__auto__.push((arguments[i__5770__auto___53051]));

var G__53052 = (i__5770__auto___53051 + (1));
i__5770__auto___53051 = G__53052;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52592 = conformed_args__51242__auto__;
var map__52592__$1 = cljs.core.__destructure_map(map__52592);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq52591){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52591));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53053 = arguments.length;
var i__5770__auto___53054 = (0);
while(true){
if((i__5770__auto___53054 < len__5769__auto___53053)){
args__5775__auto__.push((arguments[i__5770__auto___53054]));

var G__53055 = (i__5770__auto___53054 + (1));
i__5770__auto___53054 = G__53055;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52594 = conformed_args__51242__auto__;
var map__52594__$1 = cljs.core.__destructure_map(map__52594);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52594__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52594__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52594__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq52593){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52593));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53056 = arguments.length;
var i__5770__auto___53057 = (0);
while(true){
if((i__5770__auto___53057 < len__5769__auto___53056)){
args__5775__auto__.push((arguments[i__5770__auto___53057]));

var G__53058 = (i__5770__auto___53057 + (1));
i__5770__auto___53057 = G__53058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52596 = conformed_args__51242__auto__;
var map__52596__$1 = cljs.core.__destructure_map(map__52596);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq52595){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52595));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53059 = arguments.length;
var i__5770__auto___53060 = (0);
while(true){
if((i__5770__auto___53060 < len__5769__auto___53059)){
args__5775__auto__.push((arguments[i__5770__auto___53060]));

var G__53061 = (i__5770__auto___53060 + (1));
i__5770__auto___53060 = G__53061;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52598 = conformed_args__51242__auto__;
var map__52598__$1 = cljs.core.__destructure_map(map__52598);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52598__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52598__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52598__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq52597){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52597));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53062 = arguments.length;
var i__5770__auto___53063 = (0);
while(true){
if((i__5770__auto___53063 < len__5769__auto___53062)){
args__5775__auto__.push((arguments[i__5770__auto___53063]));

var G__53064 = (i__5770__auto___53063 + (1));
i__5770__auto___53063 = G__53064;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52600 = conformed_args__51242__auto__;
var map__52600__$1 = cljs.core.__destructure_map(map__52600);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq52599){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52599));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53065 = arguments.length;
var i__5770__auto___53066 = (0);
while(true){
if((i__5770__auto___53066 < len__5769__auto___53065)){
args__5775__auto__.push((arguments[i__5770__auto___53066]));

var G__53067 = (i__5770__auto___53066 + (1));
i__5770__auto___53066 = G__53067;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52602 = conformed_args__51242__auto__;
var map__52602__$1 = cljs.core.__destructure_map(map__52602);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52602__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52602__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52602__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq52601){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52601));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53068 = arguments.length;
var i__5770__auto___53069 = (0);
while(true){
if((i__5770__auto___53069 < len__5769__auto___53068)){
args__5775__auto__.push((arguments[i__5770__auto___53069]));

var G__53070 = (i__5770__auto___53069 + (1));
i__5770__auto___53069 = G__53070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52604 = conformed_args__51242__auto__;
var map__52604__$1 = cljs.core.__destructure_map(map__52604);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq52603){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52603));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53071 = arguments.length;
var i__5770__auto___53072 = (0);
while(true){
if((i__5770__auto___53072 < len__5769__auto___53071)){
args__5775__auto__.push((arguments[i__5770__auto___53072]));

var G__53073 = (i__5770__auto___53072 + (1));
i__5770__auto___53072 = G__53073;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52606 = conformed_args__51242__auto__;
var map__52606__$1 = cljs.core.__destructure_map(map__52606);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq52605){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52605));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53074 = arguments.length;
var i__5770__auto___53075 = (0);
while(true){
if((i__5770__auto___53075 < len__5769__auto___53074)){
args__5775__auto__.push((arguments[i__5770__auto___53075]));

var G__53076 = (i__5770__auto___53075 + (1));
i__5770__auto___53075 = G__53076;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52608 = conformed_args__51242__auto__;
var map__52608__$1 = cljs.core.__destructure_map(map__52608);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52608__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52608__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52608__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq52607){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52607));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53077 = arguments.length;
var i__5770__auto___53078 = (0);
while(true){
if((i__5770__auto___53078 < len__5769__auto___53077)){
args__5775__auto__.push((arguments[i__5770__auto___53078]));

var G__53079 = (i__5770__auto___53078 + (1));
i__5770__auto___53078 = G__53079;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52610 = conformed_args__51242__auto__;
var map__52610__$1 = cljs.core.__destructure_map(map__52610);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52610__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52610__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52610__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq52609){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52609));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53080 = arguments.length;
var i__5770__auto___53081 = (0);
while(true){
if((i__5770__auto___53081 < len__5769__auto___53080)){
args__5775__auto__.push((arguments[i__5770__auto___53081]));

var G__53082 = (i__5770__auto___53081 + (1));
i__5770__auto___53081 = G__53082;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52612 = conformed_args__51242__auto__;
var map__52612__$1 = cljs.core.__destructure_map(map__52612);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq52611){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52611));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53083 = arguments.length;
var i__5770__auto___53084 = (0);
while(true){
if((i__5770__auto___53084 < len__5769__auto___53083)){
args__5775__auto__.push((arguments[i__5770__auto___53084]));

var G__53085 = (i__5770__auto___53084 + (1));
i__5770__auto___53084 = G__53085;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52614 = conformed_args__51242__auto__;
var map__52614__$1 = cljs.core.__destructure_map(map__52614);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq52613){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52613));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53086 = arguments.length;
var i__5770__auto___53087 = (0);
while(true){
if((i__5770__auto___53087 < len__5769__auto___53086)){
args__5775__auto__.push((arguments[i__5770__auto___53087]));

var G__53088 = (i__5770__auto___53087 + (1));
i__5770__auto___53087 = G__53088;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52616 = conformed_args__51242__auto__;
var map__52616__$1 = cljs.core.__destructure_map(map__52616);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq52615){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52615));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53089 = arguments.length;
var i__5770__auto___53090 = (0);
while(true){
if((i__5770__auto___53090 < len__5769__auto___53089)){
args__5775__auto__.push((arguments[i__5770__auto___53090]));

var G__53091 = (i__5770__auto___53090 + (1));
i__5770__auto___53090 = G__53091;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52618 = conformed_args__51242__auto__;
var map__52618__$1 = cljs.core.__destructure_map(map__52618);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq52617){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53092 = arguments.length;
var i__5770__auto___53093 = (0);
while(true){
if((i__5770__auto___53093 < len__5769__auto___53092)){
args__5775__auto__.push((arguments[i__5770__auto___53093]));

var G__53094 = (i__5770__auto___53093 + (1));
i__5770__auto___53093 = G__53094;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52620 = conformed_args__51242__auto__;
var map__52620__$1 = cljs.core.__destructure_map(map__52620);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52620__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52620__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52620__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq52619){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52619));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53095 = arguments.length;
var i__5770__auto___53096 = (0);
while(true){
if((i__5770__auto___53096 < len__5769__auto___53095)){
args__5775__auto__.push((arguments[i__5770__auto___53096]));

var G__53097 = (i__5770__auto___53096 + (1));
i__5770__auto___53096 = G__53097;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52622 = conformed_args__51242__auto__;
var map__52622__$1 = cljs.core.__destructure_map(map__52622);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq52621){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52621));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53098 = arguments.length;
var i__5770__auto___53099 = (0);
while(true){
if((i__5770__auto___53099 < len__5769__auto___53098)){
args__5775__auto__.push((arguments[i__5770__auto___53099]));

var G__53100 = (i__5770__auto___53099 + (1));
i__5770__auto___53099 = G__53100;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52624 = conformed_args__51242__auto__;
var map__52624__$1 = cljs.core.__destructure_map(map__52624);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq52623){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52623));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53101 = arguments.length;
var i__5770__auto___53102 = (0);
while(true){
if((i__5770__auto___53102 < len__5769__auto___53101)){
args__5775__auto__.push((arguments[i__5770__auto___53102]));

var G__53103 = (i__5770__auto___53102 + (1));
i__5770__auto___53102 = G__53103;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52626 = conformed_args__51242__auto__;
var map__52626__$1 = cljs.core.__destructure_map(map__52626);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52626__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52626__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52626__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq52625){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52625));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53104 = arguments.length;
var i__5770__auto___53105 = (0);
while(true){
if((i__5770__auto___53105 < len__5769__auto___53104)){
args__5775__auto__.push((arguments[i__5770__auto___53105]));

var G__53106 = (i__5770__auto___53105 + (1));
i__5770__auto___53105 = G__53106;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52628 = conformed_args__51242__auto__;
var map__52628__$1 = cljs.core.__destructure_map(map__52628);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq52627){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53107 = arguments.length;
var i__5770__auto___53108 = (0);
while(true){
if((i__5770__auto___53108 < len__5769__auto___53107)){
args__5775__auto__.push((arguments[i__5770__auto___53108]));

var G__53109 = (i__5770__auto___53108 + (1));
i__5770__auto___53108 = G__53109;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52630 = conformed_args__51242__auto__;
var map__52630__$1 = cljs.core.__destructure_map(map__52630);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq52629){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52629));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53110 = arguments.length;
var i__5770__auto___53111 = (0);
while(true){
if((i__5770__auto___53111 < len__5769__auto___53110)){
args__5775__auto__.push((arguments[i__5770__auto___53111]));

var G__53112 = (i__5770__auto___53111 + (1));
i__5770__auto___53111 = G__53112;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52632 = conformed_args__51242__auto__;
var map__52632__$1 = cljs.core.__destructure_map(map__52632);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq52631){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52631));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53113 = arguments.length;
var i__5770__auto___53114 = (0);
while(true){
if((i__5770__auto___53114 < len__5769__auto___53113)){
args__5775__auto__.push((arguments[i__5770__auto___53114]));

var G__53115 = (i__5770__auto___53114 + (1));
i__5770__auto___53114 = G__53115;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52634 = conformed_args__51242__auto__;
var map__52634__$1 = cljs.core.__destructure_map(map__52634);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq52633){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52633));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53116 = arguments.length;
var i__5770__auto___53117 = (0);
while(true){
if((i__5770__auto___53117 < len__5769__auto___53116)){
args__5775__auto__.push((arguments[i__5770__auto___53117]));

var G__53118 = (i__5770__auto___53117 + (1));
i__5770__auto___53117 = G__53118;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52636 = conformed_args__51242__auto__;
var map__52636__$1 = cljs.core.__destructure_map(map__52636);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq52635){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52635));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53119 = arguments.length;
var i__5770__auto___53120 = (0);
while(true){
if((i__5770__auto___53120 < len__5769__auto___53119)){
args__5775__auto__.push((arguments[i__5770__auto___53120]));

var G__53121 = (i__5770__auto___53120 + (1));
i__5770__auto___53120 = G__53121;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52638 = conformed_args__51242__auto__;
var map__52638__$1 = cljs.core.__destructure_map(map__52638);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq52637){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52637));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53122 = arguments.length;
var i__5770__auto___53123 = (0);
while(true){
if((i__5770__auto___53123 < len__5769__auto___53122)){
args__5775__auto__.push((arguments[i__5770__auto___53123]));

var G__53124 = (i__5770__auto___53123 + (1));
i__5770__auto___53123 = G__53124;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52640 = conformed_args__51242__auto__;
var map__52640__$1 = cljs.core.__destructure_map(map__52640);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52640__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52640__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52640__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq52639){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52639));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53125 = arguments.length;
var i__5770__auto___53126 = (0);
while(true){
if((i__5770__auto___53126 < len__5769__auto___53125)){
args__5775__auto__.push((arguments[i__5770__auto___53126]));

var G__53127 = (i__5770__auto___53126 + (1));
i__5770__auto___53126 = G__53127;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52642 = conformed_args__51242__auto__;
var map__52642__$1 = cljs.core.__destructure_map(map__52642);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq52641){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52641));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53128 = arguments.length;
var i__5770__auto___53129 = (0);
while(true){
if((i__5770__auto___53129 < len__5769__auto___53128)){
args__5775__auto__.push((arguments[i__5770__auto___53129]));

var G__53130 = (i__5770__auto___53129 + (1));
i__5770__auto___53129 = G__53130;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52644 = conformed_args__51242__auto__;
var map__52644__$1 = cljs.core.__destructure_map(map__52644);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52644__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52644__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52644__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq52643){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52643));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53131 = arguments.length;
var i__5770__auto___53132 = (0);
while(true){
if((i__5770__auto___53132 < len__5769__auto___53131)){
args__5775__auto__.push((arguments[i__5770__auto___53132]));

var G__53133 = (i__5770__auto___53132 + (1));
i__5770__auto___53132 = G__53133;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52646 = conformed_args__51242__auto__;
var map__52646__$1 = cljs.core.__destructure_map(map__52646);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52646__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52646__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq52645){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53134 = arguments.length;
var i__5770__auto___53135 = (0);
while(true){
if((i__5770__auto___53135 < len__5769__auto___53134)){
args__5775__auto__.push((arguments[i__5770__auto___53135]));

var G__53136 = (i__5770__auto___53135 + (1));
i__5770__auto___53135 = G__53136;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52648 = conformed_args__51242__auto__;
var map__52648__$1 = cljs.core.__destructure_map(map__52648);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq52647){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52647));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53137 = arguments.length;
var i__5770__auto___53138 = (0);
while(true){
if((i__5770__auto___53138 < len__5769__auto___53137)){
args__5775__auto__.push((arguments[i__5770__auto___53138]));

var G__53139 = (i__5770__auto___53138 + (1));
i__5770__auto___53138 = G__53139;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52650 = conformed_args__51242__auto__;
var map__52650__$1 = cljs.core.__destructure_map(map__52650);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq52649){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52649));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53140 = arguments.length;
var i__5770__auto___53141 = (0);
while(true){
if((i__5770__auto___53141 < len__5769__auto___53140)){
args__5775__auto__.push((arguments[i__5770__auto___53141]));

var G__53142 = (i__5770__auto___53141 + (1));
i__5770__auto___53141 = G__53142;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52652 = conformed_args__51242__auto__;
var map__52652__$1 = cljs.core.__destructure_map(map__52652);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52652__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52652__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52652__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq52651){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52651));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53143 = arguments.length;
var i__5770__auto___53144 = (0);
while(true){
if((i__5770__auto___53144 < len__5769__auto___53143)){
args__5775__auto__.push((arguments[i__5770__auto___53144]));

var G__53145 = (i__5770__auto___53144 + (1));
i__5770__auto___53144 = G__53145;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52654 = conformed_args__51242__auto__;
var map__52654__$1 = cljs.core.__destructure_map(map__52654);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq52653){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52653));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53146 = arguments.length;
var i__5770__auto___53147 = (0);
while(true){
if((i__5770__auto___53147 < len__5769__auto___53146)){
args__5775__auto__.push((arguments[i__5770__auto___53147]));

var G__53148 = (i__5770__auto___53147 + (1));
i__5770__auto___53147 = G__53148;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52656 = conformed_args__51242__auto__;
var map__52656__$1 = cljs.core.__destructure_map(map__52656);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52656__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52656__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52656__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq52655){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52655));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53149 = arguments.length;
var i__5770__auto___53150 = (0);
while(true){
if((i__5770__auto___53150 < len__5769__auto___53149)){
args__5775__auto__.push((arguments[i__5770__auto___53150]));

var G__53151 = (i__5770__auto___53150 + (1));
i__5770__auto___53150 = G__53151;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52658 = conformed_args__51242__auto__;
var map__52658__$1 = cljs.core.__destructure_map(map__52658);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq52657){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52657));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53152 = arguments.length;
var i__5770__auto___53153 = (0);
while(true){
if((i__5770__auto___53153 < len__5769__auto___53152)){
args__5775__auto__.push((arguments[i__5770__auto___53153]));

var G__53154 = (i__5770__auto___53153 + (1));
i__5770__auto___53153 = G__53154;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52660 = conformed_args__51242__auto__;
var map__52660__$1 = cljs.core.__destructure_map(map__52660);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq52659){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52659));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53155 = arguments.length;
var i__5770__auto___53156 = (0);
while(true){
if((i__5770__auto___53156 < len__5769__auto___53155)){
args__5775__auto__.push((arguments[i__5770__auto___53156]));

var G__53157 = (i__5770__auto___53156 + (1));
i__5770__auto___53156 = G__53157;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52662 = conformed_args__51242__auto__;
var map__52662__$1 = cljs.core.__destructure_map(map__52662);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52662__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52662__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52662__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq52661){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52661));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53158 = arguments.length;
var i__5770__auto___53159 = (0);
while(true){
if((i__5770__auto___53159 < len__5769__auto___53158)){
args__5775__auto__.push((arguments[i__5770__auto___53159]));

var G__53160 = (i__5770__auto___53159 + (1));
i__5770__auto___53159 = G__53160;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52664 = conformed_args__51242__auto__;
var map__52664__$1 = cljs.core.__destructure_map(map__52664);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq52663){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52663));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53161 = arguments.length;
var i__5770__auto___53162 = (0);
while(true){
if((i__5770__auto___53162 < len__5769__auto___53161)){
args__5775__auto__.push((arguments[i__5770__auto___53162]));

var G__53163 = (i__5770__auto___53162 + (1));
i__5770__auto___53162 = G__53163;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52666 = conformed_args__51242__auto__;
var map__52666__$1 = cljs.core.__destructure_map(map__52666);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq52665){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52665));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53164 = arguments.length;
var i__5770__auto___53165 = (0);
while(true){
if((i__5770__auto___53165 < len__5769__auto___53164)){
args__5775__auto__.push((arguments[i__5770__auto___53165]));

var G__53166 = (i__5770__auto___53165 + (1));
i__5770__auto___53165 = G__53166;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52668 = conformed_args__51242__auto__;
var map__52668__$1 = cljs.core.__destructure_map(map__52668);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52668__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52668__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq52667){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52667));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53167 = arguments.length;
var i__5770__auto___53168 = (0);
while(true){
if((i__5770__auto___53168 < len__5769__auto___53167)){
args__5775__auto__.push((arguments[i__5770__auto___53168]));

var G__53169 = (i__5770__auto___53168 + (1));
i__5770__auto___53168 = G__53169;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52670 = conformed_args__51242__auto__;
var map__52670__$1 = cljs.core.__destructure_map(map__52670);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq52669){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52669));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53170 = arguments.length;
var i__5770__auto___53171 = (0);
while(true){
if((i__5770__auto___53171 < len__5769__auto___53170)){
args__5775__auto__.push((arguments[i__5770__auto___53171]));

var G__53172 = (i__5770__auto___53171 + (1));
i__5770__auto___53171 = G__53172;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52672 = conformed_args__51242__auto__;
var map__52672__$1 = cljs.core.__destructure_map(map__52672);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq52671){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52671));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53173 = arguments.length;
var i__5770__auto___53174 = (0);
while(true){
if((i__5770__auto___53174 < len__5769__auto___53173)){
args__5775__auto__.push((arguments[i__5770__auto___53174]));

var G__53175 = (i__5770__auto___53174 + (1));
i__5770__auto___53174 = G__53175;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52674 = conformed_args__51242__auto__;
var map__52674__$1 = cljs.core.__destructure_map(map__52674);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq52673){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52673));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53176 = arguments.length;
var i__5770__auto___53177 = (0);
while(true){
if((i__5770__auto___53177 < len__5769__auto___53176)){
args__5775__auto__.push((arguments[i__5770__auto___53177]));

var G__53178 = (i__5770__auto___53177 + (1));
i__5770__auto___53177 = G__53178;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52676 = conformed_args__51242__auto__;
var map__52676__$1 = cljs.core.__destructure_map(map__52676);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq52675){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53179 = arguments.length;
var i__5770__auto___53180 = (0);
while(true){
if((i__5770__auto___53180 < len__5769__auto___53179)){
args__5775__auto__.push((arguments[i__5770__auto___53180]));

var G__53181 = (i__5770__auto___53180 + (1));
i__5770__auto___53180 = G__53181;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52678 = conformed_args__51242__auto__;
var map__52678__$1 = cljs.core.__destructure_map(map__52678);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq52677){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52677));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53182 = arguments.length;
var i__5770__auto___53183 = (0);
while(true){
if((i__5770__auto___53183 < len__5769__auto___53182)){
args__5775__auto__.push((arguments[i__5770__auto___53183]));

var G__53184 = (i__5770__auto___53183 + (1));
i__5770__auto___53183 = G__53184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52680 = conformed_args__51242__auto__;
var map__52680__$1 = cljs.core.__destructure_map(map__52680);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq52679){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52679));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53185 = arguments.length;
var i__5770__auto___53186 = (0);
while(true){
if((i__5770__auto___53186 < len__5769__auto___53185)){
args__5775__auto__.push((arguments[i__5770__auto___53186]));

var G__53187 = (i__5770__auto___53186 + (1));
i__5770__auto___53186 = G__53187;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52682 = conformed_args__51242__auto__;
var map__52682__$1 = cljs.core.__destructure_map(map__52682);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq52681){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52681));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53188 = arguments.length;
var i__5770__auto___53189 = (0);
while(true){
if((i__5770__auto___53189 < len__5769__auto___53188)){
args__5775__auto__.push((arguments[i__5770__auto___53189]));

var G__53190 = (i__5770__auto___53189 + (1));
i__5770__auto___53189 = G__53190;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52684 = conformed_args__51242__auto__;
var map__52684__$1 = cljs.core.__destructure_map(map__52684);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq52683){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52683));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53191 = arguments.length;
var i__5770__auto___53192 = (0);
while(true){
if((i__5770__auto___53192 < len__5769__auto___53191)){
args__5775__auto__.push((arguments[i__5770__auto___53192]));

var G__53193 = (i__5770__auto___53192 + (1));
i__5770__auto___53192 = G__53193;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52686 = conformed_args__51242__auto__;
var map__52686__$1 = cljs.core.__destructure_map(map__52686);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52686__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52686__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq52685){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52685));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53194 = arguments.length;
var i__5770__auto___53195 = (0);
while(true){
if((i__5770__auto___53195 < len__5769__auto___53194)){
args__5775__auto__.push((arguments[i__5770__auto___53195]));

var G__53196 = (i__5770__auto___53195 + (1));
i__5770__auto___53195 = G__53196;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52688 = conformed_args__51242__auto__;
var map__52688__$1 = cljs.core.__destructure_map(map__52688);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq52687){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52687));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53197 = arguments.length;
var i__5770__auto___53198 = (0);
while(true){
if((i__5770__auto___53198 < len__5769__auto___53197)){
args__5775__auto__.push((arguments[i__5770__auto___53198]));

var G__53199 = (i__5770__auto___53198 + (1));
i__5770__auto___53198 = G__53199;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52690 = conformed_args__51242__auto__;
var map__52690__$1 = cljs.core.__destructure_map(map__52690);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52690__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52690__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq52689){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52689));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53200 = arguments.length;
var i__5770__auto___53201 = (0);
while(true){
if((i__5770__auto___53201 < len__5769__auto___53200)){
args__5775__auto__.push((arguments[i__5770__auto___53201]));

var G__53202 = (i__5770__auto___53201 + (1));
i__5770__auto___53201 = G__53202;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52692 = conformed_args__51242__auto__;
var map__52692__$1 = cljs.core.__destructure_map(map__52692);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq52691){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52691));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53203 = arguments.length;
var i__5770__auto___53204 = (0);
while(true){
if((i__5770__auto___53204 < len__5769__auto___53203)){
args__5775__auto__.push((arguments[i__5770__auto___53204]));

var G__53205 = (i__5770__auto___53204 + (1));
i__5770__auto___53204 = G__53205;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52694 = conformed_args__51242__auto__;
var map__52694__$1 = cljs.core.__destructure_map(map__52694);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq52693){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52693));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53206 = arguments.length;
var i__5770__auto___53207 = (0);
while(true){
if((i__5770__auto___53207 < len__5769__auto___53206)){
args__5775__auto__.push((arguments[i__5770__auto___53207]));

var G__53208 = (i__5770__auto___53207 + (1));
i__5770__auto___53207 = G__53208;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52696 = conformed_args__51242__auto__;
var map__52696__$1 = cljs.core.__destructure_map(map__52696);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq52695){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52695));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53209 = arguments.length;
var i__5770__auto___53210 = (0);
while(true){
if((i__5770__auto___53210 < len__5769__auto___53209)){
args__5775__auto__.push((arguments[i__5770__auto___53210]));

var G__53211 = (i__5770__auto___53210 + (1));
i__5770__auto___53210 = G__53211;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52698 = conformed_args__51242__auto__;
var map__52698__$1 = cljs.core.__destructure_map(map__52698);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq52697){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52697));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53212 = arguments.length;
var i__5770__auto___53213 = (0);
while(true){
if((i__5770__auto___53213 < len__5769__auto___53212)){
args__5775__auto__.push((arguments[i__5770__auto___53213]));

var G__53214 = (i__5770__auto___53213 + (1));
i__5770__auto___53213 = G__53214;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52700 = conformed_args__51242__auto__;
var map__52700__$1 = cljs.core.__destructure_map(map__52700);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq52699){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52699));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53215 = arguments.length;
var i__5770__auto___53216 = (0);
while(true){
if((i__5770__auto___53216 < len__5769__auto___53215)){
args__5775__auto__.push((arguments[i__5770__auto___53216]));

var G__53217 = (i__5770__auto___53216 + (1));
i__5770__auto___53216 = G__53217;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52702 = conformed_args__51242__auto__;
var map__52702__$1 = cljs.core.__destructure_map(map__52702);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq52701){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52701));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53218 = arguments.length;
var i__5770__auto___53219 = (0);
while(true){
if((i__5770__auto___53219 < len__5769__auto___53218)){
args__5775__auto__.push((arguments[i__5770__auto___53219]));

var G__53220 = (i__5770__auto___53219 + (1));
i__5770__auto___53219 = G__53220;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52704 = conformed_args__51242__auto__;
var map__52704__$1 = cljs.core.__destructure_map(map__52704);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52704__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq52703){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52703));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53221 = arguments.length;
var i__5770__auto___53222 = (0);
while(true){
if((i__5770__auto___53222 < len__5769__auto___53221)){
args__5775__auto__.push((arguments[i__5770__auto___53222]));

var G__53223 = (i__5770__auto___53222 + (1));
i__5770__auto___53222 = G__53223;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52706 = conformed_args__51242__auto__;
var map__52706__$1 = cljs.core.__destructure_map(map__52706);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq52705){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52705));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53224 = arguments.length;
var i__5770__auto___53225 = (0);
while(true){
if((i__5770__auto___53225 < len__5769__auto___53224)){
args__5775__auto__.push((arguments[i__5770__auto___53225]));

var G__53226 = (i__5770__auto___53225 + (1));
i__5770__auto___53225 = G__53226;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52708 = conformed_args__51242__auto__;
var map__52708__$1 = cljs.core.__destructure_map(map__52708);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq52707){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53227 = arguments.length;
var i__5770__auto___53228 = (0);
while(true){
if((i__5770__auto___53228 < len__5769__auto___53227)){
args__5775__auto__.push((arguments[i__5770__auto___53228]));

var G__53229 = (i__5770__auto___53228 + (1));
i__5770__auto___53228 = G__53229;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52710 = conformed_args__51242__auto__;
var map__52710__$1 = cljs.core.__destructure_map(map__52710);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52710__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52710__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52710__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq52709){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52709));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53230 = arguments.length;
var i__5770__auto___53231 = (0);
while(true){
if((i__5770__auto___53231 < len__5769__auto___53230)){
args__5775__auto__.push((arguments[i__5770__auto___53231]));

var G__53232 = (i__5770__auto___53231 + (1));
i__5770__auto___53231 = G__53232;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52712 = conformed_args__51242__auto__;
var map__52712__$1 = cljs.core.__destructure_map(map__52712);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq52711){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52711));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53233 = arguments.length;
var i__5770__auto___53234 = (0);
while(true){
if((i__5770__auto___53234 < len__5769__auto___53233)){
args__5775__auto__.push((arguments[i__5770__auto___53234]));

var G__53235 = (i__5770__auto___53234 + (1));
i__5770__auto___53234 = G__53235;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52714 = conformed_args__51242__auto__;
var map__52714__$1 = cljs.core.__destructure_map(map__52714);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq52713){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52713));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53236 = arguments.length;
var i__5770__auto___53237 = (0);
while(true){
if((i__5770__auto___53237 < len__5769__auto___53236)){
args__5775__auto__.push((arguments[i__5770__auto___53237]));

var G__53238 = (i__5770__auto___53237 + (1));
i__5770__auto___53237 = G__53238;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52716 = conformed_args__51242__auto__;
var map__52716__$1 = cljs.core.__destructure_map(map__52716);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq52715){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52715));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53239 = arguments.length;
var i__5770__auto___53240 = (0);
while(true){
if((i__5770__auto___53240 < len__5769__auto___53239)){
args__5775__auto__.push((arguments[i__5770__auto___53240]));

var G__53241 = (i__5770__auto___53240 + (1));
i__5770__auto___53240 = G__53241;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52718 = conformed_args__51242__auto__;
var map__52718__$1 = cljs.core.__destructure_map(map__52718);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq52717){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52717));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53242 = arguments.length;
var i__5770__auto___53243 = (0);
while(true){
if((i__5770__auto___53243 < len__5769__auto___53242)){
args__5775__auto__.push((arguments[i__5770__auto___53243]));

var G__53244 = (i__5770__auto___53243 + (1));
i__5770__auto___53243 = G__53244;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52720 = conformed_args__51242__auto__;
var map__52720__$1 = cljs.core.__destructure_map(map__52720);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq52719){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53245 = arguments.length;
var i__5770__auto___53246 = (0);
while(true){
if((i__5770__auto___53246 < len__5769__auto___53245)){
args__5775__auto__.push((arguments[i__5770__auto___53246]));

var G__53247 = (i__5770__auto___53246 + (1));
i__5770__auto___53246 = G__53247;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52722 = conformed_args__51242__auto__;
var map__52722__$1 = cljs.core.__destructure_map(map__52722);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq52721){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52721));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53248 = arguments.length;
var i__5770__auto___53249 = (0);
while(true){
if((i__5770__auto___53249 < len__5769__auto___53248)){
args__5775__auto__.push((arguments[i__5770__auto___53249]));

var G__53250 = (i__5770__auto___53249 + (1));
i__5770__auto___53249 = G__53250;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52724 = conformed_args__51242__auto__;
var map__52724__$1 = cljs.core.__destructure_map(map__52724);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq52723){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53251 = arguments.length;
var i__5770__auto___53252 = (0);
while(true){
if((i__5770__auto___53252 < len__5769__auto___53251)){
args__5775__auto__.push((arguments[i__5770__auto___53252]));

var G__53253 = (i__5770__auto___53252 + (1));
i__5770__auto___53252 = G__53253;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52726 = conformed_args__51242__auto__;
var map__52726__$1 = cljs.core.__destructure_map(map__52726);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq52725){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52725));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53254 = arguments.length;
var i__5770__auto___53255 = (0);
while(true){
if((i__5770__auto___53255 < len__5769__auto___53254)){
args__5775__auto__.push((arguments[i__5770__auto___53255]));

var G__53256 = (i__5770__auto___53255 + (1));
i__5770__auto___53255 = G__53256;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52728 = conformed_args__51242__auto__;
var map__52728__$1 = cljs.core.__destructure_map(map__52728);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq52727){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52727));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53257 = arguments.length;
var i__5770__auto___53258 = (0);
while(true){
if((i__5770__auto___53258 < len__5769__auto___53257)){
args__5775__auto__.push((arguments[i__5770__auto___53258]));

var G__53259 = (i__5770__auto___53258 + (1));
i__5770__auto___53258 = G__53259;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52730 = conformed_args__51242__auto__;
var map__52730__$1 = cljs.core.__destructure_map(map__52730);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq52729){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52729));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53260 = arguments.length;
var i__5770__auto___53261 = (0);
while(true){
if((i__5770__auto___53261 < len__5769__auto___53260)){
args__5775__auto__.push((arguments[i__5770__auto___53261]));

var G__53262 = (i__5770__auto___53261 + (1));
i__5770__auto___53261 = G__53262;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52732 = conformed_args__51242__auto__;
var map__52732__$1 = cljs.core.__destructure_map(map__52732);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq52731){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52731));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53263 = arguments.length;
var i__5770__auto___53264 = (0);
while(true){
if((i__5770__auto___53264 < len__5769__auto___53263)){
args__5775__auto__.push((arguments[i__5770__auto___53264]));

var G__53265 = (i__5770__auto___53264 + (1));
i__5770__auto___53264 = G__53265;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52734 = conformed_args__51242__auto__;
var map__52734__$1 = cljs.core.__destructure_map(map__52734);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq52733){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52733));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53266 = arguments.length;
var i__5770__auto___53267 = (0);
while(true){
if((i__5770__auto___53267 < len__5769__auto___53266)){
args__5775__auto__.push((arguments[i__5770__auto___53267]));

var G__53268 = (i__5770__auto___53267 + (1));
i__5770__auto___53267 = G__53268;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52736 = conformed_args__51242__auto__;
var map__52736__$1 = cljs.core.__destructure_map(map__52736);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq52735){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52735));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53269 = arguments.length;
var i__5770__auto___53270 = (0);
while(true){
if((i__5770__auto___53270 < len__5769__auto___53269)){
args__5775__auto__.push((arguments[i__5770__auto___53270]));

var G__53271 = (i__5770__auto___53270 + (1));
i__5770__auto___53270 = G__53271;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52738 = conformed_args__51242__auto__;
var map__52738__$1 = cljs.core.__destructure_map(map__52738);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq52737){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52737));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53272 = arguments.length;
var i__5770__auto___53273 = (0);
while(true){
if((i__5770__auto___53273 < len__5769__auto___53272)){
args__5775__auto__.push((arguments[i__5770__auto___53273]));

var G__53274 = (i__5770__auto___53273 + (1));
i__5770__auto___53273 = G__53274;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52740 = conformed_args__51242__auto__;
var map__52740__$1 = cljs.core.__destructure_map(map__52740);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq52739){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52739));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53275 = arguments.length;
var i__5770__auto___53276 = (0);
while(true){
if((i__5770__auto___53276 < len__5769__auto___53275)){
args__5775__auto__.push((arguments[i__5770__auto___53276]));

var G__53277 = (i__5770__auto___53276 + (1));
i__5770__auto___53276 = G__53277;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52742 = conformed_args__51242__auto__;
var map__52742__$1 = cljs.core.__destructure_map(map__52742);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq52741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53278 = arguments.length;
var i__5770__auto___53279 = (0);
while(true){
if((i__5770__auto___53279 < len__5769__auto___53278)){
args__5775__auto__.push((arguments[i__5770__auto___53279]));

var G__53280 = (i__5770__auto___53279 + (1));
i__5770__auto___53279 = G__53280;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52744 = conformed_args__51242__auto__;
var map__52744__$1 = cljs.core.__destructure_map(map__52744);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq52743){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53281 = arguments.length;
var i__5770__auto___53282 = (0);
while(true){
if((i__5770__auto___53282 < len__5769__auto___53281)){
args__5775__auto__.push((arguments[i__5770__auto___53282]));

var G__53283 = (i__5770__auto___53282 + (1));
i__5770__auto___53282 = G__53283;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52746 = conformed_args__51242__auto__;
var map__52746__$1 = cljs.core.__destructure_map(map__52746);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq52745){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52745));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53284 = arguments.length;
var i__5770__auto___53285 = (0);
while(true){
if((i__5770__auto___53285 < len__5769__auto___53284)){
args__5775__auto__.push((arguments[i__5770__auto___53285]));

var G__53286 = (i__5770__auto___53285 + (1));
i__5770__auto___53285 = G__53286;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52748 = conformed_args__51242__auto__;
var map__52748__$1 = cljs.core.__destructure_map(map__52748);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq52747){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52747));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53287 = arguments.length;
var i__5770__auto___53288 = (0);
while(true){
if((i__5770__auto___53288 < len__5769__auto___53287)){
args__5775__auto__.push((arguments[i__5770__auto___53288]));

var G__53289 = (i__5770__auto___53288 + (1));
i__5770__auto___53288 = G__53289;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52750 = conformed_args__51242__auto__;
var map__52750__$1 = cljs.core.__destructure_map(map__52750);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq52749){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52749));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53290 = arguments.length;
var i__5770__auto___53291 = (0);
while(true){
if((i__5770__auto___53291 < len__5769__auto___53290)){
args__5775__auto__.push((arguments[i__5770__auto___53291]));

var G__53292 = (i__5770__auto___53291 + (1));
i__5770__auto___53291 = G__53292;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52752 = conformed_args__51242__auto__;
var map__52752__$1 = cljs.core.__destructure_map(map__52752);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq52751){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52751));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53293 = arguments.length;
var i__5770__auto___53294 = (0);
while(true){
if((i__5770__auto___53294 < len__5769__auto___53293)){
args__5775__auto__.push((arguments[i__5770__auto___53294]));

var G__53295 = (i__5770__auto___53294 + (1));
i__5770__auto___53294 = G__53295;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52754 = conformed_args__51242__auto__;
var map__52754__$1 = cljs.core.__destructure_map(map__52754);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq52753){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52753));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53296 = arguments.length;
var i__5770__auto___53297 = (0);
while(true){
if((i__5770__auto___53297 < len__5769__auto___53296)){
args__5775__auto__.push((arguments[i__5770__auto___53297]));

var G__53298 = (i__5770__auto___53297 + (1));
i__5770__auto___53297 = G__53298;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52756 = conformed_args__51242__auto__;
var map__52756__$1 = cljs.core.__destructure_map(map__52756);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq52755){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52755));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53299 = arguments.length;
var i__5770__auto___53300 = (0);
while(true){
if((i__5770__auto___53300 < len__5769__auto___53299)){
args__5775__auto__.push((arguments[i__5770__auto___53300]));

var G__53301 = (i__5770__auto___53300 + (1));
i__5770__auto___53300 = G__53301;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52758 = conformed_args__51242__auto__;
var map__52758__$1 = cljs.core.__destructure_map(map__52758);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq52757){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52757));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53302 = arguments.length;
var i__5770__auto___53303 = (0);
while(true){
if((i__5770__auto___53303 < len__5769__auto___53302)){
args__5775__auto__.push((arguments[i__5770__auto___53303]));

var G__53304 = (i__5770__auto___53303 + (1));
i__5770__auto___53303 = G__53304;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52760 = conformed_args__51242__auto__;
var map__52760__$1 = cljs.core.__destructure_map(map__52760);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq52759){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52759));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53305 = arguments.length;
var i__5770__auto___53306 = (0);
while(true){
if((i__5770__auto___53306 < len__5769__auto___53305)){
args__5775__auto__.push((arguments[i__5770__auto___53306]));

var G__53307 = (i__5770__auto___53306 + (1));
i__5770__auto___53306 = G__53307;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52762 = conformed_args__51242__auto__;
var map__52762__$1 = cljs.core.__destructure_map(map__52762);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq52761){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52761));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53308 = arguments.length;
var i__5770__auto___53309 = (0);
while(true){
if((i__5770__auto___53309 < len__5769__auto___53308)){
args__5775__auto__.push((arguments[i__5770__auto___53309]));

var G__53310 = (i__5770__auto___53309 + (1));
i__5770__auto___53309 = G__53310;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52764 = conformed_args__51242__auto__;
var map__52764__$1 = cljs.core.__destructure_map(map__52764);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq52763){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52763));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53311 = arguments.length;
var i__5770__auto___53312 = (0);
while(true){
if((i__5770__auto___53312 < len__5769__auto___53311)){
args__5775__auto__.push((arguments[i__5770__auto___53312]));

var G__53313 = (i__5770__auto___53312 + (1));
i__5770__auto___53312 = G__53313;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52766 = conformed_args__51242__auto__;
var map__52766__$1 = cljs.core.__destructure_map(map__52766);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq52765){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52765));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53314 = arguments.length;
var i__5770__auto___53315 = (0);
while(true){
if((i__5770__auto___53315 < len__5769__auto___53314)){
args__5775__auto__.push((arguments[i__5770__auto___53315]));

var G__53316 = (i__5770__auto___53315 + (1));
i__5770__auto___53315 = G__53316;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52768 = conformed_args__51242__auto__;
var map__52768__$1 = cljs.core.__destructure_map(map__52768);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq52767){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52767));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53317 = arguments.length;
var i__5770__auto___53318 = (0);
while(true){
if((i__5770__auto___53318 < len__5769__auto___53317)){
args__5775__auto__.push((arguments[i__5770__auto___53318]));

var G__53319 = (i__5770__auto___53318 + (1));
i__5770__auto___53318 = G__53319;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52770 = conformed_args__51242__auto__;
var map__52770__$1 = cljs.core.__destructure_map(map__52770);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52770__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52770__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq52769){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52769));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53320 = arguments.length;
var i__5770__auto___53321 = (0);
while(true){
if((i__5770__auto___53321 < len__5769__auto___53320)){
args__5775__auto__.push((arguments[i__5770__auto___53321]));

var G__53322 = (i__5770__auto___53321 + (1));
i__5770__auto___53321 = G__53322;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52772 = conformed_args__51242__auto__;
var map__52772__$1 = cljs.core.__destructure_map(map__52772);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq52771){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52771));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53323 = arguments.length;
var i__5770__auto___53324 = (0);
while(true){
if((i__5770__auto___53324 < len__5769__auto___53323)){
args__5775__auto__.push((arguments[i__5770__auto___53324]));

var G__53325 = (i__5770__auto___53324 + (1));
i__5770__auto___53324 = G__53325;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52774 = conformed_args__51242__auto__;
var map__52774__$1 = cljs.core.__destructure_map(map__52774);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq52773){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52773));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53326 = arguments.length;
var i__5770__auto___53327 = (0);
while(true){
if((i__5770__auto___53327 < len__5769__auto___53326)){
args__5775__auto__.push((arguments[i__5770__auto___53327]));

var G__53328 = (i__5770__auto___53327 + (1));
i__5770__auto___53327 = G__53328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52776 = conformed_args__51242__auto__;
var map__52776__$1 = cljs.core.__destructure_map(map__52776);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq52775){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52775));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53329 = arguments.length;
var i__5770__auto___53330 = (0);
while(true){
if((i__5770__auto___53330 < len__5769__auto___53329)){
args__5775__auto__.push((arguments[i__5770__auto___53330]));

var G__53331 = (i__5770__auto___53330 + (1));
i__5770__auto___53330 = G__53331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52778 = conformed_args__51242__auto__;
var map__52778__$1 = cljs.core.__destructure_map(map__52778);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq52777){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52777));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53332 = arguments.length;
var i__5770__auto___53333 = (0);
while(true){
if((i__5770__auto___53333 < len__5769__auto___53332)){
args__5775__auto__.push((arguments[i__5770__auto___53333]));

var G__53334 = (i__5770__auto___53333 + (1));
i__5770__auto___53333 = G__53334;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52780 = conformed_args__51242__auto__;
var map__52780__$1 = cljs.core.__destructure_map(map__52780);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq52779){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52779));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53335 = arguments.length;
var i__5770__auto___53336 = (0);
while(true){
if((i__5770__auto___53336 < len__5769__auto___53335)){
args__5775__auto__.push((arguments[i__5770__auto___53336]));

var G__53337 = (i__5770__auto___53336 + (1));
i__5770__auto___53336 = G__53337;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52782 = conformed_args__51242__auto__;
var map__52782__$1 = cljs.core.__destructure_map(map__52782);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq52781){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52781));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53338 = arguments.length;
var i__5770__auto___53339 = (0);
while(true){
if((i__5770__auto___53339 < len__5769__auto___53338)){
args__5775__auto__.push((arguments[i__5770__auto___53339]));

var G__53340 = (i__5770__auto___53339 + (1));
i__5770__auto___53339 = G__53340;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52784 = conformed_args__51242__auto__;
var map__52784__$1 = cljs.core.__destructure_map(map__52784);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq52783){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52783));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53341 = arguments.length;
var i__5770__auto___53342 = (0);
while(true){
if((i__5770__auto___53342 < len__5769__auto___53341)){
args__5775__auto__.push((arguments[i__5770__auto___53342]));

var G__53343 = (i__5770__auto___53342 + (1));
i__5770__auto___53342 = G__53343;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52786 = conformed_args__51242__auto__;
var map__52786__$1 = cljs.core.__destructure_map(map__52786);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52786__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52786__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52786__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq52785){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52785));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53344 = arguments.length;
var i__5770__auto___53345 = (0);
while(true){
if((i__5770__auto___53345 < len__5769__auto___53344)){
args__5775__auto__.push((arguments[i__5770__auto___53345]));

var G__53346 = (i__5770__auto___53345 + (1));
i__5770__auto___53345 = G__53346;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52788 = conformed_args__51242__auto__;
var map__52788__$1 = cljs.core.__destructure_map(map__52788);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52788__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52788__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52788__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq52787){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52787));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53347 = arguments.length;
var i__5770__auto___53348 = (0);
while(true){
if((i__5770__auto___53348 < len__5769__auto___53347)){
args__5775__auto__.push((arguments[i__5770__auto___53348]));

var G__53349 = (i__5770__auto___53348 + (1));
i__5770__auto___53348 = G__53349;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52790 = conformed_args__51242__auto__;
var map__52790__$1 = cljs.core.__destructure_map(map__52790);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq52789){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52789));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53350 = arguments.length;
var i__5770__auto___53351 = (0);
while(true){
if((i__5770__auto___53351 < len__5769__auto___53350)){
args__5775__auto__.push((arguments[i__5770__auto___53351]));

var G__53352 = (i__5770__auto___53351 + (1));
i__5770__auto___53351 = G__53352;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52792 = conformed_args__51242__auto__;
var map__52792__$1 = cljs.core.__destructure_map(map__52792);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq52791){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52791));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53353 = arguments.length;
var i__5770__auto___53354 = (0);
while(true){
if((i__5770__auto___53354 < len__5769__auto___53353)){
args__5775__auto__.push((arguments[i__5770__auto___53354]));

var G__53355 = (i__5770__auto___53354 + (1));
i__5770__auto___53354 = G__53355;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52794 = conformed_args__51242__auto__;
var map__52794__$1 = cljs.core.__destructure_map(map__52794);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq52793){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52793));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53356 = arguments.length;
var i__5770__auto___53357 = (0);
while(true){
if((i__5770__auto___53357 < len__5769__auto___53356)){
args__5775__auto__.push((arguments[i__5770__auto___53357]));

var G__53358 = (i__5770__auto___53357 + (1));
i__5770__auto___53357 = G__53358;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52796 = conformed_args__51242__auto__;
var map__52796__$1 = cljs.core.__destructure_map(map__52796);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq52795){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52795));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53359 = arguments.length;
var i__5770__auto___53360 = (0);
while(true){
if((i__5770__auto___53360 < len__5769__auto___53359)){
args__5775__auto__.push((arguments[i__5770__auto___53360]));

var G__53361 = (i__5770__auto___53360 + (1));
i__5770__auto___53360 = G__53361;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52798 = conformed_args__51242__auto__;
var map__52798__$1 = cljs.core.__destructure_map(map__52798);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq52797){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52797));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53362 = arguments.length;
var i__5770__auto___53363 = (0);
while(true){
if((i__5770__auto___53363 < len__5769__auto___53362)){
args__5775__auto__.push((arguments[i__5770__auto___53363]));

var G__53364 = (i__5770__auto___53363 + (1));
i__5770__auto___53363 = G__53364;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52800 = conformed_args__51242__auto__;
var map__52800__$1 = cljs.core.__destructure_map(map__52800);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52800__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52800__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52800__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq52799){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52799));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53365 = arguments.length;
var i__5770__auto___53366 = (0);
while(true){
if((i__5770__auto___53366 < len__5769__auto___53365)){
args__5775__auto__.push((arguments[i__5770__auto___53366]));

var G__53367 = (i__5770__auto___53366 + (1));
i__5770__auto___53366 = G__53367;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52802 = conformed_args__51242__auto__;
var map__52802__$1 = cljs.core.__destructure_map(map__52802);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52802__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52802__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq52801){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52801));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53368 = arguments.length;
var i__5770__auto___53369 = (0);
while(true){
if((i__5770__auto___53369 < len__5769__auto___53368)){
args__5775__auto__.push((arguments[i__5770__auto___53369]));

var G__53370 = (i__5770__auto___53369 + (1));
i__5770__auto___53369 = G__53370;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52804 = conformed_args__51242__auto__;
var map__52804__$1 = cljs.core.__destructure_map(map__52804);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq52803){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52803));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53371 = arguments.length;
var i__5770__auto___53372 = (0);
while(true){
if((i__5770__auto___53372 < len__5769__auto___53371)){
args__5775__auto__.push((arguments[i__5770__auto___53372]));

var G__53373 = (i__5770__auto___53372 + (1));
i__5770__auto___53372 = G__53373;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52806 = conformed_args__51242__auto__;
var map__52806__$1 = cljs.core.__destructure_map(map__52806);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq52805){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52805));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53374 = arguments.length;
var i__5770__auto___53375 = (0);
while(true){
if((i__5770__auto___53375 < len__5769__auto___53374)){
args__5775__auto__.push((arguments[i__5770__auto___53375]));

var G__53376 = (i__5770__auto___53375 + (1));
i__5770__auto___53375 = G__53376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52808 = conformed_args__51242__auto__;
var map__52808__$1 = cljs.core.__destructure_map(map__52808);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq52807){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52807));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53377 = arguments.length;
var i__5770__auto___53378 = (0);
while(true){
if((i__5770__auto___53378 < len__5769__auto___53377)){
args__5775__auto__.push((arguments[i__5770__auto___53378]));

var G__53379 = (i__5770__auto___53378 + (1));
i__5770__auto___53378 = G__53379;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52810 = conformed_args__51242__auto__;
var map__52810__$1 = cljs.core.__destructure_map(map__52810);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq52809){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52809));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53380 = arguments.length;
var i__5770__auto___53381 = (0);
while(true){
if((i__5770__auto___53381 < len__5769__auto___53380)){
args__5775__auto__.push((arguments[i__5770__auto___53381]));

var G__53382 = (i__5770__auto___53381 + (1));
i__5770__auto___53381 = G__53382;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52812 = conformed_args__51242__auto__;
var map__52812__$1 = cljs.core.__destructure_map(map__52812);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52812__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52812__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq52811){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52811));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53383 = arguments.length;
var i__5770__auto___53384 = (0);
while(true){
if((i__5770__auto___53384 < len__5769__auto___53383)){
args__5775__auto__.push((arguments[i__5770__auto___53384]));

var G__53385 = (i__5770__auto___53384 + (1));
i__5770__auto___53384 = G__53385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52814 = conformed_args__51242__auto__;
var map__52814__$1 = cljs.core.__destructure_map(map__52814);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq52813){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52813));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53386 = arguments.length;
var i__5770__auto___53387 = (0);
while(true){
if((i__5770__auto___53387 < len__5769__auto___53386)){
args__5775__auto__.push((arguments[i__5770__auto___53387]));

var G__53388 = (i__5770__auto___53387 + (1));
i__5770__auto___53387 = G__53388;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52816 = conformed_args__51242__auto__;
var map__52816__$1 = cljs.core.__destructure_map(map__52816);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq52815){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52815));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53389 = arguments.length;
var i__5770__auto___53390 = (0);
while(true){
if((i__5770__auto___53390 < len__5769__auto___53389)){
args__5775__auto__.push((arguments[i__5770__auto___53390]));

var G__53391 = (i__5770__auto___53390 + (1));
i__5770__auto___53390 = G__53391;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52818 = conformed_args__51242__auto__;
var map__52818__$1 = cljs.core.__destructure_map(map__52818);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52818__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52818__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq52817){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52817));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53392 = arguments.length;
var i__5770__auto___53393 = (0);
while(true){
if((i__5770__auto___53393 < len__5769__auto___53392)){
args__5775__auto__.push((arguments[i__5770__auto___53393]));

var G__53394 = (i__5770__auto___53393 + (1));
i__5770__auto___53393 = G__53394;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52820 = conformed_args__51242__auto__;
var map__52820__$1 = cljs.core.__destructure_map(map__52820);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq52819){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52819));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53395 = arguments.length;
var i__5770__auto___53396 = (0);
while(true){
if((i__5770__auto___53396 < len__5769__auto___53395)){
args__5775__auto__.push((arguments[i__5770__auto___53396]));

var G__53397 = (i__5770__auto___53396 + (1));
i__5770__auto___53396 = G__53397;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52822 = conformed_args__51242__auto__;
var map__52822__$1 = cljs.core.__destructure_map(map__52822);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq52821){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52821));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53398 = arguments.length;
var i__5770__auto___53399 = (0);
while(true){
if((i__5770__auto___53399 < len__5769__auto___53398)){
args__5775__auto__.push((arguments[i__5770__auto___53399]));

var G__53400 = (i__5770__auto___53399 + (1));
i__5770__auto___53399 = G__53400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52824 = conformed_args__51242__auto__;
var map__52824__$1 = cljs.core.__destructure_map(map__52824);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq52823){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52823));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53401 = arguments.length;
var i__5770__auto___53402 = (0);
while(true){
if((i__5770__auto___53402 < len__5769__auto___53401)){
args__5775__auto__.push((arguments[i__5770__auto___53402]));

var G__53403 = (i__5770__auto___53402 + (1));
i__5770__auto___53402 = G__53403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52826 = conformed_args__51242__auto__;
var map__52826__$1 = cljs.core.__destructure_map(map__52826);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52826__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52826__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq52825){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52825));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53404 = arguments.length;
var i__5770__auto___53405 = (0);
while(true){
if((i__5770__auto___53405 < len__5769__auto___53404)){
args__5775__auto__.push((arguments[i__5770__auto___53405]));

var G__53406 = (i__5770__auto___53405 + (1));
i__5770__auto___53405 = G__53406;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52828 = conformed_args__51242__auto__;
var map__52828__$1 = cljs.core.__destructure_map(map__52828);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52828__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq52827){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52827));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53407 = arguments.length;
var i__5770__auto___53408 = (0);
while(true){
if((i__5770__auto___53408 < len__5769__auto___53407)){
args__5775__auto__.push((arguments[i__5770__auto___53408]));

var G__53409 = (i__5770__auto___53408 + (1));
i__5770__auto___53408 = G__53409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52830 = conformed_args__51242__auto__;
var map__52830__$1 = cljs.core.__destructure_map(map__52830);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq52829){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52829));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53410 = arguments.length;
var i__5770__auto___53411 = (0);
while(true){
if((i__5770__auto___53411 < len__5769__auto___53410)){
args__5775__auto__.push((arguments[i__5770__auto___53411]));

var G__53412 = (i__5770__auto___53411 + (1));
i__5770__auto___53411 = G__53412;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52832 = conformed_args__51242__auto__;
var map__52832__$1 = cljs.core.__destructure_map(map__52832);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq52831){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52831));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53413 = arguments.length;
var i__5770__auto___53414 = (0);
while(true){
if((i__5770__auto___53414 < len__5769__auto___53413)){
args__5775__auto__.push((arguments[i__5770__auto___53414]));

var G__53415 = (i__5770__auto___53414 + (1));
i__5770__auto___53414 = G__53415;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52834 = conformed_args__51242__auto__;
var map__52834__$1 = cljs.core.__destructure_map(map__52834);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52834__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52834__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52834__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq52833){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52833));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53416 = arguments.length;
var i__5770__auto___53417 = (0);
while(true){
if((i__5770__auto___53417 < len__5769__auto___53416)){
args__5775__auto__.push((arguments[i__5770__auto___53417]));

var G__53418 = (i__5770__auto___53417 + (1));
i__5770__auto___53417 = G__53418;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52836 = conformed_args__51242__auto__;
var map__52836__$1 = cljs.core.__destructure_map(map__52836);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52836__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52836__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52836__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq52835){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52835));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53419 = arguments.length;
var i__5770__auto___53420 = (0);
while(true){
if((i__5770__auto___53420 < len__5769__auto___53419)){
args__5775__auto__.push((arguments[i__5770__auto___53420]));

var G__53421 = (i__5770__auto___53420 + (1));
i__5770__auto___53420 = G__53421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52838 = conformed_args__51242__auto__;
var map__52838__$1 = cljs.core.__destructure_map(map__52838);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52838__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52838__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52838__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq52837){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52837));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53422 = arguments.length;
var i__5770__auto___53423 = (0);
while(true){
if((i__5770__auto___53423 < len__5769__auto___53422)){
args__5775__auto__.push((arguments[i__5770__auto___53423]));

var G__53424 = (i__5770__auto___53423 + (1));
i__5770__auto___53423 = G__53424;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52840 = conformed_args__51242__auto__;
var map__52840__$1 = cljs.core.__destructure_map(map__52840);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq52839){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52839));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53425 = arguments.length;
var i__5770__auto___53426 = (0);
while(true){
if((i__5770__auto___53426 < len__5769__auto___53425)){
args__5775__auto__.push((arguments[i__5770__auto___53426]));

var G__53427 = (i__5770__auto___53426 + (1));
i__5770__auto___53426 = G__53427;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52842 = conformed_args__51242__auto__;
var map__52842__$1 = cljs.core.__destructure_map(map__52842);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52842__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52842__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52842__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq52841){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52841));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53428 = arguments.length;
var i__5770__auto___53429 = (0);
while(true){
if((i__5770__auto___53429 < len__5769__auto___53428)){
args__5775__auto__.push((arguments[i__5770__auto___53429]));

var G__53430 = (i__5770__auto___53429 + (1));
i__5770__auto___53429 = G__53430;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52844 = conformed_args__51242__auto__;
var map__52844__$1 = cljs.core.__destructure_map(map__52844);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq52843){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52843));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53431 = arguments.length;
var i__5770__auto___53432 = (0);
while(true){
if((i__5770__auto___53432 < len__5769__auto___53431)){
args__5775__auto__.push((arguments[i__5770__auto___53432]));

var G__53433 = (i__5770__auto___53432 + (1));
i__5770__auto___53432 = G__53433;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52846 = conformed_args__51242__auto__;
var map__52846__$1 = cljs.core.__destructure_map(map__52846);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52846__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52846__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq52845){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52845));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53434 = arguments.length;
var i__5770__auto___53435 = (0);
while(true){
if((i__5770__auto___53435 < len__5769__auto___53434)){
args__5775__auto__.push((arguments[i__5770__auto___53435]));

var G__53436 = (i__5770__auto___53435 + (1));
i__5770__auto___53435 = G__53436;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52848 = conformed_args__51242__auto__;
var map__52848__$1 = cljs.core.__destructure_map(map__52848);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq52847){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52847));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53437 = arguments.length;
var i__5770__auto___53438 = (0);
while(true){
if((i__5770__auto___53438 < len__5769__auto___53437)){
args__5775__auto__.push((arguments[i__5770__auto___53438]));

var G__53439 = (i__5770__auto___53438 + (1));
i__5770__auto___53438 = G__53439;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52850 = conformed_args__51242__auto__;
var map__52850__$1 = cljs.core.__destructure_map(map__52850);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq52849){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53440 = arguments.length;
var i__5770__auto___53441 = (0);
while(true){
if((i__5770__auto___53441 < len__5769__auto___53440)){
args__5775__auto__.push((arguments[i__5770__auto___53441]));

var G__53442 = (i__5770__auto___53441 + (1));
i__5770__auto___53441 = G__53442;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52852 = conformed_args__51242__auto__;
var map__52852__$1 = cljs.core.__destructure_map(map__52852);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq52851){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52851));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53443 = arguments.length;
var i__5770__auto___53444 = (0);
while(true){
if((i__5770__auto___53444 < len__5769__auto___53443)){
args__5775__auto__.push((arguments[i__5770__auto___53444]));

var G__53445 = (i__5770__auto___53444 + (1));
i__5770__auto___53444 = G__53445;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52854 = conformed_args__51242__auto__;
var map__52854__$1 = cljs.core.__destructure_map(map__52854);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq52853){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52853));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53446 = arguments.length;
var i__5770__auto___53447 = (0);
while(true){
if((i__5770__auto___53447 < len__5769__auto___53446)){
args__5775__auto__.push((arguments[i__5770__auto___53447]));

var G__53448 = (i__5770__auto___53447 + (1));
i__5770__auto___53447 = G__53448;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52856 = conformed_args__51242__auto__;
var map__52856__$1 = cljs.core.__destructure_map(map__52856);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq52855){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52855));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53449 = arguments.length;
var i__5770__auto___53450 = (0);
while(true){
if((i__5770__auto___53450 < len__5769__auto___53449)){
args__5775__auto__.push((arguments[i__5770__auto___53450]));

var G__53451 = (i__5770__auto___53450 + (1));
i__5770__auto___53450 = G__53451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52858 = conformed_args__51242__auto__;
var map__52858__$1 = cljs.core.__destructure_map(map__52858);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq52857){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52857));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53452 = arguments.length;
var i__5770__auto___53453 = (0);
while(true){
if((i__5770__auto___53453 < len__5769__auto___53452)){
args__5775__auto__.push((arguments[i__5770__auto___53453]));

var G__53454 = (i__5770__auto___53453 + (1));
i__5770__auto___53453 = G__53454;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52860 = conformed_args__51242__auto__;
var map__52860__$1 = cljs.core.__destructure_map(map__52860);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq52859){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52859));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53455 = arguments.length;
var i__5770__auto___53456 = (0);
while(true){
if((i__5770__auto___53456 < len__5769__auto___53455)){
args__5775__auto__.push((arguments[i__5770__auto___53456]));

var G__53457 = (i__5770__auto___53456 + (1));
i__5770__auto___53456 = G__53457;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52862 = conformed_args__51242__auto__;
var map__52862__$1 = cljs.core.__destructure_map(map__52862);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52862__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52862__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52862__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq52861){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52861));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53458 = arguments.length;
var i__5770__auto___53459 = (0);
while(true){
if((i__5770__auto___53459 < len__5769__auto___53458)){
args__5775__auto__.push((arguments[i__5770__auto___53459]));

var G__53460 = (i__5770__auto___53459 + (1));
i__5770__auto___53459 = G__53460;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52864 = conformed_args__51242__auto__;
var map__52864__$1 = cljs.core.__destructure_map(map__52864);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52864__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52864__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52864__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq52863){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52863));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53461 = arguments.length;
var i__5770__auto___53462 = (0);
while(true){
if((i__5770__auto___53462 < len__5769__auto___53461)){
args__5775__auto__.push((arguments[i__5770__auto___53462]));

var G__53463 = (i__5770__auto___53462 + (1));
i__5770__auto___53462 = G__53463;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52866 = conformed_args__51242__auto__;
var map__52866__$1 = cljs.core.__destructure_map(map__52866);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq52865){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52865));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53464 = arguments.length;
var i__5770__auto___53465 = (0);
while(true){
if((i__5770__auto___53465 < len__5769__auto___53464)){
args__5775__auto__.push((arguments[i__5770__auto___53465]));

var G__53466 = (i__5770__auto___53465 + (1));
i__5770__auto___53465 = G__53466;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52868 = conformed_args__51242__auto__;
var map__52868__$1 = cljs.core.__destructure_map(map__52868);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq52867){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52867));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53467 = arguments.length;
var i__5770__auto___53468 = (0);
while(true){
if((i__5770__auto___53468 < len__5769__auto___53467)){
args__5775__auto__.push((arguments[i__5770__auto___53468]));

var G__53469 = (i__5770__auto___53468 + (1));
i__5770__auto___53468 = G__53469;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52870 = conformed_args__51242__auto__;
var map__52870__$1 = cljs.core.__destructure_map(map__52870);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52870__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52870__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52870__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq52869){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52869));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53470 = arguments.length;
var i__5770__auto___53471 = (0);
while(true){
if((i__5770__auto___53471 < len__5769__auto___53470)){
args__5775__auto__.push((arguments[i__5770__auto___53471]));

var G__53472 = (i__5770__auto___53471 + (1));
i__5770__auto___53471 = G__53472;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52872 = conformed_args__51242__auto__;
var map__52872__$1 = cljs.core.__destructure_map(map__52872);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq52871){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52871));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53473 = arguments.length;
var i__5770__auto___53474 = (0);
while(true){
if((i__5770__auto___53474 < len__5769__auto___53473)){
args__5775__auto__.push((arguments[i__5770__auto___53474]));

var G__53475 = (i__5770__auto___53474 + (1));
i__5770__auto___53474 = G__53475;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52874 = conformed_args__51242__auto__;
var map__52874__$1 = cljs.core.__destructure_map(map__52874);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq52873){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52873));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53476 = arguments.length;
var i__5770__auto___53477 = (0);
while(true){
if((i__5770__auto___53477 < len__5769__auto___53476)){
args__5775__auto__.push((arguments[i__5770__auto___53477]));

var G__53478 = (i__5770__auto___53477 + (1));
i__5770__auto___53477 = G__53478;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52876 = conformed_args__51242__auto__;
var map__52876__$1 = cljs.core.__destructure_map(map__52876);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq52875){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52875));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53479 = arguments.length;
var i__5770__auto___53480 = (0);
while(true){
if((i__5770__auto___53480 < len__5769__auto___53479)){
args__5775__auto__.push((arguments[i__5770__auto___53480]));

var G__53481 = (i__5770__auto___53480 + (1));
i__5770__auto___53480 = G__53481;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52878 = conformed_args__51242__auto__;
var map__52878__$1 = cljs.core.__destructure_map(map__52878);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq52877){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52877));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53482 = arguments.length;
var i__5770__auto___53483 = (0);
while(true){
if((i__5770__auto___53483 < len__5769__auto___53482)){
args__5775__auto__.push((arguments[i__5770__auto___53483]));

var G__53484 = (i__5770__auto___53483 + (1));
i__5770__auto___53483 = G__53484;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52880 = conformed_args__51242__auto__;
var map__52880__$1 = cljs.core.__destructure_map(map__52880);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq52879){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53485 = arguments.length;
var i__5770__auto___53486 = (0);
while(true){
if((i__5770__auto___53486 < len__5769__auto___53485)){
args__5775__auto__.push((arguments[i__5770__auto___53486]));

var G__53487 = (i__5770__auto___53486 + (1));
i__5770__auto___53486 = G__53487;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52882 = conformed_args__51242__auto__;
var map__52882__$1 = cljs.core.__destructure_map(map__52882);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52882__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52882__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq52881){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52881));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53488 = arguments.length;
var i__5770__auto___53489 = (0);
while(true){
if((i__5770__auto___53489 < len__5769__auto___53488)){
args__5775__auto__.push((arguments[i__5770__auto___53489]));

var G__53490 = (i__5770__auto___53489 + (1));
i__5770__auto___53489 = G__53490;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52884 = conformed_args__51242__auto__;
var map__52884__$1 = cljs.core.__destructure_map(map__52884);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq52883){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52883));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53491 = arguments.length;
var i__5770__auto___53492 = (0);
while(true){
if((i__5770__auto___53492 < len__5769__auto___53491)){
args__5775__auto__.push((arguments[i__5770__auto___53492]));

var G__53493 = (i__5770__auto___53492 + (1));
i__5770__auto___53492 = G__53493;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52886 = conformed_args__51242__auto__;
var map__52886__$1 = cljs.core.__destructure_map(map__52886);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq52885){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52885));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53494 = arguments.length;
var i__5770__auto___53495 = (0);
while(true){
if((i__5770__auto___53495 < len__5769__auto___53494)){
args__5775__auto__.push((arguments[i__5770__auto___53495]));

var G__53496 = (i__5770__auto___53495 + (1));
i__5770__auto___53495 = G__53496;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52888 = conformed_args__51242__auto__;
var map__52888__$1 = cljs.core.__destructure_map(map__52888);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq52887){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52887));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53497 = arguments.length;
var i__5770__auto___53498 = (0);
while(true){
if((i__5770__auto___53498 < len__5769__auto___53497)){
args__5775__auto__.push((arguments[i__5770__auto___53498]));

var G__53499 = (i__5770__auto___53498 + (1));
i__5770__auto___53498 = G__53499;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52890 = conformed_args__51242__auto__;
var map__52890__$1 = cljs.core.__destructure_map(map__52890);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52890__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52890__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52890__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq52889){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52889));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53500 = arguments.length;
var i__5770__auto___53501 = (0);
while(true){
if((i__5770__auto___53501 < len__5769__auto___53500)){
args__5775__auto__.push((arguments[i__5770__auto___53501]));

var G__53502 = (i__5770__auto___53501 + (1));
i__5770__auto___53501 = G__53502;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52892 = conformed_args__51242__auto__;
var map__52892__$1 = cljs.core.__destructure_map(map__52892);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq52891){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52891));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53503 = arguments.length;
var i__5770__auto___53504 = (0);
while(true){
if((i__5770__auto___53504 < len__5769__auto___53503)){
args__5775__auto__.push((arguments[i__5770__auto___53504]));

var G__53505 = (i__5770__auto___53504 + (1));
i__5770__auto___53504 = G__53505;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52894 = conformed_args__51242__auto__;
var map__52894__$1 = cljs.core.__destructure_map(map__52894);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq52893){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52893));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53506 = arguments.length;
var i__5770__auto___53507 = (0);
while(true){
if((i__5770__auto___53507 < len__5769__auto___53506)){
args__5775__auto__.push((arguments[i__5770__auto___53507]));

var G__53508 = (i__5770__auto___53507 + (1));
i__5770__auto___53507 = G__53508;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52896 = conformed_args__51242__auto__;
var map__52896__$1 = cljs.core.__destructure_map(map__52896);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq52895){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52895));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53509 = arguments.length;
var i__5770__auto___53510 = (0);
while(true){
if((i__5770__auto___53510 < len__5769__auto___53509)){
args__5775__auto__.push((arguments[i__5770__auto___53510]));

var G__53511 = (i__5770__auto___53510 + (1));
i__5770__auto___53510 = G__53511;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52898 = conformed_args__51242__auto__;
var map__52898__$1 = cljs.core.__destructure_map(map__52898);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52898__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52898__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52898__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq52897){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52897));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53512 = arguments.length;
var i__5770__auto___53513 = (0);
while(true){
if((i__5770__auto___53513 < len__5769__auto___53512)){
args__5775__auto__.push((arguments[i__5770__auto___53513]));

var G__53514 = (i__5770__auto___53513 + (1));
i__5770__auto___53513 = G__53514;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52900 = conformed_args__51242__auto__;
var map__52900__$1 = cljs.core.__destructure_map(map__52900);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52900__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52900__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52900__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq52899){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52899));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53515 = arguments.length;
var i__5770__auto___53516 = (0);
while(true){
if((i__5770__auto___53516 < len__5769__auto___53515)){
args__5775__auto__.push((arguments[i__5770__auto___53516]));

var G__53517 = (i__5770__auto___53516 + (1));
i__5770__auto___53516 = G__53517;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51242__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52902 = conformed_args__51242__auto__;
var map__52902__$1 = cljs.core.__destructure_map(map__52902);
var css__51245__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52902__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51244__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52902__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__51243__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52902__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51244__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51244__auto__);
var attrs_value__51246__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__51243__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51246__auto__], null),children__51244__auto____$1),css__51245__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq52901){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52901));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
