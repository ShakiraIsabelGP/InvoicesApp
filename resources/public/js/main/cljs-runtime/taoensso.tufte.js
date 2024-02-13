goog.provide('taoensso.tufte');
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(31),(0)], null));
taoensso.tufte.valid_call_level_QMARK_ = (function taoensso$tufte$valid_call_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__94301 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__94301.cljs$core$IFn$_invoke$arity$1 ? fexpr__94301.cljs$core$IFn$_invoke$arity$1(x) : fexpr__94301.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.valid_min_level_QMARK_ = (function taoensso$tufte$valid_min_level_QMARK_(x){
if(cljs.core.truth_((function (){var fexpr__94302 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__94302.cljs$core$IFn$_invoke$arity$1 ? fexpr__94302.cljs$core$IFn$_invoke$arity$1(x) : fexpr__94302.call(null,x));
})())){
return true;
} else {
return false;
}
});
taoensso.tufte.invalid_call_level_msg = "Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}";
taoensso.tufte.invalid_min_level_msg = "Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}";
taoensso.tufte.valid_call_level = (function taoensso$tufte$valid_call_level(x){
var or__5045__auto__ = (function (){var fexpr__94303 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(0),null,(1),null,(4),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__94303.cljs$core$IFn$_invoke$arity$1 ? fexpr__94303.cljs$core$IFn$_invoke$arity$1(x) : fexpr__94303.call(null,x));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Tufte profiling level: should be int e/o #{0 1 2 3 4 5}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});
taoensso.tufte.valid_min_level = (function taoensso$tufte$valid_min_level(x){
var or__5045__auto__ = (function (){var fexpr__94304 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(0),null,(1),null,(4),null,(6),null,(3),null,(2),null,(5),null], null), null);
return (fexpr__94304.cljs$core$IFn$_invoke$arity$1 ? fexpr__94304.cljs$core$IFn$_invoke$arity$1(x) : fexpr__94304.call(null,x));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid minimum Tufte profiling level: should be int e/o #{0 1 2 3 4 5 6}",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});
/**
 * Integer e/o #{0 1 2 3 4 5 6}, or vector mapping ns-patterns to min-levels:
 *  [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]]
 * 
 *   See `*ns-filter*` for example patterns.
 */
taoensso.tufte._STAR_min_level_STAR_ = (2);
/**
 * (fn may-profile-ns? [ns]) predicate, or ns-pattern.
 *   Example ns-patterns:
 *  #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *  {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}
 */
taoensso.tufte._STAR_ns_filter_STAR_ = "*";
var fn_QMARK__94382 = cljs.core.fn_QMARK_;
var compile_94383 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__94384 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__94305 = compile_94383(x);
return (fexpr__94305.cljs$core$IFn$_invoke$arity$1 ? fexpr__94305.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__94305.call(null,ns));
}));
var conform_QMARK__94385 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__94382.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__94382.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__94382.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return conform_QMARK__STAR__94384(ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.tufte.may_profile_ns_QMARK_ = (function taoensso$tufte$may_profile_ns_QMARK_(var_args){
var G__94307 = arguments.length;
switch (G__94307) {
case 1:
return taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (ns){
if(cljs.core.truth_(conform_QMARK__94385(taoensso.tufte._STAR_ns_filter_STAR_,ns))){
return true;
} else {
return false;
}
}));

(taoensso.tufte.may_profile_ns_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__94385(ns_filter,ns))){
return true;
} else {
return false;
}
}));

(taoensso.tufte.may_profile_ns_QMARK_.cljs$lang$maxFixedArity = 2);


/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.tufte.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p__94308){
var vec__94309 = p__94308;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94309,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94309,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__94384(ns_pattern,ns))){
return taoensso.tufte.valid_min_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_min_level_94387 = taoensso.tufte.valid_min_level;
var ns__GT__QMARK_min_level_94388 = taoensso.tufte.ns__GT__QMARK_min_level;
taoensso.tufte.get_min_level = (function taoensso$tufte$get_min_level(default$,x,ns){
var G__94312 = (function (){var or__5045__auto__ = ((cljs.core.vector_QMARK_(x))?ns__GT__QMARK_min_level_94388(x,ns):x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
})();
return (valid_min_level_94387.cljs$core$IFn$_invoke$arity$1 ? valid_min_level_94387.cljs$core$IFn$_invoke$arity$1(G__94312) : valid_min_level_94387.call(null,G__94312));
});
var valid_call_level_94389 = taoensso.tufte.valid_call_level;
var may_profile_ns_QMARK__94390 = taoensso.tufte.may_profile_ns_QMARK_;
var get_min_level_94391 = taoensso.tufte.get_min_level;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.tufte.may_profile_QMARK_ = (function taoensso$tufte$may_profile_QMARK_(var_args){
var G__94314 = arguments.length;
switch (G__94314) {
case 1:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2(level,cljs.core._STAR_ns_STAR_);
}));

(taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,ns){
if(((valid_call_level_94389.cljs$core$IFn$_invoke$arity$1 ? valid_call_level_94389.cljs$core$IFn$_invoke$arity$1(level) : valid_call_level_94389.call(null,level)) >= cljs.core.long$((get_min_level_94391.cljs$core$IFn$_invoke$arity$3 ? get_min_level_94391.cljs$core$IFn$_invoke$arity$3((6),taoensso.tufte._STAR_min_level_STAR_,ns) : get_min_level_94391.call(null,(6),taoensso.tufte._STAR_min_level_STAR_,ns))))){
if(cljs.core.truth_((may_profile_ns_QMARK__94390.cljs$core$IFn$_invoke$arity$2 ? may_profile_ns_QMARK__94390.cljs$core$IFn$_invoke$arity$2(taoensso.tufte._STAR_ns_filter_STAR_,ns) : may_profile_ns_QMARK__94390.call(null,taoensso.tufte._STAR_ns_filter_STAR_,ns)))){
return true;
} else {
return false;
}
} else {
return false;
}
}));

(taoensso.tufte.may_profile_QMARK_.cljs$lang$maxFixedArity = 2);


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
taoensso.tufte.HandlerVal = (function (ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line,__meta,__extmap,__hash){
this.ns_str = ns_str;
this.level = level;
this._QMARK_id = _QMARK_id;
this._QMARK_data = _QMARK_data;
this.pstats = pstats;
this.pstats_str_ = pstats_str_;
this._QMARK_file = _QMARK_file;
this._QMARK_line = _QMARK_line;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k94316,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__94320 = k94316;
var G__94320__$1 = (((G__94320 instanceof cljs.core.Keyword))?G__94320.fqn:null);
switch (G__94320__$1) {
case "ns-str":
return self__.ns_str;

break;
case "level":
return self__.level;

break;
case "?id":
return self__._QMARK_id;

break;
case "?data":
return self__._QMARK_data;

break;
case "pstats":
return self__.pstats;

break;
case "pstats-str_":
return self__.pstats_str_;

break;
case "?file":
return self__._QMARK_file;

break;
case "?line":
return self__._QMARK_line;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k94316,else__5346__auto__);

}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__94321){
var vec__94322 = p__94321;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94322,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94322,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#taoensso.tufte.HandlerVal{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pstats","pstats",276614232),self__.pstats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),self__.pstats_str_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line],null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__94315){
var self__ = this;
var G__94315__$1 = this;
return (new cljs.core.RecordIter((0),G__94315__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"pstats","pstats",276614232),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-274730077 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this94317,other94318){
var self__ = this;
var this94317__$1 = this;
return (((!((other94318 == null)))) && ((((this94317__$1.constructor === other94318.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94317__$1.ns_str,other94318.ns_str)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94317__$1.level,other94318.level)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94317__$1._QMARK_id,other94318._QMARK_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94317__$1._QMARK_data,other94318._QMARK_data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94317__$1.pstats,other94318.pstats)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94317__$1.pstats_str_,other94318.pstats_str_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94317__$1._QMARK_file,other94318._QMARK_file)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94317__$1._QMARK_line,other94318._QMARK_line)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94317__$1.__extmap,other94318.__extmap)))))))))))))))))))));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"?file","?file",1533429675),null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"?line","?line",-631853385),null,new cljs.core.Keyword(null,"pstats","pstats",276614232),null,new cljs.core.Keyword(null,"?id","?id",-712098248),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k94316){
var self__ = this;
var this__5350__auto____$1 = this;
var G__94325 = k94316;
var G__94325__$1 = (((G__94325 instanceof cljs.core.Keyword))?G__94325.fqn:null);
switch (G__94325__$1) {
case "ns-str":
case "level":
case "?id":
case "?data":
case "pstats":
case "pstats-str_":
case "?file":
case "?line":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k94316);

}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__94315){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__94326 = cljs.core.keyword_identical_QMARK_;
var expr__94327 = k__5352__auto__;
if(cljs.core.truth_((pred__94326.cljs$core$IFn$_invoke$arity$2 ? pred__94326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),expr__94327) : pred__94326.call(null,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),expr__94327)))){
return (new taoensso.tufte.HandlerVal(G__94315,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__94326.cljs$core$IFn$_invoke$arity$2 ? pred__94326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552),expr__94327) : pred__94326.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__94327)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,G__94315,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__94326.cljs$core$IFn$_invoke$arity$2 ? pred__94326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?id","?id",-712098248),expr__94327) : pred__94326.call(null,new cljs.core.Keyword(null,"?id","?id",-712098248),expr__94327)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,G__94315,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__94326.cljs$core$IFn$_invoke$arity$2 ? pred__94326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?data","?data",-9471433),expr__94327) : pred__94326.call(null,new cljs.core.Keyword(null,"?data","?data",-9471433),expr__94327)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,G__94315,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__94326.cljs$core$IFn$_invoke$arity$2 ? pred__94326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pstats","pstats",276614232),expr__94327) : pred__94326.call(null,new cljs.core.Keyword(null,"pstats","pstats",276614232),expr__94327)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,G__94315,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__94326.cljs$core$IFn$_invoke$arity$2 ? pred__94326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),expr__94327) : pred__94326.call(null,new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),expr__94327)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,G__94315,self__._QMARK_file,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__94326.cljs$core$IFn$_invoke$arity$2 ? pred__94326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?file","?file",1533429675),expr__94327) : pred__94326.call(null,new cljs.core.Keyword(null,"?file","?file",1533429675),expr__94327)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,G__94315,self__._QMARK_line,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__94326.cljs$core$IFn$_invoke$arity$2 ? pred__94326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"?line","?line",-631853385),expr__94327) : pred__94326.call(null,new cljs.core.Keyword(null,"?line","?line",-631853385),expr__94327)))){
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,G__94315,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__94315),null));
}
}
}
}
}
}
}
}
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),self__.ns_str,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"level","level",1290497552),self__.level,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?id","?id",-712098248),self__._QMARK_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?data","?data",-9471433),self__._QMARK_data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pstats","pstats",276614232),self__.pstats,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),self__.pstats_str_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?file","?file",1533429675),self__._QMARK_file,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"?line","?line",-631853385),self__._QMARK_line,null))], null),self__.__extmap));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__94315){
var self__ = this;
var this__5342__auto____$1 = this;
return (new taoensso.tufte.HandlerVal(self__.ns_str,self__.level,self__._QMARK_id,self__._QMARK_data,self__.pstats,self__.pstats_str_,self__._QMARK_file,self__._QMARK_line,G__94315,self__.__extmap,self__.__hash));
}));

(taoensso.tufte.HandlerVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(taoensso.tufte.HandlerVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns-str","ns-str",-422084972,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?data","?data",1631060094,null),new cljs.core.Symbol(null,"pstats","pstats",1917145759,null),new cljs.core.Symbol(null,"pstats-str_","pstats-str_",-735205348,null),new cljs.core.Symbol(null,"?file","?file",-1121006094,null),new cljs.core.Symbol(null,"?line","?line",1008678142,null)], null);
}));

(taoensso.tufte.HandlerVal.cljs$lang$type = true);

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"taoensso.tufte/HandlerVal",null,(1),null));
}));

(taoensso.tufte.HandlerVal.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"taoensso.tufte/HandlerVal");
}));

/**
 * Positional factory function for taoensso.tufte/HandlerVal.
 */
taoensso.tufte.__GT_HandlerVal = (function taoensso$tufte$__GT_HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line){
return (new taoensso.tufte.HandlerVal(ns_str,level,_QMARK_id,_QMARK_data,pstats,pstats_str_,_QMARK_file,_QMARK_line,null,null,null));
});

/**
 * Factory function for taoensso.tufte/HandlerVal, taking a map of keywords to field values.
 */
taoensso.tufte.map__GT_HandlerVal = (function taoensso$tufte$map__GT_HandlerVal(G__94319){
var extmap__5385__auto__ = (function (){var G__94329 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__94319,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?id","?id",-712098248),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"pstats","pstats",276614232),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"?line","?line",-631853385)], 0));
if(cljs.core.record_QMARK_(G__94319)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__94329);
} else {
return G__94329;
}
})();
return (new taoensso.tufte.HandlerVal(new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(G__94319),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__94319),new cljs.core.Keyword(null,"?id","?id",-712098248).cljs$core$IFn$_invoke$arity$1(G__94319),new cljs.core.Keyword(null,"?data","?data",-9471433).cljs$core$IFn$_invoke$arity$1(G__94319),new cljs.core.Keyword(null,"pstats","pstats",276614232).cljs$core$IFn$_invoke$arity$1(G__94319),new cljs.core.Keyword(null,"pstats-str_","pstats-str_",1919230421).cljs$core$IFn$_invoke$arity$1(G__94319),new cljs.core.Keyword(null,"?file","?file",1533429675).cljs$core$IFn$_invoke$arity$1(G__94319),new cljs.core.Keyword(null,"?line","?line",-631853385).cljs$core$IFn$_invoke$arity$1(G__94319),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * {<handler-id> <handler-fn>}
 */
taoensso.tufte.handlers_ = taoensso.tufte.impl.handlers_;
taoensso.tufte.remove_handler_BANG_ = (function taoensso$tufte$remove_handler_BANG_(handler_id){
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(taoensso.tufte.handlers_,cljs.core.dissoc,handler_id)));
});
/**
 * Use this to register interest in stats output produced by `profile` calls.
 *   Each registered `handler-fn` will be called as:
 * 
 *  (handler-fn {:ns-str _ :level _ :?id _ :?data _ :pstats _ :pstats-str_ _})
 * 
 *   Map args:
 *  :ns-str      - Namespace string where `profile` call took place
 *  :level       - Level e/o #{0 1 2 3 4 5}, given in `(profile {:level _} ...)`
 *  :?id         - Optional group id,        given in `(profile {:id    _} ...)`
 *  :?data       - Optional arb data,        given in `(profile {:data  _} ...)`
 *  :pstats      - As in `(second (profiled ...))`. Derefable, mergeable.
 *  :pstats-str_ - `(delay (format-pstats pstats))
 * 
 *   Error handling (NB):
 *  Handler errors will be silently swallowed. Please `try`/`catch` and
 *  appropriately deal with (e.g. log) possible errors *within* `handler-fn`.
 * 
 *   Async/blocking:
 *  `handler-fn` should ideally be non-blocking, or reasonably cheap. Handler
 *   dispatch occurs through a 1-thread 1k-buffer dropping queue.
 * 
 *   Ns filtering:
 *  Provide an optional `ns-pattern` arg to only call handler for matching
 *  namespaces. See `*ns-filter*` for example patterns.
 * 
 *   Handler ideas:
 *  Save to a db, log, `put!` to an appropriate `core.async` channel, filter,
 *  aggregate, use for a realtime analytics dashboard, examine for outliers
 *  or unexpected output, ...
 */
taoensso.tufte.add_handler_BANG_ = (function taoensso$tufte$add_handler_BANG_(var_args){
var G__94331 = arguments.length;
switch (G__94331) {
case 2:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,handler_fn){
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,null,handler_fn);
}));

(taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,ns_pattern,handler_fn){
var f = (((((ns_pattern == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,"*"))))?handler_fn:(function (){var nsf_QMARK_ = taoensso.encore.compile_str_filter(ns_pattern);
return (function (m){
if(cljs.core.truth_(nsf_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499))))){
return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(m) : handler_fn.call(null,m));
} else {
return null;
}
});
})());
return cljs.core.set(cljs.core.keys(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(taoensso.tufte.handlers_,cljs.core.assoc,handler_id,f)));
}));

(taoensso.tufte.add_handler_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Adds a simple handler that logs `profile` stats output with `println`.
 */
taoensso.tufte.add_basic_println_handler_BANG_ = (function taoensso$tufte$add_basic_println_handler_BANG_(p__94332){
var map__94333 = p__94332;
var map__94333__$1 = cljs.core.__destructure_map(map__94333);
var ns_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94333__$1,new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986),"*");
var handler_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94333__$1,new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),new cljs.core.Keyword(null,"basic-println","basic-println",-1128346249));
var format_pstats_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94333__$1,new cljs.core.Keyword(null,"format-pstats-opts","format-pstats-opts",-106329474));
return taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,ns_pattern,(function (p__94334){
var map__94335 = p__94334;
var map__94335__$1 = cljs.core.__destructure_map(map__94335);
var _QMARK_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94335__$1,new cljs.core.Keyword(null,"?id","?id",-712098248));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94335__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var pstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94335__$1,new cljs.core.Keyword(null,"pstats","pstats",276614232));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(_QMARK_id)?["\nid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_id)].join(''):null),(cljs.core.truth_(_QMARK_data)?["\ndata: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_data)].join(''):null),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2 ? taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(pstats,format_pstats_opts) : taoensso.tufte.format_pstats.call(null,pstats,format_pstats_opts)))].join('')], 0));
}));
});
/**
 * Returns a cached (fn [id]) -> abbreviated id string.
 *   Takes `n` (default 1), the number of namespace parts to keep unabbreviated.
 * 
 *   Examples:
 *  ((format-id-abbr)   :foo)                     => "foo"
 *  ((format-id-abbr)   :example.hello/foo)       => "e.hello/foo"
 *  ((format-id-abbr 1) :example.hello/foo)       => "e.hello/foo"
 *  ((format-id-abbr 1) :example.hello.world/foo) => "e.h.world/foo"
 *  ((format-id-abbr 2) :example.hello.world/foo) => "e.hello.world/foo"
 *  ((format-id-abbr 0) :example.hello.world/foo) => "e.h.w/foo"
 */
taoensso.tufte.format_id_abbr = (function taoensso$tufte$format_id_abbr(var_args){
var G__94337 = arguments.length;
switch (G__94337) {
case 0:
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1((1));
}));

(taoensso.tufte.format_id_abbr.cljs$core$IFn$_invoke$arity$1 = (function (n){
var n__$1 = cljs.core.long$((function (){var e = (function (){try{if(taoensso.encore.int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e94338){if((e94338 instanceof Error)){
var e = e94338;
return e;
} else {
throw e94338;

}
}})();
if((e == null)){
return n;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.tufte","taoensso.tufte",-998627467,null),273,new cljs.core.Symbol("enc","int?","enc/int?",1799563463,null),n,e,null);
}
})());
return taoensso.encore.fmemoize((function (id){
var kw = (((id instanceof cljs.core.Keyword))?id:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((typeof id === 'string')?id:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.tufte","taoensso.tufte",-998627467,null),276,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),id,null,null))));
var ns_parts = cljs.core.pop(taoensso.encore.explode_keyword(kw));
var cnt = cljs.core.count(ns_parts);
var sb = taoensso.encore.reduce_indexed((function (sb,idx,in$){
if((idx === (0))){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,".");
}

if(((cnt - idx) <= n__$1)){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3(in$,(0),(1)));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),ns_parts);
if((cnt > (0))){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"/");
} else {
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.str_replace(cljs.core.name(kw),/^defn_/,""));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}));
}));

(taoensso.tufte.format_id_abbr.cljs$lang$maxFixedArity = 1);

/**
 * Returns e/o #{nil :thread :dynamic}.
 */
taoensso.tufte.profiling_QMARK_ = (function taoensso$tufte$profiling_QMARK_(){
if(cljs.core.truth_(taoensso.tufte.impl._STAR_pdata_STAR_)){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571);
} else {
if(cljs.core.truth_(taoensso.tufte.impl.pdata_local_get())){
return new cljs.core.Keyword(null,"thread","thread",947001524);
} else {
return null;
}
}
});
taoensso.tufte.default_nmax = cljs.core.long$(800000.0);
/**
 * Note: this is a low-level primitive for advanced users!
 *   Returns a new pdata object for use with `with-profiling` and/or `capture-time!`.
 *   Deref to get pstats:
 * 
 *  (let [pd (new-pdata)
 *        t0 (System/nanoTime)]
 *    (with-profiling pd {}
 *      (p :foo (Thread/sleep 100))
 *      (capture-time! pd :bar (- t0 (System/nanoTime))))
 *    (deref pd))
 * 
 *   Dynamic (thread-safe) by default.
 *   *WARNING*: don't change this default unless you're very sure the resulting
 *   pdata object will not be concurrently modified across threads. Concurrent
 *   modification will lead to bad data and/or exceptions!
 */
taoensso.tufte.new_pdata = (function taoensso$tufte$new_pdata(var_args){
var G__94340 = arguments.length;
switch (G__94340) {
case 0:
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.tufte.new_pdata.cljs$core$IFn$_invoke$arity$1 = (function (p__94341){
var map__94342 = p__94341;
var map__94342__$1 = cljs.core.__destructure_map(map__94342);
var dynamic_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94342__$1,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),true);
var nmax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94342__$1,new cljs.core.Keyword(null,"nmax","nmax",608994404),taoensso.tufte.default_nmax);
if(cljs.core.truth_(dynamic_QMARK_)){
return taoensso.tufte.impl.new_pdata_dynamic(nmax);
} else {
return taoensso.tufte.impl.new_pdata_local(nmax);
}
}));

(taoensso.tufte.new_pdata.cljs$lang$maxFixedArity = 1);

/**
 * Note: this is a low-level primitive for advanced users!
 *   Can be useful when tracking time across arbitrary thread boundaries or for
 *   async jobs / callbacks / etc.
 * 
 *   See `new-pdata` for more info on low-level primitives.
 */
taoensso.tufte.capture_time_BANG_ = (function taoensso$tufte$capture_time_BANG_(var_args){
var G__94344 = arguments.length;
switch (G__94344) {
case 3:
return taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pdata,id,nano_secs_elapsed){
return taoensso.tufte.impl.capture_time_BANG_(pdata,id,nano_secs_elapsed);
}));

(taoensso.tufte.capture_time_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,nano_secs_elapsed){
var temp__5804__auto__ = (function (){var or__5045__auto__ = taoensso.tufte.impl._STAR_pdata_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return taoensso.tufte.impl.pdata_local_get();
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pd = temp__5804__auto__;
return taoensso.tufte.impl.capture_time_BANG_(pd,id,nano_secs_elapsed);
} else {
return null;
}
}));

(taoensso.tufte.capture_time_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.tufte.valid_compile_time_opts = (function taoensso$tufte$valid_compile_time_opts(dynamic_QMARK_,nmax){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null),dynamic_QMARK_)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[profile/d] `:dynamic?` opt must be compile-time bool value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),dynamic_QMARK_], null));
}

if(cljs.core.integer_QMARK_(nmax)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[profile/d] `:nmax` opt must be compile-time integer value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),nmax], null));
}
});
/**
 * Wraps `taoensso.encore/compile-str-filter`.
 */
taoensso.tufte.compile_ns_filter = (function taoensso$tufte$compile_ns_filter(ns_pattern){
return taoensso.encore.compile_str_filter(ns_pattern);
});
/**
 * Returns true with 0<`p`<1 probability.
 */
taoensso.tufte.chance = (function taoensso$tufte$chance(p){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < p);
});
/**
 * Statistics are lossless unless data to merge are very large.
 */
taoensso.tufte.merge_pstats = (function taoensso$tufte$merge_pstats(var_args){
var G__94350 = arguments.length;
switch (G__94350) {
case 0:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$1 = (function (ps0){
return ps0;
}));

(taoensso.tufte.merge_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps0,ps1){
return taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2(ps0,ps1);
}));

(taoensso.tufte.merge_pstats.cljs$lang$maxFixedArity = 2);

/**
 * Formats given pstats to a string table.
 *  Accounted < Clock => Some work was done that wasn't tracked by any p forms.
 *  Accounted > Clock => Nested p forms, and/or parallel threads.
 */
taoensso.tufte.format_pstats = (function taoensso$tufte$format_pstats(var_args){
var G__94352 = arguments.length;
switch (G__94352) {
case 1:
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$1 = (function (ps){
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(ps,null);
}));

(taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2 = (function (ps,opts){
if(cljs.core.truth_(ps)){
var map__94353 = (((ps instanceof taoensso.tufte.impl.PStats))?cljs.core.deref(ps):ps);
var map__94353__$1 = cljs.core.__destructure_map(map__94353);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94353__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94353__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
return taoensso.tufte.stats.format_stats(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clock,new cljs.core.Keyword(null,"total","total",1916810418)),stats,opts);
} else {
return null;
}
}));

(taoensso.tufte.format_pstats.cljs$lang$maxFixedArity = 2);

taoensso.tufte.fn_sigs = (function taoensso$tufte$fn_sigs(def_QMARK_,_QMARK_meta_pid,fn_sym,sigs){
var single_arity_QMARK_ = cljs.core.vector_QMARK_(cljs.core.first(sigs));
var sigs__$1 = ((single_arity_QMARK_)?(new cljs.core.List(null,sigs,null,(1),null)):sigs);
var base_id = (cljs.core.truth_(_QMARK_meta_pid)?taoensso.encore.as_qname(_QMARK_meta_pid):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",(cljs.core.truth_(def_QMARK_)?"defn_":"fn_"),cljs.core.name(fn_sym)].join(''));
var get_id = ((single_arity_QMARK_)?(function (fn_sym__$1,_params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_id);
}):(function (fn_sym__$1,params){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_id),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params))].join(''));
}));
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__94354){
var vec__94355 = p__94354;
var seq__94356 = cljs.core.seq(vec__94355);
var first__94357 = cljs.core.first(seq__94356);
var seq__94356__$1 = cljs.core.next(seq__94356);
var params = first__94357;
var others = seq__94356__$1;
var has_prepost_map_QMARK_ = ((cljs.core.map_QMARK_(cljs.core.first(others))) && (cljs.core.next(others)));
var vec__94358 = ((has_prepost_map_QMARK_)?others:cljs.core.cons(null,others));
var seq__94359 = cljs.core.seq(vec__94358);
var first__94360 = cljs.core.first(seq__94359);
var seq__94359__$1 = cljs.core.next(seq__94359);
var _QMARK_prepost_map = first__94360;
var body = seq__94359__$1;
if(cljs.core.truth_(_QMARK_prepost_map)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,_QMARK_prepost_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null),null,(1),null)),(new cljs.core.List(null,get_id(fn_sym,params),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","p","taoensso.tufte/p",955444208,null),null,(1),null)),(new cljs.core.List(null,get_id(fn_sym,params),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
}),sigs__$1);
return new_sigs;
});
taoensso.tufte.sacc_drain_and_merge_BANG_ = (function taoensso$tufte$sacc_drain_and_merge_BANG_(pstats_){
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(pstats_,cljs.core.PersistentArrayMap.EMPTY);
});
taoensso.tufte.sacc_add_BANG_ = (function taoensso$tufte$sacc_add_BANG_(pstats_,group_id,ps){
if(cljs.core.truth_((function (){var and__5043__auto__ = group_id;
if(cljs.core.truth_(and__5043__auto__)){
return ps;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pstats_,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,group_id,taoensso.tufte.impl.merge_pstats.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,group_id),ps));
}));

return true;
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.tufte.StatsAccumulator = (function (pstats_){
this.pstats_ = pstats_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.StatsAccumulator.prototype.call = (function (unused__17480__auto__){
var self__ = this;
var self__ = this;
var G__94362 = (arguments.length - (1));
switch (G__94362) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.tufte.StatsAccumulator.prototype.apply = (function (self__,args94361){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args94361)));
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IFn$_invoke$arity$2 = (function (group_id,ps){
var self__ = this;
var _ = this;
return taoensso.tufte.sacc_add_BANG_(self__.pstats_,group_id,ps);
}));

(taoensso.tufte.StatsAccumulator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.tufte.sacc_drain_and_merge_BANG_(self__.pstats_);
}));

(taoensso.tufte.StatsAccumulator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pstats_","pstats_",-970084866,null)], null);
}));

(taoensso.tufte.StatsAccumulator.cljs$lang$type = true);

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorStr = "taoensso.tufte/StatsAccumulator");

(taoensso.tufte.StatsAccumulator.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"taoensso.tufte/StatsAccumulator");
}));

/**
 * Positional factory function for taoensso.tufte/StatsAccumulator.
 */
taoensso.tufte.__GT_StatsAccumulator = (function taoensso$tufte$__GT_StatsAccumulator(pstats_){
return (new taoensso.tufte.StatsAccumulator(pstats_));
});

/**
 * Alpha, subject to change.
 *   Small util to help merge pstats from multiple runs or threads.
 * 
 *   Returns a stateful StatsAccumulator (`sacc`) with:
 *  - `(sacc <group-id> <pstats>)` ; Merges given pstats under given group id
 *  - `@sacc`                      ; Drains accumulator and returns {<group-id> <merged-pstats>}
 * 
 *   Note that you may want some kind of async/buffer/serialization
 *   mechanism in front of merge calls for performance (e.g. by using an agent).
 * 
 *   See also `add-accumulating-handler!`, example clj project.
 */
taoensso.tufte.stats_accumulator = (function taoensso$tufte$stats_accumulator(){
return (new taoensso.tufte.StatsAccumulator(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)));
});
/**
 * Alpha, subject to change.
 * 
 *   Creates a new StatsAccumulator (and agent in clj), then
 *   registers a handler to accumulate `profile` output to the
 *   StatsAccumulator using the agent.
 * 
 *   Returns the StatsAccumulator. You can deref the result to
 *   drain the accumulator and return {<group-id> <merged-pstats>}.
 * 
 *   One common pattern is to deref the accumulator every n
 *   minutes/etc. to get a view of total-system performance over
 *   the period, e.g.:
 * 
 *   (defonce my-sacc (add-accumulating-handler! {:ns-pattern "*"}))
 *   (defonce my-sacc-drainer
 *  ;; Will drain and print formatted stats every minute
 *  (future
 *    (while true
 *      (when-let [m (not-empty @my-sacc)]
 *        (println (format-grouped-pstats m)))
 *      (Thread/sleep 60000))))
 * 
 *   (profile ...) ; Used elsewhere in your application, e.g.
 *              ; wrapping relevant Ring routes in a web application.
 * 
 *   See also `format-grouped-pstats`, example clj project.
 */
taoensso.tufte.add_accumulating_handler_BANG_ = (function taoensso$tufte$add_accumulating_handler_BANG_(p__94363){
var map__94364 = p__94363;
var map__94364__$1 = cljs.core.__destructure_map(map__94364);
var ns_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94364__$1,new cljs.core.Keyword(null,"ns-pattern","ns-pattern",-1760120986),"*");
var handler_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94364__$1,new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),new cljs.core.Keyword(null,"accumulating","accumulating",988482775));
var sacc = taoensso.tufte.stats_accumulator();
var agent_ = null;
taoensso.tufte.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,ns_pattern,(function (p__94365){
var map__94366 = p__94365;
var map__94366__$1 = cljs.core.__destructure_map(map__94366);
var _QMARK_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94366__$1,new cljs.core.Keyword(null,"?id","?id",-712098248));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94366__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var pstats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94366__$1,new cljs.core.Keyword(null,"pstats","pstats",276614232));
var id = (function (){var or__5045__auto__ = _QMARK_id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("tufte","nil-id","tufte/nil-id",1406139614);
}
})();
return (sacc.cljs$core$IFn$_invoke$arity$2 ? sacc.cljs$core$IFn$_invoke$arity$2(id,pstats) : sacc.call(null,id,pstats));
}));

return sacc;
});
/**
 * Alpha, subject to change.
 *   Takes a map of {<group-id> <PStats>} and formats a combined
 *   output string using `format-pstats`.
 * 
 *   See also example clj project.
 */
taoensso.tufte.format_grouped_pstats = (function taoensso$tufte$format_grouped_pstats(var_args){
var G__94368 = arguments.length;
switch (G__94368) {
case 1:
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(taoensso.tufte.format_grouped_pstats.cljs$core$IFn$_invoke$arity$2 = (function (m,p__94369){
var map__94370 = p__94369;
var map__94370__$1 = cljs.core.__destructure_map(map__94370);
var group_sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94370__$1,new cljs.core.Keyword(null,"group-sort-fn","group-sort-fn",1474480015),(function (m__$1){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null),(0));
}));
var format_pstats_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94370__$1,new cljs.core.Keyword(null,"format-pstats-opts","format-pstats-opts",-106329474));
if(cljs.core.truth_(m)){
var m__$1 = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,taoensso.encore.force_ref(v));
}),cljs.core.transient$(m),m));
var sorted_group_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__94371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,id);
return (group_sort_fn.cljs$core$IFn$_invoke$arity$1 ? group_sort_fn.cljs$core$IFn$_invoke$arity$1(G__94371) : group_sort_fn.call(null,G__94371));
}),taoensso.encore.rcompare,cljs.core.keys(m__$1));
var max_id_width = cljs.core.reduce_kv((function (acc,_,p__94372){
var map__94373 = p__94372;
var map__94373__$1 = cljs.core.__destructure_map(map__94373);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94373__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94373__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
var temp__5802__auto__ = taoensso.tufte.stats.get_max_id_width(stats,format_pstats_opts);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
if((cljs.core.long$(c) > acc)){
return c;
} else {
return acc;
}
} else {
return acc;
}
}),(0),m__$1);
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3("\n\n",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),",\n",taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,id),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(format_pstats_opts,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373),max_id_width))].join('');
})),sorted_group_ids);
} else {
return null;
}
}));

(taoensso.tufte.format_grouped_pstats.cljs$lang$maxFixedArity = 2);

var ret__5824__auto___94412 = (function (){
/**
 * Deprecated, just use `binding`
 */
taoensso.tufte.with_min_level = (function taoensso$tufte$with_min_level(var_args){
var args__5775__auto__ = [];
var len__5769__auto___94413 = arguments.length;
var i__5770__auto___94414 = (0);
while(true){
if((i__5770__auto___94414 < len__5769__auto___94413)){
args__5775__auto__.push((arguments[i__5770__auto___94414]));

var G__94415 = (i__5770__auto___94414 + (1));
i__5770__auto___94414 = G__94415;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.tufte.with_min_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","*min-level*","taoensso.tufte/*min-level*",-1012922549,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.tufte.with_min_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.tufte.with_min_level.cljs$lang$applyTo = (function (seq94374){
var G__94375 = cljs.core.first(seq94374);
var seq94374__$1 = cljs.core.next(seq94374);
var G__94376 = cljs.core.first(seq94374__$1);
var seq94374__$2 = cljs.core.next(seq94374__$1);
var G__94377 = cljs.core.first(seq94374__$2);
var seq94374__$3 = cljs.core.next(seq94374__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94375,G__94376,G__94377,seq94374__$3);
}));

return null;
})()
;
(taoensso.tufte.with_min_level.cljs$lang$macro = true);


/**
 * Deprecated, just use `alter-var-root`
 */
taoensso.tufte.set_min_level_BANG_ = (function taoensso$tufte$set_min_level_BANG_(level){
return (taoensso.tufte._STAR_min_level_STAR_ = level);
});

var ret__5824__auto___94416 = (function (){
/**
 * Deprecated, just use `binding`
 */
taoensso.tufte.with_ns_pattern = (function taoensso$tufte$with_ns_pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___94417 = arguments.length;
var i__5770__auto___94418 = (0);
while(true){
if((i__5770__auto___94418 < len__5769__auto___94417)){
args__5775__auto__.push((arguments[i__5770__auto___94418]));

var G__94419 = (i__5770__auto___94418 + (1));
i__5770__auto___94418 = G__94419;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(taoensso.tufte.with_ns_pattern.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,ns_pattern,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.tufte","*ns-filter*","taoensso.tufte/*ns-filter*",843426356,null),null,(1),null)),(new cljs.core.List(null,ns_pattern,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.tufte.with_ns_pattern.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.tufte.with_ns_pattern.cljs$lang$applyTo = (function (seq94378){
var G__94379 = cljs.core.first(seq94378);
var seq94378__$1 = cljs.core.next(seq94378);
var G__94380 = cljs.core.first(seq94378__$1);
var seq94378__$2 = cljs.core.next(seq94378__$1);
var G__94381 = cljs.core.first(seq94378__$2);
var seq94378__$3 = cljs.core.next(seq94378__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94379,G__94380,G__94381,seq94378__$3);
}));

return null;
})()
;
(taoensso.tufte.with_ns_pattern.cljs$lang$macro = true);


/**
 * Deprecated, just use `alter-var-root`
 */
taoensso.tufte.set_ns_pattern_BANG_ = (function taoensso$tufte$set_ns_pattern_BANG_(ns_pattern){
return (taoensso.tufte._STAR_ns_filter_STAR_ = ns_pattern);
});

//# sourceMappingURL=taoensso.tufte.js.map
