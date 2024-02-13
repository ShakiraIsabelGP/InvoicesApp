goog.provide('com.fulcrologic.rad.rendering.semantic_ui.components');
/**
 * Converts transit encoded value(s), used by Semantic UI, into CLJS datastructure.
 */
com.fulcrologic.rad.rendering.semantic_ui.components.sui_format__GT_user_format = (function com$fulcrologic$rad$rendering$semantic_ui$components$sui_format__GT_user_format(p__92912,value){
var map__92913 = p__92912;
var map__92913__$1 = cljs.core.__destructure_map(map__92913);
var multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92913__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
if(cljs.core.truth_(multiple)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false], null));
}),value));
} else {
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false], null));
}
});
com.fulcrologic.rad.rendering.semantic_ui.components.user_format__GT_sui_format = (function com$fulcrologic$rad$rendering$semantic_ui$components$user_format__GT_sui_format(p__92914,value){
var map__92915 = p__92914;
var map__92915__$1 = cljs.core.__destructure_map(map__92915);
var multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92915__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549));

if(cljs.core.truth_(multiple)){
if(cljs.core.truth_(value)){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false], null));
}),value));
} else {
return [];
}
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.boolean_QMARK_(value);
}
})())){
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false], null));
} else {
return "";
}
}
});
/**
 * Wraps userOnChange fn with try/catch and sui-form->user-format conversion.
 */
com.fulcrologic.rad.rendering.semantic_ui.components.wrapped_onChange = (function com$fulcrologic$rad$rendering$semantic_ui$components$wrapped_onChange(props,userOnChange){
return (function (_,v){
try{if(cljs.core.truth_((function (){var and__5043__auto__ = v.value;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq(v.value);
} else {
return and__5043__auto__;
}
})())){
var value = com.fulcrologic.rad.rendering.semantic_ui.components.sui_format__GT_user_format(props,v.value);
if(cljs.core.truth_((function (){var and__5043__auto__ = value;
if(cljs.core.truth_(and__5043__auto__)){
return userOnChange;
} else {
return and__5043__auto__;
}
})())){
return (userOnChange.cljs$core$IFn$_invoke$arity$1 ? userOnChange.cljs$core$IFn$_invoke$arity$1(value) : userOnChange.call(null,value));
} else {
return null;
}
} else {
return (userOnChange.cljs$core$IFn$_invoke$arity$1 ? userOnChange.cljs$core$IFn$_invoke$arity$1(null) : userOnChange.call(null,null));
}
}catch (e92916){var e = e92916;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.components",null,40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to read dropdown value ",(cljs.core.truth_(v)?v.value:null)], null);
}),null)),null,453189821,null);
}});
});

var options__50845__auto___92922 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
var xform_options = cljs.core.memoize((function (options){
return cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"value","value",305978217),(function (v){
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false], null));
}));
}),options));
}));
var xform_value = (function (multiple_QMARK_,value){
return com.fulcrologic.rad.rendering.semantic_ui.components.user_format__GT_sui_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),multiple_QMARK_], null),value);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-options","get-options",-987973923),(function (props){
return xform_options(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(props));
}),new cljs.core.Keyword(null,"format-value","format-value",1000187796),(function (props,value){
return xform_value(new cljs.core.Keyword(null,"multiple","multiple",1244445549).cljs$core$IFn$_invoke$arity$1(props),value);
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$components$render_WrappedDropdown(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__92919 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__92919__$1 = cljs.core.__destructure_map(map__92919);
var props = map__92919__$1;
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92919__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92919__$1,new cljs.core.Keyword(null,"value","value",305978217));
var multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92919__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
var map__92920 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__92920__$1 = cljs.core.__destructure_map(map__92920);
var get_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92920__$1,new cljs.core.Keyword(null,"get-options","get-options",-987973923));
var format_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92920__$1,new cljs.core.Keyword(null,"format-value","format-value",1000187796));
var userOnChange = onChange;
var options = (get_options.cljs$core$IFn$_invoke$arity$1 ? get_options.cljs$core$IFn$_invoke$arity$1(props) : get_options.call(null,props));
var value__$1 = (format_value.cljs$core$IFn$_invoke$arity$2 ? format_value.cljs$core$IFn$_invoke$arity$2(props,value) : format_value.call(null,props,value));
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"search","search",1564939822),true,new cljs.core.Keyword(null,"selection","selection",975998651),true,new cljs.core.Keyword(null,"closeOnBlur","closeOnBlur",2083528494),true,new cljs.core.Keyword(null,"openOnFocus","openOnFocus",-183721789),true,new cljs.core.Keyword(null,"selectOnBlur","selectOnBlur",-859322492),true,new cljs.core.Keyword(null,"selectOnNavigation","selectOnNavigation",-1558766488),true,new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.boolean$(multiple)], null),props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"searchInput","searchInput",1845116511),({"children": (function (SearchInput,js_props){
(js_props.autoComplete = "no-autocomplete");

return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(SearchInput,js_props);
})}),new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e,v){
try{var string_value = v.value;
var value__$2 = (cljs.core.truth_(multiple)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__92917_SHARP_){
if(cljs.core.seq(p1__92917_SHARP_)){
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2(p1__92917_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false], null));
} else {
return null;
}
}),string_value):((cljs.core.seq(string_value))?com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2(string_value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false], null)):null));
if(cljs.core.truth_(userOnChange)){
return (userOnChange.cljs$core$IFn$_invoke$arity$1 ? userOnChange.cljs$core$IFn$_invoke$arity$1(value__$2) : userOnChange.call(null,value__$2));
} else {
return null;
}
}catch (e92921){var e__$1 = e92921;
if(cljs.core.truth_((function (){var and__5043__auto__ = v.allowAdditions;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(v.options.find((function (p1__92918_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__92918_SHARP_.value,v.value);
})));
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.rendering.semantic-ui.components",null,86,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to read dropdown value ",e__$1,(cljs.core.truth_(v)?v.value:null)], null);
}),null)),null,1386673643,null);
}
}})], null)], 0));
return com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown(props__$1);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.components !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.components.WrappedDropdown !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.components.WrappedDropdown = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___92922,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.components.WrappedDropdown,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.components","WrappedDropdown","com.fulcrologic.rad.rendering.semantic-ui.components/WrappedDropdown",2107214556),options__50845__auto___92922);
/**
 * Draw a SUI dropdown with the given props.  The arguments are identical to sui/ui-dropdown, but options and onChange
 *   are auto-wrapped so that clojure data (e.g. keywords) can be used for the option :value fields. It also defaults
 *   a number of things (:search, :closeOnBlue, openOnFocus, selectOnBlue, and :selectOnNavigation) to true, but you can
 */
com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.components.WrappedDropdown);

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.components.js.map
