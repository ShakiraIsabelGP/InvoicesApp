goog.provide('com.fulcrologic.rad.form');
com.fulcrologic.rad.form.view_action = "view";
com.fulcrologic.rad.form.create_action = "create";
com.fulcrologic.rad.form.edit_action = "edit";







/**
 * The standard ::form/action-buttons button layout. Requires you include stardard-controls in your ::control/controls key.
 */
com.fulcrologic.rad.form.standard_action_buttons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","done","com.fulcrologic.rad.form/done",-597306883),new cljs.core.Keyword("com.fulcrologic.rad.form","undo","com.fulcrologic.rad.form/undo",-1709442161),new cljs.core.Keyword("com.fulcrologic.rad.form","save","com.fulcrologic.rad.form/save",-2066369648)], null);
/**
 * The default value of ::control/controls for forms. Includes a ::done, ::undo, and ::save button.
 */
com.fulcrologic.rad.form.standard_controls = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","done","com.fulcrologic.rad.form/done",-597306883),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var read_only_form_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var dirty_QMARK_ = (cljs.core.truth_(read_only_form_QMARK_)?false:(function (){var or__5045__auto__ = new cljs.core.Keyword("ui","new?","ui/new?",777962761).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})());
if(cljs.core.truth_(dirty_QMARK_)){
return com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Cancel");
} else {
return com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Done");
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var dirty_QMARK_ = (function (){var or__5045__auto__ = new cljs.core.Keyword("ui","new?","ui/new?",777962761).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})();
if(cljs.core.truth_(dirty_QMARK_)){
return "ui tiny primary button negative";
} else {
return "ui tiny primary button positive";
}
}),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
var G__90124 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),this$], null);
return (com.fulcrologic.rad.form.cancel_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.cancel_BANG_.cljs$core$IFn$_invoke$arity$1(G__90124) : com.fulcrologic.rad.form.cancel_BANG_.call(null,G__90124));
})], null),new cljs.core.Keyword("com.fulcrologic.rad.form","undo","com.fulcrologic.rad.form/undo",-1709442161),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var read_only_form_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var dirty_QMARK_ = (cljs.core.truth_(read_only_form_QMARK_)?false:(function (){var or__5045__auto__ = new cljs.core.Keyword("ui","new?","ui/new?",777962761).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})());
return cljs.core.not(dirty_QMARK_);
}),new cljs.core.Keyword(null,"label","label",1718410804),(function (_){
return com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Undo");
}),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
var G__90125 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),this$], null);
return (com.fulcrologic.rad.form.undo_all_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.undo_all_BANG_.cljs$core$IFn$_invoke$arity$1(G__90125) : com.fulcrologic.rad.form.undo_all_BANG_.call(null,G__90125));
})], null),new cljs.core.Keyword("com.fulcrologic.rad.form","save","com.fulcrologic.rad.form/save",-2066369648),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var read_only_form_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var remote_busy_QMARK_ = cljs.core.seq(new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005).cljs$core$IFn$_invoke$arity$1(props));
var dirty_QMARK_ = (cljs.core.truth_(read_only_form_QMARK_)?false:(function (){var or__5045__auto__ = new cljs.core.Keyword("ui","new?","ui/new?",777962761).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(props);
}
})());
return ((cljs.core.not(dirty_QMARK_)) || (remote_busy_QMARK_));
}),new cljs.core.Keyword(null,"label","label",1718410804),(function (_){
return com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Save");
}),new cljs.core.Keyword(null,"class","class",-2030961996),(function (this$){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var remote_busy_QMARK_ = cljs.core.seq(new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005).cljs$core$IFn$_invoke$arity$1(props));
if(remote_busy_QMARK_){
return "ui tiny primary button loading";
} else {
return null;
}
}),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
var G__90126 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),this$], null);
return (com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$1(G__90126) : com.fulcrologic.rad.form.save_BANG_.call(null,G__90126));
})], null)], null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.form","picker-join-key","com.fulcrologic.rad.form/picker-join-key",-1736718474,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),cljs.core.qualified_keyword_QMARK_,null,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),null,null,null));


/**
 * Returns a :ui/picker keyword customized to the qualified keyword
 * @type {function(*): *}
 */
com.fulcrologic.rad.form.picker_join_key = (function com$fulcrologic$rad$form$picker_join_key(qualified_key){
var map__90131 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"qualified-key","qualified-key",-1416163885),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),cljs.core.qualified_keyword_QMARK_,null,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),null,null,null);
var map__90131__$1 = cljs.core.__destructure_map(map__90131);
var retspec90128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90131__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec90127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90131__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec90127)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:91 picker-join-key's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec90127,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key], null));
} else {
}

var f90130 = (function (qualified_key__$1){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("ui",[cljs.core.namespace(qualified_key__$1),"-",cljs.core.name(qualified_key__$1),"-picker"].join(''));
});
var ret90129 = f90130(qualified_key);
if(cljs.core.truth_(retspec90128)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:91 picker-join-key's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec90128,ret90129);
} else {
}

return ret90129;
});
/**
 * Return the master form for the given component instance.
 */
com.fulcrologic.rad.form.master_form = (function com$fulcrologic$rad$form$master_form(component){
var or__5045__auto__ = (function (){var G__90132 = component;
var G__90132__$1 = (((G__90132 == null))?null:(com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(G__90132) : com.fulcrologic.fulcro.components.get_computed.call(null,G__90132)));
if((G__90132__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641).cljs$core$IFn$_invoke$arity$1(G__90132__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return component;
}
});
/**
 * Returns true if the given react element `form-instance` is the master form in the supplied rendering env. You can
 * also supply `this` if you have not already created a form rendering env, but that will be less efficient if you
 * need the rendering env in other places.
 */
com.fulcrologic.rad.form.master_form_QMARK_ = (function com$fulcrologic$rad$form$master_form_QMARK_(var_args){
var G__90134 = arguments.length;
switch (G__90134) {
case 1:
return com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
var env = (com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.rad.form.rendering_env.call(null,this$));
return com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$2(env,this$);
}));

(com.fulcrologic.rad.form.master_form_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (rendering_env,form_instance){
var master_form = new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641).cljs$core$IFn$_invoke$arity$1(rendering_env);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form_instance,master_form);
}));

(com.fulcrologic.rad.form.master_form_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns the keyword that was used in the join of the parent form when querying for the data of the current
 * `form-instance`. Returns nil if there is no parent relation.
 */
com.fulcrologic.rad.form.parent_relation = (function com$fulcrologic$rad$form$parent_relation(this$){
var G__90135 = this$;
var G__90135__$1 = (((G__90135 == null))?null:(com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(G__90135) : com.fulcrologic.fulcro.components.get_computed.call(null,G__90135)));
if((G__90135__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884).cljs$core$IFn$_invoke$arity$1(G__90135__$1);
}
});
/**
 * Get the RAD attribute definition for the given attribute key, given a class-or-instance that has that attribute
 * as a field. Returns a RAD attribute, or nil if that attribute isn't a form field on the form.
 */
com.fulcrologic.rad.form.form_key__GT_attribute = (function com$fulcrologic$rad$form$form_key__GT_attribute(class_or_instance,attribute_key){
var G__90136 = class_or_instance;
var G__90136__$1 = (((G__90136 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90136) : com.fulcrologic.fulcro.components.component_options.call(null,G__90136)));
var G__90136__$2 = (((G__90136__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","key->attribute","com.fulcrologic.rad.form/key->attribute",2109187333).cljs$core$IFn$_invoke$arity$1(G__90136__$1));
if((G__90136__$2 == null)){
return null;
} else {
return (attribute_key.cljs$core$IFn$_invoke$arity$1 ? attribute_key.cljs$core$IFn$_invoke$arity$1(G__90136__$2) : attribute_key.call(null,G__90136__$2));
}
});
/**
 * Find the correct UI renderer for the given form layout `element`.
 * 
 * `element` must be one of :
 * 
 * ```
 * #{:form-container :form-body-container :ref-container :async-abandon-modal}
 * ```
 *   
 */
com.fulcrologic.rad.form.render_fn = (function com$fulcrologic$rad$form$render_fn(p__90137,element){
var map__90138 = p__90137;
var map__90138__$1 = cljs.core.__destructure_map(map__90138);
var form_env = map__90138__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90138__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__90139 = com.fulcrologic.fulcro.components.any__GT_app(form_instance);
var map__90139__$1 = cljs.core.__destructure_map(map__90139);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90139__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var style_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","layout-styles","com.fulcrologic.rad.form/layout-styles",958249624),element], null);
var copts = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var id_attr = com.fulcrologic.rad.form_options.id.cljs$core$IFn$_invoke$arity$1(copts);
var layout_style = (function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(copts,style_path);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(copts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_attr,form_env], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
})();
var element__GT_style__GT_layout = (function (){var G__90140 = runtime_atom;
var G__90140__$1 = (((G__90140 == null))?null:cljs.core.deref(G__90140));
var G__90140__$2 = (((G__90140__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__90140__$1));
if((G__90140__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076).cljs$core$IFn$_invoke$arity$1(G__90140__$2);
}
})();
var render_fn = (function (){var G__90141 = element__GT_style__GT_layout;
var G__90141__$1 = (((G__90141 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__90141,element));
if((G__90141__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__90141__$1,layout_style);
}
})();
var default_render_fn = (function (){var G__90142 = element__GT_style__GT_layout;
var G__90142__$1 = (((G__90142 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__90142,element));
if((G__90142__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(G__90142__$1);
}
})();
if(cljs.core.not(runtime_atom)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,153,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form instance was not in the rendering environment. This means the form did not mount properly"], null);
}),null)),null,-744068513,null);
} else {
if(cljs.core.not(render_fn)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No renderer was installed for layout style",layout_style,"for UI element",element], null);
}),null)),null,-30361260,null);
} else {
}
}

var or__5045__auto__ = render_fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default_render_fn;
}
});
/**
 * The top-level container for the entire on-screen form
 */
com.fulcrologic.rad.form.form_container_renderer = (function com$fulcrologic$rad$form$form_container_renderer(form_env){
return com.fulcrologic.rad.form.render_fn(form_env,new cljs.core.Keyword(null,"form-container","form-container",-1768135707));
});
/**
 * The container for the form fields. Used to wrap the main set of fields, and as the container for
 * fields in nested forms. This renderer can determine layout of the fields themselves.
 */
com.fulcrologic.rad.form.form_layout_renderer = (function com$fulcrologic$rad$form$form_layout_renderer(form_env){
return com.fulcrologic.rad.form.render_fn(form_env,new cljs.core.Keyword(null,"form-body-container","form-body-container",819827704));
});
/**
 * [form-options]
 * [form-options ref-attr-or-keyword]
 * 
 * Find the subform options for the given form instance's ref-attr-or-keyword. Form-specific subform options
 * takes precedence over any defined as fo/subform on the ref-attr-or-keyword. Runs the supported nested lambdas
 * when found.
 * 
 * If you supply ref-attr-or-keyword, then the result is a map of that refs subform-options.
 * 
 * If you do NOT supply ref-attr-or-keyword, then the result is a map from ref-attr-key to subform-options IF that ref has
 * subform options on the form or attribute.
 * 
 */
com.fulcrologic.rad.form.subform_options = com.fulcrologic.rad.form_options.subform_options;
com.fulcrologic.rad.form.subform_ui = (function com$fulcrologic$rad$form$subform_ui(form_options,ref_key_or_attribute){
var G__90143 = (com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$2(form_options,ref_key_or_attribute) : com.fulcrologic.rad.form.subform_options.call(null,form_options,ref_key_or_attribute));
if((G__90143 == null)){
return null;
} else {
return com.fulcrologic.rad.form_options.ui.cljs$core$IFn$_invoke$arity$1(G__90143);
}
});
/**
 * [form-options]
 * [form-options attr-or-key]
 * 
 * Get the fo/field-options for a form (arity 1) or a particular field (arity 2). Runs lambdas if necessary.
 */
com.fulcrologic.rad.form.get_field_options = com.fulcrologic.rad.form_options.get_field_options;
/**
 * Given the current rendering environment and an attribute: Returns the renderer that wraps and lays out
 * elements of refs. This function interprets the ::form/subforms settings for referenced objects that
 * will render as sub-forms, and looks for ::form/layout-style first in the subform settings, and next on the
 * component options of the ::form/ui class itself:
 * 
 * ```
 * fo/subforms {ref-field-key {fo/layout-style some-style ; optional, choose/override style
 *                             fo/subform MyForm}
 * ```
 * 
 */
com.fulcrologic.rad.form.ref_container_renderer = (function com$fulcrologic$rad$form$ref_container_renderer(p__90144,p__90145){
var map__90146 = p__90144;
var map__90146__$1 = cljs.core.__destructure_map(map__90146);
var _form_env = map__90146__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90146__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__90147 = p__90145;
var map__90147__$1 = cljs.core.__destructure_map(map__90147);
var attr = map__90147__$1;
var field_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90147__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-style","com.fulcrologic.rad.form/field-style",950512885));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90147__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__90148 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__90148__$1 = cljs.core.__destructure_map(map__90148);
var form_options = map__90148__$1;
var field_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90148__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968));
var field_style__$1 = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_styles,qualified_key);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return field_style;
}
})();
if(cljs.core.truth_(field_style__$1)){
return (function (env,attr__$1,_){
return (com.fulcrologic.rad.form.render_field.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.render_field.cljs$core$IFn$_invoke$arity$2(env,attr__$1) : com.fulcrologic.rad.form.render_field.call(null,env,attr__$1));
});
} else {
var map__90149 = (com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$2(form_options,attr) : com.fulcrologic.rad.form.subform_options.call(null,form_options,attr));
var map__90149__$1 = cljs.core.__destructure_map(map__90149);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90149__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var layout_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90149__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","layout-styles","com.fulcrologic.rad.form/layout-styles",958249624));
var map__90150 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(ui) : com.fulcrologic.fulcro.components.component_options.call(null,ui));
var map__90150__$1 = cljs.core.__destructure_map(map__90150);
var target_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90150__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","layout-styles","com.fulcrologic.rad.form/layout-styles",958249624));
var map__90151 = com.fulcrologic.fulcro.components.any__GT_app(form_instance);
var map__90151__$1 = cljs.core.__destructure_map(map__90151);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var element = new cljs.core.Keyword(null,"ref-container","ref-container",-1728504269);
var layout_style = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout_styles,element);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(target_styles,element);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
})();
var render_fn = (function (){var G__90152 = runtime_atom;
var G__90152__$1 = (((G__90152 == null))?null:cljs.core.deref(G__90152));
var G__90152__$2 = (((G__90152__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__90152__$1));
var G__90152__$3 = (((G__90152__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076).cljs$core$IFn$_invoke$arity$1(G__90152__$2));
if((G__90152__$3 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__90152__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,layout_style], null));
}
})();
return render_fn;
}
});
/**
 * Given a form rendering environment and an attribute: returns the renderer that can render the given attribute.
 * 
 *   The attribute style of :default is the default, and can be overridden in ::form/field-styles on the form (master
 *   has precedence, followed by the form it actually appears on) or
 *   using ::form/field-style on the attribute itself.
 */
com.fulcrologic.rad.form.attr__GT_renderer = (function com$fulcrologic$rad$form$attr__GT_renderer(p__90153,p__90154){
var map__90155 = p__90153;
var map__90155__$1 = cljs.core.__destructure_map(map__90155);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90155__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90155__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var map__90156 = p__90154;
var map__90156__$1 = cljs.core.__destructure_map(map__90156);
var attr = map__90156__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90156__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90156__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90156__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","style","com.fulcrologic.rad.attributes/style",816608992));
var field_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90156__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-style","com.fulcrologic.rad.form/field-style",950512885));
var map__90157 = com.fulcrologic.fulcro.components.any__GT_app(form_instance);
var map__90157__$1 = cljs.core.__destructure_map(map__90157);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90157__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var field_style__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5045__auto__ = (function (){var G__90158 = master_form;
var G__90158__$1 = (((G__90158 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90158) : com.fulcrologic.fulcro.components.component_options.call(null,G__90158)));
var G__90158__$2 = (((G__90158__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968).cljs$core$IFn$_invoke$arity$1(G__90158__$1));
if((G__90158__$2 == null)){
return null;
} else {
return (qualified_key.cljs$core$IFn$_invoke$arity$1 ? qualified_key.cljs$core$IFn$_invoke$arity$1(G__90158__$2) : qualified_key.call(null,G__90158__$2));
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__90159 = form_instance;
var G__90159__$1 = (((G__90159 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90159) : com.fulcrologic.fulcro.components.component_options.call(null,G__90159)));
var G__90159__$2 = (((G__90159__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968).cljs$core$IFn$_invoke$arity$1(G__90159__$1));
if((G__90159__$2 == null)){
return null;
} else {
return (qualified_key.cljs$core$IFn$_invoke$arity$1 ? qualified_key.cljs$core$IFn$_invoke$arity$1(G__90159__$2) : qualified_key.call(null,G__90159__$2));
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = field_style;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = style;
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
var control_map = (function (){var G__90160 = runtime_atom;
var G__90160__$1 = (((G__90160 == null))?null:cljs.core.deref(G__90160));
var G__90160__$2 = (((G__90160__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__90160__$1));
if((G__90160__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","type->style->control","com.fulcrologic.rad.form/type->style->control",146932348).cljs$core$IFn$_invoke$arity$1(G__90160__$2);
}
})();
var control = (function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(control_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,field_style__$1], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002)))){
if(cljs.core.contains_QMARK_(cljs.core.deref(com.fulcrologic.rad.errors.prior_warnings),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Renderer not found: ",type,field_style__$1], null))){
} else {
com.fulcrologic.rad.errors.prior_warnings.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.errors.prior_warnings.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Renderer not found: ",type,field_style__$1], null)));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Renderer not found: ",type,field_style__$1], null);
}),null)),null,947632980,null);
}
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(control_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})();
if(cljs.core.truth_(control)){
return control;
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,244,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to find control (no default) for attribute ",attr], null);
}),null)),null,-1864949448,null);
}
});
/**
 * Given a form rendering environment and an attrbute: renders that attribute as a form field (e.g. a label and an
 * input) according to its type/style/value.
 */
com.fulcrologic.rad.form.render_field = (function com$fulcrologic$rad$form$render_field(env,attr){
return com.fulcrologic.rad.form_render.render_field.cljs$core$IFn$_invoke$arity$2(env,attr);
});
/**
 * Renders an attribute as a form input according to its type/style/value. This is just like `render-field` but
 * hints to the rendering layer that the label should NOT be rendered.
 */
com.fulcrologic.rad.form.render_input = (function com$fulcrologic$rad$form$render_input(env,attr){
return com.fulcrologic.rad.form.render_field(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr,com.fulcrologic.rad.form_options.omit_label_QMARK_,true));
});
com.fulcrologic.rad.form.default_render_field = (function com$fulcrologic$rad$form$default_render_field(env,attr){
var render = com.fulcrologic.rad.form.attr__GT_renderer(env,attr);
if(cljs.core.truth_(render)){
return (render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(env,attr) : render.call(null,env,attr));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,263,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No renderer installed to support attribute",attr], null);
}),null)),null,-2061522786,null);

return null;
}
});
com.fulcrologic.rad.form_render.render_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,attr){
return com.fulcrologic.rad.form.default_render_field(env,attr);
}));
/**
 * Create a form rendering environment. `form-instance` is the react element instance of the form (typically a master form),
 * but this function can be called using an active sub-form. `props` should be the props of the `form-instance`, and are
 * allowed to be passed as an optimization when you've already got them.
 * 
 * NOTE: This function will automatically extract the master form from the computed props of form-instance in cases
 * where you are in the context of a sub-form.
 */
com.fulcrologic.rad.form.rendering_env = (function com$fulcrologic$rad$form$rendering_env(var_args){
var G__90162 = arguments.length;
switch (G__90162) {
case 1:
return com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1 = (function (form_instance){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var cprops = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.components.get_computed.call(null,props));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cprops,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),com.fulcrologic.rad.form.master_form(form_instance),new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","props","com.fulcrologic.rad.form/props",278185108),props,new cljs.core.Keyword("com.fulcrologic.rad.form","computed-props","com.fulcrologic.rad.form/computed-props",-321049616),cprops], null)], 0));
}));

(com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$2 = (function (form_instance,props){
var cprops = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.components.get_computed.call(null,props));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cprops,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641),com.fulcrologic.rad.form.master_form(form_instance),new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","props","com.fulcrologic.rad.form/props",278185108),props,new cljs.core.Keyword("com.fulcrologic.rad.form","computed-props","com.fulcrologic.rad.form/computed-props",-321049616),cprops], null)], 0));
}));

(com.fulcrologic.rad.form.rendering_env.cljs$lang$maxFixedArity = 2);

/**
 * Render JUST the form fields (and subforms). This will skip rendering the header/controls on the top-level form, and
 * will skip the form container on subforms.
 * 
 * If you use this on the top-level form then you will need to provide your own rendering of the controls for
 * navigation, save, undo, etc.  You can use the support functions in this
 * namespace (e.g. `save!`, `undo-all!`, `cancel!`) to implement the behavior of those controls.
 * 
 * This function bypasses the body container for the form elements, so you may need to do additional work to wrap
 * them for appropriate rendering (e.g. in the semantic-ui plugin, you'll need a div with the `form` class on it).
 * 
 */
com.fulcrologic.rad.form.render_form_fields = (function com$fulcrologic$rad$form$render_form_fields(form_instance,props){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,form_instance)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid form instance.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance], null));
}

var env = com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$2(form_instance,props);
var render = com.fulcrologic.rad.form.form_layout_renderer(env);
if(cljs.core.truth_(render)){
return (render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(env) : render.call(null,env));
} else {
return null;
}
});
com.fulcrologic.rad.form.default_render_layout = (function com$fulcrologic$rad$form$default_render_layout(form_instance,props){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,form_instance)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid form instance propagated to render layout.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance], null));
}

var env = com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$2(form_instance,props);
var render = com.fulcrologic.rad.form.form_container_renderer(env);
if(cljs.core.truth_(render)){
return (render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(env) : render.call(null,env));
} else {
return null;
}
});
/**
 * Render the complete layout of a form. This is the default body of normal form classes. It will call a render factory
 * on any subforms, and they, in turn, will use this to render *their* body. Thus, any form can have a manually-overriden
 * render body.
 */
com.fulcrologic.rad.form.render_layout = (function com$fulcrologic$rad$form$render_layout(form_instance,props){
if(cljs.core.truth_((com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_QMARK_.call(null,form_instance)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid form instance propagated to render layout.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-instance","form-instance",-1168951829),form_instance], null));
}

var env = com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$2(form_instance,props);
return com.fulcrologic.rad.form_render.render_form.cljs$core$IFn$_invoke$arity$2(env,(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_instance,com.fulcrologic.rad.form_options.id) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,com.fulcrologic.rad.form_options.id)));
});
com.fulcrologic.rad.form_render.render_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (renv,id_attr){
var temp__5804__auto__ = com.fulcrologic.rad.form.form_container_renderer(renv);
if(cljs.core.truth_(temp__5804__auto__)){
var render = temp__5804__auto__;
return (render.cljs$core$IFn$_invoke$arity$1 ? render.cljs$core$IFn$_invoke$arity$1(renv) : render.call(null,renv));
} else {
return null;
}
}));
/**
 * Recursively walks the definition of a RAD form (form and all subforms), and returns the attribute qualified keys
 * that match `(pred attribute)`
 */
com.fulcrologic.rad.form.find_fields = (function com$fulcrologic$rad$form$find_fields(form_class,pred){
var attributes = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)) : com.fulcrologic.fulcro.components.component_options.call(null,form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var local_optional = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(pred),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949))),attributes);
var children = (function (){var G__90164 = form_class;
var G__90164__$1 = (((G__90164 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(G__90164));
var G__90164__$2 = (((G__90164__$1 == null))?null:edn_query_language.core.query__GT_ast(G__90164__$1));
var G__90164__$3 = (((G__90164__$2 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__90164__$2));
if((G__90164__$3 == null)){
return null;
} else {
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component","component",1555936782),G__90164__$3);
}
})();
var children_optional = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__90163_SHARP_){
return (com.fulcrologic.rad.form.find_fields.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.find_fields.cljs$core$IFn$_invoke$arity$2(p1__90163_SHARP_,pred) : com.fulcrologic.rad.form.find_fields.call(null,p1__90163_SHARP_,pred));
}),children);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.set.union,local_optional,children_optional);
});
/**
 * Returns all of the form fields from a form (recursively) that are not marked ao/required?
 */
com.fulcrologic.rad.form.optional_fields = (function com$fulcrologic$rad$form$optional_fields(form_class){
return com.fulcrologic.rad.form.find_fields(form_class,(function (p1__90165_SHARP_){
return (!(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__90165_SHARP_,new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330)) === true));
}));
});
com.fulcrologic.rad.form.sc = (function com$fulcrologic$rad$form$sc(registry_key,options){
var cls = (function (){
return null;
});
return com.fulcrologic.fulcro.components.configure_component_BANG_(cls,registry_key,options);
});
/**
 * Converts form options to the necessary EQL query for a form class.
 */
com.fulcrologic.rad.form.form_options__GT_form_query = (function com$fulcrologic$rad$form$form_options__GT_form_query(p__90168){
var map__90169 = p__90168;
var map__90169__$1 = cljs.core.__destructure_map(map__90169);
var form_options = map__90169__$1;
var id_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90169__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90169__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id_attr);
var map__90170 = cljs.core.group_by((function (p1__90167_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804).cljs$core$IFn$_invoke$arity$1(p1__90167_SHARP_));
}),attributes);
var map__90170__$1 = cljs.core.__destructure_map(map__90170);
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90170__$1,true);
var scalars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90170__$1,false);
var query_with_scalars = cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key,new cljs.core.Keyword("ui","confirmation-message","ui/confirmation-message",-1177012486),new cljs.core.Keyword("ui","route-denied?","ui/route-denied?",1601001182),new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),com.fulcrologic.fulcro.algorithms.form_state.form_config_join], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)),scalars);
var full_query = cljs.core.into.cljs$core$IFn$_invoke$arity$3(query_with_scalars,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__90171){
var map__90172 = p__90171;
var map__90172__$1 = cljs.core.__destructure_map(map__90172);
var attr = map__90172__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90172__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var temp__5802__auto__ = com.fulcrologic.rad.form.subform_ui(form_options,attr);
if(cljs.core.truth_(temp__5802__auto__)){
var subform = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([qualified_key,com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(subform)])], null);
} else {
var k__GT_attr = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__90173){
var map__90174 = p__90173;
var map__90174__$1 = cljs.core.__destructure_map(map__90174);
var attr__$1 = map__90174__$1;
var qualified_key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90174__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key__$1,attr__$1], null);
})),attributes);
var target_id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039).cljs$core$IFn$_invoke$arity$1((k__GT_attr.cljs$core$IFn$_invoke$arity$1 ? k__GT_attr.cljs$core$IFn$_invoke$arity$1(qualified_key) : k__GT_attr.call(null,qualified_key)));
var fake_component = com.fulcrologic.rad.form.sc(qualified_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,target_id_key)], null);
})], null));
if(cljs.core.truth_(target_id_key)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.form",null,398,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reference attribute",qualified_key,"in form has no subform ::form/ui, and no ::attr/target."], null);
}),null)),null,-1970567903,null);
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([qualified_key,com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(fake_component)])], null);
}
})),refs);
return full_query;
});
/**
 * moved to integer.cljs
 */
com.fulcrologic.rad.form.parse_long = com.fulcrologic.rad.type_support.integer.parse_long;
/**
 * Forms use a state machine to control their behavior. Normally that state machine is started when you route to
 *   it using Fulcro's dynamic router system. If you start with a form on-screen, or do not use routing, then you will
 *   have to call this function when the form first appears in order to ensure it operates. Calling this function is
 *   *destructive* and will re-start the form's machine and destroy any current state in that form.
 * 
 *   * app - The app
 *   * id - The ID of the form, in the correct type (i.e. int, UUID, etc.). Use a `tempid` to create something new, otherwise
 *   the form will attempt to load the current value from the server.
 *   * form-class - The component class that will render the form and has the form's configuration.
 *   * params - Extra parameters to include in the initial event data. The state machine definition you're using will
 *  determine the meanings of these (if any). The default machine supports:
 *  ** `:on-saved fulcro-txn` A transaction to run when the form is successfully saved. Exactly what you'd pass to `transact!`.
 *  ** `:on-cancel fulcro-txn` A transaction to run when the edit is cancelled.
 *  ** `:on-save-failed fulcro-txn` A transaction to run when the server refuses to save the data.
 *  ** `:embedded? boolean` Disable history and routing for embedded forms. Default false.
 * 
 *   The state machine definition used by this method can be overridden by setting `::form/machine` in component options
 *   to a different Fulcro uism state machine definition. Machines do *not* run in subforms, only in the master, which
 *   is what `form-class` will become for that machine.
 *   
 */
com.fulcrologic.rad.form.start_form_BANG_ = (function com$fulcrologic$rad$form$start_form_BANG_(var_args){
var G__90176 = arguments.length;
switch (G__90176) {
case 3:
return com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,id,form_class){
return com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$4(app,id,form_class,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app,id,form_class,params){
var map__90177 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
var map__90177__$1 = cljs.core.__destructure_map(map__90177);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90177__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var machine = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","machine","com.fulcrologic.rad.form/machine",-1164263159)) : com.fulcrologic.fulcro.components.component_options.call(null,form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","machine","com.fulcrologic.rad.form/machine",-1164263159)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.form.form_machine;
}
})();
var new_QMARK_ = com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(id);
var form_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,id], null);
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app,machine,form_ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),com.fulcrologic.fulcro.ui_state_machines.with_actor_class(form_ident,form_class)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","create?","com.fulcrologic.rad.form/create?",-1691842893),new_QMARK_], null)], 0)));
}));

(com.fulcrologic.rad.form.start_form_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Used as the implementation and return value of a form target's will-enter dynamic routing hook.
 */
com.fulcrologic.rad.form.form_will_enter = (function com$fulcrologic$rad$form$form_will_enter(app,p__90178,form_class){
var map__90179 = p__90178;
var map__90179__$1 = cljs.core.__destructure_map(map__90179);
var route_params = map__90179__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90179__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90179__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__90180 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,form_class,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
var map__90180__$1 = cljs.core.__destructure_map(map__90180);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90180__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90180__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var new_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.form.create_action,action);
var coerced_id = ((new_QMARK_)?com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0():com.fulcrologic.rad.ids.id_string__GT_id(type,id));
var form_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,coerced_id], null);
if(((new_QMARK_) && ((!(com.fulcrologic.rad.ids.valid_uuid_string_QMARK_(id)))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,445,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(form_class) : com.fulcrologic.fulcro.components.component_name.call(null,form_class)),"Invalid UUID string ",id,"used in route for new entity. The form may misbehave."], null);
}),null)),null,1543427654,null);
} else {
}

return com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred(form_ident,(function (){
return com.fulcrologic.rad.form.start_form_BANG_.cljs$core$IFn$_invoke$arity$4(app,coerced_id,form_class,route_params);
}));
});
/**
 * Stop the state machine for the given form without warning. Does not reset the form or give any warnings: just exits the state machine.
 * You should only use this when you are embedding the form in something, and you are controlling the form directly. Usually,
 * you will combine this with `undo-all!` and some kind of UI routing change.
 */
com.fulcrologic.rad.form.abandon_form_BANG_ = (function com$fulcrologic$rad$form$abandon_form_BANG_(app_ish,form_ident){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app_ish,form_ident,new cljs.core.Keyword("event","exit","event/exit",373463484),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Checks to see if the UISM is still running (indicating an exit via routing) and cleans up the machine.
 */
com.fulcrologic.rad.form.form_will_leave = (function com$fulcrologic$rad$form$form_will_leave(this$){
var master_form = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641)) : com.fulcrologic.fulcro.components.get_computed.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return this$;
}
})();
var state_map = com.fulcrologic.fulcro.raw.application.current_state(this$);
var form_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
var silent_abandon_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","silent-abandon?","com.fulcrologic.rad.form/silent-abandon?",1683103386)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","silent-abandon?","com.fulcrologic.rad.form/silent-abandon?",1683103386))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var machine = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),form_ident], null));
if(cljs.core.truth_(machine)){
if(cljs.core.truth_(silent_abandon_QMARK_)){
com.fulcrologic.rad.form.abandon_form_BANG_(this$,form_ident);
} else {
}

com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(master_form,form_ident,new cljs.core.Keyword("event","exit","event/exit",373463484),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return true;
});
com.fulcrologic.rad.form.form_allow_route_change = (function com$fulcrologic$rad$form$form_allow_route_change(this$){

var id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$));
var form_props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var read_only_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var silent_abandon_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","silent-abandon?","com.fulcrologic.rad.form/silent-abandon?",1683103386)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","silent-abandon?","com.fulcrologic.rad.form/silent-abandon?",1683103386))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
var current_state = com.fulcrologic.fulcro.raw.application.current_state(this$);
var abandoned_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),id,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206),new cljs.core.Keyword(null,"abandoned?","abandoned?",1788912865)], null),false);
var dirty_QMARK_ = ((cljs.core.not(abandoned_QMARK_)) && (com.fulcrologic.fulcro.algorithms.form_state.dirty_QMARK_.cljs$core$IFn$_invoke$arity$1(form_props)));
var or__5045__auto__ = silent_abandon_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = read_only_QMARK_;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return (!(dirty_QMARK_));
}
}
});
/**
 * Generate a pre-merge for a component that has the given for attribute map. Returns a proper
 *   pre-merge fn, or `nil` if none is needed
 */
com.fulcrologic.rad.form.form_pre_merge = (function com$fulcrologic$rad$form$form_pre_merge(component_options,key__GT_attribute){
var sorters_by_k = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
var temp__5804__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.form","sort-children","com.fulcrologic.rad.form/sort-children",-1384515906).cljs$core$IFn$_invoke$arity$1((function (){var G__90181 = component_options;
var G__90182 = (key__GT_attribute.cljs$core$IFn$_invoke$arity$1 ? key__GT_attribute.cljs$core$IFn$_invoke$arity$1(k) : key__GT_attribute.call(null,k));
return (com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$2(G__90181,G__90182) : com.fulcrologic.rad.form.subform_options.call(null,G__90181,G__90182));
})());
if(cljs.core.truth_(temp__5804__auto__)){
var sorter = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sorter], null);
} else {
return null;
}
}),cljs.core.keys(key__GT_attribute)));
if(cljs.core.seq(sorters_by_k)){
return (function (p__90183){
var map__90184 = p__90183;
var map__90184__$1 = cljs.core.__destructure_map(map__90184);
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90184__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
var ks = cljs.core.keys(sorters_by_k);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,490,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form system sorting data tree children for keys ",ks], null);
}),null)),null,1945828464,null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tree,k){
if(cljs.core.vector_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tree,k))){
try{return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tree,k,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.get.cljs$core$IFn$_invoke$arity$2(sorters_by_k,k)));
}catch (e90185){var e = e90185;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,497,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sort failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null);
}),null)),null,-672273304,null);

return tree;
}} else {
return tree;
}
}),data_tree,ks);
});
} else {
return null;
}
});
/**
 * Find all attributes that are referenced by a form and all of its subforms, recursively.
 */
com.fulcrologic.rad.form.form_and_subform_attributes = (function com$fulcrologic$rad$form$form_and_subform_attributes(cls){
var options = (function (){var G__90186 = cls;
if((G__90186 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90186) : com.fulcrologic.fulcro.components.component_options.call(null,G__90186));
}
})();
var base_attributes = com.fulcrologic.rad.form_options.attributes.cljs$core$IFn$_invoke$arity$1(options);
var subforms = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (a){
return com.fulcrologic.rad.form_options.ui.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$2(options,a) : com.fulcrologic.rad.form.subform_options.call(null,options,a)));
}),base_attributes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(base_attributes),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.form_and_subform_attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subforms], 0)));
});
/**
 * Runtime conversion of form options to what comp/configure-component! needs.
 */
com.fulcrologic.rad.form.convert_options = (function com$fulcrologic$rad$form$convert_options(get_class,location,options){
if(((cljs.core.contains_QMARK_(options,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591))) && (cljs.core.vector_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)))))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,"MUST include",new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591),"that satisfies predicate","vector?"], null);
}),null)),null,28315310,null);
}

if(((cljs.core.contains_QMARK_(options,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937))) && (com.fulcrologic.rad.attributes.attribute_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)))))){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,"MUST include",new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),"that satisfies predicate","attr/attribute?"], null);
}),null)),null,-1098281770,null);
}

var map__90187 = options;
var map__90187__$1 = cljs.core.__destructure_map(map__90187);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90187__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90187__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var route_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90187__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703));
var query_inclusion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90187__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","query-inclusion","com.fulcrologic.rad.form/query-inclusion",-482825736));
var will_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90187__$1,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624));
var id_key = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id);
var form_field_QMARK_ = (function (p__90188){
var map__90189 = p__90188;
var map__90189__$1 = cljs.core.__destructure_map(map__90189);
var identity_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90189__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","identity?","com.fulcrologic.rad.attributes/identity?",-576130258));
var computed_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90189__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-value","com.fulcrologic.rad.attributes/computed-value",-1657154665));
return ((cljs.core.not(computed_value)) && (cljs.core.not(identity_QMARK_)));
});
var attribute_map = com.fulcrologic.rad.attributes.attribute_map(attributes);
var pre_merge = com.fulcrologic.rad.form.form_pre_merge(options,attribute_map);
var Form = (get_class.cljs$core$IFn$_invoke$arity$0 ? get_class.cljs$core$IFn$_invoke$arity$0() : get_class.call(null));
var base_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894),com.fulcrologic.rad.attributes.make_attribute_validator.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.form.form_and_subform_attributes(Form),true),new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232),com.fulcrologic.rad.form.standard_controls,new cljs.core.Keyword(null,"route-denied","route-denied",-1140339590),(function (this$,relative_root,proposed_route,timeouts_and_params){
var rroot = ((com.fulcrologic.fulcro.components.component_class_QMARK_(relative_root))?(com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(relative_root) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,relative_root)):(((relative_root instanceof cljs.core.Keyword))?relative_root:(function (){var G__90190 = relative_root;
var G__90190__$1 = (((G__90190 == null))?null:com.fulcrologic.fulcro.components.react_type(G__90190));
if((G__90190__$1 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__90190__$1) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__90190__$1));
}
})()
));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","route-denied","event/route-denied",-1177347564),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form","form",-1624062471),(function (){var G__90191 = (get_class.cljs$core$IFn$_invoke$arity$0 ? get_class.cljs$core$IFn$_invoke$arity$0() : get_class.call(null));
if((G__90191 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__90191) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__90191));
}
})(),new cljs.core.Keyword(null,"relative-root","relative-root",-2066895840),rroot,new cljs.core.Keyword(null,"route","route",329891309),proposed_route,new cljs.core.Keyword(null,"timeouts-and-params","timeouts-and-params",-471121268),timeouts_and_params], null));
})], null),options,(function (){var G__90192 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id_key)], null);
}),new cljs.core.Keyword("com.fulcrologic.rad.form","key->attribute","com.fulcrologic.rad.form/key->attribute",2109187333),attribute_map,new cljs.core.Keyword("fulcro","registry-key","fulcro/registry-key",-478137048),(function (){var G__90193 = Form;
if((G__90193 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__90193) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__90193));
}
})(),new cljs.core.Keyword(null,"form-fields","form-fields",35924568),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(form_field_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949))),attributes)], null);
var G__90192__$1 = (cljs.core.truth_(pre_merge)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__90192,new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),pre_merge):G__90192);
if(cljs.core.truth_(route_prefix)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__90192__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route_prefix,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"allow-route-change?","allow-route-change?",173143289),com.fulcrologic.rad.form.form_allow_route_change,new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),(function (this$,props){
return com.fulcrologic.rad.form.form_will_leave(this$);
}),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),(function (){var or__5045__auto__ = will_enter;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (app,route_params){
return com.fulcrologic.rad.form.form_will_enter(app,route_params,(get_class.cljs$core$IFn$_invoke$arity$0 ? get_class.cljs$core$IFn$_invoke$arity$0() : get_class.call(null)));
});
}
})()], null)], 0));
} else {
return G__90192__$1;
}
})()], 0));
var attribute_query_inclusions = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.rad.form","query-inclusion","com.fulcrologic.rad.form/query-inclusion",-482825736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes], 0)));
var inclusions = clojure.set.union.cljs$core$IFn$_invoke$arity$2(attribute_query_inclusions,cljs.core.set(query_inclusion));
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (!(typeof route_prefix === 'string'));
} else {
return and__5043__auto__;
}
})())){
if(cljs.core.truth_(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002)))){
if(cljs.core.contains_QMARK_(cljs.core.deref(com.fulcrologic.rad.errors.prior_warnings),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: ",location," does not have a route prefix and will only be usable as a sub-form."], null))){
} else {
com.fulcrologic.rad.errors.prior_warnings.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.errors.prior_warnings.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: ",location," does not have a route prefix and will only be usable as a sub-form."], null)));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: ",location," does not have a route prefix and will only be usable as a sub-form."], null);
}),null)),null,-985951706,null);
}
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = will_enter;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not(route_prefix);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
if(cljs.core.truth_(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002)))){
if(cljs.core.contains_QMARK_(cljs.core.deref(com.fulcrologic.rad.errors.prior_warnings),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: There's a :will-enter option in form/defsc-form",location,"that will be ignored because ::report/route-prefix is not specified"], null))){
} else {
com.fulcrologic.rad.errors.prior_warnings.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.errors.prior_warnings.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: There's a :will-enter option in form/defsc-form",location,"that will be ignored because ::report/route-prefix is not specified"], null)));

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.form",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NOTE: There's a :will-enter option in form/defsc-form",location,"that will be ignored because ::report/route-prefix is not specified"], null);
}),null)),null,-661595672,null);
}
} else {
}
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_options,new cljs.core.Keyword(null,"query","query",-1288509510),(function (_){
var G__90194 = com.fulcrologic.rad.form.form_options__GT_form_query(base_options);
if(cljs.core.seq(inclusions)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__90194,inclusions);
} else {
return G__90194;
}
}));
});
/**
 * Internal implementation of clj-side form save. Can be used in your own mutations to accomplish writes through
 * the save middleware.
 * 
 * params MUST contain:
 * 
 * * `::form/delta` - The data to save. Map keyed by ident whose values are maps with `:before` and `:after` values.
 * * `::form/id` - The actual ID of the entity being changed.
 * * `::form/master-pk` - The keyword representing the form's ID in your RAD model's attributes.
 * 
 * Returns:
 * 
 * {:tempid {} ; tempid remaps
 *  master-pk id} ; the k/id of the entity saved. The id here will be remapped already if it was a tempid.
 * 
 */
com.fulcrologic.rad.form.save_form_STAR_ = (function com$fulcrologic$rad$form$save_form_STAR_(env,params){
var save_middleware = new cljs.core.Keyword("com.fulcrologic.rad.form","save-middleware","com.fulcrologic.rad.form/save-middleware",-2012160669).cljs$core$IFn$_invoke$arity$1(env);
var save_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.fulcrologic.rad.form","params","com.fulcrologic.rad.form/params",267016742),params);
var result = (cljs.core.truth_(save_middleware)?(save_middleware.cljs$core$IFn$_invoke$arity$1 ? save_middleware.cljs$core$IFn$_invoke$arity$1(save_env) : save_middleware.call(null,save_env)):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("form/pathom-plugin is not installed on the parser.",cljs.core.PersistentArrayMap.EMPTY)})());
var map__90204 = params;
var map__90204__$1 = cljs.core.__destructure_map(map__90204);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90204__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var master_pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90204__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068));
var map__90205 = result;
var map__90205__$1 = cljs.core.__destructure_map(map__90205);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90205__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,id,id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,cljs.core.PersistentArrayMap.createAsIfByAssoc([master_pk,id__$1])], 0));
});
com.fulcrologic.rad.form.pathom2_server_save_form_mutation = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),(function (env,params){
return com.fulcrologic.rad.form.save_form_STAR_(env,params);
}),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),null,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096),null,new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068),null], null), null)], null);
com.fulcrologic.rad.form.pathom2_server_save_as_form_mutation = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.rad.form.pathom2_server_save_form_mutation,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("com.fulcrologic.rad.form","save-as-form","com.fulcrologic.rad.form/save-as-form",650217404,null));
/**
 * MUTATION: DO NOT USE. See save-as-form mutation for a mutation you can use to leverage the form save mechansims for
 *    arbitrary purposes.
 */
com.fulcrologic.rad.form.save_form = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$form$action(___$1){
var _STAR_after_render_STAR__orig_val__90206_90551 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__90207_90552 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__90207_90552);

try{}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__90206_90551);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__90208 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__90209 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__90209);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__90208);
}})], null);
}));
/**
 * MUTATION: Run a full-stack write as-if it were the save of a form. This allows you to leverage the save middleware
 *    to do all of the save magic without using a form. Useful for implementing simple model updates from action buttons.
 * 
 *    Required params:
 * 
 *    :root-ident - The ident of the entity to change
 * 
 *    And ONE of:
 * 
 *    :entity - A flat entity to write at :root-ident
 *    :delta - A proper form delta, a map ident->attr-key->before-after-map.
 * 
 *    If you specify both, only delta will be used.
 * 
 *    This mutation's ok-action will also update the data in the local state.
 */
com.fulcrologic.rad.form.save_as_form = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.form","save-as-form","com.fulcrologic.rad.form/save-as-form",650217404,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.form","save-as-form","com.fulcrologic.rad.form/save-as-form",650217404,null),(function (fulcro_mutation_env_symbol){
var map__90210 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__90210__$1 = cljs.core.__destructure_map(map__90210);
var root_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90210__$1,new cljs.core.Keyword(null,"root-ident","root-ident",-869759776));
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90210__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90210__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$fulcrologic$rad$form$remote(env){
var delta__$1 = (function (){var or__5045__auto__ = delta;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([root_ident,cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",594996914),v], null));
}),cljs.core.PersistentArrayMap.EMPTY,entity)]);
}
})();
return com.fulcrologic.fulcro.mutations.with_params(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068),cljs.core.first(root_ident),new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),cljs.core.second(root_ident),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096),delta__$1], null));
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function com$fulcrologic$rad$form$ok_action(p__90211){
var map__90212 = p__90211;
var map__90212__$1 = cljs.core.__destructure_map(map__90212);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90212__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var tempid__GT_realid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90212__$1,new cljs.core.Keyword(null,"tempid->realid","tempid->realid",1168652437));
var _STAR_after_render_STAR__orig_val__90213_90553 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__90214_90554 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__90214_90554);

try{if(cljs.core.truth_(delta)){
var seq__90215_90555 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(delta,tempid__GT_realid));
var chunk__90217_90556 = null;
var count__90218_90557 = (0);
var i__90219_90558 = (0);
while(true){
if((i__90219_90558 < count__90218_90557)){
var vec__90227_90559 = chunk__90217_90556.cljs$core$IIndexed$_nth$arity$2(null,i__90219_90558);
var ident_90560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90227_90559,(0),null);
var changes_90561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90227_90559,(1),null);
var data_to_merge_90562 = cljs.core.reduce_kv(((function (seq__90215_90555,chunk__90217_90556,count__90218_90557,i__90219_90558,vec__90227_90559,ident_90560,changes_90561,_STAR_after_render_STAR__orig_val__90213_90553,_STAR_after_render_STAR__temp_val__90214_90554,map__90212,map__90212__$1,state,tempid__GT_realid,map__90210,map__90210__$1,root_ident,entity,delta){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(v));
});})(seq__90215_90555,chunk__90217_90556,count__90218_90557,i__90219_90558,vec__90227_90559,ident_90560,changes_90561,_STAR_after_render_STAR__orig_val__90213_90553,_STAR_after_render_STAR__temp_val__90214_90554,map__90212,map__90212__$1,state,tempid__GT_realid,map__90210,map__90210__$1,root_ident,entity,delta))
,cljs.core.PersistentArrayMap.EMPTY,changes_90561);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ident_90560,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_to_merge_90562], 0));


var G__90563 = seq__90215_90555;
var G__90564 = chunk__90217_90556;
var G__90565 = count__90218_90557;
var G__90566 = (i__90219_90558 + (1));
seq__90215_90555 = G__90563;
chunk__90217_90556 = G__90564;
count__90218_90557 = G__90565;
i__90219_90558 = G__90566;
continue;
} else {
var temp__5804__auto___90567 = cljs.core.seq(seq__90215_90555);
if(temp__5804__auto___90567){
var seq__90215_90568__$1 = temp__5804__auto___90567;
if(cljs.core.chunked_seq_QMARK_(seq__90215_90568__$1)){
var c__5568__auto___90569 = cljs.core.chunk_first(seq__90215_90568__$1);
var G__90570 = cljs.core.chunk_rest(seq__90215_90568__$1);
var G__90571 = c__5568__auto___90569;
var G__90572 = cljs.core.count(c__5568__auto___90569);
var G__90573 = (0);
seq__90215_90555 = G__90570;
chunk__90217_90556 = G__90571;
count__90218_90557 = G__90572;
i__90219_90558 = G__90573;
continue;
} else {
var vec__90230_90574 = cljs.core.first(seq__90215_90568__$1);
var ident_90575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90230_90574,(0),null);
var changes_90576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90230_90574,(1),null);
var data_to_merge_90577 = cljs.core.reduce_kv(((function (seq__90215_90555,chunk__90217_90556,count__90218_90557,i__90219_90558,vec__90230_90574,ident_90575,changes_90576,seq__90215_90568__$1,temp__5804__auto___90567,_STAR_after_render_STAR__orig_val__90213_90553,_STAR_after_render_STAR__temp_val__90214_90554,map__90212,map__90212__$1,state,tempid__GT_realid,map__90210,map__90210__$1,root_ident,entity,delta){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(v));
});})(seq__90215_90555,chunk__90217_90556,count__90218_90557,i__90219_90558,vec__90230_90574,ident_90575,changes_90576,seq__90215_90568__$1,temp__5804__auto___90567,_STAR_after_render_STAR__orig_val__90213_90553,_STAR_after_render_STAR__temp_val__90214_90554,map__90212,map__90212__$1,state,tempid__GT_realid,map__90210,map__90210__$1,root_ident,entity,delta))
,cljs.core.PersistentArrayMap.EMPTY,changes_90576);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ident_90575,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_to_merge_90577], 0));


var G__90578 = cljs.core.next(seq__90215_90568__$1);
var G__90579 = null;
var G__90580 = (0);
var G__90581 = (0);
seq__90215_90555 = G__90578;
chunk__90217_90556 = G__90579;
count__90218_90557 = G__90580;
i__90219_90558 = G__90581;
continue;
}
} else {
}
}
break;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(root_ident,tempid__GT_realid),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(entity,tempid__GT_realid)], 0));
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__90213_90553);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__90233 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__90234 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__90234);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__90233);
}})], null);
}));
com.fulcrologic.rad.form.start_edit = (function com$fulcrologic$rad$form$start_edit(uism_env,_){
var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,751,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Issuing load of pre-existing form entity",form_ident], null);
}),null)),null,-842947618,null);

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.load.cljs$core$IFn$_invoke$arity$4(uism_env,form_ident,FormClass,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("event","failed","event/failed",-1561105400)], null)),new cljs.core.Keyword("state","loading","state/loading",-628573180));
});
/**
 * Use `default-state` on the top level form. This is part of the recursive implementation.
 * 
 * Calculate a default value for any to-many attributes on the form. This is part of the recursive algorithm that
 * can generate initial state for a new instance of a form.
 * 
 * If a form has subform configuration that declares a `::form/default` which is a vector, then each element
 * in that vector will generate new subform state.
 * 
 * The result will be a `merge` of:
 * 
 * ```
 * (merge (form/default-state SubformClass id) default-value {id-key id})
 * ```
 * 
 * If no defaults are provided you will at least get something that will normalize properly.
 * 
 * Example:
 * 
 * ```
 * (defattr people :people :ref
 *   {::attr/cardinality :many
 *    ::form/default-value [{}] ; used if form doesn't declare
 *    ...})
 * 
 * (defsc Form [this props]
 *   {::form/id id
 *    ::form/columns [people]
 *    ::form/default-values {:people [{} {} {}]} ; overrides what is on attributes
 *    ::form/subforms {:people {::form/ui Person}}})
 * ```
 * 
 * Default value can be a 0-arg function. Each *value* can be a 1-arg function that receives a tempid to put on the
 * new default entity.
 * 
 */
com.fulcrologic.rad.form.default_to_many = (function com$fulcrologic$rad$form$default_to_many(FormClass,attribute){
var form_options = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__90235 = attribute;
var map__90235__$1 = cljs.core.__destructure_map(map__90235);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90235__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var default_value = com.fulcrologic.rad.form_options.get_default_value(form_options,attribute);
var b2__2953__auto__ = com.fulcrologic.rad.form.subform_ui(form_options,attribute);
if(cljs.core.truth_(b2__2953__auto__)){
var SubClass = b2__2953__auto__;
if(cljs.core.truth_(SubClass)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,801,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subforms for class",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_name.call(null,FormClass)),"must include a ::form/ui entry for",qualified_key], null);
}),null)),null,2122651868,null);
}

if((((default_value == null)) || (cljs.core.vector_QMARK_(default_value)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
var id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var base_entity = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
var vec__90236 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(SubClass,base_entity) : com.fulcrologic.fulcro.components.get_ident.call(null,SubClass,base_entity));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90236,(0),null);
var iid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90236,(1),null);
var ident = vec__90236;
var ChildForm = (cljs.core.truth_((com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1(SubClass) : com.fulcrologic.fulcro.components.union_component_QMARK_.call(null,SubClass)))?(function (){var G__90239 = SubClass;
var G__90239__$1 = (((G__90239 == null))?null:com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(G__90239));
var G__90239__$2 = (((G__90239__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__90239__$1,k));
if((G__90239__$2 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.query__GT_component.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.query__GT_component.cljs$core$IFn$_invoke$arity$1(G__90239__$2) : com.fulcrologic.fulcro.components.query__GT_component.call(null,G__90239__$2));
}
})():SubClass);
var id_key = (function (){var G__90240 = ChildForm;
var G__90240__$1 = (((G__90240 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90240) : com.fulcrologic.fulcro.components.component_options.call(null,G__90240)));
var G__90240__$2 = (((G__90240__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937).cljs$core$IFn$_invoke$arity$1(G__90240__$1));
if((G__90240__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(G__90240__$2);
}
})();
if(cljs.core.truth_(ChildForm)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,813,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Union subform's default-value function failed to assign the ID. Cannot determine which kind of thing we are creating"], null);
}),null)),null,605530008,null);
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.fulcrologic.rad.form.default_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.default_state.cljs$core$IFn$_invoke$arity$2(ChildForm,id) : com.fulcrologic.rad.form.default_state.call(null,ChildForm,id)),base_entity,cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,id])], 0));
}),default_value);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,820,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Default value for",qualified_key,"MUST be a vector."], null);
}),null)),null,557058476,null);

return null;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,823,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subform not declared (or is missing ::form/id) for",qualified_key,"on",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_name.call(null,FormClass))], null);
}),null)),null,-1061657521,null);

return null;
}
});
/**
 * Use `default-state` on the top level form. This is part of the recursive implementation.
 * 
 *   Generates the default value for a to-one ref in a new instance of a form set. Has the same
 *   behavior as default-to-many, though the default values must be a map instead of a vector.
 * 
 *   Default value can be a no-arg function, but the argument list may change in future versions.
 * 
 *   The final result that will appear in the app state will be:
 * 
 *   ```
 *    (merge
 *      (default-state SubClass new-id)
 *      (when (map? default-value) default-value) ; local form's default value
 *      {id-key new-id})
 *   ```
 * 
 *   where `SubClass` is the UI class of the subform for the relation.
 *   
 */
com.fulcrologic.rad.form.default_to_one = (function com$fulcrologic$rad$form$default_to_one(FormClass,attribute){
var form_options = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__90241 = attribute;
var map__90241__$1 = cljs.core.__destructure_map(map__90241);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90241__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var default_value = com.fulcrologic.rad.form_options.get_default_value(form_options,attribute);
var SubClass = com.fulcrologic.rad.form.subform_ui(form_options,attribute);
var new_id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var id_key = (function (){var G__90242 = SubClass;
if((G__90242 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(G__90242,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)) : com.fulcrologic.fulcro.components.component_options.call(null,G__90242,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949)));
}
})();
if(cljs.core.truth_((com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1(SubClass) : com.fulcrologic.fulcro.components.union_component_QMARK_.call(null,SubClass)))){
return null;
} else {
if(cljs.core.truth_(SubClass)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,854,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subforms for class",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_name.call(null,FormClass)),"must include a ::form/ui entry for",qualified_key], null);
}),null)),null,513502365,null);
}

if((id_key instanceof cljs.core.Keyword)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,857,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Subform class",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(SubClass) : com.fulcrologic.fulcro.components.component_name.call(null,SubClass)),"must include a ::form/id that is an attr/attribute"], null);
}),null)),null,-1947752233,null);
}

if(cljs.core.truth_(id_key)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.fulcrologic.rad.form.default_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.default_state.cljs$core$IFn$_invoke$arity$2(SubClass,new_id) : com.fulcrologic.rad.form.default_state.call(null,SubClass,new_id)),((cljs.core.map_QMARK_(default_value))?default_value:null),cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,new_id])], 0));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
});
/**
 * Generate a potentially recursive tree of data that represents the tree of initial
 *   state for the given FormClass. Such generated trees will be rooted with the provided
 *   `new-id`, and will generate Fulcro tempids for all nested entities. To-one relations
 *   that have no default will not be included. To-many relations that have no default
 *   will default to an empty vector.
 * 
 *   The FormClass can have `::form/default-values`, a map from attribute *keyword* to the value
 *   to give that attribute in new instances of the form. A global default can be set on the
 *   attribute itself using `::form/default-value`.
 * 
 *   See the doc strings on default-to-one and default-to-many for more information on setting options.
 * 
 *   WARNING: If a rendering field style is given to a ref attribute on a field, then the default value will be
 *   the *raw* default value declared on the attribute or form, but should generally be nil.
 */
com.fulcrologic.rad.form.default_state = (function com$fulcrologic$rad$form$default_state(FormClass,new_id){
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(new_id)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Default state received ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_id)," for a new form ID. It MUST be a Fulcro tempid."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.truth_((com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.union_component_QMARK_.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.union_component_QMARK_.call(null,FormClass)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var map__90243 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__90243__$1 = cljs.core.__destructure_map(map__90243);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90243__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90243__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var default_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90243__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-values","com.fulcrologic.rad.form/default-values",1185533844));
var initialize_ui_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90243__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initialize-ui-props","com.fulcrologic.rad.form/initialize-ui-props",-1823698482));
var field_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90243__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968));
var map__90244 = id;
var map__90244__$1 = cljs.core.__destructure_map(map__90244);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90244__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var entity = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__90245){
var map__90246 = p__90245;
var map__90246__$1 = cljs.core.__destructure_map(map__90246);
var attr = map__90246__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90246__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90246__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var field_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90246__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","field-style","com.fulcrologic.rad.attributes/field-style",1264685858));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90246__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-value","com.fulcrologic.rad.form/default-value",-28925395));
var field_style__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_((function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_styles,qualified_key);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return field_style;
}
})());
var default_value__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(default_values,qualified_key,default_value));
if(((cljs.core.not(field_style__$1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type)) && (com.fulcrologic.rad.attributes.to_many_QMARK_(attr)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,qualified_key,com.fulcrologic.rad.form.default_to_many(FormClass,attr));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = default_value__$1;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.not(field_style__$1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type)) && ((!(com.fulcrologic.rad.attributes.to_many_QMARK_(attr)))))));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,qualified_key,com.fulcrologic.rad.form.default_to_one(FormClass,attr));
} else {
if((!((default_value__$1 == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,qualified_key,default_value__$1);
} else {
return result;
}

}
}
}),cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,new_id]),attributes);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(initialize_ui_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,entity], 0)),entity], 0));
}
});
/**
 * Same as dynamic routing target-ready, but works in UISM via env.
 */
com.fulcrologic.rad.form.route_target_ready = (function com$fulcrologic$rad$form$route_target_ready(p__90247,target){
var map__90248 = p__90247;
var map__90248__$1 = cljs.core.__destructure_map(map__90248);
var env = map__90248__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90248__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var router_id = com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,target);
if(cljs.core.truth_(router_id)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,916,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Router",router_id,"notified that pending route is ready."], null);
}),null)),null,-143816669,null);

return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3(env,router_id,new cljs.core.Keyword(null,"ready!","ready!",-1695278696));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,919,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dr/target-ready! was called but there was no router waiting for the target listed: ",target,"This could mean you sent one ident, and indicated ready on another."], null);
}),null)),null,1037161444,null);

return env;
}
});
/**
 * Helper function against app state. This function marks `target-keys` as complete on the form given a set of
 * keys that you consider initialized. Like form state's mark-complete, but on all of the target-keys that appear
 * on the form or subforms recursively.
 */
com.fulcrologic.rad.form.mark_fields_complete_STAR_ = (function com$fulcrologic$rad$form$mark_fields_complete_STAR_(state_map,p__90249){
var map__90250 = p__90249;
var map__90250__$1 = cljs.core.__destructure_map(map__90250);
var entity_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90250__$1,new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419));
var target_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90250__$1,new cljs.core.Keyword(null,"target-keys","target-keys",-1034341011));
var mark_complete_STAR_ = (function (entity,p__90251){
var map__90252 = p__90251;
var map__90252__$1 = cljs.core.__destructure_map(map__90252);
var form_config = map__90252__$1;
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90252__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","fields","com.fulcrologic.fulcro.algorithms.form-state/fields",-71495833));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90252__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344));
var to_mark = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(complete_QMARK_),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(fields),cljs.core.set(target_keys)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_config,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.form-state","complete?","com.fulcrologic.fulcro.algorithms.form-state/complete?",-1647562344),to_mark)], null);
});
return com.fulcrologic.fulcro.algorithms.form_state.update_forms.cljs$core$IFn$_invoke$arity$3(state_map,mark_complete_STAR_,entity_ident);
});
/**
 * Mark fields complete. Use `mark-fields-complete*` instead, but note the signature change.
 */
com.fulcrologic.rad.form.mark_filled_fields_complete_STAR_ = (function com$fulcrologic$rad$form$mark_filled_fields_complete_STAR_(state_map,p__90253){
var map__90254 = p__90253;
var map__90254__$1 = cljs.core.__destructure_map(map__90254);
var entity_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90254__$1,new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419));
var initialized_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90254__$1,new cljs.core.Keyword(null,"initialized-keys","initialized-keys",1245023726));
return com.fulcrologic.rad.form.mark_fields_complete_STAR_(state_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419),entity_ident,new cljs.core.Keyword(null,"target-keys","target-keys",-1034341011),initialized_keys], null));
});
com.fulcrologic.rad.form.all_keys = (function com$fulcrologic$rad$form$all_keys(m){
return cljs.core.reduce_kv((function (result,k,v){
var G__90255 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,k);
if(cljs.core.map_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__90255,(com.fulcrologic.rad.form.all_keys.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.all_keys.cljs$core$IFn$_invoke$arity$1(v) : com.fulcrologic.rad.form.all_keys.call(null,v)));
} else {
return G__90255;
}
}),cljs.core.PersistentHashSet.EMPTY,m);
});
com.fulcrologic.rad.form.start_create = (function com$fulcrologic$rad$form$start_create(p__90256,start_params){
var map__90257 = p__90256;
var map__90257__$1 = cljs.core.__destructure_map(map__90257);
var uism_env = map__90257__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90257__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var form_overrides = new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(start_params);
var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var routeable_QMARK_ = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass)),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703)));
var route_pending_QMARK_ = ((routeable_QMARK_) && ((!((com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,form_ident) == null)))));
var id = cljs.core.second(form_ident);
var initial_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.default_state(FormClass,id),form_overrides], 0));
var entity_to_merge = com.fulcrologic.fulcro.algorithms.form_state.add_form_config.cljs$core$IFn$_invoke$arity$2(FormClass,initial_state);
var initialized_keys = com.fulcrologic.rad.form.all_keys(initial_state);
var optional_keys = com.fulcrologic.rad.form.optional_fields(FormClass);
return com.fulcrologic.fulcro.ui_state_machines.activate((function (){var G__90258 = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(uism_env,com.fulcrologic.fulcro.algorithms.merge.merge_component,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,entity_to_merge], 0)),com.fulcrologic.rad.form.mark_fields_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419),form_ident,new cljs.core.Keyword(null,"target-keys","target-keys",-1034341011),clojure.set.union.cljs$core$IFn$_invoke$arity$2(initialized_keys,optional_keys)], null)], 0));
if(route_pending_QMARK_){
return com.fulcrologic.rad.form.route_target_ready(G__90258,form_ident);
} else {
return G__90258;
}
})(),new cljs.core.Keyword("state","editing","state/editing",1406008034));
});
/**
 * Discard all changes, and attempt to change route.
 */
com.fulcrologic.rad.form.leave_form = (function com$fulcrologic$rad$form$leave_form(p__90259){
var map__90260 = p__90259;
var map__90260__$1 = cljs.core.__destructure_map(map__90260);
var uism_env = map__90260__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90260__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(uism_env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var state_map = com.fulcrologic.fulcro.raw.application.current_state(fulcro_app);
var cancel_route = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__90262 = Form;
var G__90262__$1 = (((G__90262 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90262) : com.fulcrologic.fulcro.components.component_options.call(null,G__90262)));
if((G__90262__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","cancel-route","com.fulcrologic.rad.form/cancel-route",-1144534404).cljs$core$IFn$_invoke$arity$1(G__90262__$1);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_app,com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,Form,form_ident)], 0));
var map__90261 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(uism_env,new cljs.core.Keyword(null,"options","options",99638489));
var map__90261__$1 = cljs.core.__destructure_map(map__90261);
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90261__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var embedded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90261__$1,new cljs.core.Keyword(null,"embedded?","embedded?",298781012));
var use_history = ((cljs.core.not(embedded_QMARK_)) && (com.fulcrologic.rad.routing.history.history_support_QMARK_(fulcro_app)));
var error_BANG_ = (function (msg){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,973,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The cancel-route option of",(com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_name.cljs$core$IFn$_invoke$arity$1(Form) : com.fulcrologic.fulcro.components.component_name.call(null,Form)),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cancel_route),")"].join(''),msg], null);
}),null)),null,1789998428,null);
});
var routing_action = (function (){
if(cljs.core.map_QMARK_(cancel_route)){
var map__90263 = cancel_route;
var map__90263__$1 = cljs.core.__destructure_map(map__90263);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90263__$1,new cljs.core.Keyword(null,"route","route",329891309));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90263__$1,new cljs.core.Keyword(null,"target","target",253001721));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90263__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(com.fulcrologic.fulcro.components.component_class_QMARK_(target)){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro_app,target,(function (){var or__5045__auto__ = params;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
} else {
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,route)){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro_app,route,params);
} else {
error_BANG_("did not return a valid route.");

return new cljs.core.Keyword(null,"back","back",-417520012);

}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),cancel_route)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"back","back",-417520012),cancel_route)){
if(com.fulcrologic.rad.routing.history.history_support_QMARK_(fulcro_app)){
if(cljs.core.not(embedded_QMARK_)){
return com.fulcrologic.rad.routing.history.back_BANG_(fulcro_app);
} else {
return null;
}
} else {
return error_BANG_("Back not supported. No history installed.");
}
} else {
if(((cljs.core.seq(cancel_route)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,cancel_route)))){
return com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$2(fulcro_app,cancel_route);
} else {
if(com.fulcrologic.fulcro.components.component_class_QMARK_(cancel_route)){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro_app,cancel_route,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(use_history){
return com.fulcrologic.rad.routing.history.back_BANG_(fulcro_app);
} else {
return null;
}
}
}
}
}
}
});
com.fulcrologic.fulcro.algorithms.scheduling.defer(routing_action,(100));

return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.store((function (){var G__90264 = uism_env;
if(cljs.core.truth_(on_cancel)){
return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2(G__90264,on_cancel);
} else {
return G__90264;
}
})(),new cljs.core.Keyword(null,"abandoned?","abandoned?",1788912865),true),com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.form","calc-diff","com.fulcrologic.rad.form/calc-diff",-227463346,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__90269){
return cljs.core.map_QMARK_(G__90269);
}),(function (G__90269){
return cljs.core.contains_QMARK_(G__90269,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096));
})], null),(function (G__90269){
return ((cljs.core.map_QMARK_(G__90269)) && (cljs.core.contains_QMARK_(G__90269,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null)),null,null,null));


/**
 * Calculates the minimal form diff from the UISM env of the master form's state machine.
 * @type {function(*): !cljs.core.IMap}
 */
com.fulcrologic.rad.form.calc_diff = (function com$fulcrologic$rad$form$calc_diff(uism_env){
var map__90270 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"uism-env","uism-env",-1931388699),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","env","com.fulcrologic.fulcro.ui-state-machines/env",396092855)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__90271){
return cljs.core.map_QMARK_(G__90271);
}),(function (G__90271){
return cljs.core.contains_QMARK_(G__90271,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096));
})], null),(function (G__90271){
return ((cljs.core.map_QMARK_(G__90271)) && (cljs.core.contains_QMARK_(G__90271,new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096)], null)),null,null,null);
var map__90270__$1 = cljs.core.__destructure_map(map__90270);
var argspec90265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90270__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec90266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90270__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec90265)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:997 calc-diff's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec90265,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uism_env], null));
} else {
}

var f90268 = (function (uism_env__$1){
var map__90272 = uism_env__$1;
var map__90272__$1 = cljs.core.__destructure_map(map__90272);
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90272__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(uism_env__$1,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env__$1,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var props = com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,Form,form_ident);
var delta = com.fulcrologic.fulcro.algorithms.form_state.dirty_fields.cljs$core$IFn$_invoke$arity$2(props,true);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096),delta], null);
});
var ret90267 = f90268(uism_env);
if(cljs.core.truth_(retspec90266)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:997 calc-diff's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec90266,ret90267);
} else {
}

return ret90267;
});
/**
 * UISM helper. Clears the server errors on the form.
 */
com.fulcrologic.rad.form.clear_server_errors = (function com$fulcrologic$rad$form$clear_server_errors(uism_env){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(uism_env,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),cljs.core.PersistentVector.EMPTY);
});
com.fulcrologic.rad.form.global_events = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("event","exit","event/exit",373463484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.exit(env);
})], null),new cljs.core.Keyword("event","reload","event/reload",692165289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var vec__90273 = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90273,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90273,(1),null);
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(id)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1018,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot load a new thing!"], null);
}),null)),null,-1687900881,null);
} else {
return com.fulcrologic.rad.form.start_edit(env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031).cljs$core$IFn$_invoke$arity$1(env));
}
})], null),new cljs.core.Keyword("event","mark-complete","event/mark-complete",-256617070),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(env,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
})], null)], null);
com.fulcrologic.rad.form.mark_all_complete_BANG_ = (function com$fulcrologic$rad$form$mark_all_complete_BANG_(master_form_instance){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(master_form_instance,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form_instance)),new cljs.core.Keyword("event","mark-complete","event/mark-complete",-256617070));
});
/**
 * Create any to-one referenced entities that did not load, but which are marked as auto-create.
 */
com.fulcrologic.rad.form.auto_create_to_one = (function com$fulcrologic$rad$form$auto_create_to_one(p__90276){
var map__90277 = p__90276;
var map__90277__$1 = cljs.core.__destructure_map(map__90277);
var env = map__90277__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90277__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,form_ident);
var map__90278 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__90278__$1 = cljs.core.__destructure_map(map__90278);
var form_options = map__90278__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90278__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var subforms = (com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.subform_options.cljs$core$IFn$_invoke$arity$1(form_options) : com.fulcrologic.rad.form.subform_options.call(null,form_options));
var possible_keys = cljs.core.set(cljs.core.keys(subforms));
var attrs_to_create = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__90279){
var map__90280 = p__90279;
var map__90280__$1 = cljs.core.__destructure_map(map__90280);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90280__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90280__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90280__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
return ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(subforms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,new cljs.core.Keyword("com.fulcrologic.rad.form","autocreate-on-load?","com.fulcrologic.rad.form/autocreate-on-load?",-1412919550)], null)) === true) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_value,qualified_key) == null)) && (((cljs.core.contains_QMARK_(possible_keys,qualified_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"one","one",935007904))) || ((cardinality == null)))))))))));
})),attributes);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__90281){
var map__90282 = p__90281;
var map__90282__$1 = cljs.core.__destructure_map(map__90282);
var _attr = map__90282__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90282__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90282__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039));
var map__90283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(subforms,qualified_key);
var map__90283__$1 = cljs.core.__destructure_map(map__90283);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90283__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864));
var id = com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
var new_entity = com.fulcrologic.rad.form.default_state(ui,id);
var new_ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,id], null);
if(cljs.core.truth_(ui)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1051,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::form/ui missing in subforms for autocreate target",qualified_key], null);
}),null)),null,1916019968,null);
}

if(cljs.core.truth_(target)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1052,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reference attribute is missing ::attr/target",qualified_key], null);
}),null)),null,-1191932006,null);
}

return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(env__$1,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_ident,qualified_key),new_ident], 0)),cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ident,new_entity], 0));
}),env,attrs_to_create);
});
/**
 * Run the given `(xform ui-props)` against the current ui props of `component-class`'s instance at `component-ident`
 *   in `state-map`. Returns an updated state map with the transformed ui-props re-normalized and merged back into app state.
 */
com.fulcrologic.rad.form.update_tree_STAR_ = (function com$fulcrologic$rad$form$update_tree_STAR_(state_map,xform,component_class,component_ident){
if(cljs.core.truth_((function (){var and__5043__auto__ = xform;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = component_class;
if(cljs.core.truth_(and__5043__auto____$1)){
return component_ident;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var ui_props = com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,component_class,component_ident);
var new_ui_props = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(ui_props) : xform.call(null,ui_props));
var new_state_map = com.fulcrologic.fulcro.algorithms.merge.merge_component(state_map,component_class,new_ui_props);
return new_state_map;
} else {
return state_map;
}
});
/**
 * Apply derived calcuations to the form using the UISM env of the master form. Derived calculations are configured on
 * the form via `::form/triggers` `:derive-fields` function (a fn of ui props that must return new ui props).
 * 
 * Derived field calculations are first performed on the (sub)form on which the attribute that changed exists, and then
 * via any defined trigger on the master form (assuming it isn't the same form).
 * 
 * The `:derive-fields` functions should be pure functions.
 */
com.fulcrologic.rad.form.apply_derived_calculations = (function com$fulcrologic$rad$form$apply_derived_calculations(p__90284){
var map__90285 = p__90284;
var map__90285__$1 = cljs.core.__destructure_map(map__90285);
var env = map__90285__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90285__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__90286 = event_data;
var map__90286__$1 = cljs.core.__destructure_map(map__90286);
var form_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90286__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var form_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90286__$1,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473));
var form_class = (function (){var G__90291 = form_key;
if((G__90291 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__90291) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__90291));
}
})();
var master_form_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var master_form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__90287 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(master_form_class) : com.fulcrologic.fulcro.components.component_options.call(null,master_form_class));
var map__90287__$1 = cljs.core.__destructure_map(map__90287);
var map__90288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90287__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90288__$1 = cljs.core.__destructure_map(map__90288);
var master_derive_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90288__$1,new cljs.core.Keyword(null,"derive-fields","derive-fields",1006749330));
var map__90289 = (function (){var G__90292 = form_class;
if((G__90292 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90292) : com.fulcrologic.fulcro.components.component_options.call(null,G__90292));
}
})();
var map__90289__$1 = cljs.core.__destructure_map(map__90289);
var map__90290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90289__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90290__$1 = cljs.core.__destructure_map(map__90290);
var derive_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90290__$1,new cljs.core.Keyword(null,"derive-fields","derive-fields",1006749330));
var G__90293 = env;
var G__90293__$1 = (cljs.core.truth_(derive_fields)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90293,com.fulcrologic.rad.form.update_tree_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([derive_fields,form_class,form_ident], 0)):G__90293);
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(master_form_class,form_class);
if(and__5043__auto__){
return master_derive_fields;
} else {
return and__5043__auto__;
}
})())){
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90293__$1,com.fulcrologic.rad.form.update_tree_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([master_derive_fields,master_form_class,master_form_ident], 0));
} else {
return G__90293__$1;
}
});
/**
 * UISM handler for invoking a form's `initialize-ui-props` option.
 */
com.fulcrologic.rad.form.handle_user_ui_props = (function com$fulcrologic$rad$form$handle_user_ui_props(p__90294,FormClass,form_ident){
var map__90295 = p__90294;
var map__90295__$1 = cljs.core.__destructure_map(map__90295);
var env = map__90295__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90295__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__90296 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass));
var map__90296__$1 = cljs.core.__destructure_map(map__90296);
var initialize_ui_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90296__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initialize-ui-props","com.fulcrologic.rad.form/initialize-ui-props",-1823698482));
if(cljs.core.truth_(initialize_ui_props)){
var denorm_props = com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(state_map,FormClass,form_ident);
var predefined_keys = cljs.core.set(cljs.core.keys(denorm_props));
var ui_props = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(initialize_ui_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,denorm_props], 0));
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(FormClass,state_map);
var k__GT_component = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__90297){
var map__90298 = p__90297;
var map__90298__$1 = cljs.core.__destructure_map(map__90298);
var _node = map__90298__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90298__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90298__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core.truth_(component)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,component]);
} else {
return null;
}
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
var all_keys = cljs.core.set(cljs.core.keys(ui_props));
var allowed_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_keys,predefined_keys);
var populate_data = (function (sm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
var raw_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_props,k);
var c = (k__GT_component.cljs$core$IFn$_invoke$arity$1 ? k__GT_component.cljs$core$IFn$_invoke$arity$1(k) : k__GT_component.call(null,k));
var component_ident = (cljs.core.truth_(c)?(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(c,raw_value) : com.fulcrologic.fulcro.components.get_ident.call(null,c,raw_value)):null);
var value_to_place = (cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ((cljs.core.vector_QMARK_(component_ident)) && ((!((cljs.core.second(component_ident) == null)))));
} else {
return and__5043__auto__;
}
})())?component_ident:raw_value);
var G__90299 = cljs.core.assoc_in(s,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_ident,k),value_to_place);
if(cljs.core.truth_(c)){
return com.fulcrologic.fulcro.algorithms.merge.merge_component(G__90299,c,raw_value);
} else {
return G__90299;
}
}),sm,allowed_keys);
});
return com.fulcrologic.fulcro.ui_state_machines.apply_action(env,populate_data);
} else {
return env;
}
});
com.fulcrologic.rad.form.protected_on_change = (function com$fulcrologic$rad$form$protected_on_change(env,on_change,form_ident,qualified_key,old_value,value){
var new_env = (on_change.cljs$core$IFn$_invoke$arity$5 ? on_change.cljs$core$IFn$_invoke$arity$5(env,form_ident,qualified_key,old_value,value) : on_change.call(null,env,form_ident,qualified_key,old_value,value));
if((((new_env == null)) || (cljs.core.contains_QMARK_(new_env,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138))))){
return new_env;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1127,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invalid on-change handler! It MUST return an updated env!"], null);
}),null)),null,-1825453842,null);

return env;
}
});
com.fulcrologic.rad.form.run_on_saved = (function com$fulcrologic$rad$form$run_on_saved(env){
try{var vec__90301 = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var id_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90301,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90301,(1),null);
var form_ident = vec__90301;
var map__90304 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__90304__$1 = cljs.core.__destructure_map(map__90304);
var on_saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90304__$1,new cljs.core.Keyword(null,"on-saved","on-saved",1116356889));
var on_saved__$1 = (cljs.core.truth_(on_saved)?(function (){var map__90305 = edn_query_language.core.query__GT_ast(on_saved);
var map__90305__$1 = cljs.core.__destructure_map(map__90305);
var ast = map__90305__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var new_ast = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__90306){
var map__90307 = p__90306;
var map__90307__$1 = cljs.core.__destructure_map(map__90307);
var node = map__90307__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90307__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"call","call",-519999866))){
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),id_key], null),id);
} else {
return node;
}
}),children));
var txn = edn_query_language.core.ast__GT_query(new_ast);
return txn;
})():null);
if(cljs.core.seq(on_saved__$1)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,1147,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running on-saved tx:",on_saved__$1], null);
}),null)),null,99705636,null);

return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2(env,on_saved__$1);
} else {
return env;
}
}catch (e90300){var e = e90300;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Could not run the on-saved transaction"], null);
}),null)),null,330090073,null);
}});
com.fulcrologic.rad.form.form_machine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"confirmation-message","confirmation-message",-1177008026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("ui","confirmation-message","ui/confirmation-message",-1177012486)], null),new cljs.core.Keyword(null,"route-denied?","route-denied?",1600955722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("ui","route-denied?","ui/route-denied?",1601001182)], null),new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__90309 = env;
var map__90309__$1 = cljs.core.__destructure_map(map__90309);
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90309__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__90310 = event_data;
var map__90310__$1 = cljs.core.__destructure_map(map__90310);
var create_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90310__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","create?","com.fulcrologic.rad.form/create?",-1691842893));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__90311 = (function (){var G__90313 = Form;
if((G__90313 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90313) : com.fulcrologic.fulcro.components.component_options.call(null,G__90313));
}
})();
var map__90311__$1 = cljs.core.__destructure_map(map__90311);
var map__90312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90311__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90312__$1 = cljs.core.__destructure_map(map__90312);
var started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90312__$1,new cljs.core.Keyword(null,"started","started",585705024));
var G__90314 = com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"options","options",99638489),event_data);
var G__90314__$1 = (cljs.core.truth_(create_QMARK_)?com.fulcrologic.rad.form.start_create(G__90314,event_data):G__90314);
var G__90314__$2 = ((cljs.core.not(create_QMARK_))?com.fulcrologic.rad.form.start_edit(G__90314__$1,event_data):G__90314__$1);
if(cljs.core.fn_QMARK_(started)){
return (started.cljs$core$IFn$_invoke$arity$2 ? started.cljs$core$IFn$_invoke$arity$2(G__90314__$2,form_ident) : started.call(null,G__90314__$2,form_ident));
} else {
return G__90314__$2;
}
})], null),new cljs.core.Keyword("state","loading","state/loading",-628573180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90315){
var map__90316 = p__90315;
var map__90316__$1 = cljs.core.__destructure_map(map__90316);
var env = map__90316__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90316__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,1181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loaded. Marking the form complete."], null);
}),null)),null,-1455312547,null);

var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var routeable_QMARK_ = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass)),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703)));
var route_pending_QMARK_ = ((routeable_QMARK_) && ((!((com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,form_ident) == null)))));
return com.fulcrologic.fulcro.ui_state_machines.activate((function (){var G__90317 = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.handle_user_ui_props(com.fulcrologic.rad.form.auto_create_to_one(com.fulcrologic.rad.form.clear_server_errors(env)),FormClass,form_ident),com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,form_ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destructive?","destructive?",1136140718),true], null)], 0)),com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
if(route_pending_QMARK_){
return com.fulcrologic.rad.form.route_target_ready(G__90317,form_ident);
} else {
return G__90317;
}
})(),new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Load failed."], null)], null));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","asking-to-discard-changes","state/asking-to-discard-changes",-2141307476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","ok","event/ok",803597750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.form.leave_form], null),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","saving","state/saving",-726221934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","save-failed","event/save-failed",666208196),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__90318 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__90318__$1 = cljs.core.__destructure_map(map__90318);
var on_save_failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90318__$1,new cljs.core.Keyword(null,"on-save-failed","on-save-failed",-1229172380));
var errors = (function (){var G__90321 = env;
var G__90321__$1 = (((G__90321 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031).cljs$core$IFn$_invoke$arity$1(G__90321));
var G__90321__$2 = (((G__90321__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-result","com.fulcrologic.fulcro.ui-state-machines/mutation-result",-1418456314).cljs$core$IFn$_invoke$arity$1(G__90321__$1));
var G__90321__$3 = (((G__90321__$2 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__90321__$2));
var G__90321__$4 = (((G__90321__$3 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__90321__$3,new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null)));
if((G__90321__$4 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443).cljs$core$IFn$_invoke$arity$1(G__90321__$4);
}
})();
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__90319 = (function (){var G__90322 = Form;
if((G__90322 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90322) : com.fulcrologic.fulcro.components.component_options.call(null,G__90322));
}
})();
var map__90319__$1 = cljs.core.__destructure_map(map__90319);
var map__90320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90319__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90320__$1 = cljs.core.__destructure_map(map__90320);
var save_failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90320__$1,new cljs.core.Keyword(null,"save-failed","save-failed",616502634));
var G__90323 = com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","editing","state/editing",1406008034));
var G__90323__$1 = ((cljs.core.seq(errors))?com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__90323,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),errors):G__90323);
var G__90323__$2 = (cljs.core.truth_(save_failed)?(save_failed.cljs$core$IFn$_invoke$arity$2 ? save_failed.cljs$core$IFn$_invoke$arity$2(G__90323__$1,form_ident) : save_failed.call(null,G__90323__$1,form_ident)):G__90323__$1);
if(cljs.core.truth_(on_save_failed)){
return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2(G__90323__$2,on_save_failed);
} else {
return G__90323__$2;
}
})], null),new cljs.core.Keyword("event","saved","event/saved",326086646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90324){
var map__90325 = p__90324;
var map__90325__$1 = cljs.core.__destructure_map(map__90325);
var env = map__90325__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90325__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__90326 = (function (){var G__90329 = Form;
if((G__90329 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90329) : com.fulcrologic.fulcro.components.component_options.call(null,G__90329));
}
})();
var map__90326__$1 = cljs.core.__destructure_map(map__90326);
var map__90327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90326__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90327__$1 = cljs.core.__destructure_map(map__90327);
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90327__$1,new cljs.core.Keyword(null,"saved","saved",288760660));
var map__90328 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__90328__$1 = cljs.core.__destructure_map(map__90328);
var embedded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90328__$1,new cljs.core.Keyword(null,"embedded?","embedded?",298781012));
var use_history = ((cljs.core.not(embedded_QMARK_)) && (com.fulcrologic.rad.routing.history.history_support_QMARK_(fulcro_app)));
if(use_history){
var map__90330_90655 = com.fulcrologic.rad.routing.history.current_route(fulcro_app);
var map__90330_90656__$1 = cljs.core.__destructure_map(map__90330_90655);
var route_90657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90330_90656__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params_90658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90330_90656__$1,new cljs.core.Keyword(null,"params","params",710516235));
var new_route_90659 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),route_90657)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form.edit_action,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(form_ident))], null));
com.fulcrologic.rad.routing.history.replace_route_BANG_(fulcro_app,new_route_90659,params_90658);
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.run_on_saved((function (){var G__90331 = env;
if(cljs.core.truth_(saved)){
return (saved.cljs$core$IFn$_invoke$arity$2 ? saved.cljs$core$IFn$_invoke$arity$2(G__90331,form_ident) : saved.call(null,G__90331,form_ident));
} else {
return G__90331;
}
})()),com.fulcrologic.fulcro.algorithms.form_state.entity__GT_pristine_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0)),new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","editing","state/editing",1406008034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","reset","event/reset",-705072700),new cljs.core.Keyword("event","attribute-changed","event/attribute-changed",-868443355),new cljs.core.Keyword("event","clear-route-denied","event/clear-route-denied",1935223784),new cljs.core.Keyword("event","save","event/save",1752120523),new cljs.core.Keyword("event","add-row","event/add-row",335011085),new cljs.core.Keyword("event","delete-row","event/delete-row",-1920896913),new cljs.core.Keyword("event","route-denied","event/route-denied",-1177347564),new cljs.core.Keyword("event","blur","event/blur",448962841),new cljs.core.Keyword("event","continue-abandoned-route","event/continue-abandoned-route",2053470205),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.clear_server_errors(env),com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90332){
var map__90333 = p__90332;
var map__90333__$1 = cljs.core.__destructure_map(map__90333);
var env = map__90333__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90333__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__90334 = event_data;
var map__90334__$1 = cljs.core.__destructure_map(map__90334);
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword(null,"old-value","old-value",862546795));
var form_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword(null,"value","value",305978217));
var form_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473));
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90334__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var form_class = (function (){var G__90337 = form_key;
if((G__90337 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__90337) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__90337));
}
})();
var map__90335 = (function (){var G__90338 = form_class;
if((G__90338 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90338) : com.fulcrologic.fulcro.components.component_options.call(null,G__90338));
}
})();
var map__90335__$1 = cljs.core.__destructure_map(map__90335);
var map__90336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90335__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90336__$1 = cljs.core.__destructure_map(map__90336);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90336__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality);
var ref_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type);
var missing_QMARK_ = (value == null);
var value__$1 = ((((ref_QMARK_) && (((many_QMARK_) && ((value == null))))))?cljs.core.PersistentVector.EMPTY:((((many_QMARK_) && ((value == null))))?cljs.core.PersistentHashSet.EMPTY:((((ref_QMARK_) && (many_QMARK_)))?cljs.core.filterv((function (p1__90308_SHARP_){
return (!((cljs.core.second(p1__90308_SHARP_) == null)));
}),value):((ref_QMARK_)?(((cljs.core.second(value) == null))?null:value):value
))));
var path = (cljs.core.truth_((function (){var and__5043__auto__ = form_ident;
if(cljs.core.truth_(and__5043__auto__)){
return qualified_key;
} else {
return and__5043__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_ident,qualified_key):null);
var mark_complete_QMARK_ = true;
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(path)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to record attribute change. Path cannot be calculated."], null);
}),null)),null,1410694536,null);
}

if(((ref_QMARK_) && (((many_QMARK_) && ((!(cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,value__$1)))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1270,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting a ref-many attribute to incorrect type. Value should be a vector of idents:",qualified_key,value__$1], null);
}),null)),null,1096115391,null);
} else {
}

if(((ref_QMARK_) && ((((!(many_QMARK_))) && ((((!(missing_QMARK_))) && ((!(edn_query_language.core.ident_QMARK_(value__$1)))))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1272,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting a ref-one attribute to incorrect type. Value should an ident:",qualified_key,value__$1], null);
}),null)),null,1923511745,null);
} else {
}
} else {
}

return com.fulcrologic.rad.form.apply_derived_calculations((function (){var G__90339 = com.fulcrologic.rad.form.clear_server_errors(env);
var G__90339__$1 = ((mark_complete_QMARK_)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90339,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident,qualified_key], 0)):G__90339);
var G__90339__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = path;
if(cljs.core.truth_(and__5043__auto__)){
return (value__$1 == null);
} else {
return and__5043__auto__;
}
})())?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90339__$1,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident,cljs.core.dissoc,qualified_key], 0)):G__90339__$1);
var G__90339__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = path;
if(cljs.core.truth_(and__5043__auto__)){
return (!((value__$1 == null)));
} else {
return and__5043__auto__;
}
})())?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90339__$2,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,value__$1], 0)):G__90339__$2);
if(cljs.core.truth_(on_change)){
return com.fulcrologic.rad.form.protected_on_change(G__90339__$3,on_change,form_ident,qualified_key,old_value,value__$1);
} else {
return G__90339__$3;
}
})());
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"route-denied?","route-denied?",1600955722),false);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90340){
var map__90341 = p__90340;
var map__90341__$1 = cljs.core.__destructure_map(map__90341);
var env = map__90341__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90341__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90341__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var form_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__90342 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_class) : com.fulcrologic.fulcro.components.component_options.call(null,form_class));
var map__90342__$1 = cljs.core.__destructure_map(map__90342);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90342__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var save_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90342__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","save-mutation","com.fulcrologic.rad.form/save-mutation",680293905));
var master_pk = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id);
var proposed_form_props = com.fulcrologic.fulcro.algorithms.form_state.completed_form_props(state_map,form_class,form_ident);
if(cljs.core.truth_((com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(form_class,proposed_form_props) : com.fulcrologic.rad.form.valid_QMARK_.call(null,form_class,proposed_form_props)))){
var data_to_save = com.fulcrologic.rad.form.calc_diff(env);
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data,data_to_save], 0));
var save_mutation__$1 = (function (){var or__5045__auto__ = save_mutation;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null);
}
})();
return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.trigger_remote_mutation(com.fulcrologic.rad.form.clear_server_errors(env),new cljs.core.Keyword("actor","form","actor/form",-1666413564),save_mutation__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("event","save-failed","event/save-failed",666208196),new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068),master_pk,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),cljs.core.second(form_ident),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),form_class,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("event","saved","event/saved",326086646)], null)], 0))),new cljs.core.Keyword("state","saving","state/saving",-726221934));
} else {
return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(env,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0)),new cljs.core.Keyword("state","editing","state/editing",1406008034));
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90343){
var map__90344 = p__90343;
var map__90344__$1 = cljs.core.__destructure_map(map__90344);
var env = map__90344__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90344__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90344__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__90345 = event_data;
var map__90345__$1 = cljs.core.__destructure_map(map__90345);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90345__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403));
var parent_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90345__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90345__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376));
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90345__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","child-class","com.fulcrologic.rad.form/child-class",22811564));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90345__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initial-state","com.fulcrologic.rad.form/initial-state",-1829742723));
var default_overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90345__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-overrides","com.fulcrologic.rad.form/default-overrides",-385856423));
var map__90346 = (function (){var G__90348 = parent;
if((G__90348 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90348) : com.fulcrologic.fulcro.components.component_options.call(null,G__90348));
}
})();
var map__90346__$1 = cljs.core.__destructure_map(map__90346);
var map__90347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90346__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90347__$1 = cljs.core.__destructure_map(map__90347);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90347__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var parent_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(parent) : com.fulcrologic.fulcro.components.get_ident.call(null,parent));
var relation_attr = com.fulcrologic.rad.form.form_key__GT_attribute(parent,parent_relation);
var many_QMARK_ = com.fulcrologic.rad.attributes.to_many_QMARK_(relation_attr);
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_ident,parent_relation);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,target_path);
var new_child = ((cljs.core.map_QMARK_(initial_state))?initial_state:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.default_state(child_class,com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0()),default_overrides], 0)));
var child_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(child_class,new_child) : com.fulcrologic.fulcro.components.get_ident.call(null,child_class,new_child));
var optional_keys = com.fulcrologic.rad.form.optional_fields(child_class);
var mark_fields_complete = (function (state_map__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
return com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$3(s,child_ident,k);
}),state_map__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(optional_keys,cljs.core.keys(new_child)));
});
var apply_on_change = (function (env__$1){
if(cljs.core.truth_(on_change)){
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env__$1),target_path);
return com.fulcrologic.rad.form.protected_on_change(env__$1,on_change,parent_ident,parent_relation,old_value,new_value);
} else {
return env__$1;
}
});
return com.fulcrologic.rad.form.apply_derived_calculations(apply_on_change(com.fulcrologic.fulcro.ui_state_machines.apply_action(env,(function (s){
return mark_fields_complete(com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic(s,child_class,new_child,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((many_QMARK_)?(function (){var or__5045__auto__ = order;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"append","append",-291298229);
}
})():new cljs.core.Keyword(null,"replace","replace",-786587770)),target_path], 0)),child_class,child_ident));
}))));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90349){
var map__90350 = p__90349;
var map__90350__$1 = cljs.core.__destructure_map(map__90350);
var env = map__90350__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90350__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90350__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__90351 = event_data;
var map__90351__$1 = cljs.core.__destructure_map(map__90351);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90351__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var child_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90351__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","child-ident","com.fulcrologic.rad.form/child-ident",-335397426));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90351__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376));
var parent_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90351__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884));
var map__90352 = (function (){var G__90354 = parent;
if((G__90354 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90354) : com.fulcrologic.fulcro.components.component_options.call(null,G__90354));
}
})();
var map__90352__$1 = cljs.core.__destructure_map(map__90352);
var map__90353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90352__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90353__$1 = cljs.core.__destructure_map(map__90353);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90353__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var relation_attr = com.fulcrologic.rad.form.form_key__GT_attribute(parent,parent_relation);
var many_QMARK_ = com.fulcrologic.rad.attributes.to_many_QMARK_(relation_attr);
var child_ident__$1 = (function (){var or__5045__auto__ = child_ident;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = form_instance;
if(cljs.core.truth_(and__5043__auto__)){
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance));
} else {
return and__5043__auto__;
}
}
})();
var parent_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(parent) : com.fulcrologic.fulcro.components.get_ident.call(null,parent));
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_ident,parent_relation);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,target_path);
var apply_on_change = (function (env__$1){
if(cljs.core.truth_(on_change)){
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env__$1),target_path);
return com.fulcrologic.rad.form.protected_on_change(env__$1,on_change,parent_ident,parent_relation,old_value,new_value);
} else {
return env__$1;
}
});
if(cljs.core.truth_(target_path)){
return com.fulcrologic.rad.form.apply_derived_calculations(apply_on_change((function (){var G__90355 = env;
var G__90355__$1 = ((many_QMARK_)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90355,com.fulcrologic.fulcro.algorithms.normalized_state.remove_ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([child_ident__$1,target_path], 0)):G__90355);
if((!(many_QMARK_))){
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90355__$1,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_ident,cljs.core.dissoc,parent_relation], 0));
} else {
return G__90355__$1;
}
})()));
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90356){
var map__90357 = p__90356;
var map__90357__$1 = cljs.core.__destructure_map(map__90357);
var env = map__90357__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90357__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90357__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__90358 = event_data;
var map__90358__$1 = cljs.core.__destructure_map(map__90358);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90358__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var relative_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90358__$1,new cljs.core.Keyword(null,"relative-root","relative-root",-2066895840));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90358__$1,new cljs.core.Keyword(null,"route","route",329891309));
var timeouts_and_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90358__$1,new cljs.core.Keyword(null,"timeouts-and-params","timeouts-and-params",-471121268));
var Form = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(form) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,form));
var Root = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(relative_root) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,relative_root));
var user_confirm = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(Form,com.fulcrologic.rad.form_options.confirm) : com.fulcrologic.fulcro.components.component_options.call(null,Form,com.fulcrologic.rad.form_options.confirm));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"async","async",1050769601),user_confirm)){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"desired-route","desired-route",-501265977),event_data),new cljs.core.Keyword(null,"route-denied?","route-denied?",1600955722),true);
} else {
var temp__5804__auto___90704 = (function (){var or__5045__auto__ = user_confirm;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return confirm;
}
})();
if(cljs.core.truth_(temp__5804__auto___90704)){
var confirm_fn_90705 = temp__5804__auto___90704;
if(cljs.core.truth_((confirm_fn_90705.cljs$core$IFn$_invoke$arity$1 ? confirm_fn_90705.cljs$core$IFn$_invoke$arity$1("You will lose unsaved changes. Are you sure?") : confirm_fn_90705.call(null,"You will lose unsaved changes. Are you sure?")))){
com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.components.class__GT_any(fulcro_app,Form),Root,route,timeouts_and_params);
} else {
}
} else {
}

return env;
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return env;
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90359){
var map__90360 = p__90359;
var map__90360__$1 = cljs.core.__destructure_map(map__90360);
var env = map__90360__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90360__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var map__90361 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"desired-route","desired-route",-501265977));
var map__90361__$1 = cljs.core.__destructure_map(map__90361);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90361__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var relative_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90361__$1,new cljs.core.Keyword(null,"relative-root","relative-root",-2066895840));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90361__$1,new cljs.core.Keyword(null,"route","route",329891309));
var timeouts_and_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90361__$1,new cljs.core.Keyword(null,"timeouts-and-params","timeouts-and-params",-471121268));
var form_instance = (function (){var G__90362 = form;
var G__90362__$1 = (((G__90362 == null))?null:(com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__90362) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__90362)));
if((G__90362__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.class__GT_any(fulcro_app,G__90362__$1);
}
})();
var Router = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(relative_root) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,relative_root));
if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.rad.form","replace-route?","com.fulcrologic.rad.form/replace-route?",-939131822).cljs$core$IFn$_invoke$arity$1(timeouts_and_params))){
com.fulcrologic.rad.routing.history.replace_route_BANG_(fulcro_app,route,timeouts_and_params);
} else {
com.fulcrologic.rad.routing.history.push_route_BANG_(fulcro_app,route,timeouts_and_params);
}

com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,Router,route,timeouts_and_params);

return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"route-denied?","route-denied?",1600955722),false),com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564))], 0));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.form.leave_form], null)])], 0))], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.rad.form","form-machine","com.fulcrologic.rad.form/form-machine",-1050751722,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.rad.form","form-machine","com.fulcrologic.rad.form/form-machine",-1050751722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"confirmation-message","confirmation-message",-1177008026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("ui","confirmation-message","ui/confirmation-message",-1177012486)], null),new cljs.core.Keyword(null,"route-denied?","route-denied?",1600955722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("ui","route-denied?","ui/route-denied?",1601001182)], null),new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","form","actor/form",-1666413564),new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__90363 = env;
var map__90363__$1 = cljs.core.__destructure_map(map__90363);
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90363__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__90364 = event_data;
var map__90364__$1 = cljs.core.__destructure_map(map__90364);
var create_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90364__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","create?","com.fulcrologic.rad.form/create?",-1691842893));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__90365 = (function (){var G__90367 = Form;
if((G__90367 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90367) : com.fulcrologic.fulcro.components.component_options.call(null,G__90367));
}
})();
var map__90365__$1 = cljs.core.__destructure_map(map__90365);
var map__90366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90365__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90366__$1 = cljs.core.__destructure_map(map__90366);
var started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90366__$1,new cljs.core.Keyword(null,"started","started",585705024));
var G__90368 = com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"options","options",99638489),event_data);
var G__90368__$1 = (cljs.core.truth_(create_QMARK_)?com.fulcrologic.rad.form.start_create(G__90368,event_data):G__90368);
var G__90368__$2 = ((cljs.core.not(create_QMARK_))?com.fulcrologic.rad.form.start_edit(G__90368__$1,event_data):G__90368__$1);
if(cljs.core.fn_QMARK_(started)){
return (started.cljs$core$IFn$_invoke$arity$2 ? started.cljs$core$IFn$_invoke$arity$2(G__90368__$2,form_ident) : started.call(null,G__90368__$2,form_ident));
} else {
return G__90368__$2;
}
})], null),new cljs.core.Keyword("state","loading","state/loading",-628573180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","loaded","event/loaded",-1497743903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90369){
var map__90370 = p__90369;
var map__90370__$1 = cljs.core.__destructure_map(map__90370);
var env = map__90370__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90370__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,1181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Loaded. Marking the form complete."], null);
}),null)),null,1289769860,null);

var FormClass = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var routeable_QMARK_ = cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(FormClass) : com.fulcrologic.fulcro.components.component_options.call(null,FormClass)),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703)));
var route_pending_QMARK_ = ((routeable_QMARK_) && ((!((com.fulcrologic.fulcro.routing.dynamic_routing.router_for_pending_target(state_map,form_ident) == null)))));
return com.fulcrologic.fulcro.ui_state_machines.activate((function (){var G__90371 = com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.handle_user_ui_props(com.fulcrologic.rad.form.auto_create_to_one(com.fulcrologic.rad.form.clear_server_errors(env)),FormClass,form_ident),com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([FormClass,form_ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destructive?","destructive?",1136140718),true], null)], 0)),com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
if(route_pending_QMARK_){
return com.fulcrologic.rad.form.route_target_ready(G__90371,form_ident);
} else {
return G__90371;
}
})(),new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null),new cljs.core.Keyword("event","failed","event/failed",-1561105400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Load failed."], null)], null));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","asking-to-discard-changes","state/asking-to-discard-changes",-2141307476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","ok","event/ok",803597750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.form.leave_form], null),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","saving","state/saving",-726221934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","save-failed","event/save-failed",666208196),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var map__90372 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__90372__$1 = cljs.core.__destructure_map(map__90372);
var on_save_failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90372__$1,new cljs.core.Keyword(null,"on-save-failed","on-save-failed",-1229172380));
var errors = (function (){var G__90375 = env;
var G__90375__$1 = (((G__90375 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031).cljs$core$IFn$_invoke$arity$1(G__90375));
var G__90375__$2 = (((G__90375__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","mutation-result","com.fulcrologic.fulcro.ui-state-machines/mutation-result",-1418456314).cljs$core$IFn$_invoke$arity$1(G__90375__$1));
var G__90375__$3 = (((G__90375__$2 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__90375__$2));
var G__90375__$4 = (((G__90375__$3 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__90375__$3,new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null)));
if((G__90375__$4 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443).cljs$core$IFn$_invoke$arity$1(G__90375__$4);
}
})();
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__90373 = (function (){var G__90376 = Form;
if((G__90376 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90376) : com.fulcrologic.fulcro.components.component_options.call(null,G__90376));
}
})();
var map__90373__$1 = cljs.core.__destructure_map(map__90373);
var map__90374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90373__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90374__$1 = cljs.core.__destructure_map(map__90374);
var save_failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90374__$1,new cljs.core.Keyword(null,"save-failed","save-failed",616502634));
var G__90377 = com.fulcrologic.fulcro.ui_state_machines.activate(env,new cljs.core.Keyword("state","editing","state/editing",1406008034));
var G__90377__$1 = ((cljs.core.seq(errors))?com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(G__90377,new cljs.core.Keyword(null,"server-errors","server-errors",-485636324),errors):G__90377);
var G__90377__$2 = (cljs.core.truth_(save_failed)?(save_failed.cljs$core$IFn$_invoke$arity$2 ? save_failed.cljs$core$IFn$_invoke$arity$2(G__90377__$1,form_ident) : save_failed.call(null,G__90377__$1,form_ident)):G__90377__$1);
if(cljs.core.truth_(on_save_failed)){
return com.fulcrologic.fulcro.ui_state_machines.transact.cljs$core$IFn$_invoke$arity$2(G__90377__$2,on_save_failed);
} else {
return G__90377__$2;
}
})], null),new cljs.core.Keyword("event","saved","event/saved",326086646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90378){
var map__90379 = p__90378;
var map__90379__$1 = cljs.core.__destructure_map(map__90379);
var env = map__90379__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90379__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var Form = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__90380 = (function (){var G__90383 = Form;
if((G__90383 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90383) : com.fulcrologic.fulcro.components.component_options.call(null,G__90383));
}
})();
var map__90380__$1 = cljs.core.__destructure_map(map__90380);
var map__90381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90380__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90381__$1 = cljs.core.__destructure_map(map__90381);
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90381__$1,new cljs.core.Keyword(null,"saved","saved",288760660));
var map__90382 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"options","options",99638489));
var map__90382__$1 = cljs.core.__destructure_map(map__90382);
var embedded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90382__$1,new cljs.core.Keyword(null,"embedded?","embedded?",298781012));
var use_history = ((cljs.core.not(embedded_QMARK_)) && (com.fulcrologic.rad.routing.history.history_support_QMARK_(fulcro_app)));
if(use_history){
var map__90384_90737 = com.fulcrologic.rad.routing.history.current_route(fulcro_app);
var map__90384_90738__$1 = cljs.core.__destructure_map(map__90384_90737);
var route_90739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90384_90738__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params_90740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90384_90738__$1,new cljs.core.Keyword(null,"params","params",710516235));
var new_route_90741 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),route_90739)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form.edit_action,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(form_ident))], null));
com.fulcrologic.rad.routing.history.replace_route_BANG_(fulcro_app,new_route_90741,params_90740);
} else {
}

return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.run_on_saved((function (){var G__90385 = env;
if(cljs.core.truth_(saved)){
return (saved.cljs$core$IFn$_invoke$arity$2 ? saved.cljs$core$IFn$_invoke$arity$2(G__90385,form_ident) : saved.call(null,G__90385,form_ident));
} else {
return G__90385;
}
})()),com.fulcrologic.fulcro.algorithms.form_state.entity__GT_pristine_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0)),new cljs.core.Keyword("state","editing","state/editing",1406008034));
})], null)], null)], 0))], null),new cljs.core.Keyword("state","editing","state/editing",1406008034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.global_events,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("event","reset","event/reset",-705072700),new cljs.core.Keyword("event","attribute-changed","event/attribute-changed",-868443355),new cljs.core.Keyword("event","clear-route-denied","event/clear-route-denied",1935223784),new cljs.core.Keyword("event","save","event/save",1752120523),new cljs.core.Keyword("event","add-row","event/add-row",335011085),new cljs.core.Keyword("event","delete-row","event/delete-row",-1920896913),new cljs.core.Keyword("event","route-denied","event/route-denied",-1177347564),new cljs.core.Keyword("event","blur","event/blur",448962841),new cljs.core.Keyword("event","continue-abandoned-route","event/continue-abandoned-route",2053470205),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.clear_server_errors(env),com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90386){
var map__90387 = p__90386;
var map__90387__$1 = cljs.core.__destructure_map(map__90387);
var env = map__90387__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90387__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__90388 = event_data;
var map__90388__$1 = cljs.core.__destructure_map(map__90388);
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90388__$1,new cljs.core.Keyword(null,"old-value","old-value",862546795));
var form_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90388__$1,new cljs.core.Keyword(null,"form-key","form-key",-309492408));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90388__$1,new cljs.core.Keyword(null,"value","value",305978217));
var form_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90388__$1,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473));
var cardinality = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90388__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","cardinality","com.fulcrologic.rad.attributes/cardinality",-1073230325));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90388__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","type","com.fulcrologic.rad.attributes/type",-1756868804));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90388__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var form_class = (function (){var G__90391 = form_key;
if((G__90391 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__90391) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__90391));
}
})();
var map__90389 = (function (){var G__90392 = form_class;
if((G__90392 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90392) : com.fulcrologic.fulcro.components.component_options.call(null,G__90392));
}
})();
var map__90389__$1 = cljs.core.__destructure_map(map__90389);
var map__90390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90389__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90390__$1 = cljs.core.__destructure_map(map__90390);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90390__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"many","many",1092119164),cardinality);
var ref_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),type);
var missing_QMARK_ = (value == null);
var value__$1 = ((((ref_QMARK_) && (((many_QMARK_) && ((value == null))))))?cljs.core.PersistentVector.EMPTY:((((many_QMARK_) && ((value == null))))?cljs.core.PersistentHashSet.EMPTY:((((ref_QMARK_) && (many_QMARK_)))?cljs.core.filterv((function (p1__90308_SHARP_){
return (!((cljs.core.second(p1__90308_SHARP_) == null)));
}),value):((ref_QMARK_)?(((cljs.core.second(value) == null))?null:value):value
))));
var path = (cljs.core.truth_((function (){var and__5043__auto__ = form_ident;
if(cljs.core.truth_(and__5043__auto__)){
return qualified_key;
} else {
return and__5043__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_ident,qualified_key):null);
var mark_complete_QMARK_ = true;
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(path)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unable to record attribute change. Path cannot be calculated."], null);
}),null)),null,1314499887,null);
}

if(((ref_QMARK_) && (((many_QMARK_) && ((!(cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,value__$1)))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1270,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting a ref-many attribute to incorrect type. Value should be a vector of idents:",qualified_key,value__$1], null);
}),null)),null,-90284465,null);
} else {
}

if(((ref_QMARK_) && ((((!(many_QMARK_))) && ((((!(missing_QMARK_))) && ((!(edn_query_language.core.ident_QMARK_(value__$1)))))))))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.form",null,1272,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting a ref-one attribute to incorrect type. Value should an ident:",qualified_key,value__$1], null);
}),null)),null,-1996289846,null);
} else {
}
} else {
}

return com.fulcrologic.rad.form.apply_derived_calculations((function (){var G__90393 = com.fulcrologic.rad.form.clear_server_errors(env);
var G__90393__$1 = ((mark_complete_QMARK_)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90393,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident,qualified_key], 0)):G__90393);
var G__90393__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = path;
if(cljs.core.truth_(and__5043__auto__)){
return (value__$1 == null);
} else {
return and__5043__auto__;
}
})())?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90393__$1,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident,cljs.core.dissoc,qualified_key], 0)):G__90393__$1);
var G__90393__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = path;
if(cljs.core.truth_(and__5043__auto__)){
return (!((value__$1 == null)));
} else {
return and__5043__auto__;
}
})())?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90393__$2,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,value__$1], 0)):G__90393__$2);
if(cljs.core.truth_(on_change)){
return com.fulcrologic.rad.form.protected_on_change(G__90393__$3,on_change,form_ident,qualified_key,old_value,value__$1);
} else {
return G__90393__$3;
}
})());
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"route-denied?","route-denied?",1600955722),false);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90394){
var map__90395 = p__90394;
var map__90395__$1 = cljs.core.__destructure_map(map__90395);
var env = map__90395__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90395__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90395__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var form_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var form_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564));
var map__90396 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_class) : com.fulcrologic.fulcro.components.component_options.call(null,form_class));
var map__90396__$1 = cljs.core.__destructure_map(map__90396);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90396__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937));
var save_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90396__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","save-mutation","com.fulcrologic.rad.form/save-mutation",680293905));
var master_pk = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(id);
var proposed_form_props = com.fulcrologic.fulcro.algorithms.form_state.completed_form_props(state_map,form_class,form_ident);
if(cljs.core.truth_((com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(form_class,proposed_form_props) : com.fulcrologic.rad.form.valid_QMARK_.call(null,form_class,proposed_form_props)))){
var data_to_save = com.fulcrologic.rad.form.calc_diff(env);
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data,data_to_save], 0));
var save_mutation__$1 = (function (){var or__5045__auto__ = save_mutation;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Symbol("com.fulcrologic.rad.form","save-form","com.fulcrologic.rad.form/save-form",-1368098948,null);
}
})();
return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.trigger_remote_mutation(com.fulcrologic.rad.form.clear_server_errors(env),new cljs.core.Keyword("actor","form","actor/form",-1666413564),save_mutation__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","error-event","com.fulcrologic.fulcro.ui-state-machines/error-event",-1577789384),new cljs.core.Keyword("event","save-failed","event/save-failed",666208196),new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068),master_pk,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),cljs.core.second(form_ident),new cljs.core.Keyword("com.fulcrologic.fulcro.mutations","returning","com.fulcrologic.fulcro.mutations/returning",-1484421614),form_class,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","ok-event","com.fulcrologic.fulcro.ui-state-machines/ok-event",2043770126),new cljs.core.Keyword("event","saved","event/saved",326086646)], null)], 0))),new cljs.core.Keyword("state","saving","state/saving",-726221934));
} else {
return com.fulcrologic.fulcro.ui_state_machines.activate(com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(env,com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_ident], 0)),new cljs.core.Keyword("state","editing","state/editing",1406008034));
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90397){
var map__90398 = p__90397;
var map__90398__$1 = cljs.core.__destructure_map(map__90398);
var env = map__90398__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90398__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90398__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__90399 = event_data;
var map__90399__$1 = cljs.core.__destructure_map(map__90399);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90399__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403));
var parent_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90399__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90399__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376));
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90399__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","child-class","com.fulcrologic.rad.form/child-class",22811564));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90399__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initial-state","com.fulcrologic.rad.form/initial-state",-1829742723));
var default_overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90399__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","default-overrides","com.fulcrologic.rad.form/default-overrides",-385856423));
var map__90400 = (function (){var G__90402 = parent;
if((G__90402 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90402) : com.fulcrologic.fulcro.components.component_options.call(null,G__90402));
}
})();
var map__90400__$1 = cljs.core.__destructure_map(map__90400);
var map__90401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90400__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90401__$1 = cljs.core.__destructure_map(map__90401);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90401__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var parent_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(parent) : com.fulcrologic.fulcro.components.get_ident.call(null,parent));
var relation_attr = com.fulcrologic.rad.form.form_key__GT_attribute(parent,parent_relation);
var many_QMARK_ = com.fulcrologic.rad.attributes.to_many_QMARK_(relation_attr);
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_ident,parent_relation);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,target_path);
var new_child = ((cljs.core.map_QMARK_(initial_state))?initial_state:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.form.default_state(child_class,com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0()),default_overrides], 0)));
var child_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(child_class,new_child) : com.fulcrologic.fulcro.components.get_ident.call(null,child_class,new_child));
var optional_keys = com.fulcrologic.rad.form.optional_fields(child_class);
var mark_fields_complete = (function (state_map__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
return com.fulcrologic.fulcro.algorithms.form_state.mark_complete_STAR_.cljs$core$IFn$_invoke$arity$3(s,child_ident,k);
}),state_map__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(optional_keys,cljs.core.keys(new_child)));
});
var apply_on_change = (function (env__$1){
if(cljs.core.truth_(on_change)){
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env__$1),target_path);
return com.fulcrologic.rad.form.protected_on_change(env__$1,on_change,parent_ident,parent_relation,old_value,new_value);
} else {
return env__$1;
}
});
return com.fulcrologic.rad.form.apply_derived_calculations(apply_on_change(com.fulcrologic.fulcro.ui_state_machines.apply_action(env,(function (s){
return mark_fields_complete(com.fulcrologic.fulcro.algorithms.form_state.add_form_config_STAR_.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic(s,child_class,new_child,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((many_QMARK_)?(function (){var or__5045__auto__ = order;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"append","append",-291298229);
}
})():new cljs.core.Keyword(null,"replace","replace",-786587770)),target_path], 0)),child_class,child_ident));
}))));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90403){
var map__90404 = p__90403;
var map__90404__$1 = cljs.core.__destructure_map(map__90404);
var env = map__90404__$1;
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90404__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90404__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var map__90405 = event_data;
var map__90405__$1 = cljs.core.__destructure_map(map__90405);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90405__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var child_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90405__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","child-ident","com.fulcrologic.rad.form/child-ident",-335397426));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90405__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376));
var parent_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90405__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884));
var map__90406 = (function (){var G__90408 = parent;
if((G__90408 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__90408) : com.fulcrologic.fulcro.components.component_options.call(null,G__90408));
}
})();
var map__90406__$1 = cljs.core.__destructure_map(map__90406);
var map__90407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90406__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839));
var map__90407__$1 = cljs.core.__destructure_map(map__90407);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90407__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var relation_attr = com.fulcrologic.rad.form.form_key__GT_attribute(parent,parent_relation);
var many_QMARK_ = com.fulcrologic.rad.attributes.to_many_QMARK_(relation_attr);
var child_ident__$1 = (function (){var or__5045__auto__ = child_ident;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = form_instance;
if(cljs.core.truth_(and__5043__auto__)){
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance));
} else {
return and__5043__auto__;
}
}
})();
var parent_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(parent) : com.fulcrologic.fulcro.components.get_ident.call(null,parent));
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_ident,parent_relation);
var old_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,target_path);
var apply_on_change = (function (env__$1){
if(cljs.core.truth_(on_change)){
var new_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138).cljs$core$IFn$_invoke$arity$1(env__$1),target_path);
return com.fulcrologic.rad.form.protected_on_change(env__$1,on_change,parent_ident,parent_relation,old_value,new_value);
} else {
return env__$1;
}
});
if(cljs.core.truth_(target_path)){
return com.fulcrologic.rad.form.apply_derived_calculations(apply_on_change((function (){var G__90409 = env;
var G__90409__$1 = ((many_QMARK_)?com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90409,com.fulcrologic.fulcro.algorithms.normalized_state.remove_ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([child_ident__$1,target_path], 0)):G__90409);
if((!(many_QMARK_))){
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(G__90409__$1,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_ident,cljs.core.dissoc,parent_relation], 0));
} else {
return G__90409__$1;
}
})()));
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90410){
var map__90411 = p__90410;
var map__90411__$1 = cljs.core.__destructure_map(map__90411);
var env = map__90411__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90411__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90411__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__90412 = event_data;
var map__90412__$1 = cljs.core.__destructure_map(map__90412);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90412__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var relative_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90412__$1,new cljs.core.Keyword(null,"relative-root","relative-root",-2066895840));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90412__$1,new cljs.core.Keyword(null,"route","route",329891309));
var timeouts_and_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90412__$1,new cljs.core.Keyword(null,"timeouts-and-params","timeouts-and-params",-471121268));
var Form = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(form) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,form));
var Root = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(relative_root) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,relative_root));
var user_confirm = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(Form,com.fulcrologic.rad.form_options.confirm) : com.fulcrologic.fulcro.components.component_options.call(null,Form,com.fulcrologic.rad.form_options.confirm));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"async","async",1050769601),user_confirm)){
return com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.ui_state_machines.store(env,new cljs.core.Keyword(null,"desired-route","desired-route",-501265977),event_data),new cljs.core.Keyword(null,"route-denied?","route-denied?",1600955722),true);
} else {
var temp__5804__auto___90820 = (function (){var or__5045__auto__ = user_confirm;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return confirm;
}
})();
if(cljs.core.truth_(temp__5804__auto___90820)){
var confirm_fn_90821 = temp__5804__auto___90820;
if(cljs.core.truth_((confirm_fn_90821.cljs$core$IFn$_invoke$arity$1 ? confirm_fn_90821.cljs$core$IFn$_invoke$arity$1("You will lose unsaved changes. Are you sure?") : confirm_fn_90821.call(null,"You will lose unsaved changes. Are you sure?")))){
com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.components.class__GT_any(fulcro_app,Form),Root,route,timeouts_and_params);
} else {
}
} else {
}

return env;
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return env;
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (p__90413){
var map__90414 = p__90413;
var map__90414__$1 = cljs.core.__destructure_map(map__90414);
var env = map__90414__$1;
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90414__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var map__90415 = com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"desired-route","desired-route",-501265977));
var map__90415__$1 = cljs.core.__destructure_map(map__90415);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90415__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var relative_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90415__$1,new cljs.core.Keyword(null,"relative-root","relative-root",-2066895840));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90415__$1,new cljs.core.Keyword(null,"route","route",329891309));
var timeouts_and_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90415__$1,new cljs.core.Keyword(null,"timeouts-and-params","timeouts-and-params",-471121268));
var form_instance = (function (){var G__90416 = form;
var G__90416__$1 = (((G__90416 == null))?null:(com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(G__90416) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,G__90416)));
if((G__90416__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.components.class__GT_any(fulcro_app,G__90416__$1);
}
})();
var Router = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(relative_root) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,relative_root));
if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.rad.form","replace-route?","com.fulcrologic.rad.form/replace-route?",-939131822).cljs$core$IFn$_invoke$arity$1(timeouts_and_params))){
com.fulcrologic.rad.routing.history.replace_route_BANG_(fulcro_app,route,timeouts_and_params);
} else {
com.fulcrologic.rad.routing.history.push_route_BANG_(fulcro_app,route,timeouts_and_params);
}

com.fulcrologic.fulcro.routing.dynamic_routing.retry_route_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,Router,route,timeouts_and_params);

return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.ui_state_machines.assoc_aliased.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"route-denied?","route-denied?",1600955722),false),com.fulcrologic.fulcro.algorithms.form_state.pristine__GT_entity_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","form","actor/form",-1666413564))], 0));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),com.fulcrologic.rad.form.leave_form], null)])], 0))], null)], null)], null));
/**
 * Trigger a save on the given form rendering env. `addl-save-params` is a map of data that can
 * optionally be included in the form's save, which will be available to the server-side mutation
 * (and therefore save middleware). Defaults to whatever the form's `fo/save-params` has.
 */
com.fulcrologic.rad.form.save_BANG_ = (function com$fulcrologic$rad$form$save_BANG_(var_args){
var G__90418 = arguments.length;
switch (G__90418) {
case 1:
return com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__90419){
var map__90420 = p__90419;
var map__90420__$1 = cljs.core.__destructure_map(map__90420);
var form_rendering_env = map__90420__$1;
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90420__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var save_params = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("com.fulcrologic.rad.form","save-params","com.fulcrologic.rad.form/save-params",-307782477)) : com.fulcrologic.fulcro.components.component_options.call(null,this$,new cljs.core.Keyword("com.fulcrologic.rad.form","save-params","com.fulcrologic.rad.form/save-params",-307782477)));
var params = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(save_params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_rendering_env], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$2(form_rendering_env,params);
}));

(com.fulcrologic.rad.form.save_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p__90421,addl_save_params){
var map__90422 = p__90421;
var map__90422__$1 = cljs.core.__destructure_map(map__90422);
var _form_rendering_env = map__90422__$1;
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90422__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","save","event/save",1752120523),addl_save_params);
}));

(com.fulcrologic.rad.form.save_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Trigger an undo of all changes on the given form rendering env.
 */
com.fulcrologic.rad.form.undo_all_BANG_ = (function com$fulcrologic$rad$form$undo_all_BANG_(p__90423){
var map__90424 = p__90423;
var map__90424__$1 = cljs.core.__destructure_map(map__90424);
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90424__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","reset","event/reset",-705072700),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Trigger a cancel of all changes on the given form rendering env. This is like undo, but attempts to route away from
 * the form.
 */
com.fulcrologic.rad.form.cancel_BANG_ = (function com$fulcrologic$rad$form$cancel_BANG_(p__90425){
var map__90426 = p__90425;
var map__90426__$1 = cljs.core.__destructure_map(map__90426);
var this$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90426__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(this$,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_ident.call(null,this$)),new cljs.core.Keyword("event","cancel","event/cancel",-2000227778),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Add a child.
 * 
 *   * form-instance - The form that has the relation to the children. E.g. `this` of a `Person`.
 *   * parent-relation - The keyword of the join to the children. E.g. `:person/addresses`
 *   * ChildForm - The form UI component that represents the child form.
 *   * options - Additional options. Currently only supports `::form/order`, which defaults to `:prepend`.
 * 
 *   If you pass just an `env`, then you must manually augment it with:
 * 
 *   ```
 *   (form/add-child! (assoc env
 *                   ::form/order :prepend
 *                   ::form/parent-relation :person/addresses
 *                   ::form/parent form-instance
 *                   ::form/child-class ui))
 *   ```
 * 
 *   See renderers for usage examples.
 * 
 *   If you use the variant `form-instance`, then the `options` are (the can be non-namespaced, or use ::form/...):
 * 
 *   :order - :prepend of :append (default)
 *   :initial-state - A map that will be used for the new child (YOU MUST add a tempid ID to this map. It will not use default-state at all)
 *   :default-overrides - A map that will be merged into the calculated `default-state` of the new child. (NOT USED if you
 *  supply `:initial-state`).
 * 
 *   The options can also include any keyword you want (namespaced preferred) and will appear in event-data of the state
 *   machine (useful if you customized the state machine). NOTE: The above three options will be renamed to include the ::form
 *   namespace when passed through to the state machine.
 *   
 */
com.fulcrologic.rad.form.add_child_BANG_ = (function com$fulcrologic$rad$form$add_child_BANG_(var_args){
var G__90428 = arguments.length;
switch (G__90428) {
case 1:
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__90429){
var map__90430 = p__90429;
var map__90430__$1 = cljs.core.__destructure_map(map__90430);
var env = map__90430__$1;
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90430__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var asm_id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(master_form,asm_id,new cljs.core.Keyword("event","add-row","event/add-row",335011085),env);
}));

(com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (form_instance,parent_relation,ChildForm){
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,parent_relation,ChildForm,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (form_instance,parent_relation,ChildForm,p__90431){
var map__90432 = p__90431;
var map__90432__$1 = cljs.core.__destructure_map(map__90432);
var options = map__90432__$1;
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90432__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90432__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var default_overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90432__$1,new cljs.core.Keyword(null,"default-overrides","default-overrides",-40890186));
var env = com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(form_instance);
var options__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"default-overrides","default-overrides",-40890186)], 0));
return com.fulcrologic.rad.form.add_child_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403),new cljs.core.Keyword(null,"prepend","prepend",342616040)], null),options__$1,(function (){var G__90433 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),parent_relation,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","child-class","com.fulcrologic.rad.form/child-class",22811564),ChildForm], null);
var G__90433__$1 = (cljs.core.truth_(order)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__90433,new cljs.core.Keyword("com.fulcrologic.rad.form","order","com.fulcrologic.rad.form/order",2122803403),order):G__90433);
var G__90433__$2 = (cljs.core.truth_(initial_state)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__90433__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","initial-state","com.fulcrologic.rad.form/initial-state",-1829742723),initial_state):G__90433__$1);
if(cljs.core.truth_(default_overrides)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__90433__$2,new cljs.core.Keyword("com.fulcrologic.rad.form","default-overrides","com.fulcrologic.rad.form/default-overrides",-385856423),default_overrides);
} else {
return G__90433__$2;
}
})()], 0)));
}));

(com.fulcrologic.rad.form.add_child_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Delete the current form instance from the parent relation of its containing form. You may pass either a
 * rendering env (if you've constructed one via `rendering-env` in the current form) or `this` OF THE
 * ITEM THAT IS TO BE DELETED.
 * 
 * If you want to use this FROM the parent, then you have to pass the parent-instance, parent-relation,
 * and child ident to remove.
 * 
 * NOTE: This removes the child from the form. You are responsible for augmenting save middleware to
 * actually completely remove the child from the database since there is no way from the form or base
 * model to know if removing a relationship to the child should also remove the child itself.
 * 
 * See also `delete!` for deleting the top-level (entire) form/entity.
 * 
 */
com.fulcrologic.rad.form.delete_child_BANG_ = (function com$fulcrologic$rad$form$delete_child_BANG_(var_args){
var G__90435 = arguments.length;
switch (G__90435) {
case 1:
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this_or_rendering_env){
var map__90436 = ((com.fulcrologic.fulcro.components.component_instance_QMARK_(this_or_rendering_env))?com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(this_or_rendering_env):this_or_rendering_env);
var map__90436__$1 = cljs.core.__destructure_map(map__90436);
var env = map__90436__$1;
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90436__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var asm_id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(master_form,asm_id,new cljs.core.Keyword("event","delete-row","event/delete-row",-1920896913),env);
}));

(com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (parent_instance,relation_key,child_ident){
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(parent_instance),new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),parent_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),relation_key,new cljs.core.Keyword("com.fulcrologic.rad.form","child-ident","com.fulcrologic.rad.form/child-ident",-335397426),child_ident], 0));
return com.fulcrologic.rad.form.delete_child_BANG_.cljs$core$IFn$_invoke$arity$1(env);
}));

(com.fulcrologic.rad.form.delete_child_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if the given attribute is meant to show up as read only on the given form instance. Attributes
 *   configure this by placing a boolean value (or function returning boolean) on the attribute at `::attr/read-only?`.
 * 
 *   The form's options may also include `::form/read-only-fields` as a set (or a function returning a set) of the keys that should
 *   currently be considered read-only. If it is a function it will only be passed the form instance.
 * 
 *   If the form has a `::form/read-only?` option that is `true` (or a `(fn [form-instance] boolean?)` that returns true) then
 *   *everything* on the form will be read-only.
 * 
 *   If you use a function for read only detection it will be passed the `form-instance` and the `attribute` being
 *   checked. You may reach into app state to examine things, but beware that doing so may not dynamically update
 *   as you'd expect.
 */
com.fulcrologic.rad.form.read_only_QMARK_ = (function com$fulcrologic$rad$form$read_only_QMARK_(form_instance,p__90437){
var map__90438 = p__90437;
var map__90438__$1 = cljs.core.__destructure_map(map__90438);
var attr = map__90438__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90438__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var identity_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90438__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","identity?","com.fulcrologic.rad.attributes/identity?",-576130258));
var read_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90438__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","read-only?","com.fulcrologic.rad.attributes/read-only?",-2011172282));
var computed_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90438__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-value","com.fulcrologic.rad.attributes/computed-value",-1657154665));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.component_QMARK_,new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var map__90439 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__90439__$1 = cljs.core.__destructure_map(map__90439);
var read_only_form_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90439__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695));
var read_only_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90439__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only-fields","com.fulcrologic.rad.form/read-only-fields",1091648316));
var master_form = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641)) : com.fulcrologic.fulcro.components.get_computed.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641)));
var master_read_only_QMARK_ = (function (){var G__90440 = master_form;
if((G__90440 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(G__90440,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)) : com.fulcrologic.fulcro.components.component_options.call(null,G__90440,new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695)));
}
})();
return cljs.core.boolean$((function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(read_only_form_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(master_read_only_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([master_form], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = identity_QMARK_;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(read_only_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = computed_value;
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
var read_only_fields__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(read_only_fields,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
return ((cljs.core.set_QMARK_(read_only_fields__$1)) && (cljs.core.contains_QMARK_(read_only_fields__$1,qualified_key)));
}
}
}
}
}
})());
});
/**
 * Should the `attr` on the given `form-instance` be visible? This is controlled:
 * 
 *   * On the attribute at `::form/field-visible?`. A boolean or `(fn [form-instance attr] boolean?)`
 *   * On the form via the map `::form/fields-visible?`. A map from attr keyword to boolean or `(fn [form-instance attr] boolean?)`
 * 
 *   A field is visible if the form says it is. If the form has *no opinion*, then it is visible if the attribute
 *   says it is (as true?). If neither the form nor attribute return a boolean, then the field is visible.
 *   
 */
com.fulcrologic.rad.form.field_visible_QMARK_ = (function com$fulcrologic$rad$form$field_visible_QMARK_(form_instance,p__90441){
var map__90442 = p__90441;
var map__90442__$1 = cljs.core.__destructure_map(map__90442);
var attr = map__90442__$1;
var field_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90442__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-visible?","com.fulcrologic.rad.form/field-visible?",834662826));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90442__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.component_QMARK_,new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var form_field_visible_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","fields-visible?","com.fulcrologic.rad.form/fields-visible?",1712071108),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","fields-visible?","com.fulcrologic.rad.form/fields-visible?",1712071108),qualified_key)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
var field_visible_QMARK___$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(field_visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
return cljs.core.boolean$(((form_field_visible_QMARK_ === true) || ((((((form_field_visible_QMARK_ == null)) && (field_visible_QMARK___$1 === true))) || ((((form_field_visible_QMARK_ == null)) && ((field_visible_QMARK___$1 == null))))))));
});
/**
 * Should the `attr` on the given `form-instance` refrain from including a field label?
 * 
 *   * On the attribute at `::form/omit-label?`. A boolean or `(fn [form-instance attr] boolean?)`
 *   * On the form via the map `::form/omit-label?`. A map from attr keyword to boolean or `(fn [form-instance attr] boolean?)`
 * 
 *   The default is false.
 *   
 */
com.fulcrologic.rad.form.omit_label_QMARK_ = (function com$fulcrologic$rad$form$omit_label_QMARK_(form_instance,p__90443){
var map__90444 = p__90443;
var map__90444__$1 = cljs.core.__destructure_map(map__90444);
var attr = map__90444__$1;
var omit_label_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90444__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","omit-label?","com.fulcrologic.rad.form/omit-label?",1849863134));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90444__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.components.component_QMARK_,new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var form_omit_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","omit-label?","com.fulcrologic.rad.form/omit-label?",1849863134),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","omit-label?","com.fulcrologic.rad.form/omit-label?",1849863134),qualified_key)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
var field_omit_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(omit_label_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
if(cljs.core.boolean_QMARK_(form_omit_QMARK_)){
return form_omit_QMARK_;
} else {
if(cljs.core.boolean_QMARK_(field_omit_QMARK_)){
return field_omit_QMARK_;
} else {
return false;

}
}
});
/**
 * Route to the given form in read-only mode.
 */
com.fulcrologic.rad.form.view_BANG_ = (function com$fulcrologic$rad$form$view_BANG_(var_args){
var G__90446 = arguments.length;
switch (G__90446) {
case 3:
return com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,form_class,entity_id){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,form_class,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.view_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null));
}));

(com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,form_class,entity_id,extra_params){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,form_class,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.view_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null)], 0)));
}));

(com.fulcrologic.rad.form.view_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (this$,form_class,entity_id,extra_params,dynamic_routing_options){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic_routing_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),form_class,new cljs.core.Keyword(null,"route-params","route-params",2111411055),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.view_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null)], 0))], null)], 0)));
}));

(com.fulcrologic.rad.form.view_BANG_.cljs$lang$maxFixedArity = 5);

/**
 * Route to the given form for editing the entity with the given ID.
 * 
 * `dynamic-routing-options` - can be used for dr/route-to! dynamic route injection support (:target will be auto-filled).
 */
com.fulcrologic.rad.form.edit_BANG_ = (function com$fulcrologic$rad$form$edit_BANG_(var_args){
var G__90448 = arguments.length;
switch (G__90448) {
case 3:
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,form_class,entity_id){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,form_class,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.edit_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null));
}));

(com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,form_class,entity_id,extra_params){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,form_class,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.edit_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null)], 0)));
}));

(com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (this$,form_class,entity_id,extra_params,dynamic_routing_options){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic_routing_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),form_class,new cljs.core.Keyword(null,"route-params","route-params",2111411055),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.edit_action,new cljs.core.Keyword(null,"id","id",-1388402092),entity_id], null)], 0))], null)], 0)));
}));

(com.fulcrologic.rad.form.edit_BANG_.cljs$lang$maxFixedArity = 5);

/**
 * Create a new instance of the given form-class using the provided `entity-id` and then route
 * to that form for editing.
 * 
 * - `app-ish`: A component instance or the app.
 * - `form-class`: The form to create.
 * - `options` map will be passed to the form as extra options.
 * 
 * The `options` in the default form state machine can contain:
 * 
 * * `:initial-state` - A tree of data to be deep-merged into the new instance of the form before form config
 * is added. This can be used to pre-set form fields to specific values.
 * 
 * `dynamic-routing-options` - Same as the options supported by `dr/route-to!` for route injection/loading (target will
 * be auto-populated by form-class, which can be a sym/keyword).
 * 
 */
com.fulcrologic.rad.form.create_BANG_ = (function com$fulcrologic$rad$form$create_BANG_(var_args){
var G__90450 = arguments.length;
switch (G__90450) {
case 2:
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,form_class){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,form_class,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.create_action,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$0())], null));
}));

(com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app_ish,form_class,options){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,form_class,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.create_action,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$0())], null)], 0)));
}));

(com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_ish,form_class,options,dynamic_routing_options){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$2(app_ish,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic_routing_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),form_class,new cljs.core.Keyword(null,"route-params","route-params",2111411055),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),com.fulcrologic.rad.form.create_action,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$0())], null)], 0))], null)], 0)));
}));

(com.fulcrologic.rad.form.create_BANG_.cljs$lang$maxFixedArity = 4);

com.fulcrologic.rad.form.pathom2_server_delete_entity_mutation = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("com.fulcrologic.rad.form","delete-entity","com.fulcrologic.rad.form/delete-entity",-1894476495,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),(function (env,params){
var temp__5802__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.form","delete-middleware","com.fulcrologic.rad.form/delete-middleware",566297398).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5802__auto__)){
var delete_middleware = temp__5802__auto__;
var delete_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.fulcrologic.rad.form","params","com.fulcrologic.rad.form/params",267016742),params);
return (delete_middleware.cljs$core$IFn$_invoke$arity$1 ? delete_middleware.cljs$core$IFn$_invoke$arity$1(delete_env) : delete_middleware.call(null,delete_env));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("form/pathom-plugin in not installed on Pathom parser.",cljs.core.PersistentArrayMap.EMPTY);
}
})], null);
/**
 * 
 */
com.fulcrologic.rad.form.delete_entity = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.form","delete-entity","com.fulcrologic.rad.form/delete-entity",-1894476495,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.form","delete-entity","com.fulcrologic.rad.form/delete-entity",-1894476495,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$fulcrologic$rad$form$remote(_){
return true;
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function com$fulcrologic$rad$form$ok_action(p__90451){
var map__90452 = p__90451;
var map__90452__$1 = cljs.core.__destructure_map(map__90452);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90452__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__90453_90885 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__90454_90886 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__90454_90886);

try{var target_ident_90887 = cljs.core.first(params);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.fulcro.algorithms.normalized_state.remove_entity,target_ident_90887);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__90453_90885);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__90455 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__90456 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__90456);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__90455);
}})], null);
}));
/**
 * Delete the given entity from local app state and the remote (if present). This method assumes that the
 * given entity is *not* currently being edited and can be used from anyplace else in the application.
 */
com.fulcrologic.rad.form.delete_BANG_ = (function com$fulcrologic$rad$form$delete_BANG_(this$,id_key,entity_id){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__90457 = cljs.core.PersistentArrayMap.createAsIfByAssoc([id_key,entity_id]);
return (com.fulcrologic.rad.form.delete_entity.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.form.delete_entity.cljs$core$IFn$_invoke$arity$1(G__90457) : com.fulcrologic.rad.form.delete_entity.call(null,G__90457));
})()], null));
});
/**
 * Helper: Informs the form's state machine that focus has left an input. Requires a form rendering env, attr keyword,
 * and the current value.
 */
com.fulcrologic.rad.form.input_blur_BANG_ = (function com$fulcrologic$rad$form$input_blur_BANG_(p__90458,k,value){
var map__90459 = p__90458;
var map__90459__$1 = cljs.core.__destructure_map(map__90459);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90459__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90459__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var form_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance));
var asm_id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(master_form,asm_id,new cljs.core.Keyword("event","blur","event/blur",448962841),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949),k,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473),form_ident,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Helper: Informs the form's state machine that an input's value has changed. Requires a form rendering env, attr keyword,
 * and the current value.
 * 
 * Using a value of `nil` will cause the field to become empty in an attribute-aware way:
 * 
 * - If the cardinality is to-one, will be dissoc'd
 * - Scalar to-many will be set to #{} instead.
 * - Ref to-many will be set to [] instead.
 * 
 * Furthermore, idents that contain a nil ID are considered nil.
 */
com.fulcrologic.rad.form.input_changed_BANG_ = (function com$fulcrologic$rad$form$input_changed_BANG_(p__90460,k,value){
var map__90461 = p__90460;
var map__90461__$1 = cljs.core.__destructure_map(map__90461);
var _env = map__90461__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90461__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90461__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var form_ident = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance));
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance)),k);
var asm_id = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,asm_id,new cljs.core.Keyword("event","attribute-changed","event/attribute-changed",-868443355),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949),k,new cljs.core.Keyword(null,"form-ident","form-ident",-387954473),form_ident,new cljs.core.Keyword(null,"form-key","form-key",-309492408),(function (){var G__90462 = com.fulcrologic.fulcro.components.react_type(form_instance);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__90462) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__90462));
})(),new cljs.core.Keyword(null,"old-value","old-value",862546795),old_value,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Returns the computed value of the given attribute on the form from `env` (if it is a computed attribute).
 * 
 *   Computed attributes are regular attributes with no storage (though they may have resolvers) and a `::attr/computed-value`
 *   function. Such a function will be called with the form rendering env and the attribute definition itself.
 */
com.fulcrologic.rad.form.computed_value = (function com$fulcrologic$rad$form$computed_value(env,p__90463){
var map__90464 = p__90463;
var map__90464__$1 = cljs.core.__destructure_map(map__90464);
var attr = map__90464__$1;
var computed_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90464__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","computed-value","com.fulcrologic.rad.attributes/computed-value",-1657154665));
if(cljs.core.truth_(computed_value)){
return (computed_value.cljs$core$IFn$_invoke$arity$2 ? computed_value.cljs$core$IFn$_invoke$arity$2(env,attr) : computed_value.call(null,env,attr));
} else {
return null;
}
});
/**
 * Renamed to rad-application/install-ui-controls!
 */
com.fulcrologic.rad.form.install_ui_controls_BANG_ = com.fulcrologic.rad.application.install_ui_controls_BANG_;
/**
 * Returns a human readable label for a given attribute (which can be declared on the attribute, and overridden on the
 *   specific form). Defaults to the capitalized name of the attribute qualified key. Labels can be configured
 *   on the form that renders them or on the attribute. The form overrides the attribute.
 * 
 *   * On an attribute `::form/field-label`: A string or function returning a string.
 *   * On a form `::form/field-labels`: A map from attribute keyword to a string or function returning a string.
 * 
 *   The ao/label option can be used to provide a default that applies in all contexts.
 * 
 *   If label functions are used they are passed the form instance that is rendering them. They must not side-effect.
 *   
 */
com.fulcrologic.rad.form.field_label = (function com$fulcrologic$rad$form$field_label(form_env,attribute){
var map__90465 = form_env;
var map__90465__$1 = cljs.core.__destructure_map(map__90465);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90465__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var k = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
var options = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var field_label = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","field-labels","com.fulcrologic.rad.form/field-labels",1559200440),k], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword("com.fulcrologic.rad.form","field-label","com.fulcrologic.rad.form/field-label",964001567).cljs$core$IFn$_invoke$arity$1(attribute);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.attributes_options.label.cljs$core$IFn$_invoke$arity$1(attribute);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var G__90466 = k;
var G__90466__$1 = (((G__90466 == null))?null:cljs.core.name(G__90466));
var G__90466__$2 = (((G__90466__$1 == null))?null:clojure.string.capitalize(G__90466__$1));
if((G__90466__$2 == null)){
return null;
} else {
return clojure.string.replace(G__90466__$2,/-/," ");
}
}
}
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
return field_label;
});
/**
 * Returns true if the validator on the form in `env` indicates that some form field(s) are invalid. Note that a
 *   field does not report valid OR invalid until it is marked complete (usually on blur).
 */
com.fulcrologic.rad.form.invalid_QMARK_ = (function com$fulcrologic$rad$form$invalid_QMARK_(var_args){
var G__90468 = arguments.length;
switch (G__90468) {
case 1:
return com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (form_rendering_env){
var map__90469 = form_rendering_env;
var map__90469__$1 = cljs.core.__destructure_map(map__90469);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90469__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
return com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2(form_instance,props);
}));

(com.fulcrologic.rad.form.invalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form_class_or_instance,props){
var map__90470 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_class_or_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_class_or_instance));
var map__90470__$1 = cljs.core.__destructure_map(map__90470);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90470__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894));
var and__5043__auto__ = validator;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),(validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)));
} else {
return and__5043__auto__;
}
}));

(com.fulcrologic.rad.form.invalid_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the validator on the form in `env` indicates that all of the form fields are valid. Note that a
 *   field does not report valid OR invalid until it is marked complete (usually on blur).
 */
com.fulcrologic.rad.form.valid_QMARK_ = (function com$fulcrologic$rad$form$valid_QMARK_(var_args){
var G__90472 = arguments.length;
switch (G__90472) {
case 1:
return com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (form_rendering_env){
var map__90473 = form_rendering_env;
var map__90473__$1 = cljs.core.__destructure_map(map__90473);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90473__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
return com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(form_instance,props);
}));

(com.fulcrologic.rad.form.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (form_class_or_instance,props){
var map__90474 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_class_or_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_class_or_instance));
var map__90474__$1 = cljs.core.__destructure_map(map__90474);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90474__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90474__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894));
var required_attributes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330),attributes);
var all_required_present_QMARK_ = ((cljs.core.empty_QMARK_(required_attributes)) || (cljs.core.every_QMARK_((function (attr){
var k = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(attr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k);
var ok_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),com.fulcrologic.rad.attributes_options.type.cljs$core$IFn$_invoke$arity$1(attr)))?(!(cljs.core.empty_QMARK_(v))):(!((v == null))));
if(cljs.core.truth_((function (){var and__5043__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5043__auto__)){
return (!(ok_QMARK_));
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.form",null,1778,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form is not valid because required attribute is missing:",k], null);
}),null)),null,-803821640,null);
} else {
}

return ok_QMARK_;
}),required_attributes)));
var and__5043__auto__ = all_required_present_QMARK_;
if(and__5043__auto__){
var or__5045__auto__ = cljs.core.not(validator);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto____$1 = validator;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid","valid",155614240),(validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)));
} else {
return and__5043__auto____$1;
}
}
} else {
return and__5043__auto__;
}
}));

(com.fulcrologic.rad.form.valid_QMARK_.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.form","field-style-config","com.fulcrologic.rad.form/field-style-config",926730890,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"config-key","config-key",1125141517)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));


/**
 * Get the value of an overridable field-style-config option. If both the form and attribute set these
 *   then the result will be a deep merge of the two (with form winning).
 * @type {function(*, *, !cljs.core.Keyword): *}
 */
com.fulcrologic.rad.form.field_style_config = (function com$fulcrologic$rad$form$field_style_config(p__90480,attribute,config_key){
var map__90481 = p__90480;
var map__90481__$1 = cljs.core.__destructure_map(map__90481);
var arg_90475 = map__90481__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90481__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__90482 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"config-key","config-key",1125141517)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681),new cljs.core.Keyword(null,"config-key","config-key",1125141517),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__90482__$1 = cljs.core.__destructure_map(map__90482);
var argspec90476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90482__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec90477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90482__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec90476)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:1787 field-style-config's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec90476,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_90475,attribute,config_key], null));
} else {
}

var f90479 = (function (p__90483,attribute__$1,config_key__$1){
var map__90484 = p__90483;
var map__90484__$1 = cljs.core.__destructure_map(map__90484);
var arg_90475__$1 = map__90484__$1;
var form_instance__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90484__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__90485 = attribute__$1;
var map__90485__$1 = cljs.core.__destructure_map(map__90485);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90485__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var field_style_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90485__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","field-style-config","com.fulcrologic.rad.attributes/field-style-config",-1110341024));
var form_value = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$4(form_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-style-configs","com.fulcrologic.rad.form/field-style-configs",457844258),qualified_key,config_key__$1) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","field-style-configs","com.fulcrologic.rad.form/field-style-configs",457844258),qualified_key,config_key__$1));
var attribute_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(field_style_config,config_key__$1);
if(((cljs.core.map_QMARK_(form_value)) && (cljs.core.map_QMARK_(attribute_value)))){
return com.fulcrologic.fulcro.algorithms.do_not_use.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribute_value,form_value], 0));
} else {
var or__5045__auto__ = form_value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return attribute_value;
}
}
});
var ret90478 = f90479(arg_90475,attribute,config_key);
if(cljs.core.truth_(retspec90477)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:1787 field-style-config's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec90477,ret90478);
} else {
}

return ret90478;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.form","field-autocomplete","com.fulcrologic.rad.form/field-autocomplete",-967856508,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));


/**
 * Returns the proper string (or nil) for a given attribute's autocomplete setting
 * @type {function(*, *): *}
 */
com.fulcrologic.rad.form.field_autocomplete = (function com$fulcrologic$rad$form$field_autocomplete(p__90490,attribute){
var map__90491 = p__90490;
var map__90491__$1 = cljs.core.__destructure_map(map__90491);
var _env = map__90491__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90491__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__90492 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"_env","_env",718472478),new cljs.core.Keyword("com.fulcrologic.rad.form","form-env","com.fulcrologic.rad.form/form-env",1156220153),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.fulcrologic.rad.attributes","attribute","com.fulcrologic.rad.attributes/attribute",1984853681)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null);
var map__90492__$1 = cljs.core.__destructure_map(map__90492);
var argspec90486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90492__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec90487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90492__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec90486)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:1799 field-autocomplete's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec90486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_env,attribute], null));
} else {
}

var f90489 = (function (p__90493,attribute__$1){
var map__90494 = p__90493;
var map__90494__$1 = cljs.core.__destructure_map(map__90494);
var _env__$1 = map__90494__$1;
var form_instance__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90494__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__90495 = attribute__$1;
var map__90495__$1 = cljs.core.__destructure_map(map__90495);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90495__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var autocomplete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90495__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","autocomplete","com.fulcrologic.rad.form/autocomplete",-2005027528));
var override = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","auto-completes","com.fulcrologic.rad.form/auto-completes",475748365),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","auto-completes","com.fulcrologic.rad.form/auto-completes",475748365),qualified_key));
var autocomplete__$1 = (((override == null))?autocomplete:override);
var autocomplete__$2 = ((cljs.core.boolean_QMARK_(autocomplete__$1))?((autocomplete__$1)?"on":"off"):autocomplete__$1);
return autocomplete__$2;
});
var ret90488 = f90489(_env,attribute);
if(cljs.core.truth_(retspec90487)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/form.cljc:1799 field-autocomplete's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec90487,ret90488);
} else {
}

return ret90488;
});
/**
 * Build a (fn [env] env') that adds RAD form-related data to an env. If `base-wrapper` is supplied, then it will be called
 * as part of the evaluation, allowing you to build up a chain of environment middleware.
 * 
 * ```
 * (def build-env
 *   (-> (wrap-env save-middleware delete-middleware)
 *      ...))
 * 
 * ;; Pathom 2
 * (def env-plugin (p/env-wrap-plugin build-env))
 * 
 * ;; Pathom 3
 * (let [base-env (pci/register [...])
 *       env (build-env base-env)]
 *    (process env eql))
 * ```
 * 
 * similar to Ring middleware.
 * 
 */
com.fulcrologic.rad.form.wrap_env = (function com$fulcrologic$rad$form$wrap_env(var_args){
var G__90497 = arguments.length;
switch (G__90497) {
case 2:
return com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$2 = (function (save_middleware,delete_middleware){
return com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$3(null,save_middleware,delete_middleware);
}));

(com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$3 = (function (base_wrapper,save_middleware,delete_middleware){
return (function (env){
var G__90498 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.fulcrologic.rad.form","save-middleware","com.fulcrologic.rad.form/save-middleware",-2012160669),save_middleware,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.form","delete-middleware","com.fulcrologic.rad.form/delete-middleware",566297398),delete_middleware], 0));
if(cljs.core.truth_(base_wrapper)){
return (base_wrapper.cljs$core$IFn$_invoke$arity$1 ? base_wrapper.cljs$core$IFn$_invoke$arity$1(G__90498) : base_wrapper.call(null,G__90498));
} else {
return G__90498;
}
});
}));

(com.fulcrologic.rad.form.wrap_env.cljs$lang$maxFixedArity = 3);

/**
 * A pathom 2 plugin that installs general form save/delete support on the pathom parser. Requires
 *   save and delete middleware, which will accomplish the actual actions.  Calling RAD form save/delete
 *   without this plugin and both bits of middleware will result in a runtime error.
 */
com.fulcrologic.rad.form.pathom_plugin = (function com$fulcrologic$rad$form$pathom_plugin(save_middleware,delete_middleware){
var augment = com.fulcrologic.rad.form.wrap_env.cljs$core$IFn$_invoke$arity$2(save_middleware,delete_middleware);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$fulcrologic$rad$form$pathom_plugin_$_env_wrap_wrap_parser(parser){
return (function com$fulcrologic$rad$form$pathom_plugin_$_env_wrap_wrap_parser_$_env_wrap_wrap_internal(env,tx){
var G__90499 = (augment.cljs$core$IFn$_invoke$arity$1 ? augment.cljs$core$IFn$_invoke$arity$1(env) : augment.call(null,env));
var G__90500 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__90499,G__90500) : parser.call(null,G__90499,G__90500));
});
})], null);
});
/**
 * Returns true if the given `attribute` is invalid in the given form `env` context. This is meant to be used in UI
 *   functions, not resolvers/mutations. If there is a validator defined on the form it completely overrides all
 *   attribute validators.
 */
com.fulcrologic.rad.form.invalid_attribute_value_QMARK_ = (function com$fulcrologic$rad$form$invalid_attribute_value_QMARK_(p__90501,attribute){
var map__90502 = p__90501;
var map__90502__$1 = cljs.core.__destructure_map(map__90502);
var _env = map__90502__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90502__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90502__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var k = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attribute);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var value = (function (){var and__5043__auto__ = attribute;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k);
} else {
return and__5043__auto__;
}
})();
var checked_QMARK_ = com.fulcrologic.fulcro.algorithms.form_state.checked_QMARK_.cljs$core$IFn$_invoke$arity$2(props,k);
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribute,com.fulcrologic.rad.attributes_options.required_QMARK_,false);
var form_validator = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894)) : com.fulcrologic.fulcro.components.component_options.call(null,master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894)));
var invalid_QMARK_ = (function (){var or__5045__auto__ = (function (){var and__5043__auto__ = checked_QMARK_;
if(and__5043__auto__){
var and__5043__auto____$1 = required_QMARK_;
if(cljs.core.truth_(and__5043__auto____$1)){
return (((value == null)) || (((typeof value === 'string') && (cljs.core.empty_QMARK_(value)))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = ((checked_QMARK_) && (((cljs.core.not(form_validator)) && (cljs.core.not(com.fulcrologic.rad.attributes.valid_value_QMARK_(attribute,value,props,k))))));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto__ = form_validator;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invalid","invalid",412869516),(form_validator.cljs$core$IFn$_invoke$arity$2 ? form_validator.cljs$core$IFn$_invoke$arity$2(props,k) : form_validator.call(null,props,k)));
} else {
return and__5043__auto__;
}
}
}
})();
return invalid_QMARK_;
});
/**
 * Get the string that should be shown for the error message on a given attribute in the given form context.
 */
com.fulcrologic.rad.form.validation_error_message = (function com$fulcrologic$rad$form$validation_error_message(p__90503,p__90504){
var map__90505 = p__90503;
var map__90505__$1 = cljs.core.__destructure_map(map__90505);
var _env = map__90505__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90505__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90505__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var map__90506 = p__90504;
var map__90506__$1 = cljs.core.__destructure_map(map__90506);
var attribute = map__90506__$1;
var validation_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90506__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-message","com.fulcrologic.rad.form/validation-message",-2123075367));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90506__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var value = (function (){var and__5043__auto__ = attribute;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key);
} else {
return and__5043__auto__;
}
})();
var master_message = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-messages","com.fulcrologic.rad.form/validation-messages",-303459199),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,master_form,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-messages","com.fulcrologic.rad.form/validation-messages",-303459199),qualified_key));
var local_message = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-messages","com.fulcrologic.rad.form/validation-messages",-303459199),qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,new cljs.core.Keyword("com.fulcrologic.rad.form","validation-messages","com.fulcrologic.rad.form/validation-messages",-303459199),qualified_key));
var message = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(master_message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,qualified_key], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(local_message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,qualified_key], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(validation_message,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Invalid value");
}
}
}
})();
return message;
});
/**
 * Get the field context for a given form field. `env` is the rendering env (see `rendering-env`) and attribute
 * is the full RAD attribute for the field in question.
 * 
 * Returns live details about the given field of the form as a map containing:
 * 
 * :value - The current field's value
 * :invalid? - True if the field is marked complete AND is invalid. See `form-state` validation.
 * :validation-message - The string that has been configured (or dynamically generated) to be the validation message. Only
 *                       available when `:invalid?` is true.
 * :field-label - The desired label on the field
 * :visible? - Indicates when the field should be shown/hidden
 * :read-only? - Indicates when the field should not be editable
 * :field-style-config - Additional options that were configured for the field as field-style-config.
 * 
 */
com.fulcrologic.rad.form.field_context = (function com$fulcrologic$rad$form$field_context(p__90507,p__90508){
var map__90509 = p__90507;
var map__90509__$1 = cljs.core.__destructure_map(map__90509);
var env = map__90509__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90509__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var map__90510 = p__90508;
var map__90510__$1 = cljs.core.__destructure_map(map__90510);
var attribute = map__90510__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90510__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var value = (function (){var or__5045__auto__ = com.fulcrologic.rad.form.computed_value(env,attribute);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = attribute;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key);
} else {
return and__5043__auto__;
}
}
})();
var addl_props = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attribute,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
var invalid_QMARK_ = com.fulcrologic.rad.form.invalid_attribute_value_QMARK_(env,attribute);
var validation_message = (cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.rad.form.validation_error_message(env,attribute):null);
var field_label = com.fulcrologic.rad.form.field_label(env,attribute);
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attribute);
var omit_label_QMARK_ = com.fulcrologic.rad.form.omit_label_QMARK_(form_instance,attribute);
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attribute);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"omit-label?","omit-label?",1693642883),omit_label_QMARK_,new cljs.core.Keyword(null,"invalid?","invalid?",789397235),invalid_QMARK_,new cljs.core.Keyword(null,"validation-message","validation-message",-1897616074),validation_message,new cljs.core.Keyword(null,"field-label","field-label",872823490),field_label,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),read_only_QMARK_,new cljs.core.Keyword(null,"visible?","visible?",2129863715),visible_QMARK_,new cljs.core.Keyword(null,"field-style-config","field-style-config",-1006368464),addl_props], null);
});
/**
 * Install a `renderer` for the given attribute `type`, to be known as field `style`.
 * 
 * See `field-context` for obtaining the data to render, and `input-changed!` and `input-blur!` for
 * communcating model changes.
 */
com.fulcrologic.rad.form.install_field_renderer_BANG_ = (function com$fulcrologic$rad$form$install_field_renderer_BANG_(app,type,style,render){
var map__90512 = app;
var map__90512__$1 = cljs.core.__destructure_map(map__90512);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90512__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.form","type->style->control","com.fulcrologic.rad.form/type->style->control",146932348),type,style], null),render);
});
/**
 * Install a renderer for a given `style` of form container.
 */
com.fulcrologic.rad.form.install_form_container_renderer_BANG_ = (function com$fulcrologic$rad$form$install_form_container_renderer_BANG_(app,style,render){
var map__90513 = app;
var map__90513__$1 = cljs.core.__destructure_map(map__90513);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90513__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076),new cljs.core.Keyword(null,"form-container","form-container",-1768135707),style], null),render);
});
/**
 * Install a renderer for a given `style` of form body.
 */
com.fulcrologic.rad.form.install_form_body_renderer_BANG_ = (function com$fulcrologic$rad$form$install_form_body_renderer_BANG_(app,style,render){
var map__90514 = app;
var map__90514__$1 = cljs.core.__destructure_map(map__90514);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90514__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076),new cljs.core.Keyword(null,"form-body-container","form-body-container",819827704),style], null),render);
});
/**
 * Install a renderer for a given `style` of subform reference container.
 */
com.fulcrologic.rad.form.install_form_ref_renderer_BANG_ = (function com$fulcrologic$rad$form$install_form_ref_renderer_BANG_(app,style,render){
var map__90515 = app;
var map__90515__$1 = cljs.core.__destructure_map(map__90515);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90515__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881),new cljs.core.Keyword("com.fulcrologic.rad.form","element->style->layout","com.fulcrologic.rad.form/element->style->layout",1991686076),new cljs.core.Keyword(null,"ref-container","ref-container",-1728504269),style], null),render);
});
/**
 * Create a RAD form component. `options` is the map of form/Fulcro options. The `registry-key` is the globally
 * unique name (as a keyword) that this component should be known by, and `render` is a `(fn [this props])` (optional)
 * for rendering the body, which defaults to the built-in `render-layout`.
 * 
 * WARNING: The macro version ensures that there is a constant react type to refer to. Using this function MAY cause
 * hot code reload behaviors that rely on react-type to misbehave due to the mismatch (closure over old version).
 */
com.fulcrologic.rad.form.form = (function com$fulcrologic$rad$form$form(var_args){
var G__90517 = arguments.length;
switch (G__90517) {
case 2:
return com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$2 = (function (registry_key,options){
return com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$3(registry_key,options,(function (this$,props){
return com.fulcrologic.rad.form.render_layout(this$,props);
}));
}));

(com.fulcrologic.rad.form.form.cljs$core$IFn$_invoke$arity$3 = (function (registry_key,options,render){
var render__$1 = (function (this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (render.cljs$core$IFn$_invoke$arity$2 ? render.cljs$core$IFn$_invoke$arity$2(this$,props) : render.call(null,this$,props));
}));
});
var component_class = cljs.core.volatile_BANG_(null);
var get_class = (function (){
return cljs.core.deref(component_class);
});
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.rad.form.convert_options(get_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry-key","registry-key",-1128363419),registry_key], null),options),new cljs.core.Keyword(null,"render","render",-1408033454),render__$1);
var constructor$ = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__$1,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
var result = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,registry_key,options__$1);
return cljs.core.vreset_BANG_(component_class,result);
}));

(com.fulcrologic.rad.form.form.cljs$lang$maxFixedArity = 3);

/**
 * Undo all changes to the current form by reloading it from the server.
 */
com.fulcrologic.rad.form.undo_via_load_BANG_ = (function com$fulcrologic$rad$form$undo_via_load_BANG_(p__90518){
var map__90519 = p__90518;
var map__90519__$1 = cljs.core.__destructure_map(map__90519);
var _rendering_env = map__90519__$1;
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90519__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(master_form,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form)),new cljs.core.Keyword("event","reload","event/reload",692165289));
});
com.fulcrologic.rad.form.subform_rendering_env = (function com$fulcrologic$rad$form$subform_rendering_env(parent_form_instance,relation_key){
var renv = com.fulcrologic.rad.form.rendering_env.cljs$core$IFn$_invoke$arity$1(parent_form_instance);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(renv,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376),parent_form_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884),relation_key], 0));
});
/**
 * Render a RAD subform from a parent form. This can be used instead of a normal factory in order to avoid having
 * to construct the proper computed props for the subform.
 * 
 * parent-form-instance - The `this` of the parent form
 * relation-key - The key (in props) of the subform(s) data
 * ChildForm - The defsc-form component class to use for rendering the child
 * extra-computed-props - optional. Things to merge into the computed props for the child.
 */
com.fulcrologic.rad.form.render_subform = (function com$fulcrologic$rad$form$render_subform(var_args){
var G__90534 = arguments.length;
switch (G__90534) {
case 4:
return com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$4 = (function (parent_form_instance,relation_key,ChildForm,child_props){
return com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$5(parent_form_instance,relation_key,ChildForm,child_props,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.form.render_subform.cljs$core$IFn$_invoke$arity$5 = (function (parent_form_instance,relation_key,ChildForm,child_props,extra_computed_props){
var id_key = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.form_options.id.cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(ChildForm) : com.fulcrologic.fulcro.components.component_options.call(null,ChildForm))));
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(ChildForm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),id_key], null));
var renv = com.fulcrologic.rad.form.subform_rendering_env(parent_form_instance,relation_key);
var G__90535 = child_props;
var G__90536 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_computed_props,renv], 0));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__90535,G__90536) : ui_factory.call(null,G__90535,G__90536));
}));

(com.fulcrologic.rad.form.render_subform.cljs$lang$maxFixedArity = 5);

/**
 * Given the top-level form instance (this), returns a vector of maps. Each map should have a `:message` key, and MAY
 * contain additional information if the back end added anything else to the error maps.
 */
com.fulcrologic.rad.form.server_errors = (function com$fulcrologic$rad$form$server_errors(top_form_instance){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(top_form_instance) : com.fulcrologic.fulcro.components.props.call(null,top_form_instance)),new cljs.core.Keyword("com.fulcrologic.rad.form","errors","com.fulcrologic.rad.form/errors",-681268443));
});
/**
 * Trigger a UISM event on a form. You can use the rendering env `renv`, or if you want to
 * trigger an event on a known top-level form you can do so with the arity-4 version with an
 * `app-ish` (app or any component instance) and the top-level form's ident.
 * 
 * This should not be used from within the state machine itself. Use `uism/trigger` for that.
 */
com.fulcrologic.rad.form.trigger_BANG_ = (function com$fulcrologic$rad$form$trigger_BANG_(var_args){
var G__90538 = arguments.length;
switch (G__90538) {
case 2:
return com.fulcrologic.rad.form.trigger_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.form.trigger_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.rad.form.trigger_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.trigger_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (renv,event){
return com.fulcrologic.rad.form.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(renv,event,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.form.trigger_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__90539,event,event_data){
var map__90540 = p__90539;
var map__90540__$1 = cljs.core.__destructure_map(map__90540);
var renv = map__90540__$1;
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90540__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90540__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
return com.fulcrologic.rad.form.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(master_form) : com.fulcrologic.fulcro.components.get_ident.call(null,master_form)),event,event_data);
}));

(com.fulcrologic.rad.form.trigger_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app_ish,top_form_ident,event,event_data){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG__BANG_.cljs$core$IFn$_invoke$arity$4(app_ish,top_form_ident,event,event_data);
}));

(com.fulcrologic.rad.form.trigger_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Send an event to a form's state machine (this-form can be the this from the body of the rendered form). This will simply
 * change `:ui/route-denied?` to false.
 */
com.fulcrologic.rad.form.clear_route_denied_BANG_ = (function com$fulcrologic$rad$form$clear_route_denied_BANG_(var_args){
var G__90542 = arguments.length;
switch (G__90542) {
case 1:
return com.fulcrologic.rad.form.clear_route_denied_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.clear_route_denied_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.clear_route_denied_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this_form){
return com.fulcrologic.rad.form.clear_route_denied_BANG_.cljs$core$IFn$_invoke$arity$2(this_form,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this_form) : com.fulcrologic.fulcro.components.get_ident.call(null,this_form)));
}));

(com.fulcrologic.rad.form.clear_route_denied_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,form_ident){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,form_ident,new cljs.core.Keyword("event","clear-route-denied","event/clear-route-denied",1935223784));
}));

(com.fulcrologic.rad.form.clear_route_denied_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Send an event to a form's state machine that indicates that the most previously denied route change attempt should be
 * continued, even though it will lose the unsaved changes.
 */
com.fulcrologic.rad.form.continue_abandoned_route_BANG_ = (function com$fulcrologic$rad$form$continue_abandoned_route_BANG_(var_args){
var G__90544 = arguments.length;
switch (G__90544) {
case 1:
return com.fulcrologic.rad.form.continue_abandoned_route_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form.continue_abandoned_route_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form.continue_abandoned_route_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this_form){
return com.fulcrologic.rad.form.continue_abandoned_route_BANG_.cljs$core$IFn$_invoke$arity$2(this_form,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(this_form) : com.fulcrologic.fulcro.components.get_ident.call(null,this_form)));
}));

(com.fulcrologic.rad.form.continue_abandoned_route_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app_ish,form_ident){
return com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$3(app_ish,form_ident,new cljs.core.Keyword("event","continue-abandoned-route","event/continue-abandoned-route",2053470205));
}));

(com.fulcrologic.rad.form.continue_abandoned_route_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.rad.form.js.map
