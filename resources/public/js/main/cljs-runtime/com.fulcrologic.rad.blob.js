goog.provide('com.fulcrologic.rad.blob');
com.fulcrologic.rad.blob.url_key = (function com$fulcrologic$rad$blob$url_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"url");
});
com.fulcrologic.rad.blob.progress_key = (function com$fulcrologic$rad$blob$progress_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"progress");
});
com.fulcrologic.rad.blob.status_key = (function com$fulcrologic$rad$blob$status_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"status");
});
com.fulcrologic.rad.blob.filename_key = (function com$fulcrologic$rad$blob$filename_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"filename");
});
com.fulcrologic.rad.blob.size_key = (function com$fulcrologic$rad$blob$size_key(k){
return com.fulcrologic.rad.options_util.narrow_keyword(k,"size");
});
/**
 * Finds the SHA256 from the given Blob/File
 * 
 *   Returns an async channel that will eventually contain the hash or nil (if the input type was not understood).
 */
com.fulcrologic.rad.blob.file_sha256 = (function com$fulcrologic$rad$blob$file_sha256(blob){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var digest = (function (hasher,bytes){
hasher.update(bytes);

return hasher.digest();
});
var handler = (function (evt){
var buffer = evt.target.result;
var hash = goog.crypt.byteArrayToHex(digest((new goog.crypt.Sha256()),(new Uint8Array(buffer))));
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_91209){
var state_val_91210 = (state_91209[(1)]);
if((state_val_91210 === (1))){
var state_91209__$1 = state_91209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_91209__$1,(2),c,hash);
} else {
if((state_val_91210 === (2))){
var inst_91207 = (state_91209[(2)]);
var state_91209__$1 = state_91209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91209__$1,inst_91207);
} else {
return null;
}
}
});
return (function() {
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__ = null;
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____0 = (function (){
var statearr_91211 = [null,null,null,null,null,null,null];
(statearr_91211[(0)] = com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__);

(statearr_91211[(1)] = (1));

return statearr_91211;
});
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____1 = (function (state_91209){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_91209);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e91212){var ex__42124__auto__ = e91212;
var statearr_91213_91291 = state_91209;
(statearr_91213_91291[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_91209[(4)]))){
var statearr_91214_91292 = state_91209;
(statearr_91214_91292[(1)] = cljs.core.first((state_91209[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91293 = state_91209;
state_91209 = G__91293;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__ = function(state_91209){
switch(arguments.length){
case 0:
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____0.call(this);
case 1:
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____1.call(this,state_91209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____0;
com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____1;
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_91215 = f__42153__auto__();
(statearr_91215[(6)] = c__42152__auto__);

return statearr_91215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
if((blob instanceof Blob)){
var reader_91294 = (new FileReader());
(reader_91294.onloadend = handler);

reader_91294.readAsArrayBuffer(blob);
} else {
}

var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_91219){
var state_val_91220 = (state_91219[(1)]);
if((state_val_91220 === (1))){
var state_91219__$1 = state_91219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91219__$1,(2),c);
} else {
if((state_val_91220 === (2))){
var inst_91217 = (state_91219[(2)]);
var state_91219__$1 = state_91219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91219__$1,inst_91217);
} else {
return null;
}
}
});
return (function() {
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__ = null;
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____0 = (function (){
var statearr_91221 = [null,null,null,null,null,null,null];
(statearr_91221[(0)] = com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__);

(statearr_91221[(1)] = (1));

return statearr_91221;
});
var com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____1 = (function (state_91219){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_91219);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e91222){var ex__42124__auto__ = e91222;
var statearr_91223_91295 = state_91219;
(statearr_91223_91295[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_91219[(4)]))){
var statearr_91224_91296 = state_91219;
(statearr_91224_91296[(1)] = cljs.core.first((state_91219[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91297 = state_91219;
state_91219 = G__91297;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__ = function(state_91219){
switch(arguments.length){
case 0:
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____0.call(this);
case 1:
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____1.call(this,state_91219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____0;
com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto____1;
return com$fulcrologic$rad$blob$file_sha256_$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_91225 = f__42153__auto__();
(statearr_91225[(6)] = c__42152__auto__);

return statearr_91225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
/**
 * Finds the SHA256 of the given string-or-bytes.
 * 
 *   On the JVM the argument can be a string or a byte array.
 *   In CLJS the argument can be a low-level string, Uint8Array, ArrayBuffer.
 * 
 *   Returns the hash or nil (if the input type was not understood).
 */
com.fulcrologic.rad.blob.sha256 = (function com$fulcrologic$rad$blob$sha256(string_or_bytes){
var digest = (function com$fulcrologic$rad$blob$sha256_$_digest(hasher,bytes){
hasher.update(bytes);

return hasher.digest();
});
if(typeof string_or_bytes === 'string'){
return goog.crypt.byteArrayToHex(digest((new goog.crypt.Sha256()),goog.crypt.stringToByteArray(string_or_bytes)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Uint8Array,cljs.core.type(string_or_bytes))){
return goog.crypt.byteArrayToHex(digest((new goog.crypt.Sha256()),string_or_bytes));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ArrayBuffer,cljs.core.type(string_or_bytes))){
return goog.crypt.byteArrayToHex(digest((new goog.crypt.Sha256()),(new Uint8Array(string_or_bytes))));
} else {
return null;
}
}
}
});

var options__50845__auto___91298 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),(function com$fulcrologic$rad$blob$query_STAR_(_){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","uploading?","ui/uploading?",316177944),new cljs.core.Keyword("ui","percent-complete","ui/percent-complete",-1380623404),new cljs.core.Keyword("com.fulcrologic.rad.blob","id","com.fulcrologic.rad.blob/id",-668398722),new cljs.core.Keyword("com.fulcrologic.rad.blob","local-filename","com.fulcrologic.rad.blob/local-filename",-1916328935),new cljs.core.Keyword("com.fulcrologic.rad.blob","file-sha","com.fulcrologic.rad.blob/file-sha",1379052570),com.fulcrologic.fulcro.algorithms.form_state.form_config_join], null);
}),new cljs.core.Keyword(null,"form-fields","form-fields",35924568),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.rad.blob","local-filename","com.fulcrologic.rad.blob/local-filename",-1916328935),null,new cljs.core.Keyword("com.fulcrologic.rad.blob","file-sha","com.fulcrologic.rad.blob/file-sha",1379052570),null], null), null),new cljs.core.Keyword(null,"ident","ident",-742346),(function com$fulcrologic$rad$blob$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.rad.blob","id","com.fulcrologic.rad.blob/id",-668398722),new cljs.core.Keyword("com.fulcrologic.rad.blob","id","com.fulcrologic.rad.blob/id",-668398722).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"pre-merge","pre-merge",-567117148),(function (p__91226){
var map__91227 = p__91226;
var map__91227__$1 = cljs.core.__destructure_map(map__91227);
var data_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91227__$1,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ui","uploading?","ui/uploading?",316177944),false,new cljs.core.Keyword("ui","percent-complete","ui/percent-complete",-1380623404),(0),new cljs.core.Keyword("com.fulcrologic.rad.blob","local-filename","com.fulcrologic.rad.blob/local-filename",-1916328935),"file"], null),data_tree], 0));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$rad$blob$render_Blob(_){
return com.fulcrologic.fulcro.components.wrapped_render(_,(function (){
var ___$1 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(_) : com.fulcrologic.fulcro.components.props.call(null,_));
return null;
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.rad !== 'undefined') && (typeof com.fulcrologic.rad.blob !== 'undefined') && (typeof com.fulcrologic.rad.blob.Blob !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.rad.blob.Blob = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__50845__auto___91298,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.rad.blob.Blob,new cljs.core.Keyword("com.fulcrologic.rad.blob","Blob","com.fulcrologic.rad.blob/Blob",-1396720242),options__50845__auto___91298);
com.fulcrologic.rad.blob.ui_blob = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.rad.blob.Blob,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("com.fulcrologic.rad.blob","id","com.fulcrologic.rad.blob/id",-668398722)], null));
com.fulcrologic.rad.blob.upload_file = com.fulcrologic.fulcro.mutations.__GT_Mutation(cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("com.fulcrologic.rad.blob","upload-file","com.fulcrologic.rad.blob/upload-file",-1517758941,null)));
com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.fulcrologic.rad.blob","upload-file","com.fulcrologic.rad.blob/upload-file",-1517758941,null),(function (p__91228){
var map__91229 = p__91228;
var map__91229__$1 = cljs.core.__destructure_map(map__91229);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91229__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__91230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235));
var map__91230__$1 = cljs.core.__destructure_map(map__91230);
var file_sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91230__$1,new cljs.core.Keyword("com.fulcrologic.rad.blob","file-sha","com.fulcrologic.rad.blob/file-sha",1379052570));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91230__$1,new cljs.core.Keyword("com.fulcrologic.rad.blob","filename","com.fulcrologic.rad.blob/filename",-1656275233));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91230__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91230__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var file_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91230__$1,new cljs.core.Keyword(null,"file-ident","file-ident",1455261634));
var remote_key = (function (){var or__5045__auto__ = remote;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})();
var name_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(file_ident,com.fulcrologic.rad.blob.filename_key(qualified_key));
var status_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(file_ident,com.fulcrologic.rad.blob.status_key(qualified_key));
var progress_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(file_ident,com.fulcrologic.rad.blob.progress_key(qualified_key));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"action","action",-811238024),(function com$fulcrologic$rad$blob$progress_action(p__91231){
var map__91232 = p__91231;
var map__91232__$1 = cljs.core.__destructure_map(map__91232);
var env = map__91232__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91232__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__78955__auto__){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(s__78955__auto__,name_path,filename),progress_path,(0)),status_path,new cljs.core.Keyword(null,"uploading","uploading",1069939393));
}));
}),new cljs.core.Keyword(null,"progress-action","progress-action",1342780181),(function com$fulcrologic$rad$blob$progress_action(p__91233){
var map__91234 = p__91233;
var map__91234__$1 = cljs.core.__destructure_map(map__91234);
var env = map__91234__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91234__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var pct = com.fulcrologic.fulcro.networking.http_remote.overall_progress(env);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.blob",null,133,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Progress update",pct], null);
}),null)),null,1178978654,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,progress_path,pct);
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function com$fulcrologic$rad$blob$result_action(p__91235){
var map__91236 = p__91235;
var map__91236__$1 = cljs.core.__destructure_map(map__91236);
var env = map__91236__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91236__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91236__$1,new cljs.core.Keyword(null,"result","result",1415092211));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.rad.blob",null,137,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload complete",result], null);
}),null)),null,-498454754,null);

var ok_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),new cljs.core.Keyword(null,"status-code","status-code",-1060410130).cljs$core$IFn$_invoke$arity$1(result));
com.fulcrologic.fulcro.mutations.default_result_action_BANG_(env);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s__78955__auto__){
return cljs.core.assoc_in(cljs.core.assoc_in(s__78955__auto__,status_path,((ok_QMARK_)?new cljs.core.Keyword(null,"available","available",-1470697127):new cljs.core.Keyword(null,"failed","failed",-1397425762))),progress_path,((ok_QMARK_)?(100):(0)));
}));
}),remote_key,(function com$fulcrologic$rad$blob$remote(env){
if(edn_query_language.core.ident_QMARK_(file_ident)){
return com.fulcrologic.fulcro.mutations.returning.cljs$core$IFn$_invoke$arity$2(env,com.fulcrologic.fulcro.raw.components.nc.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(file_ident),qualified_key,com.fulcrologic.rad.blob.status_key(qualified_key),com.fulcrologic.rad.blob.filename_key(qualified_key),com.fulcrologic.rad.blob.url_key(qualified_key)], null)));
} else {
return true;
}
})]);
}));
/**
 * This computes a SHA for the js-file, starts the upload (with progress tracking), and
 *   sets the form attribute to the SHA. The narrowed attributes (e.g. :file.sha/progress) will be updated as the file
 *   upload progresses. The rendering layer will auto-detect when a file upload attribute is a SHA
 *   and can render the progress of the upload (possibly with a preview, etc.).
 * 
 *   The upload can be aborted using the SHA.
 */
com.fulcrologic.rad.blob.upload_file_BANG_ = (function com$fulcrologic$rad$blob$upload_file_BANG_(form_instance,p__91237,js_file,p__91238){
var map__91239 = p__91237;
var map__91239__$1 = cljs.core.__destructure_map(map__91239);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91239__$1,new cljs.core.Keyword("com.fulcrologic.rad.blob","remote","com.fulcrologic.rad.blob/remote",-1282256314));
var qualified_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91239__$1,new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949));
var map__91240 = p__91238;
var map__91240__$1 = cljs.core.__destructure_map(map__91240);
var file_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91240__$1,new cljs.core.Keyword(null,"file-ident","file-ident",1455261634));
var c__42152__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42153__auto__ = (function (){var switch__42120__auto__ = (function (state_91271){
var state_val_91272 = (state_91271[(1)]);
if((state_val_91272 === (1))){
var inst_91241 = com.fulcrologic.rad.blob.file_sha256(js_file);
var state_91271__$1 = state_91271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91271__$1,(2),inst_91241);
} else {
if((state_val_91272 === (2))){
var inst_91244 = (state_91271[(7)]);
var inst_91243 = (state_91271[(2)]);
var inst_91244__$1 = js_file.name;
var state_91271__$1 = (function (){var statearr_91273 = state_91271;
(statearr_91273[(8)] = inst_91243);

(statearr_91273[(7)] = inst_91244__$1);

return statearr_91273;
})();
if(cljs.core.truth_(inst_91244__$1)){
var statearr_91274_91299 = state_91271__$1;
(statearr_91274_91299[(1)] = (3));

} else {
var statearr_91275_91300 = state_91271__$1;
(statearr_91275_91300[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91272 === (3))){
var inst_91244 = (state_91271[(7)]);
var state_91271__$1 = state_91271;
var statearr_91276_91301 = state_91271__$1;
(statearr_91276_91301[(2)] = inst_91244);

(statearr_91276_91301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91272 === (4))){
var state_91271__$1 = state_91271;
var statearr_91277_91302 = state_91271__$1;
(statearr_91277_91302[(2)] = "file");

(statearr_91277_91302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91272 === (5))){
var inst_91248 = (state_91271[(9)]);
var inst_91255 = (state_91271[(10)]);
var inst_91248__$1 = (state_91271[(2)]);
var inst_91249 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91250 = com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$2(inst_91248__$1,js_file);
var inst_91251 = [inst_91250];
var inst_91252 = (new cljs.core.PersistentVector(null,1,(5),inst_91249,inst_91251,null));
var inst_91253 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91254 = [new cljs.core.Keyword(null,"file-ident","file-ident",1455261634),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword("com.fulcrologic.rad.attributes","qualified-key","com.fulcrologic.rad.attributes/qualified-key",-649597949),new cljs.core.Keyword("com.fulcrologic.rad.blob","filename","com.fulcrologic.rad.blob/filename",-1656275233),new cljs.core.Keyword("com.fulcrologic.rad.blob","file-sha","com.fulcrologic.rad.blob/file-sha",1379052570)];
var inst_91255__$1 = remote;
var state_91271__$1 = (function (){var statearr_91278 = state_91271;
(statearr_91278[(9)] = inst_91248__$1);

(statearr_91278[(11)] = inst_91252);

(statearr_91278[(12)] = inst_91253);

(statearr_91278[(13)] = inst_91254);

(statearr_91278[(10)] = inst_91255__$1);

return statearr_91278;
})();
if(cljs.core.truth_(inst_91255__$1)){
var statearr_91279_91303 = state_91271__$1;
(statearr_91279_91303[(1)] = (6));

} else {
var statearr_91280_91304 = state_91271__$1;
(statearr_91280_91304[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91272 === (6))){
var inst_91255 = (state_91271[(10)]);
var state_91271__$1 = state_91271;
var statearr_91281_91305 = state_91271__$1;
(statearr_91281_91305[(2)] = inst_91255);

(statearr_91281_91305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91272 === (7))){
var state_91271__$1 = state_91271;
var statearr_91282_91306 = state_91271__$1;
(statearr_91282_91306[(2)] = new cljs.core.Keyword(null,"remote","remote",-1593576576));

(statearr_91282_91306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91272 === (8))){
var inst_91248 = (state_91271[(9)]);
var inst_91243 = (state_91271[(8)]);
var inst_91254 = (state_91271[(13)]);
var inst_91252 = (state_91271[(11)]);
var inst_91253 = (state_91271[(12)]);
var inst_91259 = (state_91271[(2)]);
var inst_91260 = [file_ident,inst_91259,qualified_key,inst_91248,inst_91243];
var inst_91261 = cljs.core.PersistentHashMap.fromArrays(inst_91254,inst_91260);
var inst_91262 = com.fulcrologic.fulcro.networking.file_upload.attach_uploads(inst_91261,inst_91252);
var inst_91263 = (com.fulcrologic.rad.blob.upload_file.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.rad.blob.upload_file.cljs$core$IFn$_invoke$arity$1(inst_91262) : com.fulcrologic.rad.blob.upload_file.call(null,inst_91262));
var inst_91264 = [inst_91263];
var inst_91265 = (new cljs.core.PersistentVector(null,1,(5),inst_91253,inst_91264,null));
var inst_91266 = [new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)];
var inst_91267 = [inst_91243];
var inst_91268 = cljs.core.PersistentHashMap.fromArrays(inst_91266,inst_91267);
var inst_91269 = com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(form_instance,inst_91265,inst_91268);
var state_91271__$1 = state_91271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91271__$1,inst_91269);
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
});
return (function() {
var com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto__ = null;
var com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto____0 = (function (){
var statearr_91283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91283[(0)] = com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto__);

(statearr_91283[(1)] = (1));

return statearr_91283;
});
var com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto____1 = (function (state_91271){
while(true){
var ret_value__42122__auto__ = (function (){try{while(true){
var result__42123__auto__ = switch__42120__auto__(state_91271);
if(cljs.core.keyword_identical_QMARK_(result__42123__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42123__auto__;
}
break;
}
}catch (e91284){var ex__42124__auto__ = e91284;
var statearr_91285_91307 = state_91271;
(statearr_91285_91307[(2)] = ex__42124__auto__);


if(cljs.core.seq((state_91271[(4)]))){
var statearr_91286_91308 = state_91271;
(statearr_91286_91308[(1)] = cljs.core.first((state_91271[(4)])));

} else {
throw ex__42124__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42122__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91309 = state_91271;
state_91271 = G__91309;
continue;
} else {
return ret_value__42122__auto__;
}
break;
}
});
com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto__ = function(state_91271){
switch(arguments.length){
case 0:
return com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto____0.call(this);
case 1:
return com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto____1.call(this,state_91271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto____0;
com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto____1;
return com$fulcrologic$rad$blob$upload_file_BANG__$_state_machine__42121__auto__;
})()
})();
var state__42154__auto__ = (function (){var statearr_91287 = f__42153__auto__();
(statearr_91287[(6)] = c__42152__auto__);

return statearr_91287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42154__auto__);
}));

return c__42152__auto__;
});
/**
 * Build a (fn [env] env') that adds RAD BLOB info to an env. If `base-wrapper` is supplied, then it will be called
 * as part of the evaluation, allowing you to build up a chain of environment middleware.
 * 
 * ```
 * (def build-env
 *   (-> (wrap-env temp-store perm-store)
 *      ...))
 * 
 * ;; Pathom 2
 * (def env-plugin (p/env-wrap-plugin build-env))
 * 
 * ;; Pathom 3
 * (let [base-env (pci/register [...])
 *       env (build-env base-env)]
 *    (process env eql))
 * ```
 * 
 * similar to Ring middleware.
 * 
 */
com.fulcrologic.rad.blob.wrap_env = (function com$fulcrologic$rad$blob$wrap_env(var_args){
var G__91289 = arguments.length;
switch (G__91289) {
case 2:
return com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$2 = (function (temporary_store,permanent_stores){
return com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$3(null,temporary_store,permanent_stores);
}));

(com.fulcrologic.rad.blob.wrap_env.cljs$core$IFn$_invoke$arity$3 = (function (base_wrapper,temporary_store,permanent_stores){
return (function (env){
var G__91290 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.fulcrologic.rad.blob","temporary-store","com.fulcrologic.rad.blob/temporary-store",1284677161),temporary_store,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.fulcrologic.rad.blob","permanent-stores","com.fulcrologic.rad.blob/permanent-stores",-1456142397),permanent_stores], 0));
if(cljs.core.truth_(base_wrapper)){
return (base_wrapper.cljs$core$IFn$_invoke$arity$1 ? base_wrapper.cljs$core$IFn$_invoke$arity$1(G__91290) : base_wrapper.call(null,G__91290));
} else {
return G__91290;
}
});
}));

(com.fulcrologic.rad.blob.wrap_env.cljs$lang$maxFixedArity = 3);

/**
 * Convert a file input change event into a sequence of the js File objects.
 */
com.fulcrologic.rad.blob.evt__GT_js_files = (function com$fulcrologic$rad$blob$evt__GT_js_files(evt){
var js_file_list = evt.target.files;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file_idx){
var js_file = js_file_list.item(file_idx);
var name = js_file.name;
return js_file;
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(js_file_list.length));
});
/**
 * Returns true if the blob tracked by `sha-key` in the given `form-props` is in a state that would allow for a download.
 */
com.fulcrologic.rad.blob.blob_downloadable_QMARK_ = (function com$fulcrologic$rad$blob$blob_downloadable_QMARK_(form_props,sha_key){
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,com.fulcrologic.rad.blob.status_key(sha_key));
var sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,sha_key);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,com.fulcrologic.rad.blob.url_key(sha_key));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"available","available",-1470697127),status)) && (((cljs.core.seq(sha)) && (cljs.core.seq(url)))));
});
/**
 * Returns true of the blob tracked by sha-key is actively being uploaded.
 */
com.fulcrologic.rad.blob.uploading_QMARK_ = (function com$fulcrologic$rad$blob$uploading_QMARK_(form_props,sha_key){
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,com.fulcrologic.rad.blob.status_key(sha_key));
var sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,sha_key);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uploading","uploading",1069939393),status)) && (cljs.core.seq(sha)));
});
/**
 * Returns true of the blob tracked by sha-key failed to upload.
 */
com.fulcrologic.rad.blob.failed_upload_QMARK_ = (function com$fulcrologic$rad$blob$failed_upload_QMARK_(form_props,sha_key){
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form_props,com.fulcrologic.rad.blob.status_key(sha_key));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"failed","failed",-1397425762),status);
});
/**
 * Returns a string of the form "n%" which represents what percentage of the given blob identified by
 *   sha-key has made it to the server.
 */
com.fulcrologic.rad.blob.upload_percentage = (function com$fulcrologic$rad$blob$upload_percentage(props,sha_key){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,com.fulcrologic.rad.blob.progress_key(sha_key),(0))),"%"].join('');
});

//# sourceMappingURL=com.fulcrologic.rad.blob.js.map
