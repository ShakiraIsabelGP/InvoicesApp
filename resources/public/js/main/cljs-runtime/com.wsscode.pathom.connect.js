goog.provide('com.wsscode.pathom.connect');

com.wsscode.pathom.connect.atom_with = (function com$wsscode$pathom$connect$atom_with(spec){
return cljs.spec.alpha.with_gen(com.wsscode.pathom.core.atom_QMARK_,(function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.atom,cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(spec)], 0));
}));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70808){
return cljs.core.set_QMARK_(G__70808);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","alias?","com.wsscode.pathom.connect/alias?",-1915061463),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70809){
return cljs.core.map_QMARK_(G__70809);
})], null),(function (G__70809){
return cljs.core.map_QMARK_(G__70809);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70810){
return cljs.core.map_QMARK_(G__70810);
})], null),(function (G__70810){
return cljs.core.map_QMARK_(G__70810);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70811){
return cljs.core.map_QMARK_(G__70811);
})], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70812){
return ((cljs.core.vector_QMARK_(G__70812)) && (((((function (){var or__5045__auto__ = (1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__70812))) && ((cljs.core.bounded_count((1)
,G__70812) <= (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (9007199254740991);
}
})())))));
})], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70813){
return cljs.core.map_QMARK_(G__70813);
})], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70814){
return cljs.core.map_QMARK_(G__70814);
}),(function (G__70814){
return cljs.core.contains_QMARK_(G__70814,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__70814){
return ((cljs.core.map_QMARK_(G__70814)) && (cljs.core.contains_QMARK_(G__70814,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70815){
return cljs.core.map_QMARK_(G__70815);
})], null),null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70816){
return cljs.core.map_QMARK_(G__70816);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70817){
return cljs.core.map_QMARK_(G__70817);
}),(function (G__70817){
return cljs.core.contains_QMARK_(G__70817,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__70817){
return ((cljs.core.map_QMARK_(G__70817)) && (cljs.core.contains_QMARK_(G__70817,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70818){
return cljs.core.map_QMARK_(G__70818);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70819){
return cljs.core.map_QMARK_(G__70819);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70821){
return cljs.core.set_QMARK_(G__70821);
})], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70820){
return cljs.core.map_QMARK_(G__70820);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70822){
return cljs.core.map_QMARK_(G__70822);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70823){
return cljs.core.map_QMARK_(G__70823);
})], null),(function (G__70823){
return cljs.core.map_QMARK_(G__70823);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70831){
return cljs.core.set_QMARK_(G__70831);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70832){
return cljs.core.coll_QMARK_(G__70832);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70833){
return cljs.core.map_QMARK_(G__70833);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70835){
return ((cljs.core.vector_QMARK_(G__70835)) && (((((function (){var or__5045__auto__ = (2);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__70835))) && ((cljs.core.bounded_count((2)
,G__70835) <= (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (9007199254740991);
}
})())))));
})], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70836){
return cljs.core.map_QMARK_(G__70836);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70837){
return cljs.core.set_QMARK_(G__70837);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70838){
return cljs.core.map_QMARK_(G__70838);
})], null),(function (G__70838){
return cljs.core.map_QMARK_(G__70838);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70839){
return cljs.core.map_QMARK_(G__70839);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__20422__auto__,v__20423__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__20423__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70840){
return cljs.core.map_QMARK_(G__70840);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70841){
return cljs.core.map_QMARK_(G__70841);
}),(function (G__70841){
return cljs.core.contains_QMARK_(G__70841,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__70841){
return cljs.core.contains_QMARK_(G__70841,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__70841){
return ((cljs.core.map_QMARK_(G__70841)) && (((cljs.core.contains_QMARK_(G__70841,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__70841,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70842){
return cljs.core.map_QMARK_(G__70842);
}),(function (G__70842){
return cljs.core.contains_QMARK_(G__70842,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__70842){
return ((cljs.core.map_QMARK_(G__70842)) && (cljs.core.contains_QMARK_(G__70842,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70843){
return cljs.core.coll_QMARK_(G__70843);
})], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70844){
return cljs.core.coll_QMARK_(G__70844);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70845){
return cljs.core.coll_QMARK_(G__70845);
})], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70846){
return cljs.core.set_QMARK_(G__70846);
})], null),null));
com.wsscode.pathom.connect.resolver_data = com.wsscode.pathom.connect.indexes.resolver_data;
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__70847 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__70847);
} else {
return G__70847;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
});
com.wsscode.pathom.connect.flat_query = (function com$wsscode$pathom$connect$flat_query(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.flat_query,cljs.core.vals(query)));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.merge_io_attrs = com.wsscode.pathom.connect.indexes.merge_io_attrs;
com.wsscode.pathom.connect.normalize_io = com.wsscode.pathom.connect.indexes.normalize_io;
com.wsscode.pathom.connect.merge_io = com.wsscode.pathom.connect.indexes.merge_io;
com.wsscode.pathom.connect.merge_oir = com.wsscode.pathom.connect.indexes.merge_oir;
com.wsscode.pathom.connect.merge_grow = (function com$wsscode$pathom$connect$merge_grow(a,b){
if(((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.connect.merge_grow,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if((b == null)){
return a;
} else {
return b;

}
}
}
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.connect !== 'undefined') && (typeof com.wsscode.pathom.connect.index_merger !== 'undefined')){
} else {
/**
 * This is an extensible gateway so you can define different strategies for merging different
 *   kinds of indexes.
 */
com.wsscode.pathom.connect.index_merger = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__70848 = cljs.core.get_global_hierarchy;
return (fexpr__70848.cljs$core$IFn$_invoke$arity$0 ? fexpr__70848.cljs$core$IFn$_invoke$arity$0() : fexpr__70848.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.connect","index-merger"),(function (k,_,___$1){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),(function (_,ia,ib){
return (com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2(ia,ib) : com.wsscode.pathom.connect.merge_io.call(null,ia,ib));
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),(function (_,ia,ib){
return (com.wsscode.pathom.connect.merge_oir.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_oir.cljs$core$IFn$_invoke$arity$2(ia,ib) : com.wsscode.pathom.connect.merge_oir.call(null,ia,ib));
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (_,a,b){
return com.wsscode.pathom.connect.merge_grow(a,b);
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,a,b){
return com.wsscode.pathom.connect.merge_grow(a,b);
}));
com.wsscode.pathom.connect.merge_indexes = (function com$wsscode$pathom$connect$merge_indexes(ia,ib){
return cljs.core.reduce_kv((function (idx,k,v){
if(cljs.core.contains_QMARK_(idx,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__70849_SHARP_){
return com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__70849_SHARP_,v);
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__70852){
var map__70853 = p__70852;
var map__70853__$1 = cljs.core.__destructure_map(map__70853);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70853__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__70854 = children;
var G__70854__$1 = (((G__70854 == null))?null:cljs.core.first(G__70854));
var G__70854__$2 = (((G__70854__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__70854__$1));
if((G__70854__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__70854__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__70855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__70855,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__70850_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__70850_SHARP_],null))));
}),x);
}),(function (p1__70851_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__70851_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__70851_SHARP_));
}))),children__$1);
} else {
return G__70855;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__70856){
var map__70857 = p__70856;
var map__70857__$1 = cljs.core.__destructure_map(map__70857);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__70858 = children;
var G__70858__$1 = (((G__70858 == null))?null:cljs.core.first(G__70858));
var G__70858__$2 = (((G__70858__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__70858__$1));
if((G__70858__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__70858__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__70861){
var map__70862 = p__70861;
var map__70862__$1 = cljs.core.__destructure_map(map__70862);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70862__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70862__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70862__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__70859_SHARP_){
return cljs.core.contains_QMARK_(input,p1__70859_SHARP_);
}),com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
}),_LT__GT_,(function (){var G__70863 = input_count;
switch (G__70863) {
case (0):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY], null);

break;
case (1):
return input;

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);

}
})());
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
}),_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
}),_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__70864){
var map__70865 = p__70864;
var map__70865__$1 = cljs.core.__destructure_map(map__70865);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70865__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__70866 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__70866,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__70866;
}
}),_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__70860_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__70860_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(output)], 0)):cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982),edn_query_language.core.query__GT_ast(output))));
});
/**
 * Low level function to add resolvers to the index. This function adds the resolver
 *   configuration to the index set, adds the resolver to the ::pc/index-resolvers, add
 *   the output to input index in the ::pc/index-oir and the reverse index for auto-complete
 *   to the index ::pc/index-io.
 * 
 *   This is a low level function, for adding to your index prefer using `pc/register`.
 */
com.wsscode.pathom.connect.add = (function com$wsscode$pathom$connect$add(var_args){
var G__70869 = arguments.length;
switch (G__70869) {
case 2:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2 = (function (indexes,sym){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(indexes,sym,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3 = (function (indexes,sym,sym_data){
var provides = (function (){var G__70876 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sym_data,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.PersistentVector.EMPTY);
return (com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(G__70876) : com.wsscode.pathom.connect.normalize_io.call(null,G__70876));
})();
var map__70875 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.wsscode.pathom.connect","provides","com.wsscode.pathom.connect/provides",865831498),provides], null),sym_data], 0));
var map__70875__$1 = cljs.core.__destructure_map(map__70875);
var sym_data__$1 = map__70875__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70875__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70875__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__70877 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,provides]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (indexes__$1,out_attr){
var G__70878 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__70878,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),com.wsscode.pathom.misc.sconj,sym);
} else {
return G__70878;
}
}),cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70877,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__70877;
}
})());
}));

(com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3);

com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__70879){
var map__70880 = p__70879;
var map__70880__$1 = cljs.core.__destructure_map(map__70880);
var data = map__70880__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70880__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70880__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
}),_LT__GT_,(function (){var G__70881 = params;
var G__70881__$1 = (((G__70881 == null))?null:edn_query_language.core.query__GT_ast(G__70881));
if((G__70881__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__70881__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
}),_LT__GT___$1,(function (){var G__70882 = output;
var G__70882__$1 = (((G__70882 == null))?null:edn_query_language.core.query__GT_ast(G__70882));
if((G__70882__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__70882__$1);
}
})());
})()], null));
});
/**
 * Updates the index by registering the given resolver or mutation (lets call it item),
 *   an item can be:
 * 
 *   1. a resolver map
 *   2. a mutation map
 *   3. a sequence with items
 * 
 *   The sequence version can have nested sequences, they will be recursively add.
 * 
 *   Examples of possible usages:
 * 
 *    (-> {} ; blank index
 *        (pc/register one-resolver) ; single resolver
 *        (pc/register one-mutation) ; single mutation
 *        (pc/register [one-resolver one-mutation]) ; sequence of resolvers/mutations
 *        (pc/register [[resolver1 resolver2] [resolver3 mutation]]) ; nested sequences
 *        (pc/register [[resolver1 resolver2] resolver-out [resolver3 mutation]]) ; all mixed
 *        )
 *   
 */
com.wsscode.pathom.connect.register = (function com$wsscode$pathom$connect$register(indexes,item_or_items){
if(cljs.core.sequential_QMARK_(item_or_items)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.register,indexes,item_or_items);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772).cljs$core$IFn$_invoke$arity$1(item_or_items))){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(item_or_items),item_or_items);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112).cljs$core$IFn$_invoke$arity$1(item_or_items))){
return com.wsscode.pathom.connect.add_mutation(indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(item_or_items),item_or_items);
} else {
return null;
}
}
}
});
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__70883,resolvers,e){
var map__70884 = p__70883;
var map__70884__$1 = cljs.core.__destructure_map(map__70884);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70884__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (s){
if(cljs.core.truth_(request_cache)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null))){
return (0);
} else {
return (1);
}
} else {
return (1);
}
}),resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__70885){
var map__70886 = p__70885;
var map__70886__$1 = cljs.core.__destructure_map(map__70886);
var env = map__70886__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70886__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70886__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5802__auto__)){
var attr_resolvers = temp__5802__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70887){
var vec__70888 = p__70887;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70888,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70888,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
}),attr_resolvers));
var G__70895 = r;
var vec__70896 = G__70895;
var seq__70897 = cljs.core.seq(vec__70896);
var first__70898 = cljs.core.first(seq__70897);
var seq__70897__$1 = cljs.core.next(seq__70897);
var map__70899 = first__70898;
var map__70899__$1 = cljs.core.__destructure_map(map__70899);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70899__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70899__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__70897__$1;
var xs = vec__70896;
var G__70895__$1 = G__70895;
while(true){
var vec__70900 = G__70895__$1;
var seq__70901 = cljs.core.seq(vec__70900);
var first__70902 = cljs.core.first(seq__70901);
var seq__70901__$1 = cljs.core.next(seq__70901);
var map__70903 = first__70902;
var map__70903__$1 = cljs.core.__destructure_map(map__70903);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70903__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__70901__$1;
var xs__$1 = vec__70900;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e70904){var _ = e70904;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__75739 = t__$1;
G__70895__$1 = G__75739;
continue;
} else {
var e__$2 = cljs.core.select_keys(e__$1,attrs__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),e__$2,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.first(com.wsscode.pathom.connect.sort_resolvers(env,sym__$1,e__$2))], null);
}
} else {
return null;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__70907){
var map__70908 = p__70907;
var map__70908__$1 = cljs.core.__destructure_map(map__70908);
var env = map__70908__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70908__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70908__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_71015){
var state_val_71016 = (state_71015[(1)]);
if((state_val_71016 === (7))){
var state_71015__$1 = state_71015;
var statearr_71018_75784 = state_71015__$1;
(statearr_71018_75784[(2)] = null);

(statearr_71018_75784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (20))){
var _ = (function (){var statearr_71019 = state_71015;
(statearr_71019[(4)] = cljs.core.rest((state_71015[(4)])));

return statearr_71019;
})();
var state_71015__$1 = state_71015;
var ex71017 = (state_71015__$1[(2)]);
var statearr_71020_75786 = state_71015__$1;
(statearr_71020_75786[(5)] = ex71017);


var statearr_71021_75787 = state_71015__$1;
(statearr_71021_75787[(1)] = (19));

(statearr_71021_75787[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (1))){
var state_71015__$1 = state_71015;
var statearr_71022_75788 = state_71015__$1;
(statearr_71022_75788[(2)] = null);

(statearr_71022_75788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (24))){
var inst_70999 = (state_71015[(2)]);
var state_71015__$1 = state_71015;
var statearr_71023_75789 = state_71015__$1;
(statearr_71023_75789[(2)] = inst_70999);

(statearr_71023_75789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (4))){
var inst_70909 = (state_71015[(2)]);
var state_71015__$1 = state_71015;
var statearr_71024_75790 = state_71015__$1;
(statearr_71024_75790[(2)] = inst_70909);

(statearr_71024_75790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (15))){
var state_71015__$1 = state_71015;
var statearr_71025_75791 = state_71015__$1;
(statearr_71025_75791[(2)] = null);

(statearr_71025_75791[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (21))){
var inst_70978 = (state_71015[(2)]);
var inst_70979 = com.wsscode.async.async_cljs.throw_err(inst_70978);
var inst_70980 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_70979);
var _ = (function (){var statearr_71026 = state_71015;
(statearr_71026[(4)] = cljs.core.rest((state_71015[(4)])));

return statearr_71026;
})();
var state_71015__$1 = state_71015;
var statearr_71027_75792 = state_71015__$1;
(statearr_71027_75792[(2)] = inst_70980);

(statearr_71027_75792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (13))){
var inst_71005 = (state_71015[(2)]);
var state_71015__$1 = state_71015;
var statearr_71028_75793 = state_71015__$1;
(statearr_71028_75793[(2)] = inst_71005);

(statearr_71028_75793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (22))){
var inst_70951 = (state_71015[(7)]);
var inst_70943 = inst_70951;
var state_71015__$1 = (function (){var statearr_71029 = state_71015;
(statearr_71029[(8)] = inst_70943);

return statearr_71029;
})();
var statearr_71030_75794 = state_71015__$1;
(statearr_71030_75794[(2)] = null);

(statearr_71030_75794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (6))){
var inst_70916 = (state_71015[(9)]);
var inst_70917 = (state_71015[(10)]);
var inst_70921 = (state_71015[(11)]);
var inst_70923 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_70925 = (function (){var k = inst_70916;
var e = inst_70917;
var temp__5802__auto__ = inst_70921;
var attr_resolvers = inst_70921;
return (function (p__70924){
var vec__71031 = p__70924;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71031,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71031,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
})();
var inst_70926 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_70925,inst_70921);
var inst_70927 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_70923,inst_70926);
var inst_70937 = cljs.core.seq(inst_70927);
var inst_70938 = cljs.core.first(inst_70937);
var inst_70939 = cljs.core.next(inst_70937);
var inst_70940 = cljs.core.__destructure_map(inst_70938);
var inst_70941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70940,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_70942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70940,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_70943 = inst_70927;
var state_71015__$1 = (function (){var statearr_71034 = state_71015;
(statearr_71034[(12)] = inst_70939);

(statearr_71034[(13)] = inst_70941);

(statearr_71034[(14)] = inst_70942);

(statearr_71034[(8)] = inst_70943);

return statearr_71034;
})();
var statearr_71035_75795 = state_71015__$1;
(statearr_71035_75795[(2)] = null);

(statearr_71035_75795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (17))){
var inst_70953 = (state_71015[(15)]);
var inst_70954 = (state_71015[(16)]);
var _ = (function (){var statearr_71036 = state_71015;
(statearr_71036[(4)] = cljs.core.cons((20),(state_71015[(4)])));

return statearr_71036;
})();
var inst_70969 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_70970 = cljs.core.PersistentHashSet.EMPTY;
var inst_70971 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_70970);
var inst_70972 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70973 = [inst_70953,inst_70954];
var inst_70974 = (new cljs.core.PersistentVector(null,2,(5),inst_70972,inst_70973,null));
var inst_70975 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_70969,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_70971,inst_70974);
var inst_70976 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_70975,inst_70954);
var state_71015__$1 = state_71015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71015__$1,(21),inst_70976);
} else {
if((state_val_71016 === (3))){
var inst_71013 = (state_71015[(2)]);
var state_71015__$1 = state_71015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71015__$1,inst_71013);
} else {
if((state_val_71016 === (12))){
var state_71015__$1 = state_71015;
var statearr_71038_75796 = state_71015__$1;
(statearr_71038_75796[(2)] = null);

(statearr_71038_75796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (2))){
var inst_70916 = (state_71015[(9)]);
var inst_70921 = (state_71015[(11)]);
var _ = (function (){var statearr_71039 = state_71015;
(statearr_71039[(4)] = cljs.core.cons((5),(state_71015[(4)])));

return statearr_71039;
})();
var inst_70915 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_70916__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_70915);
var inst_70917 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_70918 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70919 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_70916__$1];
var inst_70920 = (new cljs.core.PersistentVector(null,2,(5),inst_70918,inst_70919,null));
var inst_70921__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_70920);
var state_71015__$1 = (function (){var statearr_71040 = state_71015;
(statearr_71040[(9)] = inst_70916__$1);

(statearr_71040[(10)] = inst_70917);

(statearr_71040[(11)] = inst_70921__$1);

return statearr_71040;
})();
if(cljs.core.truth_(inst_70921__$1)){
var statearr_71041_75797 = state_71015__$1;
(statearr_71041_75797[(1)] = (6));

} else {
var statearr_71042_75798 = state_71015__$1;
(statearr_71042_75798[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (23))){
var inst_70983 = (state_71015[(17)]);
var inst_70954 = (state_71015[(16)]);
var inst_70953 = (state_71015[(15)]);
var inst_70992 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_70993 = cljs.core.select_keys(inst_70983,inst_70954);
var inst_70994 = com.wsscode.pathom.connect.sort_resolvers(env,inst_70953,inst_70983);
var inst_70995 = cljs.core.first(inst_70994);
var inst_70996 = [inst_70993,inst_70995];
var inst_70997 = cljs.core.PersistentHashMap.fromArrays(inst_70992,inst_70996);
var state_71015__$1 = state_71015;
var statearr_71043_75799 = state_71015__$1;
(statearr_71043_75799[(2)] = inst_70997);

(statearr_71043_75799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (19))){
var inst_70962 = (state_71015[(2)]);
var inst_70963 = cljs.core.PersistentHashMap.EMPTY;
var state_71015__$1 = (function (){var statearr_71044 = state_71015;
(statearr_71044[(18)] = inst_70962);

return statearr_71044;
})();
var statearr_71045_75800 = state_71015__$1;
(statearr_71045_75800[(2)] = inst_70963);

(statearr_71045_75800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (11))){
var inst_70953 = (state_71015[(15)]);
var inst_70954 = (state_71015[(16)]);
var inst_70956 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70957 = [inst_70953,inst_70954];
var inst_70958 = (new cljs.core.PersistentVector(null,2,(5),inst_70956,inst_70957,null));
var inst_70959 = cljs.core.contains_QMARK_(dependency_track,inst_70958);
var inst_70960 = (!(inst_70959));
var state_71015__$1 = state_71015;
if(inst_70960){
var statearr_71047_75801 = state_71015__$1;
(statearr_71047_75801[(1)] = (14));

} else {
var statearr_71048_75802 = state_71015__$1;
(statearr_71048_75802[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (9))){
var inst_70943 = (state_71015[(8)]);
var inst_70949 = cljs.core.seq(inst_70943);
var inst_70950 = cljs.core.first(inst_70949);
var inst_70951 = cljs.core.next(inst_70949);
var inst_70952 = cljs.core.__destructure_map(inst_70950);
var inst_70953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70952,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_70954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70952,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_71015__$1 = (function (){var statearr_71049 = state_71015;
(statearr_71049[(7)] = inst_70951);

(statearr_71049[(15)] = inst_70953);

(statearr_71049[(16)] = inst_70954);

return statearr_71049;
})();
if(cljs.core.truth_(inst_70943)){
var statearr_71050_75803 = state_71015__$1;
(statearr_71050_75803[(1)] = (11));

} else {
var statearr_71051_75804 = state_71015__$1;
(statearr_71051_75804[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (5))){
var _ = (function (){var statearr_71052 = state_71015;
(statearr_71052[(4)] = cljs.core.rest((state_71015[(4)])));

return statearr_71052;
})();
var state_71015__$1 = state_71015;
var ex71046 = (state_71015__$1[(2)]);
var statearr_71053_75805 = state_71015__$1;
(statearr_71053_75805[(5)] = ex71046);


var statearr_71054_75806 = state_71015__$1;
(statearr_71054_75806[(1)] = (4));

(statearr_71054_75806[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (14))){
var state_71015__$1 = state_71015;
var statearr_71055_75807 = state_71015__$1;
(statearr_71055_75807[(2)] = null);

(statearr_71055_75807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (16))){
var inst_71002 = (state_71015[(2)]);
var state_71015__$1 = state_71015;
var statearr_71056_75808 = state_71015__$1;
(statearr_71056_75808[(2)] = inst_71002);

(statearr_71056_75808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (10))){
var inst_71007 = (state_71015[(2)]);
var state_71015__$1 = state_71015;
var statearr_71057_75809 = state_71015__$1;
(statearr_71057_75809[(2)] = inst_71007);

(statearr_71057_75809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (18))){
var inst_70954 = (state_71015[(16)]);
var inst_70983 = (state_71015[(17)]);
var inst_70983__$1 = (state_71015[(2)]);
var inst_70984 = cljs.core.set(inst_70954);
var inst_70985 = cljs.core.keys(inst_70983__$1);
var inst_70986 = cljs.core.set(inst_70985);
var inst_70987 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_70984,inst_70986);
var inst_70988 = cljs.core.seq(inst_70987);
var state_71015__$1 = (function (){var statearr_71058 = state_71015;
(statearr_71058[(17)] = inst_70983__$1);

return statearr_71058;
})();
if(inst_70988){
var statearr_71059_75810 = state_71015__$1;
(statearr_71059_75810[(1)] = (22));

} else {
var statearr_71060_75811 = state_71015__$1;
(statearr_71060_75811[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71016 === (8))){
var inst_71010 = (state_71015[(2)]);
var _ = (function (){var statearr_71061 = state_71015;
(statearr_71061[(4)] = cljs.core.rest((state_71015[(4)])));

return statearr_71061;
})();
var state_71015__$1 = state_71015;
var statearr_71062_75812 = state_71015__$1;
(statearr_71062_75812[(2)] = inst_71010);

(statearr_71062_75812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto____0 = (function (){
var statearr_71063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71063[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto__);

(statearr_71063[(1)] = (1));

return statearr_71063;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto____1 = (function (state_71015){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_71015);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e71064){var ex__42124__auto__ = e71064;
var statearr_71065_75813 = state_71015;
(statearr_71065_75813[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_71015[(4)]))){
var statearr_71066_75814 = state_71015;
(statearr_71066_75814[(1)] = cljs.core.first((state_71015[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75815 = state_71015;
state_71015 = G__75815;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto__ = function(state_71015){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto____1.call(this,state_71015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_71067 = f__42153__auto__();
(statearr_71067[(6)] = c__42152__auto__);

return statearr_71067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
com.wsscode.pathom.connect.default_resolver_dispatch = (function com$wsscode$pathom$connect$default_resolver_dispatch(_env,_entity){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for resolver dispatch.
 */
com.wsscode.pathom.connect.resolver_dispatch = (function com$wsscode$pathom$connect$resolver_dispatch(var_args){
var G__71069 = arguments.length;
switch (G__71069) {
case 1:
return com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$1 = (function (env){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
}));

(com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$2 = (function (env,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
}));

(com.wsscode.pathom.connect.resolver_dispatch.cljs$lang$maxFixedArity = 2);

/**
 * This dispatch method will fire the resolver by looking at the ::pc/resolve
 *   key in the resolver map details.
 */
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__71070,entity){
var map__71071 = p__71070;
var map__71071__$1 = cljs.core.__destructure_map(map__71071);
var env = map__71071__$1;
var map__71072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71071__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__71072__$1 = cljs.core.__destructure_map(map__71072);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71072__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71072__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
if(cljs.core.truth_(resolve)){
} else {
throw (new Error(["Assert failed: ",["Can't find resolve fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","resolve"].join('')));
}

return (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,entity) : resolve.call(null,env,entity));
});
com.wsscode.pathom.connect.step_weight = (function com$wsscode$pathom$connect$step_weight(value,new_value){
return (((function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + new_value) * 0.5);
});
com.wsscode.pathom.connect.update_resolver_weight = (function com$wsscode$pathom$connect$update_resolver_weight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___75817 = arguments.length;
var i__5770__auto___75818 = (0);
while(true){
if((i__5770__auto___75818 < len__5769__auto___75817)){
args__5775__auto__.push((arguments[i__5770__auto___75818]));

var G__75819 = (i__5770__auto___75818 + (1));
i__5770__auto___75818 = G__75819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__71080,resolver,args){
var map__71081 = p__71080;
var map__71081__$1 = cljs.core.__destructure_map(map__71081);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71081__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
}));

(com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq71075){
var G__71076 = cljs.core.first(seq71075);
var seq71075__$1 = cljs.core.next(seq71075);
var G__71077 = cljs.core.first(seq71075__$1);
var seq71075__$2 = cljs.core.next(seq71075__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71076,G__71077,seq71075__$2);
}));

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__71086,entity){
var map__71087 = p__71086;
var map__71087__$1 = cljs.core.__destructure_map(map__71087);
var env = map__71087__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71087__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71087__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolver_sym),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__53589__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e71088){var e = e71088;
return e;
}})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53589__auto__)){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_71126){
var state_val_71127 = (state_71126[(1)]);
if((state_val_71127 === (7))){
var inst_71102 = com.wsscode.pathom.trace.now();
var inst_71103 = (inst_71102 - start);
var inst_71104 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_71103], 0));
var state_71126__$1 = state_71126;
var statearr_71128_75820 = state_71126__$1;
(statearr_71128_75820[(2)] = inst_71104);

(statearr_71128_75820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (1))){
var state_71126__$1 = state_71126;
var statearr_71129_75821 = state_71126__$1;
(statearr_71129_75821[(2)] = null);

(statearr_71129_75821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (4))){
var inst_71089 = (state_71126[(2)]);
var state_71126__$1 = state_71126;
var statearr_71130_75822 = state_71126__$1;
(statearr_71130_75822[(2)] = inst_71089);

(statearr_71130_75822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (6))){
var inst_71096 = (state_71126[(2)]);
var state_71126__$1 = (function (){var statearr_71131 = state_71126;
(statearr_71131[(7)] = inst_71096);

return statearr_71131;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_71132_75823 = state_71126__$1;
(statearr_71132_75823[(1)] = (7));

} else {
var statearr_71133_75824 = state_71126__$1;
(statearr_71133_75824[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (3))){
var inst_71124 = (state_71126[(2)]);
var state_71126__$1 = state_71126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71126__$1,inst_71124);
} else {
if((state_val_71127 === (12))){
var inst_71096 = (state_71126[(7)]);
var inst_71119 = (state_71126[(2)]);
var inst_71120 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_71119);
var inst_71121 = com.wsscode.async.async_cljs.throw_err(inst_71096);
var _ = (function (){var statearr_71134 = state_71126;
(statearr_71134[(4)] = cljs.core.rest((state_71126[(4)])));

return statearr_71134;
})();
var state_71126__$1 = (function (){var statearr_71135 = state_71126;
(statearr_71135[(8)] = inst_71120);

return statearr_71135;
})();
var statearr_71136_75825 = state_71126__$1;
(statearr_71136_75825[(2)] = inst_71121);

(statearr_71136_75825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (2))){
var _ = (function (){var statearr_71137 = state_71126;
(statearr_71137[(4)] = cljs.core.cons((5),(state_71126[(4)])));

return statearr_71137;
})();
var state_71126__$1 = state_71126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71126__$1,(6),res__53589__auto__);
} else {
if((state_val_71127 === (11))){
var inst_71112 = (state_71126[(9)]);
var state_71126__$1 = state_71126;
var statearr_71139_75826 = state_71126__$1;
(statearr_71139_75826[(2)] = inst_71112);

(statearr_71139_75826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (9))){
var inst_71096 = (state_71126[(7)]);
var inst_71107 = (state_71126[(2)]);
var inst_71110 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_71111 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_71112 = cljs.core.PersistentHashMap.fromArrays(inst_71110,inst_71111);
var inst_71113 = com.wsscode.async.async_cljs.error_QMARK_(inst_71096);
var state_71126__$1 = (function (){var statearr_71140 = state_71126;
(statearr_71140[(10)] = inst_71107);

(statearr_71140[(9)] = inst_71112);

return statearr_71140;
})();
if(inst_71113){
var statearr_71141_75827 = state_71126__$1;
(statearr_71141_75827[(1)] = (10));

} else {
var statearr_71142_75828 = state_71126__$1;
(statearr_71142_75828[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (5))){
var _ = (function (){var statearr_71143 = state_71126;
(statearr_71143[(4)] = cljs.core.rest((state_71126[(4)])));

return statearr_71143;
})();
var state_71126__$1 = state_71126;
var ex71138 = (state_71126__$1[(2)]);
var statearr_71144_75829 = state_71126__$1;
(statearr_71144_75829[(5)] = ex71138);


var statearr_71145_75830 = state_71126__$1;
(statearr_71145_75830[(1)] = (4));

(statearr_71145_75830[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (10))){
var inst_71096 = (state_71126[(7)]);
var inst_71112 = (state_71126[(9)]);
var inst_71115 = com.wsscode.pathom.core.process_error(env,inst_71096);
var inst_71116 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_71112,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_71115);
var state_71126__$1 = state_71126;
var statearr_71146_75831 = state_71126__$1;
(statearr_71146_75831[(2)] = inst_71116);

(statearr_71146_75831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71127 === (8))){
var state_71126__$1 = state_71126;
var statearr_71147_75832 = state_71126__$1;
(statearr_71147_75832[(2)] = null);

(statearr_71147_75832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto____0 = (function (){
var statearr_71148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71148[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto__);

(statearr_71148[(1)] = (1));

return statearr_71148;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto____1 = (function (state_71126){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_71126);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e71149){var ex__42124__auto__ = e71149;
var statearr_71150_75833 = state_71126;
(statearr_71150_75833[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_71126[(4)]))){
var statearr_71151_75834 = state_71126;
(statearr_71151_75834[(1)] = cljs.core.first((state_71126[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75835 = state_71126;
state_71126 = G__75835;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto__ = function(state_71126){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto____1.call(this,state_71126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_71152 = f__42153__auto__();
(statearr_71152[(6)] = c__42152__auto__);

return statearr_71152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
} else {
var x = res__53589__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__71153 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.async.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71153,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__71153;
}
})());

return com.wsscode.async.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__71155,entity){
var map__71156 = p__71155;
var map__71156__$1 = cljs.core.__destructure_map(map__71156);
var env = map__71156__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71156__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71154_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__71154_SHARP_));
}),entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___75836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_71176){
var state_val_71177 = (state_71176[(1)]);
if((state_val_71177 === (1))){
var inst_71157 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_71158 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_71159 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_71158);
var inst_71160 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_71159);
var inst_71161 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_71162 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_71161);
var inst_71163 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_71164 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_71163);
var inst_71165 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_71160,inst_71162,inst_71164,entity];
var inst_71166 = cljs.core.PersistentHashMap.fromArrays(inst_71157,inst_71165);
var inst_71167 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_71166);
var inst_71168 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"ts","ts",1617209904)];
var inst_71169 = (function (){var tid = inst_71167;
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e71178){var e = e71178;
return e;
}});
})();
var inst_71170 = com.wsscode.pathom.trace.now();
var inst_71171 = [out,inst_71169,inst_71170];
var inst_71172 = cljs.core.PersistentHashMap.fromArrays(inst_71168,inst_71171);
var state_71176__$1 = state_71176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71176__$1,(2),pool_chan,inst_71172);
} else {
if((state_val_71177 === (2))){
var inst_71174 = (state_71176[(2)]);
var state_71176__$1 = state_71176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71176__$1,inst_71174);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto____0 = (function (){
var statearr_71179 = [null,null,null,null,null,null,null];
(statearr_71179[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto__);

(statearr_71179[(1)] = (1));

return statearr_71179;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto____1 = (function (state_71176){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_71176);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e71180){var ex__42124__auto__ = e71180;
var statearr_71181_75837 = state_71176;
(statearr_71181_75837[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_71176[(4)]))){
var statearr_71182_75838 = state_71176;
(statearr_71182_75838[(1)] = cljs.core.first((state_71176[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75839 = state_71176;
state_71176 = G__75839;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto__ = function(state_71176){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto____1.call(this,state_71176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_71183 = f__42153__auto__();
(statearr_71183[(6)] = c__42152__auto___75836);

return statearr_71183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return out;
} else {
return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}
}
});
com.wsscode.pathom.connect.entity_select_keys = (function com$wsscode$pathom$connect$entity_select_keys(env,entity,input){
var entity__$1 = com.wsscode.pathom.core.maybe_atom(entity);
var res__53579__auto__ = ((clojure.set.subset_QMARK_(input,entity__$1))?entity__$1:com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(entity__$1)),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0)),cljs.core.vec(input)));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53579__auto__)){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_71198){
var state_val_71199 = (state_71198[(1)]);
if((state_val_71199 === (1))){
var state_71198__$1 = state_71198;
var statearr_71200_75840 = state_71198__$1;
(statearr_71200_75840[(2)] = null);

(statearr_71200_75840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71199 === (2))){
var _ = (function (){var statearr_71201 = state_71198;
(statearr_71201[(4)] = cljs.core.cons((5),(state_71198[(4)])));

return statearr_71201;
})();
var state_71198__$1 = state_71198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71198__$1,(6),res__53579__auto__);
} else {
if((state_val_71199 === (3))){
var inst_71196 = (state_71198[(2)]);
var state_71198__$1 = state_71198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71198__$1,inst_71196);
} else {
if((state_val_71199 === (4))){
var inst_71184 = (state_71198[(2)]);
var state_71198__$1 = state_71198;
var statearr_71203_75841 = state_71198__$1;
(statearr_71203_75841[(2)] = inst_71184);

(statearr_71203_75841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71199 === (5))){
var _ = (function (){var statearr_71204 = state_71198;
(statearr_71204[(4)] = cljs.core.rest((state_71198[(4)])));

return statearr_71204;
})();
var state_71198__$1 = state_71198;
var ex71202 = (state_71198__$1[(2)]);
var statearr_71205_75842 = state_71198__$1;
(statearr_71205_75842[(5)] = ex71202);


var statearr_71206_75843 = state_71198__$1;
(statearr_71206_75843[(1)] = (4));

(statearr_71206_75843[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71199 === (6))){
var inst_71191 = (state_71198[(2)]);
var inst_71192 = com.wsscode.async.async_cljs.throw_err(inst_71191);
var inst_71193 = cljs.core.select_keys(inst_71192,input);
var _ = (function (){var statearr_71207 = state_71198;
(statearr_71207[(4)] = cljs.core.rest((state_71198[(4)])));

return statearr_71207;
})();
var state_71198__$1 = state_71198;
var statearr_71208_75844 = state_71198__$1;
(statearr_71208_75844[(2)] = inst_71193);

(statearr_71208_75844[(1)] = (3));


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
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto____0 = (function (){
var statearr_71209 = [null,null,null,null,null,null,null];
(statearr_71209[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto__);

(statearr_71209[(1)] = (1));

return statearr_71209;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto____1 = (function (state_71198){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_71198);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e71210){var ex__42124__auto__ = e71210;
var statearr_71211_75845 = state_71198;
(statearr_71211_75845[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_71198[(4)]))){
var statearr_71212_75846 = state_71198;
(statearr_71212_75846[(1)] = cljs.core.first((state_71198[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75847 = state_71198;
state_71198 = G__75847;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto__ = function(state_71198){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto____1.call(this,state_71198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_71213 = f__42153__auto__();
(statearr_71213[(6)] = c__42152__auto__);

return statearr_71213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
} else {
var e = res__53579__auto__;
return cljs.core.select_keys(e,input);
}
});
com.wsscode.pathom.connect.all_values_valid_QMARK_ = (function com$wsscode$pathom$connect$all_values_valid_QMARK_(m,input){
return ((cljs.core.every_QMARK_((function (p__71214){
var vec__71215 = p__71214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71215,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__71218 = cljs.core.seq(linked_results);
var chunk__71219 = null;
var count__71220 = (0);
var i__71221 = (0);
while(true){
if((i__71221 < count__71220)){
var vec__71228 = chunk__71219.cljs$core$IIndexed$_nth$arity$2(null,i__71221);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71228,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71228,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__71218,chunk__71219,count__71220,i__71221,vec__71228,input,value,params){
return (function (){
return value;
});})(seq__71218,chunk__71219,count__71220,i__71221,vec__71228,input,value,params))
);


var G__75848 = seq__71218;
var G__75849 = chunk__71219;
var G__75850 = count__71220;
var G__75851 = (i__71221 + (1));
seq__71218 = G__75848;
chunk__71219 = G__75849;
count__71220 = G__75850;
i__71221 = G__75851;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__71218);
if(temp__5804__auto__){
var seq__71218__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71218__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__71218__$1);
var G__75852 = cljs.core.chunk_rest(seq__71218__$1);
var G__75853 = c__5568__auto__;
var G__75854 = cljs.core.count(c__5568__auto__);
var G__75855 = (0);
seq__71218 = G__75852;
chunk__71219 = G__75853;
count__71220 = G__75854;
i__71221 = G__75855;
continue;
} else {
var vec__71232 = cljs.core.first(seq__71218__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71232,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71232,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__71218,chunk__71219,count__71220,i__71221,vec__71232,input,value,seq__71218__$1,temp__5804__auto__,params){
return (function (){
return value;
});})(seq__71218,chunk__71219,count__71220,i__71221,vec__71232,input,value,seq__71218__$1,temp__5804__auto__,params))
);


var G__75856 = cljs.core.next(seq__71218__$1);
var G__75857 = null;
var G__75858 = (0);
var G__75859 = (0);
seq__71218 = G__75856;
chunk__71219 = G__75857;
count__71220 = G__75858;
i__71221 = G__75859;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom.connect.output__GT_provides = (function com$wsscode$pathom$connect$output__GT_provides(output){
var ast = com.wsscode.pathom.core.query__GT_ast(output);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
com.wsscode.pathom.connect.compute_paths_STAR_ = (function com$wsscode$pathom$connect$compute_paths_STAR_(index_oir,keys,bad_keys,attr,pending){
if(cljs.core.contains_QMARK_(index_oir,attr)){
return cljs.core.reduce_kv((function (paths,input,resolvers){
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.some(bad_keys,input);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((cljs.core.contains_QMARK_(input,attr)) || (((cljs.core.seq(input)) && (cljs.core.every_QMARK_(pending,input)))));
}
})())){
return paths;
} else {
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__71235_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__71235_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71237_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
}),cljs.core.first(p1__71237_SHARP_),cljs.core.next(p1__71237_SHARP_));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__71236_SHARP_){
var G__71239 = index_oir;
var G__71240 = keys;
var G__71241 = bad_keys;
var G__71242 = p1__71236_SHARP_;
var G__71243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__71236_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__71239,G__71240,G__71241,G__71242,G__71243) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__71239,G__71240,G__71241,G__71242,G__71243));
})),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71238_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
}),cljs.core.first(p1__71238_SHARP_),cljs.core.next(p1__71238_SHARP_));
}),com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_paths,missing_paths], 0))));
} else {
return paths;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,new_paths);
}
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_oir,attr));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
/**
 * This function will return a set of possible paths given a set of available keys to reach some attribute. You also
 *   send a set of bad keys, bad keys mean information you cannot use (maybe they already got an error, or you known will
 *   not be available).
 */
com.wsscode.pathom.connect.compute_paths = (function com$wsscode$pathom$connect$compute_paths(index_oir,keys,bad_keys,attr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__71244_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__71244_SHARP_);
}),(function (p1__71245_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__71245_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__71247 = cljs.core.group_by((function (p1__71246_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__71246_SHARP_));
}),entity);
var map__71247__$1 = cljs.core.__destructure_map(map__71247);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71247__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71247__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__71248,path){
var map__71249 = p__71248;
var map__71249__$1 = cljs.core.__destructure_map(map__71249);
var env = map__71249__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71249__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71249__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__5045__auto__ = (function (){var G__71250 = resolver_weights;
if((G__71250 == null)){
return null;
} else {
return cljs.core.deref(G__71250);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (sym){
var e = cljs.core.select_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1((com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,sym) : com.wsscode.pathom.connect.resolver_data.call(null,env,sym))));
if(cljs.core.truth_((function (){var and__5043__auto__ = request_cache;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e], null));
} else {
return and__5043__auto__;
}
})())){
return (1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(weights,sym,(1));
}
})),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__71251_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__71251_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__71252){
var map__71253 = p__71252;
var map__71253__$1 = cljs.core.__destructure_map(map__71253);
var env = map__71253__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71253__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71253__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__5045__auto__ = sort_plan;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__71254 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71254,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71254,(1),null);
var G__71257 = env;
var G__71258 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__71257,G__71258) : sort_plan__$1.call(null,G__71257,G__71258));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__71259 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__71259__$1 = cljs.core.__destructure_map(map__71259);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71259__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71259__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
if(cljs.core.truth_(compute_output)){
return (compute_output.cljs$core$IFn$_invoke$arity$1 ? compute_output.cljs$core$IFn$_invoke$arity$1(env) : compute_output.call(null,env));
} else {
if(cljs.core.truth_(output)){
return output;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No output available",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

}
}
});
com.wsscode.pathom.connect.plan__GT_provides = (function com$wsscode$pathom$connect$plan__GT_provides(env,plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__71260_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__71260_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__71263,plan){
var map__71264 = p__71263;
var map__71264__$1 = cljs.core.__destructure_map(map__71264);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71264__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71264__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,(function (p1__71261_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__5130__auto__ = (1);
var y__5131__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
}),p1__71261_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
}));
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__71265_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__71265_SHARP_));
}),com.wsscode.pathom.connect.resolve_plan(env));
if(cljs.core.seq(plan)){
var plan_SINGLEQUOTE_ = cljs.core.first(plan);
var out = com.wsscode.pathom.connect.plan__GT_provides(env,plan_SINGLEQUOTE_);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out], null));

com.wsscode.pathom.connect.decrease_path_costs(env,plan);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan_SINGLEQUOTE_,out], null);
} else {
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));

return null;
}
});
/**
 * Returns a set containing all attributes that are expected to participate in path
 *   resolution given a query. This function is intended to help dynamic
 *   resolvers that need to know which attributes are required before doing a call to the
 *   information source. For example, we never want to issue more than one GraphQL query
 *   to the same server at the same query level, but if we just look at the parent query
 *   is not enough; that's because some of the attributes might require other attributes
 *   to be fetched, this function will scan the attributes and figure everything that is
 *   required so you can issue a single request.
 * 
 *   Please note the attribute calculation might depend on the data currently available
 *   in the `::p/entity`, if you are calculating attributes for a different context
 *   you might want to replace some of the entity data.
 * 
 *   This function is intended to be called during resolver code.
 */
com.wsscode.pathom.connect.project_query_attributes = (function com$wsscode$pathom$connect$project_query_attributes(env,query){
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(com.wsscode.pathom.core.lift_placeholders(env,query)));
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__71266,p__71267){
var map__71268 = p__71266;
var map__71268__$1 = cljs.core.__destructure_map(map__71268);
var acc = map__71268__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71268__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__71269 = p__71267;
var map__71269__$1 = cljs.core.__destructure_map(map__71269);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71269__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5802__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5802__auto__)){
var plan = temp__5802__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__71270 = plan;
var G__71270__$1 = (((G__71270 == null))?null:cljs.core.first(G__71270));
var G__71270__$2 = (((G__71270__$1 == null))?null:cljs.core.second(G__71270__$1));
var G__71270__$3 = (((G__71270__$2 == null))?null:(com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,G__71270__$2) : com.wsscode.pathom.connect.resolver_data.call(null,env,G__71270__$2)));
if((G__71270__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__71270__$3);
}
})()),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),plan),new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.into,com.wsscode.pathom.connect.plan__GT_provides(env,plan));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.PersistentHashSet.EMPTY], null),children));
});
/**
 * Project query attributes for the parent query. See
 */
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__71271){
var map__71272 = p__71271;
var map__71272__$1 = cljs.core.__destructure_map(map__71272);
var env = map__71272__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71272__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
return com.wsscode.pathom.connect.project_query_attributes(env,parent_query);
});
/**
 * DEPRECATED: use reader2 instead
 * 
 *   Connect reader, this reader will lookup the given key in the index
 *   to process it, in case the resolver input can't be satisfied it will
 *   do a recursive lookup trying to find the next input.
 * 
 *   I recommend you switch to reader2, which instead plans ahead of time
 *   the full path it will need to cover to go from the current data to
 *   the requested attribute.
 */
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__71276){
var map__71277 = p__71276;
var map__71277__$1 = cljs.core.__destructure_map(map__71277);
var env = map__71277__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71277__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71277__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5802__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5802__auto__)){
var map__71278 = temp__5802__auto__;
var map__71278__$1 = cljs.core.__destructure_map(map__71278);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71278__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71278__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__71279 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,s) : com.wsscode.pathom.connect.resolver_data.call(null,env,s));
var map__71279__$1 = cljs.core.__destructure_map(map__71279);
var resolver = map__71279__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71279__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71279__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71279__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),(function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return processing_sequence;
} else {
return and__5043__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv((function (p1__71274_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__71274_SHARP_,input);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71273_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__71273_SHARP_,input);
}),processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
}))):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,(function (p1__71275_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__71275_SHARP_], 0));
}));

var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$1,k);
if(cljs.core.sequential_QMARK_(x)){
return com.wsscode.pathom.core.join_seq(env_SINGLEQUOTE_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,x));
} else {
if((x == null)){
if(cljs.core.contains_QMARK_(response__$1,k)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x),env_SINGLEQUOTE_);

}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.serial_resolver_call_batch = (function com$wsscode$pathom$connect$serial_resolver_call_batch(p__71282,e){
var map__71283 = p__71282;
var map__71283__$1 = cljs.core.__destructure_map(map__71283);
var env = map__71283__$1;
var map__71284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71283__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__71284__$1 = cljs.core.__destructure_map(map__71284);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71284__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71284__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71283__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__54379__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__54380__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv((function (p1__71281_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__71281_SHARP_,input);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71280_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__71280_SHARP_,input);
}),processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env,items);
var ___$2 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env,sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__54379__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__54380__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv((function (p1__71281_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__71281_SHARP_,input);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71280_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__71280_SHARP_,input);
}),processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env,items);
var ___$2 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env,sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
}
});
com.wsscode.pathom.connect.serial_cache_resolver_call = (function com$wsscode$pathom$connect$serial_cache_resolver_call(p__71285,e){
var map__71286 = p__71285;
var map__71286__$1 = cljs.core.__destructure_map(map__71286);
var env = map__71286__$1;
var map__71287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71286__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__71287__$1 = cljs.core.__destructure_map(map__71287);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71287__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71287__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71286__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var p = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,p], null),(function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return processing_sequence;
} else {
return and__5043__auto__;
}
})())){
return com.wsscode.pathom.connect.serial_resolver_call_batch(env,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env,e);
}
}));
});
/**
 * Recommended reader to use with Pathom serial parser.
 * 
 *   This reader uses the connect index to compute a EQL property requirement.
 * 
 *   The process goes as:
 * 
 *   - find possible paths to realize the attribute, given the current available data, generating a plan
 *   - executes the plan
 *   - in case a resolver fails (due to exception, or missing required data) the reader will
 *  try to backtrack and execute another path (if there is one available).
 * 
 *   This only handles sync process, if you return a core.async channel, the channel itself
 *   will be the response. If you need to handle async use `async-reader2`.
 */
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__71292){
var map__71293 = p__71292;
var map__71293__$1 = cljs.core.__destructure_map(map__71293);
var env = map__71293__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71293__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71293__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71293__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5802__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__71294 = temp__5802__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71294,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71294,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__71300 = plan;
var vec__71301 = G__71300;
var seq__71302 = cljs.core.seq(vec__71301);
var first__71303 = cljs.core.first(seq__71302);
var seq__71302__$1 = cljs.core.next(seq__71302);
var step = first__71303;
var tail = seq__71302__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__71300__$1 = G__71300;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__71322 = G__71300__$1;
var seq__71323 = cljs.core.seq(vec__71322);
var first__71324 = cljs.core.first(seq__71323);
var seq__71323__$1 = cljs.core.next(seq__71323);
var step__$1 = first__71324;
var tail__$1 = seq__71323__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__71325 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71325,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71325,(1),null);
var map__71328 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__71328__$1 = cljs.core.__destructure_map(map__71328);
var resolver = map__71328__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71328__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71328__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71328__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = ((cljs.core.contains_QMARK_(entity,key_SINGLEQUOTE_))?cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)):(cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__71300__$1,failed_resolvers__$1,out_left__$1,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return processing_sequence;
} else {
return and__5043__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__54379__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__54380__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__71300__$1,failed_resolvers__$1,out_left__$1,_,trace_id__54379__auto__,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__71289_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__71289_SHARP_,input);
});})(G__71300__$1,failed_resolvers__$1,out_left__$1,_,trace_id__54379__auto__,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__71300__$1,failed_resolvers__$1,out_left__$1,_,trace_id__54379__auto__,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__71288_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__71288_SHARP_,input);
});})(G__71300__$1,failed_resolvers__$1,out_left__$1,_,trace_id__54379__auto__,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__54379__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__54380__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__71300__$1,failed_resolvers__$1,out_left__$1,_,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__71289_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__71289_SHARP_,input);
});})(G__71300__$1,failed_resolvers__$1,out_left__$1,_,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__71300__$1,failed_resolvers__$1,out_left__$1,_,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__71288_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__71288_SHARP_,input);
});})(G__71300__$1,failed_resolvers__$1,out_left__$1,_,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
}
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(G__71300__$1,failed_resolvers__$1,out_left__$1,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e)
));
var response__$1 = (function (){var or__5045__auto__ = response;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__71300__$1,failed_resolvers__$1,out_left__$1,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__71300__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__71290_SHARP_){
var x__5133__auto__ = ((function (){var or__5045__auto__ = p1__71290_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})() * (2));
var y__5134__auto__ = max_resolver_weight;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
});})(G__71300__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5802__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5802__auto____$1)){
var vec__71329 = temp__5802__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71329,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71329,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__71300__$1,failed_resolvers__$1,out_left__$1,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__71300__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__71291_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__71291_SHARP_], 0));
});})(G__71300__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__71325,key_SINGLEQUOTE_,resolver_sym,map__71328,map__71328__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__71322,seq__71323,first__71324,seq__71323__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__71300,vec__71301,seq__71302,first__71303,seq__71302__$1,step,tail,failed_resolvers,out_left,key,vec__71294,plan,out,temp__5802__auto__,map__71293,map__71293__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__71332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__71332) : com.wsscode.pathom.core.break_values.call(null,G__71332));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__75860 = tail__$1;
var G__75861 = failed_resolvers__$2;
var G__75862 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__71300__$1 = G__75860;
failed_resolvers__$1 = G__75861;
out_left__$1 = G__75862;
continue;
} else {
return com.wsscode.pathom.core.map_reader(env_SINGLEQUOTE_);
}
} else {
var temp__5802__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5802__auto____$1)){
var vec__71333 = temp__5802__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71333,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71333,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71333,(2),null);
var G__75863 = plan__$1;
var G__75864 = failed_resolvers__$3;
var G__75865 = out_SINGLEQUOTE_;
G__71300__$1 = G__75863;
failed_resolvers__$1 = G__75864;
out_left__$1 = G__75865;
continue;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.seq(tail__$1);
if(and__5043__auto__){
var G__71336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__71336) : com.wsscode.pathom.core.break_values.call(null,G__71336));
} else {
return and__5043__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null));
} else {
}

return com.wsscode.pathom.core.map_reader(env_SINGLEQUOTE_);
}
}
} else {
var temp__5802__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null)));
if(cljs.core.truth_(temp__5802__auto____$1)){
var vec__71337 = temp__5802__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71337,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71337,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71337,(2),null);
var G__75866 = plan__$1;
var G__75867 = failed_resolvers__$3;
var G__75868 = out_SINGLEQUOTE_;
G__71300__$1 = G__75866;
failed_resolvers__$1 = G__75867;
out_left__$1 = G__75868;
continue;
} else {
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null));
}

}
} else {
return null;
}
break;
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.map_async_serial = (function com$wsscode$pathom$connect$map_async_serial(f,s){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_71387){
var state_val_71388 = (state_71387[(1)]);
if((state_val_71388 === (7))){
var inst_71382 = (state_71387[(2)]);
var _ = (function (){var statearr_71389 = state_71387;
(statearr_71389[(4)] = cljs.core.rest((state_71387[(4)])));

return statearr_71389;
})();
var state_71387__$1 = state_71387;
var statearr_71390_75869 = state_71387__$1;
(statearr_71390_75869[(2)] = inst_71382);

(statearr_71390_75869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (20))){
var state_71387__$1 = state_71387;
var statearr_71391_75870 = state_71387__$1;
(statearr_71391_75870[(2)] = null);

(statearr_71391_75870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (1))){
var state_71387__$1 = state_71387;
var statearr_71392_75871 = state_71387__$1;
(statearr_71392_75871[(2)] = null);

(statearr_71392_75871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (4))){
var inst_71340 = (state_71387[(2)]);
var state_71387__$1 = state_71387;
var statearr_71393_75872 = state_71387__$1;
(statearr_71393_75872[(2)] = inst_71340);

(statearr_71393_75872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (15))){
var inst_71353 = (state_71387[(7)]);
var inst_71362 = com.wsscode.async.async_cljs.promise__GT_chan(inst_71353);
var state_71387__$1 = state_71387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71387__$1,(18),inst_71362);
} else {
if((state_val_71388 === (21))){
var inst_71370 = (state_71387[(2)]);
var state_71387__$1 = state_71387;
var statearr_71394_75873 = state_71387__$1;
(statearr_71394_75873[(2)] = inst_71370);

(statearr_71394_75873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (13))){
var inst_71348 = (state_71387[(8)]);
var inst_71349 = (state_71387[(9)]);
var inst_71374 = (state_71387[(2)]);
var inst_71375 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_71348,inst_71374);
var inst_71376 = cljs.core.next(inst_71349);
var inst_71348__$1 = inst_71375;
var inst_71349__$1 = inst_71376;
var state_71387__$1 = (function (){var statearr_71395 = state_71387;
(statearr_71395[(8)] = inst_71348__$1);

(statearr_71395[(9)] = inst_71349__$1);

return statearr_71395;
})();
var statearr_71396_75874 = state_71387__$1;
(statearr_71396_75874[(2)] = null);

(statearr_71396_75874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (6))){
var inst_71349 = (state_71387[(9)]);
var inst_71351 = (state_71387[(10)]);
var inst_71351__$1 = cljs.core.first(inst_71349);
var state_71387__$1 = (function (){var statearr_71397 = state_71387;
(statearr_71397[(10)] = inst_71351__$1);

return statearr_71397;
})();
if(cljs.core.truth_(inst_71351__$1)){
var statearr_71398_75875 = state_71387__$1;
(statearr_71398_75875[(1)] = (8));

} else {
var statearr_71399_75876 = state_71387__$1;
(statearr_71399_75876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (17))){
var inst_71372 = (state_71387[(2)]);
var state_71387__$1 = state_71387;
var statearr_71400_75877 = state_71387__$1;
(statearr_71400_75877[(2)] = inst_71372);

(statearr_71400_75877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (3))){
var inst_71385 = (state_71387[(2)]);
var state_71387__$1 = state_71387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71387__$1,inst_71385);
} else {
if((state_val_71388 === (12))){
var inst_71353 = (state_71387[(7)]);
var inst_71360 = com.wsscode.async.async_cljs.promise_QMARK_(inst_71353);
var state_71387__$1 = state_71387;
if(cljs.core.truth_(inst_71360)){
var statearr_71401_75878 = state_71387__$1;
(statearr_71401_75878[(1)] = (15));

} else {
var statearr_71402_75879 = state_71387__$1;
(statearr_71402_75879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (2))){
var _ = (function (){var statearr_71403 = state_71387;
(statearr_71403[(4)] = cljs.core.cons((5),(state_71387[(4)])));

return statearr_71403;
})();
var inst_71346 = cljs.core.PersistentVector.EMPTY;
var inst_71347 = s;
var inst_71348 = inst_71346;
var inst_71349 = inst_71347;
var state_71387__$1 = (function (){var statearr_71404 = state_71387;
(statearr_71404[(8)] = inst_71348);

(statearr_71404[(9)] = inst_71349);

return statearr_71404;
})();
var statearr_71405_75880 = state_71387__$1;
(statearr_71405_75880[(2)] = null);

(statearr_71405_75880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (19))){
var inst_71353 = (state_71387[(7)]);
var state_71387__$1 = state_71387;
var statearr_71406_75881 = state_71387__$1;
(statearr_71406_75881[(2)] = inst_71353);

(statearr_71406_75881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (11))){
var inst_71353 = (state_71387[(7)]);
var state_71387__$1 = state_71387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71387__$1,(14),inst_71353);
} else {
if((state_val_71388 === (9))){
var inst_71348 = (state_71387[(8)]);
var state_71387__$1 = state_71387;
var statearr_71408_75882 = state_71387__$1;
(statearr_71408_75882[(2)] = inst_71348);

(statearr_71408_75882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (5))){
var _ = (function (){var statearr_71409 = state_71387;
(statearr_71409[(4)] = cljs.core.rest((state_71387[(4)])));

return statearr_71409;
})();
var state_71387__$1 = state_71387;
var ex71407 = (state_71387__$1[(2)]);
var statearr_71410_75883 = state_71387__$1;
(statearr_71410_75883[(5)] = ex71407);


var statearr_71411_75884 = state_71387__$1;
(statearr_71411_75884[(1)] = (4));

(statearr_71411_75884[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (14))){
var inst_71357 = (state_71387[(2)]);
var inst_71358 = com.wsscode.async.async_cljs.throw_err(inst_71357);
var state_71387__$1 = state_71387;
var statearr_71412_75885 = state_71387__$1;
(statearr_71412_75885[(2)] = inst_71358);

(statearr_71412_75885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (16))){
var state_71387__$1 = state_71387;
var statearr_71413_75886 = state_71387__$1;
(statearr_71413_75886[(1)] = (19));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (10))){
var inst_71380 = (state_71387[(2)]);
var state_71387__$1 = state_71387;
var statearr_71415_75887 = state_71387__$1;
(statearr_71415_75887[(2)] = inst_71380);

(statearr_71415_75887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (18))){
var inst_71364 = (state_71387[(2)]);
var inst_71365 = com.wsscode.async.async_cljs.consumer_pair(inst_71364);
var state_71387__$1 = state_71387;
var statearr_71416_75888 = state_71387__$1;
(statearr_71416_75888[(2)] = inst_71365);

(statearr_71416_75888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (8))){
var inst_71351 = (state_71387[(10)]);
var inst_71353 = (state_71387[(7)]);
var inst_71353__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71351) : f.call(null,inst_71351));
var inst_71354 = com.wsscode.async.async_cljs.chan_QMARK_(inst_71353__$1);
var state_71387__$1 = (function (){var statearr_71417 = state_71387;
(statearr_71417[(7)] = inst_71353__$1);

return statearr_71417;
})();
if(inst_71354){
var statearr_71418_75889 = state_71387__$1;
(statearr_71418_75889[(1)] = (11));

} else {
var statearr_71419_75890 = state_71387__$1;
(statearr_71419_75890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto____0 = (function (){
var statearr_71420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71420[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto__);

(statearr_71420[(1)] = (1));

return statearr_71420;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto____1 = (function (state_71387){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_71387);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e71421){var ex__42124__auto__ = e71421;
var statearr_71422_75891 = state_71387;
(statearr_71422_75891[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_71387[(4)]))){
var statearr_71423_75892 = state_71387;
(statearr_71423_75892[(1)] = cljs.core.first((state_71387[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75893 = state_71387;
state_71387 = G__75893;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto__ = function(state_71387){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto____1.call(this,state_71387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_71424 = f__42153__auto__();
(statearr_71424[(6)] = c__42152__auto__);

return statearr_71424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
com.wsscode.pathom.connect.async_reader_cached_resp_builder_fn = (function com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn(env,batch_QMARK_,processing_sequence,input,s,e){
return (function (){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_71500){
var state_val_71501 = (state_71500[(1)]);
if((state_val_71501 === (7))){
var inst_71433 = (state_71500[(7)]);
var state_71500__$1 = state_71500;
var statearr_71502_75894 = state_71500__$1;
(statearr_71502_75894[(2)] = inst_71433);

(statearr_71502_75894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (20))){
var inst_71457 = (state_71500[(2)]);
var inst_71458 = com.wsscode.async.async_cljs.consumer_pair(inst_71457);
var state_71500__$1 = state_71500;
var statearr_71503_75895 = state_71500__$1;
(statearr_71503_75895[(2)] = inst_71458);

(statearr_71503_75895[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (27))){
var inst_71476 = (state_71500[(2)]);
var inst_71477 = com.wsscode.async.async_cljs.throw_err(inst_71476);
var state_71500__$1 = state_71500;
var statearr_71504_75896 = state_71500__$1;
(statearr_71504_75896[(2)] = inst_71477);

(statearr_71504_75896[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (1))){
var state_71500__$1 = state_71500;
var statearr_71505_75897 = state_71500__$1;
(statearr_71505_75897[(2)] = null);

(statearr_71505_75897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (24))){
var inst_71472 = (state_71500[(8)]);
var state_71500__$1 = state_71500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71500__$1,(27),inst_71472);
} else {
if((state_val_71501 === (4))){
var inst_71427 = (state_71500[(2)]);
var state_71500__$1 = state_71500;
var statearr_71506_75898 = state_71500__$1;
(statearr_71506_75898[(2)] = inst_71427);

(statearr_71506_75898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (15))){
var inst_71445 = (state_71500[(9)]);
var inst_71467 = (state_71500[(2)]);
var inst_71468 = cljs.core.zipmap(inst_71445,inst_71467);
var inst_71469 = com.wsscode.pathom.connect.cache_batch(env,s,inst_71468);
var inst_71470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71468,e);
var state_71500__$1 = (function (){var statearr_71507 = state_71500;
(statearr_71507[(10)] = inst_71469);

return statearr_71507;
})();
var statearr_71508_75899 = state_71500__$1;
(statearr_71508_75899[(2)] = inst_71470);

(statearr_71508_75899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (21))){
var inst_71446 = (state_71500[(11)]);
var state_71500__$1 = state_71500;
var statearr_71509_75900 = state_71500__$1;
(statearr_71509_75900[(2)] = inst_71446);

(statearr_71509_75900[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (31))){
var inst_71483 = (state_71500[(2)]);
var inst_71484 = com.wsscode.async.async_cljs.consumer_pair(inst_71483);
var state_71500__$1 = state_71500;
var statearr_71510_75901 = state_71500__$1;
(statearr_71510_75901[(2)] = inst_71484);

(statearr_71510_75901[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (32))){
var inst_71472 = (state_71500[(8)]);
var state_71500__$1 = state_71500;
var statearr_71511_75902 = state_71500__$1;
(statearr_71511_75902[(2)] = inst_71472);

(statearr_71511_75902[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (33))){
var state_71500__$1 = state_71500;
var statearr_71512_75903 = state_71500__$1;
(statearr_71512_75903[(2)] = null);

(statearr_71512_75903[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (13))){
var inst_71446 = (state_71500[(11)]);
var state_71500__$1 = state_71500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71500__$1,(16),inst_71446);
} else {
if((state_val_71501 === (22))){
var state_71500__$1 = state_71500;
var statearr_71513_75904 = state_71500__$1;
(statearr_71513_75904[(2)] = null);

(statearr_71513_75904[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (29))){
var state_71500__$1 = state_71500;
var statearr_71514_75905 = state_71500__$1;
(statearr_71514_75905[(1)] = (32));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (6))){
var state_71500__$1 = state_71500;
var statearr_71516_75906 = state_71500__$1;
(statearr_71516_75906[(2)] = processing_sequence);

(statearr_71516_75906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (28))){
var inst_71472 = (state_71500[(8)]);
var inst_71481 = com.wsscode.async.async_cljs.promise__GT_chan(inst_71472);
var state_71500__$1 = state_71500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71500__$1,(31),inst_71481);
} else {
if((state_val_71501 === (25))){
var inst_71472 = (state_71500[(8)]);
var inst_71479 = com.wsscode.async.async_cljs.promise_QMARK_(inst_71472);
var state_71500__$1 = state_71500;
if(cljs.core.truth_(inst_71479)){
var statearr_71517_75907 = state_71500__$1;
(statearr_71517_75907[(1)] = (28));

} else {
var statearr_71518_75908 = state_71500__$1;
(statearr_71518_75908[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (34))){
var inst_71489 = (state_71500[(2)]);
var state_71500__$1 = state_71500;
var statearr_71519_75909 = state_71500__$1;
(statearr_71519_75909[(2)] = inst_71489);

(statearr_71519_75909[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (17))){
var inst_71446 = (state_71500[(11)]);
var inst_71455 = com.wsscode.async.async_cljs.promise__GT_chan(inst_71446);
var state_71500__$1 = state_71500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71500__$1,(20),inst_71455);
} else {
if((state_val_71501 === (3))){
var inst_71498 = (state_71500[(2)]);
var state_71500__$1 = state_71500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71500__$1,inst_71498);
} else {
if((state_val_71501 === (12))){
var inst_71439 = (state_71500[(12)]);
var inst_71445 = (state_71500[(9)]);
var inst_71446 = (state_71500[(11)]);
var inst_71443 = (state_71500[(2)]);
var inst_71444 = com.wsscode.async.async_cljs.throw_err(inst_71443);
var inst_71445__$1 = cljs.core.filterv(inst_71439,inst_71444);
var inst_71446__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_71445__$1);
var inst_71447 = com.wsscode.async.async_cljs.chan_QMARK_(inst_71446__$1);
var state_71500__$1 = (function (){var statearr_71520 = state_71500;
(statearr_71520[(9)] = inst_71445__$1);

(statearr_71520[(11)] = inst_71446__$1);

return statearr_71520;
})();
if(inst_71447){
var statearr_71521_75910 = state_71500__$1;
(statearr_71521_75910[(1)] = (13));

} else {
var statearr_71522_75911 = state_71500__$1;
(statearr_71522_75911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (2))){
var inst_71433 = (state_71500[(7)]);
var _ = (function (){var statearr_71523 = state_71500;
(statearr_71523[(4)] = cljs.core.cons((5),(state_71500[(4)])));

return statearr_71523;
})();
var inst_71433__$1 = batch_QMARK_;
var state_71500__$1 = (function (){var statearr_71524 = state_71500;
(statearr_71524[(7)] = inst_71433__$1);

return statearr_71524;
})();
if(cljs.core.truth_(inst_71433__$1)){
var statearr_71525_75912 = state_71500__$1;
(statearr_71525_75912[(1)] = (6));

} else {
var statearr_71526_75913 = state_71500__$1;
(statearr_71526_75913[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (23))){
var inst_71463 = (state_71500[(2)]);
var state_71500__$1 = state_71500;
var statearr_71527_75914 = state_71500__$1;
(statearr_71527_75914[(2)] = inst_71463);

(statearr_71527_75914[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (19))){
var inst_71465 = (state_71500[(2)]);
var state_71500__$1 = state_71500;
var statearr_71528_75915 = state_71500__$1;
(statearr_71528_75915[(2)] = inst_71465);

(statearr_71528_75915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (11))){
var inst_71495 = (state_71500[(2)]);
var _ = (function (){var statearr_71530 = state_71500;
(statearr_71530[(4)] = cljs.core.rest((state_71500[(4)])));

return statearr_71530;
})();
var state_71500__$1 = state_71500;
var statearr_71531_75916 = state_71500__$1;
(statearr_71531_75916[(2)] = inst_71495);

(statearr_71531_75916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (9))){
var inst_71439 = (function (){return (function (p1__71426_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__71426_SHARP_,input);
});
})();
var inst_71440 = (function (){return (function (p1__71425_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__71425_SHARP_,input);
});
})();
var inst_71441 = com.wsscode.pathom.connect.map_async_serial(inst_71440,processing_sequence);
var state_71500__$1 = (function (){var statearr_71532 = state_71500;
(statearr_71532[(12)] = inst_71439);

return statearr_71532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71500__$1,(12),inst_71441);
} else {
if((state_val_71501 === (5))){
var _ = (function (){var statearr_71533 = state_71500;
(statearr_71533[(4)] = cljs.core.rest((state_71500[(4)])));

return statearr_71533;
})();
var state_71500__$1 = state_71500;
var ex71529 = (state_71500__$1[(2)]);
var statearr_71534_75917 = state_71500__$1;
(statearr_71534_75917[(5)] = ex71529);


var statearr_71535_75918 = state_71500__$1;
(statearr_71535_75918[(1)] = (4));

(statearr_71535_75918[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (14))){
var inst_71446 = (state_71500[(11)]);
var inst_71453 = com.wsscode.async.async_cljs.promise_QMARK_(inst_71446);
var state_71500__$1 = state_71500;
if(cljs.core.truth_(inst_71453)){
var statearr_71536_75919 = state_71500__$1;
(statearr_71536_75919[(1)] = (17));

} else {
var statearr_71537_75920 = state_71500__$1;
(statearr_71537_75920[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (26))){
var inst_71493 = (state_71500[(2)]);
var state_71500__$1 = state_71500;
var statearr_71538_75921 = state_71500__$1;
(statearr_71538_75921[(2)] = inst_71493);

(statearr_71538_75921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (16))){
var inst_71450 = (state_71500[(2)]);
var inst_71451 = com.wsscode.async.async_cljs.throw_err(inst_71450);
var state_71500__$1 = state_71500;
var statearr_71539_75922 = state_71500__$1;
(statearr_71539_75922[(2)] = inst_71451);

(statearr_71539_75922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (30))){
var inst_71491 = (state_71500[(2)]);
var state_71500__$1 = state_71500;
var statearr_71540_75923 = state_71500__$1;
(statearr_71540_75923[(2)] = inst_71491);

(statearr_71540_75923[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (10))){
var inst_71472 = (state_71500[(8)]);
var inst_71472__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_71473 = com.wsscode.async.async_cljs.chan_QMARK_(inst_71472__$1);
var state_71500__$1 = (function (){var statearr_71541 = state_71500;
(statearr_71541[(8)] = inst_71472__$1);

return statearr_71541;
})();
if(inst_71473){
var statearr_71542_75924 = state_71500__$1;
(statearr_71542_75924[(1)] = (24));

} else {
var statearr_71543_75925 = state_71500__$1;
(statearr_71543_75925[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (18))){
var state_71500__$1 = state_71500;
var statearr_71544_75926 = state_71500__$1;
(statearr_71544_75926[(1)] = (21));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71501 === (8))){
var inst_71437 = (state_71500[(2)]);
var state_71500__$1 = state_71500;
if(cljs.core.truth_(inst_71437)){
var statearr_71546_75927 = state_71500__$1;
(statearr_71546_75927[(1)] = (9));

} else {
var statearr_71547_75928 = state_71500__$1;
(statearr_71547_75928[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto____0 = (function (){
var statearr_71548 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71548[(0)] = com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto__);

(statearr_71548[(1)] = (1));

return statearr_71548;
});
var com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto____1 = (function (state_71500){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_71500);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e71549){var ex__42124__auto__ = e71549;
var statearr_71550_75929 = state_71500;
(statearr_71550_75929[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_71500[(4)]))){
var statearr_71551_75930 = state_71500;
(statearr_71551_75930[(1)] = cljs.core.first((state_71500[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75931 = state_71500;
state_71500 = G__75931;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto__ = function(state_71500){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto____1.call(this,state_71500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$async_reader_cached_resp_builder_fn_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_71552 = f__42153__auto__();
(statearr_71552[(6)] = c__42152__auto__);

return statearr_71552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
});
/**
 * DEPRECATED: use async-reader2
 * 
 *   Like reader, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__71554){
var map__71555 = p__71554;
var map__71555__$1 = cljs.core.__destructure_map(map__71555);
var env = map__71555__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71555__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71555__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_71723){
var state_val_71724 = (state_71723[(1)]);
if((state_val_71724 === (65))){
var inst_71687 = (state_71723[(7)]);
var inst_71694 = com.wsscode.async.async_cljs.promise_QMARK_(inst_71687);
var state_71723__$1 = state_71723;
if(cljs.core.truth_(inst_71694)){
var statearr_71725_75932 = state_71723__$1;
(statearr_71725_75932[(1)] = (68));

} else {
var statearr_71726_75933 = state_71723__$1;
(statearr_71726_75933[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (70))){
var inst_71706 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71727_75934 = state_71723__$1;
(statearr_71727_75934[(2)] = inst_71706);

(statearr_71727_75934[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (62))){
var state_71723__$1 = state_71723;
var statearr_71728_75935 = state_71723__$1;
(statearr_71728_75935[(2)] = null);

(statearr_71728_75935[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (74))){
var inst_71704 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71729_75936 = state_71723__$1;
(statearr_71729_75936[(2)] = inst_71704);

(statearr_71729_75936[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (7))){
var inst_71565 = (state_71723[(8)]);
var inst_71568 = (state_71723[(9)]);
var inst_71570 = (state_71723[(10)]);
var inst_71573 = (state_71723[(11)]);
var inst_71574 = (state_71723[(12)]);
var inst_71568__$1 = cljs.core.__destructure_map(inst_71565);
var inst_71569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71568__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_71570__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71568__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_71572 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,inst_71570__$1) : com.wsscode.pathom.connect.resolver_data.call(null,env,inst_71570__$1));
var inst_71573__$1 = cljs.core.__destructure_map(inst_71572);
var inst_71574__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_71573__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_71575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71573__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_71576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71573__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_71577 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_71573__$1);
var state_71723__$1 = (function (){var statearr_71730 = state_71723;
(statearr_71730[(9)] = inst_71568__$1);

(statearr_71730[(13)] = inst_71569);

(statearr_71730[(10)] = inst_71570__$1);

(statearr_71730[(11)] = inst_71573__$1);

(statearr_71730[(12)] = inst_71574__$1);

(statearr_71730[(14)] = inst_71575);

(statearr_71730[(15)] = inst_71576);

(statearr_71730[(16)] = inst_71577);

return statearr_71730;
})();
if(cljs.core.truth_(inst_71574__$1)){
var statearr_71732_75937 = state_71723__$1;
(statearr_71732_75937[(1)] = (10));

} else {
var statearr_71733_75938 = state_71723__$1;
(statearr_71733_75938[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (59))){
var state_71723__$1 = state_71723;
var statearr_71734_75939 = state_71723__$1;
(statearr_71734_75939[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_71734_75939[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (20))){
var inst_71594 = (state_71723[(2)]);
var inst_71595 = com.wsscode.async.async_cljs.consumer_pair(inst_71594);
var state_71723__$1 = state_71723;
var statearr_71735_75940 = state_71723__$1;
(statearr_71735_75940[(2)] = inst_71595);

(statearr_71735_75940[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (72))){
var inst_71687 = (state_71723[(7)]);
var state_71723__$1 = state_71723;
var statearr_71736_75941 = state_71723__$1;
(statearr_71736_75941[(2)] = inst_71687);

(statearr_71736_75941[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (58))){
var inst_71650 = (state_71723[(17)]);
var state_71723__$1 = state_71723;
var statearr_71737_75942 = state_71723__$1;
(statearr_71737_75942[(2)] = inst_71650);

(statearr_71737_75942[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (60))){
var inst_71683 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71738_75943 = state_71723__$1;
(statearr_71738_75943[(2)] = inst_71683);

(statearr_71738_75943[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (27))){
var inst_71610 = (state_71723[(2)]);
var inst_71611 = com.wsscode.async.async_cljs.throw_err(inst_71610);
var state_71723__$1 = state_71723;
var statearr_71742_75944 = state_71723__$1;
(statearr_71742_75944[(2)] = inst_71611);

(statearr_71742_75944[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (1))){
var state_71723__$1 = state_71723;
var statearr_71743_75945 = state_71723__$1;
(statearr_71743_75945[(2)] = null);

(statearr_71743_75945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (69))){
var state_71723__$1 = state_71723;
var statearr_71744_75946 = state_71723__$1;
(statearr_71744_75946[(1)] = (72));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (24))){
var inst_71606 = (state_71723[(18)]);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(27),inst_71606);
} else {
if((state_val_71724 === (55))){
var inst_71631 = (state_71723[(19)]);
var inst_71679 = cljs.core.contains_QMARK_(inst_71631,k);
var state_71723__$1 = state_71723;
if(inst_71679){
var statearr_71746_75947 = state_71723__$1;
(statearr_71746_75947[(1)] = (58));

} else {
var statearr_71747_75948 = state_71723__$1;
(statearr_71747_75948[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (39))){
var state_71723__$1 = state_71723;
var statearr_71748_75949 = state_71723__$1;
(statearr_71748_75949[(2)] = null);

(statearr_71748_75949[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (46))){
var inst_71675 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71749_75950 = state_71723__$1;
(statearr_71749_75950[(2)] = inst_71675);

(statearr_71749_75950[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (4))){
var inst_71556 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71750_75951 = state_71723__$1;
(statearr_71750_75951[(2)] = inst_71556);

(statearr_71750_75951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (54))){
var inst_71671 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71751_75952 = state_71723__$1;
(statearr_71751_75952[(2)] = inst_71671);

(statearr_71751_75952[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (15))){
var inst_71604 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71752_75953 = state_71723__$1;
(statearr_71752_75953[(2)] = inst_71604);

(statearr_71752_75953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (48))){
var inst_71654 = (state_71723[(20)]);
var inst_71663 = com.wsscode.async.async_cljs.promise__GT_chan(inst_71654);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(51),inst_71663);
} else {
if((state_val_71724 === (50))){
var inst_71673 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71753_75954 = state_71723__$1;
(statearr_71753_75954[(2)] = inst_71673);

(statearr_71753_75954[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (21))){
var inst_71583 = (state_71723[(21)]);
var state_71723__$1 = state_71723;
var statearr_71754_75955 = state_71723__$1;
(statearr_71754_75955[(2)] = inst_71583);

(statearr_71754_75955[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (31))){
var inst_71617 = (state_71723[(2)]);
var inst_71618 = com.wsscode.async.async_cljs.consumer_pair(inst_71617);
var state_71723__$1 = state_71723;
var statearr_71757_75956 = state_71723__$1;
(statearr_71757_75956[(2)] = inst_71618);

(statearr_71757_75956[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (32))){
var inst_71606 = (state_71723[(18)]);
var state_71723__$1 = state_71723;
var statearr_71758_75957 = state_71723__$1;
(statearr_71758_75957[(2)] = inst_71606);

(statearr_71758_75957[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (40))){
var inst_71576 = (state_71723[(15)]);
var inst_71565 = (state_71723[(8)]);
var inst_71573 = (state_71723[(11)]);
var inst_71631 = (state_71723[(19)]);
var inst_71574 = (state_71723[(12)]);
var inst_71568 = (state_71723[(9)]);
var inst_71575 = (state_71723[(14)]);
var inst_71577 = (state_71723[(16)]);
var inst_71569 = (state_71723[(13)]);
var inst_71570 = (state_71723[(10)]);
var inst_71630 = (state_71723[(22)]);
var inst_71650 = (state_71723[(17)]);
var inst_71647 = (state_71723[(2)]);
var inst_71648 = (function (){var input = inst_71576;
var temp__5802__auto__ = inst_71565;
var map__71571 = inst_71573;
var response = inst_71631;
var cache_QMARK_ = inst_71574;
var map__71567 = inst_71568;
var batch_QMARK_ = inst_71575;
var env__$1 = inst_71577;
var e = inst_71569;
var s = inst_71570;
var resolver = inst_71573;
var env_SINGLEQUOTE_ = inst_71630;
return (function (p1__71553_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__71553_SHARP_], 0));
});
})();
var inst_71649 = com.wsscode.pathom.core.swap_entity_BANG_(inst_71630,inst_71648);
var inst_71650__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71631,k);
var inst_71651 = cljs.core.sequential_QMARK_(inst_71650__$1);
var state_71723__$1 = (function (){var statearr_71767 = state_71723;
(statearr_71767[(23)] = inst_71647);

(statearr_71767[(24)] = inst_71649);

(statearr_71767[(17)] = inst_71650__$1);

return statearr_71767;
})();
if(inst_71651){
var statearr_71768_75958 = state_71723__$1;
(statearr_71768_75958[(1)] = (41));

} else {
var statearr_71769_75959 = state_71723__$1;
(statearr_71769_75959[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (56))){
var state_71723__$1 = state_71723;
var statearr_71770_75960 = state_71723__$1;
(statearr_71770_75960[(1)] = (61));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (33))){
var state_71723__$1 = state_71723;
var statearr_71772_75961 = state_71723__$1;
(statearr_71772_75961[(2)] = null);

(statearr_71772_75961[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (13))){
var inst_71583 = (state_71723[(21)]);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(16),inst_71583);
} else {
if((state_val_71724 === (22))){
var state_71723__$1 = state_71723;
var statearr_71775_75962 = state_71723__$1;
(statearr_71775_75962[(2)] = null);

(statearr_71775_75962[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (36))){
var inst_71631 = (state_71723[(19)]);
var inst_71635 = cljs.core.map_QMARK_(inst_71631);
var state_71723__$1 = state_71723;
var statearr_71777_75963 = state_71723__$1;
(statearr_71777_75963[(2)] = inst_71635);

(statearr_71777_75963[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (41))){
var inst_71650 = (state_71723[(17)]);
var inst_71630 = (state_71723[(22)]);
var inst_71654 = (state_71723[(20)]);
var inst_71653 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_71650);
var inst_71654__$1 = com.wsscode.pathom.core.join_seq(inst_71630,inst_71653);
var inst_71655 = com.wsscode.async.async_cljs.chan_QMARK_(inst_71654__$1);
var state_71723__$1 = (function (){var statearr_71779 = state_71723;
(statearr_71779[(20)] = inst_71654__$1);

return statearr_71779;
})();
if(inst_71655){
var statearr_71780_75964 = state_71723__$1;
(statearr_71780_75964[(1)] = (44));

} else {
var statearr_71781_75965 = state_71723__$1;
(statearr_71781_75965[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (43))){
var inst_71715 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71782_75966 = state_71723__$1;
(statearr_71782_75966[(2)] = inst_71715);

(statearr_71782_75966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (61))){
var inst_71650 = (state_71723[(17)]);
var inst_71630 = (state_71723[(22)]);
var inst_71687 = (state_71723[(7)]);
var inst_71686 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_71650);
var inst_71687__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_71686,inst_71630);
var inst_71688 = com.wsscode.async.async_cljs.chan_QMARK_(inst_71687__$1);
var state_71723__$1 = (function (){var statearr_71792 = state_71723;
(statearr_71792[(7)] = inst_71687__$1);

return statearr_71792;
})();
if(inst_71688){
var statearr_71793_75967 = state_71723__$1;
(statearr_71793_75967[(1)] = (64));

} else {
var statearr_71796_75968 = state_71723__$1;
(statearr_71796_75968[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (29))){
var state_71723__$1 = state_71723;
var statearr_71801_75969 = state_71723__$1;
(statearr_71801_75969[(1)] = (32));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (44))){
var inst_71654 = (state_71723[(20)]);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(47),inst_71654);
} else {
if((state_val_71724 === (6))){
var inst_71565 = (state_71723[(8)]);
var inst_71564 = (state_71723[(2)]);
var inst_71565__$1 = com.wsscode.async.async_cljs.throw_err(inst_71564);
var state_71723__$1 = (function (){var statearr_71804 = state_71723;
(statearr_71804[(8)] = inst_71565__$1);

return statearr_71804;
})();
if(cljs.core.truth_(inst_71565__$1)){
var statearr_71806_75970 = state_71723__$1;
(statearr_71806_75970[(1)] = (7));

} else {
var statearr_71807_75971 = state_71723__$1;
(statearr_71807_75971[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (28))){
var inst_71606 = (state_71723[(18)]);
var inst_71615 = com.wsscode.async.async_cljs.promise__GT_chan(inst_71606);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(31),inst_71615);
} else {
if((state_val_71724 === (64))){
var inst_71687 = (state_71723[(7)]);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(67),inst_71687);
} else {
if((state_val_71724 === (51))){
var inst_71665 = (state_71723[(2)]);
var inst_71666 = com.wsscode.async.async_cljs.consumer_pair(inst_71665);
var state_71723__$1 = state_71723;
var statearr_71809_75972 = state_71723__$1;
(statearr_71809_75972[(2)] = inst_71666);

(statearr_71809_75972[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (25))){
var inst_71606 = (state_71723[(18)]);
var inst_71613 = com.wsscode.async.async_cljs.promise_QMARK_(inst_71606);
var state_71723__$1 = state_71723;
if(cljs.core.truth_(inst_71613)){
var statearr_71810_75973 = state_71723__$1;
(statearr_71810_75973[(1)] = (28));

} else {
var statearr_71811_75974 = state_71723__$1;
(statearr_71811_75974[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (34))){
var inst_71623 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71812_75975 = state_71723__$1;
(statearr_71812_75975[(2)] = inst_71623);

(statearr_71812_75975[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (17))){
var inst_71583 = (state_71723[(21)]);
var inst_71592 = com.wsscode.async.async_cljs.promise__GT_chan(inst_71583);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(20),inst_71592);
} else {
if((state_val_71724 === (3))){
var inst_71721 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71723__$1,inst_71721);
} else {
if((state_val_71724 === (12))){
var inst_71577 = (state_71723[(16)]);
var inst_71631 = (state_71723[(19)]);
var inst_71632 = (state_71723[(25)]);
var inst_71629 = (state_71723[(2)]);
var inst_71630 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_71629,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_71577);
var inst_71631__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_71629,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_71632__$1 = (inst_71631__$1 == null);
var state_71723__$1 = (function (){var statearr_71813 = state_71723;
(statearr_71813[(22)] = inst_71630);

(statearr_71813[(19)] = inst_71631__$1);

(statearr_71813[(25)] = inst_71632__$1);

return statearr_71813;
})();
if(cljs.core.truth_(inst_71632__$1)){
var statearr_71814_75976 = state_71723__$1;
(statearr_71814_75976[(1)] = (35));

} else {
var statearr_71815_75977 = state_71723__$1;
(statearr_71815_75977[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (2))){
var _ = (function (){var statearr_71826 = state_71723;
(statearr_71826[(4)] = cljs.core.cons((5),(state_71723[(4)])));

return statearr_71826;
})();
var inst_71562 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(6),inst_71562);
} else {
if((state_val_71724 === (66))){
var inst_71708 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71830_75978 = state_71723__$1;
(statearr_71830_75978[(2)] = inst_71708);

(statearr_71830_75978[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (23))){
var inst_71600 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71831_75979 = state_71723__$1;
(statearr_71831_75979[(2)] = inst_71600);

(statearr_71831_75979[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (47))){
var inst_71658 = (state_71723[(2)]);
var inst_71659 = com.wsscode.async.async_cljs.throw_err(inst_71658);
var state_71723__$1 = state_71723;
var statearr_71832_75980 = state_71723__$1;
(statearr_71832_75980[(2)] = inst_71659);

(statearr_71832_75980[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (35))){
var inst_71632 = (state_71723[(25)]);
var state_71723__$1 = state_71723;
var statearr_71833_75981 = state_71723__$1;
(statearr_71833_75981[(2)] = inst_71632);

(statearr_71833_75981[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (19))){
var inst_71602 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71834_75982 = state_71723__$1;
(statearr_71834_75982[(2)] = inst_71602);

(statearr_71834_75982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (57))){
var inst_71713 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71835_75983 = state_71723__$1;
(statearr_71835_75983[(2)] = inst_71713);

(statearr_71835_75983[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (68))){
var inst_71687 = (state_71723[(7)]);
var inst_71696 = com.wsscode.async.async_cljs.promise__GT_chan(inst_71687);
var state_71723__$1 = state_71723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71723__$1,(71),inst_71696);
} else {
if((state_val_71724 === (11))){
var inst_71577 = (state_71723[(16)]);
var inst_71569 = (state_71723[(13)]);
var inst_71606 = (state_71723[(18)]);
var inst_71606__$1 = com.wsscode.pathom.connect.call_resolver(inst_71577,inst_71569);
var inst_71607 = com.wsscode.async.async_cljs.chan_QMARK_(inst_71606__$1);
var state_71723__$1 = (function (){var statearr_71837 = state_71723;
(statearr_71837[(18)] = inst_71606__$1);

return statearr_71837;
})();
if(inst_71607){
var statearr_71838_75984 = state_71723__$1;
(statearr_71838_75984[(1)] = (24));

} else {
var statearr_71839_75985 = state_71723__$1;
(statearr_71839_75985[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (9))){
var inst_71718 = (state_71723[(2)]);
var _ = (function (){var statearr_71840 = state_71723;
(statearr_71840[(4)] = cljs.core.rest((state_71723[(4)])));

return statearr_71840;
})();
var state_71723__$1 = state_71723;
var statearr_71841_75986 = state_71723__$1;
(statearr_71841_75986[(2)] = inst_71718);

(statearr_71841_75986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (5))){
var _ = (function (){var statearr_71842 = state_71723;
(statearr_71842[(4)] = cljs.core.rest((state_71723[(4)])));

return statearr_71842;
})();
var state_71723__$1 = state_71723;
var ex71836 = (state_71723__$1[(2)]);
var statearr_71843_75987 = state_71723__$1;
(statearr_71843_75987[(5)] = ex71836);


var statearr_71845_75988 = state_71723__$1;
(statearr_71845_75988[(1)] = (4));

(statearr_71845_75988[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (14))){
var inst_71583 = (state_71723[(21)]);
var inst_71590 = com.wsscode.async.async_cljs.promise_QMARK_(inst_71583);
var state_71723__$1 = state_71723;
if(cljs.core.truth_(inst_71590)){
var statearr_71846_75989 = state_71723__$1;
(statearr_71846_75989[(1)] = (17));

} else {
var statearr_71847_75990 = state_71723__$1;
(statearr_71847_75990[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (45))){
var inst_71654 = (state_71723[(20)]);
var inst_71661 = com.wsscode.async.async_cljs.promise_QMARK_(inst_71654);
var state_71723__$1 = state_71723;
if(cljs.core.truth_(inst_71661)){
var statearr_71849_75991 = state_71723__$1;
(statearr_71849_75991[(1)] = (48));

} else {
var statearr_71851_75992 = state_71723__$1;
(statearr_71851_75992[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (53))){
var state_71723__$1 = state_71723;
var statearr_71852_75993 = state_71723__$1;
(statearr_71852_75993[(2)] = null);

(statearr_71852_75993[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (26))){
var inst_71627 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71856_75994 = state_71723__$1;
(statearr_71856_75994[(2)] = inst_71627);

(statearr_71856_75994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (16))){
var inst_71587 = (state_71723[(2)]);
var inst_71588 = com.wsscode.async.async_cljs.throw_err(inst_71587);
var state_71723__$1 = state_71723;
var statearr_71857_75995 = state_71723__$1;
(statearr_71857_75995[(2)] = inst_71588);

(statearr_71857_75995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (38))){
var inst_71570 = (state_71723[(10)]);
var inst_71631 = (state_71723[(19)]);
var inst_71640 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_71641 = [inst_71570,inst_71631];
var inst_71642 = cljs.core.PersistentHashMap.fromArrays(inst_71640,inst_71641);
var inst_71643 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_71642);
var inst_71644 = (function(){throw inst_71643})();
var state_71723__$1 = state_71723;
var statearr_71858_75996 = state_71723__$1;
(statearr_71858_75996[(2)] = inst_71644);

(statearr_71858_75996[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (30))){
var inst_71625 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71860_75997 = state_71723__$1;
(statearr_71860_75997[(2)] = inst_71625);

(statearr_71860_75997[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (73))){
var state_71723__$1 = state_71723;
var statearr_71861_75998 = state_71723__$1;
(statearr_71861_75998[(2)] = null);

(statearr_71861_75998[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (10))){
var inst_71570 = (state_71723[(10)]);
var inst_71569 = (state_71723[(13)]);
var inst_71577 = (state_71723[(16)]);
var inst_71575 = (state_71723[(14)]);
var inst_71576 = (state_71723[(15)]);
var inst_71583 = (state_71723[(21)]);
var inst_71579 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71580 = [inst_71570,inst_71569,p];
var inst_71581 = (new cljs.core.PersistentVector(null,3,(5),inst_71579,inst_71580,null));
var inst_71582 = com.wsscode.pathom.connect.async_reader_cached_resp_builder_fn(inst_71577,inst_71575,processing_sequence,inst_71576,inst_71570,inst_71569);
var inst_71583__$1 = com.wsscode.pathom.core.cached_async(inst_71577,inst_71581,inst_71582);
var inst_71584 = com.wsscode.async.async_cljs.chan_QMARK_(inst_71583__$1);
var state_71723__$1 = (function (){var statearr_71863 = state_71723;
(statearr_71863[(21)] = inst_71583__$1);

return statearr_71863;
})();
if(inst_71584){
var statearr_71865_75999 = state_71723__$1;
(statearr_71865_75999[(1)] = (13));

} else {
var statearr_71866_76000 = state_71723__$1;
(statearr_71866_76000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (18))){
var state_71723__$1 = state_71723;
var statearr_71869_76001 = state_71723__$1;
(statearr_71869_76001[(1)] = (21));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (52))){
var inst_71654 = (state_71723[(20)]);
var state_71723__$1 = state_71723;
var statearr_71872_76002 = state_71723__$1;
(statearr_71872_76002[(2)] = inst_71654);

(statearr_71872_76002[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (67))){
var inst_71691 = (state_71723[(2)]);
var inst_71692 = com.wsscode.async.async_cljs.throw_err(inst_71691);
var state_71723__$1 = state_71723;
var statearr_71873_76003 = state_71723__$1;
(statearr_71873_76003[(2)] = inst_71692);

(statearr_71873_76003[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (71))){
var inst_71698 = (state_71723[(2)]);
var inst_71699 = com.wsscode.async.async_cljs.consumer_pair(inst_71698);
var state_71723__$1 = state_71723;
var statearr_71878_76004 = state_71723__$1;
(statearr_71878_76004[(2)] = inst_71699);

(statearr_71878_76004[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (42))){
var inst_71650 = (state_71723[(17)]);
var inst_71677 = (inst_71650 == null);
var state_71723__$1 = state_71723;
if(cljs.core.truth_(inst_71677)){
var statearr_71881_76005 = state_71723__$1;
(statearr_71881_76005[(1)] = (55));

} else {
var statearr_71882_76006 = state_71723__$1;
(statearr_71882_76006[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (37))){
var inst_71637 = (state_71723[(2)]);
var inst_71638 = cljs.core.not(inst_71637);
var state_71723__$1 = state_71723;
if(inst_71638){
var statearr_71883_76007 = state_71723__$1;
(statearr_71883_76007[(1)] = (38));

} else {
var statearr_71891_76008 = state_71723__$1;
(statearr_71891_76008[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (63))){
var inst_71711 = (state_71723[(2)]);
var state_71723__$1 = state_71723;
var statearr_71892_76009 = state_71723__$1;
(statearr_71892_76009[(2)] = inst_71711);

(statearr_71892_76009[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (8))){
var state_71723__$1 = state_71723;
var statearr_71893_76010 = state_71723__$1;
(statearr_71893_76010[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_71893_76010[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71724 === (49))){
var state_71723__$1 = state_71723;
var statearr_71894_76011 = state_71723__$1;
(statearr_71894_76011[(1)] = (52));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto____0 = (function (){
var statearr_71896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71896[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto__);

(statearr_71896[(1)] = (1));

return statearr_71896;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto____1 = (function (state_71723){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_71723);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e71897){var ex__42124__auto__ = e71897;
var statearr_71898_76012 = state_71723;
(statearr_71898_76012[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_71723[(4)]))){
var statearr_71899_76013 = state_71723;
(statearr_71899_76013[(1)] = cljs.core.first((state_71723[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76014 = state_71723;
state_71723 = G__76014;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto__ = function(state_71723){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto____1.call(this,state_71723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_71900 = f__42153__auto__();
(statearr_71900[(6)] = c__42152__auto__);

return statearr_71900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_call_batch = (function com$wsscode$pathom$connect$async_read_call_batch(p__71903,e,trace_data,input){
var map__71904 = p__71903;
var map__71904__$1 = cljs.core.__destructure_map(map__71904);
var env = map__71904__$1;
var map__71905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71904__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__71905__$1 = cljs.core.__destructure_map(map__71905);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71905__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71904__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___76015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_72027){
var state_val_72028 = (state_72027[(1)]);
if((state_val_72028 === (7))){
var inst_71970 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_71971 = com.wsscode.pathom.trace.trace(env,inst_71970);
var inst_71972 = (function (){var _ = inst_71971;
return (function (p1__71902_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__71902_SHARP_,input);
});
})();
var inst_71973 = (function (){var _ = inst_71971;
return (function (p1__71901_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__71901_SHARP_,input);
});
})();
var inst_71974 = com.wsscode.pathom.connect.map_async_serial(inst_71973,processing_sequence);
var state_72027__$1 = (function (){var statearr_72031 = state_72027;
(statearr_72031[(7)] = inst_71972);

return statearr_72031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72027__$1,(21),inst_71974);
} else {
if((state_val_72028 === (20))){
var inst_71953 = (state_72027[(2)]);
var state_72027__$1 = state_72027;
var statearr_72038_76016 = state_72027__$1;
(statearr_72038_76016[(2)] = inst_71953);

(statearr_72038_76016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (27))){
var state_72027__$1 = state_72027;
var statearr_72039_76017 = state_72027__$1;
(statearr_72039_76017[(1)] = (30));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (1))){
var state_72027__$1 = state_72027;
var statearr_72041_76018 = state_72027__$1;
(statearr_72041_76018[(2)] = null);

(statearr_72041_76018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (24))){
var inst_71979 = (state_72027[(8)]);
var inst_72005 = (state_72027[(2)]);
var inst_72006 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_72007 = cljs.core.count(inst_72005);
var inst_72008 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_72007];
var inst_72009 = cljs.core.PersistentHashMap.fromArrays(inst_72006,inst_72008);
var inst_72010 = com.wsscode.pathom.trace.trace(env,inst_72009);
var inst_72011 = cljs.core.zipmap(inst_71979,inst_72005);
var inst_72012 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_72011);
var inst_72013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72011,e);
var state_72027__$1 = (function (){var statearr_72042 = state_72027;
(statearr_72042[(9)] = inst_72010);

(statearr_72042[(10)] = inst_72012);

return statearr_72042;
})();
var statearr_72043_76019 = state_72027__$1;
(statearr_72043_76019[(2)] = inst_72013);

(statearr_72043_76019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (4))){
var inst_71911 = (state_72027[(2)]);
var state_72027__$1 = state_72027;
var statearr_72044_76020 = state_72027__$1;
(statearr_72044_76020[(2)] = inst_71911);

(statearr_72044_76020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (15))){
var state_72027__$1 = state_72027;
var statearr_72045_76021 = state_72027__$1;
(statearr_72045_76021[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (21))){
var inst_71972 = (state_72027[(7)]);
var inst_71979 = (state_72027[(8)]);
var inst_71984 = (state_72027[(11)]);
var inst_71976 = (state_72027[(2)]);
var inst_71977 = com.wsscode.async.async_cljs.throw_err(inst_71976);
var inst_71978 = cljs.core.filterv(inst_71972,inst_71977);
var inst_71979__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_71978);
var inst_71980 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_71981 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_71979__$1];
var inst_71982 = cljs.core.PersistentHashMap.fromArrays(inst_71980,inst_71981);
var inst_71983 = com.wsscode.pathom.trace.trace(env,inst_71982);
var inst_71984__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_71979__$1);
var inst_71985 = com.wsscode.async.async_cljs.chan_QMARK_(inst_71984__$1);
var state_72027__$1 = (function (){var statearr_72047 = state_72027;
(statearr_72047[(8)] = inst_71979__$1);

(statearr_72047[(12)] = inst_71983);

(statearr_72047[(11)] = inst_71984__$1);

return statearr_72047;
})();
if(inst_71985){
var statearr_72048_76022 = state_72027__$1;
(statearr_72048_76022[(1)] = (22));

} else {
var statearr_72049_76023 = state_72027__$1;
(statearr_72049_76023[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (31))){
var state_72027__$1 = state_72027;
var statearr_72050_76024 = state_72027__$1;
(statearr_72050_76024[(2)] = null);

(statearr_72050_76024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (32))){
var inst_72001 = (state_72027[(2)]);
var state_72027__$1 = state_72027;
var statearr_72051_76025 = state_72027__$1;
(statearr_72051_76025[(2)] = inst_72001);

(statearr_72051_76025[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (33))){
var inst_72021 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_72027__$1 = state_72027;
var statearr_72052_76026 = state_72027__$1;
(statearr_72052_76026[(2)] = inst_72021);

(statearr_72052_76026[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (13))){
var inst_71939 = (state_72027[(2)]);
var inst_71940 = com.wsscode.async.async_cljs.throw_err(inst_71939);
var state_72027__$1 = state_72027;
var statearr_72053_76027 = state_72027__$1;
(statearr_72053_76027[(2)] = inst_71940);

(statearr_72053_76027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (22))){
var inst_71984 = (state_72027[(11)]);
var state_72027__$1 = state_72027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72027__$1,(25),inst_71984);
} else {
if((state_val_72028 === (29))){
var inst_71995 = (state_72027[(2)]);
var inst_71996 = com.wsscode.async.async_cljs.consumer_pair(inst_71995);
var state_72027__$1 = state_72027;
var statearr_72055_76028 = state_72027__$1;
(statearr_72055_76028[(2)] = inst_71996);

(statearr_72055_76028[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (6))){
var inst_71920 = (state_72027[(13)]);
var inst_71919 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_71920__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_71919);
var inst_71921 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_71922 = com.wsscode.pathom.trace.trace(env,inst_71921);
var inst_71923 = (function (){var trace_id__54379__auto__ = inst_71920__$1;
var _ = inst_71922;
return (function (p1__71902_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__71902_SHARP_,input);
});
})();
var inst_71924 = (function (){var trace_id__54379__auto__ = inst_71920__$1;
var _ = inst_71922;
return (function (p1__71901_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__71901_SHARP_,input);
});
})();
var inst_71925 = com.wsscode.pathom.connect.map_async_serial(inst_71924,processing_sequence);
var state_72027__$1 = (function (){var statearr_72059 = state_72027;
(statearr_72059[(13)] = inst_71920__$1);

(statearr_72059[(14)] = inst_71923);

return statearr_72059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72027__$1,(9),inst_71925);
} else {
if((state_val_72028 === (28))){
var inst_72003 = (state_72027[(2)]);
var state_72027__$1 = state_72027;
var statearr_72062_76029 = state_72027__$1;
(statearr_72062_76029[(2)] = inst_72003);

(statearr_72062_76029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (25))){
var inst_71988 = (state_72027[(2)]);
var inst_71989 = com.wsscode.async.async_cljs.throw_err(inst_71988);
var state_72027__$1 = state_72027;
var statearr_72063_76030 = state_72027__$1;
(statearr_72063_76030[(2)] = inst_71989);

(statearr_72063_76030[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (34))){
var inst_72018 = (state_72027[(15)]);
var inst_72023 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_72018);
var state_72027__$1 = state_72027;
var statearr_72065_76031 = state_72027__$1;
(statearr_72065_76031[(2)] = inst_72023);

(statearr_72065_76031[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (17))){
var inst_71946 = (state_72027[(2)]);
var inst_71947 = com.wsscode.async.async_cljs.consumer_pair(inst_71946);
var state_72027__$1 = state_72027;
var statearr_72068_76032 = state_72027__$1;
(statearr_72068_76032[(2)] = inst_71947);

(statearr_72068_76032[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (3))){
var inst_72018 = (state_72027[(15)]);
var inst_72018__$1 = (state_72027[(2)]);
var inst_72019 = (inst_72018__$1 == null);
var state_72027__$1 = (function (){var statearr_72069 = state_72027;
(statearr_72069[(15)] = inst_72018__$1);

return statearr_72069;
})();
if(cljs.core.truth_(inst_72019)){
var statearr_72070_76033 = state_72027__$1;
(statearr_72070_76033[(1)] = (33));

} else {
var statearr_72071_76034 = state_72027__$1;
(statearr_72071_76034[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (12))){
var inst_71930 = (state_72027[(16)]);
var inst_71920 = (state_72027[(13)]);
var inst_71957 = (state_72027[(2)]);
var inst_71958 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_71959 = cljs.core.count(inst_71957);
var inst_71960 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_71959];
var inst_71961 = cljs.core.PersistentHashMap.fromArrays(inst_71958,inst_71960);
var inst_71962 = com.wsscode.pathom.trace.trace(env,inst_71961);
var inst_71964 = cljs.core.zipmap(inst_71930,inst_71957);
var inst_71965 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_71964);
var inst_71966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71964,e);
var inst_71967 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_71968 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_71920,inst_71967);
var state_72027__$1 = (function (){var statearr_72074 = state_72027;
(statearr_72074[(17)] = inst_71962);

(statearr_72074[(18)] = inst_71965);

(statearr_72074[(19)] = inst_71968);

return statearr_72074;
})();
var statearr_72075_76035 = state_72027__$1;
(statearr_72075_76035[(2)] = inst_71966);

(statearr_72075_76035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (2))){
var _ = (function (){var statearr_72076 = state_72027;
(statearr_72076[(4)] = cljs.core.cons((5),(state_72027[(4)])));

return statearr_72076;
})();
var inst_71917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_72027__$1 = state_72027;
if(cljs.core.truth_(inst_71917)){
var statearr_72077_76036 = state_72027__$1;
(statearr_72077_76036[(1)] = (6));

} else {
var statearr_72078_76037 = state_72027__$1;
(statearr_72078_76037[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (23))){
var inst_71984 = (state_72027[(11)]);
var inst_71991 = com.wsscode.async.async_cljs.promise_QMARK_(inst_71984);
var state_72027__$1 = state_72027;
if(cljs.core.truth_(inst_71991)){
var statearr_72086_76038 = state_72027__$1;
(statearr_72086_76038[(1)] = (26));

} else {
var statearr_72087_76039 = state_72027__$1;
(statearr_72087_76039[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (35))){
var inst_72025 = (state_72027[(2)]);
var state_72027__$1 = state_72027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72027__$1,inst_72025);
} else {
if((state_val_72028 === (19))){
var state_72027__$1 = state_72027;
var statearr_72088_76040 = state_72027__$1;
(statearr_72088_76040[(2)] = null);

(statearr_72088_76040[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (11))){
var inst_71935 = (state_72027[(20)]);
var inst_71942 = com.wsscode.async.async_cljs.promise_QMARK_(inst_71935);
var state_72027__$1 = state_72027;
if(cljs.core.truth_(inst_71942)){
var statearr_72090_76041 = state_72027__$1;
(statearr_72090_76041[(1)] = (14));

} else {
var statearr_72092_76042 = state_72027__$1;
(statearr_72092_76042[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (9))){
var inst_71923 = (state_72027[(14)]);
var inst_71930 = (state_72027[(16)]);
var inst_71935 = (state_72027[(20)]);
var inst_71927 = (state_72027[(2)]);
var inst_71928 = com.wsscode.async.async_cljs.throw_err(inst_71927);
var inst_71929 = cljs.core.filterv(inst_71923,inst_71928);
var inst_71930__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_71929);
var inst_71931 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_71932 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_71930__$1];
var inst_71933 = cljs.core.PersistentHashMap.fromArrays(inst_71931,inst_71932);
var inst_71934 = com.wsscode.pathom.trace.trace(env,inst_71933);
var inst_71935__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_71930__$1);
var inst_71936 = com.wsscode.async.async_cljs.chan_QMARK_(inst_71935__$1);
var state_72027__$1 = (function (){var statearr_72093 = state_72027;
(statearr_72093[(16)] = inst_71930__$1);

(statearr_72093[(21)] = inst_71934);

(statearr_72093[(20)] = inst_71935__$1);

return statearr_72093;
})();
if(inst_71936){
var statearr_72094_76043 = state_72027__$1;
(statearr_72094_76043[(1)] = (10));

} else {
var statearr_72095_76044 = state_72027__$1;
(statearr_72095_76044[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (5))){
var _ = (function (){var statearr_72096 = state_72027;
(statearr_72096[(4)] = cljs.core.rest((state_72027[(4)])));

return statearr_72096;
})();
var state_72027__$1 = state_72027;
var ex72089 = (state_72027__$1[(2)]);
var statearr_72097_76045 = state_72027__$1;
(statearr_72097_76045[(5)] = ex72089);


var statearr_72098_76046 = state_72027__$1;
(statearr_72098_76046[(1)] = (4));

(statearr_72098_76046[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (14))){
var inst_71935 = (state_72027[(20)]);
var inst_71944 = com.wsscode.async.async_cljs.promise__GT_chan(inst_71935);
var state_72027__$1 = state_72027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72027__$1,(17),inst_71944);
} else {
if((state_val_72028 === (26))){
var inst_71984 = (state_72027[(11)]);
var inst_71993 = com.wsscode.async.async_cljs.promise__GT_chan(inst_71984);
var state_72027__$1 = state_72027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72027__$1,(29),inst_71993);
} else {
if((state_val_72028 === (16))){
var inst_71955 = (state_72027[(2)]);
var state_72027__$1 = state_72027;
var statearr_72099_76047 = state_72027__$1;
(statearr_72099_76047[(2)] = inst_71955);

(statearr_72099_76047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (30))){
var inst_71984 = (state_72027[(11)]);
var state_72027__$1 = state_72027;
var statearr_72100_76048 = state_72027__$1;
(statearr_72100_76048[(2)] = inst_71984);

(statearr_72100_76048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (10))){
var inst_71935 = (state_72027[(20)]);
var state_72027__$1 = state_72027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72027__$1,(13),inst_71935);
} else {
if((state_val_72028 === (18))){
var inst_71935 = (state_72027[(20)]);
var state_72027__$1 = state_72027;
var statearr_72101_76049 = state_72027__$1;
(statearr_72101_76049[(2)] = inst_71935);

(statearr_72101_76049[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72028 === (8))){
var inst_72015 = (state_72027[(2)]);
var _ = (function (){var statearr_72102 = state_72027;
(statearr_72102[(4)] = cljs.core.rest((state_72027[(4)])));

return statearr_72102;
})();
var state_72027__$1 = state_72027;
var statearr_72103_76050 = state_72027__$1;
(statearr_72103_76050[(2)] = inst_72015);

(statearr_72103_76050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto____0 = (function (){
var statearr_72106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72106[(0)] = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto__);

(statearr_72106[(1)] = (1));

return statearr_72106;
});
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto____1 = (function (state_72027){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_72027);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e72108){var ex__42124__auto__ = e72108;
var statearr_72109_76051 = state_72027;
(statearr_72109_76051[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_72027[(4)]))){
var statearr_72111_76052 = state_72027;
(statearr_72111_76052[(1)] = cljs.core.first((state_72027[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76053 = state_72027;
state_72027 = G__76053;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto__ = function(state_72027){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto____1.call(this,state_72027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_72114 = f__42153__auto__();
(statearr_72114[(6)] = c__42152__auto___76015);

return statearr_72114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(p__72116,e,trace_data,input){
var map__72117 = p__72116;
var map__72117__$1 = cljs.core.__destructure_map(map__72117);
var env = map__72117__$1;
var map__72118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72117__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__72118__$1 = cljs.core.__destructure_map(map__72118);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72118__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72118__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72117__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,params], null),(function (){
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___76054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_72201){
var state_val_72202 = (state_72201[(1)]);
if((state_val_72202 === (7))){
var inst_72126 = (state_72201[(7)]);
var state_72201__$1 = state_72201;
var statearr_72204_76055 = state_72201__$1;
(statearr_72204_76055[(2)] = inst_72126);

(statearr_72204_76055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (20))){
var inst_72132 = (state_72201[(8)]);
var state_72201__$1 = state_72201;
var statearr_72205_76056 = state_72201__$1;
(statearr_72205_76056[(2)] = inst_72132);

(statearr_72205_76056[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (27))){
var inst_72155 = (state_72201[(9)]);
var inst_72169 = com.wsscode.async.async_cljs.promise__GT_chan(inst_72155);
var state_72201__$1 = state_72201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72201__$1,(30),inst_72169);
} else {
if((state_val_72202 === (1))){
var state_72201__$1 = state_72201;
var statearr_72206_76057 = state_72201__$1;
(statearr_72206_76057[(2)] = null);

(statearr_72206_76057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (24))){
var inst_72155 = (state_72201[(9)]);
var inst_72167 = com.wsscode.async.async_cljs.promise_QMARK_(inst_72155);
var state_72201__$1 = state_72201;
if(cljs.core.truth_(inst_72167)){
var statearr_72207_76058 = state_72201__$1;
(statearr_72207_76058[(1)] = (27));

} else {
var statearr_72208_76059 = state_72201__$1;
(statearr_72208_76059[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (39))){
var inst_72199 = (state_72201[(2)]);
var state_72201__$1 = state_72201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72201__$1,inst_72199);
} else {
if((state_val_72202 === (4))){
var inst_72120 = (state_72201[(2)]);
var state_72201__$1 = state_72201;
var statearr_72209_76060 = state_72201__$1;
(statearr_72209_76060[(2)] = inst_72120);

(statearr_72209_76060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (15))){
var inst_72136 = (state_72201[(2)]);
var inst_72137 = com.wsscode.async.async_cljs.throw_err(inst_72136);
var state_72201__$1 = state_72201;
var statearr_72210_76061 = state_72201__$1;
(statearr_72210_76061[(2)] = inst_72137);

(statearr_72210_76061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (21))){
var state_72201__$1 = state_72201;
var statearr_72211_76062 = state_72201__$1;
(statearr_72211_76062[(2)] = null);

(statearr_72211_76062[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (31))){
var inst_72155 = (state_72201[(9)]);
var state_72201__$1 = state_72201;
var statearr_72212_76063 = state_72201__$1;
(statearr_72212_76063[(2)] = inst_72155);

(statearr_72212_76063[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (32))){
var state_72201__$1 = state_72201;
var statearr_72213_76064 = state_72201__$1;
(statearr_72213_76064[(2)] = null);

(statearr_72213_76064[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (33))){
var inst_72178 = (state_72201[(2)]);
var state_72201__$1 = state_72201;
var statearr_72218_76065 = state_72201__$1;
(statearr_72218_76065[(2)] = inst_72178);

(statearr_72218_76065[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (13))){
var inst_72132 = (state_72201[(8)]);
var inst_72139 = com.wsscode.async.async_cljs.promise_QMARK_(inst_72132);
var state_72201__$1 = state_72201;
if(cljs.core.truth_(inst_72139)){
var statearr_72219_76066 = state_72201__$1;
(statearr_72219_76066[(1)] = (16));

} else {
var statearr_72221_76067 = state_72201__$1;
(statearr_72221_76067[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (22))){
var inst_72149 = (state_72201[(2)]);
var state_72201__$1 = state_72201;
var statearr_72223_76068 = state_72201__$1;
(statearr_72223_76068[(2)] = inst_72149);

(statearr_72223_76068[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (36))){
var inst_72189 = (state_72201[(2)]);
var _ = (function (){var statearr_72225 = state_72201;
(statearr_72225[(4)] = cljs.core.rest((state_72201[(4)])));

return statearr_72225;
})();
var state_72201__$1 = state_72201;
var statearr_72226_76069 = state_72201__$1;
(statearr_72226_76069[(2)] = inst_72189);

(statearr_72226_76069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (29))){
var inst_72180 = (state_72201[(2)]);
var state_72201__$1 = state_72201;
var statearr_72229_76070 = state_72201__$1;
(statearr_72229_76070[(2)] = inst_72180);

(statearr_72229_76070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (6))){
var state_72201__$1 = state_72201;
var statearr_72230_76071 = state_72201__$1;
(statearr_72230_76071[(2)] = processing_sequence);

(statearr_72230_76071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (28))){
var state_72201__$1 = state_72201;
var statearr_72231_76072 = state_72201__$1;
(statearr_72231_76072[(1)] = (31));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (25))){
var inst_72182 = (state_72201[(2)]);
var state_72201__$1 = state_72201;
var statearr_72233_76073 = state_72201__$1;
(statearr_72233_76073[(2)] = inst_72182);

(statearr_72233_76073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (34))){
var inst_72184 = (state_72201[(10)]);
var state_72201__$1 = state_72201;
var statearr_72235_76074 = state_72201__$1;
(statearr_72235_76074[(2)] = inst_72184);

(statearr_72235_76074[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (17))){
var state_72201__$1 = state_72201;
var statearr_72237_76075 = state_72201__$1;
(statearr_72237_76075[(1)] = (20));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (3))){
var inst_72192 = (state_72201[(11)]);
var inst_72192__$1 = (state_72201[(2)]);
var inst_72193 = (inst_72192__$1 == null);
var state_72201__$1 = (function (){var statearr_72239 = state_72201;
(statearr_72239[(11)] = inst_72192__$1);

return statearr_72239;
})();
if(cljs.core.truth_(inst_72193)){
var statearr_72240_76076 = state_72201__$1;
(statearr_72240_76076[(1)] = (37));

} else {
var statearr_72241_76077 = state_72201__$1;
(statearr_72241_76077[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (12))){
var inst_72132 = (state_72201[(8)]);
var state_72201__$1 = state_72201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72201__$1,(15),inst_72132);
} else {
if((state_val_72202 === (2))){
var inst_72126 = (state_72201[(7)]);
var _ = (function (){var statearr_72242 = state_72201;
(statearr_72242[(4)] = cljs.core.cons((5),(state_72201[(4)])));

return statearr_72242;
})();
var inst_72126__$1 = batch_QMARK_;
var state_72201__$1 = (function (){var statearr_72243 = state_72201;
(statearr_72243[(7)] = inst_72126__$1);

return statearr_72243;
})();
if(cljs.core.truth_(inst_72126__$1)){
var statearr_72244_76078 = state_72201__$1;
(statearr_72244_76078[(1)] = (6));

} else {
var statearr_72245_76079 = state_72201__$1;
(statearr_72245_76079[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (23))){
var inst_72155 = (state_72201[(9)]);
var state_72201__$1 = state_72201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72201__$1,(26),inst_72155);
} else {
if((state_val_72202 === (35))){
var inst_72187 = cljs.core.PersistentHashMap.EMPTY;
var state_72201__$1 = state_72201;
var statearr_72251_76080 = state_72201__$1;
(statearr_72251_76080[(2)] = inst_72187);

(statearr_72251_76080[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (19))){
var inst_72143 = (state_72201[(2)]);
var inst_72144 = com.wsscode.async.async_cljs.consumer_pair(inst_72143);
var state_72201__$1 = state_72201;
var statearr_72252_76081 = state_72201__$1;
(statearr_72252_76081[(2)] = inst_72144);

(statearr_72252_76081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (11))){
var inst_72184 = (state_72201[(10)]);
var inst_72184__$1 = (state_72201[(2)]);
var state_72201__$1 = (function (){var statearr_72254 = state_72201;
(statearr_72254[(10)] = inst_72184__$1);

return statearr_72254;
})();
if(cljs.core.truth_(inst_72184__$1)){
var statearr_72255_76082 = state_72201__$1;
(statearr_72255_76082[(1)] = (34));

} else {
var statearr_72256_76083 = state_72201__$1;
(statearr_72256_76083[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (9))){
var inst_72132 = (state_72201[(8)]);
var inst_72132__$1 = com.wsscode.pathom.connect.async_read_call_batch(env,e,trace_data,input);
var inst_72133 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72132__$1);
var state_72201__$1 = (function (){var statearr_72257 = state_72201;
(statearr_72257[(8)] = inst_72132__$1);

return statearr_72257;
})();
if(inst_72133){
var statearr_72258_76084 = state_72201__$1;
(statearr_72258_76084[(1)] = (12));

} else {
var statearr_72259_76085 = state_72201__$1;
(statearr_72259_76085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (5))){
var _ = (function (){var statearr_72260 = state_72201;
(statearr_72260[(4)] = cljs.core.rest((state_72201[(4)])));

return statearr_72260;
})();
var state_72201__$1 = state_72201;
var ex72253 = (state_72201__$1[(2)]);
var statearr_72261_76086 = state_72201__$1;
(statearr_72261_76086[(5)] = ex72253);


var statearr_72262_76087 = state_72201__$1;
(statearr_72262_76087[(1)] = (4));

(statearr_72262_76087[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (14))){
var inst_72153 = (state_72201[(2)]);
var state_72201__$1 = state_72201;
var statearr_72263_76088 = state_72201__$1;
(statearr_72263_76088[(2)] = inst_72153);

(statearr_72263_76088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (26))){
var inst_72164 = (state_72201[(2)]);
var inst_72165 = com.wsscode.async.async_cljs.throw_err(inst_72164);
var state_72201__$1 = state_72201;
var statearr_72264_76089 = state_72201__$1;
(statearr_72264_76089[(2)] = inst_72165);

(statearr_72264_76089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (16))){
var inst_72132 = (state_72201[(8)]);
var inst_72141 = com.wsscode.async.async_cljs.promise__GT_chan(inst_72132);
var state_72201__$1 = state_72201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72201__$1,(19),inst_72141);
} else {
if((state_val_72202 === (38))){
var inst_72192 = (state_72201[(11)]);
var inst_72197 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_72192);
var state_72201__$1 = state_72201;
var statearr_72265_76090 = state_72201__$1;
(statearr_72265_76090[(2)] = inst_72197);

(statearr_72265_76090[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (30))){
var inst_72171 = (state_72201[(2)]);
var inst_72173 = com.wsscode.async.async_cljs.consumer_pair(inst_72171);
var state_72201__$1 = state_72201;
var statearr_72266_76091 = state_72201__$1;
(statearr_72266_76091[(2)] = inst_72173);

(statearr_72266_76091[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (10))){
var inst_72155 = (state_72201[(9)]);
var inst_72155__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_72156 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72155__$1);
var state_72201__$1 = (function (){var statearr_72267 = state_72201;
(statearr_72267[(9)] = inst_72155__$1);

return statearr_72267;
})();
if(inst_72156){
var statearr_72268_76092 = state_72201__$1;
(statearr_72268_76092[(1)] = (23));

} else {
var statearr_72269_76093 = state_72201__$1;
(statearr_72269_76093[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (18))){
var inst_72151 = (state_72201[(2)]);
var state_72201__$1 = state_72201;
var statearr_72270_76094 = state_72201__$1;
(statearr_72270_76094[(2)] = inst_72151);

(statearr_72270_76094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (37))){
var inst_72195 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_72201__$1 = state_72201;
var statearr_72271_76095 = state_72201__$1;
(statearr_72271_76095[(2)] = inst_72195);

(statearr_72271_76095[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72202 === (8))){
var inst_72130 = (state_72201[(2)]);
var state_72201__$1 = state_72201;
if(cljs.core.truth_(inst_72130)){
var statearr_72273_76096 = state_72201__$1;
(statearr_72273_76096[(1)] = (9));

} else {
var statearr_72281_76097 = state_72201__$1;
(statearr_72281_76097[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto____0 = (function (){
var statearr_72283 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72283[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto__);

(statearr_72283[(1)] = (1));

return statearr_72283;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto____1 = (function (state_72201){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_72201);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e72284){var ex__42124__auto__ = e72284;
var statearr_72285_76098 = state_72201;
(statearr_72285_76098[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_72201[(4)]))){
var statearr_72286_76099 = state_72201;
(statearr_72286_76099[(1)] = cljs.core.first((state_72201[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76100 = state_72201;
state_72201 = G__76100;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto__ = function(state_72201){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto____1.call(this,state_72201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_72287 = f__42153__auto__();
(statearr_72287[(6)] = c__42152__auto___76054);

return statearr_72287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
}));
});
/**
 * Works in the same way `reader2`, but supports async values (core.async channels)
 * on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__72294){
var map__72295 = p__72294;
var map__72295__$1 = cljs.core.__destructure_map(map__72295);
var env = map__72295__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72295__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72295__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var temp__5802__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__72298 = temp__5802__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72298,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72298,(1),null);
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_72584){
var state_val_72585 = (state_72584[(1)]);
if((state_val_72585 === (65))){
var inst_72447 = (state_72584[(7)]);
var state_72584__$1 = state_72584;
var statearr_72586_76101 = state_72584__$1;
(statearr_72586_76101[(2)] = inst_72447);

(statearr_72586_76101[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (70))){
var inst_72528 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72587_76102 = state_72584__$1;
(statearr_72587_76102[(2)] = inst_72528);

(statearr_72587_76102[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (62))){
var state_72584__$1 = state_72584;
var statearr_72588_76103 = state_72584__$1;
(statearr_72588_76103[(1)] = (65));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (74))){
var inst_72503 = (state_72584[(8)]);
var state_72584__$1 = state_72584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72584__$1,(77),inst_72503);
} else {
if((state_val_72585 === (7))){
var inst_72571 = (state_72584[(2)]);
var _ = (function (){var statearr_72590 = state_72584;
(statearr_72590[(4)] = cljs.core.rest((state_72584[(4)])));

return statearr_72590;
})();
var state_72584__$1 = state_72584;
var statearr_72591_76104 = state_72584__$1;
(statearr_72591_76104[(2)] = inst_72571);

(statearr_72591_76104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (59))){
var inst_72468 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72592_76105 = state_72584__$1;
(statearr_72592_76105[(2)] = inst_72468);

(statearr_72592_76105[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (86))){
var state_72584__$1 = state_72584;
var statearr_72593_76106 = state_72584__$1;
(statearr_72593_76106[(2)] = null);

(statearr_72593_76106[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (20))){
var inst_72367 = (state_72584[(2)]);
var inst_72368 = com.wsscode.async.async_cljs.throw_err(inst_72367);
var state_72584__$1 = state_72584;
var statearr_72594_76107 = state_72584__$1;
(statearr_72594_76107[(2)] = inst_72368);

(statearr_72594_76107[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (72))){
var state_72584__$1 = state_72584;
var statearr_72595_76108 = state_72584__$1;
(statearr_72595_76108[(2)] = null);

(statearr_72595_76108[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (58))){
var inst_72447 = (state_72584[(7)]);
var inst_72454 = com.wsscode.async.async_cljs.promise_QMARK_(inst_72447);
var state_72584__$1 = state_72584;
if(cljs.core.truth_(inst_72454)){
var statearr_72596_76109 = state_72584__$1;
(statearr_72596_76109[(1)] = (61));

} else {
var statearr_72597_76110 = state_72584__$1;
(statearr_72597_76110[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (60))){
var inst_72451 = (state_72584[(2)]);
var inst_72452 = com.wsscode.async.async_cljs.throw_err(inst_72451);
var state_72584__$1 = state_72584;
var statearr_72598_76111 = state_72584__$1;
(statearr_72598_76111[(2)] = inst_72452);

(statearr_72598_76111[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (27))){
var inst_72380 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72599_76112 = state_72584__$1;
(statearr_72599_76112[(2)] = inst_72380);

(statearr_72599_76112[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (1))){
var state_72584__$1 = state_72584;
var statearr_72600_76113 = state_72584__$1;
(statearr_72600_76113[(2)] = null);

(statearr_72600_76113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (69))){
var inst_72333 = (state_72584[(9)]);
var inst_72493 = cljs.core.seq(inst_72333);
var state_72584__$1 = state_72584;
if(inst_72493){
var statearr_72601_76114 = state_72584__$1;
(statearr_72601_76114[(1)] = (71));

} else {
var statearr_72602_76115 = state_72584__$1;
(statearr_72602_76115[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (24))){
var inst_72374 = (state_72584[(2)]);
var inst_72375 = com.wsscode.async.async_cljs.consumer_pair(inst_72374);
var state_72584__$1 = state_72584;
var statearr_72603_76116 = state_72584__$1;
(statearr_72603_76116[(2)] = inst_72375);

(statearr_72603_76116[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (55))){
var inst_72424 = (state_72584[(10)]);
var inst_72447 = (state_72584[(7)]);
var inst_72447__$1 = com.wsscode.pathom.core.map_reader(inst_72424);
var inst_72448 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72447__$1);
var state_72584__$1 = (function (){var statearr_72604 = state_72584;
(statearr_72604[(7)] = inst_72447__$1);

return statearr_72604;
})();
if(inst_72448){
var statearr_72605_76117 = state_72584__$1;
(statearr_72605_76117[(1)] = (57));

} else {
var statearr_72606_76118 = state_72584__$1;
(statearr_72606_76118[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (85))){
var inst_72420 = (state_72584[(11)]);
var inst_72421 = (state_72584[(12)]);
var inst_72537 = (state_72584[(13)]);
var inst_72533 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72534 = [inst_72420];
var inst_72535 = cljs.core.PersistentHashMap.fromArrays(inst_72533,inst_72534);
var inst_72536 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_72535);
var inst_72537__$1 = (inst_72421.cljs$core$IFn$_invoke$arity$1 ? inst_72421.cljs$core$IFn$_invoke$arity$1(inst_72536) : inst_72421.call(null,inst_72536));
var state_72584__$1 = (function (){var statearr_72607 = state_72584;
(statearr_72607[(13)] = inst_72537__$1);

return statearr_72607;
})();
if(cljs.core.truth_(inst_72537__$1)){
var statearr_72608_76119 = state_72584__$1;
(statearr_72608_76119[(1)] = (88));

} else {
var statearr_72609_76120 = state_72584__$1;
(statearr_72609_76120[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (39))){
var inst_72387 = (state_72584[(14)]);
var state_72584__$1 = state_72584;
var statearr_72610_76121 = state_72584__$1;
(statearr_72610_76121[(2)] = inst_72387);

(statearr_72610_76121[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (88))){
var inst_72537 = (state_72584[(13)]);
var inst_72543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72537,(0),null);
var inst_72545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72537,(1),null);
var inst_72546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72537,(2),null);
var inst_72323 = inst_72543;
var inst_72324 = inst_72545;
var inst_72325 = inst_72546;
var state_72584__$1 = (function (){var statearr_72615 = state_72584;
(statearr_72615[(15)] = inst_72323);

(statearr_72615[(16)] = inst_72324);

(statearr_72615[(17)] = inst_72325);

return statearr_72615;
})();
var statearr_72616_76122 = state_72584__$1;
(statearr_72616_76122[(2)] = null);

(statearr_72616_76122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (46))){
var state_72584__$1 = state_72584;
var statearr_72617_76123 = state_72584__$1;
(statearr_72617_76123[(1)] = (85));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (4))){
var inst_72301 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72623_76124 = state_72584__$1;
(statearr_72623_76124[(2)] = inst_72301);

(statearr_72623_76124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (77))){
var inst_72509 = (state_72584[(2)]);
var inst_72510 = com.wsscode.async.async_cljs.throw_err(inst_72509);
var state_72584__$1 = state_72584;
var statearr_72625_76125 = state_72584__$1;
(statearr_72625_76125[(2)] = inst_72510);

(statearr_72625_76125[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (54))){
var inst_72325 = (state_72584[(17)]);
var inst_72437 = (state_72584[(18)]);
var inst_72333 = (state_72584[(9)]);
var inst_72324 = (state_72584[(16)]);
var inst_72444 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_72325,inst_72437);
var tmp72622 = inst_72324;
var inst_72323 = inst_72333;
var inst_72324__$1 = tmp72622;
var inst_72325__$1 = inst_72444;
var state_72584__$1 = (function (){var statearr_72626 = state_72584;
(statearr_72626[(15)] = inst_72323);

(statearr_72626[(16)] = inst_72324__$1);

(statearr_72626[(17)] = inst_72325__$1);

return statearr_72626;
})();
var statearr_72627_76126 = state_72584__$1;
(statearr_72627_76126[(2)] = null);

(statearr_72627_76126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (15))){
var state_72584__$1 = state_72584;
var statearr_72631_76127 = state_72584__$1;
(statearr_72631_76127[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (48))){
var inst_72425 = (state_72584[(19)]);
var inst_72339 = (state_72584[(20)]);
var inst_72430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72425,inst_72339);
var inst_72431 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_72430) : com.wsscode.pathom.core.break_values.call(null,inst_72430));
var inst_72432 = cljs.core.not(inst_72431);
var state_72584__$1 = state_72584;
var statearr_72634_76128 = state_72584__$1;
(statearr_72634_76128[(2)] = inst_72432);

(statearr_72634_76128[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (50))){
var inst_72435 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
if(cljs.core.truth_(inst_72435)){
var statearr_72642_76129 = state_72584__$1;
(statearr_72642_76129[(1)] = (51));

} else {
var statearr_72645_76130 = state_72584__$1;
(statearr_72645_76130[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (75))){
var inst_72503 = (state_72584[(8)]);
var inst_72512 = com.wsscode.async.async_cljs.promise_QMARK_(inst_72503);
var state_72584__$1 = state_72584;
if(cljs.core.truth_(inst_72512)){
var statearr_72646_76131 = state_72584__$1;
(statearr_72646_76131[(1)] = (78));

} else {
var statearr_72647_76132 = state_72584__$1;
(statearr_72647_76132[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (21))){
var inst_72363 = (state_72584[(21)]);
var inst_72372 = com.wsscode.async.async_cljs.promise__GT_chan(inst_72363);
var state_72584__$1 = state_72584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72584__$1,(24),inst_72372);
} else {
if((state_val_72585 === (31))){
var inst_72387 = (state_72584[(14)]);
var state_72584__$1 = state_72584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72584__$1,(34),inst_72387);
} else {
if((state_val_72585 === (32))){
var inst_72387 = (state_72584[(14)]);
var inst_72394 = com.wsscode.async.async_cljs.promise_QMARK_(inst_72387);
var state_72584__$1 = state_72584;
if(cljs.core.truth_(inst_72394)){
var statearr_72648_76133 = state_72584__$1;
(statearr_72648_76133[(1)] = (35));

} else {
var statearr_72649_76134 = state_72584__$1;
(statearr_72649_76134[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (40))){
var state_72584__$1 = state_72584;
var statearr_72650_76135 = state_72584__$1;
(statearr_72650_76135[(2)] = null);

(statearr_72650_76135[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (56))){
var inst_72470 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72651_76136 = state_72584__$1;
(statearr_72651_76136[(2)] = inst_72470);

(statearr_72651_76136[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (33))){
var inst_72408 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72653_76137 = state_72584__$1;
(statearr_72653_76137[(2)] = inst_72408);

(statearr_72653_76137[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (13))){
var inst_72415 = (state_72584[(22)]);
var inst_72415__$1 = (state_72584[(2)]);
var state_72584__$1 = (function (){var statearr_72655 = state_72584;
(statearr_72655[(22)] = inst_72415__$1);

return statearr_72655;
})();
if(cljs.core.truth_(inst_72415__$1)){
var statearr_72656_76138 = state_72584__$1;
(statearr_72656_76138[(1)] = (42));

} else {
var statearr_72657_76139 = state_72584__$1;
(statearr_72657_76139[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (22))){
var state_72584__$1 = state_72584;
var statearr_72658_76140 = state_72584__$1;
(statearr_72658_76140[(1)] = (25));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (90))){
var inst_72561 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72660_76141 = state_72584__$1;
(statearr_72660_76141[(2)] = inst_72561);

(statearr_72660_76141[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (36))){
var state_72584__$1 = state_72584;
var statearr_72661_76142 = state_72584__$1;
(statearr_72661_76142[(1)] = (39));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (41))){
var inst_72404 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72663_76143 = state_72584__$1;
(statearr_72663_76143[(2)] = inst_72404);

(statearr_72663_76143[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (89))){
var inst_72308 = (state_72584[(23)]);
var inst_72340 = (state_72584[(24)]);
var inst_72420 = (state_72584[(11)]);
var inst_72349 = (state_72584[(25)]);
var inst_72549 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72550 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_72308,inst_72340,inst_72420];
var inst_72551 = cljs.core.PersistentHashMap.fromArrays(inst_72549,inst_72550);
var inst_72552 = com.wsscode.pathom.trace.trace(inst_72349,inst_72551);
var inst_72554 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72556 = [inst_72420];
var inst_72557 = cljs.core.PersistentHashMap.fromArrays(inst_72554,inst_72556);
var inst_72558 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_72557);
var inst_72559 = (function(){throw inst_72558})();
var state_72584__$1 = (function (){var statearr_72668 = state_72584;
(statearr_72668[(26)] = inst_72552);

return statearr_72668;
})();
var statearr_72669_76144 = state_72584__$1;
(statearr_72669_76144[(2)] = inst_72559);

(statearr_72669_76144[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (43))){
var inst_72418 = cljs.core.PersistentHashMap.EMPTY;
var state_72584__$1 = state_72584;
var statearr_72670_76145 = state_72584__$1;
(statearr_72670_76145[(2)] = inst_72418);

(statearr_72670_76145[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (61))){
var inst_72447 = (state_72584[(7)]);
var inst_72456 = com.wsscode.async.async_cljs.promise__GT_chan(inst_72447);
var state_72584__$1 = state_72584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72584__$1,(64),inst_72456);
} else {
if((state_val_72585 === (29))){
var state_72584__$1 = state_72584;
var statearr_72671_76146 = state_72584__$1;
(statearr_72671_76146[(2)] = null);

(statearr_72671_76146[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (44))){
var inst_72347 = (state_72584[(27)]);
var inst_72316 = (state_72584[(28)]);
var inst_72332 = (state_72584[(29)]);
var inst_72319 = (state_72584[(30)]);
var inst_72350 = (state_72584[(31)]);
var inst_72339 = (state_72584[(20)]);
var inst_72323 = (state_72584[(15)]);
var inst_72420 = (state_72584[(11)]);
var inst_72333 = (state_72584[(9)]);
var inst_72346 = (state_72584[(32)]);
var inst_72325 = (state_72584[(17)]);
var inst_72308 = (state_72584[(23)]);
var inst_72324 = (state_72584[(16)]);
var inst_72348 = (state_72584[(33)]);
var inst_72349 = (state_72584[(25)]);
var inst_72351 = (state_72584[(34)]);
var inst_72340 = (state_72584[(24)]);
var inst_72354 = (state_72584[(35)]);
var inst_72345 = (state_72584[(36)]);
var inst_72318 = (state_72584[(37)]);
var inst_72420__$1 = (state_72584[(2)]);
var inst_72421 = (function (){var input = inst_72347;
var vec__72313 = inst_72316;
var vec__72335 = inst_72332;
var step = inst_72332;
var seq__72314 = inst_72319;
var entity = inst_72350;
var key_SINGLEQUOTE_ = inst_72339;
var G__72312 = inst_72323;
var response = inst_72420__$1;
var seq__72329 = inst_72333;
var cache_QMARK_ = inst_72346;
var out_left = inst_72325;
var key = inst_72308;
var vec__72328 = inst_72323;
var failed_resolvers = inst_72324;
var first__72330 = inst_72332;
var output = inst_72348;
var env__$1 = inst_72349;
var e = inst_72351;
var resolver_sym = inst_72340;
var trace_data = inst_72354;
var resolver = inst_72345;
var map__72338 = inst_72345;
var first__72315 = inst_72318;
var tail = inst_72333;
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__72290_SHARP_){
var x__5133__auto__ = ((function (){var or__5045__auto__ = p1__72290_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})() * (2));
var y__5134__auto__ = max_resolver_weight;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})], 0));

var temp__5802__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5802__auto____$1)){
var vec__72672 = temp__5802__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72672,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72672,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
})();
var inst_72422 = cljs.core.map_QMARK_(inst_72420__$1);
var state_72584__$1 = (function (){var statearr_72675 = state_72584;
(statearr_72675[(11)] = inst_72420__$1);

(statearr_72675[(12)] = inst_72421);

return statearr_72675;
})();
if(inst_72422){
var statearr_72676_76147 = state_72584__$1;
(statearr_72676_76147[(1)] = (45));

} else {
var statearr_72677_76148 = state_72584__$1;
(statearr_72677_76148[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (6))){
var inst_72323 = (state_72584[(15)]);
var inst_72332 = (state_72584[(29)]);
var inst_72331 = cljs.core.seq(inst_72323);
var inst_72332__$1 = cljs.core.first(inst_72331);
var inst_72333 = cljs.core.next(inst_72331);
var state_72584__$1 = (function (){var statearr_72678 = state_72584;
(statearr_72678[(29)] = inst_72332__$1);

(statearr_72678[(9)] = inst_72333);

return statearr_72678;
})();
if(cljs.core.truth_(inst_72332__$1)){
var statearr_72680_76149 = state_72584__$1;
(statearr_72680_76149[(1)] = (8));

} else {
var statearr_72682_76150 = state_72584__$1;
(statearr_72682_76150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (28))){
var inst_72349 = (state_72584[(25)]);
var inst_72351 = (state_72584[(34)]);
var inst_72387 = (state_72584[(14)]);
var inst_72387__$1 = com.wsscode.pathom.connect.call_resolver(inst_72349,inst_72351);
var inst_72388 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72387__$1);
var state_72584__$1 = (function (){var statearr_72684 = state_72584;
(statearr_72684[(14)] = inst_72387__$1);

return statearr_72684;
})();
if(inst_72388){
var statearr_72685_76151 = state_72584__$1;
(statearr_72685_76151[(1)] = (31));

} else {
var statearr_72686_76152 = state_72584__$1;
(statearr_72686_76152[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (64))){
var inst_72458 = (state_72584[(2)]);
var inst_72459 = com.wsscode.async.async_cljs.consumer_pair(inst_72458);
var state_72584__$1 = state_72584;
var statearr_72687_76153 = state_72584__$1;
(statearr_72687_76153[(2)] = inst_72459);

(statearr_72687_76153[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (51))){
var inst_72348 = (state_72584[(33)]);
var inst_72308 = (state_72584[(23)]);
var inst_72340 = (state_72584[(24)]);
var inst_72424 = (state_72584[(10)]);
var inst_72333 = (state_72584[(9)]);
var inst_72437 = com.wsscode.pathom.connect.output__GT_provides(inst_72348);
var inst_72438 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_72439 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_72308,inst_72340];
var inst_72440 = cljs.core.PersistentHashMap.fromArrays(inst_72438,inst_72439);
var inst_72441 = com.wsscode.pathom.trace.trace(inst_72424,inst_72440);
var inst_72442 = cljs.core.seq(inst_72333);
var state_72584__$1 = (function (){var statearr_72693 = state_72584;
(statearr_72693[(18)] = inst_72437);

(statearr_72693[(38)] = inst_72441);

return statearr_72693;
})();
if(inst_72442){
var statearr_72694_76154 = state_72584__$1;
(statearr_72694_76154[(1)] = (54));

} else {
var statearr_72695_76155 = state_72584__$1;
(statearr_72695_76155[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (25))){
var inst_72363 = (state_72584[(21)]);
var state_72584__$1 = state_72584;
var statearr_72696_76156 = state_72584__$1;
(statearr_72696_76156[(2)] = inst_72363);

(statearr_72696_76156[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (34))){
var inst_72391 = (state_72584[(2)]);
var inst_72392 = com.wsscode.async.async_cljs.throw_err(inst_72391);
var state_72584__$1 = state_72584;
var statearr_72698_76157 = state_72584__$1;
(statearr_72698_76157[(2)] = inst_72392);

(statearr_72698_76157[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (17))){
var inst_72363 = (state_72584[(21)]);
var state_72584__$1 = state_72584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72584__$1,(20),inst_72363);
} else {
if((state_val_72585 === (3))){
var inst_72574 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72584__$1,inst_72574);
} else {
if((state_val_72585 === (12))){
var inst_72346 = (state_72584[(32)]);
var state_72584__$1 = state_72584;
if(cljs.core.truth_(inst_72346)){
var statearr_72700_76158 = state_72584__$1;
(statearr_72700_76158[(1)] = (14));

} else {
var statearr_72701_76159 = state_72584__$1;
(statearr_72701_76159[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (2))){
var inst_72316 = (state_72584[(28)]);
var _ = (function (){var statearr_72702 = state_72584;
(statearr_72702[(4)] = cljs.core.cons((5),(state_72584[(4)])));

return statearr_72702;
})();
var inst_72307 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_72308 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_72307);
var inst_72316__$1 = plan;
var inst_72317 = cljs.core.seq(inst_72316__$1);
var inst_72318 = cljs.core.first(inst_72317);
var inst_72319 = cljs.core.next(inst_72317);
var inst_72320 = cljs.core.PersistentHashMap.EMPTY;
var inst_72322 = out;
var inst_72323 = inst_72316__$1;
var inst_72324 = inst_72320;
var inst_72325 = inst_72322;
var state_72584__$1 = (function (){var statearr_72703 = state_72584;
(statearr_72703[(23)] = inst_72308);

(statearr_72703[(28)] = inst_72316__$1);

(statearr_72703[(37)] = inst_72318);

(statearr_72703[(30)] = inst_72319);

(statearr_72703[(15)] = inst_72323);

(statearr_72703[(16)] = inst_72324);

(statearr_72703[(17)] = inst_72325);

return statearr_72703;
})();
var statearr_72704_76160 = state_72584__$1;
(statearr_72704_76160[(2)] = null);

(statearr_72704_76160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (66))){
var state_72584__$1 = state_72584;
var statearr_72710_76161 = state_72584__$1;
(statearr_72710_76161[(2)] = null);

(statearr_72710_76161[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (23))){
var inst_72382 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72711_76162 = state_72584__$1;
(statearr_72711_76162[(2)] = inst_72382);

(statearr_72711_76162[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (47))){
var inst_72566 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72712_76163 = state_72584__$1;
(statearr_72712_76163[(2)] = inst_72566);

(statearr_72712_76163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (35))){
var inst_72387 = (state_72584[(14)]);
var inst_72396 = com.wsscode.async.async_cljs.promise__GT_chan(inst_72387);
var state_72584__$1 = state_72584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72584__$1,(38),inst_72396);
} else {
if((state_val_72585 === (82))){
var inst_72503 = (state_72584[(8)]);
var state_72584__$1 = state_72584;
var statearr_72713_76164 = state_72584__$1;
(statearr_72713_76164[(2)] = inst_72503);

(statearr_72713_76164[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (76))){
var inst_72526 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72714_76165 = state_72584__$1;
(statearr_72714_76165[(2)] = inst_72526);

(statearr_72714_76165[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (19))){
var inst_72384 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72715_76166 = state_72584__$1;
(statearr_72715_76166[(2)] = inst_72384);

(statearr_72715_76166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (57))){
var inst_72447 = (state_72584[(7)]);
var state_72584__$1 = state_72584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72584__$1,(60),inst_72447);
} else {
if((state_val_72585 === (68))){
var inst_72477 = (state_72584[(39)]);
var inst_72488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72477,(0),null);
var inst_72489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72477,(1),null);
var inst_72490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72477,(2),null);
var inst_72323 = inst_72488;
var inst_72324 = inst_72489;
var inst_72325 = inst_72490;
var state_72584__$1 = (function (){var statearr_72716 = state_72584;
(statearr_72716[(15)] = inst_72323);

(statearr_72716[(16)] = inst_72324);

(statearr_72716[(17)] = inst_72325);

return statearr_72716;
})();
var statearr_72717_76167 = state_72584__$1;
(statearr_72717_76167[(2)] = null);

(statearr_72717_76167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (11))){
var inst_72308 = (state_72584[(23)]);
var inst_72350 = (state_72584[(31)]);
var inst_72357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72358 = [inst_72308];
var inst_72359 = (new cljs.core.PersistentVector(null,1,(5),inst_72357,inst_72358,null));
var inst_72360 = cljs.core.select_keys(inst_72350,inst_72359);
var state_72584__$1 = state_72584;
var statearr_72719_76168 = state_72584__$1;
(statearr_72719_76168[(2)] = inst_72360);

(statearr_72719_76168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (9))){
var state_72584__$1 = state_72584;
var statearr_72720_76169 = state_72584__$1;
(statearr_72720_76169[(2)] = null);

(statearr_72720_76169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (5))){
var _ = (function (){var statearr_72721 = state_72584;
(statearr_72721[(4)] = cljs.core.rest((state_72584[(4)])));

return statearr_72721;
})();
var state_72584__$1 = state_72584;
var ex72718 = (state_72584__$1[(2)]);
var statearr_72722_76170 = state_72584__$1;
(statearr_72722_76170[(5)] = ex72718);


var statearr_72723_76171 = state_72584__$1;
(statearr_72723_76171[(1)] = (4));

(statearr_72723_76171[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (83))){
var state_72584__$1 = state_72584;
var statearr_72726_76172 = state_72584__$1;
(statearr_72726_76172[(2)] = null);

(statearr_72726_76172[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (14))){
var inst_72349 = (state_72584[(25)]);
var inst_72351 = (state_72584[(34)]);
var inst_72354 = (state_72584[(35)]);
var inst_72347 = (state_72584[(27)]);
var inst_72363 = (state_72584[(21)]);
var inst_72363__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_72349,inst_72351,inst_72354,inst_72347);
var inst_72364 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72363__$1);
var state_72584__$1 = (function (){var statearr_72727 = state_72584;
(statearr_72727[(21)] = inst_72363__$1);

return statearr_72727;
})();
if(inst_72364){
var statearr_72728_76173 = state_72584__$1;
(statearr_72728_76173[(1)] = (17));

} else {
var statearr_72729_76174 = state_72584__$1;
(statearr_72729_76174[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (45))){
var inst_72420 = (state_72584[(11)]);
var inst_72349 = (state_72584[(25)]);
var inst_72347 = (state_72584[(27)]);
var inst_72316 = (state_72584[(28)]);
var inst_72332 = (state_72584[(29)]);
var inst_72319 = (state_72584[(30)]);
var inst_72350 = (state_72584[(31)]);
var inst_72339 = (state_72584[(20)]);
var inst_72323 = (state_72584[(15)]);
var inst_72425 = (state_72584[(19)]);
var inst_72333 = (state_72584[(9)]);
var inst_72346 = (state_72584[(32)]);
var inst_72325 = (state_72584[(17)]);
var inst_72308 = (state_72584[(23)]);
var inst_72324 = (state_72584[(16)]);
var inst_72348 = (state_72584[(33)]);
var inst_72351 = (state_72584[(34)]);
var inst_72340 = (state_72584[(24)]);
var inst_72354 = (state_72584[(35)]);
var inst_72345 = (state_72584[(36)]);
var inst_72421 = (state_72584[(12)]);
var inst_72424 = (state_72584[(10)]);
var inst_72318 = (state_72584[(37)]);
var inst_72428 = (state_72584[(40)]);
var inst_72424__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_72420,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_72349);
var inst_72425__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_72420,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_72426 = (function (){var input = inst_72347;
var vec__72313 = inst_72316;
var vec__72335 = inst_72332;
var step = inst_72332;
var seq__72314 = inst_72319;
var entity = inst_72350;
var key_SINGLEQUOTE_ = inst_72339;
var G__72312 = inst_72323;
var response = inst_72425__$1;
var seq__72329 = inst_72333;
var cache_QMARK_ = inst_72346;
var out_left = inst_72325;
var key = inst_72308;
var vec__72328 = inst_72323;
var failed_resolvers = inst_72324;
var first__72330 = inst_72332;
var output = inst_72348;
var env__$1 = inst_72349;
var e = inst_72351;
var resolver_sym = inst_72340;
var trace_data = inst_72354;
var resolver = inst_72345;
var map__72338 = inst_72345;
var replan = inst_72421;
var env_SINGLEQUOTE_ = inst_72424__$1;
var first__72315 = inst_72318;
var tail = inst_72333;
return (function (p1__72293_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__72293_SHARP_], 0));
});
})();
var inst_72427 = com.wsscode.pathom.core.swap_entity_BANG_(inst_72424__$1,inst_72426);
var inst_72428__$1 = cljs.core.contains_QMARK_(inst_72425__$1,inst_72339);
var state_72584__$1 = (function (){var statearr_72732 = state_72584;
(statearr_72732[(10)] = inst_72424__$1);

(statearr_72732[(19)] = inst_72425__$1);

(statearr_72732[(41)] = inst_72427);

(statearr_72732[(40)] = inst_72428__$1);

return statearr_72732;
})();
if(inst_72428__$1){
var statearr_72733_76177 = state_72584__$1;
(statearr_72733_76177[(1)] = (48));

} else {
var statearr_72734_76178 = state_72584__$1;
(statearr_72734_76178[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (53))){
var inst_72530 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72740_76179 = state_72584__$1;
(statearr_72740_76179[(2)] = inst_72530);

(statearr_72740_76179[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (78))){
var inst_72503 = (state_72584[(8)]);
var inst_72514 = com.wsscode.async.async_cljs.promise__GT_chan(inst_72503);
var state_72584__$1 = state_72584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72584__$1,(81),inst_72514);
} else {
if((state_val_72585 === (26))){
var state_72584__$1 = state_72584;
var statearr_72749_76180 = state_72584__$1;
(statearr_72749_76180[(2)] = null);

(statearr_72749_76180[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (16))){
var inst_72413 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72751_76181 = state_72584__$1;
(statearr_72751_76181[(2)] = inst_72413);

(statearr_72751_76181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (81))){
var inst_72516 = (state_72584[(2)]);
var inst_72517 = com.wsscode.async.async_cljs.consumer_pair(inst_72516);
var state_72584__$1 = state_72584;
var statearr_72752_76182 = state_72584__$1;
(statearr_72752_76182[(2)] = inst_72517);

(statearr_72752_76182[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (79))){
var state_72584__$1 = state_72584;
var statearr_72756_76183 = state_72584__$1;
(statearr_72756_76183[(1)] = (82));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (38))){
var inst_72398 = (state_72584[(2)]);
var inst_72399 = com.wsscode.async.async_cljs.consumer_pair(inst_72398);
var state_72584__$1 = state_72584;
var statearr_72758_76184 = state_72584__$1;
(statearr_72758_76184[(2)] = inst_72399);

(statearr_72758_76184[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (87))){
var inst_72564 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72759_76185 = state_72584__$1;
(statearr_72759_76185[(2)] = inst_72564);

(statearr_72759_76185[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (30))){
var inst_72411 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72760_76192 = state_72584__$1;
(statearr_72760_76192[(2)] = inst_72411);

(statearr_72760_76192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (73))){
var inst_72424 = (state_72584[(10)]);
var inst_72503 = (state_72584[(8)]);
var inst_72502 = (state_72584[(2)]);
var inst_72503__$1 = com.wsscode.pathom.core.map_reader(inst_72424);
var inst_72504 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72503__$1);
var state_72584__$1 = (function (){var statearr_72761 = state_72584;
(statearr_72761[(42)] = inst_72502);

(statearr_72761[(8)] = inst_72503__$1);

return statearr_72761;
})();
if(inst_72504){
var statearr_72762_76195 = state_72584__$1;
(statearr_72762_76195[(1)] = (74));

} else {
var statearr_72763_76196 = state_72584__$1;
(statearr_72763_76196[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (10))){
var inst_72569 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72764_76197 = state_72584__$1;
(statearr_72764_76197[(2)] = inst_72569);

(statearr_72764_76197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (18))){
var inst_72363 = (state_72584[(21)]);
var inst_72370 = com.wsscode.async.async_cljs.promise_QMARK_(inst_72363);
var state_72584__$1 = state_72584;
if(cljs.core.truth_(inst_72370)){
var statearr_72765_76200 = state_72584__$1;
(statearr_72765_76200[(1)] = (21));

} else {
var statearr_72767_76201 = state_72584__$1;
(statearr_72767_76201[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (52))){
var inst_72425 = (state_72584[(19)]);
var inst_72339 = (state_72584[(20)]);
var inst_72421 = (state_72584[(12)]);
var inst_72477 = (state_72584[(39)]);
var inst_72473 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_72474 = [inst_72425,inst_72339];
var inst_72475 = cljs.core.PersistentHashMap.fromArrays(inst_72473,inst_72474);
var inst_72476 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_72475);
var inst_72477__$1 = (inst_72421.cljs$core$IFn$_invoke$arity$1 ? inst_72421.cljs$core$IFn$_invoke$arity$1(inst_72476) : inst_72421.call(null,inst_72476));
var state_72584__$1 = (function (){var statearr_72768 = state_72584;
(statearr_72768[(39)] = inst_72477__$1);

return statearr_72768;
})();
if(cljs.core.truth_(inst_72477__$1)){
var statearr_72769_76204 = state_72584__$1;
(statearr_72769_76204[(1)] = (68));

} else {
var statearr_72770_76206 = state_72584__$1;
(statearr_72770_76206[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (67))){
var inst_72464 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72772_76208 = state_72584__$1;
(statearr_72772_76208[(2)] = inst_72464);

(statearr_72772_76208[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (71))){
var inst_72425 = (state_72584[(19)]);
var inst_72339 = (state_72584[(20)]);
var inst_72495 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_72496 = [inst_72425,inst_72339];
var inst_72497 = cljs.core.PersistentHashMap.fromArrays(inst_72495,inst_72496);
var inst_72498 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_72497);
var inst_72499 = (function(){throw inst_72498})();
var state_72584__$1 = state_72584;
var statearr_72774_76209 = state_72584__$1;
(statearr_72774_76209[(2)] = inst_72499);

(statearr_72774_76209[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (42))){
var inst_72415 = (state_72584[(22)]);
var state_72584__$1 = state_72584;
var statearr_72775_76210 = state_72584__$1;
(statearr_72775_76210[(2)] = inst_72415);

(statearr_72775_76210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (80))){
var inst_72524 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72779_76211 = state_72584__$1;
(statearr_72779_76211[(2)] = inst_72524);

(statearr_72779_76211[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (37))){
var inst_72406 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72780_76212 = state_72584__$1;
(statearr_72780_76212[(2)] = inst_72406);

(statearr_72780_76212[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (63))){
var inst_72466 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72781_76213 = state_72584__$1;
(statearr_72781_76213[(2)] = inst_72466);

(statearr_72781_76213[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (8))){
var inst_72332 = (state_72584[(29)]);
var inst_72340 = (state_72584[(24)]);
var inst_72345 = (state_72584[(36)]);
var inst_72349 = (state_72584[(25)]);
var inst_72350 = (state_72584[(31)]);
var inst_72347 = (state_72584[(27)]);
var inst_72308 = (state_72584[(23)]);
var inst_72351 = (state_72584[(34)]);
var inst_72339 = (state_72584[(20)]);
var inst_72339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72332,(0),null);
var inst_72340__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72332,(1),null);
var inst_72341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72342 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_72340__$1];
var inst_72343 = (new cljs.core.PersistentVector(null,2,(5),inst_72341,inst_72342,null));
var inst_72344 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_72343);
var inst_72345__$1 = cljs.core.__destructure_map(inst_72344);
var inst_72346 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_72345__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_72347__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72345__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_72348 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_72340__$1);
var inst_72349__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_72345__$1);
var inst_72350__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_72349__$1);
var inst_72351__$1 = cljs.core.select_keys(inst_72350__$1,inst_72347__$1);
var inst_72352 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_72353 = [inst_72308,inst_72340__$1,inst_72351__$1];
var inst_72354 = cljs.core.PersistentHashMap.fromArrays(inst_72352,inst_72353);
var inst_72355 = cljs.core.contains_QMARK_(inst_72350__$1,inst_72339__$1);
var state_72584__$1 = (function (){var statearr_72782 = state_72584;
(statearr_72782[(20)] = inst_72339__$1);

(statearr_72782[(24)] = inst_72340__$1);

(statearr_72782[(36)] = inst_72345__$1);

(statearr_72782[(32)] = inst_72346);

(statearr_72782[(27)] = inst_72347__$1);

(statearr_72782[(33)] = inst_72348);

(statearr_72782[(25)] = inst_72349__$1);

(statearr_72782[(31)] = inst_72350__$1);

(statearr_72782[(34)] = inst_72351__$1);

(statearr_72782[(35)] = inst_72354);

return statearr_72782;
})();
if(inst_72355){
var statearr_72783_76214 = state_72584__$1;
(statearr_72783_76214[(1)] = (11));

} else {
var statearr_72784_76215 = state_72584__$1;
(statearr_72784_76215[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (49))){
var inst_72428 = (state_72584[(40)]);
var state_72584__$1 = state_72584;
var statearr_72786_76216 = state_72584__$1;
(statearr_72786_76216[(2)] = inst_72428);

(statearr_72786_76216[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72585 === (84))){
var inst_72522 = (state_72584[(2)]);
var state_72584__$1 = state_72584;
var statearr_72787_76217 = state_72584__$1;
(statearr_72787_76217[(2)] = inst_72522);

(statearr_72787_76217[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto____0 = (function (){
var statearr_72795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72795[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto__);

(statearr_72795[(1)] = (1));

return statearr_72795;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto____1 = (function (state_72584){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_72584);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e72796){var ex__42124__auto__ = e72796;
var statearr_72797_76219 = state_72584;
(statearr_72797_76219[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_72584[(4)]))){
var statearr_72798_76220 = state_72584;
(statearr_72798_76220[(1)] = cljs.core.first((state_72584[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76223 = state_72584;
state_72584 = G__76223;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto__ = function(state_72584){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto____1.call(this,state_72584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_72799 = f__42153__auto__();
(statearr_72799[(6)] = c__42152__auto__);

return statearr_72799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.reader3_node_log_BANG_ = (function com$wsscode$pathom$connect$reader3_node_log_BANG_(p__72800,p__72801,event){
var map__72802 = p__72800;
var map__72802__$1 = cljs.core.__destructure_map(map__72802);
var env = map__72802__$1;
var run_plan_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72802__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","run-plan*","com.wsscode.pathom.connect/run-plan*",-2140918000));
var map__72803 = p__72801;
var map__72803__$1 = cljs.core.__destructure_map(map__72803);
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72803__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node-id","com.wsscode.pathom.connect.planner/node-id",1016027450));
if(cljs.core.truth_(run_plan_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(run_plan_STAR_,com.wsscode.pathom.connect.planner.add_node_log,node_id,event);
} else {
}

return env;
});
com.wsscode.pathom.connect.reader3_run_next_node = (function com$wsscode$pathom$connect$reader3_run_next_node(env,plan,p__72806){
var map__72807 = p__72806;
var map__72807__$1 = cljs.core.__destructure_map(map__72807);
var run_next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72807__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-next","com.wsscode.pathom.connect.planner/run-next",932482163));
if(cljs.core.truth_(run_next)){
var G__72808 = env;
var G__72809 = plan;
var G__72810 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,run_next);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__72808,G__72809,G__72810) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__72808,G__72809,G__72810));
} else {
return null;
}
});
com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_ = (function com$wsscode$pathom$connect$reader3_all_requires_ready_QMARK_(env,p__72813){
var map__72814 = p__72813;
var map__72814__$1 = cljs.core.__destructure_map(map__72814);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72814__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","requires","com.wsscode.pathom.connect.planner/requires",-2118404289));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
return cljs.core.every_QMARK_((function (p1__72811_SHARP_){
return cljs.core.contains_QMARK_(entity,p1__72811_SHARP_);
}),cljs.core.keys(requires));
});
com.wsscode.pathom.connect.reader3_report_invalid_response = (function com$wsscode$pathom$connect$reader3_report_invalid_response(env,sym,response){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response], null));

return null;
});
com.wsscode.pathom.connect.reader3_merge_resolver_response = (function com$wsscode$pathom$connect$reader3_merge_resolver_response(env,sym,response){
if(cljs.core.map_QMARK_(response)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
return com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,(function (p1__72817_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__72817_SHARP_], 0));
}));
} else {
return com.wsscode.pathom.connect.reader3_report_invalid_response(env,sym,response);
}
});
/**
 * Call a run graph node resolver and execute it.
 */
com.wsscode.pathom.connect.reader3_run_resolver_node = (function com$wsscode$pathom$connect$reader3_run_resolver_node(p__72822,plan,p__72823){
var map__72824 = p__72822;
var map__72824__$1 = cljs.core.__destructure_map(map__72824);
var env = map__72824__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72824__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72824__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
var map__72825 = p__72823;
var map__72825__$1 = cljs.core.__destructure_map(map__72825);
var node = map__72825__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72825__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72825__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72825__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","params","com.wsscode.pathom.connect.planner/params",600636577));
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node)){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","skip-node-requires-ready","com.wsscode.pathom.connect/skip-node-requires-ready",-1999300692)], null));

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
} else {
var input_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(input));
var map__72827 = (function (){var G__72828 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
if(cljs.core.seq(input)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__72828,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),input_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915),input], 0));
} else {
return G__72828;
}
})();
var map__72827__$1 = cljs.core.__destructure_map(map__72827);
var resolver = map__72827__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72827__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node","com.wsscode.pathom.connect.planner/node",754110552),node], 0)),new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),params);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input_SINGLEQUOTE_);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = (cljs.core.truth_(cache_QMARK_)?(cljs.core.truth_(async_parser_QMARK_)?com.wsscode.pathom.connect.async_read_cache_read(env__$1,e,trace_data,input_SINGLEQUOTE_):(function (){try{var r = com.wsscode.pathom.connect.serial_cache_resolver_call(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e72830){var err = e72830;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})()):(function (){try{var r = com.wsscode.pathom.connect.call_resolver(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e72832){var err = e72832;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})());
if(cljs.core.truth_(async_parser_QMARK_)){
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___76247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_72919){
var state_val_72920 = (state_72919[(1)]);
if((state_val_72920 === (7))){
var inst_72880 = (state_72919[(2)]);
var inst_72881 = com.wsscode.pathom.connect.reader3_merge_resolver_response(env__$1,sym,inst_72880);
var state_72919__$1 = state_72919;
if(cljs.core.truth_(inst_72881)){
var statearr_72921_76248 = state_72919__$1;
(statearr_72921_76248[(1)] = (21));

} else {
var statearr_72922_76249 = state_72919__$1;
(statearr_72922_76249[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (20))){
var inst_72869 = (state_72919[(2)]);
var state_72919__$1 = state_72919;
var statearr_72923_76250 = state_72919__$1;
(statearr_72923_76250[(2)] = inst_72869);

(statearr_72923_76250[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (27))){
var inst_72887 = (state_72919[(2)]);
var inst_72888 = com.wsscode.async.async_cljs.throw_err(inst_72887);
var state_72919__$1 = state_72919;
var statearr_72924_76251 = state_72919__$1;
(statearr_72924_76251[(2)] = inst_72888);

(statearr_72924_76251[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (1))){
var state_72919__$1 = state_72919;
var statearr_72925_76252 = state_72919__$1;
(statearr_72925_76252[(2)] = null);

(statearr_72925_76252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (24))){
var inst_72883 = (state_72919[(7)]);
var state_72919__$1 = state_72919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72919__$1,(27),inst_72883);
} else {
if((state_val_72920 === (4))){
var inst_72834 = (state_72919[(2)]);
var state_72919__$1 = state_72919;
var statearr_72926_76253 = state_72919__$1;
(statearr_72926_76253[(2)] = inst_72834);

(statearr_72926_76253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (15))){
var state_72919__$1 = state_72919;
var statearr_72927_76254 = state_72919__$1;
(statearr_72927_76254[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (21))){
var inst_72883 = (state_72919[(7)]);
var inst_72883__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env__$1,plan,node);
var inst_72884 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72883__$1);
var state_72919__$1 = (function (){var statearr_72932 = state_72919;
(statearr_72932[(7)] = inst_72883__$1);

return statearr_72932;
})();
if(inst_72884){
var statearr_72933_76255 = state_72919__$1;
(statearr_72933_76255[(1)] = (24));

} else {
var statearr_72934_76256 = state_72919__$1;
(statearr_72934_76256[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (31))){
var inst_72894 = (state_72919[(2)]);
var inst_72895 = com.wsscode.async.async_cljs.consumer_pair(inst_72894);
var state_72919__$1 = state_72919;
var statearr_72935_76257 = state_72919__$1;
(statearr_72935_76257[(2)] = inst_72895);

(statearr_72935_76257[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (32))){
var inst_72883 = (state_72919[(7)]);
var state_72919__$1 = state_72919;
var statearr_72936_76258 = state_72919__$1;
(statearr_72936_76258[(2)] = inst_72883);

(statearr_72936_76258[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (33))){
var state_72919__$1 = state_72919;
var statearr_72937_76259 = state_72919__$1;
(statearr_72937_76259[(2)] = null);

(statearr_72937_76259[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (13))){
var inst_72856 = (state_72919[(2)]);
var inst_72857 = com.wsscode.async.async_cljs.throw_err(inst_72856);
var state_72919__$1 = state_72919;
var statearr_72938_76260 = state_72919__$1;
(statearr_72938_76260[(2)] = inst_72857);

(statearr_72938_76260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (22))){
var state_72919__$1 = state_72919;
var statearr_72939_76261 = state_72919__$1;
(statearr_72939_76261[(2)] = null);

(statearr_72939_76261[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (36))){
var inst_72910 = (state_72919[(8)]);
var inst_72915 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_72910);
var state_72919__$1 = state_72919;
var statearr_72940_76262 = state_72919__$1;
(statearr_72940_76262[(2)] = inst_72915);

(statearr_72940_76262[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (29))){
var state_72919__$1 = state_72919;
var statearr_72941_76263 = state_72919__$1;
(statearr_72941_76263[(1)] = (32));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (6))){
var inst_72852 = (state_72919[(9)]);
var _ = (function (){var statearr_72943 = state_72919;
(statearr_72943[(4)] = cljs.core.cons((9),(state_72919[(4)])));

return statearr_72943;
})();
var inst_72852__$1 = response;
var inst_72853 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72852__$1);
var state_72919__$1 = (function (){var statearr_72944 = state_72919;
(statearr_72944[(9)] = inst_72852__$1);

return statearr_72944;
})();
if(inst_72853){
var statearr_72945_76264 = state_72919__$1;
(statearr_72945_76264[(1)] = (10));

} else {
var statearr_72946_76265 = state_72919__$1;
(statearr_72946_76265[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (28))){
var inst_72883 = (state_72919[(7)]);
var inst_72892 = com.wsscode.async.async_cljs.promise__GT_chan(inst_72883);
var state_72919__$1 = state_72919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72919__$1,(31),inst_72892);
} else {
if((state_val_72920 === (25))){
var inst_72883 = (state_72919[(7)]);
var inst_72890 = com.wsscode.async.async_cljs.promise_QMARK_(inst_72883);
var state_72919__$1 = state_72919;
if(cljs.core.truth_(inst_72890)){
var statearr_72947_76266 = state_72919__$1;
(statearr_72947_76266[(1)] = (28));

} else {
var statearr_72948_76267 = state_72919__$1;
(statearr_72948_76267[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (34))){
var inst_72900 = (state_72919[(2)]);
var state_72919__$1 = state_72919;
var statearr_72949_76268 = state_72919__$1;
(statearr_72949_76268[(2)] = inst_72900);

(statearr_72949_76268[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (17))){
var inst_72863 = (state_72919[(2)]);
var inst_72864 = com.wsscode.async.async_cljs.consumer_pair(inst_72863);
var state_72919__$1 = state_72919;
var statearr_73003_76269 = state_72919__$1;
(statearr_73003_76269[(2)] = inst_72864);

(statearr_73003_76269[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (3))){
var inst_72910 = (state_72919[(8)]);
var inst_72910__$1 = (state_72919[(2)]);
var inst_72911 = (inst_72910__$1 == null);
var state_72919__$1 = (function (){var statearr_73004 = state_72919;
(statearr_73004[(8)] = inst_72910__$1);

return statearr_73004;
})();
if(cljs.core.truth_(inst_72911)){
var statearr_73005_76270 = state_72919__$1;
(statearr_73005_76270[(1)] = (35));

} else {
var statearr_73006_76271 = state_72919__$1;
(statearr_73006_76271[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (12))){
var inst_72873 = (state_72919[(2)]);
var inst_72874 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817)];
var inst_72875 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),e,inst_72873];
var inst_72876 = cljs.core.PersistentHashMap.fromArrays(inst_72874,inst_72875);
var inst_72877 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_72876);
var _ = (function (){var statearr_73007 = state_72919;
(statearr_73007[(4)] = cljs.core.rest((state_72919[(4)])));

return statearr_73007;
})();
var state_72919__$1 = (function (){var statearr_73008 = state_72919;
(statearr_73008[(10)] = inst_72877);

return statearr_73008;
})();
var statearr_73009_76285 = state_72919__$1;
(statearr_73009_76285[(2)] = inst_72873);

(statearr_73009_76285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (2))){
var _ = (function (){var statearr_73010 = state_72919;
(statearr_73010[(4)] = cljs.core.cons((5),(state_72919[(4)])));

return statearr_73010;
})();
var state_72919__$1 = state_72919;
var statearr_73011_76286 = state_72919__$1;
(statearr_73011_76286[(2)] = null);

(statearr_73011_76286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (23))){
var inst_72907 = (state_72919[(2)]);
var _ = (function (){var statearr_73012 = state_72919;
(statearr_73012[(4)] = cljs.core.rest((state_72919[(4)])));

return statearr_73012;
})();
var state_72919__$1 = state_72919;
var statearr_73013_76288 = state_72919__$1;
(statearr_73013_76288[(2)] = inst_72907);

(statearr_73013_76288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (35))){
var inst_72913 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_72919__$1 = state_72919;
var statearr_73014_76289 = state_72919__$1;
(statearr_73014_76289[(2)] = inst_72913);

(statearr_73014_76289[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (19))){
var state_72919__$1 = state_72919;
var statearr_73016_76290 = state_72919__$1;
(statearr_73016_76290[(2)] = null);

(statearr_73016_76290[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (11))){
var inst_72852 = (state_72919[(9)]);
var inst_72859 = com.wsscode.async.async_cljs.promise_QMARK_(inst_72852);
var state_72919__$1 = state_72919;
if(cljs.core.truth_(inst_72859)){
var statearr_73018_76294 = state_72919__$1;
(statearr_73018_76294[(1)] = (14));

} else {
var statearr_73019_76296 = state_72919__$1;
(statearr_73019_76296[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (9))){
var _ = (function (){var statearr_73020 = state_72919;
(statearr_73020[(4)] = cljs.core.rest((state_72919[(4)])));

return statearr_73020;
})();
var state_72919__$1 = state_72919;
var ex73015 = (state_72919__$1[(2)]);
var statearr_73021_76298 = state_72919__$1;
(statearr_73021_76298[(5)] = ex73015);


var statearr_73022_76299 = state_72919__$1;
(statearr_73022_76299[(1)] = (8));

(statearr_73022_76299[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (5))){
var _ = (function (){var statearr_73023 = state_72919;
(statearr_73023[(4)] = cljs.core.rest((state_72919[(4)])));

return statearr_73023;
})();
var state_72919__$1 = state_72919;
var ex73017 = (state_72919__$1[(2)]);
var statearr_73024_76303 = state_72919__$1;
(statearr_73024_76303[(5)] = ex73017);


var statearr_73028_76304 = state_72919__$1;
(statearr_73028_76304[(1)] = (4));

(statearr_73028_76304[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (14))){
var inst_72852 = (state_72919[(9)]);
var inst_72861 = com.wsscode.async.async_cljs.promise__GT_chan(inst_72852);
var state_72919__$1 = state_72919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72919__$1,(17),inst_72861);
} else {
if((state_val_72920 === (26))){
var inst_72904 = (state_72919[(2)]);
var state_72919__$1 = state_72919;
var statearr_73029_76307 = state_72919__$1;
(statearr_73029_76307[(2)] = inst_72904);

(statearr_73029_76307[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (16))){
var inst_72871 = (state_72919[(2)]);
var state_72919__$1 = state_72919;
var statearr_73030_76311 = state_72919__$1;
(statearr_73030_76311[(2)] = inst_72871);

(statearr_73030_76311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (30))){
var inst_72902 = (state_72919[(2)]);
var state_72919__$1 = state_72919;
var statearr_73031_76313 = state_72919__$1;
(statearr_73031_76313[(2)] = inst_72902);

(statearr_73031_76313[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (10))){
var inst_72852 = (state_72919[(9)]);
var state_72919__$1 = state_72919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72919__$1,(13),inst_72852);
} else {
if((state_val_72920 === (18))){
var inst_72852 = (state_72919[(9)]);
var state_72919__$1 = state_72919;
var statearr_73037_76320 = state_72919__$1;
(statearr_73037_76320[(2)] = inst_72852);

(statearr_73037_76320[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72920 === (37))){
var inst_72917 = (state_72919[(2)]);
var state_72919__$1 = state_72919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72919__$1,inst_72917);
} else {
if((state_val_72920 === (8))){
var inst_72841 = (state_72919[(2)]);
var inst_72842 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416)];
var inst_72843 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),e,inst_72841];
var inst_72844 = cljs.core.PersistentHashMap.fromArrays(inst_72842,inst_72843);
var inst_72845 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_72844);
var inst_72846 = (function(){throw inst_72841})();
var state_72919__$1 = (function (){var statearr_73049 = state_72919;
(statearr_73049[(11)] = inst_72845);

return statearr_73049;
})();
var statearr_73050_76321 = state_72919__$1;
(statearr_73050_76321[(2)] = inst_72846);

(statearr_73050_76321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto____0 = (function (){
var statearr_73051 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73051[(0)] = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto__);

(statearr_73051[(1)] = (1));

return statearr_73051;
});
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto____1 = (function (state_72919){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_72919);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e73052){var ex__42124__auto__ = e73052;
var statearr_73053_76323 = state_72919;
(statearr_73053_76323[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_72919[(4)]))){
var statearr_73054_76324 = state_72919;
(statearr_73054_76324[(1)] = cljs.core.first((state_72919[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76325 = state_72919;
state_72919 = G__76325;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto__ = function(state_72919){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto____1.call(this,state_72919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_73055 = f__42153__auto__();
(statearr_73055[(6)] = c__42152__auto___76247);

return statearr_73055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
} else {
if(cljs.core.truth_(com.wsscode.pathom.connect.reader3_merge_resolver_response(env__$1,sym,response))){
return com.wsscode.pathom.connect.reader3_run_next_node(env__$1,plan,node);
} else {
return null;
}
}
}
});
com.wsscode.pathom.connect.reader3_run_and_node_sync = (function com$wsscode$pathom$connect$reader3_run_and_node_sync(env,plan,p__73083){
var map__73085 = p__73083;
var map__73085__$1 = cljs.core.__destructure_map(map__73085);
var node = map__73085__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73085__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var seq__73086_76326 = cljs.core.seq(run_and);
var chunk__73087_76327 = null;
var count__73088_76328 = (0);
var i__73089_76329 = (0);
while(true){
if((i__73089_76329 < count__73088_76328)){
var node_id_76341 = chunk__73087_76327.cljs$core$IIndexed$_nth$arity$2(null,i__73089_76329);
var G__73096_76342 = env;
var G__73097_76343 = plan;
var G__73098_76344 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_76341);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__73096_76342,G__73097_76343,G__73098_76344) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__73096_76342,G__73097_76343,G__73098_76344));


var G__76346 = seq__73086_76326;
var G__76347 = chunk__73087_76327;
var G__76348 = count__73088_76328;
var G__76349 = (i__73089_76329 + (1));
seq__73086_76326 = G__76346;
chunk__73087_76327 = G__76347;
count__73088_76328 = G__76348;
i__73089_76329 = G__76349;
continue;
} else {
var temp__5804__auto___76351 = cljs.core.seq(seq__73086_76326);
if(temp__5804__auto___76351){
var seq__73086_76352__$1 = temp__5804__auto___76351;
if(cljs.core.chunked_seq_QMARK_(seq__73086_76352__$1)){
var c__5568__auto___76353 = cljs.core.chunk_first(seq__73086_76352__$1);
var G__76354 = cljs.core.chunk_rest(seq__73086_76352__$1);
var G__76355 = c__5568__auto___76353;
var G__76356 = cljs.core.count(c__5568__auto___76353);
var G__76357 = (0);
seq__73086_76326 = G__76354;
chunk__73087_76327 = G__76355;
count__73088_76328 = G__76356;
i__73089_76329 = G__76357;
continue;
} else {
var node_id_76358 = cljs.core.first(seq__73086_76352__$1);
var G__73099_76359 = env;
var G__73100_76360 = plan;
var G__73101_76361 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_76358);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__73099_76359,G__73100_76360,G__73101_76361) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__73099_76359,G__73100_76360,G__73101_76361));


var G__76362 = cljs.core.next(seq__73086_76352__$1);
var G__76363 = null;
var G__76364 = (0);
var G__76365 = (0);
seq__73086_76326 = G__76362;
chunk__73087_76327 = G__76363;
count__73088_76328 = G__76364;
i__73089_76329 = G__76365;
continue;
}
} else {
}
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
});
com.wsscode.pathom.connect.join_seq_pipeline_fn = (function com$wsscode$pathom$connect$join_seq_pipeline_fn(env,plan){
return (function com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline(node_id,res_ch){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_73120){
var state_val_73121 = (state_73120[(1)]);
if((state_val_73121 === (7))){
var inst_73110 = (state_73120[(7)]);
var state_73120__$1 = state_73120;
var statearr_73125_76366 = state_73120__$1;
(statearr_73125_76366[(2)] = inst_73110);

(statearr_73125_76366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73121 === (1))){
var inst_73103 = (state_73120[(8)]);
var inst_73102 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id);
var inst_73103__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_73102) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_73102));
var inst_73104 = com.wsscode.async.async_cljs.chan_QMARK_(inst_73103__$1);
var state_73120__$1 = (function (){var statearr_73126 = state_73120;
(statearr_73126[(8)] = inst_73103__$1);

return statearr_73126;
})();
if(inst_73104){
var statearr_73127_76367 = state_73120__$1;
(statearr_73127_76367[(1)] = (2));

} else {
var statearr_73128_76368 = state_73120__$1;
(statearr_73128_76368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73121 === (4))){
var inst_73110 = (state_73120[(7)]);
var inst_73110__$1 = (state_73120[(2)]);
var state_73120__$1 = (function (){var statearr_73129 = state_73120;
(statearr_73129[(7)] = inst_73110__$1);

return statearr_73129;
})();
if(cljs.core.truth_(inst_73110__$1)){
var statearr_73130_76369 = state_73120__$1;
(statearr_73130_76369[(1)] = (7));

} else {
var statearr_73131_76370 = state_73120__$1;
(statearr_73131_76370[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73121 === (6))){
var inst_73117 = (state_73120[(2)]);
var inst_73118 = cljs.core.async.close_BANG_(res_ch);
var state_73120__$1 = (function (){var statearr_73132 = state_73120;
(statearr_73132[(9)] = inst_73117);

return statearr_73132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73120__$1,inst_73118);
} else {
if((state_val_73121 === (3))){
var inst_73103 = (state_73120[(8)]);
var state_73120__$1 = state_73120;
var statearr_73133_76371 = state_73120__$1;
(statearr_73133_76371[(2)] = inst_73103);

(statearr_73133_76371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73121 === (2))){
var inst_73103 = (state_73120[(8)]);
var state_73120__$1 = state_73120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73120__$1,(5),inst_73103);
} else {
if((state_val_73121 === (9))){
var inst_73115 = (state_73120[(2)]);
var state_73120__$1 = state_73120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73120__$1,(6),res_ch,inst_73115);
} else {
if((state_val_73121 === (5))){
var inst_73107 = (state_73120[(2)]);
var state_73120__$1 = state_73120;
var statearr_73134_76372 = state_73120__$1;
(statearr_73134_76372[(2)] = inst_73107);

(statearr_73134_76372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73121 === (8))){
var inst_73113 = cljs.core.PersistentHashMap.EMPTY;
var state_73120__$1 = state_73120;
var statearr_73135_76373 = state_73120__$1;
(statearr_73135_76373[(2)] = inst_73113);

(statearr_73135_76373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto____0 = (function (){
var statearr_73136 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73136[(0)] = com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto__);

(statearr_73136[(1)] = (1));

return statearr_73136;
});
var com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto____1 = (function (state_73120){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_73120);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e73137){var ex__42124__auto__ = e73137;
var statearr_73138_76374 = state_73120;
(statearr_73138_76374[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_73120[(4)]))){
var statearr_73139_76375 = state_73120;
(statearr_73139_76375[(1)] = cljs.core.first((state_73120[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76376 = state_73120;
state_73120 = G__76376;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto__ = function(state_73120){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto____1.call(this,state_73120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$join_seq_pipeline_fn_$_join_seq_pipeline_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_73140 = f__42153__auto__();
(statearr_73140[(6)] = c__42152__auto__);

return statearr_73140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
});
com.wsscode.pathom.connect.reader3_run_and_node_async = (function com$wsscode$pathom$connect$reader3_run_and_node_async(env,plan,p__73145){
var map__73146 = p__73145;
var map__73146__$1 = cljs.core.__destructure_map(map__73146);
var node = map__73146__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73146__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___76377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_73202){
var state_val_73203 = (state_73202[(1)]);
if((state_val_73203 === (7))){
var inst_73165 = (state_73202[(7)]);
var inst_73165__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
var inst_73166 = com.wsscode.async.async_cljs.chan_QMARK_(inst_73165__$1);
var state_73202__$1 = (function (){var statearr_73204 = state_73202;
(statearr_73204[(7)] = inst_73165__$1);

return statearr_73204;
})();
if(inst_73166){
var statearr_73205_76378 = state_73202__$1;
(statearr_73205_76378[(1)] = (10));

} else {
var statearr_73206_76379 = state_73202__$1;
(statearr_73206_76379[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (20))){
var inst_73183 = (state_73202[(2)]);
var state_73202__$1 = state_73202;
var statearr_73207_76380 = state_73202__$1;
(statearr_73207_76380[(2)] = inst_73183);

(statearr_73207_76380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (1))){
var state_73202__$1 = state_73202;
var statearr_73208_76381 = state_73202__$1;
(statearr_73208_76381[(2)] = null);

(statearr_73208_76381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (4))){
var inst_73147 = (state_73202[(2)]);
var state_73202__$1 = state_73202;
var statearr_73209_76387 = state_73202__$1;
(statearr_73209_76387[(2)] = inst_73147);

(statearr_73209_76387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (15))){
var state_73202__$1 = state_73202;
var statearr_73210_76388 = state_73202__$1;
(statearr_73210_76388[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (21))){
var inst_73196 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_73202__$1 = state_73202;
var statearr_73213_76390 = state_73202__$1;
(statearr_73213_76390[(2)] = inst_73196);

(statearr_73213_76390[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (13))){
var inst_73169 = (state_73202[(2)]);
var inst_73170 = com.wsscode.async.async_cljs.throw_err(inst_73169);
var state_73202__$1 = state_73202;
var statearr_73214_76391 = state_73202__$1;
(statearr_73214_76391[(2)] = inst_73170);

(statearr_73214_76391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (22))){
var inst_73193 = (state_73202[(8)]);
var inst_73198 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_73193);
var state_73202__$1 = state_73202;
var statearr_73215_76392 = state_73202__$1;
(statearr_73215_76392[(2)] = inst_73198);

(statearr_73215_76392[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (6))){
var inst_73161 = (state_73202[(2)]);
var inst_73162 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node);
var state_73202__$1 = (function (){var statearr_73216 = state_73202;
(statearr_73216[(9)] = inst_73161);

return statearr_73216;
})();
if(inst_73162){
var statearr_73217_76393 = state_73202__$1;
(statearr_73217_76393[(1)] = (7));

} else {
var statearr_73218_76394 = state_73202__$1;
(statearr_73218_76394[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (17))){
var inst_73177 = (state_73202[(2)]);
var inst_73178 = com.wsscode.async.async_cljs.consumer_pair(inst_73177);
var state_73202__$1 = state_73202;
var statearr_73219_76395 = state_73202__$1;
(statearr_73219_76395[(2)] = inst_73178);

(statearr_73219_76395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (3))){
var inst_73193 = (state_73202[(8)]);
var inst_73193__$1 = (state_73202[(2)]);
var inst_73194 = (inst_73193__$1 == null);
var state_73202__$1 = (function (){var statearr_73220 = state_73202;
(statearr_73220[(8)] = inst_73193__$1);

return statearr_73220;
})();
if(cljs.core.truth_(inst_73194)){
var statearr_73221_76396 = state_73202__$1;
(statearr_73221_76396[(1)] = (21));

} else {
var statearr_73222_76397 = state_73202__$1;
(statearr_73222_76397[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (12))){
var inst_73187 = (state_73202[(2)]);
var state_73202__$1 = state_73202;
var statearr_73223_76398 = state_73202__$1;
(statearr_73223_76398[(2)] = inst_73187);

(statearr_73223_76398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (2))){
var _ = (function (){var statearr_73224 = state_73202;
(statearr_73224[(4)] = cljs.core.cons((5),(state_73202[(4)])));

return statearr_73224;
})();
var inst_73154 = cljs.core.async.to_chan_BANG_(run_and);
var inst_73155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_73156 = com.wsscode.pathom.connect.join_seq_pipeline_fn(env,plan);
var inst_73157 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_73155,inst_73156,inst_73154);
var inst_73158 = cljs.core.PersistentVector.EMPTY;
var inst_73159 = cljs.core.async.into(inst_73158,inst_73155);
var state_73202__$1 = (function (){var statearr_73225 = state_73202;
(statearr_73225[(10)] = inst_73157);

return statearr_73225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73202__$1,(6),inst_73159);
} else {
if((state_val_73203 === (23))){
var inst_73200 = (state_73202[(2)]);
var state_73202__$1 = state_73202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73202__$1,inst_73200);
} else {
if((state_val_73203 === (19))){
var state_73202__$1 = state_73202;
var statearr_73226_76401 = state_73202__$1;
(statearr_73226_76401[(2)] = null);

(statearr_73226_76401[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (11))){
var inst_73165 = (state_73202[(7)]);
var inst_73173 = com.wsscode.async.async_cljs.promise_QMARK_(inst_73165);
var state_73202__$1 = state_73202;
if(cljs.core.truth_(inst_73173)){
var statearr_73228_76402 = state_73202__$1;
(statearr_73228_76402[(1)] = (14));

} else {
var statearr_73229_76404 = state_73202__$1;
(statearr_73229_76404[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (9))){
var inst_73190 = (state_73202[(2)]);
var _ = (function (){var statearr_73230 = state_73202;
(statearr_73230[(4)] = cljs.core.rest((state_73202[(4)])));

return statearr_73230;
})();
var state_73202__$1 = state_73202;
var statearr_73236_76407 = state_73202__$1;
(statearr_73236_76407[(2)] = inst_73190);

(statearr_73236_76407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (5))){
var _ = (function (){var statearr_73237 = state_73202;
(statearr_73237[(4)] = cljs.core.rest((state_73202[(4)])));

return statearr_73237;
})();
var state_73202__$1 = state_73202;
var ex73227 = (state_73202__$1[(2)]);
var statearr_73238_76409 = state_73202__$1;
(statearr_73238_76409[(5)] = ex73227);


var statearr_73239_76410 = state_73202__$1;
(statearr_73239_76410[(1)] = (4));

(statearr_73239_76410[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (14))){
var inst_73165 = (state_73202[(7)]);
var inst_73175 = com.wsscode.async.async_cljs.promise__GT_chan(inst_73165);
var state_73202__$1 = state_73202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73202__$1,(17),inst_73175);
} else {
if((state_val_73203 === (16))){
var inst_73185 = (state_73202[(2)]);
var state_73202__$1 = state_73202;
var statearr_73240_76411 = state_73202__$1;
(statearr_73240_76411[(2)] = inst_73185);

(statearr_73240_76411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (10))){
var inst_73165 = (state_73202[(7)]);
var state_73202__$1 = state_73202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73202__$1,(13),inst_73165);
} else {
if((state_val_73203 === (18))){
var inst_73165 = (state_73202[(7)]);
var state_73202__$1 = state_73202;
var statearr_73241_76412 = state_73202__$1;
(statearr_73241_76412[(2)] = inst_73165);

(statearr_73241_76412[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73203 === (8))){
var state_73202__$1 = state_73202;
var statearr_73242_76413 = state_73202__$1;
(statearr_73242_76413[(2)] = null);

(statearr_73242_76413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto____0 = (function (){
var statearr_73243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73243[(0)] = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto__);

(statearr_73243[(1)] = (1));

return statearr_73243;
});
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto____1 = (function (state_73202){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_73202);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e73244){var ex__42124__auto__ = e73244;
var statearr_73247_76414 = state_73202;
(statearr_73247_76414[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_73202[(4)]))){
var statearr_73249_76415 = state_73202;
(statearr_73249_76415[(1)] = cljs.core.first((state_73202[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76416 = state_73202;
state_73202 = G__76416;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto__ = function(state_73202){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto____1.call(this,state_73202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_73251 = f__42153__auto__();
(statearr_73251[(6)] = c__42152__auto___76377);

return statearr_73251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
});
/**
 * Execute an AND node.
 */
com.wsscode.pathom.connect.reader3_run_and_node = (function com$wsscode$pathom$connect$reader3_run_and_node(env,plan,node){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","and-node-run","com.wsscode.pathom.connect/and-node-run",1169565319)], null));

if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905).cljs$core$IFn$_invoke$arity$1(env))){
return com.wsscode.pathom.connect.reader3_run_and_node_async(env,plan,node);
} else {
return com.wsscode.pathom.connect.reader3_run_and_node_sync(env,plan,node);
}
});
com.wsscode.pathom.connect.reader3_run_or_node_sync = (function com$wsscode$pathom$connect$reader3_run_or_node_sync(env,plan,p__73279){
var map__73280 = p__73279;
var map__73280__$1 = cljs.core.__destructure_map(map__73280);
var or_node = map__73280__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73280__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var nodes_76446 = run_or;
var resp_76447 = null;
while(true){
var vec__73287_76448 = nodes_76446;
var seq__73288_76449 = cljs.core.seq(vec__73287_76448);
var first__73289_76450 = cljs.core.first(seq__73288_76449);
var seq__73288_76451__$1 = cljs.core.next(seq__73288_76449);
var node_id_76452 = first__73289_76450;
var tail_76453 = seq__73288_76451__$1;
if(cljs.core.truth_(node_id_76452)){
var response_76454 = (function (){var G__73290 = env;
var G__73291 = plan;
var G__73292 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_76452);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__73290,G__73291,G__73292) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__73290,G__73291,G__73292));
})();
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node)){
} else {
var G__76455 = tail_76453;
var G__76456 = response_76454;
nodes_76446 = G__76455;
resp_76447 = G__76456;
continue;
}
} else {
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
});
com.wsscode.pathom.connect.reader3_run_or_node_async = (function com$wsscode$pathom$connect$reader3_run_or_node_async(env,plan,p__73297){
var map__73298 = p__73297;
var map__73298__$1 = cljs.core.__destructure_map(map__73298);
var or_node = map__73298__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73298__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___76457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_73369){
var state_val_73370 = (state_73369[(1)]);
if((state_val_73370 === (7))){
var inst_73336 = (state_73369[(7)]);
var inst_73335 = (state_73369[(2)]);
var inst_73336__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
var inst_73337 = com.wsscode.async.async_cljs.chan_QMARK_(inst_73336__$1);
var state_73369__$1 = (function (){var statearr_73371 = state_73369;
(statearr_73371[(8)] = inst_73335);

(statearr_73371[(7)] = inst_73336__$1);

return statearr_73371;
})();
if(inst_73337){
var statearr_73372_76458 = state_73369__$1;
(statearr_73372_76458[(1)] = (18));

} else {
var statearr_73373_76459 = state_73369__$1;
(statearr_73373_76459[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (20))){
var inst_73357 = (state_73369[(2)]);
var _ = (function (){var statearr_73374 = state_73369;
(statearr_73374[(4)] = cljs.core.rest((state_73369[(4)])));

return statearr_73374;
})();
var state_73369__$1 = state_73369;
var statearr_73375_76460 = state_73369__$1;
(statearr_73375_76460[(2)] = inst_73357);

(statearr_73375_76460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (27))){
var state_73369__$1 = state_73369;
var statearr_73376_76461 = state_73369__$1;
(statearr_73376_76461[(2)] = null);

(statearr_73376_76461[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (1))){
var state_73369__$1 = state_73369;
var statearr_73379_76462 = state_73369__$1;
(statearr_73379_76462[(2)] = null);

(statearr_73379_76462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (24))){
var inst_73355 = (state_73369[(2)]);
var state_73369__$1 = state_73369;
var statearr_73382_76463 = state_73369__$1;
(statearr_73382_76463[(2)] = inst_73355);

(statearr_73382_76463[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (4))){
var inst_73299 = (state_73369[(2)]);
var state_73369__$1 = state_73369;
var statearr_73384_76464 = state_73369__$1;
(statearr_73384_76464[(2)] = inst_73299);

(statearr_73384_76464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (15))){
var inst_73324 = (state_73369[(9)]);
var state_73369__$1 = state_73369;
var statearr_73386_76465 = state_73369__$1;
(statearr_73386_76465[(2)] = inst_73324);

(statearr_73386_76465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (21))){
var inst_73340 = (state_73369[(2)]);
var inst_73341 = com.wsscode.async.async_cljs.throw_err(inst_73340);
var state_73369__$1 = state_73369;
var statearr_73387_76466 = state_73369__$1;
(statearr_73387_76466[(2)] = inst_73341);

(statearr_73387_76466[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (31))){
var inst_73367 = (state_73369[(2)]);
var state_73369__$1 = state_73369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73369__$1,inst_73367);
} else {
if((state_val_73370 === (13))){
var inst_73324 = (state_73369[(2)]);
var inst_73325 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node);
var state_73369__$1 = (function (){var statearr_73388 = state_73369;
(statearr_73388[(9)] = inst_73324);

return statearr_73388;
})();
if(inst_73325){
var statearr_73389_76467 = state_73369__$1;
(statearr_73389_76467[(1)] = (15));

} else {
var statearr_73390_76468 = state_73369__$1;
(statearr_73390_76468[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (22))){
var inst_73336 = (state_73369[(7)]);
var inst_73345 = com.wsscode.async.async_cljs.promise__GT_chan(inst_73336);
var state_73369__$1 = state_73369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73369__$1,(25),inst_73345);
} else {
if((state_val_73370 === (29))){
var inst_73363 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_73369__$1 = state_73369;
var statearr_73391_76469 = state_73369__$1;
(statearr_73391_76469[(2)] = inst_73363);

(statearr_73391_76469[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (6))){
var inst_73306 = (state_73369[(10)]);
var inst_73313 = (state_73369[(11)]);
var inst_73312 = cljs.core.seq(inst_73306);
var inst_73313__$1 = cljs.core.first(inst_73312);
var inst_73314 = cljs.core.next(inst_73312);
var state_73369__$1 = (function (){var statearr_73392 = state_73369;
(statearr_73392[(11)] = inst_73313__$1);

(statearr_73392[(12)] = inst_73314);

return statearr_73392;
})();
if(cljs.core.truth_(inst_73313__$1)){
var statearr_73393_76470 = state_73369__$1;
(statearr_73393_76470[(1)] = (8));

} else {
var statearr_73394_76471 = state_73369__$1;
(statearr_73394_76471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (28))){
var inst_73353 = (state_73369[(2)]);
var state_73369__$1 = state_73369;
var statearr_73395_76472 = state_73369__$1;
(statearr_73395_76472[(2)] = inst_73353);

(statearr_73395_76472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (25))){
var inst_73347 = (state_73369[(2)]);
var inst_73348 = com.wsscode.async.async_cljs.consumer_pair(inst_73347);
var state_73369__$1 = state_73369;
var statearr_73397_76473 = state_73369__$1;
(statearr_73397_76473[(2)] = inst_73348);

(statearr_73397_76473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (17))){
var inst_73330 = (state_73369[(2)]);
var state_73369__$1 = state_73369;
var statearr_73398_76474 = state_73369__$1;
(statearr_73398_76474[(2)] = inst_73330);

(statearr_73398_76474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (3))){
var inst_73360 = (state_73369[(13)]);
var inst_73360__$1 = (state_73369[(2)]);
var inst_73361 = (inst_73360__$1 == null);
var state_73369__$1 = (function (){var statearr_73399 = state_73369;
(statearr_73399[(13)] = inst_73360__$1);

return statearr_73399;
})();
if(cljs.core.truth_(inst_73361)){
var statearr_73421_76490 = state_73369__$1;
(statearr_73421_76490[(1)] = (29));

} else {
var statearr_73426_76491 = state_73369__$1;
(statearr_73426_76491[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (12))){
var inst_73317 = (state_73369[(14)]);
var state_73369__$1 = state_73369;
var statearr_73431_76493 = state_73369__$1;
(statearr_73431_76493[(2)] = inst_73317);

(statearr_73431_76493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (2))){
var _ = (function (){var statearr_73432 = state_73369;
(statearr_73432[(4)] = cljs.core.cons((5),(state_73369[(4)])));

return statearr_73432;
})();
var inst_73305 = run_or;
var inst_73306 = inst_73305;
var inst_73307 = null;
var state_73369__$1 = (function (){var statearr_73433 = state_73369;
(statearr_73433[(10)] = inst_73306);

(statearr_73433[(15)] = inst_73307);

return statearr_73433;
})();
var statearr_73434_76501 = state_73369__$1;
(statearr_73434_76501[(2)] = null);

(statearr_73434_76501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (23))){
var state_73369__$1 = state_73369;
var statearr_73435_76502 = state_73369__$1;
(statearr_73435_76502[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (19))){
var inst_73336 = (state_73369[(7)]);
var inst_73343 = com.wsscode.async.async_cljs.promise_QMARK_(inst_73336);
var state_73369__$1 = state_73369;
if(cljs.core.truth_(inst_73343)){
var statearr_73437_76503 = state_73369__$1;
(statearr_73437_76503[(1)] = (22));

} else {
var statearr_73438_76504 = state_73369__$1;
(statearr_73438_76504[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (11))){
var inst_73317 = (state_73369[(14)]);
var state_73369__$1 = state_73369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73369__$1,(14),inst_73317);
} else {
if((state_val_73370 === (9))){
var inst_73307 = (state_73369[(15)]);
var state_73369__$1 = state_73369;
var statearr_73440_76505 = state_73369__$1;
(statearr_73440_76505[(2)] = inst_73307);

(statearr_73440_76505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (5))){
var _ = (function (){var statearr_73441 = state_73369;
(statearr_73441[(4)] = cljs.core.rest((state_73369[(4)])));

return statearr_73441;
})();
var state_73369__$1 = state_73369;
var ex73439 = (state_73369__$1[(2)]);
var statearr_73442_76507 = state_73369__$1;
(statearr_73442_76507[(5)] = ex73439);


var statearr_73443_76510 = state_73369__$1;
(statearr_73443_76510[(1)] = (4));

(statearr_73443_76510[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (14))){
var inst_73321 = (state_73369[(2)]);
var state_73369__$1 = state_73369;
var statearr_73444_76511 = state_73369__$1;
(statearr_73444_76511[(2)] = inst_73321);

(statearr_73444_76511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (26))){
var inst_73336 = (state_73369[(7)]);
var state_73369__$1 = state_73369;
var statearr_73445_76512 = state_73369__$1;
(statearr_73445_76512[(2)] = inst_73336);

(statearr_73445_76512[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (16))){
var inst_73314 = (state_73369[(12)]);
var inst_73324 = (state_73369[(9)]);
var inst_73306 = inst_73314;
var inst_73307 = inst_73324;
var state_73369__$1 = (function (){var statearr_73446 = state_73369;
(statearr_73446[(10)] = inst_73306);

(statearr_73446[(15)] = inst_73307);

return statearr_73446;
})();
var statearr_73447_76514 = state_73369__$1;
(statearr_73447_76514[(2)] = null);

(statearr_73447_76514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (30))){
var inst_73360 = (state_73369[(13)]);
var inst_73365 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_73360);
var state_73369__$1 = state_73369;
var statearr_73448_76517 = state_73369__$1;
(statearr_73448_76517[(2)] = inst_73365);

(statearr_73448_76517[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (10))){
var inst_73333 = (state_73369[(2)]);
var state_73369__$1 = state_73369;
var statearr_73449_76520 = state_73369__$1;
(statearr_73449_76520[(2)] = inst_73333);

(statearr_73449_76520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73370 === (18))){
var inst_73336 = (state_73369[(7)]);
var state_73369__$1 = state_73369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73369__$1,(21),inst_73336);
} else {
if((state_val_73370 === (8))){
var inst_73313 = (state_73369[(11)]);
var inst_73317 = (state_73369[(14)]);
var inst_73316 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,inst_73313);
var inst_73317__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_73316) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_73316));
var inst_73318 = com.wsscode.async.async_cljs.chan_QMARK_(inst_73317__$1);
var state_73369__$1 = (function (){var statearr_73459 = state_73369;
(statearr_73459[(14)] = inst_73317__$1);

return statearr_73459;
})();
if(inst_73318){
var statearr_73460_76530 = state_73369__$1;
(statearr_73460_76530[(1)] = (11));

} else {
var statearr_73461_76531 = state_73369__$1;
(statearr_73461_76531[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto____0 = (function (){
var statearr_73464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73464[(0)] = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto__);

(statearr_73464[(1)] = (1));

return statearr_73464;
});
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto____1 = (function (state_73369){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_73369);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e73472){var ex__42124__auto__ = e73472;
var statearr_73478_76538 = state_73369;
(statearr_73478_76538[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_73369[(4)]))){
var statearr_73479_76539 = state_73369;
(statearr_73479_76539[(1)] = cljs.core.first((state_73369[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76540 = state_73369;
state_73369 = G__76540;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto__ = function(state_73369){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto____1.call(this,state_73369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_73482 = f__42153__auto__();
(statearr_73482[(6)] = c__42152__auto___76457);

return statearr_73482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
});
/**
 * Execute an OR node.
 */
com.wsscode.pathom.connect.reader3_run_or_node = (function com$wsscode$pathom$connect$reader3_run_or_node(env,plan,node){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","or-node-run","com.wsscode.pathom.connect/or-node-run",1191868157)], null));

if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905).cljs$core$IFn$_invoke$arity$1(env))){
return com.wsscode.pathom.connect.reader3_run_or_node_async(env,plan,node);
} else {
return com.wsscode.pathom.connect.reader3_run_or_node_sync(env,plan,node);
}
});
com.wsscode.pathom.connect.reader3_run_node = (function com$wsscode$pathom$connect$reader3_run_node(env,plan,node){
var G__73491 = com.wsscode.pathom.connect.planner.node_kind(node);
var G__73491__$1 = (((G__73491 instanceof cljs.core.Keyword))?G__73491.fqn:null);
switch (G__73491__$1) {
case "com.wsscode.pathom.connect.planner/node-resolver":
return com.wsscode.pathom.connect.reader3_run_resolver_node(env,plan,node);

break;
case "com.wsscode.pathom.connect.planner/node-and":
return com.wsscode.pathom.connect.reader3_run_and_node(env,plan,node);

break;
case "com.wsscode.pathom.connect.planner/node-or":
return com.wsscode.pathom.connect.reader3_run_or_node(env,plan,node);

break;
default:
return null;

}
});
/**
 * Prepare AST from parent query. This will lift placeholder nodes, convert
 *   query to AST and remove children keys that are already present in the current
 *   entity.
 */
com.wsscode.pathom.connect.reader3_prepare_ast = (function com$wsscode$pathom$connect$reader3_prepare_ast(p__73492){
var map__73493 = p__73492;
var map__73493__$1 = cljs.core.__destructure_map(map__73493);
var env = map__73493__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73493__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
return com.wsscode.pathom.connect.planner.prepare_ast(env,com.wsscode.pathom.core.query__GT_ast(parent_query));
});
com.wsscode.pathom.connect.reader3_compute_run_graph = (function com$wsscode$pathom$connect$reader3_compute_run_graph(env){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = com.wsscode.pathom.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$1(env);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan], null));

return plan;
});
/**
 * EXPERIMENTAL
 * 
 *   I created this reader here to experiment with a new way of planning. Since then the
 *   code was ported and evolving in Pathom 3, this reader will get no further upgrades
 *   in Pathom 2.
 */
com.wsscode.pathom.connect.reader3 = (function com$wsscode$pathom$connect$reader3(p__73494){
var map__73495 = p__73494;
var map__73495__$1 = cljs.core.__destructure_map(map__73495);
var env = map__73495__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73495__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var reader3_computed_plans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73495__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73495__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-enter","com.wsscode.pathom.connect/reader3-enter",-1844342031)], null));

var path = com.wsscode.pathom.core.path_without_placeholders(env);
if(cljs.core.contains_QMARK_(reader3_computed_plans,path)){
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
} else {
var ast = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))?(function (){var trace_id__54379__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-prepare-ast","com.wsscode.pathom.connect/reader3-prepare-ast",2123235486)], null));
var res__54380__auto__ = com.wsscode.pathom.connect.reader3_prepare_ast(env);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__54379__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-prepare-ast","com.wsscode.pathom.connect/reader3-prepare-ast",2123235486)], null));

return res__54380__auto__;
})():com.wsscode.pathom.connect.reader3_prepare_ast(env));
var available_data = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))?(function (){var trace_id__54379__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-entity-shape","com.wsscode.pathom.connect/reader3-entity-shape",721688024)], null));
var res__54380__auto__ = com.wsscode.pathom.core.map__GT_shape_descriptor(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__54379__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-entity-shape","com.wsscode.pathom.connect/reader3-entity-shape",721688024)], null));

return res__54380__auto__;
})():com.wsscode.pathom.core.map__GT_shape_descriptor(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env)));
var process_start = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935)], null));
var plan = com.wsscode.pathom.connect.reader3_compute_run_graph(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","available-data","com.wsscode.pathom.connect.planner/available-data",-2081264117),available_data], null)], 0)));
var plan_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(plan);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","run-plan*","com.wsscode.pathom.connect/run-plan*",-2140918000),plan_STAR_);
var temp__5802__auto__ = com.wsscode.pathom.connect.planner.get_root_node(plan);
if(cljs.core.truth_(temp__5802__auto__)){
var root = temp__5802__auto__;
if(cljs.core.truth_(async_parser_QMARK_)){
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___76583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_73566){
var state_val_73567 = (state_73566[(1)]);
if((state_val_73567 === (7))){
var inst_73502 = (state_73566[(7)]);
var inst_73509 = com.wsscode.async.async_cljs.promise_QMARK_(inst_73502);
var state_73566__$1 = state_73566;
if(cljs.core.truth_(inst_73509)){
var statearr_73568_76584 = state_73566__$1;
(statearr_73568_76584[(1)] = (10));

} else {
var statearr_73569_76585 = state_73566__$1;
(statearr_73569_76585[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (20))){
var inst_73537 = (state_73566[(2)]);
var inst_73538 = com.wsscode.async.async_cljs.throw_err(inst_73537);
var state_73566__$1 = state_73566;
var statearr_73570_76586 = state_73566__$1;
(statearr_73570_76586[(2)] = inst_73538);

(statearr_73570_76586[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (27))){
var inst_73550 = (state_73566[(2)]);
var state_73566__$1 = state_73566;
var statearr_73571_76587 = state_73566__$1;
(statearr_73571_76587[(2)] = inst_73550);

(statearr_73571_76587[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (1))){
var state_73566__$1 = state_73566;
var statearr_73572_76588 = state_73566__$1;
(statearr_73572_76588[(2)] = null);

(statearr_73572_76588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (24))){
var inst_73544 = (state_73566[(2)]);
var inst_73545 = com.wsscode.async.async_cljs.consumer_pair(inst_73544);
var state_73566__$1 = state_73566;
var statearr_73573_76589 = state_73566__$1;
(statearr_73573_76589[(2)] = inst_73545);

(statearr_73573_76589[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (4))){
var inst_73496 = (state_73566[(2)]);
var state_73566__$1 = state_73566;
var statearr_73574_76590 = state_73566__$1;
(statearr_73574_76590[(2)] = inst_73496);

(statearr_73574_76590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (15))){
var state_73566__$1 = state_73566;
var statearr_73575_76591 = state_73566__$1;
(statearr_73575_76591[(2)] = null);

(statearr_73575_76591[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (21))){
var inst_73533 = (state_73566[(8)]);
var inst_73542 = com.wsscode.async.async_cljs.promise__GT_chan(inst_73533);
var state_73566__$1 = state_73566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73566__$1,(24),inst_73542);
} else {
if((state_val_73567 === (13))){
var inst_73513 = (state_73566[(2)]);
var inst_73514 = com.wsscode.async.async_cljs.consumer_pair(inst_73513);
var state_73566__$1 = state_73566;
var statearr_73576_76592 = state_73566__$1;
(statearr_73576_76592[(2)] = inst_73514);

(statearr_73576_76592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (22))){
var state_73566__$1 = state_73566;
var statearr_73577_76593 = state_73566__$1;
(statearr_73577_76593[(1)] = (25));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (29))){
var inst_73557 = (state_73566[(9)]);
var inst_73562 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_73557);
var state_73566__$1 = state_73566;
var statearr_73579_76594 = state_73566__$1;
(statearr_73579_76594[(2)] = inst_73562);

(statearr_73579_76594[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (6))){
var inst_73502 = (state_73566[(7)]);
var state_73566__$1 = state_73566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73566__$1,(9),inst_73502);
} else {
if((state_val_73567 === (28))){
var inst_73560 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_73566__$1 = state_73566;
var statearr_73580_76595 = state_73566__$1;
(statearr_73580_76595[(2)] = inst_73560);

(statearr_73580_76595[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (25))){
var inst_73533 = (state_73566[(8)]);
var state_73566__$1 = state_73566;
var statearr_73581_76596 = state_73566__$1;
(statearr_73581_76596[(2)] = inst_73533);

(statearr_73581_76596[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (17))){
var inst_73533 = (state_73566[(8)]);
var state_73566__$1 = state_73566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73566__$1,(20),inst_73533);
} else {
if((state_val_73567 === (3))){
var inst_73557 = (state_73566[(9)]);
var inst_73557__$1 = (state_73566[(2)]);
var inst_73558 = (inst_73557__$1 == null);
var state_73566__$1 = (function (){var statearr_73582 = state_73566;
(statearr_73582[(9)] = inst_73557__$1);

return statearr_73582;
})();
if(cljs.core.truth_(inst_73558)){
var statearr_73583_76599 = state_73566__$1;
(statearr_73583_76599[(1)] = (28));

} else {
var statearr_73584_76601 = state_73566__$1;
(statearr_73584_76601[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (12))){
var inst_73521 = (state_73566[(2)]);
var state_73566__$1 = state_73566;
var statearr_73585_76603 = state_73566__$1;
(statearr_73585_76603[(2)] = inst_73521);

(statearr_73585_76603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (2))){
var inst_73502 = (state_73566[(7)]);
var _ = (function (){var statearr_73586 = state_73566;
(statearr_73586[(4)] = cljs.core.cons((5),(state_73566[(4)])));

return statearr_73586;
})();
var inst_73502__$1 = com.wsscode.pathom.connect.reader3_run_node(env__$1,plan,root);
var inst_73503 = com.wsscode.async.async_cljs.chan_QMARK_(inst_73502__$1);
var state_73566__$1 = (function (){var statearr_73587 = state_73566;
(statearr_73587[(7)] = inst_73502__$1);

return statearr_73587;
})();
if(inst_73503){
var statearr_73588_76607 = state_73566__$1;
(statearr_73588_76607[(1)] = (6));

} else {
var statearr_73589_76608 = state_73566__$1;
(statearr_73589_76608[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (23))){
var inst_73552 = (state_73566[(2)]);
var state_73566__$1 = state_73566;
var statearr_73590_76611 = state_73566__$1;
(statearr_73590_76611[(2)] = inst_73552);

(statearr_73590_76611[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (19))){
var inst_73554 = (state_73566[(2)]);
var _ = (function (){var statearr_73591 = state_73566;
(statearr_73591[(4)] = cljs.core.rest((state_73566[(4)])));

return statearr_73591;
})();
var state_73566__$1 = state_73566;
var statearr_73592_76614 = state_73566__$1;
(statearr_73592_76614[(2)] = inst_73554);

(statearr_73592_76614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (11))){
var state_73566__$1 = state_73566;
var statearr_73594_76617 = state_73566__$1;
(statearr_73594_76617[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (9))){
var inst_73506 = (state_73566[(2)]);
var inst_73507 = com.wsscode.async.async_cljs.throw_err(inst_73506);
var state_73566__$1 = state_73566;
var statearr_73596_76619 = state_73566__$1;
(statearr_73596_76619[(2)] = inst_73507);

(statearr_73596_76619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (5))){
var _ = (function (){var statearr_73597 = state_73566;
(statearr_73597[(4)] = cljs.core.rest((state_73566[(4)])));

return statearr_73597;
})();
var state_73566__$1 = state_73566;
var ex73593 = (state_73566__$1[(2)]);
var statearr_73598_76623 = state_73566__$1;
(statearr_73598_76623[(5)] = ex73593);


var statearr_73599_76625 = state_73566__$1;
(statearr_73599_76625[(1)] = (4));

(statearr_73599_76625[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (14))){
var inst_73502 = (state_73566[(7)]);
var state_73566__$1 = state_73566;
var statearr_73600_76627 = state_73566__$1;
(statearr_73600_76627[(2)] = inst_73502);

(statearr_73600_76627[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (26))){
var state_73566__$1 = state_73566;
var statearr_73601_76628 = state_73566__$1;
(statearr_73601_76628[(2)] = null);

(statearr_73601_76628[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (16))){
var inst_73519 = (state_73566[(2)]);
var state_73566__$1 = state_73566;
var statearr_73602_76632 = state_73566__$1;
(statearr_73602_76632[(2)] = inst_73519);

(statearr_73602_76632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (30))){
var inst_73564 = (state_73566[(2)]);
var state_73566__$1 = state_73566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73566__$1,inst_73564);
} else {
if((state_val_73567 === (10))){
var inst_73502 = (state_73566[(7)]);
var inst_73511 = com.wsscode.async.async_cljs.promise__GT_chan(inst_73502);
var state_73566__$1 = state_73566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73566__$1,(13),inst_73511);
} else {
if((state_val_73567 === (18))){
var inst_73533 = (state_73566[(8)]);
var inst_73540 = com.wsscode.async.async_cljs.promise_QMARK_(inst_73533);
var state_73566__$1 = state_73566;
if(cljs.core.truth_(inst_73540)){
var statearr_73603_76636 = state_73566__$1;
(statearr_73603_76636[(1)] = (21));

} else {
var statearr_73604_76639 = state_73566__$1;
(statearr_73604_76639[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73567 === (8))){
var inst_73533 = (state_73566[(8)]);
var inst_73523 = (state_73566[(2)]);
var inst_73524 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_73525 = cljs.core.deref(plan_STAR_);
var inst_73526 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_73527 = ["#6ac5ec"];
var inst_73528 = cljs.core.PersistentHashMap.fromArrays(inst_73526,inst_73527);
var inst_73529 = [new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935),inst_73525,inst_73528];
var inst_73530 = cljs.core.PersistentHashMap.fromArrays(inst_73524,inst_73529);
var inst_73531 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,process_start,inst_73530);
var inst_73532 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),com.wsscode.pathom.misc.sconj,path);
var inst_73533__$1 = com.wsscode.pathom.core.reader(inst_73532);
var inst_73534 = com.wsscode.async.async_cljs.chan_QMARK_(inst_73533__$1);
var state_73566__$1 = (function (){var statearr_73605 = state_73566;
(statearr_73605[(10)] = inst_73523);

(statearr_73605[(11)] = inst_73531);

(statearr_73605[(8)] = inst_73533__$1);

return statearr_73605;
})();
if(inst_73534){
var statearr_73606_76643 = state_73566__$1;
(statearr_73606_76643[(1)] = (17));

} else {
var statearr_73607_76644 = state_73566__$1;
(statearr_73607_76644[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto____0 = (function (){
var statearr_73608 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73608[(0)] = com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto__);

(statearr_73608[(1)] = (1));

return statearr_73608;
});
var com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto____1 = (function (state_73566){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_73566);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e73609){var ex__42124__auto__ = e73609;
var statearr_73610_76650 = state_73566;
(statearr_73610_76650[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_73566[(4)]))){
var statearr_73611_76653 = state_73566;
(statearr_73611_76653[(1)] = cljs.core.first((state_73566[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76656 = state_73566;
state_73566 = G__76656;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto__ = function(state_73566){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto____1.call(this,state_73566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$reader3_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_73612 = f__42153__auto__();
(statearr_73612[(6)] = c__42152__auto___76583);

return statearr_73612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
} else {
com.wsscode.pathom.connect.reader3_run_node(env__$1,plan,root);

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,process_start,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.deref(plan_STAR_),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#6ac5ec"], null)], null));

return com.wsscode.pathom.core.reader(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),com.wsscode.pathom.misc.sconj,path));
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
}
});
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__73613,e){
var map__73614 = p__73613;
var map__73614__$1 = cljs.core.__destructure_map(map__73614);
var env = map__73614__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73614__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__73615 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__73615__$1 = cljs.core.__destructure_map(map__73615);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73615__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__73616_76706 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__73621_76707 = null;
var count__73622_76708 = (0);
var i__73623_76709 = (0);
while(true){
if((i__73623_76709 < count__73622_76708)){
var o_76710 = chunk__73621_76707.cljs$core$IIndexed$_nth$arity$2(null,i__73623_76709);
var seq__73624_76711 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__73625_76712 = null;
var count__73626_76713 = (0);
var i__73627_76714 = (0);
while(true){
if((i__73627_76714 < count__73626_76713)){
var i_76715 = chunk__73625_76712.cljs$core$IIndexed$_nth$arity$2(null,i__73627_76714);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_76715,o_76710)),e);


var G__76716 = seq__73624_76711;
var G__76717 = chunk__73625_76712;
var G__76718 = count__73626_76713;
var G__76719 = (i__73627_76714 + (1));
seq__73624_76711 = G__76716;
chunk__73625_76712 = G__76717;
count__73626_76713 = G__76718;
i__73627_76714 = G__76719;
continue;
} else {
var temp__5804__auto___76720 = cljs.core.seq(seq__73624_76711);
if(temp__5804__auto___76720){
var seq__73624_76721__$1 = temp__5804__auto___76720;
if(cljs.core.chunked_seq_QMARK_(seq__73624_76721__$1)){
var c__5568__auto___76722 = cljs.core.chunk_first(seq__73624_76721__$1);
var G__76723 = cljs.core.chunk_rest(seq__73624_76721__$1);
var G__76724 = c__5568__auto___76722;
var G__76725 = cljs.core.count(c__5568__auto___76722);
var G__76726 = (0);
seq__73624_76711 = G__76723;
chunk__73625_76712 = G__76724;
count__73626_76713 = G__76725;
i__73627_76714 = G__76726;
continue;
} else {
var i_76727 = cljs.core.first(seq__73624_76721__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_76727,o_76710)),e);


var G__76728 = cljs.core.next(seq__73624_76721__$1);
var G__76729 = null;
var G__76730 = (0);
var G__76731 = (0);
seq__73624_76711 = G__76728;
chunk__73625_76712 = G__76729;
count__73626_76713 = G__76730;
i__73627_76714 = G__76731;
continue;
}
} else {
}
}
break;
}

var G__76732 = seq__73616_76706;
var G__76733 = chunk__73621_76707;
var G__76734 = count__73622_76708;
var G__76735 = (i__73623_76709 + (1));
seq__73616_76706 = G__76732;
chunk__73621_76707 = G__76733;
count__73622_76708 = G__76734;
i__73623_76709 = G__76735;
continue;
} else {
var temp__5804__auto___76736 = cljs.core.seq(seq__73616_76706);
if(temp__5804__auto___76736){
var seq__73616_76737__$1 = temp__5804__auto___76736;
if(cljs.core.chunked_seq_QMARK_(seq__73616_76737__$1)){
var c__5568__auto___76738 = cljs.core.chunk_first(seq__73616_76737__$1);
var G__76739 = cljs.core.chunk_rest(seq__73616_76737__$1);
var G__76740 = c__5568__auto___76738;
var G__76741 = cljs.core.count(c__5568__auto___76738);
var G__76742 = (0);
seq__73616_76706 = G__76739;
chunk__73621_76707 = G__76740;
count__73622_76708 = G__76741;
i__73623_76709 = G__76742;
continue;
} else {
var o_76743 = cljs.core.first(seq__73616_76737__$1);
var seq__73617_76744 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__73618_76745 = null;
var count__73619_76746 = (0);
var i__73620_76747 = (0);
while(true){
if((i__73620_76747 < count__73619_76746)){
var i_76748 = chunk__73618_76745.cljs$core$IIndexed$_nth$arity$2(null,i__73620_76747);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_76748,o_76743)),e);


var G__76749 = seq__73617_76744;
var G__76750 = chunk__73618_76745;
var G__76751 = count__73619_76746;
var G__76752 = (i__73620_76747 + (1));
seq__73617_76744 = G__76749;
chunk__73618_76745 = G__76750;
count__73619_76746 = G__76751;
i__73620_76747 = G__76752;
continue;
} else {
var temp__5804__auto___76753__$1 = cljs.core.seq(seq__73617_76744);
if(temp__5804__auto___76753__$1){
var seq__73617_76754__$1 = temp__5804__auto___76753__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73617_76754__$1)){
var c__5568__auto___76755 = cljs.core.chunk_first(seq__73617_76754__$1);
var G__76756 = cljs.core.chunk_rest(seq__73617_76754__$1);
var G__76757 = c__5568__auto___76755;
var G__76758 = cljs.core.count(c__5568__auto___76755);
var G__76759 = (0);
seq__73617_76744 = G__76756;
chunk__73618_76745 = G__76757;
count__73619_76746 = G__76758;
i__73620_76747 = G__76759;
continue;
} else {
var i_76760 = cljs.core.first(seq__73617_76754__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_76760,o_76743)),e);


var G__76761 = cljs.core.next(seq__73617_76754__$1);
var G__76762 = null;
var G__76763 = (0);
var G__76764 = (0);
seq__73617_76744 = G__76761;
chunk__73618_76745 = G__76762;
count__73619_76746 = G__76763;
i__73620_76747 = G__76764;
continue;
}
} else {
}
}
break;
}

var G__76765 = cljs.core.next(seq__73616_76737__$1);
var G__76766 = null;
var G__76767 = (0);
var G__76768 = (0);
seq__73616_76706 = G__76765;
chunk__73621_76707 = G__76766;
count__73622_76708 = G__76767;
i__73623_76709 = G__76768;
continue;
}
} else {
}
}
break;
}

return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(item_count,cljs.core.zipmap(output_SINGLEQUOTE_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))));
});
com.wsscode.pathom.connect.group_input_indexes = (function com$wsscode$pathom$connect$group_input_indexes(inputs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__73628){
var vec__73629 = p__73628;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73629,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73629,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.entity_path_outer_reduce_fn = (function com$wsscode$pathom$connect$entity_path_outer_reduce_fn(path,items_map){
return (function com$wsscode$pathom$connect$entity_path_outer_reduce_fn_$_entity_path_outer_reduce(cache,p__73633){
var vec__73634 = p__73633;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73634,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73634,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$wsscode$pathom$connect$entity_path_outer_reduce_fn_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$1,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,index),(function (p1__73632_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__73632_SHARP_], 0));
}));
}),cache,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__73640){
var map__73641 = p__73640;
var map__73641__$1 = cljs.core.__destructure_map(map__73641);
var env = map__73641__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73641__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73641__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73641__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___76769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_74073){
var state_val_74074 = (state_74073[(1)]);
if((state_val_74074 === (121))){
var inst_74067 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_74073__$1 = state_74073;
var statearr_74075_76770 = state_74073__$1;
(statearr_74075_76770[(2)] = inst_74067);

(statearr_74075_76770[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (65))){
var inst_73651 = (state_74073[(7)]);
var inst_73654 = (state_74073[(8)]);
var inst_73657 = (state_74073[(9)]);
var inst_73869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73870 = [inst_73651,inst_73654,inst_73657];
var inst_73871 = (new cljs.core.PersistentVector(null,3,(5),inst_73869,inst_73870,null));
var inst_73872 = com.wsscode.pathom.core.cache_read(env,inst_73871);
var state_74073__$1 = state_74073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(68),inst_73872);
} else {
if((state_val_74074 === (70))){
var state_74073__$1 = state_74073;
var statearr_74076_76773 = state_74073__$1;
(statearr_74076_76773[(2)] = null);

(statearr_74076_76773[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (62))){
var inst_73746 = (state_74073[(10)]);
var inst_73654 = (state_74073[(8)]);
var inst_73851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73852 = cljs.core.PersistentHashMap.EMPTY;
var inst_73853 = [null,inst_73852];
var inst_73854 = (new cljs.core.PersistentVector(null,2,(5),inst_73851,inst_73853,null));
var inst_73855 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_73746,inst_73654,inst_73854);
var inst_73856 = cljs.core.second(inst_73855);
var state_74073__$1 = state_74073;
var statearr_74077_76774 = state_74073__$1;
(statearr_74077_76774[(2)] = inst_73856);

(statearr_74077_76774[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (74))){
var inst_73935 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74078_76776 = state_74073__$1;
(statearr_74078_76776[(2)] = inst_73935);

(statearr_74078_76776[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (110))){
var inst_74033 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74079_76786 = state_74073__$1;
(statearr_74079_76786[(2)] = inst_74033);

(statearr_74079_76786[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (7))){
var inst_73651 = (state_74073[(7)]);
var inst_73654 = (state_74073[(8)]);
var inst_73657 = (state_74073[(9)]);
var inst_73864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73865 = [inst_73651,inst_73654,inst_73657];
var inst_73866 = (new cljs.core.PersistentVector(null,3,(5),inst_73864,inst_73865,null));
var inst_73867 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_73866);
var state_74073__$1 = state_74073;
if(inst_73867){
var statearr_74080_76787 = state_74073__$1;
(statearr_74080_76787[(1)] = (65));

} else {
var statearr_74081_76788 = state_74073__$1;
(statearr_74081_76788[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (59))){
var inst_73823 = cljs.core.PersistentHashMap.EMPTY;
var state_74073__$1 = state_74073;
var statearr_74083_76789 = state_74073__$1;
(statearr_74083_76789[(2)] = inst_73823);

(statearr_74083_76789[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (86))){
var state_74073__$1 = state_74073;
var statearr_74084_76790 = state_74073__$1;
(statearr_74084_76790[(2)] = null);

(statearr_74084_76790[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (20))){
var _ = (function (){var statearr_74085 = state_74073;
(statearr_74085[(4)] = cljs.core.rest((state_74073[(4)])));

return statearr_74085;
})();
var state_74073__$1 = state_74073;
var ex74082 = (state_74073__$1[(2)]);
var statearr_74086_76791 = state_74073__$1;
(statearr_74086_76791[(5)] = ex74082);


var statearr_74087_76793 = state_74073__$1;
(statearr_74087_76793[(1)] = (19));

(statearr_74087_76793[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (72))){
var inst_73938 = (state_74073[(11)]);
var inst_73900 = (state_74073[(12)]);
var inst_73894 = (state_74073[(13)]);
var inst_73893 = (state_74073[(14)]);
var inst_73948 = (state_74073[(15)]);
var inst_73938__$1 = (state_74073[(2)]);
var inst_73939 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_73940 = cljs.core.count(inst_73938__$1);
var inst_73941 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_73940];
var inst_73942 = cljs.core.PersistentHashMap.fromArrays(inst_73939,inst_73941);
var inst_73943 = com.wsscode.pathom.trace.trace(env,inst_73942);
var inst_73944 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_73900,inst_73938__$1);
var inst_73945 = cljs.core.zipmap(inst_73894,inst_73944);
var inst_73946 = cljs.core.set(inst_73893);
var inst_73947 = cljs.core.first(inst_73938__$1);
var inst_73948__$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_73947);
var state_74073__$1 = (function (){var statearr_74088 = state_74073;
(statearr_74088[(11)] = inst_73938__$1);

(statearr_74088[(16)] = inst_73943);

(statearr_74088[(17)] = inst_73945);

(statearr_74088[(18)] = inst_73946);

(statearr_74088[(15)] = inst_73948__$1);

return statearr_74088;
})();
if(inst_73948__$1){
var statearr_74089_76807 = state_74073__$1;
(statearr_74089_76807[(1)] = (88));

} else {
var statearr_74090_76808 = state_74073__$1;
(statearr_74090_76808[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (58))){
var inst_73819 = (state_74073[(19)]);
var state_74073__$1 = state_74073;
var statearr_74091_76809 = state_74073__$1;
(statearr_74091_76809[(2)] = inst_73819);

(statearr_74091_76809[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (60))){
var inst_73818 = (state_74073[(20)]);
var inst_73825 = (state_74073[(2)]);
var inst_73826 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_73818,inst_73825);
var state_74073__$1 = state_74073;
var statearr_74092_76810 = state_74073__$1;
(statearr_74092_76810[(2)] = inst_73826);

(statearr_74092_76810[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (27))){
var inst_73730 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74093_76811 = state_74073__$1;
(statearr_74093_76811[(2)] = inst_73730);

(statearr_74093_76811[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (1))){
var state_74073__$1 = state_74073;
var statearr_74097_76813 = state_74073__$1;
(statearr_74097_76813[(2)] = null);

(statearr_74097_76813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (69))){
var inst_73877 = (state_74073[(21)]);
var inst_73881 = (state_74073[(22)]);
var inst_73887 = (state_74073[(23)]);
var inst_73652 = (state_74073[(24)]);
var inst_73888 = (state_74073[(25)]);
var inst_73650 = (state_74073[(26)]);
var inst_73656 = (state_74073[(27)]);
var inst_73657 = (state_74073[(9)]);
var inst_73654 = (state_74073[(8)]);
var inst_73651 = (state_74073[(7)]);
var inst_73660 = (state_74073[(28)]);
var inst_73892 = (state_74073[(29)]);
var inst_73894 = (state_74073[(13)]);
var inst_73893 = (state_74073[(14)]);
var inst_73885 = (state_74073[(2)]);
var inst_73886 = com.wsscode.async.async_cljs.throw_err(inst_73885);
var inst_73887__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_73877,inst_73881,inst_73886);
var inst_73888__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_73887__$1);
var inst_73889 = (function (){var input = inst_73652;
var items_map = inst_73888__$1;
var map__73648 = inst_73650;
var key = inst_73656;
var params = inst_73657;
var e = inst_73654;
var resolver_sym = inst_73651;
var trace_data = inst_73660;
var valid_inputs = inst_73887__$1;
return (function (p1__73639_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__73639_SHARP_,params], null));
});
})();
var inst_73890 = cljs.core.keys(inst_73888__$1);
var inst_73891 = cljs.core.group_by(inst_73889,inst_73890);
var inst_73892__$1 = cljs.core.__destructure_map(inst_73891);
var inst_73893__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73892__$1,true);
var inst_73894__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73892__$1,false);
var inst_73895 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_73896 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_73894__$1];
var inst_73897 = cljs.core.PersistentHashMap.fromArrays(inst_73895,inst_73896);
var inst_73898 = com.wsscode.pathom.trace.trace(env,inst_73897);
var inst_73899 = (function (){var input = inst_73652;
var items_map = inst_73888__$1;
var map__73648 = inst_73650;
var cached = inst_73893__$1;
var key = inst_73656;
var _ = inst_73898;
var params = inst_73657;
var uncached = inst_73894__$1;
var e = inst_73654;
var resolver_sym = inst_73651;
var trace_data = inst_73660;
var valid_inputs = inst_73887__$1;
var map__73876 = inst_73892__$1;
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
})();
var inst_73900 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_73899,inst_73894__$1);
var inst_73901 = cljs.core.seq(inst_73894__$1);
var state_74073__$1 = (function (){var statearr_74098 = state_74073;
(statearr_74098[(23)] = inst_73887__$1);

(statearr_74098[(25)] = inst_73888__$1);

(statearr_74098[(29)] = inst_73892__$1);

(statearr_74098[(14)] = inst_73893__$1);

(statearr_74098[(13)] = inst_73894__$1);

(statearr_74098[(12)] = inst_73900);

return statearr_74098;
})();
if(inst_73901){
var statearr_74099_76834 = state_74073__$1;
(statearr_74099_76834[(1)] = (70));

} else {
var statearr_74100_76835 = state_74073__$1;
(statearr_74100_76835[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (101))){
var inst_73969 = (state_74073[(30)]);
var inst_73966 = (state_74073[(31)]);
var inst_73967 = (state_74073[(32)]);
var inst_73968 = (state_74073[(33)]);
var inst_73995 = (state_74073[(2)]);
var inst_73996 = (inst_73969 + (1));
var tmp74094 = inst_73966;
var tmp74095 = inst_73967;
var tmp74096 = inst_73968;
var inst_73966__$1 = tmp74094;
var inst_73967__$1 = tmp74095;
var inst_73968__$1 = tmp74096;
var inst_73969__$1 = inst_73996;
var state_74073__$1 = (function (){var statearr_74101 = state_74073;
(statearr_74101[(34)] = inst_73995);

(statearr_74101[(31)] = inst_73966__$1);

(statearr_74101[(32)] = inst_73967__$1);

(statearr_74101[(33)] = inst_73968__$1);

(statearr_74101[(30)] = inst_73969__$1);

return statearr_74101;
})();
var statearr_74102_76836 = state_74073__$1;
(statearr_74102_76836[(2)] = null);

(statearr_74102_76836[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (24))){
var inst_73715 = (state_74073[(2)]);
var inst_73716 = com.wsscode.async.async_cljs.throw_err(inst_73715);
var state_74073__$1 = state_74073;
var statearr_74103_76837 = state_74073__$1;
(statearr_74103_76837[(2)] = inst_73716);

(statearr_74103_76837[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (102))){
var inst_73984 = (state_74073[(35)]);
var state_74073__$1 = state_74073;
var statearr_74104_76838 = state_74073__$1;
(statearr_74104_76838[(2)] = inst_73984);

(statearr_74104_76838[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (55))){
var inst_73819 = (state_74073[(19)]);
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_73819)){
var statearr_74105_76839 = state_74073__$1;
(statearr_74105_76839[(1)] = (58));

} else {
var statearr_74106_76840 = state_74073__$1;
(statearr_74106_76840[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (85))){
var inst_73910 = (state_74073[(36)]);
var state_74073__$1 = state_74073;
var statearr_74107_76841 = state_74073__$1;
(statearr_74107_76841[(2)] = inst_73910);

(statearr_74107_76841[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (39))){
var inst_73747 = (state_74073[(37)]);
var inst_73654 = (state_74073[(8)]);
var inst_73841 = (state_74073[(2)]);
var inst_73842 = cljs.core.contains_QMARK_(inst_73747,inst_73654);
var state_74073__$1 = (function (){var statearr_74108 = state_74073;
(statearr_74108[(38)] = inst_73841);

return statearr_74108;
})();
if(inst_73842){
var statearr_74109_76842 = state_74073__$1;
(statearr_74109_76842[(1)] = (61));

} else {
var statearr_74110_76843 = state_74073__$1;
(statearr_74110_76843[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (88))){
var inst_73950 = cljs.core.count(path);
var inst_73951 = (inst_73950 >= (2));
var state_74073__$1 = state_74073;
var statearr_74111_76844 = state_74073__$1;
(statearr_74111_76844[(2)] = inst_73951);

(statearr_74111_76844[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (46))){
var inst_73785 = (state_74073[(39)]);
var state_74073__$1 = state_74073;
var statearr_74112_76845 = state_74073__$1;
(statearr_74112_76845[(2)] = inst_73785);

(statearr_74112_76845[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (4))){
var inst_73642 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74113_76846 = state_74073__$1;
(statearr_74113_76846[(2)] = inst_73642);

(statearr_74113_76846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (77))){
var inst_73910 = (state_74073[(36)]);
var state_74073__$1 = state_74073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(80),inst_73910);
} else {
if((state_val_74074 === (106))){
var state_74073__$1 = state_74073;
var statearr_74114_76847 = state_74073__$1;
(statearr_74114_76847[(2)] = null);

(statearr_74114_76847[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (119))){
var inst_74057 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74115_76848 = state_74073__$1;
(statearr_74115_76848[(2)] = inst_74057);

(statearr_74115_76848[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (95))){
var inst_73946 = (state_74073[(18)]);
var inst_73654 = (state_74073[(8)]);
var inst_74040 = (state_74073[(2)]);
var inst_74041 = cljs.core.contains_QMARK_(inst_73946,inst_73654);
var state_74073__$1 = (function (){var statearr_74116 = state_74073;
(statearr_74116[(40)] = inst_74040);

return statearr_74116;
})();
if(inst_74041){
var statearr_74117_76849 = state_74073__$1;
(statearr_74117_76849[(1)] = (117));

} else {
var statearr_74118_76850 = state_74073__$1;
(statearr_74118_76850[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (54))){
var inst_73834 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74119_76851 = state_74073__$1;
(statearr_74119_76851[(2)] = inst_73834);

(statearr_74119_76851[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (92))){
var state_74073__$1 = state_74073;
var statearr_74120_76852 = state_74073__$1;
(statearr_74120_76852[(2)] = null);

(statearr_74120_76852[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (104))){
var inst_73983 = (state_74073[(41)]);
var inst_73990 = (state_74073[(2)]);
var inst_73991 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_73983,inst_73990);
var state_74073__$1 = state_74073;
var statearr_74121_76853 = state_74073__$1;
(statearr_74121_76853[(2)] = inst_73991);

(statearr_74121_76853[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (15))){
var state_74073__$1 = state_74073;
var statearr_74122_76854 = state_74073__$1;
(statearr_74122_76854[(2)] = null);

(statearr_74122_76854[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (48))){
var inst_73784 = (state_74073[(42)]);
var inst_73791 = (state_74073[(2)]);
var inst_73792 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_73784,inst_73791);
var state_74073__$1 = state_74073;
var statearr_74123_76855 = state_74073__$1;
(statearr_74123_76855[(2)] = inst_73792);

(statearr_74123_76855[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (50))){
var state_74073__$1 = state_74073;
var statearr_74124_76857 = state_74073__$1;
(statearr_74124_76857[(2)] = null);

(statearr_74124_76857[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (116))){
var inst_74017 = (state_74073[(43)]);
var inst_74024 = (state_74073[(2)]);
var inst_74025 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_74017,inst_74024);
var state_74073__$1 = state_74073;
var statearr_74125_76860 = state_74073__$1;
(statearr_74125_76860[(2)] = inst_74025);

(statearr_74125_76860[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (75))){
var inst_73903 = (state_74073[(2)]);
var inst_73904 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_73903);
var state_74073__$1 = state_74073;
var statearr_74126_76862 = state_74073__$1;
(statearr_74126_76862[(2)] = inst_73904);

(statearr_74126_76862[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (99))){
var inst_73984 = (state_74073[(35)]);
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_73984)){
var statearr_74127_76863 = state_74073__$1;
(statearr_74127_76863[(1)] = (102));

} else {
var statearr_74128_76864 = state_74073__$1;
(statearr_74128_76864[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (21))){
var inst_73711 = (state_74073[(44)]);
var state_74073__$1 = state_74073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(24),inst_73711);
} else {
if((state_val_74074 === (31))){
var inst_73728 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74129_76865 = state_74073__$1;
(statearr_74129_76865[(2)] = inst_73728);

(statearr_74129_76865[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (113))){
var inst_73999 = (state_74073[(45)]);
var inst_74029 = (state_74073[(2)]);
var inst_74030 = cljs.core.next(inst_73999);
var inst_73966 = inst_74030;
var inst_73967 = null;
var inst_73968 = (0);
var inst_73969 = (0);
var state_74073__$1 = (function (){var statearr_74130 = state_74073;
(statearr_74130[(46)] = inst_74029);

(statearr_74130[(31)] = inst_73966);

(statearr_74130[(32)] = inst_73967);

(statearr_74130[(33)] = inst_73968);

(statearr_74130[(30)] = inst_73969);

return statearr_74130;
})();
var statearr_74131_76872 = state_74073__$1;
(statearr_74131_76872[(2)] = null);

(statearr_74131_76872[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (32))){
var inst_73751 = cljs.core.count(path);
var inst_73752 = (inst_73751 >= (2));
var state_74073__$1 = state_74073;
var statearr_74132_76874 = state_74073__$1;
(statearr_74132_76874[(2)] = inst_73752);

(statearr_74132_76874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (40))){
var inst_73768 = (state_74073[(47)]);
var inst_73770 = (state_74073[(48)]);
var inst_73785 = (state_74073[(39)]);
var inst_73781 = cljs.core._nth(inst_73768,inst_73770);
var inst_73782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73781,(0),null);
var inst_73783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73781,(1),null);
var inst_73784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73783,(0),null);
var inst_73785__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73783,(1),null);
var state_74073__$1 = (function (){var statearr_74133 = state_74073;
(statearr_74133[(49)] = inst_73782);

(statearr_74133[(42)] = inst_73784);

(statearr_74133[(39)] = inst_73785__$1);

return statearr_74133;
})();
if(cljs.core.truth_(inst_73785__$1)){
var statearr_74134_76880 = state_74073__$1;
(statearr_74134_76880[(1)] = (43));

} else {
var statearr_74135_76881 = state_74073__$1;
(statearr_74135_76881[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (91))){
var inst_73652 = (state_74073[(24)]);
var inst_73888 = (state_74073[(25)]);
var inst_73650 = (state_74073[(26)]);
var inst_73893 = (state_74073[(14)]);
var inst_73946 = (state_74073[(18)]);
var inst_73945 = (state_74073[(17)]);
var inst_73656 = (state_74073[(27)]);
var inst_73900 = (state_74073[(12)]);
var inst_73943 = (state_74073[(16)]);
var inst_73657 = (state_74073[(9)]);
var inst_73894 = (state_74073[(13)]);
var inst_73654 = (state_74073[(8)]);
var inst_73651 = (state_74073[(7)]);
var inst_73660 = (state_74073[(28)]);
var inst_73887 = (state_74073[(23)]);
var inst_73938 = (state_74073[(11)]);
var inst_73892 = (state_74073[(29)]);
var inst_73956 = (function (){var input = inst_73652;
var items_map = inst_73888;
var map__73648 = inst_73650;
var cached = inst_73893;
var cached_set = inst_73946;
var linked_results = inst_73945;
var key = inst_73656;
var channels = inst_73900;
var _ = inst_73943;
var params = inst_73657;
var uncached = inst_73894;
var e = inst_73654;
var resolver_sym = inst_73651;
var trace_data = inst_73660;
var valid_inputs = inst_73887;
var batch_result = inst_73938;
var map__73876 = inst_73892;
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.entity_path_outer_reduce_fn(path__$1,items_map),cache,cljs.core.zipmap(uncached,batch_result));
});
})();
var inst_73957 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_73956);
var state_74073__$1 = state_74073;
var statearr_74136_76885 = state_74073__$1;
(statearr_74136_76885[(2)] = inst_73957);

(statearr_74136_76885[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (117))){
var inst_73651 = (state_74073[(7)]);
var inst_73654 = (state_74073[(8)]);
var inst_73657 = (state_74073[(9)]);
var inst_74043 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74044 = [inst_73651,inst_73654,inst_73657];
var inst_74045 = (new cljs.core.PersistentVector(null,3,(5),inst_74043,inst_74044,null));
var inst_74046 = com.wsscode.pathom.core.cache_read(env,inst_74045);
var state_74073__$1 = state_74073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(120),inst_74046);
} else {
if((state_val_74074 === (108))){
var inst_73999 = (state_74073[(45)]);
var inst_74003 = cljs.core.chunk_first(inst_73999);
var inst_74004 = cljs.core.chunk_rest(inst_73999);
var inst_74005 = cljs.core.count(inst_74003);
var inst_73966 = inst_74004;
var inst_73967 = inst_74003;
var inst_73968 = inst_74005;
var inst_73969 = (0);
var state_74073__$1 = (function (){var statearr_74137 = state_74073;
(statearr_74137[(31)] = inst_73966);

(statearr_74137[(32)] = inst_73967);

(statearr_74137[(33)] = inst_73968);

(statearr_74137[(30)] = inst_73969);

return statearr_74137;
})();
var statearr_74138_76890 = state_74073__$1;
(statearr_74138_76890[(2)] = null);

(statearr_74138_76890[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (56))){
var inst_73818 = (state_74073[(20)]);
var inst_73828 = cljs.core.async.close_BANG_(inst_73818);
var state_74073__$1 = state_74073;
var statearr_74139_76891 = state_74073__$1;
(statearr_74139_76891[(2)] = inst_73828);

(statearr_74139_76891[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (33))){
var inst_73749 = (state_74073[(50)]);
var state_74073__$1 = state_74073;
var statearr_74140_76892 = state_74073__$1;
(statearr_74140_76892[(2)] = inst_73749);

(statearr_74140_76892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (13))){
var inst_73678 = (state_74073[(51)]);
var inst_73682 = (state_74073[(52)]);
var inst_73688 = (state_74073[(53)]);
var inst_73652 = (state_74073[(24)]);
var inst_73689 = (state_74073[(54)]);
var inst_73650 = (state_74073[(26)]);
var inst_73656 = (state_74073[(27)]);
var inst_73657 = (state_74073[(9)]);
var inst_73654 = (state_74073[(8)]);
var inst_73651 = (state_74073[(7)]);
var inst_73660 = (state_74073[(28)]);
var inst_73664 = (state_74073[(55)]);
var inst_73693 = (state_74073[(56)]);
var inst_73695 = (state_74073[(57)]);
var inst_73694 = (state_74073[(58)]);
var inst_73686 = (state_74073[(2)]);
var inst_73687 = com.wsscode.async.async_cljs.throw_err(inst_73686);
var inst_73688__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_73678,inst_73682,inst_73687);
var inst_73689__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_73688__$1);
var inst_73690 = (function (){var input = inst_73652;
var items_map = inst_73689__$1;
var map__73648 = inst_73650;
var key = inst_73656;
var params = inst_73657;
var e = inst_73654;
var resolver_sym = inst_73651;
var trace_data = inst_73660;
var valid_inputs = inst_73688__$1;
var trace_id__54379__auto__ = inst_73664;
return (function (p1__73639_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__73639_SHARP_,params], null));
});
})();
var inst_73691 = cljs.core.keys(inst_73689__$1);
var inst_73692 = cljs.core.group_by(inst_73690,inst_73691);
var inst_73693__$1 = cljs.core.__destructure_map(inst_73692);
var inst_73694__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73693__$1,true);
var inst_73695__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73693__$1,false);
var inst_73696 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_73697 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_73695__$1];
var inst_73698 = cljs.core.PersistentHashMap.fromArrays(inst_73696,inst_73697);
var inst_73699 = com.wsscode.pathom.trace.trace(env,inst_73698);
var inst_73700 = (function (){var input = inst_73652;
var items_map = inst_73689__$1;
var map__73677 = inst_73693__$1;
var map__73648 = inst_73650;
var cached = inst_73694__$1;
var key = inst_73656;
var _ = inst_73699;
var params = inst_73657;
var uncached = inst_73695__$1;
var e = inst_73654;
var resolver_sym = inst_73651;
var trace_data = inst_73660;
var valid_inputs = inst_73688__$1;
var trace_id__54379__auto__ = inst_73664;
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
})();
var inst_73701 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_73700,inst_73695__$1);
var inst_73702 = cljs.core.seq(inst_73695__$1);
var state_74073__$1 = (function (){var statearr_74141 = state_74073;
(statearr_74141[(53)] = inst_73688__$1);

(statearr_74141[(54)] = inst_73689__$1);

(statearr_74141[(56)] = inst_73693__$1);

(statearr_74141[(58)] = inst_73694__$1);

(statearr_74141[(57)] = inst_73695__$1);

(statearr_74141[(59)] = inst_73701);

return statearr_74141;
})();
if(inst_73702){
var statearr_74142_76934 = state_74073__$1;
(statearr_74142_76934[(1)] = (14));

} else {
var statearr_74143_76935 = state_74073__$1;
(statearr_74143_76935[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (22))){
var inst_73711 = (state_74073[(44)]);
var inst_73718 = com.wsscode.async.async_cljs.promise_QMARK_(inst_73711);
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_73718)){
var statearr_74144_76936 = state_74073__$1;
(statearr_74144_76936[(1)] = (25));

} else {
var statearr_74145_76937 = state_74073__$1;
(statearr_74145_76937[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (90))){
var inst_73954 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_73954)){
var statearr_74146_76938 = state_74073__$1;
(statearr_74146_76938[(1)] = (91));

} else {
var statearr_74147_76939 = state_74073__$1;
(statearr_74147_76939[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (109))){
var inst_73999 = (state_74073[(45)]);
var inst_74018 = (state_74073[(60)]);
var inst_74014 = cljs.core.first(inst_73999);
var inst_74015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74014,(0),null);
var inst_74016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74014,(1),null);
var inst_74017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74016,(0),null);
var inst_74018__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74016,(1),null);
var state_74073__$1 = (function (){var statearr_74148 = state_74073;
(statearr_74148[(61)] = inst_74015);

(statearr_74148[(43)] = inst_74017);

(statearr_74148[(60)] = inst_74018__$1);

return statearr_74148;
})();
if(cljs.core.truth_(inst_74018__$1)){
var statearr_74149_76940 = state_74073__$1;
(statearr_74149_76940[(1)] = (111));

} else {
var statearr_74150_76941 = state_74073__$1;
(statearr_74150_76941[(1)] = (112));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (36))){
var state_74073__$1 = state_74073;
var statearr_74151_76942 = state_74073__$1;
(statearr_74151_76942[(2)] = null);

(statearr_74151_76942[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (41))){
var inst_73767 = (state_74073[(62)]);
var inst_73800 = (state_74073[(63)]);
var inst_73800__$1 = cljs.core.seq(inst_73767);
var state_74073__$1 = (function (){var statearr_74152 = state_74073;
(statearr_74152[(63)] = inst_73800__$1);

return statearr_74152;
})();
if(inst_73800__$1){
var statearr_74153_76943 = state_74073__$1;
(statearr_74153_76943[(1)] = (49));

} else {
var statearr_74154_76944 = state_74073__$1;
(statearr_74154_76944[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (118))){
var inst_73945 = (state_74073[(17)]);
var inst_73654 = (state_74073[(8)]);
var inst_74050 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74051 = cljs.core.PersistentHashMap.EMPTY;
var inst_74052 = [null,inst_74051];
var inst_74053 = (new cljs.core.PersistentVector(null,2,(5),inst_74050,inst_74052,null));
var inst_74054 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_73945,inst_73654,inst_74053);
var inst_74055 = cljs.core.second(inst_74054);
var state_74073__$1 = state_74073;
var statearr_74155_76945 = state_74073__$1;
(statearr_74155_76945[(2)] = inst_74055);

(statearr_74155_76945[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (89))){
var inst_73948 = (state_74073[(15)]);
var state_74073__$1 = state_74073;
var statearr_74156_76946 = state_74073__$1;
(statearr_74156_76946[(2)] = inst_73948);

(statearr_74156_76946[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (100))){
var inst_73983 = (state_74073[(41)]);
var inst_73993 = cljs.core.async.close_BANG_(inst_73983);
var state_74073__$1 = state_74073;
var statearr_74157_76947 = state_74073__$1;
(statearr_74157_76947[(2)] = inst_73993);

(statearr_74157_76947[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (122))){
var inst_74064 = (state_74073[(64)]);
var inst_74069 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_74064);
var state_74073__$1 = state_74073;
var statearr_74158_76948 = state_74073__$1;
(statearr_74158_76948[(2)] = inst_74069);

(statearr_74158_76948[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (43))){
var inst_73785 = (state_74073[(39)]);
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_73785)){
var statearr_74159_76949 = state_74073__$1;
(statearr_74159_76949[(1)] = (46));

} else {
var statearr_74160_76950 = state_74073__$1;
(statearr_74160_76950[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (61))){
var inst_73651 = (state_74073[(7)]);
var inst_73654 = (state_74073[(8)]);
var inst_73657 = (state_74073[(9)]);
var inst_73844 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73845 = [inst_73651,inst_73654,inst_73657];
var inst_73846 = (new cljs.core.PersistentVector(null,3,(5),inst_73844,inst_73845,null));
var inst_73847 = com.wsscode.pathom.core.cache_read(env,inst_73846);
var state_74073__$1 = state_74073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(64),inst_73847);
} else {
if((state_val_74074 === (29))){
var inst_73711 = (state_74073[(44)]);
var state_74073__$1 = state_74073;
var statearr_74161_76955 = state_74073__$1;
(statearr_74161_76955[(2)] = inst_73711);

(statearr_74161_76955[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (44))){
var inst_73784 = (state_74073[(42)]);
var inst_73794 = cljs.core.async.close_BANG_(inst_73784);
var state_74073__$1 = state_74073;
var statearr_74162_76957 = state_74073__$1;
(statearr_74162_76957[(2)] = inst_73794);

(statearr_74162_76957[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (93))){
var inst_73945 = (state_74073[(17)]);
var inst_73960 = (state_74073[(2)]);
var inst_73965 = cljs.core.seq(inst_73945);
var inst_73966 = inst_73965;
var inst_73967 = null;
var inst_73968 = (0);
var inst_73969 = (0);
var state_74073__$1 = (function (){var statearr_74163 = state_74073;
(statearr_74163[(65)] = inst_73960);

(statearr_74163[(31)] = inst_73966);

(statearr_74163[(32)] = inst_73967);

(statearr_74163[(33)] = inst_73968);

(statearr_74163[(30)] = inst_73969);

return statearr_74163;
})();
var statearr_74164_76958 = state_74073__$1;
(statearr_74164_76958[(2)] = null);

(statearr_74164_76958[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (6))){
var inst_73660 = (state_74073[(28)]);
var inst_73651 = (state_74073[(7)]);
var inst_73654 = (state_74073[(8)]);
var inst_73657 = (state_74073[(9)]);
var inst_73663 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_73660,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_73664 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_73663);
var inst_73665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73666 = [inst_73651,inst_73654,inst_73657];
var inst_73667 = (new cljs.core.PersistentVector(null,3,(5),inst_73665,inst_73666,null));
var inst_73668 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_73667);
var state_74073__$1 = (function (){var statearr_74165 = state_74073;
(statearr_74165[(55)] = inst_73664);

return statearr_74165;
})();
if(inst_73668){
var statearr_74166_76959 = state_74073__$1;
(statearr_74166_76959[(1)] = (9));

} else {
var statearr_74167_76960 = state_74073__$1;
(statearr_74167_76960[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (111))){
var inst_74018 = (state_74073[(60)]);
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_74018)){
var statearr_74168_76961 = state_74073__$1;
(statearr_74168_76961[(1)] = (114));

} else {
var statearr_74169_76962 = state_74073__$1;
(statearr_74169_76962[(1)] = (115));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (28))){
var inst_73722 = (state_74073[(2)]);
var inst_73723 = com.wsscode.async.async_cljs.consumer_pair(inst_73722);
var state_74073__$1 = state_74073;
var statearr_74170_76963 = state_74073__$1;
(statearr_74170_76963[(2)] = inst_73723);

(statearr_74170_76963[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (64))){
var inst_73849 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74171_76964 = state_74073__$1;
(statearr_74171_76964[(2)] = inst_73849);

(statearr_74171_76964[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (103))){
var inst_73988 = cljs.core.PersistentHashMap.EMPTY;
var state_74073__$1 = state_74073;
var statearr_74172_76965 = state_74073__$1;
(statearr_74172_76965[(2)] = inst_73988);

(statearr_74172_76965[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (51))){
var inst_73837 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74173_76968 = state_74073__$1;
(statearr_74173_76968[(2)] = inst_73837);

(statearr_74173_76968[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (25))){
var inst_73711 = (state_74073[(44)]);
var inst_73720 = com.wsscode.async.async_cljs.promise__GT_chan(inst_73711);
var state_74073__$1 = state_74073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(28),inst_73720);
} else {
if((state_val_74074 === (34))){
var inst_73755 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_73755)){
var statearr_74174_76973 = state_74073__$1;
(statearr_74174_76973[(1)] = (35));

} else {
var statearr_74175_76974 = state_74073__$1;
(statearr_74175_76974[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (17))){
var inst_73695 = (state_74073[(57)]);
var inst_73711 = (state_74073[(44)]);
var _ = (function (){var statearr_74176 = state_74073;
(statearr_74176[(4)] = cljs.core.cons((20),(state_74073[(4)])));

return statearr_74176;
})();
var inst_73711__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_73695);
var inst_73712 = com.wsscode.async.async_cljs.chan_QMARK_(inst_73711__$1);
var state_74073__$1 = (function (){var statearr_74177 = state_74073;
(statearr_74177[(44)] = inst_73711__$1);

return statearr_74177;
})();
if(inst_73712){
var statearr_74178_76980 = state_74073__$1;
(statearr_74178_76980[(1)] = (21));

} else {
var statearr_74179_76983 = state_74073__$1;
(statearr_74179_76983[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (3))){
var inst_74064 = (state_74073[(64)]);
var inst_74064__$1 = (state_74073[(2)]);
var inst_74065 = (inst_74064__$1 == null);
var state_74073__$1 = (function (){var statearr_74180 = state_74073;
(statearr_74180[(64)] = inst_74064__$1);

return statearr_74180;
})();
if(cljs.core.truth_(inst_74065)){
var statearr_74181_76984 = state_74073__$1;
(statearr_74181_76984[(1)] = (121));

} else {
var statearr_74182_76985 = state_74073__$1;
(statearr_74182_76985[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (12))){
var inst_73675 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74183_76986 = state_74073__$1;
(statearr_74183_76986[(2)] = inst_73675);

(statearr_74183_76986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (2))){
var inst_73650 = (state_74073[(26)]);
var inst_73652 = (state_74073[(24)]);
var inst_73656 = (state_74073[(27)]);
var inst_73651 = (state_74073[(7)]);
var inst_73654 = (state_74073[(8)]);
var _ = (function (){var statearr_74184 = state_74073;
(statearr_74184[(4)] = cljs.core.cons((5),(state_74073[(4)])));

return statearr_74184;
})();
var inst_73649 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_73650__$1 = cljs.core.__destructure_map(inst_73649);
var inst_73651__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73650__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_73652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73650__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_73653 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_73654__$1 = cljs.core.select_keys(inst_73653,inst_73652__$1);
var inst_73655 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_73656__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_73655);
var inst_73657 = com.wsscode.pathom.core.params(env);
var inst_73658 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_73659 = [inst_73656__$1,inst_73651__$1,inst_73654__$1];
var inst_73660 = cljs.core.PersistentHashMap.fromArrays(inst_73658,inst_73659);
var inst_73661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_74073__$1 = (function (){var statearr_74185 = state_74073;
(statearr_74185[(26)] = inst_73650__$1);

(statearr_74185[(7)] = inst_73651__$1);

(statearr_74185[(24)] = inst_73652__$1);

(statearr_74185[(8)] = inst_73654__$1);

(statearr_74185[(27)] = inst_73656__$1);

(statearr_74185[(9)] = inst_73657);

(statearr_74185[(28)] = inst_73660);

return statearr_74185;
})();
if(cljs.core.truth_(inst_73661)){
var statearr_74186_76987 = state_74073__$1;
(statearr_74186_76987[(1)] = (6));

} else {
var statearr_74187_76988 = state_74073__$1;
(statearr_74187_76988[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (66))){
var inst_73650 = (state_74073[(26)]);
var inst_73651 = (state_74073[(7)]);
var inst_73652 = (state_74073[(24)]);
var inst_73654 = (state_74073[(8)]);
var inst_73656 = (state_74073[(27)]);
var inst_73657 = (state_74073[(9)]);
var inst_73660 = (state_74073[(28)]);
var inst_73877 = cljs.core.PersistentVector.EMPTY;
var inst_73878 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_73879 = (function (){var map__73648 = inst_73650;
var resolver_sym = inst_73651;
var input = inst_73652;
var e = inst_73654;
var key = inst_73656;
var params = inst_73657;
var trace_data = inst_73660;
return (function (p1__73637_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__73637_SHARP_),input);
});
})();
var inst_73880 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_73879);
var inst_73881 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_73878,inst_73880);
var inst_73882 = (function (){var map__73648 = inst_73650;
var resolver_sym = inst_73651;
var input = inst_73652;
var e = inst_73654;
var key = inst_73656;
var params = inst_73657;
var trace_data = inst_73660;
return (function (p1__73638_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__73638_SHARP_,input);
});
})();
var inst_73883 = com.wsscode.pathom.connect.map_async_serial(inst_73882,processing_sequence);
var state_74073__$1 = (function (){var statearr_74188 = state_74073;
(statearr_74188[(21)] = inst_73877);

(statearr_74188[(22)] = inst_73881);

return statearr_74188;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(69),inst_73883);
} else {
if((state_val_74074 === (107))){
var inst_74036 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74189_77016 = state_74073__$1;
(statearr_74189_77016[(2)] = inst_74036);

(statearr_74189_77016[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (23))){
var inst_73732 = (state_74073[(2)]);
var inst_73733 = com.wsscode.async.async_cljs.throw_err(inst_73732);
var _ = (function (){var statearr_74190 = state_74073;
(statearr_74190[(4)] = cljs.core.rest((state_74073[(4)])));

return statearr_74190;
})();
var state_74073__$1 = state_74073;
var statearr_74191_77019 = state_74073__$1;
(statearr_74191_77019[(2)] = inst_73733);

(statearr_74191_77019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (47))){
var inst_73789 = cljs.core.PersistentHashMap.EMPTY;
var state_74073__$1 = state_74073;
var statearr_74192_77020 = state_74073__$1;
(statearr_74192_77020[(2)] = inst_73789);

(statearr_74192_77020[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (35))){
var inst_73652 = (state_74073[(24)]);
var inst_73689 = (state_74073[(54)]);
var inst_73693 = (state_74073[(56)]);
var inst_73650 = (state_74073[(26)]);
var inst_73694 = (state_74073[(58)]);
var inst_73747 = (state_74073[(37)]);
var inst_73746 = (state_74073[(10)]);
var inst_73656 = (state_74073[(27)]);
var inst_73701 = (state_74073[(59)]);
var inst_73744 = (state_74073[(66)]);
var inst_73657 = (state_74073[(9)]);
var inst_73695 = (state_74073[(57)]);
var inst_73654 = (state_74073[(8)]);
var inst_73651 = (state_74073[(7)]);
var inst_73660 = (state_74073[(28)]);
var inst_73688 = (state_74073[(53)]);
var inst_73739 = (state_74073[(67)]);
var inst_73664 = (state_74073[(55)]);
var inst_73757 = (function (){var input = inst_73652;
var items_map = inst_73689;
var map__73677 = inst_73693;
var map__73648 = inst_73650;
var cached = inst_73694;
var cached_set = inst_73747;
var linked_results = inst_73746;
var key = inst_73656;
var channels = inst_73701;
var _ = inst_73744;
var params = inst_73657;
var uncached = inst_73695;
var e = inst_73654;
var resolver_sym = inst_73651;
var trace_data = inst_73660;
var valid_inputs = inst_73688;
var batch_result = inst_73739;
var trace_id__54379__auto__ = inst_73664;
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.entity_path_outer_reduce_fn(path__$1,items_map),cache,cljs.core.zipmap(uncached,batch_result));
});
})();
var inst_73758 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_73757);
var state_74073__$1 = state_74073;
var statearr_74203_77021 = state_74073__$1;
(statearr_74203_77021[(2)] = inst_73758);

(statearr_74203_77021[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (82))){
var state_74073__$1 = state_74073;
var statearr_74204_77022 = state_74073__$1;
(statearr_74204_77022[(1)] = (85));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (76))){
var _ = (function (){var statearr_74206 = state_74073;
(statearr_74206[(4)] = cljs.core.rest((state_74073[(4)])));

return statearr_74206;
})();
var state_74073__$1 = state_74073;
var ex74193 = (state_74073__$1[(2)]);
var statearr_74208_77023 = state_74073__$1;
(statearr_74208_77023[(5)] = ex74193);


var statearr_74209_77024 = state_74073__$1;
(statearr_74209_77024[(1)] = (75));

(statearr_74209_77024[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (97))){
var inst_73966 = (state_74073[(31)]);
var inst_73999 = (state_74073[(45)]);
var inst_73999__$1 = cljs.core.seq(inst_73966);
var state_74073__$1 = (function (){var statearr_74211 = state_74073;
(statearr_74211[(45)] = inst_73999__$1);

return statearr_74211;
})();
if(inst_73999__$1){
var statearr_74212_77025 = state_74073__$1;
(statearr_74212_77025[(1)] = (105));

} else {
var statearr_74213_77026 = state_74073__$1;
(statearr_74213_77026[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (19))){
var inst_73704 = (state_74073[(2)]);
var inst_73705 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_73704);
var state_74073__$1 = state_74073;
var statearr_74214_77027 = state_74073__$1;
(statearr_74214_77027[(2)] = inst_73705);

(statearr_74214_77027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (57))){
var inst_73800 = (state_74073[(63)]);
var inst_73830 = (state_74073[(2)]);
var inst_73831 = cljs.core.next(inst_73800);
var inst_73767 = inst_73831;
var inst_73768 = null;
var inst_73769 = (0);
var inst_73770 = (0);
var state_74073__$1 = (function (){var statearr_74215 = state_74073;
(statearr_74215[(68)] = inst_73830);

(statearr_74215[(62)] = inst_73767);

(statearr_74215[(47)] = inst_73768);

(statearr_74215[(69)] = inst_73769);

(statearr_74215[(48)] = inst_73770);

return statearr_74215;
})();
var statearr_74216_77028 = state_74073__$1;
(statearr_74216_77028[(2)] = null);

(statearr_74216_77028[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (68))){
var inst_73874 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74221_77029 = state_74073__$1;
(statearr_74221_77029[(2)] = inst_73874);

(statearr_74221_77029[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (11))){
var inst_73660 = (state_74073[(28)]);
var inst_73664 = (state_74073[(55)]);
var inst_73860 = (state_74073[(2)]);
var inst_73861 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_73660,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_73862 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_73664,inst_73861);
var state_74073__$1 = (function (){var statearr_74226 = state_74073;
(statearr_74226[(70)] = inst_73862);

return statearr_74226;
})();
var statearr_74227_77030 = state_74073__$1;
(statearr_74227_77030[(2)] = inst_73860);

(statearr_74227_77030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (115))){
var inst_74022 = cljs.core.PersistentHashMap.EMPTY;
var state_74073__$1 = state_74073;
var statearr_74229_77031 = state_74073__$1;
(statearr_74229_77031[(2)] = inst_74022);

(statearr_74229_77031[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (9))){
var inst_73651 = (state_74073[(7)]);
var inst_73654 = (state_74073[(8)]);
var inst_73657 = (state_74073[(9)]);
var inst_73670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73671 = [inst_73651,inst_73654,inst_73657];
var inst_73672 = (new cljs.core.PersistentVector(null,3,(5),inst_73670,inst_73671,null));
var inst_73673 = com.wsscode.pathom.core.cache_read(env,inst_73672);
var state_74073__$1 = state_74073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(12),inst_73673);
} else {
if((state_val_74074 === (5))){
var _ = (function (){var statearr_74230 = state_74073;
(statearr_74230[(4)] = cljs.core.rest((state_74073[(4)])));

return statearr_74230;
})();
var state_74073__$1 = state_74073;
var ex74228 = (state_74073__$1[(2)]);
var statearr_74231_77037 = state_74073__$1;
(statearr_74231_77037[(5)] = ex74228);


var statearr_74232_77039 = state_74073__$1;
(statearr_74232_77039[(1)] = (4));

(statearr_74232_77039[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (112))){
var inst_74017 = (state_74073[(43)]);
var inst_74027 = cljs.core.async.close_BANG_(inst_74017);
var state_74073__$1 = state_74073;
var statearr_74233_77041 = state_74073__$1;
(statearr_74233_77041[(2)] = inst_74027);

(statearr_74233_77041[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (83))){
var inst_73929 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74237_77043 = state_74073__$1;
(statearr_74237_77043[(2)] = inst_73929);

(statearr_74237_77043[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (14))){
var state_74073__$1 = state_74073;
var statearr_74238_77044 = state_74073__$1;
(statearr_74238_77044[(2)] = null);

(statearr_74238_77044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (45))){
var inst_73770 = (state_74073[(48)]);
var inst_73767 = (state_74073[(62)]);
var inst_73768 = (state_74073[(47)]);
var inst_73769 = (state_74073[(69)]);
var inst_73796 = (state_74073[(2)]);
var inst_73797 = (inst_73770 + (1));
var tmp74234 = inst_73768;
var tmp74235 = inst_73769;
var tmp74236 = inst_73767;
var inst_73767__$1 = tmp74236;
var inst_73768__$1 = tmp74234;
var inst_73769__$1 = tmp74235;
var inst_73770__$1 = inst_73797;
var state_74073__$1 = (function (){var statearr_74239 = state_74073;
(statearr_74239[(71)] = inst_73796);

(statearr_74239[(62)] = inst_73767__$1);

(statearr_74239[(47)] = inst_73768__$1);

(statearr_74239[(69)] = inst_73769__$1);

(statearr_74239[(48)] = inst_73770__$1);

return statearr_74239;
})();
var statearr_74240_77047 = state_74073__$1;
(statearr_74240_77047[(2)] = null);

(statearr_74240_77047[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (53))){
var inst_73800 = (state_74073[(63)]);
var inst_73819 = (state_74073[(19)]);
var inst_73815 = cljs.core.first(inst_73800);
var inst_73816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73815,(0),null);
var inst_73817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73815,(1),null);
var inst_73818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73817,(0),null);
var inst_73819__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73817,(1),null);
var state_74073__$1 = (function (){var statearr_74241 = state_74073;
(statearr_74241[(72)] = inst_73816);

(statearr_74241[(20)] = inst_73818);

(statearr_74241[(19)] = inst_73819__$1);

return statearr_74241;
})();
if(cljs.core.truth_(inst_73819__$1)){
var statearr_74242_77048 = state_74073__$1;
(statearr_74242_77048[(1)] = (55));

} else {
var statearr_74243_77049 = state_74073__$1;
(statearr_74243_77049[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (78))){
var inst_73910 = (state_74073[(36)]);
var inst_73917 = com.wsscode.async.async_cljs.promise_QMARK_(inst_73910);
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_73917)){
var statearr_74244_77050 = state_74073__$1;
(statearr_74244_77050[(1)] = (81));

} else {
var statearr_74245_77051 = state_74073__$1;
(statearr_74245_77051[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (26))){
var state_74073__$1 = state_74073;
var statearr_74246_77053 = state_74073__$1;
(statearr_74246_77053[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (123))){
var inst_74071 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74073__$1,inst_74071);
} else {
if((state_val_74074 === (16))){
var inst_73739 = (state_74073[(67)]);
var inst_73701 = (state_74073[(59)]);
var inst_73695 = (state_74073[(57)]);
var inst_73694 = (state_74073[(58)]);
var inst_73749 = (state_74073[(50)]);
var inst_73739__$1 = (state_74073[(2)]);
var inst_73740 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_73741 = cljs.core.count(inst_73739__$1);
var inst_73742 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_73741];
var inst_73743 = cljs.core.PersistentHashMap.fromArrays(inst_73740,inst_73742);
var inst_73744 = com.wsscode.pathom.trace.trace(env,inst_73743);
var inst_73745 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_73701,inst_73739__$1);
var inst_73746 = cljs.core.zipmap(inst_73695,inst_73745);
var inst_73747 = cljs.core.set(inst_73694);
var inst_73748 = cljs.core.first(inst_73739__$1);
var inst_73749__$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_73748);
var state_74073__$1 = (function (){var statearr_74264 = state_74073;
(statearr_74264[(67)] = inst_73739__$1);

(statearr_74264[(66)] = inst_73744);

(statearr_74264[(10)] = inst_73746);

(statearr_74264[(37)] = inst_73747);

(statearr_74264[(50)] = inst_73749__$1);

return statearr_74264;
})();
if(inst_73749__$1){
var statearr_74278_77062 = state_74073__$1;
(statearr_74278_77062[(1)] = (32));

} else {
var statearr_74279_77063 = state_74073__$1;
(statearr_74279_77063[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (81))){
var inst_73910 = (state_74073[(36)]);
var inst_73919 = com.wsscode.async.async_cljs.promise__GT_chan(inst_73910);
var state_74073__$1 = state_74073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(84),inst_73919);
} else {
if((state_val_74074 === (120))){
var inst_74048 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74281_77065 = state_74073__$1;
(statearr_74281_77065[(2)] = inst_74048);

(statearr_74281_77065[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (79))){
var inst_73931 = (state_74073[(2)]);
var inst_73932 = com.wsscode.async.async_cljs.throw_err(inst_73931);
var _ = (function (){var statearr_74282 = state_74073;
(statearr_74282[(4)] = cljs.core.rest((state_74073[(4)])));

return statearr_74282;
})();
var state_74073__$1 = state_74073;
var statearr_74283_77066 = state_74073__$1;
(statearr_74283_77066[(2)] = inst_73932);

(statearr_74283_77066[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (38))){
var inst_73770 = (state_74073[(48)]);
var inst_73769 = (state_74073[(69)]);
var inst_73772 = (inst_73770 < inst_73769);
var inst_73773 = inst_73772;
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_73773)){
var statearr_74286_77067 = state_74073__$1;
(statearr_74286_77067[(1)] = (40));

} else {
var statearr_74287_77068 = state_74073__$1;
(statearr_74287_77068[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (98))){
var inst_74038 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74288_77069 = state_74073__$1;
(statearr_74288_77069[(2)] = inst_74038);

(statearr_74288_77069[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (87))){
var inst_73927 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74290_77070 = state_74073__$1;
(statearr_74290_77070[(2)] = inst_73927);

(statearr_74290_77070[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (30))){
var state_74073__$1 = state_74073;
var statearr_74291_77071 = state_74073__$1;
(statearr_74291_77071[(2)] = null);

(statearr_74291_77071[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (73))){
var inst_73894 = (state_74073[(13)]);
var inst_73910 = (state_74073[(36)]);
var _ = (function (){var statearr_74292 = state_74073;
(statearr_74292[(4)] = cljs.core.cons((76),(state_74073[(4)])));

return statearr_74292;
})();
var inst_73910__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_73894);
var inst_73911 = com.wsscode.async.async_cljs.chan_QMARK_(inst_73910__$1);
var state_74073__$1 = (function (){var statearr_74295 = state_74073;
(statearr_74295[(36)] = inst_73910__$1);

return statearr_74295;
})();
if(inst_73911){
var statearr_74296_77086 = state_74073__$1;
(statearr_74296_77086[(1)] = (77));

} else {
var statearr_74297_77087 = state_74073__$1;
(statearr_74297_77087[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (96))){
var inst_73967 = (state_74073[(32)]);
var inst_73969 = (state_74073[(30)]);
var inst_73984 = (state_74073[(35)]);
var inst_73980 = cljs.core._nth(inst_73967,inst_73969);
var inst_73981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73980,(0),null);
var inst_73982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73980,(1),null);
var inst_73983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73982,(0),null);
var inst_73984__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73982,(1),null);
var state_74073__$1 = (function (){var statearr_74298 = state_74073;
(statearr_74298[(73)] = inst_73981);

(statearr_74298[(41)] = inst_73983);

(statearr_74298[(35)] = inst_73984__$1);

return statearr_74298;
})();
if(cljs.core.truth_(inst_73984__$1)){
var statearr_74299_77088 = state_74073__$1;
(statearr_74299_77088[(1)] = (99));

} else {
var statearr_74301_77089 = state_74073__$1;
(statearr_74301_77089[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (10))){
var inst_73650 = (state_74073[(26)]);
var inst_73651 = (state_74073[(7)]);
var inst_73652 = (state_74073[(24)]);
var inst_73654 = (state_74073[(8)]);
var inst_73656 = (state_74073[(27)]);
var inst_73657 = (state_74073[(9)]);
var inst_73660 = (state_74073[(28)]);
var inst_73664 = (state_74073[(55)]);
var inst_73678 = cljs.core.PersistentVector.EMPTY;
var inst_73679 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_73680 = (function (){var map__73648 = inst_73650;
var resolver_sym = inst_73651;
var input = inst_73652;
var e = inst_73654;
var key = inst_73656;
var params = inst_73657;
var trace_data = inst_73660;
var trace_id__54379__auto__ = inst_73664;
return (function (p1__73637_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__73637_SHARP_),input);
});
})();
var inst_73681 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_73680);
var inst_73682 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_73679,inst_73681);
var inst_73683 = (function (){var map__73648 = inst_73650;
var resolver_sym = inst_73651;
var input = inst_73652;
var e = inst_73654;
var key = inst_73656;
var params = inst_73657;
var trace_data = inst_73660;
var trace_id__54379__auto__ = inst_73664;
return (function (p1__73638_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__73638_SHARP_,input);
});
})();
var inst_73684 = com.wsscode.pathom.connect.map_async_serial(inst_73683,processing_sequence);
var state_74073__$1 = (function (){var statearr_74303 = state_74073;
(statearr_74303[(51)] = inst_73678);

(statearr_74303[(52)] = inst_73682);

return statearr_74303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74073__$1,(13),inst_73684);
} else {
if((state_val_74074 === (18))){
var inst_73736 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74304_77094 = state_74073__$1;
(statearr_74304_77094[(2)] = inst_73736);

(statearr_74304_77094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (105))){
var inst_73999 = (state_74073[(45)]);
var inst_74001 = cljs.core.chunked_seq_QMARK_(inst_73999);
var state_74073__$1 = state_74073;
if(inst_74001){
var statearr_74305_77096 = state_74073__$1;
(statearr_74305_77096[(1)] = (108));

} else {
var statearr_74306_77097 = state_74073__$1;
(statearr_74306_77097[(1)] = (109));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (52))){
var inst_73800 = (state_74073[(63)]);
var inst_73804 = cljs.core.chunk_first(inst_73800);
var inst_73805 = cljs.core.chunk_rest(inst_73800);
var inst_73806 = cljs.core.count(inst_73804);
var inst_73767 = inst_73805;
var inst_73768 = inst_73804;
var inst_73769 = inst_73806;
var inst_73770 = (0);
var state_74073__$1 = (function (){var statearr_74307 = state_74073;
(statearr_74307[(62)] = inst_73767);

(statearr_74307[(47)] = inst_73768);

(statearr_74307[(69)] = inst_73769);

(statearr_74307[(48)] = inst_73770);

return statearr_74307;
})();
var statearr_74308_77100 = state_74073__$1;
(statearr_74308_77100[(2)] = null);

(statearr_74308_77100[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (114))){
var inst_74018 = (state_74073[(60)]);
var state_74073__$1 = state_74073;
var statearr_74309_77104 = state_74073__$1;
(statearr_74309_77104[(2)] = inst_74018);

(statearr_74309_77104[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (67))){
var inst_74059 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74310_77107 = state_74073__$1;
(statearr_74310_77107[(2)] = inst_74059);

(statearr_74310_77107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (71))){
var state_74073__$1 = state_74073;
var statearr_74311_77108 = state_74073__$1;
(statearr_74311_77108[(2)] = null);

(statearr_74311_77108[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (42))){
var inst_73839 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74312_77109 = state_74073__$1;
(statearr_74312_77109[(2)] = inst_73839);

(statearr_74312_77109[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (80))){
var inst_73914 = (state_74073[(2)]);
var inst_73915 = com.wsscode.async.async_cljs.throw_err(inst_73914);
var state_74073__$1 = state_74073;
var statearr_74314_77110 = state_74073__$1;
(statearr_74314_77110[(2)] = inst_73915);

(statearr_74314_77110[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (37))){
var inst_73746 = (state_74073[(10)]);
var inst_73761 = (state_74073[(2)]);
var inst_73766 = cljs.core.seq(inst_73746);
var inst_73767 = inst_73766;
var inst_73768 = null;
var inst_73769 = (0);
var inst_73770 = (0);
var state_74073__$1 = (function (){var statearr_74322 = state_74073;
(statearr_74322[(74)] = inst_73761);

(statearr_74322[(62)] = inst_73767);

(statearr_74322[(47)] = inst_73768);

(statearr_74322[(69)] = inst_73769);

(statearr_74322[(48)] = inst_73770);

return statearr_74322;
})();
var statearr_74323_77111 = state_74073__$1;
(statearr_74323_77111[(2)] = null);

(statearr_74323_77111[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (63))){
var inst_73858 = (state_74073[(2)]);
var state_74073__$1 = state_74073;
var statearr_74324_77113 = state_74073__$1;
(statearr_74324_77113[(2)] = inst_73858);

(statearr_74324_77113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (94))){
var inst_73969 = (state_74073[(30)]);
var inst_73968 = (state_74073[(33)]);
var inst_73971 = (inst_73969 < inst_73968);
var inst_73972 = inst_73971;
var state_74073__$1 = state_74073;
if(cljs.core.truth_(inst_73972)){
var statearr_74326_77114 = state_74073__$1;
(statearr_74326_77114[(1)] = (96));

} else {
var statearr_74327_77116 = state_74073__$1;
(statearr_74327_77116[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (8))){
var inst_74061 = (state_74073[(2)]);
var _ = (function (){var statearr_74328 = state_74073;
(statearr_74328[(4)] = cljs.core.rest((state_74073[(4)])));

return statearr_74328;
})();
var state_74073__$1 = state_74073;
var statearr_74329_77117 = state_74073__$1;
(statearr_74329_77117[(2)] = inst_74061);

(statearr_74329_77117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (49))){
var inst_73800 = (state_74073[(63)]);
var inst_73802 = cljs.core.chunked_seq_QMARK_(inst_73800);
var state_74073__$1 = state_74073;
if(inst_73802){
var statearr_74330_77118 = state_74073__$1;
(statearr_74330_77118[(1)] = (52));

} else {
var statearr_74332_77119 = state_74073__$1;
(statearr_74332_77119[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74074 === (84))){
var inst_73921 = (state_74073[(2)]);
var inst_73922 = com.wsscode.async.async_cljs.consumer_pair(inst_73921);
var state_74073__$1 = state_74073;
var statearr_74333_77120 = state_74073__$1;
(statearr_74333_77120[(2)] = inst_73922);

(statearr_74333_77120[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto____0 = (function (){
var statearr_74335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74335[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto__);

(statearr_74335[(1)] = (1));

return statearr_74335;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto____1 = (function (state_74073){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_74073);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e74336){var ex__42124__auto__ = e74336;
var statearr_74337_77121 = state_74073;
(statearr_74337_77121[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_74073[(4)]))){
var statearr_74338_77122 = state_74073;
(statearr_74338_77122[(1)] = cljs.core.first((state_74073[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77123 = state_74073;
state_74073 = G__77123;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto__ = function(state_74073){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto____1.call(this,state_74073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_74340 = f__42153__auto__();
(statearr_74340[(6)] = c__42152__auto___76769);

return statearr_74340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
});
com.wsscode.pathom.connect.parallel_reader_replan_fn = (function com$wsscode$pathom$connect$parallel_reader_replan_fn(env,failed_resolvers,resolver_sym,max_resolver_weight,ch,out){
return (function (value,error){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_74364){
var state_val_74365 = (state_74364[(1)]);
if((state_val_74365 === (1))){
var inst_74342 = (state_74364[(7)]);
var inst_74345 = (state_74364[(8)]);
var inst_74342__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_74343 = (function (){var failed_resolvers__$1 = inst_74342__$1;
return (function (p1__74341_SHARP_){
var x__5133__auto__ = ((function (){var or__5045__auto__ = p1__74341_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})() * (2));
var y__5134__auto__ = max_resolver_weight;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
});
})();
var inst_74344 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_74343], 0));
var inst_74345__$1 = com.wsscode.pathom.connect.reader_compute_plan(env,inst_74342__$1);
var state_74364__$1 = (function (){var statearr_74366 = state_74364;
(statearr_74366[(7)] = inst_74342__$1);

(statearr_74366[(9)] = inst_74344);

(statearr_74366[(8)] = inst_74345__$1);

return statearr_74366;
})();
if(cljs.core.truth_(inst_74345__$1)){
var statearr_74367_77125 = state_74364__$1;
(statearr_74367_77125[(1)] = (2));

} else {
var statearr_74368_77126 = state_74364__$1;
(statearr_74368_77126[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74365 === (2))){
var inst_74345 = (state_74364[(8)]);
var inst_74351 = (state_74364[(10)]);
var inst_74350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74345,(0),null);
var inst_74351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74345,(1),null);
var inst_74352 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74353 = [out,inst_74351__$1,value];
var inst_74354 = cljs.core.PersistentHashMap.fromArrays(inst_74352,inst_74353);
var state_74364__$1 = (function (){var statearr_74377 = state_74364;
(statearr_74377[(11)] = inst_74350);

(statearr_74377[(10)] = inst_74351__$1);

return statearr_74377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74364__$1,(5),ch,inst_74354);
} else {
if((state_val_74365 === (3))){
var state_74364__$1 = state_74364;
var statearr_74378_77129 = state_74364__$1;
(statearr_74378_77129[(2)] = null);

(statearr_74378_77129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74365 === (4))){
var inst_74362 = (state_74364[(2)]);
var state_74364__$1 = state_74364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74364__$1,inst_74362);
} else {
if((state_val_74365 === (5))){
var inst_74350 = (state_74364[(11)]);
var inst_74342 = (state_74364[(7)]);
var inst_74351 = (state_74364[(10)]);
var inst_74356 = (state_74364[(2)]);
var inst_74357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74358 = [inst_74350,inst_74342,inst_74351];
var inst_74359 = (new cljs.core.PersistentVector(null,3,(5),inst_74357,inst_74358,null));
var state_74364__$1 = (function (){var statearr_74379 = state_74364;
(statearr_74379[(12)] = inst_74356);

return statearr_74379;
})();
var statearr_74380_77133 = state_74364__$1;
(statearr_74380_77133[(2)] = inst_74359);

(statearr_74380_77133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto____0 = (function (){
var statearr_74382 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74382[(0)] = com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto__);

(statearr_74382[(1)] = (1));

return statearr_74382;
});
var com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto____1 = (function (state_74364){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_74364);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e74384){var ex__42124__auto__ = e74384;
var statearr_74385_77136 = state_74364;
(statearr_74385_77136[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_74364[(4)]))){
var statearr_74386_77137 = state_74364;
(statearr_74386_77137[(1)] = cljs.core.first((state_74364[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77138 = state_74364;
state_74364 = G__77138;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto__ = function(state_74364){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto____1.call(this,state_74364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$parallel_reader_replan_fn_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_74390 = f__42153__auto__();
(statearr_74390[(6)] = c__42152__auto__);

return statearr_74390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
});
com.wsscode.pathom.connect.cached_async_call_resolver_fn = (function com$wsscode$pathom$connect$cached_async_call_resolver_fn(env,resolver_sym,e,params){
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,params], null),(function (){
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___77149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_74428){
var state_val_74429 = (state_74428[(1)]);
if((state_val_74429 === (7))){
var inst_74400 = (state_74428[(7)]);
var state_74428__$1 = state_74428;
var statearr_74434_77150 = state_74428__$1;
(statearr_74434_77150[(2)] = inst_74400);

(statearr_74434_77150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (1))){
var state_74428__$1 = state_74428;
var statearr_74435_77151 = state_74428__$1;
(statearr_74435_77151[(2)] = null);

(statearr_74435_77151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (4))){
var inst_74393 = (state_74428[(2)]);
var state_74428__$1 = state_74428;
var statearr_74436_77152 = state_74428__$1;
(statearr_74436_77152[(2)] = inst_74393);

(statearr_74436_77152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (15))){
var inst_74426 = (state_74428[(2)]);
var state_74428__$1 = state_74428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74428__$1,inst_74426);
} else {
if((state_val_74429 === (13))){
var inst_74422 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_74428__$1 = state_74428;
var statearr_74437_77153 = state_74428__$1;
(statearr_74437_77153[(2)] = inst_74422);

(statearr_74437_77153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (6))){
var inst_74400 = (state_74428[(7)]);
var state_74428__$1 = state_74428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74428__$1,(9),inst_74400);
} else {
if((state_val_74429 === (3))){
var inst_74418 = (state_74428[(8)]);
var inst_74418__$1 = (state_74428[(2)]);
var inst_74419 = (inst_74418__$1 == null);
var state_74428__$1 = (function (){var statearr_74438 = state_74428;
(statearr_74438[(8)] = inst_74418__$1);

return statearr_74438;
})();
if(cljs.core.truth_(inst_74419)){
var statearr_74439_77154 = state_74428__$1;
(statearr_74439_77154[(1)] = (13));

} else {
var statearr_74440_77155 = state_74428__$1;
(statearr_74440_77155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (12))){
var inst_74415 = (state_74428[(2)]);
var _ = (function (){var statearr_74441 = state_74428;
(statearr_74441[(4)] = cljs.core.rest((state_74428[(4)])));

return statearr_74441;
})();
var state_74428__$1 = state_74428;
var statearr_74442_77156 = state_74428__$1;
(statearr_74442_77156[(2)] = inst_74415);

(statearr_74442_77156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (2))){
var inst_74400 = (state_74428[(7)]);
var _ = (function (){var statearr_74443 = state_74428;
(statearr_74443[(4)] = cljs.core.cons((5),(state_74428[(4)])));

return statearr_74443;
})();
var inst_74400__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_74401 = com.wsscode.async.async_cljs.chan_QMARK_(inst_74400__$1);
var state_74428__$1 = (function (){var statearr_74444 = state_74428;
(statearr_74444[(7)] = inst_74400__$1);

return statearr_74444;
})();
if(inst_74401){
var statearr_74445_77157 = state_74428__$1;
(statearr_74445_77157[(1)] = (6));

} else {
var statearr_74446_77158 = state_74428__$1;
(statearr_74446_77158[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (11))){
var inst_74412 = cljs.core.PersistentHashMap.EMPTY;
var state_74428__$1 = state_74428;
var statearr_74448_77159 = state_74428__$1;
(statearr_74448_77159[(2)] = inst_74412);

(statearr_74448_77159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (9))){
var inst_74405 = (state_74428[(2)]);
var state_74428__$1 = state_74428;
var statearr_74449_77160 = state_74428__$1;
(statearr_74449_77160[(2)] = inst_74405);

(statearr_74449_77160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (5))){
var _ = (function (){var statearr_74450 = state_74428;
(statearr_74450[(4)] = cljs.core.rest((state_74428[(4)])));

return statearr_74450;
})();
var state_74428__$1 = state_74428;
var ex74447 = (state_74428__$1[(2)]);
var statearr_74451_77161 = state_74428__$1;
(statearr_74451_77161[(5)] = ex74447);


var statearr_74452_77163 = state_74428__$1;
(statearr_74452_77163[(1)] = (4));

(statearr_74452_77163[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (14))){
var inst_74418 = (state_74428[(8)]);
var inst_74424 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_74418);
var state_74428__$1 = state_74428;
var statearr_74455_77165 = state_74428__$1;
(statearr_74455_77165[(2)] = inst_74424);

(statearr_74455_77165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (10))){
var inst_74408 = (state_74428[(9)]);
var state_74428__$1 = state_74428;
var statearr_74456_77166 = state_74428__$1;
(statearr_74456_77166[(2)] = inst_74408);

(statearr_74456_77166[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74429 === (8))){
var inst_74408 = (state_74428[(9)]);
var inst_74408__$1 = (state_74428[(2)]);
var state_74428__$1 = (function (){var statearr_74457 = state_74428;
(statearr_74457[(9)] = inst_74408__$1);

return statearr_74457;
})();
if(cljs.core.truth_(inst_74408__$1)){
var statearr_74465_77170 = state_74428__$1;
(statearr_74465_77170[(1)] = (10));

} else {
var statearr_74466_77171 = state_74428__$1;
(statearr_74466_77171[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto____0 = (function (){
var statearr_74467 = [null,null,null,null,null,null,null,null,null,null];
(statearr_74467[(0)] = com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto__);

(statearr_74467[(1)] = (1));

return statearr_74467;
});
var com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto____1 = (function (state_74428){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_74428);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e74468){var ex__42124__auto__ = e74468;
var statearr_74469_77175 = state_74428;
(statearr_74469_77175[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_74428[(4)]))){
var statearr_74470_77176 = state_74428;
(statearr_74470_77176[(1)] = cljs.core.first((state_74428[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77178 = state_74428;
state_74428 = G__77178;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto__ = function(state_74428){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto____1.call(this,state_74428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$cached_async_call_resolver_fn_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_74471 = f__42153__auto__();
(statearr_74471[(6)] = c__42152__auto___77149);

return statearr_74471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
}));
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__74474){
var map__74476 = p__74474;
var map__74476__$1 = cljs.core.__destructure_map(map__74476);
var env = map__74476__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74476__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74476__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74476__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74476__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5802__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__74478 = temp__5802__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74478,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74478,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),plan);
var c__42152__auto___77191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_74873){
var state_val_74874 = (state_74873[(1)]);
if((state_val_74874 === (65))){
var inst_74852 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74876_77192 = state_74873__$1;
(statearr_74876_77192[(2)] = inst_74852);

(statearr_74876_77192[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (70))){
var inst_74680 = (state_74873[(7)]);
var inst_74516 = (state_74873[(8)]);
var inst_74627 = (state_74873[(9)]);
var inst_74705 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74706 = [inst_74680,inst_74516];
var inst_74707 = cljs.core.PersistentHashMap.fromArrays(inst_74705,inst_74706);
var inst_74708 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_74707);
var inst_74709 = (inst_74627.cljs$core$IFn$_invoke$arity$2 ? inst_74627.cljs$core$IFn$_invoke$arity$2(inst_74680,inst_74708) : inst_74627.call(null,inst_74680,inst_74708));
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74873__$1,(73),inst_74709);
} else {
if((state_val_74874 === (62))){
var inst_74671 = (state_74873[(2)]);
var inst_74672 = cljs.core.async.close_BANG_(ch);
var state_74873__$1 = (function (){var statearr_74877 = state_74873;
(statearr_74877[(10)] = inst_74671);

return statearr_74877;
})();
var statearr_74878_77193 = state_74873__$1;
(statearr_74878_77193[(2)] = inst_74672);

(statearr_74878_77193[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (74))){
var inst_74711 = (state_74873[(11)]);
var inst_74503 = (state_74873[(12)]);
var inst_74716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74711,(0),null);
var inst_74717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74711,(1),null);
var inst_74718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74711,(2),null);
var tmp74875 = inst_74503;
var inst_74500 = inst_74716;
var inst_74501 = inst_74717;
var inst_74502 = inst_74718;
var inst_74503__$1 = tmp74875;
var state_74873__$1 = (function (){var statearr_74880 = state_74873;
(statearr_74880[(13)] = inst_74500);

(statearr_74880[(14)] = inst_74501);

(statearr_74880[(15)] = inst_74502);

(statearr_74880[(12)] = inst_74503__$1);

return statearr_74880;
})();
var statearr_74881_77194 = state_74873__$1;
(statearr_74881_77194[(2)] = null);

(statearr_74881_77194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (7))){
var inst_74516 = (state_74873[(8)]);
var inst_74528 = (state_74873[(16)]);
var inst_74535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74536 = [inst_74516];
var inst_74537 = (new cljs.core.PersistentVector(null,1,(5),inst_74535,inst_74536,null));
var inst_74538 = cljs.core.select_keys(inst_74528,inst_74537);
var state_74873__$1 = state_74873;
var statearr_74882_77195 = state_74873__$1;
(statearr_74882_77195[(2)] = inst_74538);

(statearr_74882_77195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (59))){
var inst_74651 = (state_74873[(17)]);
var inst_74503 = (state_74873[(12)]);
var inst_74656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74651,(0),null);
var inst_74657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74651,(1),null);
var inst_74658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74651,(2),null);
var tmp74879 = inst_74503;
var inst_74500 = inst_74656;
var inst_74501 = inst_74657;
var inst_74502 = inst_74658;
var inst_74503__$1 = tmp74879;
var state_74873__$1 = (function (){var statearr_74883 = state_74873;
(statearr_74883[(13)] = inst_74500);

(statearr_74883[(14)] = inst_74501);

(statearr_74883[(15)] = inst_74502);

(statearr_74883[(12)] = inst_74503__$1);

return statearr_74883;
})();
var statearr_74884_77197 = state_74873__$1;
(statearr_74884_77197[(2)] = null);

(statearr_74884_77197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (86))){
var inst_74724 = (state_74873[(18)]);
var inst_74733 = (state_74873[(19)]);
var inst_74748 = (state_74873[(2)]);
var inst_74749 = [out,inst_74724,inst_74748];
var inst_74751 = cljs.core.PersistentHashMap.fromArrays(inst_74733,inst_74749);
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74873__$1,(80),ch,inst_74751);
} else {
if((state_val_74874 === (20))){
var inst_74554 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74895_77201 = state_74873__$1;
(statearr_74895_77201[(2)] = inst_74554);

(statearr_74895_77201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (72))){
var inst_74502 = (state_74873[(15)]);
var inst_74692 = (state_74873[(20)]);
var inst_74510 = (state_74873[(21)]);
var inst_74501 = (state_74873[(14)]);
var inst_74503 = (state_74873[(12)]);
var inst_74701 = (state_74873[(2)]);
var inst_74702 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_74502,inst_74692);
var tmp74893 = inst_74503;
var tmp74894 = inst_74501;
var inst_74500 = inst_74510;
var inst_74501__$1 = tmp74894;
var inst_74502__$1 = inst_74702;
var inst_74503__$1 = tmp74893;
var state_74873__$1 = (function (){var statearr_74896 = state_74873;
(statearr_74896[(22)] = inst_74701);

(statearr_74896[(13)] = inst_74500);

(statearr_74896[(14)] = inst_74501__$1);

(statearr_74896[(15)] = inst_74502__$1);

(statearr_74896[(12)] = inst_74503__$1);

return statearr_74896;
})();
var statearr_74897_77205 = state_74873__$1;
(statearr_74897_77205[(2)] = null);

(statearr_74897_77205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (58))){
var inst_74651 = (state_74873[(17)]);
var inst_74651__$1 = (state_74873[(2)]);
var state_74873__$1 = (function (){var statearr_74898 = state_74873;
(statearr_74898[(17)] = inst_74651__$1);

return statearr_74898;
})();
if(cljs.core.truth_(inst_74651__$1)){
var statearr_74899_77206 = state_74873__$1;
(statearr_74899_77206[(1)] = (59));

} else {
var statearr_74900_77207 = state_74873__$1;
(statearr_74900_77207[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (60))){
var inst_74516 = (state_74873[(8)]);
var inst_74662 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74663 = [inst_74516];
var inst_74664 = cljs.core.PersistentHashMap.fromArrays(inst_74662,inst_74663);
var inst_74665 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_74664);
var inst_74666 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74667 = cljs.core.PersistentHashMap.EMPTY;
var inst_74668 = [out,inst_74665,inst_74667];
var inst_74669 = cljs.core.PersistentHashMap.fromArrays(inst_74666,inst_74668);
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74873__$1,(62),ch,inst_74669);
} else {
if((state_val_74874 === (27))){
var inst_74571 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74901_77218 = state_74873__$1;
(statearr_74901_77218[(2)] = inst_74571);

(statearr_74901_77218[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (1))){
var inst_74489 = (state_74873[(23)]);
var inst_74489__$1 = plan;
var inst_74490 = cljs.core.seq(inst_74489__$1);
var inst_74491 = cljs.core.first(inst_74490);
var inst_74492 = cljs.core.next(inst_74490);
var inst_74493 = cljs.core.PersistentHashMap.EMPTY;
var inst_74494 = out;
var inst_74499 = waiting;
var inst_74500 = inst_74489__$1;
var inst_74501 = inst_74493;
var inst_74502 = inst_74494;
var inst_74503 = inst_74499;
var state_74873__$1 = (function (){var statearr_74902 = state_74873;
(statearr_74902[(23)] = inst_74489__$1);

(statearr_74902[(24)] = inst_74491);

(statearr_74902[(25)] = inst_74492);

(statearr_74902[(13)] = inst_74500);

(statearr_74902[(14)] = inst_74501);

(statearr_74902[(15)] = inst_74502);

(statearr_74902[(12)] = inst_74503);

return statearr_74902;
})();
var statearr_74903_77219 = state_74873__$1;
(statearr_74903_77219[(2)] = null);

(statearr_74903_77219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (69))){
var inst_74526 = (state_74873[(26)]);
var inst_74517 = (state_74873[(27)]);
var inst_74527 = (state_74873[(28)]);
var inst_74692 = (state_74873[(20)]);
var inst_74680 = (state_74873[(7)]);
var inst_74692__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_74526);
var inst_74693 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_74694 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_74517];
var inst_74695 = cljs.core.PersistentHashMap.fromArrays(inst_74693,inst_74694);
var inst_74696 = com.wsscode.pathom.trace.trace(inst_74527,inst_74695);
var inst_74697 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74698 = [inst_74692__$1,inst_74680];
var inst_74699 = cljs.core.PersistentHashMap.fromArrays(inst_74697,inst_74698);
var state_74873__$1 = (function (){var statearr_74904 = state_74873;
(statearr_74904[(20)] = inst_74692__$1);

(statearr_74904[(29)] = inst_74696);

return statearr_74904;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74873__$1,(72),ch,inst_74699);
} else {
if((state_val_74874 === (101))){
var inst_74813 = (state_74873[(30)]);
var inst_74813__$1 = (state_74873[(2)]);
var state_74873__$1 = (function (){var statearr_74906 = state_74873;
(statearr_74906[(30)] = inst_74813__$1);

return statearr_74906;
})();
if(cljs.core.truth_(inst_74813__$1)){
var statearr_74907_77220 = state_74873__$1;
(statearr_74907_77220[(1)] = (102));

} else {
var statearr_74908_77221 = state_74873__$1;
(statearr_74908_77221[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (24))){
var inst_74567 = (state_74873[(31)]);
var inst_74565 = (state_74873[(2)]);
var inst_74566 = cljs.core.__destructure_map(inst_74565);
var inst_74567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74566,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_74873__$1 = (function (){var statearr_74911 = state_74873;
(statearr_74911[(31)] = inst_74567__$1);

return statearr_74911;
})();
if(cljs.core.truth_(inst_74567__$1)){
var statearr_74912_77222 = state_74873__$1;
(statearr_74912_77222[(1)] = (25));

} else {
var statearr_74913_77223 = state_74873__$1;
(statearr_74913_77223[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (102))){
var inst_74813 = (state_74873[(30)]);
var inst_74503 = (state_74873[(12)]);
var inst_74818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74813,(0),null);
var inst_74819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74813,(1),null);
var inst_74820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74813,(2),null);
var tmp74905 = inst_74503;
var inst_74500 = inst_74818;
var inst_74501 = inst_74819;
var inst_74502 = inst_74820;
var inst_74503__$1 = tmp74905;
var state_74873__$1 = (function (){var statearr_74914 = state_74873;
(statearr_74914[(13)] = inst_74500);

(statearr_74914[(14)] = inst_74501);

(statearr_74914[(15)] = inst_74502);

(statearr_74914[(12)] = inst_74503__$1);

return statearr_74914;
})();
var statearr_74917_77225 = state_74873__$1;
(statearr_74917_77225[(2)] = null);

(statearr_74917_77225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (55))){
var inst_74502 = (state_74873[(15)]);
var inst_74637 = (state_74873[(32)]);
var inst_74510 = (state_74873[(21)]);
var inst_74501 = (state_74873[(14)]);
var inst_74503 = (state_74873[(12)]);
var inst_74641 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_74502,inst_74637);
var tmp74909 = inst_74503;
var tmp74910 = inst_74501;
var inst_74500 = inst_74510;
var inst_74501__$1 = tmp74910;
var inst_74502__$1 = inst_74641;
var inst_74503__$1 = tmp74909;
var state_74873__$1 = (function (){var statearr_74918 = state_74873;
(statearr_74918[(13)] = inst_74500);

(statearr_74918[(14)] = inst_74501__$1);

(statearr_74918[(15)] = inst_74502__$1);

(statearr_74918[(12)] = inst_74503__$1);

return statearr_74918;
})();
var statearr_74919_77228 = state_74873__$1;
(statearr_74919_77228[(2)] = null);

(statearr_74919_77228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (85))){
var inst_74742 = (state_74873[(33)]);
var state_74873__$1 = state_74873;
var statearr_74920_77229 = state_74873__$1;
(statearr_74920_77229[(2)] = inst_74742);

(statearr_74920_77229[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (39))){
var inst_74580 = (state_74873[(34)]);
var inst_74597 = com.wsscode.async.async_cljs.promise__GT_chan(inst_74580);
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74873__$1,(42),inst_74597);
} else {
if((state_val_74874 === (88))){
var state_74873__$1 = state_74873;
var statearr_74923_77233 = state_74873__$1;
(statearr_74923_77233[(1)] = (98));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (46))){
var inst_74609 = (state_74873[(35)]);
var state_74873__$1 = state_74873;
var statearr_74925_77237 = state_74873__$1;
(statearr_74925_77237[(2)] = inst_74609);

(statearr_74925_77237[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (4))){
var inst_74509 = (state_74873[(36)]);
var inst_74517 = (state_74873[(27)]);
var inst_74522 = (state_74873[(37)]);
var inst_74527 = (state_74873[(28)]);
var inst_74528 = (state_74873[(16)]);
var inst_74525 = (state_74873[(38)]);
var inst_74529 = (state_74873[(39)]);
var inst_74516 = (state_74873[(8)]);
var inst_74516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74509,(0),null);
var inst_74517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74509,(1),null);
var inst_74518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74519 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_74517__$1];
var inst_74520 = (new cljs.core.PersistentVector(null,2,(5),inst_74518,inst_74519,null));
var inst_74521 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_74520);
var inst_74522__$1 = cljs.core.__destructure_map(inst_74521);
var inst_74523 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_74522__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_74524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74522__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_74525__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74522__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_74526 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_74517__$1);
var inst_74527__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_74522__$1);
var inst_74528__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_74527__$1);
var inst_74529__$1 = cljs.core.select_keys(inst_74528__$1,inst_74525__$1);
var inst_74530 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_74531 = [key,inst_74517__$1,inst_74529__$1];
var inst_74532 = cljs.core.PersistentHashMap.fromArrays(inst_74530,inst_74531);
var inst_74533 = cljs.core.contains_QMARK_(inst_74528__$1,inst_74516__$1);
var state_74873__$1 = (function (){var statearr_74933 = state_74873;
(statearr_74933[(8)] = inst_74516__$1);

(statearr_74933[(27)] = inst_74517__$1);

(statearr_74933[(37)] = inst_74522__$1);

(statearr_74933[(40)] = inst_74523);

(statearr_74933[(41)] = inst_74524);

(statearr_74933[(38)] = inst_74525__$1);

(statearr_74933[(26)] = inst_74526);

(statearr_74933[(28)] = inst_74527__$1);

(statearr_74933[(16)] = inst_74528__$1);

(statearr_74933[(39)] = inst_74529__$1);

(statearr_74933[(42)] = inst_74532);

return statearr_74933;
})();
if(inst_74533){
var statearr_74934_77247 = state_74873__$1;
(statearr_74934_77247[(1)] = (7));

} else {
var statearr_74935_77248 = state_74873__$1;
(statearr_74935_77248[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (77))){
var inst_74527 = (state_74873[(28)]);
var inst_74724 = (state_74873[(18)]);
var inst_74729 = com.wsscode.pathom.core.add_error(inst_74527,inst_74724);
var state_74873__$1 = state_74873;
var statearr_74936_77249 = state_74873__$1;
(statearr_74936_77249[(2)] = inst_74729);

(statearr_74936_77249[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (95))){
var inst_74787 = [key];
var inst_74788 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_74789 = cljs.core.PersistentHashMap.fromArrays(inst_74787,inst_74788);
var state_74873__$1 = state_74873;
var statearr_74937_77250 = state_74873__$1;
(statearr_74937_77250[(2)] = inst_74789);

(statearr_74937_77250[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (54))){
var inst_74854 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74938_77251 = state_74873__$1;
(statearr_74938_77251[(2)] = inst_74854);

(statearr_74938_77251[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (92))){
var inst_74517 = (state_74873[(27)]);
var inst_74527 = (state_74873[(28)]);
var inst_74626 = (state_74873[(43)]);
var inst_74510 = (state_74873[(21)]);
var inst_74777 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_74778 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_74517];
var inst_74779 = cljs.core.PersistentHashMap.fromArrays(inst_74777,inst_74778);
var inst_74780 = com.wsscode.pathom.trace.trace(inst_74527,inst_74779);
var inst_74781 = com.wsscode.pathom.core.add_error(inst_74527,inst_74626);
var inst_74784 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74785 = cljs.core.seq(inst_74510);
var state_74873__$1 = (function (){var statearr_74939 = state_74873;
(statearr_74939[(44)] = inst_74780);

(statearr_74939[(45)] = inst_74781);

(statearr_74939[(46)] = inst_74784);

return statearr_74939;
})();
if(inst_74785){
var statearr_74940_77252 = state_74873__$1;
(statearr_74940_77252[(1)] = (95));

} else {
var statearr_74941_77253 = state_74873__$1;
(statearr_74941_77253[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (104))){
var inst_74845 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74942_77254 = state_74873__$1;
(statearr_74942_77254[(2)] = inst_74845);

(statearr_74942_77254[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (15))){
var inst_74544 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
if(cljs.core.truth_(inst_74544)){
var statearr_74943_77255 = state_74873__$1;
(statearr_74943_77255[(1)] = (16));

} else {
var statearr_74944_77256 = state_74873__$1;
(statearr_74944_77256[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (48))){
var inst_74614 = (state_74873[(2)]);
var _ = (function (){var statearr_74945 = state_74873;
(statearr_74945[(4)] = cljs.core.rest((state_74873[(4)])));

return statearr_74945;
})();
var state_74873__$1 = state_74873;
var statearr_74946_77257 = state_74873__$1;
(statearr_74946_77257[(2)] = inst_74614);

(statearr_74946_77257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (50))){
var inst_74626 = (state_74873[(43)]);
var inst_74633 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_74626);
var state_74873__$1 = state_74873;
if(cljs.core.truth_(inst_74633)){
var statearr_74947_77258 = state_74873__$1;
(statearr_74947_77258[(1)] = (52));

} else {
var statearr_74956_77259 = state_74873__$1;
(statearr_74956_77259[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (75))){
var inst_74680 = (state_74873[(7)]);
var inst_74516 = (state_74873[(8)]);
var inst_74525 = (state_74873[(38)]);
var inst_74711 = (state_74873[(11)]);
var inst_74509 = (state_74873[(36)]);
var inst_74528 = (state_74873[(16)]);
var inst_74489 = (state_74873[(23)]);
var inst_74500 = (state_74873[(13)]);
var inst_74523 = (state_74873[(40)]);
var inst_74502 = (state_74873[(15)]);
var inst_74491 = (state_74873[(24)]);
var inst_74501 = (state_74873[(14)]);
var inst_74510 = (state_74873[(21)]);
var inst_74724 = (state_74873[(18)]);
var inst_74524 = (state_74873[(41)]);
var inst_74526 = (state_74873[(26)]);
var inst_74527 = (state_74873[(28)]);
var inst_74529 = (state_74873[(39)]);
var inst_74522 = (state_74873[(37)]);
var inst_74517 = (state_74873[(27)]);
var inst_74503 = (state_74873[(12)]);
var inst_74532 = (state_74873[(42)]);
var inst_74627 = (state_74873[(9)]);
var inst_74492 = (state_74873[(25)]);
var inst_74721 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74722 = [inst_74680,inst_74516];
var inst_74723 = cljs.core.PersistentHashMap.fromArrays(inst_74721,inst_74722);
var inst_74724__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_74723);
var inst_74725 = (function (){var input = inst_74525;
var temp__5802__auto____$1 = inst_74711;
var step = inst_74509;
var entity = inst_74528;
var key_SINGLEQUOTE_ = inst_74516;
var vec__74486 = inst_74489;
var response = inst_74680;
var vec__74505 = inst_74500;
var cache_QMARK_ = inst_74523;
var out_left = inst_74502;
var first__74488 = inst_74491;
var failed_resolvers = inst_74501;
var seq__74506 = inst_74510;
var err = inst_74724__$1;
var batch_QMARK_ = inst_74524;
var output = inst_74526;
var env__$2 = inst_74527;
var e = inst_74529;
var map__74515 = inst_74522;
var resolver_sym = inst_74517;
var vec__74512 = inst_74509;
var waiting__$1 = inst_74503;
var G__74484 = inst_74500;
var trace_data = inst_74532;
var first__74507 = inst_74509;
var resolver = inst_74522;
var replan = inst_74627;
var seq__74487 = inst_74492;
var tail = inst_74510;
return (function (p1__74473_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__74473_SHARP_], 0));
});
})();
var inst_74726 = com.wsscode.pathom.core.swap_entity_BANG_(inst_74527,inst_74725);
var inst_74727 = cljs.core.seq(inst_74510);
var state_74873__$1 = (function (){var statearr_74959 = state_74873;
(statearr_74959[(18)] = inst_74724__$1);

(statearr_74959[(47)] = inst_74726);

return statearr_74959;
})();
if(inst_74727){
var statearr_74961_77263 = state_74873__$1;
(statearr_74961_77263[(1)] = (77));

} else {
var statearr_74962_77264 = state_74873__$1;
(statearr_74962_77264[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (99))){
var state_74873__$1 = state_74873;
var statearr_74963_77266 = state_74873__$1;
(statearr_74963_77266[(2)] = null);

(statearr_74963_77266[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (21))){
var inst_74532 = (state_74873[(42)]);
var inst_74516 = (state_74873[(8)]);
var inst_74527 = (state_74873[(28)]);
var inst_74560 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_74532,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_74516], 0));
var inst_74561 = com.wsscode.pathom.trace.trace(inst_74527,inst_74560);
var inst_74563 = com.wsscode.pathom.parser.watch_pending_key(inst_74527,inst_74516);
var state_74873__$1 = (function (){var statearr_74964 = state_74873;
(statearr_74964[(48)] = inst_74561);

return statearr_74964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74873__$1,(24),inst_74563);
} else {
if((state_val_74874 === (31))){
var inst_74527 = (state_74873[(28)]);
var inst_74529 = (state_74873[(39)]);
var inst_74580 = (state_74873[(34)]);
var _ = (function (){var statearr_74965 = state_74873;
(statearr_74965[(4)] = cljs.core.cons((34),(state_74873[(4)])));

return statearr_74965;
})();
var inst_74580__$1 = com.wsscode.pathom.connect.call_resolver(inst_74527,inst_74529);
var inst_74581 = com.wsscode.async.async_cljs.chan_QMARK_(inst_74580__$1);
var state_74873__$1 = (function (){var statearr_74966 = state_74873;
(statearr_74966[(34)] = inst_74580__$1);

return statearr_74966;
})();
if(inst_74581){
var statearr_74967_77280 = state_74873__$1;
(statearr_74967_77280[(1)] = (35));

} else {
var statearr_74968_77281 = state_74873__$1;
(statearr_74968_77281[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (32))){
var inst_74617 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74972_77282 = state_74873__$1;
(statearr_74972_77282[(2)] = inst_74617);

(statearr_74972_77282[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (40))){
var state_74873__$1 = state_74873;
var statearr_74973_77283 = state_74873__$1;
(statearr_74973_77283[(1)] = (43));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (91))){
var inst_74765 = (state_74873[(49)]);
var inst_74503 = (state_74873[(12)]);
var inst_74770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74765,(0),null);
var inst_74773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74765,(1),null);
var inst_74774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74765,(2),null);
var tmp74970 = inst_74503;
var inst_74500 = inst_74770;
var inst_74501 = inst_74773;
var inst_74502 = inst_74774;
var inst_74503__$1 = tmp74970;
var state_74873__$1 = (function (){var statearr_74979 = state_74873;
(statearr_74979[(13)] = inst_74500);

(statearr_74979[(14)] = inst_74501);

(statearr_74979[(15)] = inst_74502);

(statearr_74979[(12)] = inst_74503__$1);

return statearr_74979;
})();
var statearr_74980_77284 = state_74873__$1;
(statearr_74980_77284[(2)] = null);

(statearr_74980_77284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (56))){
var inst_74516 = (state_74873[(8)]);
var inst_74627 = (state_74873[(9)]);
var inst_74644 = cljs.core.PersistentHashMap.EMPTY;
var inst_74645 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74646 = [inst_74516];
var inst_74647 = cljs.core.PersistentHashMap.fromArrays(inst_74645,inst_74646);
var inst_74648 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_74647);
var inst_74649 = (inst_74627.cljs$core$IFn$_invoke$arity$2 ? inst_74627.cljs$core$IFn$_invoke$arity$2(inst_74644,inst_74648) : inst_74627.call(null,inst_74644,inst_74648));
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74873__$1,(58),inst_74649);
} else {
if((state_val_74874 === (33))){
var inst_74574 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74981_77285 = state_74873__$1;
(statearr_74981_77285[(2)] = inst_74574);

(statearr_74981_77285[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (13))){
var state_74873__$1 = state_74873;
var statearr_74982_77286 = state_74873__$1;
(statearr_74982_77286[(2)] = processing_sequence);

(statearr_74982_77286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (22))){
var state_74873__$1 = state_74873;
var statearr_74983_77287 = state_74873__$1;
(statearr_74983_77287[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (90))){
var inst_74765 = (state_74873[(49)]);
var inst_74765__$1 = (state_74873[(2)]);
var state_74873__$1 = (function (){var statearr_74985 = state_74873;
(statearr_74985[(49)] = inst_74765__$1);

return statearr_74985;
})();
if(cljs.core.truth_(inst_74765__$1)){
var statearr_74986_77288 = state_74873__$1;
(statearr_74986_77288[(1)] = (91));

} else {
var statearr_74987_77289 = state_74873__$1;
(statearr_74987_77289[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (36))){
var inst_74580 = (state_74873[(34)]);
var inst_74587 = com.wsscode.async.async_cljs.promise_QMARK_(inst_74580);
var state_74873__$1 = state_74873;
if(cljs.core.truth_(inst_74587)){
var statearr_74988_77290 = state_74873__$1;
(statearr_74988_77290[(1)] = (39));

} else {
var statearr_74989_77291 = state_74873__$1;
(statearr_74989_77291[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (41))){
var inst_74607 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74990_77292 = state_74873__$1;
(statearr_74990_77292[(2)] = inst_74607);

(statearr_74990_77292[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (89))){
var inst_74850 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74991_77295 = state_74873__$1;
(statearr_74991_77295[(2)] = inst_74850);

(statearr_74991_77295[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (100))){
var inst_74848 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74992_77296 = state_74873__$1;
(statearr_74992_77296[(2)] = inst_74848);

(statearr_74992_77296[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (43))){
var inst_74580 = (state_74873[(34)]);
var state_74873__$1 = state_74873;
var statearr_74993_77298 = state_74873__$1;
(statearr_74993_77298[(2)] = inst_74580);

(statearr_74993_77298[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (61))){
var inst_74674 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_74994_77299 = state_74873__$1;
(statearr_74994_77299[(2)] = inst_74674);

(statearr_74994_77299[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (29))){
var state_74873__$1 = state_74873;
var statearr_74995_77300 = state_74873__$1;
(statearr_74995_77300[(2)] = null);

(statearr_74995_77300[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (44))){
var state_74873__$1 = state_74873;
var statearr_74996_77301 = state_74873__$1;
(statearr_74996_77301[(2)] = null);

(statearr_74996_77301[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (93))){
var inst_74801 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75001_77302 = state_74873__$1;
(statearr_75001_77302[(2)] = inst_74801);

(statearr_75001_77302[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (6))){
var inst_74860 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75004_77303 = state_74873__$1;
(statearr_75004_77303[(2)] = inst_74860);

(statearr_75004_77303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (28))){
var state_74873__$1 = state_74873;
var statearr_75005_77305 = state_74873__$1;
(statearr_75005_77305[(2)] = null);

(statearr_75005_77305[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (64))){
var inst_74626 = (state_74873[(43)]);
var inst_74760 = com.wsscode.async.async_cljs.error_QMARK_(inst_74626);
var state_74873__$1 = state_74873;
if(inst_74760){
var statearr_75007_77307 = state_74873__$1;
(statearr_75007_77307[(1)] = (87));

} else {
var statearr_75008_77308 = state_74873__$1;
(statearr_75008_77308[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (103))){
var inst_74626 = (state_74873[(43)]);
var inst_74517 = (state_74873[(27)]);
var inst_74527 = (state_74873[(28)]);
var inst_74823 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74824 = [inst_74626];
var inst_74825 = cljs.core.PersistentHashMap.fromArrays(inst_74823,inst_74824);
var inst_74826 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_74825);
var inst_74830 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74831 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_74517,inst_74626];
var inst_74832 = cljs.core.PersistentHashMap.fromArrays(inst_74830,inst_74831);
var inst_74833 = com.wsscode.pathom.trace.trace(inst_74527,inst_74832);
var inst_74834 = com.wsscode.pathom.core.add_error(inst_74527,inst_74826);
var inst_74835 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74836 = [key];
var inst_74837 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_74838 = cljs.core.PersistentHashMap.fromArrays(inst_74836,inst_74837);
var inst_74839 = [out,inst_74826,inst_74838];
var inst_74840 = cljs.core.PersistentHashMap.fromArrays(inst_74835,inst_74839);
var state_74873__$1 = (function (){var statearr_75010 = state_74873;
(statearr_75010[(50)] = inst_74833);

(statearr_75010[(51)] = inst_74834);

return statearr_75010;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74873__$1,(105),ch,inst_74840);
} else {
if((state_val_74874 === (51))){
var inst_74856 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75012_77319 = state_74873__$1;
(statearr_75012_77319[(2)] = inst_74856);

(statearr_75012_77319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (25))){
var inst_74567 = (state_74873[(31)]);
var state_74873__$1 = state_74873;
var statearr_75013_77320 = state_74873__$1;
(statearr_75013_77320[(2)] = inst_74567);

(statearr_75013_77320[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (34))){
var _ = (function (){var statearr_75015 = state_74873;
(statearr_75015[(4)] = cljs.core.rest((state_74873[(4)])));

return statearr_75015;
})();
var state_74873__$1 = state_74873;
var ex75011 = (state_74873__$1[(2)]);
var statearr_75017_77321 = state_74873__$1;
(statearr_75017_77321[(5)] = ex75011);


var statearr_75019_77322 = state_74873__$1;
(statearr_75019_77322[(1)] = (33));

(statearr_75019_77322[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (17))){
var inst_74532 = (state_74873[(42)]);
var inst_74527 = (state_74873[(28)]);
var inst_74517 = (state_74873[(27)]);
var inst_74529 = (state_74873[(39)]);
var inst_74550 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_74532,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_74551 = com.wsscode.pathom.trace.trace(inst_74527,inst_74550);
var inst_74552 = com.wsscode.pathom.connect.cached_async_call_resolver_fn(inst_74527,inst_74517,inst_74529,params);
var state_74873__$1 = (function (){var statearr_75021 = state_74873;
(statearr_75021[(52)] = inst_74551);

return statearr_75021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74873__$1,(20),inst_74552);
} else {
if((state_val_74874 === (3))){
var inst_74862 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74873__$1,inst_74862);
} else {
if((state_val_74874 === (12))){
var inst_74624 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75022_77323 = state_74873__$1;
(statearr_75022_77323[(2)] = inst_74624);

(statearr_75022_77323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (2))){
var inst_74500 = (state_74873[(13)]);
var inst_74509 = (state_74873[(36)]);
var inst_74508 = cljs.core.seq(inst_74500);
var inst_74509__$1 = cljs.core.first(inst_74508);
var inst_74510 = cljs.core.next(inst_74508);
var state_74873__$1 = (function (){var statearr_75023 = state_74873;
(statearr_75023[(36)] = inst_74509__$1);

(statearr_75023[(21)] = inst_74510);

return statearr_75023;
})();
if(cljs.core.truth_(inst_74509__$1)){
var statearr_75024_77324 = state_74873__$1;
(statearr_75024_77324[(1)] = (4));

} else {
var statearr_75025_77325 = state_74873__$1;
(statearr_75025_77325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (66))){
var inst_74680 = (state_74873[(7)]);
var inst_74516 = (state_74873[(8)]);
var inst_74685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74680,inst_74516);
var inst_74686 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_74685) : com.wsscode.pathom.core.break_values.call(null,inst_74685));
var inst_74687 = cljs.core.not(inst_74686);
var state_74873__$1 = state_74873;
var statearr_75028_77326 = state_74873__$1;
(statearr_75028_77326[(2)] = inst_74687);

(statearr_75028_77326[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (23))){
var inst_74622 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75029_77327 = state_74873__$1;
(statearr_75029_77327[(2)] = inst_74622);

(statearr_75029_77327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (47))){
var inst_74612 = cljs.core.PersistentHashMap.EMPTY;
var state_74873__$1 = state_74873;
var statearr_75030_77328 = state_74873__$1;
(statearr_75030_77328[(2)] = inst_74612);

(statearr_75030_77328[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (35))){
var inst_74580 = (state_74873[(34)]);
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74873__$1,(38),inst_74580);
} else {
if((state_val_74874 === (82))){
var inst_74680 = (state_74873[(7)]);
var state_74873__$1 = state_74873;
var statearr_75033_77329 = state_74873__$1;
(statearr_75033_77329[(2)] = inst_74680);

(statearr_75033_77329[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (76))){
var inst_74756 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75035_77330 = state_74873__$1;
(statearr_75035_77330[(2)] = inst_74756);

(statearr_75035_77330[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (97))){
var inst_74626 = (state_74873[(43)]);
var inst_74784 = (state_74873[(46)]);
var inst_74794 = (state_74873[(2)]);
var inst_74795 = [out,inst_74626,inst_74794];
var inst_74796 = cljs.core.PersistentHashMap.fromArrays(inst_74784,inst_74795);
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74873__$1,(94),ch,inst_74796);
} else {
if((state_val_74874 === (19))){
var inst_74548 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75037_77331 = state_74873__$1;
(statearr_75037_77331[(2)] = inst_74548);

(statearr_75037_77331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (57))){
var inst_74676 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75038_77332 = state_74873__$1;
(statearr_75038_77332[(2)] = inst_74676);

(statearr_75038_77332[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (68))){
var inst_74690 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
if(cljs.core.truth_(inst_74690)){
var statearr_75039_77335 = state_74873__$1;
(statearr_75039_77335[(1)] = (69));

} else {
var statearr_75040_77336 = state_74873__$1;
(statearr_75040_77336[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (11))){
var inst_74503 = (state_74873[(12)]);
var inst_74516 = (state_74873[(8)]);
var inst_74558 = cljs.core.contains_QMARK_(inst_74503,inst_74516);
var state_74873__$1 = state_74873;
if(inst_74558){
var statearr_75041_77337 = state_74873__$1;
(statearr_75041_77337[(1)] = (21));

} else {
var statearr_75042_77340 = state_74873__$1;
(statearr_75042_77340[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (9))){
var inst_74527 = (state_74873[(28)]);
var inst_74501 = (state_74873[(14)]);
var inst_74517 = (state_74873[(27)]);
var inst_74626 = (state_74873[(43)]);
var inst_74626__$1 = (state_74873[(2)]);
var inst_74627 = com.wsscode.pathom.connect.parallel_reader_replan_fn(inst_74527,inst_74501,inst_74517,max_resolver_weight,ch,out);
var inst_74628 = (new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820) === inst_74626__$1);
var state_74873__$1 = (function (){var statearr_75044 = state_74873;
(statearr_75044[(43)] = inst_74626__$1);

(statearr_75044[(9)] = inst_74627);

return statearr_75044;
})();
if(cljs.core.truth_(inst_74628)){
var statearr_75045_77342 = state_74873__$1;
(statearr_75045_77342[(1)] = (49));

} else {
var statearr_75046_77343 = state_74873__$1;
(statearr_75046_77343[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (5))){
var inst_74858 = cljs.core.async.close_BANG_(ch);
var state_74873__$1 = state_74873;
var statearr_75047_77344 = state_74873__$1;
(statearr_75047_77344[(2)] = inst_74858);

(statearr_75047_77344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (83))){
var inst_74510 = (state_74873[(21)]);
var inst_74742 = (state_74873[(2)]);
var inst_74743 = cljs.core.seq(inst_74510);
var state_74873__$1 = (function (){var statearr_75048 = state_74873;
(statearr_75048[(33)] = inst_74742);

return statearr_75048;
})();
if(inst_74743){
var statearr_75049_77364 = state_74873__$1;
(statearr_75049_77364[(1)] = (84));

} else {
var statearr_75050_77365 = state_74873__$1;
(statearr_75050_77365[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (14))){
var inst_74524 = (state_74873[(41)]);
var state_74873__$1 = state_74873;
var statearr_75051_77366 = state_74873__$1;
(statearr_75051_77366[(2)] = inst_74524);

(statearr_75051_77366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (45))){
var inst_74605 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75052_77367 = state_74873__$1;
(statearr_75052_77367[(2)] = inst_74605);

(statearr_75052_77367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (53))){
var inst_74626 = (state_74873[(43)]);
var inst_74678 = cljs.core.map_QMARK_(inst_74626);
var state_74873__$1 = state_74873;
if(inst_74678){
var statearr_75053_77368 = state_74873__$1;
(statearr_75053_77368[(1)] = (63));

} else {
var statearr_75054_77369 = state_74873__$1;
(statearr_75054_77369[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (78))){
var state_74873__$1 = state_74873;
var statearr_75055_77370 = state_74873__$1;
(statearr_75055_77370[(2)] = null);

(statearr_75055_77370[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (26))){
var state_74873__$1 = state_74873;
var statearr_75056_77371 = state_74873__$1;
(statearr_75056_77371[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_75056_77371[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (16))){
var inst_74527 = (state_74873[(28)]);
var inst_74546 = com.wsscode.pathom.connect.parallel_batch(inst_74527);
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74873__$1,(19),inst_74546);
} else {
if((state_val_74874 === (81))){
var inst_74680 = (state_74873[(7)]);
var inst_74516 = (state_74873[(8)]);
var inst_74739 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_74680,inst_74516,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_74873__$1 = state_74873;
var statearr_75057_77372 = state_74873__$1;
(statearr_75057_77372[(2)] = inst_74739);

(statearr_75057_77372[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (79))){
var inst_74680 = (state_74873[(7)]);
var inst_74516 = (state_74873[(8)]);
var inst_74732 = (state_74873[(2)]);
var inst_74733 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74735 = cljs.core.contains_QMARK_(inst_74680,inst_74516);
var inst_74736 = (!(inst_74735));
var state_74873__$1 = (function (){var statearr_75058 = state_74873;
(statearr_75058[(53)] = inst_74732);

(statearr_75058[(19)] = inst_74733);

return statearr_75058;
})();
if(inst_74736){
var statearr_75059_77373 = state_74873__$1;
(statearr_75059_77373[(1)] = (81));

} else {
var statearr_75060_77374 = state_74873__$1;
(statearr_75060_77374[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (38))){
var inst_74584 = (state_74873[(2)]);
var inst_74585 = com.wsscode.async.async_cljs.throw_err(inst_74584);
var state_74873__$1 = state_74873;
var statearr_75061_77375 = state_74873__$1;
(statearr_75061_77375[(2)] = inst_74585);

(statearr_75061_77375[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (98))){
var inst_74626 = (state_74873[(43)]);
var inst_74627 = (state_74873[(9)]);
var inst_74804 = cljs.core.PersistentHashMap.EMPTY;
var inst_74806 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74807 = [inst_74626];
var inst_74808 = cljs.core.PersistentHashMap.fromArrays(inst_74806,inst_74807);
var inst_74809 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_74808);
var inst_74811 = (inst_74627.cljs$core$IFn$_invoke$arity$2 ? inst_74627.cljs$core$IFn$_invoke$arity$2(inst_74804,inst_74809) : inst_74627.call(null,inst_74804,inst_74809));
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74873__$1,(101),inst_74811);
} else {
if((state_val_74874 === (87))){
var inst_74627 = (state_74873[(9)]);
var inst_74626 = (state_74873[(43)]);
var inst_74762 = cljs.core.PersistentHashMap.EMPTY;
var inst_74763 = (inst_74627.cljs$core$IFn$_invoke$arity$2 ? inst_74627.cljs$core$IFn$_invoke$arity$2(inst_74762,inst_74626) : inst_74627.call(null,inst_74762,inst_74626));
var state_74873__$1 = state_74873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74873__$1,(90),inst_74763);
} else {
if((state_val_74874 === (30))){
var inst_74620 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75069_77380 = state_74873__$1;
(statearr_75069_77380[(2)] = inst_74620);

(statearr_75069_77380[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (73))){
var inst_74711 = (state_74873[(11)]);
var inst_74711__$1 = (state_74873[(2)]);
var state_74873__$1 = (function (){var statearr_75070 = state_74873;
(statearr_75070[(11)] = inst_74711__$1);

return statearr_75070;
})();
if(cljs.core.truth_(inst_74711__$1)){
var statearr_75071_77384 = state_74873__$1;
(statearr_75071_77384[(1)] = (74));

} else {
var statearr_75072_77385 = state_74873__$1;
(statearr_75072_77385[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (96))){
var inst_74502 = (state_74873[(15)]);
var inst_74791 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_74792 = cljs.core.zipmap(inst_74502,inst_74791);
var state_74873__$1 = state_74873;
var statearr_75073_77389 = state_74873__$1;
(statearr_75073_77389[(2)] = inst_74792);

(statearr_75073_77389[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (10))){
var inst_74524 = (state_74873[(41)]);
var state_74873__$1 = state_74873;
if(cljs.core.truth_(inst_74524)){
var statearr_75074_77391 = state_74873__$1;
(statearr_75074_77391[(1)] = (13));

} else {
var statearr_75075_77392 = state_74873__$1;
(statearr_75075_77392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (18))){
var inst_74556 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75076_77394 = state_74873__$1;
(statearr_75076_77394[(2)] = inst_74556);

(statearr_75076_77394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (105))){
var inst_74842 = (state_74873[(2)]);
var inst_74843 = cljs.core.async.close_BANG_(ch);
var state_74873__$1 = (function (){var statearr_75077 = state_74873;
(statearr_75077[(54)] = inst_74842);

return statearr_75077;
})();
var statearr_75078_77397 = state_74873__$1;
(statearr_75078_77397[(2)] = inst_74843);

(statearr_75078_77397[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (52))){
var inst_74527 = (state_74873[(28)]);
var inst_74637 = (state_74873[(32)]);
var inst_74516 = (state_74873[(8)]);
var inst_74635 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_74527);
var inst_74636 = cljs.core.keys(inst_74635);
var inst_74637__$1 = cljs.core.set(inst_74636);
var inst_74638 = cljs.core.contains_QMARK_(inst_74637__$1,inst_74516);
var state_74873__$1 = (function (){var statearr_75079 = state_74873;
(statearr_75079[(32)] = inst_74637__$1);

return statearr_75079;
})();
if(inst_74638){
var statearr_75080_77399 = state_74873__$1;
(statearr_75080_77399[(1)] = (55));

} else {
var statearr_75081_77400 = state_74873__$1;
(statearr_75081_77400[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (67))){
var inst_74683 = (state_74873[(55)]);
var state_74873__$1 = state_74873;
var statearr_75082_77401 = state_74873__$1;
(statearr_75082_77401[(2)] = inst_74683);

(statearr_75082_77401[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (71))){
var inst_74758 = (state_74873[(2)]);
var state_74873__$1 = state_74873;
var statearr_75083_77403 = state_74873__$1;
(statearr_75083_77403[(2)] = inst_74758);

(statearr_75083_77403[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (42))){
var inst_74599 = (state_74873[(2)]);
var inst_74600 = com.wsscode.async.async_cljs.consumer_pair(inst_74599);
var state_74873__$1 = state_74873;
var statearr_75084_77412 = state_74873__$1;
(statearr_75084_77412[(2)] = inst_74600);

(statearr_75084_77412[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (80))){
var inst_74753 = (state_74873[(2)]);
var inst_74754 = cljs.core.async.close_BANG_(ch);
var state_74873__$1 = (function (){var statearr_75085 = state_74873;
(statearr_75085[(56)] = inst_74753);

return statearr_75085;
})();
var statearr_75086_77413 = state_74873__$1;
(statearr_75086_77413[(2)] = inst_74754);

(statearr_75086_77413[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (37))){
var inst_74609 = (state_74873[(35)]);
var inst_74609__$1 = (state_74873[(2)]);
var state_74873__$1 = (function (){var statearr_75087 = state_74873;
(statearr_75087[(35)] = inst_74609__$1);

return statearr_75087;
})();
if(cljs.core.truth_(inst_74609__$1)){
var statearr_75088_77414 = state_74873__$1;
(statearr_75088_77414[(1)] = (46));

} else {
var statearr_75089_77415 = state_74873__$1;
(statearr_75089_77415[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (63))){
var inst_74626 = (state_74873[(43)]);
var inst_74525 = (state_74873[(38)]);
var inst_74509 = (state_74873[(36)]);
var inst_74528 = (state_74873[(16)]);
var inst_74516 = (state_74873[(8)]);
var inst_74489 = (state_74873[(23)]);
var inst_74680 = (state_74873[(7)]);
var inst_74500 = (state_74873[(13)]);
var inst_74523 = (state_74873[(40)]);
var inst_74502 = (state_74873[(15)]);
var inst_74491 = (state_74873[(24)]);
var inst_74501 = (state_74873[(14)]);
var inst_74510 = (state_74873[(21)]);
var inst_74524 = (state_74873[(41)]);
var inst_74526 = (state_74873[(26)]);
var inst_74527 = (state_74873[(28)]);
var inst_74529 = (state_74873[(39)]);
var inst_74522 = (state_74873[(37)]);
var inst_74517 = (state_74873[(27)]);
var inst_74503 = (state_74873[(12)]);
var inst_74532 = (state_74873[(42)]);
var inst_74627 = (state_74873[(9)]);
var inst_74492 = (state_74873[(25)]);
var inst_74683 = (state_74873[(55)]);
var inst_74680__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_74626,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_74681 = (function (){var input = inst_74525;
var step = inst_74509;
var entity = inst_74528;
var key_SINGLEQUOTE_ = inst_74516;
var vec__74486 = inst_74489;
var response = inst_74680__$1;
var vec__74505 = inst_74500;
var cache_QMARK_ = inst_74523;
var out_left = inst_74502;
var first__74488 = inst_74491;
var failed_resolvers = inst_74501;
var seq__74506 = inst_74510;
var batch_QMARK_ = inst_74524;
var output = inst_74526;
var env__$2 = inst_74527;
var e = inst_74529;
var map__74515 = inst_74522;
var resolver_sym = inst_74517;
var vec__74512 = inst_74509;
var waiting__$1 = inst_74503;
var G__74484 = inst_74500;
var trace_data = inst_74532;
var first__74507 = inst_74509;
var resolver = inst_74522;
var replan = inst_74627;
var seq__74487 = inst_74492;
var tail = inst_74510;
return (function (p1__74472_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__74472_SHARP_], 0));
});
})();
var inst_74682 = com.wsscode.pathom.core.swap_entity_BANG_(inst_74527,inst_74681);
var inst_74683__$1 = cljs.core.contains_QMARK_(inst_74680__$1,inst_74516);
var state_74873__$1 = (function (){var statearr_75092 = state_74873;
(statearr_75092[(7)] = inst_74680__$1);

(statearr_75092[(57)] = inst_74682);

(statearr_75092[(55)] = inst_74683__$1);

return statearr_75092;
})();
if(inst_74683__$1){
var statearr_75095_77416 = state_74873__$1;
(statearr_75095_77416[(1)] = (66));

} else {
var statearr_75096_77417 = state_74873__$1;
(statearr_75096_77417[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (94))){
var inst_74798 = (state_74873[(2)]);
var inst_74799 = cljs.core.async.close_BANG_(ch);
var state_74873__$1 = (function (){var statearr_75101 = state_74873;
(statearr_75101[(58)] = inst_74798);

return statearr_75101;
})();
var statearr_75102_77418 = state_74873__$1;
(statearr_75102_77418[(2)] = inst_74799);

(statearr_75102_77418[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (8))){
var inst_74523 = (state_74873[(40)]);
var state_74873__$1 = state_74873;
if(cljs.core.truth_(inst_74523)){
var statearr_75103_77419 = state_74873__$1;
(statearr_75103_77419[(1)] = (10));

} else {
var statearr_75104_77421 = state_74873__$1;
(statearr_75104_77421[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (49))){
var inst_74503 = (state_74873[(12)]);
var inst_74516 = (state_74873[(8)]);
var inst_74501 = (state_74873[(14)]);
var inst_74502 = (state_74873[(15)]);
var inst_74630 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_74503,inst_74516);
var tmp75099 = inst_74502;
var tmp75100 = inst_74501;
var inst_74500 = plan;
var inst_74501__$1 = tmp75100;
var inst_74502__$1 = tmp75099;
var inst_74503__$1 = inst_74630;
var state_74873__$1 = (function (){var statearr_75105 = state_74873;
(statearr_75105[(13)] = inst_74500);

(statearr_75105[(14)] = inst_74501__$1);

(statearr_75105[(15)] = inst_74502__$1);

(statearr_75105[(12)] = inst_74503__$1);

return statearr_75105;
})();
var statearr_75108_77423 = state_74873__$1;
(statearr_75108_77423[(2)] = null);

(statearr_75108_77423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74874 === (84))){
var inst_74742 = (state_74873[(33)]);
var inst_74516 = (state_74873[(8)]);
var inst_74745 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_74742,inst_74516,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_74873__$1 = state_74873;
var statearr_75109_77426 = state_74873__$1;
(statearr_75109_77426[(2)] = inst_74745);

(statearr_75109_77426[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto____0 = (function (){
var statearr_75110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75110[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto__);

(statearr_75110[(1)] = (1));

return statearr_75110;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto____1 = (function (state_74873){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_74873);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e75111){var ex__42124__auto__ = e75111;
var statearr_75112_77427 = state_74873;
(statearr_75112_77427[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_74873[(4)]))){
var statearr_75113_77428 = state_74873;
(statearr_75113_77428[(1)] = cljs.core.first((state_74873[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77431 = state_74873;
state_74873 = G__77431;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto__ = function(state_74873){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto____1.call(this,state_74873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_75114 = f__42153__auto__();
(statearr_75114[(6)] = c__42152__auto___77191);

return statearr_75114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__75115){
var map__75116 = p__75115;
var map__75116__$1 = cljs.core.__destructure_map(map__75116);
var env = map__75116__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75116__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__75117){
var map__75118 = p__75117;
var map__75118__$1 = cljs.core.__destructure_map(map__75118);
var env = map__75118__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75118__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var temp__5802__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5802__auto__)){
var attr = temp__5802__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007).cljs$core$IFn$_invoke$arity$1(indexes),attr)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,com.wsscode.pathom.core.ident_value(env)]);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Helper to return a resolver map
 */
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__75126,resolve){
var map__75127 = p__75126;
var map__75127__$1 = cljs.core.__destructure_map(map__75127);
var options = map__75127__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75127__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

if(cljs.core.truth_((function (){var and__5043__auto__ = options;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__75128){
return cljs.core.map_QMARK_(G__75128);
})], null),(function (G__75128){
return cljs.core.map_QMARK_(G__75128);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),options)));
} else {
return and__5043__auto__;
}
})())){
cljs.spec.alpha.explain(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__75133){
return cljs.core.map_QMARK_(G__75133);
})], null),(function (G__75133){
return cljs.core.map_QMARK_(G__75133);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),options);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid options on resolver of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"explain","explain",484226146),cljs.spec.alpha.explain_data(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__75146){
return cljs.core.map_QMARK_(G__75146);
})], null),(function (G__75146){
return cljs.core.map_QMARK_(G__75146);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),options)], null));
} else {
}

var G__75151 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__75151) : transform.call(null,G__75151));
} else {
return G__75151;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","defresolver-args","com.wsscode.pathom.connect/defresolver-args",1636311031),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
com.wsscode.pathom.connect.as_entry_QMARK_ = (function com$wsscode$pathom$connect$as_entry_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.first(x));
});
com.wsscode.pathom.connect.extract_destructure_map_keys_as_keywords = (function com$wsscode$pathom$connect$extract_destructure_map_keys_as_keywords(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.as_entry_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__75163){
var vec__75164 = p__75163;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75164,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75164,(1),null);
if((((k instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keys",cljs.core.name(k))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75162_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = cljs.core.namespace(p1__75162_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.namespace(k);
}
})(),cljs.core.name(p1__75162_SHARP_));
}),val);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null);
}
}))),m);
});
com.wsscode.pathom.connect.params__GT_resolver_options = (function com$wsscode$pathom$connect$params__GT_resolver_options(p__75169){
var map__75170 = p__75169;
var map__75170__$1 = cljs.core.__destructure_map(map__75170);
var arglist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75170__$1,new cljs.core.Keyword(null,"arglist","arglist",-1808272150));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75170__$1,new cljs.core.Keyword(null,"options","options",99638489));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75170__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var docstring = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75170__$1,new cljs.core.Keyword(null,"docstring","docstring",879233117));
var vec__75172 = cljs.core.last(arglist);
var input_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75172,(0),null);
var input_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75172,(1),null);
var last_expr = cljs.core.last(body);
var G__75175 = options;
var G__75175__$1 = ((((cljs.core.map_QMARK_(last_expr)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303).cljs$core$IFn$_invoke$arity$1(options)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75175,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(last_expr) : com.wsscode.pathom.connect.data__GT_shape.call(null,last_expr))):G__75175);
var G__75175__$2 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75175__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","docstring","com.wsscode.pathom.connect/docstring",-1622119529),docstring):G__75175__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),input_type)) && (cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(options))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75175__$2,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),com.wsscode.pathom.connect.extract_destructure_map_keys_as_keywords(input_arg));
} else {
return G__75175__$2;
}
});
/**
 * Ensures arglist contains two elements.
 */
com.wsscode.pathom.connect.normalize_arglist = (function com$wsscode$pathom$connect$normalize_arglist(arglist){
var arglist__$1 = arglist;
while(true){
if((cljs.core.count(arglist__$1) < (2))){
var G__77442 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),arglist__$1);
arglist__$1 = G__77442;
continue;
} else {
return arglist__$1;
}
break;
}
});
com.wsscode.pathom.connect.full_symbol = (function com$wsscode$pathom$connect$full_symbol(sym,ns){
if(cljs.core.truth_(cljs.core.namespace(sym))){
return sym;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(sym));
}
});
com.wsscode.pathom.connect.attr_alias_name = (function com$wsscode$pathom$connect$attr_alias_name(from,to){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),(1)))),"->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),(1))))].join(''));
});
/**
 * Create a resolver that will convert property `from` to a property `to` with
 *   the same value. This only creates the alias in one direction
 */
com.wsscode.pathom.connect.alias_resolver = (function com$wsscode$pathom$connect$alias_resolver(from,to){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),com.wsscode.pathom.connect.attr_alias_name(from,to),new cljs.core.Keyword("com.wsscode.pathom.connect","alias?","com.wsscode.pathom.connect/alias?",-1915061463),true,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (_,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from)]);
})], null);
});
/**
 * Like alias-resolver, but returns a vector containing the alias in both directions.
 */
com.wsscode.pathom.connect.alias_resolver2 = (function com$wsscode$pathom$connect$alias_resolver2(from,to){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.alias_resolver(from,to),com.wsscode.pathom.connect.alias_resolver(to,from)], null);
});
/**
 * Create a simple resolver that always return `value` for `attribute`.
 */
com.wsscode.pathom.connect.constantly_resolver = (function com$wsscode$pathom$connect$constantly_resolver(var_args){
var G__75182 = arguments.length;
switch (G__75182) {
case 2:
return com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$2 = (function (attribute,value){
return com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"value","value",305978217),value], null));
}));

(com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1 = (function (p__75185){
var map__75186 = p__75185;
var map__75186__$1 = cljs.core.__destructure_map(map__75186);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75186__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75186__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75186__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sym__$1 = (function (){var or__5045__auto__ = sym;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(attribute),(1)))),"-constant"].join(''));
}
})();
return com.wsscode.pathom.connect.resolver(sym__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute], null)], null),(function (_,___$1){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,value]);
}));
}));

(com.wsscode.pathom.connect.constantly_resolver.cljs$lang$maxFixedArity = 2);

/**
 * Apply fn `f` to input `from` and spits the result with the name `to`.
 * 
 *   `f` receives a single argument, which is the input value from `from`.
 */
com.wsscode.pathom.connect.single_attr_resolver = (function com$wsscode$pathom$connect$single_attr_resolver(from,to,f){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.attr_alias_name(from,to)),"-single-attr-transform"].join(''));
return com.wsscode.pathom.connect.resolver(sym,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null)], null),(function (_,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__75191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75191) : f.call(null,G__75191));
})()]);
}));
});
/**
 * Similar single-attr-resolver, but `f` receives two arguments, `env` and the input.
 */
com.wsscode.pathom.connect.single_attr_resolver2 = (function com$wsscode$pathom$connect$single_attr_resolver2(from,to,f){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.attr_alias_name(from,to)),"-single-attr-transform"].join(''));
return com.wsscode.pathom.connect.resolver(sym,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null)], null),(function (env,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__75192 = env;
var G__75193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__75192,G__75193) : f.call(null,G__75192,G__75193));
})()]);
}));
});
/**
 * Helper to return a mutation map
 */
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__75194,mutate){
var map__75196 = p__75194;
var map__75196__$1 = cljs.core.__destructure_map(map__75196);
var options = map__75196__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75196__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__75197 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__75197) : transform.call(null,G__75197));
} else {
return G__75197;
}
});
/**
 * Reader for idents on connect, this reader will make a join to the ident making the
 *   context have that ident key and value. For example the ident [:user/id 123] will make
 *   a join to a context {:user/id 123}. This reader will continue if connect doesn't have
 *   a path to respond to that ident.
 * 
 *   This reader also supports params to add more context besides the entity value. To use
 *   that send the `:pathom/context` param with the join, as in:
 * 
 *   [{([:user/id 123] {:pathom/context {:user/foo "bar"}})
 *  [:user/name]}]
 * 
 *   In the previous case, the context will be the merge between the identity and the
 *   context, {:user/id 123 :user/foo "bar"} in this case.
 */
com.wsscode.pathom.connect.ident_reader = (function com$wsscode$pathom$connect$ident_reader(env){
var temp__5802__auto__ = com.wsscode.pathom.connect.indexed_ident(env);
if(cljs.core.truth_(temp__5802__auto__)){
var ent = temp__5802__auto__;
var extra_context = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","context","pathom/context",-1452257614)], null));
var ent__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ent,extra_context], 0));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ent__$1),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Like ident-reader, but ident key doesn't have to be in the index, this will respond
 *   to any ident join. Also supports extra context with :pathom/context param.
 */
com.wsscode.pathom.connect.open_ident_reader = (function com$wsscode$pathom$connect$open_ident_reader(env){
var temp__5802__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5802__auto__)){
var key = temp__5802__auto__;
var extra_context = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","context","pathom/context",-1452257614)], null));
var ent = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([key,com.wsscode.pathom.core.ident_value(env)]),extra_context], 0));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ent),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Return a resolver that will dispatch to single-fn when the input is a single value, and multi-fn when
 *   multiple inputs are provided (on batch cases).
 * 
 *   Many times the implementation for the single can be the same as the multi, getting the first item, and
 *   if you provide only one function (the multi-fn) we will setup the single one automatically running
 *   the multi and returning the first result.
 */
com.wsscode.pathom.connect.batch_resolver = (function com$wsscode$pathom$connect$batch_resolver(var_args){
var G__75206 = arguments.length;
switch (G__75206) {
case 1:
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1 = (function (multi_fn){
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2((function (env,input){
var res__53579__auto__ = (function (){var G__75207 = env;
var G__75208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__75207,G__75208) : multi_fn.call(null,G__75207,G__75208));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53579__auto__)){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_75223){
var state_val_75224 = (state_75223[(1)]);
if((state_val_75224 === (1))){
var state_75223__$1 = state_75223;
var statearr_75227_77464 = state_75223__$1;
(statearr_75227_77464[(2)] = null);

(statearr_75227_77464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75224 === (2))){
var _ = (function (){var statearr_75228 = state_75223;
(statearr_75228[(4)] = cljs.core.cons((5),(state_75223[(4)])));

return statearr_75228;
})();
var state_75223__$1 = state_75223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75223__$1,(6),res__53579__auto__);
} else {
if((state_val_75224 === (3))){
var inst_75221 = (state_75223[(2)]);
var state_75223__$1 = state_75223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75223__$1,inst_75221);
} else {
if((state_val_75224 === (4))){
var inst_75209 = (state_75223[(2)]);
var state_75223__$1 = state_75223;
var statearr_75230_77468 = state_75223__$1;
(statearr_75230_77468[(2)] = inst_75209);

(statearr_75230_77468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75224 === (5))){
var _ = (function (){var statearr_75238 = state_75223;
(statearr_75238[(4)] = cljs.core.rest((state_75223[(4)])));

return statearr_75238;
})();
var state_75223__$1 = state_75223;
var ex75229 = (state_75223__$1[(2)]);
var statearr_75239_77469 = state_75223__$1;
(statearr_75239_77469[(5)] = ex75229);


var statearr_75240_77484 = state_75223__$1;
(statearr_75240_77484[(1)] = (4));

(statearr_75240_77484[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75224 === (6))){
var inst_75216 = (state_75223[(2)]);
var inst_75217 = com.wsscode.async.async_cljs.throw_err(inst_75216);
var inst_75218 = cljs.core.first(inst_75217);
var _ = (function (){var statearr_75241 = state_75223;
(statearr_75241[(4)] = cljs.core.rest((state_75223[(4)])));

return statearr_75241;
})();
var state_75223__$1 = state_75223;
var statearr_75242_77485 = state_75223__$1;
(statearr_75242_77485[(2)] = inst_75218);

(statearr_75242_77485[(1)] = (3));


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
var com$wsscode$pathom$connect$state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$state_machine__42121__auto____0 = (function (){
var statearr_75243 = [null,null,null,null,null,null,null];
(statearr_75243[(0)] = com$wsscode$pathom$connect$state_machine__42121__auto__);

(statearr_75243[(1)] = (1));

return statearr_75243;
});
var com$wsscode$pathom$connect$state_machine__42121__auto____1 = (function (state_75223){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_75223);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e75244){var ex__42124__auto__ = e75244;
var statearr_75245_77486 = state_75223;
(statearr_75245_77486[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_75223[(4)]))){
var statearr_75246_77487 = state_75223;
(statearr_75246_77487[(1)] = cljs.core.first((state_75223[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77488 = state_75223;
state_75223 = G__77488;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__42121__auto__ = function(state_75223){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__42121__auto____1.call(this,state_75223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__42121__auto____0;
com$wsscode$pathom$connect$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__42121__auto____1;
return com$wsscode$pathom$connect$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_75249 = f__42153__auto__();
(statearr_75249[(6)] = c__42152__auto__);

return statearr_75249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
} else {
var res = res__53579__auto__;
return cljs.core.first(res);
}
}),multi_fn);
}));

(com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2 = (function (single_fn,multi_fn){
return (function (env,input){
if(cljs.core.sequential_QMARK_(input)){
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(env,input) : multi_fn.call(null,env,input));
} else {
return (single_fn.cljs$core$IFn$_invoke$arity$2 ? single_fn.cljs$core$IFn$_invoke$arity$2(env,input) : single_fn.call(null,env,input));
}
});
}));

(com.wsscode.pathom.connect.batch_resolver.cljs$lang$maxFixedArity = 2);

/**
 * Given a resolver that implements the many case, return one that also supports the
 *   single case by running the many and taking the first result out.
 */
com.wsscode.pathom.connect.transform_batch_resolver = (function com$wsscode$pathom$connect$transform_batch_resolver(resolver){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver);
});
com.wsscode.pathom.connect.auth_batch_pipeline_fn = (function com$wsscode$pathom$connect$auth_batch_pipeline_fn(resolve,env){
return (function com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline(input,res_ch){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_75283){
var state_val_75284 = (state_75283[(1)]);
if((state_val_75284 === (1))){
var inst_75265 = (state_75283[(7)]);
var inst_75265__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_75272 = com.wsscode.async.async_cljs.chan_QMARK_(inst_75265__$1);
var state_75283__$1 = (function (){var statearr_75287 = state_75283;
(statearr_75287[(7)] = inst_75265__$1);

return statearr_75287;
})();
if(inst_75272){
var statearr_75288_77493 = state_75283__$1;
(statearr_75288_77493[(1)] = (2));

} else {
var statearr_75289_77495 = state_75283__$1;
(statearr_75289_77495[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75284 === (2))){
var inst_75265 = (state_75283[(7)]);
var state_75283__$1 = state_75283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75283__$1,(5),inst_75265);
} else {
if((state_val_75284 === (3))){
var inst_75265 = (state_75283[(7)]);
var state_75283__$1 = state_75283;
var statearr_75290_77497 = state_75283__$1;
(statearr_75290_77497[(2)] = inst_75265);

(statearr_75290_77497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75284 === (4))){
var inst_75278 = (state_75283[(2)]);
var state_75283__$1 = state_75283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75283__$1,(6),res_ch,inst_75278);
} else {
if((state_val_75284 === (5))){
var inst_75275 = (state_75283[(2)]);
var state_75283__$1 = state_75283;
var statearr_75291_77501 = state_75283__$1;
(statearr_75291_77501[(2)] = inst_75275);

(statearr_75291_77501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75284 === (6))){
var inst_75280 = (state_75283[(2)]);
var inst_75281 = cljs.core.async.close_BANG_(res_ch);
var state_75283__$1 = (function (){var statearr_75292 = state_75283;
(statearr_75292[(8)] = inst_75280);

return statearr_75292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_75283__$1,inst_75281);
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
var com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto____0 = (function (){
var statearr_75294 = [null,null,null,null,null,null,null,null,null];
(statearr_75294[(0)] = com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto__);

(statearr_75294[(1)] = (1));

return statearr_75294;
});
var com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto____1 = (function (state_75283){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_75283);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e75295){var ex__42124__auto__ = e75295;
var statearr_75296_77504 = state_75283;
(statearr_75296_77504[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_75283[(4)]))){
var statearr_75297_77508 = state_75283;
(statearr_75297_77508[(1)] = cljs.core.first((state_75283[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77509 = state_75283;
state_75283 = G__77509;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto__ = function(state_75283){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto____1.call(this,state_75283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$auth_batch_pipeline_fn_$_auth_batch_pipeline_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_75298 = f__42153__auto__();
(statearr_75298[(6)] = c__42152__auto__);

return statearr_75298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
});
/**
 * Given a resolver that implements the single item case, wrap it implementing a batch
 *   resolver that will make a batch by running many in parallel, using `n` as the concurrency
 *   number.
 */
com.wsscode.pathom.connect.transform_auto_batch = (function com$wsscode$pathom$connect$transform_auto_batch(n){
return (function (p__75300){
var map__75301 = p__75300;
var map__75301__$1 = cljs.core.__destructure_map(map__75301);
var resolver = map__75301__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75301__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1((function (env,inputs){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_75312){
var state_val_75313 = (state_75312[(1)]);
if((state_val_75313 === (1))){
var inst_75302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_75303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_75304 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(inst_75302,inputs);
var inst_75305 = com.wsscode.pathom.connect.auth_batch_pipeline_fn(resolve,env);
var inst_75306 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_75303,inst_75305,inst_75302);
var inst_75307 = cljs.core.PersistentVector.EMPTY;
var inst_75308 = cljs.core.async.into(inst_75307,inst_75303);
var state_75312__$1 = (function (){var statearr_75314 = state_75312;
(statearr_75314[(7)] = inst_75304);

(statearr_75314[(8)] = inst_75306);

return statearr_75314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75312__$1,(2),inst_75308);
} else {
if((state_val_75313 === (2))){
var inst_75310 = (state_75312[(2)]);
var state_75312__$1 = state_75312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75312__$1,inst_75310);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto____0 = (function (){
var statearr_75315 = [null,null,null,null,null,null,null,null,null];
(statearr_75315[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto__);

(statearr_75315[(1)] = (1));

return statearr_75315;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto____1 = (function (state_75312){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_75312);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e75316){var ex__42124__auto__ = e75316;
var statearr_75317_77515 = state_75312;
(statearr_75317_77515[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_75312[(4)]))){
var statearr_75318_77516 = state_75312;
(statearr_75318_77516[(1)] = cljs.core.first((state_75312[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77517 = state_75312;
state_75312 = G__77517;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto__ = function(state_75312){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto____1.call(this,state_75312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_75319 = f__42153__auto__();
(statearr_75319[(6)] = c__42152__auto__);

return statearr_75319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
}))], 0));
});
});
com.wsscode.pathom.connect.all_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
com.wsscode.pathom.connect.all_async_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.async_reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
com.wsscode.pathom.connect.all_parallel_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
/**
 * Helper method that extract key from ast symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for mutation dispatch.
 */
com.wsscode.pathom.connect.mutation_dispatch = (function com$wsscode$pathom$connect$mutation_dispatch(env,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});
/**
 * This dispatch method will fire the mutation by looking at the ::pc/mutate
 *   key in the mutation map details.
 */
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__75328,entity){
var map__75329 = p__75328;
var map__75329__$1 = cljs.core.__destructure_map(map__75329);
var env = map__75329__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75329__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__75330 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__75330__$1 = cljs.core.__destructure_map(map__75330);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75330__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__75333,sym_SINGLEQUOTE_,p__75334){
var map__75335 = p__75333;
var map__75335__$1 = cljs.core.__destructure_map(map__75335);
var env = map__75335__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75335__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75335__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75335__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75335__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75335__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__75336 = p__75334;
var map__75336__$1 = cljs.core.__destructure_map(map__75336);
var input = map__75336__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75336__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5802__auto__)){
var map__75338 = temp__5802__auto__;
var map__75338__$1 = cljs.core.__destructure_map(map__75338);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75338__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var res = (function (){var G__75340 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__75341 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__75340,G__75341) : mutate_dispatch.call(null,G__75340,G__75341));
})();
var res__$1 = (function (){var G__75342 = res;
if(cljs.core.truth_((function (){var and__5043__auto__ = context;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__75342,context], 0));
} else {
return G__75342;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = query;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.map_QMARK_(res__$1);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(res__$1,mutation_join_globals),com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(res__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-ast","com.wsscode.pathom.connect/mutation-ast",-602347707),ast))], 0));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
}
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__75345,sym_SINGLEQUOTE_,p__75346){
var map__75348 = p__75345;
var map__75348__$1 = cljs.core.__destructure_map(map__75348);
var env = map__75348__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75348__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75348__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75348__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75348__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75348__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__75349 = p__75346;
var map__75349__$1 = cljs.core.__destructure_map(map__75349);
var input = map__75349__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75349__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5802__auto__)){
var map__75350 = temp__5802__auto__;
var map__75350__$1 = cljs.core.__destructure_map(map__75350);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75350__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___77546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_75416){
var state_val_75417 = (state_75416[(1)]);
if((state_val_75417 === (7))){
var inst_75358 = (state_75416[(7)]);
var inst_75365 = com.wsscode.async.async_cljs.promise_QMARK_(inst_75358);
var state_75416__$1 = state_75416;
if(cljs.core.truth_(inst_75365)){
var statearr_75418_77550 = state_75416__$1;
(statearr_75418_77550[(1)] = (10));

} else {
var statearr_75419_77554 = state_75416__$1;
(statearr_75419_77554[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (20))){
var inst_75379 = (state_75416[(8)]);
var inst_75388 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_75379,context], 0));
var state_75416__$1 = state_75416;
var statearr_75420_77555 = state_75416__$1;
(statearr_75420_77555[(2)] = inst_75388);

(statearr_75420_77555[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (27))){
var inst_75410 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_75416__$1 = state_75416;
var statearr_75421_77556 = state_75416__$1;
(statearr_75421_77556[(2)] = inst_75410);

(statearr_75421_77556[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (1))){
var state_75416__$1 = state_75416;
var statearr_75429_77557 = state_75416__$1;
(statearr_75429_77557[(2)] = null);

(statearr_75429_77557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (24))){
var inst_75391 = (state_75416[(9)]);
var inst_75402 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_75391,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var state_75416__$1 = state_75416;
var statearr_75430_77558 = state_75416__$1;
(statearr_75430_77558[(2)] = inst_75402);

(statearr_75430_77558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (4))){
var inst_75351 = (state_75416[(2)]);
var state_75416__$1 = state_75416;
var statearr_75431_77559 = state_75416__$1;
(statearr_75431_77559[(2)] = inst_75351);

(statearr_75431_77559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (15))){
var state_75416__$1 = state_75416;
var statearr_75433_77560 = state_75416__$1;
(statearr_75433_77560[(2)] = null);

(statearr_75433_77560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (21))){
var inst_75379 = (state_75416[(8)]);
var state_75416__$1 = state_75416;
var statearr_75434_77561 = state_75416__$1;
(statearr_75434_77561[(2)] = inst_75379);

(statearr_75434_77561[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (13))){
var inst_75369 = (state_75416[(2)]);
var inst_75370 = com.wsscode.async.async_cljs.consumer_pair(inst_75369);
var state_75416__$1 = state_75416;
var statearr_75436_77562 = state_75416__$1;
(statearr_75436_77562[(2)] = inst_75370);

(statearr_75436_77562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (22))){
var inst_75391 = (state_75416[(2)]);
var state_75416__$1 = (function (){var statearr_75438 = state_75416;
(statearr_75438[(9)] = inst_75391);

return statearr_75438;
})();
if(cljs.core.truth_(query)){
var statearr_75439_77563 = state_75416__$1;
(statearr_75439_77563[(1)] = (23));

} else {
var statearr_75440_77564 = state_75416__$1;
(statearr_75440_77564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (29))){
var inst_75414 = (state_75416[(2)]);
var state_75416__$1 = state_75416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75416__$1,inst_75414);
} else {
if((state_val_75417 === (6))){
var inst_75358 = (state_75416[(7)]);
var state_75416__$1 = state_75416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75416__$1,(9),inst_75358);
} else {
if((state_val_75417 === (28))){
var inst_75407 = (state_75416[(10)]);
var inst_75412 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_75407);
var state_75416__$1 = state_75416;
var statearr_75442_77565 = state_75416__$1;
(statearr_75442_77565[(2)] = inst_75412);

(statearr_75442_77565[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (25))){
var inst_75404 = (state_75416[(2)]);
var _ = (function (){var statearr_75443 = state_75416;
(statearr_75443[(4)] = cljs.core.rest((state_75416[(4)])));

return statearr_75443;
})();
var state_75416__$1 = state_75416;
var statearr_75444_77566 = state_75416__$1;
(statearr_75444_77566[(2)] = inst_75404);

(statearr_75444_77566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (17))){
var inst_75379 = (state_75416[(8)]);
var inst_75383 = cljs.core.map_QMARK_(inst_75379);
var state_75416__$1 = state_75416;
var statearr_75445_77567 = state_75416__$1;
(statearr_75445_77567[(2)] = inst_75383);

(statearr_75445_77567[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (3))){
var inst_75407 = (state_75416[(10)]);
var inst_75407__$1 = (state_75416[(2)]);
var inst_75408 = (inst_75407__$1 == null);
var state_75416__$1 = (function (){var statearr_75446 = state_75416;
(statearr_75446[(10)] = inst_75407__$1);

return statearr_75446;
})();
if(cljs.core.truth_(inst_75408)){
var statearr_75447_77568 = state_75416__$1;
(statearr_75447_77568[(1)] = (27));

} else {
var statearr_75448_77569 = state_75416__$1;
(statearr_75448_77569[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (12))){
var inst_75377 = (state_75416[(2)]);
var state_75416__$1 = state_75416;
var statearr_75449_77570 = state_75416__$1;
(statearr_75449_77570[(2)] = inst_75377);

(statearr_75449_77570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (2))){
var inst_75358 = (state_75416[(7)]);
var _ = (function (){var statearr_75450 = state_75416;
(statearr_75450[(4)] = cljs.core.cons((5),(state_75416[(4)])));

return statearr_75450;
})();
var inst_75357 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_75358__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_75357,input) : mutate_dispatch.call(null,inst_75357,input));
var inst_75359 = com.wsscode.async.async_cljs.chan_QMARK_(inst_75358__$1);
var state_75416__$1 = (function (){var statearr_75451 = state_75416;
(statearr_75451[(7)] = inst_75358__$1);

return statearr_75451;
})();
if(inst_75359){
var statearr_75452_77571 = state_75416__$1;
(statearr_75452_77571[(1)] = (6));

} else {
var statearr_75453_77572 = state_75416__$1;
(statearr_75453_77572[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (23))){
var inst_75391 = (state_75416[(9)]);
var inst_75393 = cljs.core.select_keys(inst_75391,mutation_join_globals);
var inst_75394 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_75391);
var inst_75395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-ast","com.wsscode.pathom.connect/mutation-ast",-602347707),ast);
var inst_75396 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_75394,inst_75395);
var state_75416__$1 = (function (){var statearr_75454 = state_75416;
(statearr_75454[(11)] = inst_75393);

return statearr_75454;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75416__$1,(26),inst_75396);
} else {
if((state_val_75417 === (19))){
var inst_75386 = (state_75416[(2)]);
var state_75416__$1 = state_75416;
if(cljs.core.truth_(inst_75386)){
var statearr_75455_77573 = state_75416__$1;
(statearr_75455_77573[(1)] = (20));

} else {
var statearr_75456_77574 = state_75416__$1;
(statearr_75456_77574[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (11))){
var state_75416__$1 = state_75416;
var statearr_75458_77575 = state_75416__$1;
(statearr_75458_77575[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (9))){
var inst_75362 = (state_75416[(2)]);
var inst_75363 = com.wsscode.async.async_cljs.throw_err(inst_75362);
var state_75416__$1 = state_75416;
var statearr_75460_77576 = state_75416__$1;
(statearr_75460_77576[(2)] = inst_75363);

(statearr_75460_77576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (5))){
var _ = (function (){var statearr_75461 = state_75416;
(statearr_75461[(4)] = cljs.core.rest((state_75416[(4)])));

return statearr_75461;
})();
var state_75416__$1 = state_75416;
var ex75457 = (state_75416__$1[(2)]);
var statearr_75462_77577 = state_75416__$1;
(statearr_75462_77577[(5)] = ex75457);


var statearr_75463_77578 = state_75416__$1;
(statearr_75463_77578[(1)] = (4));

(statearr_75463_77578[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (14))){
var inst_75358 = (state_75416[(7)]);
var state_75416__$1 = state_75416;
var statearr_75464_77579 = state_75416__$1;
(statearr_75464_77579[(2)] = inst_75358);

(statearr_75464_77579[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (26))){
var inst_75393 = (state_75416[(11)]);
var inst_75398 = (state_75416[(2)]);
var inst_75399 = com.wsscode.async.async_cljs.throw_err(inst_75398);
var inst_75400 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_75393,inst_75399], 0));
var state_75416__$1 = state_75416;
var statearr_75465_77597 = state_75416__$1;
(statearr_75465_77597[(2)] = inst_75400);

(statearr_75465_77597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (16))){
var inst_75375 = (state_75416[(2)]);
var state_75416__$1 = state_75416;
var statearr_75466_77598 = state_75416__$1;
(statearr_75466_77598[(2)] = inst_75375);

(statearr_75466_77598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (10))){
var inst_75358 = (state_75416[(7)]);
var inst_75367 = com.wsscode.async.async_cljs.promise__GT_chan(inst_75358);
var state_75416__$1 = state_75416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75416__$1,(13),inst_75367);
} else {
if((state_val_75417 === (18))){
var inst_75381 = (state_75416[(12)]);
var state_75416__$1 = state_75416;
var statearr_75467_77599 = state_75416__$1;
(statearr_75467_77599[(2)] = inst_75381);

(statearr_75467_77599[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75417 === (8))){
var inst_75381 = (state_75416[(12)]);
var inst_75379 = (state_75416[(2)]);
var inst_75381__$1 = context;
var state_75416__$1 = (function (){var statearr_75486 = state_75416;
(statearr_75486[(8)] = inst_75379);

(statearr_75486[(12)] = inst_75381__$1);

return statearr_75486;
})();
if(cljs.core.truth_(inst_75381__$1)){
var statearr_75487_77600 = state_75416__$1;
(statearr_75487_77600[(1)] = (17));

} else {
var statearr_75489_77601 = state_75416__$1;
(statearr_75489_77601[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto____0 = (function (){
var statearr_75500 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75500[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto__);

(statearr_75500[(1)] = (1));

return statearr_75500;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto____1 = (function (state_75416){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_75416);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e75505){var ex__42124__auto__ = e75505;
var statearr_75506_77602 = state_75416;
(statearr_75506_77602[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_75416[(4)]))){
var statearr_75508_77603 = state_75416;
(statearr_75508_77603[(1)] = cljs.core.first((state_75416[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77604 = state_75416;
state_75416 = G__77604;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto__ = function(state_75416){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto____1.call(this,state_75416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_75513 = f__42153__auto__();
(statearr_75513[(6)] = c__42152__auto___77546);

return statearr_75513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Given multi-method mm and index atom idx, returns a function with the given signature:
 * [sym config f], the function will be add to the mm and will be indexed using config as
 * the config params for connect/add.
 */
com.wsscode.pathom.connect.resolver_factory = (function com$wsscode$pathom$connect$resolver_factory(mm,idx){
return (function com$wsscode$pathom$connect$resolver_factory_$_resolver_factory_internal(sym,config,f){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

mm.cljs$core$IMultiFn$_add_method$arity$3(null,sym,(function (env,input){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(env,input) : f.call(null,env,input));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(idx,com.wsscode.pathom.connect.add,sym,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),f], null),config], 0)));
});
});
com.wsscode.pathom.connect.mutation_factory = (function com$wsscode$pathom$connect$mutation_factory(mm,idx){
return (function com$wsscode$pathom$connect$mutation_factory_$_mutation_factory_internal(sym,config,f){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

mm.cljs$core$IMultiFn$_add_method$arity$3(null,sym,(function (env,input){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(env,input) : f.call(null,env,input));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(idx,com.wsscode.pathom.connect.add_mutation,sym,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),f], null),config], 0)));
});
});
com.wsscode.pathom.connect.cached = (function com$wsscode$pathom$connect$cached(cache,x,f){
if(cljs.core.truth_(cache)){
if(cljs.core.contains_QMARK_(cljs.core.deref(cache),x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),x);
} else {
var res = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,x,res);

return res;
}
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__75518,ctx){
var map__75519 = p__75518;
var map__75519__$1 = cljs.core.__destructure_map(map__75519);
var index = map__75519__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75519__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75519__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,(function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
var attrs = (function (){var G__75520 = index;
var G__75521 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__75520,G__75521) : com.wsscode.pathom.connect.discover_attrs.call(null,G__75520,G__75521));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
}),null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__75515_SHARP_,p2__75514_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__75514_SHARP_) - (p1__75515_SHARP_ + (1))),p2__75514_SHARP_);
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():(function (){var G__75522 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null));
var G__75523 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY);
return (com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2(G__75522,G__75523) : com.wsscode.pathom.connect.merge_io.call(null,G__75522,G__75523));
})());
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__75519,map__75519__$1,index,index_io,cache){
return (function (p__75528){
var vec__75529 = p__75528;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75529,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75529,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__75519,map__75519__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__77605 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__75519,map__75519__$1,index,index_io,cache){
return (function (p1__75516_SHARP_,p2__75517_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__75516_SHARP_,p2__75517_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__75519,map__75519__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__77606 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__77605;
collected = G__77606;
continue;
} else {
return collected;
}
break;
}
}));
});
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__75534){
var map__75535 = p__75534;
var map__75535__$1 = cljs.core.__destructure_map(map__75535);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75535__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
return cljs.core.reduce_kv(com.wsscode.pathom.connect.add,cljs.core.PersistentArrayMap.EMPTY,index_resolvers);
});
com.wsscode.pathom.connect.valid_eql_key_QMARK_ = (function com$wsscode$pathom$connect$valid_eql_key_QMARK_(k){
return (((k instanceof cljs.core.Keyword)) || ((((k instanceof cljs.core.Symbol)) || (edn_query_language.core.ident_QMARK_(k)))));
});
com.wsscode.pathom.connect.optimize_empty_joins = (function com$wsscode$pathom$connect$optimize_empty_joins(x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (y){
if(((cljs.core.map_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.vals(y)),cljs.core.PersistentVector.EMPTY)))){
return cljs.core.ffirst(y);
} else {
return y;
}
}),x);
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom.connect.data__GT_shape = (function com$wsscode$pathom$connect$data__GT_shape(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__75545_SHARP_){
if(cljs.core.map_QMARK_(p1__75545_SHARP_)){
return cljs.core.ffirst(p1__75545_SHARP_);
} else {
return p1__75545_SHARP_;
}
})),cljs.core.reduce_kv((function (out,k,v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,((cljs.core.map_QMARK_(v))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.data__GT_shape.call(null,v))]):((cljs.core.sequential_QMARK_(v))?(function (){var shape = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (q,x){
return com.wsscode.pathom.core.merge_queries(q,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(x) : com.wsscode.pathom.connect.data__GT_shape.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,v);
if(cljs.core.seq(shape)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,shape]);
} else {
return k;
}
})():k
)));
}),cljs.core.PersistentVector.EMPTY,data)));
} else {
return null;
}
});
/**
 * Sorts output list to match input list.
 * 
 *   When doing batch requests you must return a vector in the same order respective to
 *   the order of inputs. Many times when calling an external API sending a list of ids
 *   the returned list doesn't always garantee input order. To fix these cases this
 *   function can restore the order. Example:
 * 
 *    (fn batch-resolver [env inputs]
 *      ; inputs => [{:my.entity/id 1} {:my.entity/id 2}]
 *      (batch-restore-sort {::inputs inputs
 *                           ::key    :my.entity/id}
 *        [{:my.entity/id    2
 *          :my.entity/color :my.entity.color/green}
 *         {:my.entity/id    1
 *          :my.entity/color :my.entity.color/purple}])
 *      ; => [{:my.entity/id    1
 *      ;      :my.entity/color :my.entity.color/purple}
 *      ;     {:my.entity/id    2
 *      ;      :my.entity/color :my.entity.color/green}]
 * 
 *   You can provide a ::batch-default function to fill in for missing items on the output. The
 *   default function will take the respective input and must return a map containing
 *   any data you want to add, usually some nil keys to declare that value should not
 *   require further lookup.
 */
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__75577,items){
var map__75578 = p__75577;
var map__75578__$1 = cljs.core.__destructure_map(map__75578);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75578__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75578__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75578__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__5045__auto__ = batch_default;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (p1__75576_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__75576_SHARP_,key)]);
});
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (input){
var or__5045__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
})),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (p__75579,_){
var map__75580 = p__75579;
var map__75580__$1 = cljs.core.__destructure_map(map__75580);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75580__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes], null);
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__75581 = env;
var G__75581__$1 = (((G__75581 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__75581));
if((G__75581__$1 == null)){
return null;
} else {
return cljs.core.deref(G__75581__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__75584 = env;
var G__75584__$1 = (((G__75584 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__75584));
var G__75584__$2 = (((G__75584__$1 == null))?null:cljs.core.deref(G__75584__$1));
if((G__75584__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,(function (p1__75583_SHARP_,p2__75582_SHARP_){
return cljs.core.compare(p2__75582_SHARP_,p1__75583_SHARP_);
}),G__75584__$2);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_resolvers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.resolver_weights_resolver,com.wsscode.pathom.connect.resolver_weights_sorted_resolver], null);
com.wsscode.pathom.connect.connect_resolvers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.indexes_resolver,com.wsscode.pathom.connect.resolver_weights_resolvers,com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("pathom.viz","support-boundary-interface?","pathom.viz/support-boundary-interface?",1354674842),true)], null);
/**
 * This plugin facilitates the connect setup in a parser. It works by wrapping the parser,
 *   it setups the connect resolver and mutation dispatch using the embedded dispatchers (check resolver
 *   map format in the book for more details). It also sets up the resolver weights for load
 *   balacing calculation. Here are the available options to configure the plugin:
 * 
 *   `::pc/indexes` - provide an index atom to be used, otherwise the plugin will create one
 *   `::pc/register` - a resolver, mutation or sequence of resolvers/mutations to register in
 *   the index
 *   `::pc/pool-chan` - override the thread pool, use `nil` to disable thread pool feature (not recommended)
 * 
 *   This plugin also looks for the key `::pc/register` in the other plugins used in the
 *   parser configuration, this enable plugins to provide resolvers/mutations to be available
 *   in your connect system.
 * 
 *   By default this plugin will also register resolvers to provide the index itself, if
 *   you for some reason need to hide it you can dissoc the `::pc/register` from the output
 *   and they will not be available, but consider that doing so you lose the ability to
 *   have introspection tools like Pathom Viz and Fulcro Inspect.
 */
com.wsscode.pathom.connect.connect_plugin = (function com$wsscode$pathom$connect$connect_plugin(var_args){
var G__75610 = arguments.length;
switch (G__75610) {
case 0:
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__75611){
var map__75612 = p__75611;
var map__75612__$1 = cljs.core.__destructure_map(map__75612);
var env = map__75612__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75612__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__5045__auto__ = indexes;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),(function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__75618){
var map__75623 = p__75618;
var map__75623__$1 = cljs.core.__destructure_map(map__75623);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75623__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return (function (env__$1,tx){
var G__75632 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__75633 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__75632,G__75633) : parser.call(null,G__75632,G__75633));
});
}),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
}));

(com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=com.wsscode.pathom.connect.js.map
