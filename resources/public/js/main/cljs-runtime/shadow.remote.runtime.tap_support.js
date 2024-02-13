goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__47737,p__47738){
var map__47739 = p__47737;
var map__47739__$1 = cljs.core.__destructure_map(map__47739);
var svc = map__47739__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47739__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47739__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47739__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47740 = p__47738;
var map__47740__$1 = cljs.core.__destructure_map(map__47740);
var msg = map__47740__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47740__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47740__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47740__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47740__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__47741,p__47742){
var map__47743 = p__47741;
var map__47743__$1 = cljs.core.__destructure_map(map__47743);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47743__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__47744 = p__47742;
var map__47744__$1 = cljs.core.__destructure_map(map__47744);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47744__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__47745,p__47746){
var map__47747 = p__47745;
var map__47747__$1 = cljs.core.__destructure_map(map__47747);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47747__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47747__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47748 = p__47746;
var map__47748__$1 = cljs.core.__destructure_map(map__47748);
var msg = map__47748__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47748__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__47749,tid){
var map__47750 = p__47749;
var map__47750__$1 = cljs.core.__destructure_map(map__47750);
var svc = map__47750__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47750__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__47755 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__47756 = null;
var count__47757 = (0);
var i__47758 = (0);
while(true){
if((i__47758 < count__47757)){
var vec__47765 = chunk__47756.cljs$core$IIndexed$_nth$arity$2(null,i__47758);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47765,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47765,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47773 = seq__47755;
var G__47774 = chunk__47756;
var G__47775 = count__47757;
var G__47776 = (i__47758 + (1));
seq__47755 = G__47773;
chunk__47756 = G__47774;
count__47757 = G__47775;
i__47758 = G__47776;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47755);
if(temp__5804__auto__){
var seq__47755__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47755__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47755__$1);
var G__47777 = cljs.core.chunk_rest(seq__47755__$1);
var G__47778 = c__5568__auto__;
var G__47779 = cljs.core.count(c__5568__auto__);
var G__47780 = (0);
seq__47755 = G__47777;
chunk__47756 = G__47778;
count__47757 = G__47779;
i__47758 = G__47780;
continue;
} else {
var vec__47768 = cljs.core.first(seq__47755__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47768,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47768,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47781 = cljs.core.next(seq__47755__$1);
var G__47782 = null;
var G__47783 = (0);
var G__47784 = (0);
seq__47755 = G__47781;
chunk__47756 = G__47782;
count__47757 = G__47783;
i__47758 = G__47784;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__47751_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__47751_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__47752_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__47752_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__47753_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__47753_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__47754_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__47754_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__47771){
var map__47772 = p__47771;
var map__47772__$1 = cljs.core.__destructure_map(map__47772);
var svc = map__47772__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47772__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47772__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
