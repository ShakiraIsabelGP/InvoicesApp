goog.provide('com.wsscode.common.combinatorics');
/**
 * All the ways to take one item from each sequence
 */
com.wsscode.common.combinatorics.cartesian_product = (function com$wsscode$common$combinatorics$cartesian_product(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53785 = arguments.length;
var i__5770__auto___53786 = (0);
while(true){
if((i__5770__auto___53786 < len__5769__auto___53785)){
args__5775__auto__.push((arguments[i__5770__auto___53786]));

var G__53787 = (i__5770__auto___53786 + (1));
i__5770__auto___53786 = G__53787;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function com$wsscode$common$combinatorics$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5802__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5802__auto__){
var rst = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__53788 = (i - (1));
var G__53789 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__53788;
v_seqs__$2 = G__53789;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return com$wsscode$common$combinatorics$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(com.wsscode.common.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.wsscode.common.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq53770){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53770));
}));


//# sourceMappingURL=com.wsscode.common.combinatorics.js.map
