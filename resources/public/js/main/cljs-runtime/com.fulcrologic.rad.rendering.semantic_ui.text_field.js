goog.provide('com.fulcrologic.rad.rendering.semantic_ui.text_field');
com.fulcrologic.rad.rendering.semantic_ui.text_field.with_handlers = (function com$fulcrologic$rad$rendering$semantic_ui$text_field$with_handlers(type,p__93322){
var map__93323 = p__93322;
var map__93323__$1 = cljs.core.__destructure_map(map__93323);
var props = map__93323__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93323__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93323__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var onBlur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93323__$1,new cljs.core.Keyword(null,"onBlur","onBlur",229342509));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (evt){
if(cljs.core.truth_(onBlur)){
var G__93324 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onBlur.cljs$core$IFn$_invoke$arity$1 ? onBlur.cljs$core$IFn$_invoke$arity$1(G__93324) : onBlur.call(null,G__93324));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var G__93325 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__93325) : onChange.call(null,G__93325));
} else {
return null;
}
})], 0));
});
com.fulcrologic.rad.rendering.semantic_ui.text_field.text_input = (function com$fulcrologic$rad$rendering$semantic_ui$text_field$text_input(props){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.rendering.semantic_ui.text_field.with_handlers("text",props)], null),null);
});
com.fulcrologic.rad.rendering.semantic_ui.text_field.password_input = (function com$fulcrologic$rad$rendering$semantic_ui$text_field$password_input(p__93326){
var map__93327 = p__93326;
var map__93327__$1 = cljs.core.__destructure_map(map__93327);
var props = map__93327__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93327__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93327__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var onBlur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93327__$1,new cljs.core.Keyword(null,"onBlur","onBlur",229342509));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.rendering.semantic_ui.text_field.with_handlers("password",props)], null),null);
});

var options__50845__auto___93339 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),true], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$text_field$render_ViewablePasswordField(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__93328 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__93328__$1 = cljs.core.__destructure_map(map__93328);
var props = map__93328__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93328__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93328__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var onBlur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93328__$1,new cljs.core.Keyword(null,"onBlur","onBlur",229342509));
var hidden_QMARK_ = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(hidden_QMARK_)?"*******":(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (evt){
com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),true], null));

if(cljs.core.truth_(onBlur)){
var G__93329 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onBlur.cljs$core$IFn$_invoke$arity$1 ? onBlur.cljs$core$IFn$_invoke$arity$1(G__93329) : onBlur.call(null,G__93329));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onFocus","onFocus",1152444958),(function (_){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),false], null));
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var G__93330 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__93330) : onChange.call(null,G__93330));
} else {
return null;
}
})], 0))], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.text_field !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.text_field.ViewablePasswordField !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.text_field.ViewablePasswordField = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___93339,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.text_field.ViewablePasswordField,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.text-field","ViewablePasswordField","com.fulcrologic.rad.rendering.semantic-ui.text-field/ViewablePasswordField",-1309489061),options__50845__auto___93339);
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_field = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.text_field.text_input);
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_password = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.text_field.password_input);
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_viewable_password = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.text_field.ViewablePasswordField));
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_dropdown = (function com$fulcrologic$rad$rendering$semantic_ui$text_field$render_dropdown(p__93331,attribute){
var map__93332 = p__93331;
var map__93332__$1 = cljs.core.__destructure_map(map__93332);
var env = map__93332__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93332__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__93333 = attribute;
var map__93333__$1 = cljs.core.__destructure_map(map__93333);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93333__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93333__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330));
var values = com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("sorted-set","valid-values","sorted-set/valid-values",-624673158));
var input_props = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var options = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),v,new cljs.core.Keyword(null,"value","value",305978217),v], null);
}),values);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var value = (function (){var and__5043__auto__ = attribute;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k);
} else {
return and__5043__auto__;
}
})();
var invalid_QMARK_ = (!(cljs.core.contains_QMARK_(values,value)));
var omit_label_QMARK_ = com.fulcrologic.rad.form.omit_label_QMARK_(form_instance,attribute);
var validation_message = ((invalid_QMARK_)?com.fulcrologic.rad.form.validation_error_message(env,attribute):null);
var field_label = com.fulcrologic.rad.form.field_label(env,attribute);
var top_class = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance,attribute);
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui field";
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),((omit_label_QMARK_)?null:com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_label,((invalid_QMARK_)?((typeof validation_message === 'string')?[" (",validation_message,")"].join(''):validation_message):null)], null),null)),(function (){var G__93334 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only_QMARK_,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"clearable","clearable",943040201),cljs.core.not(required_QMARK_),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,k,v);
})], null),input_props], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__93334) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__93334));
})(),((((omit_label_QMARK_) && (invalid_QMARK_)))?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(validation_message)]):null)], null),null);
});
com.fulcrologic.rad.rendering.semantic_ui.text_field.render_multi_line = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1((function (p__93335){
var map__93336 = p__93335;
var map__93336__$1 = cljs.core.__destructure_map(map__93336);
var props = map__93336__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93336__$1,new cljs.core.Keyword(null,"value","value",305978217));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93336__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));
var onBlur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93336__$1,new cljs.core.Keyword(null,"onBlur","onBlur",229342509));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (evt){
if(cljs.core.truth_(onBlur)){
var G__93337 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onBlur.cljs$core$IFn$_invoke$arity$1 ? onBlur.cljs$core$IFn$_invoke$arity$1(G__93337) : onBlur.call(null,G__93337));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
if(cljs.core.truth_(onChange)){
var G__93338 = com.fulcrologic.fulcro.dom.events.target_value(evt);
return (onChange.cljs$core$IFn$_invoke$arity$1 ? onChange.cljs$core$IFn$_invoke$arity$1(G__93338) : onChange.call(null,G__93338));
} else {
return null;
}
})], 0))], null),null);
}));

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.text_field.js.map
