goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42214 = arguments.length;
switch (G__42214) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42215 = (function (f,blockable,meta42216){
this.f = f;
this.blockable = blockable;
this.meta42216 = meta42216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42217,meta42216__$1){
var self__ = this;
var _42217__$1 = this;
return (new cljs.core.async.t_cljs$core$async42215(self__.f,self__.blockable,meta42216__$1));
}));

(cljs.core.async.t_cljs$core$async42215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42217){
var self__ = this;
var _42217__$1 = this;
return self__.meta42216;
}));

(cljs.core.async.t_cljs$core$async42215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42216","meta42216",919003281,null)], null);
}));

(cljs.core.async.t_cljs$core$async42215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42215");

(cljs.core.async.t_cljs$core$async42215.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42215.
 */
cljs.core.async.__GT_t_cljs$core$async42215 = (function cljs$core$async$__GT_t_cljs$core$async42215(f__$1,blockable__$1,meta42216){
return (new cljs.core.async.t_cljs$core$async42215(f__$1,blockable__$1,meta42216));
});

}

return (new cljs.core.async.t_cljs$core$async42215(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42220 = arguments.length;
switch (G__42220) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42222 = arguments.length;
switch (G__42222) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42224 = arguments.length;
switch (G__42224) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_43890 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43890) : fn1.call(null,val_43890));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43890) : fn1.call(null,val_43890));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42226 = arguments.length;
switch (G__42226) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___43892 = n;
var x_43893 = (0);
while(true){
if((x_43893 < n__5636__auto___43892)){
(a[x_43893] = x_43893);

var G__43894 = (x_43893 + (1));
x_43893 = G__43894;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42227 = (function (flag,meta42228){
this.flag = flag;
this.meta42228 = meta42228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42229,meta42228__$1){
var self__ = this;
var _42229__$1 = this;
return (new cljs.core.async.t_cljs$core$async42227(self__.flag,meta42228__$1));
}));

(cljs.core.async.t_cljs$core$async42227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42229){
var self__ = this;
var _42229__$1 = this;
return self__.meta42228;
}));

(cljs.core.async.t_cljs$core$async42227.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42228","meta42228",1447353495,null)], null);
}));

(cljs.core.async.t_cljs$core$async42227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42227");

(cljs.core.async.t_cljs$core$async42227.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42227.
 */
cljs.core.async.__GT_t_cljs$core$async42227 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42227(flag__$1,meta42228){
return (new cljs.core.async.t_cljs$core$async42227(flag__$1,meta42228));
});

}

return (new cljs.core.async.t_cljs$core$async42227(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42230 = (function (flag,cb,meta42231){
this.flag = flag;
this.cb = cb;
this.meta42231 = meta42231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42232,meta42231__$1){
var self__ = this;
var _42232__$1 = this;
return (new cljs.core.async.t_cljs$core$async42230(self__.flag,self__.cb,meta42231__$1));
}));

(cljs.core.async.t_cljs$core$async42230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42232){
var self__ = this;
var _42232__$1 = this;
return self__.meta42231;
}));

(cljs.core.async.t_cljs$core$async42230.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42230.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42231","meta42231",-841957827,null)], null);
}));

(cljs.core.async.t_cljs$core$async42230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42230");

(cljs.core.async.t_cljs$core$async42230.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42230.
 */
cljs.core.async.__GT_t_cljs$core$async42230 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42230(flag__$1,cb__$1,meta42231){
return (new cljs.core.async.t_cljs$core$async42230(flag__$1,cb__$1,meta42231));
});

}

return (new cljs.core.async.t_cljs$core$async42230(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__42233_SHARP_){
var G__42235 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42233_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42235) : fret.call(null,G__42235));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__42234_SHARP_){
var G__42236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42234_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42236) : fret.call(null,G__42236));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43895 = (i + (1));
i = G__43895;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43896 = arguments.length;
var i__5770__auto___43897 = (0);
while(true){
if((i__5770__auto___43897 < len__5769__auto___43896)){
args__5775__auto__.push((arguments[i__5770__auto___43897]));

var G__43898 = (i__5770__auto___43897 + (1));
i__5770__auto___43897 = G__43898;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42239){
var map__42240 = p__42239;
var map__42240__$1 = cljs.core.__destructure_map(map__42240);
var opts = map__42240__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42237){
var G__42238 = cljs.core.first(seq42237);
var seq42237__$1 = cljs.core.next(seq42237);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42238,seq42237__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42242 = arguments.length;
switch (G__42242) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42152__auto___43900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_42266){
var state_val_42267 = (state_42266[(1)]);
if((state_val_42267 === (7))){
var inst_42262 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
var statearr_42268_43901 = state_42266__$1;
(statearr_42268_43901[(2)] = inst_42262);

(statearr_42268_43901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (1))){
var state_42266__$1 = state_42266;
var statearr_42269_43902 = state_42266__$1;
(statearr_42269_43902[(2)] = null);

(statearr_42269_43902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (4))){
var inst_42245 = (state_42266[(7)]);
var inst_42245__$1 = (state_42266[(2)]);
var inst_42246 = (inst_42245__$1 == null);
var state_42266__$1 = (function (){var statearr_42270 = state_42266;
(statearr_42270[(7)] = inst_42245__$1);

return statearr_42270;
})();
if(cljs.core.truth_(inst_42246)){
var statearr_42271_43903 = state_42266__$1;
(statearr_42271_43903[(1)] = (5));

} else {
var statearr_42272_43904 = state_42266__$1;
(statearr_42272_43904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (13))){
var state_42266__$1 = state_42266;
var statearr_42273_43905 = state_42266__$1;
(statearr_42273_43905[(2)] = null);

(statearr_42273_43905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (6))){
var inst_42245 = (state_42266[(7)]);
var state_42266__$1 = state_42266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42266__$1,(11),to,inst_42245);
} else {
if((state_val_42267 === (3))){
var inst_42264 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42266__$1,inst_42264);
} else {
if((state_val_42267 === (12))){
var state_42266__$1 = state_42266;
var statearr_42275_43906 = state_42266__$1;
(statearr_42275_43906[(2)] = null);

(statearr_42275_43906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (2))){
var state_42266__$1 = state_42266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42266__$1,(4),from);
} else {
if((state_val_42267 === (11))){
var inst_42255 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
if(cljs.core.truth_(inst_42255)){
var statearr_42276_43907 = state_42266__$1;
(statearr_42276_43907[(1)] = (12));

} else {
var statearr_42277_43908 = state_42266__$1;
(statearr_42277_43908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (9))){
var state_42266__$1 = state_42266;
var statearr_42278_43909 = state_42266__$1;
(statearr_42278_43909[(2)] = null);

(statearr_42278_43909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (5))){
var state_42266__$1 = state_42266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42279_43910 = state_42266__$1;
(statearr_42279_43910[(1)] = (8));

} else {
var statearr_42280_43911 = state_42266__$1;
(statearr_42280_43911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (14))){
var inst_42260 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
var statearr_42281_43912 = state_42266__$1;
(statearr_42281_43912[(2)] = inst_42260);

(statearr_42281_43912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (10))){
var inst_42252 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
var statearr_42282_43913 = state_42266__$1;
(statearr_42282_43913[(2)] = inst_42252);

(statearr_42282_43913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (8))){
var inst_42249 = cljs.core.async.close_BANG_(to);
var state_42266__$1 = state_42266;
var statearr_42283_43914 = state_42266__$1;
(statearr_42283_43914[(2)] = inst_42249);

(statearr_42283_43914[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_42284 = [null,null,null,null,null,null,null,null];
(statearr_42284[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_42284[(1)] = (1));

return statearr_42284;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_42266){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42266);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42285){var ex__42124__auto__ = e42285;
var statearr_42286_43915 = state_42266;
(statearr_42286_43915[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42266[(4)]))){
var statearr_42287_43916 = state_42266;
(statearr_42287_43916[(1)] = cljs.core.first((state_42266[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43917 = state_42266;
state_42266 = G__43917;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_42266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_42266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_42288 = f__42153__auto__();
(statearr_42288[(6)] = c__42152__auto___43900);

return statearr_42288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__42289){
var vec__42290 = p__42289;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42290,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42290,(1),null);
var job = vec__42290;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42152__auto___43918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_42297){
var state_val_42298 = (state_42297[(1)]);
if((state_val_42298 === (1))){
var state_42297__$1 = state_42297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42297__$1,(2),res,v);
} else {
if((state_val_42298 === (2))){
var inst_42294 = (state_42297[(2)]);
var inst_42295 = cljs.core.async.close_BANG_(res);
var state_42297__$1 = (function (){var statearr_42299 = state_42297;
(statearr_42299[(7)] = inst_42294);

return statearr_42299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42297__$1,inst_42295);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0 = (function (){
var statearr_42300 = [null,null,null,null,null,null,null,null];
(statearr_42300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__);

(statearr_42300[(1)] = (1));

return statearr_42300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1 = (function (state_42297){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42297);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42301){var ex__42124__auto__ = e42301;
var statearr_42302_43919 = state_42297;
(statearr_42302_43919[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42297[(4)]))){
var statearr_42303_43920 = state_42297;
(statearr_42303_43920[(1)] = cljs.core.first((state_42297[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43921 = state_42297;
state_42297 = G__43921;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = function(state_42297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1.call(this,state_42297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_42304 = f__42153__auto__();
(statearr_42304[(6)] = c__42152__auto___43918);

return statearr_42304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42305){
var vec__42306 = p__42305;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42306,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42306,(1),null);
var job = vec__42306;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___43922 = n;
var __43923 = (0);
while(true){
if((__43923 < n__5636__auto___43922)){
var G__42309_43924 = type;
var G__42309_43925__$1 = (((G__42309_43924 instanceof cljs.core.Keyword))?G__42309_43924.fqn:null);
switch (G__42309_43925__$1) {
case "compute":
var c__42152__auto___43927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43923,c__42152__auto___43927,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async){
return (function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = ((function (__43923,c__42152__auto___43927,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async){
return (function (state_42322){
var state_val_42323 = (state_42322[(1)]);
if((state_val_42323 === (1))){
var state_42322__$1 = state_42322;
var statearr_42324_43928 = state_42322__$1;
(statearr_42324_43928[(2)] = null);

(statearr_42324_43928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (2))){
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42322__$1,(4),jobs);
} else {
if((state_val_42323 === (3))){
var inst_42320 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42322__$1,inst_42320);
} else {
if((state_val_42323 === (4))){
var inst_42312 = (state_42322[(2)]);
var inst_42313 = process__$1(inst_42312);
var state_42322__$1 = state_42322;
if(cljs.core.truth_(inst_42313)){
var statearr_42325_43929 = state_42322__$1;
(statearr_42325_43929[(1)] = (5));

} else {
var statearr_42326_43930 = state_42322__$1;
(statearr_42326_43930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (5))){
var state_42322__$1 = state_42322;
var statearr_42327_43931 = state_42322__$1;
(statearr_42327_43931[(2)] = null);

(statearr_42327_43931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (6))){
var state_42322__$1 = state_42322;
var statearr_42328_43932 = state_42322__$1;
(statearr_42328_43932[(2)] = null);

(statearr_42328_43932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42323 === (7))){
var inst_42318 = (state_42322[(2)]);
var state_42322__$1 = state_42322;
var statearr_42329_43933 = state_42322__$1;
(statearr_42329_43933[(2)] = inst_42318);

(statearr_42329_43933[(1)] = (3));


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
});})(__43923,c__42152__auto___43927,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async))
;
return ((function (__43923,switch__42120__auto__,c__42152__auto___43927,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0 = (function (){
var statearr_42330 = [null,null,null,null,null,null,null];
(statearr_42330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__);

(statearr_42330[(1)] = (1));

return statearr_42330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1 = (function (state_42322){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42322);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42331){var ex__42124__auto__ = e42331;
var statearr_42332_43934 = state_42322;
(statearr_42332_43934[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42322[(4)]))){
var statearr_42333_43935 = state_42322;
(statearr_42333_43935[(1)] = cljs.core.first((state_42322[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43936 = state_42322;
state_42322 = G__43936;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = function(state_42322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1.call(this,state_42322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__;
})()
;})(__43923,switch__42120__auto__,c__42152__auto___43927,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async))
})();
var state__42154__auto__ = (function (){var statearr_42334 = f__42153__auto__();
(statearr_42334[(6)] = c__42152__auto___43927);

return statearr_42334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
});})(__43923,c__42152__auto___43927,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async))
);


break;
case "async":
var c__42152__auto___43937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43923,c__42152__auto___43937,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async){
return (function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = ((function (__43923,c__42152__auto___43937,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async){
return (function (state_42347){
var state_val_42348 = (state_42347[(1)]);
if((state_val_42348 === (1))){
var state_42347__$1 = state_42347;
var statearr_42349_43938 = state_42347__$1;
(statearr_42349_43938[(2)] = null);

(statearr_42349_43938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42348 === (2))){
var state_42347__$1 = state_42347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42347__$1,(4),jobs);
} else {
if((state_val_42348 === (3))){
var inst_42345 = (state_42347[(2)]);
var state_42347__$1 = state_42347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42347__$1,inst_42345);
} else {
if((state_val_42348 === (4))){
var inst_42337 = (state_42347[(2)]);
var inst_42338 = async(inst_42337);
var state_42347__$1 = state_42347;
if(cljs.core.truth_(inst_42338)){
var statearr_42350_43939 = state_42347__$1;
(statearr_42350_43939[(1)] = (5));

} else {
var statearr_42351_43940 = state_42347__$1;
(statearr_42351_43940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42348 === (5))){
var state_42347__$1 = state_42347;
var statearr_42352_43941 = state_42347__$1;
(statearr_42352_43941[(2)] = null);

(statearr_42352_43941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42348 === (6))){
var state_42347__$1 = state_42347;
var statearr_42353_43942 = state_42347__$1;
(statearr_42353_43942[(2)] = null);

(statearr_42353_43942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42348 === (7))){
var inst_42343 = (state_42347[(2)]);
var state_42347__$1 = state_42347;
var statearr_42354_43943 = state_42347__$1;
(statearr_42354_43943[(2)] = inst_42343);

(statearr_42354_43943[(1)] = (3));


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
});})(__43923,c__42152__auto___43937,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async))
;
return ((function (__43923,switch__42120__auto__,c__42152__auto___43937,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0 = (function (){
var statearr_42355 = [null,null,null,null,null,null,null];
(statearr_42355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__);

(statearr_42355[(1)] = (1));

return statearr_42355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1 = (function (state_42347){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42347);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42356){var ex__42124__auto__ = e42356;
var statearr_42357_43944 = state_42347;
(statearr_42357_43944[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42347[(4)]))){
var statearr_42358_43945 = state_42347;
(statearr_42358_43945[(1)] = cljs.core.first((state_42347[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43946 = state_42347;
state_42347 = G__43946;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = function(state_42347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1.call(this,state_42347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__;
})()
;})(__43923,switch__42120__auto__,c__42152__auto___43937,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async))
})();
var state__42154__auto__ = (function (){var statearr_42359 = f__42153__auto__();
(statearr_42359[(6)] = c__42152__auto___43937);

return statearr_42359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
});})(__43923,c__42152__auto___43937,G__42309_43924,G__42309_43925__$1,n__5636__auto___43922,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42309_43925__$1)].join('')));

}

var G__43947 = (__43923 + (1));
__43923 = G__43947;
continue;
} else {
}
break;
}

var c__42152__auto___43948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_42381){
var state_val_42382 = (state_42381[(1)]);
if((state_val_42382 === (7))){
var inst_42377 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42383_43949 = state_42381__$1;
(statearr_42383_43949[(2)] = inst_42377);

(statearr_42383_43949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (1))){
var state_42381__$1 = state_42381;
var statearr_42384_43950 = state_42381__$1;
(statearr_42384_43950[(2)] = null);

(statearr_42384_43950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (4))){
var inst_42362 = (state_42381[(7)]);
var inst_42362__$1 = (state_42381[(2)]);
var inst_42363 = (inst_42362__$1 == null);
var state_42381__$1 = (function (){var statearr_42385 = state_42381;
(statearr_42385[(7)] = inst_42362__$1);

return statearr_42385;
})();
if(cljs.core.truth_(inst_42363)){
var statearr_42386_43951 = state_42381__$1;
(statearr_42386_43951[(1)] = (5));

} else {
var statearr_42387_43952 = state_42381__$1;
(statearr_42387_43952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (6))){
var inst_42362 = (state_42381[(7)]);
var inst_42367 = (state_42381[(8)]);
var inst_42367__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42369 = [inst_42362,inst_42367__$1];
var inst_42370 = (new cljs.core.PersistentVector(null,2,(5),inst_42368,inst_42369,null));
var state_42381__$1 = (function (){var statearr_42388 = state_42381;
(statearr_42388[(8)] = inst_42367__$1);

return statearr_42388;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42381__$1,(8),jobs,inst_42370);
} else {
if((state_val_42382 === (3))){
var inst_42379 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42381__$1,inst_42379);
} else {
if((state_val_42382 === (2))){
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42381__$1,(4),from);
} else {
if((state_val_42382 === (9))){
var inst_42374 = (state_42381[(2)]);
var state_42381__$1 = (function (){var statearr_42389 = state_42381;
(statearr_42389[(9)] = inst_42374);

return statearr_42389;
})();
var statearr_42390_43953 = state_42381__$1;
(statearr_42390_43953[(2)] = null);

(statearr_42390_43953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (5))){
var inst_42365 = cljs.core.async.close_BANG_(jobs);
var state_42381__$1 = state_42381;
var statearr_42391_43954 = state_42381__$1;
(statearr_42391_43954[(2)] = inst_42365);

(statearr_42391_43954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (8))){
var inst_42367 = (state_42381[(8)]);
var inst_42372 = (state_42381[(2)]);
var state_42381__$1 = (function (){var statearr_42392 = state_42381;
(statearr_42392[(10)] = inst_42372);

return statearr_42392;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42381__$1,(9),results,inst_42367);
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
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0 = (function (){
var statearr_42393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__);

(statearr_42393[(1)] = (1));

return statearr_42393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1 = (function (state_42381){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42381);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42394){var ex__42124__auto__ = e42394;
var statearr_42395_43955 = state_42381;
(statearr_42395_43955[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42381[(4)]))){
var statearr_42396_43956 = state_42381;
(statearr_42396_43956[(1)] = cljs.core.first((state_42381[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43957 = state_42381;
state_42381 = G__43957;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = function(state_42381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1.call(this,state_42381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_42397 = f__42153__auto__();
(statearr_42397[(6)] = c__42152__auto___43948);

return statearr_42397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_42435){
var state_val_42436 = (state_42435[(1)]);
if((state_val_42436 === (7))){
var inst_42431 = (state_42435[(2)]);
var state_42435__$1 = state_42435;
var statearr_42437_43958 = state_42435__$1;
(statearr_42437_43958[(2)] = inst_42431);

(statearr_42437_43958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (20))){
var state_42435__$1 = state_42435;
var statearr_42438_43959 = state_42435__$1;
(statearr_42438_43959[(2)] = null);

(statearr_42438_43959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (1))){
var state_42435__$1 = state_42435;
var statearr_42439_43960 = state_42435__$1;
(statearr_42439_43960[(2)] = null);

(statearr_42439_43960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (4))){
var inst_42400 = (state_42435[(7)]);
var inst_42400__$1 = (state_42435[(2)]);
var inst_42401 = (inst_42400__$1 == null);
var state_42435__$1 = (function (){var statearr_42440 = state_42435;
(statearr_42440[(7)] = inst_42400__$1);

return statearr_42440;
})();
if(cljs.core.truth_(inst_42401)){
var statearr_42441_43961 = state_42435__$1;
(statearr_42441_43961[(1)] = (5));

} else {
var statearr_42442_43962 = state_42435__$1;
(statearr_42442_43962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (15))){
var inst_42413 = (state_42435[(8)]);
var state_42435__$1 = state_42435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42435__$1,(18),to,inst_42413);
} else {
if((state_val_42436 === (21))){
var inst_42426 = (state_42435[(2)]);
var state_42435__$1 = state_42435;
var statearr_42443_43963 = state_42435__$1;
(statearr_42443_43963[(2)] = inst_42426);

(statearr_42443_43963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (13))){
var inst_42428 = (state_42435[(2)]);
var state_42435__$1 = (function (){var statearr_42444 = state_42435;
(statearr_42444[(9)] = inst_42428);

return statearr_42444;
})();
var statearr_42445_43964 = state_42435__$1;
(statearr_42445_43964[(2)] = null);

(statearr_42445_43964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (6))){
var inst_42400 = (state_42435[(7)]);
var state_42435__$1 = state_42435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42435__$1,(11),inst_42400);
} else {
if((state_val_42436 === (17))){
var inst_42421 = (state_42435[(2)]);
var state_42435__$1 = state_42435;
if(cljs.core.truth_(inst_42421)){
var statearr_42446_43965 = state_42435__$1;
(statearr_42446_43965[(1)] = (19));

} else {
var statearr_42447_43966 = state_42435__$1;
(statearr_42447_43966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (3))){
var inst_42433 = (state_42435[(2)]);
var state_42435__$1 = state_42435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42435__$1,inst_42433);
} else {
if((state_val_42436 === (12))){
var inst_42410 = (state_42435[(10)]);
var state_42435__$1 = state_42435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42435__$1,(14),inst_42410);
} else {
if((state_val_42436 === (2))){
var state_42435__$1 = state_42435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42435__$1,(4),results);
} else {
if((state_val_42436 === (19))){
var state_42435__$1 = state_42435;
var statearr_42448_43967 = state_42435__$1;
(statearr_42448_43967[(2)] = null);

(statearr_42448_43967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (11))){
var inst_42410 = (state_42435[(2)]);
var state_42435__$1 = (function (){var statearr_42449 = state_42435;
(statearr_42449[(10)] = inst_42410);

return statearr_42449;
})();
var statearr_42450_43968 = state_42435__$1;
(statearr_42450_43968[(2)] = null);

(statearr_42450_43968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (9))){
var state_42435__$1 = state_42435;
var statearr_42451_43969 = state_42435__$1;
(statearr_42451_43969[(2)] = null);

(statearr_42451_43969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (5))){
var state_42435__$1 = state_42435;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42452_43970 = state_42435__$1;
(statearr_42452_43970[(1)] = (8));

} else {
var statearr_42453_43971 = state_42435__$1;
(statearr_42453_43971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (14))){
var inst_42413 = (state_42435[(8)]);
var inst_42415 = (state_42435[(11)]);
var inst_42413__$1 = (state_42435[(2)]);
var inst_42414 = (inst_42413__$1 == null);
var inst_42415__$1 = cljs.core.not(inst_42414);
var state_42435__$1 = (function (){var statearr_42454 = state_42435;
(statearr_42454[(8)] = inst_42413__$1);

(statearr_42454[(11)] = inst_42415__$1);

return statearr_42454;
})();
if(inst_42415__$1){
var statearr_42455_43972 = state_42435__$1;
(statearr_42455_43972[(1)] = (15));

} else {
var statearr_42456_43973 = state_42435__$1;
(statearr_42456_43973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (16))){
var inst_42415 = (state_42435[(11)]);
var state_42435__$1 = state_42435;
var statearr_42457_43974 = state_42435__$1;
(statearr_42457_43974[(2)] = inst_42415);

(statearr_42457_43974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (10))){
var inst_42407 = (state_42435[(2)]);
var state_42435__$1 = state_42435;
var statearr_42458_43975 = state_42435__$1;
(statearr_42458_43975[(2)] = inst_42407);

(statearr_42458_43975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (18))){
var inst_42418 = (state_42435[(2)]);
var state_42435__$1 = state_42435;
var statearr_42459_43976 = state_42435__$1;
(statearr_42459_43976[(2)] = inst_42418);

(statearr_42459_43976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42436 === (8))){
var inst_42404 = cljs.core.async.close_BANG_(to);
var state_42435__$1 = state_42435;
var statearr_42460_43977 = state_42435__$1;
(statearr_42460_43977[(2)] = inst_42404);

(statearr_42460_43977[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0 = (function (){
var statearr_42461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__);

(statearr_42461[(1)] = (1));

return statearr_42461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1 = (function (state_42435){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42435);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42462){var ex__42124__auto__ = e42462;
var statearr_42463_43978 = state_42435;
(statearr_42463_43978[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42435[(4)]))){
var statearr_42464_43979 = state_42435;
(statearr_42464_43979[(1)] = cljs.core.first((state_42435[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43980 = state_42435;
state_42435 = G__43980;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__ = function(state_42435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1.call(this,state_42435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42121__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_42465 = f__42153__auto__();
(statearr_42465[(6)] = c__42152__auto__);

return statearr_42465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42467 = arguments.length;
switch (G__42467) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42469 = arguments.length;
switch (G__42469) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42471 = arguments.length;
switch (G__42471) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42152__auto___43984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_42497){
var state_val_42498 = (state_42497[(1)]);
if((state_val_42498 === (7))){
var inst_42493 = (state_42497[(2)]);
var state_42497__$1 = state_42497;
var statearr_42499_43985 = state_42497__$1;
(statearr_42499_43985[(2)] = inst_42493);

(statearr_42499_43985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (1))){
var state_42497__$1 = state_42497;
var statearr_42500_43986 = state_42497__$1;
(statearr_42500_43986[(2)] = null);

(statearr_42500_43986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (4))){
var inst_42474 = (state_42497[(7)]);
var inst_42474__$1 = (state_42497[(2)]);
var inst_42475 = (inst_42474__$1 == null);
var state_42497__$1 = (function (){var statearr_42501 = state_42497;
(statearr_42501[(7)] = inst_42474__$1);

return statearr_42501;
})();
if(cljs.core.truth_(inst_42475)){
var statearr_42502_43987 = state_42497__$1;
(statearr_42502_43987[(1)] = (5));

} else {
var statearr_42503_43988 = state_42497__$1;
(statearr_42503_43988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (13))){
var state_42497__$1 = state_42497;
var statearr_42504_43990 = state_42497__$1;
(statearr_42504_43990[(2)] = null);

(statearr_42504_43990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (6))){
var inst_42474 = (state_42497[(7)]);
var inst_42480 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42474) : p.call(null,inst_42474));
var state_42497__$1 = state_42497;
if(cljs.core.truth_(inst_42480)){
var statearr_42505_43992 = state_42497__$1;
(statearr_42505_43992[(1)] = (9));

} else {
var statearr_42506_43993 = state_42497__$1;
(statearr_42506_43993[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (3))){
var inst_42495 = (state_42497[(2)]);
var state_42497__$1 = state_42497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42497__$1,inst_42495);
} else {
if((state_val_42498 === (12))){
var state_42497__$1 = state_42497;
var statearr_42507_43995 = state_42497__$1;
(statearr_42507_43995[(2)] = null);

(statearr_42507_43995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (2))){
var state_42497__$1 = state_42497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42497__$1,(4),ch);
} else {
if((state_val_42498 === (11))){
var inst_42474 = (state_42497[(7)]);
var inst_42484 = (state_42497[(2)]);
var state_42497__$1 = state_42497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42497__$1,(8),inst_42484,inst_42474);
} else {
if((state_val_42498 === (9))){
var state_42497__$1 = state_42497;
var statearr_42508_43997 = state_42497__$1;
(statearr_42508_43997[(2)] = tc);

(statearr_42508_43997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (5))){
var inst_42477 = cljs.core.async.close_BANG_(tc);
var inst_42478 = cljs.core.async.close_BANG_(fc);
var state_42497__$1 = (function (){var statearr_42509 = state_42497;
(statearr_42509[(8)] = inst_42477);

return statearr_42509;
})();
var statearr_42510_43998 = state_42497__$1;
(statearr_42510_43998[(2)] = inst_42478);

(statearr_42510_43998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (14))){
var inst_42491 = (state_42497[(2)]);
var state_42497__$1 = state_42497;
var statearr_42511_43999 = state_42497__$1;
(statearr_42511_43999[(2)] = inst_42491);

(statearr_42511_43999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (10))){
var state_42497__$1 = state_42497;
var statearr_42512_44000 = state_42497__$1;
(statearr_42512_44000[(2)] = fc);

(statearr_42512_44000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42498 === (8))){
var inst_42486 = (state_42497[(2)]);
var state_42497__$1 = state_42497;
if(cljs.core.truth_(inst_42486)){
var statearr_42513_44001 = state_42497__$1;
(statearr_42513_44001[(1)] = (12));

} else {
var statearr_42514_44002 = state_42497__$1;
(statearr_42514_44002[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_42515 = [null,null,null,null,null,null,null,null,null];
(statearr_42515[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_42515[(1)] = (1));

return statearr_42515;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_42497){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42497);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42516){var ex__42124__auto__ = e42516;
var statearr_42517_44003 = state_42497;
(statearr_42517_44003[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42497[(4)]))){
var statearr_42518_44004 = state_42497;
(statearr_42518_44004[(1)] = cljs.core.first((state_42497[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44005 = state_42497;
state_42497 = G__44005;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_42497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_42497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_42519 = f__42153__auto__();
(statearr_42519[(6)] = c__42152__auto___43984);

return statearr_42519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_42541){
var state_val_42552 = (state_42541[(1)]);
if((state_val_42552 === (7))){
var inst_42537 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
var statearr_42553_44006 = state_42541__$1;
(statearr_42553_44006[(2)] = inst_42537);

(statearr_42553_44006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (1))){
var inst_42520 = init;
var inst_42521 = inst_42520;
var state_42541__$1 = (function (){var statearr_42554 = state_42541;
(statearr_42554[(7)] = inst_42521);

return statearr_42554;
})();
var statearr_42555_44007 = state_42541__$1;
(statearr_42555_44007[(2)] = null);

(statearr_42555_44007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (4))){
var inst_42524 = (state_42541[(8)]);
var inst_42524__$1 = (state_42541[(2)]);
var inst_42525 = (inst_42524__$1 == null);
var state_42541__$1 = (function (){var statearr_42556 = state_42541;
(statearr_42556[(8)] = inst_42524__$1);

return statearr_42556;
})();
if(cljs.core.truth_(inst_42525)){
var statearr_42557_44008 = state_42541__$1;
(statearr_42557_44008[(1)] = (5));

} else {
var statearr_42558_44009 = state_42541__$1;
(statearr_42558_44009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (6))){
var inst_42521 = (state_42541[(7)]);
var inst_42524 = (state_42541[(8)]);
var inst_42528 = (state_42541[(9)]);
var inst_42528__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42521,inst_42524) : f.call(null,inst_42521,inst_42524));
var inst_42529 = cljs.core.reduced_QMARK_(inst_42528__$1);
var state_42541__$1 = (function (){var statearr_42559 = state_42541;
(statearr_42559[(9)] = inst_42528__$1);

return statearr_42559;
})();
if(inst_42529){
var statearr_42560_44010 = state_42541__$1;
(statearr_42560_44010[(1)] = (8));

} else {
var statearr_42561_44011 = state_42541__$1;
(statearr_42561_44011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (3))){
var inst_42539 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42541__$1,inst_42539);
} else {
if((state_val_42552 === (2))){
var state_42541__$1 = state_42541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42541__$1,(4),ch);
} else {
if((state_val_42552 === (9))){
var inst_42528 = (state_42541[(9)]);
var inst_42521 = inst_42528;
var state_42541__$1 = (function (){var statearr_42562 = state_42541;
(statearr_42562[(7)] = inst_42521);

return statearr_42562;
})();
var statearr_42563_44012 = state_42541__$1;
(statearr_42563_44012[(2)] = null);

(statearr_42563_44012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (5))){
var inst_42521 = (state_42541[(7)]);
var state_42541__$1 = state_42541;
var statearr_42564_44013 = state_42541__$1;
(statearr_42564_44013[(2)] = inst_42521);

(statearr_42564_44013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (10))){
var inst_42535 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
var statearr_42565_44014 = state_42541__$1;
(statearr_42565_44014[(2)] = inst_42535);

(statearr_42565_44014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (8))){
var inst_42528 = (state_42541[(9)]);
var inst_42531 = cljs.core.deref(inst_42528);
var state_42541__$1 = state_42541;
var statearr_42566_44015 = state_42541__$1;
(statearr_42566_44015[(2)] = inst_42531);

(statearr_42566_44015[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42121__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42121__auto____0 = (function (){
var statearr_42568 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42568[(0)] = cljs$core$async$reduce_$_state_machine__42121__auto__);

(statearr_42568[(1)] = (1));

return statearr_42568;
});
var cljs$core$async$reduce_$_state_machine__42121__auto____1 = (function (state_42541){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42541);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42569){var ex__42124__auto__ = e42569;
var statearr_42570_44016 = state_42541;
(statearr_42570_44016[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42541[(4)]))){
var statearr_42574_44017 = state_42541;
(statearr_42574_44017[(1)] = cljs.core.first((state_42541[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44019 = state_42541;
state_42541 = G__44019;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42121__auto__ = function(state_42541){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42121__auto____1.call(this,state_42541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42121__auto____0;
cljs$core$async$reduce_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42121__auto____1;
return cljs$core$async$reduce_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_42575 = f__42153__auto__();
(statearr_42575[(6)] = c__42152__auto__);

return statearr_42575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_42581){
var state_val_42582 = (state_42581[(1)]);
if((state_val_42582 === (1))){
var inst_42576 = cljs.core.async.reduce(f__$1,init,ch);
var state_42581__$1 = state_42581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42581__$1,(2),inst_42576);
} else {
if((state_val_42582 === (2))){
var inst_42578 = (state_42581[(2)]);
var inst_42579 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42578) : f__$1.call(null,inst_42578));
var state_42581__$1 = state_42581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42581__$1,inst_42579);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42121__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42121__auto____0 = (function (){
var statearr_42591 = [null,null,null,null,null,null,null];
(statearr_42591[(0)] = cljs$core$async$transduce_$_state_machine__42121__auto__);

(statearr_42591[(1)] = (1));

return statearr_42591;
});
var cljs$core$async$transduce_$_state_machine__42121__auto____1 = (function (state_42581){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42581);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42595){var ex__42124__auto__ = e42595;
var statearr_42596_44021 = state_42581;
(statearr_42596_44021[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42581[(4)]))){
var statearr_42597_44022 = state_42581;
(statearr_42597_44022[(1)] = cljs.core.first((state_42581[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44023 = state_42581;
state_42581 = G__44023;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42121__auto__ = function(state_42581){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42121__auto____1.call(this,state_42581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42121__auto____0;
cljs$core$async$transduce_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42121__auto____1;
return cljs$core$async$transduce_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_42598 = f__42153__auto__();
(statearr_42598[(6)] = c__42152__auto__);

return statearr_42598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__42600 = arguments.length;
switch (G__42600) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_42625){
var state_val_42626 = (state_42625[(1)]);
if((state_val_42626 === (7))){
var inst_42607 = (state_42625[(2)]);
var state_42625__$1 = state_42625;
var statearr_42631_44025 = state_42625__$1;
(statearr_42631_44025[(2)] = inst_42607);

(statearr_42631_44025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (1))){
var inst_42601 = cljs.core.seq(coll);
var inst_42602 = inst_42601;
var state_42625__$1 = (function (){var statearr_42632 = state_42625;
(statearr_42632[(7)] = inst_42602);

return statearr_42632;
})();
var statearr_42633_44026 = state_42625__$1;
(statearr_42633_44026[(2)] = null);

(statearr_42633_44026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (4))){
var inst_42602 = (state_42625[(7)]);
var inst_42605 = cljs.core.first(inst_42602);
var state_42625__$1 = state_42625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42625__$1,(7),ch,inst_42605);
} else {
if((state_val_42626 === (13))){
var inst_42619 = (state_42625[(2)]);
var state_42625__$1 = state_42625;
var statearr_42634_44027 = state_42625__$1;
(statearr_42634_44027[(2)] = inst_42619);

(statearr_42634_44027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (6))){
var inst_42610 = (state_42625[(2)]);
var state_42625__$1 = state_42625;
if(cljs.core.truth_(inst_42610)){
var statearr_42635_44028 = state_42625__$1;
(statearr_42635_44028[(1)] = (8));

} else {
var statearr_42636_44029 = state_42625__$1;
(statearr_42636_44029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (3))){
var inst_42623 = (state_42625[(2)]);
var state_42625__$1 = state_42625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42625__$1,inst_42623);
} else {
if((state_val_42626 === (12))){
var state_42625__$1 = state_42625;
var statearr_42637_44030 = state_42625__$1;
(statearr_42637_44030[(2)] = null);

(statearr_42637_44030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (2))){
var inst_42602 = (state_42625[(7)]);
var state_42625__$1 = state_42625;
if(cljs.core.truth_(inst_42602)){
var statearr_42638_44031 = state_42625__$1;
(statearr_42638_44031[(1)] = (4));

} else {
var statearr_42639_44032 = state_42625__$1;
(statearr_42639_44032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (11))){
var inst_42616 = cljs.core.async.close_BANG_(ch);
var state_42625__$1 = state_42625;
var statearr_42641_44033 = state_42625__$1;
(statearr_42641_44033[(2)] = inst_42616);

(statearr_42641_44033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (9))){
var state_42625__$1 = state_42625;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42642_44034 = state_42625__$1;
(statearr_42642_44034[(1)] = (11));

} else {
var statearr_42643_44035 = state_42625__$1;
(statearr_42643_44035[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (5))){
var inst_42602 = (state_42625[(7)]);
var state_42625__$1 = state_42625;
var statearr_42644_44036 = state_42625__$1;
(statearr_42644_44036[(2)] = inst_42602);

(statearr_42644_44036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (10))){
var inst_42621 = (state_42625[(2)]);
var state_42625__$1 = state_42625;
var statearr_42645_44037 = state_42625__$1;
(statearr_42645_44037[(2)] = inst_42621);

(statearr_42645_44037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42626 === (8))){
var inst_42602 = (state_42625[(7)]);
var inst_42612 = cljs.core.next(inst_42602);
var inst_42602__$1 = inst_42612;
var state_42625__$1 = (function (){var statearr_42646 = state_42625;
(statearr_42646[(7)] = inst_42602__$1);

return statearr_42646;
})();
var statearr_42647_44038 = state_42625__$1;
(statearr_42647_44038[(2)] = null);

(statearr_42647_44038[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_42648 = [null,null,null,null,null,null,null,null];
(statearr_42648[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_42648[(1)] = (1));

return statearr_42648;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_42625){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42625);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42649){var ex__42124__auto__ = e42649;
var statearr_42650_44039 = state_42625;
(statearr_42650_44039[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42625[(4)]))){
var statearr_42651_44040 = state_42625;
(statearr_42651_44040[(1)] = cljs.core.first((state_42625[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44041 = state_42625;
state_42625 = G__44041;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_42625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_42625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_42652 = f__42153__auto__();
(statearr_42652[(6)] = c__42152__auto__);

return statearr_42652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42660 = arguments.length;
switch (G__42660) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_44043 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_44043(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44044 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_44044(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44045 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_44045(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44046 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_44046(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42697 = (function (ch,cs,meta42698){
this.ch = ch;
this.cs = cs;
this.meta42698 = meta42698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42699,meta42698__$1){
var self__ = this;
var _42699__$1 = this;
return (new cljs.core.async.t_cljs$core$async42697(self__.ch,self__.cs,meta42698__$1));
}));

(cljs.core.async.t_cljs$core$async42697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42699){
var self__ = this;
var _42699__$1 = this;
return self__.meta42698;
}));

(cljs.core.async.t_cljs$core$async42697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42697.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42697.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42697.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42697.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42698","meta42698",1537432583,null)], null);
}));

(cljs.core.async.t_cljs$core$async42697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42697");

(cljs.core.async.t_cljs$core$async42697.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42697.
 */
cljs.core.async.__GT_t_cljs$core$async42697 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42697(ch__$1,cs__$1,meta42698){
return (new cljs.core.async.t_cljs$core$async42697(ch__$1,cs__$1,meta42698));
});

}

return (new cljs.core.async.t_cljs$core$async42697(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__42152__auto___44047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_42856){
var state_val_42857 = (state_42856[(1)]);
if((state_val_42857 === (7))){
var inst_42852 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
var statearr_42858_44048 = state_42856__$1;
(statearr_42858_44048[(2)] = inst_42852);

(statearr_42858_44048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (20))){
var inst_42757 = (state_42856[(7)]);
var inst_42769 = cljs.core.first(inst_42757);
var inst_42770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42769,(0),null);
var inst_42771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42769,(1),null);
var state_42856__$1 = (function (){var statearr_42859 = state_42856;
(statearr_42859[(8)] = inst_42770);

return statearr_42859;
})();
if(cljs.core.truth_(inst_42771)){
var statearr_42860_44049 = state_42856__$1;
(statearr_42860_44049[(1)] = (22));

} else {
var statearr_42861_44050 = state_42856__$1;
(statearr_42861_44050[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (27))){
var inst_42799 = (state_42856[(9)]);
var inst_42801 = (state_42856[(10)]);
var inst_42806 = (state_42856[(11)]);
var inst_42726 = (state_42856[(12)]);
var inst_42806__$1 = cljs.core._nth(inst_42799,inst_42801);
var inst_42807 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42806__$1,inst_42726,done);
var state_42856__$1 = (function (){var statearr_42865 = state_42856;
(statearr_42865[(11)] = inst_42806__$1);

return statearr_42865;
})();
if(cljs.core.truth_(inst_42807)){
var statearr_42866_44051 = state_42856__$1;
(statearr_42866_44051[(1)] = (30));

} else {
var statearr_42867_44052 = state_42856__$1;
(statearr_42867_44052[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (1))){
var state_42856__$1 = state_42856;
var statearr_42868_44053 = state_42856__$1;
(statearr_42868_44053[(2)] = null);

(statearr_42868_44053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (24))){
var inst_42757 = (state_42856[(7)]);
var inst_42776 = (state_42856[(2)]);
var inst_42777 = cljs.core.next(inst_42757);
var inst_42735 = inst_42777;
var inst_42736 = null;
var inst_42737 = (0);
var inst_42738 = (0);
var state_42856__$1 = (function (){var statearr_42871 = state_42856;
(statearr_42871[(13)] = inst_42776);

(statearr_42871[(14)] = inst_42735);

(statearr_42871[(15)] = inst_42736);

(statearr_42871[(16)] = inst_42737);

(statearr_42871[(17)] = inst_42738);

return statearr_42871;
})();
var statearr_42872_44054 = state_42856__$1;
(statearr_42872_44054[(2)] = null);

(statearr_42872_44054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (39))){
var state_42856__$1 = state_42856;
var statearr_42878_44055 = state_42856__$1;
(statearr_42878_44055[(2)] = null);

(statearr_42878_44055[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (4))){
var inst_42726 = (state_42856[(12)]);
var inst_42726__$1 = (state_42856[(2)]);
var inst_42727 = (inst_42726__$1 == null);
var state_42856__$1 = (function (){var statearr_42879 = state_42856;
(statearr_42879[(12)] = inst_42726__$1);

return statearr_42879;
})();
if(cljs.core.truth_(inst_42727)){
var statearr_42880_44056 = state_42856__$1;
(statearr_42880_44056[(1)] = (5));

} else {
var statearr_42881_44057 = state_42856__$1;
(statearr_42881_44057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (15))){
var inst_42738 = (state_42856[(17)]);
var inst_42735 = (state_42856[(14)]);
var inst_42736 = (state_42856[(15)]);
var inst_42737 = (state_42856[(16)]);
var inst_42753 = (state_42856[(2)]);
var inst_42754 = (inst_42738 + (1));
var tmp42873 = inst_42735;
var tmp42874 = inst_42737;
var tmp42875 = inst_42736;
var inst_42735__$1 = tmp42873;
var inst_42736__$1 = tmp42875;
var inst_42737__$1 = tmp42874;
var inst_42738__$1 = inst_42754;
var state_42856__$1 = (function (){var statearr_42882 = state_42856;
(statearr_42882[(18)] = inst_42753);

(statearr_42882[(14)] = inst_42735__$1);

(statearr_42882[(15)] = inst_42736__$1);

(statearr_42882[(16)] = inst_42737__$1);

(statearr_42882[(17)] = inst_42738__$1);

return statearr_42882;
})();
var statearr_42883_44058 = state_42856__$1;
(statearr_42883_44058[(2)] = null);

(statearr_42883_44058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (21))){
var inst_42780 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
var statearr_42887_44059 = state_42856__$1;
(statearr_42887_44059[(2)] = inst_42780);

(statearr_42887_44059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (31))){
var inst_42806 = (state_42856[(11)]);
var inst_42810 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42806);
var state_42856__$1 = state_42856;
var statearr_42888_44060 = state_42856__$1;
(statearr_42888_44060[(2)] = inst_42810);

(statearr_42888_44060[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (32))){
var inst_42801 = (state_42856[(10)]);
var inst_42798 = (state_42856[(19)]);
var inst_42799 = (state_42856[(9)]);
var inst_42800 = (state_42856[(20)]);
var inst_42812 = (state_42856[(2)]);
var inst_42813 = (inst_42801 + (1));
var tmp42884 = inst_42799;
var tmp42885 = inst_42798;
var tmp42886 = inst_42800;
var inst_42798__$1 = tmp42885;
var inst_42799__$1 = tmp42884;
var inst_42800__$1 = tmp42886;
var inst_42801__$1 = inst_42813;
var state_42856__$1 = (function (){var statearr_42889 = state_42856;
(statearr_42889[(21)] = inst_42812);

(statearr_42889[(19)] = inst_42798__$1);

(statearr_42889[(9)] = inst_42799__$1);

(statearr_42889[(20)] = inst_42800__$1);

(statearr_42889[(10)] = inst_42801__$1);

return statearr_42889;
})();
var statearr_42890_44061 = state_42856__$1;
(statearr_42890_44061[(2)] = null);

(statearr_42890_44061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (40))){
var inst_42825 = (state_42856[(22)]);
var inst_42829 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42825);
var state_42856__$1 = state_42856;
var statearr_42891_44062 = state_42856__$1;
(statearr_42891_44062[(2)] = inst_42829);

(statearr_42891_44062[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (33))){
var inst_42816 = (state_42856[(23)]);
var inst_42818 = cljs.core.chunked_seq_QMARK_(inst_42816);
var state_42856__$1 = state_42856;
if(inst_42818){
var statearr_42892_44063 = state_42856__$1;
(statearr_42892_44063[(1)] = (36));

} else {
var statearr_42893_44064 = state_42856__$1;
(statearr_42893_44064[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (13))){
var inst_42747 = (state_42856[(24)]);
var inst_42750 = cljs.core.async.close_BANG_(inst_42747);
var state_42856__$1 = state_42856;
var statearr_42894_44065 = state_42856__$1;
(statearr_42894_44065[(2)] = inst_42750);

(statearr_42894_44065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (22))){
var inst_42770 = (state_42856[(8)]);
var inst_42773 = cljs.core.async.close_BANG_(inst_42770);
var state_42856__$1 = state_42856;
var statearr_42895_44066 = state_42856__$1;
(statearr_42895_44066[(2)] = inst_42773);

(statearr_42895_44066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (36))){
var inst_42816 = (state_42856[(23)]);
var inst_42820 = cljs.core.chunk_first(inst_42816);
var inst_42821 = cljs.core.chunk_rest(inst_42816);
var inst_42822 = cljs.core.count(inst_42820);
var inst_42798 = inst_42821;
var inst_42799 = inst_42820;
var inst_42800 = inst_42822;
var inst_42801 = (0);
var state_42856__$1 = (function (){var statearr_42896 = state_42856;
(statearr_42896[(19)] = inst_42798);

(statearr_42896[(9)] = inst_42799);

(statearr_42896[(20)] = inst_42800);

(statearr_42896[(10)] = inst_42801);

return statearr_42896;
})();
var statearr_42897_44067 = state_42856__$1;
(statearr_42897_44067[(2)] = null);

(statearr_42897_44067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (41))){
var inst_42816 = (state_42856[(23)]);
var inst_42831 = (state_42856[(2)]);
var inst_42832 = cljs.core.next(inst_42816);
var inst_42798 = inst_42832;
var inst_42799 = null;
var inst_42800 = (0);
var inst_42801 = (0);
var state_42856__$1 = (function (){var statearr_42898 = state_42856;
(statearr_42898[(25)] = inst_42831);

(statearr_42898[(19)] = inst_42798);

(statearr_42898[(9)] = inst_42799);

(statearr_42898[(20)] = inst_42800);

(statearr_42898[(10)] = inst_42801);

return statearr_42898;
})();
var statearr_42899_44068 = state_42856__$1;
(statearr_42899_44068[(2)] = null);

(statearr_42899_44068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (43))){
var state_42856__$1 = state_42856;
var statearr_42900_44069 = state_42856__$1;
(statearr_42900_44069[(2)] = null);

(statearr_42900_44069[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (29))){
var inst_42840 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
var statearr_42901_44070 = state_42856__$1;
(statearr_42901_44070[(2)] = inst_42840);

(statearr_42901_44070[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (44))){
var inst_42849 = (state_42856[(2)]);
var state_42856__$1 = (function (){var statearr_42902 = state_42856;
(statearr_42902[(26)] = inst_42849);

return statearr_42902;
})();
var statearr_42903_44071 = state_42856__$1;
(statearr_42903_44071[(2)] = null);

(statearr_42903_44071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (6))){
var inst_42790 = (state_42856[(27)]);
var inst_42789 = cljs.core.deref(cs);
var inst_42790__$1 = cljs.core.keys(inst_42789);
var inst_42791 = cljs.core.count(inst_42790__$1);
var inst_42792 = cljs.core.reset_BANG_(dctr,inst_42791);
var inst_42797 = cljs.core.seq(inst_42790__$1);
var inst_42798 = inst_42797;
var inst_42799 = null;
var inst_42800 = (0);
var inst_42801 = (0);
var state_42856__$1 = (function (){var statearr_42904 = state_42856;
(statearr_42904[(27)] = inst_42790__$1);

(statearr_42904[(28)] = inst_42792);

(statearr_42904[(19)] = inst_42798);

(statearr_42904[(9)] = inst_42799);

(statearr_42904[(20)] = inst_42800);

(statearr_42904[(10)] = inst_42801);

return statearr_42904;
})();
var statearr_42905_44075 = state_42856__$1;
(statearr_42905_44075[(2)] = null);

(statearr_42905_44075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (28))){
var inst_42798 = (state_42856[(19)]);
var inst_42816 = (state_42856[(23)]);
var inst_42816__$1 = cljs.core.seq(inst_42798);
var state_42856__$1 = (function (){var statearr_42906 = state_42856;
(statearr_42906[(23)] = inst_42816__$1);

return statearr_42906;
})();
if(inst_42816__$1){
var statearr_42907_44076 = state_42856__$1;
(statearr_42907_44076[(1)] = (33));

} else {
var statearr_42908_44077 = state_42856__$1;
(statearr_42908_44077[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (25))){
var inst_42801 = (state_42856[(10)]);
var inst_42800 = (state_42856[(20)]);
var inst_42803 = (inst_42801 < inst_42800);
var inst_42804 = inst_42803;
var state_42856__$1 = state_42856;
if(cljs.core.truth_(inst_42804)){
var statearr_42909_44079 = state_42856__$1;
(statearr_42909_44079[(1)] = (27));

} else {
var statearr_42910_44080 = state_42856__$1;
(statearr_42910_44080[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (34))){
var state_42856__$1 = state_42856;
var statearr_42911_44081 = state_42856__$1;
(statearr_42911_44081[(2)] = null);

(statearr_42911_44081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (17))){
var state_42856__$1 = state_42856;
var statearr_42912_44082 = state_42856__$1;
(statearr_42912_44082[(2)] = null);

(statearr_42912_44082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (3))){
var inst_42854 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42856__$1,inst_42854);
} else {
if((state_val_42857 === (12))){
var inst_42785 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
var statearr_42913_44083 = state_42856__$1;
(statearr_42913_44083[(2)] = inst_42785);

(statearr_42913_44083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (2))){
var state_42856__$1 = state_42856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42856__$1,(4),ch);
} else {
if((state_val_42857 === (23))){
var state_42856__$1 = state_42856;
var statearr_42914_44084 = state_42856__$1;
(statearr_42914_44084[(2)] = null);

(statearr_42914_44084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (35))){
var inst_42838 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
var statearr_42915_44085 = state_42856__$1;
(statearr_42915_44085[(2)] = inst_42838);

(statearr_42915_44085[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (19))){
var inst_42757 = (state_42856[(7)]);
var inst_42761 = cljs.core.chunk_first(inst_42757);
var inst_42762 = cljs.core.chunk_rest(inst_42757);
var inst_42763 = cljs.core.count(inst_42761);
var inst_42735 = inst_42762;
var inst_42736 = inst_42761;
var inst_42737 = inst_42763;
var inst_42738 = (0);
var state_42856__$1 = (function (){var statearr_42916 = state_42856;
(statearr_42916[(14)] = inst_42735);

(statearr_42916[(15)] = inst_42736);

(statearr_42916[(16)] = inst_42737);

(statearr_42916[(17)] = inst_42738);

return statearr_42916;
})();
var statearr_42917_44088 = state_42856__$1;
(statearr_42917_44088[(2)] = null);

(statearr_42917_44088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (11))){
var inst_42735 = (state_42856[(14)]);
var inst_42757 = (state_42856[(7)]);
var inst_42757__$1 = cljs.core.seq(inst_42735);
var state_42856__$1 = (function (){var statearr_42918 = state_42856;
(statearr_42918[(7)] = inst_42757__$1);

return statearr_42918;
})();
if(inst_42757__$1){
var statearr_42919_44089 = state_42856__$1;
(statearr_42919_44089[(1)] = (16));

} else {
var statearr_42928_44090 = state_42856__$1;
(statearr_42928_44090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (9))){
var inst_42787 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
var statearr_42929_44091 = state_42856__$1;
(statearr_42929_44091[(2)] = inst_42787);

(statearr_42929_44091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (5))){
var inst_42733 = cljs.core.deref(cs);
var inst_42734 = cljs.core.seq(inst_42733);
var inst_42735 = inst_42734;
var inst_42736 = null;
var inst_42737 = (0);
var inst_42738 = (0);
var state_42856__$1 = (function (){var statearr_42930 = state_42856;
(statearr_42930[(14)] = inst_42735);

(statearr_42930[(15)] = inst_42736);

(statearr_42930[(16)] = inst_42737);

(statearr_42930[(17)] = inst_42738);

return statearr_42930;
})();
var statearr_42931_44093 = state_42856__$1;
(statearr_42931_44093[(2)] = null);

(statearr_42931_44093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (14))){
var state_42856__$1 = state_42856;
var statearr_42932_44094 = state_42856__$1;
(statearr_42932_44094[(2)] = null);

(statearr_42932_44094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (45))){
var inst_42846 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
var statearr_42933_44096 = state_42856__$1;
(statearr_42933_44096[(2)] = inst_42846);

(statearr_42933_44096[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (26))){
var inst_42790 = (state_42856[(27)]);
var inst_42842 = (state_42856[(2)]);
var inst_42843 = cljs.core.seq(inst_42790);
var state_42856__$1 = (function (){var statearr_42934 = state_42856;
(statearr_42934[(29)] = inst_42842);

return statearr_42934;
})();
if(inst_42843){
var statearr_42935_44097 = state_42856__$1;
(statearr_42935_44097[(1)] = (42));

} else {
var statearr_42936_44098 = state_42856__$1;
(statearr_42936_44098[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (16))){
var inst_42757 = (state_42856[(7)]);
var inst_42759 = cljs.core.chunked_seq_QMARK_(inst_42757);
var state_42856__$1 = state_42856;
if(inst_42759){
var statearr_42937_44099 = state_42856__$1;
(statearr_42937_44099[(1)] = (19));

} else {
var statearr_42938_44100 = state_42856__$1;
(statearr_42938_44100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (38))){
var inst_42835 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
var statearr_42939_44101 = state_42856__$1;
(statearr_42939_44101[(2)] = inst_42835);

(statearr_42939_44101[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (30))){
var state_42856__$1 = state_42856;
var statearr_42940_44102 = state_42856__$1;
(statearr_42940_44102[(2)] = null);

(statearr_42940_44102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (10))){
var inst_42736 = (state_42856[(15)]);
var inst_42738 = (state_42856[(17)]);
var inst_42746 = cljs.core._nth(inst_42736,inst_42738);
var inst_42747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42746,(0),null);
var inst_42748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42746,(1),null);
var state_42856__$1 = (function (){var statearr_42941 = state_42856;
(statearr_42941[(24)] = inst_42747);

return statearr_42941;
})();
if(cljs.core.truth_(inst_42748)){
var statearr_42942_44103 = state_42856__$1;
(statearr_42942_44103[(1)] = (13));

} else {
var statearr_42943_44104 = state_42856__$1;
(statearr_42943_44104[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (18))){
var inst_42783 = (state_42856[(2)]);
var state_42856__$1 = state_42856;
var statearr_42944_44105 = state_42856__$1;
(statearr_42944_44105[(2)] = inst_42783);

(statearr_42944_44105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (42))){
var state_42856__$1 = state_42856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42856__$1,(45),dchan);
} else {
if((state_val_42857 === (37))){
var inst_42816 = (state_42856[(23)]);
var inst_42825 = (state_42856[(22)]);
var inst_42726 = (state_42856[(12)]);
var inst_42825__$1 = cljs.core.first(inst_42816);
var inst_42826 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42825__$1,inst_42726,done);
var state_42856__$1 = (function (){var statearr_42945 = state_42856;
(statearr_42945[(22)] = inst_42825__$1);

return statearr_42945;
})();
if(cljs.core.truth_(inst_42826)){
var statearr_42946_44106 = state_42856__$1;
(statearr_42946_44106[(1)] = (39));

} else {
var statearr_42947_44107 = state_42856__$1;
(statearr_42947_44107[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42857 === (8))){
var inst_42738 = (state_42856[(17)]);
var inst_42737 = (state_42856[(16)]);
var inst_42740 = (inst_42738 < inst_42737);
var inst_42741 = inst_42740;
var state_42856__$1 = state_42856;
if(cljs.core.truth_(inst_42741)){
var statearr_42948_44108 = state_42856__$1;
(statearr_42948_44108[(1)] = (10));

} else {
var statearr_42949_44109 = state_42856__$1;
(statearr_42949_44109[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42121__auto__ = null;
var cljs$core$async$mult_$_state_machine__42121__auto____0 = (function (){
var statearr_42950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42950[(0)] = cljs$core$async$mult_$_state_machine__42121__auto__);

(statearr_42950[(1)] = (1));

return statearr_42950;
});
var cljs$core$async$mult_$_state_machine__42121__auto____1 = (function (state_42856){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_42856);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e42951){var ex__42124__auto__ = e42951;
var statearr_42952_44110 = state_42856;
(statearr_42952_44110[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_42856[(4)]))){
var statearr_42953_44111 = state_42856;
(statearr_42953_44111[(1)] = cljs.core.first((state_42856[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44112 = state_42856;
state_42856 = G__44112;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42121__auto__ = function(state_42856){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42121__auto____1.call(this,state_42856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42121__auto____0;
cljs$core$async$mult_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42121__auto____1;
return cljs$core$async$mult_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_42954 = f__42153__auto__();
(statearr_42954[(6)] = c__42152__auto___44047);

return statearr_42954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42956 = arguments.length;
switch (G__42956) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_44114 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44114(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44115 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44115(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44116 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44116(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44119 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44119(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44120 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44120(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44121 = arguments.length;
var i__5770__auto___44122 = (0);
while(true){
if((i__5770__auto___44122 < len__5769__auto___44121)){
args__5775__auto__.push((arguments[i__5770__auto___44122]));

var G__44123 = (i__5770__auto___44122 + (1));
i__5770__auto___44122 = G__44123;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42961){
var map__42962 = p__42961;
var map__42962__$1 = cljs.core.__destructure_map(map__42962);
var opts = map__42962__$1;
var statearr_42963_44124 = state;
(statearr_42963_44124[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_42964_44125 = state;
(statearr_42964_44125[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_42965_44126 = state;
(statearr_42965_44126[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42957){
var G__42958 = cljs.core.first(seq42957);
var seq42957__$1 = cljs.core.next(seq42957);
var G__42959 = cljs.core.first(seq42957__$1);
var seq42957__$2 = cljs.core.next(seq42957__$1);
var G__42960 = cljs.core.first(seq42957__$2);
var seq42957__$3 = cljs.core.next(seq42957__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42958,G__42959,G__42960,seq42957__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42969 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42970){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42970 = meta42970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42971,meta42970__$1){
var self__ = this;
var _42971__$1 = this;
return (new cljs.core.async.t_cljs$core$async42969(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42970__$1));
}));

(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42971){
var self__ = this;
var _42971__$1 = this;
return self__.meta42970;
}));

(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42969.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42970","meta42970",1298665940,null)], null);
}));

(cljs.core.async.t_cljs$core$async42969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42969");

(cljs.core.async.t_cljs$core$async42969.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42969.
 */
cljs.core.async.__GT_t_cljs$core$async42969 = (function cljs$core$async$mix_$___GT_t_cljs$core$async42969(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42970){
return (new cljs.core.async.t_cljs$core$async42969(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42970));
});

}

return (new cljs.core.async.t_cljs$core$async42969(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42152__auto___44131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43041){
var state_val_43042 = (state_43041[(1)]);
if((state_val_43042 === (7))){
var inst_43001 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_43001)){
var statearr_43043_44132 = state_43041__$1;
(statearr_43043_44132[(1)] = (8));

} else {
var statearr_43044_44133 = state_43041__$1;
(statearr_43044_44133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (20))){
var inst_42994 = (state_43041[(7)]);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43041__$1,(23),out,inst_42994);
} else {
if((state_val_43042 === (1))){
var inst_42977 = calc_state();
var inst_42978 = cljs.core.__destructure_map(inst_42977);
var inst_42979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42978,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42978,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42978,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42982 = inst_42977;
var state_43041__$1 = (function (){var statearr_43045 = state_43041;
(statearr_43045[(8)] = inst_42979);

(statearr_43045[(9)] = inst_42980);

(statearr_43045[(10)] = inst_42981);

(statearr_43045[(11)] = inst_42982);

return statearr_43045;
})();
var statearr_43046_44135 = state_43041__$1;
(statearr_43046_44135[(2)] = null);

(statearr_43046_44135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (24))){
var inst_42985 = (state_43041[(12)]);
var inst_42982 = inst_42985;
var state_43041__$1 = (function (){var statearr_43047 = state_43041;
(statearr_43047[(11)] = inst_42982);

return statearr_43047;
})();
var statearr_43048_44136 = state_43041__$1;
(statearr_43048_44136[(2)] = null);

(statearr_43048_44136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (4))){
var inst_42994 = (state_43041[(7)]);
var inst_42996 = (state_43041[(13)]);
var inst_42993 = (state_43041[(2)]);
var inst_42994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42993,(0),null);
var inst_42995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42993,(1),null);
var inst_42996__$1 = (inst_42994__$1 == null);
var state_43041__$1 = (function (){var statearr_43049 = state_43041;
(statearr_43049[(7)] = inst_42994__$1);

(statearr_43049[(14)] = inst_42995);

(statearr_43049[(13)] = inst_42996__$1);

return statearr_43049;
})();
if(cljs.core.truth_(inst_42996__$1)){
var statearr_43050_44137 = state_43041__$1;
(statearr_43050_44137[(1)] = (5));

} else {
var statearr_43051_44138 = state_43041__$1;
(statearr_43051_44138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (15))){
var inst_42986 = (state_43041[(15)]);
var inst_43015 = (state_43041[(16)]);
var inst_43015__$1 = cljs.core.empty_QMARK_(inst_42986);
var state_43041__$1 = (function (){var statearr_43052 = state_43041;
(statearr_43052[(16)] = inst_43015__$1);

return statearr_43052;
})();
if(inst_43015__$1){
var statearr_43053_44139 = state_43041__$1;
(statearr_43053_44139[(1)] = (17));

} else {
var statearr_43054_44140 = state_43041__$1;
(statearr_43054_44140[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (21))){
var inst_42985 = (state_43041[(12)]);
var inst_42982 = inst_42985;
var state_43041__$1 = (function (){var statearr_43055 = state_43041;
(statearr_43055[(11)] = inst_42982);

return statearr_43055;
})();
var statearr_43056_44142 = state_43041__$1;
(statearr_43056_44142[(2)] = null);

(statearr_43056_44142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (13))){
var inst_43008 = (state_43041[(2)]);
var inst_43009 = calc_state();
var inst_42982 = inst_43009;
var state_43041__$1 = (function (){var statearr_43057 = state_43041;
(statearr_43057[(17)] = inst_43008);

(statearr_43057[(11)] = inst_42982);

return statearr_43057;
})();
var statearr_43058_44143 = state_43041__$1;
(statearr_43058_44143[(2)] = null);

(statearr_43058_44143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (22))){
var inst_43035 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43059_44144 = state_43041__$1;
(statearr_43059_44144[(2)] = inst_43035);

(statearr_43059_44144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (6))){
var inst_42995 = (state_43041[(14)]);
var inst_42999 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42995,change);
var state_43041__$1 = state_43041;
var statearr_43060_44145 = state_43041__$1;
(statearr_43060_44145[(2)] = inst_42999);

(statearr_43060_44145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (25))){
var state_43041__$1 = state_43041;
var statearr_43061_44146 = state_43041__$1;
(statearr_43061_44146[(2)] = null);

(statearr_43061_44146[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (17))){
var inst_42987 = (state_43041[(18)]);
var inst_42995 = (state_43041[(14)]);
var inst_43017 = (inst_42987.cljs$core$IFn$_invoke$arity$1 ? inst_42987.cljs$core$IFn$_invoke$arity$1(inst_42995) : inst_42987.call(null,inst_42995));
var inst_43018 = cljs.core.not(inst_43017);
var state_43041__$1 = state_43041;
var statearr_43062_44154 = state_43041__$1;
(statearr_43062_44154[(2)] = inst_43018);

(statearr_43062_44154[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (3))){
var inst_43039 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43041__$1,inst_43039);
} else {
if((state_val_43042 === (12))){
var state_43041__$1 = state_43041;
var statearr_43063_44155 = state_43041__$1;
(statearr_43063_44155[(2)] = null);

(statearr_43063_44155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (2))){
var inst_42982 = (state_43041[(11)]);
var inst_42985 = (state_43041[(12)]);
var inst_42985__$1 = cljs.core.__destructure_map(inst_42982);
var inst_42986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42985__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42985__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42985__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43041__$1 = (function (){var statearr_43064 = state_43041;
(statearr_43064[(12)] = inst_42985__$1);

(statearr_43064[(15)] = inst_42986);

(statearr_43064[(18)] = inst_42987);

return statearr_43064;
})();
return cljs.core.async.ioc_alts_BANG_(state_43041__$1,(4),inst_42988);
} else {
if((state_val_43042 === (23))){
var inst_43026 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_43026)){
var statearr_43067_44156 = state_43041__$1;
(statearr_43067_44156[(1)] = (24));

} else {
var statearr_43068_44157 = state_43041__$1;
(statearr_43068_44157[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (19))){
var inst_43021 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43070_44158 = state_43041__$1;
(statearr_43070_44158[(2)] = inst_43021);

(statearr_43070_44158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (11))){
var inst_42995 = (state_43041[(14)]);
var inst_43005 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42995);
var state_43041__$1 = state_43041;
var statearr_43071_44159 = state_43041__$1;
(statearr_43071_44159[(2)] = inst_43005);

(statearr_43071_44159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (9))){
var inst_42986 = (state_43041[(15)]);
var inst_42995 = (state_43041[(14)]);
var inst_43012 = (state_43041[(19)]);
var inst_43012__$1 = (inst_42986.cljs$core$IFn$_invoke$arity$1 ? inst_42986.cljs$core$IFn$_invoke$arity$1(inst_42995) : inst_42986.call(null,inst_42995));
var state_43041__$1 = (function (){var statearr_43072 = state_43041;
(statearr_43072[(19)] = inst_43012__$1);

return statearr_43072;
})();
if(cljs.core.truth_(inst_43012__$1)){
var statearr_43073_44160 = state_43041__$1;
(statearr_43073_44160[(1)] = (14));

} else {
var statearr_43074_44161 = state_43041__$1;
(statearr_43074_44161[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (5))){
var inst_42996 = (state_43041[(13)]);
var state_43041__$1 = state_43041;
var statearr_43075_44162 = state_43041__$1;
(statearr_43075_44162[(2)] = inst_42996);

(statearr_43075_44162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (14))){
var inst_43012 = (state_43041[(19)]);
var state_43041__$1 = state_43041;
var statearr_43076_44163 = state_43041__$1;
(statearr_43076_44163[(2)] = inst_43012);

(statearr_43076_44163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (26))){
var inst_43031 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43077_44164 = state_43041__$1;
(statearr_43077_44164[(2)] = inst_43031);

(statearr_43077_44164[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (16))){
var inst_43023 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_43023)){
var statearr_43078_44165 = state_43041__$1;
(statearr_43078_44165[(1)] = (20));

} else {
var statearr_43079_44166 = state_43041__$1;
(statearr_43079_44166[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (10))){
var inst_43037 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43080_44167 = state_43041__$1;
(statearr_43080_44167[(2)] = inst_43037);

(statearr_43080_44167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (18))){
var inst_43015 = (state_43041[(16)]);
var state_43041__$1 = state_43041;
var statearr_43081_44168 = state_43041__$1;
(statearr_43081_44168[(2)] = inst_43015);

(statearr_43081_44168[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (8))){
var inst_42994 = (state_43041[(7)]);
var inst_43003 = (inst_42994 == null);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_43003)){
var statearr_43082_44169 = state_43041__$1;
(statearr_43082_44169[(1)] = (11));

} else {
var statearr_43083_44170 = state_43041__$1;
(statearr_43083_44170[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__42121__auto__ = null;
var cljs$core$async$mix_$_state_machine__42121__auto____0 = (function (){
var statearr_43084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43084[(0)] = cljs$core$async$mix_$_state_machine__42121__auto__);

(statearr_43084[(1)] = (1));

return statearr_43084;
});
var cljs$core$async$mix_$_state_machine__42121__auto____1 = (function (state_43041){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43041);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43085){var ex__42124__auto__ = e43085;
var statearr_43086_44171 = state_43041;
(statearr_43086_44171[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43041[(4)]))){
var statearr_43087_44172 = state_43041;
(statearr_43087_44172[(1)] = cljs.core.first((state_43041[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44173 = state_43041;
state_43041 = G__44173;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42121__auto__ = function(state_43041){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42121__auto____1.call(this,state_43041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42121__auto____0;
cljs$core$async$mix_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42121__auto____1;
return cljs$core$async$mix_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43088 = f__42153__auto__();
(statearr_43088[(6)] = c__42152__auto___44131);

return statearr_43088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_44174 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44174(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44181 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44181(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44182 = (function() {
var G__44183 = null;
var G__44183__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44183__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44183 = function(p,v){
switch(arguments.length){
case 1:
return G__44183__1.call(this,p);
case 2:
return G__44183__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44183.cljs$core$IFn$_invoke$arity$1 = G__44183__1;
G__44183.cljs$core$IFn$_invoke$arity$2 = G__44183__2;
return G__44183;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43090 = arguments.length;
switch (G__43090) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44182(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44182(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43093 = arguments.length;
switch (G__43093) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43091_SHARP_){
if(cljs.core.truth_((p1__43091_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43091_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43091_SHARP_.call(null,topic)))){
return p1__43091_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43091_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43094 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43095){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43095 = meta43095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43096,meta43095__$1){
var self__ = this;
var _43096__$1 = this;
return (new cljs.core.async.t_cljs$core$async43094(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43095__$1));
}));

(cljs.core.async.t_cljs$core$async43094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43096){
var self__ = this;
var _43096__$1 = this;
return self__.meta43095;
}));

(cljs.core.async.t_cljs$core$async43094.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43094.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43094.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43094.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async43094.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43094.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43095","meta43095",1249029657,null)], null);
}));

(cljs.core.async.t_cljs$core$async43094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43094");

(cljs.core.async.t_cljs$core$async43094.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43094.
 */
cljs.core.async.__GT_t_cljs$core$async43094 = (function cljs$core$async$__GT_t_cljs$core$async43094(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43095){
return (new cljs.core.async.t_cljs$core$async43094(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43095));
});

}

return (new cljs.core.async.t_cljs$core$async43094(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42152__auto___44189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43168){
var state_val_43169 = (state_43168[(1)]);
if((state_val_43169 === (7))){
var inst_43164 = (state_43168[(2)]);
var state_43168__$1 = state_43168;
var statearr_43170_44190 = state_43168__$1;
(statearr_43170_44190[(2)] = inst_43164);

(statearr_43170_44190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (20))){
var state_43168__$1 = state_43168;
var statearr_43171_44191 = state_43168__$1;
(statearr_43171_44191[(2)] = null);

(statearr_43171_44191[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (1))){
var state_43168__$1 = state_43168;
var statearr_43172_44192 = state_43168__$1;
(statearr_43172_44192[(2)] = null);

(statearr_43172_44192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (24))){
var inst_43147 = (state_43168[(7)]);
var inst_43156 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43147);
var state_43168__$1 = state_43168;
var statearr_43173_44193 = state_43168__$1;
(statearr_43173_44193[(2)] = inst_43156);

(statearr_43173_44193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (4))){
var inst_43099 = (state_43168[(8)]);
var inst_43099__$1 = (state_43168[(2)]);
var inst_43100 = (inst_43099__$1 == null);
var state_43168__$1 = (function (){var statearr_43174 = state_43168;
(statearr_43174[(8)] = inst_43099__$1);

return statearr_43174;
})();
if(cljs.core.truth_(inst_43100)){
var statearr_43175_44194 = state_43168__$1;
(statearr_43175_44194[(1)] = (5));

} else {
var statearr_43176_44195 = state_43168__$1;
(statearr_43176_44195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (15))){
var inst_43141 = (state_43168[(2)]);
var state_43168__$1 = state_43168;
var statearr_43177_44196 = state_43168__$1;
(statearr_43177_44196[(2)] = inst_43141);

(statearr_43177_44196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (21))){
var inst_43161 = (state_43168[(2)]);
var state_43168__$1 = (function (){var statearr_43178 = state_43168;
(statearr_43178[(9)] = inst_43161);

return statearr_43178;
})();
var statearr_43179_44197 = state_43168__$1;
(statearr_43179_44197[(2)] = null);

(statearr_43179_44197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (13))){
var inst_43123 = (state_43168[(10)]);
var inst_43125 = cljs.core.chunked_seq_QMARK_(inst_43123);
var state_43168__$1 = state_43168;
if(inst_43125){
var statearr_43180_44198 = state_43168__$1;
(statearr_43180_44198[(1)] = (16));

} else {
var statearr_43181_44199 = state_43168__$1;
(statearr_43181_44199[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (22))){
var inst_43153 = (state_43168[(2)]);
var state_43168__$1 = state_43168;
if(cljs.core.truth_(inst_43153)){
var statearr_43182_44200 = state_43168__$1;
(statearr_43182_44200[(1)] = (23));

} else {
var statearr_43183_44201 = state_43168__$1;
(statearr_43183_44201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (6))){
var inst_43099 = (state_43168[(8)]);
var inst_43147 = (state_43168[(7)]);
var inst_43149 = (state_43168[(11)]);
var inst_43147__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43099) : topic_fn.call(null,inst_43099));
var inst_43148 = cljs.core.deref(mults);
var inst_43149__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43148,inst_43147__$1);
var state_43168__$1 = (function (){var statearr_43184 = state_43168;
(statearr_43184[(7)] = inst_43147__$1);

(statearr_43184[(11)] = inst_43149__$1);

return statearr_43184;
})();
if(cljs.core.truth_(inst_43149__$1)){
var statearr_43185_44202 = state_43168__$1;
(statearr_43185_44202[(1)] = (19));

} else {
var statearr_43186_44203 = state_43168__$1;
(statearr_43186_44203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (25))){
var inst_43158 = (state_43168[(2)]);
var state_43168__$1 = state_43168;
var statearr_43187_44204 = state_43168__$1;
(statearr_43187_44204[(2)] = inst_43158);

(statearr_43187_44204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (17))){
var inst_43123 = (state_43168[(10)]);
var inst_43132 = cljs.core.first(inst_43123);
var inst_43133 = cljs.core.async.muxch_STAR_(inst_43132);
var inst_43134 = cljs.core.async.close_BANG_(inst_43133);
var inst_43135 = cljs.core.next(inst_43123);
var inst_43109 = inst_43135;
var inst_43110 = null;
var inst_43111 = (0);
var inst_43112 = (0);
var state_43168__$1 = (function (){var statearr_43188 = state_43168;
(statearr_43188[(12)] = inst_43134);

(statearr_43188[(13)] = inst_43109);

(statearr_43188[(14)] = inst_43110);

(statearr_43188[(15)] = inst_43111);

(statearr_43188[(16)] = inst_43112);

return statearr_43188;
})();
var statearr_43189_44205 = state_43168__$1;
(statearr_43189_44205[(2)] = null);

(statearr_43189_44205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (3))){
var inst_43166 = (state_43168[(2)]);
var state_43168__$1 = state_43168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43168__$1,inst_43166);
} else {
if((state_val_43169 === (12))){
var inst_43143 = (state_43168[(2)]);
var state_43168__$1 = state_43168;
var statearr_43190_44206 = state_43168__$1;
(statearr_43190_44206[(2)] = inst_43143);

(statearr_43190_44206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (2))){
var state_43168__$1 = state_43168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43168__$1,(4),ch);
} else {
if((state_val_43169 === (23))){
var state_43168__$1 = state_43168;
var statearr_43191_44207 = state_43168__$1;
(statearr_43191_44207[(2)] = null);

(statearr_43191_44207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (19))){
var inst_43149 = (state_43168[(11)]);
var inst_43099 = (state_43168[(8)]);
var inst_43151 = cljs.core.async.muxch_STAR_(inst_43149);
var state_43168__$1 = state_43168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43168__$1,(22),inst_43151,inst_43099);
} else {
if((state_val_43169 === (11))){
var inst_43109 = (state_43168[(13)]);
var inst_43123 = (state_43168[(10)]);
var inst_43123__$1 = cljs.core.seq(inst_43109);
var state_43168__$1 = (function (){var statearr_43192 = state_43168;
(statearr_43192[(10)] = inst_43123__$1);

return statearr_43192;
})();
if(inst_43123__$1){
var statearr_43193_44208 = state_43168__$1;
(statearr_43193_44208[(1)] = (13));

} else {
var statearr_43194_44210 = state_43168__$1;
(statearr_43194_44210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (9))){
var inst_43145 = (state_43168[(2)]);
var state_43168__$1 = state_43168;
var statearr_43195_44211 = state_43168__$1;
(statearr_43195_44211[(2)] = inst_43145);

(statearr_43195_44211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (5))){
var inst_43106 = cljs.core.deref(mults);
var inst_43107 = cljs.core.vals(inst_43106);
var inst_43108 = cljs.core.seq(inst_43107);
var inst_43109 = inst_43108;
var inst_43110 = null;
var inst_43111 = (0);
var inst_43112 = (0);
var state_43168__$1 = (function (){var statearr_43196 = state_43168;
(statearr_43196[(13)] = inst_43109);

(statearr_43196[(14)] = inst_43110);

(statearr_43196[(15)] = inst_43111);

(statearr_43196[(16)] = inst_43112);

return statearr_43196;
})();
var statearr_43197_44220 = state_43168__$1;
(statearr_43197_44220[(2)] = null);

(statearr_43197_44220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (14))){
var state_43168__$1 = state_43168;
var statearr_43201_44221 = state_43168__$1;
(statearr_43201_44221[(2)] = null);

(statearr_43201_44221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (16))){
var inst_43123 = (state_43168[(10)]);
var inst_43127 = cljs.core.chunk_first(inst_43123);
var inst_43128 = cljs.core.chunk_rest(inst_43123);
var inst_43129 = cljs.core.count(inst_43127);
var inst_43109 = inst_43128;
var inst_43110 = inst_43127;
var inst_43111 = inst_43129;
var inst_43112 = (0);
var state_43168__$1 = (function (){var statearr_43202 = state_43168;
(statearr_43202[(13)] = inst_43109);

(statearr_43202[(14)] = inst_43110);

(statearr_43202[(15)] = inst_43111);

(statearr_43202[(16)] = inst_43112);

return statearr_43202;
})();
var statearr_43203_44222 = state_43168__$1;
(statearr_43203_44222[(2)] = null);

(statearr_43203_44222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (10))){
var inst_43110 = (state_43168[(14)]);
var inst_43112 = (state_43168[(16)]);
var inst_43109 = (state_43168[(13)]);
var inst_43111 = (state_43168[(15)]);
var inst_43117 = cljs.core._nth(inst_43110,inst_43112);
var inst_43118 = cljs.core.async.muxch_STAR_(inst_43117);
var inst_43119 = cljs.core.async.close_BANG_(inst_43118);
var inst_43120 = (inst_43112 + (1));
var tmp43198 = inst_43109;
var tmp43199 = inst_43110;
var tmp43200 = inst_43111;
var inst_43109__$1 = tmp43198;
var inst_43110__$1 = tmp43199;
var inst_43111__$1 = tmp43200;
var inst_43112__$1 = inst_43120;
var state_43168__$1 = (function (){var statearr_43204 = state_43168;
(statearr_43204[(17)] = inst_43119);

(statearr_43204[(13)] = inst_43109__$1);

(statearr_43204[(14)] = inst_43110__$1);

(statearr_43204[(15)] = inst_43111__$1);

(statearr_43204[(16)] = inst_43112__$1);

return statearr_43204;
})();
var statearr_43205_44224 = state_43168__$1;
(statearr_43205_44224[(2)] = null);

(statearr_43205_44224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (18))){
var inst_43138 = (state_43168[(2)]);
var state_43168__$1 = state_43168;
var statearr_43206_44225 = state_43168__$1;
(statearr_43206_44225[(2)] = inst_43138);

(statearr_43206_44225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43169 === (8))){
var inst_43112 = (state_43168[(16)]);
var inst_43111 = (state_43168[(15)]);
var inst_43114 = (inst_43112 < inst_43111);
var inst_43115 = inst_43114;
var state_43168__$1 = state_43168;
if(cljs.core.truth_(inst_43115)){
var statearr_43207_44226 = state_43168__$1;
(statearr_43207_44226[(1)] = (10));

} else {
var statearr_43208_44227 = state_43168__$1;
(statearr_43208_44227[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_43212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43212[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_43212[(1)] = (1));

return statearr_43212;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_43168){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43168);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43213){var ex__42124__auto__ = e43213;
var statearr_43214_44228 = state_43168;
(statearr_43214_44228[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43168[(4)]))){
var statearr_43215_44229 = state_43168;
(statearr_43215_44229[(1)] = cljs.core.first((state_43168[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44230 = state_43168;
state_43168 = G__44230;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_43168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_43168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43216 = f__42153__auto__();
(statearr_43216[(6)] = c__42152__auto___44189);

return statearr_43216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43218 = arguments.length;
switch (G__43218) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43223 = arguments.length;
switch (G__43223) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43231 = arguments.length;
switch (G__43231) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__42152__auto___44239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43277){
var state_val_43278 = (state_43277[(1)]);
if((state_val_43278 === (7))){
var state_43277__$1 = state_43277;
var statearr_43279_44241 = state_43277__$1;
(statearr_43279_44241[(2)] = null);

(statearr_43279_44241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (1))){
var state_43277__$1 = state_43277;
var statearr_43280_44242 = state_43277__$1;
(statearr_43280_44242[(2)] = null);

(statearr_43280_44242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (4))){
var inst_43238 = (state_43277[(7)]);
var inst_43237 = (state_43277[(8)]);
var inst_43240 = (inst_43238 < inst_43237);
var state_43277__$1 = state_43277;
if(cljs.core.truth_(inst_43240)){
var statearr_43281_44249 = state_43277__$1;
(statearr_43281_44249[(1)] = (6));

} else {
var statearr_43282_44253 = state_43277__$1;
(statearr_43282_44253[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (15))){
var inst_43263 = (state_43277[(9)]);
var inst_43268 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43263);
var state_43277__$1 = state_43277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43277__$1,(17),out,inst_43268);
} else {
if((state_val_43278 === (13))){
var inst_43263 = (state_43277[(9)]);
var inst_43263__$1 = (state_43277[(2)]);
var inst_43264 = cljs.core.some(cljs.core.nil_QMARK_,inst_43263__$1);
var state_43277__$1 = (function (){var statearr_43283 = state_43277;
(statearr_43283[(9)] = inst_43263__$1);

return statearr_43283;
})();
if(cljs.core.truth_(inst_43264)){
var statearr_43284_44256 = state_43277__$1;
(statearr_43284_44256[(1)] = (14));

} else {
var statearr_43285_44257 = state_43277__$1;
(statearr_43285_44257[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (6))){
var state_43277__$1 = state_43277;
var statearr_43286_44258 = state_43277__$1;
(statearr_43286_44258[(2)] = null);

(statearr_43286_44258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (17))){
var inst_43270 = (state_43277[(2)]);
var state_43277__$1 = (function (){var statearr_43288 = state_43277;
(statearr_43288[(10)] = inst_43270);

return statearr_43288;
})();
var statearr_43289_44261 = state_43277__$1;
(statearr_43289_44261[(2)] = null);

(statearr_43289_44261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (3))){
var inst_43275 = (state_43277[(2)]);
var state_43277__$1 = state_43277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43277__$1,inst_43275);
} else {
if((state_val_43278 === (12))){
var _ = (function (){var statearr_43290 = state_43277;
(statearr_43290[(4)] = cljs.core.rest((state_43277[(4)])));

return statearr_43290;
})();
var state_43277__$1 = state_43277;
var ex43287 = (state_43277__$1[(2)]);
var statearr_43291_44262 = state_43277__$1;
(statearr_43291_44262[(5)] = ex43287);


if((ex43287 instanceof Object)){
var statearr_43292_44263 = state_43277__$1;
(statearr_43292_44263[(1)] = (11));

(statearr_43292_44263[(5)] = null);

} else {
throw ex43287;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (2))){
var inst_43236 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43237 = cnt;
var inst_43238 = (0);
var state_43277__$1 = (function (){var statearr_43293 = state_43277;
(statearr_43293[(11)] = inst_43236);

(statearr_43293[(8)] = inst_43237);

(statearr_43293[(7)] = inst_43238);

return statearr_43293;
})();
var statearr_43294_44264 = state_43277__$1;
(statearr_43294_44264[(2)] = null);

(statearr_43294_44264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (11))){
var inst_43242 = (state_43277[(2)]);
var inst_43243 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43277__$1 = (function (){var statearr_43295 = state_43277;
(statearr_43295[(12)] = inst_43242);

return statearr_43295;
})();
var statearr_43296_44265 = state_43277__$1;
(statearr_43296_44265[(2)] = inst_43243);

(statearr_43296_44265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (9))){
var inst_43238 = (state_43277[(7)]);
var _ = (function (){var statearr_43297 = state_43277;
(statearr_43297[(4)] = cljs.core.cons((12),(state_43277[(4)])));

return statearr_43297;
})();
var inst_43249 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43238) : chs__$1.call(null,inst_43238));
var inst_43250 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43238) : done.call(null,inst_43238));
var inst_43251 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43249,inst_43250);
var ___$1 = (function (){var statearr_43298 = state_43277;
(statearr_43298[(4)] = cljs.core.rest((state_43277[(4)])));

return statearr_43298;
})();
var state_43277__$1 = state_43277;
var statearr_43299_44266 = state_43277__$1;
(statearr_43299_44266[(2)] = inst_43251);

(statearr_43299_44266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (5))){
var inst_43261 = (state_43277[(2)]);
var state_43277__$1 = (function (){var statearr_43300 = state_43277;
(statearr_43300[(13)] = inst_43261);

return statearr_43300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43277__$1,(13),dchan);
} else {
if((state_val_43278 === (14))){
var inst_43266 = cljs.core.async.close_BANG_(out);
var state_43277__$1 = state_43277;
var statearr_43301_44267 = state_43277__$1;
(statearr_43301_44267[(2)] = inst_43266);

(statearr_43301_44267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (16))){
var inst_43273 = (state_43277[(2)]);
var state_43277__$1 = state_43277;
var statearr_43302_44268 = state_43277__$1;
(statearr_43302_44268[(2)] = inst_43273);

(statearr_43302_44268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (10))){
var inst_43238 = (state_43277[(7)]);
var inst_43254 = (state_43277[(2)]);
var inst_43255 = (inst_43238 + (1));
var inst_43238__$1 = inst_43255;
var state_43277__$1 = (function (){var statearr_43303 = state_43277;
(statearr_43303[(14)] = inst_43254);

(statearr_43303[(7)] = inst_43238__$1);

return statearr_43303;
})();
var statearr_43304_44269 = state_43277__$1;
(statearr_43304_44269[(2)] = null);

(statearr_43304_44269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43278 === (8))){
var inst_43259 = (state_43277[(2)]);
var state_43277__$1 = state_43277;
var statearr_43305_44274 = state_43277__$1;
(statearr_43305_44274[(2)] = inst_43259);

(statearr_43305_44274[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_43306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43306[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_43306[(1)] = (1));

return statearr_43306;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_43277){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43277);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43307){var ex__42124__auto__ = e43307;
var statearr_43308_44276 = state_43277;
(statearr_43308_44276[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43277[(4)]))){
var statearr_43309_44277 = state_43277;
(statearr_43309_44277[(1)] = cljs.core.first((state_43277[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44278 = state_43277;
state_43277 = G__44278;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_43277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_43277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43310 = f__42153__auto__();
(statearr_43310[(6)] = c__42152__auto___44239);

return statearr_43310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43313 = arguments.length;
switch (G__43313) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42152__auto___44280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43345){
var state_val_43346 = (state_43345[(1)]);
if((state_val_43346 === (7))){
var inst_43324 = (state_43345[(7)]);
var inst_43325 = (state_43345[(8)]);
var inst_43324__$1 = (state_43345[(2)]);
var inst_43325__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43324__$1,(0),null);
var inst_43326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43324__$1,(1),null);
var inst_43327 = (inst_43325__$1 == null);
var state_43345__$1 = (function (){var statearr_43347 = state_43345;
(statearr_43347[(7)] = inst_43324__$1);

(statearr_43347[(8)] = inst_43325__$1);

(statearr_43347[(9)] = inst_43326);

return statearr_43347;
})();
if(cljs.core.truth_(inst_43327)){
var statearr_43348_44281 = state_43345__$1;
(statearr_43348_44281[(1)] = (8));

} else {
var statearr_43349_44282 = state_43345__$1;
(statearr_43349_44282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43346 === (1))){
var inst_43314 = cljs.core.vec(chs);
var inst_43315 = inst_43314;
var state_43345__$1 = (function (){var statearr_43350 = state_43345;
(statearr_43350[(10)] = inst_43315);

return statearr_43350;
})();
var statearr_43351_44283 = state_43345__$1;
(statearr_43351_44283[(2)] = null);

(statearr_43351_44283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43346 === (4))){
var inst_43315 = (state_43345[(10)]);
var state_43345__$1 = state_43345;
return cljs.core.async.ioc_alts_BANG_(state_43345__$1,(7),inst_43315);
} else {
if((state_val_43346 === (6))){
var inst_43341 = (state_43345[(2)]);
var state_43345__$1 = state_43345;
var statearr_43352_44284 = state_43345__$1;
(statearr_43352_44284[(2)] = inst_43341);

(statearr_43352_44284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43346 === (3))){
var inst_43343 = (state_43345[(2)]);
var state_43345__$1 = state_43345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43345__$1,inst_43343);
} else {
if((state_val_43346 === (2))){
var inst_43315 = (state_43345[(10)]);
var inst_43317 = cljs.core.count(inst_43315);
var inst_43318 = (inst_43317 > (0));
var state_43345__$1 = state_43345;
if(cljs.core.truth_(inst_43318)){
var statearr_43354_44285 = state_43345__$1;
(statearr_43354_44285[(1)] = (4));

} else {
var statearr_43355_44286 = state_43345__$1;
(statearr_43355_44286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43346 === (11))){
var inst_43315 = (state_43345[(10)]);
var inst_43334 = (state_43345[(2)]);
var tmp43353 = inst_43315;
var inst_43315__$1 = tmp43353;
var state_43345__$1 = (function (){var statearr_43356 = state_43345;
(statearr_43356[(11)] = inst_43334);

(statearr_43356[(10)] = inst_43315__$1);

return statearr_43356;
})();
var statearr_43357_44287 = state_43345__$1;
(statearr_43357_44287[(2)] = null);

(statearr_43357_44287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43346 === (9))){
var inst_43325 = (state_43345[(8)]);
var state_43345__$1 = state_43345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43345__$1,(11),out,inst_43325);
} else {
if((state_val_43346 === (5))){
var inst_43339 = cljs.core.async.close_BANG_(out);
var state_43345__$1 = state_43345;
var statearr_43359_44288 = state_43345__$1;
(statearr_43359_44288[(2)] = inst_43339);

(statearr_43359_44288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43346 === (10))){
var inst_43337 = (state_43345[(2)]);
var state_43345__$1 = state_43345;
var statearr_43360_44289 = state_43345__$1;
(statearr_43360_44289[(2)] = inst_43337);

(statearr_43360_44289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43346 === (8))){
var inst_43315 = (state_43345[(10)]);
var inst_43324 = (state_43345[(7)]);
var inst_43325 = (state_43345[(8)]);
var inst_43326 = (state_43345[(9)]);
var inst_43329 = (function (){var cs = inst_43315;
var vec__43320 = inst_43324;
var v = inst_43325;
var c = inst_43326;
return (function (p1__43311_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43311_SHARP_);
});
})();
var inst_43330 = cljs.core.filterv(inst_43329,inst_43315);
var inst_43315__$1 = inst_43330;
var state_43345__$1 = (function (){var statearr_43361 = state_43345;
(statearr_43361[(10)] = inst_43315__$1);

return statearr_43361;
})();
var statearr_43362_44290 = state_43345__$1;
(statearr_43362_44290[(2)] = null);

(statearr_43362_44290[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_43363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43363[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_43363[(1)] = (1));

return statearr_43363;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_43345){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43345);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43364){var ex__42124__auto__ = e43364;
var statearr_43365_44291 = state_43345;
(statearr_43365_44291[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43345[(4)]))){
var statearr_43366_44292 = state_43345;
(statearr_43366_44292[(1)] = cljs.core.first((state_43345[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44293 = state_43345;
state_43345 = G__44293;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_43345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_43345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43367 = f__42153__auto__();
(statearr_43367[(6)] = c__42152__auto___44280);

return statearr_43367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43369 = arguments.length;
switch (G__43369) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42152__auto___44295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43393){
var state_val_43394 = (state_43393[(1)]);
if((state_val_43394 === (7))){
var inst_43375 = (state_43393[(7)]);
var inst_43375__$1 = (state_43393[(2)]);
var inst_43376 = (inst_43375__$1 == null);
var inst_43377 = cljs.core.not(inst_43376);
var state_43393__$1 = (function (){var statearr_43395 = state_43393;
(statearr_43395[(7)] = inst_43375__$1);

return statearr_43395;
})();
if(inst_43377){
var statearr_43398_44296 = state_43393__$1;
(statearr_43398_44296[(1)] = (8));

} else {
var statearr_43399_44297 = state_43393__$1;
(statearr_43399_44297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43394 === (1))){
var inst_43370 = (0);
var state_43393__$1 = (function (){var statearr_43402 = state_43393;
(statearr_43402[(8)] = inst_43370);

return statearr_43402;
})();
var statearr_43403_44299 = state_43393__$1;
(statearr_43403_44299[(2)] = null);

(statearr_43403_44299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43394 === (4))){
var state_43393__$1 = state_43393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43393__$1,(7),ch);
} else {
if((state_val_43394 === (6))){
var inst_43388 = (state_43393[(2)]);
var state_43393__$1 = state_43393;
var statearr_43404_44300 = state_43393__$1;
(statearr_43404_44300[(2)] = inst_43388);

(statearr_43404_44300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43394 === (3))){
var inst_43390 = (state_43393[(2)]);
var inst_43391 = cljs.core.async.close_BANG_(out);
var state_43393__$1 = (function (){var statearr_43405 = state_43393;
(statearr_43405[(9)] = inst_43390);

return statearr_43405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43393__$1,inst_43391);
} else {
if((state_val_43394 === (2))){
var inst_43370 = (state_43393[(8)]);
var inst_43372 = (inst_43370 < n);
var state_43393__$1 = state_43393;
if(cljs.core.truth_(inst_43372)){
var statearr_43408_44302 = state_43393__$1;
(statearr_43408_44302[(1)] = (4));

} else {
var statearr_43409_44303 = state_43393__$1;
(statearr_43409_44303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43394 === (11))){
var inst_43370 = (state_43393[(8)]);
var inst_43380 = (state_43393[(2)]);
var inst_43381 = (inst_43370 + (1));
var inst_43370__$1 = inst_43381;
var state_43393__$1 = (function (){var statearr_43410 = state_43393;
(statearr_43410[(10)] = inst_43380);

(statearr_43410[(8)] = inst_43370__$1);

return statearr_43410;
})();
var statearr_43411_44304 = state_43393__$1;
(statearr_43411_44304[(2)] = null);

(statearr_43411_44304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43394 === (9))){
var state_43393__$1 = state_43393;
var statearr_43412_44305 = state_43393__$1;
(statearr_43412_44305[(2)] = null);

(statearr_43412_44305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43394 === (5))){
var state_43393__$1 = state_43393;
var statearr_43413_44306 = state_43393__$1;
(statearr_43413_44306[(2)] = null);

(statearr_43413_44306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43394 === (10))){
var inst_43385 = (state_43393[(2)]);
var state_43393__$1 = state_43393;
var statearr_43414_44307 = state_43393__$1;
(statearr_43414_44307[(2)] = inst_43385);

(statearr_43414_44307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43394 === (8))){
var inst_43375 = (state_43393[(7)]);
var state_43393__$1 = state_43393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43393__$1,(11),out,inst_43375);
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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_43415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43415[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_43415[(1)] = (1));

return statearr_43415;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_43393){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43393);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43420){var ex__42124__auto__ = e43420;
var statearr_43421_44308 = state_43393;
(statearr_43421_44308[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43393[(4)]))){
var statearr_43422_44309 = state_43393;
(statearr_43422_44309[(1)] = cljs.core.first((state_43393[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44310 = state_43393;
state_43393 = G__44310;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_43393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_43393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43423 = f__42153__auto__();
(statearr_43423[(6)] = c__42152__auto___44295);

return statearr_43423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43425 = (function (f,ch,meta43426){
this.f = f;
this.ch = ch;
this.meta43426 = meta43426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43427,meta43426__$1){
var self__ = this;
var _43427__$1 = this;
return (new cljs.core.async.t_cljs$core$async43425(self__.f,self__.ch,meta43426__$1));
}));

(cljs.core.async.t_cljs$core$async43425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43427){
var self__ = this;
var _43427__$1 = this;
return self__.meta43426;
}));

(cljs.core.async.t_cljs$core$async43425.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43425.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43425.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43428 = (function (f,ch,meta43426,_,fn1,meta43429){
this.f = f;
this.ch = ch;
this.meta43426 = meta43426;
this._ = _;
this.fn1 = fn1;
this.meta43429 = meta43429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43430,meta43429__$1){
var self__ = this;
var _43430__$1 = this;
return (new cljs.core.async.t_cljs$core$async43428(self__.f,self__.ch,self__.meta43426,self__._,self__.fn1,meta43429__$1));
}));

(cljs.core.async.t_cljs$core$async43428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43430){
var self__ = this;
var _43430__$1 = this;
return self__.meta43429;
}));

(cljs.core.async.t_cljs$core$async43428.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43424_SHARP_){
var G__43439 = (((p1__43424_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43424_SHARP_) : self__.f.call(null,p1__43424_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43439) : f1.call(null,G__43439));
});
}));

(cljs.core.async.t_cljs$core$async43428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43426","meta43426",637267988,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43425","cljs.core.async/t_cljs$core$async43425",2017704976,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43429","meta43429",-1910983230,null)], null);
}));

(cljs.core.async.t_cljs$core$async43428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43428");

(cljs.core.async.t_cljs$core$async43428.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43428.
 */
cljs.core.async.__GT_t_cljs$core$async43428 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43428(f__$1,ch__$1,meta43426__$1,___$2,fn1__$1,meta43429){
return (new cljs.core.async.t_cljs$core$async43428(f__$1,ch__$1,meta43426__$1,___$2,fn1__$1,meta43429));
});

}

return (new cljs.core.async.t_cljs$core$async43428(self__.f,self__.ch,self__.meta43426,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43440 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43440) : self__.f.call(null,G__43440));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43425.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43426","meta43426",637267988,null)], null);
}));

(cljs.core.async.t_cljs$core$async43425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43425");

(cljs.core.async.t_cljs$core$async43425.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43425.
 */
cljs.core.async.__GT_t_cljs$core$async43425 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43425(f__$1,ch__$1,meta43426){
return (new cljs.core.async.t_cljs$core$async43425(f__$1,ch__$1,meta43426));
});

}

return (new cljs.core.async.t_cljs$core$async43425(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43442 = (function (f,ch,meta43443){
this.f = f;
this.ch = ch;
this.meta43443 = meta43443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43444,meta43443__$1){
var self__ = this;
var _43444__$1 = this;
return (new cljs.core.async.t_cljs$core$async43442(self__.f,self__.ch,meta43443__$1));
}));

(cljs.core.async.t_cljs$core$async43442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43444){
var self__ = this;
var _43444__$1 = this;
return self__.meta43443;
}));

(cljs.core.async.t_cljs$core$async43442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43443","meta43443",1145874418,null)], null);
}));

(cljs.core.async.t_cljs$core$async43442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43442");

(cljs.core.async.t_cljs$core$async43442.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43442.
 */
cljs.core.async.__GT_t_cljs$core$async43442 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43442(f__$1,ch__$1,meta43443){
return (new cljs.core.async.t_cljs$core$async43442(f__$1,ch__$1,meta43443));
});

}

return (new cljs.core.async.t_cljs$core$async43442(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43452 = (function (p,ch,meta43453){
this.p = p;
this.ch = ch;
this.meta43453 = meta43453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43454,meta43453__$1){
var self__ = this;
var _43454__$1 = this;
return (new cljs.core.async.t_cljs$core$async43452(self__.p,self__.ch,meta43453__$1));
}));

(cljs.core.async.t_cljs$core$async43452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43454){
var self__ = this;
var _43454__$1 = this;
return self__.meta43453;
}));

(cljs.core.async.t_cljs$core$async43452.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43452.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43452.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43452.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43453","meta43453",-1036323466,null)], null);
}));

(cljs.core.async.t_cljs$core$async43452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43452");

(cljs.core.async.t_cljs$core$async43452.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43452.
 */
cljs.core.async.__GT_t_cljs$core$async43452 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43452(p__$1,ch__$1,meta43453){
return (new cljs.core.async.t_cljs$core$async43452(p__$1,ch__$1,meta43453));
});

}

return (new cljs.core.async.t_cljs$core$async43452(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43461 = arguments.length;
switch (G__43461) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42152__auto___44320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43482){
var state_val_43483 = (state_43482[(1)]);
if((state_val_43483 === (7))){
var inst_43478 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
var statearr_43484_44321 = state_43482__$1;
(statearr_43484_44321[(2)] = inst_43478);

(statearr_43484_44321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (1))){
var state_43482__$1 = state_43482;
var statearr_43485_44322 = state_43482__$1;
(statearr_43485_44322[(2)] = null);

(statearr_43485_44322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (4))){
var inst_43464 = (state_43482[(7)]);
var inst_43464__$1 = (state_43482[(2)]);
var inst_43465 = (inst_43464__$1 == null);
var state_43482__$1 = (function (){var statearr_43486 = state_43482;
(statearr_43486[(7)] = inst_43464__$1);

return statearr_43486;
})();
if(cljs.core.truth_(inst_43465)){
var statearr_43487_44323 = state_43482__$1;
(statearr_43487_44323[(1)] = (5));

} else {
var statearr_43488_44324 = state_43482__$1;
(statearr_43488_44324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (6))){
var inst_43464 = (state_43482[(7)]);
var inst_43469 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43464) : p.call(null,inst_43464));
var state_43482__$1 = state_43482;
if(cljs.core.truth_(inst_43469)){
var statearr_43489_44325 = state_43482__$1;
(statearr_43489_44325[(1)] = (8));

} else {
var statearr_43490_44326 = state_43482__$1;
(statearr_43490_44326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (3))){
var inst_43480 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43482__$1,inst_43480);
} else {
if((state_val_43483 === (2))){
var state_43482__$1 = state_43482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43482__$1,(4),ch);
} else {
if((state_val_43483 === (11))){
var inst_43472 = (state_43482[(2)]);
var state_43482__$1 = state_43482;
var statearr_43491_44327 = state_43482__$1;
(statearr_43491_44327[(2)] = inst_43472);

(statearr_43491_44327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (9))){
var state_43482__$1 = state_43482;
var statearr_43493_44328 = state_43482__$1;
(statearr_43493_44328[(2)] = null);

(statearr_43493_44328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (5))){
var inst_43467 = cljs.core.async.close_BANG_(out);
var state_43482__$1 = state_43482;
var statearr_43498_44329 = state_43482__$1;
(statearr_43498_44329[(2)] = inst_43467);

(statearr_43498_44329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (10))){
var inst_43475 = (state_43482[(2)]);
var state_43482__$1 = (function (){var statearr_43499 = state_43482;
(statearr_43499[(8)] = inst_43475);

return statearr_43499;
})();
var statearr_43500_44330 = state_43482__$1;
(statearr_43500_44330[(2)] = null);

(statearr_43500_44330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43483 === (8))){
var inst_43464 = (state_43482[(7)]);
var state_43482__$1 = state_43482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43482__$1,(11),out,inst_43464);
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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_43504 = [null,null,null,null,null,null,null,null,null];
(statearr_43504[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_43504[(1)] = (1));

return statearr_43504;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_43482){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43482);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43506){var ex__42124__auto__ = e43506;
var statearr_43507_44331 = state_43482;
(statearr_43507_44331[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43482[(4)]))){
var statearr_43508_44332 = state_43482;
(statearr_43508_44332[(1)] = cljs.core.first((state_43482[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44333 = state_43482;
state_43482 = G__44333;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_43482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_43482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43509 = f__42153__auto__();
(statearr_43509[(6)] = c__42152__auto___44320);

return statearr_43509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43511 = arguments.length;
switch (G__43511) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43575){
var state_val_43576 = (state_43575[(1)]);
if((state_val_43576 === (7))){
var inst_43571 = (state_43575[(2)]);
var state_43575__$1 = state_43575;
var statearr_43577_44335 = state_43575__$1;
(statearr_43577_44335[(2)] = inst_43571);

(statearr_43577_44335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (20))){
var inst_43541 = (state_43575[(7)]);
var inst_43552 = (state_43575[(2)]);
var inst_43553 = cljs.core.next(inst_43541);
var inst_43527 = inst_43553;
var inst_43528 = null;
var inst_43529 = (0);
var inst_43530 = (0);
var state_43575__$1 = (function (){var statearr_43578 = state_43575;
(statearr_43578[(8)] = inst_43552);

(statearr_43578[(9)] = inst_43527);

(statearr_43578[(10)] = inst_43528);

(statearr_43578[(11)] = inst_43529);

(statearr_43578[(12)] = inst_43530);

return statearr_43578;
})();
var statearr_43579_44336 = state_43575__$1;
(statearr_43579_44336[(2)] = null);

(statearr_43579_44336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (1))){
var state_43575__$1 = state_43575;
var statearr_43587_44337 = state_43575__$1;
(statearr_43587_44337[(2)] = null);

(statearr_43587_44337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (4))){
var inst_43516 = (state_43575[(13)]);
var inst_43516__$1 = (state_43575[(2)]);
var inst_43517 = (inst_43516__$1 == null);
var state_43575__$1 = (function (){var statearr_43588 = state_43575;
(statearr_43588[(13)] = inst_43516__$1);

return statearr_43588;
})();
if(cljs.core.truth_(inst_43517)){
var statearr_43589_44338 = state_43575__$1;
(statearr_43589_44338[(1)] = (5));

} else {
var statearr_43590_44339 = state_43575__$1;
(statearr_43590_44339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (15))){
var state_43575__$1 = state_43575;
var statearr_43594_44340 = state_43575__$1;
(statearr_43594_44340[(2)] = null);

(statearr_43594_44340[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (21))){
var state_43575__$1 = state_43575;
var statearr_43595_44341 = state_43575__$1;
(statearr_43595_44341[(2)] = null);

(statearr_43595_44341[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (13))){
var inst_43530 = (state_43575[(12)]);
var inst_43527 = (state_43575[(9)]);
var inst_43528 = (state_43575[(10)]);
var inst_43529 = (state_43575[(11)]);
var inst_43537 = (state_43575[(2)]);
var inst_43538 = (inst_43530 + (1));
var tmp43591 = inst_43527;
var tmp43592 = inst_43528;
var tmp43593 = inst_43529;
var inst_43527__$1 = tmp43591;
var inst_43528__$1 = tmp43592;
var inst_43529__$1 = tmp43593;
var inst_43530__$1 = inst_43538;
var state_43575__$1 = (function (){var statearr_43596 = state_43575;
(statearr_43596[(14)] = inst_43537);

(statearr_43596[(9)] = inst_43527__$1);

(statearr_43596[(10)] = inst_43528__$1);

(statearr_43596[(11)] = inst_43529__$1);

(statearr_43596[(12)] = inst_43530__$1);

return statearr_43596;
})();
var statearr_43597_44342 = state_43575__$1;
(statearr_43597_44342[(2)] = null);

(statearr_43597_44342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (22))){
var state_43575__$1 = state_43575;
var statearr_43598_44343 = state_43575__$1;
(statearr_43598_44343[(2)] = null);

(statearr_43598_44343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (6))){
var inst_43516 = (state_43575[(13)]);
var inst_43525 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43516) : f.call(null,inst_43516));
var inst_43526 = cljs.core.seq(inst_43525);
var inst_43527 = inst_43526;
var inst_43528 = null;
var inst_43529 = (0);
var inst_43530 = (0);
var state_43575__$1 = (function (){var statearr_43599 = state_43575;
(statearr_43599[(9)] = inst_43527);

(statearr_43599[(10)] = inst_43528);

(statearr_43599[(11)] = inst_43529);

(statearr_43599[(12)] = inst_43530);

return statearr_43599;
})();
var statearr_43600_44344 = state_43575__$1;
(statearr_43600_44344[(2)] = null);

(statearr_43600_44344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (17))){
var inst_43541 = (state_43575[(7)]);
var inst_43545 = cljs.core.chunk_first(inst_43541);
var inst_43546 = cljs.core.chunk_rest(inst_43541);
var inst_43547 = cljs.core.count(inst_43545);
var inst_43527 = inst_43546;
var inst_43528 = inst_43545;
var inst_43529 = inst_43547;
var inst_43530 = (0);
var state_43575__$1 = (function (){var statearr_43601 = state_43575;
(statearr_43601[(9)] = inst_43527);

(statearr_43601[(10)] = inst_43528);

(statearr_43601[(11)] = inst_43529);

(statearr_43601[(12)] = inst_43530);

return statearr_43601;
})();
var statearr_43602_44345 = state_43575__$1;
(statearr_43602_44345[(2)] = null);

(statearr_43602_44345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (3))){
var inst_43573 = (state_43575[(2)]);
var state_43575__$1 = state_43575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43575__$1,inst_43573);
} else {
if((state_val_43576 === (12))){
var inst_43561 = (state_43575[(2)]);
var state_43575__$1 = state_43575;
var statearr_43603_44346 = state_43575__$1;
(statearr_43603_44346[(2)] = inst_43561);

(statearr_43603_44346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (2))){
var state_43575__$1 = state_43575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43575__$1,(4),in$);
} else {
if((state_val_43576 === (23))){
var inst_43569 = (state_43575[(2)]);
var state_43575__$1 = state_43575;
var statearr_43607_44347 = state_43575__$1;
(statearr_43607_44347[(2)] = inst_43569);

(statearr_43607_44347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (19))){
var inst_43556 = (state_43575[(2)]);
var state_43575__$1 = state_43575;
var statearr_43608_44348 = state_43575__$1;
(statearr_43608_44348[(2)] = inst_43556);

(statearr_43608_44348[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (11))){
var inst_43527 = (state_43575[(9)]);
var inst_43541 = (state_43575[(7)]);
var inst_43541__$1 = cljs.core.seq(inst_43527);
var state_43575__$1 = (function (){var statearr_43609 = state_43575;
(statearr_43609[(7)] = inst_43541__$1);

return statearr_43609;
})();
if(inst_43541__$1){
var statearr_43610_44349 = state_43575__$1;
(statearr_43610_44349[(1)] = (14));

} else {
var statearr_43611_44350 = state_43575__$1;
(statearr_43611_44350[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (9))){
var inst_43563 = (state_43575[(2)]);
var inst_43564 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43575__$1 = (function (){var statearr_43612 = state_43575;
(statearr_43612[(15)] = inst_43563);

return statearr_43612;
})();
if(cljs.core.truth_(inst_43564)){
var statearr_43613_44351 = state_43575__$1;
(statearr_43613_44351[(1)] = (21));

} else {
var statearr_43614_44352 = state_43575__$1;
(statearr_43614_44352[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (5))){
var inst_43519 = cljs.core.async.close_BANG_(out);
var state_43575__$1 = state_43575;
var statearr_43618_44353 = state_43575__$1;
(statearr_43618_44353[(2)] = inst_43519);

(statearr_43618_44353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (14))){
var inst_43541 = (state_43575[(7)]);
var inst_43543 = cljs.core.chunked_seq_QMARK_(inst_43541);
var state_43575__$1 = state_43575;
if(inst_43543){
var statearr_43619_44354 = state_43575__$1;
(statearr_43619_44354[(1)] = (17));

} else {
var statearr_43620_44355 = state_43575__$1;
(statearr_43620_44355[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (16))){
var inst_43559 = (state_43575[(2)]);
var state_43575__$1 = state_43575;
var statearr_43621_44356 = state_43575__$1;
(statearr_43621_44356[(2)] = inst_43559);

(statearr_43621_44356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43576 === (10))){
var inst_43528 = (state_43575[(10)]);
var inst_43530 = (state_43575[(12)]);
var inst_43535 = cljs.core._nth(inst_43528,inst_43530);
var state_43575__$1 = state_43575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43575__$1,(13),out,inst_43535);
} else {
if((state_val_43576 === (18))){
var inst_43541 = (state_43575[(7)]);
var inst_43550 = cljs.core.first(inst_43541);
var state_43575__$1 = state_43575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43575__$1,(20),out,inst_43550);
} else {
if((state_val_43576 === (8))){
var inst_43530 = (state_43575[(12)]);
var inst_43529 = (state_43575[(11)]);
var inst_43532 = (inst_43530 < inst_43529);
var inst_43533 = inst_43532;
var state_43575__$1 = state_43575;
if(cljs.core.truth_(inst_43533)){
var statearr_43622_44357 = state_43575__$1;
(statearr_43622_44357[(1)] = (10));

} else {
var statearr_43623_44358 = state_43575__$1;
(statearr_43623_44358[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42121__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42121__auto____0 = (function (){
var statearr_43624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43624[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42121__auto__);

(statearr_43624[(1)] = (1));

return statearr_43624;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42121__auto____1 = (function (state_43575){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43575);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43625){var ex__42124__auto__ = e43625;
var statearr_43626_44359 = state_43575;
(statearr_43626_44359[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43575[(4)]))){
var statearr_43627_44360 = state_43575;
(statearr_43627_44360[(1)] = cljs.core.first((state_43575[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44361 = state_43575;
state_43575 = G__44361;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42121__auto__ = function(state_43575){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42121__auto____1.call(this,state_43575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42121__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42121__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43628 = f__42153__auto__();
(statearr_43628[(6)] = c__42152__auto__);

return statearr_43628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43630 = arguments.length;
switch (G__43630) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43632 = arguments.length;
switch (G__43632) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43654 = arguments.length;
switch (G__43654) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42152__auto___44365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43684){
var state_val_43685 = (state_43684[(1)]);
if((state_val_43685 === (7))){
var inst_43679 = (state_43684[(2)]);
var state_43684__$1 = state_43684;
var statearr_43686_44366 = state_43684__$1;
(statearr_43686_44366[(2)] = inst_43679);

(statearr_43686_44366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (1))){
var inst_43661 = null;
var state_43684__$1 = (function (){var statearr_43687 = state_43684;
(statearr_43687[(7)] = inst_43661);

return statearr_43687;
})();
var statearr_43688_44367 = state_43684__$1;
(statearr_43688_44367[(2)] = null);

(statearr_43688_44367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (4))){
var inst_43664 = (state_43684[(8)]);
var inst_43664__$1 = (state_43684[(2)]);
var inst_43665 = (inst_43664__$1 == null);
var inst_43666 = cljs.core.not(inst_43665);
var state_43684__$1 = (function (){var statearr_43689 = state_43684;
(statearr_43689[(8)] = inst_43664__$1);

return statearr_43689;
})();
if(inst_43666){
var statearr_43690_44368 = state_43684__$1;
(statearr_43690_44368[(1)] = (5));

} else {
var statearr_43691_44369 = state_43684__$1;
(statearr_43691_44369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (6))){
var state_43684__$1 = state_43684;
var statearr_43692_44370 = state_43684__$1;
(statearr_43692_44370[(2)] = null);

(statearr_43692_44370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (3))){
var inst_43681 = (state_43684[(2)]);
var inst_43682 = cljs.core.async.close_BANG_(out);
var state_43684__$1 = (function (){var statearr_43693 = state_43684;
(statearr_43693[(9)] = inst_43681);

return statearr_43693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43684__$1,inst_43682);
} else {
if((state_val_43685 === (2))){
var state_43684__$1 = state_43684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43684__$1,(4),ch);
} else {
if((state_val_43685 === (11))){
var inst_43664 = (state_43684[(8)]);
var inst_43673 = (state_43684[(2)]);
var inst_43661 = inst_43664;
var state_43684__$1 = (function (){var statearr_43694 = state_43684;
(statearr_43694[(10)] = inst_43673);

(statearr_43694[(7)] = inst_43661);

return statearr_43694;
})();
var statearr_43695_44371 = state_43684__$1;
(statearr_43695_44371[(2)] = null);

(statearr_43695_44371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (9))){
var inst_43664 = (state_43684[(8)]);
var state_43684__$1 = state_43684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43684__$1,(11),out,inst_43664);
} else {
if((state_val_43685 === (5))){
var inst_43664 = (state_43684[(8)]);
var inst_43661 = (state_43684[(7)]);
var inst_43668 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43664,inst_43661);
var state_43684__$1 = state_43684;
if(inst_43668){
var statearr_43697_44375 = state_43684__$1;
(statearr_43697_44375[(1)] = (8));

} else {
var statearr_43698_44376 = state_43684__$1;
(statearr_43698_44376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (10))){
var inst_43676 = (state_43684[(2)]);
var state_43684__$1 = state_43684;
var statearr_43699_44379 = state_43684__$1;
(statearr_43699_44379[(2)] = inst_43676);

(statearr_43699_44379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (8))){
var inst_43661 = (state_43684[(7)]);
var tmp43696 = inst_43661;
var inst_43661__$1 = tmp43696;
var state_43684__$1 = (function (){var statearr_43700 = state_43684;
(statearr_43700[(7)] = inst_43661__$1);

return statearr_43700;
})();
var statearr_43701_44384 = state_43684__$1;
(statearr_43701_44384[(2)] = null);

(statearr_43701_44384[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_43702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43702[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_43702[(1)] = (1));

return statearr_43702;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_43684){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43684);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43703){var ex__42124__auto__ = e43703;
var statearr_43704_44385 = state_43684;
(statearr_43704_44385[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43684[(4)]))){
var statearr_43705_44386 = state_43684;
(statearr_43705_44386[(1)] = cljs.core.first((state_43684[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44387 = state_43684;
state_43684 = G__44387;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_43684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_43684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43706 = f__42153__auto__();
(statearr_43706[(6)] = c__42152__auto___44365);

return statearr_43706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43709 = arguments.length;
switch (G__43709) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42152__auto___44390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43749){
var state_val_43750 = (state_43749[(1)]);
if((state_val_43750 === (7))){
var inst_43745 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
var statearr_43751_44391 = state_43749__$1;
(statearr_43751_44391[(2)] = inst_43745);

(statearr_43751_44391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (1))){
var inst_43712 = (new Array(n));
var inst_43713 = inst_43712;
var inst_43714 = (0);
var state_43749__$1 = (function (){var statearr_43752 = state_43749;
(statearr_43752[(7)] = inst_43713);

(statearr_43752[(8)] = inst_43714);

return statearr_43752;
})();
var statearr_43753_44396 = state_43749__$1;
(statearr_43753_44396[(2)] = null);

(statearr_43753_44396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (4))){
var inst_43717 = (state_43749[(9)]);
var inst_43717__$1 = (state_43749[(2)]);
var inst_43718 = (inst_43717__$1 == null);
var inst_43719 = cljs.core.not(inst_43718);
var state_43749__$1 = (function (){var statearr_43754 = state_43749;
(statearr_43754[(9)] = inst_43717__$1);

return statearr_43754;
})();
if(inst_43719){
var statearr_43755_44397 = state_43749__$1;
(statearr_43755_44397[(1)] = (5));

} else {
var statearr_43757_44398 = state_43749__$1;
(statearr_43757_44398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (15))){
var inst_43739 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
var statearr_43758_44399 = state_43749__$1;
(statearr_43758_44399[(2)] = inst_43739);

(statearr_43758_44399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (13))){
var state_43749__$1 = state_43749;
var statearr_43759_44400 = state_43749__$1;
(statearr_43759_44400[(2)] = null);

(statearr_43759_44400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (6))){
var inst_43714 = (state_43749[(8)]);
var inst_43735 = (inst_43714 > (0));
var state_43749__$1 = state_43749;
if(cljs.core.truth_(inst_43735)){
var statearr_43760_44401 = state_43749__$1;
(statearr_43760_44401[(1)] = (12));

} else {
var statearr_43761_44402 = state_43749__$1;
(statearr_43761_44402[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (3))){
var inst_43747 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43749__$1,inst_43747);
} else {
if((state_val_43750 === (12))){
var inst_43713 = (state_43749[(7)]);
var inst_43737 = cljs.core.vec(inst_43713);
var state_43749__$1 = state_43749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43749__$1,(15),out,inst_43737);
} else {
if((state_val_43750 === (2))){
var state_43749__$1 = state_43749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43749__$1,(4),ch);
} else {
if((state_val_43750 === (11))){
var inst_43729 = (state_43749[(2)]);
var inst_43730 = (new Array(n));
var inst_43713 = inst_43730;
var inst_43714 = (0);
var state_43749__$1 = (function (){var statearr_43762 = state_43749;
(statearr_43762[(10)] = inst_43729);

(statearr_43762[(7)] = inst_43713);

(statearr_43762[(8)] = inst_43714);

return statearr_43762;
})();
var statearr_43763_44403 = state_43749__$1;
(statearr_43763_44403[(2)] = null);

(statearr_43763_44403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (9))){
var inst_43713 = (state_43749[(7)]);
var inst_43727 = cljs.core.vec(inst_43713);
var state_43749__$1 = state_43749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43749__$1,(11),out,inst_43727);
} else {
if((state_val_43750 === (5))){
var inst_43713 = (state_43749[(7)]);
var inst_43714 = (state_43749[(8)]);
var inst_43717 = (state_43749[(9)]);
var inst_43722 = (state_43749[(11)]);
var inst_43721 = (inst_43713[inst_43714] = inst_43717);
var inst_43722__$1 = (inst_43714 + (1));
var inst_43723 = (inst_43722__$1 < n);
var state_43749__$1 = (function (){var statearr_43787 = state_43749;
(statearr_43787[(12)] = inst_43721);

(statearr_43787[(11)] = inst_43722__$1);

return statearr_43787;
})();
if(cljs.core.truth_(inst_43723)){
var statearr_43788_44404 = state_43749__$1;
(statearr_43788_44404[(1)] = (8));

} else {
var statearr_43789_44405 = state_43749__$1;
(statearr_43789_44405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (14))){
var inst_43742 = (state_43749[(2)]);
var inst_43743 = cljs.core.async.close_BANG_(out);
var state_43749__$1 = (function (){var statearr_43791 = state_43749;
(statearr_43791[(13)] = inst_43742);

return statearr_43791;
})();
var statearr_43792_44406 = state_43749__$1;
(statearr_43792_44406[(2)] = inst_43743);

(statearr_43792_44406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (10))){
var inst_43733 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
var statearr_43796_44407 = state_43749__$1;
(statearr_43796_44407[(2)] = inst_43733);

(statearr_43796_44407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (8))){
var inst_43713 = (state_43749[(7)]);
var inst_43722 = (state_43749[(11)]);
var tmp43790 = inst_43713;
var inst_43713__$1 = tmp43790;
var inst_43714 = inst_43722;
var state_43749__$1 = (function (){var statearr_43797 = state_43749;
(statearr_43797[(7)] = inst_43713__$1);

(statearr_43797[(8)] = inst_43714);

return statearr_43797;
})();
var statearr_43798_44408 = state_43749__$1;
(statearr_43798_44408[(2)] = null);

(statearr_43798_44408[(1)] = (2));


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
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_43799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43799[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_43799[(1)] = (1));

return statearr_43799;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_43749){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43749);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43800){var ex__42124__auto__ = e43800;
var statearr_43801_44409 = state_43749;
(statearr_43801_44409[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43749[(4)]))){
var statearr_43802_44410 = state_43749;
(statearr_43802_44410[(1)] = cljs.core.first((state_43749[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44411 = state_43749;
state_43749 = G__44411;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_43749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_43749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43803 = f__42153__auto__();
(statearr_43803[(6)] = c__42152__auto___44390);

return statearr_43803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43805 = arguments.length;
switch (G__43805) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42152__auto___44413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_43851){
var state_val_43852 = (state_43851[(1)]);
if((state_val_43852 === (7))){
var inst_43847 = (state_43851[(2)]);
var state_43851__$1 = state_43851;
var statearr_43853_44414 = state_43851__$1;
(statearr_43853_44414[(2)] = inst_43847);

(statearr_43853_44414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (1))){
var inst_43807 = [];
var inst_43808 = inst_43807;
var inst_43809 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43851__$1 = (function (){var statearr_43854 = state_43851;
(statearr_43854[(7)] = inst_43808);

(statearr_43854[(8)] = inst_43809);

return statearr_43854;
})();
var statearr_43855_44415 = state_43851__$1;
(statearr_43855_44415[(2)] = null);

(statearr_43855_44415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (4))){
var inst_43812 = (state_43851[(9)]);
var inst_43812__$1 = (state_43851[(2)]);
var inst_43813 = (inst_43812__$1 == null);
var inst_43814 = cljs.core.not(inst_43813);
var state_43851__$1 = (function (){var statearr_43859 = state_43851;
(statearr_43859[(9)] = inst_43812__$1);

return statearr_43859;
})();
if(inst_43814){
var statearr_43860_44416 = state_43851__$1;
(statearr_43860_44416[(1)] = (5));

} else {
var statearr_43861_44417 = state_43851__$1;
(statearr_43861_44417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (15))){
var inst_43808 = (state_43851[(7)]);
var inst_43839 = cljs.core.vec(inst_43808);
var state_43851__$1 = state_43851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43851__$1,(18),out,inst_43839);
} else {
if((state_val_43852 === (13))){
var inst_43834 = (state_43851[(2)]);
var state_43851__$1 = state_43851;
var statearr_43862_44418 = state_43851__$1;
(statearr_43862_44418[(2)] = inst_43834);

(statearr_43862_44418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (6))){
var inst_43808 = (state_43851[(7)]);
var inst_43836 = inst_43808.length;
var inst_43837 = (inst_43836 > (0));
var state_43851__$1 = state_43851;
if(cljs.core.truth_(inst_43837)){
var statearr_43863_44419 = state_43851__$1;
(statearr_43863_44419[(1)] = (15));

} else {
var statearr_43864_44420 = state_43851__$1;
(statearr_43864_44420[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (17))){
var inst_43844 = (state_43851[(2)]);
var inst_43845 = cljs.core.async.close_BANG_(out);
var state_43851__$1 = (function (){var statearr_43865 = state_43851;
(statearr_43865[(10)] = inst_43844);

return statearr_43865;
})();
var statearr_43866_44421 = state_43851__$1;
(statearr_43866_44421[(2)] = inst_43845);

(statearr_43866_44421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (3))){
var inst_43849 = (state_43851[(2)]);
var state_43851__$1 = state_43851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43851__$1,inst_43849);
} else {
if((state_val_43852 === (12))){
var inst_43808 = (state_43851[(7)]);
var inst_43827 = cljs.core.vec(inst_43808);
var state_43851__$1 = state_43851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43851__$1,(14),out,inst_43827);
} else {
if((state_val_43852 === (2))){
var state_43851__$1 = state_43851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43851__$1,(4),ch);
} else {
if((state_val_43852 === (11))){
var inst_43808 = (state_43851[(7)]);
var inst_43812 = (state_43851[(9)]);
var inst_43816 = (state_43851[(11)]);
var inst_43824 = inst_43808.push(inst_43812);
var tmp43867 = inst_43808;
var inst_43808__$1 = tmp43867;
var inst_43809 = inst_43816;
var state_43851__$1 = (function (){var statearr_43868 = state_43851;
(statearr_43868[(12)] = inst_43824);

(statearr_43868[(7)] = inst_43808__$1);

(statearr_43868[(8)] = inst_43809);

return statearr_43868;
})();
var statearr_43869_44422 = state_43851__$1;
(statearr_43869_44422[(2)] = null);

(statearr_43869_44422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (9))){
var inst_43809 = (state_43851[(8)]);
var inst_43820 = cljs.core.keyword_identical_QMARK_(inst_43809,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_43851__$1 = state_43851;
var statearr_43870_44427 = state_43851__$1;
(statearr_43870_44427[(2)] = inst_43820);

(statearr_43870_44427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (5))){
var inst_43812 = (state_43851[(9)]);
var inst_43816 = (state_43851[(11)]);
var inst_43809 = (state_43851[(8)]);
var inst_43817 = (state_43851[(13)]);
var inst_43816__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43812) : f.call(null,inst_43812));
var inst_43817__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43816__$1,inst_43809);
var state_43851__$1 = (function (){var statearr_43871 = state_43851;
(statearr_43871[(11)] = inst_43816__$1);

(statearr_43871[(13)] = inst_43817__$1);

return statearr_43871;
})();
if(inst_43817__$1){
var statearr_43872_44428 = state_43851__$1;
(statearr_43872_44428[(1)] = (8));

} else {
var statearr_43873_44429 = state_43851__$1;
(statearr_43873_44429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (14))){
var inst_43812 = (state_43851[(9)]);
var inst_43816 = (state_43851[(11)]);
var inst_43829 = (state_43851[(2)]);
var inst_43830 = [];
var inst_43831 = inst_43830.push(inst_43812);
var inst_43808 = inst_43830;
var inst_43809 = inst_43816;
var state_43851__$1 = (function (){var statearr_43874 = state_43851;
(statearr_43874[(14)] = inst_43829);

(statearr_43874[(15)] = inst_43831);

(statearr_43874[(7)] = inst_43808);

(statearr_43874[(8)] = inst_43809);

return statearr_43874;
})();
var statearr_43875_44430 = state_43851__$1;
(statearr_43875_44430[(2)] = null);

(statearr_43875_44430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (16))){
var state_43851__$1 = state_43851;
var statearr_43876_44431 = state_43851__$1;
(statearr_43876_44431[(2)] = null);

(statearr_43876_44431[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (10))){
var inst_43822 = (state_43851[(2)]);
var state_43851__$1 = state_43851;
if(cljs.core.truth_(inst_43822)){
var statearr_43877_44432 = state_43851__$1;
(statearr_43877_44432[(1)] = (11));

} else {
var statearr_43878_44433 = state_43851__$1;
(statearr_43878_44433[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (18))){
var inst_43841 = (state_43851[(2)]);
var state_43851__$1 = state_43851;
var statearr_43879_44434 = state_43851__$1;
(statearr_43879_44434[(2)] = inst_43841);

(statearr_43879_44434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43852 === (8))){
var inst_43817 = (state_43851[(13)]);
var state_43851__$1 = state_43851;
var statearr_43880_44435 = state_43851__$1;
(statearr_43880_44435[(2)] = inst_43817);

(statearr_43880_44435[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__42121__auto__ = null;
var cljs$core$async$state_machine__42121__auto____0 = (function (){
var statearr_43881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43881[(0)] = cljs$core$async$state_machine__42121__auto__);

(statearr_43881[(1)] = (1));

return statearr_43881;
});
var cljs$core$async$state_machine__42121__auto____1 = (function (state_43851){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_43851);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e43882){var ex__42124__auto__ = e43882;
var statearr_43883_44436 = state_43851;
(statearr_43883_44436[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_43851[(4)]))){
var statearr_43884_44437 = state_43851;
(statearr_43884_44437[(1)] = cljs.core.first((state_43851[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44438 = state_43851;
state_43851 = G__44438;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
cljs$core$async$state_machine__42121__auto__ = function(state_43851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42121__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42121__auto____1.call(this,state_43851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42121__auto____0;
cljs$core$async$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42121__auto____1;
return cljs$core$async$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_43885 = f__42153__auto__();
(statearr_43885[(6)] = c__42152__auto___44413);

return statearr_43885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
