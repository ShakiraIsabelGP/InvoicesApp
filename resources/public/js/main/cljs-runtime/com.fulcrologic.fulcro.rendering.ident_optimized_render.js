goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app,ident,c){
if(cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
var map__81102 = app;
var map__81102__$1 = cljs.core.__destructure_map(map__81102);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81102__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__81103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__81104 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__81103,G__81104) : com.fulcrologic.fulcro.components.computed.call(null,G__81103,G__81104));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,673896344,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__81105 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__81105) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__81105));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-665573591,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__81106 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__81107 = null;
var count__81108 = (0);
var i__81109 = (0);
while(true){
if((i__81109 < count__81108)){
var c = chunk__81107.cljs$core$IIndexed$_nth$arity$2(null,i__81109);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__81188 = seq__81106;
var G__81189 = chunk__81107;
var G__81190 = count__81108;
var G__81191 = (i__81109 + (1));
seq__81106 = G__81188;
chunk__81107 = G__81189;
count__81108 = G__81190;
i__81109 = G__81191;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__81106);
if(temp__5804__auto__){
var seq__81106__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81106__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__81106__$1);
var G__81192 = cljs.core.chunk_rest(seq__81106__$1);
var G__81193 = c__5568__auto__;
var G__81194 = cljs.core.count(c__5568__auto__);
var G__81195 = (0);
seq__81106 = G__81192;
chunk__81107 = G__81193;
count__81108 = G__81194;
i__81109 = G__81195;
continue;
} else {
var c = cljs.core.first(seq__81106__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__81196 = cljs.core.next(seq__81106__$1);
var G__81197 = null;
var G__81198 = (0);
var G__81199 = (0);
seq__81106 = G__81196;
chunk__81107 = G__81197;
count__81108 = G__81198;
i__81109 = G__81199;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,ident);

var map__81111 = app;
var map__81111__$1 = cljs.core.__destructure_map(map__81111);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81111__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__81112 = cljs.core.deref(runtime_atom);
var map__81112__$1 = cljs.core.__destructure_map(map__81112);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81112__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__81113 = indexes;
var map__81113__$1 = cljs.core.__destructure_map(map__81113);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81113__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81113__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81113__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__81114 = cljs.core.seq(classes);
var chunk__81115 = null;
var count__81116 = (0);
var i__81117 = (0);
while(true){
if((i__81117 < count__81116)){
var class$ = chunk__81115.cljs$core$IIndexed$_nth$arity$2(null,i__81117);
var seq__81130_81200 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__81132_81201 = null;
var count__81133_81202 = (0);
var i__81134_81203 = (0);
while(true){
if((i__81134_81203 < count__81133_81202)){
var component_81204 = chunk__81132_81201.cljs$core$IIndexed$_nth$arity$2(null,i__81134_81203);
var component_ident_81205 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_81204) : com.fulcrologic.fulcro.components.get_ident.call(null,component_81204));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_81205,component_81204);


var G__81206 = seq__81130_81200;
var G__81207 = chunk__81132_81201;
var G__81208 = count__81133_81202;
var G__81209 = (i__81134_81203 + (1));
seq__81130_81200 = G__81206;
chunk__81132_81201 = G__81207;
count__81133_81202 = G__81208;
i__81134_81203 = G__81209;
continue;
} else {
var temp__5804__auto___81210 = cljs.core.seq(seq__81130_81200);
if(temp__5804__auto___81210){
var seq__81130_81211__$1 = temp__5804__auto___81210;
if(cljs.core.chunked_seq_QMARK_(seq__81130_81211__$1)){
var c__5568__auto___81212 = cljs.core.chunk_first(seq__81130_81211__$1);
var G__81213 = cljs.core.chunk_rest(seq__81130_81211__$1);
var G__81214 = c__5568__auto___81212;
var G__81215 = cljs.core.count(c__5568__auto___81212);
var G__81216 = (0);
seq__81130_81200 = G__81213;
chunk__81132_81201 = G__81214;
count__81133_81202 = G__81215;
i__81134_81203 = G__81216;
continue;
} else {
var component_81218 = cljs.core.first(seq__81130_81211__$1);
var component_ident_81219 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_81218) : com.fulcrologic.fulcro.components.get_ident.call(null,component_81218));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_81219,component_81218);


var G__81220 = cljs.core.next(seq__81130_81211__$1);
var G__81221 = null;
var G__81222 = (0);
var G__81223 = (0);
seq__81130_81200 = G__81220;
chunk__81132_81201 = G__81221;
count__81133_81202 = G__81222;
i__81134_81203 = G__81223;
continue;
}
} else {
}
}
break;
}


var G__81224 = seq__81114;
var G__81225 = chunk__81115;
var G__81226 = count__81116;
var G__81227 = (i__81117 + (1));
seq__81114 = G__81224;
chunk__81115 = G__81225;
count__81116 = G__81226;
i__81117 = G__81227;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__81114);
if(temp__5804__auto__){
var seq__81114__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81114__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__81114__$1);
var G__81228 = cljs.core.chunk_rest(seq__81114__$1);
var G__81229 = c__5568__auto__;
var G__81230 = cljs.core.count(c__5568__auto__);
var G__81231 = (0);
seq__81114 = G__81228;
chunk__81115 = G__81229;
count__81116 = G__81230;
i__81117 = G__81231;
continue;
} else {
var class$ = cljs.core.first(seq__81114__$1);
var seq__81139_81232 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__81141_81233 = null;
var count__81142_81234 = (0);
var i__81143_81235 = (0);
while(true){
if((i__81143_81235 < count__81142_81234)){
var component_81236 = chunk__81141_81233.cljs$core$IIndexed$_nth$arity$2(null,i__81143_81235);
var component_ident_81237 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_81236) : com.fulcrologic.fulcro.components.get_ident.call(null,component_81236));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_81237,component_81236);


var G__81238 = seq__81139_81232;
var G__81239 = chunk__81141_81233;
var G__81240 = count__81142_81234;
var G__81241 = (i__81143_81235 + (1));
seq__81139_81232 = G__81238;
chunk__81141_81233 = G__81239;
count__81142_81234 = G__81240;
i__81143_81235 = G__81241;
continue;
} else {
var temp__5804__auto___81242__$1 = cljs.core.seq(seq__81139_81232);
if(temp__5804__auto___81242__$1){
var seq__81139_81243__$1 = temp__5804__auto___81242__$1;
if(cljs.core.chunked_seq_QMARK_(seq__81139_81243__$1)){
var c__5568__auto___81244 = cljs.core.chunk_first(seq__81139_81243__$1);
var G__81245 = cljs.core.chunk_rest(seq__81139_81243__$1);
var G__81246 = c__5568__auto___81244;
var G__81247 = cljs.core.count(c__5568__auto___81244);
var G__81248 = (0);
seq__81139_81232 = G__81245;
chunk__81141_81233 = G__81246;
count__81142_81234 = G__81247;
i__81143_81235 = G__81248;
continue;
} else {
var component_81249 = cljs.core.first(seq__81139_81243__$1);
var component_ident_81250 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_81249) : com.fulcrologic.fulcro.components.get_ident.call(null,component_81249));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_81250,component_81249);


var G__81251 = cljs.core.next(seq__81139_81243__$1);
var G__81252 = null;
var G__81253 = (0);
var G__81254 = (0);
seq__81139_81232 = G__81251;
chunk__81141_81233 = G__81252;
count__81142_81234 = G__81253;
i__81143_81235 = G__81254;
continue;
}
} else {
}
}
break;
}


var G__81256 = cljs.core.next(seq__81114__$1);
var G__81257 = null;
var G__81258 = (0);
var G__81259 = (0);
seq__81114 = G__81256;
chunk__81115 = G__81257;
count__81116 = G__81258;
i__81117 = G__81259;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app,property_set){
if(cljs.core.seq(property_set)){
var map__81147 = app;
var map__81147__$1 = cljs.core.__destructure_map(map__81147);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81147__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__81148 = cljs.core.deref(runtime_atom);
var map__81148__$1 = cljs.core.__destructure_map(map__81148);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81148__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__81149 = indexes;
var map__81149__$1 = cljs.core.__destructure_map(map__81149);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81149__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81149__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__81145_SHARP_,p2__81146_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__81145_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__81146_SHARP_) : class__GT_components.call(null,p2__81146_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app){
var map__81154 = app;
var map__81154__$1 = cljs.core.__destructure_map(map__81154);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81154__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81154__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__81155 = cljs.core.deref(runtime_atom);
var map__81155__$1 = cljs.core.__destructure_map(map__81155);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81155__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81155__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81155__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81155__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__81156 = indexes;
var map__81156__$1 = cljs.core.__destructure_map(map__81156);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81156__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81156__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81156__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81156__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__81157 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__81157__$1 = cljs.core.__destructure_map(map__81157);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81157__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81157__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__81158_81261 = cljs.core.seq(limited_to_render);
var chunk__81160_81262 = null;
var count__81161_81263 = (0);
var i__81162_81264 = (0);
while(true){
if((i__81162_81264 < count__81161_81263)){
var c_81265 = chunk__81160_81262.cljs$core$IIndexed$_nth$arity$2(null,i__81162_81264);
var ident_81266 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_81265) : com.fulcrologic.fulcro.components.get_ident.call(null,c_81265));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_81266,c_81265);


var G__81267 = seq__81158_81261;
var G__81268 = chunk__81160_81262;
var G__81269 = count__81161_81263;
var G__81270 = (i__81162_81264 + (1));
seq__81158_81261 = G__81267;
chunk__81160_81262 = G__81268;
count__81161_81263 = G__81269;
i__81162_81264 = G__81270;
continue;
} else {
var temp__5804__auto___81271 = cljs.core.seq(seq__81158_81261);
if(temp__5804__auto___81271){
var seq__81158_81272__$1 = temp__5804__auto___81271;
if(cljs.core.chunked_seq_QMARK_(seq__81158_81272__$1)){
var c__5568__auto___81273 = cljs.core.chunk_first(seq__81158_81272__$1);
var G__81274 = cljs.core.chunk_rest(seq__81158_81272__$1);
var G__81275 = c__5568__auto___81273;
var G__81276 = cljs.core.count(c__5568__auto___81273);
var G__81277 = (0);
seq__81158_81261 = G__81274;
chunk__81160_81262 = G__81275;
count__81161_81263 = G__81276;
i__81162_81264 = G__81277;
continue;
} else {
var c_81278 = cljs.core.first(seq__81158_81272__$1);
var ident_81279 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_81278) : com.fulcrologic.fulcro.components.get_ident.call(null,c_81278));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_81279,c_81278);


var G__81280 = cljs.core.next(seq__81158_81272__$1);
var G__81281 = null;
var G__81282 = (0);
var G__81283 = (0);
seq__81158_81261 = G__81280;
chunk__81160_81262 = G__81281;
count__81161_81263 = G__81282;
i__81162_81264 = G__81283;
continue;
}
} else {
}
}
break;
}

var seq__81167 = cljs.core.seq(limited_idents);
var chunk__81168 = null;
var count__81169 = (0);
var i__81170 = (0);
while(true){
if((i__81170 < count__81169)){
var i = chunk__81168.cljs$core$IIndexed$_nth$arity$2(null,i__81170);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__81284 = seq__81167;
var G__81285 = chunk__81168;
var G__81286 = count__81169;
var G__81287 = (i__81170 + (1));
seq__81167 = G__81284;
chunk__81168 = G__81285;
count__81169 = G__81286;
i__81170 = G__81287;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__81167);
if(temp__5804__auto__){
var seq__81167__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81167__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__81167__$1);
var G__81288 = cljs.core.chunk_rest(seq__81167__$1);
var G__81289 = c__5568__auto__;
var G__81290 = cljs.core.count(c__5568__auto__);
var G__81291 = (0);
seq__81167 = G__81288;
chunk__81168 = G__81289;
count__81169 = G__81290;
i__81170 = G__81291;
continue;
} else {
var i = cljs.core.first(seq__81167__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__81292 = cljs.core.next(seq__81167__$1);
var G__81293 = null;
var G__81294 = (0);
var G__81295 = (0);
seq__81167 = G__81292;
chunk__81168 = G__81293;
count__81169 = G__81294;
i__81170 = G__81295;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__81171 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__81171__$1 = cljs.core.__destructure_map(map__81171);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81171__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81171__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__81173_81299 = cljs.core.seq(all_idents);
var chunk__81174_81300 = null;
var count__81175_81301 = (0);
var i__81176_81302 = (0);
while(true){
if((i__81176_81302 < count__81175_81301)){
var i_81303 = chunk__81174_81300.cljs$core$IIndexed$_nth$arity$2(null,i__81176_81302);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_81303);


var G__81304 = seq__81173_81299;
var G__81305 = chunk__81174_81300;
var G__81306 = count__81175_81301;
var G__81307 = (i__81176_81302 + (1));
seq__81173_81299 = G__81304;
chunk__81174_81300 = G__81305;
count__81175_81301 = G__81306;
i__81176_81302 = G__81307;
continue;
} else {
var temp__5804__auto___81308 = cljs.core.seq(seq__81173_81299);
if(temp__5804__auto___81308){
var seq__81173_81309__$1 = temp__5804__auto___81308;
if(cljs.core.chunked_seq_QMARK_(seq__81173_81309__$1)){
var c__5568__auto___81310 = cljs.core.chunk_first(seq__81173_81309__$1);
var G__81311 = cljs.core.chunk_rest(seq__81173_81309__$1);
var G__81312 = c__5568__auto___81310;
var G__81313 = cljs.core.count(c__5568__auto___81310);
var G__81314 = (0);
seq__81173_81299 = G__81311;
chunk__81174_81300 = G__81312;
count__81175_81301 = G__81313;
i__81176_81302 = G__81314;
continue;
} else {
var i_81315 = cljs.core.first(seq__81173_81309__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_81315);


var G__81316 = cljs.core.next(seq__81173_81309__$1);
var G__81317 = null;
var G__81318 = (0);
var G__81319 = (0);
seq__81173_81299 = G__81316;
chunk__81174_81300 = G__81317;
count__81175_81301 = G__81318;
i__81176_81302 = G__81319;
continue;
}
} else {
}
}
break;
}

var seq__81178 = cljs.core.seq(extra_to_force);
var chunk__81179 = null;
var count__81180 = (0);
var i__81181 = (0);
while(true){
if((i__81181 < count__81180)){
var c = chunk__81179.cljs$core$IIndexed$_nth$arity$2(null,i__81181);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__81320 = seq__81178;
var G__81321 = chunk__81179;
var G__81322 = count__81180;
var G__81323 = (i__81181 + (1));
seq__81178 = G__81320;
chunk__81179 = G__81321;
count__81180 = G__81322;
i__81181 = G__81323;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__81178);
if(temp__5804__auto__){
var seq__81178__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81178__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__81178__$1);
var G__81324 = cljs.core.chunk_rest(seq__81178__$1);
var G__81325 = c__5568__auto__;
var G__81326 = cljs.core.count(c__5568__auto__);
var G__81327 = (0);
seq__81178 = G__81324;
chunk__81179 = G__81325;
count__81180 = G__81326;
i__81181 = G__81327;
continue;
} else {
var c = cljs.core.first(seq__81178__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__81328 = cljs.core.next(seq__81178__$1);
var G__81329 = null;
var G__81330 = (0);
var G__81331 = (0);
seq__81178 = G__81328;
chunk__81179 = G__81329;
count__81180 = G__81330;
i__81181 = G__81331;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * DEPRECATED: Careful use of hooks/use-component will give a much more optimized experience, and async rendering in
 * React 18 may break with this renderer. Use at your own risk with React 18+.
 * 
 *   The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__81184 = arguments.length;
switch (G__81184) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__81185){
var map__81186 = p__81185;
var map__81186__$1 = cljs.core.__destructure_map(map__81186);
var options = map__81186__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81186__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81186__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app);
}catch (e81187){var e = e81187;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1841632876,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
