"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/pomodoro/page",{

/***/ "(app-pages-browser)/./app/components/Inputs/MinutsInput.tsx":
/*!***********************************************!*\
  !*** ./app/components/Inputs/MinutsInput.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MinutsInput = (param)=>{\n    let { label, value, setValue, onChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full relative my-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \" \",\n                minLength: 3,\n                value: value,\n                onChange: onChange,\n                className: \"peer w-full p-3 pt-6 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative\\n        \"\n            }, void 0, false, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Inputs/MinutsInput.tsx\",\n                lineNumber: 6,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4\\n        \",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Inputs/MinutsInput.tsx\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Inputs/MinutsInput.tsx\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\n};\n_c = MinutsInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MinutsInput);\n{\n/* <input\n\t\t\ttype=\"number\"\n\t\t\tid=\"workMinutes\"\n\t\t\tvalue={value}\n\t\t\tonChange={onChange}\n\t\t\tclassName=\"border p-2 rounded text-black\"\n\t\t/> */ }var _c;\n$RefreshReg$(_c, \"MinutsInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0lucHV0cy9NaW51dHNJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsY0FBYztRQUFDLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBTztJQUM3RCxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUNBQyxhQUFZO2dCQUNaQyxXQUFXO2dCQUNYUCxPQUFPQTtnQkFDUEUsVUFBVUE7Z0JBQ1ZFLFdBQVk7Ozs7OzswQkFHYiw4REFBQ0w7Z0JBQ0FLLFdBQVk7MEJBR1hMOzs7Ozs7Ozs7Ozs7QUFJTDtLQW5CTUQ7QUFxQk4sK0RBQWVBLFdBQVdBLEVBQUM7QUFFM0I7QUFDQzs7Ozs7O0tBTUksR0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9JbnB1dHMvTWludXRzSW5wdXQudHN4PzllNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNaW51dHNJbnB1dCA9ICh7IGxhYmVsLCB2YWx1ZSwgc2V0VmFsdWUsIG9uQ2hhbmdlIH06IGFueSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlIG15LTFcIj5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIiBcIlxuXHRcdFx0XHRtaW5MZW5ndGg9ezN9XG5cdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHRjbGFzc05hbWU9e2BwZWVyIHctZnVsbCBwLTMgcHQtNiBwbC00IGZvbnQtbGlnaHQgYmctbmV1dHJhbC04MDAvNzUgYm9yZGVyLTIgYm9yZGVyLW5ldXRyYWwtODAwLzc1IHJvdW5kZWQtbWQgb3V0bGluZS1ub25lIHRyYW5zaXRpb24gZGlzYWJsZWQ6b3BhY2l0eS03MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgcmVsYXRpdmVcbiAgICAgICAgYH1cblx0XHRcdC8+XG5cdFx0XHQ8bGFiZWxcblx0XHRcdFx0Y2xhc3NOYW1lPXtgYWJzb2x1dGUgdGV4dC1tZCBkdXJhdGlvbi0xNTAgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0zIHRvcC01IGxlZnQtNCB6LTEwIG9yaWdpbi1bMF0gcGVlci1wbGFjZWhvbGRlci1zaG93bjpzY2FsZS0xMDAgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6c2NhbGUtNzUgcGVlci1mb2N1czotdHJhbnNsYXRlLXktNFxuICAgICAgICBgfVxuXHRcdFx0PlxuXHRcdFx0XHR7bGFiZWx9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWludXRzSW5wdXQ7XG5cbntcblx0LyogPGlucHV0XG5cdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdGlkPVwid29ya01pbnV0ZXNcIlxuXHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0Y2xhc3NOYW1lPVwiYm9yZGVyIHAtMiByb3VuZGVkIHRleHQtYmxhY2tcIlxuXHRcdC8+ICovXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNaW51dHNJbnB1dCIsImxhYmVsIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm1pbkxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Inputs/MinutsInput.tsx\n"));

/***/ })

});