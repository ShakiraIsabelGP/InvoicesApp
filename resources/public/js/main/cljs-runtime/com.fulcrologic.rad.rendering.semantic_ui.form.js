goog.provide('com.fulcrologic.rad.rendering.semantic_ui.form');
com.fulcrologic.rad.rendering.semantic_ui.form.render_to_many = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_to_many(p__91787,p__91788,options){
var map__91789 = p__91787;
var map__91789__$1 = cljs.core.__destructure_map(map__91789);
var env = map__91789__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91789__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__91790 = p__91788;
var map__91790__$1 = cljs.core.__destructure_map(map__91790);
var attr = map__91790__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91790__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__91791 = com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance)),attr);
var map__91791__$1 = cljs.core.__destructure_map(map__91791);
var add_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91791__$1,new cljs.core.Keyword("semantic-ui","add-position","semantic-ui/add-position",1809901260));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91791__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91791__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068));
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91791__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var can_add_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91791__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-add?","com.fulcrologic.rad.form/can-add?",963248679));
var added_via_upload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91791__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","added-via-upload?","com.fulcrologic.rad.form/added-via-upload?",1378681221));
var ref_container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91791__$1,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ref-container-class","com.fulcrologic.rad.rendering.semantic-ui.form/ref-container-class",-1457979003));
var form_instance_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attr);
var add_QMARK_ = ((read_only_QMARK_)?false:com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_add_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0)));
var delete_QMARK_ = (function (item){
var and__5043__auto__ = (!(read_only_QMARK_));
if(and__5043__auto__){
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_delete_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,item], 0));
} else {
return and__5043__auto__;
}
});
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_instance_props,k);
var title__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__91792 = ui;
if((G__91792 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__91792,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)) : com.fulcrologic.fulcro.components.component_options.call(null,G__91792,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)));
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "";
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,form_instance_props], 0));
var invalid_QMARK_ = com.fulcrologic.rad.form.invalid_attribute_value_QMARK_(env,attr);
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attr);
var validation_message = com.fulcrologic.rad.form.validation_error_message(env,attr);
var add = (cljs.core.truth_((function (){var or__5045__auto__ = (add_QMARK_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return add_QMARK_;
}
})())?(function (){var order = (((add_QMARK_ instanceof cljs.core.Keyword))?add_QMARK_:new cljs.core.Keyword(null,"append","append",-291298229));
if(cljs.core.truth_(com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(added_via_upload_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0)))){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
var new_id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var js_file = cljs.core.first(com.fulcrologic.rad.blob.evt__GT_js_files(evt));
var attributes = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)) : com.fulcrologic.fulcro.components.component_options.call(null,ui,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)));
var id_attr = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,ui,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
var id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id_attr);
var map__91793 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.blob","store","com.fulcrologic.rad.blob/store",662481600),attributes));
var map__91793__$1 = cljs.core.__destructure_map(map__91793);
var sha_attr = map__91793__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91793__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)),k);
var new_entity = com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(ui,cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,new_id,qualified_key,""]));
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(form_instance,ui,new_entity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([order,target], 0));

return com.fulcrologic.rad.blob.upload_file_BANG_(form_instance,sha_attr,js_file,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-ident","file-ident",1455261634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key,new_id], null)], null));
})], null)], null),null);
} else {
var possible_types = (cljs.core.truth_((com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1(ui) : com.fulcrologic.fulcro.components.union_component_QMARK_.call(null,ui)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.query__GT_component,cljs.core.vals(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(ui))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui], null));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,c){
var add_child_BANG_ = (function (_){
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,k,c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403),order], null));
});
var add_label = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(c,com.fulcrologic.rad.form_options.add_label) : com.fulcrologic.fulcro.components.component_options.call(null,c,com.fulcrologic.rad.form_options.add_label)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,add_child_BANG_], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})();
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)], null),((typeof add_label === 'string')?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(add_label))?"labeled":null)], null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),add_child_BANG_], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "plus icon"})]),add_label], null),new cljs.core.Keyword(null,".ui.tiny.icon.button",".ui.tiny.icon.button",-507564510)):add_label)], 0));
}),possible_types);
}
})():null);
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (item){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(ui,item) : com.fulcrologic.fulcro.components.get_ident.call(null,ui,item))));
})], null));
var top_class = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance,attr);
var body_class = (function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui container";
}
})();
if(visible_QMARK_){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),body_class,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$1,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.html_entities.nbsp,com.fulcrologic.fulcro.dom.html_entities.nbsp], null),null),(((((add_position == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),add_position))))?add:null)], null),null),(cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validation_message], null),new cljs.core.Keyword(null,".ui.red.message",".ui.red.message",-1253843510)):null),((cljs.core.seq(items))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(ref_container_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui segments";
}
})()], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (props){
var G__91794 = props;
var G__91795 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037),(cljs.core.truth_(delete_QMARK_)?delete_QMARK_(props):false)], null)], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__91794,G__91795) : ui_factory.call(null,G__91794,G__91795));
}),items)], null),null):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("None.")], null),new cljs.core.Keyword(null,".ui.message",".ui.message",2129177536))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),add_position))?add:null)], null),null);
} else {
return null;
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.render_to_one = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_to_one(p__91796,p__91797,options){
var map__91798 = p__91796;
var map__91798__$1 = cljs.core.__destructure_map(map__91798);
var env = map__91798__$1;
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91798__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91798__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__91799 = p__91797;
var map__91799__$1 = cljs.core.__destructure_map(map__91799);
var attr = map__91799__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91799__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__91800 = com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(options,attr);
var map__91800__$1 = cljs.core.__destructure_map(map__91800);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91800__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var can_add_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91800__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-add?","com.fulcrologic.rad.form/can-add?",963248679));
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91800__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91800__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068));
var ref_container_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91800__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ref-container-class","com.fulcrologic.rad.form/ref-container-class",81506672));
var form_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,k);
var top_class = (function (){var or__5045__auto__ = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance,attr);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})();
if(cljs.core.truth_(props)){
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(ui);
var ChildForm = (cljs.core.truth_((com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1(ui) : com.fulcrologic.fulcro.components.union_component_QMARK_.call(null,ui)))?(com.fulcrologic.fulcro.components.union_child_for_props.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.union_child_for_props.cljs$core$IFn$_invoke$arity$2(ui,props) : com.fulcrologic.fulcro.components.union_child_for_props.call(null,ui,props)):ui);
var title__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__91801 = ChildForm;
if((G__91801 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__91801,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)) : com.fulcrologic.fulcro.components.component_options.call(null,G__91801,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)));
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "";
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,form_props], 0));
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attr);
var invalid_QMARK_ = com.fulcrologic.rad.form.invalid_attribute_value_QMARK_(env,attr);
var validation_message = com.fulcrologic.rad.form.validation_error_message(env,attr);
var std_props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","nested?","com.fulcrologic.rad.form/nested?",1148028911),true,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_delete_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,form_props], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return false;
}
})()], null);
if(visible_QMARK_){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"className","className",-1983287057),top_class,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(ref_container_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0))], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$1], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396)),(cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validation_message], null),new cljs.core.Keyword(null,".ui.red.message",".ui.red.message",-1253843510)):null),(function (){var G__91802 = props;
var G__91803 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,std_props], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__91802,G__91803) : ui_factory.call(null,G__91802,G__91803));
})()], null),null);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = (can_add_QMARK_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_add_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
}
})())){
var possible_forms = (cljs.core.truth_((com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1(ui) : com.fulcrologic.fulcro.components.union_component_QMARK_.call(null,ui)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.query__GT_component,cljs.core.vals(com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(ui))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui], null));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"className","className",-1983287057),top_class,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(ref_container_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0))], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,ui__$1){
var add_child_BANG_ = (function (){
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$3(form_instance,k,ui__$1);
});
var add_label = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(ui__$1,com.fulcrologic.rad.form_options.add_label) : com.fulcrologic.fulcro.components.component_options.call(null,ui__$1,com.fulcrologic.rad.form_options.add_label)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui__$1,add_child_BANG_], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})();
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)], null),((typeof add_label === 'string')?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),add_child_BANG_,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(add_label))?"labeled":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "plus icon"})]),add_label], null),new cljs.core.Keyword(null,".ui.icon.button",".ui.icon.button",-934115019)):add_label)], 0));
}),possible_forms)], null),null);
} else {
return null;
}
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.standard_ref_container = (function com$fulcrologic$rad$rendering$semantic_ui$form$standard_ref_container(env,p__91804,options){
var map__91805 = p__91804;
var map__91805__$1 = cljs.core.__destructure_map(map__91805);
var attr = map__91805__$1;
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91805__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality)){
return com.fulcrologic.rad.rendering.semantic_ui.form.render_to_many(env,attr,options);
} else {
return com.fulcrologic.rad.rendering.semantic_ui.form.render_to_one(env,attr,options);
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.render_single_file = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_single_file(p__91806,p__91807,options){
var map__91808 = p__91806;
var map__91808__$1 = cljs.core.__destructure_map(map__91808);
var env = map__91808__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91808__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__91809 = p__91807;
var map__91809__$1 = cljs.core.__destructure_map(map__91809);
var attr = map__91809__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91809__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__91810 = com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(options,attr);
var map__91810__$1 = cljs.core.__destructure_map(map__91810);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91810__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91810__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var parent = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var form_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,k);
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(ui);
var label = com.fulcrologic.rad.form.field_label(env,attr);
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attr);
var top_class = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance,attr);
var std_props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","nested?","com.fulcrologic.rad.form/nested?",1148028911),true,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037),(cljs.core.truth_(can_delete_QMARK_)?(can_delete_QMARK_.cljs$core$IFn$_invoke$arity$2 ? can_delete_QMARK_.cljs$core$IFn$_invoke$arity$2(parent,props) : can_delete_QMARK_.call(null,parent,props)):false)], null);
if(visible_QMARK_){
if(cljs.core.truth_(props)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "field";
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),null),(function (){var G__91811 = props;
var G__91812 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,std_props], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__91811,G__91812) : ui_factory.call(null,G__91811,G__91812));
})()], null),null);
} else {
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Upload??? (TODO)")], null),null)], null),null);
}
} else {
return null;
}
});

var options__50845__auto___91863 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-key","input-key",566293742),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000000)))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$form$render_ManyFiles(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__91813 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__91813__$1 = cljs.core.__destructure_map(map__91813);
var map__91814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91813__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var map__91814__$1 = cljs.core.__destructure_map(map__91814);
var env = map__91814__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91814__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91814__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var map__91815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91813__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
var map__91815__$1 = cljs.core.__destructure_map(map__91815);
var attr = map__91815__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91815__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91813__$1,new cljs.core.Keyword(null,"options","options",99638489));
var map__91816 = com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(options,attr);
var map__91816__$1 = cljs.core.__destructure_map(map__91816);
var add_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91816__$1,new cljs.core.Keyword("semantic-ui","add-position","semantic-ui/add-position",1809901260));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91816__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91816__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068));
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91816__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var can_add_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91816__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-add?","com.fulcrologic.rad.form/can-add?",963248679));
var sort_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91816__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","sort-children","com.fulcrologic.rad.form/sort-children",-1384515906));
var form_instance_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var read_only_QMARK_ = ((com.fulcrologic.rad.form.read_only_QMARK_(master_form,attr)) || (com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attr)));
var add_QMARK_ = ((read_only_QMARK_)?false:com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_add_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0)));
var delete_QMARK_ = ((read_only_QMARK_)?false:(function (item){
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(can_delete_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,item], 0));
}));
var items = (function (){var G__91817 = (function (){var G__91818 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__91818) : k.call(null,G__91818));
})();
if(cljs.core.truth_(sort_children)){
return (sort_children.cljs$core$IFn$_invoke$arity$1 ? sort_children.cljs$core$IFn$_invoke$arity$1(G__91817) : sort_children.call(null,G__91817));
} else {
return G__91817;
}
})();
var title__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__91819 = ui;
if((G__91819 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__91819,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)) : com.fulcrologic.fulcro.components.component_options.call(null,G__91819,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068)));
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "";
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,form_instance_props], 0));
var upload_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-file-upload"].join('');
var add = (cljs.core.truth_((function (){var or__5045__auto__ = (add_QMARK_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return add_QMARK_;
}
})())?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),upload_id], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "ui plus icon"})]),com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Add File")], null),new cljs.core.Keyword(null,".ui.labeled.green.icon.button",".ui.labeled.green.icon.button",-1442055205)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"key","key",-1516042587),com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"input-key","input-key",566293742)),new cljs.core.Keyword(null,"id","id",-1388402092),upload_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(-1),new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
var new_id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var js_file = cljs.core.first(com.fulcrologic.rad.blob.evt__GT_js_files(evt));
var attributes = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)) : com.fulcrologic.fulcro.components.component_options.call(null,ui,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)));
var id_attr = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,ui,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
var id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id_attr);
var map__91820 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.blob","store","com.fulcrologic.rad.blob/store",662481600),attributes));
var map__91820__$1 = cljs.core.__destructure_map(map__91820);
var sha_attr = map__91820__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91820__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)),k);
var new_entity = com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(ui,cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,new_id,qualified_key,""]));
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic(form_instance,ui,new_entity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),target], 0));

com.fulcrologic.rad.blob.upload_file_BANG_(form_instance,sha_attr,js_file,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-ident","file-ident",1455261634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key,new_id], null)], null));

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-key","input-key",566293742),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000000)))], null));
})], null)], null),null)], null),null):null);
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attr);
var top_class = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance,attr);
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (item){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(ui,item) : com.fulcrologic.fulcro.components.get_ident.call(null,ui,item))));
})], null));
if(visible_QMARK_){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui basic segment";
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$1], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396)),(((((add_position == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),add_position))))?add:null),((cljs.core.seq(items))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (props){
var G__91821 = props;
var G__91822 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),k,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037),(cljs.core.truth_(delete_QMARK_)?com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(delete_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)):false)], null)], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__91821,G__91822) : ui_factory.call(null,G__91821,G__91822));
}),items)], null),new cljs.core.Keyword(null,".ui.very.relaxed.items",".ui.very.relaxed.items",146303503)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro_i18n.i18n.fulcro_trc("there are no files in a list of uploads","No files.")], null),new cljs.core.Keyword(null,".ui.message",".ui.message",2129177536))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),add_position))?add:null)], null),null);
} else {
return null;
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form.ManyFiles !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.form.ManyFiles = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___91863,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.form.ManyFiles,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ManyFiles","com.fulcrologic.rad.rendering.semantic-ui.form/ManyFiles",1193292810),options__50845__auto___91863);
com.fulcrologic.rad.rendering.semantic_ui.form.ui_many_files = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.form.ManyFiles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p__91823){
var map__91824 = p__91823;
var map__91824__$1 = cljs.core.__destructure_map(map__91824);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91824__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
})], null));
com.fulcrologic.rad.rendering.semantic_ui.form.file_ref_container = (function com$fulcrologic$rad$rendering$semantic_ui$form$file_ref_container(env,p__91825,options){
var map__91826 = p__91825;
var map__91826__$1 = cljs.core.__destructure_map(map__91826);
var attr = map__91826__$1;
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91826__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality)){
var G__91827 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr,new cljs.core.Keyword(null,"options","options",99638489),options], null);
return (com.fulcrologic.rad.rendering.semantic_ui.form.ui_many_files.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.form.ui_many_files.cljs$core$IFn$_invoke$arity$1(G__91827) : com.fulcrologic.rad.rendering.semantic_ui.form.ui_many_files.call(null,G__91827));
} else {
return com.fulcrologic.rad.rendering.semantic_ui.form.render_single_file(env,attr,options);
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.render_attribute = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_attribute(env,attr,options){
if(cljs.core.truth_(com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(options,attr))){
var render_ref = (function (){var or__5045__auto__ = com.fulcrologic.rad.form.ref_container_renderer(env,attr);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.rendering.semantic_ui.form.standard_ref_container;
}
})();
return (render_ref.cljs$core$IFn$_invoke$arity$3 ? render_ref.cljs$core$IFn$_invoke$arity$3(env,attr,options) : render_ref.call(null,env,attr,options));
} else {
return com.fulcrologic.rad.form.render_field(env,attr);
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string = new cljs.core.PersistentArrayMap(null, 7, [(1),"one field",(2),"two fields",(3),"three fields",(4),"four fields",(5),"five fields",(6),"six fields",(7),"seven fields"], null);
com.fulcrologic.rad.rendering.semantic_ui.form.attribute_map = cljs.core.memoize((function (attributes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__91828){
var map__91829 = p__91828;
var map__91829__$1 = cljs.core.__destructure_map(map__91829);
var attr = map__91829__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91829__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,qualified_key,attr);
}),cljs.core.PersistentArrayMap.EMPTY,attributes);
}));
com.fulcrologic.rad.rendering.semantic_ui.form.render_layout_STAR_ = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_layout_STAR_(env,options,k__GT_attribute,layout){
if(cljs.core.truth_(goog.DEBUG)){
if(((cljs.core.vector_QMARK_(layout)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,layout)))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.form",null,287,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::form/layout must be a vector of vectors!"], null);
}),null)),null,1098023741,null);
}
} else {
}

try{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var G__91831 = cljs.core.count(row);
return (com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1(G__91831) : com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.call(null,G__91831));
})()], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
var b2__2953__auto__ = k__GT_attribute;
if(cljs.core.truth_(b2__2953__auto__)){
var _ = b2__2953__auto__;
var b2__2953__auto____$1 = (k__GT_attribute.cljs$core$IFn$_invoke$arity$1 ? k__GT_attribute.cljs$core$IFn$_invoke$arity$1(col) : k__GT_attribute.call(null,col));
if(cljs.core.truth_(b2__2953__auto____$1)){
var attr = b2__2953__auto____$1;
return com.fulcrologic.rad.rendering.semantic_ui.form.render_attribute(env,attr,options);
} else {
if(cljs.core.truth_((function (){var G__91832 = options;
var G__91832__$1 = (((G__91832 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232).cljs$core$IFn$_invoke$arity$1(G__91832));
if((G__91832__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__91832__$1,col);
}
})())){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130).cljs$core$IFn$_invoke$arity$1(env),col);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.form",null,299,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Missing attribute (or lookup) for",col], null);
}),null)),null,941148447,null);
}
}
} else {
if(cljs.core.truth_((function (){var G__91833 = options;
var G__91833__$1 = (((G__91833 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232).cljs$core$IFn$_invoke$arity$1(G__91833));
if((G__91833__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__91833__$1,col);
}
})())){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130).cljs$core$IFn$_invoke$arity$1(env),col);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.form",null,299,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Missing attribute (or lookup) for",col], null);
}),null)),null,1743338155,null);
}
}
}),row)], null),null);
}),layout));
}catch (e91830){var _ = e91830;
return null;
}});
com.fulcrologic.rad.rendering.semantic_ui.form.render_layout = (function com$fulcrologic$rad$rendering$semantic_ui$form$render_layout(env,p__91834){
var map__91835 = p__91834;
var map__91835__$1 = cljs.core.__destructure_map(map__91835);
var options = map__91835__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91835__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91835__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","layout","com.fulcrologic.rad.form/layout",-1876574554));
var k__GT_attribute = com.fulcrologic.rad.rendering.semantic_ui.form.attribute_map(attributes);
return com.fulcrologic.rad.rendering.semantic_ui.form.render_layout_STAR_(env,options,k__GT_attribute,layout);
});

var options__50845__auto___91864 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),(0),new cljs.core.Keyword(null,"tab-details","tab-details",2090016060),cljs.core.memoize((function (attributes,tabbed_layout){
var k__GT_attr = com.fulcrologic.rad.rendering.semantic_ui.form.attribute_map(attributes);
var tab_labels = cljs.core.filterv(cljs.core.string_QMARK_,tabbed_layout);
var tab_label__GT_layout = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,tabbed_layout))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"k->attr","k->attr",1606397722),k__GT_attr,new cljs.core.Keyword(null,"tab-labels","tab-labels",501170052),tab_labels,new cljs.core.Keyword(null,"tab-label->layout","tab-label->layout",986482008),tab_label__GT_layout], null);
}))], null);
}catch (e91836){var _ = e91836;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.form",null,323,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot build tabs for tabbed layout. Check your tabbed-layout options for",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.component_name.call(null,this$))], null);
}),null)),null,-1548278061,null);
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$form$render_TabbedLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var env = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__91837 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__91837__$1 = cljs.core.__destructure_map(map__91837);
var options = map__91837__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91837__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var tabbed_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91837__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","tabbed-layout","com.fulcrologic.rad.form/tabbed-layout",-1223697794));
var map__91838 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__91838__$1 = cljs.core.__destructure_map(map__91838);
var tab_details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91838__$1,new cljs.core.Keyword(null,"tab-details","tab-details",2090016060));
var current_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91838__$1,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577));
var map__91839 = (tab_details.cljs$core$IFn$_invoke$arity$2 ? tab_details.cljs$core$IFn$_invoke$arity$2(attributes,tabbed_layout) : tab_details.call(null,attributes,tabbed_layout));
var map__91839__$1 = cljs.core.__destructure_map(map__91839);
var k__GT_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91839__$1,new cljs.core.Keyword(null,"k->attr","k->attr",1606397722));
var tab_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91839__$1,new cljs.core.Keyword(null,"tab-labels","tab-labels",501170052));
var tab_label__GT_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91839__$1,new cljs.core.Keyword(null,"tab-label->layout","tab-label->layout",986482008));
var active_layout = (function (){var G__91840 = current_tab;
var G__91840__$1 = (((G__91840 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(tab_labels,G__91840));
if((G__91840__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tab_label__GT_layout,G__91840__$1);
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_tab)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui pointing menu"}),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,title){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),idx], null));
}),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_tab,idx))?"active":null)], null)], null),title], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}),tab_labels))]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.rendering.semantic_ui.form.render_layout_STAR_(env,options,k__GT_attr,active_layout)], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126))], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form.TabbedLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.form.TabbedLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___91864,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.form.TabbedLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","TabbedLayout","com.fulcrologic.rad.rendering.semantic-ui.form/TabbedLayout",-521087528),options__50845__auto___91864);
com.fulcrologic.rad.rendering.semantic_ui.form.ui_tabbed_layout = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.form.TabbedLayout);
com.fulcrologic.rad.rendering.semantic_ui.form.standard_abandon_modal = (function com$fulcrologic$rad$rendering$semantic_ui$form$standard_abandon_modal(p__91841,open_QMARK_){
var map__91842 = p__91841;
var map__91842__$1 = cljs.core.__destructure_map(map__91842);
var env = map__91842__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91842__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
return com.fulcrologic.semantic_ui.modules.modal.ui_modal.ui_modal(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_], null),com.fulcrologic.semantic_ui.modules.modal.ui_modal_content.ui_modal_content(cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("The form has unsaved changes. Do you wish to abandon the changes or return to editing?")),com.fulcrologic.semantic_ui.modules.modal.ui_modal_actions.ui_modal_actions(cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.clear_route_denied_BANG_.cljs$core$IFn$_invoke$arity$1(form_instance);
})], null),com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Return to Editing")], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.continue_abandoned_route_BANG_.cljs$core$IFn$_invoke$arity$1(form_instance);
})], null),com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Abandon Changes")], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607))));
});

var options__50845__auto___91865 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$form$render_StandardFormContainer(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__91844 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__91844__$1 = cljs.core.__destructure_map(map__91844);
var env = map__91844__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91844__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","props","com.fulcrologic.rad.form/props",278185108));
var computed_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91844__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","computed-props","com.fulcrologic.rad.form/computed-props",-321049616));
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91844__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91844__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var map__91845 = computed_props;
var map__91845__$1 = cljs.core.__destructure_map(map__91845);
var can_delete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91845__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037));
var nested_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(master_form,form_instance);
var read_only_form_QMARK_ = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([master_form], 0));
}
})();
var map__91846 = props;
var map__91846__$1 = cljs.core.__destructure_map(map__91846);
var new_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91846__$1,new cljs.core.Keyword("ui","new?","ui/new?",777962761));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91846__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443));
var invalid_QMARK_ = (cljs.core.truth_(read_only_form_QMARK_)?false:com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1(env));
var errors_QMARK_ = (function (){var or__5045__auto__ = invalid_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.seq(errors);
}
})();
var render_fields = (function (){var or__5045__auto__ = com.fulcrologic.rad.form.form_layout_renderer(env);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.rendering.semantic_ui.form.standard_form_layout_renderer;
}
})();
if(cljs.core.truth_(goog.DEBUG)){
var valid_QMARK__91866 = (cljs.core.truth_(read_only_form_QMARK_)?true:com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$1(env));
var dirty_QMARK__91867 = (cljs.core.truth_(read_only_form_QMARK_)?false:(function (){var or__5045__auto__ = new_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})());
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.rendering.semantic-ui.form",null,372,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_name.call(null,form_instance))," valid? ",valid_QMARK__91866], null);
}),null)),null,-2108533497,null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.rendering.semantic-ui.form",null,373,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form ",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_name.call(null,form_instance))," dirty? ",dirty_QMARK__91867], null);
}),null)),null,1616640883,null);
} else {
}

if(nested_QMARK_){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ref-element-class","com.fulcrologic.rad.rendering.semantic-ui.form/ref-element-class",-268677869)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ref-element-class","com.fulcrologic.rad.rendering.semantic-ui.form/ref-element-class",-268677869))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui segment";
}
})()], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(errors_QMARK_)?"error":null)], null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)))], null),(cljs.core.truth_(can_delete_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(can_delete_QMARK_),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1(env);
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "times icon"})])], null),new cljs.core.Keyword(null,".ui.icon.primary.right.floated.button",".ui.icon.primary.right.floated.button",-1236967318)):null),(render_fields.cljs$core$IFn$_invoke$arity$1 ? render_fields.cljs$core$IFn$_invoke$arity$1(env) : render_fields.call(null,env))], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099))], null),null);
} else {
var map__91847 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__91847__$1 = cljs.core.__destructure_map(map__91847);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91847__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068));
var action_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91847__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","action-buttons","com.fulcrologic.rad.form/action-buttons",1147437342));
var show_header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91847__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","show-header?","com.fulcrologic.rad.form/show-header?",990903813));
var map__91848 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var map__91848__$1 = cljs.core.__destructure_map(map__91848);
var route_denied_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91848__$1,new cljs.core.Keyword("ui","route-denied?","ui/route-denied?",1601001182));
var title__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,props], 0));
var action_buttons__$1 = (cljs.core.truth_(action_buttons)?action_buttons:com.fulcrologic.rad.form.standard_action_buttons);
var show_header_QMARK___$1 = (((!((show_header_QMARK_ == null))))?com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(show_header_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([master_form], 0)):(((!((com.fulcrologic.rad.form_options.show_header_QMARK_.cljs$core$IFn$_invoke$arity$1(computed_props) == null))))?com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_options.show_header_QMARK_.cljs$core$IFn$_invoke$arity$1(computed_props),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([master_form], 0)):true
));
var abandon_modal = com.fulcrologic.rad.form.render_fn(env,new cljs.core.Keyword(null,"async-abandon-modal","async-abandon-modal",1849657096));
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.fn_QMARK_(abandon_modal))?(abandon_modal.cljs$core$IFn$_invoke$arity$2 ? abandon_modal.cljs$core$IFn$_invoke$arity$2(env,route_denied_QMARK_) : abandon_modal.call(null,env,route_denied_QMARK_)):null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance))),new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(form_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.layout_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,com.fulcrologic.rad.semantic_ui_options.layout_class) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,com.fulcrologic.rad.semantic_ui_options.layout_class)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","top-level-class","com.fulcrologic.rad.rendering.semantic-ui.form/top-level-class",-962711221)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","top-level-class","com.fulcrologic.rad.rendering.semantic-ui.form/top-level-class",-962711221))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return "ui container";
}
}
}
})()], null),(cljs.core.truth_(show_header_QMARK___$1)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(form_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.controls_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","controls-class","com.fulcrologic.rad.rendering.semantic-ui.form/controls-class",-1297338254)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","controls-class","com.fulcrologic.rad.rendering.semantic-ui.form/controls-class",-1297338254))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "ui top attached segment";
}
}
})()], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"display": "flex", "justifyContent": "space-between", "flexWrap": "wrap"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"style": ({"wordWrap": "break-word", "maxWidth": "100%"}), "className": "ui header"}),com.fulcrologic.fulcro.components.force_children(title__$1)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"textAlign": "right", "display": "inline", "flexGrow": "1"}), "className": "ui buttons"}),com.fulcrologic.fulcro.components.force_children(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__91843_SHARP_){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$2(master_form,p1__91843_SHARP_);
}),action_buttons__$1))]))])], null),null):null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","form-class","com.fulcrologic.rad.rendering.semantic-ui.form/form-class",-1673203483)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","form-class","com.fulcrologic.rad.rendering.semantic-ui.form/form-class",-1673203483))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui attached form";
}
})(),(cljs.core.truth_(errors_QMARK_)?"error":null)], null)], null),(cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("The form has errors and cannot be saved.")], null),new cljs.core.Keyword(null,".ui.red.message",".ui.red.message",-1253843510)):null),((cljs.core.seq(errors))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__91849){
var map__91850 = p__91849;
var map__91850__$1 = cljs.core.__destructure_map(map__91850);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91850__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "triangle exclamation icon"})]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)], null),new cljs.core.Keyword(null,".content",".content",528321340))], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}),errors)], null),new cljs.core.Keyword(null,".ui.list",".ui.list",1042314487)),(cljs.core.truth_(new_QMARK_)?null:com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.undo_via_load_BANG_(env);
})], null),com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Reload from server")], null),null))], null),new cljs.core.Keyword(null,".content",".content",528321340))], null),new cljs.core.Keyword(null,".ui.red.message",".ui.red.message",-1253843510)):null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(render_fields.cljs$core$IFn$_invoke$arity$1 ? render_fields.cljs$core$IFn$_invoke$arity$1(env) : render_fields.call(null,env))], null),new cljs.core.Keyword(null,".ui.attached.segment",".ui.attached.segment",-1525826681))], null),null)], null),null)], 0));
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.form.StandardFormContainer !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.form.StandardFormContainer = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___91865,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.form.StandardFormContainer,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","StandardFormContainer","com.fulcrologic.rad.rendering.semantic-ui.form/StandardFormContainer",-1722755910),options__50845__auto___91865);
com.fulcrologic.rad.rendering.semantic_ui.form.standard_form_container = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.form.StandardFormContainer);
com.fulcrologic.rad.rendering.semantic_ui.form.standard_form_layout_renderer = (function com$fulcrologic$rad$rendering$semantic_ui$form$standard_form_layout_renderer(p__91851){
var map__91852 = p__91851;
var map__91852__$1 = cljs.core.__destructure_map(map__91852);
var env = map__91852__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91852__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__91853 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__91853__$1 = cljs.core.__destructure_map(map__91853);
var options = map__91853__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91853__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91853__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","layout","com.fulcrologic.rad.form/layout",-1876574554));
var tabbed_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91853__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","tabbed-layout","com.fulcrologic.rad.form/tabbed-layout",-1223697794));
var debug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91853__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","debug?","com.fulcrologic.rad.form/debug?",-2057182574));
var layout__$1 = ((cljs.core.vector_QMARK_(layout))?com.fulcrologic.rad.rendering.semantic_ui.form.render_layout(env,options):((cljs.core.vector_QMARK_(tabbed_layout))?(com.fulcrologic.rad.rendering.semantic_ui.form.ui_tabbed_layout.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.rendering.semantic_ui.form.ui_tabbed_layout.cljs$core$IFn$_invoke$arity$2(env,options) : com.fulcrologic.rad.rendering.semantic_ui.form.ui_tabbed_layout.call(null,env,options)):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (attr){
return com.fulcrologic.rad.rendering.semantic_ui.form.render_attribute(env,attr,options);
}),attributes)
));
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return debug_QMARK_;
} else {
return and__5043__auto__;
}
})())){
return com.fulcrologic.rad.debugging.top_bottom_debugger.cljs$core$IFn$_invoke$arity$3(form_instance,(com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance)),cljs.core.constantly(layout__$1));
} else {
return layout__$1;
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.file_icon_renderer_STAR_ = (function com$fulcrologic$rad$rendering$semantic_ui$form$file_icon_renderer_STAR_(p__91854){
var map__91855 = p__91854;
var map__91855__$1 = cljs.core.__destructure_map(map__91855);
var env = map__91855__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91855__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__91856 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__91856__$1 = cljs.core.__destructure_map(map__91856);
var options = map__91856__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91856__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var attribute = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.blob","store","com.fulcrologic.rad.blob/store",662481600),attributes));
var sha_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
var file_key = com.fulcrologic.rad.blob.filename_key(sha_key);
var url_key = com.fulcrologic.rad.blob.url_key(sha_key);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,file_key,"File");
var dirty_QMARK_ = com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$2(props,sha_key);
var failed_QMARK_ = com.fulcrologic.rad.blob.failed_upload_QMARK_(props,sha_key);
var invalid_QMARK_ = com.fulcrologic.rad.form.invalid_attribute_value_QMARK_(env,attribute);
var pct = com.fulcrologic.rad.blob.upload_percentage(props,sha_key);
var sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,sha_key);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,url_key);
if(com.fulcrologic.rad.blob.uploading_QMARK_(props,sha_key)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sha)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "huge file icon"})]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginLeft": "-10px"}), "className": "ui active red loader"})]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-percent","data-percent",2007758528),pct], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transitionDuration","transitionDuration",-1450020645),"300ms",new cljs.core.Keyword(null,"width","width",-384071477),pct], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "progress"}),""])], null),new cljs.core.Keyword(null,".bar",".bar",-318206488))], null),new cljs.core.Keyword(null,".ui.bottom.attached.blue.progress",".ui.bottom.attached.blue.progress",1726587826))], null),new cljs.core.Keyword(null,".ui.tiny.image",".ui.tiny.image",-1340530978)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),new cljs.core.Keyword(null,".middle.aligned.content",".middle.aligned.content",928614637)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
com.fulcrologic.fulcro.application.abort_BANG_(form_instance,sha);

return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1(env);
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "times icon"})])], null),new cljs.core.Keyword(null,".ui.red.icon.button",".ui.red.icon.button",-24544086))], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
} else {
var G__91858 = new cljs.core.Keyword(null,".item",".item",-1434967496);
var G__91859 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sha),new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?filename=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
if(cljs.core.truth_((function (){var or__5045__auto__ = (!(com.fulcrologic.rad.blob.blob_downloadable_QMARK_(props,sha_key)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return confirm(com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("View/download?"));
}
})())){
return null;
} else {
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.fulcro.dom.events.prevent_default_BANG_(evt);
}
})], null);
var G__91860 = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((failed_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "huge skull crossbones icon"})]):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "huge file icon"})]))], null),new cljs.core.Keyword(null,".ui.tiny.image",".ui.tiny.image",-1340530978));
var G__91861 = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),((failed_QMARK_)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Upload failed. Delete and try again.")),")"].join(''):((dirty_QMARK_)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("unsaved")),")"].join(''):null))].join('')], null),new cljs.core.Keyword(null,".middle.aligned.content",".middle.aligned.content",928614637));
var G__91862 = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

com.fulcrologic.fulcro.dom.events.prevent_default_BANG_(evt);

if(cljs.core.truth_(confirm(com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Permanently Delete File?")))){
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1(env);
} else {
return null;
}
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "times icon"})])], null),new cljs.core.Keyword(null,".ui.red.icon.button",".ui.red.icon.button",-24544086));
var fexpr__91857 = ((dirty_QMARK_)?com.fulcrologic.fulcro.dom.span:com.fulcrologic.fulcro.dom.a);
return (fexpr__91857.cljs$core$IFn$_invoke$arity$5 ? fexpr__91857.cljs$core$IFn$_invoke$arity$5(G__91858,G__91859,G__91860,G__91861,G__91862) : fexpr__91857.call(null,G__91858,G__91859,G__91860,G__91861,G__91862));
}
});
com.fulcrologic.rad.rendering.semantic_ui.form.file_icon_renderer = (function com$fulcrologic$rad$rendering$semantic_ui$form$file_icon_renderer(env){
return com.fulcrologic.rad.rendering.semantic_ui.form.file_icon_renderer_STAR_(env);
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.form.js.map
