(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[181],{"/voi":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"isTerminalTest",(function(){return isTerminalTest})),__webpack_require__.d(__webpack_exports__,"runTestCode",(function(){return runTestCode})),__webpack_require__.d(__webpack_exports__,"runComponentTest",(function(){return runComponentTest})),__webpack_require__.d(__webpack_exports__,"runComponentTestHandler",(function(){return runComponentTestHandler})),__webpack_require__.d(__webpack_exports__,"componentTest",(function(){return componentTest}));var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("TP7S"),lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0__),redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("5rFJ"),_libs_logging_logger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ecza"),_platform_stores_checkpoints_CheckpointStore__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("f0Jk"),_components_CodeEditor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("kk6b"),_components_OutputTerminal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("YFbN"),_components_WebBrowser__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("CZ1f");const getComponentTesters=()=>{const _=_platform_stores_checkpoints_CheckpointStore__WEBPACK_IMPORTED_MODULE_3__.a.getActiveTerminal();return{WebBrowser:_components_WebBrowser__WEBPACK_IMPORTED_MODULE_6__.WebBrowser,CodeEditor:_components_CodeEditor__WEBPACK_IMPORTED_MODULE_4__.CodeEditor,OutputTerminal:_components_OutputTerminal__WEBPACK_IMPORTED_MODULE_5__.OutputTerminal,Terminal:_}},isTerminalTest=_=>_.match("Components.Terminal"),runTestCode=testCode=>{const Components=getComponentTesters();return eval("(function evalTestCode(){".concat(testCode,"})()"))};function*runComponentTest(_){let e;try{e=runTestCode(_)}catch(_){e={pass:!1,passive:!0},_libs_logging_logger__WEBPACK_IMPORTED_MODULE_2__.a.error(_)}return lodash_isUndefined__WEBPACK_IMPORTED_MODULE_0___default()(e.passive)&&(e.passive=!1),yield e}function*runComponentTestHandler(_){if(isTerminalTest(_))for(let e=0;e<20;e++){const e=yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(runComponentTest,_);if(e.pass)return e;yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(100)}return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(runComponentTest,_)}function*componentTest(_){return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(runComponentTestHandler,_.test_code)}__webpack_exports__.default=componentTest}}]);
//# sourceMappingURL=181.1d78823f5db53aaf64c2.chunk.js.map