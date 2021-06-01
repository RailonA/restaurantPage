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

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayContact\": () => (/* binding */ DisplayContact)\n/* harmony export */ });\n/* eslint-disable */ \nconst DisplayContact = (function () {\n  return {\n      displayContact: function () {\n          const main = document.querySelector('main');\n          const homeLink = document.querySelector(\"#home-link\");\n          const menuLink = document.querySelector(\"#menu-link\");\n          const contactLink = document.querySelector('#contact-link');\n          homeLink.classList.remove('active');\n          menuLink.classList.remove('active');\n          contactLink.classList.add('active');\n                  main.innerHTML = `<div class=\"container \">\n\n                  <div class=\"rowOne d-flex flex-column col-12\">\n                    \n                    <h1 class=\"header-title d-flex justify-content-center\"> Contact </h1>\n                    <hr>\n                    <div class=\"col-12 d-flex pr-5\">\n                      <div class=\"col-sm-6\">\n                        <iframe width=\"100%\" height=\"320px;\" frameborder=\"0\" style=\"border:0\"\n                          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5538.622139199621!2d-74.82882132173242!3d11.008790582397756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c84c74a8641276e!2sTEXANO%201931%20COMIDAS%20RAPIDAS%20Y%20ASADOS!5e0!3m2!1ses!2sco!4v1622259091106!5m2!1ses!2sco\"\n                          allowfullscreen></iframe>\n                      </div>\n                    \n                      <div class=\"col-sm-6  \">\n                        <form action=\"form.php\" class=\"contact-form\" method=\"post\">\n                    \n                          <div class=\"form-group m-3\">\n                            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"nm\" placeholder=\"Name\" required=\"\" autofocus=\"\">\n                          </div>\n                    \n                    \n                          <div class=\"form-group form_left m-3\">\n                            <input type=\"email\" class=\"form-control\" id=\"email\" name=\"em\" placeholder=\"Email\" required=\"\">\n                          </div>\n                    \n                          <div class=\"form-group m-3\">\n                            <textarea class=\"form-control textarea-contact\" rows=\"5\" id=\"comment\" name=\"FB\"\n                              placeholder=\"Type Your Message/Feedback here...\" required=\"\"></textarea>\n                            <br>\n                            <button class=\"btn btn-dark\"> <i class=\"fas fa-paper-plane\"></i> Send </button>\n                          </div>\n                        </form>\n                      </div>\n                  </div>\n\n                  <div class=\"rowTwo d-flex\">\n                  <div class=\"container my-2\">\n                  <div class=\"row background\">\n                    <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n                      <div class=\"box\">\n                        <div class=\"icon\">\n                          <div class=\"info\">\n                            <h3 class=\"title\">MAIL</h3>\n                            <p>\n                              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> thisrestaurant@myrestaurant.com\n                            </p>\n                          </div>\n                        </div>\n                        <div class=\"space\"></div>\n                      </div>\n                    </div>\n                  \n                    <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n                      <div class=\"box\">\n                        <div class=\"icon\">\n                          <div class=\"info\">\n                            <h3 class=\"title\">CONTACT</h3>\n                            <p>\n                              <i class=\"fab fa-whatsapp-square\"></i> (+57)-9624XXXXX\n                            </p>\n                          </div>\n                        </div>\n                        <div class=\"space\"></div>\n                      </div>\n                    </div>\n                  \n                    <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n                      <div class=\"box\">\n                        <div class=\"icon\">\n                          <div class=\"info\">\n                            <h3 class=\"title\">ADDRESS</h3>\n                            <p>\n                              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> 15/3 Junction Plot Shree Krishna Krupa\",\n                              Rajkot - 360001.\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                </div>\n\n            </div>`   \n                  \n        }\n        \n    };\n})();\n\n\n//# sourceURL=webpack://restaurentpage/./src/contactUs.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayHome\": () => (/* binding */ DisplayHome)\n/* harmony export */ });\nconst DisplayHome = (function () {\n  return {\n    displayHome: function () {\n      const main = document.querySelector('main');\n      const homeLink = document.querySelector('#home-link');\n      const menuLink = document.querySelector('#menu-link');\n      const contactLink = document.querySelector('#contact-link');\n      homeLink.classList.add('active');\n      menuLink.classList.remove('active');\n      contactLink.classList.remove('active');\n      const body = document.querySelector('main');\n      const logo = document.createElement('img');\n      const backgroundDiv = document.createElement('div');\n      const contentText = document.createElement('h5');\n      backgroundDiv.classList.add('myDiv');\n      logo.src = './images/logo.png';\n      logo.classList.add('rounded-circle', 'd-flex');\n      backgroundDiv.classList.add('justify-content-center');\n      main.classList.add( 'mt-5');\n      main.innerHTML = ``;\n      backgroundDiv.classList.add('justify-content-center');\n      contentText.classList.add('card-content', 'd-flex', 'justify-content-center');\n      contentText.textContent = 'Welcome to the best Restaurent in town';\n      backgroundDiv.classList.add('background');\n      logo.src = './images/logo.png';\n      logo.classList.add('rounded-circle', 'my-2');\n      main.classList.add('my-2', 'mx-auto');\n      main.innerHTML = ``;\n      backgroundDiv.appendChild(logo);\n      backgroundDiv.appendChild(contentText);\n      body.appendChild(backgroundDiv);\n      main.appendChild(backgroundDiv);\n    \n         }        \n     };\n  })();\n  \n\n\n\n//# sourceURL=webpack://restaurentpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contactUs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactUs.js */ \"./src/contactUs.js\");\n\n\n\nconst header = document.createElement('header');\nconst contentSelector = document.querySelector('#content');\nheader.innerHTML = `\n    <nav class = 'navbar navbar-expand navbar-dark bg-dark'>\n    <div class = 'container-fluid'>\n      <div class = 'collapse navbar-collapse' id = 'navbarsExample02'>\n        <ul class = 'navbar-nav mx-auto'>\n          <li class = 'nav-item'>\n            <a class = 'nav-link active' aria-current = 'page' href = '#' id = 'home-link'>Home</a>\n          </li>\n          <li class = 'nav-item'>\n            <a class = 'nav-link' href = '#' id = 'menu-link'>Menu</a>\n          </li>\n          <li class = 'nav-item'>\n            <a class = 'nav-link' href = '#' id = 'contact-link'>Contact Us</a>\n          </li>\n        </ul>\n        </div>\n    </div>\n    </nav>\n    `;\ncontentSelector.append(header);\nconst main = document.createElement('main');\ncontentSelector.append(main);\nconst homeLink = document.querySelector('#home-link');\nconst menuLink = document.querySelector('#menu-link');\nconst contactLink = document.querySelector('#contact-link');\nconst footer = document.createElement('footer');\n\n  _home_js__WEBPACK_IMPORTED_MODULE_0__.DisplayHome.displayHome(\n  homeLink.addEventListener('click', () => { _home_js__WEBPACK_IMPORTED_MODULE_0__.DisplayHome.displayHome() }),\n  menuLink.addEventListener('click', () => { _menu_js__WEBPACK_IMPORTED_MODULE_1__.DisplayMenu.displayMenu() }),\n  contactLink.addEventListener('click', () => { _contactUs_js__WEBPACK_IMPORTED_MODULE_2__.DisplayContact.displayContact() }),\n  footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0'),\n  footer.innerHTML=`\n  <div class='container text-center'>\n    <a href='https://www.freepik.com/photos/background' class='text-muted'>This is the footer</a>\n  </div>`);\ncontentSelector.append(footer);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurentpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayMenu\": () => (/* binding */ DisplayMenu)\n/* harmony export */ });\nconst DisplayMenu = (function () {\n  return {\n    displayMenu: function () {\n      const main = document.querySelector('main');\n      const homeLink = document.querySelector('#home-link');\n      const menuLink = document.querySelector('#menu-link');\n      const contactLink = document.querySelector('#contact-link');\n      homeLink.classList.remove('active');\n      menuLink.classList.add('active');\n      contactLink.classList.remove('active');\n      main.classList.add('align-self-center', 'mt-5', 'justify-content-center');\n\n      main.innerHTML = `\n                  <div class='container '>\n                  <div class='hero'>\n                  <h1 class='d-flex justify-content-center m-5' >Menu</h1>\n                  </div>\n                  <div class='menu-container col-12 d-flex flex-wrap justify-content-center'>\n                     <div class='menu-item col-3 justify-content-center'>\n                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />\n                           <div class='item-content col-6'>\n                              <h4 class='text-center'>Hamburger: <span>$2.49</span></h4>\n                              <p class='text-center'>\n                              Buns, patty, tomato, onions, lettuce, and our secret family\n                              recipe.\n                              </p>\n                           </div>\n                     </div>\n                     <div class='menu-item col-3 justify-content-center'>\n                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />\n                           <div class='item-content col-6'>\n                              <h4 class='text-center'>Cheeseburger: <span>$2.99</span></h4>\n                              <p class='text-center'>Similar to our hamburger, but with cheese.</p>\n                           </div>\n                     </div>\n                     <div class='menu-item col-3 justify-content-center'>\n                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />\n                        <div class='item-content col-6'>\n                           <h4 class='text-center'>Double Cheeseburger: <span>$3.49</span></h4>\n                           <p class='text-center'>Similar to our cheeseburger, but with an extra patty.</p>\n                        </div>\n                     </div>\n                     <div class='menu-item col-3 justify-content-center'>\n                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />\n                        <div class='item-content col-6'>\n                           <h4 class='text-center'>Steak: <span>$11.99</span></h4>\n                           <p class='text-center'>A juicy steak made just how you like it.</p>\n                        </div>\n                     </div>\n                     <div class='menu-item col-3 justify-content-center'>\n                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />\n                        <div class='item-content col-6'>\n                           <h4 class='text-center'>BBQ Ribs: <span>$8.99</span></h4>\n                           <p class='text-center'>Barbecue ribs with your choice of a add-ons.</p>\n                        </div>\n                     </div>\n                     <div class='menu-item col-3 justify-content-center'>\n                        <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />\n                        <div class='item-content col-6'>\n                           <h4 class='text-center'>BBQ Ribs: <span>$8.99</span></h4>\n                           <p class='text-center'>Barbecue ribs with your choice of a add-ons.</p>\n                        </div>\n                     </div>\n                     <div class='menu-item col-3 justify-content-center'>\n                     <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />\n                     <div class='item-content col-6'>\n                        <h4 class='text-center'>Caesar Salad: <span>$7.99</span></h4>\n                        <p class='text-center'>\n                        Your typical caesar salad that comes with your choice of\n                        dressings.\n                        </p>\n                     </div>\n                  </div>\n                  <div class='menu-item col-3 justify-content-center'>\n                  <img class='menu-img d-flex justify-content-center' src='https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg' alt='' />\n                     <div class='item-content col-6'>\n                        <h4 class='text-center'>French Fries: <span>$1.99</span></h4>\n                        <p class='text-center'>\n                        Sometimes you don't want to eat your burger alone, why not add\n                        some french fries?\n                        </p>\n                     </div>\n                  </div>\n                  </div>\n\n                  </div>`;\n                  }       \n  };\n})();\n\n\n//# sourceURL=webpack://restaurentpage/./src/menu.js?");

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