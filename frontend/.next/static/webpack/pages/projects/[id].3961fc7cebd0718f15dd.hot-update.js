/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/[id]",{

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\n\nvar _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n\nvar _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n\nvar _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n\nvar _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n\nvar _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\"));\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nvar statusCodes = {\n  400: 'Bad Request',\n  404: 'This page could not be found',\n  405: 'Method Not Allowed',\n  500: 'Internal Server Error'\n};\n\nfunction _getInitialProps(_ref) {\n  var res = _ref.res,\n      err = _ref.err;\n  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode: statusCode\n  };\n}\n\nvar Error1 = /*#__PURE__*/function (_react$default$Compon) {\n  _inherits(Error1, _react$default$Compon);\n\n  var _super = _createSuper(Error1);\n\n  function Error1() {\n    _classCallCheck(this, Error1);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Error1, [{\n    key: \"render\",\n    value: function render() {\n      var statusCode = this.props.statusCode;\n      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';\n      return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: styles.error\n      }, /*#__PURE__*/_react[\"default\"].createElement(_head[\"default\"], null, /*#__PURE__*/_react[\"default\"].createElement(\"title\", null, statusCode ? \"\".concat(statusCode, \": \").concat(title) : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, /*#__PURE__*/_react[\"default\"].createElement(\"style\", {\n        dangerouslySetInnerHTML: {\n          __html: 'body { margin: 0 }'\n        }\n      }), statusCode ? /*#__PURE__*/_react[\"default\"].createElement(\"h1\", {\n        style: styles.h1\n      }, statusCode) : null, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: styles.desc\n      }, /*#__PURE__*/_react[\"default\"].createElement(\"h2\", {\n        style: styles.h2\n      }, this.props.title || statusCode ? title : /*#__PURE__*/_react[\"default\"].createElement(_react[\"default\"].Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n  }]);\n\n  return Error1;\n}(_react[\"default\"].Component);\n\nError1.displayName = 'ErrorPage';\nError1.getInitialProps = _getInitialProps;\nError1.origGetInitialProps = _getInitialProps;\nexports.default = Error1;\nvar styles = {\n  error: {\n    color: '#000',\n    background: '#fff',\n    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n    height: '100vh',\n    textAlign: 'center',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  desc: {\n    display: 'inline-block',\n    textAlign: 'left',\n    lineHeight: '49px',\n    height: '49px',\n    verticalAlign: 'middle'\n  },\n  h1: {\n    display: 'inline-block',\n    borderRight: '1px solid rgba(0, 0, 0,.3)',\n    margin: 0,\n    marginRight: '20px',\n    padding: '10px 23px 10px 0',\n    fontSize: '24px',\n    fontWeight: 500,\n    verticalAlign: 'top'\n  },\n  h2: {\n    fontSize: '14px',\n    fontWeight: 'normal',\n    lineHeight: 'inherit',\n    margin: 0,\n    padding: 0\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDYkEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlFLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxLQUFLLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHVFQUFELENBQVIsQ0FBbEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NHLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQyxlQUFTQTtBQUR3QixHQUFyQztBQUdIOztBQUNELElBQU1FLFdBQVcsR0FBRztBQUNoQixPQUFLLGFBRFc7QUFFaEIsT0FBSyw4QkFGVztBQUdoQixPQUFLLG9CQUhXO0FBSWhCLE9BQUs7QUFKVyxDQUFwQjs7QUFNQSxTQUFTQyxnQkFBVCxPQUEwQztBQUFBLE1BQWRDLEdBQWMsUUFBZEEsR0FBYztBQUFBLE1BQVJDLEdBQVEsUUFBUkEsR0FBUTtBQUN0QyxNQUFNQyxVQUFVLEdBQUdGLEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxVQUFYLEdBQXdCRixHQUFHLENBQUNFLFVBQTVCLEdBQXlDRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsVUFBUCxHQUFvQixHQUFuRjtBQUNBLFNBQU87QUFDSEEsSUFBQUEsVUFBVSxFQUFWQTtBQURHLEdBQVA7QUFHSDs7SUFDS0M7Ozs7Ozs7Ozs7Ozs7V0FDRixrQkFBUztBQUNMLFVBQVFELFVBQVIsR0FBd0IsS0FBS0UsS0FBN0IsQ0FBUUYsVUFBUjtBQUNBLFVBQU1HLEtBQUssR0FBRyxLQUFLRCxLQUFMLENBQVdDLEtBQVgsSUFBb0JQLFdBQVcsQ0FB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SUFBQUEsUUFBUSxFQUFFLE1BTlY7QUFPQUMsSUFBQUEsVUFBVSxFQUFFLEdBUFo7QUFRQU4sSUFBQUEsYUFBYSxFQUFFO0FBUmYsR0FuQk87QUE2QlhoQixFQUFBQSxFQUFFLEVBQUU7QUFDQXFCLElBQUFBLFFBQVEsRUFBRSxNQURWO0FBRUFDLElBQUFBLFVBQVUsRUFBRSxRQUZaO0FBR0FQLElBQUFBLFVBQVUsRUFBRSxTQUhaO0FBSUFHLElBQUFBLE1BQU0sRUFBRSxDQUpSO0FBS0FFLElBQUFBLE9BQU8sRUFBRTtBQUxUO0FBN0JPLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/ZmRhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xufTtcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cbmNsYXNzIEVycm9yMSBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmVycm9yXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCBzdGF0dXNDb2RlID8gYCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YCA6ICdBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkJykpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6ICdib2R5IHsgbWFyZ2luOiAwIH0nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMVxuICAgICAgICB9LCBzdGF0dXNDb2RlKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMlxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKSk7XG4gICAgfVxufVxuRXJyb3IxLmRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSc7XG5FcnJvcjEuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbkVycm9yMS5vcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yMTtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBlcnJvcjoge1xuICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuICAgIGRlc2M6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIGhlaWdodDogJzQ5cHgnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsIkVycm9yMSIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDEiLCJkZXNjIiwiaDIiLCJGcmFnbWVudCIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "./pages/projects/[id].tsx":
/*!*********************************!*\
  !*** ./pages/projects/[id].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _Users_mustard_Code_lotysz_com_next_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_mustard_Code_lotysz_com_next_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mustard_Code_lotysz_com_next_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_mustard_Code_lotysz_com_next_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mustard/_Code/lotysz-com-next/frontend/pages/projects/[id].tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\nvar Post = /*#__PURE__*/function () {\n  var _s = $RefreshSig$();\n\n  var _ref2 = (0,_Users_mustard_Code_lotysz_com_next_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(_s( /*#__PURE__*/_Users_mustard_Code_lotysz_com_next_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref) {\n    var project, router;\n    return _Users_mustard_Code_lotysz_com_next_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _s();\n\n            project = _ref.project;\n            router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n            if (!(!router.isFallback && !(project !== null && project !== void 0 && project.id))) {\n              _context.next = 5;\n              break;\n            }\n\n            return _context.abrupt(\"return\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {\n              statusCode: 404\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 10,\n              columnNumber: 12\n            }, _this));\n\n          case 5:\n            return _context.abrupt(\"return\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n              children: router.isFallback ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n                children: \"Loading\\u2026\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 15,\n                columnNumber: 9\n              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"article\", {\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n                      children: [project.title, \" | Next.js Blog Example with\"]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 20,\n                      columnNumber: 15\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 19,\n                    columnNumber: 13\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"header\", {\n                    children: project.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 22,\n                    columnNumber: 13\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n                    children: project.description\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 23,\n                    columnNumber: 13\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 18,\n                  columnNumber: 11\n                }, _this)\n              }, void 0, false)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 13,\n              columnNumber: 5\n            }, _this));\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }), \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n    return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n  }));\n\n  return function Post(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0EsSUFBTUksSUFBSTtBQUFBOztBQUFBLDZTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFTQyxZQUFBQSxPQUFULFFBQVNBLE9BQVQ7QUFDTEMsWUFBQUEsTUFESyxHQUNJTixzREFBUyxFQURiOztBQUFBLGtCQUVQLENBQUNNLE1BQU0sQ0FBQ0MsVUFBUixJQUFzQixFQUFDRixPQUFELGFBQUNBLE9BQUQsZUFBQ0EsT0FBTyxDQUFFRyxFQUFWLENBRmY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMERBR0YsOERBQUMsbURBQUQ7QUFBVyx3QkFBVSxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEU7O0FBQUE7QUFBQSwwREFNVCw4REFBQyx1REFBRDtBQUFBLHdCQUNHRixNQUFNLENBQUNDLFVBQVAsZ0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsZ0JBR0M7QUFBQSx1Q0FDRTtBQUFBLDBDQUNFLDhEQUFDLGtEQUFEO0FBQUEsMkNBQ0U7QUFBQSxpQ0FBUUYsT0FBTyxDQUFDSSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBSUU7QUFBQSw4QkFBU0osT0FBTyxDQUFDSTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGLGVBS0U7QUFBQSw4QkFBSUosT0FBTyxDQUFDSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5TOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7QUFBQSxZQUNPVixrREFEUDtBQUFBOztBQUFBLGtCQUFKSSxJQUFJO0FBQUE7QUFBQTtBQUFBLEdBQVY7O0tBQU1BOztBQXlETiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy9baWRdLnRzeD9kZTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByb2plY3RQcm9wcyB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5jb25zdCBQb3N0ID0gYXN5bmMgKHsgcHJvamVjdCB9OiB7IHByb2plY3Q6IFByb2plY3RQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwcm9qZWN0Py5pZCkge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge3JvdXRlci5pc0ZhbGxiYWNrID8gKFxuICAgICAgICA8c3Bhbj5Mb2FkaW5n4oCmPC9zcGFuPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICA8dGl0bGU+e3Byb2plY3QudGl0bGV9IHwgTmV4dC5qcyBCbG9nIEV4YW1wbGUgd2l0aDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aGVhZGVyPntwcm9qZWN0LnRpdGxlfTwvaGVhZGVyPlxuICAgICAgICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH06IGFueSkge1xuICAvLyBwYXJhbXMgY29udGFpbnMgdGhlIHBvc3QgYGlkYC5cbiAgLy8gSWYgdGhlIHJvdXRlIGlzIGxpa2UgL3Bvc3RzLzEsIHRoZW4gcGFyYW1zLmlkIGlzIDFcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wcm9qZWN0cy8ke3BhcmFtcy5pZH1gKTtcbiAgY29uc3QgcHJvamVjdCA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHByb2plY3QgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wcm9qZWN0c2ApO1xuICBjb25zdCBwcm9qZWN0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3RzOiBhbnkpID0+ICh7XG4gICAgcGFyYW1zOiB7IGlkOiBwcm9qZWN0cy5pZCB9LFxuICB9KSk7XG5cbiAgLy8gV2UnbGwgcHJlLXJlbmRlciBvbmx5IHRoZXNlIHBhdGhzIGF0IGJ1aWxkIHRpbWUuXG4gIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzPy5tYXAoKHByb2plY3Q6IGFueSkgPT4gYHByb2plY3RzLyR7cHJvamVjdC5pZH1gKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRXJyb3JQYWdlIiwiTGF5b3V0IiwiSGVhZCIsIlBvc3QiLCJwcm9qZWN0Iiwicm91dGVyIiwiaXNGYWxsYmFjayIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[id].tsx\n");

/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_error */ \"./node_modules/next/dist/pages/_error.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSwyR0FBK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZXJyb3IuanM/N2E4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZXJyb3InKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/error.js\n");

/***/ })

});