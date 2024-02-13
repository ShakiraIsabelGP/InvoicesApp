goog.provide('com.fulcrologic.rad.form_options');
/**
 * RForm option. EQUIRED: The *attribute* that will act as the primary key for this form.
 */
com.fulcrologic.rad.form_options.id = new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937);
/**
 * Form option. REQUIRED: A vector of *attributes* that should be state-managed (should be saved/loaded). If the attribute
 *   isn't in this list, it will not be managed.
 */
com.fulcrologic.rad.form_options.attributes = new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591);
/**
 * Form option. OPTIONAL (may not be supported by your rendering plugin): A vector of vectors holding the
 *   *qualified keys* of the editable attributes.
 * 
 * This is intended to represent the *desired* layout of the fields on this form. The inner vectors loosely
 * represent rows of the form. UI plugins may choose to ignore this, or may define alternate
 * keys to support more complex layout.
 * 
 * ```
 * [[:item/name] [:item/enabled?]
 *  [:item/description]]
 * ```
 * 
 */
com.fulcrologic.rad.form_options.layout = new cljs.core.Keyword("com.fulcrologic.rad.form","layout","com.fulcrologic.rad.form/layout",-1876574554);
/**
 * Form option. OPTIONAL, may not be supported by your rendering plugin.
 * 
 *   A description of a layout that will place fields in tabs to reduce visual clutter. The layout
 *   specification is:
 * 
 *   ```
 *   ["Basic Info"
 * [[:employee/first-name :employee/last-name :employee/email]
 *  [:employee/address]
 *  [:employee/code :employee/enabled?]
 *  [:employee/start-date :employee/hourly-wage :employee/ssn]]
 * "Notes"
 * [[:employee/notes]]
 * "Permissions"
 * [[:employee/permissions]]]
 *   ```
 * 
 *   Where the top-level vector is a sequence of strings interposed with field layouts.
 *   
 */
com.fulcrologic.rad.form_options.tabbed_layout = new cljs.core.Keyword("com.fulcrologic.rad.form","tabbed-layout","com.fulcrologic.rad.form/tabbed-layout",-1223697794);
/**
 * Form option. OPTIONAL: The title for the form. Can be a string or a `(fn [form-instance form-props])`.
 */
com.fulcrologic.rad.form_options.title = new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068);
/**
 * Attribute option. OPTIONAL.
 * 
 * A boolean or `(fn [form-instance attr] boolean?)`. `attr` will be the full attribute that this option is attached to.
 * 
 * An attribute-level key that can be used on an attribute to define the default visibility for an attribute on
 * forms.  Forms may override the attribute-specific key with `fields-visible?`.
 */
com.fulcrologic.rad.form_options.field_visible_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.form","field-visible?","com.fulcrologic.rad.form/field-visible?",834662826);
/**
 * Form option. OPTIONAL: A map from *qualified keyword* to a boolean or a `(fn [this])`. Makes fields statically or dynamically
 * visible on the form. May be given a default on the attribute definition using `::form/field-visible?`
 */
com.fulcrologic.rad.form_options.fields_visible_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.form","fields-visible?","com.fulcrologic.rad.form/fields-visible?",1712071108);
/**
 * Attribute option. OPTIONAL: A *keyword* (or `(fn [form-instance] kw)`)
 * that changes the style of the control that is rendered for the given field. If not found, the renderer will
 * revert to `:default`. If the attribute has a `::attr/style` then that will be attempted as a backup to this
 * option.
 * 
 * Forms can override this with `::form/field-styles`.
 */
com.fulcrologic.rad.form_options.field_style = new cljs.core.Keyword("com.fulcrologic.rad.form","field-style","com.fulcrologic.rad.form/field-style",950512885);
/**
 * Form option. OPTIONAL: A map from *qualified keyword* of the attribute to the *style* (a keyword) desired for the renderer of that
 *   attribute (a keyword defined by your rendering plugin).
 * 
 *   The values in this map can be `(fn [form-instance] keyword)`.
 * 
 * Changes the style of the control that is rendered for the given field. If not found, the renderer will
 * revert to `:default`.
 * 
 * Attributes can set a default for this with ::form/field-style, and an attribute's `ao/style` will be treated as
 * a last resort place to find a style.
 * 
 * See also `field-options`.
 */
com.fulcrologic.rad.form_options.field_styles = new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968);
/**
 * Form OR Attribute option. OPTIONAL: Options related to behavior of a field when it appears on a form.
 * 
 *   When used on a form: A map from *qualified keyword* of attributes to a map of options targeted to the specific UI control for that
 *   field. The content of the map will be defined by the control in question.
 * 
 *   When used on an attribute, it should just be the form field options map for that attribute.
 * 
 *   The value of the options can also be a `(fn [form-options attr] field-options)`.
 * 
 *   Use `fo/get-field-options` to properly pull field options in code.
 * 
 *   See also the `picker-options` namespace.
 */
com.fulcrologic.rad.form_options.field_options = new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138);
/**
 * Form option. OPTIONAL: A map from *qualified keyword* to a string label for that field, or a `(fn [this] string?)` that can
 *   generate the label. Can be overridden by ::form/field-label on the attribute.
 */
com.fulcrologic.rad.form_options.field_labels = new cljs.core.Keyword("com.fulcrologic.rad.form","field-labels","com.fulcrologic.rad.form/field-labels",1559200440);
/**
 * Form option. OPTIONAL: A Fulcro `form-state` validator (see `make-validator`). Will be used to validate all fields on this
 *   form. Subforms may define a validator, but the master form's validator takes precedence.
 */
com.fulcrologic.rad.form_options.validator = new cljs.core.Keyword("com.fulcrologic.rad.form","validator","com.fulcrologic.rad.form/validator",-1673632894);
/**
 * Form options. OPTIONAL: A string. The string to use as this form's route prefix. If you do not provide this key then the router
 * will primarily be usable as a subform, since it will not support routing.
 * 
 */
com.fulcrologic.rad.form_options.route_prefix = new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703);
/**
 * Form option. OPTIONAL: A vector of strings, a route target class (recommended), a map with :route/:target and :params keys,
 * or `:back` (default).
 * 
 * The route to go to on cancel.
 * 
 * A vector of strings or a map will ignore history, a route target class is recommended when using history, and
 * `:back` requires route history to be installed. You may also specify `:none` if you do not want to route away from
 * the form after cancelling, and instead want to do something different (e.g. via the :on-cancel event).
 * 
 * If you return a map is must have ONE OF :route (a vector of strings) or :target (a route target class). The :params
 * is an optional map. A `:route` will not end up in history, so `:target` is preferred.
 * 
 * You can also supply a `(fn [app form-props] ...)` for this option that returns any of the above.
 */
com.fulcrologic.rad.form_options.cancel_route = new cljs.core.Keyword("com.fulcrologic.rad.form","cancel-route","com.fulcrologic.rad.form/cancel-route",-1144534404);
/**
 * ALIAS to com.fulcrologic.rad.control/controls, which is a map from a made-up control key to a control definition
 *   (e.g. a button). See the control ns. Forms have a standard map of controls, and if you set this you should
 *   merge `form/standard-controls` with your new controls, unless you want to completely redefined the controls.
 * 
 *   Controls can be rendered in the action buttons (see fo/action-buttons) OR their keys can be included in the layout
 *   of the form itself to put arbitrary non-field controls anywhere on the form.
 */
com.fulcrologic.rad.form_options.controls = new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232);
/**
 * Form option. A vector of action button keys (see controls). Specifies the layout order of action buttons in the form header.
 * Forms have a built-in standard set of buttons, so if you modify them you should also specify this option.
 */
com.fulcrologic.rad.form_options.action_buttons = new cljs.core.Keyword("com.fulcrologic.rad.form","action-buttons","com.fulcrologic.rad.form/action-buttons",1147437342);
/**
 * Form option. A vector of EQL that will be appended to the component's query. Usually used to add `:ui/???` props for use with
 * hand-rendered UI. See `initialize-ui-props`.
 * 
 * NOTES:
 * * The query elements will be included in the server query to LOAD existing items; however, NO I/O is done on these
 *   during create, since new items do not come from the server! If you always need to load something in your
 *   query inclusion (e.g. options needed to render the form) you will need to augment the form state machine with
 *   `fo/machine`.
 * * If you use joins in the query inclusion, they will not support dynamic queries.
 * 
 */
com.fulcrologic.rad.form_options.query_inclusion = new cljs.core.Keyword("com.fulcrologic.rad.form","query-inclusion","com.fulcrologic.rad.form/query-inclusion",-482825736);
/**
 * Attribute option. The default value for this attribute when created in a new
 *   form. Can be a literal value or a `(fn [form-options attr] value)`. Placed on an attribute to specify a default value.
 */
com.fulcrologic.rad.form_options.default_value = new cljs.core.Keyword("com.fulcrologic.rad.form","default-value","com.fulcrologic.rad.form/default-value",-28925395);
/**
 * Form option. A map from qualified key to a value, or a `(fn [form-options attr] {k v})`.
 * 
 * Overrides the ::form/default-value that can be placed on an attrubute.
 */
com.fulcrologic.rad.form_options.default_values = new cljs.core.Keyword("com.fulcrologic.rad.form","default-values","com.fulcrologic.rad.form/default-values",1185533844);
/**
 * Form option. A map from qualified key to a sub-map that describes details for what to use when a form attribute is a ref.
 * 
 * The value of this option can be a map from keyword to submap, where the submap can instead be a
 * `(fn [form-component-options ref-attr] optionsmap)`.
 * 
 *   Typical entries to the submap include:
 * 
 *   * `fo/ui` - A form class that will be used to render the subform
 *   * `po/*` - Picker options for pick-* style references
 * 
 *   Other entries are plugin-dependent. See `picker-options` for cases where a relationship is one where the parent
 *   form simply picks pre-existing things.
 * 
 *   Use `fo/subform-options` as a helper function to properly get subform options in production code.
 * 
 *   E.g.
 * 
 *   ```
 *   (defsc-form Person [this props]
 * {...
 *  fo/subforms {:person/address {fo/ui Address}}))
 * 
 *   (defsc-form Person [this props]
 * {...
 *  fo/subforms {:person/address (fn [form-component-options attr]
 *                                  (assert (= (ao/qualified-key attr) :person/address))
 *                                  {fo/ui Address})}))
 *   ```
 *   
 */
com.fulcrologic.rad.form_options.subforms = new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383);
com.fulcrologic.rad.form_options.subform = new cljs.core.Keyword("com.fulcrologic.rad.form","subform","com.fulcrologic.rad.form/subform",-1963727005);
/**
 * Form option. A map whose keys name a container element and whose value indicates a desired style.
 * 
 * Render plugins (and your own customizations) can customize the elements and styles available, so
 * see your rendering plugin for details.
 */
com.fulcrologic.rad.form_options.layout_styles = new cljs.core.Keyword("com.fulcrologic.rad.form","layout-styles","com.fulcrologic.rad.form/layout-styles",958249624);
/**
 * Form option. A map whose keys are qualified-keys, and whose values are strings or `(fn [props qualified-key] string?)` to generate
 *   the validation message.  A default value for these can be given by putting ::form/validation-message
 *   on the attribute itself, which has a different signature.
 */
com.fulcrologic.rad.form_options.validation_messages = new cljs.core.Keyword("com.fulcrologic.rad.form","validation-messages","com.fulcrologic.rad.form/validation-messages",-303459199);
/**
 * Attribute option. Specify a default validation message for an attribute.
 *   Can either be a string or a `(fn [value] string?)`.
 */
com.fulcrologic.rad.form_options.validation_message = new cljs.core.Keyword("com.fulcrologic.rad.form","validation-message","com.fulcrologic.rad.form/validation-message",-2123075367);
/**
 * Custom handlers in the form state lifecycle that can do tasks at particular times and affect form state.
 * 
 *   * `:derive-fields` - A `(fn [props] new-props)` that can rewrite any of the props on the form (as a tree). This
 *   function is allowed to look into subforms, and even generate new members (though it must be careful to add
 *   form config if it does so). The `new-props` must be a tree of props that matches the correct shape of the form
 *   and is non-destructive to the form config and other non-field attributes on that tree.
 * 
 *   * `:on-change` - Called when an individual field changes. A `(fn [uism-env form-ident qualified-key old-value new-value] uism-env)`.
 *   The change handler has access to the UISM env (which contains `::uism/fulcro-app` and `::uism/state-map`). This
 *   function is allowed to side-effect (trigger loads for dependent dropdowns, etc.). It must return
 *   the (optionally updated) `uism-env`. This means you can trigger state machine events, and use the various
 *   facilities of UISM to accomplish your tasks. If you define your own custom state machine this can be useful for
 *   triggering very complex behavior. Typically you'll do something like
 *   `(uism/apply-action uism-env assoc-in (conj form-ident :line-item/quantity) 1)` to update the form state. See UISM
 *   documentation for more details.
 * 
 *   * `:started` - A (fn [uism-env ident]). Called after the form has been initialized. Note, new instances (create) will
 *  have a tempid. Edits will have issued a load on the form, so if you're trying to load things that are in query
 *  inclusions (that have a global resolver) then you only need to do so if the entity is new.  Must return UISM env.
 *   * `:saved` - A (fn [uism-env ident]). Called after a successful save. Must return a UISM env.
 *   * `:save-failed` - A (fn [uism-env ident]). Called after a failed save. Must return a UISM env.
 *   * `:started` - A `(fn [uism-env ident])`. Called as a form starts (state machine started, but load may still be in progress).
 *   
 */
com.fulcrologic.rad.form_options.triggers = new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839);
/**
 * A map from qualified key of a form field to the string to use for it. May be a `(fn [] string?)`.
 * Overrides ::attr/enumerated-labels.
 */
com.fulcrologic.rad.form_options.enumerated_labels = new cljs.core.Keyword("com.fulcrologic.rad.form","enumerated-labels","com.fulcrologic.rad.form/enumerated-labels",-1411306194);
/**
 * Attribute option. String or `(fn [form-instance] string-or-element)`. Rendering plugins may require a string return
 *   value.
 * 
 *   Placing this on an attribute indicates a default for the label for the attribute on forms. The default is a
 *   capitalized version of the attribute's key. See also `field-labels`.
 */
com.fulcrologic.rad.form_options.field_label = new cljs.core.Keyword("com.fulcrologic.rad.form","field-label","com.fulcrologic.rad.form/field-label",964001567);
/**
 * Used within `subform` or `subforms`. This should be the Form component that will be used to render instances of
 * the subform.
 * 
 * Can be one of: A component, component registry key, or `(fn [form-options ref-key] comp-or-reg-key)`
 */
com.fulcrologic.rad.form_options.ui = new cljs.core.Keyword("com.fulcrologic.rad.form","ui","com.fulcrologic.rad.form/ui",-426613864);
/**
 * Attribute option: A map of options that are used by the rendering plugin to augment the style of a rendered input.
 *   Such configuration options are really up to the render plugin, but could include things like `:input/props` as
 *   additional DOM k/v pairs to put on the input.
 */
com.fulcrologic.rad.form_options.field_style_config = new cljs.core.Keyword("com.fulcrologic.rad.attributes","field-style-config","com.fulcrologic.rad.attributes/field-style-config",-1110341024);
/**
 * A key that can be included WITHIN `field-style-config`(s).  A HINT to the field renderer that the given additional
 *   props should be included on the low-level input.  Renderers may define additional keys for further customization. In
 *   general you should *not* use this to attempt to mess with the input's value of value event handlers. The value of
 *   this option can be a map or a `(fn [form-env] map?)`. In general `:value`, `:onBlur`, `:onChange`, and `:onFocus`
 *   will be ignored by the underlying renderer, since it will likely provide its own setting for those.
 */
com.fulcrologic.rad.form_options.input_props = new cljs.core.Keyword("input","props","input/props",-452472703);
/**
 * A map from field *keyword* to a map of options that are used by the rendering plugin to augment the style of a rendered input.
 *   Such configuration options are really up to the render plugin, but could include things like `:input/props` as
 *   additional DOM k/v pairs to put on the input.
 */
com.fulcrologic.rad.form_options.field_style_configs = new cljs.core.Keyword("com.fulcrologic.rad.form","field-style-configs","com.fulcrologic.rad.form/field-style-configs",457844258);
/**
 * This option goes *within* ::subforms and defines how to sort those subform UI components when there are more
 *   than one. It is a `(fn [denormalized-children] sorted-children)`.
 * 
 *   For example, a form might have:
 * 
 *   ```
 *   {fo/subforms {:person/children {fo/ui PersonForm
 *                                fo/sort-children (fn [children] (sort-by :person/name children))}
 *   ```
 *   
 */
com.fulcrologic.rad.form_options.sort_children = new cljs.core.Keyword("com.fulcrologic.rad.form","sort-children","com.fulcrologic.rad.form/sort-children",-1384515906);
/**
 * A set of keywords, or a `(fn [form-instance] set?)`. Any form fields that appear in the set will be shown
 * as read-only values in the form
 */
com.fulcrologic.rad.form_options.read_only_fields = new cljs.core.Keyword("com.fulcrologic.rad.form","read-only-fields","com.fulcrologic.rad.form/read-only-fields",1091648316);
/**
 * Used to indicate whether *everything* in the form should be treated as read-only.
 * This option is a boolean or a `(fn [form-instance] boolean?)`.
 * If true, `read-only-fields` will be ignored.
 */
com.fulcrologic.rad.form_options.read_only_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.form","read-only?","com.fulcrologic.rad.form/read-only?",-595190695);
/**
 * Used in `subforms` maps to control when a child can be deleted.
 * This option is a boolean or a `(fn [parent-form-instance row-props] boolean?)`.
 * that is used to determine if the given child can be deleted by the user.
 */
com.fulcrologic.rad.form_options.can_delete_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.form","can-delete?","com.fulcrologic.rad.form/can-delete?",-953660037);
/**
 * Used in `subforms` maps to control when a child of that type can be added across its relation.
 * This option is a boolean or a `(fn [form-instance attribute] boolean?)` that is used to determine if the
 * given child (reachable through `attribute` (a ref attribute)) can be added as a child to `form-instance`.
 * 
 * NOTE: You can return the truthy value `:prepend` from this function to ask the form to put new children at the top
 * of the list.
 */
com.fulcrologic.rad.form_options.can_add_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.form","can-add?","com.fulcrologic.rad.form/can-add?",963248679);
/**
 * Override the state machine definition that is used to control this form. Defaults to form/form-machine, which
 * you can use as a basis of your replacement (a state machine definition is just a map).
 */
com.fulcrologic.rad.form_options.machine = new cljs.core.Keyword("com.fulcrologic.rad.form","machine","com.fulcrologic.rad.form/machine",-1164263159);
/**
 * Indicate a desire to show debug information about the form. Requires support from the rendering plugin.
 */
com.fulcrologic.rad.form_options.debug_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.form","debug?","com.fulcrologic.rad.form/debug?",-2057182574);
/**
 * Form-only option, meant for setting up additinal component state (particularly `:ui/???` props that were added
 * in a query inclusion) when the form is created or loaded.
 * 
 * Either a map or a `(fn [FormClass props] props)` that, when present, is called when an instance of this
 * form is either loaded or created. NOTE: The resulting merge is SHALLOW, and cannot mess with subforms in *any* way.
 * If you want to affect a subform, then you MUST include this option on that subform (instead of trying to reach deeper in props).
 * 
 * NOTE: It is possible for this function to be called more than once on a given form, so it should not side-effect.
 * 
 * See `query-inclusion`.
 * 
 */
com.fulcrologic.rad.form_options.initialize_ui_props = new cljs.core.Keyword("com.fulcrologic.rad.form","initialize-ui-props","com.fulcrologic.rad.form/initialize-ui-props",-1823698482);
/**
 * A *symbol* that represents the server-side mutation that will be invoked on a save. Defaults to
 * `com.fulcrologic.rad.form/save-form`. Used in cases where you want to bypass the default RAD form save handler
 * and middleware in order to do something non-standard with the data from the form.
 */
com.fulcrologic.rad.form_options.save_mutation = new cljs.core.Keyword("com.fulcrologic.rad.form","save-mutation","com.fulcrologic.rad.form/save-mutation",680293905);
/**
 * A map of data OR a `(fn [form-rendering-env] map?)`. This data will be included in the form parameters sent
 * to the save mutation on the remote. These will be merged with the default parameters such as `::form/delta`.
 */
com.fulcrologic.rad.form_options.save_params = new cljs.core.Keyword("com.fulcrologic.rad.form","save-params","com.fulcrologic.rad.form/save-params",-307782477);
/**
 * Form-only option. A boolean or `(fn [master-form-instance] boolean?)`. This is checked when navigation attempts
 * to move away from the form. If it returns true, then any unsaved changes will be abandoned (reset in Fulcro state to
 * their original values) and the navigation will be allowed.
 */
com.fulcrologic.rad.form_options.silent_abandon_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.form","silent-abandon?","com.fulcrologic.rad.form/silent-abandon?",1683103386);
/**
 * Subform option (placed on any form that might be used as a subform). A string or
 * `(fn [ui-cls add-child!] string-or-dom-element)` that represents the label to use when an add button is generated
 * for to-one or to-many relations of that form.
 * 
 * The `ui-cls` will be the component class for which a label is desired, and the `add-child!` is a no-arg function to
 * call when you want to add a child.
 * 
 * IF your function returns a DOM element, then that DOM element must call the provided (no-arg) `add-child!` function when it is
 * triggered.
 *   
 */
com.fulcrologic.rad.form_options.add_label = new cljs.core.Keyword("com.fulcrologic.rad.form","add-label","com.fulcrologic.rad.form/add-label",-215648875);
/**
 * Form-only option. A boolean or `(fn [master-form-instance] boolean?)`. Default true. Turns on/off the title/controls.
 * Useful when embedding a form in some other container. Can also be passed in the computed props of a top-level form
 * factory for contextual hiding of the header.
 */
com.fulcrologic.rad.form_options.show_header_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.form","show-header?","com.fulcrologic.rad.form/show-header?",990903813);
com.fulcrologic.rad.form_options.omit_label_QMARK_ = new cljs.core.Keyword("com.fulcrologic.rad.form","omit-label?","com.fulcrologic.rad.form/omit-label?",1849863134);
/**
 * Form option.  Specifies the method of confirming an attempt to abandon unsaved changes.
 * 
 * It can EITHER be:
 * 
 * * A SYNCHRONOUS `(fn [msg] boolean?)` that, if defined, is called in order to decide if it is ok to abandon unsaved
 *   changes.
 * * The keyword `:async`.
 * 
 * It defaults to js/confirm.
 * 
 * 
 * The `:async` case indicates that the state machine should set `:ui/route-denied?` to true in the form's props,
 * and your rendering code will then need to show the appropriate options.
 * 
 * You can then, at any point in the future, send one of two events to the state machine to proceed:
 * 
 * * :event/clear-route-denied will simply clear the flag.
 * * :event/continue-routing will abandon the unsaved form changes and do the routing operation away from the form.
 * 
 * Two helper functions exist for these two operations (clear-route-denied! and continue-routing!).
 *   
 */
com.fulcrologic.rad.form_options.confirm = new cljs.core.Keyword("com.fulcrologic.rad.form","confirm","com.fulcrologic.rad.form/confirm",-1829135245);
/**
 * Use form/subform-options instead.
 */
com.fulcrologic.rad.form_options.subform_options = (function com$fulcrologic$rad$form_options$subform_options(var_args){
var G__86844 = arguments.length;
switch (G__86844) {
case 1:
return com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$1 = (function (form_options){
var ref_attrs = cljs.core.filterv((function (p1__86842_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),com.fulcrologic.rad.attributes_options.type.cljs$core$IFn$_invoke$arity$1(p1__86842_SHARP_));
}),com.fulcrologic.rad.form_options.attributes.cljs$core$IFn$_invoke$arity$1(form_options));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,attr){
var opts = com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(form_options,attr);
if(cljs.core.seq(opts)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(attr),opts);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,ref_attrs);
}));

(com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2 = (function (form_options,ref_attr_or_key){
var k__GT_a = new cljs.core.Keyword("com.fulcrologic.rad.form","key->attribute","com.fulcrologic.rad.form/key->attribute",2109187333).cljs$core$IFn$_invoke$arity$1(form_options);
var ref_attr = (function (){var G__86845 = ref_attr_or_key;
if((ref_attr_or_key instanceof cljs.core.Keyword)){
return (k__GT_a.cljs$core$IFn$_invoke$arity$1 ? k__GT_a.cljs$core$IFn$_invoke$arity$1(G__86845) : k__GT_a.call(null,G__86845));
} else {
return G__86845;
}
})();
var k = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(ref_attr);
var form_options__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form_options.subforms,k], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options,ref_attr], 0));
var raw_options = (function (){var or__5045__auto__ = form_options__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_options.subform.cljs$core$IFn$_invoke$arity$1(ref_attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options__$1,ref_attr], 0));
}
})();
var G__86846 = raw_options;
if(cljs.core.contains_QMARK_(raw_options,com.fulcrologic.rad.form_options.ui)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__86846,com.fulcrologic.rad.form_options.ui,(function (c){
var G__86847 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options__$1,k], 0));
if((G__86847 == null)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.registry_key__GT_class(G__86847);
}
}));
} else {
return G__86846;
}
}));

(com.fulcrologic.rad.form_options.subform_options.cljs$lang$maxFixedArity = 2);

/**
 * Use form/get-field-options instead.
 */
com.fulcrologic.rad.form_options.get_field_options = (function com$fulcrologic$rad$form_options$get_field_options(var_args){
var G__86849 = arguments.length;
switch (G__86849) {
case 1:
return com.fulcrologic.rad.form_options.get_field_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.form_options.get_field_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.form_options.get_field_options.cljs$core$IFn$_invoke$arity$1 = (function (form_options){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,attr){
var opts = com.fulcrologic.rad.form_options.get_field_options.cljs$core$IFn$_invoke$arity$2(form_options,attr);
if(cljs.core.seq(opts)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(attr),opts);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.rad.form_options.attributes.cljs$core$IFn$_invoke$arity$1(form_options));
}));

(com.fulcrologic.rad.form_options.get_field_options.cljs$core$IFn$_invoke$arity$2 = (function (form_options,attr_or_key){
var k__GT_a = new cljs.core.Keyword("com.fulcrologic.rad.form","key->attribute","com.fulcrologic.rad.form/key->attribute",2109187333).cljs$core$IFn$_invoke$arity$1(form_options);
var attr = (function (){var G__86850 = attr_or_key;
if((attr_or_key instanceof cljs.core.Keyword)){
return (k__GT_a.cljs$core$IFn$_invoke$arity$1 ? k__GT_a.cljs$core$IFn$_invoke$arity$1(G__86850) : k__GT_a.call(null,G__86850));
} else {
return G__86850;
}
})();
var k = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(attr);
var form_options__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form_options.field_options,k], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options,attr], 0));
var or__5045__auto__ = form_options__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_options.field_options.cljs$core$IFn$_invoke$arity$1(attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options__$1,attr], 0));
}
}));

(com.fulcrologic.rad.form_options.get_field_options.cljs$lang$maxFixedArity = 2);

/**
 * Get the default value for `attr` in  the form-options context. Properly looks for the default value in
 * the form, on the attribute, and in subform options. Also checks if the value is a fn, and properly runs it
 * if so.
 */
com.fulcrologic.rad.form_options.get_default_value = (function com$fulcrologic$rad$form_options$get_default_value(form_options,attribute){
var k = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(attribute);
var default_value = com.fulcrologic.rad.form_options.default_value.cljs$core$IFn$_invoke$arity$1(attribute);
var sfoptions = com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(form_options,attribute);
var SubForm = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_options.ui.cljs$core$IFn$_invoke$arity$1(sfoptions),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options,k], 0));
var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form_options.default_values,k], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options,attribute], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form_options.default_values.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.form_options.subform_options.cljs$core$IFn$_invoke$arity$2(form_options,attribute)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options,attribute], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__86856 = SubForm;
if((G__86856 == null)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.component_options(G__86856);
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.form_options.default_values,k], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options,attribute], 0));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(default_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_options,attribute], 0));
}
}
}
});

//# sourceMappingURL=com.fulcrologic.rad.form_options.js.map
