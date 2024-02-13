goog.provide('com.app.ui');
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.LandingPage !== 'undefined')){
} else {
com.app.ui.LandingPage = (function com$app$ui$LandingPage(js_props__35384__auto__){
var render__35385__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(com.app.ui.LandingPage) : com.fulcrologic.fulcro.components.component_options.call(null,com.app.ui.LandingPage)));
var vec__59864 = com.fulcrologic.fulcro.components.use_fulcro(js_props__35384__auto__,com.app.ui.LandingPage);
var this__35386__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59864,(0),null);
var props__35387__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59864,(1),null);
return (render__35385__auto__.cljs$core$IFn$_invoke$arity$2 ? render__35385__auto__.cljs$core$IFn$_invoke$arity$2(this__35386__auto__,props__35387__auto__) : render__35385__auto__.call(null,this__35386__auto__,props__35387__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(com.app.ui.LandingPage,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","open?","ui/open?",1238446561),new cljs.core.Keyword("ui","selected-account","ui/selected-account",-114611449),new cljs.core.Keyword("ui","edit-id","ui/edit-id",-639872094)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$ui$ident_STAR_(this$,p__59900){
var map__59901 = p__59900;
var map__59901__$1 = cljs.core.__destructure_map(map__59901);
var props = map__59901__$1;
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59901__$1,new cljs.core.Keyword("ui","open?","ui/open?",1238446561));
var selected_account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59901__$1,new cljs.core.Keyword("ui","selected-account","ui/selected-account",-114611449));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59901__$1,new cljs.core.Keyword("ui","edit-id","ui/edit-id",-639872094));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("com.app.ui","LandingPage","com.app.ui/LandingPage",1085471504)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function com$app$ui$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"route-segment","route-segment",1812935886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["landing-page"], null),new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.app.ui","LandingPage","com.app.ui/LandingPage",1085471504),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$render_LandingPage(this$,p__59903){
var map__59904 = p__59903;
var map__59904__$1 = cljs.core.__destructure_map(map__59904);
var props = map__59904__$1;
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59904__$1,new cljs.core.Keyword("ui","open?","ui/open?",1238446561));
var selected_account = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59904__$1,new cljs.core.Keyword("ui","selected-account","ui/selected-account",-114611449));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59904__$1,new cljs.core.Keyword("ui","edit-id","ui/edit-id",-639872094));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__59916 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__59917 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__59918 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__59919 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__59922 = this$;
var G__59923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__59922,G__59923) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__59922,G__59923));
}
})();
var _STAR_shared_STAR__temp_val__59920 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__59924 = this$;
var G__59925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__59924,G__59925) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__59924,G__59925));
}
})());
var _STAR_parent_STAR__temp_val__59921 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__59919);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__59920);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__59921);

try{return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"Welcome"]);
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__59918);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__59917);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__59916);
}}));
})], null));

var options__35388__auto___59936 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"preserve-dynamic-query?","preserve-dynamic-query?",893339297),new cljs.core.Keyword(null,"router-targets","router-targets",1582229763),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"always-render-body?","always-render-body?",-17343266)],[true,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.ui.LandingPage,com.app.ui.inventory.ItemForm,com.app.ui.invoice_forms.AccountInvoices,com.app.ui.inventory.InventoryReport,com.app.ui.account_forms.AccountForm,com.app.ui.account_forms.BriefAccountForm,com.app.ui.account_forms.AccountList,com.app.ui.file_forms.FileForm,com.app.ui.invoice_forms.LineItemForm,com.app.ui.invoice_forms.InvoiceForm,com.app.ui.invoice_forms.InvoiceList], null),(function com$app$ui$render_MainRouter(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59926 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59926__$1 = cljs.core.__destructure_map(map__59926);
var props = map__59926__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59926__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59926__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961));
var current_state = com.fulcrologic.fulcro.ui_state_machines.get_active_state(this$,new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134));
var state_map = com.fulcrologic.fulcro.components.component__GT_state_map(this$);
var sm_env = com.fulcrologic.fulcro.ui_state_machines.state_machine_env.cljs$core$IFn$_invoke$arity$5(state_map,null,new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134),new cljs.core.Keyword(null,"fake","fake",-904846741),cljs.core.PersistentArrayMap.EMPTY);
var pending_path_segment = ((com.fulcrologic.fulcro.ui_state_machines.asm_active_QMARK_(this$,new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134)))?com.fulcrologic.fulcro.ui_state_machines.retrieve.cljs$core$IFn$_invoke$arity$2(sm_env,new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268)):null);
var class$ = com.fulcrologic.fulcro.routing.dynamic_routing.current_route_class(this$);
var this$__$1 = this$;
var map__59927 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),current_state,new cljs.core.Keyword(null,"route-factory","route-factory",-1848194547),(cljs.core.truth_(class$)?com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(class$):null),new cljs.core.Keyword(null,"pending-path-segment","pending-path-segment",-1932876268),pending_path_segment,new cljs.core.Keyword(null,"router-state","router-state",-429575372),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","local-storage","com.fulcrologic.fulcro.ui-state-machines/local-storage",969391206)], null)),new cljs.core.Keyword(null,"route-props","route-props",-836332554),current_route], null);
var map__59927__$1 = cljs.core.__destructure_map(map__59927);
var current_state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59927__$1,new cljs.core.Keyword(null,"current-state","current-state",1048284452));
var route_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59927__$1,new cljs.core.Keyword(null,"route-factory","route-factory",-1848194547));
var route_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59927__$1,new cljs.core.Keyword(null,"route-props","route-props",-836332554));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"routed","routed",-707282794),current_state__$1))?null:"active")], null)], null)], null),new cljs.core.Keyword(null,".ui.loader",".ui.loader",1057732850)),(cljs.core.truth_(route_factory)?(route_factory.cljs$core$IFn$_invoke$arity$1 ? route_factory.cljs$core$IFn$_invoke$arity$1(route_props) : route_factory.call(null,route_props)):null)], null),null);
}));
}),false,(function com$app$ui$ident_STAR_(this$,p__59928){
var map__59929 = p__59928;
var map__59929__$1 = cljs.core.__destructure_map(map__59929);
var props = map__59929__$1;
var current_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59929__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59929__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134)], null);
}),(function (this__53487__auto__){
return com.fulcrologic.fulcro.routing.dynamic_routing.validate_route_targets(this__53487__auto__);
}),(function com$app$ui$build_raw_initial_state_STAR_(params){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"alt8","alt8",-953819006),new cljs.core.Keyword(null,"alt5","alt5",66789347),new cljs.core.Keyword(null,"alt1","alt1",-496303545),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.Keyword(null,"alt0","alt0",486699186),new cljs.core.Keyword(null,"alt6","alt6",-2114559563),new cljs.core.Keyword(null,"alt4","alt4",-1320607177),new cljs.core.Keyword(null,"alt3","alt3",-1672179143),new cljs.core.Keyword(null,"alt9","alt9",598322205),new cljs.core.Keyword(null,"alt7","alt7",-1401672995),new cljs.core.Keyword(null,"alt2","alt2",-843512290)],[com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.invoice_forms.InvoiceForm,cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.account_forms.AccountList,cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.invoice_forms.AccountInvoices,cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.LandingPage,params),new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.inventory.ItemForm,cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.file_forms.FileForm,cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.account_forms.BriefAccountForm,cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.account_forms.AccountForm,cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.invoice_forms.InvoiceList,cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.invoice_forms.LineItemForm,cljs.core.PersistentArrayMap.EMPTY),com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(com.app.ui.inventory.InventoryReport,cljs.core.PersistentArrayMap.EMPTY)]);
}),(function com$app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","id","com.fulcrologic.fulcro.routing.dynamic-routing/id",-214558961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","dynamic-router-targets","com.fulcrologic.fulcro.routing.dynamic-routing/dynamic-router-targets",-786251636),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.routing.dynamic-routing","current-route","com.fulcrologic.fulcro.routing.dynamic-routing/current-route",-2083218871),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.LandingPage);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.LandingPage))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt0","alt0",486699186),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.inventory.ItemForm);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.inventory.ItemForm))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt1","alt1",-496303545),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.invoice_forms.AccountInvoices);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.invoice_forms.AccountInvoices))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt2","alt2",-843512290),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.inventory.InventoryReport);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.inventory.InventoryReport))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt3","alt3",-1672179143),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.account_forms.AccountForm);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.account_forms.AccountForm))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt4","alt4",-1320607177),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.account_forms.BriefAccountForm);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.account_forms.BriefAccountForm))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt5","alt5",66789347),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.account_forms.AccountList);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.account_forms.AccountList))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt6","alt6",-2114559563),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.file_forms.FileForm);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.file_forms.FileForm))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt7","alt7",-1401672995),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.invoice_forms.LineItemForm);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.invoice_forms.LineItemForm))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt8","alt8",-953819006),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.invoice_forms.InvoiceForm);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.invoice_forms.InvoiceForm))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt9","alt9",598322205),(function (){var or__5045__auto__ = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.invoice_forms.InvoiceList);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Route target has no query! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.raw.components.component_name(com.app.ui.invoice_forms.InvoiceList))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})()], null)], null);
}),true]);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.MainRouter !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.MainRouter = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___59936,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.MainRouter,new cljs.core.Keyword("com.app.ui","MainRouter","com.app.ui/MainRouter",-1619735134),options__35388__auto___59936);
com.app.ui.ui_main_router = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.app.ui.MainRouter);

var options__35388__auto___59937 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$render_Authenticator(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var state = com.fulcrologic.fulcro.ui_state_machines.get_active_state(this$,com.fulcrologic.rad.authorization.machine_id);
var authenticating_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","failed","state/failed",-1541465587),null,new cljs.core.Keyword("state","gathering-credentials","state/gathering-credentials",-723858569),null], null), null),state);
var failed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("state","failed","state/failed",-1541465587),state);
var map__59930 = props;
var map__59930__$1 = cljs.core.__destructure_map(map__59930);
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59930__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(com.app.ui.login_dialog.LoginForm);
var G__59931 = local;
var G__59932 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),authenticating_QMARK_,new cljs.core.Keyword(null,"failed?","failed?",539733148),failed_QMARK_], null);
return (factory.cljs$core$IFn$_invoke$arity$2 ? factory.cljs$core$IFn$_invoke$arity$2(G__59931,G__59932) : factory.call(null,G__59931,G__59932));
}));
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$ui$ident_STAR_(this$,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.authorization","id","com.fulcrologic.rad.authorization/id",-10138412),new cljs.core.Keyword(null,"Authenticator","Authenticator",-2106637732)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function com$app$ui$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"local","local",-1497766724),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"local","local",-1497766724),com.app.ui.login_dialog.LoginForm], null),params);
}),new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","auth-context","ui/auth-context",320028585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","asm-id","com.fulcrologic.fulcro.ui-state-machines/asm-id",232311394),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"local","local",-1497766724),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.login_dialog.LoginForm)], null)], null);
}),new cljs.core.Keyword("com.fulcrologic.rad.authorization","authentication-providers","com.fulcrologic.rad.authorization/authentication-providers",77791421),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"local","local",-1497766724),com.app.ui.login_dialog.LoginForm], null)], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.Authenticator !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.Authenticator = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___59937,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.Authenticator,new cljs.core.Keyword("com.app.ui","Authenticator","com.app.ui/Authenticator",1831132902),options__35388__auto___59937);
com.app.ui.ui_authenticator = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.app.ui.Authenticator);

var options__35388__auto___59938 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authenticator","authenticator",728866366),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.Authenticator)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(com.app.ui.MainRouter)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),new cljs.core.Keyword("com.fulcrologic.rad.authorization","authorization","com.fulcrologic.rad.authorization/authorization",1744538312)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function com$app$ui$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"authenticator","authenticator",728866366),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"authenticator","authenticator",728866366),com.app.ui.Authenticator,new cljs.core.Keyword(null,"router","router",1091916230),com.app.ui.MainRouter], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__59933 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__59933__$1 = cljs.core.__destructure_map(map__59933);
var authorization = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59933__$1,new cljs.core.Keyword("com.fulcrologic.rad.authorization","authorization","com.fulcrologic.rad.authorization/authorization",1744538312));
var active_remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59933__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005));
var authenticator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59933__$1,new cljs.core.Keyword(null,"authenticator","authenticator",728866366));
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59933__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var logged_in_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"success","success",1890645906),(function (){var G__59934 = authorization;
var G__59934__$1 = (((G__59934 == null))?null:new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(G__59934));
if((G__59934__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.authorization","status","com.fulcrologic.rad.authorization/status",764781427).cljs$core$IFn$_invoke$arity$1(G__59934__$1);
}
})());
var busy_QMARK_ = cljs.core.seq(active_remotes);
var username = (function (){var G__59935 = authorization;
var G__59935__$1 = (((G__59935 == null))?null:new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(G__59935));
if((G__59935__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("account","name","account/name",869255772).cljs$core$IFn$_invoke$arity$1(G__59935__$1);
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui item"}),"Demo"]),((logged_in_QMARK_)?com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"item",new cljs.core.Keyword(null,"text","text",-1790561697),"Inventory"], null),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_menu.ui_dropdown_menu(cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_item.ui_dropdown_item(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.inventory.InventoryReport,cljs.core.PersistentArrayMap.EMPTY);
})], null),"View All"),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_item.ui_dropdown_item(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.inventory.ItemForm);
})], null),"New"))),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"item",new cljs.core.Keyword(null,"text","text",-1790561697),"Invoices"], null),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_menu.ui_dropdown_menu(cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_item.ui_dropdown_item(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.invoice_forms.InvoiceList,cljs.core.PersistentArrayMap.EMPTY);
})], null),"View All"),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_item.ui_dropdown_item(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.invoice_forms.InvoiceForm);
})], null),"New"))),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown.ui_dropdown(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"item",new cljs.core.Keyword(null,"text","text",-1790561697),"Accounts"], null),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_menu.ui_dropdown_menu(cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_item.ui_dropdown_item(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.account_forms.AccountList,cljs.core.PersistentArrayMap.EMPTY);
})], null),"View All"),com.fulcrologic.semantic_ui.modules.dropdown.ui_dropdown_item.ui_dropdown_item(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.form.create_BANG_.cljs$core$IFn$_invoke$arity$2(this$,com.app.ui.account_forms.AccountForm);
})], null),"New")))], 0)):null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((busy_QMARK_)?"active":null)], null)], null)], null),new cljs.core.Keyword(null,".ui.tiny.loader",".ui.tiny.loader",1414741229)),com.fulcrologic.fulcro.dom.html_entities.nbsp,com.fulcrologic.fulcro.dom.html_entities.nbsp,com.fulcrologic.fulcro.dom.html_entities.nbsp,com.fulcrologic.fulcro.dom.html_entities.nbsp], null),new cljs.core.Keyword(null,".item",".item",-1434967496)),((logged_in_QMARK_)?com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Logged in as ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)].join('')], null),new cljs.core.Keyword(null,".ui.item",".ui.item",-1037787816)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(this$,com.app.ui.LandingPage,cljs.core.PersistentArrayMap.EMPTY);

return com.fulcrologic.rad.authorization.logout_BANG_(this$,new cljs.core.Keyword(null,"local","local",-1497766724));
})], null),"Logout"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607))], null),new cljs.core.Keyword(null,".ui.item",".ui.item",-1037787816))], 0)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.rad.authorization.authenticate_BANG_(this$,new cljs.core.Keyword(null,"local","local",-1497766724),null);
})], null),"Login"], null),new cljs.core.Keyword(null,".ui.primary.button",".ui.primary.button",665119007))], null),new cljs.core.Keyword(null,".ui.item",".ui.item",-1037787816)))], null),new cljs.core.Keyword(null,".right.menu",".right.menu",1634848601))], null),new cljs.core.Keyword(null,".ui.top.menu",".ui.top.menu",1496187547)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.app.ui.ui_authenticator.cljs$core$IFn$_invoke$arity$1 ? com.app.ui.ui_authenticator.cljs$core$IFn$_invoke$arity$1(authenticator) : com.app.ui.ui_authenticator.call(null,authenticator)),(com.app.ui.ui_main_router.cljs$core$IFn$_invoke$arity$1 ? com.app.ui.ui_main_router.cljs$core$IFn$_invoke$arity$1(router) : com.app.ui.ui_main_router.call(null,router))], null),new cljs.core.Keyword(null,".ui.container.segment",".ui.container.segment",175807413))], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.Root = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___59938,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.Root,new cljs.core.Keyword("com.app.ui","Root","com.app.ui/Root",1518740012),options__35388__auto___59938);
com.app.ui.ui_root = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.app.ui.Root);

//# sourceMappingURL=com.app.ui.js.map
