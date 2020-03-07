webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/commons/commons.tsx":
/*!********************************************!*\
  !*** ./src/components/commons/commons.tsx ***!
  \********************************************/
/*! exports provided: Stack, Container, Button, GoogleMaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMaps", function() { return GoogleMaps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./src/components/commons/variables.ts");
var _jsxFileName = "/Users/kelvin/Projects/sandwich/src/components/commons/commons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Stack = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "commons__Stack",
  componentId: "lkp0bb-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "commons__Container",
  componentId: "lkp0bb-1"
})(["max-width:70rem;padding:0 5rem;margin:0 auto;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "commons__Button",
  componentId: "lkp0bb-2"
})(["display:inline-block;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;color:", ";background-color:", ";transition:transform 0.128s;&:hover{transform:translateY(-3px);background-color:", ";}"], _variables__WEBPACK_IMPORTED_MODULE_2__["white"], _variables__WEBPACK_IMPORTED_MODULE_2__["blue"], _variables__WEBPACK_IMPORTED_MODULE_2__["darkblue"]);

const GoogleMaps = props => {
  return __jsx("iframe", {
    title: "map",
    width: "100%",
    height: "450",
    frameBorder: "0",
    style: {
      border: 0
    },
    src: "https://www.google.com/maps/embed/v1/place?key=AIzaSyCc0e61vLV_PCtgOmm8eM0FUYigahvqMzU\n    &q=".concat(props.place.name.split(' ').join('+')),
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  });
};



/***/ })

})
//# sourceMappingURL=index.js.cae119b3ceee343a393f.hot-update.js.map