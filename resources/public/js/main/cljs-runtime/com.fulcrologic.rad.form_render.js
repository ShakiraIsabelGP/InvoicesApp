goog.provide('com.fulcrologic.rad.form_render');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.form_render !== 'undefined') && (typeof com.fulcrologic.rad.form_render.render_hierarchy !== 'undefined')){
} else {
com.fulcrologic.rad.form_render.render_hierarchy = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.make_hierarchy());
}
/**
 * Generate a multimethod dispatch function that assumes the attribute is an id-attribute (being called
 * in the context of the rendering env's form-instance) and attempts to find the `style-key` in
 * the subform options of the parent form (to override any declared on the form itself), then
 * on the form-instance, and finally on the attribute.
 * 
 * If `fallback-to-style?` is true, then if it does not find `style-key` it will repeat the sequence using
 * fro/style.
 */
com.fulcrologic.rad.form_render.gen_dispatch = (function com$fulcrologic$rad$form_render$gen_dispatch(style_key,fallback_to_style_QMARK_){
return (function (p__88465,id_attr){
var map__88467 = p__88465;
var map__88467__$1 = cljs.core.__destructure_map(map__88467);
var renv = map__88467__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88467__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88467__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent","com.fulcrologic.rad.form/parent",2114790376));
var parent_relation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88467__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","parent-relation","com.fulcrologic.rad.form/parent-relation",78913884));
var parent_options = (function (){var G__88468 = parent;
if((G__88468 == null)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.component_options(G__88468);
}
})();
var parent_subform_options = (function (){var G__88469 = parent_options;
if((G__88469 == null)){
return null;
} else {
return com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(G__88469,parent_relation);
}
})();
var style = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((style_key.cljs$core$IFn$_invoke$arity$1 ? style_key.cljs$core$IFn$_invoke$arity$1(parent_subform_options) : style_key.call(null,parent_subform_options)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_attr,renv], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__88470 = com.fulcrologic.fulcro.raw.components.component_options(form_instance);
return (style_key.cljs$core$IFn$_invoke$arity$1 ? style_key.cljs$core$IFn$_invoke$arity$1(G__88470) : style_key.call(null,G__88470));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((style_key.cljs$core$IFn$_invoke$arity$1 ? style_key.cljs$core$IFn$_invoke$arity$1(id_attr) : style_key.call(null,id_attr)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = (function (){var and__5043__auto__ = fallback_to_style_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto____$3 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(parent_subform_options),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_options(form_instance)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(id_attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id_attr,renv], 0));
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
}
}
})();
var k = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(id_attr);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,style], null);
});
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.form_render !== 'undefined') && (typeof com.fulcrologic.rad.form_render.render_form !== 'undefined')){
} else {
/**
 * [rendering-env id-attr]
 * 
 * Render a form using the given environment. This is the top-level call from the (default) body of any
 * form that switches rendering to these multimethods. Normally it might call `render-header`,
 * `render-fields`, and `render-footer`.
 * 
 * Dispatches to a vector of `[id-keyword-of-entity style]`
 * 
 * The style is derived as follows:
 * 
 * * The dispatch function will first look to see if it is rendering as a subform
 *   * if so will find the subform options on the `parent` for `parent-relation` and look for the fro/style there.
 * * If that fails, it will look for the fro/style on the form-instance being rendered
 * * finally will look on the attribute.
 * * Otherwise it will use a style of `:default`
 * 
 * See namespace documentation as well.
 * 
 */
com.fulcrologic.rad.form_render.render_form = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__88471 = cljs.core.get_global_hierarchy;
return (fexpr__88471.cljs$core$IFn$_invoke$arity$0 ? fexpr__88471.cljs$core$IFn$_invoke$arity$0() : fexpr__88471.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.form-render","render-form"),com.fulcrologic.rad.form_render.gen_dispatch(com.fulcrologic.rad.form_render_options.style,false),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.form_render !== 'undefined') && (typeof com.fulcrologic.rad.form_render.render_header !== 'undefined')){
} else {
/**
 * [env attr]
 * 
 * Render something before the given attr. The id attr will be passed when it is the
 * entire form *itself*. This MAY be composed into rendering
 * any time you want. Typically, it is composed in front of entire forms, and when
 * there is nested content (like subforms).
 * 
 * Dispatch on [attr-key style].
 * 
 * The style is derived as follows:
 * 
 * * If `attr` is an `ao/identity?` attribute
 * ** dispatch identically to render-form, but looking for `fro/header-style` (preferred) and `fro/style` fallback.
 * * If it is NOT an id attribute, then:
 * ** Look for fro/header-style on the current form's subform options at the qualified key of attr
 * ** Look for fro/header-style on the attr
 * ** Look for fro/style on the current form's subform options at the qualified key of attr
 * ** Look for fro/style on the attr
 * 
 * Otherwise style will be `:default`
 * 
 * See namespace documentation as well.
 * 
 */
com.fulcrologic.rad.form_render.render_header = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__88472 = cljs.core.get_global_hierarchy;
return (fexpr__88472.cljs$core$IFn$_invoke$arity$0 ? fexpr__88472.cljs$core$IFn$_invoke$arity$0() : fexpr__88472.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.form-render","render-header"),(function (){var id_attr_dispatch = com.fulcrologic.rad.form_render.gen_dispatch(com.fulcrologic.rad.form_render_options.header_style,true);
return (function (p__88473,attr){
var map__88474 = p__88473;
var map__88474__$1 = cljs.core.__destructure_map(map__88474);
var renv = map__88474__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88474__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
if(cljs.core.truth_(com.fulcrologic.rad.attributes_options.identity_QMARK_.cljs$core$IFn$_invoke$arity$1(attr))){
return id_attr_dispatch(renv,attr);
} else {
var options = com.fulcrologic.fulcro.raw.components.component_options(form_instance);
var sfoptions = com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(options,attr);
var style = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.header_style.cljs$core$IFn$_invoke$arity$1(sfoptions),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,renv], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.header_style.cljs$core$IFn$_invoke$arity$1(attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(sfoptions),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(attr),style], null);
}
});
})(),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.form_render !== 'undefined') && (typeof com.fulcrologic.rad.form_render.render_fields !== 'undefined')){
} else {
/**
 * [rendering-env id-attribute]
 * 
 * Render the fields. Dispatch is identical to `render-form` ([id-key style]), and this method is always intended to be
 * called in the context of the currently-rendering form-instance with an id-attribute.
 * 
 * The style will first try to find fro/fields-style, and then fro/style.
 * 
 * See namespace documentation as well.
 * 
 */
com.fulcrologic.rad.form_render.render_fields = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__88475 = cljs.core.get_global_hierarchy;
return (fexpr__88475.cljs$core$IFn$_invoke$arity$0 ? fexpr__88475.cljs$core$IFn$_invoke$arity$0() : fexpr__88475.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.form-render","render-fields"),com.fulcrologic.rad.form_render.gen_dispatch(com.fulcrologic.rad.form_render_options.fields_style,true),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.form_render !== 'undefined') && (typeof com.fulcrologic.rad.form_render.render_footer !== 'undefined')){
} else {
/**
 * [renv attr]
 * 
 * Dispatch works identically to `render-header`, other than it looks for `fro/footer-style` and then `fro/style`.
 * 
 * See namespace documentation as well.
 * 
 */
com.fulcrologic.rad.form_render.render_footer = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__88476 = cljs.core.get_global_hierarchy;
return (fexpr__88476.cljs$core$IFn$_invoke$arity$0 ? fexpr__88476.cljs$core$IFn$_invoke$arity$0() : fexpr__88476.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.form-render","render-footer"),(function (){var id_attr_dispatch = com.fulcrologic.rad.form_render.gen_dispatch(com.fulcrologic.rad.form_render_options.footer_style,true);
return (function (p__88477,attr){
var map__88480 = p__88477;
var map__88480__$1 = cljs.core.__destructure_map(map__88480);
var renv = map__88480__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88480__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
if(cljs.core.truth_(com.fulcrologic.rad.attributes_options.identity_QMARK_.cljs$core$IFn$_invoke$arity$1(attr))){
return id_attr_dispatch(renv,attr);
} else {
var options = com.fulcrologic.fulcro.raw.components.component_options(form_instance);
var sfoptions = com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(options,attr);
var style = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.footer_style.cljs$core$IFn$_invoke$arity$1(sfoptions),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,renv], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.footer_style.cljs$core$IFn$_invoke$arity$1(attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(sfoptions),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,renv], 0));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(attr),style], null);
}
});
})(),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.form_render !== 'undefined') && (typeof com.fulcrologic.rad.form_render.render_field !== 'undefined')){
} else {
/**
 * [env attr]
 * 
 * Render a field.
 * 
 * Dispatches on [type style].
 * 
 * The style is derived as follows:
 * 
 * * Look for fro/style on the subform options. This is for the case of ref attributes where the field render
 *   (which might need to wrap a to-many collection) must know the context that the subform will be rendered in,
 *   and that should be preferred.
 * * Then look in form `fo/field-styles` (map from k -> field style)
 * * Then look for `fro/style` on the attribute
 * * Then look for `fo/field-style` on the attribute
 * * Then look for `ao/style` on the attribute
 * * Otherwise :default.
 * 
 * See namespace documentation as well.
 * 
 */
com.fulcrologic.rad.form_render.render_field = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__88481 = cljs.core.get_global_hierarchy;
return (fexpr__88481.cljs$core$IFn$_invoke$arity$0 ? fexpr__88481.cljs$core$IFn$_invoke$arity$0() : fexpr__88481.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.form-render","render-field"),(function (p__88482,field_attr){
var map__88483 = p__88482;
var map__88483__$1 = cljs.core.__destructure_map(map__88483);
var renv = map__88483__$1;
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88483__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var options = com.fulcrologic.fulcro.raw.components.component_options(form_instance);
var k = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(field_attr);
var sfoptions = com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(options,field_attr);
var style = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(sfoptions),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_attr,renv], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form_options.field_styles,k], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_render_options.style.cljs$core$IFn$_invoke$arity$1(field_attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([renv], 0));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_options.field_style.cljs$core$IFn$_invoke$arity$1(field_attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.attributes_options.style.cljs$core$IFn$_invoke$arity$1(field_attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance], 0));
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
}
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.attributes_options.type.cljs$core$IFn$_invoke$arity$1(field_attr),style], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
/**
 * Cause the given `child-keyword `to act as-if it were `parent-keyword `in the rendering multimethods. This
 *   does a `derive `on a custom hierarchy that is used for the rendering multimethods. The relation can be between
 *   styles, RAD attribute keys, etc.
 * 
 *   If you add your own multimethods you may choose to use `render-hierarchy `from this namespace to get all of these.
 *   e.g. `(defmulti sym (fn [] ...) :hierarchy gf/render-hierarchy) `. See Clojure documentation on multimethods
 *   and derive. 
 */
com.fulcrologic.rad.form_render.derive_BANG_ = (function com$fulcrologic$rad$form_render$derive_BANG_(child_keyword,parent_keyword){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.rad.form_render.render_hierarchy,cljs.core.derive,child_keyword,parent_keyword);
});
/**
 *  Allow :default to be a fall-through any time an attribute's qualified key is used as a dispatch value on
 *   rendering multimethods. 
 */
com.fulcrologic.rad.form_render.allow_defaults_BANG_ = (function com$fulcrologic$rad$form_render$allow_defaults_BANG_(all_attrs){
var seq__88484 = cljs.core.seq(all_attrs);
var chunk__88485 = null;
var count__88486 = (0);
var i__88487 = (0);
while(true){
if((i__88487 < count__88486)){
var a = chunk__88485.cljs$core$IIndexed$_nth$arity$2(null,i__88487);
com.fulcrologic.rad.form_render.derive_BANG_(com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"default","default",-1987822328));


var G__88491 = seq__88484;
var G__88492 = chunk__88485;
var G__88493 = count__88486;
var G__88494 = (i__88487 + (1));
seq__88484 = G__88491;
chunk__88485 = G__88492;
count__88486 = G__88493;
i__88487 = G__88494;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__88484);
if(temp__5804__auto__){
var seq__88484__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__88484__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__88484__$1);
var G__88495 = cljs.core.chunk_rest(seq__88484__$1);
var G__88496 = c__5568__auto__;
var G__88497 = cljs.core.count(c__5568__auto__);
var G__88498 = (0);
seq__88484 = G__88495;
chunk__88485 = G__88496;
count__88486 = G__88497;
i__88487 = G__88498;
continue;
} else {
var a = cljs.core.first(seq__88484__$1);
com.fulcrologic.rad.form_render.derive_BANG_(com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"default","default",-1987822328));


var G__88499 = cljs.core.next(seq__88484__$1);
var G__88500 = null;
var G__88501 = (0);
var G__88502 = (0);
seq__88484 = G__88499;
chunk__88485 = G__88500;
count__88486 = G__88501;
i__88487 = G__88502;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 *  Just like clojure.core/isa?, but uses the render-hierarchy. 
 */
com.fulcrologic.rad.form_render.isa_QMARK_ = (function com$fulcrologic$rad$form_render$isa_QMARK_(child,parent){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.rad.form_render.render_hierarchy),child,parent);
});

//# sourceMappingURL=com.fulcrologic.rad.form_render.js.map
