goog.provide('com.wsscode.pathom.misc');
/**
 * @define {boolean}
 */
com.wsscode.pathom.misc.INCLUDE_SPECS = goog.define("com.wsscode.pathom.misc.INCLUDE_SPECS",true);
com.wsscode.pathom.misc.pathom_random_uuid = (function com$wsscode$pathom$misc$pathom_random_uuid(){
return cljs.core.random_uuid();
});
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
com.wsscode.pathom.misc.distinct_by = (function com$wsscode$pathom$misc$distinct_by(var_args){
var G__63617 = arguments.length;
switch (G__63617) {
case 1:
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__63674 = null;
var G__63674__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__63674__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__63674__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__63674 = function(result,x){
switch(arguments.length){
case 0:
return G__63674__0.call(this);
case 1:
return G__63674__1.call(this,result);
case 2:
return G__63674__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63674.cljs$core$IFn$_invoke$arity$0 = G__63674__0;
G__63674.cljs$core$IFn$_invoke$arity$1 = G__63674__1;
G__63674.cljs$core$IFn$_invoke$arity$2 = G__63674__2;
return G__63674;
})()
});
}));

(com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function com$wsscode$pathom$misc$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__63621,seen__$1){
while(true){
var vec__63623 = p__63621;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63623,(0),null);
var xs__$1 = vec__63623;
var temp__5804__auto__ = cljs.core.seq(xs__$1);
if(temp__5804__auto__){
var s = temp__5804__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__63678 = cljs.core.rest(s);
var G__63679 = seen__$1;
p__63621 = G__63678;
seen__$1 = G__63679;
continue;
} else {
return cljs.core.cons(x,com$wsscode$pathom$misc$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
}));

(com.wsscode.pathom.misc.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence removing consecutive duplicates in coll when passed to a function f.
 *   Returns a transducer when no collection is provided.
 */
com.wsscode.pathom.misc.dedupe_by = (function com$wsscode$pathom$misc$dedupe_by(var_args){
var G__63633 = arguments.length;
switch (G__63633) {
case 1:
return com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_(new cljs.core.Keyword("com.wsscode.pathom.misc","none","com.wsscode.pathom.misc/none",534209886));
return (function() {
var G__63682 = null;
var G__63682__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__63682__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__63682__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__63682 = function(result,x){
switch(arguments.length){
case 0:
return G__63682__0.call(this);
case 1:
return G__63682__1.call(this,result);
case 2:
return G__63682__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63682.cljs$core$IFn$_invoke$arity$0 = G__63682__0;
G__63682.cljs$core$IFn$_invoke$arity$1 = G__63682__1;
G__63682.cljs$core$IFn$_invoke$arity$2 = G__63682__2;
return G__63682;
})()
});
}));

(com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.misc.dedupe_by.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(com.wsscode.pathom.misc.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Like group by, but will keep only the last result.
 */
com.wsscode.pathom.misc.index_by = (function com$wsscode$pathom$misc$index_by(f,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
com.wsscode.pathom.misc.sconj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
com.wsscode.pathom.misc.vconj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
/**
 * Create a queue.
 */
com.wsscode.pathom.misc.queue = (function com$wsscode$pathom$misc$queue(var_args){
var G__63639 = arguments.length;
switch (G__63639) {
case 0:
return com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,com.wsscode.pathom.misc.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(com.wsscode.pathom.misc.queue.cljs$lang$maxFixedArity = 1);

/**
 * Map over the given hash-map keys.
 * 
 *   Example:
 *  (map-keys #(str/replace (name %) "_" "-") {"foo_bar" 1}) => {"foo-bar" 1}
 *   
 */
com.wsscode.pathom.misc.map_keys = (function com$wsscode$pathom$misc$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function com$wsscode$pathom$misc$map_keys_$_iter__63640(s__63641){
return (new cljs.core.LazySeq(null,(function (){
var s__63641__$1 = s__63641;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__63641__$1);
if(temp__5804__auto__){
var s__63641__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63641__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__63641__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__63643 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__63642 = (0);
while(true){
if((i__63642 < size__5522__auto__)){
var vec__63644 = cljs.core._nth(c__5521__auto__,i__63642);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63644,(1),null);
cljs.core.chunk_append(b__63643,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__63684 = (i__63642 + (1));
i__63642 = G__63684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63643),com$wsscode$pathom$misc$map_keys_$_iter__63640(cljs.core.chunk_rest(s__63641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63643),null);
}
} else {
var vec__63647 = cljs.core.first(s__63641__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63647,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),com$wsscode$pathom$misc$map_keys_$_iter__63640(cljs.core.rest(s__63641__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(m);
})());
});
/**
 * Map over the given hash-map vals.
 * 
 *   Example:
 *  (map-vals inc {:a 1 :b 2})
 *   
 */
com.wsscode.pathom.misc.map_vals = (function com$wsscode$pathom$misc$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function com$wsscode$pathom$misc$map_vals_$_iter__63654(s__63655){
return (new cljs.core.LazySeq(null,(function (){
var s__63655__$1 = s__63655;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__63655__$1);
if(temp__5804__auto__){
var s__63655__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63655__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__63655__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__63657 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__63656 = (0);
while(true){
if((i__63656 < size__5522__auto__)){
var vec__63659 = cljs.core._nth(c__5521__auto__,i__63656);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63659,(1),null);
cljs.core.chunk_append(b__63657,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__63685 = (i__63656 + (1));
i__63656 = G__63685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63657),com$wsscode$pathom$misc$map_vals_$_iter__63654(cljs.core.chunk_rest(s__63655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63657),null);
}
} else {
var vec__63665 = cljs.core.first(s__63655__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63665,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),com$wsscode$pathom$misc$map_vals_$_iter__63654(cljs.core.rest(s__63655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(m);
})());
});

//# sourceMappingURL=com.wsscode.pathom.misc.js.map
