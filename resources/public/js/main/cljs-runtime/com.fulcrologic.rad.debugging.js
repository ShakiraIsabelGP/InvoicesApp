goog.provide('com.fulcrologic.rad.debugging');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.debugging !== 'undefined') && (typeof com.fulcrologic.rad.debugging.form_info_plugins !== 'undefined')){
} else {
com.fulcrologic.rad.debugging.form_info_plugins = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Add a plugin to the form info section of the form debugger. `k` is a keyword, and plugin is a map:
 * 
 *   ```
 *   {:title (fn [ form-props extra] string?)
 * :render (fn [ form-props extra] react-element)}
 *   ```
 * 
 *   The `extra` parameter is a map that has:
 * 
 *   * `:form-instance` - The `this` of the form
 *   * `:key->attribute` - If a RAD form. keyword to attribute map for the form fields
 *   * `:validator` - The form-state validator for the form, if known
 * 
 *   Plugins are rendered in order of their sorted key.
 *   
 */
com.fulcrologic.rad.debugging.add_form_info_plugin_BANG_ = (function com$fulcrologic$rad$debugging$add_form_info_plugin_BANG_(k,plugin){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.rad.debugging.form_info_plugins,cljs.core.assoc,k,plugin);
});
com.fulcrologic.rad.debugging.remove_form_info_plugin_BANG_ = (function com$fulcrologic$rad$debugging$remove_form_info_plugin_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.rad.debugging.form_info_plugins,cljs.core.dissoc,k);
});
com.fulcrologic.rad.debugging.eiframe = (function com$fulcrologic$rad$debugging$eiframe(js_props){
var vec__91672 = com.fulcrologic.fulcro.react.hooks.use_state(null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91672,(0),null);
var set_content_ref_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91672,(1),null);
var head_children = js_props.head;
var body_children = js_props.body;
var props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(js_props.iprops,new cljs.core.Keyword(null,"ref","ref",1289896967),set_content_ref_BANG_);
var head_node = (function (){var G__91675 = ref;
var G__91675__$1 = (((G__91675 == null))?null:G__91675.contentWindow);
var G__91675__$2 = (((G__91675__$1 == null))?null:G__91675__$1.document);
if((G__91675__$2 == null)){
return null;
} else {
return G__91675__$2.head;
}
})();
var body_node = (function (){var G__91676 = ref;
var G__91676__$1 = (((G__91676 == null))?null:G__91676.contentWindow);
var G__91676__$2 = (((G__91676__$1 == null))?null:G__91676__$1.document);
if((G__91676__$2 == null)){
return null;
} else {
return G__91676__$2.body;
}
})();
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic("iframe",cljs.core.clj__GT_js(props),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(head_node)?module$node_modules$react_dom$index.createPortal(cljs.core.clj__GT_js(head_children),head_node):null),(cljs.core.truth_(body_node)?module$node_modules$react_dom$index.createPortal(cljs.core.clj__GT_js(body_children),body_node):null)]], 0));
});
/**
 * Renders the given `head-children` and `body-children` into an iframe's HEAD and BODY elements via portals. Allows
 * `props` is passed directly as the props of the iframe itself.
 */
com.fulcrologic.rad.debugging.ui_embedded_iframe = (function com$fulcrologic$rad$debugging$ui_embedded_iframe(props,head_children,body_children){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.debugging.eiframe,({"iprops": props, "head": head_children, "body": body_children}));
});
com.fulcrologic.rad.debugging.ident__GT_on_screen_forms = (function com$fulcrologic$rad$debugging$ident__GT_on_screen_forms(app_ish,ident){
var on_screen_components = com.fulcrologic.fulcro.components.ident__GT_components(app_ish,ident);
var forms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__91677_SHARP_){
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(p1__91677_SHARP_,new cljs.core.Keyword(null,"form-fields","form-fields",35924568)) : com.fulcrologic.fulcro.components.component_options.call(null,p1__91677_SHARP_,new cljs.core.Keyword(null,"form-fields","form-fields",35924568)));
}),on_screen_components);
return forms;
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.debugging !== 'undefined') && (typeof com.fulcrologic.rad.debugging.FormDiffViewer !== 'undefined')){
} else {
com.fulcrologic.rad.debugging.FormDiffViewer = (function com$fulcrologic$rad$debugging$FormDiffViewer(js_props__50841__auto__){
var render__50842__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.debugging.FormDiffViewer) : com.fulcrologic.fulcro.components.component_options.call(null,com.fulcrologic.rad.debugging.FormDiffViewer)));
var vec__91678 = com.fulcrologic.fulcro.components.use_fulcro(js_props__50841__auto__,com.fulcrologic.rad.debugging.FormDiffViewer);
var this__50843__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91678,(0),null);
var props__50844__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91678,(1),null);
return (render__50842__auto__.cljs$core$IFn$_invoke$arity$2 ? render__50842__auto__.cljs$core$IFn$_invoke$arity$2(this__50843__auto__,props__50844__auto__) : render__50842__auto__.call(null,this__50843__auto__,props__50844__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(com.fulcrologic.rad.debugging.FormDiffViewer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.fulcrologic.rad.debugging","FormDiffViewer","com.fulcrologic.rad.debugging/FormDiffViewer",-835994260),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$debugging$render_FormDiffViewer(this$,props){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__91681 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__91682 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__91683 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__91684 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__91687 = this$;
var G__91688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__91687,G__91688) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__91687,G__91688));
}
})();
var _STAR_shared_STAR__temp_val__91685 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__91689 = this$;
var G__91690 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__91689,G__91690) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__91689,G__91690));
}
})());
var _STAR_parent_STAR__temp_val__91686 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__91684);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__91685);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__91686);

try{var diff = com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2(props,true);
var v = (function (val){
if((val == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["b",({}),"nil"]);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
}
});
if(cljs.core.empty_QMARK_(diff)){
return "No changes";
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["table",({"className": "ui small compact table"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["thead",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tr",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"ident"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"field"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"before"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"after"]))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tbody",({}),com.fulcrologic.fulcro.components.force_children((function (){var iter__5523__auto__ = (function com$fulcrologic$rad$debugging$render_FormDiffViewer_$_iter__91691(s__91692){
return (new cljs.core.LazySeq(null,(function (){
var s__91692__$1 = s__91692;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__91692__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var ident = cljs.core.first(xs__6360__auto__);
var fields = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(diff,ident)));
var rowspan = cljs.core.count(fields);
var first_field = cljs.core.first(fields);
var iterys__5519__auto__ = ((function (s__91692__$1,fields,rowspan,first_field,ident,xs__6360__auto__,temp__5804__auto__,diff,v,_STAR_app_STAR__orig_val__91681,_STAR_shared_STAR__orig_val__91682,_STAR_parent_STAR__orig_val__91683,_STAR_app_STAR__temp_val__91684,_STAR_shared_STAR__temp_val__91685,_STAR_parent_STAR__temp_val__91686){
return (function com$fulcrologic$rad$debugging$render_FormDiffViewer_$_iter__91691_$_iter__91693(s__91694){
return (new cljs.core.LazySeq(null,((function (s__91692__$1,fields,rowspan,first_field,ident,xs__6360__auto__,temp__5804__auto__,diff,v,_STAR_app_STAR__orig_val__91681,_STAR_shared_STAR__orig_val__91682,_STAR_parent_STAR__orig_val__91683,_STAR_app_STAR__temp_val__91684,_STAR_shared_STAR__temp_val__91685,_STAR_parent_STAR__temp_val__91686){
return (function (){
var s__91694__$1 = s__91694;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__91694__$1);
if(temp__5804__auto____$1){
var s__91694__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__91694__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__91694__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__91696 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__91695 = (0);
while(true){
if((i__91695 < size__5522__auto__)){
var field = cljs.core._nth(c__5521__auto__,i__91695);
var map__91697 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(diff,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,field], null));
var map__91697__$1 = cljs.core.__destructure_map(map__91697);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91697__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91697__$1,new cljs.core.Keyword(null,"after","after",594996914));
cljs.core.chunk_append(b__91696,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,first_field))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rowspan], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident)], null),null):null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(field))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(v(before))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(v(after))])], null),null));

var G__91769 = (i__91695 + (1));
i__91695 = G__91769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91696),com$fulcrologic$rad$debugging$render_FormDiffViewer_$_iter__91691_$_iter__91693(cljs.core.chunk_rest(s__91694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91696),null);
}
} else {
var field = cljs.core.first(s__91694__$2);
var map__91698 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(diff,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,field], null));
var map__91698__$1 = cljs.core.__destructure_map(map__91698);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91698__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91698__$1,new cljs.core.Keyword(null,"after","after",594996914));
return cljs.core.cons(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,first_field))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rowspan], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident)], null),null):null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(field))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(v(before))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(v(after))])], null),null),com$fulcrologic$rad$debugging$render_FormDiffViewer_$_iter__91691_$_iter__91693(cljs.core.rest(s__91694__$2)));
}
} else {
return null;
}
break;
}
});})(s__91692__$1,fields,rowspan,first_field,ident,xs__6360__auto__,temp__5804__auto__,diff,v,_STAR_app_STAR__orig_val__91681,_STAR_shared_STAR__orig_val__91682,_STAR_parent_STAR__orig_val__91683,_STAR_app_STAR__temp_val__91684,_STAR_shared_STAR__temp_val__91685,_STAR_parent_STAR__temp_val__91686))
,null,null));
});})(s__91692__$1,fields,rowspan,first_field,ident,xs__6360__auto__,temp__5804__auto__,diff,v,_STAR_app_STAR__orig_val__91681,_STAR_shared_STAR__orig_val__91682,_STAR_parent_STAR__orig_val__91683,_STAR_app_STAR__temp_val__91684,_STAR_shared_STAR__temp_val__91685,_STAR_parent_STAR__temp_val__91686))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(fields));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,com$fulcrologic$rad$debugging$render_FormDiffViewer_$_iter__91691(cljs.core.rest(s__91692__$1)));
} else {
var G__91770 = cljs.core.rest(s__91692__$1);
s__91692__$1 = G__91770;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.keys(diff));
})())]))]);
}
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__91683);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__91682);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__91681);
}}));
})], null));
com.fulcrologic.rad.debugging.ui_form_diff_viewer = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.debugging.FormDiffViewer);
com.fulcrologic.rad.debugging.add_form_info_plugin_BANG_(new cljs.core.Keyword("com.fulcrologic.rad.debugging","save-delta","com.fulcrologic.rad.debugging/save-delta",-181208871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Form Save Delta",new cljs.core.Keyword(null,"render","render",-1408033454),(function (props,cprops){
return (com.fulcrologic.rad.debugging.ui_form_diff_viewer.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.debugging.ui_form_diff_viewer.cljs$core$IFn$_invoke$arity$2(props,cprops) : com.fulcrologic.rad.debugging.ui_form_diff_viewer.call(null,props,cprops));
})], null));
/**
 * Gets all of the attributes in use by a form and its subforms.
 */
com.fulcrologic.rad.debugging.form_attributes = (function com$fulcrologic$rad$debugging$form_attributes(form){
var form_options = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form) : com.fulcrologic.fulcro.components.component_options.call(null,form));
var base_attributes = com.fulcrologic.rad.form_options.attributes.cljs$core$IFn$_invoke$arity$1(form_options);
var subform_map = (com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$1(form_options) : com.fulcrologic.rad.form.subform_options.call(null,form_options));
var subforms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.form_options.ui,cljs.core.vals(subform_map));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(base_attributes,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__91699_SHARP_){
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(p1__91699_SHARP_,com.fulcrologic.rad.form_options.attributes) : com.fulcrologic.fulcro.components.component_options.call(null,p1__91699_SHARP_,com.fulcrologic.rad.form_options.attributes));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subforms], 0)));
});

var options__50845__auto___91771 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$debugging$render_RADAttributeInfo(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__91700 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__91700__$1 = cljs.core.__destructure_map(map__91700);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91700__$1,new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829));
var all_attributes = com.fulcrologic.rad.debugging.form_attributes(form_instance);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["table",({"className": "ui small compact table"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["thead",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tr",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Key"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Schema"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({"className": "center aligned"}),"Type"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Style"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Card."])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Req?"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Validator"]))]))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tbody",({}),com.fulcrologic.fulcro.components.force_children((function (){var iter__5523__auto__ = (function com$fulcrologic$rad$debugging$render_RADAttributeInfo_$_iter__91701(s__91702){
return (new cljs.core.LazySeq(null,(function (){
var s__91702__$1 = s__91702;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__91702__$1);
if(temp__5804__auto__){
var s__91702__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__91702__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__91702__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__91704 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__91703 = (0);
while(true){
if((i__91703 < size__5522__auto__)){
var map__91705 = cljs.core._nth(c__5521__auto__,i__91703);
var map__91705__$1 = cljs.core.__destructure_map(map__91705);
var attr = map__91705__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91705__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91705__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91705__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91705__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","valid?","com.fulcrologic.rad.attributes/valid?",237057525));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91705__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","schema","com.fulcrologic.rad.attributes/schema",-746639567));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91705__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91705__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","style","com.fulcrologic.rad.attributes/style",816608992));
var required_QMARK___$1 = (cljs.core.truth_(required_QMARK_)?"Y":"N");
var type_description = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"ref","ref",1289896967)))?["ref => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__91707 = type;
if((G__91707 == null)){
return null;
} else {
return cljs.core.name(G__91707);
}
})()));
var card = ((com.fulcrologic.rad.attributes.to_many_QMARK_(attr))?"Many":"One");
var valid = ((cljs.core.fn_QMARK_(valid_QMARK_))?"Local":null);
cljs.core.chunk_append(b__91704,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(schema)?cljs.core.name(schema):"--"))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"className": "center aligned"}),com.fulcrologic.fulcro.components.force_children(type_description)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = style;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "default";
}
})()))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(card)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(required_QMARK___$1)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid))])], null),null));

var G__91772 = (i__91703 + (1));
i__91703 = G__91772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91704),com$fulcrologic$rad$debugging$render_RADAttributeInfo_$_iter__91701(cljs.core.chunk_rest(s__91702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91704),null);
}
} else {
var map__91708 = cljs.core.first(s__91702__$2);
var map__91708__$1 = cljs.core.__destructure_map(map__91708);
var attr = map__91708__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91708__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91708__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91708__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91708__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","valid?","com.fulcrologic.rad.attributes/valid?",237057525));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91708__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","schema","com.fulcrologic.rad.attributes/schema",-746639567));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91708__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91708__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","style","com.fulcrologic.rad.attributes/style",816608992));
var required_QMARK___$1 = (cljs.core.truth_(required_QMARK_)?"Y":"N");
var type_description = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"ref","ref",1289896967)))?["ref => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__91710 = type;
if((G__91710 == null)){
return null;
} else {
return cljs.core.name(G__91710);
}
})()));
var card = ((com.fulcrologic.rad.attributes.to_many_QMARK_(attr))?"Many":"One");
var valid = ((cljs.core.fn_QMARK_(valid_QMARK_))?"Local":null);
return cljs.core.cons(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(schema)?cljs.core.name(schema):"--"))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"className": "center aligned"}),com.fulcrologic.fulcro.components.force_children(type_description)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = style;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "default";
}
})()))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(card)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(required_QMARK___$1)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(valid))])], null),null),com$fulcrologic$rad$debugging$render_RADAttributeInfo_$_iter__91701(cljs.core.rest(s__91702__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.attributes_options.qualified_key,all_attributes));
})())]))]);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.debugging !== 'undefined') && (typeof com.fulcrologic.rad.debugging.RADAttributeInfo !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.debugging.RADAttributeInfo = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___91771,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.debugging.RADAttributeInfo,new cljs.core.Keyword("com.fulcrologic.rad.debugging","RADAttributeInfo","com.fulcrologic.rad.debugging/RADAttributeInfo",-2111927317),options__50845__auto___91771);
com.fulcrologic.rad.debugging.ui_rad_attribute_info = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.debugging.RADAttributeInfo);
com.fulcrologic.rad.debugging.add_form_info_plugin_BANG_(new cljs.core.Keyword("com.fulcrologic.rad.debugging","rad-info","com.fulcrologic.rad.debugging/rad-info",-163577905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"RAD Attribute Field Info",new cljs.core.Keyword(null,"render","render",-1408033454),(function (props,cprops){
return (com.fulcrologic.rad.debugging.ui_rad_attribute_info.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.debugging.ui_rad_attribute_info.cljs$core$IFn$_invoke$arity$2(props,cprops) : com.fulcrologic.rad.debugging.ui_rad_attribute_info.call(null,props,cprops));
})], null));
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.debugging !== 'undefined') && (typeof com.fulcrologic.rad.debugging.FormInfo !== 'undefined')){
} else {
com.fulcrologic.rad.debugging.FormInfo = (function com$fulcrologic$rad$debugging$FormInfo(js_props__50841__auto__){
var render__50842__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.debugging.FormInfo) : com.fulcrologic.fulcro.components.component_options.call(null,com.fulcrologic.rad.debugging.FormInfo)));
var vec__91714 = com.fulcrologic.fulcro.components.use_fulcro(js_props__50841__auto__,com.fulcrologic.rad.debugging.FormInfo);
var this__50843__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91714,(0),null);
var props__50844__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91714,(1),null);
return (render__50842__auto__.cljs$core$IFn$_invoke$arity$2 ? render__50842__auto__.cljs$core$IFn$_invoke$arity$2(this__50843__auto__,props__50844__auto__) : render__50842__auto__.call(null,this__50843__auto__,props__50844__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(com.fulcrologic.rad.debugging.FormInfo,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.fulcrologic.rad.debugging","FormInfo","com.fulcrologic.rad.debugging/FormInfo",395496166),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$debugging$render_FormInfo(this$,form_props){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__91717 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__91718 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__91719 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__91720 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__91723 = this$;
var G__91724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__91723,G__91724) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__91723,G__91724));
}
})();
var _STAR_shared_STAR__temp_val__91721 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__91725 = this$;
var G__91726 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__91725,G__91726) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__91725,G__91726));
}
})());
var _STAR_parent_STAR__temp_val__91722 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__91720);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__91721);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__91722);

try{var map__91727 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__91727__$1 = cljs.core.__destructure_map(map__91727);
var cprops = map__91727__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91727__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91727__$1,new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829));
var relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91727__$1,new cljs.core.Keyword(null,"relation","relation",-693437925));
var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91727__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var map__91728 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854).cljs$core$IFn$_invoke$arity$1(form_props);
var map__91728__$1 = cljs.core.__destructure_map(map__91728);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var pristine_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","pristine-state","com.fulcrologic.fulcro.algorithms.form-state/pristine-state",1623330282));
var subforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","subforms","com.fulcrologic.fulcro.algorithms.form-state/subforms",-714949705));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
var state_map = com.fulcrologic.fulcro.application.current_state(this$);
var key__GT_attribute = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","key->attribute","com.fulcrologic.rad.form/key->attribute",2109187333)) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","key->attribute","com.fulcrologic.rad.form/key->attribute",2109187333)));
var vec__91729 = com.fulcrologic.fulcro.react.hooks.use_state((function (){
return cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.debugging","current-state","com.fulcrologic.rad.debugging/current-state",1993966997)], 0));
}));
var open_segments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91729,(0),null);
var set_open_segments_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91729,(1),null);
var expanded_QMARK_ = (function (k){
return cljs.core.contains_QMARK_(open_segments,k);
});
var toggle_BANG_ = (function (k){
var G__91732 = ((expanded_QMARK_(k))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(open_segments,k):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(open_segments,k));
return (set_open_segments_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_open_segments_BANG_.cljs$core$IFn$_invoke$arity$1(G__91732) : set_open_segments_BANG_.call(null,G__91732));
});
if(cljs.core.seq(fields)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_name.call(null,form_instance))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(relation)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui styled fluid accordion"}),com.fulcrologic.fulcro.components.force_children((function (){var expanded_QMARK___$1 = expanded_QMARK_(new cljs.core.Keyword("com.fulcrologic.rad.debugging","form-state","com.fulcrologic.rad.debugging/form-state",-963222346));
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return toggle_BANG_(new cljs.core.Keyword("com.fulcrologic.rad.debugging","form-state","com.fulcrologic.rad.debugging/form-state",-963222346));
}),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded_QMARK___$1)?"active":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "dropdown icon"})]),"Current State"], null),new cljs.core.Keyword(null,".title",".title",-416997657)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded_QMARK___$1)?"active":null)], null)], null),((expanded_QMARK___$1)?com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,((cljs.core.seq(fields))?com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({"className": "ui header"}),"Fields"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["thead",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tr",({}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Field"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Original"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Current"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Complete?"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"V?"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["th",({}),"Notes"]))]))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tbody",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,k){
var subform_QMARK_ = cljs.core.contains_QMARK_(subforms,k);
var valid_ident_QMARK_ = (function (p1__91713_SHARP_){
return ((cljs.core.vector_QMARK_(p1__91713_SHARP_)) && ((((cljs.core.first(p1__91713_SHARP_) instanceof cljs.core.Keyword)) && ((!((cljs.core.second(p1__91713_SHARP_) == null)))))));
});
var current_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(id,k));
var pristine_refs = ((subform_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(pristine_state,k):null);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(key__GT_attribute,k);
var expected_to_many_QMARK_ = (function (){var G__91733 = attr;
if((G__91733 == null)){
return null;
} else {
return com.fulcrologic.rad.attributes.to_many_QMARK_(G__91733);
}
})();
var to_many_QMARK_ = cljs.core.boolean$(((subform_QMARK_) && (((cljs.core.every_QMARK_(valid_ident_QMARK_,current_value)) || (cljs.core.every_QMARK_(valid_ident_QMARK_,pristine_refs))))));
var bad_cardinality_QMARK_ = ((cljs.core.boolean_QMARK_(expected_to_many_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected_to_many_QMARK_,to_many_QMARK_)));
var bad_idents_QMARK_ = (function (refs){
if(to_many_QMARK_){
return (!(cljs.core.every_QMARK_(valid_ident_QMARK_,refs)));
} else {
var and__5043__auto__ = refs;
if(cljs.core.truth_(and__5043__auto__)){
return (!(valid_ident_QMARK_(refs)));
} else {
return and__5043__auto__;
}
}
});
var current_error_QMARK_ = (function (){var and__5043__auto__ = subform_QMARK_;
if(and__5043__auto__){
return bad_idents_QMARK_(current_value);
} else {
return and__5043__auto__;
}
})();
var pristine_error_QMARK_ = (function (){var and__5043__auto__ = subform_QMARK_;
if(and__5043__auto__){
return bad_idents_QMARK_(pristine_refs);
} else {
return and__5043__auto__;
}
})();
var validation_code = (cljs.core.truth_(validator)?(validator.cljs$core$IFn$_invoke$arity$2 ? validator.cljs$core$IFn$_invoke$arity$2(form_props,k) : validator.call(null,form_props,k)):"--");
var invalid_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),validation_code);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5045__auto__ = pristine_error_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return bad_cardinality_QMARK_;
}
})())?"error":null)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pristine_state,k))], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5045__auto__ = invalid_QMARK_;
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = current_error_QMARK_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return bad_cardinality_QMARK_;
}
}
})())?"error":null)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_value)], null),null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children(((cljs.core.contains_QMARK_(complete_QMARK_,k))?"Y":"N"))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(validator)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(validation_code):"--"))]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({}),com.fulcrologic.fulcro.components.force_children((function (){var G__91734 = cljs.core.PersistentVector.EMPTY;
var G__91734__$1 = (((attr == null))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91734,com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"key": "noattr"}),"Could not find the RAD attribute definition on the form."])):G__91734);
var G__91734__$2 = ((bad_cardinality_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91734__$1,com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"key": "badcard"}),"The cardinality of the attribute does not match data."])):G__91734__$1);
if(cljs.core.truth_((function (){var or__5045__auto__ = current_error_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return pristine_error_QMARK_;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__91734__$2,com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({"key": "badidents"}),"One or more of the idents are invalid"]));
} else {
return G__91734__$2;
}
})())])], null),null);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fields,cljs.core.keys(subforms))))])], null),new cljs.core.Keyword(null,".ui.small.compact.striped.table",".ui.small.compact.striped.table",-44750077))], 0)):com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"Picker (or hidden)"])], 0))),((cljs.core.seq(subforms))?com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h4",({}),"Subforms"]),(function (){var iter__5523__auto__ = (function com$fulcrologic$rad$debugging$render_FormInfo_$_iter__91735(s__91736){
return (new cljs.core.LazySeq(null,(function (){
var s__91736__$1 = s__91736;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__91736__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var subform = cljs.core.first(xs__6360__auto__);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,subform);
var forms = ((cljs.core.map_QMARK_(value))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null):((cljs.core.vector_QMARK_(value))?value:null
));
var iterys__5519__auto__ = ((function (s__91736__$1,value,forms,subform,xs__6360__auto__,temp__5804__auto__,expanded_QMARK___$1,map__91728,map__91728__$1,id,fields,pristine_state,subforms,complete_QMARK_,state_map,key__GT_attribute,vec__91729,open_segments,set_open_segments_BANG_,expanded_QMARK_,toggle_BANG_,map__91727,map__91727__$1,cprops,validator,form_instance,relation,visited,_STAR_app_STAR__orig_val__91717,_STAR_shared_STAR__orig_val__91718,_STAR_parent_STAR__orig_val__91719,_STAR_app_STAR__temp_val__91720,_STAR_shared_STAR__temp_val__91721,_STAR_parent_STAR__temp_val__91722){
return (function com$fulcrologic$rad$debugging$render_FormInfo_$_iter__91735_$_iter__91737(s__91738){
return (new cljs.core.LazySeq(null,((function (s__91736__$1,value,forms,subform,xs__6360__auto__,temp__5804__auto__,expanded_QMARK___$1,map__91728,map__91728__$1,id,fields,pristine_state,subforms,complete_QMARK_,state_map,key__GT_attribute,vec__91729,open_segments,set_open_segments_BANG_,expanded_QMARK_,toggle_BANG_,map__91727,map__91727__$1,cprops,validator,form_instance,relation,visited,_STAR_app_STAR__orig_val__91717,_STAR_shared_STAR__orig_val__91718,_STAR_parent_STAR__orig_val__91719,_STAR_app_STAR__temp_val__91720,_STAR_shared_STAR__temp_val__91721,_STAR_parent_STAR__temp_val__91722){
return (function (){
var s__91738__$1 = s__91738;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__91738__$1);
if(temp__5804__auto____$1){
var s__91738__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__91738__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__91738__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__91740 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__91739 = (0);
while(true){
if((i__91739 < size__5522__auto__)){
var subform_props = cljs.core._nth(c__5521__auto__,i__91739);
var ident = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854).cljs$core$IFn$_invoke$arity$1(subform_props));
var form_instance__$1 = com.fulcrologic.fulcro.components.ident__GT_any(this$,ident);
if((!(cljs.core.contains_QMARK_(visited,ident)))){
cljs.core.chunk_append(b__91740,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = ident;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.hash(subform_props);
}
})())], null),(function (){var G__91741 = subform_props;
var G__91742 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cprops,new cljs.core.Keyword(null,"relation","relation",-693437925),subform,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance__$1], 0)),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.conj,subform_props);
return (com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2(G__91741,G__91742) : com.fulcrologic.rad.debugging.ui_form_info.call(null,G__91741,G__91742));
})()], null),null));

var G__91779 = (i__91739 + (1));
i__91739 = G__91779;
continue;
} else {
var G__91780 = (i__91739 + (1));
i__91739 = G__91780;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91740),com$fulcrologic$rad$debugging$render_FormInfo_$_iter__91735_$_iter__91737(cljs.core.chunk_rest(s__91738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91740),null);
}
} else {
var subform_props = cljs.core.first(s__91738__$2);
var ident = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","id","com.fulcrologic.fulcro.algorithms.form-state/id",476357965).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","config","com.fulcrologic.fulcro.algorithms.form-state/config",35807854).cljs$core$IFn$_invoke$arity$1(subform_props));
var form_instance__$1 = com.fulcrologic.fulcro.components.ident__GT_any(this$,ident);
if((!(cljs.core.contains_QMARK_(visited,ident)))){
return cljs.core.cons(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = ident;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.hash(subform_props);
}
})())], null),(function (){var G__91743 = subform_props;
var G__91744 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cprops,new cljs.core.Keyword(null,"relation","relation",-693437925),subform,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance__$1], 0)),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.conj,subform_props);
return (com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2(G__91743,G__91744) : com.fulcrologic.rad.debugging.ui_form_info.call(null,G__91743,G__91744));
})()], null),null),com$fulcrologic$rad$debugging$render_FormInfo_$_iter__91735_$_iter__91737(cljs.core.rest(s__91738__$2)));
} else {
var G__91781 = cljs.core.rest(s__91738__$2);
s__91738__$1 = G__91781;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__91736__$1,value,forms,subform,xs__6360__auto__,temp__5804__auto__,expanded_QMARK___$1,map__91728,map__91728__$1,id,fields,pristine_state,subforms,complete_QMARK_,state_map,key__GT_attribute,vec__91729,open_segments,set_open_segments_BANG_,expanded_QMARK_,toggle_BANG_,map__91727,map__91727__$1,cprops,validator,form_instance,relation,visited,_STAR_app_STAR__orig_val__91717,_STAR_shared_STAR__orig_val__91718,_STAR_parent_STAR__orig_val__91719,_STAR_app_STAR__temp_val__91720,_STAR_shared_STAR__temp_val__91721,_STAR_parent_STAR__temp_val__91722))
,null,null));
});})(s__91736__$1,value,forms,subform,xs__6360__auto__,temp__5804__auto__,expanded_QMARK___$1,map__91728,map__91728__$1,id,fields,pristine_state,subforms,complete_QMARK_,state_map,key__GT_attribute,vec__91729,open_segments,set_open_segments_BANG_,expanded_QMARK_,toggle_BANG_,map__91727,map__91727__$1,cprops,validator,form_instance,relation,visited,_STAR_app_STAR__orig_val__91717,_STAR_shared_STAR__orig_val__91718,_STAR_parent_STAR__orig_val__91719,_STAR_app_STAR__temp_val__91720,_STAR_shared_STAR__temp_val__91721,_STAR_parent_STAR__temp_val__91722))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(forms));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,com$fulcrologic$rad$debugging$render_FormInfo_$_iter__91735(cljs.core.rest(s__91736__$1)));
} else {
var G__91782 = cljs.core.rest(s__91736__$1);
s__91736__$1 = G__91782;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(subforms)));
})()], 0)):null)], 0)):null)], null),new cljs.core.Keyword(null,".content",".content",528321340))], 0));
})()),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(relation)?null:(function (){var iter__5523__auto__ = (function com$fulcrologic$rad$debugging$render_FormInfo_$_iter__91745(s__91746){
return (new cljs.core.LazySeq(null,(function (){
var s__91746__$1 = s__91746;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__91746__$1);
if(temp__5804__auto__){
var s__91746__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__91746__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__91746__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__91748 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__91747 = (0);
while(true){
if((i__91747 < size__5522__auto__)){
var plugin_key = cljs.core._nth(c__5521__auto__,i__91747);
var map__91749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.rad.debugging.form_info_plugins),plugin_key);
var map__91749__$1 = cljs.core.__destructure_map(map__91749);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91749__$1,new cljs.core.Keyword(null,"title","title",636505583));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91749__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var expanded_QMARK___$1 = expanded_QMARK_(plugin_key);
cljs.core.chunk_append(b__91748,com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_key)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__91747,map__91749,map__91749__$1,title,render,expanded_QMARK___$1,plugin_key,c__5521__auto__,size__5522__auto__,b__91748,s__91746__$2,temp__5804__auto__,map__91728,map__91728__$1,id,fields,pristine_state,subforms,complete_QMARK_,state_map,key__GT_attribute,vec__91729,open_segments,set_open_segments_BANG_,expanded_QMARK_,toggle_BANG_,map__91727,map__91727__$1,cprops,validator,form_instance,relation,visited,_STAR_app_STAR__orig_val__91717,_STAR_shared_STAR__orig_val__91718,_STAR_parent_STAR__orig_val__91719,_STAR_app_STAR__temp_val__91720,_STAR_shared_STAR__temp_val__91721,_STAR_parent_STAR__temp_val__91722){
return (function (){
return toggle_BANG_(plugin_key);
});})(i__91747,map__91749,map__91749__$1,title,render,expanded_QMARK___$1,plugin_key,c__5521__auto__,size__5522__auto__,b__91748,s__91746__$2,temp__5804__auto__,map__91728,map__91728__$1,id,fields,pristine_state,subforms,complete_QMARK_,state_map,key__GT_attribute,vec__91729,open_segments,set_open_segments_BANG_,expanded_QMARK_,toggle_BANG_,map__91727,map__91727__$1,cprops,validator,form_instance,relation,visited,_STAR_app_STAR__orig_val__91717,_STAR_shared_STAR__orig_val__91718,_STAR_parent_STAR__orig_val__91719,_STAR_app_STAR__temp_val__91720,_STAR_shared_STAR__temp_val__91721,_STAR_parent_STAR__temp_val__91722))
,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded_QMARK___$1)?"active":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "dropdown icon"})]),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)], null),new cljs.core.Keyword(null,".title",".title",-416997657)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded_QMARK___$1)?"active":null)], null)], null),(cljs.core.truth_((function (){var and__5043__auto__ = expanded_QMARK___$1;
if(and__5043__auto__){
return render;
} else {
return and__5043__auto__;
}
})())?(render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(form_props,cprops) : render.call(null,form_props,cprops)):null)], null),new cljs.core.Keyword(null,".content",".content",528321340))], 0)));

var G__91783 = (i__91747 + (1));
i__91747 = G__91783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__91748),com$fulcrologic$rad$debugging$render_FormInfo_$_iter__91745(cljs.core.chunk_rest(s__91746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__91748),null);
}
} else {
var plugin_key = cljs.core.first(s__91746__$2);
var map__91750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.fulcrologic.rad.debugging.form_info_plugins),plugin_key);
var map__91750__$1 = cljs.core.__destructure_map(map__91750);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91750__$1,new cljs.core.Keyword(null,"title","title",636505583));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91750__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var expanded_QMARK___$1 = expanded_QMARK_(plugin_key);
return cljs.core.cons(com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_key)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__91750,map__91750__$1,title,render,expanded_QMARK___$1,plugin_key,s__91746__$2,temp__5804__auto__,map__91728,map__91728__$1,id,fields,pristine_state,subforms,complete_QMARK_,state_map,key__GT_attribute,vec__91729,open_segments,set_open_segments_BANG_,expanded_QMARK_,toggle_BANG_,map__91727,map__91727__$1,cprops,validator,form_instance,relation,visited,_STAR_app_STAR__orig_val__91717,_STAR_shared_STAR__orig_val__91718,_STAR_parent_STAR__orig_val__91719,_STAR_app_STAR__temp_val__91720,_STAR_shared_STAR__temp_val__91721,_STAR_parent_STAR__temp_val__91722){
return (function (){
return toggle_BANG_(plugin_key);
});})(map__91750,map__91750__$1,title,render,expanded_QMARK___$1,plugin_key,s__91746__$2,temp__5804__auto__,map__91728,map__91728__$1,id,fields,pristine_state,subforms,complete_QMARK_,state_map,key__GT_attribute,vec__91729,open_segments,set_open_segments_BANG_,expanded_QMARK_,toggle_BANG_,map__91727,map__91727__$1,cprops,validator,form_instance,relation,visited,_STAR_app_STAR__orig_val__91717,_STAR_shared_STAR__orig_val__91718,_STAR_parent_STAR__orig_val__91719,_STAR_app_STAR__temp_val__91720,_STAR_shared_STAR__temp_val__91721,_STAR_parent_STAR__temp_val__91722))
,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded_QMARK___$1)?"active":null)], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "dropdown icon"})]),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)], null),new cljs.core.Keyword(null,".title",".title",-416997657)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded_QMARK___$1)?"active":null)], null)], null),(cljs.core.truth_((function (){var and__5043__auto__ = expanded_QMARK___$1;
if(and__5043__auto__){
return render;
} else {
return and__5043__auto__;
}
})())?(render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(form_props,cprops) : render.call(null,form_props,cprops)):null)], null),new cljs.core.Keyword(null,".content",".content",528321340))], 0)),com$fulcrologic$rad$debugging$render_FormInfo_$_iter__91745(cljs.core.rest(s__91746__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(com.fulcrologic.rad.debugging.form_info_plugins))));
})()))]))]);
} else {
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return relation;
}
})())," is a picker or is not visible as a subform"].join('')], null),null);
}
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__91719);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__91718);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__91717);
}}));
})], null));
/**
 * 
 *   [props {:keys [form-instance validator]}]
 * 
 *   The UI for the form debugging information. Can be used directly.
 * 
 *   * `props` should be the props of the form in question
 * 
 *   The additional options map:
 *   * `form-instance` (REQURIED) - the `this` of the form.
 *   * `validator` (OPTIONAL) - the validator for the fields. If not supplied then the validation
 *   information will be inaccurate.
 */
com.fulcrologic.rad.debugging.ui_form_info = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.debugging.FormInfo);

var options__50845__auto___91784 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$debugging$render_FormDebugContainer(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__91751 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__91751__$1 = cljs.core.__destructure_map(map__91751);
var options = map__91751__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91751__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91751__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91751__$1,new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91751__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var form_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
return com.fulcrologic.rad.debugging.ui_embedded_iframe(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__5045__auto__ = width;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})()], null)], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["link",({"href": "https://cdn.jsdelivr.net/npm/fomantic-ui@2.7.8/dist/semantic.min.css", "rel": "stylesheet"})]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"backgroundColor": "rgb(235,245,250)"}), "className": "ui segment"}),com.fulcrologic.fulcro.components.force_children((com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2(form_props,options) : com.fulcrologic.rad.debugging.ui_form_info.call(null,form_props,options)))]));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.debugging !== 'undefined') && (typeof com.fulcrologic.rad.debugging.FormDebugContainer !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.debugging.FormDebugContainer = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___91784,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.debugging.FormDebugContainer,new cljs.core.Keyword("com.fulcrologic.rad.debugging","FormDebugContainer","com.fulcrologic.rad.debugging/FormDebugContainer",-288711190),options__50845__auto___91784);
com.fulcrologic.rad.debugging.ui_form_debug_container = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.debugging.FormDebugContainer);
/**
 * Render a debug UI for a form (RAD or otherwise). This embeds an iframe with semantic UI CSS so
 * that the debugger looks good independent of your page's CSS; however, if you are using SUI, then
 * you may find it easier to place/format the info by just using `ui-form-info` directly.
 */
com.fulcrologic.rad.debugging.debugger$ = (function com$fulcrologic$rad$debugging$debugger(form_instance){
var validator = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,com.fulcrologic.rad.form_options.validator) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,com.fulcrologic.rad.form_options.validator));
var G__91752 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance,new cljs.core.Keyword(null,"validator","validator",-1966190681),validator], null);
return (com.fulcrologic.rad.debugging.ui_form_debug_container.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.debugging.ui_form_debug_container.cljs$core$IFn$_invoke$arity$1(G__91752) : com.fulcrologic.rad.debugging.ui_form_debug_container.call(null,G__91752));
});
/**
 * Use as the only item in the body of a RAD form. Will render the form first, and the debugger under it. Use `debugger`
 * if you want to deal with your own layout. REQUIRES SEMANTIC UI, and does not work well within a SUI container class.
 * 
 * If you supply `render`, a `(fn [] element)`, then it will be used instead of form/render-layout to render the form
 * itself.
 */
com.fulcrologic.rad.debugging.top_bottom_debugger = (function com$fulcrologic$rad$debugging$top_bottom_debugger(var_args){
var G__91754 = arguments.length;
switch (G__91754) {
case 2:
return com.fulcrologic.rad.debugging.top_bottom_debugger.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.debugging.top_bottom_debugger.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.debugging.top_bottom_debugger.cljs$core$IFn$_invoke$arity$2 = (function (form_instance,props){
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui basic segment"}),com.fulcrologic.fulcro.components.force_children((function (){var G__91755 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),com.fulcrologic.fulcro.components._STAR_parent_STAR_,new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var validator = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,com.fulcrologic.rad.form_options.validator) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,com.fulcrologic.rad.form_options.validator));
var G__91756 = props;
var G__91757 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance,new cljs.core.Keyword(null,"validator","validator",-1966190681),validator], null);
return (com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2(G__91756,G__91757) : com.fulcrologic.rad.debugging.ui_form_info.call(null,G__91756,G__91757));
})()], 0));
})], null);
return (com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.cljs$core$IFn$_invoke$arity$1(G__91755) : com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.call(null,G__91755));
})())]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"width": "100%"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.rad.form.render_layout(form_instance,props))])], 0));
}));

(com.fulcrologic.rad.debugging.top_bottom_debugger.cljs$core$IFn$_invoke$arity$3 = (function (form_instance,props,render){
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui basic segment"}),com.fulcrologic.fulcro.components.force_children((function (){var G__91758 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),com.fulcrologic.fulcro.components._STAR_parent_STAR_,new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var validator = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,com.fulcrologic.rad.form_options.validator) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,com.fulcrologic.rad.form_options.validator));
var G__91759 = props;
var G__91760 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance,new cljs.core.Keyword(null,"validator","validator",-1966190681),validator], null);
return (com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2(G__91759,G__91760) : com.fulcrologic.rad.debugging.ui_form_info.call(null,G__91759,G__91760));
})()], 0));
})], null);
return (com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.cljs$core$IFn$_invoke$arity$1(G__91758) : com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.call(null,G__91758));
})())]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"width": "100%"}),com.fulcrologic.fulcro.components.force_children((render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null)))])], 0));
}));

(com.fulcrologic.rad.debugging.top_bottom_debugger.cljs$lang$maxFixedArity = 3);

/**
 * Use as the only item in the body of a RAD form. Will render the form first, and the debugger under it. Use `debugger`
 * if you want to deal with your own layout. REQUIRES SEMANTIC UI, and does not work well within a SUI container class.
 * 
 * If you supply `render`, a `(fn [] element)`, then it will be used instead of form/render-layout to render the form
 * itself.
 */
com.fulcrologic.rad.debugging.side_by_side_debugger = (function com$fulcrologic$rad$debugging$side_by_side_debugger(var_args){
var G__91762 = arguments.length;
switch (G__91762) {
case 2:
return com.fulcrologic.rad.debugging.side_by_side_debugger.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.debugging.side_by_side_debugger.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.debugging.side_by_side_debugger.cljs$core$IFn$_invoke$arity$2 = (function (form_instance,props){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui grid"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "eight wide column"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.rad.form.render_layout(form_instance,props))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "eight wide column"}),com.fulcrologic.fulcro.components.force_children((function (){var G__91763 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),com.fulcrologic.fulcro.components._STAR_parent_STAR_,new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var validator = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,com.fulcrologic.rad.form_options.validator) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,com.fulcrologic.rad.form_options.validator));
var G__91764 = props;
var G__91765 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance,new cljs.core.Keyword(null,"validator","validator",-1966190681),validator], null);
return (com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2(G__91764,G__91765) : com.fulcrologic.rad.debugging.ui_form_info.call(null,G__91764,G__91765));
})()], 0));
})], null);
return (com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.cljs$core$IFn$_invoke$arity$1(G__91763) : com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.call(null,G__91763));
})())]))]);
}));

(com.fulcrologic.rad.debugging.side_by_side_debugger.cljs$core$IFn$_invoke$arity$3 = (function (form_instance,props,render){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui grid"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "eight wide column"}),com.fulcrologic.fulcro.components.force_children((render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null)))])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "eight wide column"}),com.fulcrologic.fulcro.components.force_children((function (){var G__91766 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),com.fulcrologic.fulcro.components._STAR_parent_STAR_,new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var validator = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,com.fulcrologic.rad.form_options.validator) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,com.fulcrologic.rad.form_options.validator));
var G__91767 = props;
var G__91768 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance,new cljs.core.Keyword(null,"validator","validator",-1966190681),validator], null);
return (com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.debugging.ui_form_info.cljs$core$IFn$_invoke$arity$2(G__91767,G__91768) : com.fulcrologic.rad.debugging.ui_form_info.call(null,G__91767,G__91768));
})()], 0));
})], null);
return (com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.cljs$core$IFn$_invoke$arity$1(G__91766) : com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary.call(null,G__91766));
})())]))]);
}));

(com.fulcrologic.rad.debugging.side_by_side_debugger.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=com.fulcrologic.rad.debugging.js.map
