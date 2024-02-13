goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46426 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46426(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46427 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46427(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46105 = coll;
var G__46106 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46105,G__46106) : shadow.dom.lazy_native_coll_seq.call(null,G__46105,G__46106));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46109 = arguments.length;
switch (G__46109) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46111 = arguments.length;
switch (G__46111) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46113 = arguments.length;
switch (G__46113) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46115 = arguments.length;
switch (G__46115) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46117 = arguments.length;
switch (G__46117) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46119 = arguments.length;
switch (G__46119) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46120){if((e46120 instanceof Object)){
var e = e46120;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46120;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46127 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46128 = null;
var count__46129 = (0);
var i__46130 = (0);
while(true){
if((i__46130 < count__46129)){
var el = chunk__46128.cljs$core$IIndexed$_nth$arity$2(null,i__46130);
var handler_46436__$1 = ((function (seq__46127,chunk__46128,count__46129,i__46130,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46127,chunk__46128,count__46129,i__46130,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46436__$1);


var G__46437 = seq__46127;
var G__46438 = chunk__46128;
var G__46439 = count__46129;
var G__46440 = (i__46130 + (1));
seq__46127 = G__46437;
chunk__46128 = G__46438;
count__46129 = G__46439;
i__46130 = G__46440;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46127);
if(temp__5804__auto__){
var seq__46127__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46127__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46127__$1);
var G__46441 = cljs.core.chunk_rest(seq__46127__$1);
var G__46442 = c__5568__auto__;
var G__46443 = cljs.core.count(c__5568__auto__);
var G__46444 = (0);
seq__46127 = G__46441;
chunk__46128 = G__46442;
count__46129 = G__46443;
i__46130 = G__46444;
continue;
} else {
var el = cljs.core.first(seq__46127__$1);
var handler_46445__$1 = ((function (seq__46127,chunk__46128,count__46129,i__46130,el,seq__46127__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46127,chunk__46128,count__46129,i__46130,el,seq__46127__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46445__$1);


var G__46446 = cljs.core.next(seq__46127__$1);
var G__46447 = null;
var G__46448 = (0);
var G__46449 = (0);
seq__46127 = G__46446;
chunk__46128 = G__46447;
count__46129 = G__46448;
i__46130 = G__46449;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46168 = arguments.length;
switch (G__46168) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46169 = cljs.core.seq(events);
var chunk__46170 = null;
var count__46171 = (0);
var i__46172 = (0);
while(true){
if((i__46172 < count__46171)){
var vec__46194 = chunk__46170.cljs$core$IIndexed$_nth$arity$2(null,i__46172);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46194,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46457 = seq__46169;
var G__46458 = chunk__46170;
var G__46459 = count__46171;
var G__46460 = (i__46172 + (1));
seq__46169 = G__46457;
chunk__46170 = G__46458;
count__46171 = G__46459;
i__46172 = G__46460;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46169);
if(temp__5804__auto__){
var seq__46169__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46169__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46169__$1);
var G__46461 = cljs.core.chunk_rest(seq__46169__$1);
var G__46462 = c__5568__auto__;
var G__46463 = cljs.core.count(c__5568__auto__);
var G__46464 = (0);
seq__46169 = G__46461;
chunk__46170 = G__46462;
count__46171 = G__46463;
i__46172 = G__46464;
continue;
} else {
var vec__46197 = cljs.core.first(seq__46169__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46197,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46197,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46466 = cljs.core.next(seq__46169__$1);
var G__46467 = null;
var G__46468 = (0);
var G__46469 = (0);
seq__46169 = G__46466;
chunk__46170 = G__46467;
count__46171 = G__46468;
i__46172 = G__46469;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46200 = cljs.core.seq(styles);
var chunk__46201 = null;
var count__46202 = (0);
var i__46203 = (0);
while(true){
if((i__46203 < count__46202)){
var vec__46210 = chunk__46201.cljs$core$IIndexed$_nth$arity$2(null,i__46203);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46210,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46470 = seq__46200;
var G__46471 = chunk__46201;
var G__46472 = count__46202;
var G__46473 = (i__46203 + (1));
seq__46200 = G__46470;
chunk__46201 = G__46471;
count__46202 = G__46472;
i__46203 = G__46473;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46200);
if(temp__5804__auto__){
var seq__46200__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46200__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46200__$1);
var G__46474 = cljs.core.chunk_rest(seq__46200__$1);
var G__46475 = c__5568__auto__;
var G__46476 = cljs.core.count(c__5568__auto__);
var G__46477 = (0);
seq__46200 = G__46474;
chunk__46201 = G__46475;
count__46202 = G__46476;
i__46203 = G__46477;
continue;
} else {
var vec__46213 = cljs.core.first(seq__46200__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46213,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46478 = cljs.core.next(seq__46200__$1);
var G__46479 = null;
var G__46480 = (0);
var G__46481 = (0);
seq__46200 = G__46478;
chunk__46201 = G__46479;
count__46202 = G__46480;
i__46203 = G__46481;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46216_46484 = key;
var G__46216_46485__$1 = (((G__46216_46484 instanceof cljs.core.Keyword))?G__46216_46484.fqn:null);
switch (G__46216_46485__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46490 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_46490,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_46490,"aria-");
}
})())){
el.setAttribute(ks_46490,value);
} else {
(el[ks_46490] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46217){
var map__46218 = p__46217;
var map__46218__$1 = cljs.core.__destructure_map(map__46218);
var props = map__46218__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46218__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46220 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46220,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46220,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46220,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46226 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46226,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46226;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46232 = arguments.length;
switch (G__46232) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46236){
var vec__46237 = p__46236;
var seq__46238 = cljs.core.seq(vec__46237);
var first__46239 = cljs.core.first(seq__46238);
var seq__46238__$1 = cljs.core.next(seq__46238);
var nn = first__46239;
var first__46239__$1 = cljs.core.first(seq__46238__$1);
var seq__46238__$2 = cljs.core.next(seq__46238__$1);
var np = first__46239__$1;
var nc = seq__46238__$2;
var node = vec__46237;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46240 = nn;
var G__46241 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46240,G__46241) : create_fn.call(null,G__46240,G__46241));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46242 = nn;
var G__46243 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46242,G__46243) : create_fn.call(null,G__46242,G__46243));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46244 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46244,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46244,(1),null);
var seq__46247_46503 = cljs.core.seq(node_children);
var chunk__46248_46504 = null;
var count__46249_46505 = (0);
var i__46250_46506 = (0);
while(true){
if((i__46250_46506 < count__46249_46505)){
var child_struct_46507 = chunk__46248_46504.cljs$core$IIndexed$_nth$arity$2(null,i__46250_46506);
var children_46508 = shadow.dom.dom_node(child_struct_46507);
if(cljs.core.seq_QMARK_(children_46508)){
var seq__46263_46509 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46508));
var chunk__46265_46510 = null;
var count__46266_46511 = (0);
var i__46267_46512 = (0);
while(true){
if((i__46267_46512 < count__46266_46511)){
var child_46513 = chunk__46265_46510.cljs$core$IIndexed$_nth$arity$2(null,i__46267_46512);
if(cljs.core.truth_(child_46513)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46513);


var G__46514 = seq__46263_46509;
var G__46515 = chunk__46265_46510;
var G__46516 = count__46266_46511;
var G__46517 = (i__46267_46512 + (1));
seq__46263_46509 = G__46514;
chunk__46265_46510 = G__46515;
count__46266_46511 = G__46516;
i__46267_46512 = G__46517;
continue;
} else {
var G__46519 = seq__46263_46509;
var G__46520 = chunk__46265_46510;
var G__46521 = count__46266_46511;
var G__46522 = (i__46267_46512 + (1));
seq__46263_46509 = G__46519;
chunk__46265_46510 = G__46520;
count__46266_46511 = G__46521;
i__46267_46512 = G__46522;
continue;
}
} else {
var temp__5804__auto___46525 = cljs.core.seq(seq__46263_46509);
if(temp__5804__auto___46525){
var seq__46263_46526__$1 = temp__5804__auto___46525;
if(cljs.core.chunked_seq_QMARK_(seq__46263_46526__$1)){
var c__5568__auto___46527 = cljs.core.chunk_first(seq__46263_46526__$1);
var G__46528 = cljs.core.chunk_rest(seq__46263_46526__$1);
var G__46529 = c__5568__auto___46527;
var G__46530 = cljs.core.count(c__5568__auto___46527);
var G__46531 = (0);
seq__46263_46509 = G__46528;
chunk__46265_46510 = G__46529;
count__46266_46511 = G__46530;
i__46267_46512 = G__46531;
continue;
} else {
var child_46532 = cljs.core.first(seq__46263_46526__$1);
if(cljs.core.truth_(child_46532)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46532);


var G__46533 = cljs.core.next(seq__46263_46526__$1);
var G__46534 = null;
var G__46535 = (0);
var G__46536 = (0);
seq__46263_46509 = G__46533;
chunk__46265_46510 = G__46534;
count__46266_46511 = G__46535;
i__46267_46512 = G__46536;
continue;
} else {
var G__46537 = cljs.core.next(seq__46263_46526__$1);
var G__46538 = null;
var G__46539 = (0);
var G__46540 = (0);
seq__46263_46509 = G__46537;
chunk__46265_46510 = G__46538;
count__46266_46511 = G__46539;
i__46267_46512 = G__46540;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46508);
}


var G__46541 = seq__46247_46503;
var G__46542 = chunk__46248_46504;
var G__46543 = count__46249_46505;
var G__46544 = (i__46250_46506 + (1));
seq__46247_46503 = G__46541;
chunk__46248_46504 = G__46542;
count__46249_46505 = G__46543;
i__46250_46506 = G__46544;
continue;
} else {
var temp__5804__auto___46545 = cljs.core.seq(seq__46247_46503);
if(temp__5804__auto___46545){
var seq__46247_46546__$1 = temp__5804__auto___46545;
if(cljs.core.chunked_seq_QMARK_(seq__46247_46546__$1)){
var c__5568__auto___46547 = cljs.core.chunk_first(seq__46247_46546__$1);
var G__46548 = cljs.core.chunk_rest(seq__46247_46546__$1);
var G__46549 = c__5568__auto___46547;
var G__46550 = cljs.core.count(c__5568__auto___46547);
var G__46551 = (0);
seq__46247_46503 = G__46548;
chunk__46248_46504 = G__46549;
count__46249_46505 = G__46550;
i__46250_46506 = G__46551;
continue;
} else {
var child_struct_46552 = cljs.core.first(seq__46247_46546__$1);
var children_46553 = shadow.dom.dom_node(child_struct_46552);
if(cljs.core.seq_QMARK_(children_46553)){
var seq__46269_46554 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46553));
var chunk__46271_46555 = null;
var count__46272_46556 = (0);
var i__46273_46557 = (0);
while(true){
if((i__46273_46557 < count__46272_46556)){
var child_46558 = chunk__46271_46555.cljs$core$IIndexed$_nth$arity$2(null,i__46273_46557);
if(cljs.core.truth_(child_46558)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46558);


var G__46559 = seq__46269_46554;
var G__46560 = chunk__46271_46555;
var G__46561 = count__46272_46556;
var G__46562 = (i__46273_46557 + (1));
seq__46269_46554 = G__46559;
chunk__46271_46555 = G__46560;
count__46272_46556 = G__46561;
i__46273_46557 = G__46562;
continue;
} else {
var G__46563 = seq__46269_46554;
var G__46564 = chunk__46271_46555;
var G__46565 = count__46272_46556;
var G__46566 = (i__46273_46557 + (1));
seq__46269_46554 = G__46563;
chunk__46271_46555 = G__46564;
count__46272_46556 = G__46565;
i__46273_46557 = G__46566;
continue;
}
} else {
var temp__5804__auto___46570__$1 = cljs.core.seq(seq__46269_46554);
if(temp__5804__auto___46570__$1){
var seq__46269_46571__$1 = temp__5804__auto___46570__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46269_46571__$1)){
var c__5568__auto___46572 = cljs.core.chunk_first(seq__46269_46571__$1);
var G__46573 = cljs.core.chunk_rest(seq__46269_46571__$1);
var G__46574 = c__5568__auto___46572;
var G__46575 = cljs.core.count(c__5568__auto___46572);
var G__46576 = (0);
seq__46269_46554 = G__46573;
chunk__46271_46555 = G__46574;
count__46272_46556 = G__46575;
i__46273_46557 = G__46576;
continue;
} else {
var child_46577 = cljs.core.first(seq__46269_46571__$1);
if(cljs.core.truth_(child_46577)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46577);


var G__46578 = cljs.core.next(seq__46269_46571__$1);
var G__46579 = null;
var G__46580 = (0);
var G__46581 = (0);
seq__46269_46554 = G__46578;
chunk__46271_46555 = G__46579;
count__46272_46556 = G__46580;
i__46273_46557 = G__46581;
continue;
} else {
var G__46582 = cljs.core.next(seq__46269_46571__$1);
var G__46583 = null;
var G__46584 = (0);
var G__46585 = (0);
seq__46269_46554 = G__46582;
chunk__46271_46555 = G__46583;
count__46272_46556 = G__46584;
i__46273_46557 = G__46585;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46553);
}


var G__46586 = cljs.core.next(seq__46247_46546__$1);
var G__46587 = null;
var G__46588 = (0);
var G__46589 = (0);
seq__46247_46503 = G__46586;
chunk__46248_46504 = G__46587;
count__46249_46505 = G__46588;
i__46250_46506 = G__46589;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46276 = cljs.core.seq(node);
var chunk__46277 = null;
var count__46278 = (0);
var i__46279 = (0);
while(true){
if((i__46279 < count__46278)){
var n = chunk__46277.cljs$core$IIndexed$_nth$arity$2(null,i__46279);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46590 = seq__46276;
var G__46591 = chunk__46277;
var G__46592 = count__46278;
var G__46593 = (i__46279 + (1));
seq__46276 = G__46590;
chunk__46277 = G__46591;
count__46278 = G__46592;
i__46279 = G__46593;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46276);
if(temp__5804__auto__){
var seq__46276__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46276__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46276__$1);
var G__46594 = cljs.core.chunk_rest(seq__46276__$1);
var G__46595 = c__5568__auto__;
var G__46596 = cljs.core.count(c__5568__auto__);
var G__46597 = (0);
seq__46276 = G__46594;
chunk__46277 = G__46595;
count__46278 = G__46596;
i__46279 = G__46597;
continue;
} else {
var n = cljs.core.first(seq__46276__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46598 = cljs.core.next(seq__46276__$1);
var G__46599 = null;
var G__46600 = (0);
var G__46601 = (0);
seq__46276 = G__46598;
chunk__46277 = G__46599;
count__46278 = G__46600;
i__46279 = G__46601;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46281 = arguments.length;
switch (G__46281) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46283 = arguments.length;
switch (G__46283) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46285 = arguments.length;
switch (G__46285) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46608 = arguments.length;
var i__5770__auto___46609 = (0);
while(true){
if((i__5770__auto___46609 < len__5769__auto___46608)){
args__5775__auto__.push((arguments[i__5770__auto___46609]));

var G__46610 = (i__5770__auto___46609 + (1));
i__5770__auto___46609 = G__46610;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46287_46611 = cljs.core.seq(nodes);
var chunk__46288_46612 = null;
var count__46289_46613 = (0);
var i__46290_46614 = (0);
while(true){
if((i__46290_46614 < count__46289_46613)){
var node_46615 = chunk__46288_46612.cljs$core$IIndexed$_nth$arity$2(null,i__46290_46614);
fragment.appendChild(shadow.dom._to_dom(node_46615));


var G__46616 = seq__46287_46611;
var G__46617 = chunk__46288_46612;
var G__46618 = count__46289_46613;
var G__46619 = (i__46290_46614 + (1));
seq__46287_46611 = G__46616;
chunk__46288_46612 = G__46617;
count__46289_46613 = G__46618;
i__46290_46614 = G__46619;
continue;
} else {
var temp__5804__auto___46620 = cljs.core.seq(seq__46287_46611);
if(temp__5804__auto___46620){
var seq__46287_46621__$1 = temp__5804__auto___46620;
if(cljs.core.chunked_seq_QMARK_(seq__46287_46621__$1)){
var c__5568__auto___46622 = cljs.core.chunk_first(seq__46287_46621__$1);
var G__46623 = cljs.core.chunk_rest(seq__46287_46621__$1);
var G__46624 = c__5568__auto___46622;
var G__46625 = cljs.core.count(c__5568__auto___46622);
var G__46626 = (0);
seq__46287_46611 = G__46623;
chunk__46288_46612 = G__46624;
count__46289_46613 = G__46625;
i__46290_46614 = G__46626;
continue;
} else {
var node_46627 = cljs.core.first(seq__46287_46621__$1);
fragment.appendChild(shadow.dom._to_dom(node_46627));


var G__46628 = cljs.core.next(seq__46287_46621__$1);
var G__46629 = null;
var G__46630 = (0);
var G__46631 = (0);
seq__46287_46611 = G__46628;
chunk__46288_46612 = G__46629;
count__46289_46613 = G__46630;
i__46290_46614 = G__46631;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46286){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46286));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46291_46632 = cljs.core.seq(scripts);
var chunk__46292_46633 = null;
var count__46293_46634 = (0);
var i__46294_46635 = (0);
while(true){
if((i__46294_46635 < count__46293_46634)){
var vec__46301_46636 = chunk__46292_46633.cljs$core$IIndexed$_nth$arity$2(null,i__46294_46635);
var script_tag_46637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46301_46636,(0),null);
var script_body_46638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46301_46636,(1),null);
eval(script_body_46638);


var G__46639 = seq__46291_46632;
var G__46640 = chunk__46292_46633;
var G__46641 = count__46293_46634;
var G__46642 = (i__46294_46635 + (1));
seq__46291_46632 = G__46639;
chunk__46292_46633 = G__46640;
count__46293_46634 = G__46641;
i__46294_46635 = G__46642;
continue;
} else {
var temp__5804__auto___46643 = cljs.core.seq(seq__46291_46632);
if(temp__5804__auto___46643){
var seq__46291_46644__$1 = temp__5804__auto___46643;
if(cljs.core.chunked_seq_QMARK_(seq__46291_46644__$1)){
var c__5568__auto___46645 = cljs.core.chunk_first(seq__46291_46644__$1);
var G__46646 = cljs.core.chunk_rest(seq__46291_46644__$1);
var G__46647 = c__5568__auto___46645;
var G__46648 = cljs.core.count(c__5568__auto___46645);
var G__46649 = (0);
seq__46291_46632 = G__46646;
chunk__46292_46633 = G__46647;
count__46293_46634 = G__46648;
i__46294_46635 = G__46649;
continue;
} else {
var vec__46304_46650 = cljs.core.first(seq__46291_46644__$1);
var script_tag_46651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46304_46650,(0),null);
var script_body_46652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46304_46650,(1),null);
eval(script_body_46652);


var G__46653 = cljs.core.next(seq__46291_46644__$1);
var G__46654 = null;
var G__46655 = (0);
var G__46656 = (0);
seq__46291_46632 = G__46653;
chunk__46292_46633 = G__46654;
count__46293_46634 = G__46655;
i__46294_46635 = G__46656;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46307){
var vec__46308 = p__46307;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46308,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46308,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46312 = arguments.length;
switch (G__46312) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46313 = cljs.core.seq(style_keys);
var chunk__46314 = null;
var count__46315 = (0);
var i__46316 = (0);
while(true){
if((i__46316 < count__46315)){
var it = chunk__46314.cljs$core$IIndexed$_nth$arity$2(null,i__46316);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46662 = seq__46313;
var G__46663 = chunk__46314;
var G__46664 = count__46315;
var G__46665 = (i__46316 + (1));
seq__46313 = G__46662;
chunk__46314 = G__46663;
count__46315 = G__46664;
i__46316 = G__46665;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46313);
if(temp__5804__auto__){
var seq__46313__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46313__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46313__$1);
var G__46666 = cljs.core.chunk_rest(seq__46313__$1);
var G__46667 = c__5568__auto__;
var G__46668 = cljs.core.count(c__5568__auto__);
var G__46669 = (0);
seq__46313 = G__46666;
chunk__46314 = G__46667;
count__46315 = G__46668;
i__46316 = G__46669;
continue;
} else {
var it = cljs.core.first(seq__46313__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46677 = cljs.core.next(seq__46313__$1);
var G__46678 = null;
var G__46679 = (0);
var G__46680 = (0);
seq__46313 = G__46677;
chunk__46314 = G__46678;
count__46315 = G__46679;
i__46316 = G__46680;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46318,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46322 = k46318;
var G__46322__$1 = (((G__46322 instanceof cljs.core.Keyword))?G__46322.fqn:null);
switch (G__46322__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46318,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46323){
var vec__46324 = p__46323;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46324,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46324,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46317){
var self__ = this;
var G__46317__$1 = this;
return (new cljs.core.RecordIter((0),G__46317__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46319,other46320){
var self__ = this;
var this46319__$1 = this;
return (((!((other46320 == null)))) && ((((this46319__$1.constructor === other46320.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46319__$1.x,other46320.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46319__$1.y,other46320.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46319__$1.__extmap,other46320.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46318){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46327 = k46318;
var G__46327__$1 = (((G__46327 instanceof cljs.core.Keyword))?G__46327.fqn:null);
switch (G__46327__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46318);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46317){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46328 = cljs.core.keyword_identical_QMARK_;
var expr__46329 = k__5352__auto__;
if(cljs.core.truth_((pred__46328.cljs$core$IFn$_invoke$arity$2 ? pred__46328.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46329) : pred__46328.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46329)))){
return (new shadow.dom.Coordinate(G__46317,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46328.cljs$core$IFn$_invoke$arity$2 ? pred__46328.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46329) : pred__46328.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46329)))){
return (new shadow.dom.Coordinate(self__.x,G__46317,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46317),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46317){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46317,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46321){
var extmap__5385__auto__ = (function (){var G__46331 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46321,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46321)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46331);
} else {
return G__46331;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46321),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46321),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k46333,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__46337 = k46333;
var G__46337__$1 = (((G__46337 instanceof cljs.core.Keyword))?G__46337.fqn:null);
switch (G__46337__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46333,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__46338){
var vec__46339 = p__46338;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46339,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46339,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46332){
var self__ = this;
var G__46332__$1 = this;
return (new cljs.core.RecordIter((0),G__46332__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46334,other46335){
var self__ = this;
var this46334__$1 = this;
return (((!((other46335 == null)))) && ((((this46334__$1.constructor === other46335.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46334__$1.w,other46335.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46334__$1.h,other46335.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46334__$1.__extmap,other46335.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k46333){
var self__ = this;
var this__5350__auto____$1 = this;
var G__46342 = k46333;
var G__46342__$1 = (((G__46342 instanceof cljs.core.Keyword))?G__46342.fqn:null);
switch (G__46342__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46333);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__46332){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__46343 = cljs.core.keyword_identical_QMARK_;
var expr__46344 = k__5352__auto__;
if(cljs.core.truth_((pred__46343.cljs$core$IFn$_invoke$arity$2 ? pred__46343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46344) : pred__46343.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46344)))){
return (new shadow.dom.Size(G__46332,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46343.cljs$core$IFn$_invoke$arity$2 ? pred__46343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46344) : pred__46343.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46344)))){
return (new shadow.dom.Size(self__.w,G__46332,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__46332),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__46332){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46332,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46336){
var extmap__5385__auto__ = (function (){var G__46346 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46336,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46336)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46346);
} else {
return G__46346;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46336),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46336),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__46714 = (i + (1));
var G__46715 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46714;
ret = G__46715;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46351){
var vec__46352 = p__46351;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46352,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46356 = arguments.length;
switch (G__46356) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46717 = ps;
var G__46718 = (i + (1));
el__$1 = G__46717;
i = G__46718;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46357 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46357,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46357,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46357,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46360_46720 = cljs.core.seq(props);
var chunk__46361_46721 = null;
var count__46362_46722 = (0);
var i__46363_46723 = (0);
while(true){
if((i__46363_46723 < count__46362_46722)){
var vec__46370_46724 = chunk__46361_46721.cljs$core$IIndexed$_nth$arity$2(null,i__46363_46723);
var k_46725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46370_46724,(0),null);
var v_46726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46370_46724,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_46725);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46725),v_46726);


var G__46730 = seq__46360_46720;
var G__46731 = chunk__46361_46721;
var G__46732 = count__46362_46722;
var G__46733 = (i__46363_46723 + (1));
seq__46360_46720 = G__46730;
chunk__46361_46721 = G__46731;
count__46362_46722 = G__46732;
i__46363_46723 = G__46733;
continue;
} else {
var temp__5804__auto___46734 = cljs.core.seq(seq__46360_46720);
if(temp__5804__auto___46734){
var seq__46360_46735__$1 = temp__5804__auto___46734;
if(cljs.core.chunked_seq_QMARK_(seq__46360_46735__$1)){
var c__5568__auto___46736 = cljs.core.chunk_first(seq__46360_46735__$1);
var G__46737 = cljs.core.chunk_rest(seq__46360_46735__$1);
var G__46738 = c__5568__auto___46736;
var G__46739 = cljs.core.count(c__5568__auto___46736);
var G__46740 = (0);
seq__46360_46720 = G__46737;
chunk__46361_46721 = G__46738;
count__46362_46722 = G__46739;
i__46363_46723 = G__46740;
continue;
} else {
var vec__46373_46741 = cljs.core.first(seq__46360_46735__$1);
var k_46742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46373_46741,(0),null);
var v_46743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46373_46741,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_46742);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46742),v_46743);


var G__46744 = cljs.core.next(seq__46360_46735__$1);
var G__46745 = null;
var G__46746 = (0);
var G__46747 = (0);
seq__46360_46720 = G__46744;
chunk__46361_46721 = G__46745;
count__46362_46722 = G__46746;
i__46363_46723 = G__46747;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46377 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46377,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46377,(1),null);
var seq__46380_46748 = cljs.core.seq(node_children);
var chunk__46382_46749 = null;
var count__46383_46750 = (0);
var i__46384_46751 = (0);
while(true){
if((i__46384_46751 < count__46383_46750)){
var child_struct_46752 = chunk__46382_46749.cljs$core$IIndexed$_nth$arity$2(null,i__46384_46751);
if((!((child_struct_46752 == null)))){
if(typeof child_struct_46752 === 'string'){
var text_46753 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46753),child_struct_46752].join(''));
} else {
var children_46754 = shadow.dom.svg_node(child_struct_46752);
if(cljs.core.seq_QMARK_(children_46754)){
var seq__46398_46755 = cljs.core.seq(children_46754);
var chunk__46400_46756 = null;
var count__46401_46757 = (0);
var i__46402_46758 = (0);
while(true){
if((i__46402_46758 < count__46401_46757)){
var child_46759 = chunk__46400_46756.cljs$core$IIndexed$_nth$arity$2(null,i__46402_46758);
if(cljs.core.truth_(child_46759)){
node.appendChild(child_46759);


var G__46760 = seq__46398_46755;
var G__46761 = chunk__46400_46756;
var G__46762 = count__46401_46757;
var G__46763 = (i__46402_46758 + (1));
seq__46398_46755 = G__46760;
chunk__46400_46756 = G__46761;
count__46401_46757 = G__46762;
i__46402_46758 = G__46763;
continue;
} else {
var G__46764 = seq__46398_46755;
var G__46765 = chunk__46400_46756;
var G__46766 = count__46401_46757;
var G__46767 = (i__46402_46758 + (1));
seq__46398_46755 = G__46764;
chunk__46400_46756 = G__46765;
count__46401_46757 = G__46766;
i__46402_46758 = G__46767;
continue;
}
} else {
var temp__5804__auto___46768 = cljs.core.seq(seq__46398_46755);
if(temp__5804__auto___46768){
var seq__46398_46769__$1 = temp__5804__auto___46768;
if(cljs.core.chunked_seq_QMARK_(seq__46398_46769__$1)){
var c__5568__auto___46770 = cljs.core.chunk_first(seq__46398_46769__$1);
var G__46771 = cljs.core.chunk_rest(seq__46398_46769__$1);
var G__46772 = c__5568__auto___46770;
var G__46773 = cljs.core.count(c__5568__auto___46770);
var G__46774 = (0);
seq__46398_46755 = G__46771;
chunk__46400_46756 = G__46772;
count__46401_46757 = G__46773;
i__46402_46758 = G__46774;
continue;
} else {
var child_46775 = cljs.core.first(seq__46398_46769__$1);
if(cljs.core.truth_(child_46775)){
node.appendChild(child_46775);


var G__46777 = cljs.core.next(seq__46398_46769__$1);
var G__46778 = null;
var G__46779 = (0);
var G__46780 = (0);
seq__46398_46755 = G__46777;
chunk__46400_46756 = G__46778;
count__46401_46757 = G__46779;
i__46402_46758 = G__46780;
continue;
} else {
var G__46781 = cljs.core.next(seq__46398_46769__$1);
var G__46782 = null;
var G__46783 = (0);
var G__46784 = (0);
seq__46398_46755 = G__46781;
chunk__46400_46756 = G__46782;
count__46401_46757 = G__46783;
i__46402_46758 = G__46784;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46754);
}
}


var G__46785 = seq__46380_46748;
var G__46786 = chunk__46382_46749;
var G__46787 = count__46383_46750;
var G__46788 = (i__46384_46751 + (1));
seq__46380_46748 = G__46785;
chunk__46382_46749 = G__46786;
count__46383_46750 = G__46787;
i__46384_46751 = G__46788;
continue;
} else {
var G__46789 = seq__46380_46748;
var G__46790 = chunk__46382_46749;
var G__46791 = count__46383_46750;
var G__46792 = (i__46384_46751 + (1));
seq__46380_46748 = G__46789;
chunk__46382_46749 = G__46790;
count__46383_46750 = G__46791;
i__46384_46751 = G__46792;
continue;
}
} else {
var temp__5804__auto___46793 = cljs.core.seq(seq__46380_46748);
if(temp__5804__auto___46793){
var seq__46380_46794__$1 = temp__5804__auto___46793;
if(cljs.core.chunked_seq_QMARK_(seq__46380_46794__$1)){
var c__5568__auto___46795 = cljs.core.chunk_first(seq__46380_46794__$1);
var G__46796 = cljs.core.chunk_rest(seq__46380_46794__$1);
var G__46797 = c__5568__auto___46795;
var G__46798 = cljs.core.count(c__5568__auto___46795);
var G__46799 = (0);
seq__46380_46748 = G__46796;
chunk__46382_46749 = G__46797;
count__46383_46750 = G__46798;
i__46384_46751 = G__46799;
continue;
} else {
var child_struct_46800 = cljs.core.first(seq__46380_46794__$1);
if((!((child_struct_46800 == null)))){
if(typeof child_struct_46800 === 'string'){
var text_46801 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46801),child_struct_46800].join(''));
} else {
var children_46802 = shadow.dom.svg_node(child_struct_46800);
if(cljs.core.seq_QMARK_(children_46802)){
var seq__46404_46803 = cljs.core.seq(children_46802);
var chunk__46406_46804 = null;
var count__46407_46805 = (0);
var i__46408_46806 = (0);
while(true){
if((i__46408_46806 < count__46407_46805)){
var child_46807 = chunk__46406_46804.cljs$core$IIndexed$_nth$arity$2(null,i__46408_46806);
if(cljs.core.truth_(child_46807)){
node.appendChild(child_46807);


var G__46809 = seq__46404_46803;
var G__46810 = chunk__46406_46804;
var G__46811 = count__46407_46805;
var G__46812 = (i__46408_46806 + (1));
seq__46404_46803 = G__46809;
chunk__46406_46804 = G__46810;
count__46407_46805 = G__46811;
i__46408_46806 = G__46812;
continue;
} else {
var G__46813 = seq__46404_46803;
var G__46814 = chunk__46406_46804;
var G__46815 = count__46407_46805;
var G__46816 = (i__46408_46806 + (1));
seq__46404_46803 = G__46813;
chunk__46406_46804 = G__46814;
count__46407_46805 = G__46815;
i__46408_46806 = G__46816;
continue;
}
} else {
var temp__5804__auto___46817__$1 = cljs.core.seq(seq__46404_46803);
if(temp__5804__auto___46817__$1){
var seq__46404_46818__$1 = temp__5804__auto___46817__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46404_46818__$1)){
var c__5568__auto___46819 = cljs.core.chunk_first(seq__46404_46818__$1);
var G__46820 = cljs.core.chunk_rest(seq__46404_46818__$1);
var G__46821 = c__5568__auto___46819;
var G__46822 = cljs.core.count(c__5568__auto___46819);
var G__46823 = (0);
seq__46404_46803 = G__46820;
chunk__46406_46804 = G__46821;
count__46407_46805 = G__46822;
i__46408_46806 = G__46823;
continue;
} else {
var child_46824 = cljs.core.first(seq__46404_46818__$1);
if(cljs.core.truth_(child_46824)){
node.appendChild(child_46824);


var G__46825 = cljs.core.next(seq__46404_46818__$1);
var G__46826 = null;
var G__46827 = (0);
var G__46828 = (0);
seq__46404_46803 = G__46825;
chunk__46406_46804 = G__46826;
count__46407_46805 = G__46827;
i__46408_46806 = G__46828;
continue;
} else {
var G__46829 = cljs.core.next(seq__46404_46818__$1);
var G__46830 = null;
var G__46831 = (0);
var G__46832 = (0);
seq__46404_46803 = G__46829;
chunk__46406_46804 = G__46830;
count__46407_46805 = G__46831;
i__46408_46806 = G__46832;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46802);
}
}


var G__46833 = cljs.core.next(seq__46380_46794__$1);
var G__46834 = null;
var G__46835 = (0);
var G__46836 = (0);
seq__46380_46748 = G__46833;
chunk__46382_46749 = G__46834;
count__46383_46750 = G__46835;
i__46384_46751 = G__46836;
continue;
} else {
var G__46837 = cljs.core.next(seq__46380_46794__$1);
var G__46838 = null;
var G__46839 = (0);
var G__46840 = (0);
seq__46380_46748 = G__46837;
chunk__46382_46749 = G__46838;
count__46383_46750 = G__46839;
i__46384_46751 = G__46840;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46841 = arguments.length;
var i__5770__auto___46842 = (0);
while(true){
if((i__5770__auto___46842 < len__5769__auto___46841)){
args__5775__auto__.push((arguments[i__5770__auto___46842]));

var G__46855 = (i__5770__auto___46842 + (1));
i__5770__auto___46842 = G__46855;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46410){
var G__46411 = cljs.core.first(seq46410);
var seq46410__$1 = cljs.core.next(seq46410);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46411,seq46410__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46413 = arguments.length;
switch (G__46413) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__42152__auto___46857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_46418){
var state_val_46419 = (state_46418[(1)]);
if((state_val_46419 === (1))){
var state_46418__$1 = state_46418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46418__$1,(2),once_or_cleanup);
} else {
if((state_val_46419 === (2))){
var inst_46415 = (state_46418[(2)]);
var inst_46416 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46418__$1 = (function (){var statearr_46420 = state_46418;
(statearr_46420[(7)] = inst_46415);

return statearr_46420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46418__$1,inst_46416);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42121__auto__ = null;
var shadow$dom$state_machine__42121__auto____0 = (function (){
var statearr_46421 = [null,null,null,null,null,null,null,null];
(statearr_46421[(0)] = shadow$dom$state_machine__42121__auto__);

(statearr_46421[(1)] = (1));

return statearr_46421;
});
var shadow$dom$state_machine__42121__auto____1 = (function (state_46418){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_46418);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e46422){var ex__42124__auto__ = e46422;
var statearr_46423_46858 = state_46418;
(statearr_46423_46858[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_46418[(4)]))){
var statearr_46424_46859 = state_46418;
(statearr_46424_46859[(1)] = cljs.core.first((state_46418[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46861 = state_46418;
state_46418 = G__46861;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
shadow$dom$state_machine__42121__auto__ = function(state_46418){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42121__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42121__auto____1.call(this,state_46418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42121__auto____0;
shadow$dom$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42121__auto____1;
return shadow$dom$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_46425 = f__42153__auto__();
(statearr_46425[(6)] = c__42152__auto___46857);

return statearr_46425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
