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

/***/ "(app-pages-browser)/./app/components/Dashboard/DeleteDoneBtn.tsx":
/*!****************************************************!*\
  !*** ./app/components/Dashboard/DeleteDoneBtn.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DeleteDoneBtn = (param)=>{\n    let { tasks } = param;\n    _s();\n    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleDeleteDone = async ()=>{\n        try {\n            // Filter out the tasks with status 'Done'\n            const doneTasks = tasks.filter((task)=>task.status === \"Done\");\n            // Iterate through each done task and delete it\n            for (const task of doneTasks){\n                // Make a DELETE request to your route endpoint to delete the task\n                const response = await fetch(\"/api/tasks/\".concat(task.id), {\n                    method: \"DELETE\"\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to delete task with ID \".concat(task.id));\n                }\n            }\n            // After deleting, you may want to update the state or fetch tasks again\n            console.log(\"All done tasks deleted successfully!\");\n        } catch (error) {\n            console.error(\"Error deleting done tasks:\", error);\n        } finally{\n            router.refresh();\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Tasks deleted successfully\");\n        }\n    };\n    // Function to create shining animation\n    const shineAnimation = ()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromTo(buttonRef.current, {\n            backgroundPosition: \"0% 0%\"\n        }, {\n            backgroundPosition: \"200% 100%\",\n            duration: 1.5,\n            ease: \"none\",\n            repeat: -1\n        });\n    };\n    // Call the shining animation function when component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        shineAnimation();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        ref: buttonRef,\n        onClick: handleDeleteDone,\n        className: \"min-w-fit inline-flex h-12 ml-4 animate-shimmer items-center justify-center rounded-full border border-neutral-800 bg-[linear-gradient(110deg,#404040,45%,#e5e5e5,55%,#404040)] bg-[length:200%_100%] px-6 font-medium text-neutral-200 transition-colors\",\n        children: \"Delete Finished Tasks\"\n    }, void 0, false, {\n        fileName: \"/Users/yevheniiasimaka/Desktop/Specify/app/components/Dashboard/DeleteDoneBtn.tsx\",\n        lineNumber: 60,\n        columnNumber: 3\n    }, undefined);\n};\n_s(DeleteDoneBtn, \"NiCriJ8PSzcfeqSfQGq/Y/dvHSQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DeleteDoneBtn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteDoneBtn);\nvar _c;\n$RefreshReg$(_c, \"DeleteDoneBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EZWxldGVEb25lQnRuLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUQ7QUFDekI7QUFFb0I7QUFDUjtBQUVwQyxNQUFNTSxnQkFBZ0I7UUFBQyxFQUFFQyxLQUFLLEVBQU87O0lBQ3BDLE1BQU1DLFlBQVlOLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU1PLFNBQVNMLDBEQUFTQTtJQUV4QixNQUFNTSxtQkFBbUI7UUFDeEIsSUFBSTtZQUNILDBDQUEwQztZQUMxQyxNQUFNQyxZQUFZSixNQUFNSyxNQUFNLENBQUMsQ0FBQ0MsT0FBY0EsS0FBS0MsTUFBTSxLQUFLO1lBRTlELCtDQUErQztZQUMvQyxLQUFLLE1BQU1ELFFBQVFGLFVBQVc7Z0JBQzdCLGtFQUFrRTtnQkFDbEUsTUFBTUksV0FBVyxNQUFNQyxNQUFNLGNBQXNCLE9BQVJILEtBQUtJLEVBQUUsR0FBSTtvQkFDckRDLFFBQVE7Z0JBQ1Q7Z0JBQ0EsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7b0JBQ2pCLE1BQU0sSUFBSUMsTUFBTSxpQ0FBeUMsT0FBUlAsS0FBS0ksRUFBRTtnQkFDekQ7WUFDRDtZQUVBLHdFQUF3RTtZQUN4RUksUUFBUUMsR0FBRyxDQUFDO1FBQ2IsRUFBRSxPQUFPQyxPQUFPO1lBQ2ZGLFFBQVFFLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzdDLFNBQVU7WUFDVGQsT0FBT2UsT0FBTztZQUNkbkIsdURBQUtBLENBQUNvQixPQUFPLENBQUM7UUFDZjtJQUNEO0lBRUEsdUNBQXVDO0lBQ3ZDLE1BQU1DLGlCQUFpQjtRQUN0QnZCLDRDQUFJQSxDQUFDd0IsTUFBTSxDQUNWbkIsVUFBVW9CLE9BQU8sRUFDakI7WUFDQ0Msb0JBQW9CO1FBQ3JCLEdBQ0E7WUFDQ0Esb0JBQW9CO1lBQ3BCQyxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsUUFBUSxDQUFDO1FBQ1Y7SUFFRjtJQUVBLDREQUE0RDtJQUM1RC9CLGdEQUFTQSxDQUFDO1FBQ1R5QjtJQUNELEdBQUcsRUFBRTtJQUVMLHFCQUNDLDhEQUFDTztRQUNBQyxLQUFLMUI7UUFDTDJCLFNBQVN6QjtRQUNUMEIsV0FBVTtrQkFDVjs7Ozs7O0FBSUg7R0E1RE05Qjs7UUFFVUYsc0RBQVNBOzs7S0FGbkJFO0FBOEROLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EZWxldGVEb25lQnRuLnRzeD8zOTRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9hcHAvbGlicy9wcmlzbWFkYlwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuY29uc3QgRGVsZXRlRG9uZUJ0biA9ICh7IHRhc2tzIH06IGFueSkgPT4ge1xuXHRjb25zdCBidXR0b25SZWYgPSB1c2VSZWYobnVsbCk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGNvbnN0IGhhbmRsZURlbGV0ZURvbmUgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIEZpbHRlciBvdXQgdGhlIHRhc2tzIHdpdGggc3RhdHVzICdEb25lJ1xuXHRcdFx0Y29uc3QgZG9uZVRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrOiBhbnkpID0+IHRhc2suc3RhdHVzID09PSBcIkRvbmVcIik7XG5cblx0XHRcdC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGRvbmUgdGFzayBhbmQgZGVsZXRlIGl0XG5cdFx0XHRmb3IgKGNvbnN0IHRhc2sgb2YgZG9uZVRhc2tzKSB7XG5cdFx0XHRcdC8vIE1ha2UgYSBERUxFVEUgcmVxdWVzdCB0byB5b3VyIHJvdXRlIGVuZHBvaW50IHRvIGRlbGV0ZSB0aGUgdGFza1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Rhc2tzLyR7dGFzay5pZH1gLCB7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGRlbGV0ZSB0YXNrIHdpdGggSUQgJHt0YXNrLmlkfWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFmdGVyIGRlbGV0aW5nLCB5b3UgbWF5IHdhbnQgdG8gdXBkYXRlIHRoZSBzdGF0ZSBvciBmZXRjaCB0YXNrcyBhZ2FpblxuXHRcdFx0Y29uc29sZS5sb2coXCJBbGwgZG9uZSB0YXNrcyBkZWxldGVkIHN1Y2Nlc3NmdWxseSFcIik7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBkb25lIHRhc2tzOlwiLCBlcnJvcik7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHJvdXRlci5yZWZyZXNoKCk7XG5cdFx0XHR0b2FzdC5zdWNjZXNzKFwiVGFza3MgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBzaGluaW5nIGFuaW1hdGlvblxuXHRjb25zdCBzaGluZUFuaW1hdGlvbiA9ICgpID0+IHtcblx0XHRnc2FwLmZyb21Ubyhcblx0XHRcdGJ1dHRvblJlZi5jdXJyZW50LFxuXHRcdFx0e1xuXHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiMCUgMCVcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogXCIyMDAlIDEwMCVcIixcblx0XHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdFx0ZWFzZTogXCJub25lXCIsXG5cdFx0XHRcdHJlcGVhdDogLTEsXG5cdFx0XHR9XG5cdFx0KTtcblx0fTtcblxuXHQvLyBDYWxsIHRoZSBzaGluaW5nIGFuaW1hdGlvbiBmdW5jdGlvbiB3aGVuIGNvbXBvbmVudCBtb3VudHNcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzaGluZUFuaW1hdGlvbigpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRyZWY9e2J1dHRvblJlZn1cblx0XHRcdG9uQ2xpY2s9e2hhbmRsZURlbGV0ZURvbmV9XG5cdFx0XHRjbGFzc05hbWU9XCJtaW4tdy1maXQgaW5saW5lLWZsZXggaC0xMiBtbC00IGFuaW1hdGUtc2hpbW1lciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItbmV1dHJhbC04MDAgYmctW2xpbmVhci1ncmFkaWVudCgxMTBkZWcsIzQwNDA0MCw0NSUsI2U1ZTVlNSw1NSUsIzQwNDA0MCldIGJnLVtsZW5ndGg6MjAwJV8xMDAlXSBweC02IGZvbnQtbWVkaXVtIHRleHQtbmV1dHJhbC0yMDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuXHRcdD5cblx0XHRcdERlbGV0ZSBGaW5pc2hlZCBUYXNrc1xuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlRG9uZUJ0bjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJ1c2VSb3V0ZXIiLCJ0b2FzdCIsIkRlbGV0ZURvbmVCdG4iLCJ0YXNrcyIsImJ1dHRvblJlZiIsInJvdXRlciIsImhhbmRsZURlbGV0ZURvbmUiLCJkb25lVGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwic3RhdHVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImlkIiwibWV0aG9kIiwib2siLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlZnJlc2giLCJzdWNjZXNzIiwic2hpbmVBbmltYXRpb24iLCJmcm9tVG8iLCJjdXJyZW50IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwicmVwZWF0IiwiYnV0dG9uIiwicmVmIiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Dashboard/DeleteDoneBtn.tsx\n"));

/***/ })

});