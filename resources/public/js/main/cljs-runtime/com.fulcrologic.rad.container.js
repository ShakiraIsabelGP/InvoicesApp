goog.provide('com.fulcrologic.rad.container');
/**
 * Returns a sequence of [id cls] pairs for each child (i.e. the seq of the children setting)
 */
com.fulcrologic.rad.container.id_child_pairs = (function com$fulcrologic$rad$container$id_child_pairs(container){
return cljs.core.seq((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(container,new cljs.core.Keyword("com.fulcrologic.rad.container","children","com.fulcrologic.rad.container/children",-199258422)) : com.fulcrologic.fulcro.components.component_options.call(null,container,new cljs.core.Keyword("com.fulcrologic.rad.container","children","com.fulcrologic.rad.container/children",-199258422))));
});
/**
 * Returns a de-duped set of classes of the children of the given instance/class (using it's query)
 */
com.fulcrologic.rad.container.child_classes = (function com$fulcrologic$rad$container$child_classes(container){
return cljs.core.set(cljs.core.vals((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(container,new cljs.core.Keyword("com.fulcrologic.rad.container","children","com.fulcrologic.rad.container/children",-199258422)) : com.fulcrologic.fulcro.components.component_options.call(null,container,new cljs.core.Keyword("com.fulcrologic.rad.container","children","com.fulcrologic.rad.container/children",-199258422)))));
});
com.fulcrologic.rad.container.merge_children = (function com$fulcrologic$rad$container$merge_children(env){
var container_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926));
var container_ident = com.fulcrologic.fulcro.ui_state_machines.actor__GT_ident(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926));
var merge_children_STAR_ = (function (s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,p__92782){
var vec__92783 = p__92782;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92783,(0),null);
var cls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92783,(1),null);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(cls) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,cls));
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(container_ident,k);
return com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic(state,cls,(function (){var or__5045__auto__ = (function (){var G__92786 = cls;
var G__92787 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id], null);
return (com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(G__92786,G__92787) : com.fulcrologic.fulcro.components.get_initial_state.call(null,G__92786,G__92787));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"replace","replace",-786587770),path], 0));
}),s,com.fulcrologic.rad.container.id_child_pairs(container_class));
});
return com.fulcrologic.fulcro.ui_state_machines.apply_action(env,merge_children_STAR_);
});
com.fulcrologic.rad.container.start_children_BANG_ = (function com$fulcrologic$rad$container$start_children_BANG_(p__92788){
var map__92789 = p__92788;
var map__92789__$1 = cljs.core.__destructure_map(map__92789);
var env = map__92789__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92789__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92789__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var container_class = com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926));
var id_children = com.fulcrologic.rad.container.id_child_pairs(container_class);
var seq__92790_92846 = cljs.core.seq(id_children);
var chunk__92791_92847 = null;
var count__92792_92848 = (0);
var i__92793_92849 = (0);
while(true){
if((i__92793_92849 < count__92792_92848)){
var vec__92800_92850 = chunk__92791_92847.cljs$core$IIndexed$_nth$arity$2(null,i__92793_92849);
var id_92851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92800_92850,(0),null);
var c_92852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92800_92850,(1),null);
com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3(app,c_92852,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event_data,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id_92851,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","externally-controlled?","com.fulcrologic.rad.report/externally-controlled?",607281641),true], 0)));


var G__92853 = seq__92790_92846;
var G__92854 = chunk__92791_92847;
var G__92855 = count__92792_92848;
var G__92856 = (i__92793_92849 + (1));
seq__92790_92846 = G__92853;
chunk__92791_92847 = G__92854;
count__92792_92848 = G__92855;
i__92793_92849 = G__92856;
continue;
} else {
var temp__5804__auto___92857 = cljs.core.seq(seq__92790_92846);
if(temp__5804__auto___92857){
var seq__92790_92858__$1 = temp__5804__auto___92857;
if(cljs.core.chunked_seq_QMARK_(seq__92790_92858__$1)){
var c__5568__auto___92859 = cljs.core.chunk_first(seq__92790_92858__$1);
var G__92860 = cljs.core.chunk_rest(seq__92790_92858__$1);
var G__92861 = c__5568__auto___92859;
var G__92862 = cljs.core.count(c__5568__auto___92859);
var G__92863 = (0);
seq__92790_92846 = G__92860;
chunk__92791_92847 = G__92861;
count__92792_92848 = G__92862;
i__92793_92849 = G__92863;
continue;
} else {
var vec__92803_92864 = cljs.core.first(seq__92790_92858__$1);
var id_92865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92803_92864,(0),null);
var c_92866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92803_92864,(1),null);
com.fulcrologic.rad.report.start_report_BANG_.cljs$core$IFn$_invoke$arity$3(app,c_92866,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event_data,new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id_92865,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.report","externally-controlled?","com.fulcrologic.rad.report/externally-controlled?",607281641),true], 0)));


var G__92867 = cljs.core.next(seq__92790_92858__$1);
var G__92868 = null;
var G__92869 = (0);
var G__92870 = (0);
seq__92790_92846 = G__92867;
chunk__92791_92847 = G__92868;
count__92792_92848 = G__92869;
i__92793_92849 = G__92870;
continue;
}
} else {
}
}
break;
}

return env;
});
/**
 * Returns the report options from the current report actor.
 */
com.fulcrologic.rad.container.container_options = (function com$fulcrologic$rad$container$container_options(var_args){
var args__5775__auto__ = [];
var len__5769__auto___92871 = arguments.length;
var i__5770__auto___92872 = (0);
while(true){
if((i__5770__auto___92872 < len__5769__auto___92871)){
args__5775__auto__.push((arguments[i__5770__auto___92872]));

var G__92873 = (i__5770__auto___92872 + (1));
i__5770__auto___92872 = G__92873;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.rad.container.container_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(com.fulcrologic.rad.container.container_options.cljs$core$IFn$_invoke$arity$variadic = (function (uism_env,k_or_ks){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.component_options,com.fulcrologic.fulcro.ui_state_machines.actor_class(uism_env,new cljs.core.Keyword("actor","container","actor/container",-1644380926)),k_or_ks);
}));

(com.fulcrologic.rad.container.container_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.rad.container.container_options.cljs$lang$applyTo = (function (seq92806){
var G__92807 = cljs.core.first(seq92806);
var seq92806__$1 = cljs.core.next(seq92806);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92807,seq92806__$1);
}));

com.fulcrologic.rad.container.initialize_parameters = (function com$fulcrologic$rad$container$initialize_parameters(p__92808){
var map__92809 = p__92808;
var map__92809__$1 = cljs.core.__destructure_map(map__92809);
var env = map__92809__$1;
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92809__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","app","com.fulcrologic.fulcro.ui-state-machines/app",-1843831489));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92809__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","event-data","com.fulcrologic.fulcro.ui-state-machines/event-data",742794031));
var map__92810 = com.fulcrologic.rad.routing.history.current_route(app);
var map__92810__$1 = cljs.core.__destructure_map(map__92810);
var history_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92810__$1,new cljs.core.Keyword(null,"params","params",710516235));
var map__92811 = event_data;
var map__92811__$1 = cljs.core.__destructure_map(map__92811);
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92811__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926)));
return cljs.core.reduce_kv((function (new_env,control_key,p__92812){
var map__92813 = p__92812;
var map__92813__$1 = cljs.core.__destructure_map(map__92813);
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92813__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var v = ((cljs.core.contains_QMARK_(route_params,control_key))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(route_params,control_key):((cljs.core.contains_QMARK_(history_params,control_key))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(history_params,control_key):(((!((default_value == null))))?com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(default_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app], 0)):null)));
if((!((v == null)))){
return com.fulcrologic.fulcro.ui_state_machines.apply_action.cljs$core$IFn$_invoke$arity$variadic(new_env,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.control","id","com.fulcrologic.rad.control/id",-1717639504),control_key,new cljs.core.Keyword("com.fulcrologic.rad.control","value","com.fulcrologic.rad.control/value",656191245)], null),v], 0));
} else {
return new_env;
}
}),env,controls);
});
com.fulcrologic.rad.container.container_machine = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","started","com.fulcrologic.fulcro.ui-state-machines/started",-1306384334),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.rad.container.start_children_BANG_(com.fulcrologic.rad.container.initialize_parameters(com.fulcrologic.rad.container.merge_children(env)));
})], null),new cljs.core.Keyword("event","run","event/run",1832485709),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__92817){
var vec__92818 = p__92817;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92818,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92818,(1),null);
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3(env__$1,(function (){var G__92821 = c;
var G__92822 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id], null);
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92821,G__92822) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92821,G__92822));
})(),new cljs.core.Keyword("event","run","event/run",1832485709));
}),env,com.fulcrologic.rad.container.id_child_pairs(com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926))));
})], null)], null)], null)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","state-machine-id","com.fulcrologic.fulcro.ui-state-machines/state-machine-id",-1104142583),new cljs.core.Symbol("com.fulcrologic.rad.container","container-machine","com.fulcrologic.rad.container/container-machine",1724882138,null));

com.fulcrologic.fulcro.ui_state_machines.register_state_machine_BANG_(new cljs.core.Symbol("com.fulcrologic.rad.container","container-machine","com.fulcrologic.rad.container/container-machine",1724882138,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","actors","com.fulcrologic.fulcro.ui-state-machines/actors",89596064),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),null], null), null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","aliases","com.fulcrologic.fulcro.ui-state-machines/aliases",-320387324),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160)], null)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","states","com.fulcrologic.fulcro.ui-state-machines/states",-1501579308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","events","com.fulcrologic.fulcro.ui-state-machines/events",301935363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","started","com.fulcrologic.fulcro.ui-state-machines/started",-1306384334),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return com.fulcrologic.rad.container.start_children_BANG_(com.fulcrologic.rad.container.initialize_parameters(com.fulcrologic.rad.container.merge_children(env)));
})], null),new cljs.core.Keyword("event","run","event/run",1832485709),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.ui-state-machines","handler","com.fulcrologic.fulcro.ui-state-machines/handler",1642623182),(function (env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__92823){
var vec__92824 = p__92823;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92824,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92824,(1),null);
return com.fulcrologic.fulcro.ui_state_machines.trigger.cljs$core$IFn$_invoke$arity$3(env__$1,(function (){var G__92827 = c;
var G__92828 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.rad.report","id","com.fulcrologic.rad.report/id",-1896228825),id], null);
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92827,G__92828) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92827,G__92828));
})(),new cljs.core.Keyword("event","run","event/run",1832485709));
}),env,com.fulcrologic.rad.container.id_child_pairs(com.fulcrologic.fulcro.ui_state_machines.actor_class(env,new cljs.core.Keyword("actor","container","actor/container",-1644380926))));
})], null)], null)], null)], null)], null));
/**
 * Auto-render the content of a container. This is the automatic body of a container. If you supply no render body
 * to a container, this is what it will hold. Configurable through component options via `::container/layout-style`.  You can also do custom rendering
 * in the container, and call this to embed the generated UI.
 */
com.fulcrologic.rad.container.render_layout = (function com$fulcrologic$rad$container$render_layout(container_instance){
var map__92829 = com.fulcrologic.fulcro.components.any__GT_app(container_instance);
var map__92829__$1 = cljs.core.__destructure_map(map__92829);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92829__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var layout_style = (function (){var or__5045__auto__ = (function (){var G__92830 = container_instance;
var G__92830__$1 = (((G__92830 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__92830) : com.fulcrologic.fulcro.components.component_options.call(null,G__92830)));
if((G__92830__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.rad.container","layout-style","com.fulcrologic.rad.container/layout-style",-530499190).cljs$core$IFn$_invoke$arity$1(G__92830__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var layout = (function (){var G__92831 = runtime_atom;
var G__92831__$1 = (((G__92831 == null))?null:cljs.core.deref(G__92831));
var G__92831__$2 = (((G__92831__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad","controls","com.fulcrologic.rad/controls",1206828881).cljs$core$IFn$_invoke$arity$1(G__92831__$1));
var G__92831__$3 = (((G__92831__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.container","style->layout","com.fulcrologic.rad.container/style->layout",331968533).cljs$core$IFn$_invoke$arity$1(G__92831__$2));
if((G__92831__$3 == null)){
return null;
} else {
return (layout_style.cljs$core$IFn$_invoke$arity$1 ? layout_style.cljs$core$IFn$_invoke$arity$1(G__92831__$3) : layout_style.call(null,G__92831__$3));
}
})();
if(cljs.core.truth_(layout)){
return (layout.cljs$core$IFn$_invoke$arity$1 ? layout.cljs$core$IFn$_invoke$arity$1(container_instance) : layout.call(null,container_instance));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.rad.container",null,120,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No layout function found for form layout style",layout_style], null);
}),null)),null,-8372314,null);

return null;
}
});
com.fulcrologic.rad.container.start_container_BANG_ = (function com$fulcrologic$rad$container$start_container_BANG_(app,container_class,options){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.rad.container",null,124,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting container!"], null);
}),null)),null,-32494012,null);

var container_ident = (function (){var G__92832 = container_class;
var G__92833 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92832,G__92833) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92832,G__92833));
})();
return com.fulcrologic.fulcro.ui_state_machines.begin_BANG_.cljs$core$IFn$_invoke$arity$5(app,com.fulcrologic.rad.container.container_machine,container_ident,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("actor","container","actor/container",-1644380926),container_class], null),options);
});
com.fulcrologic.rad.container.container_will_enter = (function com$fulcrologic$rad$container$container_will_enter(app,route_params,container_class){
var container_ident = (function (){var G__92834 = container_class;
var G__92835 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$2(G__92834,G__92835) : com.fulcrologic.fulcro.components.get_ident.call(null,G__92834,G__92835));
})();
return com.fulcrologic.fulcro.routing.dynamic_routing.route_deferred(container_ident,(function (){
com.fulcrologic.rad.container.start_container_BANG_(app,container_class,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__92836 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),container_ident], null);
return (com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.cljs$core$IFn$_invoke$arity$1(G__92836) : com.fulcrologic.fulcro.routing.dynamic_routing.target_ready.call(null,G__92836));
})()], null));
}));
});

//# sourceMappingURL=com.fulcrologic.rad.container.js.map
