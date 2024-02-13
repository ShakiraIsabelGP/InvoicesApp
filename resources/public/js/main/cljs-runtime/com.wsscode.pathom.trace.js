goog.provide('com.wsscode.pathom.trace');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),"null",new cljs.core.Keyword("com.wsscode.pathom.trace","enter","com.wsscode.pathom.trace/enter",-1518635329),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),null,new cljs.core.Keyword("com.wsscode.pathom.trace","enter","com.wsscode.pathom.trace/enter",-1518635329),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__54557){
return cljs.core.map_QMARK_(G__54557);
})], null),(function (G__54557){
return cljs.core.map_QMARK_(G__54557);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__54558){
return cljs.core.vector_QMARK_(G__54558);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
com.wsscode.pathom.trace.now = (function com$wsscode$pathom$trace$now(){
return cljs.core.inst_ms((new Date()));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.trace","trace","com.wsscode.pathom.trace/trace",1837321991,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"event","event",301435442)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810),null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)),null,null,null));


/**
 * @type {function(!cljs.core.IMap, *): *}
 */
com.wsscode.pathom.trace.trace = (function com$wsscode$pathom$trace$trace(env,event){
var map__54563 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"event","event",301435442)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810),null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)),null,null,null);
var map__54563__$1 = cljs.core.__destructure_map(map__54563);
var retspec54560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54563__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec54559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54563__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec54559)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/wsscode/pathom/trace.cljc:28 trace's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec54559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,event], null));
} else {
}

var f54562 = (function (env__$1,event__$1){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
if(cljs.core.truth_(temp__5802__auto__)){
var event_trace = temp__5802__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(event_trace,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402),com.wsscode.pathom.trace.now()], 0)));
} else {
return null;
}
});
var ret54561 = f54562(env,event);
if(cljs.core.truth_(retspec54560)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/wsscode/pathom/trace.cljc:28 trace's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec54560,ret54561);
} else {
}

return ret54561;
});
com.wsscode.pathom.trace.trace_enter = (function com$wsscode$pathom$trace$trace_enter(var_args){
var G__54565 = arguments.length;
switch (G__54565) {
case 2:
return com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2 = (function (env,event){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pathom-trace-");
com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.Keyword("com.wsscode.pathom.trace","enter","com.wsscode.pathom.trace/enter",-1518635329),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),id], 0)));

return id;
}));

(com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$3 = (function (env,event,trace_id){
com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.Keyword("com.wsscode.pathom.trace","enter","com.wsscode.pathom.trace/enter",-1518635329),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),trace_id], 0)));

return trace_id;
}));

(com.wsscode.pathom.trace.trace_enter.cljs$lang$maxFixedArity = 3);

com.wsscode.pathom.trace.trace_leave = (function com$wsscode$pathom$trace$trace_leave(var_args){
var G__54567 = arguments.length;
switch (G__54567) {
case 2:
return com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$2 = (function (env,trace_id){
return com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),trace_id], null));
}));

(com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3 = (function (env,trace_id,event){
com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),trace_id], 0)));

return trace_id;
}));

(com.wsscode.pathom.trace.trace_leave.cljs$lang$maxFixedArity = 3);

com.wsscode.pathom.trace.live_trace_BANG_ = (function com$wsscode$pathom$trace$live_trace_BANG_(trace_atom){
return cljs.core.add_watch(trace_atom,new cljs.core.Keyword(null,"live","live",-1610148039),(function (_,___$1,___$2,n){
var evt = cljs.core.peek(n);
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983).cljs$core$IFn$_invoke$arity$1(evt),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(evt,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983))], null)], 0)),"\n"].join('')], 0));
}));
});
com.wsscode.pathom.trace.compute_durations = (function com$wsscode$pathom$trace$compute_durations(trace){
var leave_items = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__54570_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),p1__54570_SHARP_);
}),new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),cljs.core.identity))),trace);
var initial_time = new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402).cljs$core$IFn$_invoke$arity$1(cljs.core.first(trace));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (e){

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914).cljs$core$IFn$_invoke$arity$1(e));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__54571){
var map__54572 = p__54571;
var map__54572__$1 = cljs.core.__destructure_map(map__54572);
var e = map__54572__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54572__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402));
var e__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),(timestamp - initial_time));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(leave_items,id);
if(cljs.core.truth_(temp__5802__auto__)){
var map__54573 = temp__5802__auto__;
var map__54573__$1 = cljs.core.__destructure_map(map__54573);
var leave = map__54573__$1;
var et = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54573__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(e__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp-leave","com.wsscode.pathom.trace/timestamp-leave",-1879905911),et,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),(et - timestamp)], 0)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(leave,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402))], 0)),new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914)], 0));
} else {
return e__$1;
}
}))),trace);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.trace !== 'undefined') && (typeof com.wsscode.pathom.trace.trace_tree_collect !== 'undefined')){
} else {
com.wsscode.pathom.trace.trace_tree_collect = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54574 = cljs.core.get_global_hierarchy;
return (fexpr__54574.cljs$core$IFn$_invoke$arity$0 ? fexpr__54574.cljs$core$IFn$_invoke$arity$0() : fexpr__54574.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.trace","trace-tree-collect"),(function (_x,row){
return new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983).cljs$core$IFn$_invoke$arity$1(row);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x,_){
return x;
}));
com.wsscode.pathom.trace.tree_assoc_detail = (function com$wsscode$pathom$trace$tree_assoc_detail(row,x,keys){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null),keys)));
});
com.wsscode.pathom.trace.trace_style = (function com$wsscode$pathom$trace$trace_style(row,style){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),style);
});
com.wsscode.pathom.trace.tree_assoc_key_detail = (function com$wsscode$pathom$trace$tree_assoc_key_detail(p__54575,x,keys){
var map__54576 = p__54575;
var map__54576__$1 = cljs.core.__destructure_map(map__54576);
var row = map__54576__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54576__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null),keys)));
});
com.wsscode.pathom.trace.trace__GT_tree_STAR_ = (function com$wsscode$pathom$trace$trace__GT_tree_STAR_(paths,path){
return new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x,p__54578){
var map__54579 = p__54578;
var map__54579__$1 = cljs.core.__destructure_map(map__54579);
var row = map__54579__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54579__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983));
var relative_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54579__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54579__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__54580 = event;
var G__54580__$1 = (((G__54580 instanceof cljs.core.Keyword))?G__54580.fqn:null);
switch (G__54580__$1) {
case "com.wsscode.pathom.core/trace-plugin":
case "com.wsscode.pathom.parser/parse-loop":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"response","response",-1068424192),(function (p1__54577_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661)], null)),p1__54577_SHARP_], 0));
}));

break;
case "com.wsscode.pathom.parser/process-key":
var next_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key);
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(x),next_path)){
return x;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661)], null),path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2(paths,next_path) : com.wsscode.pathom.trace.trace__GT_tree_STAR_.call(null,paths,next_path)),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null))], 0)),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),next_path)),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.conj,next_path);
}

break;
case "com.wsscode.pathom.core/join-seq":
var count = new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836).cljs$core$IFn$_invoke$arity$1(row);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x__$1,i){
var next_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return cljs.core.assoc_in(x__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),i], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2(paths,next_path) : com.wsscode.pathom.trace.trace__GT_tree_STAR_.call(null,paths,next_path)),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)], 0)),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),next_path));
}),x,cljs.core.range.cljs$core$IFn$_invoke$arity$1(count));

break;
case "com.wsscode.pathom.parser/async-return":
case "com.wsscode.pathom.parser/call-read":
case "com.wsscode.pathom.parser/external-wait-key":
case "com.wsscode.pathom.parser/skip-resolved-key":
case "com.wsscode.pathom.parser/skip-wait-key":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null)));

break;
case "com.wsscode.pathom.parser/trigger-reader-retry":
case "com.wsscode.pathom.parser/trigger-recheck-schedule":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)], null)));

break;
case "com.wsscode.pathom.parser/max-iterations-reached":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)], null)));

break;
case "com.wsscode.pathom.trace/trace-done":
case "com.wsscode.pathom.parser/flush-watchers-loop":
case "com.wsscode.pathom.parser/process-pending":
case "com.wsscode.pathom.parser/reset-loop":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)], null)));

break;
case "com.wsscode.pathom.parser/merge-result":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x__$1,key__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null)));
}),x,cljs.core.keys(new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673).cljs$core$IFn$_invoke$arity$1(row)));

break;
case "com.wsscode.pathom.connect/batch-items-ready":
case "com.wsscode.pathom.connect/batch-result-error":
case "com.wsscode.pathom.connect/batch-result-ready":
case "com.wsscode.pathom.connect/call-resolver":
case "com.wsscode.pathom.connect/call-resolver-batch":
case "com.wsscode.pathom.connect/call-resolver-with-cache":
case "com.wsscode.pathom.connect/compute-plan":
case "com.wsscode.pathom.connect/reader3-enter":
case "com.wsscode.pathom.connect/reader3-entity-shape":
case "com.wsscode.pathom.connect/reader3-prepare-ast":
case "com.wsscode.pathom.connect/reader3-execute":
case "com.wsscode.pathom.connect/invalid-resolve-response":
case "com.wsscode.pathom.connect/merge-resolver-response":
case "com.wsscode.pathom.connect/resolver-error":
case "com.wsscode.pathom.connect/schedule-resolver":
case "com.wsscode.pathom.connect/waiting-resolver":
case "com.wsscode.pathom.core/parallel-sequence-loop":
case "com.wsscode.pathom.parser/watch-pending-timeout":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)], null)));

break;
case "com.wsscode.pathom.parser/value-return":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key], null),cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),(relative_timestamp - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null))));

break;
default:
return com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IFn$_invoke$arity$2(x,row);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path)));
});
com.wsscode.pathom.trace.trace__GT_tree = (function com$wsscode$pathom$trace$trace__GT_tree(trace){
var paths = cljs.core.group_by(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.trace.compute_durations(trace));
return com.wsscode.pathom.trace.trace__GT_tree_STAR_(paths,cljs.core.PersistentVector.EMPTY);
});
com.wsscode.pathom.trace.compute_details_duration = (function com$wsscode$pathom$trace$compute_details_duration(x){
var res = cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810),(function (p1__54581_SHARP_){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),p1__54581_SHARP_));
}));
var last_detail = cljs.core.peek(new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810).cljs$core$IFn$_invoke$arity$1(res));
var last_ts = (new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295).cljs$core$IFn$_invoke$arity$2(last_detail,(0)) + new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700).cljs$core$IFn$_invoke$arity$2(last_detail,(0)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),(function (p1__54582_SHARP_){
var x__5130__auto__ = (function (){var or__5045__auto__ = p1__54582_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var y__5131__auto__ = (last_ts - new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700).cljs$core$IFn$_invoke$arity$2(res,(0)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
}));
});
com.wsscode.pathom.trace.normalize_tree_details = (function com$wsscode$pathom$trace$normalize_tree_details(trace_tree){
return clojure.walk.postwalk((function (x){
var G__54583 = x;
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810))))){
return com.wsscode.pathom.trace.compute_details_duration(G__54583);
} else {
return G__54583;
}
}),trace_tree);
});
com.wsscode.pathom.trace.compute_d3_tree = (function com$wsscode$pathom$trace$compute_d3_tree(p__54584){
var map__54585 = p__54584;
var map__54585__$1 = cljs.core.__destructure_map(map__54585);
var relative_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54585__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54585__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54585__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54585__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54585__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54585__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__54586 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),relative_timestamp,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"duration","duration",1444101068),(function (){var or__5045__auto__ = duration;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"details","details",1956795411),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__54587){
var map__54588 = p__54587;
var map__54588__$1 = cljs.core.__destructure_map(map__54588);
var row = map__54588__$1;
var relative_timestamp__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700));
var duration__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983));
var details__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__54589){
var vec__54590 = p__54589;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54590,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54590,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v], null);
})),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(row,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], 0)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.name(event),new cljs.core.Keyword(null,"duration","duration",1444101068),(function (){var or__5045__auto__ = duration__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),relative_timestamp__$1], null),details__$1], 0));
}),details)], null);
var G__54586__$1 = (cljs.core.truth_(key)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54586,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)):G__54586);
if(cljs.core.truth_(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54586__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.trace.compute_d3_tree,cljs.core.second),children)));
} else {
return G__54586__$1;
}
});
com.wsscode.pathom.trace.trace__GT_viz = (function com$wsscode$pathom$trace$trace__GT_viz(trace){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.trace.compute_d3_tree(com.wsscode.pathom.trace.normalize_tree_details(com.wsscode.pathom.trace.trace__GT_tree(trace))),new cljs.core.Keyword(null,"hint","hint",439639918),"Query");
});
com.wsscode.pathom.trace.wrap_parser_trace = (function com$wsscode$pathom$trace$wrap_parser_trace(parser){
return (function com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal(env,tx){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),null], null), null),tx))){
var trace_STAR_ = (function (){var or__5045__auto__ = new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
})();
var env_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782),trace_STAR_);
var parser_trace = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","trace-plugin","com.wsscode.pathom.trace/trace-plugin",874601792)], null));
var res__53579__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,tx) : parser.call(null,env_SINGLEQUOTE_,tx));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53579__auto__)){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_54617){
var state_val_54618 = (state_54617[(1)]);
if((state_val_54618 === (1))){
var state_54617__$1 = state_54617;
var statearr_54619_54693 = state_54617__$1;
(statearr_54619_54693[(2)] = null);

(statearr_54619_54693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (2))){
var _ = (function (){var statearr_54620 = state_54617;
(statearr_54620[(4)] = cljs.core.cons((5),(state_54617[(4)])));

return statearr_54620;
})();
var state_54617__$1 = state_54617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54617__$1,(6),res__53579__auto__);
} else {
if((state_val_54618 === (3))){
var inst_54615 = (state_54617[(2)]);
var state_54617__$1 = state_54617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54617__$1,inst_54615);
} else {
if((state_val_54618 === (4))){
var inst_54593 = (state_54617[(2)]);
var state_54617__$1 = state_54617;
var statearr_54622_54695 = state_54617__$1;
(statearr_54622_54695[(2)] = inst_54593);

(statearr_54622_54695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (5))){
var _ = (function (){var statearr_54623 = state_54617;
(statearr_54623[(4)] = cljs.core.rest((state_54617[(4)])));

return statearr_54623;
})();
var state_54617__$1 = state_54617;
var ex54621 = (state_54617__$1[(2)]);
var statearr_54624_54696 = state_54617__$1;
(statearr_54624_54696[(5)] = ex54621);


var statearr_54625_54697 = state_54617__$1;
(statearr_54625_54697[(1)] = (4));

(statearr_54625_54697[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (6))){
var inst_54600 = (state_54617[(2)]);
var inst_54601 = com.wsscode.async.async_cljs.throw_err(inst_54600);
var inst_54602 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54603 = [new cljs.core.Keyword("com.wsscode.pathom.trace","trace-plugin","com.wsscode.pathom.trace/trace-plugin",874601792)];
var inst_54604 = cljs.core.PersistentHashMap.fromArrays(inst_54602,inst_54603);
var inst_54605 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE_,parser_trace,inst_54604);
var inst_54606 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54607 = [new cljs.core.Keyword("com.wsscode.pathom.trace","trace-done","com.wsscode.pathom.trace/trace-done",-1293580361)];
var inst_54608 = cljs.core.PersistentHashMap.fromArrays(inst_54606,inst_54607);
var inst_54609 = com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,inst_54608);
var inst_54610 = cljs.core.deref(trace_STAR_);
var inst_54611 = com.wsscode.pathom.trace.trace__GT_viz(inst_54610);
var inst_54612 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54601,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),inst_54611);
var _ = (function (){var statearr_54626 = state_54617;
(statearr_54626[(4)] = cljs.core.rest((state_54617[(4)])));

return statearr_54626;
})();
var state_54617__$1 = (function (){var statearr_54627 = state_54617;
(statearr_54627[(7)] = inst_54605);

(statearr_54627[(8)] = inst_54609);

return statearr_54627;
})();
var statearr_54628_54700 = state_54617__$1;
(statearr_54628_54700[(2)] = inst_54612);

(statearr_54628_54700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto____0 = (function (){
var statearr_54629 = [null,null,null,null,null,null,null,null,null];
(statearr_54629[(0)] = com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto__);

(statearr_54629[(1)] = (1));

return statearr_54629;
});
var com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto____1 = (function (state_54617){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_54617);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e54630){var ex__42124__auto__ = e54630;
var statearr_54631_54705 = state_54617;
(statearr_54631_54705[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_54617[(4)]))){
var statearr_54632_54706 = state_54617;
(statearr_54632_54706[(1)] = cljs.core.first((state_54617[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54707 = state_54617;
state_54617 = G__54707;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto__ = function(state_54617){
switch(arguments.length){
case 0:
return com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto____1.call(this,state_54617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto____0;
com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto____1;
return com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_54633 = f__42153__auto__();
(statearr_54633[(6)] = c__42152__auto__);

return statearr_54633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
} else {
var res = res__53579__auto__;
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE_,parser_trace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","trace-plugin","com.wsscode.pathom.trace/trace-plugin",874601792)], null));

com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","trace-done","com.wsscode.pathom.trace/trace-done",-1293580361)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),com.wsscode.pathom.trace.trace__GT_viz(cljs.core.deref(trace_STAR_)));
}
} else {
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
}
});
});
com.wsscode.pathom.trace.trace_plugin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),com.wsscode.pathom.trace.wrap_parser_trace,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("com.wsscode.pathom.trace","trace","com.wsscode.pathom.trace/trace",1837321991,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (_env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),null], null);
})], null)], null)], null);

//# sourceMappingURL=com.wsscode.pathom.trace.js.map
