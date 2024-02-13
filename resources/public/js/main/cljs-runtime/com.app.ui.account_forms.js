goog.provide('com.app.ui.account_forms');

var options__57920__auto___63173 = (function (){var get_class__57913__auto__ = (function (){
return com.app.ui.account_forms.AccountForm;
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.convert_options(get_class__57913__auto__,"com.app.ui.account-forms.AccountForm",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),com.app.model.account.id,new cljs.core.Keyword("com.fulcrologic.rad.form","query-inclusion","com.fulcrologic.rad.form/query-inclusion",-482825736),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.blob.status_key(new cljs.core.Keyword("account","avatar","account/avatar",1712061434)),com.fulcrologic.rad.blob.url_key(new cljs.core.Keyword("account","avatar","account/avatar",1712061434)),com.fulcrologic.rad.blob.progress_key(new cljs.core.Keyword("account","avatar","account/avatar",1712061434))], null),new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.account.avatar,com.app.model.account.name,com.app.model.account.email,com.app.model.account.active_QMARK_,com.app.model.account.files], null),new cljs.core.Keyword("com.fulcrologic.rad.form","default-values","com.fulcrologic.rad.form/default-values",1185533844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","active?","account/active?",-782830515),true], null),new cljs.core.Keyword("com.fulcrologic.rad.form","route-prefix","com.fulcrologic.rad.form/route-prefix",57623703),"account",new cljs.core.Keyword("com.fulcrologic.rad.form","title","com.fulcrologic.rad.form/title",792728068),"Edit Account",new cljs.core.Keyword("com.fulcrologic.rad.form","subforms","com.fulcrologic.rad.form/subforms",-1829240383),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","files","account/files",1040214073),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.form_options.ui,com.app.ui.file_forms.FileForm,com.fulcrologic.rad.form_options.title,"Files",com.fulcrologic.rad.form_options.can_delete_QMARK_,(function (_,___$1){
return true;
}),com.fulcrologic.rad.form_options.layout_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref-container","ref-container",-1728504269),new cljs.core.Keyword(null,"file","file",-1269645878)], null),new cljs.core.Keyword("com.fulcrologic.rad.form","added-via-upload?","com.fulcrologic.rad.form/added-via-upload?",1378681221),true])], null))], null)),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$account_forms$render_AccountForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.form.render_layout(this$,props);
}));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.app.ui.account-forms","AccountForm","com.app.ui.account-forms/AccountForm",1351152853)], 0));
})();
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.account_forms !== 'undefined') && (typeof com.app.ui.account_forms.AccountForm !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.account_forms.AccountForm = com.fulcrologic.fulcro.components.react_constructor(new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876).cljs$core$IFn$_invoke$arity$1(options__57920__auto___63173));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.account_forms.AccountForm,new cljs.core.Keyword("com.app.ui.account-forms","AccountForm","com.app.ui.account-forms/AccountForm",1351152853),options__57920__auto___63173);

var options__57920__auto___63174 = (function (){var get_class__57913__auto__ = (function (){
return com.app.ui.account_forms.BriefAccountForm;
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.convert_options(get_class__57913__auto__,"com.app.ui.account-forms.BriefAccountForm",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),com.app.model.account.id,new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.account.name,com.app.model.account.email,com.app.model.account.active_QMARK_], null),new cljs.core.Keyword("com.fulcrologic.rad.form","default-values","com.fulcrologic.rad.form/default-values",1185533844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","active?","account/active?",-782830515),true], null)], null)),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$account_forms$render_BriefAccountForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.form.render_layout(this$,props);
}));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.app.ui.account-forms","BriefAccountForm","com.app.ui.account-forms/BriefAccountForm",-1557058436)], 0));
})();
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.account_forms !== 'undefined') && (typeof com.app.ui.account_forms.BriefAccountForm !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.account_forms.BriefAccountForm = com.fulcrologic.fulcro.components.react_constructor(new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876).cljs$core$IFn$_invoke$arity$1(options__57920__auto___63174));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.account_forms.BriefAccountForm,new cljs.core.Keyword("com.app.ui.account-forms","BriefAccountForm","com.app.ui.account-forms/BriefAccountForm",-1557058436),options__57920__auto___63174);

var options__35388__auto___63175 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$account_forms$query_STAR_(this__59561__auto__){
var forms__59556__auto__ = com.fulcrologic.rad.options_util._QMARK_fix_keys(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.app.model.account.name,com.app.ui.account_forms.AccountForm]));
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
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(id_attrs__59557__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.account.name,com.app.model.account.active_QMARK_], null))),com.app.model.account.id))));
}),new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Enable",new cljs.core.Keyword(null,"action","action",-811238024),(function (report_instance,p__63142){
var map__63143 = p__63142;
var map__63143__$1 = cljs.core.__destructure_map(map__63143);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63143__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63144 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("account","id","account/id",-544456697),id,new cljs.core.Keyword("account","active?","account/active?",-782830515),true], null);
return (com.app.model.account.set_account_active.cljs$core$IFn$_invoke$arity$1 ? com.app.model.account.set_account_active.cljs$core$IFn$_invoke$arity$1(G__63144) : com.app.model.account.set_account_active.call(null,G__63144));
})()], null));
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (_,row_props){
return new cljs.core.Keyword("account","active?","account/active?",-782830515).cljs$core$IFn$_invoke$arity$1(row_props);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Disable",new cljs.core.Keyword(null,"action","action",-811238024),(function (report_instance,p__63145){
var map__63146 = p__63145;
var map__63146__$1 = cljs.core.__destructure_map(map__63146);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63146__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63147 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("account","id","account/id",-544456697),id,new cljs.core.Keyword("account","active?","account/active?",-782830515),false], null);
return (com.app.model.account.set_account_active.cljs$core$IFn$_invoke$arity$1 ? com.app.model.account.set_account_active.cljs$core$IFn$_invoke$arity$1(G__63147) : com.app.model.account.set_account_active.call(null,G__63147));
})()], null));
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (_,row_props){
return cljs.core.not(new cljs.core.Keyword("account","active?","account/active?",-782830515).cljs$core$IFn$_invoke$arity$1(row_props));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63148){
var map__63149 = p__63148;
var map__63149__$1 = cljs.core.__destructure_map(map__63149);
var row = map__63149__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63149__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.rad.form.delete_BANG_(this$,new cljs.core.Keyword("account","id","account/id",-544456697),id);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Edit",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63150){
var map__63151 = p__63150;
var map__63151__$1 = cljs.core.__destructure_map(map__63151);
var row = map__63151__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63151__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.account_forms.AccountForm,id);
})], null)], null),new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.account.name,com.app.model.account.active_QMARK_], null),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$ui$account_forms$ident_STAR_(this__59561__auto__,props63141){
var k__59560__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(com.app.model.account.id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__59560__auto__,cljs.core.get.cljs$core$IFn$_invoke$arity$2(props63141,k__59560__auto__)], null);
}),new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),com.fulcrologic.rad.options_util._QMARK_fix_keys(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.app.model.account.name,com.app.ui.account_forms.AccountForm])),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$account_forms$render_AccountList_Row(this__59561__auto__){
return com.fulcrologic.fulcro.components.wrapped_render(this__59561__auto__,(function (){
var props63141 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this__59561__auto__) : com.fulcrologic.fulcro.components.props.call(null,this__59561__auto__));
var computed__59562__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this__59561__auto__) : com.fulcrologic.fulcro.components.get_computed.call(null,this__59561__auto__));
return com.fulcrologic.rad.report.render_row(new cljs.core.Keyword(null,"report-instance","report-instance",1193962736).cljs$core$IFn$_invoke$arity$1(computed__59562__auto__),com.app.ui.account_forms.AccountList_Row,props63141);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.account_forms !== 'undefined') && (typeof com.app.ui.account_forms.AccountList_Row !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.account_forms.AccountList_Row = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___63175,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.account_forms.AccountList_Row,new cljs.core.Keyword("com.app.ui.account-forms","AccountList-Row","com.app.ui.account-forms/AccountList-Row",1837068683),options__35388__auto___63175);


var options__35388__auto___63176 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.fulcrologic.rad.report","route","com.fulcrologic.rad.report/route",-563601438),new cljs.core.Keyword("com.fulcrologic.rad.report","run-on-mount?","com.fulcrologic.rad.report/run-on-mount?",-1246209180),new cljs.core.Keyword("com.fulcrologic.rad.report","row-pk","com.fulcrologic.rad.report/row-pk",-1858584951),new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509),new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.Keyword("com.fulcrologic.rad.control","controls","com.fulcrologic.rad.control/controls",600461232),new cljs.core.Keyword("com.fulcrologic.rad.report","initial-sort-params","com.fulcrologic.rad.report/initial-sort-params",597353424),new cljs.core.Keyword("com.fulcrologic.rad.report","form-links","com.fulcrologic.rad.report/form-links",-854298799),new cljs.core.Keyword("com.fulcrologic.rad.report","column-formatters","com.fulcrologic.rad.report/column-formatters",-1998185551),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword("com.fulcrologic.rad.report","source-attribute","com.fulcrologic.rad.report/source-attribute",1684039859),new cljs.core.Keyword("com.fulcrologic.rad.report","title","com.fulcrologic.rad.report/title",145976308),new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),new cljs.core.Keyword("com.fulcrologic.rad.report","row-visible?","com.fulcrologic.rad.report/row-visible?",1268447481),new cljs.core.Keyword("com.fulcrologic.rad.report","column-headings","com.fulcrologic.rad.report/column-headings",1666271609),new cljs.core.Keyword("com.fulcrologic.rad.control","control-layout","com.fulcrologic.rad.control/control-layout",-980348103),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373),new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","rendering-options","com.fulcrologic.rad.semantic-ui-options/rendering-options",-1090892612)],["accounts",true,com.app.model.account.id,com.fulcrologic.rad.report.default_compare_rows,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Enable",new cljs.core.Keyword(null,"action","action",-811238024),(function (report_instance,p__63152){
var map__63153 = p__63152;
var map__63153__$1 = cljs.core.__destructure_map(map__63153);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63153__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63154 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("account","id","account/id",-544456697),id,new cljs.core.Keyword("account","active?","account/active?",-782830515),true], null);
return (com.app.model.account.set_account_active.cljs$core$IFn$_invoke$arity$1 ? com.app.model.account.set_account_active.cljs$core$IFn$_invoke$arity$1(G__63154) : com.app.model.account.set_account_active.call(null,G__63154));
})()], null));
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (_,row_props){
return new cljs.core.Keyword("account","active?","account/active?",-782830515).cljs$core$IFn$_invoke$arity$1(row_props);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Disable",new cljs.core.Keyword(null,"action","action",-811238024),(function (report_instance,p__63155){
var map__63156 = p__63155;
var map__63156__$1 = cljs.core.__destructure_map(map__63156);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63156__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63157 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("account","id","account/id",-544456697),id,new cljs.core.Keyword("account","active?","account/active?",-782830515),false], null);
return (com.app.model.account.set_account_active.cljs$core$IFn$_invoke$arity$1 ? com.app.model.account.set_account_active.cljs$core$IFn$_invoke$arity$1(G__63157) : com.app.model.account.set_account_active.call(null,G__63157));
})()], null));
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (_,row_props){
return cljs.core.not(new cljs.core.Keyword("account","active?","account/active?",-782830515).cljs$core$IFn$_invoke$arity$1(row_props));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63158){
var map__63159 = p__63158;
var map__63159__$1 = cljs.core.__destructure_map(map__63159);
var row = map__63159__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63159__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.rad.form.delete_BANG_(this$,new cljs.core.Keyword("account","id","account/id",-544456697),id);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Edit",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,p__63160){
var map__63161 = p__63160;
var map__63161__$1 = cljs.core.__destructure_map(map__63161);
var row = map__63161__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63161__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.account_forms.AccountForm,id);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["accounts"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.app.ui.account-forms","new-account","com.app.ui.account-forms/new-account",-1720821198),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),"New Account",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,_){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.account_forms.AccountForm);
})], null),new cljs.core.Keyword("com.app.ui.account-forms","search!","com.app.ui.account-forms/search!",1315104649),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),"Filter",new cljs.core.Keyword(null,"class","class",-2030961996),"ui basic compact mini red button",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,_){
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})], null),new cljs.core.Keyword("com.app.ui.account-forms","filter-name","com.app.ui.account-forms/filter-name",1149733079),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type a partial name and press enter.",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (this$,_){
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})], null),new cljs.core.Keyword(null,"show-inactive?","show-inactive?",-475929387),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.Keyword(null,"default-value","default-value",232220170),false,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (this$,_){
return (com.fulcrologic.rad.control.run_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.control.run_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.rad.control.run_BANG_.call(null,this$));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Show Inactive Accounts?"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-by","sort-by",-322599303),new cljs.core.Keyword("account","name","account/name",869255772),new cljs.core.Keyword(null,"ascending?","ascending?",715983116),false,new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","name","account/name",869255772),null], null), null)], null),com.fulcrologic.rad.options_util._QMARK_fix_keys(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.app.model.account.name,com.app.ui.account_forms.AccountForm])),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","active?","account/active?",-782830515),(function (this$,v){
if(cljs.core.truth_(v)){
return "Yes";
} else {
return "No";
}
})], null)),(function com$app$ui$account_forms$render_AccountList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.rad.report.render_layout(this$);
}));
}),new cljs.core.Keyword("account","all-accounts","account/all-accounts",-420133929),"All Accounts",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.account.name,com.app.model.account.active_QMARK_], null),(function com$app$ui$account_forms$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),(function (){var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("com.app.ui.account-forms","AccountList","com.app.ui.account-forms/AccountList",-1223578492);
}
})()], null);
}),(function (app__59551__auto__,route_params__59552__auto__){
return com.fulcrologic.rad.report.report_will_enter(app__59551__auto__,route_params__59552__auto__,com.app.ui.account_forms.AccountList);
}),(function (p__63162,p__63163){
var map__63164 = p__63162;
var map__63164__$1 = cljs.core.__destructure_map(map__63164);
var filter_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63164__$1,new cljs.core.Keyword("com.app.ui.account-forms","filter-name","com.app.ui.account-forms/filter-name",1149733079));
var map__63165 = p__63163;
var map__63165__$1 = cljs.core.__destructure_map(map__63165);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63165__$1,new cljs.core.Keyword("account","name","account/name",869255772));
var nm = (function (){var G__63166 = name;
if((G__63166 == null)){
return null;
} else {
return clojure.string.lower_case(G__63166);
}
})();
var target = (function (){var G__63167 = filter_name;
var G__63167__$1 = (((G__63167 == null))?null:clojure.string.trim(G__63167));
if((G__63167__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__63167__$1);
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
}),com.fulcrologic.rad.options_util._QMARK_fix_keys(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","name","account/name",869255772),"Account Name"], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-buttons","action-buttons",1324694777),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.app.ui.account-forms","new-account","com.app.ui.account-forms/new-account",-1720821198)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.app.ui.account-forms","filter-name","com.app.ui.account-forms/filter-name",1149733079),new cljs.core.Keyword("com.app.ui.account-forms","search!","com.app.ui.account-forms/search!",1315104649),new cljs.core.Keyword(null,"_","_",1453416199)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-inactive?","show-inactive?",-475929387)], null)], null)], null),(function com$app$ui$account_forms$build_raw_initial_state_STAR_(params){
var G__63168 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59553__59554__auto__){
return cljs.core.select_keys(p1__59553__59554__auto__,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),null], null), null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local?","local?",-1422786101),com.fulcrologic.rad.control.control_map__GT_controls(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.app.ui.account-forms","new-account","com.app.ui.account-forms/new-account",-1720821198),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),"New Account",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,_){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.account_forms.AccountForm);
})], null),new cljs.core.Keyword("com.app.ui.account-forms","search!","com.app.ui.account-forms/search!",1315104649),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"label","label",1718410804),"Filter",new cljs.core.Keyword(null,"class","class",-2030961996),"ui basic compact mini red button",new cljs.core.Keyword(null,"action","action",-811238024),(function (this$,_){
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})], null),new cljs.core.Keyword("com.app.ui.account-forms","filter-name","com.app.ui.account-forms/filter-name",1149733079),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type a partial name and press enter.",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (this$,_){
return com.fulcrologic.rad.report.filter_rows_BANG_.cljs$core$IFn$_invoke$arity$1(this$);
})], null),new cljs.core.Keyword(null,"show-inactive?","show-inactive?",-475929387),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"local?","local?",-1422786101),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.Keyword(null,"default-value","default-value",232220170),false,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (this$,_){
return (com.fulcrologic.rad.control.run_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.control.run_BANG_.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.rad.control.run_BANG_.call(null,this$));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Show Inactive Accounts?"], null)], null)))),new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),false,new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),(1),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),(1),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),cljs.core.PersistentArrayMap.EMPTY], null);
if(cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63168,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825).cljs$core$IFn$_invoke$arity$1(params));
} else {
return G__63168;
}
}),(function com$app$ui$account_forms$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160),new cljs.core.Keyword("ui","cache","ui/cache",-1237010178),new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304),new cljs.core.Keyword("ui","page-count","ui/page-count",2081748916),new cljs.core.Keyword("ui","current-page","ui/current-page",-101290472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),new cljs.core.Keyword("com.app.ui.account-forms","AccountList","com.app.ui.account-forms/AccountList",-1223578492)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","controls","ui/controls",1340762784),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.control.Control)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","current-rows","ui/current-rows",-1679326494),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.account_forms.AccountList_Row)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.fulcro.client.data-fetch.load-markers","by-id","ui.fulcro.client.data-fetch.load-markers/by-id",763321486),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
}),com.app.ui.account_forms.AccountList_Row,cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.semantic_ui_options.action_button_render,(function (this$,p__63169){
var map__63170 = p__63169;
var map__63170__$1 = cljs.core.__destructure_map(map__63170);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var onClick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"onClick","onClick",-1991238530));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63170__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword("com.app.ui.account-forms","new-account","com.app.ui.account-forms/new-account",-1720821198))){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "icon user"})]),label], null),new cljs.core.Keyword(null,".ui.tiny.basic.button",".ui.tiny.basic.button",-317963048));
} else {
return null;
}
}),com.fulcrologic.rad.semantic_ui_options.body_class,"",com.fulcrologic.rad.semantic_ui_options.controls_class,"",com.fulcrologic.rad.semantic_ui_options.layout_class,"",com.fulcrologic.rad.semantic_ui_options.report_table_class,"ui very compact celled selectable table",com.fulcrologic.rad.semantic_ui_options.report_table_header_class,(function (this$,i){
var G__63171 = i;
switch (G__63171) {
case (0):
return "";

break;
case (1):
return "center aligned";

break;
default:
return "collapsing";

}
}),com.fulcrologic.rad.semantic_ui_options.report_table_cell_class,(function (this$,i){
var G__63172 = i;
switch (G__63172) {
case (0):
return "";

break;
case (1):
return "center aligned";

break;
default:
return "collapsing";

}
})])]);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.account_forms !== 'undefined') && (typeof com.app.ui.account_forms.AccountList !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.account_forms.AccountList = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___63176,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.account_forms.AccountList,new cljs.core.Keyword("com.app.ui.account-forms","AccountList","com.app.ui.account-forms/AccountList",-1223578492),options__35388__auto___63176);

//# sourceMappingURL=com.app.ui.account_forms.js.map
