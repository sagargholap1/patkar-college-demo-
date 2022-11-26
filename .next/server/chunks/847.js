"use strict";
exports.id = 847;
exports.ids = [847];
exports.modules = {

/***/ 2710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ apis)
/* harmony export */ });
// URLS
const API = process.env.BACKEND_URL;
const APP_ID = process.env.APP_ID;
const TENANT_ID = process.env.TENANT_ID;
// DEV URLS
// const api = "https://pvkeh3fj81.execute-api.us-east-1.amazonaws.com";
// const appId = "cr:app:8wNUDo7tlG8w";
// const tenantId = "lavender_yummy_jay";
// PROD URLS
const api = "https://5pqjags417.execute-api.ap-south-1.amazonaws.com";
const appId = "cr:app:8wNUDo7tlG8w";
const tenantId = "lavender_yummy_jay";
console.log(tenantId);
const apis = {
    getContent: (name)=>{
        // return `${API}/content?app_id=${APP_ID}&content=${name}&tenant_id=${TENANT_ID}`;
        return `${api}/content?app_id=${appId}&content=${name}&tenant_id=${tenantId}`;
    }
};


/***/ }),

/***/ 6847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ getConfig)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2710);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// HTTP Helpers


const getConfig = async (name)=>{
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(_apis__WEBPACK_IMPORTED_MODULE_1__/* .apis.getContent */ .J.getContent(name));
    return response?.data?.data[0]?.content;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;