goog.provide('com.fulcrologic.rad.rendering.semantic_ui.form_options');
/**
 * This option can be used in the fo/subforms entries to indicate what class(es) should be set on the element that wraps
 *   the list of elements. Defaults to `ui segments` for to-many and nothing for to-one relations. Can also be a
 *   `(fn [form-env] string?)`
 */
com.fulcrologic.rad.rendering.semantic_ui.form_options.ref_container_class = new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ref-container-class","com.fulcrologic.rad.rendering.semantic-ui.form/ref-container-class",-1457979003);
/**
 * This option can be used in a form's component options to indicate the class to set on the (generated) element itself
 *   when used as a subform.
 * 
 *   Can be a string or a `(fn [form-env] string?)`.  Defaults to `ui segment`.
 */
com.fulcrologic.rad.rendering.semantic_ui.form_options.ref_element_class = new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","ref-element-class","com.fulcrologic.rad.rendering.semantic-ui.form/ref-element-class",-268677869);
/**
 * Used in a form's component-options. Specifies the class of the overall form container when it is the master (top-level) form.
 * Defaults to `ui container`. Can be a string or a `(fn [form-env] string?)`.
 * 
 *   See also `ref-element-class`.
 */
com.fulcrologic.rad.rendering.semantic_ui.form_options.top_level_class = new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","top-level-class","com.fulcrologic.rad.rendering.semantic-ui.form/top-level-class",-962711221);
/**
 * Used in a form's component-options. Specifies the container class for the control section of the top-level form.
 * Defaults to `ui top attached segment`. Can be a string or a `(fn [form-env] string?)`.
 */
com.fulcrologic.rad.rendering.semantic_ui.form_options.controls_class = new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","controls-class","com.fulcrologic.rad.rendering.semantic-ui.form/controls-class",-1297338254);
/**
 * Used in a form's component-options. Specifies the container class for the form inputs. Defaults to `ui attached form`.
 * Can be a string or a `(fn [form-env] string?)`.
 */
com.fulcrologic.rad.rendering.semantic_ui.form_options.form_class = new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","form-class","com.fulcrologic.rad.rendering.semantic-ui.form/form-class",-1673203483);
/**
 * ALIAS of `fo/input-props`. This option can be placed on `fo/field-style-config(s)`.
 * The value can be a map, or a `(fn [form-env] map?)`.
 * 
 * Many, but not all, SUI input controls support this option.
 * 
 * See also `fo/input-props`.
 */
com.fulcrologic.rad.rendering.semantic_ui.form_options.input_props = new cljs.core.Keyword("input","props","input/props",-452472703);
/**
 * A map from qualified key to class names. OVERRIDES the class name of the container on the form field.
 */
com.fulcrologic.rad.rendering.semantic_ui.form_options.element_classes = new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","element-classes","com.fulcrologic.rad.rendering.semantic-ui.form/element-classes",426674090);
/**
 * Attribute option. A string that defines a CSS class for the outer-most DOM element of a form
 * field that renders this attribute. OVERRIDES the class name of the container on the form field.
 */
com.fulcrologic.rad.rendering.semantic_ui.form_options.element_class = new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.form","element-class","com.fulcrologic.rad.rendering.semantic-ui.form/element-class",315840008);
/**
 * Looks for the top-level form element class on the given attribute or form instance. See
 * `form-element-classes` and `form-element-class`.
 */
com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class = (function com$fulcrologic$rad$rendering$semantic_ui$form_options$top_class(form_instance,p__91711){
var map__91712 = p__91711;
var map__91712__$1 = cljs.core.__destructure_map(map__91712);
var attribute = map__91712__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91712__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var or__5045__auto__ = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$3(form_instance,com.fulcrologic.rad.rendering.semantic_ui.form_options.element_classes,qualified_key) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance,com.fulcrologic.rad.rendering.semantic_ui.form_options.element_classes,qualified_key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribute,com.fulcrologic.rad.rendering.semantic_ui.form_options.element_class);
}
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.form_options.js.map
