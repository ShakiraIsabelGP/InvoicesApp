goog.provide('com.fulcrologic.rad.rendering.semantic_ui.enumerated_field');
com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.enumerated_options = (function com$fulcrologic$rad$rendering$semantic_ui$enumerated_field$enumerated_options(p__93232,p__93233){
var map__93234 = p__93232;
var map__93234__$1 = cljs.core.__destructure_map(map__93234);
var env = map__93234__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93234__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__93235 = p__93233;
var map__93235__$1 = cljs.core.__destructure_map(map__93235);
var attribute = map__93235__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93235__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__93236 = attribute;
var map__93236__$1 = cljs.core.__destructure_map(map__93236);
var enumerated_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93236__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","enumerated-values","com.fulcrologic.rad.attributes/enumerated-values",-1661044356));
var enumeration_labels = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.attributes","enumerated-labels","com.fulcrologic.rad.attributes/enumerated-labels",-2136251655).cljs$core$IFn$_invoke$arity$1(attribute),(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","enumerated-labels","com.fulcrologic.rad.form/enumerated-labels",-1411306194),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","enumerated-labels","com.fulcrologic.rad.form/enumerated-labels",-1411306194),qualified_key))], 0));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),com.fulcrologic.rad.options_util._QMARK__BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(enumeration_labels,k,cljs.core.name(k))),new cljs.core.Keyword(null,"value","value",305978217),k], null);
}),enumerated_values));
});
com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_to_many = (function com$fulcrologic$rad$rendering$semantic_ui$enumerated_field$render_to_many(p__93237,p__93238){
var map__93239 = p__93237;
var map__93239__$1 = cljs.core.__destructure_map(map__93239);
var env = map__93239__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93239__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__93240 = p__93238;
var map__93240__$1 = cljs.core.__destructure_map(map__93240);
var attribute = map__93240__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93240__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var computed_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93240__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-options","com.fulcrologic.rad.attributes/computed-options",-1823032791));
if(com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attribute)){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
var omit_label_QMARK_ = com.fulcrologic.rad.form.omit_label_QMARK_(form_instance,attribute);
var options = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(computed_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.enumerated_options(env,attribute);
}
})();
var top_class = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance,attribute);
var selected_ids = cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui field";
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key)], null),((omit_label_QMARK_)?null:com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form.field_label(env,attribute)], null),null)),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "0"}), "className": "ui middle aligned celled list big"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__93241){
var map__93242 = p__93241;
var map__93242__$1 = cljs.core.__destructure_map(map__93242);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93242__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93242__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked_QMARK_ = cljs.core.contains_QMARK_(selected_ids,value);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "content"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "0"}), "className": "ui toggle checkbox"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
var selection = (((!(checked_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set((function (){var or__5045__auto__ = selected_ids;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})()),value):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected_ids,value));
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,selection);
})], null)], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text], null),null))]))])], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}),options))])], null),null);
} else {
return null;
}
});
com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_to_one = (function com$fulcrologic$rad$rendering$semantic_ui$enumerated_field$render_to_one(p__93244,p__93245){
var map__93246 = p__93244;
var map__93246__$1 = cljs.core.__destructure_map(map__93246);
var env = map__93246__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93246__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__93247 = p__93245;
var map__93247__$1 = cljs.core.__destructure_map(map__93247);
var attribute = map__93247__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93247__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var computed_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93247__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-options","com.fulcrologic.rad.attributes/computed-options",-1823032791));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93247__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330));
if(com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attribute)){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
var invalid_QMARK_ = com.fulcrologic.rad.form.invalid_attribute_value_QMARK_(env,attribute);
var omit_label_QMARK_ = com.fulcrologic.rad.form.omit_label_QMARK_(form_instance,attribute);
var user_props = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var options = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(computed_options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.enumerated_options(env,attribute);
}
})();
var top_class = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance,attribute);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui field";
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),((omit_label_QMARK_)?null:com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.form.field_label(env,attribute)),(cljs.core.truth_(invalid_QMARK_)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Required")),")"].join(''):null)].join('')], null),null)),((read_only_QMARK_)?(function (){var value__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__93243_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__93243_SHARP_));
}),options));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"readonly",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(value__$1)], null)], null),null);
})():(function (){var G__93248 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"clearable","clearable",943040201),cljs.core.not(required_QMARK_),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,v);
})], null),user_props], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__93248) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__93248));
})()),(cljs.core.truth_((function (){var and__5043__auto__ = omit_label_QMARK_;
if(and__5043__auto__){
return invalid_QMARK_;
} else {
return and__5043__auto__;
}
})())?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Required"))]):null)], null),null);
} else {
return null;
}
});
com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_field = (function com$fulcrologic$rad$rendering$semantic_ui$enumerated_field$render_field(env,p__93249){
var map__93250 = p__93249;
var map__93250__$1 = cljs.core.__destructure_map(map__93250);
var attribute = map__93250__$1;
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93250__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325),new cljs.core.Keyword(null,"one","one",935007904));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality)){
return com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_to_many(env,attribute);
} else {
return com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.render_to_one(env,attribute);
}
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.enumerated_field.js.map
