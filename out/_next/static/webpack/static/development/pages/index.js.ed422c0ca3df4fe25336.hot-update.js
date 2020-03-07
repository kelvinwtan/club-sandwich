webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/commons/sandwich.tsx":
/*!*********************************************!*\
  !*** ./src/components/commons/sandwich.tsx ***!
  \*********************************************/
/*! exports provided: Title, SandwichGeneratorApp, GoogleMaps, Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandwichGeneratorApp", function() { return SandwichGeneratorApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMaps", function() { return GoogleMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
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
})(["font-size:2rem;color:", ";margin-bottom:2rem;margin-top:4rem;"], _variables__WEBPACK_IMPORTED_MODULE_3__["white"]);
const SandwichGeneratorApp = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "sandwich__SandwichGeneratorApp",
  componentId: "sc-1vmeft3-1"
})(["margin:0;padding:0;"]);

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
      lineNumber: 23
    },
    __self: undefined
  });
};

const Name = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "sandwich__Name",
  componentId: "sc-1vmeft3-2"
})(["color:", ";"], _variables__WEBPACK_IMPORTED_MODULE_3__["white"]);
const Score = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "sandwich__Score",
  componentId: "sc-1vmeft3-3"
})(["color:", ";margin-top:0.5rem;"], _variables__WEBPACK_IMPORTED_MODULE_3__["yellow"]);
const Location = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "sandwich__Location",
  componentId: "sc-1vmeft3-4"
})(["color:", ";margin-top:0.5rem;"], _variables__WEBPACK_IMPORTED_MODULE_3__["white"]);

const Result = props => {
  const link = "http://www.google.com/search?q=".concat(place.name.split(' ').join('+'));
  return __jsx(_commons__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_commons__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, props.place.name), __jsx(Score, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, props.place.score), __jsx(Location, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, props.place.location), __jsx(Link, {
    to: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })));
};



/***/ })

})
//# sourceMappingURL=index.js.ed422c0ca3df4fe25336.hot-update.js.map