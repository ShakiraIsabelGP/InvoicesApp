goog.provide('taoensso.tufte.stats');
goog.scope(function(){
  taoensso.tufte.stats.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.ICounted}
*/
taoensso.tufte.stats.SortedLongs = (function (a){
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.stats.SortedLongs.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a.length;
}));

(taoensso.tufte.stats.SortedLongs.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
}));

(taoensso.tufte.stats.SortedLongs.cljs$lang$type = true);

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorStr = "taoensso.tufte.stats/SortedLongs");

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"taoensso.tufte.stats/SortedLongs");
}));

/**
 * Positional factory function for taoensso.tufte.stats/SortedLongs.
 */
taoensso.tufte.stats.__GT_SortedLongs = (function taoensso$tufte$stats$__GT_SortedLongs(a){
return (new taoensso.tufte.stats.SortedLongs(a));
});

taoensso.tufte.stats.sorted_longs_QMARK_ = (function taoensso$tufte$stats$sorted_longs_QMARK_(x){
return (x instanceof taoensso.tufte.stats.SortedLongs);
});
taoensso.tufte.stats.sort_longs = (function taoensso$tufte$stats$sort_longs(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
return longs;
} else {
var a = ((cljs.core.array_QMARK_(longs))?longs:cljs.core.to_array(longs));
taoensso.tufte.stats.goog$module$goog$array.sort(a);

return (new taoensso.tufte.stats.SortedLongs(a));
}
});
/**
 * Returns ?[min p25 p50 p75 p90 p95 p99 max]
 */
taoensso.tufte.stats.long_percentiles = (function taoensso$tufte$stats$long_percentiles(longs){
var a = taoensso.tufte.stats.sort_longs(longs).a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[Math.round((0.25 * max_idx))]),(a[Math.round((0.5 * max_idx))]),(a[Math.round((0.75 * max_idx))]),(a[Math.round((0.9 * max_idx))]),(a[Math.round((0.95 * max_idx))]),(a[Math.round((0.99 * max_idx))]),(a[max_idx])], null);
}
});

/**
* @constructor
*/
taoensso.tufte.stats.MinMax = (function (vmin,vmax){
this.vmin = vmin;
this.vmax = vmax;
});

(taoensso.tufte.stats.MinMax.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vmin","vmin",2087078343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vmax","vmax",205317983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.stats.MinMax.cljs$lang$type = true);

(taoensso.tufte.stats.MinMax.cljs$lang$ctorStr = "taoensso.tufte.stats/MinMax");

(taoensso.tufte.stats.MinMax.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"taoensso.tufte.stats/MinMax");
}));

/**
 * Positional factory function for taoensso.tufte.stats/MinMax.
 */
taoensso.tufte.stats.__GT_MinMax = (function taoensso$tufte$stats$__GT_MinMax(vmin,vmax){
return (new taoensso.tufte.stats.MinMax(vmin,vmax));
});

/**
 * Returns ?[<min> <max>]
 */
taoensso.tufte.stats.min_max = (function taoensso$tufte$stats$min_max(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
var a = longs.a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[max_idx])], null);
}
} else {
if((cljs.core.count(longs) === (0))){
return null;
} else {
var vec__93504 = longs;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93504,(0),null);
var min_max = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var vmin = acc.vmin;
var vmax = acc.vmax;
if((in$ > vmax)){
return (new taoensso.tufte.stats.MinMax(vmin,in$));
} else {
if((in$ < vmin)){
return (new taoensso.tufte.stats.MinMax(in$,vmin));
} else {
return acc;
}
}
}),(new taoensso.tufte.stats.MinMax(v1,v1)),longs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_max.vmin,min_max.vmax], null);
}
}
});
/**
 * Given a collection of longs, returns map with keys:
 *   #{:n :min :max :sum :mean :mad-sum :mad :p25 :p50 :p75 :p90 :p95 :p99}, or nil
 *   if collection is empty.
 */
taoensso.tufte.stats.stats = (function taoensso$tufte$stats$stats(longs){
if(cljs.core.truth_(longs)){
var sorted_longs = taoensso.tufte.stats.sort_longs(longs);
var a = sorted_longs.a;
var n = a.length;
if((n === (0))){
return null;
} else {
var sum = (function (){var a__5633__auto__ = a;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var acc = (0);
while(true){
if((i < l__5634__auto__)){
var G__93577 = (i + (1));
var G__93578 = (acc + (a[i]));
i = G__93577;
acc = G__93578;
continue;
} else {
return acc;
}
break;
}
})();
var mean = (sum / n);
var mad_sum = (function (){var a__5633__auto__ = a;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var acc = 0.0;
while(true){
if((i < l__5634__auto__)){
var G__93579 = (i + (1));
var G__93580 = (acc + Math.abs(((a[i]) - mean)));
i = G__93579;
acc = G__93580;
continue;
} else {
return acc;
}
break;
}
})();
var mad = (mad_sum / n);
var vec__93507 = taoensso.tufte.stats.long_percentiles(sorted_longs);
var vmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93507,(0),null);
var p25 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93507,(1),null);
var p50 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93507,(2),null);
var p75 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93507,(3),null);
var p90 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93507,(4),null);
var p95 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93507,(5),null);
var p99 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93507,(6),null);
var vmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93507,(7),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[vmin,mean,p75,mad_sum,p99,n,p25,p90,vmax,mad,p50,sum,p95]);
}
} else {
return null;
}
});
/**
 * `(merge-stats (stats c0) (stats c1))` is a basic approximation of `(stats (into c0 c1)))`.
 */
taoensso.tufte.stats.merge_stats = (function taoensso$tufte$stats$merge_stats(m0,m1){
if(cljs.core.truth_(m0)){
if(cljs.core.truth_(m1)){
var _ = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m0 :n)"))})());
var ___$1 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m1 :n)"))})());
var map__93510 = m0;
var map__93510__$1 = cljs.core.__destructure_map(map__93510);
var p99_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var p90_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var max0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"max","max",61366548));
var p25_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var n0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p75_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var p95_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var mad_sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var min0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93510__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var map__93511 = m1;
var map__93511__$1 = cljs.core.__destructure_map(map__93511);
var p95_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var n1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"n","n",562130025));
var max1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"max","max",61366548));
var mad_sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var p75_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var min1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var p99_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var p25_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var p90_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93511__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var ___$2 = (((n0 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n0)"))})());
var ___$3 = (((n1 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n1)"))})());
var n2 = (n1 + n0);
var n0_ratio = (n0 / n2);
var n1_ratio = (n1 / n2);
var sum2 = (sum0 + sum1);
var mean2 = (sum2 / n2);
var min2 = (((min0 < min1))?min0:min1);
var max2 = (((max0 > max1))?max0:max1);
var mad_sum2 = (mad_sum0 + mad_sum1);
var p25_2 = Math.round(((n0_ratio * p25_0) + (n1_ratio * p25_1)));
var p50_2 = Math.round(((n0_ratio * p50_0) + (n1_ratio * p50_1)));
var p75_2 = Math.round(((n0_ratio * p75_0) + (n1_ratio * p75_1)));
var p90_2 = Math.round(((n0_ratio * p90_0) + (n1_ratio * p90_1)));
var p95_2 = Math.round(((n0_ratio * p95_0) + (n1_ratio * p95_1)));
var p99_2 = Math.round(((n0_ratio * p99_0) + (n1_ratio * p99_1)));
var mad2 = (mad_sum2 / n2);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[min2,mean2,p75_2,mad_sum2,p99_2,n2,p25_2,p90_2,max2,mad2,p50_2,sum2,p95_2]);
} else {
return m0;
}
} else {
return m1;
}
});
taoensso.tufte.stats.perc = (function taoensso$tufte$stats$perc(n,d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((n / d) * 100.0))),"%"].join('');
});
taoensso.tufte.stats.fmt_2f = (function taoensso$tufte$stats$fmt_2f(n){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.round2(n));
});
taoensso.tufte.stats.fmt_calls = (function taoensso$tufte$stats$fmt_calls(n){
return [(((n < (0)))?"-":null),clojure.string.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),"",cljs.core.reverse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(n)))))))].join('');
});
taoensso.tufte.stats.fmt_nano = (function taoensso$tufte$stats$fmt_nano(nanosecs){
var ns = nanosecs;
if((ns >= 6.0E10)){
return [taoensso.tufte.stats.fmt_2f((ns / 6.0E10)),"m "].join('');
} else {
if((ns >= 1.0E9)){
return [taoensso.tufte.stats.fmt_2f((ns / 1.0E9)),"s "].join('');
} else {
if((ns >= 1000000.0)){
return [taoensso.tufte.stats.fmt_2f((ns / 1000000.0)),"ms"].join('');
} else {
if((ns >= 1000.0)){
return [taoensso.tufte.stats.fmt_2f((ns / 1000.0)),"\u03BCs"].join('');
} else {
return [taoensso.tufte.stats.fmt_2f(ns),"ns"].join('');

}
}
}
}
});
taoensso.tufte.stats.all_format_columns = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_columns = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_id_fn = (function taoensso$tufte$stats$default_format_id_fn(id){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
});
taoensso.tufte.stats.get_max_id_width = (function taoensso$tufte$stats$get_max_id_width(stats,p__93512){
var map__93513 = p__93512;
var map__93513__$1 = cljs.core.__destructure_map(map__93513);
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93513__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
if(cljs.core.truth_(stats)){
return cljs.core.reduce_kv((function (acc,k,v){
var c = cljs.core.count((format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(k) : format_id_fn.call(null,k)));
if((c > acc)){
return c;
} else {
return acc;
}
}),(9),stats);
} else {
return null;
}
});
/**
 * Returns a formatted table string for given `{<id> <stats>}` map.
 *   Assumes nanosecond clock, stats based on profiling id'd nanosecond times.
 */
taoensso.tufte.stats.format_stats = (function taoensso$tufte$stats$format_stats(clock_total,id_stats,p__93514){
var map__93515 = p__93514;
var map__93515__$1 = cljs.core.__destructure_map(map__93515);
var opts = map__93515__$1;
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93515__$1,new cljs.core.Keyword(null,"columns","columns",1998437288),taoensso.tufte.stats.default_format_columns);
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93515__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"sum","sum",136986814));
}));
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93515__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
var max_id_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93515__$1,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373));
if(cljs.core.truth_(id_stats)){
taoensso.truss.impl.revery_QMARK_((function (__in){
var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(taoensso.tufte.stats.all_format_columns),x);
})(__in)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e93516){if((e93516 instanceof Error)){
var e = e93516;
return e;
} else {
throw e93516;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.tufte.stats","taoensso.tufte.stats",-1353606879,null),283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Symbol(null,"all-format-columns","all-format-columns",-2048696016,null)], null),__in,e,null);
}
}),columns);

var clock_total__$1 = cljs.core.long$(clock_total);
var accounted_total = cljs.core.reduce_kv((function (acc,_id,s){
return (acc + cljs.core.long$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"sum","sum",136986814))));
}),(0),id_stats);
var sorted_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__93517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id);
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(G__93517) : sort_fn.call(null,G__93517));
}),taoensso.encore.rcompare,cljs.core.keys(id_stats));
var max_id_width__$1 = (function (){var or__5045__auto__ = max_id_width;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return taoensso.tufte.stats.get_max_id_width(id_stats,opts);
}
})();
var column__GT_pattern = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Min"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Mean"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"75% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"99% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"nCalls"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"25% \u2264"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Total",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"90% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Max"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"pId",new cljs.core.Keyword(null,"min-width","min-width",1926193728),max_id_width__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"MAD",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(5)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Clock"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"50% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"95% \u2264"], null)]);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1("");
var append_col = (function (column,s){
var map__93518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,column);
var map__93518__$1 = cljs.core.__destructure_map(map__93518);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93518__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728),(10));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93518__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__93520 = align;
var G__93520__$1 = (((G__93520 instanceof cljs.core.Keyword))?G__93520.fqn:null);
switch (G__93520__$1) {
case "left":
return "-";

break;
case "right":
return "";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__93520__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_width),"s"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)));
});
var seq__93521_93582 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),columns));
var chunk__93522_93583 = null;
var count__93523_93584 = (0);
var i__93524_93585 = (0);
while(true){
if((i__93524_93585 < count__93523_93584)){
var column_93586 = chunk__93522_93583.cljs$core$IIndexed$_nth$arity$2(null,i__93524_93585);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_93586)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_93586,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_93586,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__93587 = seq__93521_93582;
var G__93588 = chunk__93522_93583;
var G__93589 = count__93523_93584;
var G__93590 = (i__93524_93585 + (1));
seq__93521_93582 = G__93587;
chunk__93522_93583 = G__93588;
count__93523_93584 = G__93589;
i__93524_93585 = G__93590;
continue;
} else {
var temp__5804__auto___93591 = cljs.core.seq(seq__93521_93582);
if(temp__5804__auto___93591){
var seq__93521_93592__$1 = temp__5804__auto___93591;
if(cljs.core.chunked_seq_QMARK_(seq__93521_93592__$1)){
var c__5568__auto___93593 = cljs.core.chunk_first(seq__93521_93592__$1);
var G__93594 = cljs.core.chunk_rest(seq__93521_93592__$1);
var G__93595 = c__5568__auto___93593;
var G__93596 = cljs.core.count(c__5568__auto___93593);
var G__93597 = (0);
seq__93521_93582 = G__93594;
chunk__93522_93583 = G__93595;
count__93523_93584 = G__93596;
i__93524_93585 = G__93597;
continue;
} else {
var column_93598 = cljs.core.first(seq__93521_93592__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_93598)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_93598,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_93598,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__93599 = cljs.core.next(seq__93521_93592__$1);
var G__93600 = null;
var G__93601 = (0);
var G__93602 = (0);
seq__93521_93582 = G__93599;
chunk__93522_93583 = G__93600;
count__93523_93584 = G__93601;
i__93524_93585 = G__93602;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n\n");

var seq__93525_93603 = cljs.core.seq(sorted_ids);
var chunk__93526_93604 = null;
var count__93527_93605 = (0);
var i__93528_93606 = (0);
while(true){
if((i__93528_93606 < count__93527_93605)){
var id_93607 = chunk__93526_93604.cljs$core$IIndexed$_nth$arity$2(null,i__93528_93606);
var s_93608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_93607);
var sum_93609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93608,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_93610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93608,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_93607) : format_id_fn.call(null,id_93607)));

var seq__93545_93611 = cljs.core.seq(columns);
var chunk__93546_93612 = null;
var count__93547_93613 = (0);
var i__93548_93614 = (0);
while(true){
if((i__93548_93614 < count__93547_93613)){
var column_93615 = chunk__93546_93612.cljs$core$IIndexed$_nth$arity$2(null,i__93548_93614);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__93551_93616 = column_93615;
var G__93551_93617__$1 = (((G__93551_93616 instanceof cljs.core.Keyword))?G__93551_93616.fqn:null);
switch (G__93551_93617__$1) {
case "n-calls":
append_col(column_93615,taoensso.tufte.stats.fmt_calls(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93608,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_93615,taoensso.tufte.stats.fmt_nano(mean_93610));

break;
case "mad":
append_col(column_93615,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93608,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_93610)].join(''));

break;
case "total":
append_col(column_93615,taoensso.tufte.stats.perc(sum_93609,clock_total__$1));

break;
case "clock":
append_col(column_93615,taoensso.tufte.stats.fmt_nano(sum_93609));

break;
default:
append_col(column_93615,taoensso.tufte.stats.fmt_nano(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93608,column_93615)));

}


var G__93619 = seq__93545_93611;
var G__93620 = chunk__93546_93612;
var G__93621 = count__93547_93613;
var G__93622 = (i__93548_93614 + (1));
seq__93545_93611 = G__93619;
chunk__93546_93612 = G__93620;
count__93547_93613 = G__93621;
i__93548_93614 = G__93622;
continue;
} else {
var temp__5804__auto___93623 = cljs.core.seq(seq__93545_93611);
if(temp__5804__auto___93623){
var seq__93545_93624__$1 = temp__5804__auto___93623;
if(cljs.core.chunked_seq_QMARK_(seq__93545_93624__$1)){
var c__5568__auto___93625 = cljs.core.chunk_first(seq__93545_93624__$1);
var G__93626 = cljs.core.chunk_rest(seq__93545_93624__$1);
var G__93627 = c__5568__auto___93625;
var G__93628 = cljs.core.count(c__5568__auto___93625);
var G__93629 = (0);
seq__93545_93611 = G__93626;
chunk__93546_93612 = G__93627;
count__93547_93613 = G__93628;
i__93548_93614 = G__93629;
continue;
} else {
var column_93630 = cljs.core.first(seq__93545_93624__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__93552_93631 = column_93630;
var G__93552_93632__$1 = (((G__93552_93631 instanceof cljs.core.Keyword))?G__93552_93631.fqn:null);
switch (G__93552_93632__$1) {
case "n-calls":
append_col(column_93630,taoensso.tufte.stats.fmt_calls(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93608,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_93630,taoensso.tufte.stats.fmt_nano(mean_93610));

break;
case "mad":
append_col(column_93630,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93608,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_93610)].join(''));

break;
case "total":
append_col(column_93630,taoensso.tufte.stats.perc(sum_93609,clock_total__$1));

break;
case "clock":
append_col(column_93630,taoensso.tufte.stats.fmt_nano(sum_93609));

break;
default:
append_col(column_93630,taoensso.tufte.stats.fmt_nano(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93608,column_93630)));

}


var G__93634 = cljs.core.next(seq__93545_93624__$1);
var G__93635 = null;
var G__93636 = (0);
var G__93637 = (0);
seq__93545_93611 = G__93634;
chunk__93546_93612 = G__93635;
count__93547_93613 = G__93636;
i__93548_93614 = G__93637;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__93638 = seq__93525_93603;
var G__93639 = chunk__93526_93604;
var G__93640 = count__93527_93605;
var G__93641 = (i__93528_93606 + (1));
seq__93525_93603 = G__93638;
chunk__93526_93604 = G__93639;
count__93527_93605 = G__93640;
i__93528_93606 = G__93641;
continue;
} else {
var temp__5804__auto___93642 = cljs.core.seq(seq__93525_93603);
if(temp__5804__auto___93642){
var seq__93525_93643__$1 = temp__5804__auto___93642;
if(cljs.core.chunked_seq_QMARK_(seq__93525_93643__$1)){
var c__5568__auto___93644 = cljs.core.chunk_first(seq__93525_93643__$1);
var G__93645 = cljs.core.chunk_rest(seq__93525_93643__$1);
var G__93646 = c__5568__auto___93644;
var G__93647 = cljs.core.count(c__5568__auto___93644);
var G__93648 = (0);
seq__93525_93603 = G__93645;
chunk__93526_93604 = G__93646;
count__93527_93605 = G__93647;
i__93528_93606 = G__93648;
continue;
} else {
var id_93649 = cljs.core.first(seq__93525_93643__$1);
var s_93650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_93649);
var sum_93651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93650,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_93652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93650,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_93649) : format_id_fn.call(null,id_93649)));

var seq__93553_93653 = cljs.core.seq(columns);
var chunk__93554_93654 = null;
var count__93555_93655 = (0);
var i__93556_93656 = (0);
while(true){
if((i__93556_93656 < count__93555_93655)){
var column_93657 = chunk__93554_93654.cljs$core$IIndexed$_nth$arity$2(null,i__93556_93656);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__93559_93658 = column_93657;
var G__93559_93659__$1 = (((G__93559_93658 instanceof cljs.core.Keyword))?G__93559_93658.fqn:null);
switch (G__93559_93659__$1) {
case "n-calls":
append_col(column_93657,taoensso.tufte.stats.fmt_calls(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93650,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_93657,taoensso.tufte.stats.fmt_nano(mean_93652));

break;
case "mad":
append_col(column_93657,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93650,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_93652)].join(''));

break;
case "total":
append_col(column_93657,taoensso.tufte.stats.perc(sum_93651,clock_total__$1));

break;
case "clock":
append_col(column_93657,taoensso.tufte.stats.fmt_nano(sum_93651));

break;
default:
append_col(column_93657,taoensso.tufte.stats.fmt_nano(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93650,column_93657)));

}


var G__93661 = seq__93553_93653;
var G__93662 = chunk__93554_93654;
var G__93663 = count__93555_93655;
var G__93664 = (i__93556_93656 + (1));
seq__93553_93653 = G__93661;
chunk__93554_93654 = G__93662;
count__93555_93655 = G__93663;
i__93556_93656 = G__93664;
continue;
} else {
var temp__5804__auto___93665__$1 = cljs.core.seq(seq__93553_93653);
if(temp__5804__auto___93665__$1){
var seq__93553_93666__$1 = temp__5804__auto___93665__$1;
if(cljs.core.chunked_seq_QMARK_(seq__93553_93666__$1)){
var c__5568__auto___93667 = cljs.core.chunk_first(seq__93553_93666__$1);
var G__93668 = cljs.core.chunk_rest(seq__93553_93666__$1);
var G__93669 = c__5568__auto___93667;
var G__93670 = cljs.core.count(c__5568__auto___93667);
var G__93671 = (0);
seq__93553_93653 = G__93668;
chunk__93554_93654 = G__93669;
count__93555_93655 = G__93670;
i__93556_93656 = G__93671;
continue;
} else {
var column_93672 = cljs.core.first(seq__93553_93666__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__93560_93673 = column_93672;
var G__93560_93674__$1 = (((G__93560_93673 instanceof cljs.core.Keyword))?G__93560_93673.fqn:null);
switch (G__93560_93674__$1) {
case "n-calls":
append_col(column_93672,taoensso.tufte.stats.fmt_calls(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93650,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_93672,taoensso.tufte.stats.fmt_nano(mean_93652));

break;
case "mad":
append_col(column_93672,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93650,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_93652)].join(''));

break;
case "total":
append_col(column_93672,taoensso.tufte.stats.perc(sum_93651,clock_total__$1));

break;
case "clock":
append_col(column_93672,taoensso.tufte.stats.fmt_nano(sum_93651));

break;
default:
append_col(column_93672,taoensso.tufte.stats.fmt_nano(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_93650,column_93672)));

}


var G__93676 = cljs.core.next(seq__93553_93666__$1);
var G__93677 = null;
var G__93678 = (0);
var G__93679 = (0);
seq__93553_93653 = G__93676;
chunk__93554_93654 = G__93677;
count__93555_93655 = G__93678;
i__93556_93656 = G__93679;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__93680 = cljs.core.next(seq__93525_93643__$1);
var G__93681 = null;
var G__93682 = (0);
var G__93683 = (0);
seq__93525_93603 = G__93680;
chunk__93526_93604 = G__93681;
count__93527_93605 = G__93682;
i__93528_93606 = G__93683;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Accounted");

var seq__93561_93684 = cljs.core.seq(columns);
var chunk__93562_93685 = null;
var count__93563_93686 = (0);
var i__93564_93687 = (0);
while(true){
if((i__93564_93687 < count__93563_93686)){
var column_93688 = chunk__93562_93685.cljs$core$IIndexed$_nth$arity$2(null,i__93564_93687);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__93567_93689 = column_93688;
var G__93567_93690__$1 = (((G__93567_93689 instanceof cljs.core.Keyword))?G__93567_93689.fqn:null);
switch (G__93567_93690__$1) {
case "total":
append_col(column_93688,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_93688,taoensso.tufte.stats.fmt_nano(accounted_total));

break;
default:
append_col(column_93688,"");

}


var G__93692 = seq__93561_93684;
var G__93693 = chunk__93562_93685;
var G__93694 = count__93563_93686;
var G__93695 = (i__93564_93687 + (1));
seq__93561_93684 = G__93692;
chunk__93562_93685 = G__93693;
count__93563_93686 = G__93694;
i__93564_93687 = G__93695;
continue;
} else {
var temp__5804__auto___93696 = cljs.core.seq(seq__93561_93684);
if(temp__5804__auto___93696){
var seq__93561_93697__$1 = temp__5804__auto___93696;
if(cljs.core.chunked_seq_QMARK_(seq__93561_93697__$1)){
var c__5568__auto___93698 = cljs.core.chunk_first(seq__93561_93697__$1);
var G__93699 = cljs.core.chunk_rest(seq__93561_93697__$1);
var G__93700 = c__5568__auto___93698;
var G__93701 = cljs.core.count(c__5568__auto___93698);
var G__93702 = (0);
seq__93561_93684 = G__93699;
chunk__93562_93685 = G__93700;
count__93563_93686 = G__93701;
i__93564_93687 = G__93702;
continue;
} else {
var column_93703 = cljs.core.first(seq__93561_93697__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__93568_93704 = column_93703;
var G__93568_93705__$1 = (((G__93568_93704 instanceof cljs.core.Keyword))?G__93568_93704.fqn:null);
switch (G__93568_93705__$1) {
case "total":
append_col(column_93703,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_93703,taoensso.tufte.stats.fmt_nano(accounted_total));

break;
default:
append_col(column_93703,"");

}


var G__93707 = cljs.core.next(seq__93561_93697__$1);
var G__93708 = null;
var G__93709 = (0);
var G__93710 = (0);
seq__93561_93684 = G__93707;
chunk__93562_93685 = G__93708;
count__93563_93686 = G__93709;
i__93564_93687 = G__93710;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Clock");

var seq__93569_93711 = cljs.core.seq(columns);
var chunk__93570_93712 = null;
var count__93571_93713 = (0);
var i__93572_93714 = (0);
while(true){
if((i__93572_93714 < count__93571_93713)){
var column_93715 = chunk__93570_93712.cljs$core$IIndexed$_nth$arity$2(null,i__93572_93714);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__93575_93716 = column_93715;
var G__93575_93717__$1 = (((G__93575_93716 instanceof cljs.core.Keyword))?G__93575_93716.fqn:null);
switch (G__93575_93717__$1) {
case "total":
append_col(column_93715,"100%");

break;
case "clock":
append_col(column_93715,taoensso.tufte.stats.fmt_nano(clock_total__$1));

break;
default:
append_col(column_93715,"");

}


var G__93719 = seq__93569_93711;
var G__93720 = chunk__93570_93712;
var G__93721 = count__93571_93713;
var G__93722 = (i__93572_93714 + (1));
seq__93569_93711 = G__93719;
chunk__93570_93712 = G__93720;
count__93571_93713 = G__93721;
i__93572_93714 = G__93722;
continue;
} else {
var temp__5804__auto___93723 = cljs.core.seq(seq__93569_93711);
if(temp__5804__auto___93723){
var seq__93569_93724__$1 = temp__5804__auto___93723;
if(cljs.core.chunked_seq_QMARK_(seq__93569_93724__$1)){
var c__5568__auto___93725 = cljs.core.chunk_first(seq__93569_93724__$1);
var G__93726 = cljs.core.chunk_rest(seq__93569_93724__$1);
var G__93727 = c__5568__auto___93725;
var G__93728 = cljs.core.count(c__5568__auto___93725);
var G__93729 = (0);
seq__93569_93711 = G__93726;
chunk__93570_93712 = G__93727;
count__93571_93713 = G__93728;
i__93572_93714 = G__93729;
continue;
} else {
var column_93730 = cljs.core.first(seq__93569_93724__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__93576_93731 = column_93730;
var G__93576_93732__$1 = (((G__93576_93731 instanceof cljs.core.Keyword))?G__93576_93731.fqn:null);
switch (G__93576_93732__$1) {
case "total":
append_col(column_93730,"100%");

break;
case "clock":
append_col(column_93730,taoensso.tufte.stats.fmt_nano(clock_total__$1));

break;
default:
append_col(column_93730,"");

}


var G__93734 = cljs.core.next(seq__93569_93724__$1);
var G__93735 = null;
var G__93736 = (0);
var G__93737 = (0);
seq__93569_93711 = G__93734;
chunk__93570_93712 = G__93735;
count__93571_93713 = G__93736;
i__93572_93714 = G__93737;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});

//# sourceMappingURL=taoensso.tufte.stats.js.map
