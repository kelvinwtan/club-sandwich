webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/commons/sandwich.tsx":
/*!*********************************************!*\
  !*** ./src/components/commons/sandwich.tsx ***!
  \*********************************************/
/*! exports provided: Title, SandwichGeneratorApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandwichGeneratorApp", function() { return SandwichGeneratorApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons */ "./src/components/commons/commons.tsx");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ "./src/components/commons/variables.ts");
var _jsxFileName = "/Users/kelvin/Projects/sandwich/src/components/commons/sandwich.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "sandwich__Title",
  componentId: "sc-1vmeft3-0"
})(["font-size:2rem;color:", ";margin-bottom:2rem;"], _variables__WEBPACK_IMPORTED_MODULE_3__["white"]);
const SandwichGeneratorApp = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "sandwich__SandwichGeneratorApp",
  componentId: "sc-1vmeft3-1"
})(["margin:0;padding:0;padding-top:5rem;background:", ";"], _variables__WEBPACK_IMPORTED_MODULE_3__["black"]);

const GoogleMaps = props => {
  return __jsx("iframe", {
    title: "map",
    width: "100%",
    height: "450",
    frameBorder: "0",
    style: {
      border: 0
    },
    src: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCc0e61vLV_PCtgOmm8eM0FUYigahvqMzU\n    &q=".concat(props.name.split(' ').join('+')),
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  });
};

const Result = props => {
  return __jsx(_commons__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, props.place.name), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, props.place.score), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, props.place.location));
};



/***/ })

})
//# sourceMappingURL=index.js.344146adaaa42627af26.hot-update.js.map