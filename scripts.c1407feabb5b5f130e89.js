/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navbar/Navbar */ "./src/components/Navbar/Navbar.js");
/* harmony import */ var _PageOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageOne */ "./src/PageOne.js");
 // import { BrowserRouter, Route, Routes } from "react-router-dom";





var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageOne__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/PageOne.js":
/*!************************!*\
  !*** ./src/PageOne.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/About/About */ "./src/components/About/About.js");
/* harmony import */ var _components_Price_Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Price/Price */ "./src/components/Price/Price.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Partners_Partners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Partners/Partners */ "./src/components/Partners/Partners.js");
/* harmony import */ var _components_Objects_Objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Objects/Objects */ "./src/components/Objects/Objects.js");





 // import Scroll from './components/Partners/Scroll';



var PageOne = function PageOne() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_About_About__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Price_Price__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Partners_Partners__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Objects_Objects__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageOne);

/***/ }),

/***/ "./src/components/About/About.js":
/*!***************************************!*\
  !*** ./src/components/About/About.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text/Title */ "./src/components/Text/Title.js");
/* harmony import */ var _Text_SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text/SubTitle */ "./src/components/Text/SubTitle.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.scss */ "./src/components/About/about.scss");






var About = function About() {
  var animate = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      // y: 10,
      transition: {
        type: 'scale',
        stiffness: 300,
        damping: 140
      }
    },
    show: {
      scale: 1,
      opacity: 1,
      // y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    id: "about",
    className: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "show" // viewport={{amout: 0.1, once: true,}}
    ,
    className: "about__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    about: "\u041F\u0420\u041E \u041D\u0410\u0421"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "show" // viewport={{amout: 0.1, once: true,}}
    ,
    className: "about__subtitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text_SubTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    about: "\u041C\u0438 - \u0422\u041E\u0412 \xAB\u0411\u041A \u0421.\u0410.\u0412.\u0406.\xBB \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454\u043C\u043E \u0441\u0432\u043E\u0456\u0308 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 \u0443 \u0441\u0444\u0435\u0440\u0456 \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u0430. \u041C\u0430\u0454\u043C\u043E \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0432 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443 \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E-\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0438\u0445 \u0440\u043E\u0431\u0456\u0442 \u0442\u0430 \u0448\u0442\u0430\u0442 \u0434\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u0438\u0445 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442\u0456\u0432. \u0417\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u043C\u043E \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0440\u043E\u0431\u0456\u0442 \u0432 \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u0442\u0435\u0440\u043C\u0456\u043D\u0438. \u0414\u0430\u0454\u043C\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u044E \u043D\u0430 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438. \u0414\u043E\u043F\u043E\u043C\u043E\u0436\u0435\u043C\u043E \u043E\u0431\u0440\u0430\u0442\u0438 \u043D\u0430\u0438\u0306\u0431\u0456\u043B\u044C\u0448 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0435 \u0442\u0430 \u0435\u043A\u043E\u043D\u043E\u043C\u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F. \u0417\u0430\u0432\u0434\u044F\u043A\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u044C\u043A\u0438\u043C \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D\u0430\u043C \u0456\u0437 \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430\u043C\u0438, \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u043C\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0443 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432 \u043F\u043E \u0446\u0456\u043D\u0430\u0445 \u0456\u0437 \u0441\u0443\u0442\u0442\u0454\u0432\u043E\u044E \u0437\u043D\u0438\u0436\u043A\u043E\u044E."
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/components/Accordion/Accordion.js":
/*!***********************************************!*\
  !*** ./src/components/Accordion/Accordion.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _accordionCopy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionCopy.scss */ "./src/components/Accordion/accordionCopy.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Accordion = function Accordion(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 240
      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        delay: 0.1
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    variants: navVariants,
    initial: "hidden",
    whileInView: "show" // viewport={{amout: 0.1, once: true,}}
    ,
    className: "accordion ".concat(active ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accordion__btn",
    onClick: function onClick() {
      return setActive(!active);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accordion__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiChevronDown, {
    className: "bx bxs-chevron-down"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "accordion__content"
  }, props.text1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--li"
  }, props.text1), props.cursive1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--cursive"
  }, props.cursive1), props.cursive2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--cursive"
  }, props.cursive2), props.cursive3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--cursive"
  }, props.cursive3), props.text2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--li"
  }, props.text2), props.text3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--li"
  }, props.text3), props.text4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--li"
  }, props.text4), props.cursive4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--cursive"
  }, props.cursive4), props.cursive5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--cursive"
  }, props.cursive5), props.text5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--li"
  }, props.text5), props.text6 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--li"
  }, props.text6), props.text7 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--li"
  }, props.text7), props.text8 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--li"
  }, props.text8), props.last && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "accordion__content--last"
  }, props.last))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text/Title */ "./src/components/Text/Title.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.scss */ "./src/components/Footer/footer.scss");








var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "contacts",
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Text_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "footer__title",
    footer: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__tell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "footer__tell--namb",
    href: "tel: +38068-244-80-79"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsTelephoneForwardFill, {
    className: "phone__icon"
  }), "\u0442\u0435\u043B: +38068-244-80-79")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__mail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "footer__mail--text",
    href: "mailto: bksavi22@gmail.com "
  }, "e-mail: bksavi22@gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer__icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://t.me/bc_savi",
    target: "_blank",
    className: "footer__icons--telega"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTelegram, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.facebook.com/people/BC-Savi/pfbid025BM6yf5eytHQSKZ7TjtnNy9HcQA4fjYkBUjDYMBCAtyLXZHgtJpQzW4uoVWSFvG8l/",
    target: "_blank",
    className: "footer__icons--facebook"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsFacebook, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "viber://chat?number=+380682448079",
    target: "_blank",
    className: "footer__icons--viber"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaViber, null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _Header_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/header.scss */ "./src/components/Header/header.scss");





var Header = function Header() {
  var navVariantsY = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140
      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.1
      }
    }
  };

  var _useViewportScroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useViewportScroll)(),
      scrollYProgress = _useViewportScroll.scrollYProgress;

  var scale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [1, 0], [0, 1]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "home",
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
    bgImage: "../../img/header-mob1.jpg",
    bgClassName: "parallax",
    bgImageAlt: "the cat",
    strength: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    variants: navVariantsY,
    initial: "hidden",
    whileInView: "show",
    style: {
      scale: scale
    },
    className: "header__img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    className: "header__img--logo"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Navbar/Menu.js":
/*!***************************************!*\
  !*** ./src/components/Navbar/Menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.scss */ "./src/components/Navbar/menu.scss");







var Menu = function Menu(_ref) {
  var items = _ref.items,
      active = _ref.active,
      setActive = _ref.setActive,
      scrollY = _ref.scrollY;
  var yInput = [660, 700];
  var background = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, yInput, ["transparent", "#195F85"]);
  var boxShadow = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, yInput, ['none', '0px 4px 4px rgba(0, 0, 0, 0.25)']);

  var click = function click() {
    return setActive(!active);
  };

  var close = function close() {
    return setActive(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: "menu ".concat(active ? 'active menu__view' : ''),
    onClick: click
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    style: {
      background: background,
      boxShadow: boxShadow
    },
    className: "blur"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
    className: "menu__content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, null, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {
      key: item.id,
      className: "menu__content--li"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: item.to,
      href: item.href,
      spy: false,
      smooth: true,
      offset: -80,
      duration: 500,
      className: "menu__content--a",
      onClick: close
    }, item.value));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu__content--li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "menu__content--a",
    href: "tel: +38068-244-80-79"
  }, " +38068-244-80-79")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/components/Navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.scss */ "./src/components/Navbar/navbar.scss");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/components/Navbar/Menu.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-scroll.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-transform.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Navbar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuActive = _useState2[0],
      setMenuActive = _useState2[1];

  var items = [{
    id: 1,
    value: 'про нас',
    to: 'about'
  }, {
    id: 2,
    value: 'послуги',
    to: 'price'
  }, {
    id: 3,
    value: 'партнери',
    to: 'partners'
  }, {
    id: 4,
    value: 'наші обʼєкти',
    to: 'objects'
  }, {
    id: 5,
    value: 'контакти',
    to: 'contacts'
  }];

  var _useScroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)(0),
      scrollY = _useScroll.scrollY;

  var y = [600, 660];
  var background = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollY, y, ["transparent", "#195F85"]);

  var _useScroll2 = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)(0),
      scrollYProgress = _useScroll2.scrollYProgress;

  var scale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollY, y, [0, 1]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "home",
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    className: "nav__link",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
    style: {
      scale: scale
    },
    className: "nav__link--logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav__link--logo2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "nav__burger",
    onClick: function onClick() {
      return setMenuActive(!menuActive);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: menuActive ? 'nav__burger--btn active' : 'nav__burger--btn'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrollY: scrollY,
    active: menuActive,
    setActive: setMenuActive,
    items: items
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/Objects/Card/Card.js":
/*!*********************************************!*\
  !*** ./src/components/Objects/Card/Card.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MCard": () => (/* binding */ MCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listing */ "./src/components/Objects/Card/Listing.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overlay */ "./src/components/Objects/Card/Overlay.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./src/components/Objects/Card/Modal.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Card = function Card(_ref) {
  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var openModal = function openModal() {
    setOpen(true);
  };

  var closeModal = function closeModal() {
    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Listing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    open: openModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, null, open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Overlay__WEBPACK_IMPORTED_MODULE_2__["default"], {
    close: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    close: closeModal
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);
var MCard = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion)(Card);

/***/ }),

/***/ "./src/components/Objects/Card/Feature.js":
/*!************************************************!*\
  !*** ./src/components/Objects/Card/Feature.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Feature_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feature.scss */ "./src/components/Objects/Card/Feature.scss");




var Feature = function Feature(_ref) {
  var iconName = _ref.iconName,
      iconLabel = _ref.iconLabel;
  var Icon = react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[iconName];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "feature"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "feature__circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
    className: "feature__icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "feature__label"
  }, iconLabel));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feature);

/***/ }),

/***/ "./src/components/Objects/Card/Listing.js":
/*!************************************************!*\
  !*** ./src/components/Objects/Card/Listing.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Listing_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listing.scss */ "./src/components/Objects/Card/Listing.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");




var Listing = function Listing(_ref) {
  var data = _ref.data,
      open = _ref.open;
  var imageUrl = data.imageUrl,
      address = data.address;
  var animate = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: function visible(custom) {
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.1
        }
      };
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    variants: animate,
    initial: "hidden",
    whileInView: "visible",
    className: "listing",
    onClick: open,
    whileHover: {
      scale: 1.1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "listing__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "listing__image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "listing__image",
    alt: "real estate mansion",
    src: imageUrl
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "listing__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "listing__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "listing__price"
  }, address)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Listing);

/***/ }),

/***/ "./src/components/Objects/Card/Modal.js":
/*!**********************************************!*\
  !*** ./src/components/Objects/Card/Modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.scss */ "./src/components/Objects/Card/Modal.scss");
/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feature */ "./src/components/Objects/Card/Feature.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");









var Modal = function Modal(_ref) {
  var data = _ref.data,
      close = _ref.close;
  var imageUrl = data.imageUrl,
      imageUrl1 = data.imageUrl1,
      imageUrl2 = data.imageUrl2,
      imageUrl3 = data.imageUrl3,
      address = data.address;
  var modalVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2
      }
    },
    closed: {
      opacity: 0
    }
  };
  var imageVariants = {
    open: {
      opacity: 1,
      y: "0vh"
    },
    closed: {
      opacity: 0,
      y: "-10vh"
    }
  };
  var modalInfoVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    closed: {
      opacity: 0
    }
  };
  var modalRowVariants = {
    open: {
      opacity: 1,
      x: 0
    },
    closed: {
      opacity: 0,
      x: "10%"
    }
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
    className: "modal",
    variants: modalVariants,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
    className: "modal__image",
    alt: "real estate mansion",
    variants: imageVariants
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_slick__WEBPACK_IMPORTED_MODULE_3__["default"], settings, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imageUrl
  }), imageUrl1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imageUrl1
  }), imageUrl2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imageUrl2
  }), imageUrl3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imageUrl3
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
    className: "modal__info",
    variants: modalInfoVariants
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
    className: "modal__row",
    variants: modalRowVariants
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "modal__price"
  }, address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.button, {
    className: "modal__close-wrapper",
    whileHover: {
      scale: 1.2
    },
    onClick: close
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoCloseCircleOutline, {
    className: "modal__close-icon"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/components/Objects/Card/Overlay.js":
/*!************************************************!*\
  !*** ./src/components/Objects/Card/Overlay.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Overlay_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overlay.scss */ "./src/components/Objects/Card/Overlay.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");




var Overlay = function Overlay(_ref) {
  var children = _ref.children,
      close = _ref.close;
  var variants = {
    open: {
      backgroundColor: "rgba(0,0,0,0.6)"
    },
    closed: {
      backgroundColor: "rgba(0,0,0,0)"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
    className: "overlay",
    onClick: close,
    variants: variants,
    initial: "closed",
    animate: "open",
    exit: "closed",
    key: "overlay"
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overlay);

/***/ }),

/***/ "./src/components/Objects/Card/index.js":
/*!**********************************************!*\
  !*** ./src/components/Objects/Card/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/components/Objects/Card/Card.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Card__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Objects/Objects.js":
/*!*******************************************!*\
  !*** ./src/components/Objects/Objects.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _objects_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.scss */ "./src/components/Objects/objects.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./src/components/Objects/Card/index.js");
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/data */ "./src/constants/data.js");
/* harmony import */ var _Text_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Text/Title */ "./src/components/Text/Title.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");







function Objects() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    id: "objects",
    className: "objects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    className: "objects__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Text_Title__WEBPACK_IMPORTED_MODULE_4__.Title, {
    objects: "\u041D\u0410\u0428\u0406 \u041E\u0411\u02BC\u0404\u041A\u0422\u0418"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    className: "properties"
  }, _constants_data__WEBPACK_IMPORTED_MODULE_3__.properties.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: item,
      key: item.id
    });
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Objects);

/***/ }),

/***/ "./src/components/Partners/Partners.js":
/*!*********************************************!*\
  !*** ./src/components/Partners/Partners.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _partners_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partners.scss */ "./src/components/Partners/partners.scss");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");






var Partners = function Partners() {
  var settings = {
    className: "slider variable-width",
    variableWidth: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  var partners = [{
    id: 1,
    url: '../../img/suppliers/abu.svg'
  }, {
    id: 2,
    url: '../../img/suppliers/agent-bud.svg'
  }, {
    id: 3,
    url: '../../img/suppliers/bi1.svg'
  }, {
    id: 4,
    url: '../../img/suppliers/first-home.svg'
  }, {
    id: 5,
    url: '../../img/suppliers/gildia.svg'
  }, {
    id: 6,
    url: '../../img/suppliers/gold.svg'
  }, {
    id: 7,
    url: '../../img/suppliers/liber.svg'
  }, {
    id: 8,
    url: '../../img/suppliers/metalvis.svg'
  }, {
    id: 9,
    url: '../../img/suppliers/monolit.svg'
  }, {
    id: 10,
    url: '../../img/suppliers/opeol.svg'
  }, {
    id: 11,
    url: '../../img/suppliers/vival.svg'
  }, {
    id: 12,
    url: '../../img/suppliers/vodaland.svg'
  }, {
    id: 13,
    url: '../../img/customers/cim.svg'
  }, {
    id: 14,
    url: '../../img/customers/develop.svg'
  }, {
    id: 15,
    url: '../../img/customers/unbuild.svg'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "partners",
    className: "partners"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], settings, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 413
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/customers/unbuild.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 180
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/customers/develop.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 172
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/customers/cim.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 117
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/vodaland.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 131
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/vival.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 261
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/opeol.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 180
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/monolit.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 657
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/metalvis.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 107
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/liber.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 244
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/gold.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 182
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/gildia.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 170
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/first-home.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 170
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/bi1.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 170
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/agent-bud.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "partners__img",
    style: {
      width: 265
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "../../img/suppliers/abu.svg"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partners);

/***/ }),

/***/ "./src/components/Price/Price.js":
/*!***************************************!*\
  !*** ./src/components/Price/Price.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Accordion/Accordion */ "./src/components/Accordion/Accordion.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _price_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price.scss */ "./src/components/Price/price.scss");





var Price = function Price() {
  var navVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      // y: -10,
      transition: {
        type: 'scale',
        stiffness: 300,
        damping: 140
      }
    },
    show: {
      scale: 1,
      opacity: 1,
      // y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }
    }
  };
  var navVariantsY = {
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140
      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // type: 'spring',
        stiffness: 80,
        delay: 0.1
      }
    }
  };
  var prices = [{
    id: 1,
    title: 'Гідроізоляція будівель',
    text1: 'Влаштування тепло-, гідроізоляції плоских покрівель, включаючи:',
    cursive1: 'покрівлі «традиційного» типу',
    cursive2: 'інверсійні покрівлі з баластним шаром з щебню та ФЕМ',
    cursive3: 'інверсійні покрівлі під озеленення',
    text2: 'Влаштування тепло-, гідроізоляції балконів, терас, лоджій',
    text3: 'Ремонт та відновлення гідроізоляції існуючих покрівель',
    text4: 'Зовнішня підземна гідроізоляція будівель, включаючи:',
    cursive4: 'гідроізоляцію пальового поля',
    cursive5: 'гідроізоляцію підпірних стін',
    text7: 'Монтаж водовідвідних лотків',
    text8: 'Влаштування каналізаційних люків',
    last: 'Прим. Працюємо як з рулонними так і з обмазувальними матеріалами.'
  }, {
    id: 2,
    title: 'Промислові підлоги',
    text1: 'Влаштування залізобетонної стяжки',
    text2: 'Влаштування покриття підлог з топінгу',
    text3: 'Влаштування літієвих підлог',
    text4: 'Влаштування полімерних покриттів'
  }, {
    id: 3,
    title: 'Благоустрій території',
    text1: 'Планування території під озеленення та благоустрій',
    text2: 'Розробка грунту ручним та механізованим способом',
    text3: 'Влаштування піщано-щебеневих шарів',
    text4: 'Влаштування силової плити',
    text5: 'Влаштування ФЕМ та гранітної плитки по підготовці',
    text6: 'Влаштування асфальтобетонних доріжок та площадок',
    text7: 'Монтаж водовідвідних лотків',
    text8: 'Влаштування каналізаційних люків'
  }, {
    id: 4,
    title: 'Покрівлі',
    text1: 'Скатні покрівлі',
    text2: 'Плоскі покрівлі'
  }, {
    id: 5,
    title: 'Опоряджувальні роботи',
    text1: 'Малярні роботи',
    text2: 'Штукатурні роботи',
    text3: 'Влаштування плитки',
    text4: 'Влаштування стяжки',
    text6: 'Сантехнічні роботи'
  }, {
    id: 6,
    title: 'Монолітні роботи',
    text1: 'Влаштування монолітних колон та перекриттів',
    text2: 'Влаштування фундаментів',
    text3: 'Каркасне та безкаркасне будівництво'
  }, {
    id: 7,
    title: 'Фасадні роботи',
    text1: 'Вентильоваий фасад',
    text2: 'Mокрий фасад'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    id: "price",
    className: "price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    variants: navVariantsY,
    initial: "hidden",
    whileInView: "show" // viewport={{amout: 0.1, once: true,}}
    ,
    className: "price__title"
  }, "\u041F\u041E\u0421\u041B\u0423\u0413\u0418"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    variants: navVariants,
    initial: "hidden" // viewport={{amout: 0.1, once: true,}}
    ,
    whileInView: "show",
    className: "price__img"
  }), prices.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.id,
      title: item.title,
      text1: item.text1,
      text2: item.text2,
      text3: item.text3,
      text4: item.text4,
      text5: item.text5,
      text6: item.text6,
      text7: item.text7,
      text8: item.text8,
      cursive1: item.cursive1,
      cursive2: item.cursive2,
      cursive3: item.cursive3,
      cursive4: item.cursive4,
      cursive5: item.cursive5,
      last: item.last
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

/***/ }),

/***/ "./src/components/Text/SubTitle.js":
/*!*****************************************!*\
  !*** ./src/components/Text/SubTitle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subtitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtitle.scss */ "./src/components/Text/subtitle.scss");



var SubTitle = function SubTitle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subtitle"
  }, props.about, props.price1, props.price2, props.price3, props.price4, props.price5, props.price6, props.price7, props.price8);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTitle);

/***/ }),

/***/ "./src/components/Text/Title.js":
/*!**************************************!*\
  !*** ./src/components/Text/Title.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MTitle": () => (/* binding */ MTitle),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.scss */ "./src/components/Text/title.scss");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");



var Title = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref,
    className: "title"
  }, props.about, props.footer, props.price, props.objects);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);
var MTitle = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(Title);

/***/ }),

/***/ "./src/constants/data.js":
/*!*******************************!*\
  !*** ./src/constants/data.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "properties": () => (/* binding */ properties)
/* harmony export */ });
var properties = [{
  id: 1,
  imageUrl: "../img/9-elements/IMG_0772.jpg",
  imageUrl1: "../img/9-elements/IMG_0774.jpg",
  address: "КМ «9 елементів»",
  description: ""
}, {
  id: 2,
  imageUrl: "../img/Kojumiatska-street/IMG_1504.jpg",
  imageUrl1: "../img/Kojumiatska-street/504.jpg",
  address: "Виконання благоустрою по вул. Кожумʼяцька",
  description: ""
}, {
  id: 3,
  imageUrl: "../img/City/IMG_1500.jpg",
  imageUrl1: "../img/City/IMG_1505.jpg",
  address: "Благоустрій місто"
}, {
  id: 4,
  imageUrl: "../img/Emotsiya/IMG_0753.jpg",
  imageUrl1: "../img/Emotsiya/IMG_0754.jpg",
  imageUrl2: "../img/Emotsiya/IMG_0756.jpg",
  address: "ЖК Емоція"
}, {
  id: 5,
  imageUrl: "../img/Hidroisolation-emotsiya/IMG_1494.jpg",
  imageUrl1: "../img/Hidroisolation-emotsiya/IMG_1495.jpg",
  imageUrl2: "../img/Hidroisolation-emotsiya/IMG_1496.jpg",
  imageUrl3: "../img/Hidroisolation-emotsiya/IMG_1497.png",
  address: "Підземна гідроізоляція ЖК Емоція"
}, {
  id: 6,
  imageUrl: "../img/Kruhlouniversitetska-street/IMG_1327.jpg",
  imageUrl1: "../img/Kruhlouniversitetska-street/IMG_1328.JPG",
  address: "Об'єкт вул. Круглоуніверситетська "
}, {
  id: 7,
  imageUrl: "../img/Pluti/IMG_0767.jpg",
  imageUrl1: "../img/Pluti/IMG_0769.jpg",
  imageUrl2: "../img/Pluti/IMG_0785.JPG",
  address: "Об'єкт Плюти"
}, {
  id: 8,
  imageUrl: "../img/Pohila-street/IMG_1324.jpg",
  address: "Відновлення благоустрою на вулиці Похила"
}, {
  id: 9,
  imageUrl: "../img/Puscha-vodistya/IMG_1317.jpg",
  address: "Пуща водиця"
}, {
  id: 10,
  imageUrl: "../img/Yakutska-street/IMG_1502.JPG",
  address: "Вул. Якутська "
}];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");




var container = document.getElementById('app');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container); // createRoot(container!) if you use TypeScript

root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  tab: "home"
}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/About/about.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/About/about.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/about.png */ "./src/img/about.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about {\n  padding: 10px 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.about__title {\n  margin: 15px 0 30px;\n}\n@media (min-width: 1024px) {\n  .about__title {\n    margin: 25px 0 30px;\n  }\n}\n.about__subtitle {\n  margin-bottom: 30px;\n}\n@media (min-width: 575px) {\n  .about__subtitle {\n    max-width: 560px;\n  }\n}\n@media (min-width: 1024px) {\n  .about__subtitle {\n    max-width: 790px;\n    margin-bottom: 50px;\n  }\n}\n@media (min-width: 1024px) {\n  .about__subtitle .subtitle {\n    line-height: 40px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/About/about.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;AADJ;AAGI;EACI,mBAAA;AADR;AAGQ;EAHJ;IAIQ,mBAAA;EAAV;AACF;AAGI;EACI,mBAAA;AADR;AAGQ;EAHJ;IAIQ,gBAAA;EAAV;AACF;AAEQ;EAPJ;IAQQ,gBAAA;IACA,mBAAA;EACV;AACF;AAEY;EADJ;IAEQ,iBAAA;EACd;AACF","sourcesContent":["\n\n.about {\n    padding: 10px 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-image: url(../../img/about.png);\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    &__title {\n        margin: 15px 0 30px;\n\n        @media (min-width:1024px) {\n            margin: 25px 0 30px;\n        }\n    }\n\n    &__subtitle {\n        margin-bottom: 30px;\n\n        @media (min-width:575px) {\n            max-width: 560px;\n        }\n\n        @media (min-width:1024px) {\n            max-width: 790px;\n            margin-bottom: 50px;\n        }\n\n        .subtitle {\n            @media (min-width:1024px) {\n                line-height: 40px;\n            }\n        }\n    }\n}\n\n// .title {\n//     color: white;\n// }\n\n// .subtitle {\n//     color: white;\n// }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Accordion/accordionCopy.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Accordion/accordionCopy.scss ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/btn.png */ "./src/img/btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/done.svg */ "./src/img/done.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".accordion {\n  font-family: \"Barlow\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  padding: 0px 5px 15px;\n}\n@media (min-width: 785px) {\n  .accordion {\n    padding: 0px 50% 5px 15px;\n  }\n}\n.accordion__btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 1%;\n  position: relative;\n  transition: all 0.2s ease-in;\n  font-size: 16px;\n  color: black;\n  border: 1px solid #4A4643;\n  border-radius: 4px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media (min-width: 1024px) {\n  .accordion__btn {\n    font-size: 24px;\n  }\n}\n.accordion__btn:hover, .accordion__btn:focus {\n  background-color: #195F85;\n  background-image: none;\n  color: white;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n  z-index: 10;\n  translate: 0 -3px;\n}\n.accordion.active .accordion__btn {\n  background-color: #195F85;\n  background-image: none;\n  color: white;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n  z-index: 10;\n  translate: 0 -3px;\n}\n.accordion__icon {\n  transition: 0.3s ease-in-out;\n  margin-left: 10px;\n  margin-top: 3px;\n}\n.accordion.active .accordion__icon {\n  transform: rotate(180deg);\n}\n.accordion__content {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 0px;\n  max-width: 667px;\n  font-size: 14px;\n  position: relative;\n  transition: all 0.3s ease;\n  visibility: hidden;\n  text-align: left;\n  background: #195F85;\n  border-radius: 6px;\n  color: white;\n  overflow: hidden;\n  transform: scale(0);\n}\n@media (min-width: 1024px) {\n  .accordion__content {\n    font-size: 16px;\n    max-width: 100%;\n  }\n}\n.accordion__content li {\n  margin-bottom: 3px;\n}\n.accordion__content--li {\n  list-style: inside;\n  list-style-position: outside;\n}\n.accordion__content--cursive {\n  font-style: italic;\n  list-style: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  list-style-position: inside;\n}\n.accordion.active .accordion__content {\n  visibility: visible;\n  padding: 32px;\n  height: -moz-fit-content;\n  height: fit-content;\n  transition: all 0.3s ease;\n  transform: scale(1);\n}\n\n.bx {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n}\n@media (min-width: 1024px) {\n  .bx {\n    width: 25px;\n    height: 25px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Accordion/accordionCopy.scss"],"names":[],"mappings":"AAAA;EACI,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;AACJ;AACI;EATJ;IAUQ,yBAAA;EAEN;AACF;AACI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EAEA,WAAA;EACA,kBAAA;EACA,4BAAA;EACA,eAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;AAAR;AAGQ;EAlBJ;IAqBQ,eAAA;EAFV;AACF;AAIQ;EACI,yBAAA;EACA,sBAAA;EACA,YAAA;EACA,oDAAA;EACA,WAAA;EACA,iBAAA;AAFZ;AAOI;EACI,yBAAA;EACA,sBAAA;EACA,YAAA;EACA,oDAAA;EACA,WAAA;EACA,iBAAA;AALR;AAQI;EACI,4BAAA;EACA,iBAAA;EACA,eAAA;AANR;AASI;EACI,yBAAA;AAPR;AAUI;EACI,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AARR;AAWY;EAnBR;IAoBY,eAAA;IACA,eAAA;EARd;AACF;AAUY;EACI,kBAAA;AARhB;AAWQ;EACI,kBAAA;EACA,4BAAA;AATZ;AAYQ;EACI,kBAAA;EACA,mDAAA;EACA,2BAAA;AAVZ;AAmCI;EACI,mBAAA;EAEA,aAAA;EACA,wBAAA;EAAA,mBAAA;EACA,yBAAA;EAEA,mBAAA;AAnCR;;AA4CA;EACI,qBAAA;EACA,WAAA;EACA,YAAA;AAzCJ;AA2CI;EALJ;IAMQ,WAAA;IACA,YAAA;EAxCN;AACF","sourcesContent":[".accordion {\n    font-family: 'Barlow', sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    padding: 0px 5px 15px;\n\n    @media (min-width: 785px) {\n        padding: 0px 50% 5px 15px;\n    }\n\n\n    &__btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        // margin-bottom: 36px;\n        padding: 1%;\n        position: relative;\n        transition: all .2s ease-in;\n        font-size: 16px;\n        color: black;\n        border: 1px solid #4A4643;\n        border-radius: 4px;\n        background-image: url(../../img/btn.png);\n        background-repeat: no-repeat;\n        background-size: cover;\n        // margin-top: 2%;\n\n        @media (min-width: 1024px) {\n            // justify-content: flex-start;\n            // padding-left: 30%;\n            font-size: 24px;\n        }\n\n        &:hover, &:focus {\n            background-color: #195F85;\n            background-image: none;\n            color: white;\n            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n            z-index: 10;\n            translate: 0 -3px;\n        }\n\n    }\n\n    &.active &__btn {\n        background-color: #195F85;\n        background-image: none;\n        color: white;\n        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n        z-index: 10;\n        translate: 0 -3px;\n    }\n\n    &__icon {\n        transition: 0.3s ease-in-out;\n        margin-left: 10px;\n        margin-top: 3px;\n    }\n\n    &.active &__icon {\n        transform: rotate(180deg);\n    }\n\n    &__content {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        height: 0px;\n        max-width: 667px;\n        font-size: 14px;\n        position: relative;\n        transition: all .3s  ease;\n        visibility: hidden;\n        text-align:left;\n        background: #195F85;\n        border-radius: 6px;\n        color: white;\n        overflow: hidden;\n        transform: scale(0);\n        // margin: 0 5px;\n\n            @media (min-width: 1024px) {\n                font-size: 16px;\n                max-width: 100%;\n            }\n\n            li {\n                margin-bottom: 3px;\n            }\n\n        &--li {\n            list-style: inside;\n            list-style-position: outside;\n        }\n\n        &--cursive {\n            font-style: italic;\n            list-style: url(../../img/done.svg);\n            list-style-position: inside;\n        }\n    }\n\n    // &__content {\n    //     height: 30px;\n    //     width: 281px;\n    //     font-size: 14px;\n    //     position: relative;\n    //     z-index: 10;\n    //     margin-top: -30px;\n    //     transition: all 200ms cubic-bezier(0.600, -0.280, 0.735, 0.045);\n    //     visibility: hidden;\n\n    //     @media (min-width: 540px) {\n    //         width: 372px;\n    //     }\n\n    //     .subtitle {\n    //         color: white;\n    //         text-align:left;\n    //         padding: 4%;\n    //     }\n    // }\n\n    &.active &__content {\n        visibility: visible;\n        // margin-top: 8px;\n        padding: 32px;\n        height: fit-content;\n        transition: all .3s ease;\n        // overflow-y: scroll;\n        transform: scale(1);\n        // overflow: hidden;\n\n        // @media (min-width: 1024px) {\n        //     height: 200px;\n        // }\n    }\n}\n\n.bx {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n\n    @media (min-width: 1024px) {\n        width: 25px;\n        height: 25px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/footer.png */ "./src/img/footer.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 224px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);\n  margin-top: 107px;\n}\n.footer__title {\n  margin: 30px 0 20px;\n}\n.footer__title .title {\n  color: #fff;\n}\n.footer__tell, .footer__mail {\n  margin: 15px 0 0;\n}\n@media (min-width: 1024px) {\n  .footer__tell, .footer__mail {\n    margin: 20px 0 0;\n  }\n}\n.footer__tell--namb, .footer__tell--text, .footer__mail--namb, .footer__mail--text {\n  display: block;\n  font-family: \"Barlow\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  color: #FFFFFF;\n  margin-left: 3px;\n  text-decoration: none;\n}\n.footer__icons {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n@media (min-width: 1024px) {\n  .footer__icons {\n    margin-top: 15px;\n  }\n}\n.footer__icons--telega, .footer__icons--facebook, .footer__icons--viber {\n  text-decoration: none;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  color: #fff;\n}\n.footer__icons--telega svg, .footer__icons--facebook svg, .footer__icons--viber svg {\n  width: 20px;\n  height: 20px;\n}\n@media (min-width: 1024px) {\n  .footer__icons--telega svg, .footer__icons--facebook svg, .footer__icons--viber svg {\n    width: 30px;\n    height: 30px;\n  }\n}\n.footer__icons--telega:hover, .footer__icons--facebook:hover, .footer__icons--viber:hover {\n  translate: 0 -3px;\n}\n.footer__icons--facebook {\n  margin-left: 20px;\n}\n@media (min-width: 1024px) {\n  .footer__icons--facebook {\n    margin-left: 40px;\n  }\n}\n.footer__icons--viber {\n  margin-left: 20px;\n}\n@media (min-width: 1024px) {\n  .footer__icons--viber {\n    margin-left: 40px;\n  }\n}\n\n.phone__icon {\n  width: 12px;\n  height: 12px;\n  margin-right: 4px;\n}", "",{"version":3,"sources":["webpack://./src/components/Footer/footer.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,yDAAA;EACA,sBAAA;EACA,4BAAA;EACA,4CAAA;EACA,iBAAA;AADJ;AAGI;EACI,mBAAA;AADR;AAGQ;EACI,WAAA;AADZ;AAKI;EACI,gBAAA;AAHR;AAKQ;EAHJ;IAIQ,gBAAA;EAFV;AACF;AAKQ;EACI,cAAA;EACA,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAHZ;AAOI;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;AALR;AAOQ;EALJ;IAMQ,gBAAA;EAJV;AACF;AAMQ;EACI,qBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;AAJZ;AAKY;EACI,WAAA;EACA,YAAA;AAHhB;AAMY;EACI;IACI,WAAA;IACA,YAAA;EAJlB;AACF;AAQQ;EACI,iBAAA;AANZ;AAiBQ;EACI,iBAAA;AAfZ;AAiBY;EAHJ;IAIQ,iBAAA;EAdd;AACF;AAiBQ;EACI,iBAAA;AAfZ;AAiBY;EAHJ;IAIQ,iBAAA;EAdd;AACF;;AAoBA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AAjBJ","sourcesContent":["\n\n.footer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 224px;\n    background-image: url(../../img/footer.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);\n    margin-top: 107px;\n\n    &__title {\n        margin: 30px 0 20px;\n\n        .title {\n            color: #fff;\n        }\n    }\n\n    &__tell, &__mail {\n        margin: 15px 0 0;\n\n        @media (min-width: 1024px) {\n            margin: 20px 0 0;\n        }\n\n\n        &--namb, &--text{\n            display: block;\n            font-family: 'Barlow', sans-serif;\n            font-style: normal;\n            font-weight: 700;\n            font-size: 16px;\n            line-height: 19px;\n            text-align: center;\n            color: #FFFFFF;\n            margin-left: 3px;\n            text-decoration: none;\n        }\n    }\n\n    &__icons {\n        display: flex;\n        justify-content: center;\n        margin-top: 20px;\n\n        @media (min-width: 1024px) {\n            margin-top: 15px;\n        }\n\n        &--telega, &--facebook, &--viber {\n            text-decoration: none;\n            display: inline-block;\n            width: 20px;\n            height: 20px;\n            color: #fff;\n            svg{\n                width: 20px;\n                height: 20px;\n            }\n\n            @media (min-width: 1024px) {\n                svg{\n                    width: 30px;\n                    height: 30px;\n                }\n            }\n        }\n\n        &--telega:hover, &--facebook:hover, &--viber:hover {\n            translate: 0 -3px;\n        }\n\n        // &--telega {\n        //     margin-left: 7px;\n\n        //     @media (min-width: 1024px) {\n        //         margin-left: 27px;\n        //     }\n        // }\n\n        &--facebook {\n            margin-left: 20px;\n\n            @media (min-width: 1024px) {\n                margin-left: 40px;\n            }\n        }\n\n        &--viber {\n            margin-left: 20px;\n\n            @media (min-width: 1024px) {\n                margin-left: 40px;\n            }\n        }\n\n    }\n}\n\n.phone__icon {\n    width: 12px;\n    height: 12px;\n    margin-right: 4px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/logo.svg */ "./src/img/logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  z-index: 3;\n}\n.header__img {\n  position: relative;\n  width: 100vw;\n  height: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 575px) {\n  .header__img {\n    height: 50vh;\n  }\n}\n@media (min-width: 1024px) {\n  .header__img {\n    height: 100vh;\n  }\n}\n.header__img--logo {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 175px;\n  height: 65px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n@media (min-width: 575px) {\n  .header__img--logo {\n    width: 300px;\n    height: 100px;\n    background-size: cover;\n  }\n}\n@media (min-width: 1024px) {\n  .header__img--logo {\n    width: 600px;\n    height: 200px;\n    background-size: cover;\n  }\n}\n\n.custom-bg {\n  position: relative;\n  width: 100vw;\n  height: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 575px) {\n  .custom-bg {\n    height: 50vh;\n  }\n}\n@media (min-width: 1024px) {\n  .custom-bg {\n    height: 100vh;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Header/header.scss"],"names":[],"mappings":"AAEA;EACI,UAAA;AADJ;AAGI;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AADR;AAIQ;EATJ;IAUQ,YAAA;EADV;AACF;AAGQ;EAbJ;IAcQ,aAAA;EAAV;AACF;AAEQ;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,4BAAA;EACA,wBAAA;AAAZ;AAEY;EAbJ;IAcQ,YAAA;IACA,aAAA;IACA,sBAAA;EACd;AACF;AACY;EAnBJ;IAoBQ,YAAA;IACA,aAAA;IACA,sBAAA;EAEd;AACF;;AAqBA;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAlBJ;AAqBI;EATJ;IAUQ,YAAA;EAlBN;AACF;AAoBI;EAbJ;IAcQ,aAAA;EAjBN;AACF","sourcesContent":["\n\n.header {\n    z-index: 3;\n\n    &__img {\n        position: relative;\n        width: 100vw;\n        height: 30vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n\n        @media (min-width: 575px) {\n            height: 50vh;\n        }\n\n        @media (min-width: 1024px) {\n            height: 100vh;\n        }\n\n        &--logo {\n            position: absolute;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            overflow: hidden;\n            width: 175px;\n            height: 65px;\n            background-image: url(../../img/logo.svg);\n            background-position: 50% 50%;\n            background-repeat: no-repeat;\n            background-size: contain;\n\n            @media (min-width: 575px) {\n                width: 300px;\n                height: 100px;\n                background-size: cover;\n            }\n\n            @media (min-width: 1024px) {\n                width: 600px;\n                height: 200px;\n                background-size: cover;\n            }\n        }\n    }\n\n    // &__bg {\n    //     // position: absolute;\n    //     width: 100%;\n    //     height: 30%;\n    //     background-image: url(../../img/header-bott.png);\n    //     background-repeat: no-repeat;\n    //     background-position: 50% 50%;\n    //     // background-size: contain;\n\n    //     @media (min-width: 575px) {\n    //         height: 50%;\n    //     }\n\n    //     @media (min-width: 1024px) {\n    //         height: 600px;\n    //     }\n    // }\n}\n\n.custom-bg {\n    position: relative;\n    width: 100vw;\n    height: 30vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n\n    @media (min-width: 575px) {\n        height: 50vh;\n    }\n\n    @media (min-width: 1024px) {\n        height: 100vh;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/menu.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/menu.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu {\n  position: absolute;\n  position: fixed;\n  padding: 90px 15px 0;\n  width: 100vw;\n  height: 100vh;\n  background: #195F85;\n  transform: translateX(100%);\n  transition: 0.3s;\n  z-index: 50;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n@media (min-width: 935px) {\n  .menu {\n    height: 65px;\n    background: transparent;\n    -webkit-backdrop-filter: blur(0px);\n            backdrop-filter: blur(0px);\n    transform: translateX(0);\n    padding: 18px 2% 0;\n  }\n}\n@media (min-width: 1024px) {\n  .menu {\n    padding: 25px 3% 0;\n  }\n}\n.menu__view {\n  transform: translateX(0);\n  transition: 0.3s;\n}\n.menu__content {\n  text-align: center;\n  text-transform: uppercase;\n}\n.menu__content--a {\n  font-family: \"Barlow\", sans-serif;\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 29px;\n  text-align: center;\n  color: white;\n  position: relative;\n  text-decoration: none;\n  --b: 0.1em; /* the thickness of the line */\n  --c: #fff; /* the color */\n  color: white;\n  padding-top: var(--b);\n  padding-bottom: var(--b);\n  background: linear-gradient(var(--c) 50%, #000 0) 0% calc(100% - 0%)/100% 200%, linear-gradient(var(--c) 0, var(--c) 0) 0% 0%/0% var(--b) no-repeat;\n  background: linear-gradient(var(--c) 50%, #000 0) 0% calc(100% - 0%)/100% 200%, linear-gradient(var(--c) 0 0) 0% 0%/0% var(--b) no-repeat;\n  background: linear-gradient(var(--c) 50%, #000 0) 0% calc(100% - var(--_p, 0%))/100% 200%, linear-gradient(var(--c) 0, var(--c) 0) 0% var(--_p, 0%)/var(--_p, 0%) var(--b) no-repeat;\n  background: linear-gradient(var(--c) 50%, #000 0) 0% calc(100% - var(--_p, 0%))/100% 200%, linear-gradient(var(--c) 0 0) 0% var(--_p, 0%)/var(--_p, 0%) var(--b) no-repeat;\n  -webkit-background-clip: text, padding-box;\n  background-clip: text, padding-box;\n  transition: 0.3s 0s linear, background-size 0.3s calc(0.3s - 0s);\n  transition: 0.3s var(--_s, 0s) linear, background-size 0.3s calc(0.3s - var(--_s, 0s));\n}\n@media (min-width: 575px) {\n  .menu__content--a {\n    font-size: 18px;\n  }\n}\n@media (min-width: 1116px) {\n  .menu__content--a {\n    font-size: 22px;\n  }\n}\n.menu__content--a:hover {\n  --_p: 100%;\n  --_s: .3s;\n}\n@media (min-width: 935px) {\n  .menu__content ul {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n}\n@media (min-width: 1210px) {\n  .menu__content ul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n.menu__content--li {\n  margin-bottom: 45px;\n}\n@media (min-width: 935px) {\n  .menu__content--li {\n    margin-left: 27px;\n    z-index: 70;\n    margin-bottom: 0;\n  }\n}\n\n.blur {\n  display: none;\n}\n@media (min-width: 935px) {\n  .blur {\n    display: block;\n    width: 100vw;\n    height: 65px;\n    background: transparent;\n    padding: 18px 5% 0;\n    position: absolute;\n    position: fixed;\n    top: 0;\n    right: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Navbar/menu.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,eAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,gBAAA;EACA,WAAA;EACA,kCAAA;UAAA,0BAAA;AADJ;AAGI;EAZJ;IAaQ,YAAA;IACA,uBAAA;IAEA,kCAAA;YAAA,0BAAA;IACA,wBAAA;IACA,kBAAA;EADN;AACF;AAGI;EArBJ;IAsBQ,kBAAA;EAAN;AACF;AAGI;EACI,wBAAA;EACA,gBAAA;AADR;AAII;EACI,kBAAA;EACA,yBAAA;AAFR;AAKQ;EACI,iCAAA;EAEA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EACA,UAAA,EAAA,8BAAA;EACA,SAAA,EAAA,cAAA;EACA,YAAA;EACA,qBAAA;EAAA,wBAAA;EACA,mJACI;EADJ,yIACI;EADJ,oLACI;EADJ,0KACI;EAEJ,0CAAA;EACQ,kCAAA;EACR,gEAAA;EAAA,sFAAA;AANZ;AAQY;EAtBJ;IAuBQ,eAAA;EALd;AACF;AAOY;EA1BJ;IA2BQ,eAAA;EAJd;AACF;AAMY;EACI,UAAA;EACA,SAAA;AAJhB;AAgBY;EAFJ;IAGQ,aAAA;IACA,yBAAA;IACA,mBAAA;EAbd;AACF;AAcY;EAPJ;IAQQ,aAAA;IACA,uBAAA;IACA,mBAAA;EAXd;AACF;AAcQ;EACI,mBAAA;AAZZ;AAcQ;EAHA;IAII,iBAAA;IACA,WAAA;IACA,gBAAA;EAXV;AACF;;AAgBA;EACA,aAAA;AAbA;AAcI;EAFJ;IAGI,cAAA;IACA,YAAA;IACA,YAAA;IACA,uBAAA;IACA,kBAAA;IACA,kBAAA;IACA,eAAA;IACA,MAAA;IACA,QAAA;EAXF;AACF","sourcesContent":["\n\n.menu {\n    position: absolute;\n    position: fixed;\n    padding: 90px 15px 0;\n    width: 100vw;\n    height: 100vh;\n    background:#195F85;\n    transform: translateX(100%);\n    transition: 0.3s;\n    z-index: 50;\n    backdrop-filter: blur(4px);\n\n    @media (min-width: 935px) {\n        height: 65px;\n        background: transparent;\n        // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n        backdrop-filter: blur(0px);\n        transform: translateX(0);\n        padding: 18px 2% 0;\n    }\n\n    @media (min-width: 1024px) {\n        padding: 25px 3% 0;\n    }\n\n\n    &__view {\n        transform: translateX(0);\n        transition: 00.3s;\n    }\n\n    &__content {\n        text-align: center;\n        text-transform: uppercase;\n\n\n        &--a {\n            font-family:'Barlow', sans-serif;\n            // font-style: bold;\n            cursor: pointer;\n            font-weight: 500;\n            font-size: 16px;\n            line-height: 29px;\n            text-align: center;\n            color: white;\n            position: relative;\n            text-decoration: none;\n            --b: 0.1em;   /* the thickness of the line */\n            --c: #fff; /* the color */\n            color: #ffff;\n            padding-block: var(--b);\n            background:\n                linear-gradient(var(--c) 50%,#000 0) 0% calc(100% - var(--_p,0%))/100% 200%,\n                linear-gradient(var(--c) 0 0) 0% var(--_p,0%)/var(--_p,0%) var(--b) no-repeat;\n            -webkit-background-clip: text,padding-box;\n                    background-clip: text,padding-box;\n            transition: .3s var(--_s,0s) linear,background-size .3s calc(.3s - var(--_s,0s));\n\n            @media (min-width: 575px) {\n                font-size: 18px;\n            }\n\n            @media (min-width: 1116px) {\n                font-size: 22px;\n            }\n\n            &:hover {\n                --_p: 100%;\n                --_s: .3s;\n            }\n        }\n\n        // &.active &--a {\n        //     --_p: 100%;\n        //     --_s: .3s;\n        //     color: red;\n        // }\n\n        ul {\n\n            @media (min-width: 935px) {\n                display: flex;\n                justify-content: flex-end;\n                align-items: center;\n            }\n            @media (min-width: 1210px) {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n        }\n\n        &--li {\n            margin-bottom: 45px;\n\n        @media (min-width: 935px) {\n            margin-left: 27px;\n            z-index: 70;\n            margin-bottom: 0;\n        }\n        }\n    }\n}\n\n.blur {\ndisplay: none;\n    @media (min-width: 935px) {\n    display: block;\n    width: 100vw;\n    height: 65px;\n    background: transparent;\n    padding: 18px 5% 0;\n    position: absolute;\n    position: fixed;\n    top: 0;\n    right: 0;\n    }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/navbar.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/navbar.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/logo.svg */ "./src/img/logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav {\n  position: relative;\n  position: fixed;\n  width: 100%;\n  height: 45px;\n  z-index: 60;\n  background: #195F85;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n@media (min-width: 575px) {\n  .nav {\n    height: 60px;\n    z-index: 51;\n  }\n}\n@media (min-width: 935px) {\n  .nav {\n    width: 15%;\n    background: transparent;\n    box-shadow: none;\n  }\n}\n.nav__link {\n  display: block;\n  width: 50px;\n  height: 30px;\n  position: absolute;\n  top: 8px;\n  left: 15px;\n  cursor: pointer;\n  z-index: 80;\n}\n.nav__link--logo {\n  display: none;\n}\n@media (min-width: 935px) {\n  .nav__link--logo {\n    display: block;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: 50% 50%;\n    width: 100px;\n    height: 40px;\n    margin-top: 6px;\n  }\n}\n@media (min-width: 1024px) {\n  .nav__link--logo {\n    width: 140px;\n    height: 50px;\n    margin-top: 0;\n  }\n}\n.nav__link--logo2 {\n  width: 80px;\n  height: 30px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: 50% 50%;\n}\n@media (min-width: 575px) {\n  .nav__link--logo2 {\n    width: 100px;\n    height: 40px;\n    margin-top: 6px;\n  }\n}\n@media (min-width: 935px) {\n  .nav__link--logo2 {\n    display: none;\n  }\n}\n.nav__burger {\n  display: flex;\n  flex: content;\n  position: absolute;\n  width: 30px;\n  height: 18px;\n  right: 15px;\n  top: 14px;\n  cursor: pointer;\n}\n@media (min-width: 575px) {\n  .nav__burger {\n    top: 20px;\n    width: 40px;\n    height: 28px;\n  }\n}\n@media (min-width: 935px) {\n  .nav__burger {\n    display: none;\n  }\n}\n.nav__burger--btn, .nav__burger ::after, .nav__burger ::before {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  background: #FFFFFF;\n  border-radius: 2px;\n  transition: 300ms;\n}\n.nav__burger--btn {\n  top: 6px;\n  transition: all 0.5s cubic-bezier(0.1, 0.9, 0, 1.2);\n}\n.nav__burger--btn::after {\n  content: \"\";\n  bottom: -6px;\n  transition: all 0.5s cubic-bezier(0.1, 0.9, 0, 1.2);\n}\n@media (min-width: 575px) {\n  .nav__burger--btn::after {\n    bottom: -10px;\n  }\n}\n.nav__burger--btn::before {\n  content: \"\";\n  top: -6px;\n  transition: all 0.5s cubic-bezier(0.1, 0.9, 0, 1.2);\n}\n@media (min-width: 575px) {\n  .nav__burger--btn::before {\n    top: -10px;\n  }\n}\n.nav__burger .active {\n  background: rgba(255, 255, 255, 0);\n  transition: none;\n}\n.nav__burger .active::after {\n  content: \"\";\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: all 0.5s cubic-bezier(0.1, 0.9, 0, 1.2);\n}\n.nav__burger .active::before {\n  content: \"\";\n  top: 0;\n  transform: rotate(135deg);\n  transition: all 0.5s cubic-bezier(0.1, 0.9, 0, 1.2);\n}", "",{"version":3,"sources":["webpack://./src/components/Navbar/navbar.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,2CAAA;AADJ;AAII;EAVJ;IAWQ,YAAA;IACA,WAAA;EADN;AACF;AAGI;EAfJ;IAgBQ,UAAA;IACA,uBAAA;IACA,gBAAA;EAAN;AACF;AAEI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,eAAA;EACA,WAAA;AAAR;AAEQ;EACI,aAAA;AAAZ;AAGY;EAJJ;IAKQ,cAAA;IACA,yDAAA;IACA,4BAAA;IACA,wBAAA;IACA,4BAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAAd;AACF;AAEY;EAfJ;IAgBQ,YAAA;IACA,YAAA;IACA,aAAA;EACd;AACF;AAEQ;EACI,WAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,wBAAA;EACA,4BAAA;AAAZ;AAEY;EARJ;IASQ,YAAA;IACA,YAAA;IACA,eAAA;EACd;AACF;AACY;EAdJ;IAeQ,aAAA;EAEd;AACF;AAEI;EACI,aAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,eAAA;AAAR;AAEQ;EAVJ;IAWQ,SAAA;IACA,WAAA;IACA,YAAA;EACV;AACF;AAAQ;EAfJ;IAgBQ,aAAA;EAGV;AACF;AADQ;EACI,cAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;AAGZ;AAAQ;EACI,QAAA;EACA,mDAAA;AAEZ;AACQ;EACI,WAAA;EACA,YAAA;EACA,mDAAA;AACZ;AACY;EALJ;IAMQ,aAAA;EAEd;AACF;AACQ;EACI,WAAA;EACA,SAAA;EACA,mDAAA;AACZ;AACY;EALJ;IAMQ,UAAA;EAEd;AACF;AACQ;EACI,kCAAA;EACA,gBAAA;AACZ;AAEQ;EACI,WAAA;EACA,SAAA;EACA,wBAAA;EAGA,mDAAA;AAFZ;AAKQ;EACI,WAAA;EACA,MAAA;EACA,yBAAA;EAGA,mDAAA;AALZ","sourcesContent":["\n\n.nav {\n    position: relative;\n    position: fixed;\n    width: 100%;\n    height: 45px;\n    z-index: 60;\n    background: #195F85;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n\n    @media (min-width: 575px) {\n        height: 60px;\n        z-index: 51;\n    }\n\n    @media (min-width: 935px) {\n        width: 15%;\n        background: transparent;\n        box-shadow: none;\n    }\n\n    &__link{\n        display: block;\n        width: 50px;\n        height: 30px;\n        position: absolute;\n        top: 8px;\n        left: 15px;\n        cursor: pointer;\n        z-index: 80;\n\n        &--logo {\n            display: none;\n\n\n            @media (min-width: 935px) {\n                display: block;\n                background-image: url(../../img/logo.svg);\n                background-repeat: no-repeat;\n                background-size: contain;\n                background-position: 50% 50%;\n                width: 100px;\n                height: 40px;\n                margin-top: 6px;\n            }\n\n            @media (min-width: 1024px) {\n                width: 140px;\n                height: 50px;\n                margin-top: 0;\n            }\n        }\n\n        &--logo2 {\n            width: 80px;\n            height: 30px;\n            background-image: url(../../img/logo.svg);\n            background-repeat: no-repeat;\n            background-size: contain;\n            background-position: 50% 50%;\n\n            @media (min-width: 575px) {\n                width: 100px;\n                height: 40px;\n                margin-top: 6px;\n            }\n\n            @media (min-width: 935px) {\n                display: none;\n            }\n        }\n    }\n\n    &__burger {\n        display: flex;\n        flex: content;\n        position: absolute;\n        width: 30px;\n        height: 18px;\n        right: 15px;\n        top: 14px;\n        cursor: pointer;\n\n        @media (min-width: 575px) {\n            top: 20px;\n            width: 40px;\n            height: 28px;\n        }\n        @media (min-width: 935px) {\n            display: none;\n        }\n\n        &--btn, ::after, ::before {\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 3px;\n            background: #FFFFFF;\n            border-radius: 2px;\n            transition: 300ms;\n        }\n\n        &--btn {\n            top: 6px;\n            transition: all .5s cubic-bezier(.1, .9, 0, 1.2);\n        }\n\n        &--btn::after {\n            content: '';\n            bottom: -6px;\n            transition: all .5s cubic-bezier(.1, .9, 0, 1.2);\n\n            @media (min-width: 575px) {\n                bottom: -10px;\n            }\n        }\n\n        &--btn::before {\n            content: '';\n            top: -6px;\n            transition: all .5s cubic-bezier(.1, .9, 0, 1.2);\n\n            @media (min-width: 575px) {\n                top: -10px;\n            }\n        }\n\n        .active {\n            background: rgba(255,255,255,0);\n            transition: none;\n        }\n\n        .active::after {\n            content: '';\n            bottom: 0;\n            transform: rotate(45deg);\n            // transition: bottom 300ms, transform 300ms 300ms;\n            // transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n            transition: all .5s cubic-bezier(.1, .9, 0, 1.2);\n        }\n\n        .active::before {\n            content: '';\n            top: 0;\n            transform: rotate(135deg);\n            // transition: top 300ms, transform 300ms 300ms;\n            // transition: cubic-bazier(0.68, -0.55, 0, 1.55);\n            transition: all .5s cubic-bezier(.1, .9, 0, 1.2);\n        }\n\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Feature.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Feature.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".feature {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n\n.feature__circle {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #f1f1f1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 4px;\n}\n\n.feature__icon {\n  color: #737373;\n}\n\n.feature__label {\n  white-space: nowrap;\n}", "",{"version":3,"sources":["webpack://./src/components/Objects/Card/Feature.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,mBAAA;AACF","sourcesContent":[".feature {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n\n.feature__circle {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #f1f1f1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 4px;\n}\n\n.feature__icon {\n  color: #737373;\n}\n\n.feature__label {\n  white-space: nowrap;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Listing.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Listing.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".listing {\n  width: 25%;\n  min-width: 300px;\n  max-width: 400px;\n  position: relative;\n  margin: 20px;\n  cursor: pointer;\n  box-shadow: rgba(25, 95, 133, 0.4) 0px 8px 24px;\n  background-color: white;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.listing::before {\n  content: \"\";\n  display: block;\n  padding-bottom: 125%;\n}\n\n.listing__content {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.listing__image-container {\n  width: 100%;\n  height: 65%;\n  overflow: hidden;\n}\n\n.listing__image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.listing__details {\n  height: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 25px;\n  position: relative;\n}\n\n.listing__type {\n  position: absolute;\n  font-size: 0.8rem;\n  right: 10px;\n  top: 10px;\n  background-color: rgb(223, 247, 255);\n  padding: 5px 10px;\n  border-radius: 15px;\n}\n\n.listing__row {\n  margin: 6px 0px;\n  display: flex;\n  align-items: center;\n}\n\n.listing__price {\n  font-family: \"Barlow\", sans-serif;\n  font-style: bold;\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n\n.listing__address {\n  color: #737373;\n}", "",{"version":3,"sources":["webpack://./src/components/Objects/Card/Listing.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EACA,+CAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,cAAA;EACA,oBAAA;AACF;;AAEA;EACE,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,SAAA;EACA,oCAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,eAAA;EACA,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,iCAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,cAAA;AACF","sourcesContent":[".listing {\n  width: 25%;\n  min-width: 300px;\n  max-width: 400px;\n  position: relative;\n  margin: 20px;\n  cursor: pointer;\n  box-shadow: rgba(25, 95, 133, 0.4) 0px 8px 24px;\n  background-color: white;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.listing::before {\n  content: \"\";\n  display: block;\n  padding-bottom: calc((5 / 4) * 100%);\n}\n\n.listing__content {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.listing__image-container {\n  width: 100%;\n  height: 65%;\n  overflow: hidden;\n}\n\n.listing__image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.listing__details {\n  height: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 25px;\n  position: relative;\n}\n\n.listing__type {\n  position: absolute;\n  font-size: 0.8rem;\n  right: 10px;\n  top: 10px;\n  background-color: rgb(223, 247, 255);\n  padding: 5px 10px;\n  border-radius: 15px;\n}\n\n.listing__row {\n  margin: 6px 0px;\n  display: flex;\n  align-items: center;\n}\n\n.listing__price {\n  font-family:'Barlow', sans-serif;\n  font-style: bold;\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n\n.listing__address {\n  color: #737373;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Modal.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Modal.scss ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n  font-family: \"Barlow\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  min-height: 600px;\n  border-radius: 20px;\n  position: relative;\n  background-color: white;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  display: flex;\n}\n.modal .slick-track {\n  height: 100%;\n}\n@media (min-width: 358px) {\n  .modal .slick-track {\n    height: 500px;\n  }\n}\n.modal .slick-next {\n  right: 10px;\n}\n.modal .slick-prev {\n  left: 10px;\n  z-index: 1;\n}\n.modal__image {\n  border-radius: 20px;\n}\n.modal__image img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.modal__info {\n  background-color: white;\n  display: flex;\n}\n.modal__row {\n  margin: 20px 0px;\n  display: flex;\n  text-align: center;\n}\n.modal__description-wrapper {\n  margin: 20px 0px;\n  text-align: left;\n  overflow-y: scroll;\n  display: flex;\n}\n.modal__price {\n  font-size: 1.5rem;\n  text-align: center;\n}\n@media (min-width: 785px) {\n  .modal__price {\n    font-size: 27px;\n  }\n}\n.modal__address {\n  font-size: 1.5rem;\n  color: #737373;\n}\n.modal__description {\n  color: #737373;\n  margin: 0px;\n  padding: 0px;\n  font-size: 1.25rem;\n}\n.modal__close-wrapper {\n  all: unset;\n  position: absolute;\n  cursor: pointer;\n}\n.modal__close-icon {\n  width: 40px;\n  height: 40px;\n}\n\n@media only screen {\n  .modal {\n    width: 90%;\n    height: auto;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n  }\n  .modal__image {\n    width: 100%;\n  }\n  .modal__info {\n    width: 100%;\n    height: 100%;\n    padding: 20px;\n    flex-direction: column;\n    align-items: center;\n  }\n  .modal__close-wrapper {\n    right: -20px;\n    top: -30px;\n  }\n  .modal__close-icon {\n    width: 35px;\n    height: 35px;\n    color: #cacaca;\n  }\n}\n@media only screen and (min-width: 1281px) {\n  .modal {\n    width: 80%;\n    height: 80%;\n    max-width: 1800px;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n    padding: 30px;\n  }\n  .modal__image {\n    width: calc(70% - 10px);\n    height: 100%;\n  }\n  .modal__info {\n    width: calc(30% - 10px);\n    height: 100%;\n    padding: 20px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .modal__close-wrapper {\n    right: 10px;\n    top: 10px;\n  }\n  .modal__close-icon {\n    color: #737373;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Objects/Card/Modal.scss"],"names":[],"mappings":"AAAA;EACE,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,uBAAA;EACA,iDAAA;EACA,aAAA;AACF;AACE;EACE,YAAA;AACJ;AACI;EAHF;IAIM,aAAA;EAEN;AACF;AACA;EACE,WAAA;AACF;AAEA;EACE,UAAA;EACA,UAAA;AAAF;AAGA;EACE,mBAAA;AADF;AAEE;EACE,sBAAA;KAAA,mBAAA;AAAJ;AAIA;EACE,uBAAA;EACA,aAAA;AAFF;AAKA;EACE,gBAAA;EACA,aAAA;EAGA,kBAAA;AALF;AAQA;EACE,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AANF;AAWA;EACE,iBAAA;EACA,kBAAA;AATF;AAWA;EAJA;IAKE,eAAA;EARA;AACF;AAeA;EACE,iBAAA;EACA,cAAA;AAbF;AAgBA;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAdF;AAiBA;EACE,UAAA;EACA,kBAAA;EACA,eAAA;AAfF;AAkBA;EACE,WAAA;EACA,YAAA;AAhBF;;AAqBA;EACE;IACE,UAAA;IACA,YAAA;IACA,sBAAA;IACA,8BAAA;IACA,mBAAA;IACA,aAAA;EAlBF;EAqBA;IACE,WAAA;EAnBF;EAsBA;IACE,WAAA;IACA,YAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;EApBF;EAuBA;IACE,YAAA;IACA,UAAA;EArBF;EAwBA;IACE,WAAA;IACA,YAAA;IACA,cAAA;EAtBF;AACF;AAyBA;EACE;IACE,UAAA;IACA,WAAA;IACA,iBAAA;IACA,8BAAA;IACA,mBAAA;IACA,mBAAA;IACA,aAAA;EAvBF;EA0BA;IACE,uBAAA;IACA,YAAA;EAxBF;EA2BA;IACE,uBAAA;IACA,YAAA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;EAzBF;EA4BA;IACE,WAAA;IACA,SAAA;EA1BF;EA6BA;IACE,cAAA;EA3BF;AACF","sourcesContent":[".modal {\n  font-family: 'Barlow', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  min-height: 600px;\n  border-radius: 20px;\n  position: relative;\n  background-color: white;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  display: flex;\n\n  .slick-track {\n    height: 100%;\n\n    @media (min-width: 358px) {\n        height: 500px;\n    }\n}\n\n.slick-next {\n  right: 10px;\n}\n\n.slick-prev {\n  left: 10px;\n  z-index: 1;\n}\n\n&__image {\n  border-radius: 20px;\n  img {\n    object-fit: contain;\n  }\n}\n\n&__info {\n  background-color: white;\n  display: flex;\n}\n\n&__row {\n  margin: 20px 0px;\n  display: flex;\n  // align-items: center;\n  // justify-content: center;\n  text-align: center;\n}\n\n&__description-wrapper {\n  margin: 20px 0px;\n  text-align: left;\n  overflow-y: scroll;\n  display: flex;\n  // align-items: flex-start;\n  // justify-content: flex-start;\n}\n\n&__price {\n  font-size: 1.5rem;\n  text-align: center;\n\n@media (min-width:785px) {\n  font-size: 27px;\n}\n\n// @media (min-width:1024px) {\n//   font-size: 3rem;\n// }\n}\n\n&__address {\n  font-size: 1.5rem;\n  color: #737373;\n}\n\n&__description {\n  color: #737373;\n  margin: 0px;\n  padding: 0px;\n  font-size: 1.25rem;\n}\n\n&__close-wrapper {\n  all: unset;\n  position: absolute;\n  cursor: pointer;\n}\n\n&__close-icon {\n  width: 40px;\n  height: 40px;\n}\n}\n\n\n@media only screen {\n  .modal {\n    width: 90%;\n    height: auto;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n  }\n\n  .modal__image {\n    width: 100%;\n  }\n\n  .modal__info {\n    width: calc(100%);\n    height: 100%;\n    padding: 20px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .modal__close-wrapper {\n    right: -20px;\n    top: -30px;\n  }\n\n  .modal__close-icon {\n    width: 35px;\n    height: 35px;\n    color: #cacaca;\n  }\n}\n\n@media only screen and (min-width: 1281px) {\n  .modal {\n    width: 80%;\n    height: 80%;\n    max-width: 1800px;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n    padding: 30px;\n  }\n\n  .modal__image {\n    width: calc(70% - 10px);\n    height: 100%;\n  }\n\n  .modal__info {\n    width: calc(30% - 10px);\n    height: 100%;\n    padding: 20px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .modal__close-wrapper {\n    right: 10px;\n    top: 10px;\n  }\n\n  .modal__close-icon {\n    color: #737373;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Overlay.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Overlay.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 100;\n  display: flex;\n}\n\n@media only screen {\n  .overlay {\n    overflow-y: scroll;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 40px 0px;\n  }\n}\n@media screen and (min-width: 1281px) {\n  .overlay {\n    justify-content: center;\n    align-items: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Objects/Card/Overlay.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,YAAA;EACA,aAAA;AACF;;AAEA;EACE;IACE,kBAAA;IACA,uBAAA;IACA,uBAAA;IACA,iBAAA;EACF;AACF;AAEA;EACE;IACE,uBAAA;IACA,mBAAA;EAAF;AACF","sourcesContent":[".overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 100;\n  display: flex;\n}\n\n@media only screen {\n  .overlay {\n    overflow-y: scroll;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 40px 0px;\n  }\n}\n\n@media screen and (min-width: 1281px) {\n  .overlay {\n    justify-content: center;\n    align-items: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/objects.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/objects.scss ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".objects {\n  text-align: center;\n  padding: 25px;\n}\n.objects__title {\n  margin: 40px 0 30px;\n}\n@media (min-width: 1024px) {\n  .objects__title {\n    margin: 100px 0 65px;\n  }\n}\n.objects__title .title {\n  color: black;\n}\n\n.properties {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/components/Objects/objects.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,aAAA;AACF;AACE;EACE,mBAAA;AACJ;AACI;EAHF;IAIM,oBAAA;EAEN;AACF;AADI;EACE,YAAA;AAGN;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,uBAAA;AAAF","sourcesContent":[".objects {\n  text-align: center;\n  padding: 25px;\n\n  &__title {\n    margin: 40px 0 30px;\n\n    @media (min-width:1024px) {\n        margin: 100px 0 65px;\n    }\n    .title{\n      color: black;\n    }\n}\n\n}\n\n.properties {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n// ::-webkit-scrollbar {\n//   width: 5px;\n//   background-color: transparent;\n// }\n\n// ::-webkit-scrollbar-thumb {\n//   background-color: #cacaca;\n//   border-radius: 5px;\n// }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Partners/partners.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Partners/partners.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".partners {\n  max-width: 100%;\n  height: 164px;\n  padding: 40px;\n  background: #195F85;\n  margin-top: 100px;\n}\n.partners .slick-slide img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: flex;\n  justify-content: space-between;\n  background-repeat: no-repeat;\n}\n.partners .slick-slide {\n  margin-left: 50px !important;\n}\n@media (min-width: 1024px) {\n  .partners .slick-slide {\n    margin-left: 100px !important;\n  }\n}\n.partners .slick-track {\n  height: 50px;\n}\n@media (min-width: 358px) {\n  .partners .slick-track {\n    height: 100px;\n  }\n}\n.partners ul.slick-dots {\n  display: none !important;\n}\n.partners ul.slick-dots::before {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/components/Partners/partners.scss"],"names":[],"mappings":"AAEA;EACI,eAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;AADJ;AAGI;EACI,oBAAA;KAAA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,4BAAA;AADR;AAII;EACI,4BAAA;AAFR;AAIQ;EAHJ;IAIQ,6BAAA;EADV;AACF;AAII;EACI,YAAA;AAFR;AAIQ;EAHJ;IAIQ,aAAA;EADV;AACF;AAII;EACI,wBAAA;AAFR;AAIQ;EACI,aAAA;AAFZ","sourcesContent":["\n\n.partners {\n    max-width: 100%;\n    height: 164px;\n    padding: 40px;\n    background: #195F85;\n    margin-top: 100px;\n\n    .slick-slide img {\n        object-fit: cover;\n        display: flex;\n        justify-content: space-between;\n        background-repeat: no-repeat;\n    }\n\n    .slick-slide {\n        margin-left: 50px!important;\n\n        @media (min-width: 1024px) {\n            margin-left: 100px!important;\n        }\n    }\n\n    .slick-track {\n        height: 50px;\n\n        @media (min-width: 358px) {\n            height: 100px;\n        }\n    }\n\n    ul.slick-dots {\n        display: none!important;\n\n        &::before {\n            display: none;\n        }\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Price/price.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Price/price.scss ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/price3.jpeg */ "./src/img/price3.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".price {\n  position: relative;\n}\n.price__img {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 355px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  opacity: 0.7;\n  width: 100%;\n  z-index: -1;\n}\n@media (min-width: 785px) {\n  .price__img {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 50%;\n    height: 355px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 50%;\n    overflow-y: hidden;\n  }\n}\n@media (min-width: 1024px) {\n  .price__img {\n    min-height: 675px;\n  }\n}\n@media (min-width: 1024px) {\n  .price {\n    min-height: 675px;\n  }\n}\n.price__title {\n  font-family: \"Barlow\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 19px;\n  text-align: center;\n  padding: 15px;\n  font-size: 24px;\n  text-transform: uppercase;\n  padding: 40px 0;\n}\n@media (min-width: 785px) {\n  .price__title {\n    font-size: 32px;\n    padding-right: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Price/price.scss"],"names":[],"mappings":"AAEA;EAII,kBAAA;AAJJ;AAMI;EACI,kBAAA;EACA,MAAA;EACA,QAAA;EACA,aAAA;EAEA,4BAAA;EACA,sBAAA;EACA,4BAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;AALR;AAOQ;EAbJ;IAcQ,kBAAA;IACA,MAAA;IACA,QAAA;IACA,UAAA;IACA,aAAA;IACA,yDAAA;IACA,4BAAA;IACA,sBAAA;IACA,4BAAA;IACA,kBAAA;EAJV;AACF;AAOQ;EA3BJ;IA4BQ,iBAAA;EAJV;AACF;AAOI;EAtCJ;IAwCQ,iBAAA;EALN;AACF;AAQI;EACI,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,yBAAA;EACA,eAAA;AANR;AAQQ;EAXJ;IAYQ,eAAA;IACA,kBAAA;EALV;AACF","sourcesContent":["\n\n.price {\n    // background-image: url(../../img/price-mob1.png);\n    // background-repeat: no-repeat;\n    // background-size: cover;\n    position: relative;\n\n    &__img {\n        position: absolute;\n        top: 0;\n        right: 0;\n        height: 355px;\n        // background-image: url(../../img/price3.jpeg);\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: 50% 50%;\n        opacity: 0.7;\n        width: 100%;\n        z-index: -1;\n\n        @media (min-width: 785px) {\n            position: absolute;\n            top: 0;\n            right: 0;\n            width: 50%;\n            height: 355px;\n            background-image: url(../../img/price3.jpeg);\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-position: 50% 50%;\n            overflow-y: hidden;\n            // opacity: 0.8;\n        }\n\n        @media (min-width: 1024px) {\n            min-height: 675px;\n        }\n    }\n\n    @media (min-width: 1024px) {\n        // background-image: url(../../img/price-desctop.png);\n        min-height: 675px;\n    }\n\n\n    &__title {\n        font-family: 'Barlow', sans-serif;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 19px;\n        text-align: center;\n        padding: 15px;\n        font-size: 24px;\n        text-transform: uppercase;\n        padding: 40px 0;\n\n        @media (min-width: 785px) {\n            font-size: 32px;\n            padding-right: 50%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/subtitle.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/subtitle.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".subtitle {\n  font-family: \"Barlow\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  color: #FFFFFF;\n}\n@media (min-width: 575px) {\n  .subtitle {\n    font-size: 20px;\n    line-height: 31px;\n  }\n}\n@media (min-width: 1024px) {\n  .subtitle {\n    font-size: 26px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Text/subtitle.scss"],"names":[],"mappings":"AAEA;EACI,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AADJ;AAGI;EATJ;IAUQ,eAAA;IACA,iBAAA;EAAN;AACF;AAEI;EAdJ;IAeQ,eAAA;EACN;AACF","sourcesContent":["\n\n.subtitle {\n    font-family: 'Barlow', sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 19px;\n    text-align: center;\n    color: #FFFFFF;\n\n    @media (min-width: 575px) {\n        font-size: 20px;\n        line-height: 31px;\n    }\n\n    @media (min-width: 1024px) {\n        font-size: 26px;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/title.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/title.scss ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\n  font-family: \"Barlow\", sans-serif;\n  font-style: bold;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 29px;\n  text-align: center;\n  color: white;\n}\n@media (min-width: 575px) {\n  .title {\n    font-size: 26px;\n  }\n}\n@media (min-width: 1024px) {\n  .title {\n    font-size: 32px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/Text/title.scss"],"names":[],"mappings":"AAEA;EACI,iCAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;AADJ;AAGI;EATJ;IAUQ,eAAA;EAAN;AACF;AAEI;EAbJ;IAcQ,eAAA;EACN;AACF","sourcesContent":["\n\n.title {\n    font-family:'Barlow', sans-serif;\n    font-style: bold;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 29px;\n    text-align: center;\n    color: white;\n\n    @media (min-width: 575px) {\n        font-size: 26px;\n    }\n\n    @media (min-width: 1024px) {\n        font-size: 32px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/fonts.scss */ "./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.scss");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nli {\n  list-style: none;\n}", "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAAJ;;AAGA;EACI,gBAAA;AAAJ","sourcesContent":["@import url(../fonts/fonts.scss);\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nli {\n    list-style: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.scss":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/fonts.scss ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/About/about.scss":
/*!*****************************************!*\
  !*** ./src/components/About/about.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./about.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/About/about.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Accordion/accordionCopy.scss":
/*!*****************************************************!*\
  !*** ./src/components/Accordion/accordionCopy.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordionCopy_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./accordionCopy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Accordion/accordionCopy.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordionCopy_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordionCopy_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordionCopy_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_accordionCopy_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Navbar/menu.scss":
/*!*****************************************!*\
  !*** ./src/components/Navbar/menu.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Navbar/navbar.scss":
/*!*******************************************!*\
  !*** ./src/components/Navbar/navbar.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Navbar/navbar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Objects/Card/Feature.scss":
/*!**************************************************!*\
  !*** ./src/components/Objects/Card/Feature.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Feature_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./Feature.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Feature.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Feature_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Feature_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Feature_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Feature_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Objects/Card/Listing.scss":
/*!**************************************************!*\
  !*** ./src/components/Objects/Card/Listing.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Listing_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./Listing.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Listing.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Listing_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Listing_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Listing_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Listing_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Objects/Card/Modal.scss":
/*!************************************************!*\
  !*** ./src/components/Objects/Card/Modal.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./Modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Modal.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Objects/Card/Overlay.scss":
/*!**************************************************!*\
  !*** ./src/components/Objects/Card/Overlay.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Overlay_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./Overlay.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/Card/Overlay.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Overlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Overlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Overlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Overlay_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Objects/objects.scss":
/*!*********************************************!*\
  !*** ./src/components/Objects/objects.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_objects_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./objects.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Objects/objects.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_objects_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_objects_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_objects_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_objects_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Partners/partners.scss":
/*!***********************************************!*\
  !*** ./src/components/Partners/partners.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_partners_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./partners.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Partners/partners.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_partners_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_partners_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_partners_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_partners_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Price/price.scss":
/*!*****************************************!*\
  !*** ./src/components/Price/price.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./price.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Price/price.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_price_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Text/subtitle.scss":
/*!*******************************************!*\
  !*** ./src/components/Text/subtitle.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./subtitle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/subtitle.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_subtitle_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Text/title.scss":
/*!****************************************!*\
  !*** ./src/components/Text/title.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./title.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Text/title.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_title_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/img/about.png":
/*!***************************!*\
  !*** ./src/img/about.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/89aebb2163eb73376341.png";

/***/ }),

/***/ "./src/img/btn.png":
/*!*************************!*\
  !*** ./src/img/btn.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fa88dfcbc093c6e96bf2.png";

/***/ }),

/***/ "./src/img/done.svg":
/*!**************************!*\
  !*** ./src/img/done.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/070c5475d387397078e3.svg";

/***/ }),

/***/ "./src/img/footer.png":
/*!****************************!*\
  !*** ./src/img/footer.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bcd0dd85d2bb2c25b177.png";

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/54de11d8ad662995362b.svg";

/***/ }),

/***/ "./src/img/price3.jpeg":
/*!*****************************!*\
  !*** ./src/img/price3.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bbcc272d5bfe3d05485c.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"scripts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_r"] = self["webpackChunkwebpack_r"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-icons_bi_index_esm_js-node_module-89f486"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=scripts.c1407feabb5b5f130e89.js.map