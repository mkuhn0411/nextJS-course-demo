"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n\n\nfunction NewMeetup() {\n    async function addMeetupHandler(eneteredMeetupData) {\n        console.log(eneteredMeetupData);\n        console.log(JSON.stringify(eneteredMeetupData));\n        const response = await fetch(\"/api/new-meetup\", {\n            method: \"POST\",\n            body: JSON.stringify(eneteredMeetupData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        console.log(response);\n        const data = await response.json();\n        console.log(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onAddMeetup: addMeetupHandler\n    }, void 0, false, {\n        fileName: \"/Users/melaniekuhn/Desktop/Udemy_React/nextjs-2/pages/new-meetup/index.js\",\n        lineNumber: 21,\n        columnNumber: 12\n    }, this);\n}\n_c = NewMeetup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMeetup);\nvar _c;\n$RefreshReg$(_c, \"NewMeetup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXctbWVldHVwL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUFtRTtBQUVuRSxTQUFTQyxZQUFZO0lBQ2pCLGVBQWVDLGlCQUFpQkMsa0JBQWtCLEVBQUU7UUFDaERDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWkMsUUFBUUMsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNKO1FBRTNCLE1BQU1LLFdBQVcsTUFBTUMsTUFBTSxtQkFBbUI7WUFDNUNDLFFBQVE7WUFDUkMsTUFBTUwsS0FBS0MsU0FBUyxDQUFDSjtZQUNyQlMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7UUFDSjtRQUNBUixRQUFRQyxHQUFHLENBQUNHO1FBRVosTUFBTUssT0FBTyxNQUFNTCxTQUFTTSxJQUFJO1FBRWhDVixRQUFRQyxHQUFHLENBQUNRO0lBQ2hCO0lBQ0EscUJBQU8sOERBQUNiLHlFQUFhQTtRQUFDZSxhQUFhYjs7Ozs7O0FBQ3ZDO0tBbkJTRDtBQXFCVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXctbWVldHVwL2luZGV4LmpzPzk1ODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0nO1xuXG5mdW5jdGlvbiBOZXdNZWV0dXAoKSB7XG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkTWVldHVwSGFuZGxlcihlbmV0ZXJlZE1lZXR1cERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZW5ldGVyZWRNZWV0dXBEYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlbmV0ZXJlZE1lZXR1cERhdGEpKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9uZXctbWVldHVwJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbmV0ZXJlZE1lZXR1cERhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gICAgcmV0dXJuIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfS8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cDsiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsIk5ld01lZXR1cCIsImFkZE1lZXR1cEhhbmRsZXIiLCJlbmV0ZXJlZE1lZXR1cERhdGEiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwib25BZGRNZWV0dXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/new-meetup/index.js\n"));

/***/ })

});