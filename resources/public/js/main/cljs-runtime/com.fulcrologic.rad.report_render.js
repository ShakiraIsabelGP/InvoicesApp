goog.provide('com.fulcrologic.rad.report_render');
/**
 * Generate a multimethod dispatch function that assumes the attribute is an id-attribute (being called
 * in the context of the rendering env's form-instance) and attempts to find the `style-key` in
 * the subform options of the parent form (to override any declared on the form itself), then
 * on the form-instance, and finally on the attribute.
 * 
 * If `fallback-to-style?` is true, then if it does not find `style-key` it will repeat the sequence using
 * fro/style.
 */
com.fulcrologic.rad.report_render.gen_dispatch = (function com$fulcrologic$rad$report_render$gen_dispatch(style_key,fallback_to_style_QMARK_){
return (function (this$,report_options){
var k = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.report_options.row_pk.cljs$core$IFn$_invoke$arity$1(report_options));
var style = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((style_key.cljs$core$IFn$_invoke$arity$1 ? style_key.cljs$core$IFn$_invoke$arity$1(report_options) : style_key.call(null,report_options)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var and__5043__auto__ = fallback_to_style_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.report_render_options.style.cljs$core$IFn$_invoke$arity$1(report_options),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,style], null);
});
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.report_render !== 'undefined') && (typeof com.fulcrologic.rad.report_render.render_report !== 'undefined')){
} else {
/**
 * [this report-options]
 * 
 * Render the entire report (controls, body, rows, etc.). Default uses the rendering plugin.
 */
com.fulcrologic.rad.report_render.render_report = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__91868 = cljs.core.get_global_hierarchy;
return (fexpr__91868.cljs$core$IFn$_invoke$arity$0 ? fexpr__91868.cljs$core$IFn$_invoke$arity$0() : fexpr__91868.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.report-render","render-report"),com.fulcrologic.rad.report_render.gen_dispatch(com.fulcrologic.rad.report_render_options.style,false),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.report_render !== 'undefined') && (typeof com.fulcrologic.rad.report_render.render_body !== 'undefined')){
} else {
/**
 * [this report-options]
 * 
 * Render the body of the report. This method is not used by any of the build-in defaults, but is available
 * for when you define your own reports as a way of creating a wrapper for the rows (e.g. dom table).
 */
com.fulcrologic.rad.report_render.render_body = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__91869 = cljs.core.get_global_hierarchy;
return (fexpr__91869.cljs$core$IFn$_invoke$arity$0 ? fexpr__91869.cljs$core$IFn$_invoke$arity$0() : fexpr__91869.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.report-render","render-body"),com.fulcrologic.rad.report_render.gen_dispatch(com.fulcrologic.rad.report_render_options.body_style,true),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.report_render !== 'undefined') && (typeof com.fulcrologic.rad.report_render.render_row !== 'undefined')){
} else {
/**
 * [this report-options row-props]
 * 
 * Render a single row of the report. Defaults to the rendering plugin. Intended to be called from `rr/render-body` when
 * creating new styles.
 */
com.fulcrologic.rad.report_render.render_row = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__91870 = cljs.core.get_global_hierarchy;
return (fexpr__91870.cljs$core$IFn$_invoke$arity$0 ? fexpr__91870.cljs$core$IFn$_invoke$arity$0() : fexpr__91870.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.report-render","render-row"),(function (this$,report_options,row_props){
var k = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.report_options.row_pk.cljs$core$IFn$_invoke$arity$1(report_options));
var style = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.report_render_options.row_style.cljs$core$IFn$_invoke$arity$1(report_options),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.report_render_options.style.cljs$core$IFn$_invoke$arity$1(report_options),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,style], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.report_render !== 'undefined') && (typeof com.fulcrologic.rad.report_render.render_controls !== 'undefined')){
} else {
/**
 * [this report-options]
 * 
 * Render the controls of the report. Defaults to the UI plugin's rendering of the controls.
 */
com.fulcrologic.rad.report_render.render_controls = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__91871 = cljs.core.get_global_hierarchy;
return (fexpr__91871.cljs$core$IFn$_invoke$arity$0 ? fexpr__91871.cljs$core$IFn$_invoke$arity$0() : fexpr__91871.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.report-render","render-controls"),com.fulcrologic.rad.report_render.gen_dispatch(com.fulcrologic.rad.report_render_options.control_style,true),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.report_render !== 'undefined') && (typeof com.fulcrologic.rad.report_render.render_header !== 'undefined')){
} else {
/**
 * [this report-options]
 * 
 * Render a header. Not called by default, but exists so you can compose elements of a style together in your
 * customizations. You could render the heading of the rows in render-body, or could leverage this method.
 */
com.fulcrologic.rad.report_render.render_header = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__91872 = cljs.core.get_global_hierarchy;
return (fexpr__91872.cljs$core$IFn$_invoke$arity$0 ? fexpr__91872.cljs$core$IFn$_invoke$arity$0() : fexpr__91872.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.report-render","render-header"),com.fulcrologic.rad.report_render.gen_dispatch(com.fulcrologic.rad.report_render_options.header_style,true),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.report_render !== 'undefined') && (typeof com.fulcrologic.rad.report_render.render_footer !== 'undefined')){
} else {
/**
 * [this report-options]
 * 
 * Render a footer. Not called by default, but exists so you can compose elements of a style together in your
 * customizations. You could render a footer of the rows or report in render-body, or could leverage this method.
 */
com.fulcrologic.rad.report_render.render_footer = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),com.fulcrologic.rad.form_render.render_hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__91873 = cljs.core.get_global_hierarchy;
return (fexpr__91873.cljs$core$IFn$_invoke$arity$0 ? fexpr__91873.cljs$core$IFn$_invoke$arity$0() : fexpr__91873.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.rad.report-render","render-footer"),com.fulcrologic.rad.report_render.gen_dispatch(com.fulcrologic.rad.report_render_options.footer_style,true),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}

//# sourceMappingURL=com.fulcrologic.rad.report_render.js.map
