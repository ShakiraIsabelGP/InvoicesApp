goog.provide('com.fulcrologic.fulcro.algorithms.transit');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit.transit_handlers !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.transit.transit_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writers","writers",1153823103),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.PersistentArrayMap.EMPTY], null));
}
/**
 * Returns a map that can be used for the :handlers key of a transit reader, taken from the current type handler registry.
 */
com.fulcrologic.fulcro.algorithms.transit.read_handlers = (function com$fulcrologic$fulcro$algorithms$transit$read_handlers(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.transit.transit_handlers),new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns a map that can be used for the :handlers key of a transit writer, taken from the current type handler registry.
 */
com.fulcrologic.fulcro.algorithms.transit.write_handlers = (function com$fulcrologic$fulcro$algorithms$transit$write_handlers(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.transit.transit_handlers),new cljs.core.Keyword(null,"writers","writers",1153823103),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Create a transit writer.
 * 
 *   - `out`: An acceptable output for transit writers.
 *   - `opts`: (optional) options to pass to `cognitect.transit/writer` (such as handlers).
 */
com.fulcrologic.fulcro.algorithms.transit.writer = (function com$fulcrologic$fulcro$algorithms$transit$writer(var_args){
var G__45317 = arguments.length;
switch (G__45317) {
case 0:
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge,com.fulcrologic.fulcro.algorithms.transit.write_handlers()));
}));

(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$lang$maxFixedArity = 1);

/**
 * Create a transit reader.
 * 
 *   - `opts`: (optional) options to pass to `cognitect.transit/reader` (such as data type handlers).
 */
com.fulcrologic.fulcro.algorithms.transit.reader = (function com$fulcrologic$fulcro$algorithms$transit$reader(var_args){
var G__45320 = arguments.length;
switch (G__45320) {
case 0:
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge,com.fulcrologic.fulcro.algorithms.transit.read_handlers()));
}));

(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$lang$maxFixedArity = 1);

/**
 * Checks to see that the value in question can be serialized by the default fulcro writer by actually attempting to
 *   serialize it.  This is *not* an efficient check.
 */
com.fulcrologic.fulcro.algorithms.transit.serializable_QMARK_ = (function com$fulcrologic$fulcro$algorithms$transit$serializable_QMARK_(v){
try{com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$0().write(v);

return true;
}catch (e45323){var e = e45323;
return false;
}});
/**
 * Use transit to encode clj data as a string. Useful for encoding initial app state from server-side rendering.
 * 
 *   - `data`: Arbitrary data
 *   - `opts`: (optional) Options to send when creating a `writer`. Always preserves metadata. Adding :metadata? true/false
 *  will turn on/off metadata support. Defaults to on.
 */
com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str = (function com$fulcrologic$fulcro$algorithms$transit$transit_clj__GT_str(var_args){
var G__45330 = arguments.length;
switch (G__45330) {
case 1:
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (data){
return com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(data,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (data,opts){
var write_meta = cognitect.transit.write_meta;
var opts__$1 = (function (){var G__45335 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050));
if(cljs.core.truth_((function (){var and__5043__auto__ = write_meta;
if(cljs.core.truth_(and__5043__auto__)){
return (!(new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050).cljs$core$IFn$_invoke$arity$1(opts) === false));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45335,new cljs.core.Keyword(null,"transform","transform",1381301764),write_meta);
} else {
return G__45335;
}
})();
return cognitect.transit.write(com.fulcrologic.fulcro.algorithms.transit.writer.cljs$core$IFn$_invoke$arity$1(opts__$1),data);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$lang$maxFixedArity = 2);

/**
 * Use transit to decode a string into a clj data structure. Useful for decoding initial app state
 * when starting from a server-side rendering.
 */
com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj = (function com$fulcrologic$fulcro$algorithms$transit$transit_str__GT_clj(var_args){
var G__45339 = arguments.length;
switch (G__45339) {
case 1:
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (str){
return com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2(str,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (str,opts){
return cognitect.transit.read(com.fulcrologic.fulcro.algorithms.transit.reader.cljs$core$IFn$_invoke$arity$1(opts),str);
}));

(com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.transit","type-handler","com.fulcrologic.fulcro.algorithms.transit/type-handler",753102134,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.string_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__45344){
return cljs.core.map_QMARK_(G__45344);
}),(function (G__45344){
return cljs.core.contains_QMARK_(G__45344,new cljs.core.Keyword(null,"reader","reader",169660853));
}),(function (G__45344){
return cljs.core.contains_QMARK_(G__45344,new cljs.core.Keyword(null,"writer","writer",-277568236));
})], null),(function (G__45344){
return ((cljs.core.map_QMARK_(G__45344)) && (((cljs.core.contains_QMARK_(G__45344,new cljs.core.Keyword(null,"reader","reader",169660853))) && (cljs.core.contains_QMARK_(G__45344,new cljs.core.Keyword(null,"writer","writer",-277568236))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reader","reader",169660853))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"writer","writer",-277568236)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null)),null,null,null));


/**
 * Creates a map that can be registered with Fulcro's transit support.
 * 
 * * `type` is a `deftype` or `defrecord` that represents your runtime data that you want to support in Transit
 * * `tag` is a string that uniquely identifies your type on the wire
 * * `type->ground` is a function that can take an instance of your `type` and turn it into something transit already
 * knows how to handle.
 * * `ground->type` is a function that can take whatever `type->ground` generated and turn it back into your `type`.
 * 
 * This function returns a map that contains a :reader and :writer key. The value at these keys is suitable for merging
 * at the `:handlers` key of a reader or writer's option map.
 * 
 * See also `install-type-handler!` for adding this to Fulcro's registry of type support.
 * @type {function(*, !string, !Function, !Function): !cljs.core.IMap}
 */
com.fulcrologic.fulcro.algorithms.transit.type_handler = (function com$fulcrologic$fulcro$algorithms$transit$type_handler(type,tag,type__GT_ground,ground__GT_type){
var map__45345 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.string_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"type->ground","type->ground",1259323103),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ground->type","ground->type",-1034892708),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__45346){
return cljs.core.map_QMARK_(G__45346);
}),(function (G__45346){
return cljs.core.contains_QMARK_(G__45346,new cljs.core.Keyword(null,"reader","reader",169660853));
}),(function (G__45346){
return cljs.core.contains_QMARK_(G__45346,new cljs.core.Keyword(null,"writer","writer",-277568236));
})], null),(function (G__45346){
return ((cljs.core.map_QMARK_(G__45346)) && (((cljs.core.contains_QMARK_(G__45346,new cljs.core.Keyword(null,"reader","reader",169660853))) && (cljs.core.contains_QMARK_(G__45346,new cljs.core.Keyword(null,"writer","writer",-277568236))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reader","reader",169660853))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"writer","writer",-277568236)))], null),null])),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null)),null,null,null);
var map__45345__$1 = cljs.core.__destructure_map(map__45345);
var argspec45340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45345__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec45341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45345__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec45340)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/transit.cljc:110 type-handler's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec45340,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,tag,type__GT_ground,ground__GT_type], null));
} else {
}

var f45343 = (function (type__$1,tag__$1,type__GT_ground__$1,ground__GT_type__$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writer","writer",-277568236),cljs.core.PersistentArrayMap.createAsIfByAssoc([type__$1,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (_){
return tag__$1;
}),(function (t){
return (type__GT_ground__$1.cljs$core$IFn$_invoke$arity$1 ? type__GT_ground__$1.cljs$core$IFn$_invoke$arity$1(t) : type__GT_ground__$1.call(null,t));
}),(function (r){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1),"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
}))]),new cljs.core.Keyword(null,"reader","reader",169660853),cljs.core.PersistentArrayMap.createAsIfByAssoc([tag__$1,cognitect.transit.read_handler(ground__GT_type__$1)])], null);
});
var ret45342 = f45343(type,tag,type__GT_ground,ground__GT_type);
if(cljs.core.truth_(retspec45341)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/transit.cljc:110 type-handler's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec45341,ret45342);
} else {
}

return ret45342;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.fulcro.algorithms.transit","install-type-handler!","com.fulcrologic.fulcro.algorithms.transit/install-type-handler!",-1612135230,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__45351){
return cljs.core.map_QMARK_(G__45351);
}),(function (G__45351){
return cljs.core.contains_QMARK_(G__45351,new cljs.core.Keyword(null,"reader","reader",169660853));
}),(function (G__45351){
return cljs.core.contains_QMARK_(G__45351,new cljs.core.Keyword(null,"writer","writer",-277568236));
})], null),(function (G__45351){
return ((cljs.core.map_QMARK_(G__45351)) && (((cljs.core.contains_QMARK_(G__45351,new cljs.core.Keyword(null,"reader","reader",169660853))) && (cljs.core.contains_QMARK_(G__45351,new cljs.core.Keyword(null,"writer","writer",-277568236))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reader","reader",169660853))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"writer","writer",-277568236)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.nil_QMARK_,null,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,null,null));


/**
 * Install a type handler (generated by `type-handler`) into the global Fulcro transit support registry. This registry
 * can be used by any Fulcro-aware facility that needs to use transit for any standard purpose where app-specific type
 * support is desired.
 * @type {function(!cljs.core.IMap): *}
 */
com.fulcrologic.fulcro.algorithms.transit.install_type_handler_BANG_ = (function com$fulcrologic$fulcro$algorithms$transit$install_type_handler_BANG_(t){
var map__45352 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__45353){
return cljs.core.map_QMARK_(G__45353);
}),(function (G__45353){
return cljs.core.contains_QMARK_(G__45353,new cljs.core.Keyword(null,"reader","reader",169660853));
}),(function (G__45353){
return cljs.core.contains_QMARK_(G__45353,new cljs.core.Keyword(null,"writer","writer",-277568236));
})], null),(function (G__45353){
return ((cljs.core.map_QMARK_(G__45353)) && (((cljs.core.contains_QMARK_(G__45353,new cljs.core.Keyword(null,"reader","reader",169660853))) && (cljs.core.contains_QMARK_(G__45353,new cljs.core.Keyword(null,"writer","writer",-277568236))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword(null,"writer","writer",-277568236)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reader","reader",169660853))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"writer","writer",-277568236)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","reader","com.fulcrologic.fulcro.algorithms.transit/reader",-1490060247),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.transit","writer","com.fulcrologic.fulcro.algorithms.transit/writer",-833097336)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.nil_QMARK_,null,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,null,null);
var map__45352__$1 = cljs.core.__destructure_map(map__45352);
var retspec45348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45352__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec45347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45352__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec45347)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/transit.cljc:131 install-type-handler!'s",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec45347,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
} else {
}

var f45350 = (function (t__$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.transit.transit_handlers,(function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.merge,new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(t__$1)),new cljs.core.Keyword(null,"writers","writers",1153823103),cljs.core.merge,new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(t__$1));
}));

return null;
});
var ret45349 = f45350(t);
if(cljs.core.truth_(retspec45348)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/fulcro/algorithms/transit.cljc:131 install-type-handler!'s",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec45348,ret45349);
} else {
}

return ret45349;
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.transit.install_tempid_handler !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.transit.install_tempid_handler = com.fulcrologic.fulcro.algorithms.transit.install_type_handler_BANG_(com.fulcrologic.fulcro.algorithms.transit.type_handler(com.fulcrologic.fulcro.algorithms.tempid.TempId,com.fulcrologic.fulcro.algorithms.tempid.tag,(function (tid){
return tid.id;
}),(function (uuid){
return com.fulcrologic.fulcro.algorithms.tempid.tempid.cljs$core$IFn$_invoke$arity$1(uuid);
})));
}

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.transit.js.map
