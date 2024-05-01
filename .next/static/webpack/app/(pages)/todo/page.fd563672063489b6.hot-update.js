"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/todo/page",{

/***/ "(app-pages-browser)/./app/components/Todo.tsx":
/*!*********************************!*\
  !*** ./app/components/Todo.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TodoItem = (param)=>{\n    let { todo } = param;\n    _s();\n    const [isDone, setIsDone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const toggleDone = async ()=>{\n        setIsDone(!isDone);\n        setIsDeleting(true);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"/api/todos/\".concat(todo.id));\n            setIsDeleting(false);\n            setTimeout(()=>{\n                router.refresh();\n            }, 500); // Adjust the delay time as needed\n        } catch (error) {\n            console.error(\"Error deleting todo:\", error);\n        } finally{}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between p-4 border-b relative transition-all \".concat(isDeleting ? \"animate-delete\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"inline-flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        className: \"peer relative appearance-none w-7 h-7 border rounded-full border-white cursor-pointer checked:bg-neutral-600\",\n                        checked: isDone,\n                        onChange: toggleDone,\n                        disabled: isDeleting\n                    }, void 0, false, {\n                        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Todo.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white ml-2 \".concat(isDone ? \"line-through\" : \"\"),\n                        children: todo.title\n                    }, void 0, false, {\n                        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Todo.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Todo.tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Todo.tsx\",\n            lineNumber: 32,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Todo.tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TodoItem, \"9DDQlIxf0T6coSDez7HfmkNdR6E=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = TodoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2lDO0FBQ1A7QUFDa0I7QUFFNUMsTUFBTUcsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBaUI7O0lBQ3hDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTVMsU0FBU1AsMERBQVNBO0lBRXhCLE1BQU1RLGFBQWE7UUFDbEJKLFVBQVUsQ0FBQ0Q7UUFDWEcsY0FBYztRQUNkLElBQUk7WUFDSCxNQUFNUCw2Q0FBS0EsQ0FBQ1UsTUFBTSxDQUFDLGNBQXNCLE9BQVJQLEtBQUtRLEVBQUU7WUFDeENKLGNBQWM7WUFDZEssV0FBVztnQkFDVkosT0FBT0ssT0FBTztZQUNmLEdBQUcsTUFBTSxrQ0FBa0M7UUFDNUMsRUFBRSxPQUFPQyxPQUFPO1lBQ2ZDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3ZDLFNBQVUsQ0FDVjtJQUNEO0lBRUEscUJBQ0MsOERBQUNFO1FBQ0FDLFdBQVcsMEVBRVYsT0FEQVgsYUFBYSxtQkFBbUI7a0JBR2pDLDRFQUFDVTtzQkFDQSw0RUFBQ0U7Z0JBQU1ELFdBQVU7O2tDQUNoQiw4REFBQ0U7d0JBQ0FDLE1BQUs7d0JBQ0xILFdBQVk7d0JBQ1pJLFNBQVNqQjt3QkFDVGtCLFVBQVViO3dCQUNWYyxVQUFVakI7Ozs7OztrQ0FFWCw4REFBQ2tCO3dCQUFLUCxXQUFXLG1CQUFnRCxPQUE3QmIsU0FBUyxpQkFBaUI7a0NBQzVERCxLQUFLc0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtHQTFDTXZCOztRQUdVRCxzREFBU0E7OztLQUhuQkM7QUE0Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVG9kby50c3g/MDJjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IFRvZG9JdGVtID0gKHsgdG9kbyB9OiB7IHRvZG86IGFueSB9KSA9PiB7XG5cdGNvbnN0IFtpc0RvbmUsIHNldElzRG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtpc0RlbGV0aW5nLCBzZXRJc0RlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc3QgdG9nZ2xlRG9uZSA9IGFzeW5jICgpID0+IHtcblx0XHRzZXRJc0RvbmUoIWlzRG9uZSk7XG5cdFx0c2V0SXNEZWxldGluZyh0cnVlKTtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgYXhpb3MuZGVsZXRlKGAvYXBpL3RvZG9zLyR7dG9kby5pZH1gKTtcblx0XHRcdHNldElzRGVsZXRpbmcoZmFsc2UpO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHJvdXRlci5yZWZyZXNoKCk7XG5cdFx0XHR9LCA1MDApOyAvLyBBZGp1c3QgdGhlIGRlbGF5IHRpbWUgYXMgbmVlZGVkXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyB0b2RvOlwiLCBlcnJvcik7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC00IGJvcmRlci1iIHJlbGF0aXZlIHRyYW5zaXRpb24tYWxsICR7XG5cdFx0XHRcdGlzRGVsZXRpbmcgPyBcImFuaW1hdGUtZGVsZXRlXCIgOiBcIlwiXG5cdFx0XHR9YH1cblx0XHQ+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgcGVlciByZWxhdGl2ZSBhcHBlYXJhbmNlLW5vbmUgdy03IGgtNyBib3JkZXIgcm91bmRlZC1mdWxsIGJvcmRlci13aGl0ZSBjdXJzb3ItcG9pbnRlciBjaGVja2VkOmJnLW5ldXRyYWwtNjAwYH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2lzRG9uZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0b2dnbGVEb25lfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2lzRGVsZXRpbmd9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIG1sLTIgJHtpc0RvbmUgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJcIn1gfT5cblx0XHRcdFx0XHRcdHt0b2RvLnRpdGxlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0l0ZW07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIlRvZG9JdGVtIiwidG9kbyIsImlzRG9uZSIsInNldElzRG9uZSIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwicm91dGVyIiwidG9nZ2xlRG9uZSIsImRlbGV0ZSIsImlkIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwic3BhbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Todo.tsx\n"));

/***/ })

});