goog.provide('com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control');

var options__50845__auto___93192 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$controls$boolean_control$render_BooleanControl(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var map__93188 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
var map__93188__$1 = cljs.core.__destructure_map(map__93188);
var instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93188__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93188__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var control_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93188__$1,new cljs.core.Keyword(null,"control-key","control-key",-1287294483));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(instance);
var map__93189 = (function (){var or__5045__auto__ = control;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,control_key);
}
})();
var map__93189__$1 = cljs.core.__destructure_map(map__93189);
var control__$1 = map__93189__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93189__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93189__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93189__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93189__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93189__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var user_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93189__$1,new cljs.core.Keyword(null,"user-props","user-props",-1594547727));
var label_top_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93189__$1,new cljs.core.Keyword(null,"label-top?","label-top?",-1730831450));
var toggle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93189__$1,new cljs.core.Keyword(null,"toggle?","toggle?",-664005476),true);
var toggle_QMARK___$1 = ((cljs.core.boolean_QMARK_(toggle_QMARK_))?toggle_QMARK_:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle","toggle",1291842030),style))?true:false
));
if(cljs.core.truth_(control__$1)){
if(cljs.core.truth_((function (){var or__5045__auto__ = (visible_QMARK_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
}
})())){
var label__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var disabled_QMARK___$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(disabled_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instance], 0));
var value = com.fulcrologic.rad.control.current_value(instance,control_key);
var inp_attr = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),cljs.core.boolean$(disabled_QMARK___$1),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (___$1){
com.fulcrologic.rad.control.set_parameter_BANG_(instance,control_key,cljs.core.not(value));

if(cljs.core.truth_(onChange)){
var G__93190 = instance;
var G__93191 = cljs.core.not(value);
return (onChange.cljs$core$IFn$_invoke$arity$2 ? onChange.cljs$core$IFn$_invoke$arity$2(G__93190,G__93191) : onChange.call(null,G__93190,G__93191));
} else {
return null;
}
}),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(value)], null)], 0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_key)], null),(cljs.core.truth_(label_top_QMARK_)?com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_key),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((toggle_QMARK___$1)?"toggle":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inp_attr], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),""])], null),new cljs.core.Keyword(null,".ui.fitted.checkbox",".ui.fitted.checkbox",1758706600))], 0)):com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(control_key),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((toggle_QMARK___$1)?"toggle":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inp_attr], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1], null),null)], null),new cljs.core.Keyword(null,".ui.checkbox",".ui.checkbox",780477788))], 0)))], null),new cljs.core.Keyword(null,".field",".field",954681856));
} else {
return null;
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.controls.boolean-control",null,43,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not find control definition for ",control_key], null);
}),null)),null,-1539169587,null);
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.BooleanControl !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.BooleanControl = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___93192,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.BooleanControl,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.controls.boolean-control","BooleanControl","com.fulcrologic.rad.rendering.semantic-ui.controls.boolean-control/BooleanControl",-1010744759),options__50845__auto___93192);
com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.render_control = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.BooleanControl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"control-key","control-key",-1287294483)], null));

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.controls.boolean_control.js.map
