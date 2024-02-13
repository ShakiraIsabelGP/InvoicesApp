goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing');

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remove_send_BANG_(p__74194,remote,txn_id,ele_idx){
var map__74195 = p__74194;
var map__74195__$1 = cljs.core.__destructure_map(map__74195);
var app = map__74195__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74195__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__74196 = cljs.core.deref(runtime_atom);
var map__74196__$1 = cljs.core.__destructure_map(map__74196);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74196__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var old_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue = cljs.core.filterv((function (p__74197){
var map__74198 = p__74197;
var map__74198__$1 = cljs.core.__destructure_map(map__74198);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74198__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74198__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remove_send_BANG_;
/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$app__GT_remotes(app){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517)], null);

return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$app__GT_remote_names(app){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$extract_parallel(sends){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__74199){
return cljs.core.vector_QMARK_(G__74199);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null))], null);

var parallel_QMARK_ = (function (p__74201){
var map__74202 = p__74201;
var map__74202__$1 = cljs.core.__destructure_map(map__74202);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__74200 = cljs.core.group_by(parallel_QMARK_,sends);
var map__74200__$1 = cljs.core.__destructure_map(map__74200);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74200__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74200__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$every_ast_QMARK_(ast_node_or_tree,test){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree))){
return cljs.core.every_QMARK_(test,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree));
} else {
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(ast_node_or_tree) : test.call(null,ast_node_or_tree));
}
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$mutation_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__74207_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__74207_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$query_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__74210_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__74210_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$sort_queue_writes_before_reads(send_queue){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null);

var vec__74217 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74217,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74217,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__74220 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,id){
var vec__74222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__74223 = cljs.core.seq(vec__74222);
var first__74224 = cljs.core.first(seq__74223);
var seq__74223__$1 = cljs.core.next(seq__74223);
var map__74225 = first__74224;
var map__74225__$1 = cljs.core.__destructure_map(map__74225);
var n = map__74225__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74225__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__74223__$1;
var cluster = vec__74222;
if((ast == null)){
return result;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.query_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.into,cluster);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.into,cluster);
} else {
return result;

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__74220__$1 = cljs.core.__destructure_map(map__74220);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74220__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74220__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$top_keys(p__74248){
var map__74249 = p__74248;
var map__74249__$1 = cljs.core.__destructure_map(map__74249);
var ast = map__74249__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74249__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74249__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__74250){
return cljs.core.coll_QMARK_(G__74250);
})], null),null)], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$create_combined_node(app,remote_name,p__74251){
var vec__74252 = p__74251;
var leader = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74252,(0),null);
var to_send = vec__74252;
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__74255){
var map__74256 = p__74255;
var map__74256__$1 = cljs.core.__destructure_map(map__74256);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74256__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
}),cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(leader);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (combined_result){
var seq__74257 = cljs.core.seq(to_send);
var chunk__74258 = null;
var count__74259 = (0);
var i__74260 = (0);
while(true){
if((i__74260 < count__74259)){
var map__74263 = chunk__74258.cljs$core$IIndexed$_nth$arity$2(null,i__74260);
var map__74263__$1 = cljs.core.__destructure_map(map__74263);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74263__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__75468 = seq__74257;
var G__75469 = chunk__74258;
var G__75470 = count__74259;
var G__75471 = (i__74260 + (1));
seq__74257 = G__75468;
chunk__74258 = G__75469;
count__74259 = G__75470;
i__74260 = G__75471;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74257);
if(temp__5804__auto__){
var seq__74257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74257__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74257__$1);
var G__75472 = cljs.core.chunk_rest(seq__74257__$1);
var G__75473 = c__5568__auto__;
var G__75474 = cljs.core.count(c__5568__auto__);
var G__75475 = (0);
seq__74257 = G__75472;
chunk__74258 = G__75473;
count__74259 = G__75474;
i__74260 = G__75475;
continue;
} else {
var map__74265 = cljs.core.first(seq__74257__$1);
var map__74265__$1 = cljs.core.__destructure_map(map__74265);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74265__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__75476 = cljs.core.next(seq__74257__$1);
var G__75477 = null;
var G__75478 = (0);
var G__75479 = (0);
seq__74257 = G__75476;
chunk__74258 = G__75477;
count__74259 = G__75478;
i__74260 = G__75479;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__74266){
var map__74267 = p__74266;
var map__74267__$1 = cljs.core.__destructure_map(map__74267);
var combined_result = map__74267__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74267__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app,remote_name,combined_node_id,combined_node_idx) : remove_BANG_.call(null,app,remote_name,combined_node_id,combined_node_idx));

var seq__74268 = cljs.core.seq(to_send);
var chunk__74269 = null;
var count__74270 = (0);
var i__74271 = (0);
while(true){
if((i__74271 < count__74270)){
var map__74280 = chunk__74269.cljs$core$IIndexed$_nth$arity$2(null,i__74271);
var map__74280__$1 = cljs.core.__destructure_map(map__74280);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74280__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74280__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_75480 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_75481 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_75480);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var map__74285_75482 = result_75481;
var map__74285_75483__$1 = cljs.core.__destructure_map(map__74285_75482);
var status_code_75484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74285_75483__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_75485__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74285_75483__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_75484)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app,remote_name,combined_node_id,body_75485__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_75484));
}
}catch (e74284){var e_75488 = e74284;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_75481) : result_handler.call(null,result_75481));


var G__75490 = seq__74268;
var G__75491 = chunk__74269;
var G__75492 = count__74270;
var G__75493 = (i__74271 + (1));
seq__74268 = G__75490;
chunk__74269 = G__75491;
count__74270 = G__75492;
i__74271 = G__75493;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74268);
if(temp__5804__auto__){
var seq__74268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74268__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__74268__$1);
var G__75494 = cljs.core.chunk_rest(seq__74268__$1);
var G__75495 = c__5568__auto__;
var G__75496 = cljs.core.count(c__5568__auto__);
var G__75497 = (0);
seq__74268 = G__75494;
chunk__74269 = G__75495;
count__74270 = G__75496;
i__74271 = G__75497;
continue;
} else {
var map__74289 = cljs.core.first(seq__74268__$1);
var map__74289__$1 = cljs.core.__destructure_map(map__74289);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74289__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74289__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_75498 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_75499 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_75498);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var map__74294_75501 = result_75499;
var map__74294_75502__$1 = cljs.core.__destructure_map(map__74294_75501);
var status_code_75503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74294_75502__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_75504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74294_75502__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_75503)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app,remote_name,combined_node_id,body_75504__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_75503));
}
}catch (e74293){var e_75507 = e74293;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_75499) : result_handler.call(null,result_75499));


var G__75509 = cljs.core.next(seq__74268__$1);
var G__75510 = null;
var G__75511 = (0);
var G__75512 = (0);
seq__74268 = G__75509;
chunk__74269 = G__75510;
count__74270 = G__75511;
i__74271 = G__75512;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
return combined_node;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$node_abort_id(n){
var or__5045__auto__ = (function (){var G__74300 = n;
var G__74300__$1 = (((G__74300 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__74300));
if((G__74300__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(G__74300__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__74302 = n;
var G__74302__$1 = (((G__74302 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__74302));
if((G__74302__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(G__74302__$1);
}
}
});
/**
 * Returns true if the given transaction node represents one or more mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$mutation_node_QMARK_(p__74315){
var map__74316 = p__74315;
var map__74316__$1 = cljs.core.__destructure_map(map__74316);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74316__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return ((cljs.core.map_QMARK_(ast)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast))) || (cljs.core.boolean$(cljs.core.some((function (p1__74313_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__74313_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)))))));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","batchable?","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/batchable?",-1251687702,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"to-send","to-send",726436218),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)),new cljs.core.Keyword(null,"leader","leader",1888892947),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"to-send","to-send",726436218),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)),new cljs.core.Keyword(null,"leader","leader",1888892947),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-send","to-send",726436218),new cljs.core.Keyword(null,"leader","leader",1888892947)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__74321){
return cljs.core.coll_QMARK_(G__74321);
})], null),null),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"to-send","to-send",726436218),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)),new cljs.core.Keyword(null,"leader","leader",1888892947),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));


/**
 * Returns true when ALL of the ::txn/send-node entries in `to-send` can be batched into an existing batch.
 * @type {function(!cljs.core.ICollection, *): !boolean}
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batchable_QMARK_(to_send,leader){
var map__74325 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"to-send","to-send",726436218),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)),new cljs.core.Keyword(null,"leader","leader",1888892947),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-send","to-send",726436218),new cljs.core.Keyword(null,"leader","leader",1888892947)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__74331){
return cljs.core.coll_QMARK_(G__74331);
})], null),null),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"to-send","to-send",726436218),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)),new cljs.core.Keyword(null,"leader","leader",1888892947),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null);
var map__74325__$1 = cljs.core.__destructure_map(map__74325);
var retspec74318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74325__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec74317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74325__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec74317)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/tx_processing/batched_processing.cljc:154 batchable?'s",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec74317,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_send,leader], null));
} else {
}

var f74320 = (function (to_send__$1,leader__$1){
var abort_id = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(leader__$1);
return cljs.core.boolean$(((cljs.core.seq(to_send__$1)) && (((cljs.core.every_QMARK_((function (n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(abort_id,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(n));
}),to_send__$1)) && (cljs.core.not(cljs.core.some(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_,to_send__$1)))))));
});
var ret74319 = f74320(to_send,leader);
if(cljs.core.truth_(retspec74318)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/tx_processing/batched_processing.cljc:154 batchable?'s",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec74318,ret74319);
} else {
}

return ret74319;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batch_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batch_sends(app,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__74339){
return cljs.core.map_QMARK_(G__74339);
}),(function (G__74339){
return cljs.core.contains_QMARK_(G__74339,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__74339){
return ((cljs.core.map_QMARK_(G__74339)) && (cljs.core.contains_QMARK_(G__74339,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

var prime_leader = cljs.core.first(send_queue);
var map__74369 = cljs.core.group_by((function (n){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prime_leader], null),n);
}),send_queue);
var map__74369__$1 = cljs.core.__destructure_map(map__74369);
var prime_candidates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74369__$1,true);
var to_defer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74369__$1,false);
var map__74370 = (function (){var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remainder","remainder",1046186872),to_defer], null);
var queue = prime_candidates;
while(true){
var leader = cljs.core.first(queue);
var vec__74374 = cljs.core.split_with(((function (result,queue,leader,prime_leader,map__74369,map__74369__$1,prime_candidates,to_defer){
return (function (p1__74334_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(leader),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__74334_SHARP_));
});})(result,queue,leader,prime_leader,map__74369,map__74369__$1,prime_candidates,to_defer))
,queue);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74374,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74374,(1),null);
var combined_node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node(app,remote_name,to_send);
var new_result = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.conj,combined_node);
if(cljs.core.seq(remainder)){
var G__75532 = new_result;
var G__75533 = remainder;
result = G__75532;
queue = G__75533;
continue;
} else {
return new_result;
}
break;
}
})();
var map__74370__$1 = cljs.core.__destructure_map(map__74370);
var batch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74370__$1,new cljs.core.Keyword(null,"batch","batch",-662921200));
var remainder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74370__$1,new cljs.core.Keyword(null,"remainder","remainder",1046186872));
var batch_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var batch_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var batch_node = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),batch_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),batch_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","raw-body","com.fulcrologic.fulcro.algorithms.tx-processing/raw-body",-819595969),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__74381){
var map__74383 = p__74381;
var map__74383__$1 = cljs.core.__destructure_map(map__74383);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74383__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
}),batch)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),(function (){var or__5045__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(prime_leader);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299),batch,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (combined_result){
var G__74388 = cljs.core.first(batch);
var map__74389 = G__74388;
var map__74389__$1 = cljs.core.__destructure_map(map__74389);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74389__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(combined_result);
var more_result = cljs.core.next(combined_result);
var G__74388__$1 = G__74388;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__74392 = G__74388__$1;
var map__74392__$1 = cljs.core.__destructure_map(map__74392);
var update_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74392__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
if(cljs.core.truth_(update_handler__$1)){
(update_handler__$1.cljs$core$IFn$_invoke$arity$1 ? update_handler__$1.cljs$core$IFn$_invoke$arity$1(result__$2) : update_handler__$1.call(null,result__$2));
} else {
}

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__75536 = cljs.core.first(more_batch__$2);
var G__75537 = cljs.core.next(more_batch__$2);
var G__75538 = cljs.core.first(more_result__$2);
var G__75539 = cljs.core.next(more_result__$2);
G__74388__$1 = G__75536;
more_batch__$1 = G__75537;
result__$1 = G__75538;
more_result__$1 = G__75539;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__74399){
var map__74402 = p__74399;
var map__74402__$1 = cljs.core.__destructure_map(map__74402);
var batch_result = map__74402__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74402__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app,remote_name,batch_node_id,batch_node_idx) : remove_BANG_.call(null,app,remote_name,batch_node_id,batch_node_idx));

var G__74414 = cljs.core.first(batch);
var map__74421 = G__74414;
var map__74421__$1 = cljs.core.__destructure_map(map__74421);
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74421__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(body);
var more_result = cljs.core.next(body);
var G__74414__$1 = G__74414;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__74432 = G__74414__$1;
var map__74432__$1 = cljs.core.__destructure_map(map__74432);
var result_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74432__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
var G__74433_75540 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(batch_result,new cljs.core.Keyword(null,"body","body",-2049205669),result__$2);
(result_handler__$1.cljs$core$IFn$_invoke$arity$1 ? result_handler__$1.cljs$core$IFn$_invoke$arity$1(G__74433_75540) : result_handler__$1.call(null,G__74433_75540));

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__75541 = cljs.core.first(more_batch__$2);
var G__75542 = cljs.core.next(more_batch__$2);
var G__75543 = cljs.core.first(more_result__$2);
var G__75544 = cljs.core.next(more_result__$2);
G__74414__$1 = G__75541;
more_batch__$1 = G__75542;
result__$1 = G__75543;
more_result__$1 = G__75544;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if((cljs.core.count(batch) > (1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,212,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Batched:",cljs.core.count(batch)], null);
}),null)),null,223136362,null);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),batch_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [batch_node], null),remainder)], null);
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$combine_sends(app,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__74454){
return cljs.core.map_QMARK_(G__74454);
}),(function (G__74454){
return cljs.core.contains_QMARK_(G__74454,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__74454){
return ((cljs.core.map_QMARK_(G__74454)) && (cljs.core.contains_QMARK_(G__74454,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

if(cljs.core.seq(send_queue)){
var map__74458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app),remote_name);
var map__74458__$1 = cljs.core.__destructure_map(map__74458);
var supports_raw_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74458__$1,new cljs.core.Keyword(null,"supports-raw-body?","supports-raw-body?",132893061));
var vec__74459 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var _active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74459,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74459,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__74462 = cljs.core.split_with((function (p1__74453_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__74453_SHARP_));
}),send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74462,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74462,(1),null);
var leading_mutation_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_(cljs.core.first(to_send));
var batched_reads_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692),remote_name], null),false);
var batch_QMARK_ = (function (){var and__5043__auto__ = batched_reads_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return supports_raw_body_QMARK_;
} else {
return and__5043__auto__;
}
})();
if(((leading_mutation_QMARK_) || (cljs.core.not(batch_QMARK_)))){
if(cljs.core.seq(to_send)){
var combined_node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node(app,remote_name,to_send);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),combined_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined_node], null),to_defer)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),send_queue__$2], null);
}
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batch_sends(app,remote_name,send_queue__$2);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.PersistentVector.EMPTY], null);
}
});
/**
 * Process the send against the user-defined remote. Catches exceptions and calls error handler with status code 500
 *   if the remote itself throws exceptions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$net_send_BANG_(app,send_node,remote_name){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var b2__2953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app),remote_name);
if(cljs.core.truth_(b2__2953__auto__)){
var remote = b2__2953__auto__;
var b2__2953__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__2953__auto____$1)){
var transmit_BANG_ = b2__2953__auto____$1;
try{if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var temp__5802__auto___75546 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5802__auto___75546)){
var batch_75547 = temp__5802__auto___75546;
var seq__74592_75548 = cljs.core.seq(batch_75547);
var chunk__74593_75549 = null;
var count__74594_75550 = (0);
var i__74595_75551 = (0);
while(true){
if((i__74595_75551 < count__74594_75550)){
var element_node_75552 = chunk__74593_75549.cljs$core$IIndexed$_nth$arity$2(null,i__74595_75551);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_75553 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_75552));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_75552),tx_75553);
}catch (e74661){var e_75554 = e74661;
}} else {
}


var G__75555 = seq__74592_75548;
var G__75556 = chunk__74593_75549;
var G__75557 = count__74594_75550;
var G__75558 = (i__74595_75551 + (1));
seq__74592_75548 = G__75555;
chunk__74593_75549 = G__75556;
count__74594_75550 = G__75557;
i__74595_75551 = G__75558;
continue;
} else {
var temp__5804__auto___75559 = cljs.core.seq(seq__74592_75548);
if(temp__5804__auto___75559){
var seq__74592_75560__$1 = temp__5804__auto___75559;
if(cljs.core.chunked_seq_QMARK_(seq__74592_75560__$1)){
var c__5568__auto___75561 = cljs.core.chunk_first(seq__74592_75560__$1);
var G__75562 = cljs.core.chunk_rest(seq__74592_75560__$1);
var G__75563 = c__5568__auto___75561;
var G__75564 = cljs.core.count(c__5568__auto___75561);
var G__75565 = (0);
seq__74592_75548 = G__75562;
chunk__74593_75549 = G__75563;
count__74594_75550 = G__75564;
i__74595_75551 = G__75565;
continue;
} else {
var element_node_75566 = cljs.core.first(seq__74592_75560__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_75567 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_75566));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_75566),tx_75567);
}catch (e74738){var e_75568 = e74738;
}} else {
}


var G__75569 = cljs.core.next(seq__74592_75560__$1);
var G__75570 = null;
var G__75571 = (0);
var G__75572 = (0);
seq__74592_75548 = G__75569;
chunk__74593_75549 = G__75570;
count__74594_75550 = G__75571;
i__74595_75551 = G__75572;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_75573 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),tx_75573);
}catch (e74750){var e_75574 = e74750;
}} else {
}
}
}catch (e74591){var e_75575 = e74591;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node) : transmit_BANG_.call(null,remote,send_node));
}catch (e74475){var e = e74475;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,256,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception for tx:",com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node)),"See https://book.fulcrologic.com/#err-txp-send-exc"], null);
}),null)),null,1674375474,null);

try{if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var temp__5802__auto___75585 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5802__auto___75585)){
var batch_75586 = temp__5802__auto___75585;
var seq__74495_75587 = cljs.core.seq(batch_75586);
var chunk__74496_75588 = null;
var count__74497_75589 = (0);
var i__74498_75590 = (0);
while(true){
if((i__74498_75590 < count__74497_75589)){
var element_node_75591 = chunk__74496_75588.cljs$core$IIndexed$_nth$arity$2(null,i__74498_75590);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_75591),"Transmit Exception");


var G__75592 = seq__74495_75587;
var G__75593 = chunk__74496_75588;
var G__75594 = count__74497_75589;
var G__75595 = (i__74498_75590 + (1));
seq__74495_75587 = G__75592;
chunk__74496_75588 = G__75593;
count__74497_75589 = G__75594;
i__74498_75590 = G__75595;
continue;
} else {
var temp__5804__auto___75596 = cljs.core.seq(seq__74495_75587);
if(temp__5804__auto___75596){
var seq__74495_75597__$1 = temp__5804__auto___75596;
if(cljs.core.chunked_seq_QMARK_(seq__74495_75597__$1)){
var c__5568__auto___75598 = cljs.core.chunk_first(seq__74495_75597__$1);
var G__75599 = cljs.core.chunk_rest(seq__74495_75597__$1);
var G__75600 = c__5568__auto___75598;
var G__75601 = cljs.core.count(c__5568__auto___75598);
var G__75602 = (0);
seq__74495_75587 = G__75599;
chunk__74496_75588 = G__75600;
count__74497_75589 = G__75601;
i__74498_75590 = G__75602;
continue;
} else {
var element_node_75603 = cljs.core.first(seq__74495_75597__$1);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_75603),"Transmit Exception");


var G__75604 = cljs.core.next(seq__74495_75597__$1);
var G__75605 = null;
var G__75606 = (0);
var G__75607 = (0);
seq__74495_75587 = G__75604;
chunk__74496_75588 = G__75605;
count__74497_75589 = G__75606;
i__74498_75590 = G__75607;
continue;
}
} else {
}
}
break;
}
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),"Transmit Exception");
}
}catch (e74485){var e_75608__$1 = e74485;
}} else {
}

var G__74590 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__74589 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__74589.cljs$core$IFn$_invoke$arity$1 ? fexpr__74589.cljs$core$IFn$_invoke$arity$1(G__74590) : fexpr__74589.call(null,G__74590));
}catch (e74477){var e__$1 = e74477;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,266,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
}),null)),null,307550672,null);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
}),null)),null,899150638,null);

var G__74772 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__74771 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__74771.cljs$core$IFn$_invoke$arity$1 ? fexpr__74771.cljs$core$IFn$_invoke$arity$1(G__74772) : fexpr__74771.call(null,G__74772));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
}),null)),null,1110894049,null);

var G__74783 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__74782 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__74782.cljs$core$IFn$_invoke$arity$1 ? fexpr__74782.cljs$core$IFn$_invoke$arity$1(G__74783) : fexpr__74782.call(null,G__74783));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_send_queues_BANG_(p__74805){
var map__74810 = p__74805;
var map__74810__$1 = cljs.core.__destructure_map(map__74810);
var app = map__74810__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74810__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807)], null);

var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__74827 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74827,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74827,(1),null);
var front = cljs.core.first(serial);
var seq__74864_75613 = cljs.core.seq(p);
var chunk__74865_75614 = null;
var count__74866_75615 = (0);
var i__74867_75616 = (0);
while(true){
if((i__74867_75616 < count__74866_75615)){
var item_75617 = chunk__74865_75614.cljs$core$IIndexed$_nth$arity$2(null,i__74867_75616);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__74864_75613,chunk__74865_75614,count__74866_75615,i__74867_75616,item_75617,send_queue,vec__74827,p,serial,front,send_queues,remote_names,operations,map__74810,map__74810__$1,app,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app,item_75617,remote);
});})(seq__74864_75613,chunk__74865_75614,count__74866_75615,i__74867_75616,item_75617,send_queue,vec__74827,p,serial,front,send_queues,remote_names,operations,map__74810,map__74810__$1,app,runtime_atom))
);


var G__75619 = seq__74864_75613;
var G__75620 = chunk__74865_75614;
var G__75621 = count__74866_75615;
var G__75622 = (i__74867_75616 + (1));
seq__74864_75613 = G__75619;
chunk__74865_75614 = G__75620;
count__74866_75615 = G__75621;
i__74867_75616 = G__75622;
continue;
} else {
var temp__5804__auto___75624 = cljs.core.seq(seq__74864_75613);
if(temp__5804__auto___75624){
var seq__74864_75625__$1 = temp__5804__auto___75624;
if(cljs.core.chunked_seq_QMARK_(seq__74864_75625__$1)){
var c__5568__auto___75626 = cljs.core.chunk_first(seq__74864_75625__$1);
var G__75627 = cljs.core.chunk_rest(seq__74864_75625__$1);
var G__75628 = c__5568__auto___75626;
var G__75629 = cljs.core.count(c__5568__auto___75626);
var G__75630 = (0);
seq__74864_75613 = G__75627;
chunk__74865_75614 = G__75628;
count__74866_75615 = G__75629;
i__74867_75616 = G__75630;
continue;
} else {
var item_75631 = cljs.core.first(seq__74864_75625__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__74864_75613,chunk__74865_75614,count__74866_75615,i__74867_75616,item_75631,seq__74864_75625__$1,temp__5804__auto___75624,send_queue,vec__74827,p,serial,front,send_queues,remote_names,operations,map__74810,map__74810__$1,app,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app,item_75631,remote);
});})(seq__74864_75613,chunk__74865_75614,count__74866_75615,i__74867_75616,item_75631,seq__74864_75625__$1,temp__5804__auto___75624,send_queue,vec__74827,p,serial,front,send_queues,remote_names,operations,map__74810,map__74810__$1,app,runtime_atom))
);


var G__75634 = cljs.core.next(seq__74864_75625__$1);
var G__75635 = null;
var G__75636 = (0);
var G__75637 = (0);
seq__74864_75613 = G__75634;
chunk__74865_75614 = G__75635;
count__74866_75615 = G__75636;
i__74867_75616 = G__75637;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,serial);
} else {
var map__74868 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends(app,remote,serial);
var map__74868__$1 = cljs.core.__destructure_map(map__74868);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,(function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app,send_node,remote);
}));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

var seq__74869_75638 = cljs.core.seq(cljs.core.deref(operations));
var chunk__74870_75639 = null;
var count__74871_75640 = (0);
var i__74872_75641 = (0);
while(true){
if((i__74872_75641 < count__74871_75640)){
var op_75642 = chunk__74870_75639.cljs$core$IIndexed$_nth$arity$2(null,i__74872_75641);
(op_75642.cljs$core$IFn$_invoke$arity$0 ? op_75642.cljs$core$IFn$_invoke$arity$0() : op_75642.call(null));


var G__75643 = seq__74869_75638;
var G__75644 = chunk__74870_75639;
var G__75645 = count__74871_75640;
var G__75646 = (i__74872_75641 + (1));
seq__74869_75638 = G__75643;
chunk__74870_75639 = G__75644;
count__74871_75640 = G__75645;
i__74872_75641 = G__75646;
continue;
} else {
var temp__5804__auto___75647 = cljs.core.seq(seq__74869_75638);
if(temp__5804__auto___75647){
var seq__74869_75648__$1 = temp__5804__auto___75647;
if(cljs.core.chunked_seq_QMARK_(seq__74869_75648__$1)){
var c__5568__auto___75649 = cljs.core.chunk_first(seq__74869_75648__$1);
var G__75650 = cljs.core.chunk_rest(seq__74869_75648__$1);
var G__75651 = c__5568__auto___75649;
var G__75652 = cljs.core.count(c__5568__auto___75649);
var G__75653 = (0);
seq__74869_75638 = G__75650;
chunk__74870_75639 = G__75651;
count__74871_75640 = G__75652;
i__74872_75641 = G__75653;
continue;
} else {
var op_75654 = cljs.core.first(seq__74869_75648__$1);
(op_75654.cljs$core$IFn$_invoke$arity$0 ? op_75654.cljs$core$IFn$_invoke$arity$0() : op_75654.call(null));


var G__75655 = cljs.core.next(seq__74869_75648__$1);
var G__75656 = null;
var G__75657 = (0);
var G__75658 = (0);
seq__74869_75638 = G__75655;
chunk__74870_75639 = G__75656;
count__74871_75640 = G__75657;
i__74872_75641 = G__75658;
continue;
}
} else {
}
}
break;
}

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$tx_node(var_args){
var G__74886 = arguments.length;
switch (G__74886) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
})),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
}))),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$build_env(var_args){
var G__74888 = arguments.length;
switch (G__74888) {
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app,p__74889,addl){
var map__74890 = p__74889;
var map__74890__$1 = cljs.core.__destructure_map(map__74890);
var tx_node = map__74890__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74890__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

var map__74891 = options;
var map__74891__$1 = cljs.core.__destructure_map(map__74891);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74891__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74891__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__74892 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"app","app",-560961707),app], null)], 0));
var G__74892__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74892,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__74892);
var G__74892__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74892__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__74892__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74892__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__74892__$2;
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app,p__74915){
var map__74916 = p__74915;
var map__74916__$1 = cljs.core.__destructure_map(map__74916);
var tx_node = map__74916__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74916__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app,tx_node,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$lang$maxFixedArity = 3);

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements(tx_node,env,dispatch_fn){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e74921){var e = e74921;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,352,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch for mutation",(function (){var G__74922 = env__$1;
var G__74922__$1 = (((G__74922 == null))?null:new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(G__74922));
if((G__74922__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(G__74922__$1);
}
})(),"failed with an exception. No dispatch generated. See https://book.fulcrologic.com/#err-txp-mut-dispatch-exc"], null);
}),null)),null,1131323316,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_dispatch_STAR_(p__74926){
var map__74927 = p__74926;
var map__74927__$1 = cljs.core.__destructure_map(map__74927);
var ele = map__74927__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74927__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__74928 = original_ast_node;
var map__74928__$1 = cljs.core.__destructure_map(map__74928);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74928__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__74929 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__74929,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__74929;
}
});
var dispatch_all = (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.application_rendered_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$application_rendered_BANG_(p__74931,options){
var map__74932 = p__74931;
var map__74932__$1 = cljs.core.__destructure_map(map__74932);
var app = map__74932__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74932__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.some((function (p1__74930_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"after-render?","after-render?",595994030).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(p1__74930_SHARP_)));
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app,(0)) : com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.call(null,app,(0)));
} else {
return null;
}
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$activate_submissions_BANG_(p__74950){
var map__74951 = p__74950;
var map__74951__$1 = cljs.core.__destructure_map(map__74951);
var app = map__74951__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74951__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__74952 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var map__74952__$1 = cljs.core.__destructure_map(map__74952);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74952__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74952__$1,false);
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74948_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(p1__74948_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app,p1__74948_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),(function (p1__74949_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__74949_SHARP_,dispatched_nodes);
})),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.vec(blocked));
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app) : com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.call(null,app));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_activation_BANG_(var_args){
var G__74954 = arguments.length;
switch (G__74954) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_queue_processing_BANG_(var_args){
var G__74957 = arguments.length;
switch (G__74957) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_sends_BANG_(var_args){
var G__74960 = arguments.length;
switch (G__74960) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$advance_actions_BANG_(app,p__74969){
var map__74971 = p__74969;
var map__74971__$1 = cljs.core.__destructure_map(map__74971);
var node = map__74971__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74971__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74971__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__74974,element){
var map__74975 = p__74974;
var map__74975__$1 = cljs.core.__destructure_map(map__74975);
var acc = map__74975__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74975__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74975__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__74977 = element;
var map__74977__$1 = cljs.core.__destructure_map(map__74977);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74977__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74977__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74977__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74977__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__74978 = dispatch;
var map__74978__$1 = cljs.core.__destructure_map(map__74978);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74978__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__5043__auto__ = action;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var or__5045__auto__ = done_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})());
} else {
return and__5043__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__5043__auto__ = (function (){var or__5045__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__5043__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app);
var state_before = cljs.core.deref(state);
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
} else {
}
}catch (e74997){var e_75664 = e74997;
var mutation_symbol_75665 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,445,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_75664,"The `action` section of mutation",mutation_symbol_75665,"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-action-exc"], null);
}),null)),null,-1668470986,null);
}
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_75666 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_75666], null));
}catch (e74998){var e_75667 = e74998;
}} else {
}
} else {
}

return new_acc;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$run_actions_BANG_(app,p__74999){
var map__75000 = p__74999;
var map__75000__$1 = cljs.core.__destructure_map(map__75000);
var node = map__75000__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75000__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75000__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_elements,element){
var map__75002 = element;
var map__75002__$1 = cljs.core.__destructure_map(map__75002);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75002__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75002__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75002__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75002__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__75003 = dispatch;
var map__75003__$1 = cljs.core.__destructure_map(map__75003);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75003__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__5043__auto__ = action;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024))));
} else {
return and__5043__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app);
var state_before = cljs.core.deref(state);
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
}catch (e75006){var e_75668 = e75006;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,478,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_75668,"The `action` section threw an exception for mutation: ",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-mut-action-exc2"], null);
}),null)),null,-758973415,null);
}
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var tx_75669 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_75669], null));
}catch (e75009){var e_75670 = e75009;
}} else {
}
} else {
}

return new_acc;
}),cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$fully_complete_QMARK_(app,p__75014){
var map__75016 = p__75014;
var map__75016__$1 = cljs.core.__destructure_map(map__75016);
var tx_node = map__75016__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75016__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var element_complete_QMARK_ = (function (p__75018){
var map__75020 = p__75018;
var map__75020__$1 = cljs.core.__destructure_map(map__75020);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75020__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75020__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::txn/results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$record_result_BANG_(var_args){
var G__75027 = arguments.length;
switch (G__75027) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__75031,txn_id,ele_idx,remote,result,result_key){
var map__75032 = p__75031;
var map__75032__$1 = cljs.core.__destructure_map(map__75032);
var app = map__75032__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75032__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__75034){
var map__75036 = p__75034;
var map__75036__$1 = cljs.core.__destructure_map(map__75036);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75036__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,516,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-txp-res-lacks-valid-node"], null);
}),null)),null,150069975,null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app,txn_id,ele_idx,remote,result){
new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Add the ::txn/desired-ast-nodes and ::txn/transmitted-ast-nodes for `remote` to the tx-element based on the dispatch for the `remote` of the original mutation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$compute_desired_ast_node(app,remote,tx_node,tx_element){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

var map__75043 = tx_element;
var map__75043__$1 = cljs.core.__destructure_map(map__75043);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75043__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75043__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75043__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var desired_ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,537,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire,"See https://book.fulcrologic.com/#err-txp-remote-dispatch-invalid-res"], null);
}),null)),null,1561016519,null);

return remote_desire;
})()

))));
var query_transform = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var ast = (cljs.core.truth_((function (){var and__5043__auto__ = desired_ast;
if(cljs.core.truth_(and__5043__auto__)){
return query_transform;
} else {
return and__5043__auto__;
}
})())?(query_transform.cljs$core$IFn$_invoke$arity$1 ? query_transform.cljs$core$IFn$_invoke$arity$1(desired_ast) : query_transform.call(null,desired_ast)):desired_ast);
var G__75062 = tx_element;
var G__75062__$1 = (cljs.core.truth_(desired_ast)?cljs.core.assoc_in(G__75062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425),remote], null),desired_ast):G__75062);
if(cljs.core.truth_(ast)){
return cljs.core.assoc_in(G__75062__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null),ast);
} else {
return G__75062__$1;
}
});
/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG_(p__75063,p__75064,ele_idx,remote){
var map__75065 = p__75063;
var map__75065__$1 = cljs.core.__destructure_map(map__75065);
var app = map__75065__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75065__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__75066 = p__75064;
var map__75066__$1 = cljs.core.__destructure_map(map__75066);
var tx_node = map__75066__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75066__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75066__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75066__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null);

var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app,(0));
});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_result_handler_STAR_(result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__5043__auto__;
}
})())){
try{var map__75068_75672 = result;
var map__75068_75673__$1 = cljs.core.__destructure_map(map__75068_75672);
var status_code_75674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75068_75673__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_75675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75068_75673__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_75674)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app,remote,id,body_75675);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app,id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_75674));
}
}catch (e75067){var e_75676 = e75067;
}} else {
}
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app,id,ele_idx,remote,result);

(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app,remote,id,ele_idx) : remove_BANG_.call(null,app,remote,id,ele_idx));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app,(0));
});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_element_sends_BANG_(app,tx_node,p__75090){
var map__75091 = p__75090;
var map__75091__$1 = cljs.core.__destructure_map(map__75091);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75091__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75091__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75091__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node(app,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_(app,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK_(p__75093){
var map__75094 = p__75093;
var map__75094__$1 = cljs.core.__destructure_map(map__75094);
var tx_node = map__75094__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75094__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return cljs.core.every_QMARK_((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__75097){
var map__75098 = p__75097;
var map__75098__$1 = cljs.core.__destructure_map(map__75098);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75098__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75098__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
}),elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$element_with_work(remote_names,p__75106){
var map__75107 = p__75106;
var map__75107__$1 = cljs.core.__destructure_map(map__75107);
var element = map__75107__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75107__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75107__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198),null)], null);

var todo = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remote_names,cljs.core.set(cljs.core.keys(dispatch)));
var remaining = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(todo,started_QMARK_);
if(cljs.core.seq(remaining)){
return element;
} else {
return null;
}
});
/**
 * Assumes tx-node is to be processed pessimistically. Queues the next send if the node is currently idle
 *   on the network and there are any sends left to do. Adds to the send queue, and returns the updated
 *   tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_next_send_BANG_(app,p__75119){
var map__75120 = p__75119;
var map__75120__$1 = cljs.core.__destructure_map(map__75120);
var tx_node = map__75120__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75120__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

if(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.idle_node_QMARK_(tx_node)){
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app);
var with_work = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.element_with_work,remotes);
var element = cljs.core.some(with_work,elements);
if(cljs.core.truth_(element)){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_(app,tx_node,element);
} else {
return tx_node;
}
} else {
return tx_node;
}
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_sends_BANG_(app,p__75121){
var map__75122 = p__75121;
var map__75122__$1 = cljs.core.__destructure_map(map__75122);
var tx_node = map__75122__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75122__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75122__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_(app,node,element);
}),tx_node,elements);
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_next_send_BANG_(app,tx_node);
}
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_result_BANG_(app,tx_node,p__75123,remote){
var map__75124 = p__75123;
var map__75124__$1 = cljs.core.__destructure_map(map__75124);
var tx_element = map__75124__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75124__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75124__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75124__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75124__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75124__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app,(0));

var result_75677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_75678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_75678)){
var env_75679 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_75677], null));
try{(handler_75678.cljs$core$IFn$_invoke$arity$1 ? handler_75678.cljs$core$IFn$_invoke$arity$1(env_75679) : handler_75678.call(null,env_75679));
}catch (e75125){var e_75680 = e75125;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,675,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_75680,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-res-action-exc"], null);
}),null)),null,-545852599,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_element_results_BANG_(app,tx_node,p__75129){
var map__75130 = p__75129;
var map__75130__$1 = cljs.core.__destructure_map(map__75130);
var tx_element = map__75130__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75130__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75130__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_(app,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_results_BANG_(app,p__75131){
var map__75132 = p__75131;
var map__75132__$1 = cljs.core.__destructure_map(map__75132);
var tx_node = map__75132__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75132__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_(app,tx_node,element);
}),elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG_(app,p__75134){
var map__75135 = p__75134;
var map__75135__$1 = cljs.core.__destructure_map(map__75135);
var tx_node = map__75135__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75135__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var get_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,p__75136){
var map__75137 = p__75136;
var map__75137__$1 = cljs.core.__destructure_map(map__75137);
var element = map__75137__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75137__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75137__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75137__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75137__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var seq__75138_75681 = cljs.core.seq(progress);
var chunk__75139_75682 = null;
var count__75140_75683 = (0);
var i__75141_75684 = (0);
while(true){
if((i__75141_75684 < count__75140_75683)){
var vec__75153_75685 = chunk__75139_75682.cljs$core$IIndexed$_nth$arity$2(null,i__75141_75684);
var remote_75686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75153_75685,(0),null);
var value_75687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75153_75685,(1),null);
var env_75688 = get_env(remote_75686,value_75687);
var action_75689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_75689)){
try{(action_75689.cljs$core$IFn$_invoke$arity$1 ? action_75689.cljs$core$IFn$_invoke$arity$1(env_75688) : action_75689.call(null,env_75688));
}catch (e75156){var e_75690 = e75156;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75138_75681,chunk__75139_75682,count__75140_75683,i__75141_75684,e_75690,env_75688,action_75689,vec__75153_75685,remote_75686,value_75687,map__75137,map__75137__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__75135,map__75135__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_75690,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__75138_75681,chunk__75139_75682,count__75140_75683,i__75141_75684,e_75690,env_75688,action_75689,vec__75153_75685,remote_75686,value_75687,map__75137,map__75137__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__75135,map__75135__$1,tx_node,elements))
,null)),null,-889553254,null);
}} else {
}


var G__75691 = seq__75138_75681;
var G__75692 = chunk__75139_75682;
var G__75693 = count__75140_75683;
var G__75694 = (i__75141_75684 + (1));
seq__75138_75681 = G__75691;
chunk__75139_75682 = G__75692;
count__75140_75683 = G__75693;
i__75141_75684 = G__75694;
continue;
} else {
var temp__5804__auto___75695 = cljs.core.seq(seq__75138_75681);
if(temp__5804__auto___75695){
var seq__75138_75696__$1 = temp__5804__auto___75695;
if(cljs.core.chunked_seq_QMARK_(seq__75138_75696__$1)){
var c__5568__auto___75697 = cljs.core.chunk_first(seq__75138_75696__$1);
var G__75698 = cljs.core.chunk_rest(seq__75138_75696__$1);
var G__75699 = c__5568__auto___75697;
var G__75700 = cljs.core.count(c__5568__auto___75697);
var G__75701 = (0);
seq__75138_75681 = G__75698;
chunk__75139_75682 = G__75699;
count__75140_75683 = G__75700;
i__75141_75684 = G__75701;
continue;
} else {
var vec__75157_75702 = cljs.core.first(seq__75138_75696__$1);
var remote_75703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75157_75702,(0),null);
var value_75704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75157_75702,(1),null);
var env_75705 = get_env(remote_75703,value_75704);
var action_75706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_75706)){
try{(action_75706.cljs$core$IFn$_invoke$arity$1 ? action_75706.cljs$core$IFn$_invoke$arity$1(env_75705) : action_75706.call(null,env_75705));
}catch (e75160){var e_75707 = e75160;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75138_75681,chunk__75139_75682,count__75140_75683,i__75141_75684,e_75707,env_75705,action_75706,vec__75157_75702,remote_75703,value_75704,seq__75138_75696__$1,temp__5804__auto___75695,map__75137,map__75137__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__75135,map__75135__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_75707,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__75138_75681,chunk__75139_75682,count__75140_75683,i__75141_75684,e_75707,env_75705,action_75706,vec__75157_75702,remote_75703,value_75704,seq__75138_75696__$1,temp__5804__auto___75695,map__75137,map__75137__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__75135,map__75135__$1,tx_node,elements))
,null)),null,1713005686,null);
}} else {
}


var G__75708 = cljs.core.next(seq__75138_75696__$1);
var G__75709 = null;
var G__75710 = (0);
var G__75711 = (0);
seq__75138_75681 = G__75708;
chunk__75139_75682 = G__75709;
count__75140_75683 = G__75710;
i__75141_75684 = G__75711;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_tx_node_BANG_(app,p__75161){
var map__75167 = p__75161;
var map__75167__$1 = cljs.core.__destructure_map(map__75167);
var tx_node = map__75167__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75167__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),null)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_(app,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_(app,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_(app,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_(app,(function (){var G__75168 = tx_node;
var G__75168__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app,G__75168):G__75168);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_(app,G__75168__$1);
} else {
return G__75168__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$requested_refreshes(app,queue){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__75171){
return cljs.core.coll_QMARK_(G__75171);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.set_QMARK_], null);


return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,element){
var map__75176 = element;
var map__75176__$1 = cljs.core.__destructure_map(map__75176);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75176__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null,env))));
} else {
return acc;
}
}),outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remotes_active_on_node(p__75177,remotes){
var map__75178 = p__75177;
var map__75178__$1 = cljs.core.__destructure_map(map__75178);
var tx_node = map__75178__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75178__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

var active_on_element = (function (p__75179){
var map__75180 = p__75179;
var map__75180__$1 = cljs.core.__destructure_map(map__75180);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75180__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75180__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
}),cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$active_remotes(queue,remotes){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG_(p__75183){
var map__75184 = p__75183;
var map__75184__$1 = cljs.core.__destructure_map(map__75184);
var app = map__75184__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5802__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_(app,n);
if(cljs.core.truth_(temp__5802__auto__)){
var new_node = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app);
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.requested_refreshes(app,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.active_remotes(new_queue,remotes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app) : schedule_render_BANG_.call(null,app));

return null;
});
/**
 * Run the optimistic action(s) of a transaction synchronously. It is primarily used to deal with controlled inputs, since they
 * have issues working asynchronously, so ideally the mutation in question will *not* have remote action (though they
 * are allowed to).
 * 
 * NOTE: any *remote* behaviors of `tx` will *still be async*.
 * 
 * This function:
 * 
 * * Runs the optimistic side of the mutation(s)
 * * IF (and only if) one or more of the mutations has more sections than just an `action` then it submits the mutation to the normal transaction queue,
 *   but with the optimistic part already done.
 * * This functions *does not* queue a render refresh (though if the normal transaction queue is updated, it will queue tx remote processing, which will trigger a UI refresh).
 * 
 * If you pass it an on-screen instance that has a query and ident, then this function tunnel updated UI props synchronously to that
 * component so it can refresh immediately and avoid DOM input issues.
 * 
 * Returns the new component props or the final state map if no component was used in the transaction.
 * 
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$transact_sync_BANG_(app,tx,p__75188){
var map__75189 = p__75188;
var map__75189__$1 = cljs.core.__destructure_map(map__75189);
var options = map__75189__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75189__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75189__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var mutation_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(tx));
var ast_node__GT_operation = cljs.core.zipmap(mutation_nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ast_node){
return com.fulcrologic.fulcro.mutations.mutate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast_node], null));
}),mutation_nodes));
var map__75190 = cljs.core.group_by((function (p1__75187_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),null], null), null),cljs.core.set(cljs.core.keys((ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1 ? ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1(p1__75187_SHARP_) : ast_node__GT_operation.call(null,p1__75187_SHARP_)))));
}),mutation_nodes);
var map__75190__$1 = cljs.core.__destructure_map(map__75190);
var optimistic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75190__$1,true);
var mixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75190__$1,false);
var optimistic_tx_node = ((cljs.core.seq(optimistic))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),optimistic], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var mixed_tx_node = ((cljs.core.seq(mixed))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),mixed], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var resulting_node_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(optimistic_tx_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app,optimistic_tx_node);
} else {
}

if(cljs.core.truth_(mixed_tx_node)){
var node_75712 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app,mixed_tx_node);
var runtime_atom_75713 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app);
cljs.core.reset_BANG_(resulting_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node_75712));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom_75713,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_75712], 0));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app,(20));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = component;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = (com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,component));
if(cljs.core.truth_(and__5043__auto____$1)){
return com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(component);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto___75714 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"refresh-component!","refresh-component!",-872161039));
if(cljs.core.truth_(temp__5804__auto___75714)){
var refresh_component_BANG__75715 = temp__5804__auto___75714;
(refresh_component_BANG__75715.cljs$core$IFn$_invoke$arity$1 ? refresh_component_BANG__75715.cljs$core$IFn$_invoke$arity$1(component) : refresh_component_BANG__75715.call(null,component));
} else {
}
} else {
if(cljs.core.truth_(ref)){
var r_BANG__75716 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(r_BANG__75716)){
(r_BANG__75716.cljs$core$IFn$_invoke$arity$1 ? r_BANG__75716.cljs$core$IFn$_invoke$arity$1(app) : r_BANG__75716.call(null,app));
} else {
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,847,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synchronous transaction was submitted on the app or a component without an ident. No UI refresh will happen. See https://book.fulcrologic.com/#warn-tx-missing-ident"], null);
}),null)),null,740374035,null);
} else {
}

}
}

return cljs.core.deref(resulting_node_id);
});
/**
 * Default (Fulcro-2 compatible) transaction submission. The options map can contain any additional options
 *   that might be used by the transaction processing (or UI refresh).
 * 
 *   Some that may be supported (depending on application settings):
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   WARNING: `:only-refresh` can cause missed refreshes because rendering is debounced. If you are using this for
 *         rapid-fire updates like drag-and-drop it is recommended that on the trailing edge (e.g. drop) of your sequence you
 *         force a normal refresh via `app/render!`.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   NOTE: Fulcro 2 'follow-on reads' are supported and are added to the `:refresh` entries. Your choice of rendering
 *   algorithm will influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$default_tx_BANG_(var_args){
var G__75199 = arguments.length;
switch (G__75199) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,tx){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__75200,tx,p__75201){
var map__75202 = p__75200;
var map__75202__$1 = cljs.core.__destructure_map(map__75202);
var app = map__75202__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__75203 = p__75201;
var map__75203__$1 = cljs.core.__destructure_map(map__75203);
var options = map__75203__$1;
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75203__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

if(cljs.core.truth_(synchronous_QMARK_)){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_(app,tx,options);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1(app);

var map__75204 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),true], null),options], 0));
var map__75204__$1 = cljs.core.__destructure_map(map__75204);
var options__$1 = map__75204__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75204__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75204__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75204__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__75195_SHARP_){
return (((p1__75195_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__75195_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__75225 = cljs.core.set(refresh);
var G__75225__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__75225,follow_on_reads):G__75225);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__75225__$1,ref);
} else {
return G__75225__$1;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__75226 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (v,n){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(v),n);
}),node);
var G__75226__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__75226,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__75226);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__75226__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__75226__$1;
}
}));

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Abort any elements in the given send-queue that have the given abort id.
 * 
 *   Aborting will cause the network to abort (which will report a result), or if the item is not yet active a
 *   virtual result will still be sent for that node.
 * 
 *   Returns a new send-queue that no longer contains the aborted nodes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_elements_BANG_(p__75231,send_queue,abort_id){
var map__75232 = p__75231;
var map__75232__$1 = cljs.core.__destructure_map(map__75232);
var remote = map__75232__$1;
var abort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75232__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(abort_BANG_)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__75233){
var map__75234 = p__75233;
var map__75234__$1 = cljs.core.__destructure_map(map__75234);
var send_node = map__75234__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75234__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75234__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var aid = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aid,abort_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,send_node);
} else {
if(cljs.core.truth_(active_QMARK_)){
(abort_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_BANG_.cljs$core$IFn$_invoke$arity$2(remote,abort_id) : abort_BANG_.call(null,remote,abort_id));

return result;
} else {
var G__75235_75720 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Cancelled",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__75235_75720) : result_handler.call(null,G__75235_75720));

return result;

}
}
}),cljs.core.PersistentVector.EMPTY,send_queue);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,925,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot abort network requests. The remote has no abort support! See https://book.fulcrologic.com/#err-txp-cant-abort"], null);
}),null)),null,-413706719,null);

return send_queue;
}
});
/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_BANG_(app,abort_id){
var map__75236 = com.fulcrologic.fulcro.raw.components.any__GT_app(app);
var map__75236__$1 = cljs.core.__destructure_map(map__75236);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75236__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__75237 = runtime_state;
var map__75237__$1 = cljs.core.__destructure_map(map__75237);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75237__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75237__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var remote_names = cljs.core.keys(send_queues);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,remote_name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,remote_name,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(remotes,remote_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote_name),abort_id));
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);
});
/**
 * Cause everything in the active network queue for remote to be cancelled. Any result that (finally) appears for aborted
 *   items will be ignored. This will cause a hard error to be "received" as the result for everything
 *   that is in the send queue of the given remote.
 * 
 *   This function is mainly meant for use in development mode when dealing with a buggy remote implementation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_remote_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_remote_BANG_(app_ish,remote){
var app = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var map__75247 = com.fulcrologic.fulcro.raw.components.any__GT_app(app);
var map__75247__$1 = cljs.core.__destructure_map(map__75247);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75247__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75247__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__75248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote], null));
var map__75248__$1 = cljs.core.__destructure_map(map__75248);
var the_remote = map__75248__$1;
var abort_network_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75248__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
var old_send_queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remote], 0));

var seq__75250 = cljs.core.seq(old_send_queue);
var chunk__75255 = null;
var count__75256 = (0);
var i__75257 = (0);
while(true){
if((i__75257 < count__75256)){
var map__75325 = chunk__75255.cljs$core$IIndexed$_nth$arity$2(null,i__75257);
var map__75325__$1 = cljs.core.__destructure_map(map__75325);
var send_node = map__75325__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75325__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75325__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__75258_75721 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__75259_75722 = null;
var count__75260_75723 = (0);
var i__75261_75724 = (0);
while(true){
if((i__75261_75724 < count__75260_75723)){
var aid_75725 = chunk__75259_75722.cljs$core$IIndexed$_nth$arity$2(null,i__75261_75724);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_75725) : abort_network_BANG_.call(null,the_remote,aid_75725));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75258_75721,chunk__75259_75722,count__75260_75723,i__75261_75724,seq__75250,chunk__75255,count__75256,i__75257,aid_75725,map__75325,map__75325__$1,send_node,active_QMARK_,result_handler,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__75258_75721,chunk__75259_75722,count__75260_75723,i__75261_75724,seq__75250,chunk__75255,count__75256,i__75257,aid_75725,map__75325,map__75325__$1,send_node,active_QMARK_,result_handler,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,754836094,null);
}
} else {
}

var G__75339_75726 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__75339_75726) : result_handler.call(null,G__75339_75726));
}catch (e75337){var e_75727 = e75337;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75258_75721,chunk__75259_75722,count__75260_75723,i__75261_75724,seq__75250,chunk__75255,count__75256,i__75257,e_75727,aid_75725,map__75325,map__75325__$1,send_node,active_QMARK_,result_handler,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_75727,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__75258_75721,chunk__75259_75722,count__75260_75723,i__75261_75724,seq__75250,chunk__75255,count__75256,i__75257,e_75727,aid_75725,map__75325,map__75325__$1,send_node,active_QMARK_,result_handler,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,35332078,null);
}

var G__75728 = seq__75258_75721;
var G__75729 = chunk__75259_75722;
var G__75730 = count__75260_75723;
var G__75731 = (i__75261_75724 + (1));
seq__75258_75721 = G__75728;
chunk__75259_75722 = G__75729;
count__75260_75723 = G__75730;
i__75261_75724 = G__75731;
continue;
} else {
var temp__5804__auto___75732 = cljs.core.seq(seq__75258_75721);
if(temp__5804__auto___75732){
var seq__75258_75733__$1 = temp__5804__auto___75732;
if(cljs.core.chunked_seq_QMARK_(seq__75258_75733__$1)){
var c__5568__auto___75734 = cljs.core.chunk_first(seq__75258_75733__$1);
var G__75735 = cljs.core.chunk_rest(seq__75258_75733__$1);
var G__75736 = c__5568__auto___75734;
var G__75737 = cljs.core.count(c__5568__auto___75734);
var G__75738 = (0);
seq__75258_75721 = G__75735;
chunk__75259_75722 = G__75736;
count__75260_75723 = G__75737;
i__75261_75724 = G__75738;
continue;
} else {
var aid_75740 = cljs.core.first(seq__75258_75733__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_75740) : abort_network_BANG_.call(null,the_remote,aid_75740));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75258_75721,chunk__75259_75722,count__75260_75723,i__75261_75724,seq__75250,chunk__75255,count__75256,i__75257,aid_75740,seq__75258_75733__$1,temp__5804__auto___75732,map__75325,map__75325__$1,send_node,active_QMARK_,result_handler,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__75258_75721,chunk__75259_75722,count__75260_75723,i__75261_75724,seq__75250,chunk__75255,count__75256,i__75257,aid_75740,seq__75258_75733__$1,temp__5804__auto___75732,map__75325,map__75325__$1,send_node,active_QMARK_,result_handler,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1067397421,null);
}
} else {
}

var G__75344_75741 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__75344_75741) : result_handler.call(null,G__75344_75741));
}catch (e75343){var e_75742 = e75343;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75258_75721,chunk__75259_75722,count__75260_75723,i__75261_75724,seq__75250,chunk__75255,count__75256,i__75257,e_75742,aid_75740,seq__75258_75733__$1,temp__5804__auto___75732,map__75325,map__75325__$1,send_node,active_QMARK_,result_handler,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_75742,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__75258_75721,chunk__75259_75722,count__75260_75723,i__75261_75724,seq__75250,chunk__75255,count__75256,i__75257,e_75742,aid_75740,seq__75258_75733__$1,temp__5804__auto___75732,map__75325,map__75325__$1,send_node,active_QMARK_,result_handler,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,592916534,null);
}

var G__75743 = cljs.core.next(seq__75258_75733__$1);
var G__75744 = null;
var G__75745 = (0);
var G__75746 = (0);
seq__75258_75721 = G__75743;
chunk__75259_75722 = G__75744;
count__75260_75723 = G__75745;
i__75261_75724 = G__75746;
continue;
}
} else {
}
}
break;
}

var G__75747 = seq__75250;
var G__75748 = chunk__75255;
var G__75749 = count__75256;
var G__75750 = (i__75257 + (1));
seq__75250 = G__75747;
chunk__75255 = G__75748;
count__75256 = G__75749;
i__75257 = G__75750;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__75250);
if(temp__5804__auto__){
var seq__75250__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75250__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__75250__$1);
var G__75751 = cljs.core.chunk_rest(seq__75250__$1);
var G__75752 = c__5568__auto__;
var G__75753 = cljs.core.count(c__5568__auto__);
var G__75754 = (0);
seq__75250 = G__75751;
chunk__75255 = G__75752;
count__75256 = G__75753;
i__75257 = G__75754;
continue;
} else {
var map__75347 = cljs.core.first(seq__75250__$1);
var map__75347__$1 = cljs.core.__destructure_map(map__75347);
var send_node = map__75347__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75347__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75347__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__75251_75755 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__75252_75756 = null;
var count__75253_75757 = (0);
var i__75254_75758 = (0);
while(true){
if((i__75254_75758 < count__75253_75757)){
var aid_75759 = chunk__75252_75756.cljs$core$IIndexed$_nth$arity$2(null,i__75254_75758);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_75759) : abort_network_BANG_.call(null,the_remote,aid_75759));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75251_75755,chunk__75252_75756,count__75253_75757,i__75254_75758,seq__75250,chunk__75255,count__75256,i__75257,aid_75759,map__75347,map__75347__$1,send_node,active_QMARK_,result_handler,seq__75250__$1,temp__5804__auto__,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__75251_75755,chunk__75252_75756,count__75253_75757,i__75254_75758,seq__75250,chunk__75255,count__75256,i__75257,aid_75759,map__75347,map__75347__$1,send_node,active_QMARK_,result_handler,seq__75250__$1,temp__5804__auto__,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1846746619,null);
}
} else {
}

var G__75427_75760 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__75427_75760) : result_handler.call(null,G__75427_75760));
}catch (e75426){var e_75761 = e75426;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75251_75755,chunk__75252_75756,count__75253_75757,i__75254_75758,seq__75250,chunk__75255,count__75256,i__75257,e_75761,aid_75759,map__75347,map__75347__$1,send_node,active_QMARK_,result_handler,seq__75250__$1,temp__5804__auto__,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_75761,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__75251_75755,chunk__75252_75756,count__75253_75757,i__75254_75758,seq__75250,chunk__75255,count__75256,i__75257,e_75761,aid_75759,map__75347,map__75347__$1,send_node,active_QMARK_,result_handler,seq__75250__$1,temp__5804__auto__,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1134495367,null);
}

var G__75762 = seq__75251_75755;
var G__75763 = chunk__75252_75756;
var G__75764 = count__75253_75757;
var G__75765 = (i__75254_75758 + (1));
seq__75251_75755 = G__75762;
chunk__75252_75756 = G__75763;
count__75253_75757 = G__75764;
i__75254_75758 = G__75765;
continue;
} else {
var temp__5804__auto___75766__$1 = cljs.core.seq(seq__75251_75755);
if(temp__5804__auto___75766__$1){
var seq__75251_75767__$1 = temp__5804__auto___75766__$1;
if(cljs.core.chunked_seq_QMARK_(seq__75251_75767__$1)){
var c__5568__auto___75768 = cljs.core.chunk_first(seq__75251_75767__$1);
var G__75769 = cljs.core.chunk_rest(seq__75251_75767__$1);
var G__75770 = c__5568__auto___75768;
var G__75771 = cljs.core.count(c__5568__auto___75768);
var G__75772 = (0);
seq__75251_75755 = G__75769;
chunk__75252_75756 = G__75770;
count__75253_75757 = G__75771;
i__75254_75758 = G__75772;
continue;
} else {
var aid_75773 = cljs.core.first(seq__75251_75767__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_75773) : abort_network_BANG_.call(null,the_remote,aid_75773));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75251_75755,chunk__75252_75756,count__75253_75757,i__75254_75758,seq__75250,chunk__75255,count__75256,i__75257,aid_75773,seq__75251_75767__$1,temp__5804__auto___75766__$1,map__75347,map__75347__$1,send_node,active_QMARK_,result_handler,seq__75250__$1,temp__5804__auto__,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__75251_75755,chunk__75252_75756,count__75253_75757,i__75254_75758,seq__75250,chunk__75255,count__75256,i__75257,aid_75773,seq__75251_75767__$1,temp__5804__auto___75766__$1,map__75347,map__75347__$1,send_node,active_QMARK_,result_handler,seq__75250__$1,temp__5804__auto__,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-2042021929,null);
}
} else {
}

var G__75432_75774 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__75432_75774) : result_handler.call(null,G__75432_75774));
}catch (e75428){var e_75775 = e75428;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__75251_75755,chunk__75252_75756,count__75253_75757,i__75254_75758,seq__75250,chunk__75255,count__75256,i__75257,e_75775,aid_75773,seq__75251_75767__$1,temp__5804__auto___75766__$1,map__75347,map__75347__$1,send_node,active_QMARK_,result_handler,seq__75250__$1,temp__5804__auto__,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_75775,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__75251_75755,chunk__75252_75756,count__75253_75757,i__75254_75758,seq__75250,chunk__75255,count__75256,i__75257,e_75775,aid_75773,seq__75251_75767__$1,temp__5804__auto___75766__$1,map__75347,map__75347__$1,send_node,active_QMARK_,result_handler,seq__75250__$1,temp__5804__auto__,app,map__75247,map__75247__$1,state_atom,runtime_atom,map__75248,map__75248__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,585885677,null);
}

var G__75776 = cljs.core.next(seq__75251_75767__$1);
var G__75777 = null;
var G__75778 = (0);
var G__75779 = (0);
seq__75251_75755 = G__75776;
chunk__75252_75756 = G__75777;
count__75253_75757 = G__75778;
i__75254_75758 = G__75779;
continue;
}
} else {
}
}
break;
}

var G__75780 = cljs.core.next(seq__75250__$1);
var G__75781 = null;
var G__75782 = (0);
var G__75783 = (0);
seq__75250 = G__75780;
chunk__75255 = G__75781;
count__75256 = G__75782;
i__75257 = G__75783;
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
 * Modify the given fulcro app so that it does reads in batches when possible. Requires server support (which is
 *   provided by Fulcro's handle-api-request), and a remote that can handle raw requests (see the latest http-remote).
 * 
 *   Defaults to enabling batching on all remotes, but if any of your client-side remote code or servers do not support
 *   batching, pass the `remotes` option, which is a set of keywords that names the remotes on which batching should
 *   be enabled.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$with_batched_reads(var_args){
var G__75437 = arguments.length;
switch (G__75437) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2(app,null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2 = (function (app,remotes){
var remotes__$1 = (function (){var or__5045__auto__ = remotes;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__75441 = app;
var G__75441__$1 = (((G__75441 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__75441));
var G__75441__$2 = (((G__75441__$1 == null))?null:cljs.core.deref(G__75441__$1));
var G__75441__$3 = (((G__75441__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__75441__$2));
if((G__75441__$3 == null)){
return null;
} else {
return cljs.core.keys(G__75441__$3);
}
}
})();
var batching_enabled = ((cljs.core.seq(remotes__$1))?cljs.core.zipmap(remotes__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)):cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692)], null),batching_enabled);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.js.map
