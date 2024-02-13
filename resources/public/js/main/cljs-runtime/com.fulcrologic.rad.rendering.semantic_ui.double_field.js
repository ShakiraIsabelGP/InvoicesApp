goog.provide('com.fulcrologic.rad.rendering.semantic_ui.double_field');
com.fulcrologic.rad.rendering.semantic_ui.double_field.to_numeric = (function com$fulcrologic$rad$rendering$semantic_ui$double_field$to_numeric(s){
var n = parseFloat(s);
if(cljs.core.truth_(isNaN(n))){
return null;
} else {
return n;
}
});
var digits_93187 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["-",null,".",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.str),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
/**
 * Returns `s` with all non-digits stripped.
 */
com.fulcrologic.rad.rendering.semantic_ui.double_field.just_decimal = (function com$fulcrologic$rad$rendering$semantic_ui$double_field$just_decimal(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(digits_93187,cljs.core.seq(s)));
});
/**
 * An integer input. Can be used like `dom/input` but onChange and onBlur handlers will be passed an int instead of
 *   a raw react event, and you should supply an int for `:value` instead of a string.  You may set the `:type` to text
 *   or number depending on how you want the control to display, even though the model value is always an int or nil.
 *   All other attributes passed in props are passed through to the contained `dom/input`.
 */
com.fulcrologic.rad.rendering.semantic_ui.double_field.ui_double_input = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.double-field","DoubleInput","com.fulcrologic.rad.rendering.semantic-ui.double-field/DoubleInput",-1317023882),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.str,new cljs.core.Keyword(null,"string->model","string->model",-134531957),com.fulcrologic.rad.rendering.semantic_ui.double_field.to_numeric,new cljs.core.Keyword(null,"string-filter","string-filter",781255569),com.fulcrologic.rad.rendering.semantic_ui.double_field.just_decimal], null)));
com.fulcrologic.rad.rendering.semantic_ui.double_field.render_field = com.fulcrologic.rad.rendering.semantic_ui.field.render_field_factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.double_field.ui_double_input);

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.double_field.js.map
