goog.provide('com.fulcrologic.rad.ids');
/**
 * Returns true if the given string appears to be a valid UUID string.
 */
com.fulcrologic.rad.ids.valid_uuid_string_QMARK_ = (function com$fulcrologic$rad$ids$valid_uuid_string_QMARK_(s){
return cljs.core.boolean$((function (){var and__5043__auto__ = typeof s === 'string';
if(and__5043__auto__){
return cljs.core.re_matches(/^........-....-....-....-............$/,s);
} else {
return and__5043__auto__;
}
})());
});
/**
 * Without args gives a semi-random SQUUID. With args, builds UUID based on input.
 * 
 *   - If v is an int (in CLJC), it will generate a fixed UUID starting with FFF...and ending
 *  in that number.
 *   - If v is a uuid, it is just returned.
 *   - If v is non-nil it will be used as a string to generate a UUID (can fail).
 *   - If v is missing, you will get a random uuid.
 */
com.fulcrologic.rad.ids.new_uuid = (function com$fulcrologic$rad$ids$new_uuid(var_args){
var G__83948 = arguments.length;
switch (G__83948) {
case 0:
return com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.yetanalytics.squuid.generate_squuid();
}));

(com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$1 = (function (v){
if(cljs.core.uuid_QMARK_(v)){
return v;
} else {
if(cljs.core.int_QMARK_(v)){
var sv = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
var l = sv.length;
var padding = clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((12) - l),"0"));
return cljs.core.uuid(["ffffffff-ffff-ffff-ffff-",padding,sv].join(''));
} else {
return cljs.core.uuid(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));

}
}
}));

(com.fulcrologic.rad.ids.new_uuid.cljs$lang$maxFixedArity = 1);

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.ids","select-keys-in-ns","com.fulcrologic.rad.ids/select-keys-in-ns",1791550192,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"nspc","nspc",-1173752966),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"nspc","nspc",-1173752966),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"nspc","nspc",-1173752966)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"nspc","nspc",-1173752966),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));


/**
 * Returns a version of `m` where only those keys with namespace `nspc` are kept.
 * @type {function(!cljs.core.IMap, !string): !cljs.core.IMap}
 */
com.fulcrologic.rad.ids.select_keys_in_ns = (function com$fulcrologic$rad$ids$select_keys_in_ns(m,nspc){
var map__83953 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"nspc","nspc",-1173752966),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"nspc","nspc",-1173752966)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"nspc","nspc",-1173752966),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null);
var map__83953__$1 = cljs.core.__destructure_map(map__83953);
var argspec83949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83953__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec83950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83953__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec83949)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/ids.cljc:45 select-keys-in-ns's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec83949,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,nspc], null));
} else {
}

var f83952 = (function (m__$1,nspc__$1){
return cljs.core.reduce_kv((function (new_map,k,v){
if((((k instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nspc__$1,cljs.core.namespace(k))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_map,k,v);
} else {
return new_map;
}
}),cljs.core.PersistentArrayMap.EMPTY,m__$1);
});
var ret83951 = f83952(m,nspc);
if(cljs.core.truth_(retspec83950)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/ids.cljc:45 select-keys-in-ns's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec83950,ret83951);
} else {
}

return ret83951;
});
/**
 * When forms are routed to their ID is in the URL as a string. This converts IDs in such a string format to the
 * given type (which must be a RAD type name that supports IDs like :uuid, :int, :long or :string).
 */
com.fulcrologic.rad.ids.id_string__GT_id = (function com$fulcrologic$rad$ids$id_string__GT_id(type,id){
var G__83954 = type;
var G__83954__$1 = (((G__83954 instanceof cljs.core.Keyword))?G__83954.fqn:null);
switch (G__83954__$1) {
case "uuid":
return com.fulcrologic.rad.ids.new_uuid.cljs$core$IFn$_invoke$arity$1(id);

break;
case "int":
return (com.fulcrologic.rad.type_support.integer.parse_int.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.type_support.integer.parse_int.cljs$core$IFn$_invoke$arity$1(id) : com.fulcrologic.rad.type_support.integer.parse_int.call(null,id));

break;
case "long":
return com.fulcrologic.rad.type_support.integer.parse_long(id);

break;
case "string":
return id;

break;
default:
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.ids",null,66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unsupported ID type",type], null);
}),null)),null,-249701469,null);

return id;

}
});

//# sourceMappingURL=com.fulcrologic.rad.ids.js.map
