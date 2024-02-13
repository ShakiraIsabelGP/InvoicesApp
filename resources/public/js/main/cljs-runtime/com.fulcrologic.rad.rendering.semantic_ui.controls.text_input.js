goog.provide('com.fulcrologic.rad.rendering.semantic_ui.controls.text_input');
com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.internal_store_name = (function com$fulcrologic$rad$rendering$semantic_ui$controls$text_input$internal_store_name(control_key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"com.fulcrologic.rad.rendering.semantic-ui.controls.text-input_","com.fulcrologic.rad.rendering.semantic-ui.controls.text-input_",1730635246,null)),cljs.core.namespace(control_key)].join(''),cljs.core.name(control_key));
});

var options__50845__auto___93201 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$controls$text_input$render_TextControl(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__93198 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__93198__$1 = cljs.core.__destructure_map(map__93198);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93198__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var control_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93198__$1,new cljs.core.Keyword(null,"control-key","control-key",-1287294483));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(instance);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(instance) : com.fulcrologic.fulcro.components.props.call(null,instance));
var map__93199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,control_key);
var map__93199__$1 = cljs.core.__destructure_map(map__93199);
var control = map__93199__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93199__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93199__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93199__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93199__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93199__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93199__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var user_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93199__$1,new cljs.core.Keyword(null,"user-props","user-props",-1594547727));
if(cljs.core.truth_(control)){
var label__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var disabled_QMARK___$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(disabled_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var placeholder__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_(placeholder);
var visible_QMARK___$1 = (function (){var or__5045__auto__ = (visible_QMARK_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
}
})();
var value = com.fulcrologic.rad.control.current_value(instance,control_key);
var map__93200 = com.fulcrologic.rad.control.current_value(instance,com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.internal_store_name(control_key));
var map__93200__$1 = cljs.core.__destructure_map(map__93200);
var last_sent_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93200__$1,new cljs.core.Keyword(null,"last-sent-value","last-sent-value",-538462498));
var chg_BANG_ = (function (p1__93197_SHARP_){
return com.fulcrologic.rad.control.set_parameter_BANG_(instance,control_key,com.fulcrologic.fulcro.dom.events.target_value(p1__93197_SHARP_));
});
var run_BANG_ = (function (run_if_unchanged_QMARK_,evt){
var v = com.fulcrologic.fulcro.dom.events.target_value(evt);
var actually_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,last_sent_value);
if(cljs.core.truth_((function (){var and__5043__auto__ = onChange;
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = run_if_unchanged_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return actually_changed_QMARK_;
}
} else {
return and__5043__auto__;
}
})())){
com.fulcrologic.rad.control.set_parameter_BANG_(instance,control_key,v);

com.fulcrologic.rad.control.set_parameter_BANG_(instance,com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.internal_store_name(control_key),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-sent-value","last-sent-value",-538462498),v], null));

return (onChange.cljs$core$IFn$_invoke$arity$2 ? onChange.cljs$core$IFn$_invoke$arity$2(instance,v) : onChange.call(null,instance,v));
} else {
return null;
}
});
if(cljs.core.truth_(visible_QMARK___$1)){
var inp = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_props,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),cljs.core.boolean$(disabled_QMARK___$1),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.str.cljs$core$IFn$_invoke$arity$1(placeholder__$1),new cljs.core.Keyword(null,"onChange","onChange",-312891301),chg_BANG_,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(run_BANG_,false),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (evt){
if(com.fulcrologic.fulcro.dom.events.enter_QMARK_(evt)){
return run_BANG_(true,evt);
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)], 0))], null),null);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_key)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1], null),null),(cljs.core.truth_(icon)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)," icon"].join('')], null)], null),null),inp], null),new cljs.core.Keyword(null,".ui.icon.input",".ui.icon.input",-912570087)):inp)], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245));
} else {
return null;
}
} else {
return null;
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.text_input !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.TextControl !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.TextControl = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___93201,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.TextControl,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.text-input","TextControl","com.fulcrologic.rad.rendering.semantic-ui.controls.text-input/TextControl",498029223),options__50845__auto___93201);
com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.render_control = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.TextControl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"control-key","control-key",-1287294483)], null));

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.controls.text_input.js.map
