webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/SandwichGenerator.tsx":
/*!**********************************************!*\
  !*** ./src/components/SandwichGenerator.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commons_sandwich__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons/sandwich */ "./src/components/commons/sandwich.tsx");
/* harmony import */ var _commons_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons/commons */ "./src/components/commons/commons.tsx");
/* harmony import */ var _sandwichdb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sandwichdb */ "./src/components/sandwichdb.ts");
/* harmony import */ var _Tim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tim */ "./src/components/Tim/index.tsx");
/* harmony import */ var _commons_sandwichLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commons/sandwichLoading */ "./src/components/commons/sandwichLoading.tsx");
var _jsxFileName = "/Users/kelvin/Projects/sandwich/src/components/SandwichGenerator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const SandwichGenerator = () => {
  const [isTalking, setTalking] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [currentPlace, setCurrentPlace] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const setRandomPlace = () => {
    const place = _sandwichdb__WEBPACK_IMPORTED_MODULE_3__["default"][Math.floor(_sandwichdb__WEBPACK_IMPORTED_MODULE_3__["default"].length * Math.random())];
    setCurrentPlace(place);
  };

  const getSandwichPlace = () => {
    setCurrentPlace(null);
    setRandomPlace();
    setTalking(true);
    setTimeout(() => setTalking(false), 2000);
  };

  return __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["SandwichGeneratorApp"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Smelvin recommend me a sandwich place"), __jsx(_Tim__WEBPACK_IMPORTED_MODULE_4__["default"], {
    talking: isTalking,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(_commons_sandwichLoading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: getSandwichPlace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Recommend a sandwich place"), currentPlace && __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    place: currentPlace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), currentPlace && __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["GoogleMaps"], {
    name: currentPlace.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SandwichGenerator);

/***/ }),

/***/ "./src/components/commons/sandwichLoading.tsx":
/*!****************************************************!*\
  !*** ./src/components/commons/sandwichLoading.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kelvin/Projects/sandwich/src/components/commons/sandwichLoading.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SandwichLoading = () => {
  return __jsx("div", {
    id: "sandwich",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "bread-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("div", {
    className: "sauce",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    className: "tomatoes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("div", {
    className: "cheddar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("div", {
    className: "steak",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), __jsx("div", {
    className: "laitue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("div", {
    className: "bread-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("div", {
    className: "bite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "morsure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), __jsx("div", {
    className: "morsure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })), __jsx("div", {
    className: "morsure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SandwichLoading);

/***/ })

})
//# sourceMappingURL=index.js.754a8e38bcf012cbfeef.hot-update.js.map