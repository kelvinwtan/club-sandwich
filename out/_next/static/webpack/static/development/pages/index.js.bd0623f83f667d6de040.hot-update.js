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
var _jsxFileName = "/Users/kelvin/Projects/sandwich/src/components/SandwichGenerator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SandwichGenerator = () => {
  const [isTalking, setTalking] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [currentPlace, setCurrentPlace] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const getRandomSpeech = name => {
    const speeches = ["yum yum i love the sandwiches at ".concat(name), 'delicious!', 'who needs pilot when i have sandwich club', 'yum yum in my tum tum', "".concat(name, " is the shit")];
    return speeches[Math.floor(Math.random() * speeches.length)];
  };

  const setRandomPlace = () => {
    const place = _sandwichdb__WEBPACK_IMPORTED_MODULE_3__["default"][Math.floor(_sandwichdb__WEBPACK_IMPORTED_MODULE_3__["default"].length * Math.random())];
    const speech = getRandomSpeech(place.name);
    const msg = new SpeechSynthesisUtterance(speech);
    window.speechSynthesis.speak(msg);
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
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Smelvin recommend me a sandwich place"), __jsx(_Tim__WEBPACK_IMPORTED_MODULE_4__["default"], {
    talking: isTalking,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: getSandwichPlace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Recommend a sandwich place"), currentPlace && __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    place: currentPlace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), currentPlace && __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["GoogleMaps"], {
    name: currentPlace.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SandwichGenerator);

/***/ })

})
//# sourceMappingURL=index.js.bd0623f83f667d6de040.hot-update.js.map