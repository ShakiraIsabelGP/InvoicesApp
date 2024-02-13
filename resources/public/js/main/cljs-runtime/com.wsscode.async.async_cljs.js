goog.provide('com.wsscode.async.async_cljs');
goog.scope(function(){
  com.wsscode.async.async_cljs.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Check if c is a core.async channel.
 */
com.wsscode.async.async_cljs.chan_QMARK_ = (function com$wsscode$async$async_cljs$chan_QMARK_(c){
if((!((c == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.cljs$core$async$impl$protocols$ReadPort$)))){
return true;
} else {
if((!c.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,c);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,c);
}
});
/**
 * Return true if X is a js obj with the property .then available as a fn.
 */
com.wsscode.async.async_cljs.promise_QMARK_ = (function com$wsscode$async$async_cljs$promise_QMARK_(x){
try{return cljs.core.fn_QMARK_(com.wsscode.async.async_cljs.goog$module$goog$object.get(x,"then"));
}catch (e53643){var _ = e53643;
return false;
}});
/**
 * Converts promise p in a promise-chan. The response of this channel should be consumed
 *   using `consume-pair`.
 */
com.wsscode.async.async_cljs.promise__GT_chan = (function com$wsscode$async$async_cljs$promise__GT_chan(p){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
p.then((function (p1__53644_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),p1__53644_SHARP_], null));
}),(function (p1__53645_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__53645_SHARP_], null));
}));

return c;
});
/**
 * Consume promise channel result pair.
 */
com.wsscode.async.async_cljs.consumer_pair = (function com$wsscode$async$async_cljs$consumer_pair(resp){
if(cljs.core.contains_QMARK_(resp,new cljs.core.Keyword(null,"error","error",-978969032))){
throw new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp);
} else {
return new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(resp);
}
});
/**
 * Returns true if err is an error object.
 */
com.wsscode.async.async_cljs.error_QMARK_ = (function com$wsscode$async$async_cljs$error_QMARK_(err){
return (err instanceof Error);
});
/**
 * Throw error x if x is an error.
 */
com.wsscode.async.async_cljs.throw_err = (function com$wsscode$async$async_cljs$throw_err(x){
if(com.wsscode.async.async_cljs.error_QMARK_(x)){
throw x;
} else {
return x;
}
});
/**
 * Returns a channel that will respond will c, or an error after timeout-ms.
 */
com.wsscode.async.async_cljs.timeout_chan = (function com$wsscode$async$async_cljs$timeout_chan(timeout_ms,c){
var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___53833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_53684){
var state_val_53685 = (state_53684[(1)]);
if((state_val_53685 === (7))){
var inst_53665 = [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406)];
var inst_53666 = [timeout_ms];
var inst_53667 = cljs.core.PersistentHashMap.fromArrays(inst_53665,inst_53666);
var inst_53668 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timeout",inst_53667);
var inst_53669 = (function(){throw inst_53668})();
var state_53684__$1 = state_53684;
var statearr_53686_53834 = state_53684__$1;
(statearr_53686_53834[(2)] = inst_53669);

(statearr_53686_53834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (1))){
var state_53684__$1 = state_53684;
var statearr_53687_53835 = state_53684__$1;
(statearr_53687_53835[(2)] = null);

(statearr_53687_53835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (4))){
var inst_53646 = (state_53684[(2)]);
var state_53684__$1 = state_53684;
var statearr_53688_53836 = state_53684__$1;
(statearr_53688_53836[(2)] = inst_53646);

(statearr_53688_53836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (6))){
var inst_53655 = (state_53684[(7)]);
var inst_53660 = (state_53684[(2)]);
var inst_53661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53660,(0),null);
var inst_53662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53660,(1),null);
var inst_53663 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53662,inst_53655);
var state_53684__$1 = (function (){var statearr_53689 = state_53684;
(statearr_53689[(8)] = inst_53661);

return statearr_53689;
})();
if(inst_53663){
var statearr_53690_53837 = state_53684__$1;
(statearr_53690_53837[(1)] = (7));

} else {
var statearr_53691_53838 = state_53684__$1;
(statearr_53691_53838[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (3))){
var inst_53675 = (state_53684[(9)]);
var inst_53675__$1 = (state_53684[(2)]);
var inst_53676 = (inst_53675__$1 == null);
var state_53684__$1 = (function (){var statearr_53692 = state_53684;
(statearr_53692[(9)] = inst_53675__$1);

return statearr_53692;
})();
if(cljs.core.truth_(inst_53676)){
var statearr_53693_53839 = state_53684__$1;
(statearr_53693_53839[(1)] = (10));

} else {
var statearr_53694_53840 = state_53684__$1;
(statearr_53694_53840[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (12))){
var inst_53682 = (state_53684[(2)]);
var state_53684__$1 = state_53684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53684__$1,inst_53682);
} else {
if((state_val_53685 === (2))){
var inst_53655 = (state_53684[(7)]);
var _ = (function (){var statearr_53695 = state_53684;
(statearr_53695[(4)] = cljs.core.cons((5),(state_53684[(4)])));

return statearr_53695;
})();
var inst_53655__$1 = cljs.core.async.timeout(timeout_ms);
var inst_53656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53657 = [c,inst_53655__$1];
var inst_53658 = (new cljs.core.PersistentVector(null,2,(5),inst_53656,inst_53657,null));
var state_53684__$1 = (function (){var statearr_53696 = state_53684;
(statearr_53696[(7)] = inst_53655__$1);

return statearr_53696;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_53684__$1,(6),inst_53658,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_53685 === (11))){
var inst_53675 = (state_53684[(9)]);
var inst_53680 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_53675);
var state_53684__$1 = state_53684;
var statearr_53698_53841 = state_53684__$1;
(statearr_53698_53841[(2)] = inst_53680);

(statearr_53698_53841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (9))){
var inst_53672 = (state_53684[(2)]);
var _ = (function (){var statearr_53699 = state_53684;
(statearr_53699[(4)] = cljs.core.rest((state_53684[(4)])));

return statearr_53699;
})();
var state_53684__$1 = state_53684;
var statearr_53700_53842 = state_53684__$1;
(statearr_53700_53842[(2)] = inst_53672);

(statearr_53700_53842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (5))){
var _ = (function (){var statearr_53701 = state_53684;
(statearr_53701[(4)] = cljs.core.rest((state_53684[(4)])));

return statearr_53701;
})();
var state_53684__$1 = state_53684;
var ex53697 = (state_53684__$1[(2)]);
var statearr_53702_53843 = state_53684__$1;
(statearr_53702_53843[(5)] = ex53697);


var statearr_53703_53844 = state_53684__$1;
(statearr_53703_53844[(1)] = (4));

(statearr_53703_53844[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (10))){
var inst_53678 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_53684__$1 = state_53684;
var statearr_53704_53845 = state_53684__$1;
(statearr_53704_53845[(2)] = inst_53678);

(statearr_53704_53845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (8))){
var inst_53661 = (state_53684[(8)]);
var state_53684__$1 = state_53684;
var statearr_53705_53846 = state_53684__$1;
(statearr_53705_53846[(2)] = inst_53661);

(statearr_53705_53846[(1)] = (9));


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
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto__ = null;
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto____0 = (function (){
var statearr_53706 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53706[(0)] = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto__);

(statearr_53706[(1)] = (1));

return statearr_53706;
});
var com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto____1 = (function (state_53684){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_53684);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e53707){var ex__42124__auto__ = e53707;
var statearr_53708_53847 = state_53684;
(statearr_53708_53847[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_53684[(4)]))){
var statearr_53709_53848 = state_53684;
(statearr_53709_53848[(1)] = cljs.core.first((state_53684[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53850 = state_53684;
state_53684 = G__53850;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto__ = function(state_53684){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto____1.call(this,state_53684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto____0;
com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto____1;
return com$wsscode$async$async_cljs$timeout_chan_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_53710 = f__42153__auto__();
(statearr_53710[(6)] = c__42152__auto___53833);

return statearr_53710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
});
com.wsscode.async.async_cljs.pulling_retry_STAR_ = (function com$wsscode$async$async_cljs$pulling_retry_STAR_(options,f){
var options_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(options))?options:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.async.async-cljs","done?","com.wsscode.async.async-cljs/done?",-143294146),options], null));
var map__53711 = options_SINGLEQUOTE_;
var map__53711__$1 = cljs.core.__destructure_map(map__53711);
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53711__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","done?","com.wsscode.async.async-cljs/done?",-143294146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53711__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","timeout","com.wsscode.async.async-cljs/timeout",-2054846554),(2000));
var retry_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53711__$1,new cljs.core.Keyword("com.wsscode.async.async-cljs","retry-ms","com.wsscode.async.async-cljs/retry-ms",-1284672644),(10));
var _STAR_stop_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var res = com.wsscode.async.async_cljs.timeout_chan(timeout,(function (){var ch__53544__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__42152__auto___53855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_53768){
var state_val_53769 = (state_53768[(1)]);
if((state_val_53769 === (7))){
var inst_53756 = (state_53768[(2)]);
var _ = (function (){var statearr_53771 = state_53768;
(statearr_53771[(4)] = cljs.core.rest((state_53768[(4)])));

return statearr_53771;
})();
var state_53768__$1 = state_53768;
var statearr_53772_53857 = state_53768__$1;
(statearr_53772_53857[(2)] = inst_53756);

(statearr_53772_53857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (20))){
var state_53768__$1 = state_53768;
var statearr_53773_53858 = state_53768__$1;
(statearr_53773_53858[(2)] = null);

(statearr_53773_53858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (27))){
var inst_53759 = (state_53768[(7)]);
var inst_53764 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53544__auto__,inst_53759);
var state_53768__$1 = state_53768;
var statearr_53774_53859 = state_53768__$1;
(statearr_53774_53859[(2)] = inst_53764);

(statearr_53774_53859[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (1))){
var state_53768__$1 = state_53768;
var statearr_53775_53860 = state_53768__$1;
(statearr_53775_53860[(2)] = null);

(statearr_53775_53860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (24))){
var inst_53752 = (state_53768[(2)]);
var state_53768__$1 = state_53768;
var statearr_53776_53861 = state_53768__$1;
(statearr_53776_53861[(2)] = inst_53752);

(statearr_53776_53861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (4))){
var inst_53712 = (state_53768[(2)]);
var state_53768__$1 = state_53768;
var statearr_53777_53862 = state_53768__$1;
(statearr_53777_53862[(2)] = inst_53712);

(statearr_53777_53862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (15))){
var inst_53722 = (state_53768[(8)]);
var inst_53731 = com.wsscode.async.async_cljs.promise__GT_chan(inst_53722);
var state_53768__$1 = state_53768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53768__$1,(18),inst_53731);
} else {
if((state_val_53769 === (21))){
var inst_53739 = (state_53768[(2)]);
var state_53768__$1 = state_53768;
var statearr_53778_53865 = state_53768__$1;
(statearr_53778_53865[(2)] = inst_53739);

(statearr_53778_53865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (13))){
var inst_53743 = (state_53768[(9)]);
var inst_53743__$1 = (state_53768[(2)]);
var inst_53744 = (done_QMARK_.cljs$core$IFn$_invoke$arity$1 ? done_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_53743__$1) : done_QMARK_.call(null,inst_53743__$1));
var state_53768__$1 = (function (){var statearr_53779 = state_53768;
(statearr_53779[(9)] = inst_53743__$1);

return statearr_53779;
})();
if(cljs.core.truth_(inst_53744)){
var statearr_53780_53866 = state_53768__$1;
(statearr_53780_53866[(1)] = (22));

} else {
var statearr_53781_53867 = state_53768__$1;
(statearr_53781_53867[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (22))){
var inst_53743 = (state_53768[(9)]);
var state_53768__$1 = state_53768;
var statearr_53782_53868 = state_53768__$1;
(statearr_53782_53868[(2)] = inst_53743);

(statearr_53782_53868[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (6))){
var inst_53719 = cljs.core.deref(_STAR_stop_QMARK_);
var state_53768__$1 = state_53768;
if(cljs.core.truth_(inst_53719)){
var statearr_53783_53869 = state_53768__$1;
(statearr_53783_53869[(1)] = (8));

} else {
var statearr_53784_53870 = state_53768__$1;
(statearr_53784_53870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (28))){
var inst_53766 = (state_53768[(2)]);
var state_53768__$1 = state_53768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53768__$1,inst_53766);
} else {
if((state_val_53769 === (25))){
var inst_53749 = (state_53768[(2)]);
var state_53768__$1 = (function (){var statearr_53790 = state_53768;
(statearr_53790[(10)] = inst_53749);

return statearr_53790;
})();
var statearr_53791_53875 = state_53768__$1;
(statearr_53791_53875[(2)] = null);

(statearr_53791_53875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (17))){
var inst_53741 = (state_53768[(2)]);
var state_53768__$1 = state_53768;
var statearr_53792_53876 = state_53768__$1;
(statearr_53792_53876[(2)] = inst_53741);

(statearr_53792_53876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (3))){
var inst_53759 = (state_53768[(7)]);
var inst_53759__$1 = (state_53768[(2)]);
var inst_53760 = (inst_53759__$1 == null);
var state_53768__$1 = (function (){var statearr_53793 = state_53768;
(statearr_53793[(7)] = inst_53759__$1);

return statearr_53793;
})();
if(cljs.core.truth_(inst_53760)){
var statearr_53794_53877 = state_53768__$1;
(statearr_53794_53877[(1)] = (26));

} else {
var statearr_53795_53878 = state_53768__$1;
(statearr_53795_53878[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (12))){
var inst_53722 = (state_53768[(8)]);
var inst_53729 = com.wsscode.async.async_cljs.promise_QMARK_(inst_53722);
var state_53768__$1 = state_53768;
if(cljs.core.truth_(inst_53729)){
var statearr_53796_53879 = state_53768__$1;
(statearr_53796_53879[(1)] = (15));

} else {
var statearr_53797_53880 = state_53768__$1;
(statearr_53797_53880[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (2))){
var _ = (function (){var statearr_53798 = state_53768;
(statearr_53798[(4)] = cljs.core.cons((5),(state_53768[(4)])));

return statearr_53798;
})();
var state_53768__$1 = state_53768;
var statearr_53799_53883 = state_53768__$1;
(statearr_53799_53883[(2)] = null);

(statearr_53799_53883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (23))){
var inst_53747 = cljs.core.async.timeout(retry_ms);
var state_53768__$1 = state_53768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53768__$1,(25),inst_53747);
} else {
if((state_val_53769 === (19))){
var inst_53722 = (state_53768[(8)]);
var state_53768__$1 = state_53768;
var statearr_53800_53886 = state_53768__$1;
(statearr_53800_53886[(2)] = inst_53722);

(statearr_53800_53886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (11))){
var inst_53722 = (state_53768[(8)]);
var state_53768__$1 = state_53768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53768__$1,(14),inst_53722);
} else {
if((state_val_53769 === (9))){
var inst_53722 = (state_53768[(8)]);
var inst_53722__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_53723 = com.wsscode.async.async_cljs.chan_QMARK_(inst_53722__$1);
var state_53768__$1 = (function (){var statearr_53802 = state_53768;
(statearr_53802[(8)] = inst_53722__$1);

return statearr_53802;
})();
if(inst_53723){
var statearr_53803_53887 = state_53768__$1;
(statearr_53803_53887[(1)] = (11));

} else {
var statearr_53804_53888 = state_53768__$1;
(statearr_53804_53888[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (5))){
var _ = (function (){var statearr_53805 = state_53768;
(statearr_53805[(4)] = cljs.core.rest((state_53768[(4)])));

return statearr_53805;
})();
var state_53768__$1 = state_53768;
var ex53801 = (state_53768__$1[(2)]);
var statearr_53806_53890 = state_53768__$1;
(statearr_53806_53890[(5)] = ex53801);


var statearr_53807_53891 = state_53768__$1;
(statearr_53807_53891[(1)] = (4));

(statearr_53807_53891[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (14))){
var inst_53726 = (state_53768[(2)]);
var inst_53727 = com.wsscode.async.async_cljs.throw_err(inst_53726);
var state_53768__$1 = state_53768;
var statearr_53808_53892 = state_53768__$1;
(statearr_53808_53892[(2)] = inst_53727);

(statearr_53808_53892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (26))){
var inst_53762 = cljs.core.async.close_BANG_(ch__53544__auto__);
var state_53768__$1 = state_53768;
var statearr_53809_53893 = state_53768__$1;
(statearr_53809_53893[(2)] = inst_53762);

(statearr_53809_53893[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (16))){
var state_53768__$1 = state_53768;
var statearr_53810_53895 = state_53768__$1;
(statearr_53810_53895[(1)] = (19));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (10))){
var inst_53754 = (state_53768[(2)]);
var state_53768__$1 = state_53768;
var statearr_53812_53896 = state_53768__$1;
(statearr_53812_53896[(2)] = inst_53754);

(statearr_53812_53896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (18))){
var inst_53733 = (state_53768[(2)]);
var inst_53734 = com.wsscode.async.async_cljs.consumer_pair(inst_53733);
var state_53768__$1 = state_53768;
var statearr_53813_53899 = state_53768__$1;
(statearr_53813_53899[(2)] = inst_53734);

(statearr_53813_53899[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53769 === (8))){
var state_53768__$1 = state_53768;
var statearr_53814_53902 = state_53768__$1;
(statearr_53814_53902[(2)] = null);

(statearr_53814_53902[(1)] = (10));


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
});
return (function() {
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__ = null;
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____0 = (function (){
var statearr_53815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53815[(0)] = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__);

(statearr_53815[(1)] = (1));

return statearr_53815;
});
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____1 = (function (state_53768){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_53768);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e53816){var ex__42124__auto__ = e53816;
var statearr_53817_53903 = state_53768;
(statearr_53817_53903[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_53768[(4)]))){
var statearr_53818_53930 = state_53768;
(statearr_53818_53930[(1)] = cljs.core.first((state_53768[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53932 = state_53768;
state_53768 = G__53932;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__ = function(state_53768){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____1.call(this,state_53768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____0;
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____1;
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_53819 = f__42153__auto__();
(statearr_53819[(6)] = c__42152__auto___53855);

return statearr_53819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return ch__53544__auto__;
})());
var c__42152__auto___53933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_53825){
var state_val_53826 = (state_53825[(1)]);
if((state_val_53826 === (1))){
var inst_53820 = cljs.core.async.timeout(timeout);
var state_53825__$1 = state_53825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53825__$1,(2),inst_53820);
} else {
if((state_val_53826 === (2))){
var inst_53822 = (state_53825[(2)]);
var inst_53823 = cljs.core.reset_BANG_(_STAR_stop_QMARK_,true);
var state_53825__$1 = (function (){var statearr_53827 = state_53825;
(statearr_53827[(7)] = inst_53822);

return statearr_53827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53825__$1,inst_53823);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__ = null;
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____0 = (function (){
var statearr_53828 = [null,null,null,null,null,null,null,null];
(statearr_53828[(0)] = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__);

(statearr_53828[(1)] = (1));

return statearr_53828;
});
var com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____1 = (function (state_53825){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_53825);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e53829){var ex__42124__auto__ = e53829;
var statearr_53830_53938 = state_53825;
(statearr_53830_53938[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_53825[(4)]))){
var statearr_53831_53940 = state_53825;
(statearr_53831_53940[(1)] = cljs.core.first((state_53825[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53941 = state_53825;
state_53825 = G__53941;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__ = function(state_53825){
switch(arguments.length){
case 0:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____1.call(this,state_53825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____0;
com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto____1;
return com$wsscode$async$async_cljs$pulling_retry_STAR__$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_53832 = f__42153__auto__();
(statearr_53832[(6)] = c__42152__auto___53933);

return statearr_53832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


return res;
});

//# sourceMappingURL=com.wsscode.async.async_cljs.js.map
