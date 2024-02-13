goog.provide('com.fulcrologic.rad.routing.html5_history');
goog.scope(function(){
  com.fulcrologic.rad.routing.html5_history.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","decode-uri-component","com.fulcrologic.rad.routing.html5-history/decode-uri-component",-830392838,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),null,null,null));


/**
 * Decode the given string as a transit and URI encoded CLJ(s) value.
 * @type {function(?string): ?string}
 */
com.fulcrologic.rad.routing.html5_history.decode_uri_component = (function com$fulcrologic$rad$routing$html5_history$decode_uri_component(v){
var map__93344 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null),null,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),null,null,null);
var map__93344__$1 = cljs.core.__destructure_map(map__93344);
var retspec93341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93344__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec93340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93344__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec93340)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:21 decode-uri-component's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec93340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
} else {
}

var f93343 = (function (v__$1){
if(typeof v__$1 === 'string'){
return decodeURIComponent(v__$1);
} else {
return null;
}
});
var ret93342 = f93343(v);
if(cljs.core.truth_(retspec93341)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:21 decode-uri-component's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec93341,ret93342);
} else {
}

return ret93342;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","encode-uri-component","com.fulcrologic.rad.routing.html5-history/encode-uri-component",1599449484,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));


/**
 * Encode a key/value pair of CLJ(s) data such that it can be safely placed in browser query params. If `v` is
 * a plain string, then it will not be transit-encoded.
 * @type {function(!string): !string}
 */
com.fulcrologic.rad.routing.html5_history.encode_uri_component = (function com$fulcrologic$rad$routing$html5_history$encode_uri_component(v){
var map__93349 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null);
var map__93349__$1 = cljs.core.__destructure_map(map__93349);
var retspec93346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93349__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec93345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93349__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec93345)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:29 encode-uri-component's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec93345,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
} else {
}

var f93348 = (function (v__$1){
return encodeURIComponent(v__$1);
});
var ret93347 = f93348(v);
if(cljs.core.truth_(retspec93346)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:29 encode-uri-component's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec93346,ret93347);
} else {
}

return ret93347;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","query-params","com.fulcrologic.rad.routing.html5-history/query-params",1170341837,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));


/**
 * @type {function(!string): !cljs.core.IMap}
 */
com.fulcrologic.rad.routing.html5_history.query_params = (function com$fulcrologic$rad$routing$html5_history$query_params(raw_search_string){
var map__93354 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"raw-search-string","raw-search-string",1579661367),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null);
var map__93354__$1 = cljs.core.__destructure_map(map__93354);
var retspec93351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93354__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec93350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93354__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec93350)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:37 query-params's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec93350,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_search_string], null));
} else {
}

var f93353 = (function (raw_search_string__$1){
try{var param_string = clojure.string.replace(raw_search_string__$1,/^[?]/,"");
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,assignment){
var vec__93356 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(assignment,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93356,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = k;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = v;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"_rp_");
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,com.fulcrologic.fulcro.algorithms.transit.transit_str__GT_clj.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.algorithms.do_not_use.base64_decode(com.fulcrologic.rad.routing.html5_history.decode_uri_component(v)))], 0));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = k;
if(cljs.core.truth_(and__5043__auto__)){
return v;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.decode_uri_component(k)),com.fulcrologic.rad.routing.html5_history.decode_uri_component(v));
} else {
return result;

}
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(param_string,/&/));
}catch (e93355){var e = e93355;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Cannot decode query param string"], null);
}),null)),null,316569127,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var ret93352 = f93353(raw_search_string);
if(cljs.core.truth_(retspec93351)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:37 query-params's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec93351,ret93352);
} else {
}

return ret93352;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","query-string","com.fulcrologic.rad.routing.html5-history/query-string",1958243154,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));


/**
 * Convert a map to an encoded string that is acceptable on a URL.
 *   The param-map allows any data type acceptable to transit. The additional key-values must all be strings
 *   (and will be coerced to string if not). 
 * @type {function(!cljs.core.IMap, ...!string): !string}
 */
com.fulcrologic.rad.routing.html5_history.query_string = (function com$fulcrologic$rad$routing$html5_history$query_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___93449 = arguments.length;
var i__5770__auto___93450 = (0);
while(true){
if((i__5770__auto___93450 < len__5769__auto___93449)){
args__5775__auto__.push((arguments[i__5770__auto___93450]));

var G__93451 = (i__5770__auto___93450 + (1));
i__5770__auto___93450 = G__93451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.rad.routing.html5_history.query_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.rad.routing.html5_history.query_string.cljs$core$IFn$_invoke$arity$variadic = (function (param_map,p__93365){
var map__93366 = p__93365;
var map__93366__$1 = cljs.core.__destructure_map(map__93366);
var string_key_values = map__93366__$1;
var map__93367 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"param-map","param-map",-514769759),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"string-key-values","string-key-values",1158169105),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null);
var map__93367__$1 = cljs.core.__destructure_map(map__93367);
var argspec93359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93367__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var retspec93360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93367__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if(cljs.core.truth_(argspec93359)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:55 query-string's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),true,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec93359,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_map,string_key_values], null));
} else {
}

var f93362 = (function() { 
var G__93452__delegate = function (param_map__$1,p__93368){
var map__93369 = p__93368;
var map__93369__$1 = cljs.core.__destructure_map(map__93369);
var string_key_values__$1 = map__93369__$1;
return ["?_rp_=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.encode_uri_component(com.fulcrologic.fulcro.algorithms.do_not_use.base64_encode(com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$1(param_map__$1)))),"&",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__93374){
var vec__93375 = p__93374;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93375,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93375,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.encode_uri_component(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.routing.html5_history.encode_uri_component(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),string_key_values__$1))].join('');
};
var G__93452 = function (param_map__$1,var_args){
var p__93368 = null;
if (arguments.length > 1) {
var G__93453__i = 0, G__93453__a = new Array(arguments.length -  1);
while (G__93453__i < G__93453__a.length) {G__93453__a[G__93453__i] = arguments[G__93453__i + 1]; ++G__93453__i;}
  p__93368 = new cljs.core.IndexedSeq(G__93453__a,0,null);
} 
return G__93452__delegate.call(this,param_map__$1,p__93368);};
G__93452.cljs$lang$maxFixedArity = 1;
G__93452.cljs$lang$applyTo = (function (arglist__93454){
var param_map__$1 = cljs.core.first(arglist__93454);
var p__93368 = cljs.core.rest(arglist__93454);
return G__93452__delegate(param_map__$1,p__93368);
});
G__93452.cljs$core$IFn$_invoke$arity$variadic = G__93452__delegate;
return G__93452;
})()
;
var ret93361 = ((cljs.core.map_QMARK_(string_key_values))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f93362,param_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_map,string_key_values], null)))):((cljs.core.seq(string_key_values))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f93362,param_map,string_key_values):f93362(param_map)
));
if(cljs.core.truth_(retspec93360)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:55 query-string's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),true,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec93360,ret93361);
} else {
}

return ret93361;
}));

(com.fulcrologic.rad.routing.html5_history.query_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.rad.routing.html5_history.query_string.cljs$lang$applyTo = (function (seq93363){
var G__93364 = cljs.core.first(seq93363);
var seq93363__$1 = cljs.core.next(seq93363);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__93364,seq93363__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.fulcrologic.rad.routing.html5-history","route->url","com.fulcrologic.rad.routing.html5-history/route->url",2028131948,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.coll_QMARK_,cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));


/**
 * Construct URL from route and params
 * @type {function(*, ?cljs.core.IMap, !boolean): !string}
 */
com.fulcrologic.rad.routing.html5_history.route__GT_url = (function com$fulcrologic$rad$routing$html5_history$route__GT_url(route,params,hash_based_QMARK_){
var map__93382 = cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.coll_QMARK_,cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.guardrails.core","?","com.fulcrologic.guardrails.core/?",1513394117,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null);
var map__93382__$1 = cljs.core.__destructure_map(map__93382);
var retspec93379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93382__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var argspec93378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93382__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(argspec93378)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:68 route->url's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),true], null),argspec93378,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,params,hash_based_QMARK_], null));
} else {
}

var f93381 = (function (route__$1,params__$1,hash_based_QMARK___$1){
var q = com.fulcrologic.rad.routing.html5_history.query_string((function (){var or__5045__auto__ = params__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core.truth_(hash_based_QMARK___$1)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),"#/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,route__$1))].join('');
} else {
return ["/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,route__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
}
});
var ret93380 = f93381(route,params,hash_based_QMARK_);
if(cljs.core.truth_(retspec93379)){
com.fulcrologic.guardrails.core.run_check(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),"com/fulcrologic/rad/routing/html5_history.cljc:68 route->url's",new cljs.core.Keyword(null,"tap>?","tap>?",212454486),null,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777),false,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"args?","args?",-1963723548),false], null),retspec93379,ret93380);
} else {
}

return ret93380;
});
/**
 * Convert the current browser URL into a route path and parameter map. Returns:
 * 
 * ```
 * {:route ["path" "segment"]
 *  :params {:param value}}
 * ```
 * 
 * You can save this value and later use it with `apply-route!`.
 * 
 * Parameter hash-based? specifies whether to expect hash based routing. If no
 * parameter is provided the mode is autodetected from presence of hash segment in URL.
 *   
 */
com.fulcrologic.rad.routing.html5_history.url__GT_route = (function com$fulcrologic$rad$routing$html5_history$url__GT_route(var_args){
var G__93384 = arguments.length;
switch (G__93384) {
case 0:
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2((!((cljs.core.seq(document.location.hash) == null))),null);
}));

(com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$1 = (function (hash_based_QMARK_){
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2(hash_based_QMARK_,null);
}));

(com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2 = (function (hash_based_QMARK_,prefix){
var path = (cljs.core.truth_(hash_based_QMARK_)?clojure.string.replace(document.location.hash,/^[#]/,""):document.location.pathname);
var pcnt = cljs.core.count(prefix);
var prefixed_QMARK_ = (pcnt > (0));
var path__$1 = ((((prefixed_QMARK_) && (clojure.string.starts_with_QMARK_(path,prefix))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,pcnt):path);
var route = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path__$1,/\//)));
var params = (function (){var or__5045__auto__ = (function (){var G__93385 = document.location.search;
if((G__93385 == null)){
return null;
} else {
return com.fulcrologic.rad.routing.html5_history.query_params(G__93385);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null);
}));

(com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$lang$maxFixedArity = 2);

com.fulcrologic.rad.routing.html5_history.notify_listeners_BANG_ = (function com$fulcrologic$rad$routing$html5_history$notify_listeners_BANG_(history,route,params,direction){
var listeners = (function (){var G__93386 = history;
var G__93386__$1 = (((G__93386 == null))?null:new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__93386));
var G__93386__$2 = (((G__93386__$1 == null))?null:cljs.core.deref(G__93386__$1));
if((G__93386__$2 == null)){
return null;
} else {
return cljs.core.vals(G__93386__$2);
}
})();
var seq__93387 = cljs.core.seq(listeners);
var chunk__93388 = null;
var count__93389 = (0);
var i__93390 = (0);
while(true){
if((i__93390 < count__93389)){
var f = chunk__93388.cljs$core$IIndexed$_nth$arity$2(null,i__93390);
var G__93395_93456 = route;
var G__93396_93457 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952),direction);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__93395_93456,G__93396_93457) : f.call(null,G__93395_93456,G__93396_93457));


var G__93458 = seq__93387;
var G__93459 = chunk__93388;
var G__93460 = count__93389;
var G__93461 = (i__93390 + (1));
seq__93387 = G__93458;
chunk__93388 = G__93459;
count__93389 = G__93460;
i__93390 = G__93461;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__93387);
if(temp__5804__auto__){
var seq__93387__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__93387__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__93387__$1);
var G__93462 = cljs.core.chunk_rest(seq__93387__$1);
var G__93463 = c__5568__auto__;
var G__93464 = cljs.core.count(c__5568__auto__);
var G__93465 = (0);
seq__93387 = G__93462;
chunk__93388 = G__93463;
count__93389 = G__93464;
i__93390 = G__93465;
continue;
} else {
var f = cljs.core.first(seq__93387__$1);
var G__93397_93466 = route;
var G__93398_93467 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952),direction);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__93397_93466,G__93398_93467) : f.call(null,G__93397_93466,G__93398_93467));


var G__93468 = cljs.core.next(seq__93387__$1);
var G__93469 = null;
var G__93470 = (0);
var G__93471 = (0);
seq__93387 = G__93468;
chunk__93388 = G__93469;
count__93389 = G__93470;
i__93390 = G__93471;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {com.fulcrologic.rad.routing.history.RouteHistory}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.fulcrologic.rad.routing.html5_history.HTML5History = (function (hash_based_QMARK_,listeners,generator,current_uid,prior_route,all_events_QMARK_,prefix,recent_history,default_route,fulcro_app,__meta,__extmap,__hash){
this.hash_based_QMARK_ = hash_based_QMARK_;
this.listeners = listeners;
this.generator = generator;
this.current_uid = current_uid;
this.prior_route = prior_route;
this.all_events_QMARK_ = all_events_QMARK_;
this.prefix = prefix;
this.recent_history = recent_history;
this.default_route = default_route;
this.fulcro_app = fulcro_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k93401,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__93405 = k93401;
var G__93405__$1 = (((G__93405 instanceof cljs.core.Keyword))?G__93405.fqn:null);
switch (G__93405__$1) {
case "hash-based?":
return self__.hash_based_QMARK_;

break;
case "listeners":
return self__.listeners;

break;
case "generator":
return self__.generator;

break;
case "current-uid":
return self__.current_uid;

break;
case "prior-route":
return self__.prior_route;

break;
case "all-events?":
return self__.all_events_QMARK_;

break;
case "prefix":
return self__.prefix;

break;
case "recent-history":
return self__.recent_history;

break;
case "default-route":
return self__.default_route;

break;
case "fulcro-app":
return self__.fulcro_app;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k93401,else__5346__auto__);

}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__93406){
var vec__93407 = p__93406;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93407,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93407,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#com.fulcrologic.rad.routing.html5-history.HTML5History{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),self__.hash_based_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generator","generator",-572962281),self__.generator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"current-uid","current-uid",342017555),self__.current_uid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),self__.prior_route],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),self__.all_events_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),self__.recent_history],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-route","default-route",-1491022475),self__.default_route],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),self__.fulcro_app],null))], null),self__.__extmap));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__93400){
var self__ = this;
var G__93400__$1 = this;
return (new cljs.core.RecordIter((0),G__93400__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"generator","generator",-572962281),new cljs.core.Keyword(null,"current-uid","current-uid",342017555),new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),new cljs.core.Keyword(null,"default-route","default-route",-1491022475),new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1816411844 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this93402,other93403){
var self__ = this;
var this93402__$1 = this;
return (((!((other93403 == null)))) && ((((this93402__$1.constructor === other93403.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.hash_based_QMARK_,other93403.hash_based_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.listeners,other93403.listeners)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.generator,other93403.generator)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.current_uid,other93403.current_uid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.prior_route,other93403.prior_route)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.all_events_QMARK_,other93403.all_events_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.prefix,other93403.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.recent_history,other93403.recent_history)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.default_route,other93403.default_route)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.fulcro_app,other93403.fulcro_app)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93402__$1.__extmap,other93403.__extmap)))))))))))))))))))))))));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),null,new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"current-uid","current-uid",342017555),null,new cljs.core.Keyword(null,"default-route","default-route",-1491022475),null,new cljs.core.Keyword(null,"generator","generator",-572962281),null,new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),null,new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),null,new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$ = cljs.core.PROTOCOL_SENTINEL);

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$arity$3 = (function (this$,route,params){
var self__ = this;
var this$__$1 = this;
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),com.fulcrologic.rad.routing.html5_history.route__GT_url(route,params,self__.hash_based_QMARK_)].join('');
try{var result__6555__auto___93473 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pushing route",route,params], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,119,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pushing route",new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null),"=>",result__6555__auto___93473], null);
}),null)),null,-252473761,true);

}catch (e93410){var e__6529__auto___93474 = e93410;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,119,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__6529__auto___93474], null);
}),null)),null,-688380933,null);

throw e__6529__auto___93474;
}
if(cljs.core.truth_(self__.all_events_QMARK_)){
com.fulcrologic.rad.routing.html5_history.notify_listeners_BANG_(this$__$1,route,params,new cljs.core.Keyword(null,"push","push",799791267));
} else {
}

cljs.core.reset_BANG_(self__.current_uid,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.generator,cljs.core.inc));

cljs.core.reset_BANG_(self__.prior_route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.recent_history,(function (p1__93399_SHARP_){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null),p1__93399_SHARP_);
}));

return history.pushState(({"uid": cljs.core.deref(self__.current_uid)}),"",url);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_replace_route_BANG_$arity$3 = (function (this$,route,params){
var self__ = this;
var this$__$1 = this;
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),com.fulcrologic.rad.routing.html5_history.route__GT_url(route,params,self__.hash_based_QMARK_)].join('');
if(cljs.core.truth_(self__.all_events_QMARK_)){
com.fulcrologic.rad.routing.html5_history.notify_listeners_BANG_(this$__$1,route,params,new cljs.core.Keyword(null,"replace","replace",-786587770));
} else {
}

try{var result__6555__auto___93475 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replacing route",route,params], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,131,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replacing route",new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null),"=>",result__6555__auto___93475], null);
}),null)),null,293873491,true);

}catch (e93411){var e__6529__auto___93476 = e93411;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,131,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__6529__auto___93476], null);
}),null)),null,-2087026164,null);

throw e__6529__auto___93476;
}
cljs.core.reset_BANG_(self__.prior_route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.recent_history,(function (h){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"params","params",710516235),params], null),cljs.core.rest(h));
}));

return history.replaceState(({"uid": cljs.core.deref(self__.current_uid)}),"",url);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_undo_BANG_$arity$3 = (function (this$,_,p__93412){
var self__ = this;
var map__93413 = p__93412;
var map__93413__$1 = cljs.core.__destructure_map(map__93413);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93413__$1,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952));
var this$__$1 = this;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,136,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Attempting to UNDO a routing request from the browser"], null);
}),null)),null,1257266795,null);

var temp__5804__auto__ = cljs.core.deref(self__.prior_route);
if(cljs.core.truth_(temp__5804__auto__)){
var map__93414 = temp__5804__auto__;
var map__93414__$1 = cljs.core.__destructure_map(map__93414);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93414__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93414__$1,new cljs.core.Keyword(null,"params","params",710516235));
cljs.core.reset_BANG_(self__.prior_route,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forward","forward",-557345303),direction)){
return this$__$1.com$fulcrologic$rad$routing$history$RouteHistory$_replace_route_BANG_$arity$3(null,route,params);
} else {
return this$__$1.com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$arity$3(null,route,params);
}
} else {
return null;
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_back_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(cljs.core.deref(self__.recent_history)) > (1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,147,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Back to prior route",(function (){var G__93415 = self__.prior_route;
if((G__93415 == null)){
return null;
} else {
return cljs.core.deref(G__93415);
}
})()], null);
}),null)),null,-822278190,null);

return history.back();
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(self__.default_route))){
var map__93416 = self__.default_route;
var map__93416__$1 = cljs.core.__destructure_map(map__93416);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93416__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93416__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No prior route. Using default route"], null);
}),null)),null,1261240007,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"routing","routing",1440253662),com.fulcrologic.fulcro.routing.dynamic_routing.change_route_BANG_.cljs$core$IFn$_invoke$arity$3(self__.fulcro_app,route,params))){
return this$__$1.com$fulcrologic$rad$routing$history$RouteHistory$_push_route_BANG_$arity$3(null,route,params);
} else {
return null;
}
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No prior route. Ignoring BACK request."], null);
}),null)),null,-593683604,null);

}
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_add_route_listener_BANG_$arity$3 = (function (_,listener_key,f){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.listeners,cljs.core.assoc,listener_key,f);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_remove_route_listener_BANG_$arity$2 = (function (_,listener_key){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.listeners,cljs.core.dissoc,listener_key);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.com$fulcrologic$rad$routing$history$RouteHistory$_current_route$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return com.fulcrologic.rad.routing.html5_history.url__GT_route.cljs$core$IFn$_invoke$arity$2(self__.hash_based_QMARK_,self__.prefix);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k93401){
var self__ = this;
var this__5350__auto____$1 = this;
var G__93417 = k93401;
var G__93417__$1 = (((G__93417 instanceof cljs.core.Keyword))?G__93417.fqn:null);
switch (G__93417__$1) {
case "hash-based?":
case "listeners":
case "generator":
case "current-uid":
case "prior-route":
case "all-events?":
case "prefix":
case "recent-history":
case "default-route":
case "fulcro-app":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k93401);

}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__93400){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__93418 = cljs.core.keyword_identical_QMARK_;
var expr__93419 = k__5352__auto__;
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(G__93400,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,G__93400,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"generator","generator",-572962281),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"generator","generator",-572962281),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,G__93400,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-uid","current-uid",342017555),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"current-uid","current-uid",342017555),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,G__93400,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,G__93400,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,G__93400,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,G__93400,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,G__93400,self__.default_route,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default-route","default-route",-1491022475),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"default-route","default-route",-1491022475),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,G__93400,self__.fulcro_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__93418.cljs$core$IFn$_invoke$arity$2 ? pred__93418.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),expr__93419) : pred__93418.call(null,new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),expr__93419)))){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,G__93400,self__.__meta,self__.__extmap,null));
} else {
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__93400),null));
}
}
}
}
}
}
}
}
}
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),self__.hash_based_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"generator","generator",-572962281),self__.generator,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"current-uid","current-uid",342017555),self__.current_uid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),self__.prior_route,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),self__.all_events_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),self__.recent_history,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default-route","default-route",-1491022475),self__.default_route,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),self__.fulcro_app,null))], null),self__.__extmap));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__93400){
var self__ = this;
var this__5342__auto____$1 = this;
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(self__.hash_based_QMARK_,self__.listeners,self__.generator,self__.current_uid,self__.prior_route,self__.all_events_QMARK_,self__.prefix,self__.recent_history,self__.default_route,self__.fulcro_app,G__93400,self__.__extmap,self__.__hash));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hash-based?","hash-based?",-1719566190,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"generator","generator",1067569246,null),new cljs.core.Symbol(null,"current-uid","current-uid",1982549082,null),new cljs.core.Symbol(null,"prior-route","prior-route",-835923453,null),new cljs.core.Symbol(null,"all-events?","all-events?",934450529,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"recent-history","recent-history",428659585,null),new cljs.core.Symbol(null,"default-route","default-route",149509052,null),new cljs.core.Symbol(null,"fulcro-app","fulcro-app",-723198190,null)], null);
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.cljs$lang$type = true);

(com.fulcrologic.rad.routing.html5_history.HTML5History.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"com.fulcrologic.rad.routing.html5-history/HTML5History",null,(1),null));
}));

(com.fulcrologic.rad.routing.html5_history.HTML5History.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"com.fulcrologic.rad.routing.html5-history/HTML5History");
}));

/**
 * Positional factory function for com.fulcrologic.rad.routing.html5-history/HTML5History.
 */
com.fulcrologic.rad.routing.html5_history.__GT_HTML5History = (function com$fulcrologic$rad$routing$html5_history$__GT_HTML5History(hash_based_QMARK_,listeners,generator,current_uid,prior_route,all_events_QMARK_,prefix,recent_history,default_route,fulcro_app){
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(hash_based_QMARK_,listeners,generator,current_uid,prior_route,all_events_QMARK_,prefix,recent_history,default_route,fulcro_app,null,null,null));
});

/**
 * Factory function for com.fulcrologic.rad.routing.html5-history/HTML5History, taking a map of keywords to field values.
 */
com.fulcrologic.rad.routing.html5_history.map__GT_HTML5History = (function com$fulcrologic$rad$routing$html5_history$map__GT_HTML5History(G__93404){
var extmap__5385__auto__ = (function (){var G__93421 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__93404,new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"generator","generator",-572962281),new cljs.core.Keyword(null,"current-uid","current-uid",342017555),new cljs.core.Keyword(null,"prior-route","prior-route",1818512316),new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942),new cljs.core.Keyword(null,"default-route","default-route",-1491022475),new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579)], 0));
if(cljs.core.record_QMARK_(G__93404)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__93421);
} else {
return G__93421;
}
})();
return (new com.fulcrologic.rad.routing.html5_history.HTML5History(new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579).cljs$core$IFn$_invoke$arity$1(G__93404),new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__93404),new cljs.core.Keyword(null,"generator","generator",-572962281).cljs$core$IFn$_invoke$arity$1(G__93404),new cljs.core.Keyword(null,"current-uid","current-uid",342017555).cljs$core$IFn$_invoke$arity$1(G__93404),new cljs.core.Keyword(null,"prior-route","prior-route",1818512316).cljs$core$IFn$_invoke$arity$1(G__93404),new cljs.core.Keyword(null,"all-events?","all-events?",-706080998).cljs$core$IFn$_invoke$arity$1(G__93404),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__93404),new cljs.core.Keyword(null,"recent-history","recent-history",-1211871942).cljs$core$IFn$_invoke$arity$1(G__93404),new cljs.core.Keyword(null,"default-route","default-route",-1491022475).cljs$core$IFn$_invoke$arity$1(G__93404),new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579).cljs$core$IFn$_invoke$arity$1(G__93404),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * Create a new instance of a RouteHistory object that is properly configured against the browser's HTML5 History API.
 * 
 * `hash-based?` - Use hash-based URIs instead of paths
 * `all-events?` - Call the route listeners on all routing operations (not just pop state events).
 * `default-route` - A map of `{:route r :params p}` to use when there is no prior route, but the user tries to navigate to the prior screen.
 * IF YOU PROVIDE default-route, THEN YOU MUST ALSO PROVIDE `app` for it to work.
 * `app` - The Fulco application that is being served.
 * `prefix`      - Prepend prefix to all routes, in cases we are not running on root url (context-root)
 */
com.fulcrologic.rad.routing.html5_history.new_html5_history = (function com$fulcrologic$rad$routing$html5_history$new_html5_history(p__93422){
var map__93423 = p__93422;
var map__93423__$1 = cljs.core.__destructure_map(map__93423);
var hash_based_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93423__$1,new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),false);
var all_events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93423__$1,new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),false);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93423__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null);
var default_route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93423__$1,new cljs.core.Keyword(null,"default-route","default-route",-1491022475));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93423__$1,new cljs.core.Keyword(null,"app","app",-560961707));
if(((cljs.core.not(prefix)) || (((clojure.string.starts_with_QMARK_(prefix,"/")) && ((!(clojure.string.ends_with_QMARK_(prefix,"/")))))))){
} else {
throw (new Error(["Assert failed: ","Prefix must start with a slash, and not end with one.","\n","(or (not prefix) (and (str/starts-with? prefix \"/\") (not (str/ends-with? prefix \"/\"))))"].join('')));
}

try{var history__$1 = (new com.fulcrologic.rad.routing.html5_history.HTML5History(hash_based_QMARK_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),all_events_QMARK_,prefix,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),default_route,app,null,null,null));
var pop_state_listener = (function (evt){
var current_uid = cljs.core.deref(history__$1.current_uid);
var event_uid = com.fulcrologic.rad.routing.html5_history.goog$module$goog$object.getValueByKeys(evt,"state","uid");
var forward_QMARK_ = (event_uid < current_uid);
var map__93425 = history__$1.com$fulcrologic$rad$routing$history$RouteHistory$_current_route$arity$1(null);
var map__93425__$1 = cljs.core.__destructure_map(map__93425);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93425__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93425__$1,new cljs.core.Keyword(null,"params","params",710516235));
var listeners = (function (){var G__93426 = history__$1;
var G__93426__$1 = (((G__93426 == null))?null:G__93426.listeners);
var G__93426__$2 = (((G__93426__$1 == null))?null:cljs.core.deref(G__93426__$1));
if((G__93426__$2 == null)){
return null;
} else {
return cljs.core.vals(G__93426__$2);
}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.routing.html5-history",null,182,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Got pop state event.",evt], null);
}),null)),null,-531510838,null);

var seq__93427_93478 = cljs.core.seq(listeners);
var chunk__93428_93479 = null;
var count__93429_93480 = (0);
var i__93430_93481 = (0);
while(true){
if((i__93430_93481 < count__93429_93480)){
var f_93482 = chunk__93428_93479.cljs$core$IIndexed$_nth$arity$2(null,i__93430_93481);
var G__93435_93483 = route;
var G__93436_93484 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952),((forward_QMARK_)?new cljs.core.Keyword(null,"forward","forward",-557345303):new cljs.core.Keyword(null,"back","back",-417520012)));
(f_93482.cljs$core$IFn$_invoke$arity$2 ? f_93482.cljs$core$IFn$_invoke$arity$2(G__93435_93483,G__93436_93484) : f_93482.call(null,G__93435_93483,G__93436_93484));


var G__93485 = seq__93427_93478;
var G__93486 = chunk__93428_93479;
var G__93487 = count__93429_93480;
var G__93488 = (i__93430_93481 + (1));
seq__93427_93478 = G__93485;
chunk__93428_93479 = G__93486;
count__93429_93480 = G__93487;
i__93430_93481 = G__93488;
continue;
} else {
var temp__5804__auto___93489 = cljs.core.seq(seq__93427_93478);
if(temp__5804__auto___93489){
var seq__93427_93490__$1 = temp__5804__auto___93489;
if(cljs.core.chunked_seq_QMARK_(seq__93427_93490__$1)){
var c__5568__auto___93491 = cljs.core.chunk_first(seq__93427_93490__$1);
var G__93492 = cljs.core.chunk_rest(seq__93427_93490__$1);
var G__93493 = c__5568__auto___93491;
var G__93494 = cljs.core.count(c__5568__auto___93491);
var G__93495 = (0);
seq__93427_93478 = G__93492;
chunk__93428_93479 = G__93493;
count__93429_93480 = G__93494;
i__93430_93481 = G__93495;
continue;
} else {
var f_93496 = cljs.core.first(seq__93427_93490__$1);
var G__93437_93497 = route;
var G__93438_93498 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.rad.routing.history","direction","com.fulcrologic.rad.routing.history/direction",1410395952),((forward_QMARK_)?new cljs.core.Keyword(null,"forward","forward",-557345303):new cljs.core.Keyword(null,"back","back",-417520012)));
(f_93496.cljs$core$IFn$_invoke$arity$2 ? f_93496.cljs$core$IFn$_invoke$arity$2(G__93437_93497,G__93438_93498) : f_93496.call(null,G__93437_93497,G__93438_93498));


var G__93499 = cljs.core.next(seq__93427_93490__$1);
var G__93500 = null;
var G__93501 = (0);
var G__93502 = (0);
seq__93427_93478 = G__93499;
chunk__93428_93479 = G__93500;
count__93429_93480 = G__93501;
i__93430_93481 = G__93502;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history__$1.recent_history,cljs.core.rest);

return cljs.core.reset_BANG_(history__$1.prior_route,history__$1.com$fulcrologic$rad$routing$history$RouteHistory$_current_route$arity$1(null));
});
window.addEventListener("popstate",pop_state_listener);

return history__$1;
}catch (e93424){var e = e93424;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,190,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to create HTML5 history."], null);
}),null)),null,-281195761,null);
}});
/**
 * Create a new instance of a RouteHistory object that is properly configured against the browser's HTML5 History API.
 * 
 * `hash-based?` - Use hash-based URIs instead of paths
 * `all-events?` - Call the route listeners on all routing operations (not just pop state events).
 * 
 *   You should prefer using the new-html5-history, since it supports more options
 */
com.fulcrologic.rad.routing.html5_history.html5_history = (function com$fulcrologic$rad$routing$html5_history$html5_history(var_args){
var G__93440 = arguments.length;
switch (G__93440) {
case 0:
return com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.fulcrologic.rad.routing.html5_history.new_html5_history(cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$1 = (function (hash_based_QMARK_){
return com.fulcrologic.rad.routing.html5_history.new_html5_history(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),hash_based_QMARK_], null));
}));

(com.fulcrologic.rad.routing.html5_history.html5_history.cljs$core$IFn$_invoke$arity$2 = (function (hash_based_QMARK_,all_events_QMARK_){
return com.fulcrologic.rad.routing.html5_history.new_html5_history(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hash-based?","hash-based?",934869579),hash_based_QMARK_,new cljs.core.Keyword(null,"all-events?","all-events?",-706080998),all_events_QMARK_], null));
}));

(com.fulcrologic.rad.routing.html5_history.html5_history.cljs$lang$maxFixedArity = 2);

/**
 * Apply the given route and params to the URL and routing system. `saved-route` is in the format of
 * the return value of `url->route`. Returns true if it is able to route there.
 */
com.fulcrologic.rad.routing.html5_history.apply_route_BANG_ = (function com$fulcrologic$rad$routing$html5_history$apply_route_BANG_(app,p__93441){
var map__93442 = p__93441;
var map__93442__$1 = cljs.core.__destructure_map(map__93442);
var saved_route = map__93442__$1;
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93442__$1,new cljs.core.Keyword(null,"route","route",329891309));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93442__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5802__auto__ = com.fulcrologic.fulcro.routing.dynamic_routing.resolve_target(app,route);
if(cljs.core.truth_(temp__5802__auto__)){
var target = temp__5802__auto__;
var app_root = com.fulcrologic.fulcro.application.root_class(app);
var raw_path = (function (){var _STAR_query_state_STAR__orig_val__93443 = com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_;
var _STAR_query_state_STAR__temp_val__93444 = com.fulcrologic.fulcro.application.current_state(app);
(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__temp_val__93444);

try{return com.fulcrologic.fulcro.routing.dynamic_routing.resolve_path.cljs$core$IFn$_invoke$arity$3(app_root,target,params);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_query_state_STAR_ = _STAR_query_state_STAR__orig_val__93443);
}})();
var embedded_params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__93445){
var vec__93446 = p__93445;
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93446,(0),null);
var resolved = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93446,(1),null);
if((raw instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,raw,resolved);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,raw_path,route));
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embedded_params,params], 0));
com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(app,target,params__$1);

return true;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.routing.html5-history",null,222,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Saved route did not resolve to a UI target",saved_route], null);
}),null)),null,-635404965,null);

return false;
}
});
/**
 * Attempt to restore the route given in the URL. If that fails, simply route to the default given (a class and map).
 * 
 * WARNING: This should not be called until the HTML5 history is installed in your app, and any module that might be
 * needed is loaded.
 */
com.fulcrologic.rad.routing.html5_history.restore_route_BANG_ = (function com$fulcrologic$rad$routing$html5_history$restore_route_BANG_(app,default_page,default_params){
var this$ = com.fulcrologic.rad.routing.history.active_history(app);
var url_route = com.fulcrologic.rad.routing.history._current_route(this$);
if(cljs.core.truth_((function (){var and__5043__auto__ = this$;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(url_route));
} else {
return and__5043__auto__;
}
})())){
if(com.fulcrologic.rad.routing.html5_history.apply_route_BANG_(app,url_route)){
return null;
} else {
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(app,default_page,default_params);
}
} else {
return com.fulcrologic.rad.routing.route_to_BANG_.cljs$core$IFn$_invoke$arity$3(app,default_page,default_params);
}
});

//# sourceMappingURL=com.fulcrologic.rad.routing.html5_history.js.map
