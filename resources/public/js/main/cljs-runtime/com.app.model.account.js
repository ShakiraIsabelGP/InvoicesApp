goog.provide('com.app.model.account');

var options__35388__auto___63111 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$app$model$account$query_STAR_(_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("account","id","account/id",-544456697),new cljs.core.Keyword("account","name","account/name",869255772),new cljs.core.Keyword("account","email","account/email",439866197)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$app$model$account$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("account","id","account/id",-544456697),new cljs.core.Keyword("account","id","account/id",-544456697).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$app$model$account$render_AccountQuery(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.app !== 'undefined') && (typeof com.app.model !== 'undefined') && (typeof com.app.model.account !== 'undefined') && (typeof com.app.model.account.AccountQuery !== 'undefined')){
} else {
/**
 * @constructor
 */
com.app.model.account.AccountQuery = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__35388__auto___63111,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.app.model.account.AccountQuery,new cljs.core.Keyword("com.app.model.account","AccountQuery","com.app.model.account/AccountQuery",-483428124),options__35388__auto___63111);
com.app.model.account.id = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("account","id","account/id",-544456697),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identity_QMARK_,true,com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","id","com.app.model.account/id",-483192314)], null)));
com.app.model.account.email = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("account","email","account/email",439866197),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),null], null), null),com.fulcrologic.rad.attributes_options.required_QMARK_,true,com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239),new cljs.core.Keyword("com.fulcrologic.rad.database-adapters.datomic","attribute-schema","com.fulcrologic.rad.database-adapters.datomic/attribute-schema",1333485388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088)], null)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","email","com.app.model.account/email",482869588)], null)));
com.app.model.account.active_QMARK_ = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("account","active?","account/active?",-782830515),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),null], null), null),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239),com.fulcrologic.rad.form_options.default_value,true]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","active?","com.app.model.account/active?",-739782066)], null)));
com.app.model.account.password = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("password","hashed-value","password/hashed-value",-2054569073),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.required_QMARK_,true,com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),null], null), null),new cljs.core.Keyword("com.fulcrologic.rad.authorization","permissions","com.fulcrologic.rad.authorization/permissions",-1720454589),(function (_){
return cljs.core.PersistentHashSet.EMPTY;
}),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","password","com.app.model.account/password",-797992395)], null)));
com.app.model.account.password_salt = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("password","salt","password/salt",-461791771),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("com.fulcrologic.rad.authorization","permissions","com.fulcrologic.rad.authorization/permissions",-1720454589),(function (_){
return cljs.core.PersistentHashSet.EMPTY;
}),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239),com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),null], null), null),com.fulcrologic.rad.attributes_options.required_QMARK_,true]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","password-salt","com.app.model.account/password-salt",-350930797)], null)));
com.app.model.account.password_iterations = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("password","iterations","password/iterations",1709836843),new cljs.core.Keyword(null,"int","int",-1741416922),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),null], null), null),new cljs.core.Keyword("com.fulcrologic.rad.authorization","permissions","com.fulcrologic.rad.authorization/permissions",-1720454589),(function (_){
return cljs.core.PersistentHashSet.EMPTY;
}),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239),com.fulcrologic.rad.attributes_options.required_QMARK_,true]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","password-iterations","com.app.model.account/password-iterations",-1918499423)], null)));
com.app.model.account.name = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("account","name","account/name",869255772),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.form_options.field_label,"Name",com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),null], null), null),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239),com.fulcrologic.rad.attributes_options.required_QMARK_,true]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","name","com.app.model.account/name",775960667)], null)));
com.app.model.account.avatar = cljs.core.update.cljs$core$IFn$_invoke$arity$6(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.blob","store","com.fulcrologic.rad.blob/store",662481600),new cljs.core.Keyword(null,"avatar-images","avatar-images",571410392),new cljs.core.Keyword("com.fulcrologic.rad.blob","remote","com.fulcrologic.rad.blob/remote",-1282256314),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword("com.fulcrologic.rad.form","field-style","com.fulcrologic.rad.form/field-style",950512885),new cljs.core.Keyword("com.fulcrologic.rad.blob","file-upload","com.fulcrologic.rad.blob/file-upload",-1769433080)], null),com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("account","avatar","account/avatar",1712061434),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),null], null), null),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239),com.fulcrologic.rad.form_options.field_style,new cljs.core.Keyword("com.fulcrologic.rad.blob","image-upload","com.fulcrologic.rad.blob/image-upload",-1733674559)]))], 0)),new cljs.core.Keyword("com.fulcrologic.rad.form","query-inclusion","com.fulcrologic.rad.form/query-inclusion",-482825736),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("account.avatar","url","account.avatar/url",228554256),new cljs.core.Keyword("account.avatar","progress","account.avatar/progress",150246565),new cljs.core.Keyword("account.avatar","status","account.avatar/status",-1902082915));
com.app.model.account.files = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("account","files","account/files",1040214073),new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.target,new cljs.core.Keyword("file","id","file/id",-1385257768),com.fulcrologic.rad.attributes_options.cardinality,new cljs.core.Keyword(null,"many","many",1092119164),com.fulcrologic.rad.attributes_options.identities,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","id","account/id",-544456697),null], null), null),com.fulcrologic.rad.attributes_options.schema,new cljs.core.Keyword(null,"production","production",1781416239)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","files","com.app.model.account/files",997410376)], null)));
com.app.model.account.all_accounts = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("account","all-accounts","account/all-accounts",-420133929),new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.target,new cljs.core.Keyword("account","id","account/id",-544456697),com.fulcrologic.rad.attributes_options.pc_output,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","all-accounts","account/all-accounts",-420133929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("account","id","account/id",-544456697)], null)], null)], null),com.fulcrologic.rad.attributes_options.pc_resolve,(function (p__63070,_){
var map__63071 = p__63070;
var map__63071__$1 = cljs.core.__destructure_map(map__63071);
var env = map__63071__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63071__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return null;
})]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","all-accounts","com.app.model.account/all-accounts",-395944488)], null)));
com.app.model.account.account_invoices = com.fulcrologic.rad.attributes.new_attribute(new cljs.core.Keyword("account","invoices","account/invoices",-2027551837),new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([com.fulcrologic.rad.attributes_options.target,new cljs.core.Keyword("account","id","account/id",-544456697),com.fulcrologic.rad.attributes_options.pc_output,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("account","invoices","account/invoices",-2027551837),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("invoice","id","invoice/id",1486944007)], null)], null)], null),com.fulcrologic.rad.attributes_options.pc_resolve,(function (p__63072,_){
var map__63073 = p__63072;
var map__63073__$1 = cljs.core.__destructure_map(map__63073);
var env = map__63073__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63073__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return null;
})]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registration-key","registration-key",-726147635),new cljs.core.Keyword("com.app.model.account","account-invoices","com.app.model.account/account-invoices",2069759184)], null)));
/**
 * 
 */
com.app.model.account.sendemail = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.app.model.account","sendemail","com.app.model.account/sendemail",-1211574052,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.app.model.account","sendemail","com.app.model.account/sendemail",-1211574052,null),(function (fulcro_mutation_env_symbol){
var map__63074 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__63074__$1 = cljs.core.__destructure_map(map__63074);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63074__$1,new cljs.core.Keyword("account","email","account/email",439866197));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$app$model$account$remote(env){
return true;
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function com$app$model$account$ok_action(p__63075){
var map__63076 = p__63075;
var map__63076__$1 = cljs.core.__destructure_map(map__63076);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63076__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var _STAR_after_render_STAR__orig_val__63077_63116 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63078_63117 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63078_63117);

try{var response_63118 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol("com.app.model.account","sendemail","com.app.model.account/sendemail",-1211574052,null)], null));
var status_63119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_63118,new cljs.core.Keyword(null,"response","response",-1068424192));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status_63119,"Done")){
alert("Email Sent Successfully");
} else {
alert("Error");
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63077_63116);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__63079 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63080 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63080);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63079);
}})], null);
}));
/**
 * 
 */
com.app.model.account.logout = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.app.model.account","logout","com.app.model.account/logout",251294054,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.app.model.account","logout","com.app.model.account/logout",251294054,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$app$model$account$remote(env){
return true;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__63081 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63082 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63082);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63081);
}})], null);
}));
/**
 * 
 */
com.app.model.account.login = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.app.model.account","login","com.app.model.account/login",763946084,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.app.model.account","login","com.app.model.account/login",763946084,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$app$model$account$remote(env){
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2(env,com.fulcrologic.rad.authorization.Session);
}),new cljs.core.Keyword(null,"error-action","error-action",-1147840498),(function com$app$model$account$error_action(p__63083){
var map__63084 = p__63083;
var map__63084__$1 = cljs.core.__destructure_map(map__63084);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63084__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var _STAR_after_render_STAR__orig_val__63085_63122 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63086_63123 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63086_63123);

try{taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.app.model.account",null,139,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Login failed."], null);
}),null)),null,-1812466852,null);

com.fulcrologic.rad.authorization.failed_BANG_(app,new cljs.core.Keyword(null,"local","local",-1497766724));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63085_63122);
}
return null;
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function com$app$model$account$ok_action(p__63087){
var map__63088 = p__63087;
var map__63088__$1 = cljs.core.__destructure_map(map__63088);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__63089_63124 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63090_63125 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63090_63125);

try{var map__63091_63126 = (function (){var G__63092 = state;
var G__63092__$1 = (((G__63092 == null))?null:cljs.core.deref(G__63092));
var G__63092__$2 = (((G__63092__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.authorization","authorization","com.fulcrologic.rad.authorization/authorization",1744538312).cljs$core$IFn$_invoke$arity$1(G__63092__$1));
if((G__63092__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(G__63092__$2);
}
})();
var map__63091_63127__$1 = cljs.core.__destructure_map(map__63091_63126);
var zone_id_63128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63091_63127__$1,new cljs.core.Keyword("time-zone","zone-id","time-zone/zone-id",421468234));
var status_63129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63091_63127__$1,new cljs.core.Keyword("com.fulcrologic.rad.authorization","status","com.fulcrologic.rad.authorization/status",764781427));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status_63129,new cljs.core.Keyword(null,"success","success",1890645906))){
com.fulcrologic.rad.authorization.logged_in_BANG_(app,new cljs.core.Keyword(null,"local","local",-1497766724));
} else {
com.fulcrologic.rad.authorization.failed_BANG_(app,new cljs.core.Keyword(null,"local","local",-1497766724));
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63089_63124);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__63093 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63094 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63094);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63093);
}})], null);
}));
/**
 * 
 */
com.app.model.account.check_session = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.app.model.account","check-session","com.app.model.account/check-session",-557787699,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.app.model.account","check-session","com.app.model.account/check-session",-557787699,null),(function (fulcro_mutation_env_symbol){
var _ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$app$model$account$remote(env){
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2(env,com.fulcrologic.rad.authorization.Session);
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function com$app$model$account$ok_action(p__63095){
var map__63096 = p__63095;
var map__63096__$1 = cljs.core.__destructure_map(map__63096);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63096__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63096__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63096__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var _STAR_after_render_STAR__orig_val__63097_63130 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63098_63131 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63098_63131);

try{var map__63099_63132 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol("com.app.model.account","check-session","com.app.model.account/check-session",-557787699,null)], null));
var map__63099_63133__$1 = cljs.core.__destructure_map(map__63099_63132);
var provider_63134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63099_63133__$1,new cljs.core.Keyword("com.fulcrologic.rad.authorization","provider","com.fulcrologic.rad.authorization/provider",1880340412));
var map__63100_63135 = (function (){var G__63101 = state;
var G__63101__$1 = (((G__63101 == null))?null:cljs.core.deref(G__63101));
var G__63101__$2 = (((G__63101__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.authorization","authorization","com.fulcrologic.rad.authorization/authorization",1744538312).cljs$core$IFn$_invoke$arity$1(G__63101__$1));
if((G__63101__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__63101__$2,provider_63134);
}
})();
var map__63100_63136__$1 = cljs.core.__destructure_map(map__63100_63135);
var zone_id_63137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63100_63136__$1,new cljs.core.Keyword("time-zone","zone-id","time-zone/zone-id",421468234));
var status_63138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63100_63136__$1,new cljs.core.Keyword("com.fulcrologic.rad.authorization","status","com.fulcrologic.rad.authorization/status",764781427));
com.fulcrologic.fulcro.ui_state_machines.trigger_BANG_.cljs$core$IFn$_invoke$arity$4(app,com.fulcrologic.rad.authorization.machine_id,new cljs.core.Keyword("event","session-checked","event/session-checked",2090886638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"provider","provider",-302056900),provider_63134], null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63097_63130);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__63102 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63103 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63103);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63102);
}})], null);
}));
/**
 * 
 */
com.app.model.account.set_account_active = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.app.model.account","set-account-active","com.app.model.account/set-account-active",-711215337,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.app.model.account","set-account-active","com.app.model.account/set-account-active",-711215337,null),(function (fulcro_mutation_env_symbol){
var map__63104 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__63104__$1 = cljs.core.__destructure_map(map__63104);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63104__$1,new cljs.core.Keyword("account","id","account/id",-544456697));
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63104__$1,new cljs.core.Keyword("account","active?","account/active?",-782830515));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$app$model$account$remote(_){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function com$app$model$account$action(p__63105){
var map__63106 = p__63105;
var map__63106__$1 = cljs.core.__destructure_map(map__63106);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63106__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__63107_63139 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63108_63140 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63108_63140);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("account","id","account/id",-544456697),id,new cljs.core.Keyword("account","active?","account/active?",-782830515)], null),active_QMARK_);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63107_63139);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__63109 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__63110 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__63110);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__63109);
}})], null);
}));
com.app.model.account.attributes = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.app.model.account.id,com.app.model.account.name,com.app.model.account.email,com.app.model.account.password,com.app.model.account.password_iterations,com.app.model.account.password_salt,com.app.model.account.active_QMARK_,com.app.model.account.all_accounts,com.app.model.account.avatar,com.app.model.account.files,com.app.model.account.account_invoices], null);

//# sourceMappingURL=com.app.model.account.js.map
