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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MinutsInput = (param)=>{\n    let { label, value, setValue, onChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full relative my-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \" \",\n                minLength: 3,\n                value: value || \"\",\n                onChange: onChange,\n                className: \"peer w-full p-3 pt-8 xl:pt-10 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative text-lg xl:text-[1.5rem]\\n        \"\n            }, void 0, false, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Inputs/MinutsInput.tsx\",\n                lineNumber: 6,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"absolute text-sm xl:text-lg duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4\\n        \",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Inputs/MinutsInput.tsx\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Inputs/MinutsInput.tsx\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\n};\n_c = MinutsInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MinutsInput);\n{\n/* <input\n\t\t\ttype=\"number\"\n\t\t\tid=\"workMinutes\"\n\t\t\tvalue={value}\n\t\t\tonChange={onChange}\n\t\t\tclassName=\"border p-2 rounded text-black\"\n\t\t/> */ }var _c;\n$RefreshReg$(_c, \"MinutsInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0lucHV0cy9NaW51dHNJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsY0FBYztRQUFDLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBTztJQUM3RCxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUNBQyxhQUFZO2dCQUNaQyxXQUFXO2dCQUNYUCxPQUFPQSxTQUFTO2dCQUNoQkUsVUFBVUE7Z0JBQ1ZFLFdBQVk7Ozs7OzswQkFHYiw4REFBQ0w7Z0JBQ0FLLFdBQVk7MEJBR1hMOzs7Ozs7Ozs7Ozs7QUFJTDtLQW5CTUQ7QUFxQk4sK0RBQWVBLFdBQVdBLEVBQUM7QUFFM0I7QUFDQzs7Ozs7O0tBTUksR0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9JbnB1dHMvTWludXRzSW5wdXQudHN4PzllNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNaW51dHNJbnB1dCA9ICh7IGxhYmVsLCB2YWx1ZSwgc2V0VmFsdWUsIG9uQ2hhbmdlIH06IGFueSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlIG15LTFcIj5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIiBcIlxuXHRcdFx0XHRtaW5MZW5ndGg9ezN9XG5cdFx0XHRcdHZhbHVlPXt2YWx1ZSB8fCBcIlwifVxuXHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdGNsYXNzTmFtZT17YHBlZXIgdy1mdWxsIHAtMyBwdC04IHhsOnB0LTEwIHBsLTQgZm9udC1saWdodCBiZy1uZXV0cmFsLTgwMC83NSBib3JkZXItMiBib3JkZXItbmV1dHJhbC04MDAvNzUgcm91bmRlZC1tZCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbiBkaXNhYmxlZDpvcGFjaXR5LTcwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCByZWxhdGl2ZSB0ZXh0LWxnIHhsOnRleHQtWzEuNXJlbV1cbiAgICAgICAgYH1cblx0XHRcdC8+XG5cdFx0XHQ8bGFiZWxcblx0XHRcdFx0Y2xhc3NOYW1lPXtgYWJzb2x1dGUgdGV4dC1zbSB4bDp0ZXh0LWxnIGR1cmF0aW9uLTE1MCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTMgdG9wLTUgbGVmdC00IHotMTAgb3JpZ2luLVswXSBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnNjYWxlLTEwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czpzY2FsZS03NSBwZWVyLWZvY3VzOi10cmFuc2xhdGUteS00XG4gICAgICAgIGB9XG5cdFx0XHQ+XG5cdFx0XHRcdHtsYWJlbH1cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaW51dHNJbnB1dDtcblxue1xuXHQvKiA8aW5wdXRcblx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0aWQ9XCJ3b3JrTWludXRlc1wiXG5cdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQgdGV4dC1ibGFja1wiXG5cdFx0Lz4gKi9cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1pbnV0c0lucHV0IiwibGFiZWwiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwibWluTGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Inputs/MinutsInput.tsx\n"));

/***/ })

});