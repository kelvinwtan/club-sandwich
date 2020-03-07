module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/SandwichGenerator.tsx":
/*!**********************************************!*\
  !*** ./src/components/SandwichGenerator.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commons_sandwich__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons/sandwich */ "./src/components/commons/sandwich.tsx");
/* harmony import */ var _commons_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons/commons */ "./src/components/commons/commons.tsx");
/* harmony import */ var _sandwichdb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sandwichdb */ "./src/components/sandwichdb.ts");
/* harmony import */ var _Tim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tim */ "./src/components/Tim/index.tsx");
var _jsxFileName = "/Users/kelvin/Projects/club-sandwich/src/components/SandwichGenerator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SandwichGenerator = () => {
  const [isTalking, setTalking] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [currentPlace, setCurrentPlace] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const getRandomSpeech = name => {
    const speeches = [`yum yum i love the sandwiches at ${name}`, 'who needs pilot when i have sandwich club', 'yum yum in my tum tum', `get in me you sandwich bastards`];
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
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Smelvin recommend me a sandwich place"), __jsx(_Tim__WEBPACK_IMPORTED_MODULE_4__["default"], {
    talking: isTalking,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx(_commons_commons__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: getSandwichPlace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Recommend a sandwich place"), currentPlace && __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["Result"], {
    place: currentPlace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), currentPlace && __jsx(_commons_sandwich__WEBPACK_IMPORTED_MODULE_1__["GoogleMaps"], {
    name: currentPlace.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SandwichGenerator);

/***/ }),

/***/ "./src/components/Tim/bottom.png":
/*!***************************************!*\
  !*** ./src/components/Tim/bottom.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/images/bottom-a6f568273f344db156f3c177ef3c0406.png");

/***/ }),

/***/ "./src/components/Tim/index.tsx":
/*!**************************************!*\
  !*** ./src/components/Tim/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_commons_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/commons/commons */ "./src/components/commons/commons.tsx");
var _jsxFileName = "/Users/kelvin/Projects/club-sandwich/src/components/Tim/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Top = __webpack_require__(/*! ./top.png */ "./src/components/Tim/top.png");

const Bottom = __webpack_require__(/*! ./bottom.png */ "./src/components/Tim/bottom.png");

const Tim = props => {
  return __jsx(_components_commons_commons__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_components_commons_commons__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("img", {
    className: props.talking && 'head-top' || '',
    src: Top.default,
    alt: "Tim",
    width: "250px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("img", {
    className: props.talking && 'head-bottom' || '',
    src: Bottom.default,
    alt: "Tim",
    width: "250px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Tim);

/***/ }),

/***/ "./src/components/Tim/top.png":
/*!************************************!*\
  !*** ./src/components/Tim/top.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/images/top-df9fccd677ec58b905bf309272f66077.png");

/***/ }),

/***/ "./src/components/commons/commons.tsx":
/*!********************************************!*\
  !*** ./src/components/commons/commons.tsx ***!
  \********************************************/
/*! exports provided: Stack, Container, Row, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./src/components/commons/variables.ts");


const Stack = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "commons__Stack",
  componentId: "lkp0bb-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "commons__Container",
  componentId: "lkp0bb-1"
})(["max-width:70rem;padding:2rem 5rem;margin:0 auto;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "commons__Button",
  componentId: "lkp0bb-2"
})(["display:inline-block;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;color:", ";background-color:", ";transition:transform 0.128s;&:hover{transform:translateY(-3px);background-color:", ";}"], _variables__WEBPACK_IMPORTED_MODULE_1__["white"], _variables__WEBPACK_IMPORTED_MODULE_1__["blue"], _variables__WEBPACK_IMPORTED_MODULE_1__["darkblue"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "commons__Row",
  componentId: "lkp0bb-3"
})(["margin:1rem 0;display:flex;"]);


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons */ "./src/components/commons/commons.tsx");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ "./src/components/commons/variables.ts");
var _jsxFileName = "/Users/kelvin/Projects/club-sandwich/src/components/commons/sandwich.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "sandwich__Title",
  componentId: "sc-1vmeft3-0"
})(["font-size:2rem;color:", ";margin-bottom:2rem;margin-top:2rem;"], _variables__WEBPACK_IMPORTED_MODULE_3__["white"]);
const SandwichGeneratorApp = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
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
    src: `https://www.google.com/maps/embed/v1/place?key=AIzaSyCc0e61vLV_PCtgOmm8eM0FUYigahvqMzU
    &q=${props.name.split(' ').join('+')}`,
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  });
};

const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "sandwich__Name",
  componentId: "sc-1vmeft3-2"
})(["color:", ";"], _variables__WEBPACK_IMPORTED_MODULE_3__["white"]);
const Score = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "sandwich__Score",
  componentId: "sc-1vmeft3-3"
})(["color:", ";margin-top:0.5rem;"], _variables__WEBPACK_IMPORTED_MODULE_3__["yellow"]);
const Location = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4.withConfig({
  displayName: "sandwich__Location",
  componentId: "sc-1vmeft3-4"
})(["color:", ";margin-top:0.5rem;"], _variables__WEBPACK_IMPORTED_MODULE_3__["white"]);
const A = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "sandwich__A",
  componentId: "sc-1vmeft3-5"
})(["margin-top:0.5rem;color:", ";"], _variables__WEBPACK_IMPORTED_MODULE_3__["blue"]);

const Result = props => {
  const link = `http://www.google.com/search?q=${props.place.name.split(' ').join('+')}`;
  return __jsx(_commons__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(_commons__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, props.place.name), __jsx(Score, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, props.place.score), __jsx(Location, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, props.place.location), __jsx(A, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Link")));
};



/***/ }),

/***/ "./src/components/commons/variables.ts":
/*!*********************************************!*\
  !*** ./src/components/commons/variables.ts ***!
  \*********************************************/
/*! exports provided: black, white, blue, darkblue, yellow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "black", function() { return black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return white; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkblue", function() { return darkblue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
const black = '#212121';
const white = '#e5e5e5';
const blue = '#2196f3';
const darkblue = '#1976d2';
const yellow = '#ffeb3b';


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

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SandwichGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SandwichGenerator */ "./src/components/SandwichGenerator.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kelvin/Projects/club-sandwich/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), __jsx(_components_SandwichGenerator__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kelvin/Projects/club-sandwich/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map