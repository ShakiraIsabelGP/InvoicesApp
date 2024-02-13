goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48291 = arguments.length;
var i__5770__auto___48292 = (0);
while(true){
if((i__5770__auto___48292 < len__5769__auto___48291)){
args__5775__auto__.push((arguments[i__5770__auto___48292]));

var G__48293 = (i__5770__auto___48292 + (1));
i__5770__auto___48292 = G__48293;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47968){
var G__47969 = cljs.core.first(seq47968);
var seq47968__$1 = cljs.core.next(seq47968);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47969,seq47968__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47970 = cljs.core.seq(sources);
var chunk__47971 = null;
var count__47972 = (0);
var i__47973 = (0);
while(true){
if((i__47973 < count__47972)){
var map__47978 = chunk__47971.cljs$core$IIndexed$_nth$arity$2(null,i__47973);
var map__47978__$1 = cljs.core.__destructure_map(map__47978);
var src = map__47978__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47979){var e_48294 = e47979;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48294);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48294.message)].join('')));
}

var G__48295 = seq__47970;
var G__48296 = chunk__47971;
var G__48297 = count__47972;
var G__48298 = (i__47973 + (1));
seq__47970 = G__48295;
chunk__47971 = G__48296;
count__47972 = G__48297;
i__47973 = G__48298;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47970);
if(temp__5804__auto__){
var seq__47970__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47970__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47970__$1);
var G__48299 = cljs.core.chunk_rest(seq__47970__$1);
var G__48300 = c__5568__auto__;
var G__48301 = cljs.core.count(c__5568__auto__);
var G__48302 = (0);
seq__47970 = G__48299;
chunk__47971 = G__48300;
count__47972 = G__48301;
i__47973 = G__48302;
continue;
} else {
var map__47980 = cljs.core.first(seq__47970__$1);
var map__47980__$1 = cljs.core.__destructure_map(map__47980);
var src = map__47980__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47980__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47980__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47980__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47980__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47981){var e_48303 = e47981;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48303);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48303.message)].join('')));
}

var G__48304 = cljs.core.next(seq__47970__$1);
var G__48305 = null;
var G__48306 = (0);
var G__48307 = (0);
seq__47970 = G__48304;
chunk__47971 = G__48305;
count__47972 = G__48306;
i__47973 = G__48307;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47982 = cljs.core.seq(js_requires);
var chunk__47983 = null;
var count__47984 = (0);
var i__47985 = (0);
while(true){
if((i__47985 < count__47984)){
var js_ns = chunk__47983.cljs$core$IIndexed$_nth$arity$2(null,i__47985);
var require_str_48308 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48308);


var G__48309 = seq__47982;
var G__48310 = chunk__47983;
var G__48311 = count__47984;
var G__48312 = (i__47985 + (1));
seq__47982 = G__48309;
chunk__47983 = G__48310;
count__47984 = G__48311;
i__47985 = G__48312;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47982);
if(temp__5804__auto__){
var seq__47982__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47982__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47982__$1);
var G__48313 = cljs.core.chunk_rest(seq__47982__$1);
var G__48314 = c__5568__auto__;
var G__48315 = cljs.core.count(c__5568__auto__);
var G__48316 = (0);
seq__47982 = G__48313;
chunk__47983 = G__48314;
count__47984 = G__48315;
i__47985 = G__48316;
continue;
} else {
var js_ns = cljs.core.first(seq__47982__$1);
var require_str_48317 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48317);


var G__48318 = cljs.core.next(seq__47982__$1);
var G__48319 = null;
var G__48320 = (0);
var G__48321 = (0);
seq__47982 = G__48318;
chunk__47983 = G__48319;
count__47984 = G__48320;
i__47985 = G__48321;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47988){
var map__47989 = p__47988;
var map__47989__$1 = cljs.core.__destructure_map(map__47989);
var msg = map__47989__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47989__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47989__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47993(s__47994){
return (new cljs.core.LazySeq(null,(function (){
var s__47994__$1 = s__47994;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__47994__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__47999 = cljs.core.first(xs__6360__auto__);
var map__47999__$1 = cljs.core.__destructure_map(map__47999);
var src = map__47999__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47999__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47999__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__47994__$1,map__47999,map__47999__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47989,map__47989__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47993_$_iter__47995(s__47996){
return (new cljs.core.LazySeq(null,((function (s__47994__$1,map__47999,map__47999__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47989,map__47989__$1,msg,info,reload_info){
return (function (){
var s__47996__$1 = s__47996;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__47996__$1);
if(temp__5804__auto____$1){
var s__47996__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47996__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47996__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47998 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47997 = (0);
while(true){
if((i__47997 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__47997);
cljs.core.chunk_append(b__47998,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48322 = (i__47997 + (1));
i__47997 = G__48322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47998),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47993_$_iter__47995(cljs.core.chunk_rest(s__47996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47998),null);
}
} else {
var warning = cljs.core.first(s__47996__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47993_$_iter__47995(cljs.core.rest(s__47996__$2)));
}
} else {
return null;
}
break;
}
});})(s__47994__$1,map__47999,map__47999__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47989,map__47989__$1,msg,info,reload_info))
,null,null));
});})(s__47994__$1,map__47999,map__47999__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47989,map__47989__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47993(cljs.core.rest(s__47994__$1)));
} else {
var G__48323 = cljs.core.rest(s__47994__$1);
s__47994__$1 = G__48323;
continue;
}
} else {
var G__48324 = cljs.core.rest(s__47994__$1);
s__47994__$1 = G__48324;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__48002_48325 = cljs.core.seq(warnings);
var chunk__48003_48326 = null;
var count__48004_48327 = (0);
var i__48005_48328 = (0);
while(true){
if((i__48005_48328 < count__48004_48327)){
var map__48010_48329 = chunk__48003_48326.cljs$core$IIndexed$_nth$arity$2(null,i__48005_48328);
var map__48010_48330__$1 = cljs.core.__destructure_map(map__48010_48329);
var w_48331 = map__48010_48330__$1;
var msg_48332__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48010_48330__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48010_48330__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48010_48330__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48010_48330__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48335)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48333),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48334),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48332__$1)].join(''));


var G__48336 = seq__48002_48325;
var G__48337 = chunk__48003_48326;
var G__48338 = count__48004_48327;
var G__48339 = (i__48005_48328 + (1));
seq__48002_48325 = G__48336;
chunk__48003_48326 = G__48337;
count__48004_48327 = G__48338;
i__48005_48328 = G__48339;
continue;
} else {
var temp__5804__auto___48340 = cljs.core.seq(seq__48002_48325);
if(temp__5804__auto___48340){
var seq__48002_48341__$1 = temp__5804__auto___48340;
if(cljs.core.chunked_seq_QMARK_(seq__48002_48341__$1)){
var c__5568__auto___48342 = cljs.core.chunk_first(seq__48002_48341__$1);
var G__48343 = cljs.core.chunk_rest(seq__48002_48341__$1);
var G__48344 = c__5568__auto___48342;
var G__48345 = cljs.core.count(c__5568__auto___48342);
var G__48346 = (0);
seq__48002_48325 = G__48343;
chunk__48003_48326 = G__48344;
count__48004_48327 = G__48345;
i__48005_48328 = G__48346;
continue;
} else {
var map__48011_48347 = cljs.core.first(seq__48002_48341__$1);
var map__48011_48348__$1 = cljs.core.__destructure_map(map__48011_48347);
var w_48349 = map__48011_48348__$1;
var msg_48350__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48348__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48348__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48348__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48011_48348__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48353)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48351),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48352),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48350__$1)].join(''));


var G__48354 = cljs.core.next(seq__48002_48341__$1);
var G__48355 = null;
var G__48356 = (0);
var G__48357 = (0);
seq__48002_48325 = G__48354;
chunk__48003_48326 = G__48355;
count__48004_48327 = G__48356;
i__48005_48328 = G__48357;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47986_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47986_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48012){
var map__48013 = p__48012;
var map__48013__$1 = cljs.core.__destructure_map(map__48013);
var msg = map__48013__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__48014 = cljs.core.seq(updates);
var chunk__48016 = null;
var count__48017 = (0);
var i__48018 = (0);
while(true){
if((i__48018 < count__48017)){
var path = chunk__48016.cljs$core$IIndexed$_nth$arity$2(null,i__48018);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48136_48358 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48140_48359 = null;
var count__48141_48360 = (0);
var i__48142_48361 = (0);
while(true){
if((i__48142_48361 < count__48141_48360)){
var node_48362 = chunk__48140_48359.cljs$core$IIndexed$_nth$arity$2(null,i__48142_48361);
if(cljs.core.not(node_48362.shadow$old)){
var path_match_48363 = shadow.cljs.devtools.client.browser.match_paths(node_48362.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48363)){
var new_link_48364 = (function (){var G__48176 = node_48362.cloneNode(true);
G__48176.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48363),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48176;
})();
(node_48362.shadow$old = true);

(new_link_48364.onload = ((function (seq__48136_48358,chunk__48140_48359,count__48141_48360,i__48142_48361,seq__48014,chunk__48016,count__48017,i__48018,new_link_48364,path_match_48363,node_48362,path,map__48013,map__48013__$1,msg,updates,reload_info){
return (function (e){
var seq__48177_48365 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48179_48366 = null;
var count__48180_48367 = (0);
var i__48181_48368 = (0);
while(true){
if((i__48181_48368 < count__48180_48367)){
var map__48185_48369 = chunk__48179_48366.cljs$core$IIndexed$_nth$arity$2(null,i__48181_48368);
var map__48185_48370__$1 = cljs.core.__destructure_map(map__48185_48369);
var task_48371 = map__48185_48370__$1;
var fn_str_48372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48185_48370__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48185_48370__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48374 = goog.getObjectByName(fn_str_48372,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48373)].join(''));

(fn_obj_48374.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48374.cljs$core$IFn$_invoke$arity$2(path,new_link_48364) : fn_obj_48374.call(null,path,new_link_48364));


var G__48375 = seq__48177_48365;
var G__48376 = chunk__48179_48366;
var G__48377 = count__48180_48367;
var G__48378 = (i__48181_48368 + (1));
seq__48177_48365 = G__48375;
chunk__48179_48366 = G__48376;
count__48180_48367 = G__48377;
i__48181_48368 = G__48378;
continue;
} else {
var temp__5804__auto___48379 = cljs.core.seq(seq__48177_48365);
if(temp__5804__auto___48379){
var seq__48177_48380__$1 = temp__5804__auto___48379;
if(cljs.core.chunked_seq_QMARK_(seq__48177_48380__$1)){
var c__5568__auto___48381 = cljs.core.chunk_first(seq__48177_48380__$1);
var G__48382 = cljs.core.chunk_rest(seq__48177_48380__$1);
var G__48383 = c__5568__auto___48381;
var G__48384 = cljs.core.count(c__5568__auto___48381);
var G__48385 = (0);
seq__48177_48365 = G__48382;
chunk__48179_48366 = G__48383;
count__48180_48367 = G__48384;
i__48181_48368 = G__48385;
continue;
} else {
var map__48186_48386 = cljs.core.first(seq__48177_48380__$1);
var map__48186_48387__$1 = cljs.core.__destructure_map(map__48186_48386);
var task_48388 = map__48186_48387__$1;
var fn_str_48389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48186_48387__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48186_48387__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48391 = goog.getObjectByName(fn_str_48389,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48390)].join(''));

(fn_obj_48391.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48391.cljs$core$IFn$_invoke$arity$2(path,new_link_48364) : fn_obj_48391.call(null,path,new_link_48364));


var G__48392 = cljs.core.next(seq__48177_48380__$1);
var G__48393 = null;
var G__48394 = (0);
var G__48395 = (0);
seq__48177_48365 = G__48392;
chunk__48179_48366 = G__48393;
count__48180_48367 = G__48394;
i__48181_48368 = G__48395;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48362);
});})(seq__48136_48358,chunk__48140_48359,count__48141_48360,i__48142_48361,seq__48014,chunk__48016,count__48017,i__48018,new_link_48364,path_match_48363,node_48362,path,map__48013,map__48013__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48363], 0));

goog.dom.insertSiblingAfter(new_link_48364,node_48362);


var G__48396 = seq__48136_48358;
var G__48397 = chunk__48140_48359;
var G__48398 = count__48141_48360;
var G__48399 = (i__48142_48361 + (1));
seq__48136_48358 = G__48396;
chunk__48140_48359 = G__48397;
count__48141_48360 = G__48398;
i__48142_48361 = G__48399;
continue;
} else {
var G__48400 = seq__48136_48358;
var G__48401 = chunk__48140_48359;
var G__48402 = count__48141_48360;
var G__48403 = (i__48142_48361 + (1));
seq__48136_48358 = G__48400;
chunk__48140_48359 = G__48401;
count__48141_48360 = G__48402;
i__48142_48361 = G__48403;
continue;
}
} else {
var G__48404 = seq__48136_48358;
var G__48405 = chunk__48140_48359;
var G__48406 = count__48141_48360;
var G__48407 = (i__48142_48361 + (1));
seq__48136_48358 = G__48404;
chunk__48140_48359 = G__48405;
count__48141_48360 = G__48406;
i__48142_48361 = G__48407;
continue;
}
} else {
var temp__5804__auto___48408 = cljs.core.seq(seq__48136_48358);
if(temp__5804__auto___48408){
var seq__48136_48409__$1 = temp__5804__auto___48408;
if(cljs.core.chunked_seq_QMARK_(seq__48136_48409__$1)){
var c__5568__auto___48410 = cljs.core.chunk_first(seq__48136_48409__$1);
var G__48411 = cljs.core.chunk_rest(seq__48136_48409__$1);
var G__48412 = c__5568__auto___48410;
var G__48413 = cljs.core.count(c__5568__auto___48410);
var G__48414 = (0);
seq__48136_48358 = G__48411;
chunk__48140_48359 = G__48412;
count__48141_48360 = G__48413;
i__48142_48361 = G__48414;
continue;
} else {
var node_48415 = cljs.core.first(seq__48136_48409__$1);
if(cljs.core.not(node_48415.shadow$old)){
var path_match_48416 = shadow.cljs.devtools.client.browser.match_paths(node_48415.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48416)){
var new_link_48417 = (function (){var G__48190 = node_48415.cloneNode(true);
G__48190.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48416),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48190;
})();
(node_48415.shadow$old = true);

(new_link_48417.onload = ((function (seq__48136_48358,chunk__48140_48359,count__48141_48360,i__48142_48361,seq__48014,chunk__48016,count__48017,i__48018,new_link_48417,path_match_48416,node_48415,seq__48136_48409__$1,temp__5804__auto___48408,path,map__48013,map__48013__$1,msg,updates,reload_info){
return (function (e){
var seq__48191_48418 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48193_48419 = null;
var count__48194_48420 = (0);
var i__48195_48421 = (0);
while(true){
if((i__48195_48421 < count__48194_48420)){
var map__48199_48422 = chunk__48193_48419.cljs$core$IIndexed$_nth$arity$2(null,i__48195_48421);
var map__48199_48423__$1 = cljs.core.__destructure_map(map__48199_48422);
var task_48424 = map__48199_48423__$1;
var fn_str_48425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48199_48423__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48199_48423__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48427 = goog.getObjectByName(fn_str_48425,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48426)].join(''));

(fn_obj_48427.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48427.cljs$core$IFn$_invoke$arity$2(path,new_link_48417) : fn_obj_48427.call(null,path,new_link_48417));


var G__48428 = seq__48191_48418;
var G__48429 = chunk__48193_48419;
var G__48430 = count__48194_48420;
var G__48431 = (i__48195_48421 + (1));
seq__48191_48418 = G__48428;
chunk__48193_48419 = G__48429;
count__48194_48420 = G__48430;
i__48195_48421 = G__48431;
continue;
} else {
var temp__5804__auto___48432__$1 = cljs.core.seq(seq__48191_48418);
if(temp__5804__auto___48432__$1){
var seq__48191_48433__$1 = temp__5804__auto___48432__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48191_48433__$1)){
var c__5568__auto___48434 = cljs.core.chunk_first(seq__48191_48433__$1);
var G__48435 = cljs.core.chunk_rest(seq__48191_48433__$1);
var G__48436 = c__5568__auto___48434;
var G__48437 = cljs.core.count(c__5568__auto___48434);
var G__48438 = (0);
seq__48191_48418 = G__48435;
chunk__48193_48419 = G__48436;
count__48194_48420 = G__48437;
i__48195_48421 = G__48438;
continue;
} else {
var map__48200_48439 = cljs.core.first(seq__48191_48433__$1);
var map__48200_48440__$1 = cljs.core.__destructure_map(map__48200_48439);
var task_48441 = map__48200_48440__$1;
var fn_str_48442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48200_48440__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48200_48440__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48444 = goog.getObjectByName(fn_str_48442,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48443)].join(''));

(fn_obj_48444.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48444.cljs$core$IFn$_invoke$arity$2(path,new_link_48417) : fn_obj_48444.call(null,path,new_link_48417));


var G__48445 = cljs.core.next(seq__48191_48433__$1);
var G__48446 = null;
var G__48447 = (0);
var G__48448 = (0);
seq__48191_48418 = G__48445;
chunk__48193_48419 = G__48446;
count__48194_48420 = G__48447;
i__48195_48421 = G__48448;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48415);
});})(seq__48136_48358,chunk__48140_48359,count__48141_48360,i__48142_48361,seq__48014,chunk__48016,count__48017,i__48018,new_link_48417,path_match_48416,node_48415,seq__48136_48409__$1,temp__5804__auto___48408,path,map__48013,map__48013__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48416], 0));

goog.dom.insertSiblingAfter(new_link_48417,node_48415);


var G__48449 = cljs.core.next(seq__48136_48409__$1);
var G__48450 = null;
var G__48451 = (0);
var G__48452 = (0);
seq__48136_48358 = G__48449;
chunk__48140_48359 = G__48450;
count__48141_48360 = G__48451;
i__48142_48361 = G__48452;
continue;
} else {
var G__48453 = cljs.core.next(seq__48136_48409__$1);
var G__48454 = null;
var G__48455 = (0);
var G__48456 = (0);
seq__48136_48358 = G__48453;
chunk__48140_48359 = G__48454;
count__48141_48360 = G__48455;
i__48142_48361 = G__48456;
continue;
}
} else {
var G__48457 = cljs.core.next(seq__48136_48409__$1);
var G__48458 = null;
var G__48459 = (0);
var G__48460 = (0);
seq__48136_48358 = G__48457;
chunk__48140_48359 = G__48458;
count__48141_48360 = G__48459;
i__48142_48361 = G__48460;
continue;
}
}
} else {
}
}
break;
}


var G__48461 = seq__48014;
var G__48462 = chunk__48016;
var G__48463 = count__48017;
var G__48464 = (i__48018 + (1));
seq__48014 = G__48461;
chunk__48016 = G__48462;
count__48017 = G__48463;
i__48018 = G__48464;
continue;
} else {
var G__48465 = seq__48014;
var G__48466 = chunk__48016;
var G__48467 = count__48017;
var G__48468 = (i__48018 + (1));
seq__48014 = G__48465;
chunk__48016 = G__48466;
count__48017 = G__48467;
i__48018 = G__48468;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48014);
if(temp__5804__auto__){
var seq__48014__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48014__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48014__$1);
var G__48469 = cljs.core.chunk_rest(seq__48014__$1);
var G__48470 = c__5568__auto__;
var G__48471 = cljs.core.count(c__5568__auto__);
var G__48472 = (0);
seq__48014 = G__48469;
chunk__48016 = G__48470;
count__48017 = G__48471;
i__48018 = G__48472;
continue;
} else {
var path = cljs.core.first(seq__48014__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48201_48473 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48205_48474 = null;
var count__48206_48475 = (0);
var i__48207_48476 = (0);
while(true){
if((i__48207_48476 < count__48206_48475)){
var node_48477 = chunk__48205_48474.cljs$core$IIndexed$_nth$arity$2(null,i__48207_48476);
if(cljs.core.not(node_48477.shadow$old)){
var path_match_48478 = shadow.cljs.devtools.client.browser.match_paths(node_48477.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48478)){
var new_link_48479 = (function (){var G__48245 = node_48477.cloneNode(true);
G__48245.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48478),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48245;
})();
(node_48477.shadow$old = true);

(new_link_48479.onload = ((function (seq__48201_48473,chunk__48205_48474,count__48206_48475,i__48207_48476,seq__48014,chunk__48016,count__48017,i__48018,new_link_48479,path_match_48478,node_48477,path,seq__48014__$1,temp__5804__auto__,map__48013,map__48013__$1,msg,updates,reload_info){
return (function (e){
var seq__48247_48480 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48249_48481 = null;
var count__48250_48482 = (0);
var i__48251_48483 = (0);
while(true){
if((i__48251_48483 < count__48250_48482)){
var map__48258_48484 = chunk__48249_48481.cljs$core$IIndexed$_nth$arity$2(null,i__48251_48483);
var map__48258_48485__$1 = cljs.core.__destructure_map(map__48258_48484);
var task_48486 = map__48258_48485__$1;
var fn_str_48487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48258_48485__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48258_48485__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48489 = goog.getObjectByName(fn_str_48487,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48488)].join(''));

(fn_obj_48489.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48489.cljs$core$IFn$_invoke$arity$2(path,new_link_48479) : fn_obj_48489.call(null,path,new_link_48479));


var G__48490 = seq__48247_48480;
var G__48491 = chunk__48249_48481;
var G__48492 = count__48250_48482;
var G__48493 = (i__48251_48483 + (1));
seq__48247_48480 = G__48490;
chunk__48249_48481 = G__48491;
count__48250_48482 = G__48492;
i__48251_48483 = G__48493;
continue;
} else {
var temp__5804__auto___48494__$1 = cljs.core.seq(seq__48247_48480);
if(temp__5804__auto___48494__$1){
var seq__48247_48495__$1 = temp__5804__auto___48494__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48247_48495__$1)){
var c__5568__auto___48496 = cljs.core.chunk_first(seq__48247_48495__$1);
var G__48497 = cljs.core.chunk_rest(seq__48247_48495__$1);
var G__48498 = c__5568__auto___48496;
var G__48499 = cljs.core.count(c__5568__auto___48496);
var G__48500 = (0);
seq__48247_48480 = G__48497;
chunk__48249_48481 = G__48498;
count__48250_48482 = G__48499;
i__48251_48483 = G__48500;
continue;
} else {
var map__48259_48501 = cljs.core.first(seq__48247_48495__$1);
var map__48259_48502__$1 = cljs.core.__destructure_map(map__48259_48501);
var task_48503 = map__48259_48502__$1;
var fn_str_48504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48259_48502__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48259_48502__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48506 = goog.getObjectByName(fn_str_48504,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48505)].join(''));

(fn_obj_48506.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48506.cljs$core$IFn$_invoke$arity$2(path,new_link_48479) : fn_obj_48506.call(null,path,new_link_48479));


var G__48507 = cljs.core.next(seq__48247_48495__$1);
var G__48508 = null;
var G__48509 = (0);
var G__48510 = (0);
seq__48247_48480 = G__48507;
chunk__48249_48481 = G__48508;
count__48250_48482 = G__48509;
i__48251_48483 = G__48510;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48477);
});})(seq__48201_48473,chunk__48205_48474,count__48206_48475,i__48207_48476,seq__48014,chunk__48016,count__48017,i__48018,new_link_48479,path_match_48478,node_48477,path,seq__48014__$1,temp__5804__auto__,map__48013,map__48013__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48478], 0));

goog.dom.insertSiblingAfter(new_link_48479,node_48477);


var G__48511 = seq__48201_48473;
var G__48512 = chunk__48205_48474;
var G__48513 = count__48206_48475;
var G__48514 = (i__48207_48476 + (1));
seq__48201_48473 = G__48511;
chunk__48205_48474 = G__48512;
count__48206_48475 = G__48513;
i__48207_48476 = G__48514;
continue;
} else {
var G__48515 = seq__48201_48473;
var G__48516 = chunk__48205_48474;
var G__48517 = count__48206_48475;
var G__48518 = (i__48207_48476 + (1));
seq__48201_48473 = G__48515;
chunk__48205_48474 = G__48516;
count__48206_48475 = G__48517;
i__48207_48476 = G__48518;
continue;
}
} else {
var G__48519 = seq__48201_48473;
var G__48520 = chunk__48205_48474;
var G__48521 = count__48206_48475;
var G__48522 = (i__48207_48476 + (1));
seq__48201_48473 = G__48519;
chunk__48205_48474 = G__48520;
count__48206_48475 = G__48521;
i__48207_48476 = G__48522;
continue;
}
} else {
var temp__5804__auto___48523__$1 = cljs.core.seq(seq__48201_48473);
if(temp__5804__auto___48523__$1){
var seq__48201_48524__$1 = temp__5804__auto___48523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48201_48524__$1)){
var c__5568__auto___48525 = cljs.core.chunk_first(seq__48201_48524__$1);
var G__48526 = cljs.core.chunk_rest(seq__48201_48524__$1);
var G__48527 = c__5568__auto___48525;
var G__48528 = cljs.core.count(c__5568__auto___48525);
var G__48529 = (0);
seq__48201_48473 = G__48526;
chunk__48205_48474 = G__48527;
count__48206_48475 = G__48528;
i__48207_48476 = G__48529;
continue;
} else {
var node_48530 = cljs.core.first(seq__48201_48524__$1);
if(cljs.core.not(node_48530.shadow$old)){
var path_match_48531 = shadow.cljs.devtools.client.browser.match_paths(node_48530.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48531)){
var new_link_48532 = (function (){var G__48260 = node_48530.cloneNode(true);
G__48260.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48531),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48260;
})();
(node_48530.shadow$old = true);

(new_link_48532.onload = ((function (seq__48201_48473,chunk__48205_48474,count__48206_48475,i__48207_48476,seq__48014,chunk__48016,count__48017,i__48018,new_link_48532,path_match_48531,node_48530,seq__48201_48524__$1,temp__5804__auto___48523__$1,path,seq__48014__$1,temp__5804__auto__,map__48013,map__48013__$1,msg,updates,reload_info){
return (function (e){
var seq__48261_48533 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48263_48534 = null;
var count__48264_48535 = (0);
var i__48265_48536 = (0);
while(true){
if((i__48265_48536 < count__48264_48535)){
var map__48269_48537 = chunk__48263_48534.cljs$core$IIndexed$_nth$arity$2(null,i__48265_48536);
var map__48269_48538__$1 = cljs.core.__destructure_map(map__48269_48537);
var task_48539 = map__48269_48538__$1;
var fn_str_48540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48269_48538__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48269_48538__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48542 = goog.getObjectByName(fn_str_48540,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48541)].join(''));

(fn_obj_48542.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48542.cljs$core$IFn$_invoke$arity$2(path,new_link_48532) : fn_obj_48542.call(null,path,new_link_48532));


var G__48543 = seq__48261_48533;
var G__48544 = chunk__48263_48534;
var G__48545 = count__48264_48535;
var G__48546 = (i__48265_48536 + (1));
seq__48261_48533 = G__48543;
chunk__48263_48534 = G__48544;
count__48264_48535 = G__48545;
i__48265_48536 = G__48546;
continue;
} else {
var temp__5804__auto___48547__$2 = cljs.core.seq(seq__48261_48533);
if(temp__5804__auto___48547__$2){
var seq__48261_48548__$1 = temp__5804__auto___48547__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48261_48548__$1)){
var c__5568__auto___48549 = cljs.core.chunk_first(seq__48261_48548__$1);
var G__48550 = cljs.core.chunk_rest(seq__48261_48548__$1);
var G__48551 = c__5568__auto___48549;
var G__48552 = cljs.core.count(c__5568__auto___48549);
var G__48553 = (0);
seq__48261_48533 = G__48550;
chunk__48263_48534 = G__48551;
count__48264_48535 = G__48552;
i__48265_48536 = G__48553;
continue;
} else {
var map__48270_48554 = cljs.core.first(seq__48261_48548__$1);
var map__48270_48555__$1 = cljs.core.__destructure_map(map__48270_48554);
var task_48556 = map__48270_48555__$1;
var fn_str_48557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270_48555__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270_48555__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48559 = goog.getObjectByName(fn_str_48557,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48558)].join(''));

(fn_obj_48559.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48559.cljs$core$IFn$_invoke$arity$2(path,new_link_48532) : fn_obj_48559.call(null,path,new_link_48532));


var G__48560 = cljs.core.next(seq__48261_48548__$1);
var G__48561 = null;
var G__48562 = (0);
var G__48563 = (0);
seq__48261_48533 = G__48560;
chunk__48263_48534 = G__48561;
count__48264_48535 = G__48562;
i__48265_48536 = G__48563;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48530);
});})(seq__48201_48473,chunk__48205_48474,count__48206_48475,i__48207_48476,seq__48014,chunk__48016,count__48017,i__48018,new_link_48532,path_match_48531,node_48530,seq__48201_48524__$1,temp__5804__auto___48523__$1,path,seq__48014__$1,temp__5804__auto__,map__48013,map__48013__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48531], 0));

goog.dom.insertSiblingAfter(new_link_48532,node_48530);


var G__48564 = cljs.core.next(seq__48201_48524__$1);
var G__48565 = null;
var G__48566 = (0);
var G__48567 = (0);
seq__48201_48473 = G__48564;
chunk__48205_48474 = G__48565;
count__48206_48475 = G__48566;
i__48207_48476 = G__48567;
continue;
} else {
var G__48568 = cljs.core.next(seq__48201_48524__$1);
var G__48569 = null;
var G__48570 = (0);
var G__48571 = (0);
seq__48201_48473 = G__48568;
chunk__48205_48474 = G__48569;
count__48206_48475 = G__48570;
i__48207_48476 = G__48571;
continue;
}
} else {
var G__48572 = cljs.core.next(seq__48201_48524__$1);
var G__48573 = null;
var G__48574 = (0);
var G__48575 = (0);
seq__48201_48473 = G__48572;
chunk__48205_48474 = G__48573;
count__48206_48475 = G__48574;
i__48207_48476 = G__48575;
continue;
}
}
} else {
}
}
break;
}


var G__48576 = cljs.core.next(seq__48014__$1);
var G__48577 = null;
var G__48578 = (0);
var G__48579 = (0);
seq__48014 = G__48576;
chunk__48016 = G__48577;
count__48017 = G__48578;
i__48018 = G__48579;
continue;
} else {
var G__48580 = cljs.core.next(seq__48014__$1);
var G__48581 = null;
var G__48582 = (0);
var G__48583 = (0);
seq__48014 = G__48580;
chunk__48016 = G__48581;
count__48017 = G__48582;
i__48018 = G__48583;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48271){
var map__48272 = p__48271;
var map__48272__$1 = cljs.core.__destructure_map(map__48272);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48272__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48273){
var map__48274 = p__48273;
var map__48274__$1 = cljs.core.__destructure_map(map__48274);
var _ = map__48274__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48274__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48275,done,error){
var map__48276 = p__48275;
var map__48276__$1 = cljs.core.__destructure_map(map__48276);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48276__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48277,done,error){
var map__48278 = p__48277;
var map__48278__$1 = cljs.core.__destructure_map(map__48278);
var msg = map__48278__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48278__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48278__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48278__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48279){
var map__48280 = p__48279;
var map__48280__$1 = cljs.core.__destructure_map(map__48280);
var src = map__48280__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48280__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48281 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48281) : done.call(null,G__48281));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48282){
var map__48283 = p__48282;
var map__48283__$1 = cljs.core.__destructure_map(map__48283);
var msg__$1 = map__48283__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48283__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48284){var ex = e48284;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48285){
var map__48286 = p__48285;
var map__48286__$1 = cljs.core.__destructure_map(map__48286);
var env = map__48286__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48286__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48287){
var map__48288 = p__48287;
var map__48288__$1 = cljs.core.__destructure_map(map__48288);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48288__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48288__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48289){
var map__48290 = p__48289;
var map__48290__$1 = cljs.core.__destructure_map(map__48290);
var svc = map__48290__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48290__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
