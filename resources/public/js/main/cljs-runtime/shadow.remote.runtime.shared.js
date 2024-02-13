goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__47353,res){
var map__47354 = p__47353;
var map__47354__$1 = cljs.core.__destructure_map(map__47354);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47354__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47354__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__47355 = res;
var G__47355__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47355,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__47355);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47355__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__47355__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__47357 = arguments.length;
switch (G__47357) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__47358,msg,handlers,timeout_after_ms){
var map__47359 = p__47358;
var map__47359__$1 = cljs.core.__destructure_map(map__47359);
var runtime = map__47359__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47359__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47419 = arguments.length;
var i__5770__auto___47420 = (0);
while(true){
if((i__5770__auto___47420 < len__5769__auto___47419)){
args__5775__auto__.push((arguments[i__5770__auto___47420]));

var G__47421 = (i__5770__auto___47420 + (1));
i__5770__auto___47420 = G__47421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47364,ev,args){
var map__47365 = p__47364;
var map__47365__$1 = cljs.core.__destructure_map(map__47365);
var runtime = map__47365__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47365__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47366 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47369 = null;
var count__47370 = (0);
var i__47371 = (0);
while(true){
if((i__47371 < count__47370)){
var ext = chunk__47369.cljs$core$IIndexed$_nth$arity$2(null,i__47371);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47422 = seq__47366;
var G__47423 = chunk__47369;
var G__47424 = count__47370;
var G__47425 = (i__47371 + (1));
seq__47366 = G__47422;
chunk__47369 = G__47423;
count__47370 = G__47424;
i__47371 = G__47425;
continue;
} else {
var G__47426 = seq__47366;
var G__47427 = chunk__47369;
var G__47428 = count__47370;
var G__47429 = (i__47371 + (1));
seq__47366 = G__47426;
chunk__47369 = G__47427;
count__47370 = G__47428;
i__47371 = G__47429;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47366);
if(temp__5804__auto__){
var seq__47366__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47366__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47366__$1);
var G__47430 = cljs.core.chunk_rest(seq__47366__$1);
var G__47431 = c__5568__auto__;
var G__47432 = cljs.core.count(c__5568__auto__);
var G__47433 = (0);
seq__47366 = G__47430;
chunk__47369 = G__47431;
count__47370 = G__47432;
i__47371 = G__47433;
continue;
} else {
var ext = cljs.core.first(seq__47366__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47434 = cljs.core.next(seq__47366__$1);
var G__47435 = null;
var G__47436 = (0);
var G__47437 = (0);
seq__47366 = G__47434;
chunk__47369 = G__47435;
count__47370 = G__47436;
i__47371 = G__47437;
continue;
} else {
var G__47438 = cljs.core.next(seq__47366__$1);
var G__47439 = null;
var G__47440 = (0);
var G__47441 = (0);
seq__47366 = G__47438;
chunk__47369 = G__47439;
count__47370 = G__47440;
i__47371 = G__47441;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq47360){
var G__47361 = cljs.core.first(seq47360);
var seq47360__$1 = cljs.core.next(seq47360);
var G__47362 = cljs.core.first(seq47360__$1);
var seq47360__$2 = cljs.core.next(seq47360__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47361,G__47362,seq47360__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__47374,p__47375){
var map__47376 = p__47374;
var map__47376__$1 = cljs.core.__destructure_map(map__47376);
var runtime = map__47376__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47376__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47377 = p__47375;
var map__47377__$1 = cljs.core.__destructure_map(map__47377);
var msg = map__47377__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47377__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__47378 = cljs.core.deref(state_ref);
var map__47378__$1 = cljs.core.__destructure_map(map__47378);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47378__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47378__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__47379){
var map__47380 = p__47379;
var map__47380__$1 = cljs.core.__destructure_map(map__47380);
var runtime = map__47380__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47380__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__47381,msg){
var map__47382 = p__47381;
var map__47382__$1 = cljs.core.__destructure_map(map__47382);
var runtime = map__47382__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47382__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__47383,key,p__47384){
var map__47385 = p__47383;
var map__47385__$1 = cljs.core.__destructure_map(map__47385);
var state = map__47385__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47385__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__47386 = p__47384;
var map__47386__$1 = cljs.core.__destructure_map(map__47386);
var spec = map__47386__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47386__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__47387,key,spec){
var map__47388 = p__47387;
var map__47388__$1 = cljs.core.__destructure_map(map__47388);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47388__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__47389_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__47389_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__47390_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__47390_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__47391_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__47391_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__47392_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__47392_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__47393_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__47393_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__47394,key){
var map__47395 = p__47394;
var map__47395__$1 = cljs.core.__destructure_map(map__47395);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47395__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__47396,msg){
var map__47397 = p__47396;
var map__47397__$1 = cljs.core.__destructure_map(map__47397);
var runtime = map__47397__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47397__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__47398,p__47399){
var map__47400 = p__47398;
var map__47400__$1 = cljs.core.__destructure_map(map__47400);
var runtime = map__47400__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47400__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47401 = p__47399;
var map__47401__$1 = cljs.core.__destructure_map(map__47401);
var msg = map__47401__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47401__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47401__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__47402 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47404 = null;
var count__47405 = (0);
var i__47406 = (0);
while(true){
if((i__47406 < count__47405)){
var map__47416 = chunk__47404.cljs$core$IIndexed$_nth$arity$2(null,i__47406);
var map__47416__$1 = cljs.core.__destructure_map(map__47416);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47416__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47466 = seq__47402;
var G__47467 = chunk__47404;
var G__47468 = count__47405;
var G__47469 = (i__47406 + (1));
seq__47402 = G__47466;
chunk__47404 = G__47467;
count__47405 = G__47468;
i__47406 = G__47469;
continue;
} else {
var G__47470 = seq__47402;
var G__47471 = chunk__47404;
var G__47472 = count__47405;
var G__47473 = (i__47406 + (1));
seq__47402 = G__47470;
chunk__47404 = G__47471;
count__47405 = G__47472;
i__47406 = G__47473;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47402);
if(temp__5804__auto__){
var seq__47402__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47402__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47402__$1);
var G__47474 = cljs.core.chunk_rest(seq__47402__$1);
var G__47475 = c__5568__auto__;
var G__47476 = cljs.core.count(c__5568__auto__);
var G__47477 = (0);
seq__47402 = G__47474;
chunk__47404 = G__47475;
count__47405 = G__47476;
i__47406 = G__47477;
continue;
} else {
var map__47417 = cljs.core.first(seq__47402__$1);
var map__47417__$1 = cljs.core.__destructure_map(map__47417);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47417__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47478 = cljs.core.next(seq__47402__$1);
var G__47479 = null;
var G__47480 = (0);
var G__47481 = (0);
seq__47402 = G__47478;
chunk__47404 = G__47479;
count__47405 = G__47480;
i__47406 = G__47481;
continue;
} else {
var G__47482 = cljs.core.next(seq__47402__$1);
var G__47483 = null;
var G__47484 = (0);
var G__47485 = (0);
seq__47402 = G__47482;
chunk__47404 = G__47483;
count__47405 = G__47484;
i__47406 = G__47485;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
