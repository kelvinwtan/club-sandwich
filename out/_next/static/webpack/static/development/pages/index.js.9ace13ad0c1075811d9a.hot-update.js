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

  const getRandomPlace = () => {
    return _sandwichdb__WEBPACK_IMPORTED_MODULE_3__["default"][Math.floor(_sandwichdb__WEBPACK_IMPORTED_MODULE_3__["default"].length * Math.random())];
  };

  return __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["SandwichGeneratorApp"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Smelvin recommend me a sandwich place"), __jsx(_Tim__WEBPACK_IMPORTED_MODULE_4__["default"], {
    talking: isTalking,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => {
      setTalking(true);
      setTimeout(() => setTalking(false), 2000);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Reccomend a sandwich place"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SandwichGenerator);

/***/ }),

/***/ "./src/components/sandwichdb.ts":
/*!**************************************!*\
  !*** ./src/components/sandwichdb.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const db = [{
  name: 'Big Bite on Pitt',
  score: 4.6,
  location: '250 Pitt Street CBD'
}, {
  name: 'Sourdough Panini Bakery Cafe',
  score: 4.1,
  location: '60 York Street CBD'
}, {
  name: 'Kafeine',
  score: 3.9,
  location: '57 York Street CBD'
}, {
  name: 'Joe’s Sandwich Bar',
  score: 3.9,
  location: '292 Kent Street CBD'
}, {
  name: 'Café Cre Asion',
  score: 4.8,
  location: '101/21 Alberta Street CBD'
}, {
  name: 'Valencia Sandwich Bar',
  score: 3.6,
  location: '297 Kent Street CBD'
}, {
  name: 'Double Brew',
  score: 4,
  location: '33 York Street CBD'
}, {
  name: 'Hole in the Wall Sandwich Factory',
  score: 4.2,
  location: '229 Macquarie Street CBD'
}, {
  name: 'Joe Black',
  score: 4.3,
  location: '27 Commonwealth Street CBD'
}, {
  name: 'Lime Espresso',
  score: 3.9,
  location: '26 Market Street CBD'
}, {
  name: 'Nook Urban Fresh Bar',
  score: 4.2,
  location: 'Shop 4 83 Clarence Street'
}, {
  name: 'Via Del Corso Pasticceria E Caffé',
  score: 4.1,
  location: 'Shop 5 Level 5'
}, {
  name: 'Big Bite on Pitt',
  score: 4.6,
  location: '250 Pitt Street CBD'
}, {
  name: 'Nook Urban Fresh Bar',
  score: 4.2,
  location: 'Shop 4 83 Clarence Street'
}, {
  name: 'North Sandwiches',
  score: 3.9,
  location: 'Shop 1A Region Food Arcade'
}, {
  name: 'Hole in the Wall Sandwich Factory',
  score: 4.2,
  location: '229 Macquarie Street CBD'
}, {
  name: 'Café Cre Asion',
  score: 4.8,
  location: '101/21 Alberta Street CBD'
}, {
  name: 'Sourdough Panini Bakery Cafe',
  score: 4.1,
  location: '60 York Street CBD'
}, {
  name: 'Kafeine',
  score: 3.9,
  location: '57 York Street CBD'
}, {
  name: 'Double Brew',
  score: 4,
  location: '33 York Street CBD'
}, {
  name: 'Encasa Rapido',
  score: 4,
  location: 'Level 5 Pitt St & Market Street CBD'
}, {
  name: 'Valencia Sandwich Bar',
  score: 3.6,
  location: '297 Kent Street CBD'
}, {
  name: 'Lime Espresso',
  score: 3.9,
  location: '26 Market Street CBD'
}, {
  name: 'Encasa Rapido',
  score: 4,
  location: 'Level 5 Pitt St & Market Street CBD'
}, {
  name: 'Joe Black',
  score: 4.3,
  location: '27 Commonwealth Street CBD'
}, {
  name: 'Via Del Corso Pasticceria E Caffé',
  score: 4.1,
  location: 'Shop 5 Level 5'
}, {
  name: 'North Sandwiches',
  score: 3.9,
  location: 'Shop 1A Region Food Arcade'
}, {
  name: 'Big Bite on Pitt',
  score: 4.6,
  location: '250 Pitt Street CBD'
}, {
  name: 'Nook Urban Fresh Bar',
  score: 4.2,
  location: 'Shop 4 83 Clarence Street'
}, {
  name: 'Hole in the Wall Sandwich Factory',
  score: 4.2,
  location: '229 Macquarie Street CBD'
}, {
  name: 'North Sandwiches',
  score: 3.9,
  location: 'Shop 1A Region Food Arcade'
}, {
  name: 'Café Cre Asion',
  score: 4.8,
  location: '101/21 Alberta Street CBD'
}, {
  name: 'Sourdough Panini Bakery Cafe',
  score: 4.1,
  location: '60 York Street CBD'
}, {
  name: 'Kafeine',
  score: 3.9,
  location: '57 York Street CBD'
}, {
  name: 'Crisp CBD',
  score: 3.9,
  location: 'The Passage 320-324 Pitt Street'
}, {
  name: 'Joe’s Sandwich Bar',
  score: 3.9,
  location: '292 Kent Street CBD'
}, {
  name: 'Valencia Sandwich Bar',
  score: 3.6,
  location: '297 Kent Street CBD'
}, {
  name: 'Double Brew',
  score: 4,
  location: '33 York Street CBD'
}, {
  name: 'Encasa Rapido',
  score: 4,
  location: 'Level 5 Pitt St & Market Street CBD'
}, {
  name: 'Joe Black',
  score: 4.3,
  location: '27 Commonwealth Street CBD'
}, {
  name: 'Crisp CBD',
  score: 3.9,
  location: 'The Passage 320-324 Pitt Street'
}, {
  name: 'Joe’s Sandwich Bar',
  score: 3.9,
  location: '292 Kent Street CBD'
}, {
  name: 'Big Bite on Pitt',
  score: 4.6,
  location: '250 Pitt Street CBD'
}, {
  name: 'Nook Urban Fresh Bar',
  score: 4.2,
  location: 'Shop 4 83 Clarence Street'
}, {
  name: 'Hole in the Wall Sandwich Factory',
  score: 4.2,
  location: '229 Macquarie Street CBD'
}, {
  name: 'Via Del Corso Pasticceria E Caffé',
  score: 4.1,
  location: 'Shop 5 Level 5'
}, {
  name: 'Café Cre Asion',
  score: 4.8,
  location: '101/21 Alberta Street CBD'
}, {
  name: 'Sourdough Panini Bakery Cafe',
  score: 4.1,
  location: '60 York Street CBD'
}, {
  name: 'Kafeine',
  score: 3.9,
  location: '57 York Street CBD'
}, {
  name: 'Crisp CBD',
  score: 3.9,
  location: 'The Passage 320-324 Pitt Street'
}, {
  name: 'Joe’s Sandwich Bar',
  score: 3.9,
  location: '292 Kent Street CBD'
}, {
  name: 'Valencia Sandwich Bar',
  score: 3.6,
  location: '297 Kent Street CBD'
}, {
  name: 'Lime Espresso',
  score: 3.9,
  location: '26 Market Street CBD'
}, {
  name: 'Lime Espresso',
  score: 3.9,
  location: '26 Market Street CBD'
}, {
  name: 'Joe Black',
  score: 4.3,
  location: '27 Commonwealth Street CBD'
}, {
  name: 'Crisp CBD',
  score: 3.9,
  location: 'The Passage 320-324 Pitt Street'
}, {
  name: 'North Sandwiches',
  score: 3.9,
  location: 'Shop 1A Region Food Arcade'
}, {
  name: 'Big Bite on Pitt',
  score: 4.6,
  location: '250 Pitt Street CBD'
}, {
  name: 'Nook Urban Fresh Bar',
  score: 4.2,
  location: 'Shop 4 83 Clarence Street'
}, {
  name: 'Hole in the Wall Sandwich Factory',
  score: 4.2,
  location: '229 Macquarie Street CBD'
}, {
  name: 'Via Del Corso Pasticceria E Caffé',
  score: 4.1,
  location: 'Shop 5 Level 5'
}, {
  name: 'Café Cre Asion',
  score: 4.8,
  location: '101/21 Alberta Street CBD'
}, {
  name: 'Sourdough Panini Bakery Cafe',
  score: 4.1,
  location: '60 York Street CBD'
}, {
  name: 'North Sandwiches',
  score: 3.9,
  location: 'Shop 1A Region Food Arcade'
}, {
  name: 'Double Brew',
  score: 4,
  location: '33 York Street CBD'
}, {
  name: 'Joe’s Sandwich Bar',
  score: 3.9,
  location: '292 Kent Street CBD'
}, {
  name: 'Valencia Sandwich Bar',
  score: 3.6,
  location: '297 Kent Street CBD'
}, {
  name: 'Lime Espresso',
  score: 3.9,
  location: '26 Market Street CBD'
}, {
  name: 'Encasa Rapido',
  score: 4,
  location: 'Level 5 Pitt St & Market Street CBD'
}, {
  name: 'Kafeine',
  score: 3.9,
  location: '57 York Street CBD'
}, {
  name: 'Crisp CBD',
  score: 3.9,
  location: 'The Passage 320-324 Pitt Street'
}, {
  name: 'Via Del Corso Pasticceria E Caffé',
  score: 4.1,
  location: 'Shop 5 Level 5'
}, {
  name: 'Nook Urban Fresh Bar',
  score: 4.2,
  location: 'Shop 4 83 Clarence Street'
}, {
  name: 'Big Bite on Pitt',
  score: 4.6,
  location: '250 Pitt Street CBD'
}, {
  name: 'Hole in the Wall Sandwich Factory',
  score: 4.2,
  location: '229 Macquarie Street CBD'
}, {
  name: 'North Sandwiches',
  score: 3.9,
  location: 'Shop 1A Region Food Arcade'
}, {
  name: 'Café Cre Asion',
  score: 4.8,
  location: '101/21 Alberta Street CBD'
}, {
  name: 'Sourdough Panini Bakery Cafe',
  score: 4.1,
  location: '60 York Street CBD'
}, {
  name: 'Kafeine',
  score: 3.9,
  location: '57 York Street CBD'
}, {
  name: 'Double Brew',
  score: 4,
  location: '33 York Street CBD'
}, {
  name: 'Joe’s Sandwich Bar',
  score: 3.9,
  location: '292 Kent Street CBD'
}, {
  name: 'Valencia Sandwich Bar',
  score: 3.6,
  location: '297 Kent Street CBD'
}, {
  name: 'Lime Espresso',
  score: 3.9,
  location: '26 Market Street CBD'
}, {
  name: 'Joe Black',
  score: 4.3,
  location: '27 Commonwealth Street CBD'
}, {
  name: 'Joe Black',
  score: 4.3,
  location: '27 Commonwealth Street CBD'
}, {
  name: 'Crisp CBD',
  score: 3.9,
  location: 'The Passage 320-324 Pitt Street'
}, {
  name: 'Via Del Corso Pasticceria E Caffé',
  score: 4.1,
  location: 'Shop 5 Level 5'
}, {
  name: 'Nook Urban Fresh Bar',
  score: 4.2,
  location: 'Shop 4 83 Clarence Street'
}, {
  name: 'Big Bite on Pitt',
  score: 4.6,
  location: '250 Pitt Street CBD'
}, {
  name: 'Double Brew',
  score: 4,
  location: '33 York Street CBD'
}, {
  name: 'North Sandwiches',
  score: 3.9,
  location: 'Shop 1A Region Food Arcade'
}, {
  name: 'Café Cre Asion',
  score: 4.8,
  location: '101/21 Alberta Street CBD'
}, {
  name: 'Sourdough Panini Bakery Cafe',
  score: 4.1,
  location: '60 York Street CBD'
}, {
  name: 'Kafeine',
  score: 3.9,
  location: '57 York Street CBD'
}, {
  name: 'Encasa Rapido',
  score: 4,
  location: 'Level 5 Pitt St & Market Street CBD'
}, {
  name: 'Joe’s Sandwich Bar',
  score: 3.9,
  location: '292 Kent Street CBD'
}, {
  name: 'Valencia Sandwich Bar',
  score: 3.6,
  location: '297 Kent Street CBD'
}, {
  name: 'Lime Espresso',
  score: 3.9,
  location: '26 Market Street CBD'
}, {
  name: 'Joe Black',
  score: 4.3,
  location: '27 Commonwealth Street CBD'
}, {
  name: 'Encasa Rapido',
  score: 4,
  location: 'Level 5 Pitt St & Market Street CBD'
}, {
  name: 'Double Brew',
  score: 4,
  location: '33 York Street CBD'
}, {
  name: 'Via Del Corso Pasticceria E Caffé',
  score: 4.1,
  location: 'Shop 5 Level 5'
}, {
  name: 'Big Bite on Pitt',
  score: 4.6,
  location: '250 Pitt Street CBD'
}, {
  name: 'Crisp CBD',
  score: 3.9,
  location: 'The Passage 320-324 Pitt Street'
}, {
  name: 'Nook Urban Fresh Bar',
  score: 4.2,
  location: 'Shop 4 83 Clarence Street'
}, {
  name: 'Encasa Rapido',
  score: 4,
  location: 'Level 5 Pitt St & Market Street CBD'
}, {
  name: 'Double Brew',
  score: 4,
  location: '33 York Street CBD'
}, {
  name: 'Kafeine',
  score: 3.9,
  location: '57 York Street CBD'
}, {
  name: 'North Sandwiches',
  score: 3.9,
  location: 'Shop 1A Region Food Arcade'
}, {
  name: 'Joe’s Sandwich Bar',
  score: 3.9,
  location: '292 Kent Street CBD'
}, {
  name: 'Hole in the Wall Sandwich Factory',
  score: 4.2,
  location: '229 Macquarie Street CBD'
}, {
  name: 'Valencia Sandwich Bar',
  score: 3.6,
  location: '297 Kent Street CBD'
}, {
  name: 'Encasa Rapido',
  score: 4,
  location: 'Level 5 Pitt St & Market Street CBD'
}, {
  name: 'Hole in the Wall Sandwich Factory',
  score: 4.2,
  location: '229 Macquarie Street CBD'
}, {
  name: 'Café Cre Asion',
  score: 4.8,
  location: '101/21 Alberta Street CBD'
}, {
  name: 'Crisp CBD',
  score: 3.9,
  location: 'The Passage 320-324 Pitt Street'
}, {
  name: 'Via Del Corso Pasticceria E Caffé',
  score: 4.1,
  location: 'Shop 5 Level 5'
}, {
  name: 'Big Bite on Pitt',
  score: 4.6,
  location: '250 Pitt Street CBD'
}, {
  name: 'Nook Urban Fresh Bar',
  score: 4.2,
  location: 'Shop 4 83 Clarence Street'
}, {
  name: 'Hole in the Wall Sandwich Factory',
  score: 4.2,
  location: '229 Macquarie Street CBD'
}, {
  name: 'North Sandwiches',
  score: 3.9,
  location: 'Shop 1A Region Food Arcade'
}, {
  name: 'Café Cre Asion',
  score: 4.8,
  location: '101/21 Alberta Street CBD'
}, {
  name: 'Sourdough Panini Bakery Cafe',
  score: 4.1,
  location: '60 York Street CBD'
}, {
  name: 'Kafeine',
  score: 3.9,
  location: '57 York Street CBD'
}, {
  name: 'Joe Black',
  score: 4.3,
  location: '27 Commonwealth Street CBD'
}, {
  name: 'Joe’s Sandwich Bar',
  score: 3.9,
  location: '292 Kent Street CBD'
}, {
  name: 'Valencia Sandwich Bar',
  score: 3.6,
  location: '297 Kent Street CBD'
}, {
  name: 'Sourdough Panini Bakery Cafe',
  score: 4.1,
  location: '60 York Street CBD'
}, {
  name: 'Encasa Rapido',
  score: 4,
  location: 'Level 5 Pitt St & Market Street CBD'
}, {
  name: 'Double Brew',
  score: 4,
  location: '33 York Street CBD'
}, {
  name: 'Crisp CBD',
  score: 3.9,
  location: 'The Passage 320-324 Pitt Street'
}, {
  name: 'Via Del Corso Pasticceria E Caffé',
  score: 4.1,
  location: 'Shop 5 Level 5'
}, {
  name: 'Lime Espresso',
  score: 3.9,
  location: '26 Market Street CBD'
}, {
  name: 'Lime Espresso',
  score: 3.9,
  location: '26 Market Street CBD'
}, {
  name: 'Joe Black',
  score: 4.3,
  location: '27 Commonwealth Street CBD'
}];
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ })

})
//# sourceMappingURL=index.js.9ace13ad0c1075811d9a.hot-update.js.map