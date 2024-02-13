goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47410){
var map__47411 = p__47410;
var map__47411__$1 = cljs.core.__destructure_map(map__47411);
var m = map__47411__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47411__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47412_47548 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47413_47549 = null;
var count__47414_47550 = (0);
var i__47415_47551 = (0);
while(true){
if((i__47415_47551 < count__47414_47550)){
var f_47552 = chunk__47413_47549.cljs$core$IIndexed$_nth$arity$2(null,i__47415_47551);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47552], 0));


var G__47553 = seq__47412_47548;
var G__47554 = chunk__47413_47549;
var G__47555 = count__47414_47550;
var G__47556 = (i__47415_47551 + (1));
seq__47412_47548 = G__47553;
chunk__47413_47549 = G__47554;
count__47414_47550 = G__47555;
i__47415_47551 = G__47556;
continue;
} else {
var temp__5804__auto___47557 = cljs.core.seq(seq__47412_47548);
if(temp__5804__auto___47557){
var seq__47412_47558__$1 = temp__5804__auto___47557;
if(cljs.core.chunked_seq_QMARK_(seq__47412_47558__$1)){
var c__5568__auto___47559 = cljs.core.chunk_first(seq__47412_47558__$1);
var G__47560 = cljs.core.chunk_rest(seq__47412_47558__$1);
var G__47561 = c__5568__auto___47559;
var G__47562 = cljs.core.count(c__5568__auto___47559);
var G__47563 = (0);
seq__47412_47548 = G__47560;
chunk__47413_47549 = G__47561;
count__47414_47550 = G__47562;
i__47415_47551 = G__47563;
continue;
} else {
var f_47564 = cljs.core.first(seq__47412_47558__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_47564], 0));


var G__47565 = cljs.core.next(seq__47412_47558__$1);
var G__47566 = null;
var G__47567 = (0);
var G__47568 = (0);
seq__47412_47548 = G__47565;
chunk__47413_47549 = G__47566;
count__47414_47550 = G__47567;
i__47415_47551 = G__47568;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47569 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_47569], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_47569)))?cljs.core.second(arglists_47569):arglists_47569)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47442_47570 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47443_47571 = null;
var count__47444_47572 = (0);
var i__47445_47573 = (0);
while(true){
if((i__47445_47573 < count__47444_47572)){
var vec__47454_47574 = chunk__47443_47571.cljs$core$IIndexed$_nth$arity$2(null,i__47445_47573);
var name_47575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47454_47574,(0),null);
var map__47457_47576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47454_47574,(1),null);
var map__47457_47577__$1 = cljs.core.__destructure_map(map__47457_47576);
var doc_47578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47457_47577__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47457_47577__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47575], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47579], 0));

if(cljs.core.truth_(doc_47578)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47578], 0));
} else {
}


var G__47580 = seq__47442_47570;
var G__47581 = chunk__47443_47571;
var G__47582 = count__47444_47572;
var G__47583 = (i__47445_47573 + (1));
seq__47442_47570 = G__47580;
chunk__47443_47571 = G__47581;
count__47444_47572 = G__47582;
i__47445_47573 = G__47583;
continue;
} else {
var temp__5804__auto___47584 = cljs.core.seq(seq__47442_47570);
if(temp__5804__auto___47584){
var seq__47442_47585__$1 = temp__5804__auto___47584;
if(cljs.core.chunked_seq_QMARK_(seq__47442_47585__$1)){
var c__5568__auto___47586 = cljs.core.chunk_first(seq__47442_47585__$1);
var G__47587 = cljs.core.chunk_rest(seq__47442_47585__$1);
var G__47588 = c__5568__auto___47586;
var G__47589 = cljs.core.count(c__5568__auto___47586);
var G__47590 = (0);
seq__47442_47570 = G__47587;
chunk__47443_47571 = G__47588;
count__47444_47572 = G__47589;
i__47445_47573 = G__47590;
continue;
} else {
var vec__47458_47591 = cljs.core.first(seq__47442_47585__$1);
var name_47592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47458_47591,(0),null);
var map__47461_47593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47458_47591,(1),null);
var map__47461_47594__$1 = cljs.core.__destructure_map(map__47461_47593);
var doc_47595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47461_47594__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47461_47594__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_47592], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_47596], 0));

if(cljs.core.truth_(doc_47595)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_47595], 0));
} else {
}


var G__47597 = cljs.core.next(seq__47442_47585__$1);
var G__47598 = null;
var G__47599 = (0);
var G__47600 = (0);
seq__47442_47570 = G__47597;
chunk__47443_47571 = G__47598;
count__47444_47572 = G__47599;
i__47445_47573 = G__47600;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__47462 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47463 = null;
var count__47464 = (0);
var i__47465 = (0);
while(true){
if((i__47465 < count__47464)){
var role = chunk__47463.cljs$core$IIndexed$_nth$arity$2(null,i__47465);
var temp__5804__auto___47601__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___47601__$1)){
var spec_47602 = temp__5804__auto___47601__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_47602)], 0));
} else {
}


var G__47603 = seq__47462;
var G__47604 = chunk__47463;
var G__47605 = count__47464;
var G__47606 = (i__47465 + (1));
seq__47462 = G__47603;
chunk__47463 = G__47604;
count__47464 = G__47605;
i__47465 = G__47606;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__47462);
if(temp__5804__auto____$1){
var seq__47462__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__47462__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47462__$1);
var G__47607 = cljs.core.chunk_rest(seq__47462__$1);
var G__47608 = c__5568__auto__;
var G__47609 = cljs.core.count(c__5568__auto__);
var G__47610 = (0);
seq__47462 = G__47607;
chunk__47463 = G__47608;
count__47464 = G__47609;
i__47465 = G__47610;
continue;
} else {
var role = cljs.core.first(seq__47462__$1);
var temp__5804__auto___47611__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___47611__$2)){
var spec_47612 = temp__5804__auto___47611__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_47612)], 0));
} else {
}


var G__47613 = cljs.core.next(seq__47462__$1);
var G__47614 = null;
var G__47615 = (0);
var G__47616 = (0);
seq__47462 = G__47613;
chunk__47463 = G__47614;
count__47464 = G__47615;
i__47465 = G__47616;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__47617 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__47618 = cljs.core.ex_cause(t);
via = G__47617;
t = G__47618;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__47488 = datafied_throwable;
var map__47488__$1 = cljs.core.__destructure_map(map__47488);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47488__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47488__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47488__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__47489 = cljs.core.last(via);
var map__47489__$1 = cljs.core.__destructure_map(map__47489);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47489__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47489__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47489__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__47490 = data;
var map__47490__$1 = cljs.core.__destructure_map(map__47490);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47490__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47490__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47490__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__47491 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__47491__$1 = cljs.core.__destructure_map(map__47491);
var top_data = map__47491__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47491__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__47492 = phase;
var G__47492__$1 = (((G__47492 instanceof cljs.core.Keyword))?G__47492.fqn:null);
switch (G__47492__$1) {
case "read-source":
var map__47493 = data;
var map__47493__$1 = cljs.core.__destructure_map(map__47493);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47493__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47493__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__47494 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__47494__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47494,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47494);
var G__47494__$2 = (cljs.core.truth_((function (){var fexpr__47495 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47495.cljs$core$IFn$_invoke$arity$1 ? fexpr__47495.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47495.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47494__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47494__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47494__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__47496 = top_data;
var G__47496__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47496,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47496);
var G__47496__$2 = (cljs.core.truth_((function (){var fexpr__47497 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47497.cljs$core$IFn$_invoke$arity$1 ? fexpr__47497.cljs$core$IFn$_invoke$arity$1(source) : fexpr__47497.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47496__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47496__$1);
var G__47496__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47496__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47496__$2);
var G__47496__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47496__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47496__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47496__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47496__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__47498 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47498,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47498,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47498,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47498,(3),null);
var G__47501 = top_data;
var G__47501__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47501,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__47501);
var G__47501__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__47501__$1);
var G__47501__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47501__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__47501__$2);
var G__47501__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47501__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47501__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47501__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47501__$4;
}

break;
case "execution":
var vec__47502 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47502,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47502,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47502,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47502,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__47487_SHARP_){
var or__5045__auto__ = (p1__47487_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__47505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__47505.cljs$core$IFn$_invoke$arity$1 ? fexpr__47505.cljs$core$IFn$_invoke$arity$1(p1__47487_SHARP_) : fexpr__47505.call(null,p1__47487_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__47506 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__47506__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47506,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__47506);
var G__47506__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47506__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47506__$1);
var G__47506__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47506__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__47506__$2);
var G__47506__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47506__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__47506__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47506__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47506__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47492__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__47509){
var map__47510 = p__47509;
var map__47510__$1 = cljs.core.__destructure_map(map__47510);
var triage_data = map__47510__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47510__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__47511 = phase;
var G__47511__$1 = (((G__47511 instanceof cljs.core.Keyword))?G__47511.fqn:null);
switch (G__47511__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__47512 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__47513 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47514 = loc;
var G__47515 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47516_47621 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47517_47622 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47518_47623 = true;
var _STAR_print_fn_STAR__temp_val__47519_47624 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47518_47623);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47519_47624);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47507_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47507_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47517_47622);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47516_47621);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47512,G__47513,G__47514,G__47515) : format.call(null,G__47512,G__47513,G__47514,G__47515));

break;
case "macroexpansion":
var G__47520 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__47521 = cause_type;
var G__47522 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47523 = loc;
var G__47524 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47520,G__47521,G__47522,G__47523,G__47524) : format.call(null,G__47520,G__47521,G__47522,G__47523,G__47524));

break;
case "compile-syntax-check":
var G__47525 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__47526 = cause_type;
var G__47527 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47528 = loc;
var G__47529 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47525,G__47526,G__47527,G__47528,G__47529) : format.call(null,G__47525,G__47526,G__47527,G__47528,G__47529));

break;
case "compilation":
var G__47530 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__47531 = cause_type;
var G__47532 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47533 = loc;
var G__47534 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47530,G__47531,G__47532,G__47533,G__47534) : format.call(null,G__47530,G__47531,G__47532,G__47533,G__47534));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__47535 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__47536 = symbol;
var G__47537 = loc;
var G__47538 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47539_47625 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47540_47626 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47541_47627 = true;
var _STAR_print_fn_STAR__temp_val__47542_47628 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47541_47627);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47542_47628);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47508_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47508_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47540_47626);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47539_47625);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__47535,G__47536,G__47537,G__47538) : format.call(null,G__47535,G__47536,G__47537,G__47538));
} else {
var G__47543 = "Execution error%s at %s(%s).\n%s\n";
var G__47544 = cause_type;
var G__47545 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__47546 = loc;
var G__47547 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__47543,G__47544,G__47545,G__47546,G__47547) : format.call(null,G__47543,G__47544,G__47545,G__47546,G__47547));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47511__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
