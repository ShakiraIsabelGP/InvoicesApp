goog.provide('com.fulcrologic.rad.rendering.semantic_ui.field');
/**
 * Create a general field factory using the given input factory as the function to call to draw an input.
 */
com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory = (function com$fulcrologic$rad$rendering$semantic_ui$field$render_field_factory(var_args){
var G__93176 = arguments.length;
switch (G__93176) {
case 1:
return com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1 = (function (input_factory){
return com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,input_factory);
}));

(com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$2 = (function (addl_props,input_factory){
return (function (p__93177,p__93178){
var map__93179 = p__93177;
var map__93179__$1 = cljs.core.__destructure_map(map__93179);
var env = map__93179__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93179__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__93180 = p__93178;
var map__93180__$1 = cljs.core.__destructure_map(map__93180);
var attribute = map__93180__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93180__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__93181 = env;
var map__93181__$1 = cljs.core.__destructure_map(map__93181);
var form_instance__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93181__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__93182 = attribute;
var map__93182__$1 = cljs.core.__destructure_map(map__93182);
var qualified_key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93182__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var field_label = com.fulcrologic.rad.form.field_label(env,attribute);
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance__$1,attribute);
var omit_label_QMARK_ = com.fulcrologic.rad.form.omit_label_QMARK_(form_instance__$1,attribute);
var value = (function (){var or__5045__auto__ = com.fulcrologic.rad.form.computed_value(env,attribute);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = attribute;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance__$1) : com.fulcrologic.fulcro.components.props.call(null,form_instance__$1)),qualified_key__$1);
} else {
return and__5043__auto__;
}
}
})();
var field_style_config = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var invalid_QMARK_ = com.fulcrologic.rad.form.invalid_attribute_value_QMARK_(env,attribute);
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance__$1,attribute);
var validation_message = com.fulcrologic.rad.form.validation_error_message(env,attribute);
var addl_props__$1 = (function (){var G__93183 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_style_config,addl_props], 0));
if(read_only_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__93183,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"readonly");
} else {
return G__93183;
}
})();
var top_class = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance__$1,attribute);
if(visible_QMARK_){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key__$1),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui field";
}
})(),(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),((omit_label_QMARK_)?null:com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = field_label;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__93184 = qualified_key__$1;
var G__93184__$1 = (((G__93184 == null))?null:cljs.core.name(G__93184));
if((G__93184__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__93184__$1);
}
}
})(),(cljs.core.truth_(invalid_QMARK_)?((typeof validation_message === 'string')?[com.fulcrologic.fulcro.dom.html_entities.nbsp,"(",validation_message,")"].join(''):validation_message):null)], null),null)),(function (){var G__93185 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl_props__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),(function (v){
return com.fulcrologic.rad.form.input_blur_BANG_(env,qualified_key__$1,v);
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key__$1,v);
})], null)], 0));
return (input_factory.cljs$core$IFn$_invoke$arity$1 ? input_factory.cljs$core$IFn$_invoke$arity$1(G__93185) : input_factory.call(null,G__93185));
})(),(cljs.core.truth_((function (){var and__5043__auto__ = invalid_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return omit_label_QMARK_;
} else {
return and__5043__auto__;
}
})())?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(validation_message)]):null)], null),null);
} else {
return null;
}
});
}));

(com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.field.js.map
