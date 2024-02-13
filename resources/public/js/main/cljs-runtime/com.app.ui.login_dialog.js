goog.provide('com.app.ui.login_dialog');

var options__35388__auto___63121 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$ui$login_dialog$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function com$app$ui$login_dialog$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","username","ui/username",1605670678),"shakira@example.com",new cljs.core.Keyword("ui","password","ui/password",417022099),"password"], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword("com.fulcrologic.rad.authorization","provider","com.fulcrologic.rad.authorization/provider",1880340412),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword("com.fulcrologic.rad.authorization","check-session","com.fulcrologic.rad.authorization/check-session",-1901194280),new cljs.core.Symbol("com.app.model.account","check-session","com.app.model.account/check-session",-557787699,null),new cljs.core.Keyword("com.fulcrologic.rad.authorization","logout","com.fulcrologic.rad.authorization/logout",-966249367),new cljs.core.Symbol("com.app.model.account","logout","com.app.model.account/logout",251294054,null),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$ui$login_dialog$ident_STAR_(this$,p__63112){
var map__63113 = p__63112;
var map__63113__$1 = cljs.core.__destructure_map(map__63113);
var props = map__63113__$1;
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63113__$1,new cljs.core.Keyword("ui","username","ui/username",1605670678));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63113__$1,new cljs.core.Keyword("ui","password","ui/password",417022099));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("com.app.ui.login-dialog","LoginForm","com.app.ui.login-dialog/LoginForm",1523795425)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$ui$login_dialog$render_LoginForm(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__63114 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__63114__$1 = cljs.core.__destructure_map(map__63114);
var props = map__63114__$1;
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63114__$1,new cljs.core.Keyword("ui","username","ui/username",1605670678));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63114__$1,new cljs.core.Keyword("ui","password","ui/password",417022099));
var map__63115 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.get_computed.call(null,this$));
var map__63115__$1 = cljs.core.__destructure_map(map__63115);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63115__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
return com.fulcrologic.semantic_ui.modules.modal.ui_modal.ui_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.boolean$(visible_QMARK_),new cljs.core.Keyword(null,"dimmer","dimmer",-938888368),true], null),com.fulcrologic.semantic_ui.modules.modal.ui_modal_header.ui_modal_header(cljs.core.PersistentArrayMap.EMPTY,"Please Log In"),com.fulcrologic.semantic_ui.modules.modal.ui_modal_content.ui_modal_content(cljs.core.PersistentArrayMap.EMPTY,com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Username"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("ui","username","ui/username",1605670678),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),evt], 0));
}),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = username;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})()], null)], null),null)], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Password"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (evt){
return com.fulcrologic.fulcro.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("ui","password","ui/password",417022099),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),evt], 0));
}),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = password;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})()], null)], null),null)], null),new cljs.core.Keyword(null,".ui.field",".ui.field",443801245)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63120 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null);
return (com.app.model.account.login.cljs$core$IFn$_invoke$arity$1 ? com.app.model.account.login.cljs$core$IFn$_invoke$arity$1(G__63120) : com.app.model.account.login.call(null,G__63120));
})()], null));
})], null),"Login"], null),new cljs.core.Keyword(null,".ui.primary.button",".ui.primary.button",665119007))], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099))));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.ui !== 'undefined') && (typeof com.app.ui.login_dialog !== 'undefined') && (typeof com.app.ui.login_dialog.LoginForm !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.ui.login_dialog.LoginForm = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___63121,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.ui.login_dialog.LoginForm,new cljs.core.Keyword("com.app.ui.login-dialog","LoginForm","com.app.ui.login-dialog/LoginForm",1523795425),options__35388__auto___63121);

//# sourceMappingURL=com.app.ui.login_dialog.js.map
