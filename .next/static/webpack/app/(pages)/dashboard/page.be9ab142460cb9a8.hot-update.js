"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/dashboard/page",{

/***/ "(app-pages-browser)/./app/components/Dashboard/GridItem.tsx":
/*!***********************************************!*\
  !*** ./app/components/Dashboard/GridItem.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst GridItem = (param)=>{\n    let { task, isLast, closeDeadline } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0,\n            y: 100\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.4\n        },\n        className: \"opacity-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            href: \"/dashboard/\".concat(task.id),\n            className: \"border rounded-lg overflow-hidden shadow-lg px-4 xl:px-4 py-4 flex flex-col gap-2 items-start border-neutral-700 \".concat(task.status.toLowerCase() === \"done\" ? \"opacity-50\" : \"opacity-100\", \" \").concat(closeDeadline && task.status.toLowerCase() !== \"done\" ? \"border-red-400/50 bg-red-400/[15%]\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg xl:text-xl font-bold text-white jura\",\n                    children: task.title\n                }, void 0, false, {\n                    fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/GridItem.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-neutral-400 text-sm xl:text-base\",\n                    children: task.description.length > 40 ? task.description.slice(0, 40) + \"...\" : task.description\n                }, void 0, false, {\n                    fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/GridItem.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 flex-wrap mt-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm bg-neutral-800 text-white px-2 xl:px-4 py-1 xl:py-2 rounded-full \\n\t\t\t\t\t\t\".concat(closeDeadline && task.status !== \"done\" ? \"bg-neutral-800\" : \"\"),\n                            children: task.tag\n                        }, void 0, false, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/GridItem.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm   px-2 xl:px-4 py-1 xl:py-2 rounded-full \\n\t\t\t\t\t\t\t\".concat(closeDeadline && task.status.toLowerCase() !== \"done\" ? \"bg-neutral-700 text-white\" : \"bg-purple-300 text-neutral-900\", \"\\n\\n\t\t\t\t\t\"),\n                            children: task.priority\n                        }, void 0, false, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/GridItem.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm bg-red-400 text-neutral-900 px-2 xl:px-4 py-1 xl:py-2 rounded-full\",\n                            children: task.deadline\n                        }, void 0, false, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/GridItem.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm  px-2 xl:px-4 py-1 xl:py-2 rounded-full \\n\t\t\t\t\t\t\".concat(closeDeadline && task.status.toLowerCase() !== \"done\" ? \"bg-neutral-800 text-white\" : \"bg-blue-300 text-neutral-900\", \"\\n\t\t\t\t\t\t\"),\n                            children: task.status\n                        }, void 0, false, {\n                            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/GridItem.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/GridItem.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/GridItem.tsx\",\n            lineNumber: 14,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/GridItem.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = GridItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GridItem);\nvar _c;\n$RefreshReg$(_c, \"GridItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9HcmlkSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM2QjtBQUNIO0FBQ2E7QUFFdkMsTUFBTUcsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxhQUFhLEVBQU87SUFDckQscUJBQ0MsOERBQUNKLGlEQUFNQSxDQUFDSyxHQUFHO1FBQ1ZDLFNBQVM7WUFBRUMsU0FBUztZQUFHQyxHQUFHO1FBQUk7UUFDOUJDLFNBQVM7WUFBRUYsU0FBUztZQUFHQyxHQUFHO1FBQUU7UUFDNUJFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO1FBQzVCQyxXQUFVO2tCQUVWLDRFQUFDZCxpREFBSUE7WUFDSmUsTUFBTSxjQUFzQixPQUFSWCxLQUFLWSxFQUFFO1lBQzNCRixXQUFXLG9IQUdWUixPQUZBRixLQUFLYSxNQUFNLENBQUNDLFdBQVcsT0FBTyxTQUFTLGVBQWUsZUFDdEQsS0FJQSxPQUhBWixpQkFBaUJGLEtBQUthLE1BQU0sQ0FBQ0MsV0FBVyxPQUFPLFNBQzVDLHVDQUNBOzs4QkFHSiw4REFBQ0M7b0JBQUdMLFdBQVU7OEJBQ1pWLEtBQUtnQixLQUFLOzs7Ozs7OEJBRVosOERBQUNDO29CQUFFUCxXQUFVOzhCQUNYVixLQUFLa0IsV0FBVyxDQUFDQyxNQUFNLEdBQUcsS0FDeEJuQixLQUFLa0IsV0FBVyxDQUFDRSxLQUFLLENBQUMsR0FBRyxNQUFNLFFBQ2hDcEIsS0FBS2tCLFdBQVc7Ozs7Ozs4QkFFcEIsOERBQUNmO29CQUFJTyxXQUFVOztzQ0FDZCw4REFBQ1c7NEJBQ0FYLFdBQVcsb0ZBQ3VELE9BQWhFUixpQkFBaUJGLEtBQUthLE1BQU0sS0FBSyxTQUFTLG1CQUFtQjtzQ0FFOURiLEtBQUtzQixHQUFHOzs7Ozs7c0NBRVYsOERBQUNEOzRCQUNBWCxXQUFXLDZEQUtULE9BSEFSLGlCQUFpQkYsS0FBS2EsTUFBTSxDQUFDQyxXQUFXLE9BQU8sU0FDNUMsOEJBQ0Esa0NBQ0g7c0NBSURkLEtBQUt1QixRQUFROzs7Ozs7c0NBRWYsOERBQUNGOzRCQUFLWCxXQUFVO3NDQUNkVixLQUFLd0IsUUFBUTs7Ozs7O3NDQUVmLDhEQUFDSDs0QkFDQVgsV0FBVywyREFLVixPQUhBUixpQkFBaUJGLEtBQUthLE1BQU0sQ0FBQ0MsV0FBVyxPQUFPLFNBQzVDLDhCQUNBLGdDQUNIO3NDQUdBZCxLQUFLYSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtLQS9ETWQ7QUFpRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL0dyaWRJdGVtLnRzeD9kNTI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgR3JpZEl0ZW0gPSAoeyB0YXNrLCBpc0xhc3QsIGNsb3NlRGVhZGxpbmUgfTogYW55KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAwIH19XG5cdFx0XHRhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cblx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCB9fVxuXHRcdFx0Y2xhc3NOYW1lPVwib3BhY2l0eS0wXCJcblx0XHQ+XG5cdFx0XHQ8TGlua1xuXHRcdFx0XHRocmVmPXtgL2Rhc2hib2FyZC8ke3Rhc2suaWR9YH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtgYm9yZGVyIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBweC00IHhsOnB4LTQgcHktNCBmbGV4IGZsZXgtY29sIGdhcC0yIGl0ZW1zLXN0YXJ0IGJvcmRlci1uZXV0cmFsLTcwMCAke1xuXHRcdFx0XHRcdHRhc2suc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT09IFwiZG9uZVwiID8gXCJvcGFjaXR5LTUwXCIgOiBcIm9wYWNpdHktMTAwXCJcblx0XHRcdFx0fSAke1xuXHRcdFx0XHRcdGNsb3NlRGVhZGxpbmUgJiYgdGFzay5zdGF0dXMudG9Mb3dlckNhc2UoKSAhPT0gXCJkb25lXCJcblx0XHRcdFx0XHRcdD8gXCJib3JkZXItcmVkLTQwMC81MCBiZy1yZWQtNDAwL1sxNSVdXCJcblx0XHRcdFx0XHRcdDogXCJcIlxuXHRcdFx0XHR9YH1cblx0XHRcdD5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRleHQtbGcgeGw6dGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZSBqdXJhXCI+XG5cdFx0XHRcdFx0e3Rhc2sudGl0bGV9XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDAgdGV4dC1zbSB4bDp0ZXh0LWJhc2VcIj5cblx0XHRcdFx0XHR7dGFzay5kZXNjcmlwdGlvbi5sZW5ndGggPiA0MFxuXHRcdFx0XHRcdFx0PyB0YXNrLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDQwKSArIFwiLi4uXCJcblx0XHRcdFx0XHRcdDogdGFzay5kZXNjcmlwdGlvbn1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgZmxleC13cmFwIG10LWF1dG9cIj5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgdGV4dC1zbSBiZy1uZXV0cmFsLTgwMCB0ZXh0LXdoaXRlIHB4LTIgeGw6cHgtNCBweS0xIHhsOnB5LTIgcm91bmRlZC1mdWxsIFxuXHRcdFx0XHRcdFx0JHtjbG9zZURlYWRsaW5lICYmIHRhc2suc3RhdHVzICE9PSBcImRvbmVcIiA/IFwiYmctbmV1dHJhbC04MDBcIiA6IFwiXCJ9YH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7dGFzay50YWd9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2B0ZXh0LXNtICAgcHgtMiB4bDpweC00IHB5LTEgeGw6cHktMiByb3VuZGVkLWZ1bGwgXG5cdFx0XHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2VEZWFkbGluZSAmJiB0YXNrLnN0YXR1cy50b0xvd2VyQ2FzZSgpICE9PSBcImRvbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PyBcImJnLW5ldXRyYWwtNzAwIHRleHQtd2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OiBcImJnLXB1cnBsZS0zMDAgdGV4dC1uZXV0cmFsLTkwMFwiXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3Rhc2sucHJpb3JpdHl9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gYmctcmVkLTQwMCB0ZXh0LW5ldXRyYWwtOTAwIHB4LTIgeGw6cHgtNCBweS0xIHhsOnB5LTIgcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdFx0XHR7dGFzay5kZWFkbGluZX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHRleHQtc20gIHB4LTIgeGw6cHgtNCBweS0xIHhsOnB5LTIgcm91bmRlZC1mdWxsIFxuXHRcdFx0XHRcdFx0JHtcblx0XHRcdFx0XHRcdFx0Y2xvc2VEZWFkbGluZSAmJiB0YXNrLnN0YXR1cy50b0xvd2VyQ2FzZSgpICE9PSBcImRvbmVcIlxuXHRcdFx0XHRcdFx0XHRcdD8gXCJiZy1uZXV0cmFsLTgwMCB0ZXh0LXdoaXRlXCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwiYmctYmx1ZS0zMDAgdGV4dC1uZXV0cmFsLTkwMFwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt0YXNrLnN0YXR1c31cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MaW5rPlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRJdGVtO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIm1vdGlvbiIsIkdyaWRJdGVtIiwidGFzayIsImlzTGFzdCIsImNsb3NlRGVhZGxpbmUiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiaHJlZiIsImlkIiwic3RhdHVzIiwidG9Mb3dlckNhc2UiLCJoMiIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwic2xpY2UiLCJzcGFuIiwidGFnIiwicHJpb3JpdHkiLCJkZWFkbGluZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Dashboard/GridItem.tsx\n"));

/***/ })

});