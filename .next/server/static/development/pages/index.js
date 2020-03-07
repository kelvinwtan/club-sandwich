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

/***/ "./src/components/Tim/bottom.webp":
/*!****************************************!*\
  !*** ./src/components/Tim/bottom.webp ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/webp;base64,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");

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



const TopWebp = __webpack_require__(/*! ./top.webp */ "./src/components/Tim/top.webp");

const TopPng = __webpack_require__(/*! ./top.png */ "./src/components/Tim/top.png");

const BottomWebp = __webpack_require__(/*! ./bottom.webp */ "./src/components/Tim/bottom.webp");

const BottomPng = __webpack_require__(/*! ./bottom.png */ "./src/components/Tim/bottom.png");

const Tim = props => {
  return __jsx(_components_commons_commons__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_components_commons_commons__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("source", {
    srcSet: TopWebp.default,
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("source", {
    srcSet: TopPng.default,
    type: "image/png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("img", {
    className: props.talking && 'head-top' || '',
    src: TopPng.default,
    alt: "Tim",
    width: "250px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })), __jsx("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("source", {
    srcSet: BottomWebp.default,
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("source", {
    srcSet: BottomPng.default,
    type: "image/png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("img", {
    className: props.talking && 'head-bottom' || '',
    src: BottomPng.default,
    alt: "Tim",
    width: "250px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))));
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

/***/ "./src/components/Tim/top.webp":
/*!*************************************!*\
  !*** ./src/components/Tim/top.webp ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/images/top-d7b11dd162fbacb4132d062c63d0cdf2.webp");

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
})(["max-width:70rem;padding:2remlocalh 5rem;margin:0 auto;"]);
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
})(["font-size:2rem;color:", ";margin-bottom:2rem;margin-top:2rem;text-align:center;"], _variables__WEBPACK_IMPORTED_MODULE_3__["white"]);
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
      lineNumber: 24
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
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_commons__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, props.place.name), __jsx(Score, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, props.place.score), __jsx(Location, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, props.place.location), __jsx(A, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SandwichGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/SandwichGenerator */ "./src/components/SandwichGenerator.tsx");
var _jsxFileName = "/Users/kelvin/Projects/club-sandwich/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Sandwich Club")), __jsx(_components_SandwichGenerator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
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