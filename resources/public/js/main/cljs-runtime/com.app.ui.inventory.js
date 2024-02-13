goog.provide('com.app.ui.inventory');
com.app.ui.inventory.categories = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-categories","all-categories",969879964),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("category","services","category/services",1020988865),"Supplies & Services",new cljs.core.Keyword("category","tool","category/tool",-1248577560),"Tool",new cljs.core.Keyword("category","food","category/food",-1859994925),"Food",new cljs.core.Keyword("category","item","category/item",198729584),"Item",new cljs.core.Keyword("category","other","category/other",945708934),"Other"], null)], null);

var options__57920__auto___62077 = (function (){var get_class__57913__auto__ = (function (){
return com.app.ui.inventory.ItemForm;
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.convert_options(get_class__57913__auto__,"com.app.ui.inventory.ItemForm",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),com.app.model.item.id,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.item.item_name,com.app.model.item.category,com.app.model.item.description,com.app.model.item.in_stock,com.app.model.item.price], null),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703),"item",new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068),"Edit Item"], null)),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$inventory$render_ItemForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.form.render_layout(this$,props);
}));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.app.ui.inventory","ItemForm","com.app.ui.inventory/ItemForm",-1634033511)], 0));
})();
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.inventory !== 'undefined') && (typeof com.app.ui.inventory.ItemForm !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.inventory.ItemForm = com.fulcrologic.fulcro.components.react_constructor(new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876).cljs$core$IFn$_invoke$arity$1(options__57920__auto___62077));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.inventory.ItemForm,new cljs.core.Keyword("com.app.ui.inventory","ItemForm","com.app.ui.inventory/ItemForm",-1634033511),options__57920__auto___62077);

var options__35388__auto___62078 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$inventory$query_STAR_(this__59561__auto__){
var forms__59556__auto__ = com.fulcrologic.rad.options_util._QMARK_fix_keys(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.app.model.item.item_name,com.app.ui.inventory.ItemForm]));
var id_attrs__59557__auto__ = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59555__59558__auto__){
return (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(p1__59555__59558__auto__,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)) : com.fulcrologic.fulcro.components.component_options.call(null,p1__59555__59558__auto__,new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937)));
}),cljs.core.vals(forms__59556__auto__));
return cljs.core.vec(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attr__59559__auto__){
var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","column-EQL","com.fulcrologic.rad.report/column-EQL",1268674699).cljs$core$IFn$_invoke$arity$1(attr__59559__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr__59559__auto__);
}
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(id_attrs__59557__auto__,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.item.item_name,com.app.model.item.category,com.app.model.item.price,com.app.model.item.in_stock], null))),com.app.model.item.id))));
}),new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__62043){
var map__62044 = p__62043;
var map__62044__$1 = cljs.core.__destructure_map(map__62044);
var row = map__62044__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62044__$1,new cljs.core.Keyword("item","id","item/id",-1385287903));
return com.fulcrologic.rad.form.delete_BANG_(this$,new cljs.core.Keyword("item","id","item/id",-1385287903),id);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Edit",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__62045){
var map__62046 = p__62045;
var map__62046__$1 = cljs.core.__destructure_map(map__62046);
var row = map__62046__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword("item","id","item/id",-1385287903));
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.inventory.ItemForm,id);
})], null)], null),new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.item.item_name,com.app.model.item.category,com.app.model.item.price,com.app.model.item.in_stock], null),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$ui$inventory$ident_STAR_(this__59561__auto__,props62042){
var k__59560__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(com.app.model.item.id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__59560__auto__,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props62042,k__59560__auto__)], null);
}),new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),com.fulcrologic.rad.options_util._QMARK_fix_keys(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.app.model.item.item_name,com.app.ui.inventory.ItemForm])),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$inventory$render_InventoryReport_Row(this__59561__auto__){
return com.fulcrologic.fulcro.components.wrapped_render(this__59561__auto__,(function (){
var props62042 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this__59561__auto__) : com.fulcrologic.fulcro.components.props.call(null,this__59561__auto__));
var computed__59562__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this__59561__auto__) : com.fulcrologic.fulcro.components.get_computed.call(null,this__59561__auto__));
return com.fulcrologic.rad.report.render_row(new cljs.core.Keyword(null,"report-instance","report-instance",1193962736).cljs$core$IFn$_invoke$arity$1(computed__59562__auto__),com.app.ui.inventory.InventoryReport_Row,props62042);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.inventory !== 'undefined') && (typeof com.app.ui.inventory.InventoryReport_Row !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.inventory.InventoryReport_Row = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___62078,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.inventory.InventoryReport_Row,new cljs.core.Keyword("com.app.ui.inventory","InventoryReport-Row","com.app.ui.inventory/InventoryReport-Row",-1743388004),options__35388__auto___62078);


var options__35388__auto___62079 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.rad.report","route","com.fulcrologic.rad.report/route",-563601438),new cljs.core.Keyword("com.fulcrologic.rad.report","run-on-mount?","com.fulcrologic.rad.report/run-on-mount?",-1246209180),new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951),new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509),new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.Keyword("com.fulcrologic.rad.report","links","com.fulcrologic.rad.report/links",-1514511185),new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232),new cljs.core.Keyword("com.fulcrologic.rad.report","initial-sort-params","com.fulcrologic.rad.report/initial-sort-params",597353424),new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859),new cljs.core.Keyword("com.fulcrologic.rad.report","title","com.fulcrologic.rad.report/title",145976308),new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),new cljs.core.Keyword("com.fulcrologic.rad.report","row-visible?","com.fulcrologic.rad.report/row-visible?",1268447481),new cljs.core.Keyword("com.fulcrologic.rad.control","control-layout","com.fulcrologic.rad.control/control-layout",-980348103),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373)],["item-inventory-report",true,com.app.model.item.id,com.fulcrologic.rad.report.default_compare_rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__62047){
var map__62048 = p__62047;
var map__62048__$1 = cljs.core.__destructure_map(map__62048);
var row = map__62048__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62048__$1,new cljs.core.Keyword("item","id","item/id",-1385287903));
return com.fulcrologic.rad.form.delete_BANG_(this$,new cljs.core.Keyword("item","id","item/id",-1385287903),id);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Edit",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__62049){
var map__62050 = p__62049;
var map__62050__$1 = cljs.core.__destructure_map(map__62050);
var row = map__62050__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62050__$1,new cljs.core.Keyword("item","id","item/id",-1385287903));
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.inventory.ItemForm,id);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item-inventory-report"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("category","label","category/label",1768891694),(function (this$,p__62051){
var map__62052 = p__62051;
var map__62052__$1 = cljs.core.__destructure_map(map__62052);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62052__$1,new cljs.core.Keyword("category","label","category/label",1768891694));
com.fulcrologic.rad.control.set_parameter_BANG_(this$,new cljs.core.Keyword("com.app.ui.inventory","category","com.app.ui.inventory/category",905406748),label);

return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.app.ui.inventory","new-item","com.app.ui.inventory/new-item",1342974635),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),"New Item",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,_){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.inventory.ItemForm);
})], null),new cljs.core.Keyword("com.app.ui.inventory","search!","com.app.ui.inventory/search!",541687868),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),"Filter",new cljs.core.Keyword(null,"class","class",-2030961996),"ui basic compact mini red button",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,_){
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})], null),new cljs.core.Keyword("com.app.ui.inventory","filter-name","com.app.ui.inventory/filter-name",1507876326),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type a partial name and press enter.",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (this$,_){
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),new cljs.core.Keyword("item","name","item/name",1849015102),new cljs.core.Keyword(null,"ascending?","ascending?",715983116),false,new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("item","name","item/name",1849015102),null], null), null)], null),com.fulcrologic.rad.options_util._QMARK_fix_keys(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.app.model.item.item_name,com.app.ui.inventory.ItemForm])),(function com$app$ui$inventory$render_InventoryReport(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.report.render_layout(this$);
}));
}),new cljs.core.Keyword("item","all-items","item/all-items",1478870489),"Inventory Report",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.item.item_name,com.app.model.item.category,com.app.model.item.price,com.app.model.item.in_stock], null),(function com$app$ui$inventory$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),(function (){var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("com.app.ui.inventory","InventoryReport","com.app.ui.inventory/InventoryReport",146637606);
}
})()], null);
}),(function (app__59551__auto__,route_params__59552__auto__){
return com.fulcrologic.rad.report.report_will_enter(app__59551__auto__,route_params__59552__auto__,com.app.ui.inventory.InventoryReport);
}),(function (p__62053,p__62054){
var map__62055 = p__62053;
var map__62055__$1 = cljs.core.__destructure_map(map__62055);
var filter_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62055__$1,new cljs.core.Keyword("com.app.ui.inventory","filter-name","com.app.ui.inventory/filter-name",1507876326));
var map__62056 = p__62054;
var map__62056__$1 = cljs.core.__destructure_map(map__62056);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword("item","name","item/name",1849015102));
var nm = (function (){var G__62057 = name;
if((G__62057 == null)){
return null;
} else {
return clojure.string.lower_case(G__62057);
}
})();
var target = (function (){var G__62058 = filter_name;
var G__62058__$1 = (((G__62058 == null))?null:clojure.string.trim(G__62058));
if((G__62058__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__62058__$1);
}
})();
var or__5045__auto__ = (target == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.empty_QMARK_(target);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto__ = nm;
if(cljs.core.truth_(and__5043__auto__)){
return clojure.string.includes_QMARK_(nm,target);
} else {
return and__5043__auto__;
}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-buttons","action-buttons",1324694777),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.app.ui.inventory","new-item","com.app.ui.inventory/new-item",1342974635)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.app.ui.inventory","filter-name","com.app.ui.inventory/filter-name",1507876326),new cljs.core.Keyword("com.app.ui.inventory","search!","com.app.ui.inventory/search!",541687868),new cljs.core.Keyword(null,"_","_",1453416199)], null)], null)], null),(function com$app$ui$inventory$build_raw_initial_state_STAR_(params){
var G__62059 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59553__59554__auto__){
return cljs.core.select_keys(p1__59553__59554__auto__,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),null], null), null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local?","local?",-1422786101),com.fulcrologic.rad.control.control_map__GT_controls(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.app.ui.inventory","new-item","com.app.ui.inventory/new-item",1342974635),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),"New Item",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,_){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.inventory.ItemForm);
})], null),new cljs.core.Keyword("com.app.ui.inventory","search!","com.app.ui.inventory/search!",541687868),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),"Filter",new cljs.core.Keyword(null,"class","class",-2030961996),"ui basic compact mini red button",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,_){
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})], null),new cljs.core.Keyword("com.app.ui.inventory","filter-name","com.app.ui.inventory/filter-name",1507876326),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type a partial name and press enter.",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (this$,_){
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})], null)], null)))),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),false,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),(1),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),(1),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),cljs.core.PersistentArrayMap.EMPTY], null);
if(cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62059,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(params));
} else {
return G__62059;
}
}),(function com$app$ui$inventory$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.app.ui.inventory","InventoryReport","com.app.ui.inventory/InventoryReport",146637606)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.control.Control)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.inventory.InventoryReport_Row)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.fulcro.client.data-fetch.load-markers","by-id","ui.fulcro.client.data-fetch.load-markers/by-id",763321486),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
}),com.app.ui.inventory.InventoryReport_Row]);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.inventory !== 'undefined') && (typeof com.app.ui.inventory.InventoryReport !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.inventory.InventoryReport = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___62079,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.inventory.InventoryReport,new cljs.core.Keyword("com.app.ui.inventory","InventoryReport","com.app.ui.inventory/InventoryReport",146637606),options__35388__auto___62079);

//# sourceMappingURL=com.app.ui.inventory.js.map
