goog.provide('com.wsscode.pathom.parser');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__54634){
return cljs.core.set_QMARK_(G__54634);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
com.wsscode.pathom.parser.atom_QMARK_ = (function com$wsscode$pathom$parser$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
com.wsscode.pathom.parser.mark_meta = (function com$wsscode$pathom$parser$mark_meta(source,target){
var G__54636 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54636,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__54636;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__54639){
var vec__54640 = p__54639;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54640,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__54643){
var vec__54644 = p__54643;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54644,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54644,(1),null);
var call = vec__54644;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : com.wsscode.pathom.parser.expr__GT_ast.call(null,args)),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : com.wsscode.pathom.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__5045__auto__ = args;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__54647 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54647,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__54647;
}
}
});
/**
 * Convert a query to its AST representation.
 */
com.wsscode.pathom.parser.query__GT_ast = (function com$wsscode$pathom$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.parser.mark_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),query)], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.join__GT_ast = (function com$wsscode$pathom$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__54648 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54648,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54648,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__54651){
var vec__54652 = p__54651;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54652,(0),null);
var ref = vec__54652;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
com.wsscode.pathom.parser.expr__GT_ast = (function com$wsscode$pathom$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return com.wsscode.pathom.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return com.wsscode.pathom.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return com.wsscode.pathom.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return com.wsscode.pathom.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return com.wsscode.pathom.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
com.wsscode.pathom.parser.wrap_expr = (function com$wsscode$pathom$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__54655 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__54655,null,(1),null));
} else {
return G__54655;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
com.wsscode.pathom.parser.parameterize = (function com$wsscode$pathom$parser$parameterize(expr,params){
if((!(cljs.core.empty_QMARK_(params)))){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,params,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,expr,null,(1),null));
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
com.wsscode.pathom.parser.ast__GT_expr = (function com$wsscode$pathom$parser$ast__GT_expr(var_args){
var G__54661 = arguments.length;
switch (G__54661) {
case 1:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
}));

(com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__54662,unparse_QMARK_){
var map__54663 = p__54662;
var map__54663__$1 = cljs.core.__destructure_map(map__54663);
var ast = map__54663__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54663__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54663__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54663__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__54664 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__54657_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__54657_SHARP_,unparse_QMARK_);
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__54664,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__54664;
}
} else {
var map__54665 = ast;
var map__54665__$1 = cljs.core.__destructure_map(map__54665);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54665__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54665__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54665__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54665__$1,new cljs.core.Keyword(null,"params","params",710516235));
return com.wsscode.pathom.parser.wrap_expr(query_root,(cljs.core.truth_((function (){var and__5043__auto__ = params;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
} else {
return and__5043__auto__;
}
})())?(function (){var expr = com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
return com.wsscode.pathom.parser.parameterize(expr,params);
})():(function (){var key__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type))?com.wsscode.pathom.parser.parameterize(key,params):key);
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
if(and__5043__auto__){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
} else {
return and__5043__auto__;
}
}
})())){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && ((((!(typeof query === 'number'))) && (((unparse_QMARK_ === true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)))))))){
var map__54666 = ast;
var map__54666__$1 = cljs.core.__destructure_map(map__54666);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__54667 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__54667,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__54667;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__54668){
var map__54669 = p__54668;
var map__54669__$1 = cljs.core.__destructure_map(map__54669);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__54670 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__54658_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__54658_SHARP_,unparse_QMARK_);
})),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__54670,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__54670;
}
})()], null);
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__54671 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__54659_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__54659_SHARP_,unparse_QMARK_);
})),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__54671,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__54671;
}
})()]),ast_meta);
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,query]),ast_meta);
}
} else {
return key__$1;
}
})()));
}
}));

(com.wsscode.pathom.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2);

com.wsscode.pathom.parser.focus_subquery_union_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_union_STAR_(query_ast,sub_ast){
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__54672_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__54672_SHARP_),p1__54672_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (children,p__54673){
var map__54674 = p__54673;
var map__54674__$1 = cljs.core.__destructure_map(map__54674);
var union_entry = map__54674__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54674__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_index,union_key);
if(cljs.core.truth_(temp__5802__auto__)){
var sub = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(union_entry,sub) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,union_entry,sub)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,union_entry);
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast)));
});
com.wsscode.pathom.parser.focus_subquery_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_STAR_(query_ast,sub_ast){
var q_index = cljs.core.group_by(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (children,p__54675){
var map__54676 = p__54675;
var map__54676__$1 = cljs.core.__destructure_map(map__54676);
var focus = map__54676__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54676__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54676__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5802__auto__)){
var source = temp__5802__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (children__$1,source__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(source__$1,focus) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,source__$1,focus)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"union","union",2142937499),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,com.wsscode.pathom.parser.focus_subquery_union_STAR_(source__$1,focus));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,source__$1);

}
}
}),children,source);
} else {
return children;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast)));
});
/**
 * Given a query, focus it along the specified query expression.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
 *  => [{:foo [:bar]} :woz]
 */
com.wsscode.pathom.parser.focus_subquery = (function com$wsscode$pathom$parser$focus_subquery(query,sub_query){
var query_ast = com.wsscode.pathom.parser.query__GT_ast(query);
var sub_ast = com.wsscode.pathom.parser.query__GT_ast(sub_query);
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.parser.focus_subquery_STAR_(query_ast,sub_ast),true);
});
com.wsscode.pathom.parser.normalize_atom = (function com$wsscode$pathom$parser$normalize_atom(x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
}
});
com.wsscode.pathom.parser.ast__GT_out_key = (function com$wsscode$pathom$parser$ast__GT_out_key(ast){
var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"key","key",-1516042587));
}
});
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__54677){
var map__54678 = p__54677;
var map__54678__$1 = cljs.core.__destructure_map(map__54678);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54678__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54678__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__54379__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__54380__auto__ = (function (){var map__54679 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__54679__$1 = cljs.core.__destructure_map(map__54679);
var tx_ast = map__54679__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54679__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx__$1], 0));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__54684 = children;
var vec__54685 = G__54684;
var seq__54686 = cljs.core.seq(vec__54685);
var first__54687 = cljs.core.first(seq__54686);
var seq__54686__$1 = cljs.core.next(seq__54686);
var map__54688 = first__54687;
var map__54688__$1 = cljs.core.__destructure_map(map__54688);
var ast = map__54688__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54688__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54688__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54688__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54688__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__54686__$1;
var res__$1 = res;
var G__54684__$1 = G__54684;
while(true){
var res__$2 = res__$1;
var vec__54701 = G__54684__$1;
var seq__54702 = cljs.core.seq(vec__54701);
var first__54703 = cljs.core.first(seq__54702);
var seq__54702__$1 = cljs.core.next(seq__54702);
var map__54704 = first__54703;
var map__54704__$1 = cljs.core.__destructure_map(map__54704);
var ast__$1 = map__54704__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54704__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54704__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54704__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54704__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__54702__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__54708 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__54708__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54708,new cljs.core.Keyword(null,"query","query",-1288509510)):G__54708);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54708__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__54708__$1;
}
})();
var value = (function (){var G__54709 = type__$1;
var G__54709__$1 = (((G__54709 instanceof cljs.core.Keyword))?G__54709.fqn:null);
switch (G__54709__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__54710 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__54710__$1 = cljs.core.__destructure_map(map__54710);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54710__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__56452 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__56453 = tail__$1;
res__$1 = G__56452;
G__54684__$1 = G__56453;
continue;
} else {
return res__$2;
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__54379__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));

return res__54380__auto__;
} else {
var map__54711 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__54711__$1 = cljs.core.__destructure_map(map__54711);
var tx_ast = map__54711__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx__$1], 0));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__54716 = children;
var vec__54717 = G__54716;
var seq__54718 = cljs.core.seq(vec__54717);
var first__54719 = cljs.core.first(seq__54718);
var seq__54718__$1 = cljs.core.next(seq__54718);
var map__54720 = first__54719;
var map__54720__$1 = cljs.core.__destructure_map(map__54720);
var ast = map__54720__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54720__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54720__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54720__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54720__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__54718__$1;
var res__$1 = res;
var G__54716__$1 = G__54716;
while(true){
var res__$2 = res__$1;
var vec__54728 = G__54716__$1;
var seq__54729 = cljs.core.seq(vec__54728);
var first__54730 = cljs.core.first(seq__54729);
var seq__54729__$1 = cljs.core.next(seq__54729);
var map__54731 = first__54730;
var map__54731__$1 = cljs.core.__destructure_map(map__54731);
var ast__$1 = map__54731__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54731__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54731__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54731__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54731__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__54729__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__54732 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__54732__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54732,new cljs.core.Keyword(null,"query","query",-1288509510)):G__54732);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54732__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__54732__$1;
}
})();
var value = (function (){var G__54733 = type__$1;
var G__54733__$1 = (((G__54733 instanceof cljs.core.Keyword))?G__54733.fqn:null);
switch (G__54733__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__54734 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__54734__$1 = cljs.core.__destructure_map(map__54734);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__56455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__56456 = tail__$1;
res__$1 = G__56455;
G__54716__$1 = G__56456;
continue;
} else {
return res__$2;
}
break;
}
}
});
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__54735){
var map__54736 = p__54735;
var map__54736__$1 = cljs.core.__destructure_map(map__54736);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54736__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54736__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_54974){
var state_val_54975 = (state_54974[(1)]);
if((state_val_54975 === (62))){
var inst_54951 = (state_54974[(7)]);
var state_54974__$1 = state_54974;
var statearr_54976_56457 = state_54974__$1;
(statearr_54976_56457[(2)] = inst_54951);

(statearr_54976_56457[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (7))){
var inst_54865 = (state_54974[(8)]);
var inst_54862 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_54863 = cljs.core.__destructure_map(inst_54862);
var inst_54864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54863,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_54865__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_54863);
var inst_54866 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),inst_54865__$1], 0));
var inst_54876 = cljs.core.PersistentHashMap.EMPTY;
var inst_54877 = cljs.core.seq(inst_54864);
var inst_54878 = cljs.core.first(inst_54877);
var inst_54879 = cljs.core.next(inst_54877);
var inst_54880 = cljs.core.__destructure_map(inst_54878);
var inst_54881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54880,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_54882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54880,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_54883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54880,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_54884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54880,new cljs.core.Keyword(null,"params","params",710516235));
var inst_54885 = inst_54876;
var inst_54886 = inst_54864;
var state_54974__$1 = (function (){var statearr_54977 = state_54974;
(statearr_54977[(8)] = inst_54865__$1);

(statearr_54977[(9)] = inst_54866);

(statearr_54977[(10)] = inst_54879);

(statearr_54977[(11)] = inst_54881);

(statearr_54977[(12)] = inst_54882);

(statearr_54977[(13)] = inst_54883);

(statearr_54977[(14)] = inst_54884);

(statearr_54977[(15)] = inst_54885);

(statearr_54977[(16)] = inst_54886);

return statearr_54977;
})();
var statearr_54978_56458 = state_54974__$1;
(statearr_54978_56458[(2)] = null);

(statearr_54978_56458[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (59))){
var inst_54922 = (state_54974[(17)]);
var inst_54946 = (state_54974[(2)]);
var inst_54947 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_54922) : read.call(null,inst_54922));
var state_54974__$1 = (function (){var statearr_54979 = state_54974;
(statearr_54979[(18)] = inst_54946);

return statearr_54979;
})();
var statearr_54980_56459 = state_54974__$1;
(statearr_54980_56459[(2)] = inst_54947);

(statearr_54980_56459[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (20))){
var inst_54839 = (state_54974[(19)]);
var inst_54839__$1 = (state_54974[(2)]);
var inst_54840 = com.wsscode.async.async_cljs.chan_QMARK_(inst_54839__$1);
var state_54974__$1 = (function (){var statearr_54981 = state_54974;
(statearr_54981[(19)] = inst_54839__$1);

return statearr_54981;
})();
if(inst_54840){
var statearr_54982_56460 = state_54974__$1;
(statearr_54982_56460[(1)] = (33));

} else {
var statearr_54983_56461 = state_54974__$1;
(statearr_54983_56461[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (58))){
var inst_54942 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_54943 = (new Error(inst_54942));
var inst_54944 = (function(){throw inst_54943})();
var state_54974__$1 = state_54974;
var statearr_54984_56462 = state_54974__$1;
(statearr_54984_56462[(2)] = inst_54944);

(statearr_54984_56462[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (60))){
var state_54974__$1 = state_54974;
var statearr_54985_56463 = state_54974__$1;
(statearr_54985_56463[(2)] = null);

(statearr_54985_56463[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (27))){
var inst_54826 = (state_54974[(2)]);
var state_54974__$1 = state_54974;
var statearr_54986_56464 = state_54974__$1;
(statearr_54986_56464[(2)] = inst_54826);

(statearr_54986_56464[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (1))){
var state_54974__$1 = state_54974;
var statearr_54987_56465 = state_54974__$1;
(statearr_54987_56465[(2)] = null);

(statearr_54987_56465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (24))){
var inst_54810 = (state_54974[(20)]);
var inst_54785 = (state_54974[(21)]);
var inst_54787 = (state_54974[(22)]);
var inst_54821 = (state_54974[(23)]);
var inst_54817 = (state_54974[(2)]);
var inst_54819 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_54810,inst_54785,inst_54787) : mutate.call(null,inst_54810,inst_54785,inst_54787));
var inst_54820 = cljs.core.__destructure_map(inst_54819);
var inst_54821__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54820,new cljs.core.Keyword(null,"action","action",-811238024));
var state_54974__$1 = (function (){var statearr_54988 = state_54974;
(statearr_54988[(24)] = inst_54817);

(statearr_54988[(23)] = inst_54821__$1);

return statearr_54988;
})();
if(cljs.core.truth_(inst_54821__$1)){
var statearr_54989_56466 = state_54974__$1;
(statearr_54989_56466[(1)] = (25));

} else {
var statearr_54990_56467 = state_54974__$1;
(statearr_54990_56467[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (55))){
var inst_54938 = (state_54974[(2)]);
var state_54974__$1 = state_54974;
var statearr_54991_56468 = state_54974__$1;
(statearr_54991_56468[(2)] = inst_54938);

(statearr_54991_56468[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (39))){
var inst_54897 = (state_54974[(25)]);
var inst_54866 = (state_54974[(9)]);
var inst_54895 = (state_54974[(26)]);
var inst_54896 = (state_54974[(27)]);
var inst_54901 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_54902 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_54897];
var inst_54903 = cljs.core.PersistentHashMap.fromArrays(inst_54901,inst_54902);
var inst_54904 = com.wsscode.pathom.trace.trace(inst_54866,inst_54903);
var inst_54906 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_54907 = [inst_54895,inst_54896];
var inst_54908 = cljs.core.PersistentHashMap.fromArrays(inst_54906,inst_54907);
var inst_54909 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54866,inst_54908], 0));
var inst_54910 = (inst_54896 == null);
var state_54974__$1 = (function (){var statearr_54992 = state_54974;
(statearr_54992[(28)] = inst_54904);

(statearr_54992[(29)] = inst_54909);

return statearr_54992;
})();
if(cljs.core.truth_(inst_54910)){
var statearr_54993_56469 = state_54974__$1;
(statearr_54993_56469[(1)] = (42));

} else {
var statearr_54994_56470 = state_54974__$1;
(statearr_54994_56470[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (46))){
var inst_54915 = (state_54974[(30)]);
var state_54974__$1 = state_54974;
var statearr_54995_56471 = state_54974__$1;
(statearr_54995_56471[(2)] = inst_54915);

(statearr_54995_56471[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (4))){
var inst_54737 = (state_54974[(2)]);
var state_54974__$1 = state_54974;
var statearr_54996_56472 = state_54974__$1;
(statearr_54996_56472[(2)] = inst_54737);

(statearr_54996_56472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (54))){
var state_54974__$1 = state_54974;
var statearr_54997_56473 = state_54974__$1;
(statearr_54997_56473[(2)] = null);

(statearr_54997_56473[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (15))){
var inst_54797 = (state_54974[(31)]);
var state_54974__$1 = state_54974;
var statearr_54998_56474 = state_54974__$1;
(statearr_54998_56474[(2)] = inst_54797);

(statearr_54998_56474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (48))){
var inst_54951 = (state_54974[(7)]);
var inst_54951__$1 = (state_54974[(2)]);
var inst_54952 = com.wsscode.async.async_cljs.chan_QMARK_(inst_54951__$1);
var state_54974__$1 = (function (){var statearr_54999 = state_54974;
(statearr_54999[(7)] = inst_54951__$1);

return statearr_54999;
})();
if(inst_54952){
var statearr_55000_56475 = state_54974__$1;
(statearr_55000_56475[(1)] = (61));

} else {
var statearr_55001_56476 = state_54974__$1;
(statearr_55001_56476[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (50))){
var state_54974__$1 = state_54974;
var statearr_55002_56477 = state_54974__$1;
(statearr_55002_56477[(2)] = null);

(statearr_55002_56477[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (21))){
var state_54974__$1 = state_54974;
if(cljs.core.truth_(mutate)){
var statearr_55003_56478 = state_54974__$1;
(statearr_55003_56478[(1)] = (22));

} else {
var statearr_55004_56479 = state_54974__$1;
(statearr_55004_56479[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (31))){
var inst_54810 = (state_54974[(20)]);
var inst_54834 = (state_54974[(2)]);
var inst_54835 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_54810) : read.call(null,inst_54810));
var state_54974__$1 = (function (){var statearr_55005 = state_54974;
(statearr_55005[(32)] = inst_54834);

return statearr_55005;
})();
var statearr_55006_56480 = state_54974__$1;
(statearr_55006_56480[(2)] = inst_54835);

(statearr_55006_56480[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (32))){
var state_54974__$1 = state_54974;
var statearr_55007_56481 = state_54974__$1;
(statearr_55007_56481[(2)] = null);

(statearr_55007_56481[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (40))){
var inst_54885 = (state_54974[(15)]);
var state_54974__$1 = state_54974;
var statearr_55008_56482 = state_54974__$1;
(statearr_55008_56482[(2)] = inst_54885);

(statearr_55008_56482[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (56))){
var state_54974__$1 = state_54974;
if(cljs.core.truth_(read)){
var statearr_55009_56483 = state_54974__$1;
(statearr_55009_56483[(1)] = (57));

} else {
var statearr_55010_56484 = state_54974__$1;
(statearr_55010_56484[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (33))){
var inst_54839 = (state_54974[(19)]);
var state_54974__$1 = state_54974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54974__$1,(36),inst_54839);
} else {
if((state_val_54975 === (13))){
var inst_54853 = (state_54974[(2)]);
var state_54974__$1 = state_54974;
var statearr_55011_56485 = state_54974__$1;
(statearr_55011_56485[(2)] = inst_54853);

(statearr_55011_56485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (22))){
var state_54974__$1 = state_54974;
var statearr_55012_56486 = state_54974__$1;
(statearr_55012_56486[(2)] = null);

(statearr_55012_56486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (36))){
var inst_54843 = (state_54974[(2)]);
var inst_54844 = com.wsscode.async.async_cljs.throw_err(inst_54843);
var state_54974__$1 = state_54974;
var statearr_55013_56487 = state_54974__$1;
(statearr_55013_56487[(2)] = inst_54844);

(statearr_55013_56487[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (41))){
var inst_54965 = (state_54974[(2)]);
var state_54974__$1 = state_54974;
var statearr_55014_56488 = state_54974__$1;
(statearr_55014_56488[(2)] = inst_54965);

(statearr_55014_56488[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (43))){
var inst_54909 = (state_54974[(29)]);
var state_54974__$1 = state_54974;
var statearr_55015_56489 = state_54974__$1;
(statearr_55015_56489[(2)] = inst_54909);

(statearr_55015_56489[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (61))){
var inst_54951 = (state_54974[(7)]);
var state_54974__$1 = state_54974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54974__$1,(64),inst_54951);
} else {
if((state_val_54975 === (29))){
var state_54974__$1 = state_54974;
var statearr_55016_56490 = state_54974__$1;
(statearr_55016_56490[(2)] = null);

(statearr_55016_56490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (44))){
var inst_54896 = (state_54974[(27)]);
var inst_54915 = (state_54974[(2)]);
var inst_54916 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_54917 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54916,inst_54896);
var state_54974__$1 = (function (){var statearr_55017 = state_54974;
(statearr_55017[(30)] = inst_54915);

return statearr_55017;
})();
if(inst_54917){
var statearr_55018_56491 = state_54974__$1;
(statearr_55018_56491[(1)] = (45));

} else {
var statearr_55019_56492 = state_54974__$1;
(statearr_55019_56492[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (6))){
var inst_54753 = (state_54974[(33)]);
var inst_54745 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54746 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_54747 = cljs.core.PersistentHashMap.fromArrays(inst_54745,inst_54746);
var inst_54748 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_54747);
var inst_54750 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_54751 = cljs.core.__destructure_map(inst_54750);
var inst_54752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54751,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_54753__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_54751);
var inst_54754 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),inst_54753__$1], 0));
var inst_54764 = cljs.core.PersistentHashMap.EMPTY;
var inst_54765 = cljs.core.seq(inst_54752);
var inst_54766 = cljs.core.first(inst_54765);
var inst_54767 = cljs.core.next(inst_54765);
var inst_54768 = cljs.core.__destructure_map(inst_54766);
var inst_54769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54768,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_54770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54768,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_54771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54768,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_54772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54768,new cljs.core.Keyword(null,"params","params",710516235));
var inst_54773 = inst_54764;
var inst_54774 = inst_54752;
var state_54974__$1 = (function (){var statearr_55020 = state_54974;
(statearr_55020[(34)] = inst_54748);

(statearr_55020[(33)] = inst_54753__$1);

(statearr_55020[(35)] = inst_54754);

(statearr_55020[(36)] = inst_54767);

(statearr_55020[(37)] = inst_54769);

(statearr_55020[(38)] = inst_54770);

(statearr_55020[(39)] = inst_54771);

(statearr_55020[(40)] = inst_54772);

(statearr_55020[(41)] = inst_54773);

(statearr_55020[(42)] = inst_54774);

return statearr_55020;
})();
var statearr_55021_56493 = state_54974__$1;
(statearr_55021_56493[(2)] = null);

(statearr_55021_56493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (28))){
var state_54974__$1 = state_54974;
if(cljs.core.truth_(read)){
var statearr_55022_56494 = state_54974__$1;
(statearr_55022_56494[(1)] = (29));

} else {
var statearr_55023_56495 = state_54974__$1;
(statearr_55023_56495[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (64))){
var inst_54955 = (state_54974[(2)]);
var inst_54956 = com.wsscode.async.async_cljs.throw_err(inst_54955);
var state_54974__$1 = state_54974;
var statearr_55024_56496 = state_54974__$1;
(statearr_55024_56496[(2)] = inst_54956);

(statearr_55024_56496[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (51))){
var inst_54925 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_54926 = (new Error(inst_54925));
var inst_54927 = (function(){throw inst_54926})();
var state_54974__$1 = state_54974;
var statearr_55025_56497 = state_54974__$1;
(statearr_55025_56497[(2)] = inst_54927);

(statearr_55025_56497[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (25))){
var inst_54821 = (state_54974[(23)]);
var inst_54823 = (inst_54821.cljs$core$IFn$_invoke$arity$0 ? inst_54821.cljs$core$IFn$_invoke$arity$0() : inst_54821.call(null));
var state_54974__$1 = state_54974;
var statearr_55026_56498 = state_54974__$1;
(statearr_55026_56498[(2)] = inst_54823);

(statearr_55026_56498[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (34))){
var inst_54839 = (state_54974[(19)]);
var state_54974__$1 = state_54974;
var statearr_55027_56499 = state_54974__$1;
(statearr_55027_56499[(2)] = inst_54839);

(statearr_55027_56499[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (17))){
var inst_54803 = (state_54974[(43)]);
var inst_54753 = (state_54974[(33)]);
var inst_54807 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54803,new cljs.core.Keyword(null,"query","query",-1288509510),inst_54753);
var state_54974__$1 = state_54974;
var statearr_55028_56500 = state_54974__$1;
(statearr_55028_56500[(2)] = inst_54807);

(statearr_55028_56500[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (3))){
var inst_54972 = (state_54974[(2)]);
var state_54974__$1 = state_54974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54974__$1,inst_54972);
} else {
if((state_val_54975 === (12))){
var inst_54773 = (state_54974[(41)]);
var state_54974__$1 = state_54974;
var statearr_55029_56501 = state_54974__$1;
(statearr_55029_56501[(2)] = inst_54773);

(statearr_55029_56501[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (2))){
var _ = (function (){var statearr_55030 = state_54974;
(statearr_55030[(4)] = cljs.core.cons((5),(state_54974[(4)])));

return statearr_55030;
})();
var inst_54743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_54974__$1 = state_54974;
if(cljs.core.truth_(inst_54743)){
var statearr_55031_56502 = state_54974__$1;
(statearr_55031_56502[(1)] = (6));

} else {
var statearr_55032_56503 = state_54974__$1;
(statearr_55032_56503[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (23))){
var inst_54813 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_54814 = (new Error(inst_54813));
var inst_54815 = (function(){throw inst_54814})();
var state_54974__$1 = state_54974;
var statearr_55033_56504 = state_54974__$1;
(statearr_55033_56504[(2)] = inst_54815);

(statearr_55033_56504[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (47))){
var inst_54898 = (state_54974[(44)]);
var inst_54922 = (state_54974[(2)]);
var state_54974__$1 = (function (){var statearr_55034 = state_54974;
(statearr_55034[(17)] = inst_54922);

return statearr_55034;
})();
var G__55035_56505 = inst_54898;
var G__55035_56506__$1 = (((G__55035_56505 instanceof cljs.core.Keyword))?G__55035_56505.fqn:null);
switch (G__55035_56506__$1) {
case "call":
var statearr_55036_56508 = state_54974__$1;
(statearr_55036_56508[(1)] = (49));


break;
case "prop":
case "join":
case "union":
var statearr_55037_56509 = state_54974__$1;
(statearr_55037_56509[(1)] = (56));


break;
default:
var statearr_55038_56510 = state_54974__$1;
(statearr_55038_56510[(1)] = (60));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (35))){
var inst_54783 = (state_54974[(45)]);
var inst_54773 = (state_54974[(41)]);
var inst_54782 = (state_54974[(46)]);
var inst_54847 = (state_54974[(2)]);
var inst_54848 = com.wsscode.pathom.parser.ast__GT_out_key(inst_54783);
var inst_54849 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54773,inst_54848,inst_54847);
var inst_54773__$1 = inst_54849;
var inst_54774 = inst_54782;
var state_54974__$1 = (function (){var statearr_55039 = state_54974;
(statearr_55039[(41)] = inst_54773__$1);

(statearr_55039[(42)] = inst_54774);

return statearr_55039;
})();
var statearr_55040_56511 = state_54974__$1;
(statearr_55040_56511[(2)] = null);

(statearr_55040_56511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (19))){
var inst_54786 = (state_54974[(47)]);
var inst_54810 = (state_54974[(2)]);
var state_54974__$1 = (function (){var statearr_55041 = state_54974;
(statearr_55041[(20)] = inst_54810);

return statearr_55041;
})();
var G__55042_56512 = inst_54786;
var G__55042_56513__$1 = (((G__55042_56512 instanceof cljs.core.Keyword))?G__55042_56512.fqn:null);
switch (G__55042_56513__$1) {
case "call":
var statearr_55043_56515 = state_54974__$1;
(statearr_55043_56515[(1)] = (21));


break;
case "prop":
case "join":
case "union":
var statearr_55044_56516 = state_54974__$1;
(statearr_55044_56516[(1)] = (28));


break;
default:
var statearr_55045_56517 = state_54974__$1;
(statearr_55045_56517[(1)] = (32));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (57))){
var state_54974__$1 = state_54974;
var statearr_55046_56518 = state_54974__$1;
(statearr_55046_56518[(2)] = null);

(statearr_55046_56518[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (11))){
var inst_54785 = (state_54974[(21)]);
var inst_54754 = (state_54974[(35)]);
var inst_54783 = (state_54974[(45)]);
var inst_54784 = (state_54974[(48)]);
var inst_54789 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_54790 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_54785];
var inst_54791 = cljs.core.PersistentHashMap.fromArrays(inst_54789,inst_54790);
var inst_54792 = com.wsscode.pathom.trace.trace(inst_54754,inst_54791);
var inst_54794 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_54795 = [inst_54783,inst_54784];
var inst_54796 = cljs.core.PersistentHashMap.fromArrays(inst_54794,inst_54795);
var inst_54797 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54754,inst_54796], 0));
var inst_54798 = (inst_54784 == null);
var state_54974__$1 = (function (){var statearr_55048 = state_54974;
(statearr_55048[(49)] = inst_54792);

(statearr_55048[(31)] = inst_54797);

return statearr_55048;
})();
if(cljs.core.truth_(inst_54798)){
var statearr_55049_56519 = state_54974__$1;
(statearr_55049_56519[(1)] = (14));

} else {
var statearr_55050_56520 = state_54974__$1;
(statearr_55050_56520[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (9))){
var inst_54774 = (state_54974[(42)]);
var inst_54783 = (state_54974[(45)]);
var inst_54780 = cljs.core.seq(inst_54774);
var inst_54781 = cljs.core.first(inst_54780);
var inst_54782 = cljs.core.next(inst_54780);
var inst_54783__$1 = cljs.core.__destructure_map(inst_54781);
var inst_54784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54783__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_54785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54783__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_54786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54783__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_54787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54783__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_54974__$1 = (function (){var statearr_55051 = state_54974;
(statearr_55051[(46)] = inst_54782);

(statearr_55051[(45)] = inst_54783__$1);

(statearr_55051[(48)] = inst_54784);

(statearr_55051[(21)] = inst_54785);

(statearr_55051[(47)] = inst_54786);

(statearr_55051[(22)] = inst_54787);

return statearr_55051;
})();
if(cljs.core.truth_(inst_54783__$1)){
var statearr_55052_56521 = state_54974__$1;
(statearr_55052_56521[(1)] = (11));

} else {
var statearr_55053_56522 = state_54974__$1;
(statearr_55053_56522[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (5))){
var _ = (function (){var statearr_55054 = state_54974;
(statearr_55054[(4)] = cljs.core.rest((state_54974[(4)])));

return statearr_55054;
})();
var state_54974__$1 = state_54974;
var ex55047 = (state_54974__$1[(2)]);
var statearr_55055_56523 = state_54974__$1;
(statearr_55055_56523[(5)] = ex55047);


var statearr_55056_56524 = state_54974__$1;
(statearr_55056_56524[(1)] = (4));

(statearr_55056_56524[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (14))){
var inst_54797 = (state_54974[(31)]);
var inst_54800 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_54797,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_54974__$1 = state_54974;
var statearr_55057_56525 = state_54974__$1;
(statearr_55057_56525[(2)] = inst_54800);

(statearr_55057_56525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (45))){
var inst_54915 = (state_54974[(30)]);
var inst_54865 = (state_54974[(8)]);
var inst_54919 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54915,new cljs.core.Keyword(null,"query","query",-1288509510),inst_54865);
var state_54974__$1 = state_54974;
var statearr_55058_56526 = state_54974__$1;
(statearr_55058_56526[(2)] = inst_54919);

(statearr_55058_56526[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (53))){
var inst_54933 = (state_54974[(50)]);
var inst_54935 = (inst_54933.cljs$core$IFn$_invoke$arity$0 ? inst_54933.cljs$core$IFn$_invoke$arity$0() : inst_54933.call(null));
var state_54974__$1 = state_54974;
var statearr_55059_56527 = state_54974__$1;
(statearr_55059_56527[(2)] = inst_54935);

(statearr_55059_56527[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (26))){
var state_54974__$1 = state_54974;
var statearr_55060_56528 = state_54974__$1;
(statearr_55060_56528[(2)] = null);

(statearr_55060_56528[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (16))){
var inst_54784 = (state_54974[(48)]);
var inst_54803 = (state_54974[(2)]);
var inst_54804 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_54805 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54804,inst_54784);
var state_54974__$1 = (function (){var statearr_55061 = state_54974;
(statearr_55061[(43)] = inst_54803);

return statearr_55061;
})();
if(inst_54805){
var statearr_55062_56529 = state_54974__$1;
(statearr_55062_56529[(1)] = (17));

} else {
var statearr_55063_56530 = state_54974__$1;
(statearr_55063_56530[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (38))){
var inst_54967 = (state_54974[(2)]);
var state_54974__$1 = state_54974;
var statearr_55064_56531 = state_54974__$1;
(statearr_55064_56531[(2)] = inst_54967);

(statearr_55064_56531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (30))){
var inst_54830 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_54831 = (new Error(inst_54830));
var inst_54832 = (function(){throw inst_54831})();
var state_54974__$1 = state_54974;
var statearr_55065_56532 = state_54974__$1;
(statearr_55065_56532[(2)] = inst_54832);

(statearr_55065_56532[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (10))){
var inst_54748 = (state_54974[(34)]);
var inst_54855 = (state_54974[(2)]);
var inst_54856 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54857 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_54858 = cljs.core.PersistentHashMap.fromArrays(inst_54856,inst_54857);
var inst_54859 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_54748,inst_54858);
var state_54974__$1 = (function (){var statearr_55066 = state_54974;
(statearr_55066[(51)] = inst_54859);

return statearr_55066;
})();
var statearr_55067_56533 = state_54974__$1;
(statearr_55067_56533[(2)] = inst_54855);

(statearr_55067_56533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (18))){
var inst_54803 = (state_54974[(43)]);
var state_54974__$1 = state_54974;
var statearr_55068_56534 = state_54974__$1;
(statearr_55068_56534[(2)] = inst_54803);

(statearr_55068_56534[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (52))){
var inst_54922 = (state_54974[(17)]);
var inst_54897 = (state_54974[(25)]);
var inst_54899 = (state_54974[(52)]);
var inst_54933 = (state_54974[(50)]);
var inst_54929 = (state_54974[(2)]);
var inst_54931 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_54922,inst_54897,inst_54899) : mutate.call(null,inst_54922,inst_54897,inst_54899));
var inst_54932 = cljs.core.__destructure_map(inst_54931);
var inst_54933__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54932,new cljs.core.Keyword(null,"action","action",-811238024));
var state_54974__$1 = (function (){var statearr_55069 = state_54974;
(statearr_55069[(53)] = inst_54929);

(statearr_55069[(50)] = inst_54933__$1);

return statearr_55069;
})();
if(cljs.core.truth_(inst_54933__$1)){
var statearr_55070_56535 = state_54974__$1;
(statearr_55070_56535[(1)] = (53));

} else {
var statearr_55071_56536 = state_54974__$1;
(statearr_55071_56536[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (42))){
var inst_54909 = (state_54974[(29)]);
var inst_54912 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_54909,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_54974__$1 = state_54974;
var statearr_55072_56537 = state_54974__$1;
(statearr_55072_56537[(2)] = inst_54912);

(statearr_55072_56537[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (37))){
var inst_54886 = (state_54974[(16)]);
var inst_54895 = (state_54974[(26)]);
var inst_54892 = cljs.core.seq(inst_54886);
var inst_54893 = cljs.core.first(inst_54892);
var inst_54894 = cljs.core.next(inst_54892);
var inst_54895__$1 = cljs.core.__destructure_map(inst_54893);
var inst_54896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54895__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_54897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54895__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_54898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54895__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_54899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54895__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_54974__$1 = (function (){var statearr_55073 = state_54974;
(statearr_55073[(54)] = inst_54894);

(statearr_55073[(26)] = inst_54895__$1);

(statearr_55073[(27)] = inst_54896);

(statearr_55073[(25)] = inst_54897);

(statearr_55073[(44)] = inst_54898);

(statearr_55073[(52)] = inst_54899);

return statearr_55073;
})();
if(cljs.core.truth_(inst_54895__$1)){
var statearr_55074_56538 = state_54974__$1;
(statearr_55074_56538[(1)] = (39));

} else {
var statearr_55075_56539 = state_54974__$1;
(statearr_55075_56539[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (63))){
var inst_54895 = (state_54974[(26)]);
var inst_54885 = (state_54974[(15)]);
var inst_54894 = (state_54974[(54)]);
var inst_54959 = (state_54974[(2)]);
var inst_54960 = com.wsscode.pathom.parser.ast__GT_out_key(inst_54895);
var inst_54961 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54885,inst_54960,inst_54959);
var inst_54885__$1 = inst_54961;
var inst_54886 = inst_54894;
var state_54974__$1 = (function (){var statearr_55076 = state_54974;
(statearr_55076[(15)] = inst_54885__$1);

(statearr_55076[(16)] = inst_54886);

return statearr_55076;
})();
var statearr_55077_56540 = state_54974__$1;
(statearr_55077_56540[(2)] = null);

(statearr_55077_56540[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (8))){
var inst_54969 = (state_54974[(2)]);
var _ = (function (){var statearr_55078 = state_54974;
(statearr_55078[(4)] = cljs.core.rest((state_54974[(4)])));

return statearr_55078;
})();
var state_54974__$1 = state_54974;
var statearr_55079_56541 = state_54974__$1;
(statearr_55079_56541[(2)] = inst_54969);

(statearr_55079_56541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54975 === (49))){
var state_54974__$1 = state_54974;
if(cljs.core.truth_(mutate)){
var statearr_55080_56542 = state_54974__$1;
(statearr_55080_56542[(1)] = (50));

} else {
var statearr_55081_56543 = state_54974__$1;
(statearr_55081_56543[(1)] = (51));

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
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto____0 = (function (){
var statearr_55082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55082[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto__);

(statearr_55082[(1)] = (1));

return statearr_55082;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto____1 = (function (state_54974){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_54974);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e55083){var ex__42124__auto__ = e55083;
var statearr_55084_56544 = state_54974;
(statearr_55084_56544[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_54974[(4)]))){
var statearr_55085_56545 = state_54974;
(statearr_55085_56545[(1)] = cljs.core.first((state_54974[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56546 = state_54974;
state_54974 = G__56546;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto__ = function(state_54974){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto____1.call(this,state_54974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_55086 = f__42153__auto__();
(statearr_55086[(6)] = c__42152__auto__);

return statearr_55086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__55087,key){
var map__55088 = p__55087;
var map__55088__$1 = cljs.core.__destructure_map(map__55088);
var env = map__55088__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55088__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var external_wait_ignore_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55088__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),(3000));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__42152__auto___56547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_55111){
var state_val_55112 = (state_55111[(1)]);
if((state_val_55112 === (1))){
var inst_55089 = cljs.core.async.timeout((1));
var state_55111__$1 = state_55111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55111__$1,(2),inst_55089);
} else {
if((state_val_55112 === (2))){
var inst_55091 = (state_55111[(2)]);
var inst_55092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_55093 = cljs.core.deref(inst_55092);
var inst_55094 = cljs.core.contains_QMARK_(inst_55093,key);
var state_55111__$1 = (function (){var statearr_55113 = state_55111;
(statearr_55113[(7)] = inst_55091);

return statearr_55113;
})();
if(inst_55094){
var statearr_55114_56548 = state_55111__$1;
(statearr_55114_56548[(1)] = (3));

} else {
var statearr_55115_56549 = state_55111__$1;
(statearr_55115_56549[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55112 === (3))){
var inst_55096 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55097 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_55098 = cljs.core.PersistentHashMap.fromArrays(inst_55096,inst_55097);
var inst_55099 = com.wsscode.pathom.trace.trace(env,inst_55098);
var inst_55100 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_55101 = [key];
var inst_55102 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_55101);
var inst_55103 = [inst_55102];
var inst_55104 = cljs.core.PersistentHashMap.fromArrays(inst_55100,inst_55103);
var inst_55105 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_55104);
var inst_55106 = cljs.core.async.close_BANG_(ch);
var state_55111__$1 = (function (){var statearr_55116 = state_55111;
(statearr_55116[(8)] = inst_55099);

(statearr_55116[(9)] = inst_55105);

return statearr_55116;
})();
var statearr_55117_56550 = state_55111__$1;
(statearr_55117_56550[(2)] = inst_55106);

(statearr_55117_56550[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55112 === (4))){
var state_55111__$1 = state_55111;
var statearr_55118_56551 = state_55111__$1;
(statearr_55118_56551[(2)] = null);

(statearr_55118_56551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55112 === (5))){
var inst_55109 = (state_55111[(2)]);
var state_55111__$1 = state_55111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55111__$1,inst_55109);
} else {
return null;
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____0 = (function (){
var statearr_55119 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55119[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__);

(statearr_55119[(1)] = (1));

return statearr_55119;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____1 = (function (state_55111){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_55111);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e55120){var ex__42124__auto__ = e55120;
var statearr_55121_56552 = state_55111;
(statearr_55121_56552[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_55111[(4)]))){
var statearr_55122_56553 = state_55111;
(statearr_55122_56553[(1)] = cljs.core.first((state_55111[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56554 = state_55111;
state_55111 = G__56554;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__ = function(state_55111){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____1.call(this,state_55111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_55123 = f__42153__auto__();
(statearr_55123[(6)] = c__42152__auto___56547);

return statearr_55123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));


if(cljs.core.truth_(external_wait_ignore_timeout)){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_55149){
var state_val_55150 = (state_55149[(1)]);
if((state_val_55150 === (1))){
var inst_55127 = (state_55149[(7)]);
var inst_55127__$1 = cljs.core.async.timeout(external_wait_ignore_timeout);
var inst_55128 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55129 = [ch,inst_55127__$1];
var inst_55130 = (new cljs.core.PersistentVector(null,2,(5),inst_55128,inst_55129,null));
var state_55149__$1 = (function (){var statearr_55151 = state_55149;
(statearr_55151[(7)] = inst_55127__$1);

return statearr_55151;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_55149__$1,(2),inst_55130,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_55150 === (2))){
var inst_55127 = (state_55149[(7)]);
var inst_55132 = (state_55149[(2)]);
var inst_55133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55132,(0),null);
var inst_55134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55132,(1),null);
var inst_55135 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55134,inst_55127);
var state_55149__$1 = (function (){var statearr_55152 = state_55149;
(statearr_55152[(8)] = inst_55133);

return statearr_55152;
})();
if(inst_55135){
var statearr_55153_56555 = state_55149__$1;
(statearr_55153_56555[(1)] = (3));

} else {
var statearr_55154_56556 = state_55149__$1;
(statearr_55154_56556[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55150 === (3))){
var inst_55137 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192)];
var inst_55138 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),external_wait_ignore_timeout];
var inst_55139 = cljs.core.PersistentHashMap.fromArrays(inst_55137,inst_55138);
var inst_55140 = com.wsscode.pathom.trace.trace(env,inst_55139);
var inst_55141 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_55142 = cljs.core.PersistentHashSet.EMPTY;
var inst_55143 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),inst_55142];
var inst_55144 = cljs.core.PersistentHashMap.fromArrays(inst_55141,inst_55143);
var state_55149__$1 = (function (){var statearr_55155 = state_55149;
(statearr_55155[(9)] = inst_55140);

return statearr_55155;
})();
var statearr_55156_56557 = state_55149__$1;
(statearr_55156_56557[(2)] = inst_55144);

(statearr_55156_56557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55150 === (4))){
var inst_55133 = (state_55149[(8)]);
var state_55149__$1 = state_55149;
var statearr_55157_56558 = state_55149__$1;
(statearr_55157_56558[(2)] = inst_55133);

(statearr_55157_56558[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55150 === (5))){
var inst_55147 = (state_55149[(2)]);
var state_55149__$1 = state_55149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55149__$1,inst_55147);
} else {
return null;
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____0 = (function (){
var statearr_55158 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55158[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__);

(statearr_55158[(1)] = (1));

return statearr_55158;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____1 = (function (state_55149){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_55149);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e55159){var ex__42124__auto__ = e55159;
var statearr_55160_56559 = state_55149;
(statearr_55160_56559[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_55149[(4)]))){
var statearr_55161_56560 = state_55149;
(statearr_55161_56560[(1)] = cljs.core.first((state_55149[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56561 = state_55149;
state_55149 = G__56561;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__ = function(state_55149){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____1.call(this,state_55149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_55162 = f__42153__auto__();
(statearr_55162[(6)] = c__42152__auto__);

return statearr_55162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
} else {
return ch;
}
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__55163,e){
var map__55164 = p__55163;
var map__55164__$1 = cljs.core.__destructure_map(map__55164);
var env = map__55164__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55164__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__55165 = ast;
var map__55165__$1 = cljs.core.__destructure_map(map__55165);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55165__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55165__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55165__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__55166 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__55166__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55166,new cljs.core.Keyword(null,"query","query",-1288509510)):G__55166);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55166__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__55166__$1;
}
})();
var value = (function (){var G__55167 = type;
var G__55167__$1 = (((G__55167 instanceof cljs.core.Keyword))?G__55167.fqn:null);
switch (G__55167__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__55168 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__55168__$1 = cljs.core.__destructure_map(map__55168);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55168__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_55209){
var state_val_55210 = (state_55209[(1)]);
if((state_val_55210 === (7))){
var inst_55183 = (state_55209[(7)]);
var inst_55190 = com.wsscode.async.async_cljs.promise_QMARK_(inst_55183);
var state_55209__$1 = state_55209;
if(cljs.core.truth_(inst_55190)){
var statearr_55211_56563 = state_55209__$1;
(statearr_55211_56563[(1)] = (10));

} else {
var statearr_55212_56564 = state_55209__$1;
(statearr_55212_56564[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (1))){
var state_55209__$1 = state_55209;
var statearr_55213_56565 = state_55209__$1;
(statearr_55213_56565[(2)] = null);

(statearr_55213_56565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (4))){
var inst_55169 = (state_55209[(2)]);
var inst_55170 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_55171 = com.wsscode.pathom.parser.process_error(env__$1,inst_55169);
var inst_55172 = [inst_55171];
var inst_55173 = cljs.core.PersistentHashMap.fromArrays(inst_55170,inst_55172);
var state_55209__$1 = state_55209;
var statearr_55214_56566 = state_55209__$1;
(statearr_55214_56566[(2)] = inst_55173);

(statearr_55214_56566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (15))){
var state_55209__$1 = state_55209;
var statearr_55215_56567 = state_55209__$1;
(statearr_55215_56567[(2)] = null);

(statearr_55215_56567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (13))){
var inst_55194 = (state_55209[(2)]);
var inst_55195 = com.wsscode.async.async_cljs.consumer_pair(inst_55194);
var state_55209__$1 = state_55209;
var statearr_55216_56568 = state_55209__$1;
(statearr_55216_56568[(2)] = inst_55195);

(statearr_55216_56568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (6))){
var inst_55183 = (state_55209[(7)]);
var state_55209__$1 = state_55209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55209__$1,(9),inst_55183);
} else {
if((state_val_55210 === (3))){
var inst_55207 = (state_55209[(2)]);
var state_55209__$1 = state_55209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55209__$1,inst_55207);
} else {
if((state_val_55210 === (12))){
var inst_55202 = (state_55209[(2)]);
var state_55209__$1 = state_55209;
var statearr_55217_56569 = state_55209__$1;
(statearr_55217_56569[(2)] = inst_55202);

(statearr_55217_56569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (2))){
var inst_55183 = (state_55209[(7)]);
var _ = (function (){var statearr_55218 = state_55209;
(statearr_55218[(4)] = cljs.core.cons((5),(state_55209[(4)])));

return statearr_55218;
})();
var inst_55179 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_55180 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_55181 = cljs.core.PersistentHashMap.fromArrays(inst_55179,inst_55180);
var inst_55182 = com.wsscode.pathom.trace.trace(env__$1,inst_55181);
var inst_55183__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_55184 = com.wsscode.async.async_cljs.chan_QMARK_(inst_55183__$1);
var state_55209__$1 = (function (){var statearr_55219 = state_55209;
(statearr_55219[(8)] = inst_55182);

(statearr_55219[(7)] = inst_55183__$1);

return statearr_55219;
})();
if(inst_55184){
var statearr_55220_56570 = state_55209__$1;
(statearr_55220_56570[(1)] = (6));

} else {
var statearr_55221_56571 = state_55209__$1;
(statearr_55221_56571[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (11))){
var state_55209__$1 = state_55209;
var statearr_55223_56572 = state_55209__$1;
(statearr_55223_56572[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (9))){
var inst_55187 = (state_55209[(2)]);
var inst_55188 = com.wsscode.async.async_cljs.throw_err(inst_55187);
var state_55209__$1 = state_55209;
var statearr_55225_56573 = state_55209__$1;
(statearr_55225_56573[(2)] = inst_55188);

(statearr_55225_56573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (5))){
var _ = (function (){var statearr_55226 = state_55209;
(statearr_55226[(4)] = cljs.core.rest((state_55209[(4)])));

return statearr_55226;
})();
var state_55209__$1 = state_55209;
var ex55222 = (state_55209__$1[(2)]);
var statearr_55227_56574 = state_55209__$1;
(statearr_55227_56574[(5)] = ex55222);


var statearr_55228_56575 = state_55209__$1;
(statearr_55228_56575[(1)] = (4));

(statearr_55228_56575[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (14))){
var inst_55183 = (state_55209[(7)]);
var state_55209__$1 = state_55209;
var statearr_55229_56576 = state_55209__$1;
(statearr_55229_56576[(2)] = inst_55183);

(statearr_55229_56576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (16))){
var inst_55200 = (state_55209[(2)]);
var state_55209__$1 = state_55209;
var statearr_55230_56577 = state_55209__$1;
(statearr_55230_56577[(2)] = inst_55200);

(statearr_55230_56577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55210 === (10))){
var inst_55183 = (state_55209[(7)]);
var inst_55192 = com.wsscode.async.async_cljs.promise__GT_chan(inst_55183);
var state_55209__$1 = state_55209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55209__$1,(13),inst_55192);
} else {
if((state_val_55210 === (8))){
var inst_55204 = (state_55209[(2)]);
var _ = (function (){var statearr_55231 = state_55209;
(statearr_55231[(4)] = cljs.core.rest((state_55209[(4)])));

return statearr_55231;
})();
var state_55209__$1 = state_55209;
var statearr_55232_56578 = state_55209__$1;
(statearr_55232_56578[(2)] = inst_55204);

(statearr_55232_56578[(1)] = (3));


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
});
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____0 = (function (){
var statearr_55233 = [null,null,null,null,null,null,null,null,null];
(statearr_55233[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__);

(statearr_55233[(1)] = (1));

return statearr_55233;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____1 = (function (state_55209){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_55209);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e55234){var ex__42124__auto__ = e55234;
var statearr_55235_56579 = state_55209;
(statearr_55235_56579[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_55209[(4)]))){
var statearr_55236_56580 = state_55209;
(statearr_55236_56580[(1)] = cljs.core.first((state_55209[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56581 = state_55209;
state_55209 = G__56581;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__ = function(state_55209){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____1.call(this,state_55209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_55237 = f__42153__auto__();
(statearr_55237[(6)] = c__42152__auto__);

return statearr_55237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__54379__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
var res__54380__auto__ = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__54379__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return res__54380__auto__;
} else {
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
}

break;
default:
return null;

}
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(value)){
var provides = cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
var stream = (function (){var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_55248){
var state_val_55249 = (state_55248[(1)]);
if((state_val_55249 === (1))){
var inst_55238 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_55239 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_55248__$1 = (function (){var statearr_55250 = state_55248;
(statearr_55250[(7)] = inst_55238);

(statearr_55250[(8)] = inst_55239);

return statearr_55250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55248__$1,(2),value);
} else {
if((state_val_55249 === (2))){
var inst_55239 = (state_55248[(8)]);
var inst_55238 = (state_55248[(7)]);
var inst_55241 = (state_55248[(2)]);
var inst_55242 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_55243 = [inst_55241,inst_55242];
var inst_55244 = cljs.core.PersistentHashMap.fromArrays(inst_55239,inst_55243);
var inst_55245 = [provides,true,inst_55244];
var inst_55246 = cljs.core.PersistentHashMap.fromArrays(inst_55238,inst_55245);
var state_55248__$1 = state_55248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55248__$1,inst_55246);
} else {
return null;
}
}
});
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____0 = (function (){
var statearr_55251 = [null,null,null,null,null,null,null,null,null];
(statearr_55251[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__);

(statearr_55251[(1)] = (1));

return statearr_55251;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____1 = (function (state_55248){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_55248);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e55252){var ex__42124__auto__ = e55252;
var statearr_55253_56582 = state_55248;
(statearr_55253_56582[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_55248[(4)]))){
var statearr_55254_56583 = state_55248;
(statearr_55254_56583[(1)] = cljs.core.first((state_55248[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56584 = state_55248;
state_55248 = G__56584;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__ = function(state_55248){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____1.call(this,state_55248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_55255 = f__42153__auto__();
(statearr_55255[(6)] = c__42152__auto__);

return statearr_55255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
})();
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","async-return","com.wsscode.pathom.parser/async-return",-1319623828),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),stream,new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","channel-response","com.wsscode.pathom.parser/channel-response",140507736),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null)),key_iterations,tail], null);
} else {
if(cljs.core.truth_((function (){try{return new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
}catch (e55256){var _ = e55256;
return null;
}})())){
var provides = new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
var stream = new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292).cljs$core$IFn$_invoke$arity$1(value);
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provided-return","com.wsscode.pathom.parser/provided-return",9084378),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),stream,new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","parallel-reader","com.wsscode.pathom.parser/parallel-reader",283632954),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null)),key_iterations,tail], null);
} else {
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","value-return","com.wsscode.pathom.parser/value-return",1158220150),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,com.wsscode.pathom.parser.ast__GT_out_key(ast),value),waiting,processing,key_iterations,tail], null);

}
}
});
com.wsscode.pathom.parser.parallel_flush_watchers = (function com$wsscode$pathom$parser$parallel_flush_watchers(env,key_watchers,provides,error){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__54379__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));
var res__54380__auto__ = (function (){var seq__55257 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__55258 = null;
var count__55259 = (0);
var i__55260 = (0);
while(true){
if((i__55260 < count__55259)){
var vec__55275 = chunk__55258.cljs$core$IIndexed$_nth$arity$2(null,i__55260);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55275,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55275,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__55278_56585 = cljs.core.seq(watchers);
var chunk__55279_56586 = null;
var count__55280_56587 = (0);
var i__55281_56588 = (0);
while(true){
if((i__55281_56588 < count__55280_56587)){
var out_56589 = chunk__55279_56586.cljs$core$IIndexed$_nth$arity$2(null,i__55281_56588);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_56589,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_56589);


var G__56590 = seq__55278_56585;
var G__56591 = chunk__55279_56586;
var G__56592 = count__55280_56587;
var G__56593 = (i__55281_56588 + (1));
seq__55278_56585 = G__56590;
chunk__55279_56586 = G__56591;
count__55280_56587 = G__56592;
i__55281_56588 = G__56593;
continue;
} else {
var temp__5804__auto___56594 = cljs.core.seq(seq__55278_56585);
if(temp__5804__auto___56594){
var seq__55278_56595__$1 = temp__5804__auto___56594;
if(cljs.core.chunked_seq_QMARK_(seq__55278_56595__$1)){
var c__5568__auto___56596 = cljs.core.chunk_first(seq__55278_56595__$1);
var G__56597 = cljs.core.chunk_rest(seq__55278_56595__$1);
var G__56598 = c__5568__auto___56596;
var G__56599 = cljs.core.count(c__5568__auto___56596);
var G__56600 = (0);
seq__55278_56585 = G__56597;
chunk__55279_56586 = G__56598;
count__55280_56587 = G__56599;
i__55281_56588 = G__56600;
continue;
} else {
var out_56601 = cljs.core.first(seq__55278_56595__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_56601,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_56601);


var G__56602 = cljs.core.next(seq__55278_56595__$1);
var G__56603 = null;
var G__56604 = (0);
var G__56605 = (0);
seq__55278_56585 = G__56602;
chunk__55279_56586 = G__56603;
count__55280_56587 = G__56604;
i__55281_56588 = G__56605;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__56606 = seq__55257;
var G__56607 = chunk__55258;
var G__56608 = count__55259;
var G__56609 = (i__55260 + (1));
seq__55257 = G__56606;
chunk__55258 = G__56607;
count__55259 = G__56608;
i__55260 = G__56609;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55257);
if(temp__5804__auto__){
var seq__55257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55257__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55257__$1);
var G__56610 = cljs.core.chunk_rest(seq__55257__$1);
var G__56611 = c__5568__auto__;
var G__56612 = cljs.core.count(c__5568__auto__);
var G__56613 = (0);
seq__55257 = G__56610;
chunk__55258 = G__56611;
count__55259 = G__56612;
i__55260 = G__56613;
continue;
} else {
var vec__55282 = cljs.core.first(seq__55257__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55282,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55282,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__55285_56614 = cljs.core.seq(watchers);
var chunk__55286_56615 = null;
var count__55287_56616 = (0);
var i__55288_56617 = (0);
while(true){
if((i__55288_56617 < count__55287_56616)){
var out_56618 = chunk__55286_56615.cljs$core$IIndexed$_nth$arity$2(null,i__55288_56617);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_56618,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_56618);


var G__56619 = seq__55285_56614;
var G__56620 = chunk__55286_56615;
var G__56621 = count__55287_56616;
var G__56622 = (i__55288_56617 + (1));
seq__55285_56614 = G__56619;
chunk__55286_56615 = G__56620;
count__55287_56616 = G__56621;
i__55288_56617 = G__56622;
continue;
} else {
var temp__5804__auto___56623__$1 = cljs.core.seq(seq__55285_56614);
if(temp__5804__auto___56623__$1){
var seq__55285_56624__$1 = temp__5804__auto___56623__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55285_56624__$1)){
var c__5568__auto___56625 = cljs.core.chunk_first(seq__55285_56624__$1);
var G__56626 = cljs.core.chunk_rest(seq__55285_56624__$1);
var G__56627 = c__5568__auto___56625;
var G__56628 = cljs.core.count(c__5568__auto___56625);
var G__56629 = (0);
seq__55285_56614 = G__56626;
chunk__55286_56615 = G__56627;
count__55287_56616 = G__56628;
i__55288_56617 = G__56629;
continue;
} else {
var out_56630 = cljs.core.first(seq__55285_56624__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_56630,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_56630);


var G__56631 = cljs.core.next(seq__55285_56624__$1);
var G__56632 = null;
var G__56633 = (0);
var G__56634 = (0);
seq__55285_56614 = G__56631;
chunk__55286_56615 = G__56632;
count__55287_56616 = G__56633;
i__55288_56617 = G__56634;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__56635 = cljs.core.next(seq__55257__$1);
var G__56636 = null;
var G__56637 = (0);
var G__56638 = (0);
seq__55257 = G__56635;
chunk__55258 = G__56636;
count__55259 = G__56637;
i__55260 = G__56638;
continue;
}
} else {
return null;
}
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__54379__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));

return res__54380__auto__;
} else {
var seq__55289 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__55290 = null;
var count__55291 = (0);
var i__55292 = (0);
while(true){
if((i__55292 < count__55291)){
var vec__55307 = chunk__55290.cljs$core$IIndexed$_nth$arity$2(null,i__55292);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55307,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55307,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__55310_56639 = cljs.core.seq(watchers);
var chunk__55311_56640 = null;
var count__55312_56641 = (0);
var i__55313_56642 = (0);
while(true){
if((i__55313_56642 < count__55312_56641)){
var out_56643 = chunk__55311_56640.cljs$core$IIndexed$_nth$arity$2(null,i__55313_56642);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_56643,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_56643);


var G__56644 = seq__55310_56639;
var G__56645 = chunk__55311_56640;
var G__56646 = count__55312_56641;
var G__56647 = (i__55313_56642 + (1));
seq__55310_56639 = G__56644;
chunk__55311_56640 = G__56645;
count__55312_56641 = G__56646;
i__55313_56642 = G__56647;
continue;
} else {
var temp__5804__auto___56648 = cljs.core.seq(seq__55310_56639);
if(temp__5804__auto___56648){
var seq__55310_56649__$1 = temp__5804__auto___56648;
if(cljs.core.chunked_seq_QMARK_(seq__55310_56649__$1)){
var c__5568__auto___56650 = cljs.core.chunk_first(seq__55310_56649__$1);
var G__56651 = cljs.core.chunk_rest(seq__55310_56649__$1);
var G__56652 = c__5568__auto___56650;
var G__56653 = cljs.core.count(c__5568__auto___56650);
var G__56654 = (0);
seq__55310_56639 = G__56651;
chunk__55311_56640 = G__56652;
count__55312_56641 = G__56653;
i__55313_56642 = G__56654;
continue;
} else {
var out_56655 = cljs.core.first(seq__55310_56649__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_56655,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_56655);


var G__56656 = cljs.core.next(seq__55310_56649__$1);
var G__56657 = null;
var G__56658 = (0);
var G__56659 = (0);
seq__55310_56639 = G__56656;
chunk__55311_56640 = G__56657;
count__55312_56641 = G__56658;
i__55313_56642 = G__56659;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__56660 = seq__55289;
var G__56661 = chunk__55290;
var G__56662 = count__55291;
var G__56663 = (i__55292 + (1));
seq__55289 = G__56660;
chunk__55290 = G__56661;
count__55291 = G__56662;
i__55292 = G__56663;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55289);
if(temp__5804__auto__){
var seq__55289__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55289__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55289__$1);
var G__56664 = cljs.core.chunk_rest(seq__55289__$1);
var G__56665 = c__5568__auto__;
var G__56666 = cljs.core.count(c__5568__auto__);
var G__56667 = (0);
seq__55289 = G__56664;
chunk__55290 = G__56665;
count__55291 = G__56666;
i__55292 = G__56667;
continue;
} else {
var vec__55314 = cljs.core.first(seq__55289__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55314,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55314,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__55317_56668 = cljs.core.seq(watchers);
var chunk__55318_56669 = null;
var count__55319_56670 = (0);
var i__55320_56671 = (0);
while(true){
if((i__55320_56671 < count__55319_56670)){
var out_56672 = chunk__55318_56669.cljs$core$IIndexed$_nth$arity$2(null,i__55320_56671);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_56672,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_56672);


var G__56673 = seq__55317_56668;
var G__56674 = chunk__55318_56669;
var G__56675 = count__55319_56670;
var G__56676 = (i__55320_56671 + (1));
seq__55317_56668 = G__56673;
chunk__55318_56669 = G__56674;
count__55319_56670 = G__56675;
i__55320_56671 = G__56676;
continue;
} else {
var temp__5804__auto___56677__$1 = cljs.core.seq(seq__55317_56668);
if(temp__5804__auto___56677__$1){
var seq__55317_56678__$1 = temp__5804__auto___56677__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55317_56678__$1)){
var c__5568__auto___56679 = cljs.core.chunk_first(seq__55317_56678__$1);
var G__56680 = cljs.core.chunk_rest(seq__55317_56678__$1);
var G__56681 = c__5568__auto___56679;
var G__56682 = cljs.core.count(c__5568__auto___56679);
var G__56683 = (0);
seq__55317_56668 = G__56680;
chunk__55318_56669 = G__56681;
count__55319_56670 = G__56682;
i__55320_56671 = G__56683;
continue;
} else {
var out_56684 = cljs.core.first(seq__55317_56678__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_56684,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_56684);


var G__56685 = cljs.core.next(seq__55317_56678__$1);
var G__56686 = null;
var G__56687 = (0);
var G__56688 = (0);
seq__55317_56668 = G__56685;
chunk__55318_56669 = G__56686;
count__55319_56670 = G__56687;
i__55320_56671 = G__56688;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__56689 = cljs.core.next(seq__55289__$1);
var G__56690 = null;
var G__56691 = (0);
var G__56692 = (0);
seq__55289 = G__56689;
chunk__55290 = G__56690;
count__55291 = G__56691;
i__55292 = G__56692;
continue;
}
} else {
return null;
}
}
break;
}
}
});
com.wsscode.pathom.parser.default_step_fn = (function com$wsscode$pathom$parser$default_step_fn(amount,min){
return (function (_env,x){
return Math.max((x - amount),min);
});
});
com.wsscode.pathom.parser.remove_error_values = (function com$wsscode$pathom$parser$remove_error_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__55321){
var vec__55322 = p__55321;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
})),m);
});
/**
 * This is used for merging new parsed attributes from entity, works like regular merge but if the value from the right
 *   direction is not found, then the previous value will be kept.
 */
com.wsscode.pathom.parser.value_merge = (function com$wsscode$pathom$parser$value_merge(x,y){
if((((y === new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))) || ((y === new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137))))){
return x;
} else {
return y;
}
});
com.wsscode.pathom.parser.process_next_message = (function com$wsscode$pathom$parser$process_next_message(p__55327,tx,waiting,indexed_props,processing,key_iterations,key_watchers,res){
var map__55328 = p__55327;
var map__55328__$1 = cljs.core.__destructure_map(map__55328);
var env = map__55328__$1;
var done_signal_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55328__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538));
var processing_recheck_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55328__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55328__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55328__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_55540){
var state_val_55541 = (state_55540[(1)]);
if((state_val_55541 === (7))){
var state_55540__$1 = state_55540;
var statearr_55542_56693 = state_55540__$1;
(statearr_55542_56693[(2)] = null);

(statearr_55542_56693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (20))){
var inst_55432 = (state_55540[(2)]);
var inst_55433 = cljs.core.deref(done_signal_STAR_);
var state_55540__$1 = (function (){var statearr_55543 = state_55540;
(statearr_55543[(7)] = inst_55432);

return statearr_55543;
})();
if(cljs.core.truth_(inst_55433)){
var statearr_55544_56694 = state_55540__$1;
(statearr_55544_56694[(1)] = (30));

} else {
var statearr_55545_56695 = state_55540__$1;
(statearr_55545_56695[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (27))){
var inst_55408 = (state_55540[(8)]);
var inst_55412 = cljs.core.chunk_first(inst_55408);
var inst_55413 = cljs.core.chunk_rest(inst_55408);
var inst_55414 = cljs.core.count(inst_55412);
var inst_55392 = inst_55413;
var inst_55393 = inst_55412;
var inst_55394 = inst_55414;
var inst_55395 = (0);
var state_55540__$1 = (function (){var statearr_55546 = state_55540;
(statearr_55546[(9)] = inst_55392);

(statearr_55546[(10)] = inst_55393);

(statearr_55546[(11)] = inst_55394);

(statearr_55546[(12)] = inst_55395);

return statearr_55546;
})();
var statearr_55547_56696 = state_55540__$1;
(statearr_55547_56696[(2)] = null);

(statearr_55547_56696[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (1))){
var state_55540__$1 = state_55540;
var statearr_55548_56697 = state_55540__$1;
(statearr_55548_56697[(2)] = null);

(statearr_55548_56697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (24))){
var inst_55408 = (state_55540[(8)]);
var inst_55410 = cljs.core.chunked_seq_QMARK_(inst_55408);
var state_55540__$1 = state_55540;
if(inst_55410){
var statearr_55549_56698 = state_55540__$1;
(statearr_55549_56698[(1)] = (27));

} else {
var statearr_55550_56699 = state_55540__$1;
(statearr_55550_56699[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (39))){
var inst_55464 = (state_55540[(13)]);
var inst_55463 = (state_55540[(14)]);
var inst_55462 = (state_55540[(15)]);
var inst_55465 = (state_55540[(16)]);
var inst_55483 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_55484 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_55464];
var inst_55485 = cljs.core.PersistentHashMap.fromArrays(inst_55483,inst_55484);
var inst_55486 = com.wsscode.pathom.trace.trace(env,inst_55485);
var inst_55487 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55488 = cljs.core.vals(inst_55464);
var inst_55489 = cljs.core.first(inst_55488);
var inst_55490 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,inst_55463,inst_55489);
var inst_55491 = cljs.core.PersistentHashSet.EMPTY;
var inst_55492 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_55462);
var inst_55493 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55491,inst_55492,inst_55465);
var inst_55494 = cljs.core.PersistentVector.EMPTY;
var inst_55495 = [inst_55490,inst_55493,processing,key_iterations,inst_55494];
var inst_55496 = (new cljs.core.PersistentVector(null,5,(5),inst_55487,inst_55495,null));
var state_55540__$1 = (function (){var statearr_55551 = state_55540;
(statearr_55551[(17)] = inst_55486);

return statearr_55551;
})();
var statearr_55552_56700 = state_55540__$1;
(statearr_55552_56700[(2)] = inst_55496);

(statearr_55552_56700[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (4))){
var inst_55329 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
var statearr_55556_56701 = state_55540__$1;
(statearr_55556_56701[(2)] = inst_55329);

(statearr_55556_56701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (15))){
var inst_55535 = (state_55540[(2)]);
var _ = (function (){var statearr_55557 = state_55540;
(statearr_55557[(4)] = cljs.core.rest((state_55540[(4)])));

return statearr_55557;
})();
var state_55540__$1 = state_55540;
var statearr_55558_56702 = state_55540__$1;
(statearr_55558_56702[(2)] = inst_55535);

(statearr_55558_56702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (21))){
var inst_55393 = (state_55540[(10)]);
var inst_55395 = (state_55540[(12)]);
var inst_55392 = (state_55540[(9)]);
var inst_55394 = (state_55540[(11)]);
var inst_55401 = cljs.core._nth(inst_55393,inst_55395);
var inst_55402 = cljs.core.__destructure_map(inst_55401);
var inst_55403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55402,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_55404 = cljs.core.async.close_BANG_(inst_55403);
var inst_55405 = (inst_55395 + (1));
var tmp55553 = inst_55393;
var tmp55554 = inst_55394;
var tmp55555 = inst_55392;
var inst_55392__$1 = tmp55555;
var inst_55393__$1 = tmp55553;
var inst_55394__$1 = tmp55554;
var inst_55395__$1 = inst_55405;
var state_55540__$1 = (function (){var statearr_55559 = state_55540;
(statearr_55559[(18)] = inst_55404);

(statearr_55559[(9)] = inst_55392__$1);

(statearr_55559[(10)] = inst_55393__$1);

(statearr_55559[(11)] = inst_55394__$1);

(statearr_55559[(12)] = inst_55395__$1);

return statearr_55559;
})();
var statearr_55560_56703 = state_55540__$1;
(statearr_55560_56703[(2)] = null);

(statearr_55560_56703[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (31))){
var inst_55367 = (state_55540[(19)]);
var inst_55442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55443 = cljs.core.PersistentHashSet.EMPTY;
var inst_55444 = cljs.core.PersistentHashSet.EMPTY;
var inst_55445 = cljs.core.PersistentVector.EMPTY;
var inst_55446 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(indexed_props);
var inst_55447 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55445,inst_55446,inst_55367);
var inst_55448 = [res,inst_55443,inst_55444,key_iterations,inst_55447];
var inst_55449 = (new cljs.core.PersistentVector(null,5,(5),inst_55442,inst_55448,null));
var state_55540__$1 = state_55540;
var statearr_55561_56704 = state_55540__$1;
(statearr_55561_56704[(2)] = inst_55449);

(statearr_55561_56704[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (32))){
var inst_55451 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
var statearr_55562_56705 = state_55540__$1;
(statearr_55562_56705[(2)] = inst_55451);

(statearr_55562_56705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (40))){
var inst_55462 = (state_55540[(15)]);
var inst_55465 = (state_55540[(16)]);
var inst_55498 = com.wsscode.pathom.parser.remove_error_values(res);
var inst_55499 = cljs.core.keys(inst_55498);
var inst_55500 = cljs.core.set(inst_55499);
var inst_55501 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_55500,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_55502 = cljs.core.vec(inst_55462);
var inst_55503 = com.wsscode.pathom.parser.focus_subquery(tx,inst_55502);
var inst_55504 = com.wsscode.pathom.parser.query__GT_ast(inst_55503);
var inst_55505 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_55504);
var inst_55506 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_55501,inst_55505);
var inst_55507 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_55506);
var inst_55508 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_55509 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_55507);
var inst_55510 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_55509];
var inst_55511 = cljs.core.PersistentHashMap.fromArrays(inst_55508,inst_55510);
var inst_55512 = com.wsscode.pathom.trace.trace(env,inst_55511);
var inst_55513 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55514 = cljs.core.PersistentHashSet.EMPTY;
var inst_55515 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_55462);
var inst_55516 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55514,inst_55515,inst_55465);
var inst_55517 = [res,inst_55516,processing,key_iterations,inst_55507];
var inst_55518 = (new cljs.core.PersistentVector(null,5,(5),inst_55513,inst_55517,null));
var state_55540__$1 = (function (){var statearr_55563 = state_55540;
(statearr_55563[(20)] = inst_55512);

return statearr_55563;
})();
var statearr_55564_56706 = state_55540__$1;
(statearr_55564_56706[(2)] = inst_55518);

(statearr_55564_56706[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (33))){
var inst_55459 = (state_55540[(21)]);
var inst_55458 = (state_55540[(22)]);
var inst_55464 = (state_55540[(13)]);
var inst_55461 = (state_55540[(23)]);
var inst_55468 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_55469 = cljs.core.boolean$(inst_55459);
var inst_55470 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_55458,inst_55464,inst_55469];
var inst_55471 = cljs.core.PersistentHashMap.fromArrays(inst_55468,inst_55470);
var state_55540__$1 = (function (){var statearr_55565 = state_55540;
(statearr_55565[(24)] = inst_55471);

return statearr_55565;
})();
if(cljs.core.truth_(inst_55461)){
var statearr_55566_56707 = state_55540__$1;
(statearr_55566_56707[(1)] = (36));

} else {
var statearr_55567_56708 = state_55540__$1;
(statearr_55567_56708[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (13))){
var inst_55367 = (state_55540[(19)]);
var inst_55360 = (state_55540[(25)]);
var inst_55347 = (state_55540[(26)]);
var inst_55342 = (state_55540[(27)]);
var inst_55358 = (state_55540[(28)]);
var inst_55359 = (state_55540[(29)]);
var inst_55356 = (state_55540[(30)]);
var inst_55363 = cljs.core.keys(indexed_props);
var inst_55364 = cljs.core.set(inst_55363);
var inst_55365 = cljs.core.keys(res);
var inst_55366 = cljs.core.set(inst_55365);
var inst_55367__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_55364,inst_55366);
var inst_55368 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)];
var inst_55369 = [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"missing-props","missing-props",237278205)];
var inst_55370 = [processing,inst_55367__$1];
var inst_55371 = cljs.core.PersistentHashMap.fromArrays(inst_55369,inst_55370);
var inst_55372 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-reader-retry","com.wsscode.pathom.parser/trigger-reader-retry",-1526068301),inst_55371];
var inst_55373 = cljs.core.PersistentHashMap.fromArrays(inst_55368,inst_55372);
var inst_55374 = com.wsscode.pathom.trace.trace(env,inst_55373);
var inst_55375 = (function (){var missing_props = inst_55367__$1;
var p = inst_55360;
var recheck_ch = inst_55347;
var _ = inst_55342;
var vec__55335 = inst_55358;
var msg = inst_55359;
var processing_SINGLEQUOTE_ = inst_55356;
var all_props = inst_55364;
var current_props = inst_55366;
return (function (p1__55325_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(active_paths),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__55325_SHARP_));
});
})();
var inst_55376 = cljs.core.some(inst_55375,inst_55367__$1);
var state_55540__$1 = (function (){var statearr_55568 = state_55540;
(statearr_55568[(19)] = inst_55367__$1);

(statearr_55568[(31)] = inst_55374);

return statearr_55568;
})();
if(cljs.core.truth_(inst_55376)){
var statearr_55569_56709 = state_55540__$1;
(statearr_55569_56709[(1)] = (16));

} else {
var statearr_55570_56710 = state_55540__$1;
(statearr_55570_56710[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (22))){
var inst_55392 = (state_55540[(9)]);
var inst_55408 = (state_55540[(8)]);
var inst_55408__$1 = cljs.core.seq(inst_55392);
var state_55540__$1 = (function (){var statearr_55571 = state_55540;
(statearr_55571[(8)] = inst_55408__$1);

return statearr_55571;
})();
if(inst_55408__$1){
var statearr_55572_56711 = state_55540__$1;
(statearr_55572_56711[(1)] = (24));

} else {
var statearr_55573_56712 = state_55540__$1;
(statearr_55573_56712[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (36))){
var inst_55471 = (state_55540[(24)]);
var inst_55461 = (state_55540[(23)]);
var inst_55473 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_55471,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_55461);
var state_55540__$1 = state_55540;
var statearr_55574_56713 = state_55540__$1;
(statearr_55574_56713[(2)] = inst_55473);

(statearr_55574_56713[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (41))){
var inst_55520 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
var statearr_55575_56714 = state_55540__$1;
(statearr_55575_56714[(2)] = inst_55520);

(statearr_55575_56714[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (29))){
var inst_55425 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
var statearr_55576_56715 = state_55540__$1;
(statearr_55576_56715[(2)] = inst_55425);

(statearr_55576_56715[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (6))){
var inst_55344 = cljs.core.async.timeout(processing_recheck_timer);
var state_55540__$1 = state_55540;
var statearr_55577_56716 = state_55540__$1;
(statearr_55577_56716[(2)] = inst_55344);

(statearr_55577_56716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (28))){
var inst_55408 = (state_55540[(8)]);
var inst_55418 = cljs.core.first(inst_55408);
var inst_55419 = cljs.core.__destructure_map(inst_55418);
var inst_55420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55419,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_55421 = cljs.core.async.close_BANG_(inst_55420);
var inst_55422 = cljs.core.next(inst_55408);
var inst_55392 = inst_55422;
var inst_55393 = null;
var inst_55394 = (0);
var inst_55395 = (0);
var state_55540__$1 = (function (){var statearr_55578 = state_55540;
(statearr_55578[(32)] = inst_55421);

(statearr_55578[(9)] = inst_55392);

(statearr_55578[(10)] = inst_55393);

(statearr_55578[(11)] = inst_55394);

(statearr_55578[(12)] = inst_55395);

return statearr_55578;
})();
var statearr_55579_56717 = state_55540__$1;
(statearr_55579_56717[(2)] = null);

(statearr_55579_56717[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (25))){
var state_55540__$1 = state_55540;
var statearr_55580_56718 = state_55540__$1;
(statearr_55580_56718[(2)] = null);

(statearr_55580_56718[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (34))){
var inst_55360 = (state_55540[(25)]);
var inst_55465 = (state_55540[(16)]);
var inst_55522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55523 = cljs.core.PersistentHashSet.EMPTY;
var inst_55524 = [inst_55360];
var inst_55525 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_55524);
var inst_55526 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_55525,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_55527 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_55526);
var inst_55528 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55523,inst_55527,processing);
var inst_55529 = cljs.core.PersistentVector.EMPTY;
var inst_55530 = [res,inst_55465,inst_55528,key_iterations,inst_55529];
var inst_55531 = (new cljs.core.PersistentVector(null,5,(5),inst_55522,inst_55530,null));
var state_55540__$1 = state_55540;
var statearr_55581_56719 = state_55540__$1;
(statearr_55581_56719[(2)] = inst_55531);

(statearr_55581_56719[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (17))){
var inst_55367 = (state_55540[(19)]);
var inst_55383 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","missing-props","com.wsscode.pathom.parser/missing-props",1730773516)];
var inst_55384 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-recheck-schedule","com.wsscode.pathom.parser/trigger-recheck-schedule",-927032403),inst_55367];
var inst_55385 = cljs.core.PersistentHashMap.fromArrays(inst_55383,inst_55384);
var inst_55386 = com.wsscode.pathom.trace.trace(env,inst_55385);
var inst_55391 = cljs.core.seq(processing);
var inst_55392 = inst_55391;
var inst_55393 = null;
var inst_55394 = (0);
var inst_55395 = (0);
var state_55540__$1 = (function (){var statearr_55582 = state_55540;
(statearr_55582[(33)] = inst_55386);

(statearr_55582[(9)] = inst_55392);

(statearr_55582[(10)] = inst_55393);

(statearr_55582[(11)] = inst_55394);

(statearr_55582[(12)] = inst_55395);

return statearr_55582;
})();
var statearr_55583_56720 = state_55540__$1;
(statearr_55583_56720[(2)] = null);

(statearr_55583_56720[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (3))){
var inst_55538 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55540__$1,inst_55538);
} else {
if((state_val_55541 === (12))){
var inst_55358 = (state_55540[(28)]);
var inst_55360 = (state_55540[(25)]);
var inst_55347 = (state_55540[(26)]);
var inst_55358__$1 = (state_55540[(2)]);
var inst_55359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55358__$1,(0),null);
var inst_55360__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55358__$1,(1),null);
var inst_55361 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55360__$1,inst_55347);
var state_55540__$1 = (function (){var statearr_55584 = state_55540;
(statearr_55584[(28)] = inst_55358__$1);

(statearr_55584[(29)] = inst_55359);

(statearr_55584[(25)] = inst_55360__$1);

return statearr_55584;
})();
if(inst_55361){
var statearr_55585_56721 = state_55540__$1;
(statearr_55585_56721[(1)] = (13));

} else {
var statearr_55586_56722 = state_55540__$1;
(statearr_55586_56722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (2))){
var _ = (function (){var statearr_55587 = state_55540;
(statearr_55587[(4)] = cljs.core.cons((5),(state_55540[(4)])));

return statearr_55587;
})();
var inst_55338 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing-count","com.wsscode.pathom.parser/processing-count",853696659)];
var inst_55339 = cljs.core.count(processing);
var inst_55340 = [new cljs.core.Keyword("com.wsscode.pathom.parser","processing-wait-next","com.wsscode.pathom.parser/processing-wait-next",-1000039842),inst_55339];
var inst_55341 = cljs.core.PersistentHashMap.fromArrays(inst_55338,inst_55340);
var inst_55342 = com.wsscode.pathom.trace.trace(env,inst_55341);
var state_55540__$1 = (function (){var statearr_55588 = state_55540;
(statearr_55588[(27)] = inst_55342);

return statearr_55588;
})();
if(cljs.core.truth_(processing_recheck_timer)){
var statearr_55589_56723 = state_55540__$1;
(statearr_55589_56723[(1)] = (6));

} else {
var statearr_55590_56724 = state_55540__$1;
(statearr_55590_56724[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (23))){
var inst_55430 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
var statearr_55591_56725 = state_55540__$1;
(statearr_55591_56725[(2)] = inst_55430);

(statearr_55591_56725[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (35))){
var inst_55533 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
var statearr_55592_56726 = state_55540__$1;
(statearr_55592_56726[(2)] = inst_55533);

(statearr_55592_56726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (19))){
var inst_55395 = (state_55540[(12)]);
var inst_55394 = (state_55540[(11)]);
var inst_55397 = (inst_55395 < inst_55394);
var inst_55398 = inst_55397;
var state_55540__$1 = state_55540;
if(cljs.core.truth_(inst_55398)){
var statearr_55593_56727 = state_55540__$1;
(statearr_55593_56727[(1)] = (21));

} else {
var statearr_55594_56728 = state_55540__$1;
(statearr_55594_56728[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (11))){
var inst_55356 = (state_55540[(30)]);
var inst_55356__$1 = (state_55540[(2)]);
var state_55540__$1 = (function (){var statearr_55596 = state_55540;
(statearr_55596[(30)] = inst_55356__$1);

return statearr_55596;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_55540__$1,(12),inst_55356__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_55541 === (9))){
var inst_55351 = (state_55540[(34)]);
var inst_55347 = (state_55540[(26)]);
var inst_55353 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55351,inst_55347);
var state_55540__$1 = state_55540;
var statearr_55597_56729 = state_55540__$1;
(statearr_55597_56729[(2)] = inst_55353);

(statearr_55597_56729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (5))){
var _ = (function (){var statearr_55598 = state_55540;
(statearr_55598[(4)] = cljs.core.rest((state_55540[(4)])));

return statearr_55598;
})();
var state_55540__$1 = state_55540;
var ex55595 = (state_55540__$1[(2)]);
var statearr_55599_56730 = state_55540__$1;
(statearr_55599_56730[(5)] = ex55595);


var statearr_55600_56731 = state_55540__$1;
(statearr_55600_56731[(1)] = (4));

(statearr_55600_56731[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (14))){
var inst_55359 = (state_55540[(29)]);
var inst_55456 = (state_55540[(35)]);
var inst_55458 = (state_55540[(22)]);
var inst_55461 = (state_55540[(23)]);
var inst_55456__$1 = cljs.core.__destructure_map(inst_55359);
var inst_55457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55456__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_55458__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55456__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_55459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55456__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_55460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55456__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_55461__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_55359);
var inst_55462 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_55458__$1,inst_55461__$1);
var inst_55463 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_55457);
var inst_55464 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_55457,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_55465 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,inst_55461__$1);
var state_55540__$1 = (function (){var statearr_55601 = state_55540;
(statearr_55601[(35)] = inst_55456__$1);

(statearr_55601[(22)] = inst_55458__$1);

(statearr_55601[(21)] = inst_55459);

(statearr_55601[(36)] = inst_55460);

(statearr_55601[(23)] = inst_55461__$1);

(statearr_55601[(15)] = inst_55462);

(statearr_55601[(14)] = inst_55463);

(statearr_55601[(13)] = inst_55464);

(statearr_55601[(16)] = inst_55465);

return statearr_55601;
})();
if(cljs.core.truth_(inst_55359)){
var statearr_55602_56732 = state_55540__$1;
(statearr_55602_56732[(1)] = (33));

} else {
var statearr_55603_56733 = state_55540__$1;
(statearr_55603_56733[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (26))){
var inst_55428 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
var statearr_55604_56734 = state_55540__$1;
(statearr_55604_56734[(2)] = inst_55428);

(statearr_55604_56734[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (16))){
var inst_55378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55379 = cljs.core.PersistentVector.EMPTY;
var inst_55380 = [res,waiting,processing,key_iterations,inst_55379];
var inst_55381 = (new cljs.core.PersistentVector(null,5,(5),inst_55378,inst_55380,null));
var state_55540__$1 = state_55540;
var statearr_55605_56735 = state_55540__$1;
(statearr_55605_56735[(2)] = inst_55381);

(statearr_55605_56735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (38))){
var inst_55360 = (state_55540[(25)]);
var inst_55459 = (state_55540[(21)]);
var inst_55347 = (state_55540[(26)]);
var inst_55464 = (state_55540[(13)]);
var inst_55342 = (state_55540[(27)]);
var inst_55463 = (state_55540[(14)]);
var inst_55358 = (state_55540[(28)]);
var inst_55456 = (state_55540[(35)]);
var inst_55462 = (state_55540[(15)]);
var inst_55359 = (state_55540[(29)]);
var inst_55465 = (state_55540[(16)]);
var inst_55356 = (state_55540[(30)]);
var inst_55461 = (state_55540[(23)]);
var inst_55460 = (state_55540[(36)]);
var inst_55458 = (state_55540[(22)]);
var inst_55476 = (state_55540[(2)]);
var inst_55477 = com.wsscode.pathom.trace.trace(env,inst_55476);
var inst_55478 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(env);
var inst_55479 = (function (){var p = inst_55360;
var merge_result_QMARK_ = inst_55459;
var recheck_ch = inst_55347;
var response_value = inst_55464;
var _ = inst_55342;
var key_as = inst_55463;
var vec__55335 = inst_55358;
var map__55455 = inst_55456;
var provides_SINGLEQUOTE_ = inst_55462;
var msg = inst_55359;
var waiting__$1 = inst_55465;
var processing_SINGLEQUOTE_ = inst_55356;
var waiting_SINGLEQUOTE_ = inst_55461;
var error = inst_55460;
var provides = inst_55458;
return (function (p1__55326_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.parser.value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__55326_SHARP_], 0));
});
})();
var inst_55480 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55478,inst_55479);
var inst_55481 = com.wsscode.pathom.parser.parallel_flush_watchers(env,key_watchers,inst_55462,inst_55460);
var state_55540__$1 = (function (){var statearr_55606 = state_55540;
(statearr_55606[(37)] = inst_55477);

(statearr_55606[(38)] = inst_55480);

(statearr_55606[(39)] = inst_55481);

return statearr_55606;
})();
if(cljs.core.truth_(inst_55459)){
var statearr_55607_56736 = state_55540__$1;
(statearr_55607_56736[(1)] = (39));

} else {
var statearr_55608_56737 = state_55540__$1;
(statearr_55608_56737[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (30))){
var inst_55435 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55436 = cljs.core.PersistentHashSet.EMPTY;
var inst_55437 = cljs.core.PersistentHashSet.EMPTY;
var inst_55438 = cljs.core.PersistentVector.EMPTY;
var inst_55439 = [res,inst_55436,inst_55437,key_iterations,inst_55438];
var inst_55440 = (new cljs.core.PersistentVector(null,5,(5),inst_55435,inst_55439,null));
var state_55540__$1 = state_55540;
var statearr_55609_56738 = state_55540__$1;
(statearr_55609_56738[(2)] = inst_55440);

(statearr_55609_56738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (10))){
var inst_55351 = (state_55540[(34)]);
var state_55540__$1 = state_55540;
var statearr_55610_56753 = state_55540__$1;
(statearr_55610_56753[(2)] = inst_55351);

(statearr_55610_56753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (18))){
var inst_55453 = (state_55540[(2)]);
var state_55540__$1 = state_55540;
var statearr_55611_56768 = state_55540__$1;
(statearr_55611_56768[(2)] = inst_55453);

(statearr_55611_56768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (37))){
var inst_55471 = (state_55540[(24)]);
var state_55540__$1 = state_55540;
var statearr_55612_56797 = state_55540__$1;
(statearr_55612_56797[(2)] = inst_55471);

(statearr_55612_56797[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55541 === (8))){
var inst_55347 = (state_55540[(26)]);
var inst_55347__$1 = (state_55540[(2)]);
var inst_55349 = cljs.core.PersistentVector.EMPTY;
var inst_55350 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_55351 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55349,inst_55350,processing);
var state_55540__$1 = (function (){var statearr_55613 = state_55540;
(statearr_55613[(26)] = inst_55347__$1);

(statearr_55613[(34)] = inst_55351);

return statearr_55613;
})();
if(cljs.core.truth_(inst_55347__$1)){
var statearr_55614_56827 = state_55540__$1;
(statearr_55614_56827[(1)] = (9));

} else {
var statearr_55615_56841 = state_55540__$1;
(statearr_55615_56841[(1)] = (10));

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
});
return (function() {
var com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto____0 = (function (){
var statearr_55616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55616[(0)] = com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto__);

(statearr_55616[(1)] = (1));

return statearr_55616;
});
var com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto____1 = (function (state_55540){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_55540);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e55617){var ex__42124__auto__ = e55617;
var statearr_55618_56855 = state_55540;
(statearr_55618_56855[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_55540[(4)]))){
var statearr_55619_56856 = state_55540;
(statearr_55619_56856[(1)] = cljs.core.first((state_55540[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56857 = state_55540;
state_55540 = G__56857;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto__ = function(state_55540){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto____1.call(this,state_55540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto____0;
com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto____1;
return com$wsscode$pathom$parser$process_next_message_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_55620 = f__42153__auto__();
(statearr_55620[(6)] = c__42152__auto__);

return statearr_55620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
com.wsscode.pathom.parser.zero_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__55622,p__55623,tx){
var map__55624 = p__55622;
var map__55624__$1 = cljs.core.__destructure_map(map__55624);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55624__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55624__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__55625 = p__55623;
var map__55625__$1 = cljs.core.__destructure_map(map__55625);
var env = map__55625__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55625__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55625__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55625__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(5));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55625__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55625__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55625__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55625__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_55988){
var state_val_55989 = (state_55988[(1)]);
if((state_val_55989 === (65))){
var inst_55866 = (state_55988[(7)]);
var inst_55659 = (state_55988[(8)]);
var inst_55852 = (state_55988[(9)]);
var inst_55868 = (state_55988[(10)]);
var inst_55877 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_55878 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_55866,max_key_iterations];
var inst_55879 = cljs.core.PersistentHashMap.fromArrays(inst_55877,inst_55878);
var inst_55880 = com.wsscode.pathom.trace.trace(inst_55659,inst_55879);
var inst_55882 = cljs.core.contains_QMARK_(inst_55852,inst_55868);
var inst_55883 = (!(inst_55882));
var state_55988__$1 = (function (){var statearr_55997 = state_55988;
(statearr_55997[(11)] = inst_55880);

return statearr_55997;
})();
if(inst_55883){
var statearr_55998_56858 = state_55988__$1;
(statearr_55998_56858[(1)] = (68));

} else {
var statearr_55999_56859 = state_55988__$1;
(statearr_55999_56859[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (70))){
var inst_55853 = (state_55988[(12)]);
var inst_55854 = (state_55988[(13)]);
var inst_55855 = (state_55988[(14)]);
var inst_55864 = (state_55988[(15)]);
var inst_55888 = (state_55988[(2)]);
var tmp55990 = inst_55855;
var tmp55991 = inst_55854;
var tmp55992 = inst_55853;
var inst_55852 = inst_55888;
var inst_55853__$1 = tmp55992;
var inst_55854__$1 = tmp55991;
var inst_55855__$1 = tmp55990;
var inst_55856 = inst_55864;
var state_55988__$1 = (function (){var statearr_56000 = state_55988;
(statearr_56000[(9)] = inst_55852);

(statearr_56000[(12)] = inst_55853__$1);

(statearr_56000[(13)] = inst_55854__$1);

(statearr_56000[(14)] = inst_55855__$1);

(statearr_56000[(16)] = inst_55856);

return statearr_56000;
})();
var statearr_56001_56860 = state_55988__$1;
(statearr_56001_56860[(2)] = null);

(statearr_56001_56860[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (62))){
var inst_55865 = (state_55988[(17)]);
var inst_55866 = (state_55988[(7)]);
var inst_55659 = (state_55988[(8)]);
var inst_55855 = (state_55988[(14)]);
var inst_55868 = com.wsscode.pathom.parser.ast__GT_out_key(inst_55865);
var inst_55869 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55870 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_55866];
var inst_55871 = cljs.core.PersistentHashMap.fromArrays(inst_55869,inst_55870);
var inst_55872 = com.wsscode.pathom.trace.trace(inst_55659,inst_55871);
var inst_55873 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_55855,inst_55866,(0));
var inst_55874 = (max_key_iterations - (1));
var inst_55875 = (inst_55873 > inst_55874);
var state_55988__$1 = (function (){var statearr_56002 = state_55988;
(statearr_56002[(10)] = inst_55868);

(statearr_56002[(18)] = inst_55872);

return statearr_56002;
})();
if(cljs.core.truth_(inst_55875)){
var statearr_56003_56861 = state_55988__$1;
(statearr_56003_56861[(1)] = (65));

} else {
var statearr_56004_56862 = state_55988__$1;
(statearr_56004_56862[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (74))){
var inst_55866 = (state_55988[(7)]);
var inst_55659 = (state_55988[(8)]);
var inst_55852 = (state_55988[(9)]);
var inst_55853 = (state_55988[(12)]);
var inst_55854 = (state_55988[(13)]);
var inst_55855 = (state_55988[(14)]);
var inst_55864 = (state_55988[(15)]);
var inst_55899 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55900 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_55866];
var inst_55901 = cljs.core.PersistentHashMap.fromArrays(inst_55899,inst_55900);
var inst_55902 = com.wsscode.pathom.trace.trace(inst_55659,inst_55901);
var tmp55993 = inst_55852;
var tmp55994 = inst_55855;
var tmp55995 = inst_55854;
var tmp55996 = inst_55853;
var inst_55852__$1 = tmp55993;
var inst_55853__$1 = tmp55996;
var inst_55854__$1 = tmp55995;
var inst_55855__$1 = tmp55994;
var inst_55856 = inst_55864;
var state_55988__$1 = (function (){var statearr_56005 = state_55988;
(statearr_56005[(19)] = inst_55902);

(statearr_56005[(9)] = inst_55852__$1);

(statearr_56005[(12)] = inst_55853__$1);

(statearr_56005[(13)] = inst_55854__$1);

(statearr_56005[(14)] = inst_55855__$1);

(statearr_56005[(16)] = inst_55856);

return statearr_56005;
})();
var statearr_56006_56863 = state_55988__$1;
(statearr_56006_56863[(2)] = null);

(statearr_56006_56863[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (7))){
var inst_55636 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_55988__$1 = state_55988;
var statearr_56007_56864 = state_55988__$1;
(statearr_56007_56864[(2)] = inst_55636);

(statearr_56007_56864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (59))){
var inst_55646 = (state_55988[(20)]);
var inst_55838 = (state_55988[(21)]);
var inst_55844 = (state_55988[(2)]);
var inst_55845 = cljs.core.PersistentHashSet.EMPTY;
var inst_55846 = cljs.core.PersistentHashMap.EMPTY;
var inst_55847 = cljs.core.seq(inst_55646);
var inst_55848 = cljs.core.first(inst_55847);
var inst_55849 = cljs.core.next(inst_55847);
var inst_55850 = cljs.core.__destructure_map(inst_55848);
var inst_55851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55850,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_55852 = inst_55838;
var inst_55853 = inst_55844;
var inst_55854 = inst_55845;
var inst_55855 = inst_55846;
var inst_55856 = inst_55646;
var state_55988__$1 = (function (){var statearr_56008 = state_55988;
(statearr_56008[(22)] = inst_55849);

(statearr_56008[(23)] = inst_55851);

(statearr_56008[(9)] = inst_55852);

(statearr_56008[(12)] = inst_55853);

(statearr_56008[(13)] = inst_55854);

(statearr_56008[(14)] = inst_55855);

(statearr_56008[(16)] = inst_55856);

return statearr_56008;
})();
var statearr_56009_56865 = state_55988__$1;
(statearr_56009_56865[(2)] = null);

(statearr_56009_56865[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (86))){
var inst_55855 = (state_55988[(14)]);
var inst_55868 = (state_55988[(10)]);
var inst_55659 = (state_55988[(8)]);
var inst_55865 = (state_55988[(17)]);
var inst_55653 = (state_55988[(24)]);
var inst_55852 = (state_55988[(9)]);
var inst_55853 = (state_55988[(12)]);
var inst_55854 = (state_55988[(13)]);
var inst_55864 = (state_55988[(15)]);
var inst_55937 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_55855,inst_55868,com.wsscode.pathom.parser.zero_inc);
var inst_55938 = com.wsscode.pathom.parser.parallel_process_value(inst_55659,tx,inst_55865,inst_55653,inst_55852,inst_55853,inst_55854,read,mutate,inst_55937,inst_55864);
var inst_55939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55938,(0),null);
var inst_55940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55938,(1),null);
var inst_55941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55938,(2),null);
var inst_55942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55938,(3),null);
var inst_55943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55938,(4),null);
var inst_55852__$1 = inst_55939;
var inst_55853__$1 = inst_55940;
var inst_55854__$1 = inst_55941;
var inst_55855__$1 = inst_55942;
var inst_55856 = inst_55943;
var state_55988__$1 = (function (){var statearr_56010 = state_55988;
(statearr_56010[(9)] = inst_55852__$1);

(statearr_56010[(12)] = inst_55853__$1);

(statearr_56010[(13)] = inst_55854__$1);

(statearr_56010[(14)] = inst_55855__$1);

(statearr_56010[(16)] = inst_55856);

return statearr_56010;
})();
var statearr_56011_57170 = state_55988__$1;
(statearr_56011_57170[(2)] = null);

(statearr_56011_57170[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (20))){
var inst_55646 = (state_55988[(20)]);
var inst_55680 = (state_55988[(25)]);
var inst_55686 = (state_55988[(2)]);
var inst_55687 = cljs.core.PersistentHashSet.EMPTY;
var inst_55688 = cljs.core.PersistentHashMap.EMPTY;
var inst_55689 = cljs.core.seq(inst_55646);
var inst_55690 = cljs.core.first(inst_55689);
var inst_55691 = cljs.core.next(inst_55689);
var inst_55692 = cljs.core.__destructure_map(inst_55690);
var inst_55693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55692,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_55694 = inst_55680;
var inst_55695 = inst_55686;
var inst_55696 = inst_55687;
var inst_55697 = inst_55688;
var inst_55698 = inst_55646;
var state_55988__$1 = (function (){var statearr_56012 = state_55988;
(statearr_56012[(26)] = inst_55691);

(statearr_56012[(27)] = inst_55693);

(statearr_56012[(28)] = inst_55694);

(statearr_56012[(29)] = inst_55695);

(statearr_56012[(30)] = inst_55696);

(statearr_56012[(31)] = inst_55697);

(statearr_56012[(32)] = inst_55698);

return statearr_56012;
})();
var statearr_56013_57171 = state_55988__$1;
(statearr_56013_57171[(2)] = null);

(statearr_56013_57171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (72))){
var inst_55891 = (state_55988[(33)]);
var state_55988__$1 = state_55988;
var statearr_56014_57172 = state_55988__$1;
(statearr_56014_57172[(2)] = inst_55891);

(statearr_56014_57172[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (58))){
var inst_55842 = cljs.core.PersistentHashSet.EMPTY;
var state_55988__$1 = state_55988;
var statearr_56015_57173 = state_55988__$1;
(statearr_56015_57173[(2)] = inst_55842);

(statearr_56015_57173[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (60))){
var inst_55856 = (state_55988[(16)]);
var inst_55865 = (state_55988[(17)]);
var inst_55862 = cljs.core.seq(inst_55856);
var inst_55863 = cljs.core.first(inst_55862);
var inst_55864 = cljs.core.next(inst_55862);
var inst_55865__$1 = cljs.core.__destructure_map(inst_55863);
var inst_55866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55865__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_55988__$1 = (function (){var statearr_56016 = state_55988;
(statearr_56016[(15)] = inst_55864);

(statearr_56016[(17)] = inst_55865__$1);

(statearr_56016[(7)] = inst_55866);

return statearr_56016;
})();
if(cljs.core.truth_(inst_55865__$1)){
var statearr_56017_57174 = state_55988__$1;
(statearr_56017_57174[(1)] = (62));

} else {
var statearr_56018_57175 = state_55988__$1;
(statearr_56018_57175[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (27))){
var inst_55694 = (state_55988[(28)]);
var inst_55710 = (state_55988[(34)]);
var inst_55733 = (state_55988[(35)]);
var inst_55733__$1 = cljs.core.contains_QMARK_(inst_55694,inst_55710);
var state_55988__$1 = (function (){var statearr_56019 = state_55988;
(statearr_56019[(35)] = inst_55733__$1);

return statearr_56019;
})();
if(inst_55733__$1){
var statearr_56020_57176 = state_55988__$1;
(statearr_56020_57176[(1)] = (32));

} else {
var statearr_56021_57177 = state_55988__$1;
(statearr_56021_57177[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (1))){
var state_55988__$1 = state_55988;
var statearr_56022_57178 = state_55988__$1;
(statearr_56022_57178[(2)] = null);

(statearr_56022_57178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (69))){
var inst_55852 = (state_55988[(9)]);
var state_55988__$1 = state_55988;
var statearr_56023_57179 = state_55988__$1;
(statearr_56023_57179[(2)] = inst_55852);

(statearr_56023_57179[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (24))){
var inst_55696 = (state_55988[(30)]);
var inst_55799 = cljs.core.seq(inst_55696);
var state_55988__$1 = state_55988;
if(inst_55799){
var statearr_56024_57180 = state_55988__$1;
(statearr_56024_57180[(1)] = (50));

} else {
var statearr_56025_57181 = state_55988__$1;
(statearr_56025_57181[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (55))){
var state_55988__$1 = state_55988;
var statearr_56026_57182 = state_55988__$1;
(statearr_56026_57182[(2)] = null);

(statearr_56026_57182[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (85))){
var inst_55949 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56027_57183 = state_55988__$1;
(statearr_56027_57183[(2)] = inst_55949);

(statearr_56027_57183[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (39))){
var inst_55747 = (state_55988[(36)]);
var state_55988__$1 = state_55988;
var statearr_56028_57184 = state_55988__$1;
(statearr_56028_57184[(2)] = inst_55747);

(statearr_56028_57184[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (88))){
var inst_55947 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56029_57185 = state_55988__$1;
(statearr_56029_57185[(2)] = inst_55947);

(statearr_56029_57185[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (46))){
var inst_55791 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56030_57186 = state_55988__$1;
(statearr_56030_57186[(2)] = inst_55791);

(statearr_56030_57186[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (4))){
var inst_55626 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56031_57187 = state_55988__$1;
(statearr_56031_57187[(2)] = inst_55626);

(statearr_56031_57187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (77))){
var inst_55853 = (state_55988[(12)]);
var inst_55866 = (state_55988[(7)]);
var inst_55907 = cljs.core.contains_QMARK_(inst_55853,inst_55866);
var state_55988__$1 = state_55988;
var statearr_56032_57188 = state_55988__$1;
(statearr_56032_57188[(2)] = inst_55907);

(statearr_56032_57188[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (95))){
var inst_55975 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56033_57189 = state_55988__$1;
(statearr_56033_57189[(2)] = inst_55975);

(statearr_56033_57189[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (54))){
var inst_55694 = (state_55988[(28)]);
var state_55988__$1 = state_55988;
var statearr_56034_57190 = state_55988__$1;
(statearr_56034_57190[(2)] = inst_55694);

(statearr_56034_57190[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (92))){
var inst_55964 = (state_55988[(2)]);
var inst_55965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55964,(0),null);
var inst_55966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55964,(1),null);
var inst_55967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55964,(2),null);
var inst_55968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55964,(3),null);
var inst_55969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55964,(4),null);
var inst_55852 = inst_55965;
var inst_55853 = inst_55966;
var inst_55854 = inst_55967;
var inst_55855 = inst_55968;
var inst_55856 = inst_55969;
var state_55988__$1 = (function (){var statearr_56035 = state_55988;
(statearr_56035[(9)] = inst_55852);

(statearr_56035[(12)] = inst_55853);

(statearr_56035[(13)] = inst_55854);

(statearr_56035[(14)] = inst_55855);

(statearr_56035[(16)] = inst_55856);

return statearr_56035;
})();
var statearr_56036_57191 = state_55988__$1;
(statearr_56036_57191[(2)] = null);

(statearr_56036_57191[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (15))){
var inst_55643 = (state_55988[(37)]);
var inst_55659 = (state_55988[(8)]);
var inst_55681 = (state_55988[(38)]);
var inst_55667 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_55668 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_55643];
var inst_55669 = cljs.core.PersistentHashMap.fromArrays(inst_55667,inst_55668);
var inst_55670 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_55659,inst_55669);
var inst_55680 = cljs.core.PersistentHashMap.EMPTY;
var inst_55681__$1 = waiting;
var state_55988__$1 = (function (){var statearr_56037 = state_55988;
(statearr_56037[(39)] = inst_55670);

(statearr_56037[(25)] = inst_55680);

(statearr_56037[(38)] = inst_55681__$1);

return statearr_56037;
})();
if(cljs.core.truth_(inst_55681__$1)){
var statearr_56038_57192 = state_55988__$1;
(statearr_56038_57192[(1)] = (18));

} else {
var statearr_56039_57193 = state_55988__$1;
(statearr_56039_57193[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (48))){
var state_55988__$1 = state_55988;
var statearr_56040_57194 = state_55988__$1;
(statearr_56040_57194[(2)] = null);

(statearr_56040_57194[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (50))){
var inst_55659 = (state_55988[(8)]);
var inst_55695 = (state_55988[(29)]);
var inst_55664 = (state_55988[(40)]);
var inst_55696 = (state_55988[(30)]);
var inst_55697 = (state_55988[(31)]);
var inst_55653 = (state_55988[(24)]);
var inst_55694 = (state_55988[(28)]);
var inst_55804 = com.wsscode.pathom.parser.process_next_message(inst_55659,tx,inst_55695,inst_55664,inst_55696,inst_55697,inst_55653,inst_55694);
var state_55988__$1 = state_55988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55988__$1,(53),inst_55804);
} else {
if((state_val_55989 === (75))){
var inst_55659 = (state_55988[(8)]);
var inst_55905 = (state_55988[(41)]);
var inst_55905__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_55659);
var state_55988__$1 = (function (){var statearr_56044 = state_55988;
(statearr_56044[(41)] = inst_55905__$1);

return statearr_56044;
})();
if(cljs.core.truth_(inst_55905__$1)){
var statearr_56045_57195 = state_55988__$1;
(statearr_56045_57195[(1)] = (77));

} else {
var statearr_56046_57196 = state_55988__$1;
(statearr_56046_57196[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (21))){
var inst_55698 = (state_55988[(32)]);
var inst_55707 = (state_55988[(42)]);
var inst_55704 = cljs.core.seq(inst_55698);
var inst_55705 = cljs.core.first(inst_55704);
var inst_55706 = cljs.core.next(inst_55704);
var inst_55707__$1 = cljs.core.__destructure_map(inst_55705);
var inst_55708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55707__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_55988__$1 = (function (){var statearr_56047 = state_55988;
(statearr_56047[(43)] = inst_55706);

(statearr_56047[(42)] = inst_55707__$1);

(statearr_56047[(44)] = inst_55708);

return statearr_56047;
})();
if(cljs.core.truth_(inst_55707__$1)){
var statearr_56048_57198 = state_55988__$1;
(statearr_56048_57198[(1)] = (23));

} else {
var statearr_56049_57199 = state_55988__$1;
(statearr_56049_57199[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (31))){
var inst_55695 = (state_55988[(29)]);
var inst_55696 = (state_55988[(30)]);
var inst_55697 = (state_55988[(31)]);
var inst_55706 = (state_55988[(43)]);
var inst_55730 = (state_55988[(2)]);
var tmp56041 = inst_55697;
var tmp56042 = inst_55695;
var tmp56043 = inst_55696;
var inst_55694 = inst_55730;
var inst_55695__$1 = tmp56042;
var inst_55696__$1 = tmp56043;
var inst_55697__$1 = tmp56041;
var inst_55698 = inst_55706;
var state_55988__$1 = (function (){var statearr_56050 = state_55988;
(statearr_56050[(28)] = inst_55694);

(statearr_56050[(29)] = inst_55695__$1);

(statearr_56050[(30)] = inst_55696__$1);

(statearr_56050[(31)] = inst_55697__$1);

(statearr_56050[(32)] = inst_55698);

return statearr_56050;
})();
var statearr_56051_57217 = state_55988__$1;
(statearr_56051_57217[(2)] = null);

(statearr_56051_57217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (32))){
var inst_55694 = (state_55988[(28)]);
var inst_55710 = (state_55988[(34)]);
var inst_55735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55694,inst_55710);
var inst_55736 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_55735);
var state_55988__$1 = state_55988;
var statearr_56052_57218 = state_55988__$1;
(statearr_56052_57218[(2)] = inst_55736);

(statearr_56052_57218[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (40))){
var inst_55752 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
if(cljs.core.truth_(inst_55752)){
var statearr_56053_57219 = state_55988__$1;
(statearr_56053_57219[(1)] = (41));

} else {
var statearr_56054_57220 = state_55988__$1;
(statearr_56054_57220[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (91))){
var inst_55977 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56055_57221 = state_55988__$1;
(statearr_56055_57221[(2)] = inst_55977);

(statearr_56055_57221[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (56))){
var inst_55817 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56056_57222 = state_55988__$1;
(statearr_56056_57222[(2)] = inst_55817);

(statearr_56056_57222[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (33))){
var inst_55733 = (state_55988[(35)]);
var state_55988__$1 = state_55988;
var statearr_56057_57223 = state_55988__$1;
(statearr_56057_57223[(2)] = inst_55733);

(statearr_56057_57223[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (13))){
var inst_55650 = cljs.core.PersistentHashMap.EMPTY;
var inst_55651 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_55650);
var state_55988__$1 = state_55988;
var statearr_56058_57224 = state_55988__$1;
(statearr_56058_57224[(2)] = inst_55651);

(statearr_56058_57224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (22))){
var inst_55643 = (state_55988[(37)]);
var inst_55659 = (state_55988[(8)]);
var inst_55670 = (state_55988[(39)]);
var inst_55823 = (state_55988[(2)]);
var inst_55824 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_55825 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_55643];
var inst_55826 = cljs.core.PersistentHashMap.fromArrays(inst_55824,inst_55825);
var inst_55827 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_55659,inst_55670,inst_55826);
var state_55988__$1 = (function (){var statearr_56059 = state_55988;
(statearr_56059[(45)] = inst_55827);

return statearr_56059;
})();
var statearr_56060_57225 = state_55988__$1;
(statearr_56060_57225[(2)] = inst_55823);

(statearr_56060_57225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (90))){
var state_55988__$1 = state_55988;
var statearr_56064_57226 = state_55988__$1;
(statearr_56064_57226[(1)] = (93));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (36))){
var inst_55659 = (state_55988[(8)]);
var inst_55747 = (state_55988[(36)]);
var inst_55747__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_55659);
var state_55988__$1 = (function (){var statearr_56066 = state_55988;
(statearr_56066[(36)] = inst_55747__$1);

return statearr_56066;
})();
if(cljs.core.truth_(inst_55747__$1)){
var statearr_56067_57227 = state_55988__$1;
(statearr_56067_57227[(1)] = (38));

} else {
var statearr_56068_57228 = state_55988__$1;
(statearr_56068_57228[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (41))){
var inst_55708 = (state_55988[(44)]);
var inst_55659 = (state_55988[(8)]);
var inst_55696 = (state_55988[(30)]);
var inst_55694 = (state_55988[(28)]);
var inst_55695 = (state_55988[(29)]);
var inst_55697 = (state_55988[(31)]);
var inst_55706 = (state_55988[(43)]);
var inst_55754 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55755 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_55708];
var inst_55756 = cljs.core.PersistentHashMap.fromArrays(inst_55754,inst_55755);
var inst_55757 = com.wsscode.pathom.trace.trace(inst_55659,inst_55756);
var inst_55758 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_55759 = com.wsscode.pathom.parser.watch_pending_key(inst_55659,inst_55708);
var inst_55760 = [inst_55708];
var inst_55761 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_55760);
var inst_55762 = [inst_55759,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_55761];
var inst_55763 = cljs.core.PersistentHashMap.fromArrays(inst_55758,inst_55762);
var inst_55764 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55696,inst_55763);
var tmp56061 = inst_55694;
var tmp56062 = inst_55697;
var tmp56063 = inst_55695;
var inst_55694__$1 = tmp56061;
var inst_55695__$1 = tmp56063;
var inst_55696__$1 = inst_55764;
var inst_55697__$1 = tmp56062;
var inst_55698 = inst_55706;
var state_55988__$1 = (function (){var statearr_56069 = state_55988;
(statearr_56069[(46)] = inst_55757);

(statearr_56069[(28)] = inst_55694__$1);

(statearr_56069[(29)] = inst_55695__$1);

(statearr_56069[(30)] = inst_55696__$1);

(statearr_56069[(31)] = inst_55697__$1);

(statearr_56069[(32)] = inst_55698);

return statearr_56069;
})();
var statearr_56070_57229 = state_55988__$1;
(statearr_56070_57229[(2)] = null);

(statearr_56070_57229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (89))){
var inst_55659 = (state_55988[(8)]);
var inst_55853 = (state_55988[(12)]);
var inst_55664 = (state_55988[(40)]);
var inst_55854 = (state_55988[(13)]);
var inst_55855 = (state_55988[(14)]);
var inst_55653 = (state_55988[(24)]);
var inst_55852 = (state_55988[(9)]);
var inst_55962 = com.wsscode.pathom.parser.process_next_message(inst_55659,tx,inst_55853,inst_55664,inst_55854,inst_55855,inst_55653,inst_55852);
var state_55988__$1 = state_55988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55988__$1,(92),inst_55962);
} else {
if((state_val_55989 === (43))){
var inst_55793 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56071_57230 = state_55988__$1;
(statearr_56071_57230[(2)] = inst_55793);

(statearr_56071_57230[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (61))){
var inst_55981 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56076_57231 = state_55988__$1;
(statearr_56076_57231[(2)] = inst_55981);

(statearr_56076_57231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (29))){
var inst_55694 = (state_55988[(28)]);
var inst_55710 = (state_55988[(34)]);
var inst_55727 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_55694,inst_55710,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_55988__$1 = state_55988;
var statearr_56077_57232 = state_55988__$1;
(statearr_56077_57232[(2)] = inst_55727);

(statearr_56077_57232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (44))){
var inst_55708 = (state_55988[(44)]);
var inst_55659 = (state_55988[(8)]);
var inst_55694 = (state_55988[(28)]);
var inst_55695 = (state_55988[(29)]);
var inst_55696 = (state_55988[(30)]);
var inst_55697 = (state_55988[(31)]);
var inst_55706 = (state_55988[(43)]);
var inst_55769 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55770 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_55708];
var inst_55771 = cljs.core.PersistentHashMap.fromArrays(inst_55769,inst_55770);
var inst_55772 = com.wsscode.pathom.trace.trace(inst_55659,inst_55771);
var tmp56072 = inst_55694;
var tmp56073 = inst_55697;
var tmp56074 = inst_55695;
var tmp56075 = inst_55696;
var inst_55694__$1 = tmp56072;
var inst_55695__$1 = tmp56074;
var inst_55696__$1 = tmp56075;
var inst_55697__$1 = tmp56073;
var inst_55698 = inst_55706;
var state_55988__$1 = (function (){var statearr_56078 = state_55988;
(statearr_56078[(47)] = inst_55772);

(statearr_56078[(28)] = inst_55694__$1);

(statearr_56078[(29)] = inst_55695__$1);

(statearr_56078[(30)] = inst_55696__$1);

(statearr_56078[(31)] = inst_55697__$1);

(statearr_56078[(32)] = inst_55698);

return statearr_56078;
})();
var statearr_56079_57233 = state_55988__$1;
(statearr_56079_57233[(2)] = null);

(statearr_56079_57233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (93))){
var inst_55852 = (state_55988[(9)]);
var state_55988__$1 = state_55988;
var statearr_56080_57234 = state_55988__$1;
(statearr_56080_57234[(2)] = inst_55852);

(statearr_56080_57234[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (6))){
var inst_55633 = (state_55988[(48)]);
var state_55988__$1 = state_55988;
var statearr_56081_57235 = state_55988__$1;
(statearr_56081_57235[(2)] = inst_55633);

(statearr_56081_57235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (28))){
var inst_55797 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56082_57236 = state_55988__$1;
(statearr_56082_57236[(2)] = inst_55797);

(statearr_56082_57236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (64))){
var inst_55979 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56083_57237 = state_55988__$1;
(statearr_56083_57237[(2)] = inst_55979);

(statearr_56083_57237[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (51))){
var state_55988__$1 = state_55988;
var statearr_56084_57238 = state_55988__$1;
(statearr_56084_57238[(1)] = (54));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (25))){
var inst_55821 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56086_57239 = state_55988__$1;
(statearr_56086_57239[(2)] = inst_55821);

(statearr_56086_57239[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (34))){
var inst_55739 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
if(cljs.core.truth_(inst_55739)){
var statearr_56087_57240 = state_55988__$1;
(statearr_56087_57240[(1)] = (35));

} else {
var statearr_56088_57241 = state_55988__$1;
(statearr_56088_57241[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (17))){
var inst_55983 = (state_55988[(2)]);
var _ = (function (){var statearr_56089 = state_55988;
(statearr_56089[(4)] = cljs.core.rest((state_55988[(4)])));

return statearr_56089;
})();
var state_55988__$1 = state_55988;
var statearr_56090_57243 = state_55988__$1;
(statearr_56090_57243[(2)] = inst_55983);

(statearr_56090_57243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (3))){
var inst_55986 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55988__$1,inst_55986);
} else {
if((state_val_55989 === (12))){
var inst_55647 = (state_55988[(49)]);
var state_55988__$1 = state_55988;
var statearr_56091_57244 = state_55988__$1;
(statearr_56091_57244[(2)] = inst_55647);

(statearr_56091_57244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (2))){
var inst_55633 = (state_55988[(48)]);
var _ = (function (){var statearr_56092 = state_55988;
(statearr_56092[(4)] = cljs.core.cons((5),(state_55988[(4)])));

return statearr_56092;
})();
var inst_55633__$1 = key_process_timeout_step;
var state_55988__$1 = (function (){var statearr_56093 = state_55988;
(statearr_56093[(48)] = inst_55633__$1);

return statearr_56093;
})();
if(cljs.core.truth_(inst_55633__$1)){
var statearr_56094_57255 = state_55988__$1;
(statearr_56094_57255[(1)] = (6));

} else {
var statearr_56095_57256 = state_55988__$1;
(statearr_56095_57256[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (66))){
var inst_55852 = (state_55988[(9)]);
var inst_55868 = (state_55988[(10)]);
var inst_55891 = (state_55988[(33)]);
var inst_55891__$1 = cljs.core.contains_QMARK_(inst_55852,inst_55868);
var state_55988__$1 = (function (){var statearr_56096 = state_55988;
(statearr_56096[(33)] = inst_55891__$1);

return statearr_56096;
})();
if(inst_55891__$1){
var statearr_56097_57257 = state_55988__$1;
(statearr_56097_57257[(1)] = (71));

} else {
var statearr_56098_57258 = state_55988__$1;
(statearr_56098_57258[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (23))){
var inst_55707 = (state_55988[(42)]);
var inst_55708 = (state_55988[(44)]);
var inst_55659 = (state_55988[(8)]);
var inst_55697 = (state_55988[(31)]);
var inst_55710 = com.wsscode.pathom.parser.ast__GT_out_key(inst_55707);
var inst_55711 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55712 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_55708];
var inst_55713 = cljs.core.PersistentHashMap.fromArrays(inst_55711,inst_55712);
var inst_55714 = com.wsscode.pathom.trace.trace(inst_55659,inst_55713);
var inst_55715 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_55697,inst_55708,(0));
var inst_55716 = (max_key_iterations - (1));
var inst_55717 = (inst_55715 > inst_55716);
var state_55988__$1 = (function (){var statearr_56103 = state_55988;
(statearr_56103[(34)] = inst_55710);

(statearr_56103[(50)] = inst_55714);

return statearr_56103;
})();
if(cljs.core.truth_(inst_55717)){
var statearr_56104_57259 = state_55988__$1;
(statearr_56104_57259[(1)] = (26));

} else {
var statearr_56105_57260 = state_55988__$1;
(statearr_56105_57260[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (47))){
var inst_55697 = (state_55988[(31)]);
var inst_55710 = (state_55988[(34)]);
var inst_55659 = (state_55988[(8)]);
var inst_55707 = (state_55988[(42)]);
var inst_55653 = (state_55988[(24)]);
var inst_55694 = (state_55988[(28)]);
var inst_55695 = (state_55988[(29)]);
var inst_55696 = (state_55988[(30)]);
var inst_55706 = (state_55988[(43)]);
var inst_55779 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_55697,inst_55710,com.wsscode.pathom.parser.zero_inc);
var inst_55780 = com.wsscode.pathom.parser.parallel_process_value(inst_55659,tx,inst_55707,inst_55653,inst_55694,inst_55695,inst_55696,read,mutate,inst_55779,inst_55706);
var inst_55781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55780,(0),null);
var inst_55782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55780,(1),null);
var inst_55783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55780,(2),null);
var inst_55784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55780,(3),null);
var inst_55785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55780,(4),null);
var inst_55694__$1 = inst_55781;
var inst_55695__$1 = inst_55782;
var inst_55696__$1 = inst_55783;
var inst_55697__$1 = inst_55784;
var inst_55698 = inst_55785;
var state_55988__$1 = (function (){var statearr_56106 = state_55988;
(statearr_56106[(28)] = inst_55694__$1);

(statearr_56106[(29)] = inst_55695__$1);

(statearr_56106[(30)] = inst_55696__$1);

(statearr_56106[(31)] = inst_55697__$1);

(statearr_56106[(32)] = inst_55698);

return statearr_56106;
})();
var statearr_56107_57261 = state_55988__$1;
(statearr_56107_57261[(2)] = null);

(statearr_56107_57261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (35))){
var inst_55708 = (state_55988[(44)]);
var inst_55659 = (state_55988[(8)]);
var inst_55694 = (state_55988[(28)]);
var inst_55695 = (state_55988[(29)]);
var inst_55696 = (state_55988[(30)]);
var inst_55697 = (state_55988[(31)]);
var inst_55706 = (state_55988[(43)]);
var inst_55741 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55742 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_55708];
var inst_55743 = cljs.core.PersistentHashMap.fromArrays(inst_55741,inst_55742);
var inst_55744 = com.wsscode.pathom.trace.trace(inst_55659,inst_55743);
var tmp56099 = inst_55694;
var tmp56100 = inst_55697;
var tmp56101 = inst_55695;
var tmp56102 = inst_55696;
var inst_55694__$1 = tmp56099;
var inst_55695__$1 = tmp56101;
var inst_55696__$1 = tmp56102;
var inst_55697__$1 = tmp56100;
var inst_55698 = inst_55706;
var state_55988__$1 = (function (){var statearr_56108 = state_55988;
(statearr_56108[(51)] = inst_55744);

(statearr_56108[(28)] = inst_55694__$1);

(statearr_56108[(29)] = inst_55695__$1);

(statearr_56108[(30)] = inst_55696__$1);

(statearr_56108[(31)] = inst_55697__$1);

(statearr_56108[(32)] = inst_55698);

return statearr_56108;
})();
var statearr_56109_57262 = state_55988__$1;
(statearr_56109_57262[(2)] = null);

(statearr_56109_57262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (82))){
var inst_55951 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56110_57263 = state_55988__$1;
(statearr_56110_57263[(2)] = inst_55951);

(statearr_56110_57263[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (76))){
var inst_55953 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56111_57264 = state_55988__$1;
(statearr_56111_57264[(2)] = inst_55953);

(statearr_56111_57264[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (19))){
var inst_55684 = cljs.core.PersistentHashSet.EMPTY;
var state_55988__$1 = state_55988;
var statearr_56112_57265 = state_55988__$1;
(statearr_56112_57265[(2)] = inst_55684);

(statearr_56112_57265[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (57))){
var inst_55839 = (state_55988[(52)]);
var state_55988__$1 = state_55988;
var statearr_56113_57266 = state_55988__$1;
(statearr_56113_57266[(2)] = inst_55839);

(statearr_56113_57266[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (68))){
var inst_55852 = (state_55988[(9)]);
var inst_55868 = (state_55988[(10)]);
var inst_55885 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_55852,inst_55868,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_55988__$1 = state_55988;
var statearr_56114_57267 = state_55988__$1;
(statearr_56114_57267[(2)] = inst_55885);

(statearr_56114_57267[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (11))){
var inst_55645 = (state_55988[(53)]);
var inst_55647 = (state_55988[(49)]);
var inst_55643 = (state_55988[(2)]);
var inst_55644 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_55645__$1 = cljs.core.__destructure_map(inst_55644);
var inst_55646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_55647__$1 = key_watchers;
var state_55988__$1 = (function (){var statearr_56116 = state_55988;
(statearr_56116[(37)] = inst_55643);

(statearr_56116[(53)] = inst_55645__$1);

(statearr_56116[(20)] = inst_55646);

(statearr_56116[(49)] = inst_55647__$1);

return statearr_56116;
})();
if(cljs.core.truth_(inst_55647__$1)){
var statearr_56117_57268 = state_55988__$1;
(statearr_56117_57268[(1)] = (12));

} else {
var statearr_56118_57269 = state_55988__$1;
(statearr_56118_57269[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (9))){
var inst_55638 = (state_55988[(54)]);
var inst_55640 = (inst_55638.cljs$core$IFn$_invoke$arity$2 ? inst_55638.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_55638.call(null,env,key_process_timeout));
var state_55988__$1 = state_55988;
var statearr_56123_57270 = state_55988__$1;
(statearr_56123_57270[(2)] = inst_55640);

(statearr_56123_57270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (5))){
var _ = (function (){var statearr_56124 = state_55988;
(statearr_56124[(4)] = cljs.core.rest((state_55988[(4)])));

return statearr_56124;
})();
var state_55988__$1 = state_55988;
var ex56115 = (state_55988__$1[(2)]);
var statearr_56125_57271 = state_55988__$1;
(statearr_56125_57271[(5)] = ex56115);


var statearr_56126_57274 = state_55988__$1;
(statearr_56126_57274[(1)] = (4));

(statearr_56126_57274[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (83))){
var inst_55866 = (state_55988[(7)]);
var inst_55659 = (state_55988[(8)]);
var inst_55852 = (state_55988[(9)]);
var inst_55853 = (state_55988[(12)]);
var inst_55854 = (state_55988[(13)]);
var inst_55855 = (state_55988[(14)]);
var inst_55864 = (state_55988[(15)]);
var inst_55927 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55928 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_55866];
var inst_55929 = cljs.core.PersistentHashMap.fromArrays(inst_55927,inst_55928);
var inst_55930 = com.wsscode.pathom.trace.trace(inst_55659,inst_55929);
var tmp56119 = inst_55852;
var tmp56120 = inst_55855;
var tmp56121 = inst_55854;
var tmp56122 = inst_55853;
var inst_55852__$1 = tmp56119;
var inst_55853__$1 = tmp56122;
var inst_55854__$1 = tmp56121;
var inst_55855__$1 = tmp56120;
var inst_55856 = inst_55864;
var state_55988__$1 = (function (){var statearr_56127 = state_55988;
(statearr_56127[(55)] = inst_55930);

(statearr_56127[(9)] = inst_55852__$1);

(statearr_56127[(12)] = inst_55853__$1);

(statearr_56127[(13)] = inst_55854__$1);

(statearr_56127[(14)] = inst_55855__$1);

(statearr_56127[(16)] = inst_55856);

return statearr_56127;
})();
var statearr_56128_57275 = state_55988__$1;
(statearr_56128_57275[(2)] = null);

(statearr_56128_57275[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (14))){
var inst_55643 = (state_55988[(37)]);
var inst_55638 = (state_55988[(54)]);
var inst_55645 = (state_55988[(53)]);
var inst_55646 = (state_55988[(20)]);
var inst_55653 = (state_55988[(24)]);
var inst_55659 = (state_55988[(8)]);
var inst_55653__$1 = (state_55988[(2)]);
var inst_55654 = cljs.core.deref(entity_path_cache);
var inst_55655 = cljs.core.PersistentHashMap.EMPTY;
var inst_55656 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_55654,path,inst_55655);
var inst_55657 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_55643], 0));
var inst_55658 = (function (){var key_process_timeout_step__$1 = inst_55638;
var key_process_timeout__$1 = inst_55643;
var map__55632 = inst_55645;
var children = inst_55646;
var key_watchers__$1 = inst_55653__$1;
var path_entity = inst_55656;
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,(function (p1__55621_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__55621_SHARP_], 0));
}));

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
})();
var inst_55659__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_55657,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_55658);
var inst_55660 = cljs.core.PersistentHashMap.EMPTY;
var inst_55662 = (function (){var key_process_timeout_step__$1 = inst_55638;
var key_process_timeout__$1 = inst_55643;
var map__55632 = inst_55645;
var children = inst_55646;
var key_watchers__$1 = inst_55653__$1;
var path_entity = inst_55656;
var env__$1 = inst_55659__$1;
return (function (p__55661){
var map__56129 = p__55661;
var map__56129__$1 = cljs.core.__destructure_map(map__56129);
var ast = map__56129__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56129__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ast], null);
});
})();
var inst_55663 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_55662);
var inst_55664 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55660,inst_55663,inst_55646);
var inst_55665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55659__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_55988__$1 = (function (){var statearr_56130 = state_55988;
(statearr_56130[(24)] = inst_55653__$1);

(statearr_56130[(8)] = inst_55659__$1);

(statearr_56130[(40)] = inst_55664);

return statearr_56130;
})();
if(cljs.core.truth_(inst_55665)){
var statearr_56131_57276 = state_55988__$1;
(statearr_56131_57276[(1)] = (15));

} else {
var statearr_56132_57277 = state_55988__$1;
(statearr_56132_57277[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (45))){
var state_55988__$1 = state_55988;
var statearr_56133_57278 = state_55988__$1;
(statearr_56133_57278[(1)] = (47));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (53))){
var inst_55806 = (state_55988[(2)]);
var inst_55807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55806,(0),null);
var inst_55808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55806,(1),null);
var inst_55809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55806,(2),null);
var inst_55810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55806,(3),null);
var inst_55811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55806,(4),null);
var inst_55694 = inst_55807;
var inst_55695 = inst_55808;
var inst_55696 = inst_55809;
var inst_55697 = inst_55810;
var inst_55698 = inst_55811;
var state_55988__$1 = (function (){var statearr_56135 = state_55988;
(statearr_56135[(28)] = inst_55694);

(statearr_56135[(29)] = inst_55695);

(statearr_56135[(30)] = inst_55696);

(statearr_56135[(31)] = inst_55697);

(statearr_56135[(32)] = inst_55698);

return statearr_56135;
})();
var statearr_56136_57279 = state_55988__$1;
(statearr_56136_57279[(2)] = null);

(statearr_56136_57279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (78))){
var inst_55905 = (state_55988[(41)]);
var state_55988__$1 = state_55988;
var statearr_56137_57280 = state_55988__$1;
(statearr_56137_57280[(2)] = inst_55905);

(statearr_56137_57280[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (26))){
var inst_55708 = (state_55988[(44)]);
var inst_55659 = (state_55988[(8)]);
var inst_55694 = (state_55988[(28)]);
var inst_55710 = (state_55988[(34)]);
var inst_55719 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_55720 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_55708,max_key_iterations];
var inst_55721 = cljs.core.PersistentHashMap.fromArrays(inst_55719,inst_55720);
var inst_55722 = com.wsscode.pathom.trace.trace(inst_55659,inst_55721);
var inst_55724 = cljs.core.contains_QMARK_(inst_55694,inst_55710);
var inst_55725 = (!(inst_55724));
var state_55988__$1 = (function (){var statearr_56138 = state_55988;
(statearr_56138[(56)] = inst_55722);

return statearr_56138;
})();
if(inst_55725){
var statearr_56139_57281 = state_55988__$1;
(statearr_56139_57281[(1)] = (29));

} else {
var statearr_56140_57282 = state_55988__$1;
(statearr_56140_57282[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (16))){
var inst_55839 = (state_55988[(52)]);
var inst_55838 = cljs.core.PersistentHashMap.EMPTY;
var inst_55839__$1 = waiting;
var state_55988__$1 = (function (){var statearr_56141 = state_55988;
(statearr_56141[(21)] = inst_55838);

(statearr_56141[(52)] = inst_55839__$1);

return statearr_56141;
})();
if(cljs.core.truth_(inst_55839__$1)){
var statearr_56142_57283 = state_55988__$1;
(statearr_56142_57283[(1)] = (57));

} else {
var statearr_56143_57284 = state_55988__$1;
(statearr_56143_57284[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (81))){
var inst_55853 = (state_55988[(12)]);
var inst_55866 = (state_55988[(7)]);
var inst_55925 = cljs.core.contains_QMARK_(inst_55853,inst_55866);
var state_55988__$1 = state_55988;
if(inst_55925){
var statearr_56144_57285 = state_55988__$1;
(statearr_56144_57285[(1)] = (83));

} else {
var statearr_56145_57286 = state_55988__$1;
(statearr_56145_57286[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (79))){
var inst_55910 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
if(cljs.core.truth_(inst_55910)){
var statearr_56146_57287 = state_55988__$1;
(statearr_56146_57287[(1)] = (80));

} else {
var statearr_56147_57288 = state_55988__$1;
(statearr_56147_57288[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (38))){
var inst_55695 = (state_55988[(29)]);
var inst_55708 = (state_55988[(44)]);
var inst_55749 = cljs.core.contains_QMARK_(inst_55695,inst_55708);
var state_55988__$1 = state_55988;
var statearr_56148_57289 = state_55988__$1;
(statearr_56148_57289[(2)] = inst_55749);

(statearr_56148_57289[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (87))){
var state_55988__$1 = state_55988;
var statearr_56149_57297 = state_55988__$1;
(statearr_56149_57297[(2)] = null);

(statearr_56149_57297[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (30))){
var inst_55694 = (state_55988[(28)]);
var state_55988__$1 = state_55988;
var statearr_56150_57298 = state_55988__$1;
(statearr_56150_57298[(2)] = inst_55694);

(statearr_56150_57298[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (73))){
var inst_55897 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
if(cljs.core.truth_(inst_55897)){
var statearr_56151_57299 = state_55988__$1;
(statearr_56151_57299[(1)] = (74));

} else {
var statearr_56152_57300 = state_55988__$1;
(statearr_56152_57300[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (10))){
var state_55988__$1 = state_55988;
var statearr_56153_57301 = state_55988__$1;
(statearr_56153_57301[(2)] = null);

(statearr_56153_57301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (18))){
var inst_55681 = (state_55988[(38)]);
var state_55988__$1 = state_55988;
var statearr_56154_57302 = state_55988__$1;
(statearr_56154_57302[(2)] = inst_55681);

(statearr_56154_57302[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (52))){
var inst_55819 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56155_57303 = state_55988__$1;
(statearr_56155_57303[(2)] = inst_55819);

(statearr_56155_57303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (67))){
var inst_55955 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56156_57304 = state_55988__$1;
(statearr_56156_57304[(2)] = inst_55955);

(statearr_56156_57304[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (71))){
var inst_55852 = (state_55988[(9)]);
var inst_55868 = (state_55988[(10)]);
var inst_55893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55852,inst_55868);
var inst_55894 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_55893);
var state_55988__$1 = state_55988;
var statearr_56160_57305 = state_55988__$1;
(statearr_56160_57305[(2)] = inst_55894);

(statearr_56160_57305[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (42))){
var inst_55695 = (state_55988[(29)]);
var inst_55708 = (state_55988[(44)]);
var inst_55767 = cljs.core.contains_QMARK_(inst_55695,inst_55708);
var state_55988__$1 = state_55988;
if(inst_55767){
var statearr_56161_57306 = state_55988__$1;
(statearr_56161_57306[(1)] = (44));

} else {
var statearr_56162_57307 = state_55988__$1;
(statearr_56162_57307[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (80))){
var inst_55866 = (state_55988[(7)]);
var inst_55659 = (state_55988[(8)]);
var inst_55854 = (state_55988[(13)]);
var inst_55852 = (state_55988[(9)]);
var inst_55853 = (state_55988[(12)]);
var inst_55855 = (state_55988[(14)]);
var inst_55864 = (state_55988[(15)]);
var inst_55912 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55913 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_55866];
var inst_55914 = cljs.core.PersistentHashMap.fromArrays(inst_55912,inst_55913);
var inst_55915 = com.wsscode.pathom.trace.trace(inst_55659,inst_55914);
var inst_55916 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_55917 = com.wsscode.pathom.parser.watch_pending_key(inst_55659,inst_55866);
var inst_55918 = [inst_55866];
var inst_55919 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_55918);
var inst_55920 = [inst_55917,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_55919];
var inst_55921 = cljs.core.PersistentHashMap.fromArrays(inst_55916,inst_55920);
var inst_55922 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55854,inst_55921);
var tmp56157 = inst_55852;
var tmp56158 = inst_55855;
var tmp56159 = inst_55853;
var inst_55852__$1 = tmp56157;
var inst_55853__$1 = tmp56159;
var inst_55854__$1 = inst_55922;
var inst_55855__$1 = tmp56158;
var inst_55856 = inst_55864;
var state_55988__$1 = (function (){var statearr_56163 = state_55988;
(statearr_56163[(57)] = inst_55915);

(statearr_56163[(9)] = inst_55852__$1);

(statearr_56163[(12)] = inst_55853__$1);

(statearr_56163[(13)] = inst_55854__$1);

(statearr_56163[(14)] = inst_55855__$1);

(statearr_56163[(16)] = inst_55856);

return statearr_56163;
})();
var statearr_56164_57313 = state_55988__$1;
(statearr_56164_57313[(2)] = null);

(statearr_56164_57313[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (37))){
var inst_55795 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56165_57314 = state_55988__$1;
(statearr_56165_57314[(2)] = inst_55795);

(statearr_56165_57314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (63))){
var inst_55854 = (state_55988[(13)]);
var inst_55957 = cljs.core.seq(inst_55854);
var state_55988__$1 = state_55988;
if(inst_55957){
var statearr_56166_57317 = state_55988__$1;
(statearr_56166_57317[(1)] = (89));

} else {
var statearr_56167_57319 = state_55988__$1;
(statearr_56167_57319[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (94))){
var state_55988__$1 = state_55988;
var statearr_56168_57320 = state_55988__$1;
(statearr_56168_57320[(2)] = null);

(statearr_56168_57320[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (8))){
var inst_55638 = (state_55988[(2)]);
var state_55988__$1 = (function (){var statearr_56169 = state_55988;
(statearr_56169[(54)] = inst_55638);

return statearr_56169;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_56170_57324 = state_55988__$1;
(statearr_56170_57324[(1)] = (9));

} else {
var statearr_56171_57325 = state_55988__$1;
(statearr_56171_57325[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (49))){
var inst_55789 = (state_55988[(2)]);
var state_55988__$1 = state_55988;
var statearr_56172_57327 = state_55988__$1;
(statearr_56172_57327[(2)] = inst_55789);

(statearr_56172_57327[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55989 === (84))){
var state_55988__$1 = state_55988;
var statearr_56173_57328 = state_55988__$1;
(statearr_56173_57328[(1)] = (86));



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
}
}
}
}
}
});
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto____0 = (function (){
var statearr_56175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56175[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto__);

(statearr_56175[(1)] = (1));

return statearr_56175;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto____1 = (function (state_55988){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_55988);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e56176){var ex__42124__auto__ = e56176;
var statearr_56177_57329 = state_55988;
(statearr_56177_57329[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_55988[(4)]))){
var statearr_56178_57330 = state_55988;
(statearr_56178_57330[(1)] = cljs.core.first((state_55988[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57342 = state_55988;
state_55988 = G__57342;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto__ = function(state_55988){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto____1.call(this,state_55988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_56179 = f__42153__auto__();
(statearr_56179[(6)] = c__42152__auto__);

return statearr_56179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__56180){
var map__56181 = p__56180;
var map__56181__$1 = cljs.core.__destructure_map(map__56181);
var pconfig = map__56181__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56181__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__56182,tx){
var map__56183 = p__56182;
var map__56183__$1 = cljs.core.__destructure_map(map__56183);
var env = map__56183__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56183__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56183__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56183__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_56230){
var state_val_56231 = (state_56230[(1)]);
if((state_val_56231 === (7))){
var inst_56199 = (state_56230[(7)]);
var state_56230__$1 = state_56230;
var statearr_56232_57343 = state_56230__$1;
(statearr_56232_57343[(2)] = inst_56199);

(statearr_56232_57343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (1))){
var state_56230__$1 = state_56230;
var statearr_56233_57344 = state_56230__$1;
(statearr_56233_57344[(2)] = null);

(statearr_56233_57344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (4))){
var inst_56184 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
var statearr_56234_57345 = state_56230__$1;
(statearr_56234_57345[(2)] = inst_56184);

(statearr_56234_57345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (6))){
var inst_56199 = (state_56230[(7)]);
var inst_56201 = cljs.core.async.timeout(key_process_timeout);
var inst_56202 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56199,inst_56201);
var state_56230__$1 = state_56230;
var statearr_56235_57346 = state_56230__$1;
(statearr_56235_57346[(2)] = inst_56202);

(statearr_56235_57346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (3))){
var inst_56228 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56230__$1,inst_56228);
} else {
if((state_val_56231 === (12))){
var inst_56225 = (state_56230[(2)]);
var _ = (function (){var statearr_56236 = state_56230;
(statearr_56236[(4)] = cljs.core.rest((state_56230[(4)])));

return statearr_56236;
})();
var state_56230__$1 = state_56230;
var statearr_56237_57347 = state_56230__$1;
(statearr_56237_57347[(2)] = inst_56225);

(statearr_56237_57347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (2))){
var inst_56195 = (state_56230[(8)]);
var _ = (function (){var statearr_56238 = state_56230;
(statearr_56238[(4)] = cljs.core.cons((5),(state_56230[(4)])));

return statearr_56238;
})();
var inst_56190 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.conj,path);
var inst_56194 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx], 0));
var inst_56195__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_56194,tx);
var inst_56197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56198 = [inst_56195__$1];
var inst_56199 = (new cljs.core.PersistentVector(null,1,(5),inst_56197,inst_56198,null));
var state_56230__$1 = (function (){var statearr_56239 = state_56230;
(statearr_56239[(9)] = inst_56190);

(statearr_56239[(8)] = inst_56195__$1);

(statearr_56239[(7)] = inst_56199);

return statearr_56239;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_56240_57348 = state_56230__$1;
(statearr_56240_57348[(1)] = (6));

} else {
var statearr_56241_57349 = state_56230__$1;
(statearr_56241_57349[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (11))){
var inst_56214 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_56215 = [new cljs.core.Keyword("com.wsscode.pathom.parser","timeout-reach","com.wsscode.pathom.parser/timeout-reach",1835951243),key_process_timeout];
var inst_56216 = cljs.core.PersistentHashMap.fromArrays(inst_56214,inst_56215);
var inst_56217 = com.wsscode.pathom.trace.trace(env,inst_56216);
var inst_56218 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_56219 = [key_process_timeout];
var inst_56220 = cljs.core.PersistentHashMap.fromArrays(inst_56218,inst_56219);
var inst_56221 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_56220);
var inst_56222 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_56221) : add_error.call(null,env,inst_56221));
var inst_56223 = cljs.core.PersistentHashMap.EMPTY;
var state_56230__$1 = (function (){var statearr_56243 = state_56230;
(statearr_56243[(10)] = inst_56217);

(statearr_56243[(11)] = inst_56222);

return statearr_56243;
})();
var statearr_56244_57352 = state_56230__$1;
(statearr_56244_57352[(2)] = inst_56223);

(statearr_56244_57352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (9))){
var inst_56195 = (state_56230[(8)]);
var inst_56207 = (state_56230[(2)]);
var inst_56208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56207,(0),null);
var inst_56209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56207,(1),null);
var inst_56210 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.disj,path);
var inst_56211 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56195,inst_56209);
var state_56230__$1 = (function (){var statearr_56245 = state_56230;
(statearr_56245[(12)] = inst_56208);

(statearr_56245[(13)] = inst_56210);

return statearr_56245;
})();
if(inst_56211){
var statearr_56246_57356 = state_56230__$1;
(statearr_56246_57356[(1)] = (10));

} else {
var statearr_56247_57357 = state_56230__$1;
(statearr_56247_57357[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (5))){
var _ = (function (){var statearr_56248 = state_56230;
(statearr_56248[(4)] = cljs.core.rest((state_56230[(4)])));

return statearr_56248;
})();
var state_56230__$1 = state_56230;
var ex56242 = (state_56230__$1[(2)]);
var statearr_56249_57361 = state_56230__$1;
(statearr_56249_57361[(5)] = ex56242);


var statearr_56250_57363 = state_56230__$1;
(statearr_56250_57363[(1)] = (4));

(statearr_56250_57363[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (10))){
var inst_56208 = (state_56230[(12)]);
var state_56230__$1 = state_56230;
var statearr_56251_57365 = state_56230__$1;
(statearr_56251_57365[(2)] = inst_56208);

(statearr_56251_57365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (8))){
var inst_56205 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
return cljs.core.async.ioc_alts_BANG_(state_56230__$1,(9),inst_56205);
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
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto____0 = (function (){
var statearr_56252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56252[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto__);

(statearr_56252[(1)] = (1));

return statearr_56252;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto____1 = (function (state_56230){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_56230);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e56253){var ex__42124__auto__ = e56253;
var statearr_56254_57393 = state_56230;
(statearr_56254_57393[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_56230[(4)]))){
var statearr_56255_57394 = state_56230;
(statearr_56255_57394[(1)] = cljs.core.first((state_56230[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57395 = state_56230;
state_56230 = G__57395;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto__ = function(state_56230){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto____1.call(this,state_56230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_56256 = f__42153__auto__();
(statearr_56256[(6)] = c__42152__auto__);

return statearr_56256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
