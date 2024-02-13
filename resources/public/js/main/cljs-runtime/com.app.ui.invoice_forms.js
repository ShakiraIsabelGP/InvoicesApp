goog.provide('com.app.ui.invoice_forms');
com.app.ui.invoice_forms.add_subtotal_STAR_ = (function com$app$ui$invoice_forms$add_subtotal_STAR_(p__63179){
var map__63180 = p__63179;
var map__63180__$1 = cljs.core.__destructure_map(map__63180);
var item = map__63180__$1;
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63180__$1,new cljs.core.Keyword("line-item","quantity","line-item/quantity",441962758));
var quoted_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63180__$1,new cljs.core.Keyword("line-item","quoted-price","line-item/quoted-price",-619248109));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword("line-item","subtotal","line-item/subtotal",-2037283008),com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quantity,quoted_price], 0)));
});

var options__57920__auto___63216 = (function (){var get_class__57913__auto__ = (function (){
return com.app.ui.invoice_forms.LineItemForm;
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.convert_options(get_class__57913__auto__,"com.app.ui.invoice-forms.LineItemForm",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),com.app.model.line_item.id,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.line_item.item,com.app.model.line_item.quantity,com.app.model.line_item.quoted_price,com.app.model.line_item.subtotal], null),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703),"line-item",new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068),"Line Items",new cljs.core.Keyword("com.fulcrologic.rad.form","layout","com.fulcrologic.rad.form/layout",-1876574554),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("line-item","item","line-item/item",-2127665730),new cljs.core.Keyword("line-item","quantity","line-item/quantity",441962758),new cljs.core.Keyword("line-item","quoted-price","line-item/quoted-price",-619248109),new cljs.core.Keyword("line-item","subtotal","line-item/subtotal",-2037283008)], null)], null),new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"derive-fields","derive-fields",1006749330),(function (new_form_tree){
return com.app.ui.invoice_forms.add_subtotal_STAR_(new_form_tree);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p__63181,form_ident,k,old_value,new_value){
var map__63182 = p__63181;
var map__63182__$1 = cljs.core.__destructure_map(map__63182);
var uism_env = map__63182__$1;
var state_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63182__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-map","com.fulcrologic.fulcro.ui-state-machines/state-map",1280764138));
var fulcro_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63182__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","fulcro-app","com.fulcrologic.fulcro.ui-state-machines/fulcro-app",-163883279));
var G__63183 = k;
var G__63183__$1 = (((G__63183 instanceof cljs.core.Keyword))?G__63183.fqn:null);
switch (G__63183__$1) {
case "line-item/item":
var item_price = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_value,new cljs.core.Keyword("item","price","item/price",23278889)));
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form_ident,new cljs.core.Keyword("line-item","quoted-price","line-item/quoted-price",-619248109));
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(uism_env,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target_path,item_price], 0));

break;
default:
return uism_env;

}
})], null),new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("line-item","item","line-item/item",-2127665730),new cljs.core.Keyword(null,"pick-one","pick-one",-101885082)], null)),new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("line-item","item","line-item/item",-2127665730),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883),new cljs.core.Keyword("item","all-items","item/all-items",1478870489),new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-component","com.fulcrologic.rad.picker-options/query-component",1786201876),com.app.ui.inventory.ItemForm,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-xform","com.fulcrologic.rad.picker-options/options-xform",-823181747),(function (_,options){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__63184){
var map__63185 = p__63184;
var map__63185__$1 = cljs.core.__destructure_map(map__63185);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63185__$1,new cljs.core.Keyword("item","id","item/id",-1385287903));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63185__$1,new cljs.core.Keyword("item","name","item/name",1849015102));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63185__$1,new cljs.core.Keyword("item","price","item/price",23278889));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.type_support.decimal.numeric__GT_currency_str.cljs$core$IFn$_invoke$arity$1(price))].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("item","id","item/id",-1385287903),id], null)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("item","name","item/name",1849015102),options));
})], null)], null)], null)),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$invoice_forms$render_LineItemForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.form.render_layout(this$,props);
}));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.app.ui.invoice-forms","LineItemForm","com.app.ui.invoice-forms/LineItemForm",70267463)], 0));
})();
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.invoice_forms !== 'undefined') && (typeof com.app.ui.invoice_forms.LineItemForm !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.invoice_forms.LineItemForm = com.fulcrologic.fulcro.components.react_constructor(new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876).cljs$core$IFn$_invoke$arity$1(options__57920__auto___63216));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.invoice_forms.LineItemForm,new cljs.core.Keyword("com.app.ui.invoice-forms","LineItemForm","com.app.ui.invoice-forms/LineItemForm",70267463),options__57920__auto___63216);
com.app.ui.invoice_forms.tax_rate = 0.19;
com.app.ui.invoice_forms.sum_subtotals_STAR_ = (function com$app$ui$invoice_forms$sum_subtotals_STAR_(p__63186){
var map__63187 = p__63186;
var map__63187__$1 = cljs.core.__destructure_map(map__63187);
var invoice = map__63187__$1;
var line_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63187__$1,new cljs.core.Keyword("invoice","line-items","invoice/line-items",-556093315));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(invoice,new cljs.core.Keyword("invoice","total","invoice/total",1234106335),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (t,p__63188){
var map__63189 = p__63188;
var map__63189__$1 = cljs.core.__destructure_map(map__63189);
var subtotal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63189__$1,new cljs.core.Keyword("line-item","subtotal","line-item/subtotal",-2037283008));
return com.fulcrologic.rad.type_support.decimal._PLUS_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,subtotal,com.fulcrologic.rad.type_support.decimal._STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subtotal,com.app.ui.invoice_forms.tax_rate], 0))], 0));
}),com.fulcrologic.rad.type_support.decimal.zero(),line_items));
});

var options__57920__auto___63218 = (function (){var get_class__57913__auto__ = (function (){
return com.app.ui.invoice_forms.InvoiceForm;
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.convert_options(get_class__57913__auto__,"com.app.ui.invoice-forms.InvoiceForm",cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.rad.form","field-styles","com.fulcrologic.rad.form/field-styles",-808375968),new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383),new cljs.core.Keyword("com.fulcrologic.rad.form","triggers","com.fulcrologic.rad.form/triggers",-1153207839),new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068),new cljs.core.Keyword("com.fulcrologic.rad.form","layout","com.fulcrologic.rad.form/layout",-1876574554),new cljs.core.Keyword("com.fulcrologic.rad.form","field-options","com.fulcrologic.rad.form/field-options",1469968138),new cljs.core.Keyword("com.fulcrologic.rad.form","default-values","com.fulcrologic.rad.form/default-values",1185533844),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703),new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591)],[com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("invoice","customer","invoice/customer",486428932),new cljs.core.Keyword(null,"pick-one","pick-one",-101885082)], null)),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("invoice","line-items","invoice/line-items",-556093315),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.form_options.ui,com.app.ui.invoice_forms.LineItemForm,com.fulcrologic.rad.form_options.can_delete_QMARK_,(function (_,___$1){
return true;
}),com.fulcrologic.rad.form_options.can_add_QMARK_,(function (_,___$1){
return true;
})])], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derive-fields","derive-fields",1006749330),(function (new_form_tree){
return com.app.ui.invoice_forms.sum_subtotals_STAR_(new_form_tree);
})], null),(function (_,p__63190){
var map__63191 = p__63190;
var map__63191__$1 = cljs.core.__destructure_map(map__63191);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63191__$1,new cljs.core.Keyword("invoice","id","invoice/id",1486944007));
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(id)){
return "New Invoice";
} else {
return ["Invoice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("invoice","customer","invoice/customer",486428932),new cljs.core.Keyword("invoice","date","invoice/date",613355027)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("invoice","line-items","invoice/line-items",-556093315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("invoice","total","invoice/total",1234106335)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("invoice","customer","invoice/customer",486428932),cljs.core.PersistentHashMap.fromArrays([com.fulcrologic.rad.picker_options.query_component,com.fulcrologic.rad.picker_options.form,com.fulcrologic.rad.picker_options.query_key,com.fulcrologic.rad.picker_options.allow_create_QMARK_,com.fulcrologic.rad.picker_options.cache_time_ms,com.fulcrologic.rad.picker_options.options_xform,com.fulcrologic.rad.picker_options.quick_create,com.fulcrologic.rad.picker_options.allow_edit_QMARK_,com.fulcrologic.rad.form_options.title],[com.app.model.account.AccountQuery,com.app.ui.account_forms.BriefAccountForm,new cljs.core.Keyword("account","all-accounts","account/all-accounts",-420133929),true,(30000),(function (_,options){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__63192){
var map__63193 = p__63192;
var map__63193__$1 = cljs.core.__destructure_map(map__63193);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63193__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63193__$1,new cljs.core.Keyword("account","name","account/name",869255772));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63193__$1,new cljs.core.Keyword("account","email","account/email",439866197));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(email)].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("account","id","account/id",-544456697),id], null)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("account","name","account/name",869255772),options));
}),(function (v){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("account","id","account/id",-544456697),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("account","email","account/email",439866197),clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"@example.com"].join('')),new cljs.core.Keyword("account","active?","account/active?",-782830515),true,new cljs.core.Keyword("account","name","account/name",869255772),v], null);
}),true,(function (i,p__63194){
var map__63195 = p__63194;
var map__63195__$1 = cljs.core.__destructure_map(map__63195);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63195__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(id)){
return "New Account";
} else {
return "Edit Account";
}
})])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("invoice","date","invoice/date",613355027),com.fulcrologic.rad.type_support.date_time.now()], null),"invoice",com.app.model.invoice.id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.invoice.customer,com.app.model.invoice.date,com.app.model.invoice.line_items,com.app.model.invoice.total], null)])),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$invoice_forms$render_InvoiceForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.form.render_layout(this$,props);
}));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.app.ui.invoice-forms","InvoiceForm","com.app.ui.invoice-forms/InvoiceForm",-1373256634)], 0));
})();
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.invoice_forms !== 'undefined') && (typeof com.app.ui.invoice_forms.InvoiceForm !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.invoice_forms.InvoiceForm = com.fulcrologic.fulcro.components.react_constructor(new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876).cljs$core$IFn$_invoke$arity$1(options__57920__auto___63218));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.invoice_forms.InvoiceForm,new cljs.core.Keyword("com.app.ui.invoice-forms","InvoiceForm","com.app.ui.invoice-forms/InvoiceForm",-1373256634),options__57920__auto___63218);
com.app.ui.invoice_forms.AccountInvoices = com.fulcrologic.rad.report.report.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.app.ui.invoice-forms","AccountInvoices","com.app.ui.invoice-forms/AccountInvoices",-1957817105),cljs.core.PersistentHashMap.fromArrays([com.fulcrologic.rad.report_options.row_pk,com.fulcrologic.rad.report_options.form_links,com.fulcrologic.rad.report_options.source_attribute,com.fulcrologic.rad.report_options.title,com.fulcrologic.rad.report_options.columns,com.fulcrologic.rad.report_options.controls,com.fulcrologic.rad.report_options.column_headings,com.fulcrologic.rad.report_options.route,com.fulcrologic.rad.report_options.run_on_mount_QMARK_],[com.app.model.invoice.id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("invoice","id","invoice/id",1486944007),com.app.ui.invoice_forms.InvoiceForm], null),new cljs.core.Keyword("account","invoices","account/invoices",-2027551837),"Customer Invoices",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.invoice.id,com.app.model.invoice.date,com.app.model.invoice.total], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),"Account"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("invoice","id","invoice/id",1486944007),"Invoice Number"], null),"account-invoices",true]));

var options__35388__auto___63219 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$invoice_forms$query_STAR_(this__59561__auto__){
var forms__59556__auto__ = com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("invoice","total","invoice/total",1234106335),com.app.ui.invoice_forms.InvoiceForm,new cljs.core.Keyword("account","name","account/name",869255772),com.app.ui.account_forms.AccountForm], null));
var id_attrs__59557__auto__ = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59555__59558__auto__){
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(p1__59555__59558__auto__,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,p1__59555__59558__auto__,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
}),cljs.core.vals(forms__59556__auto__));
return cljs.core.vec(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attr__59559__auto__){
var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","column-EQL","com.fulcrologic.rad.report/column-EQL",1268674699).cljs$core$IFn$_invoke$arity$1(attr__59559__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr__59559__auto__);
}
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(id_attrs__59557__auto__,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.invoice.id,com.app.model.invoice.date,com.app.model.account.email,com.app.model.account.name,com.app.model.invoice.total], null))),com.app.model.invoice.id))));
}),new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Account Invoices",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63197){
var map__63198 = p__63197;
var map__63198__$1 = cljs.core.__destructure_map(map__63198);
var row = map__63198__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63198__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.invoice_forms.AccountInvoices,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),id], null));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63199){
var map__63200 = p__63199;
var map__63200__$1 = cljs.core.__destructure_map(map__63200);
var row = map__63200__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63200__$1,new cljs.core.Keyword("invoice","id","invoice/id",1486944007));
return com.fulcrologic.rad.form.delete_BANG_(this$,new cljs.core.Keyword("invoice","id","invoice/id",1486944007),id);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Edit",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63201){
var map__63202 = p__63201;
var map__63202__$1 = cljs.core.__destructure_map(map__63202);
var row = map__63202__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63202__$1,new cljs.core.Keyword("invoice","id","invoice/id",1486944007));
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.invoice_forms.InvoiceForm,id);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Send Invoice",new cljs.core.Keyword(null,"action","action",-811238024),(function (report_instance,p__63203){
var map__63204 = p__63203;
var map__63204__$1 = cljs.core.__destructure_map(map__63204);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63204__$1,new cljs.core.Keyword("account","email","account/email",439866197));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63205 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","email","account/email",439866197),email], null);
return (com.app.model.account.sendemail.cljs$core$IFn$_invoke$arity$1 ? com.app.model.account.sendemail.cljs$core$IFn$_invoke$arity$1(G__63205) : com.app.model.account.sendemail.call(null,G__63205));
})()], null));
})], null)], null),new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.invoice.id,com.app.model.invoice.date,com.app.model.account.email,com.app.model.account.name,com.app.model.invoice.total], null),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$ui$invoice_forms$ident_STAR_(this__59561__auto__,props63196){
var k__59560__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(com.app.model.invoice.id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__59560__auto__,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props63196,k__59560__auto__)], null);
}),new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("invoice","total","invoice/total",1234106335),com.app.ui.invoice_forms.InvoiceForm,new cljs.core.Keyword("account","name","account/name",869255772),com.app.ui.account_forms.AccountForm], null)),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$invoice_forms$render_InvoiceList_Row(this__59561__auto__){
return com.fulcrologic.fulcro.components.wrapped_render(this__59561__auto__,(function (){
var props63196 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this__59561__auto__) : com.fulcrologic.fulcro.components.props.call(null,this__59561__auto__));
var computed__59562__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this__59561__auto__) : com.fulcrologic.fulcro.components.get_computed.call(null,this__59561__auto__));
return com.fulcrologic.rad.report.render_row(new cljs.core.Keyword(null,"report-instance","report-instance",1193962736).cljs$core$IFn$_invoke$arity$1(computed__59562__auto__),com.app.ui.invoice_forms.InvoiceList_Row,props63196);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.invoice_forms !== 'undefined') && (typeof com.app.ui.invoice_forms.InvoiceList_Row !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.invoice_forms.InvoiceList_Row = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___63219,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.invoice_forms.InvoiceList_Row,new cljs.core.Keyword("com.app.ui.invoice-forms","InvoiceList-Row","com.app.ui.invoice-forms/InvoiceList-Row",-12792693),options__35388__auto___63219);


var options__35388__auto___63220 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.rad.report","route","com.fulcrologic.rad.report/route",-563601438),new cljs.core.Keyword("com.fulcrologic.rad.report","run-on-mount?","com.fulcrologic.rad.report/run-on-mount?",-1246209180),new cljs.core.Keyword("com.fulcrologic.rad.report","row-query-inclusion","com.fulcrologic.rad.report/row-query-inclusion",-656135832),new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951),new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509),new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232),new cljs.core.Keyword("com.fulcrologic.rad.report","initial-sort-params","com.fulcrologic.rad.report/initial-sort-params",597353424),new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859),new cljs.core.Keyword("com.fulcrologic.rad.report","title","com.fulcrologic.rad.report/title",145976308),new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),new cljs.core.Keyword("com.fulcrologic.rad.report","column-headings","com.fulcrologic.rad.report/column-headings",1666271609),new cljs.core.Keyword("com.fulcrologic.rad.control","control-layout","com.fulcrologic.rad.control/control-layout",-980348103),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373)],["invoices",true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("account","id","account/id",-544456697)], null),com.app.model.invoice.id,com.fulcrologic.rad.report.default_compare_rows,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Account Invoices",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63206){
var map__63207 = p__63206;
var map__63207__$1 = cljs.core.__destructure_map(map__63207);
var row = map__63207__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63207__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.invoice_forms.AccountInvoices,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),id], null));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63208){
var map__63209 = p__63208;
var map__63209__$1 = cljs.core.__destructure_map(map__63209);
var row = map__63209__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63209__$1,new cljs.core.Keyword("invoice","id","invoice/id",1486944007));
return com.fulcrologic.rad.form.delete_BANG_(this$,new cljs.core.Keyword("invoice","id","invoice/id",1486944007),id);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Edit",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63210){
var map__63211 = p__63210;
var map__63211__$1 = cljs.core.__destructure_map(map__63211);
var row = map__63211__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63211__$1,new cljs.core.Keyword("invoice","id","invoice/id",1486944007));
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.invoice_forms.InvoiceForm,id);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Send Invoice",new cljs.core.Keyword(null,"action","action",-811238024),(function (report_instance,p__63212){
var map__63213 = p__63212;
var map__63213__$1 = cljs.core.__destructure_map(map__63213);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63213__$1,new cljs.core.Keyword("account","email","account/email",439866197));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63214 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","email","account/email",439866197),email], null);
return (com.app.model.account.sendemail.cljs$core$IFn$_invoke$arity$1 ? com.app.model.account.sendemail.cljs$core$IFn$_invoke$arity$1(G__63214) : com.app.model.account.sendemail.call(null,G__63214));
})()], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["invoices"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.app.ui.invoice-forms","new-invoice","com.app.ui.invoice-forms/new-invoice",-294568606),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"New Invoice",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.invoice_forms.InvoiceForm);
})], null),new cljs.core.Keyword("com.app.ui.invoice-forms","new-account","com.app.ui.invoice-forms/new-account",-1026399438),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"New Account",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.account_forms.AccountForm);
})], null),new cljs.core.Keyword(null,"start-date","start-date",295168731),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"starting-date","starting-date",-1517747424),new cljs.core.Keyword(null,"default-value","default-value",232220170),(function (app){
return new Date(1577880000000);
}),new cljs.core.Keyword(null,"label","label",1718410804),"From"], null),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"ending-date","ending-date",-706270522),new cljs.core.Keyword(null,"default-value","default-value",232220170),(function (app){
return com.fulcrologic.rad.type_support.date_time.end_of_year.cljs$core$IFn$_invoke$arity$0();
}),new cljs.core.Keyword(null,"label","label",1718410804),"To"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),new cljs.core.Keyword("invoice","date","invoice/date",613355027),new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("invoice","date","invoice/date",613355027),null], null), null),new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("invoice","total","invoice/total",1234106335),com.app.ui.invoice_forms.InvoiceForm,new cljs.core.Keyword("account","name","account/name",869255772),com.app.ui.account_forms.AccountForm], null)),(function com$app$ui$invoice_forms$render_InvoiceList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.report.render_layout(this$);
}));
}),new cljs.core.Keyword("invoice","all-invoices","invoice/all-invoices",1308185582),"All Invoices",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.invoice.id,com.app.model.invoice.date,com.app.model.account.email,com.app.model.account.name,com.app.model.invoice.total], null),(function com$app$ui$invoice_forms$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),(function (){var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("com.app.ui.invoice-forms","InvoiceList","com.app.ui.invoice-forms/InvoiceList",659716068);
}
})()], null);
}),(function (app__59551__auto__,route_params__59552__auto__){
return com.fulcrologic.rad.report.report_will_enter(app__59551__auto__,route_params__59552__auto__,com.app.ui.invoice_forms.InvoiceList);
}),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("invoice","id","invoice/id",1486944007),"Invoice Number",new cljs.core.Keyword("account","name","account/name",869255772),"Customer Name",new cljs.core.Keyword("account","email","account/email",439866197),"Email Name"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-buttons","action-buttons",1324694777),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.app.ui.invoice-forms","new-invoice","com.app.ui.invoice-forms/new-invoice",-294568606),new cljs.core.Keyword("com.app.ui.invoice-forms","new-account","com.app.ui.invoice-forms/new-account",-1026399438)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-date","start-date",295168731),new cljs.core.Keyword(null,"end-date","end-date",-208259642)], null)], null)], null),(function com$app$ui$invoice_forms$build_raw_initial_state_STAR_(params){
var G__63215 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59553__59554__auto__){
return cljs.core.select_keys(p1__59553__59554__auto__,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),null], null), null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local?","local?",-1422786101),com.fulcrologic.rad.control.control_map__GT_controls(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.app.ui.invoice-forms","new-invoice","com.app.ui.invoice-forms/new-invoice",-294568606),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"New Invoice",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.invoice_forms.InvoiceForm);
})], null),new cljs.core.Keyword("com.app.ui.invoice-forms","new-account","com.app.ui.invoice-forms/new-account",-1026399438),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"New Account",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"action","action",-811238024),(function (this$){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.account_forms.AccountForm);
})], null),new cljs.core.Keyword(null,"start-date","start-date",295168731),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"starting-date","starting-date",-1517747424),new cljs.core.Keyword(null,"default-value","default-value",232220170),(function (app){
return new Date(1577880000000);
}),new cljs.core.Keyword(null,"label","label",1718410804),"From"], null),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"ending-date","ending-date",-706270522),new cljs.core.Keyword(null,"default-value","default-value",232220170),(function (app){
return com.fulcrologic.rad.type_support.date_time.end_of_year.cljs$core$IFn$_invoke$arity$0();
}),new cljs.core.Keyword(null,"label","label",1718410804),"To"], null)], null)))),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),false,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),(1),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),(1),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),cljs.core.PersistentArrayMap.EMPTY], null);
if(cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63215,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(params));
} else {
return G__63215;
}
}),(function com$app$ui$invoice_forms$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.app.ui.invoice-forms","InvoiceList","com.app.ui.invoice-forms/InvoiceList",659716068)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.control.Control)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.invoice_forms.InvoiceList_Row)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.fulcro.client.data-fetch.load-markers","by-id","ui.fulcro.client.data-fetch.load-markers/by-id",763321486),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
}),com.app.ui.invoice_forms.InvoiceList_Row]);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.invoice_forms !== 'undefined') && (typeof com.app.ui.invoice_forms.InvoiceList !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.invoice_forms.InvoiceList = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___63220,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.invoice_forms.InvoiceList,new cljs.core.Keyword("com.app.ui.invoice-forms","InvoiceList","com.app.ui.invoice-forms/InvoiceList",659716068),options__35388__auto___63220);

//# sourceMappingURL=com.app.ui.invoice_forms.js.map
