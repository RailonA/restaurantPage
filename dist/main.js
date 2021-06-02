/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderContactPage = (() => ({\n  displayContact() {\n    const main = document.querySelector('#content');\n    const homeLink = document.querySelector('#home-link');\n    const menuLink = document.querySelector('#menu-link');\n    const contactLink = document.querySelector('#contact-link');\n    const bodySel = document.querySelector('body');\n    bodySel.classList.remove('bodyBackground2');\n    homeLink.classList.remove('active');\n    menuLink.classList.remove('active');\n    contactLink.classList.add('active');\n    main.innerHTML = `<div class=\"background my-2 \">\n\n                  <div class=\"row \">\n                    <h1 class=\"header-title d-flex justify-content-center\"> Contact </h1>\n                    <hr>\n                    <div class=\"col-sm-6\">\n                      <iframe width=\"100%\" height=\"320px;\" frameborder=\"0\" style=\"border:0\"\n                        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5538.622139199621!2d-74.82882132173242!3d11.008790582397756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c84c74a8641276e!2sTEXANO%201931%20COMIDAS%20RAPIDAS%20Y%20ASADOS!5e0!3m2!1ses!2sco!4v1622259091106!5m2!1ses!2sco\"\n                        allowfullscreen></iframe>\n                    </div>\n                  \n                    <div class=\"col-sm-6 background\">\n                      <form action=\"form.php\" class=\"contact-form\" method=\"post\">\n                  \n                        <div class=\"form-group\">\n                          <input type=\"text\" class=\"form-control\" id=\"name\" name=\"nm\" placeholder=\"Name\" required=\"\">\n                        </div>\n                  \n                  \n                        <div class=\"form-group form_left\">\n                          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"em\" placeholder=\"Email\" required=\"\">\n                        </div>\n                  \n                        <div class=\"form-group\">\n                          <textarea class=\"form-control textarea-contact\" rows=\"5\" id=\"comment\" name=\"FB\"\n                            placeholder=\"Tips in finding you will be helpful\" required=\"\"></textarea>\n                          <br>\n                          <button class=\"btn btn-dark\"> <i class=\"fas fa-paper-plane\"></i> Send </button>\n                        </div>\n                      </form>\n                    </div>\n\n                  </div>\n                  \n                  \n                  <div class=\"container my-2\">\n                  <div class=\"row background \">\n                    <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n                      <div class=\"box\">\n                        <div class=\"icon\">\n                          <div class=\"info\">\n                            <h3 class=\"title\">MAIL</h3>\n                            <p>\n                              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> railonacosta@gmail.com\n                            </p>\n                          </div>\n                        </div>\n                        <div class=\"space\"></div>\n                      </div>\n                    </div>\n                  \n                    <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n                      <div class=\"box\">\n                        <div class=\"icon\">\n                          <div class=\"info\">\n                            <h3 class=\"title\">CONTACT</h3>\n                            <p>\n                              <i class=\"fab fa-whatsapp-square\"></i> 123-456-7890\n                            </p>\n                          </div>\n                        </div>\n                        <div class=\"space\"></div>\n                      </div>\n                    </div>\n                  \n                    <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n                      <div class=\"box\">\n                        <div class=\"icon\">\n                          <div class=\"info\">\n                            <h3 class=\"title\">ADDRESS</h3>\n                            <p>\n                              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> ABC Street 123 \n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  </div>\n                  </div>`;\n  },\n}))();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContactPage);\n\n//# sourceURL=webpack://restaurentpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHomePage = (() => ({\n  displayHome() {\n    const main = document.querySelector('#content');\n    const homeLink = document.querySelector('#home-link');\n    const menuLink = document.querySelector('#menu-link');\n    const contactLink = document.querySelector('#contact-link');\n    const bodySel = document.querySelector('body');\n    bodySel.classList.remove('bodyBackground2');\n    homeLink.classList.add('active');\n    menuLink.classList.remove('active');\n    contactLink.classList.remove('active');\n    const logo = document.createElement('img');\n    const backgroundDiv = document.createElement('div');\n    const title = document.createElement('h1');\n    const description = document.createElement('h4');\n    const divDescription = document.createElement('div');\n    backgroundDiv.classList.add('description-mw', 'background');\n\n    divDescription.classList.add('d-flex', 'justify-content-center');\n    description.classList.add('d-flex', 'justify-content-center');\n    title.classList.add('d-flex', 'justify-content-center');\n    description.textContent = 'We make eating good in the woods feel safe';\n    logo.src = './images/logo.png';\n    logo.classList.add('logo');\n    title.textContent = 'Welcome to';\n    main.innerHTML = '';\n    main.classList.add('mx-auto');\n    main.append(backgroundDiv);\n    backgroundDiv.appendChild(title);\n    backgroundDiv.appendChild(logo);\n    backgroundDiv.appendChild(divDescription);\n    divDescription.appendChild(description);\n  },\n}))();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomePage);\n\n//# sourceURL=webpack://restaurentpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n\n\nconst homeLink = document.querySelector('#home-link');\nconst menuLink = document.querySelector('#menu-link');\nconst contactLink = document.querySelector('#contact-link');\n\nhomeLink.addEventListener('click', () => { _home__WEBPACK_IMPORTED_MODULE_1__.default.displayHome(); });\nmenuLink.addEventListener('click', () => { _menu__WEBPACK_IMPORTED_MODULE_2__.default.displayMenu(); });\ncontactLink.addEventListener('click', () => { _contact__WEBPACK_IMPORTED_MODULE_3__.default.displayContact(); });\n\n_home__WEBPACK_IMPORTED_MODULE_1__.default.displayHome();\n\n//# sourceURL=webpack://restaurentpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderMenuPage = (() => ({\n  displayMenu() {\n    const main = document.querySelector('#content');\n    const homeLink = document.querySelector('#home-link');\n    const menuLink = document.querySelector('#menu-link');\n    const contactLink = document.querySelector('#contact-link');\n    const bodySel = document.querySelector('body');\n    bodySel.classList.add('bodyBackground2');\n    main.classList.add('mx-auto');\n    homeLink.classList.remove('active');\n    menuLink.classList.add('active');\n    contactLink.classList.remove('active');\n    main.innerHTML = '';\n    renderMenuPage.card('./images/burger.jpg', 'Burger', 'Food Discription', '20.00');\n    renderMenuPage.card('./images/burger.jpg', 'Burger', 'Food Discription', '20.00');\n    renderMenuPage.card('./images/burger.jpg', 'Burger', 'Food Discription', '20.00');\n    renderMenuPage.card('./images/burger.jpg', 'Burger', 'Food Discription', '20.00');\n  },\n  card(picture, title, description, price) {\n    const main = document.querySelector('#content');\n    const divCard = document.createElement('div');\n    const cardImage = document.createElement('img');\n    const cardTitle = document.createElement('h4');\n    const cardText = document.createElement('h5');\n    const priceTag = document.createElement('h5');\n    main.classList.add('my-2', 'col-8', 'd-flex', 'flex-wrap', 'justify-content-center');\n    divCard.classList.add('col-4', 'background', 'm-4');\n    cardImage.src = picture;\n    cardImage.classList.add('rounded-circle', 'd-flex', 'justify-content-center', 'col-6', 'ml-50');\n    cardTitle.classList.add('card-title', 'd-flex', 'justify-content-center');\n    cardTitle.textContent = title;\n    cardText.classList.add('card-text', 'd-flex', 'justify-content-center');\n    cardText.textContent = description;\n    priceTag.textContent = `Price  USD  $: ${price}`;\n    divCard.append(cardImage);\n    divCard.append(cardTitle);\n    divCard.append(cardText);\n    divCard.append(priceTag);\n    main.append(divCard);\n  },\n}))();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);\n\n\n//# sourceURL=webpack://restaurentpage/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageLoad = (() => {\n  const contentContainer = document.querySelector('body');\n  const header = document.createElement('header');\n  header.innerHTML = `\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav mx-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" id=\"home-link\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" id=\"menu-link\">Menu</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" id=\"contact-link\">Contact Us</a>\n        </li>\n      </ul>\n      </div>\n  </div>\n  </nav>\n  `;\n  const main = document.createElement('div');\n  main.setAttribute('id', 'content');\n\n  const footer = document.createElement('footer');\n\n  footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0', 'col-12', 'align-self-center');\n  footer.innerHTML = `\n  <div class=\"container text-center\">\n    <a href='https://www.freepik.com/photos/background' class='text-muted'>Background photo created by - www.freepik.com</a>\n  </div>`;\n\n  contentContainer.append(header);\n  contentContainer.append(main);\n  contentContainer.append(footer);\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurentpage/./src/pageload.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;