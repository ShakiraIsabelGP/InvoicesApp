goog.provide('com.fulcrologic.rad.rendering.semantic_ui.report');
com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons = (function com$fulcrologic$rad$rendering$semantic_ui$report$row_action_buttons(report_instance,row_props){
var map__93098 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__93098__$1 = cljs.core.__destructure_map(map__93098);
var row_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93098__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371));
var map__93099 = com.fulcrologic.rad.semantic_ui_options.get_rendering_options(report_instance);
var map__93099__$1 = cljs.core.__destructure_map(map__93099);
var report_row_button_grouping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93099__$1,new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-row-button-grouping","com.fulcrologic.rad.semantic-ui-options/report-row-button-grouping",1934348213));
var report_row_button_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93099__$1,new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-row-button-renderer","com.fulcrologic.rad.semantic-ui-options/report-row-button-renderer",990785639));
if(cljs.core.seq(row_actions)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(report_row_button_grouping,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui buttons";
}
})()], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__93100){
var map__93101 = p__93100;
var map__93101__$1 = cljs.core.__destructure_map(map__93101);
var control = map__93101__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93101__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var reload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93101__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93101__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93101__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93101__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var disabled_QMARK___$1 = cljs.core.boolean$(com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(disabled_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,row_props], 0)));
var onClick = (function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(report_instance,row_props) : action.call(null,report_instance,row_props));

if(cljs.core.truth_(reload_QMARK_)){
return (com.fulcrologic.rad.control.run_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.control.run_BANG_.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.rad.control.run_BANG_.call(null,report_instance));
} else {
return null;
}
} else {
return null;
}
});
var control_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([control,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1], null)], 0));
var label__$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,row_props,control_props], 0));
if(cljs.core.truth_((function (){var or__5045__auto__ = (visible_QMARK_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(visible_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,row_props], 0));
}
})())){
if(cljs.core.truth_(report_row_button_renderer)){
return (report_row_button_renderer.cljs$core$IFn$_invoke$arity$3 ? report_row_button_renderer.cljs$core$IFn$_invoke$arity$3(report_instance,row_props,control_props) : report_row_button_renderer.call(null,report_instance,row_props,control_props));
} else {
if(typeof label__$1 === 'string'){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClick], null),label__$1], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607));
} else {
return label__$1;
}
}
} else {
return null;
}
}),row_actions)], null),null);
} else {
return null;
}
});
com.fulcrologic.rad.rendering.semantic_ui.report.column_alignment_class = (function com$fulcrologic$rad$rendering$semantic_ui$report$column_alignment_class(report_instance,attr){
var alignment = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr,com.fulcrologic.rad.report_options.column_alignment),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,attr], 0));
var G__93102 = alignment;
var G__93102__$1 = (((G__93102 instanceof cljs.core.Keyword))?G__93102.fqn:null);
switch (G__93102__$1) {
case "left":
return "left aligned";

break;
case "right":
return "right aligned";

break;
case "center":
return "center aligned";

break;
default:
return "";

}
});

var options__50845__auto___93163 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_TableRowLayout(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var map__93103 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
var map__93103__$1 = cljs.core.__destructure_map(map__93103);
var rp = map__93103__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93103__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93103__$1,new cljs.core.Keyword(null,"props","props",453281727));
var map__93104 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__93104__$1 = cljs.core.__destructure_map(map__93104);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93104__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93104__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","link","com.fulcrologic.rad.report/link",1807717127));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93104__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","links","com.fulcrologic.rad.report/links",-1514511185));
var on_select_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93104__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","on-select-row","com.fulcrologic.rad.report/on-select-row",-1754562064));
var links__$1 = (function (){var or__5045__auto__ = links;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return link;
}
})();
var action_buttons = com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons(report_instance,props);
var map__93105 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.components.get_computed.call(null,props));
var map__93105__$1 = cljs.core.__destructure_map(map__93105);
var highlighted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93105__$1,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93105__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954));
var sui_cell_class = com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_table_cell_class], 0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(highlighted_QMARK_)?"active":null)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

if(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.selectable_table_rows_QMARK_], 0)) === false){
return null;
} else {
com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(on_select_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,props], 0));

return com.fulcrologic.rad.report.select_row_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,idx);
}
})], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx__$1,p__93106){
var map__93107 = p__93106;
var map__93107__$1 = cljs.core.__destructure_map(map__93107);
var column = map__93107__$1;
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93107__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var alignment_class = com.fulcrologic.rad.rendering.semantic_ui.report.column_alignment_class(report_instance,column);
var column_classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alignment_class)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.report.column_classes(report_instance,column))].join('');
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_key)].join(''),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_cell_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,idx__$1], 0)),column_classes], null)], null),(function (){var map__93108 = com.fulcrologic.rad.report.form_link(report_instance,props,qualified_key);
var map__93108__$1 = cljs.core.__destructure_map(map__93108);
var edit_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93108__$1,new cljs.core.Keyword(null,"edit-form","edit-form",1081227988));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93108__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(links__$1,qualified_key);
var label = com.fulcrologic.rad.report.formatted_column_value(report_instance,props,column);
if(cljs.core.truth_(edit_form)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(report_instance,edit_form,entity_id);
})], null),label], null),null);
} else {
if(cljs.core.fn_QMARK_(link_fn)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(report_instance,props) : link_fn.call(null,report_instance,props));
})], null),label], null),null);
} else {
return label;

}
}
})()], null),null);
}),columns),(cljs.core.truth_(action_buttons)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"actions",new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_cell_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,cljs.core.count(columns)], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "collapsing";
}
})()], null),action_buttons], null),null):null)], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.TableRowLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.TableRowLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___93163,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.TableRowLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","TableRowLayout","com.fulcrologic.rad.rendering.semantic-ui.report/TableRowLayout",-351309716),options__50845__auto___93163);
var ui_table_row_layout_93164 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.report.TableRowLayout);
com.fulcrologic.rad.rendering.semantic_ui.report.render_table_row = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_table_row(report_instance,row_class,row_props){
var G__93109 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance,new cljs.core.Keyword(null,"row-class","row-class",-1782148593),row_class,new cljs.core.Keyword(null,"props","props",453281727),row_props], null);
return (ui_table_row_layout_93164.cljs$core$IFn$_invoke$arity$1 ? ui_table_row_layout_93164.cljs$core$IFn$_invoke$arity$1(G__93109) : ui_table_row_layout_93164.call(null,G__93109));
});

var options__50845__auto___93165 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_ListRowLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__93110 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__93110__$1 = cljs.core.__destructure_map(map__93110);
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93110__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93110__$1,new cljs.core.Keyword(null,"props","props",453281727));
var map__93111 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__93111__$1 = cljs.core.__destructure_map(map__93111);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93111__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var header_column = cljs.core.first(columns);
var description_column = cljs.core.second(columns);
var map__93112 = (function (){var G__93113 = header_column;
var G__93113__$1 = (((G__93113 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(G__93113));
if((G__93113__$1 == null)){
return null;
} else {
return com.fulcrologic.rad.report.form_link(report_instance,props,G__93113__$1);
}
})();
var map__93112__$1 = cljs.core.__destructure_map(map__93112);
var edit_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93112__$1,new cljs.core.Keyword(null,"edit-form","edit-form",1081227988));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93112__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var header_label = (function (){var G__93114 = header_column;
if((G__93114 == null)){
return null;
} else {
return com.fulcrologic.rad.report.formatted_column_value(report_instance,props,G__93114);
}
})();
var description_label = (function (){var G__93115 = description_column;
if((G__93115 == null)){
return null;
} else {
return com.fulcrologic.rad.report.formatted_column_value(report_instance,props,G__93115);
}
})();
var action_buttons = com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons(report_instance,props);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(action_buttons)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_buttons], null),new cljs.core.Keyword(null,".right.floated.content",".right.floated.content",1490801359)):null),(cljs.core.truth_(header_label)?(cljs.core.truth_(edit_form)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.rad.form.edit_BANG_.cljs$core$IFn$_invoke$arity$3(report_instance,edit_form,entity_id);
})], null),header_label], null),new cljs.core.Keyword(null,".header",".header",-1761691025)):com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_label], null),new cljs.core.Keyword(null,".header",".header",-1761691025))):null),(cljs.core.truth_(description_label)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [description_label], null),new cljs.core.Keyword(null,".description",".description",-545635281)):null)], null),new cljs.core.Keyword(null,".content",".content",528321340))], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.ListRowLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.ListRowLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___93165,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.ListRowLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","ListRowLayout","com.fulcrologic.rad.rendering.semantic-ui.report/ListRowLayout",2065221320),options__50845__auto___93165);
var ui_list_row_layout_93166 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.report.ListRowLayout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)], null));
com.fulcrologic.rad.rendering.semantic_ui.report.render_list_row = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_list_row(report_instance,row_class,row_props){
var G__93116 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance,new cljs.core.Keyword(null,"row-class","row-class",-1782148593),row_class,new cljs.core.Keyword(null,"props","props",453281727),row_props], null);
return (ui_list_row_layout_93166.cljs$core$IFn$_invoke$arity$1 ? ui_list_row_layout_93166.cljs$core$IFn$_invoke$arity$1(G__93116) : ui_list_row_layout_93166.call(null,G__93116));
});

var options__50845__auto___93167 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_StandardReportControls(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__93119 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__93119__$1 = cljs.core.__destructure_map(map__93119);
var env = map__93119__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93119__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var controls = com.fulcrologic.rad.control.component_controls.cljs$core$IFn$_invoke$arity$1(report_instance);
var map__93120 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__93120__$1 = cljs.core.__destructure_map(map__93120);
var paginate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93120__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","paginate?","com.fulcrologic.rad.report/paginate?",505904825));
var map__93121 = com.fulcrologic.rad.semantic_ui_options.get_rendering_options(report_instance);
var map__93121__$1 = cljs.core.__destructure_map(map__93121);
var report_action_button_grouping = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93121__$1,new cljs.core.Keyword("com.fulcrologic.rad.semantic-ui-options","report-action-button-grouping","com.fulcrologic.rad.semantic-ui-options/report-action-button-grouping",-661341984));
var map__93122 = com.fulcrologic.rad.control.standard_control_layout(report_instance);
var map__93122__$1 = cljs.core.__destructure_map(map__93122);
var input_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93122__$1,new cljs.core.Keyword(null,"input-layout","input-layout",182479828));
var action_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93122__$1,new cljs.core.Keyword(null,"action-layout","action-layout",137416830));
var map__93123 = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.get_computed.call(null,report_instance));
var map__93123__$1 = cljs.core.__destructure_map(map__93123);
var controlled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93123__$1,new cljs.core.Keyword("com.fulcrologic.rad.container","controlled?","com.fulcrologic.rad.container/controlled?",-878634967));
return com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.controls_class], 0)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui top attached compact segment";
}
})()], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = (function (){var G__93124 = report_instance;
var G__93124__$1 = (((G__93124 == null))?null:(com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(G__93124) : com.fulcrologic.fulcro.components.component_options.call(null,G__93124)));
var G__93124__$2 = (((G__93124__$1 == null))?null:new cljs.core.Keyword("com.fulcrologic.rad.report","title","com.fulcrologic.rad.report/title",145976308).cljs$core$IFn$_invoke$arity$1(G__93124__$1));
if((G__93124__$2 == null)){
return null;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__93124__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.fulcro_i18n.i18n.fulcro_trc("a table that shows a list of rows","Report");
}
})(),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(report_action_button_grouping,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui right floated buttons";
}
})()], null),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
var control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,k);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = cljs.core.not(controlled_QMARK_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"local?","local?",-1422786101).cljs$core$IFn$_invoke$arity$1(control);
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$3(control,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
} else {
return and__5043__auto__;
}
})())){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$3(report_instance,k,control);
} else {
return null;
}
}),action_layout)], null),null)], null),new cljs.core.Keyword(null,".ui.header",".ui.header",111113396)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
var nfields = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__93117_SHARP_){
var or__5045__auto__ = cljs.core.not(controlled_QMARK_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"local?","local?",-1422786101).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,p1__93117_SHARP_));
}
}),row));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_controls_row_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,idx], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.cljs$core$IFn$_invoke$arity$1(nfields) : com.fulcrologic.rad.rendering.semantic_ui.form.n_fields_string.call(null,nfields));
}
})()], null),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__93118_SHARP_){
var control = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controls,p1__93118_SHARP_);
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not(controlled_QMARK_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"local?","local?",-1422786101).cljs$core$IFn$_invoke$arity$1(control);
}
})())){
return com.fulcrologic.rad.control.render_control.cljs$core$IFn$_invoke$arity$3(report_instance,p1__93118_SHARP_,control);
} else {
return null;
}
}),row)], null),null);
}),input_layout)], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099)),(cljs.core.truth_(paginate_QMARK_)?(function (){var page_count = com.fulcrologic.rad.report.page_count.cljs$core$IFn$_invoke$arity$1(report_instance);
if((page_count > (1))){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"style": ({"paddingTop": "4px"})}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.semantic_ui.addons.pagination.ui_pagination.ui_pagination(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"activePage","activePage",1551610359),com.fulcrologic.rad.report.current_page.cljs$core$IFn$_invoke$arity$1(report_instance),new cljs.core.Keyword(null,"onPageChange","onPageChange",-511261654),(function (_,data){
return com.fulcrologic.rad.report.goto_page_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,(com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(data,"activePage") : com.fulcrologic.fulcro.components.isoget.call(null,data,"activePage")));
}),new cljs.core.Keyword(null,"totalPages","totalPages",-354845357),page_count,new cljs.core.Keyword(null,"size","size",1098693007),"tiny"], null)))])], null),new cljs.core.Keyword(null,".two.wide.column",".two.wide.column",-879756945))], null),new cljs.core.Keyword(null,".ui.two.column.centered.grid",".ui.two.column.centered.grid",-1599478984));
} else {
return null;
}
})():null)], null),null)], 0));
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.StandardReportControls !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.StandardReportControls = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___93167,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.StandardReportControls,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","StandardReportControls","com.fulcrologic.rad.rendering.semantic-ui.report/StandardReportControls",1042104029),options__50845__auto___93167);
var ui_standard_report_controls_93170 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.rad.rendering.semantic_ui.report.StandardReportControls);
com.fulcrologic.rad.rendering.semantic_ui.report.render_standard_controls = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_standard_controls(report_instance){
var G__93125 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance], null);
return (ui_standard_report_controls_93170.cljs$core$IFn$_invoke$arity$1 ? ui_standard_report_controls_93170.cljs$core$IFn$_invoke$arity$1(G__93125) : ui_standard_report_controls_93170.call(null,G__93125));
});

var options__50845__auto___93171 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-factory","row-factory",751079809),cljs.core.memoize((function (cls){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
var G__93126 = props;
if((G__93126 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(G__93126,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)) : com.fulcrologic.fulcro.components.get_computed.call(null,G__93126,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)));
}
})], null));
}))], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_ListReportLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__93127 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__93127__$1 = cljs.core.__destructure_map(map__93127);
var env = map__93127__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93127__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var map__93128 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__93128__$1 = cljs.core.__destructure_map(map__93128);
var BodyItem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93128__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373));
var render_report_body_item = (function (){var fexpr__93129 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"row-factory","row-factory",751079809));
return (fexpr__93129.cljs$core$IFn$_invoke$arity$1 ? fexpr__93129.cljs$core$IFn$_invoke$arity$1(BodyItem) : fexpr__93129.call(null,BodyItem));
})();
var render_controls = com.fulcrologic.rad.report.control_renderer(this$);
var extra_parent_query = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206)) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206)));
var query_inclusion_props = cljs.core.select_keys((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),extra_parent_query);
var rows = com.fulcrologic.rad.report.current_rows(report_instance);
var loading_QMARK_ = com.fulcrologic.rad.report.loading_QMARK_(report_instance);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(render_controls)?(render_controls.cljs$core$IFn$_invoke$arity$1 ? render_controls.cljs$core$IFn$_invoke$arity$1(report_instance) : render_controls.call(null,report_instance)):null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(loading_QMARK_)?"active":null)], null)], null)], null),new cljs.core.Keyword(null,".ui.loader",".ui.loader",1057732850)),((cljs.core.seq(rows))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
var G__93130 = row;
var G__93131 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_inclusion_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance,new cljs.core.Keyword(null,"row-class","row-class",-1782148593),BodyItem,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954),idx], null)], 0));
return (render_report_body_item.cljs$core$IFn$_invoke$arity$2 ? render_report_body_item.cljs$core$IFn$_invoke$arity$2(G__93130,G__93131) : render_report_body_item.call(null,G__93130,G__93131));
}),rows)], null),new cljs.core.Keyword(null,".ui.relaxed.divided.list",".ui.relaxed.divided.list",-986648580)):null)], null),new cljs.core.Keyword(null,".ui.attached.segment",".ui.attached.segment",-1525826681))], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.ListReportLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.ListReportLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___93171,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.ListReportLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","ListReportLayout","com.fulcrologic.rad.rendering.semantic-ui.report/ListReportLayout",-217732979),options__50845__auto___93171);
var ui_list_report_layout_93172 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.report.ListReportLayout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)], null));
com.fulcrologic.rad.rendering.semantic_ui.report.render_list_report_layout = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_list_report_layout(report_instance){
var G__93132 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance], null);
return (ui_list_report_layout_93172.cljs$core$IFn$_invoke$arity$1 ? ui_list_report_layout_93172.cljs$core$IFn$_invoke$arity$1(G__93132) : ui_list_report_layout_93172.call(null,G__93132));
});
com.fulcrologic.rad.rendering.semantic_ui.report.render_standard_table = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_standard_table(this$,p__93133){
var map__93134 = p__93133;
var map__93134__$1 = cljs.core.__destructure_map(map__93134);
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93134__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var map__93135 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__93135__$1 = cljs.core.__destructure_map(map__93135);
var report_column_headings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93135__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-headings","com.fulcrologic.rad.report/column-headings",1666271609));
var report_column_infos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93135__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-infos","com.fulcrologic.rad.report/column-infos",961152363));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93135__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var row_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93135__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371));
var BodyItem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93135__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","BodyItem","com.fulcrologic.rad.report/BodyItem",-810730373));
var compare_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93135__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509));
var table_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93135__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","table-class","com.fulcrologic.rad.report/table-class",-801171370));
var render_report_body_item = (function (){var fexpr__93136 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"row-factory","row-factory",751079809));
return (fexpr__93136.cljs$core$IFn$_invoke$arity$1 ? fexpr__93136.cljs$core$IFn$_invoke$arity$1(BodyItem) : fexpr__93136.call(null,BodyItem));
})();
var column_headings = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__93137){
var map__93138 = p__93137;
var map__93138__$1 = cljs.core.__destructure_map(map__93138);
var attr = map__93138__$1;
var column_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93138__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-heading","com.fulcrologic.rad.report/column-heading",-1327880348));
var column_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93138__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-info","com.fulcrologic.rad.report/column-info",887310264));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93138__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column","column",2078222095),attr,new cljs.core.Keyword(null,"help","help",-439233446),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(report_column_infos,qualified_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(column_info,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
}
})(),new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(report_column_headings,qualified_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(column_heading,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.attributes_options.label.cljs$core$IFn$_invoke$arity$1(attr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = (function (){var G__93139 = qualified_key;
var G__93139__$1 = (((G__93139 == null))?null:cljs.core.name(G__93139));
if((G__93139__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__93139__$1);
}
})();
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return "";
}
}
}
}
})()], null);
}),columns);
var rows = com.fulcrologic.rad.report.current_rows(report_instance);
var extra_parent_query = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$2(report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206)) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance,new cljs.core.Keyword("com.fulcrologic.rad.report","query-inclusions","com.fulcrologic.rad.report/query-inclusions",-832784206)));
var query_inclusion_props = cljs.core.select_keys((com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance)),extra_parent_query);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance));
var sort_params = new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160).cljs$core$IFn$_invoke$arity$1(props));
var sortable_QMARK_ = (((!(cljs.core.boolean$(compare_rows))))?cljs.core.constantly(false):(function (){var temp__5802__auto__ = (function (){var G__93140 = sort_params;
var G__93140__$1 = (((G__93140 == null))?null:new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414).cljs$core$IFn$_invoke$arity$1(G__93140));
if((G__93140__$1 == null)){
return null;
} else {
return cljs.core.set(G__93140__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var sortable_columns = temp__5802__auto__;
return (function (p__93141){
var map__93142 = p__93141;
var map__93142__$1 = cljs.core.__destructure_map(map__93142);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93142__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return cljs.core.contains_QMARK_(sortable_columns,qualified_key);
});
} else {
return cljs.core.constantly(true);
}
})());
var ascending_QMARK_ = (function (){var and__5043__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(sort_params);
} else {
return and__5043__auto__;
}
})();
var sorting_by = (function (){var and__5043__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(sort_params);
} else {
return and__5043__auto__;
}
})();
var has_row_actions_QMARK_ = cljs.core.seq(row_actions);
var sui_header_class = com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_table_header_class], 0));
var sui_table_class = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_table_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = sui_table_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui selectable table";
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_class], null)], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__93143){
var map__93144 = p__93143;
var map__93144__$1 = cljs.core.__destructure_map(map__93144);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93144__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var help = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93144__$1,new cljs.core.Keyword(null,"help","help",-439233446));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93144__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var alignment_class = com.fulcrologic.rad.rendering.semantic_ui.report.column_alignment_class(report_instance,column);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alignment_class,com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_header_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,idx], 0))], null)], null),(cljs.core.truth_(sortable_QMARK_(column))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,column);
})], null),label,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sorting_by,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(column)))?(cljs.core.truth_(ascending_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "angle down icon"})]):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "angle up icon"})])):null)], null),null):label),(cljs.core.truth_(help)?com.fulcrologic.semantic_ui.modules.popup.ui_popup.ui_popup(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",103466139),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "ui circle info icon"})])], null),com.fulcrologic.semantic_ui.modules.popup.ui_popup_content.ui_popup_content(cljs.core.PersistentArrayMap.EMPTY,help)):null)], null),null);
}),column_headings),((has_row_actions_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_header_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,cljs.core.count(column_headings)], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "collapsing";
}
})()], null)], null),""], null),null):null)], null),null)], null),null),((cljs.core.seq(rows))?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
var highlighted_row_idx = com.fulcrologic.rad.report.currently_selected_row.cljs$core$IFn$_invoke$arity$1(report_instance);
var G__93145 = row;
var G__93146 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_inclusion_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),report_instance,new cljs.core.Keyword(null,"row-class","row-class",-1782148593),BodyItem,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,highlighted_row_idx),new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954),idx], null)], 0));
return (render_report_body_item.cljs$core$IFn$_invoke$arity$2 ? render_report_body_item.cljs$core$IFn$_invoke$arity$2(G__93145,G__93146) : render_report_body_item.call(null,G__93145,G__93146));
}),rows)], null),null):null)], null),null);
});
com.fulcrologic.rad.rendering.semantic_ui.report.render_rotated_table = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_rotated_table(_,p__93147){
var map__93148 = p__93147;
var map__93148__$1 = cljs.core.__destructure_map(map__93148);
var env = map__93148__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93148__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var map__93149 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__93149__$1 = cljs.core.__destructure_map(map__93149);
var report_column_headings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93149__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-headings","com.fulcrologic.rad.report/column-headings",1666271609));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93149__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","columns","com.fulcrologic.rad.report/columns",593158549));
var row_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93149__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","row-actions","com.fulcrologic.rad.report/row-actions",-2054400371));
var compare_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93149__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","compare-rows","com.fulcrologic.rad.report/compare-rows",1711502509));
var table_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93149__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","table-class","com.fulcrologic.rad.report/table-class",-801171370));
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance));
var sort_params = new cljs.core.Keyword("com.fulcrologic.rad.report","sort","com.fulcrologic.rad.report/sort",-1915101647).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("ui","parameters","ui/parameters",-1229923160).cljs$core$IFn$_invoke$arity$1(props));
var sortable_QMARK_ = (((!(cljs.core.boolean$(compare_rows))))?cljs.core.constantly(false):(function (){var temp__5802__auto__ = (function (){var G__93150 = sort_params;
var G__93150__$1 = (((G__93150 == null))?null:new cljs.core.Keyword(null,"sortable-columns","sortable-columns",-2096932414).cljs$core$IFn$_invoke$arity$1(G__93150));
if((G__93150__$1 == null)){
return null;
} else {
return cljs.core.set(G__93150__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var sortable_columns = temp__5802__auto__;
return (function (p__93151){
var map__93152 = p__93151;
var map__93152__$1 = cljs.core.__destructure_map(map__93152);
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93152__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
return cljs.core.contains_QMARK_(sortable_columns,qualified_key);
});
} else {
return cljs.core.constantly(true);
}
})());
var ascending_QMARK_ = (function (){var and__5043__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(sort_params);
} else {
return and__5043__auto__;
}
})();
var sorting_by = (function (){var and__5043__auto__ = sortable_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"sort-by","sort-by",-322599303).cljs$core$IFn$_invoke$arity$1(sort_params);
} else {
return and__5043__auto__;
}
})();
var row_headings = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__93153){
var map__93154 = p__93153;
var map__93154__$1 = cljs.core.__destructure_map(map__93154);
var attr = map__93154__$1;
var column_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93154__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","column-heading","com.fulcrologic.rad.report/column-heading",-1327880348));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93154__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var label = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(report_column_headings,qualified_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(column_heading,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var G__93155 = qualified_key;
var G__93155__$1 = (((G__93155 == null))?null:cljs.core.name(G__93155));
if((G__93155__$1 == null)){
return null;
} else {
return clojure.string.capitalize(G__93155__$1);
}
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return "";
}
}
}
})();
if(cljs.core.truth_(sortable_QMARK_(attr))){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (evt){
com.fulcrologic.fulcro.dom.events.stop_propagation_BANG_(evt);

return com.fulcrologic.rad.report.sort_rows_BANG_.cljs$core$IFn$_invoke$arity$2(report_instance,attr);
})], null),label,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sorting_by,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949).cljs$core$IFn$_invoke$arity$1(attr)))?(cljs.core.truth_(ascending_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "angle down icon"})]):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"className": "angle up icon"})])):null)], null),null);
} else {
return label;
}
}),columns);
var rows = com.fulcrologic.rad.report.current_rows(report_instance);
var has_row_actions_QMARK_ = cljs.core.seq(row_actions);
var sui_table_class = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_rotated_table_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
var sui_cell_class = com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.report_table_cell_class], 0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = sui_table_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui compact collapsing definition selectable table";
}
})(),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [table_class], null)], null),((cljs.core.seq(rows))?com.fulcrologic.fulcro.components.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var col = cljs.core.first(columns);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["tr",({"key": "hrow"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_headings,(0))], null),null)),com.fulcrologic.fulcro.components.force_children(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,row){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),com.fulcrologic.rad.report.formatted_column_value(report_instance,row,col)], null),null);
}),rows)),com.fulcrologic.fulcro.components.force_children(((has_row_actions_QMARK_)?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["td",({"key": "actions"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons(report_instance,col))]):null))]);
})()], null),null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,col){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(row_headings,(idx + (1)))], null),null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx__$1,row){
var user_defined_cell_class = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(sui_cell_class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance,idx__$1], 0));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),idx__$1,new cljs.core.Keyword(null,"className","className",-1983287057),(function (){var or__5045__auto__ = user_defined_cell_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "right aligned";
}
})()], null),com.fulcrologic.rad.report.formatted_column_value(report_instance,row,col)], null),null);
}),rows),((has_row_actions_QMARK_)?(function (){var user_defined_cell_class = (cljs.core.truth_(sui_cell_class)?(function (){var G__93156 = report_instance;
var G__93157 = cljs.core.count(rows);
return (sui_cell_class.cljs$core$IFn$_invoke$arity$2 ? sui_cell_class.cljs$core$IFn$_invoke$arity$2(G__93156,G__93157) : sui_cell_class.call(null,G__93156,G__93157));
})():null);
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"actions",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [user_defined_cell_class], null)], null),com.fulcrologic.rad.rendering.semantic_ui.report.row_action_buttons(report_instance,col)], null),null);
})():null)], null),null);
}),cljs.core.rest(columns))], null),null)], 0)):null)], null),null);
});

var options__50845__auto___93173 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-factory","row-factory",751079809),cljs.core.memoize((function (cls){
return com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$2(cls,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (props){
var G__93158 = props;
if((G__93158 == null)){
return null;
} else {
return (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$2(G__93158,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)) : com.fulcrologic.fulcro.components.get_computed.call(null,G__93158,new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)));
}
})], null));
}))], null);
}),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return true;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$rendering$semantic_ui$report$render_TableReportLayout(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__93159 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__93159__$1 = cljs.core.__destructure_map(map__93159);
var env = map__93159__$1;
var report_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93159__$1,new cljs.core.Keyword(null,"report-instance","report-instance",1193962736));
var map__93160 = (com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.component_options.call(null,report_instance));
var map__93160__$1 = cljs.core.__destructure_map(map__93160);
var rotate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93160__$1,new cljs.core.Keyword("com.fulcrologic.rad.report","rotate?","com.fulcrologic.rad.report/rotate?",1830627427));
var rotate_QMARK___$1 = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(rotate_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
var render_controls = com.fulcrologic.rad.report.control_renderer(report_instance);
var loading_QMARK_ = com.fulcrologic.rad.report.loading_QMARK_(report_instance);
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(report_instance) : com.fulcrologic.fulcro.components.props.call(null,report_instance));
var busy_QMARK_ = new cljs.core.Keyword("ui","busy?","ui/busy?",1047515304).cljs$core$IFn$_invoke$arity$1(props);
var layout_class = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.layout_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
var body_class = (function (){var or__5045__auto__ = com.fulcrologic.rad.options_util._QMARK__BANG_.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.rad.semantic_ui_options.get_rendering_options.cljs$core$IFn$_invoke$arity$variadic(report_instance,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.rad.semantic_ui_options.body_class], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([report_instance], 0));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "ui attached segment";
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),layout_class], null),(cljs.core.truth_(render_controls)?(render_controls.cljs$core$IFn$_invoke$arity$1 ? render_controls.cljs$core$IFn$_invoke$arity$1(report_instance) : render_controls.call(null,report_instance)):null),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),body_class], null),(cljs.core.truth_((function (){var or__5045__auto__ = busy_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return loading_QMARK_;
}
})())?com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui active loader"})]):null),(cljs.core.truth_(rotate_QMARK___$1)?com.fulcrologic.rad.rendering.semantic_ui.report.render_rotated_table(this$,env):com.fulcrologic.rad.rendering.semantic_ui.report.render_standard_table(this$,env))], null),null)], null),null);
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.rendering !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report !== 'undefined') && (typeof com.fulcrologic.rad.rendering.semantic_ui.report.TableReportLayout !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.rendering.semantic_ui.report.TableReportLayout = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___93173,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.rendering.semantic_ui.report.TableReportLayout,new cljs.core.Keyword("com.fulcrologic.rad.rendering.semantic-ui.report","TableReportLayout","com.fulcrologic.rad.rendering.semantic-ui.report/TableReportLayout",-379447076),options__50845__auto___93173);
var ui_table_report_layout_93174 = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.rendering.semantic_ui.report.TableReportLayout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.rad.report","idx","com.fulcrologic.rad.report/idx",-224303954)], null));
com.fulcrologic.rad.rendering.semantic_ui.report.render_table_report_layout = (function com$fulcrologic$rad$rendering$semantic_ui$report$render_table_report_layout(this$){
var G__93161 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"report-instance","report-instance",1193962736),this$], null);
return (ui_table_report_layout_93174.cljs$core$IFn$_invoke$arity$1 ? ui_table_report_layout_93174.cljs$core$IFn$_invoke$arity$1(G__93161) : ui_table_report_layout_93174.call(null,G__93161));
});

//# sourceMappingURL=com.fulcrologic.rad.rendering.semantic_ui.report.js.map
