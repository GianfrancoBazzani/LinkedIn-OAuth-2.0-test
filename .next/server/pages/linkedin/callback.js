/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/linkedin/callback";
exports.ids = ["pages/linkedin/callback"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtlZGluLW9hdXRoLTIuMC10ZXN0Ly4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9iMTcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/linkedin/callback.tsx":
/*!*************************************!*\
  !*** ./pages/linkedin/callback.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkedinCallback)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-cutter */ \"cookie-cutter\");\n/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_cutter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction LinkedinCallback() {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // query.state code — The OAuth 2.0 authorization code.\n    // query.code state — A value used to test for possible CSRF attacks.\n    console.log(query.code);\n    cookie_cutter__WEBPACK_IMPORTED_MODULE_2___default().set(\"LinkedinAuthToken\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n        children: query.code\n    }, void 0, false, {\n        fileName: \"/home/gianfranco/Documents/GitHub/LinkedIn-OAuth-2.0-test/pages/linkedin/callback.tsx\",\n        lineNumber: 19,\n        columnNumber: 12\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saW5rZWRpbi9jYWxsYmFjay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDVDtBQUNDO0FBRzFCLFNBQVNHLG1CQUFtQjtJQUN2QyxNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHSCxzREFBU0E7SUFFM0IsdURBQXVEO0lBQ3ZELHFFQUFxRTtJQUVyRUksUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxJQUFJO0lBSXRCTCx3REFBZ0IsQ0FBQztJQUdqQixxQkFBTyw4REFBQ087UUFBSUMsV0FBV1YsNEVBQWtCO2tCQUFHSSxNQUFNRyxJQUFJOzs7Ozs7QUFDMUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtlZGluLW9hdXRoLTIuMC10ZXN0Ly4vcGFnZXMvbGlua2VkaW4vY2FsbGJhY2sudHN4PzJlZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gXCJjb29raWUtY3V0dGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua2VkaW5DYWxsYmFjaygpIHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgICBcbiAgICAvLyBxdWVyeS5zdGF0ZSBjb2RlIOKAlCBUaGUgT0F1dGggMi4wIGF1dGhvcml6YXRpb24gY29kZS5cbiAgICAvLyBxdWVyeS5jb2RlIHN0YXRlIOKAlCBBIHZhbHVlIHVzZWQgdG8gdGVzdCBmb3IgcG9zc2libGUgQ1NSRiBhdHRhY2tzLlxuXG4gICAgY29uc29sZS5sb2cocXVlcnkuY29kZSk7XG5cblxuICAgIFxuICAgIGNvb2tpZUN1dHRlci5zZXQoJ0xpbmtlZGluQXV0aFRva2VuJywgLyp7IGV4cGlyZXM6IG5ldyBEYXRlKCkgfSovKVxuICAgIFxuICAgIFxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57cXVlcnkuY29kZX08L2Rpdj5cbn0iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUm91dGVyIiwiY29va2llQ3V0dGVyIiwiTGlua2VkaW5DYWxsYmFjayIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJzZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/linkedin/callback.tsx\n");

/***/ }),

/***/ "cookie-cutter":
/*!********************************!*\
  !*** external "cookie-cutter" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-cutter");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/linkedin/callback.tsx"));
module.exports = __webpack_exports__;

})();