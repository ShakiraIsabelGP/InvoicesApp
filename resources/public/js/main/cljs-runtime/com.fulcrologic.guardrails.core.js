goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_45250){
var state_val_45251 = (state_45250[(1)]);
if((state_val_45251 === (7))){
var inst_45246 = (state_45250[(2)]);
var state_45250__$1 = state_45250;
var statearr_45252_45305 = state_45250__$1;
(statearr_45252_45305[(2)] = inst_45246);

(statearr_45252_45305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (1))){
var state_45250__$1 = state_45250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45250__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_45251 === (4))){
var inst_45248 = (state_45250[(2)]);
var state_45250__$1 = state_45250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45250__$1,inst_45248);
} else {
if((state_val_45251 === (6))){
var inst_45244 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_45250__$1 = state_45250;
var statearr_45255_45306 = state_45250__$1;
(statearr_45255_45306[(2)] = inst_45244);

(statearr_45255_45306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (3))){
var inst_45227 = (state_45250[(7)]);
var state_45250__$1 = state_45250;
if(cljs.core.truth_(inst_45227)){
var statearr_45256_45307 = state_45250__$1;
(statearr_45256_45307[(1)] = (5));

} else {
var statearr_45257_45308 = state_45250__$1;
(statearr_45257_45308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (12))){
var inst_45241 = (state_45250[(2)]);
var inst_45227 = inst_45241;
var state_45250__$1 = (function (){var statearr_45261 = state_45250;
(statearr_45261[(7)] = inst_45227);

return statearr_45261;
})();
var statearr_45263_45309 = state_45250__$1;
(statearr_45263_45309[(2)] = null);

(statearr_45263_45309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (2))){
var inst_45226 = (state_45250[(2)]);
var inst_45227 = inst_45226;
var state_45250__$1 = (function (){var statearr_45264 = state_45250;
(statearr_45264[(7)] = inst_45227);

return statearr_45264;
})();
var statearr_45265_45310 = state_45250__$1;
(statearr_45265_45310[(2)] = null);

(statearr_45265_45310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (11))){
var _ = (function (){var statearr_45266 = state_45250;
(statearr_45266[(4)] = cljs.core.rest((state_45250[(4)])));

return statearr_45266;
})();
var state_45250__$1 = state_45250;
var ex45258 = (state_45250__$1[(2)]);
var statearr_45267_45311 = state_45250__$1;
(statearr_45267_45311[(5)] = ex45258);


var statearr_45268_45312 = state_45250__$1;
(statearr_45268_45312[(1)] = (10));

(statearr_45268_45312[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (9))){
var inst_45239 = (state_45250[(2)]);
var state_45250__$1 = (function (){var statearr_45274 = state_45250;
(statearr_45274[(8)] = inst_45239);

return statearr_45274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45250__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_45251 === (5))){
var state_45250__$1 = state_45250;
var statearr_45275_45313 = state_45250__$1;
(statearr_45275_45313[(2)] = null);

(statearr_45275_45313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (10))){
var inst_45230 = (state_45250[(2)]);
var state_45250__$1 = (function (){var statearr_45276 = state_45250;
(statearr_45276[(9)] = inst_45230);

return statearr_45276;
})();
var statearr_45277_45314 = state_45250__$1;
(statearr_45277_45314[(2)] = null);

(statearr_45277_45314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45251 === (8))){
var inst_45227 = (state_45250[(7)]);
var _ = (function (){var statearr_45278 = state_45250;
(statearr_45278[(4)] = cljs.core.cons((11),(state_45250[(4)])));

return statearr_45278;
})();
var inst_45236 = (inst_45227.cljs$core$IFn$_invoke$arity$0 ? inst_45227.cljs$core$IFn$_invoke$arity$0() : inst_45227.call(null));
var ___$1 = (function (){var statearr_45279 = state_45250;
(statearr_45279[(4)] = cljs.core.rest((state_45250[(4)])));

return statearr_45279;
})();
var state_45250__$1 = state_45250;
var statearr_45280_45315 = state_45250__$1;
(statearr_45280_45315[(2)] = inst_45236);

(statearr_45280_45315[(1)] = (9));


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
var com$fulcrologic$guardrails$core$state_machine__42121__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__42121__auto____0 = (function (){
var statearr_45281 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45281[(0)] = com$fulcrologic$guardrails$core$state_machine__42121__auto__);

(statearr_45281[(1)] = (1));

return statearr_45281;
});
var com$fulcrologic$guardrails$core$state_machine__42121__auto____1 = (function (state_45250){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_45250);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e45282){var ex__42124__auto__ = e45282;
var statearr_45283_45319 = state_45250;
(statearr_45283_45319[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_45250[(4)]))){
var statearr_45284_45321 = state_45250;
(statearr_45284_45321[(1)] = cljs.core.first((state_45250[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45322 = state_45250;
state_45250 = G__45322;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__42121__auto__ = function(state_45250){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__42121__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__42121__auto____1.call(this,state_45250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__42121__auto____0;
com$fulcrologic$guardrails$core$state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__42121__auto____1;
return com$fulcrologic$guardrails$core$state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_45285 = f__42153__auto__();
(statearr_45285[(6)] = c__42152__auto__);

return statearr_45285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__45286 = data;
var map__45286__$1 = cljs.core.__destructure_map(map__45286);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,11858,11858,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__45287,spec,value){
var map__45288 = p__45287;
var map__45288__$1 = cljs.core.__destructure_map(map__45288);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45288__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45288__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45288__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45288__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45288__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45288__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45288__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_45324 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__45325 = (function (){var and__5043__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return vararg_QMARK_;
} else {
return and__5043__auto__;
}
})();
var varg_45326 = (cljs.core.truth_(vargs_QMARK__45325)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_45327 = (cljs.core.truth_(vargs_QMARK__45325)?((cljs.core.map_QMARK_(varg_45326))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_45326))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_45326))):value);
var valid_exception_45328 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_45327)){
} else {
var problem_45331 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_45327,expound_opts);
var description_45332 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_45331)].join('');
var context_45333 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__5043__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5043__auto__)){
return tap_GT__QMARK_;
} else {
return and__5043__auto__;
}
})())){
var G__45290_45334 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_45327)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__45290_45334) : com.fulcrologic.guardrails.core.tap.call(null,G__45290_45334));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_45328,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__45291 = description_45332;
if(cljs.core.truth_(context_45333)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_45333),G__45291].join('');
} else {
return G__45291;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_45333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_45327], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_45332,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = callsite;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e45289){var e_45336 = e45289;
com.fulcrologic.guardrails.utils.report_exception(e_45336,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_45337 = (com.fulcrologic.guardrails.core.now_ms() - start_45324);
if((duration_45337 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_45337),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_45328))){
throw cljs.core.deref(valid_exception_45328);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
