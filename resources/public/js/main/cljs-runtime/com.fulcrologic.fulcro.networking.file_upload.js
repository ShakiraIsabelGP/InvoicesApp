goog.provide('com.fulcrologic.fulcro.networking.file_upload');
/**
 * Create a new upload object from a string name and a js object (Blob, ArrayBuffer, or File). The resulting map is
 *   safe to store in app state. If `content-type` is supplied then the file upload support will attempt to force the
 *   content type to the one provided. Normally js File objects will auto-set their MIME type, but this can sometimes be
 *   mis-interpreted by server MIME configurations.
 * 
 *   See `attach-uploads`.
 */
com.fulcrologic.fulcro.networking.file_upload.new_upload = (function com$fulcrologic$fulcro$networking$file_upload$new_upload(var_args){
var G__86406 = arguments.length;
switch (G__86406) {
case 2:
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$2 = (function (name,content){
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3(name,content,null);
}));

(com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3 = (function (name,content,content_type){
var G__86407 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","name","file/name",1848919477),name,new cljs.core.Keyword("file","content","file/content",12680964),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-value","js-value",-758336661),content], null))], null);
if(cljs.core.truth_(content_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86407,new cljs.core.Keyword("file","content-type","file/content-type",-513460014),content_type);
} else {
return G__86407;
}
}));

(com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$lang$maxFixedArity = 3);

/**
 * Converts a file input onChange event into a sequence upload objects that are compatible with `attach-uploads`.
 * 
 * If you want to manually set the content type of any item, then add a `:file/content-type` key/value pair to the
 * returned uploads (which are just clojure maps), or pass a content-type argument to have that content type applied
 * to ALL of the uploads.  NOTE: some server middleware can mis-interpret certain MIME types and open Readers on them
 * instead of byte streams, leading to file corruption of the uploaded file.  You can try forcing the MIME type to
 * `application/octet-stream` to overcome this.
 */
com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads = (function com$fulcrologic$fulcro$networking$file_upload$evt__GT_uploads(var_args){
var G__86409 = arguments.length;
switch (G__86409) {
case 2:
return com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$2 = (function (file_input_change_event,content_type){
var js_file_list = file_input_change_event.target.files;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (file_idx){
var js_file = js_file_list.item(file_idx);
var name = js_file.name;
return com.fulcrologic.fulcro.networking.file_upload.new_upload.cljs$core$IFn$_invoke$arity$3(name,js_file,content_type);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(js_file_list.length));
}));

(com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$1 = (function (file_input_change_event){
return com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$core$IFn$_invoke$arity$2(file_input_change_event,null);
}));

(com.fulcrologic.fulcro.networking.file_upload.evt__GT_uploads.cljs$lang$maxFixedArity = 2);

/**
 * Attach js Blob or ArrayBuffer objects to the `params`. This requires that you use `http-remote` and that you
 * also install `wrap-file-upload` middleware. If you use js/File objects then the filenames of those objects
 * will be available to the mutations on the server.
 * 
 * Example usage:
 * 
 * ```
 * (let [uploads [(file-upload/new-upload "test" some-js-file)
 *                (file-upload/new-upload "other" other-js-file)]]
 *   (comp/transact! this [(some-mutation (attach-uploads {} uploads))]))
 * ```
 * 
 * If you are using a browser file input, you can use `evt->uploads`:
 * 
 * ```
 * (dom/input {:type "file"
 *             :multiple true
 *             :onChange (fn [evt]
 *                         (let [uploads (file-upload/evt->uploads evt)]
 *                           (comp/transact! this [(some-mutation (file-upload/attach-uploads {} uploads))])))})
 * ```
 * 
 */
com.fulcrologic.fulcro.networking.file_upload.attach_uploads = (function com$fulcrologic$fulcro$networking$file_upload$attach_uploads(params,objects_to_upload){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167),objects_to_upload);
});
com.fulcrologic.fulcro.networking.file_upload.has_uploads_QMARK_ = (function com$fulcrologic$fulcro$networking$file_upload$has_uploads_QMARK_(req){
var mutations = (function (){var G__86410 = req;
var G__86410__$1 = (((G__86410 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__86410));
var G__86410__$2 = (((G__86410__$1 == null))?null:edn_query_language.core.query__GT_ast(G__86410__$1));
if((G__86410__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__86410__$2);
}
})();
var mutation_with_upload = cljs.core.some((function (p__86411){
var map__86412 = p__86411;
var map__86412__$1 = cljs.core.__destructure_map(map__86412);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86412__$1,new cljs.core.Keyword(null,"params","params",710516235));
return cljs.core.contains_QMARK_(params,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167));
}),mutations);
return cljs.core.boolean$(mutation_with_upload);
});
/**
 * Coerce the js object into a blob to ensure it can be uploaded.
 */
com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object = (function com$fulcrologic$fulcro$networking$file_upload$js_value__GT_uploadable_object(v,content_type){
var G__86413 = (((v instanceof Blob))?v:Blob([v]));
if(cljs.core.truth_(content_type)){
return G__86413.slice((0),v.size,content_type);
} else {
return G__86413;
}
});
/**
 * Adds support for attaching uploads to the parameters of any mutation.
 * 
 * `transit-options` - A map of options to be included when converting the mutation and params for transmission. See
 *                     `transit/transit-clj->str`. Use this to extend the transit support. This is necessary because
 *                     the regular request middleware will not be used to send transactions that include file uploads,
 *                     so any extensions to transit must be done in both places.
 * 
 * NOTE: This middleware acts as the end of the chain when it detects the need for a file upload, and rewrites the body,
 * method, and clears any content-type header. As such, it should be used in the middleware so that it will be executed
 * first:
 * 
 * ```
 * (def client-middleware
 *   (->
 *     (net/wrap-fulcro-request)
 *     (file-upload/wrap-file-upload)
 *     ...))
 * ```
 * 
 */
com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload = (function com$fulcrologic$fulcro$networking$file_upload$wrap_file_upload(var_args){
var G__86416 = arguments.length;
switch (G__86416) {
case 1:
return com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$2(handler,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$core$IFn$_invoke$arity$2 = (function (handler,transit_options){
return (function (req){
if(com.fulcrologic.fulcro.networking.file_upload.has_uploads_QMARK_(req)){
try{var vec__86419 = com.fulcrologic.fulcro.networking.http_remote.desired_response_type(req);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86419,(0),null);
var response_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86419,(1),null);
var ast = edn_query_language.core.query__GT_ast(body);
var ast_to_send = cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__86414_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(n,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167));
}),p1__86414_SHARP_);
}));
var txn = edn_query_language.core.ast__GT_query(ast_to_send);
var form = (new FormData());
form.append("upload-transaction",com.fulcrologic.fulcro.algorithms.transit.transit_clj__GT_str.cljs$core$IFn$_invoke$arity$2(txn,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transit_options,new cljs.core.Keyword(null,"metadata?","metadata?",-1465487050),false)));

var seq__86422_86498 = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var chunk__86423_86499 = null;
var count__86424_86500 = (0);
var i__86425_86501 = (0);
while(true){
if((i__86425_86501 < count__86424_86500)){
var map__86455_86502 = chunk__86423_86499.cljs$core$IIndexed$_nth$arity$2(null,i__86425_86501);
var map__86455_86503__$1 = cljs.core.__destructure_map(map__86455_86502);
var dispatch_key_86504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86455_86503__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params_86505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86455_86503__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5804__auto___86506 = new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167).cljs$core$IFn$_invoke$arity$1(params_86505);
if(cljs.core.truth_(temp__5804__auto___86506)){
var uploads_86507 = temp__5804__auto___86506;
var seq__86456_86508 = cljs.core.seq(uploads_86507);
var chunk__86457_86509 = null;
var count__86458_86510 = (0);
var i__86459_86511 = (0);
while(true){
if((i__86459_86511 < count__86458_86510)){
var map__86464_86512 = chunk__86457_86509.cljs$core$IIndexed$_nth$arity$2(null,i__86459_86511);
var map__86464_86513__$1 = cljs.core.__destructure_map(map__86464_86512);
var name_86514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86464_86513__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_86515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86464_86513__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_86516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86464_86513__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_86517 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_86504),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_86514)].join('');
var js_value_86518 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_86515));
var content_86519__$1 = (function (){var G__86465 = js_value_86518;
if((G__86465 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__86465,content_type_86516);
}
})();
form.append("files",content_86519__$1,name_with_mutation_86517);


var G__86520 = seq__86456_86508;
var G__86521 = chunk__86457_86509;
var G__86522 = count__86458_86510;
var G__86523 = (i__86459_86511 + (1));
seq__86456_86508 = G__86520;
chunk__86457_86509 = G__86521;
count__86458_86510 = G__86522;
i__86459_86511 = G__86523;
continue;
} else {
var temp__5804__auto___86524__$1 = cljs.core.seq(seq__86456_86508);
if(temp__5804__auto___86524__$1){
var seq__86456_86525__$1 = temp__5804__auto___86524__$1;
if(cljs.core.chunked_seq_QMARK_(seq__86456_86525__$1)){
var c__5568__auto___86526 = cljs.core.chunk_first(seq__86456_86525__$1);
var G__86527 = cljs.core.chunk_rest(seq__86456_86525__$1);
var G__86528 = c__5568__auto___86526;
var G__86529 = cljs.core.count(c__5568__auto___86526);
var G__86530 = (0);
seq__86456_86508 = G__86527;
chunk__86457_86509 = G__86528;
count__86458_86510 = G__86529;
i__86459_86511 = G__86530;
continue;
} else {
var map__86468_86531 = cljs.core.first(seq__86456_86525__$1);
var map__86468_86532__$1 = cljs.core.__destructure_map(map__86468_86531);
var name_86533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86468_86532__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_86534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86468_86532__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_86535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86468_86532__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_86536 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_86504),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_86533)].join('');
var js_value_86537 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_86534));
var content_86538__$1 = (function (){var G__86469 = js_value_86537;
if((G__86469 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__86469,content_type_86535);
}
})();
form.append("files",content_86538__$1,name_with_mutation_86536);


var G__86539 = cljs.core.next(seq__86456_86525__$1);
var G__86540 = null;
var G__86541 = (0);
var G__86542 = (0);
seq__86456_86508 = G__86539;
chunk__86457_86509 = G__86540;
count__86458_86510 = G__86541;
i__86459_86511 = G__86542;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__86543 = seq__86422_86498;
var G__86544 = chunk__86423_86499;
var G__86545 = count__86424_86500;
var G__86546 = (i__86425_86501 + (1));
seq__86422_86498 = G__86543;
chunk__86423_86499 = G__86544;
count__86424_86500 = G__86545;
i__86425_86501 = G__86546;
continue;
} else {
var temp__5804__auto___86547 = cljs.core.seq(seq__86422_86498);
if(temp__5804__auto___86547){
var seq__86422_86548__$1 = temp__5804__auto___86547;
if(cljs.core.chunked_seq_QMARK_(seq__86422_86548__$1)){
var c__5568__auto___86549 = cljs.core.chunk_first(seq__86422_86548__$1);
var G__86550 = cljs.core.chunk_rest(seq__86422_86548__$1);
var G__86551 = c__5568__auto___86549;
var G__86552 = cljs.core.count(c__5568__auto___86549);
var G__86553 = (0);
seq__86422_86498 = G__86550;
chunk__86423_86499 = G__86551;
count__86424_86500 = G__86552;
i__86425_86501 = G__86553;
continue;
} else {
var map__86470_86554 = cljs.core.first(seq__86422_86548__$1);
var map__86470_86555__$1 = cljs.core.__destructure_map(map__86470_86554);
var dispatch_key_86556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86470_86555__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params_86557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86470_86555__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5804__auto___86558__$1 = new cljs.core.Keyword("com.fulcrologic.fulcro.networking.file-upload","uploads","com.fulcrologic.fulcro.networking.file-upload/uploads",-1519572167).cljs$core$IFn$_invoke$arity$1(params_86557);
if(cljs.core.truth_(temp__5804__auto___86558__$1)){
var uploads_86559 = temp__5804__auto___86558__$1;
var seq__86471_86560 = cljs.core.seq(uploads_86559);
var chunk__86472_86561 = null;
var count__86473_86562 = (0);
var i__86474_86563 = (0);
while(true){
if((i__86474_86563 < count__86473_86562)){
var map__86491_86564 = chunk__86472_86561.cljs$core$IIndexed$_nth$arity$2(null,i__86474_86563);
var map__86491_86565__$1 = cljs.core.__destructure_map(map__86491_86564);
var name_86566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86491_86565__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_86567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86491_86565__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_86568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86491_86565__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_86569 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_86556),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_86566)].join('');
var js_value_86570 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_86567));
var content_86571__$1 = (function (){var G__86492 = js_value_86570;
if((G__86492 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__86492,content_type_86568);
}
})();
form.append("files",content_86571__$1,name_with_mutation_86569);


var G__86572 = seq__86471_86560;
var G__86573 = chunk__86472_86561;
var G__86574 = count__86473_86562;
var G__86575 = (i__86474_86563 + (1));
seq__86471_86560 = G__86572;
chunk__86472_86561 = G__86573;
count__86473_86562 = G__86574;
i__86474_86563 = G__86575;
continue;
} else {
var temp__5804__auto___86576__$2 = cljs.core.seq(seq__86471_86560);
if(temp__5804__auto___86576__$2){
var seq__86471_86577__$1 = temp__5804__auto___86576__$2;
if(cljs.core.chunked_seq_QMARK_(seq__86471_86577__$1)){
var c__5568__auto___86578 = cljs.core.chunk_first(seq__86471_86577__$1);
var G__86579 = cljs.core.chunk_rest(seq__86471_86577__$1);
var G__86580 = c__5568__auto___86578;
var G__86581 = cljs.core.count(c__5568__auto___86578);
var G__86582 = (0);
seq__86471_86560 = G__86579;
chunk__86472_86561 = G__86580;
count__86473_86562 = G__86581;
i__86474_86563 = G__86582;
continue;
} else {
var map__86493_86583 = cljs.core.first(seq__86471_86577__$1);
var map__86493_86584__$1 = cljs.core.__destructure_map(map__86493_86583);
var name_86585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86493_86584__$1,new cljs.core.Keyword("file","name","file/name",1848919477));
var content_86586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86493_86584__$1,new cljs.core.Keyword("file","content","file/content",12680964));
var content_type_86587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86493_86584__$1,new cljs.core.Keyword("file","content-type","file/content-type",-513460014));
var name_with_mutation_86588 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key_86556),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_86585)].join('');
var js_value_86589 = new cljs.core.Keyword(null,"js-value","js-value",-758336661).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(content_86586));
var content_86590__$1 = (function (){var G__86494 = js_value_86589;
if((G__86494 == null)){
return null;
} else {
return com.fulcrologic.fulcro.networking.file_upload.js_value__GT_uploadable_object(G__86494,content_type_86587);
}
})();
form.append("files",content_86590__$1,name_with_mutation_86588);


var G__86591 = cljs.core.next(seq__86471_86577__$1);
var G__86592 = null;
var G__86593 = (0);
var G__86594 = (0);
seq__86471_86560 = G__86591;
chunk__86472_86561 = G__86592;
count__86473_86562 = G__86593;
i__86474_86563 = G__86594;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__86595 = cljs.core.next(seq__86422_86548__$1);
var G__86596 = null;
var G__86597 = (0);
var G__86598 = (0);
seq__86422_86498 = G__86595;
chunk__86423_86499 = G__86596;
count__86424_86500 = G__86597;
i__86425_86501 = G__86598;
continue;
}
} else {
}
}
break;
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(req,new cljs.core.Keyword(null,"body","body",-2049205669),form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),response_type], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.dissoc,"Content-Type");
}catch (e86418){var e = e86418;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.networking.file-upload",null,123,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception while converting mutation with file uploads. See https://book.fulcrologic.com/#err-fu-mut-convert-exc"], null);
}),null)),null,742947456,null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687)], null);
}} else {
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(req) : handler.call(null,req));
}
});
}));

(com.fulcrologic.fulcro.networking.file_upload.wrap_file_upload.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.networking.file_upload.js.map
