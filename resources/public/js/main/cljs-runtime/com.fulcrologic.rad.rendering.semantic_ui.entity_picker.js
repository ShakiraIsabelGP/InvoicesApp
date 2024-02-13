goog.provide('com.fulcrologic.rad.rendering.semantic_ui.entity_picker');
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.integrate_with_parent_form_BANG_ = (function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$integrate_with_parent_form_BANG_(p__92969,p__92970){
var map__92971 = p__92969;
var map__92971__$1 = cljs.core.__destructure_map(map__92971);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92971__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92971__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var map__92972 = p__92970;
var map__92972__$1 = cljs.core.__destructure_map(map__92972);
var parent_registry_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92972__$1,new cljs.core.Keyword(null,"parent-registry-key","parent-registry-key",1561189826));
var parent_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92972__$1,new cljs.core.Keyword(null,"parent-ident","parent-ident",711232171));
var parent_relation_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92972__$1,new cljs.core.Keyword(null,"parent-relation-attribute","parent-relation-attribute",-1314831897));
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92972__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
if(cljs.core.truth_((function (){var and__5043__auto__ = parent_ident;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = parent_relation_attribute;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = parent_registry_key;
if(cljs.core.truth_(and__5043__auto____$2)){
return ident;
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var ParentForm = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(parent_registry_key) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,parent_registry_key));
var parent_props = com.fulcrologic.fulcro.algorithms.normalized_state.ui__GT_props.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(state),ParentForm,parent_ident);
var parent_relation = com.fulcrologic.rad.attributes_options.qualified_key.cljs$core$IFn$_invoke$arity$1(parent_relation_attribute);
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.attributes_options.cardinality.cljs$core$IFn$_invoke$arity$1(parent_relation_attribute),new cljs.core.Keyword(null,"many","many",1092119164));
if((!(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(cljs.core.second(ident))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__78955__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s__78955__auto__,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_ident,parent_relation),((many_QMARK_)?(function (p1__92968_SHARP_){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY)(p1__92968_SHARP_,ident);
}):cljs.core.constantly(ident)));
}));

com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$5(app,ParentForm,parent_props,parent_relation_attribute,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-reload?","force-reload?",-1349067446),true], null));

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__92973 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-ident","entity-ident",-1883769419),parent_ident,new cljs.core.Keyword(null,"field","field",-1302436500),parent_relation], null);
return (com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.cljs$core$IFn$_invoke$arity$1(G__92973) : com.fulcrologic.fulcro.algorithms.form_state.mark_complete_BANG_.call(null,G__92973));
})()], null));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.rad.rendering.semantic-ui.entity-picker",null,47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Saving the new value for",parent_relation,"returned OK from the server yet","the tempid in",ident,"has not been remapped to a real one, indicating that the save failed"], null);
}),null)),null,-1951759677,null);
}
} else {
return null;
}
});
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal_STAR_ = (function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$toggle_modal_STAR_(state,p__92974){
var map__92975 = p__92974;
var map__92975__$1 = cljs.core.__destructure_map(map__92975);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92975__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var picker_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92975__$1,new cljs.core.Keyword(null,"picker-id","picker-id",382960988));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92975__$1,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554));
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","id","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/id",-451432342),picker_id,new cljs.core.Keyword("ui","open?","ui/open?",1238446561)], null),open_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","id","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/id",-451432342),picker_id,new cljs.core.Keyword("ui","edit-id","ui/edit-id",-639872094)], null),edit_id);
});
/**
 * 
 */
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","toggle-modal","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/toggle-modal",1046535701,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","toggle-modal","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/toggle-modal",1046535701,null),(function (fulcro_mutation_env_symbol){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$action(p__92976){
var map__92977 = p__92976;
var map__92977__$1 = cljs.core.__destructure_map(map__92977);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92977__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__92978_93084 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__92979_93085 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__92979_93085);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal_STAR_,params);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__92978_93084);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__92980 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__92981 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__92981);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__92980);
}})], null);
}));
/**
 * 
 */
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.saved = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","saved","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/saved",-1449152531,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","saved","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/saved",-1449152531,null),(function (fulcro_mutation_env_symbol){
var map__92982 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__92982__$1 = cljs.core.__destructure_map(map__92982);
var params = map__92982__$1;
var picker_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92982__$1,new cljs.core.Keyword(null,"picker-id","picker-id",382960988));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$action(p__92983){
var map__92984 = p__92983;
var map__92984__$1 = cljs.core.__destructure_map(map__92984);
var env = map__92984__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92984__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__92985_93086 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__92986_93087 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__92986_93087);

try{com.fulcrologic.rad.rendering.semantic_ui.entity_picker.integrate_with_parent_form_BANG_(env,params);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"picker-id","picker-id",382960988),picker_id], null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__92985_93086);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__92987 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__92988 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__92988);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__92987);
}})], null);
}));
/**
 * 
 */
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.cancel = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","cancel","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/cancel",924316661,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","cancel","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/cancel",924316661,null),(function (fulcro_mutation_env_symbol){
var map__92989 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__92989__$1 = cljs.core.__destructure_map(map__92989);
var _params = map__92989__$1;
var picker_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92989__$1,new cljs.core.Keyword(null,"picker-id","picker-id",382960988));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$action(p__92990){
var map__92991 = p__92990;
var map__92991__$1 = cljs.core.__destructure_map(map__92991);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92991__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__92992_93088 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__92993_93089 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__92993_93089);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"picker-id","picker-id",382960988),picker_id], null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__92992_93088);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__92994 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__92995 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__92995);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__92994);
}})], null);
}));
/**
 * 
 */
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.quick_add = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","quick-add","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/quick-add",-1721377115,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","quick-add","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/quick-add",-1721377115,null),(function (fulcro_mutation_env_symbol){
var map__92996 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__92996__$1 = cljs.core.__destructure_map(map__92996);
var params = map__92996__$1;
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92996__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92996__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var parent_registry_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92996__$1,new cljs.core.Keyword(null,"parent-registry-key","parent-registry-key",1561189826));
var parent_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92996__$1,new cljs.core.Keyword(null,"parent-ident","parent-ident",711232171));
var parent_relation_attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92996__$1,new cljs.core.Keyword(null,"parent-relation-attribute","parent-relation-attribute",-1314831897));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$remote(env){
var delta = cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,cljs.core.reduce_kv((function (m,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(ident))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",594996914),v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,entity)]);
return com.fulcrologic.fulcro.mutations.with_params(com.fulcrologic.fulcro.mutations.with_server_side_mutation(com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2(env,com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.keys(entity)))),new cljs.core.Symbol("com.fulcrologic.rad.form","save-as-form","com.fulcrologic.rad.form/save-as-form",650217404,null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.rad.form","master-pk","com.fulcrologic.rad.form/master-pk",-2076104068),cljs.core.first(ident),new cljs.core.Keyword("com.fulcrologic.rad.form","id","com.fulcrologic.rad.form/id",-668012937),cljs.core.second(ident),new cljs.core.Keyword("com.fulcrologic.rad.form","delta","com.fulcrologic.rad.form/delta",-127005096),delta], null));
}),new cljs.core.Keyword(null,"ok-action","ok-action",1253795573),(function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$ok_action(p__92997){
var map__92998 = p__92997;
var map__92998__$1 = cljs.core.__destructure_map(map__92998);
var env = map__92998__$1;
var tempid__GT_realid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92998__$1,new cljs.core.Keyword(null,"tempid->realid","tempid->realid",1168652437));
var _STAR_after_render_STAR__orig_val__92999_93090 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__93000_93091 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__93000_93091);

try{var vec__93001_93092 = com.fulcrologic.fulcro.algorithms.tempid.resolve_tempids(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,entity], null),tempid__GT_realid);
var ident_93093__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93001_93092,(0),null);
var entity_93094__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93001_93092,(1),null);
var params_93095__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"ident","ident",-742346),ident_93093__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entity","entity",-450970276),entity_93094__$1], 0));
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(cljs.core.second(ident_93093__$1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.entity-picker",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Quick add failed. Server may not have saved the data"], null);
}),null)),null,1123037366,null);
} else {
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.integrate_with_parent_form_BANG_(env,params_93095__$1);
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__92999_93090);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__93004 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__93005 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__93005);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__93004);
}})], null);
}));
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.entity_picker !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker !== 'undefined')){
} else {
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker = (function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$ToOnePicker(js_props__50841__auto__){
var render__50842__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker) : com.fulcrologic.fulcro.components.component_options.call(null,com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker)));
var vec__93007 = com.fulcrologic.fulcro.components.use_fulcro(js_props__50841__auto__,com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker);
var this__50843__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93007,(0),null);
var props__50844__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93007,(1),null);
return (render__50842__auto__.cljs$core$IFn$_invoke$arity$2 ? render__50842__auto__.cljs$core$IFn$_invoke$arity$2(this__50843__auto__,props__50844__auto__) : render__50842__auto__.call(null,this__50843__auto__,props__50844__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","ToOnePicker","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/ToOnePicker",1837874883),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$render_ToOnePicker(this$,p__93010){
var map__93011 = p__93010;
var map__93011__$1 = cljs.core.__destructure_map(map__93011);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93011__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93011__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__93012 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__93013 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__93014 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__93015 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__93018 = this$;
var G__93019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__93018,G__93019) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__93018,G__93019));
}
})();
var _STAR_shared_STAR__temp_val__93016 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__93020 = this$;
var G__93021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__93020,G__93021) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__93020,G__93021));
}
})());
var _STAR_parent_STAR__temp_val__93017 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__93015);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__93016);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__93017);

try{var map__93022 = env;
var map__93022__$1 = cljs.core.__destructure_map(map__93022);
var master_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93022__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","master-form","com.fulcrologic.rad.form/master-form",1468655641));
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93022__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attr);
com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
var map__93023 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__93023__$1 = cljs.core.__destructure_map(map__93023);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93023__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var attr__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93023__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var form_class = com.fulcrologic.fulcro.components.react_type(form_instance);
return com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,form_class,props,attr__$1);
})();

return undefined;
}),[]);

if(visible_QMARK_){
var field_options = com.fulcrologic.rad.form_options.get_field_options.cljs$core$IFn$_invoke$arity$2((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance)),attr);
var map__93024 = attr;
var map__93024__$1 = cljs.core.__destructure_map(map__93024);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93024__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93024__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","required?","com.fulcrologic.rad.attributes/required?",96541330));
var target_id_key = com.fulcrologic.rad.attributes_options.target.cljs$core$IFn$_invoke$arity$1(attr);
var map__93025 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,field_options], 0));
var map__93025__$1 = cljs.core.__destructure_map(map__93025);
var Form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93025__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","form","com.fulcrologic.rad.picker-options/form",-1137848895));
var quick_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93025__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","quick-create","com.fulcrologic.rad.picker-options/quick-create",-1897617563));
var allow_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93025__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","allow-edit?","com.fulcrologic.rad.picker-options/allow-edit?",769213611));
var allow_create_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93025__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","allow-create?","com.fulcrologic.rad.picker-options/allow-create?",546230417));
var cache_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93025__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-key","com.fulcrologic.rad.picker-options/cache-key",54577100));
var query_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93025__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883));
var Form__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__93030 = Form;
if((G__93030 == null)){
return null;
} else {
return com.fulcrologic.fulcro.raw.components.registry_key__GT_class(G__93030);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,attr], 0));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var cache_key__$1 = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cache_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.components.react_type(form_instance),props], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return query_key;
}
})();
var cache_key__$2 = (function (){var or__5045__auto__ = cache_key__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = query_key;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.entity-picker",null,108,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ref field MUST have either a ::picker-options/cache-key or ::picker-options/query-key in attribute ",qualified_key], null);
}),null)),null,1674742723,null);
}
}
})();
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),cache_key__$2,new cljs.core.Keyword(null,"options","options",99638489)], null));
var value = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qualified_key,target_id_key], null))], null);
var field_label = com.fulcrologic.rad.form.field_label(env,attr);
var read_only_QMARK_ = ((com.fulcrologic.rad.form.read_only_QMARK_(master_form,attr)) || (com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attr)));
var omit_label_QMARK_ = com.fulcrologic.rad.form.omit_label_QMARK_(form_instance,attr);
var invalid_QMARK_ = (function (){var and__5043__auto__ = (!(read_only_QMARK_));
if(and__5043__auto__){
return com.fulcrologic.rad.form.invalid_attribute_value_QMARK_(env,attr);
} else {
return and__5043__auto__;
}
})();
var extra_props = (function (){var G__93031 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attr,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_(quick_create)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__93031,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"allowAdditions","allowAdditions",-969107008),true,new cljs.core.Keyword(null,"additionPosition","additionPosition",900784155),"top",new cljs.core.Keyword(null,"onAddItem","onAddItem",814929210),(function (_,data){
try{var v = data.value;
var entity = (quick_create.cljs$core$IFn$_invoke$arity$1 ? quick_create.cljs$core$IFn$_invoke$arity$1(v) : quick_create.call(null,v));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,target_id_key);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key,id], null);
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(id)){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__93033 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"parent-ident","parent-ident",711232171),(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)),new cljs.core.Keyword(null,"parent-registry-key","parent-registry-key",1561189826),(function (){var G__93034 = (com.fulcrologic.fulcro.components.get_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_class.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_class.call(null,form_instance));
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__93034) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__93034));
})(),new cljs.core.Keyword(null,"parent-relation-attribute","parent-relation-attribute",-1314831897),attr,new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null);
return (com.fulcrologic.rad.rendering.semantic_ui.entity_picker.quick_add.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.entity_picker.quick_add.cljs$core$IFn$_invoke$arity$1(G__93033) : com.fulcrologic.rad.rendering.semantic_ui.entity_picker.quick_add.call(null,G__93033));
})()], null));
} else {
return null;
}
}catch (e93032){var e = e93032;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.entity-picker",null,133,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Quick create failed."], null);
}),null)),null,-458024331,null);
}})], null)], 0));
} else {
return G__93031;
}
})();
var top_class = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance,attr);
var can_edit_QMARK_ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(allow_edit_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,qualified_key], 0));
var can_create_QMARK_ = (function (){var temp__5806__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(allow_create_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,qualified_key], 0));
if((temp__5806__auto__ == null)){
return cljs.core.boolean$(Form__$1);
} else {
var v = temp__5806__auto__;
return v;
}
})();
var mutable_QMARK_ = (function (){var and__5043__auto__ = Form__$1;
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = can_edit_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return can_create_QMARK_;
}
} else {
return and__5043__auto__;
}
})();
var onSelect = (function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,v);
});
var picker_id = com.fulcrologic.fulcro.react.hooks.use_generated_id();
var vec__93026 = com.fulcrologic.fulcro.react.hooks.use_state((function (){
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","open?","ui/open?",1238446561),new cljs.core.Keyword("ui","edit-id","ui/edit-id",-639872094)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","id","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/id",-451432342),picker_id], null);
})], null));
}));
var picker_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93026,(0),null);
var _ = com.fulcrologic.fulcro.react.hooks.use_gc(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","id","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/id",-451432342),picker_id], null),cljs.core.PersistentHashSet.EMPTY);
var map__93029 = com.fulcrologic.fulcro.react.hooks.use_component(com.fulcrologic.fulcro.components.any__GT_app(this$),picker_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize","initialize",609952913),true], null));
var map__93029__$1 = cljs.core.__destructure_map(map__93029);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93029__$1,new cljs.core.Keyword("ui","open?","ui/open?",1238446561));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93029__$1,new cljs.core.Keyword("ui","edit-id","ui/edit-id",-639872094));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui field";
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),((omit_label_QMARK_)?null:com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_label,(cljs.core.truth_(invalid_QMARK_)?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Required")),")"].join(''):null)], null),null)),((read_only_QMARK_)?(function (){var value__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__93006_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__93006_SHARP_));
}),options));
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(value__$1);
})():((cljs.core.not(mutable_QMARK_))?(function (){var G__93035 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"ui fluid",new cljs.core.Keyword(null,"compact","compact",-348732150),true,new cljs.core.Keyword(null,"clearable","clearable",943040201),cljs.core.not(required_QMARK_)], null),extra_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return onSelect(v);
}),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only_QMARK_,new cljs.core.Keyword(null,"options","options",99638489),options], null)], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__93035) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__93035));
})():com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": (0), "boxShadow": "none"}), "className": "ui horizontal segments"}),com.fulcrologic.fulcro.components.force_children((function (){var G__93036 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"ui compact segment attached left",new cljs.core.Keyword(null,"compact","compact",-348732150),true,new cljs.core.Keyword(null,"clearable","clearable",943040201),cljs.core.not(required_QMARK_)], null),extra_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return onSelect(v);
}),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only_QMARK_,new cljs.core.Keyword(null,"options","options",99638489),options], null)], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__93036) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__93036));
})()),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(open_QMARK_)?(function (){var G__93037 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"Form","Form",-626910483),Form__$1,new cljs.core.Keyword(null,"save-mutation","save-mutation",-1831097868),com.fulcrologic.rad.rendering.semantic_ui.entity_picker.saved,new cljs.core.Keyword(null,"save-params","save-params",-537403168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"picker-id","picker-id",382960988),picker_id,new cljs.core.Keyword(null,"parent-ident","parent-ident",711232171),(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)),new cljs.core.Keyword(null,"parent-registry-key","parent-registry-key",1561189826),(function (){var G__93038 = (com.fulcrologic.fulcro.components.get_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_class.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_class.call(null,form_instance));
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__93038) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__93038));
})(),new cljs.core.Keyword(null,"parent-relation-attribute","parent-relation-attribute",-1314831897),attr], null),new cljs.core.Keyword(null,"cancel-mutation","cancel-mutation",-504988973),com.fulcrologic.rad.rendering.semantic_ui.entity_picker.cancel,new cljs.core.Keyword(null,"cancel-params","cancel-params",-295084512),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"picker-id","picker-id",382960988),picker_id], null),new cljs.core.Keyword(null,"id","id",-1388402092),edit_id], null);
return (com.fulcrologic.rad.rendering.semantic_ui.modals.ui_form_modal.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.modals.ui_form_modal.cljs$core$IFn$_invoke$arity$1(G__93037) : com.fulcrologic.rad.rendering.semantic_ui.modals.ui_form_modal.call(null,G__93037));
})():null)),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(can_create_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(can_edit_QMARK_)?null:"right")], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__93039 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"picker-id","picker-id",382960988),picker_id,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0()], null);
return (com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal.cljs$core$IFn$_invoke$arity$1(G__93039) : com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal.call(null,G__93039));
})()], null));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "plus icon"})])], null),new cljs.core.Keyword(null,".ui.icon.mini.button.attached",".ui.icon.mini.button.attached",-1892670842)):null)),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(can_edit_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.second(value)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__93040 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"picker-id","picker-id",382960988),picker_id,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554),(function (){var G__93041 = value;
if((G__93041 == null)){
return null;
} else {
return cljs.core.second(G__93041);
}
})()], null);
return (com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal.cljs$core$IFn$_invoke$arity$1(G__93040) : com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal.call(null,G__93040));
})()], null));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "pencil icon"})])], null),new cljs.core.Keyword(null,".ui.icon.mini.button.right.attached",".ui.icon.mini.button.right.attached",701564865)):null))]))),(cljs.core.truth_((function (){var and__5043__auto__ = invalid_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return omit_label_QMARK_;
} else {
return and__5043__auto__;
}
})())?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro_i18n.i18n.fulcro_tr("Required")], null),new cljs.core.Keyword(null,".red",".red",-1793898696)):null)], null),null);
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__93014);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__93013);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__93012);
}}));
})], null));
var ui_to_one_picker_93096 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToOnePicker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p__93042){
var map__93043 = p__93042;
var map__93043__$1 = cljs.core.__destructure_map(map__93043);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93043__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr);
})], null));
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.to_one_picker = (function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$to_one_picker(env,attribute){
var G__93044 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"attr","attr",-604132353),attribute], null);
return (ui_to_one_picker_93096.cljs$core$IFn$_invoke$arity$1 ? ui_to_one_picker_93096.cljs$core$IFn$_invoke$arity$1(G__93044) : ui_to_one_picker_93096.call(null,G__93044));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.entity_picker !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker !== 'undefined')){
} else {
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker = (function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$ToManyPicker(js_props__50841__auto__){
var render__50842__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker) : com.fulcrologic.fulcro.components.component_options.call(null,com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker)));
var vec__93045 = com.fulcrologic.fulcro.components.use_fulcro(js_props__50841__auto__,com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker);
var this__50843__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93045,(0),null);
var props__50844__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93045,(1),null);
return (render__50842__auto__.cljs$core$IFn$_invoke$arity$2 ? render__50842__auto__.cljs$core$IFn$_invoke$arity$2(this__50843__auto__,props__50844__auto__) : render__50842__auto__.call(null,this__50843__auto__,props__50844__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","ToManyPicker","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/ToManyPicker",-440881877),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$render_ToManyPicker(this$,p__93048){
var map__93049 = p__93048;
var map__93049__$1 = cljs.core.__destructure_map(map__93049);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93049__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93049__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__93050 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__93051 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__93052 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__93053 = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__93056 = this$;
var G__93057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__93056,G__93057) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__93056,G__93057));
}
})();
var _STAR_shared_STAR__temp_val__93054 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__93058 = this$;
var G__93059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__93058,G__93059) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__93058,G__93059));
}
})());
var _STAR_parent_STAR__temp_val__93055 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__93053);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__93054);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__93055);

try{com.fulcrologic.fulcro.react.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((function (){
(function (){
var map__93060 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__93060__$1 = cljs.core.__destructure_map(map__93060);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93060__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var attr__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93060__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var form_instance = new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130).cljs$core$IFn$_invoke$arity$1(env__$1);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var form_class = com.fulcrologic.fulcro.components.react_type(form_instance);
return com.fulcrologic.rad.picker_options.load_options_BANG_.cljs$core$IFn$_invoke$arity$4(form_instance,form_class,props,attr__$1);
})();

return undefined;
}),[]);

var map__93061 = env;
var map__93061__$1 = cljs.core.__destructure_map(map__93061);
var form_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93061__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","form-instance","com.fulcrologic.rad.form/form-instance",-1478299130));
var visible_QMARK_ = com.fulcrologic.rad.form.field_visible_QMARK_(form_instance,attr);
if(visible_QMARK_){
var map__93062 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.component_options.call(null,form_instance));
var map__93062__$1 = cljs.core.__destructure_map(map__93062);
var form_options = map__93062__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93062__$1,new cljs.core.Keyword("com.fulcrologic.rad.form","attributes","com.fulcrologic.rad.form/attributes",1227286591));
var field_options = com.fulcrologic.rad.form_options.get_field_options.cljs$core$IFn$_invoke$arity$2(form_options,attr);
var map__93063 = attr;
var map__93063__$1 = cljs.core.__destructure_map(map__93063);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93063__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target_id_key = cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__93069){
var map__93070 = p__93069;
var map__93070__$1 = cljs.core.__destructure_map(map__93070);
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93070__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93070__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","target","com.fulcrologic.rad.attributes/target",-650174039));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,qualified_key)){
return target;
} else {
return null;
}
}),attributes));
var map__93064 = field_options;
var map__93064__$1 = cljs.core.__destructure_map(map__93064);
var Form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93064__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","form","com.fulcrologic.rad.picker-options/form",-1137848895));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93064__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var quick_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93064__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","quick-create","com.fulcrologic.rad.picker-options/quick-create",-1897617563));
var allow_create_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93064__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","allow-create?","com.fulcrologic.rad.picker-options/allow-create?",546230417));
var allow_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93064__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","allow-edit?","com.fulcrologic.rad.picker-options/allow-edit?",769213611));
var cache_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93064__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","cache-key","com.fulcrologic.rad.picker-options/cache-key",54577100));
var query_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93064__$1,new cljs.core.Keyword("com.fulcrologic.rad.picker-options","query-key","com.fulcrologic.rad.picker-options/query-key",186355883));
var cache_key__$1 = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cache_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.components.react_type(form_instance),(com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance))], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return query_key;
}
})();
var cache_key__$2 = (function (){var or__5045__auto__ = cache_key__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = query_key;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.entity-picker",null,223,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ref field MUST have either a ::picker-options/cache-key or ::picker-options/query-key in attribute ",qualified_key], null);
}),null)),null,149161435,null);
}
}
})();
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.props.call(null,form_instance));
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.picker-options","options-cache","com.fulcrologic.rad.picker-options/options-cache",779041238),cache_key__$2,new cljs.core.Keyword(null,"options","options",99638489)], null));
var extra_props = (function (){var G__93071 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.form.field_style_config(env,attr,new cljs.core.Keyword("input","props","input/props",-452472703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env], 0));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"dropdown","dropdown",1343185805));
if(and__5043__auto__){
return quick_create;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__93071,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"allowAdditions","allowAdditions",-969107008),true,new cljs.core.Keyword(null,"additionPosition","additionPosition",900784155),"top",new cljs.core.Keyword(null,"onAddItem","onAddItem",814929210),(function (_,data){
try{var v = data.value;
var entity = (quick_create.cljs$core$IFn$_invoke$arity$1 ? quick_create.cljs$core$IFn$_invoke$arity$1(v) : quick_create.call(null,v));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,target_id_key);
var ident = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key,id], null);
if(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(id)){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(form_instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__93073 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"parent-ident","parent-ident",711232171),(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)),new cljs.core.Keyword(null,"parent-registry-key","parent-registry-key",1561189826),(function (){var G__93074 = (com.fulcrologic.fulcro.components.get_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_class.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_class.call(null,form_instance));
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__93074) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__93074));
})(),new cljs.core.Keyword(null,"parent-relation-attribute","parent-relation-attribute",-1314831897),attr,new cljs.core.Keyword(null,"ident","ident",-742346),ident,new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null);
return (com.fulcrologic.rad.rendering.semantic_ui.entity_picker.quick_add.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.entity_picker.quick_add.cljs$core$IFn$_invoke$arity$1(G__93073) : com.fulcrologic.rad.rendering.semantic_ui.entity_picker.quick_add.call(null,G__93073));
})()], null));
} else {
return null;
}
}catch (e93072){var e = e93072;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.rendering.semantic-ui.entity-picker",null,245,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Quick create failed."], null);
}),null)),null,1629122505,null);
}})], null)], 0));
} else {
return G__93071;
}
})();
var current_selection = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (entity){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,target_id_key);
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id_key,id], null);
} else {
return null;
}
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,qualified_key));
var field_label = com.fulcrologic.rad.form.field_label(env,attr);
var invalid_QMARK_ = com.fulcrologic.rad.form.invalid_attribute_value_QMARK_(env,attr);
var read_only_QMARK_ = com.fulcrologic.rad.form.read_only_QMARK_(form_instance,attr);
var omit_label_QMARK_ = com.fulcrologic.rad.form.omit_label_QMARK_(form_instance,attr);
var top_class = com.fulcrologic.rad.rendering.semantic_ui.form_options.top_class(form_instance,attr);
var can_create_QMARK_ = (function (){var and__5043__auto__ = Form;
if(cljs.core.truth_(and__5043__auto__)){
var temp__5806__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(allow_create_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_instance,qualified_key], 0));
if((temp__5806__auto__ == null)){
return cljs.core.boolean$(Form);
} else {
var v = temp__5806__auto__;
return v;
}
} else {
return and__5043__auto__;
}
})();
var validation_message = (cljs.core.truth_(invalid_QMARK_)?com.fulcrologic.rad.form.validation_error_message(env,attr):null);
var picker_id = com.fulcrologic.fulcro.react.hooks.use_generated_id();
var vec__93065 = com.fulcrologic.fulcro.react.hooks.use_state((function (){
return com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","open?","ui/open?",1238446561),new cljs.core.Keyword("ui","edit-id","ui/edit-id",-639872094)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"ident","ident",-742346),(function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","id","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/id",-451432342),picker_id], null);
})], null));
}));
var picker_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93065,(0),null);
var _ = com.fulcrologic.fulcro.react.hooks.use_gc(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.entity-picker","id","com.fulcrologic.rad.rendering.semantic-ui.entity-picker/id",-451432342),picker_id], null),cljs.core.PersistentHashSet.EMPTY);
var map__93068 = com.fulcrologic.fulcro.react.hooks.use_component(com.fulcrologic.fulcro.components.any__GT_app(this$),picker_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize","initialize",609952913),true], null));
var map__93068__$1 = cljs.core.__destructure_map(map__93068);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93068__$1,new cljs.core.Keyword("ui","open?","ui/open?",1238446561));
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93068__$1,new cljs.core.Keyword("ui","edit-id","ui/edit-id",-639872094));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = top_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui field";
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(invalid_QMARK_)?"error":null)], null)], null),((omit_label_QMARK_)?null:com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_label," ",(cljs.core.truth_(invalid_QMARK_)?validation_message:null)], null),null)),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "0"}), "className": "ui middle aligned celled list big"}),com.fulcrologic.fulcro.components.force_children(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"dropdown","dropdown",1343185805)))?(function (){var G__93075 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_props,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),current_selection,new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only_QMARK_,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (v){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,v);
})], null)], 0));
return (com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.cljs$core$IFn$_invoke$arity$1(G__93075) : com.fulcrologic.rad.rendering.semantic_ui.components.ui_wrapped_dropdown.call(null,G__93075));
})():cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__93076){
var map__93077 = p__93076;
var map__93077__$1 = cljs.core.__destructure_map(map__93077);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93077__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93077__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked_QMARK_ = cljs.core.contains_QMARK_(current_selection,value);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "content"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"marginTop": "0"}), "className": "ui toggle checkbox"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
if((!(checked_QMARK_))){
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_selection,value)));
} else {
return com.fulcrologic.rad.form.input_changed_BANG_(env,qualified_key,cljs.core.vec(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(current_selection,value)));
}
})], null)], 0))], null),null)),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text], null),null))]))])], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}),options))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(open_QMARK_)?(function (){var G__93078 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"Form","Form",-626910483),Form,new cljs.core.Keyword(null,"save-mutation","save-mutation",-1831097868),com.fulcrologic.rad.rendering.semantic_ui.entity_picker.saved,new cljs.core.Keyword(null,"save-params","save-params",-537403168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"picker-id","picker-id",382960988),picker_id,new cljs.core.Keyword(null,"parent-ident","parent-ident",711232171),(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_ident.call(null,form_instance)),new cljs.core.Keyword(null,"parent-registry-key","parent-registry-key",1561189826),(function (){var G__93079 = (com.fulcrologic.fulcro.components.get_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_class.cljs$core$IFn$_invoke$arity$1(form_instance) : com.fulcrologic.fulcro.components.get_class.call(null,form_instance));
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__93079) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__93079));
})(),new cljs.core.Keyword(null,"parent-relation-attribute","parent-relation-attribute",-1314831897),attr], null),new cljs.core.Keyword(null,"cancel-mutation","cancel-mutation",-504988973),com.fulcrologic.rad.rendering.semantic_ui.entity_picker.cancel,new cljs.core.Keyword(null,"cancel-params","cancel-params",-295084512),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"picker-id","picker-id",382960988),picker_id], null),new cljs.core.Keyword(null,"id","id",-1388402092),edit_id], null);
return (com.fulcrologic.rad.rendering.semantic_ui.modals.ui_form_modal.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.modals.ui_form_modal.cljs$core$IFn$_invoke$arity$1(G__93078) : com.fulcrologic.rad.rendering.semantic_ui.modals.ui_form_modal.call(null,G__93078));
})():null),(cljs.core.truth_(can_create_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__93080 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"picker-id","picker-id",382960988),picker_id,new cljs.core.Keyword(null,"edit-id","edit-id",-639876554),com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$0()], null);
return (com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal.cljs$core$IFn$_invoke$arity$1(G__93080) : com.fulcrologic.rad.rendering.semantic_ui.entity_picker.toggle_modal.call(null,G__93080));
})()], null));
})], null),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "plus icon"})])], null),new cljs.core.Keyword(null,".vertically.fitted.ui.icon.button.item",".vertically.fitted.ui.icon.button.item",1644369252)):null)], null),new cljs.core.Keyword(null,".icon.menu",".icon.menu",1291502945)))]),(cljs.core.truth_((function (){var and__5043__auto__ = invalid_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return omit_label_QMARK_;
} else {
return and__5043__auto__;
}
})())?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),com.fulcrologic.fulcro.components.force_children(validation_message)]):null)], null),null);
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__93052);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__93051);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__93050);
}}));
})], null));
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ui_to_many_picker = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var ui_to_many_picker_93097 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.entity_picker.ToManyPicker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p__93081){
var map__93082 = p__93081;
var map__93082__$1 = cljs.core.__destructure_map(map__93082);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93082__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr);
})], null));
com.fulcrologic.rad.rendering.semantic_ui.entity_picker.to_many_picker = (function com$fulcrologic$rad$rendering$semantic_ui$entity_picker$to_many_picker(env,attribute){
var G__93083 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"attr","attr",-604132353),attribute], null);
return (ui_to_many_picker_93097.cljs$core$IFn$_invoke$arity$1 ? ui_to_many_picker_93097.cljs$core$IFn$_invoke$arity$1(G__93083) : ui_to_many_picker_93097.call(null,G__93083));
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.entity_picker.js.map
