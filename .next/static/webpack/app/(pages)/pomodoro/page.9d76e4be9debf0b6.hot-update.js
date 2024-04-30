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

/***/ "(app-pages-browser)/./app/(pages)/pomodoro/page.tsx":
/*!***************************************!*\
  !*** ./app/(pages)/pomodoro/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_AnimatedBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/AnimatedBackground */ \"(app-pages-browser)/./app/components/AnimatedBackground.tsx\");\n/* harmony import */ var _app_components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Timer */ \"(app-pages-browser)/./app/components/Timer.tsx\");\n/* harmony import */ var _app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/SettingsContext */ \"(app-pages-browser)/./app/contexts/SettingsContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ \"(app-pages-browser)/./node_modules/react-circular-progressbar/dist/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const settingsInfo = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const [isPaused, setIsPaused] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"work\"); // work/break/null\n    const [secondsLeft, setSecondsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const secondsLeftRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(secondsLeft);\n    const isPausedRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(isPaused);\n    const modeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(mode);\n    function tick() {\n        secondsLeftRef.current--;\n        setSecondsLeft(secondsLeftRef.current);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function switchMode() {\n            const nextMode = modeRef.current === \"work\" ? \"break\" : \"work\";\n            const nextSeconds = (nextMode === \"work\" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;\n            setMode(nextMode);\n            modeRef.current = nextMode;\n            setSecondsLeft(nextSeconds);\n            secondsLeftRef.current = nextSeconds;\n        }\n        secondsLeftRef.current = settingsInfo.workMinutes * 60;\n        setSecondsLeft(secondsLeftRef.current);\n        const interval = setInterval(()=>{\n            if (isPausedRef.current) {\n                return;\n            }\n            if (secondsLeftRef.current === 0) {\n                return switchMode();\n            }\n            tick();\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        settingsInfo\n    ]);\n    const totalSeconds = mode === \"work\" ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;\n    const percentage = Math.round(secondsLeft / totalSeconds * 100);\n    const minutes = Math.floor(secondsLeft / 60);\n    let seconds = secondsLeft % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_AnimatedBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                value: 250\n            }, void 0, false, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/(pages)/pomodoro/page.tsx\",\n                lineNumber: 75,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"qbDDvLhfSBzd+sXN+6DGwZsyaS4=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL3BvbW9kb3JvL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDcUU7QUFJMUI7QUFDa0I7QUFDVTtBQUtuQjtBQUVwRCxNQUFNUSxPQUFPOztJQUNaLE1BQU1DLGVBQWVMLGlEQUFVQSxDQUFDRixxRUFBZUE7SUFFL0MsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxTQUFTLGtCQUFrQjtJQUM1RCxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVMsaUJBQWlCViw2Q0FBTUEsQ0FBQ1E7SUFDOUIsTUFBTUcsY0FBY1gsNkNBQU1BLENBQUNJO0lBQzNCLE1BQU1RLFVBQVVaLDZDQUFNQSxDQUFDTTtJQUV2QixTQUFTTztRQUNSSCxlQUFlSSxPQUFPO1FBQ3RCTCxlQUFlQyxlQUFlSSxPQUFPO0lBQ3RDO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ1QsU0FBU2dCO1lBQ1IsTUFBTUMsV0FBV0osUUFBUUUsT0FBTyxLQUFLLFNBQVMsVUFBVTtZQUN4RCxNQUFNRyxjQUNMLENBQUNELGFBQWEsU0FDWGIsYUFBYWUsV0FBVyxHQUN4QmYsYUFBYWdCLFlBQVksSUFBSTtZQUVqQ1osUUFBUVM7WUFDUkosUUFBUUUsT0FBTyxHQUFHRTtZQUVsQlAsZUFBZVE7WUFDZlAsZUFBZUksT0FBTyxHQUFHRztRQUMxQjtRQUVBUCxlQUFlSSxPQUFPLEdBQUdYLGFBQWFlLFdBQVcsR0FBRztRQUNwRFQsZUFBZUMsZUFBZUksT0FBTztRQUVyQyxNQUFNTSxXQUFXQyxZQUFZO1lBQzVCLElBQUlWLFlBQVlHLE9BQU8sRUFBRTtnQkFDeEI7WUFDRDtZQUNBLElBQUlKLGVBQWVJLE9BQU8sS0FBSyxHQUFHO2dCQUNqQyxPQUFPQztZQUNSO1lBRUFGO1FBQ0QsR0FBRztRQUVILE9BQU8sSUFBTVMsY0FBY0Y7SUFDNUIsR0FBRztRQUFDakI7S0FBYTtJQUVqQixNQUFNb0IsZUFDTGpCLFNBQVMsU0FDTkgsYUFBYWUsV0FBVyxHQUFHLEtBQzNCZixhQUFhZ0IsWUFBWSxHQUFHO0lBQ2hDLE1BQU1LLGFBQWFDLEtBQUtDLEtBQUssQ0FBQyxjQUFlSCxlQUFnQjtJQUU3RCxNQUFNSSxVQUFVRixLQUFLRyxLQUFLLENBQUNwQixjQUFjO0lBQ3pDLElBQUlxQixVQUFVckIsY0FBYztJQUU1QixxQkFDQzs7MEJBQ0MsOERBQUNkLDBFQUFrQkE7Z0JBQUNvQyxPQUFPOzs7Ozs7MEJBQzNCLDhEQUFDbkMsNkRBQUtBOzs7Ozs7O0FBR1Q7R0EvRE1PO0tBQUFBO0FBaUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocGFnZXMpL3BvbW9kb3JvL3BhZ2UudHN4Pzk2OGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQW5pbWF0ZWRCYWNrZ3JvdW5kIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0FuaW1hdGVkQmFja2dyb3VuZFwiO1xuaW1wb3J0IFBhdXNlQnV0dG9uIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1BvbW9kb3JvL1BhdXNlQnV0dG9uXCI7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Qb21vZG9yby9QbGF5QnV0dG9uXCI7XG5pbXBvcnQgU2V0U2V0dGluZ3NCdXR0b24gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvUG9tb2Rvcm8vU2V0U2V0dGluZ3NCdXR0b25cIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9UaW1lclwiO1xuaW1wb3J0IFNldHRpbmdzQ29udGV4dCBmcm9tIFwiQC9hcHAvY29udGV4dHMvU2V0dGluZ3NDb250ZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRDaXJjdWxhclByb2dyZXNzYmFyV2l0aENoaWxkcmVuLFxuXHRidWlsZFN0eWxlcyxcbn0gZnJvbSBcInJlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyXCI7XG5pbXBvcnQgXCJyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2Jhci9kaXN0L3N0eWxlcy5jc3NcIjtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcblx0Y29uc3Qgc2V0dGluZ3NJbmZvID0gdXNlQ29udGV4dChTZXR0aW5nc0NvbnRleHQpO1xuXG5cdGNvbnN0IFtpc1BhdXNlZCwgc2V0SXNQYXVzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwid29ya1wiKTsgLy8gd29yay9icmVhay9udWxsXG5cdGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGUoMCk7XG5cblx0Y29uc3Qgc2Vjb25kc0xlZnRSZWYgPSB1c2VSZWYoc2Vjb25kc0xlZnQpO1xuXHRjb25zdCBpc1BhdXNlZFJlZiA9IHVzZVJlZihpc1BhdXNlZCk7XG5cdGNvbnN0IG1vZGVSZWYgPSB1c2VSZWYobW9kZSk7XG5cblx0ZnVuY3Rpb24gdGljaygpIHtcblx0XHRzZWNvbmRzTGVmdFJlZi5jdXJyZW50LS07XG5cdFx0c2V0U2Vjb25kc0xlZnQoc2Vjb25kc0xlZnRSZWYuY3VycmVudCk7XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZ1bmN0aW9uIHN3aXRjaE1vZGUoKSB7XG5cdFx0XHRjb25zdCBuZXh0TW9kZSA9IG1vZGVSZWYuY3VycmVudCA9PT0gXCJ3b3JrXCIgPyBcImJyZWFrXCIgOiBcIndvcmtcIjtcblx0XHRcdGNvbnN0IG5leHRTZWNvbmRzID1cblx0XHRcdFx0KG5leHRNb2RlID09PSBcIndvcmtcIlxuXHRcdFx0XHRcdD8gc2V0dGluZ3NJbmZvLndvcmtNaW51dGVzXG5cdFx0XHRcdFx0OiBzZXR0aW5nc0luZm8uYnJlYWtNaW51dGVzKSAqIDYwO1xuXG5cdFx0XHRzZXRNb2RlKG5leHRNb2RlKTtcblx0XHRcdG1vZGVSZWYuY3VycmVudCA9IG5leHRNb2RlO1xuXG5cdFx0XHRzZXRTZWNvbmRzTGVmdChuZXh0U2Vjb25kcyk7XG5cdFx0XHRzZWNvbmRzTGVmdFJlZi5jdXJyZW50ID0gbmV4dFNlY29uZHM7XG5cdFx0fVxuXG5cdFx0c2Vjb25kc0xlZnRSZWYuY3VycmVudCA9IHNldHRpbmdzSW5mby53b3JrTWludXRlcyAqIDYwO1xuXHRcdHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0UmVmLmN1cnJlbnQpO1xuXG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZiAoaXNQYXVzZWRSZWYuY3VycmVudCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2Vjb25kc0xlZnRSZWYuY3VycmVudCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc3dpdGNoTW9kZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aWNrKCk7XG5cdFx0fSwgMTAwMCk7XG5cblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdH0sIFtzZXR0aW5nc0luZm9dKTtcblxuXHRjb25zdCB0b3RhbFNlY29uZHMgPVxuXHRcdG1vZGUgPT09IFwid29ya1wiXG5cdFx0XHQ/IHNldHRpbmdzSW5mby53b3JrTWludXRlcyAqIDYwXG5cdFx0XHQ6IHNldHRpbmdzSW5mby5icmVha01pbnV0ZXMgKiA2MDtcblx0Y29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQoKHNlY29uZHNMZWZ0IC8gdG90YWxTZWNvbmRzKSAqIDEwMCk7XG5cblx0Y29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kc0xlZnQgLyA2MCk7XG5cdGxldCBzZWNvbmRzID0gc2Vjb25kc0xlZnQgJSA2MDtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8QW5pbWF0ZWRCYWNrZ3JvdW5kIHZhbHVlPXsyNTB9IC8+XG5cdFx0XHQ8VGltZXIgLz5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiQW5pbWF0ZWRCYWNrZ3JvdW5kIiwiVGltZXIiLCJTZXR0aW5nc0NvbnRleHQiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJzZXR0aW5nc0luZm8iLCJpc1BhdXNlZCIsInNldElzUGF1c2VkIiwibW9kZSIsInNldE1vZGUiLCJzZWNvbmRzTGVmdCIsInNldFNlY29uZHNMZWZ0Iiwic2Vjb25kc0xlZnRSZWYiLCJpc1BhdXNlZFJlZiIsIm1vZGVSZWYiLCJ0aWNrIiwiY3VycmVudCIsInN3aXRjaE1vZGUiLCJuZXh0TW9kZSIsIm5leHRTZWNvbmRzIiwid29ya01pbnV0ZXMiLCJicmVha01pbnV0ZXMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRvdGFsU2Vjb25kcyIsInBlcmNlbnRhZ2UiLCJNYXRoIiwicm91bmQiLCJtaW51dGVzIiwiZmxvb3IiLCJzZWNvbmRzIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/pomodoro/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/Timer.tsx":
/*!**********************************!*\
  !*** ./app/components/Timer.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_Pomodoro_PauseButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Pomodoro/PauseButton */ \"(app-pages-browser)/./app/components/Pomodoro/PauseButton.tsx\");\n/* harmony import */ var _app_components_Pomodoro_PlayButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Pomodoro/PlayButton */ \"(app-pages-browser)/./app/components/Pomodoro/PlayButton.tsx\");\n/* harmony import */ var _app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/contexts/SettingsContext */ \"(app-pages-browser)/./app/contexts/SettingsContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-circular-progressbar */ \"(app-pages-browser)/./node_modules/react-circular-progressbar/dist/index.esm.js\");\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ \"(app-pages-browser)/./node_modules/react-circular-progressbar/dist/styles.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Timer = ()=>{\n    _s();\n    const settingsInfo = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const [isPaused, setIsPaused] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"work\"); // work/break/null\n    const [secondsLeft, setSecondsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const secondsLeftRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(secondsLeft);\n    const isPausedRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(isPaused);\n    const modeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(mode);\n    function tick() {\n        secondsLeftRef.current--;\n        setSecondsLeft(secondsLeftRef.current);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function switchMode() {\n            const nextMode = modeRef.current === \"work\" ? \"break\" : \"work\";\n            const nextSeconds = (nextMode === \"work\" ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;\n            setMode(nextMode);\n            modeRef.current = nextMode;\n            setSecondsLeft(nextSeconds);\n            secondsLeftRef.current = nextSeconds;\n        }\n        secondsLeftRef.current = settingsInfo.workMinutes * 60;\n        setSecondsLeft(secondsLeftRef.current);\n        const interval = setInterval(()=>{\n            if (isPausedRef.current) {\n                return;\n            }\n            if (secondsLeftRef.current === 0) {\n                return switchMode();\n            }\n            tick();\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        settingsInfo\n    ]);\n    const totalSeconds = mode === \"work\" ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;\n    const percentage = Math.round(secondsLeft / totalSeconds * 100);\n    const minutes = Math.floor(secondsLeft / 60);\n    let seconds = secondsLeft % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen w-full flex items-center justify-center\",\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] xl:w-[35vw]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__.CircularProgressbarWithChildren, {\n                        className: \"bg-black/[15%] backdrop-blur-[10px] p-4 xl:p-8 rounded-full relative\",\n                        value: percentage,\n                        strokeWidth: 5,\n                        styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_5__.buildStyles)({\n                            textColor: \"#fff\",\n                            pathColor: \"rgb(225, 225, 225)\",\n                            trailColor: \"rgb(50, 50, 50, 0.6)\"\n                        }),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute top-[20%] w-full text-center text-[1.35rem] xl:text-[2rem] jura select-none text-white font-light\",\n                                children: mode === \"work\" ? \"Work\" : \"Break\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-[4rem] md:text-[4rem] lg:text-[3.5rem] xl:text-[6.5rem] font-semibold text-white/[90%] select-none jura\",\n                                children: [\n                                    minutes,\n                                    \":\",\n                                    seconds < 10 ? \"0\" : null,\n                                    seconds\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 7\n                            }, undefined),\n                            isPaused ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Pomodoro_PlayButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onClick: ()=>{\n                                    setIsPaused(false);\n                                    isPausedRef.current = false;\n                                },\n                                className: \"select-none text-white text-xl transition-[1s] bg-neutral-800 hover:bg-neutral-700/[80%] backdrop-blur-md py-3 xl:py-3 px-6 xl:px-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 8\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Pomodoro_PauseButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                onClick: ()=>{\n                                    setIsPaused(true);\n                                    isPausedRef.current = true;\n                                },\n                                className: \"select-none text-white text-xl transition-[1s] bg-neutral-800 hover:bg-neutral-700/[80%] backdrop-blur-md py-3 xl:py-3 px-6 xl:px-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center gap-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Timer.tsx\",\n            lineNumber: 73,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(Timer, \"qbDDvLhfSBzd+sXN+6DGwZsyaS4=\");\n_c = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\nvar _c;\n$RefreshReg$(_c, \"Timer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RpbWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVnRTtBQUNGO0FBRUQ7QUFDVTtBQUluQztBQUNnQjtBQUVwRCxNQUFNVSxRQUFROztJQUNiLE1BQU1DLGVBQWVQLGlEQUFVQSxDQUFDRixxRUFBZUE7SUFFL0MsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQyxTQUFTLGtCQUFrQjtJQUM1RCxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVcsaUJBQWlCWiw2Q0FBTUEsQ0FBQ1U7SUFDOUIsTUFBTUcsY0FBY2IsNkNBQU1BLENBQUNNO0lBQzNCLE1BQU1RLFVBQVVkLDZDQUFNQSxDQUFDUTtJQUV2QixTQUFTTztRQUNSSCxlQUFlSSxPQUFPO1FBQ3RCTCxlQUFlQyxlQUFlSSxPQUFPO0lBQ3RDO0lBRUFqQixnREFBU0EsQ0FBQztRQUNULFNBQVNrQjtZQUNSLE1BQU1DLFdBQVdKLFFBQVFFLE9BQU8sS0FBSyxTQUFTLFVBQVU7WUFDeEQsTUFBTUcsY0FDTCxDQUFDRCxhQUFhLFNBQ1hiLGFBQWFlLFdBQVcsR0FDeEJmLGFBQWFnQixZQUFZLElBQUk7WUFFakNaLFFBQVFTO1lBQ1JKLFFBQVFFLE9BQU8sR0FBR0U7WUFFbEJQLGVBQWVRO1lBQ2ZQLGVBQWVJLE9BQU8sR0FBR0c7UUFDMUI7UUFFQVAsZUFBZUksT0FBTyxHQUFHWCxhQUFhZSxXQUFXLEdBQUc7UUFDcERULGVBQWVDLGVBQWVJLE9BQU87UUFFckMsTUFBTU0sV0FBV0MsWUFBWTtZQUM1QixJQUFJVixZQUFZRyxPQUFPLEVBQUU7Z0JBQ3hCO1lBQ0Q7WUFDQSxJQUFJSixlQUFlSSxPQUFPLEtBQUssR0FBRztnQkFDakMsT0FBT0M7WUFDUjtZQUVBRjtRQUNELEdBQUc7UUFFSCxPQUFPLElBQU1TLGNBQWNGO0lBQzVCLEdBQUc7UUFBQ2pCO0tBQWE7SUFFakIsTUFBTW9CLGVBQ0xqQixTQUFTLFNBQ05ILGFBQWFlLFdBQVcsR0FBRyxLQUMzQmYsYUFBYWdCLFlBQVksR0FBRztJQUNoQyxNQUFNSyxhQUFhQyxLQUFLQyxLQUFLLENBQUMsY0FBZUgsZUFBZ0I7SUFFN0QsTUFBTUksVUFBVUYsS0FBS0csS0FBSyxDQUFDcEIsY0FBYztJQUN6QyxJQUFJcUIsVUFBVXJCLGNBQWM7SUFFNUIscUJBQ0M7a0JBQ0MsNEVBQUNzQjtZQUFJQyxXQUFVOztnQkFFVDs4QkFDTCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2QsNEVBQUMvQix1RkFBK0JBO3dCQUMvQitCLFdBQVU7d0JBQ1ZDLE9BQU9SO3dCQUNQUyxhQUFhO3dCQUNiQyxRQUFRakMsdUVBQVdBLENBQUM7NEJBQ25Ca0MsV0FBVzs0QkFDWEMsV0FBVzs0QkFDWEMsWUFBWTt3QkFDYjs7MENBRUEsOERBQUNDO2dDQUFLUCxXQUFVOzBDQUNkekIsU0FBUyxTQUFTLFNBQVM7Ozs7OzswQ0FFN0IsOERBQUNpQztnQ0FBR1IsV0FBVTs7b0NBQ1pKO29DQUFRO29DQUFFRSxVQUFVLEtBQUssTUFBTTtvQ0FDL0JBOzs7Ozs7OzRCQUVEekIseUJBQ0EsOERBQUNYLDJFQUFVQTtnQ0FDVitDLFNBQVM7b0NBQ1JuQyxZQUFZO29DQUNaTSxZQUFZRyxPQUFPLEdBQUc7Z0NBQ3ZCO2dDQUNBaUIsV0FBVTs7Ozs7MERBR1gsOERBQUN2Qyw0RUFBV0E7Z0NBQ1hnRCxTQUFTO29DQUNSbkMsWUFBWTtvQ0FDWk0sWUFBWUcsT0FBTyxHQUFHO2dDQUN2QjtnQ0FDQWlCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsQjtHQXRHTTdCO0tBQUFBO0FBd0dOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1RpbWVyLnRzeD82ZWRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEFuaW1hdGVkQmFja2dyb3VuZCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9BbmltYXRlZEJhY2tncm91bmRcIjtcbmltcG9ydCBQYXVzZUJ1dHRvbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Qb21vZG9yby9QYXVzZUJ1dHRvblwiO1xuaW1wb3J0IFBsYXlCdXR0b24gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvUG9tb2Rvcm8vUGxheUJ1dHRvblwiO1xuaW1wb3J0IFNldFNldHRpbmdzQnV0dG9uIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1BvbW9kb3JvL1NldFNldHRpbmdzQnV0dG9uXCI7XG5pbXBvcnQgU2V0dGluZ3NDb250ZXh0IGZyb20gXCJAL2FwcC9jb250ZXh0cy9TZXR0aW5nc0NvbnRleHRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdENpcmN1bGFyUHJvZ3Jlc3NiYXJXaXRoQ2hpbGRyZW4sXG5cdGJ1aWxkU3R5bGVzLFxufSBmcm9tIFwicmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXJcIjtcbmltcG9ydCBcInJlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyL2Rpc3Qvc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBUaW1lciA9ICgpID0+IHtcblx0Y29uc3Qgc2V0dGluZ3NJbmZvID0gdXNlQ29udGV4dChTZXR0aW5nc0NvbnRleHQpO1xuXG5cdGNvbnN0IFtpc1BhdXNlZCwgc2V0SXNQYXVzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwid29ya1wiKTsgLy8gd29yay9icmVhay9udWxsXG5cdGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGUoMCk7XG5cblx0Y29uc3Qgc2Vjb25kc0xlZnRSZWYgPSB1c2VSZWYoc2Vjb25kc0xlZnQpO1xuXHRjb25zdCBpc1BhdXNlZFJlZiA9IHVzZVJlZihpc1BhdXNlZCk7XG5cdGNvbnN0IG1vZGVSZWYgPSB1c2VSZWYobW9kZSk7XG5cblx0ZnVuY3Rpb24gdGljaygpIHtcblx0XHRzZWNvbmRzTGVmdFJlZi5jdXJyZW50LS07XG5cdFx0c2V0U2Vjb25kc0xlZnQoc2Vjb25kc0xlZnRSZWYuY3VycmVudCk7XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZ1bmN0aW9uIHN3aXRjaE1vZGUoKSB7XG5cdFx0XHRjb25zdCBuZXh0TW9kZSA9IG1vZGVSZWYuY3VycmVudCA9PT0gXCJ3b3JrXCIgPyBcImJyZWFrXCIgOiBcIndvcmtcIjtcblx0XHRcdGNvbnN0IG5leHRTZWNvbmRzID1cblx0XHRcdFx0KG5leHRNb2RlID09PSBcIndvcmtcIlxuXHRcdFx0XHRcdD8gc2V0dGluZ3NJbmZvLndvcmtNaW51dGVzXG5cdFx0XHRcdFx0OiBzZXR0aW5nc0luZm8uYnJlYWtNaW51dGVzKSAqIDYwO1xuXG5cdFx0XHRzZXRNb2RlKG5leHRNb2RlKTtcblx0XHRcdG1vZGVSZWYuY3VycmVudCA9IG5leHRNb2RlO1xuXG5cdFx0XHRzZXRTZWNvbmRzTGVmdChuZXh0U2Vjb25kcyk7XG5cdFx0XHRzZWNvbmRzTGVmdFJlZi5jdXJyZW50ID0gbmV4dFNlY29uZHM7XG5cdFx0fVxuXG5cdFx0c2Vjb25kc0xlZnRSZWYuY3VycmVudCA9IHNldHRpbmdzSW5mby53b3JrTWludXRlcyAqIDYwO1xuXHRcdHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0UmVmLmN1cnJlbnQpO1xuXG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZiAoaXNQYXVzZWRSZWYuY3VycmVudCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2Vjb25kc0xlZnRSZWYuY3VycmVudCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gc3dpdGNoTW9kZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aWNrKCk7XG5cdFx0fSwgMTAwMCk7XG5cblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdH0sIFtzZXR0aW5nc0luZm9dKTtcblxuXHRjb25zdCB0b3RhbFNlY29uZHMgPVxuXHRcdG1vZGUgPT09IFwid29ya1wiXG5cdFx0XHQ/IHNldHRpbmdzSW5mby53b3JrTWludXRlcyAqIDYwXG5cdFx0XHQ6IHNldHRpbmdzSW5mby5icmVha01pbnV0ZXMgKiA2MDtcblx0Y29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQoKHNlY29uZHNMZWZ0IC8gdG90YWxTZWNvbmRzKSAqIDEwMCk7XG5cblx0Y29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kc0xlZnQgLyA2MCk7XG5cdGxldCBzZWNvbmRzID0gc2Vjb25kc0xlZnQgJSA2MDtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cblx0XHRcdFx0ey8qIFx0XHRcdDxTZXRTZXR0aW5nc0J1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWzFyZW1dIGxlZnQtWzFyZW1dIG1kOmxlZnQtWzJyZW1dIHNlbGVjdC1ub25lIHRyYW5zaXRpb24tWzFzXSBiZy1uZXV0cmFsLTkwMC9bNjAlXSBob3ZlcjpiZy1uZXV0cmFsLTkwMC9bODAlXSBiYWNrZHJvcC1ibHVyLW1kIHAtNCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiAvPlxuXHRcdFx0XHQgKi99e1wiIFwifVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctWzkwdnddIHNtOnctWzYwdnddIG1kOnctWzUwdnddIGxnOnctWzMwdnddIHhsOnctWzM1dnddXCI+XG5cdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3NiYXJXaXRoQ2hpbGRyZW5cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLWJsYWNrL1sxNSVdIGJhY2tkcm9wLWJsdXItWzEwcHhdIHAtNCB4bDpwLTggcm91bmRlZC1mdWxsIHJlbGF0aXZlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtwZXJjZW50YWdlfVxuXHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9ezV9XG5cdFx0XHRcdFx0XHRzdHlsZXM9e2J1aWxkU3R5bGVzKHtcblx0XHRcdFx0XHRcdFx0dGV4dENvbG9yOiBcIiNmZmZcIixcblx0XHRcdFx0XHRcdFx0cGF0aENvbG9yOiBcInJnYigyMjUsIDIyNSwgMjI1KVwiLFxuXHRcdFx0XHRcdFx0XHR0cmFpbENvbG9yOiBcInJnYig1MCwgNTAsIDUwLCAwLjYpXCIsXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWzIwJV0gdy1mdWxsIHRleHQtY2VudGVyIHRleHQtWzEuMzVyZW1dIHhsOnRleHQtWzJyZW1dIGp1cmEgc2VsZWN0LW5vbmUgdGV4dC13aGl0ZSBmb250LWxpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdHttb2RlID09PSBcIndvcmtcIiA/IFwiV29ya1wiIDogXCJCcmVha1wifVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtWzRyZW1dIG1kOnRleHQtWzRyZW1dIGxnOnRleHQtWzMuNXJlbV0geGw6dGV4dC1bNi41cmVtXSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUvWzkwJV0gc2VsZWN0LW5vbmUganVyYVwiPlxuXHRcdFx0XHRcdFx0XHR7bWludXRlc306e3NlY29uZHMgPCAxMCA/IFwiMFwiIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0e3NlY29uZHN9XG5cdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0e2lzUGF1c2VkID8gKFxuXHRcdFx0XHRcdFx0XHQ8UGxheUJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldElzUGF1c2VkKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlzUGF1c2VkUmVmLmN1cnJlbnQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNlbGVjdC1ub25lIHRleHQtd2hpdGUgdGV4dC14bCB0cmFuc2l0aW9uLVsxc10gYmctbmV1dHJhbC04MDAgaG92ZXI6YmctbmV1dHJhbC03MDAvWzgwJV0gYmFja2Ryb3AtYmx1ci1tZCBweS0zIHhsOnB5LTMgcHgtNiB4bDpweC0xMCByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxQYXVzZUJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldElzUGF1c2VkKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aXNQYXVzZWRSZWYuY3VycmVudCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzZWxlY3Qtbm9uZSB0ZXh0LXdoaXRlIHRleHQteGwgdHJhbnNpdGlvbi1bMXNdIGJnLW5ldXRyYWwtODAwIGhvdmVyOmJnLW5ldXRyYWwtNzAwL1s4MCVdIGJhY2tkcm9wLWJsdXItbWQgcHktMyB4bDpweS0zIHB4LTYgeGw6cHgtMTAgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtM1wiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvQ2lyY3VsYXJQcm9ncmVzc2JhcldpdGhDaGlsZHJlbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyO1xuIl0sIm5hbWVzIjpbIlBhdXNlQnV0dG9uIiwiUGxheUJ1dHRvbiIsIlNldHRpbmdzQ29udGV4dCIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2lyY3VsYXJQcm9ncmVzc2JhcldpdGhDaGlsZHJlbiIsImJ1aWxkU3R5bGVzIiwiVGltZXIiLCJzZXR0aW5nc0luZm8iLCJpc1BhdXNlZCIsInNldElzUGF1c2VkIiwibW9kZSIsInNldE1vZGUiLCJzZWNvbmRzTGVmdCIsInNldFNlY29uZHNMZWZ0Iiwic2Vjb25kc0xlZnRSZWYiLCJpc1BhdXNlZFJlZiIsIm1vZGVSZWYiLCJ0aWNrIiwiY3VycmVudCIsInN3aXRjaE1vZGUiLCJuZXh0TW9kZSIsIm5leHRTZWNvbmRzIiwid29ya01pbnV0ZXMiLCJicmVha01pbnV0ZXMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRvdGFsU2Vjb25kcyIsInBlcmNlbnRhZ2UiLCJNYXRoIiwicm91bmQiLCJtaW51dGVzIiwiZmxvb3IiLCJzZWNvbmRzIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJzdHJva2VXaWR0aCIsInN0eWxlcyIsInRleHRDb2xvciIsInBhdGhDb2xvciIsInRyYWlsQ29sb3IiLCJzcGFuIiwiaDEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Timer.tsx\n"));

/***/ })

});