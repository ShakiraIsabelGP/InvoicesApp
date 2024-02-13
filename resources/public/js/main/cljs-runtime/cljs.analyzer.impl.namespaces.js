goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__37390 = libspec;
var seq__37391 = cljs.core.seq(vec__37390);
var first__37392 = cljs.core.first(seq__37391);
var seq__37391__$1 = cljs.core.next(seq__37391);
var lib = first__37392;
var spec = seq__37391__$1;
var libspec__$1 = vec__37390;
var vec__37393 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393,(0),null);
var vec__37396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393,(1),null);
var seq__37397 = cljs.core.seq(vec__37396);
var first__37398 = cljs.core.first(seq__37397);
var seq__37397__$1 = cljs.core.next(seq__37397);
var _ = first__37398;
var first__37398__$1 = cljs.core.first(seq__37397__$1);
var seq__37397__$2 = cljs.core.next(seq__37397__$1);
var alias = first__37398__$1;
var post_spec = seq__37397__$2;
var post = vec__37396;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__37399 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37399,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__37399;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__37400 = cljs.core.seq(new_as_aliases);
var chunk__37401 = null;
var count__37402 = (0);
var i__37403 = (0);
while(true){
if((i__37403 < count__37402)){
var vec__37410 = chunk__37401.cljs$core$IIndexed$_nth$arity$2(null,i__37403);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37410,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37410,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__37428 = seq__37400;
var G__37429 = chunk__37401;
var G__37430 = count__37402;
var G__37431 = (i__37403 + (1));
seq__37400 = G__37428;
chunk__37401 = G__37429;
count__37402 = G__37430;
i__37403 = G__37431;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37400);
if(temp__5804__auto__){
var seq__37400__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37400__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37400__$1);
var G__37432 = cljs.core.chunk_rest(seq__37400__$1);
var G__37433 = c__5568__auto__;
var G__37434 = cljs.core.count(c__5568__auto__);
var G__37435 = (0);
seq__37400 = G__37432;
chunk__37401 = G__37433;
count__37402 = G__37434;
i__37403 = G__37435;
continue;
} else {
var vec__37413 = cljs.core.first(seq__37400__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37413,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37413,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__37436 = cljs.core.next(seq__37400__$1);
var G__37437 = null;
var G__37438 = (0);
var G__37439 = (0);
seq__37400 = G__37436;
chunk__37401 = G__37437;
count__37402 = G__37438;
i__37403 = G__37439;
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
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__37417 = arguments.length;
switch (G__37417) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__37418 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__37418__$1 = cljs.core.__destructure_map(map__37418);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37418__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37418__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__37419 = ret__$1;
var G__37419__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37419,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__37419);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37419__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__37419__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37420,p__37421){
var map__37422 = p__37420;
var map__37422__$1 = cljs.core.__destructure_map(map__37422);
var ret__$1 = map__37422__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37422__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__37423 = p__37421;
var seq__37424 = cljs.core.seq(vec__37423);
var first__37425 = cljs.core.first(seq__37424);
var seq__37424__$1 = cljs.core.next(seq__37424);
var spec_key = first__37425;
var libspecs = seq__37424__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__37426 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__37426__$1 = cljs.core.__destructure_map(map__37426);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37426__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37426__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__37427 = ret__$1;
var G__37427__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37427,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__37427);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37427__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__37427__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
