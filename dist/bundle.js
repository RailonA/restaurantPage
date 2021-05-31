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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayContact\": () => (/* binding */ DisplayContact)\n/* harmony export */ });\n\r\nvar DisplayContact = (function () {\r\n    return {\r\n        displayContact: function () {\r\n            const main = document.querySelector('main');\r\n            const homeLink = document.querySelector(\"#home-link\");\r\n            const menuLink = document.querySelector(\"#menu-link\");\r\n            const contactLink = document.querySelector('#contact-link');\r\n            homeLink.classList.remove('active');\r\n            menuLink.classList.remove('active');\r\n            contactLink.classList.add('active');\r\n                    main.innerHTML = `<div class=\"container\">\r\n\r\n                    <div class=\"row\">\r\n                      <h1 class=\"header-title\"> Contact </h1>\r\n                      <hr>\r\n                      <div class=\"col-sm-6\">\r\n                        <iframe width=\"100%\" height=\"320px;\" frameborder=\"0\" style=\"border:0\"\r\n                          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5538.622139199621!2d-74.82882132173242!3d11.008790582397756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c84c74a8641276e!2sTEXANO%201931%20COMIDAS%20RAPIDAS%20Y%20ASADOS!5e0!3m2!1ses!2sco!4v1622259091106!5m2!1ses!2sco\"\r\n                          allowfullscreen></iframe>\r\n                      </div>\r\n                    \r\n                      <div class=\"col-sm-6\">\r\n                        <form action=\"form.php\" class=\"contact-form\" method=\"post\">\r\n                    \r\n                          <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"nm\" placeholder=\"Name\" required=\"\" autofocus=\"\">\r\n                          </div>\r\n                    \r\n                    \r\n                          <div class=\"form-group form_left\">\r\n                            <input type=\"email\" class=\"form-control\" id=\"email\" name=\"em\" placeholder=\"Email\" required=\"\">\r\n                          </div>\r\n                    \r\n                          <div class=\"form-group\">\r\n                            <textarea class=\"form-control textarea-contact\" rows=\"5\" id=\"comment\" name=\"FB\"\r\n                              placeholder=\"Type Your Message/Feedback here...\" required=\"\"></textarea>\r\n                            <br>\r\n                            <button class=\"btn btn-dark\"> <i class=\"fas fa-paper-plane\"></i> Send </button>\r\n                          </div>\r\n                        </form>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    </div>\r\n                    \r\n                    <div class=\"container second-portion\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-12 col-sm-6 col-lg-4\">\r\n                        <div class=\"box\">\r\n                          <div class=\"icon\">\r\n                            <div class=\"info\">\r\n                              <h3 class=\"title\">MAIL</h3>\r\n                              <p>\r\n                                <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> thisrestaurant@myrestaurant.com\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"space\"></div>\r\n                        </div>\r\n                      </div>\r\n                    \r\n                      <div class=\"col-xs-12 col-sm-6 col-lg-4\">\r\n                        <div class=\"box\">\r\n                          <div class=\"icon\">\r\n                            <div class=\"info\">\r\n                              <h3 class=\"title\">CONTACT</h3>\r\n                              <p>\r\n                                <i class=\"fab fa-whatsapp-square\"></i> (+57)-9624XXXXX\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"space\"></div>\r\n                        </div>\r\n                      </div>\r\n                    \r\n                      <div class=\"col-xs-12 col-sm-6 col-lg-4\">\r\n                        <div class=\"box\">\r\n                          <div class=\"icon\">\r\n                            <div class=\"info\">\r\n                              <h3 class=\"title\">ADDRESS</h3>\r\n                              <p>\r\n                                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> 15/3 Junction Plot Shree Krishna Krupa\",\r\n                                Rajkot - 360001.\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    </div>`   \r\n                   \r\n         }\r\n         \r\n     };\r\n  })();\r\n  \n\n//# sourceURL=webpack://restaurentpage/./src/contactUs.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayHome\": () => (/* binding */ DisplayHome)\n/* harmony export */ });\n// define module\r\n\r\nvar DisplayHome = (function () {\r\n    return {\r\n        displayHome: function () {\r\n            const main = document.querySelector('main');\r\n            const homeLink = document.querySelector(\"#home-link\");\r\n            const menuLink = document.querySelector(\"#menu-link\");\r\n            const contactLink = document.querySelector('#contact-link');\r\n            homeLink.classList.add('active');\r\n            menuLink.classList.remove('active');\r\n            contactLink.classList.remove('active');\r\n            const logo = document.createElement('img');\r\n            const backgroundDiv = document.createElement('div');\r\n            const description = document.createElement('h1');\r\n            backgroundDiv.classList.add('background');\r\n            logo.src='./images/logo.png'\r\n            logo.classList.add('rounded-circle', 'my-2');\r\n            main.classList.add('my-2','mx-auto');\r\n            description.textContent= \"Welcome\";\r\n            main.innerHTML = ``  \r\n            main.appendChild(backgroundDiv); \r\n            backgroundDiv.appendChild(description); \r\n            backgroundDiv.appendChild(logo); \r\n            \r\n         },\r\n         card: function(picture, title, description) {\r\n            const main = document.querySelector('main');\r\n            const divCard = document.createElement('div');\r\n            const cardImage = document.createElement('img');\r\n            const cardTitle = document.createElement('h5');\r\n            const cardText = document.createElement('h5');\r\n            divCard.classList.add('card', 'card-body', 'mb-3','rounded-circle');\r\n            cardImage.src = picture;\r\n            cardImage.classList.add('rounded-circle')\r\n            cardTitle.classList.add('card-title', 'd-flex', 'justify-content-center');\r\n            cardTitle.textContent = title;\r\n            \r\n            cardText.classList.add('card-text');\r\n            cardText.textContent = description;\r\n            \r\n            divCard.appendChild(cardImage);\r\n            divCard.appendChild(cardTitle);\r\n            divCard.appendChild(cardText);\r\n            main.appendChild(divCard);\r\n         }         \r\n     };\r\n  })();\r\n  \r\n\r\n\n\n//# sourceURL=webpack://restaurentpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contactUs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactUs.js */ \"./src/contactUs.js\");\n/* eslint-disable no-undef */\r\n// <body>\r\n//   <div id=\"content\">\r\n//   </div>\r\n// </body>\r\n\r\n \r\n  \r\n   \r\n \r\n\r\nconst header = document.createElement('header');\r\nconst contentSelector = document.querySelector('#content');\r\nheader.innerHTML = `<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"collapse navbar-collapse justify-content-md-center\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" id=\"home-link\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" id=\"menu-link\">Menu</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" id=\"contact-link\">Contact Us</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n</nav>`;\r\n\r\ncontentSelector.append(header);\r\nconst main = document.createElement('main');\r\ncontentSelector.append(main);\r\n\r\n_home_js__WEBPACK_IMPORTED_MODULE_0__.DisplayHome.displayHome()\r\nconst homeLink = document.querySelector(\"#home-link\");\r\nconst menuLink = document.querySelector(\"#menu-link\");\r\nconst contactLink = document.querySelector('#contact-link');\r\n\r\n\r\n// DisplayHome.card(\"./images/logo.png\",\"Logo\",\"this is the description\")\r\n// Display Menu Page  displayMenu();\r\n// MenuLink.addEventListener(\"click\", DisplayMenu.displayMenu())\r\nhomeLink.addEventListener(\"click\", () => { _home_js__WEBPACK_IMPORTED_MODULE_0__.DisplayHome.displayHome()})\r\nmenuLink.addEventListener(\"click\", () => { _menu_js__WEBPACK_IMPORTED_MODULE_1__.DisplayMenu.displayMenu()})\r\ncontactLink.addEventListener(\"click\", () => { _contactUs_js__WEBPACK_IMPORTED_MODULE_2__.DisplayContact.displayContact()})\r\n\r\nconst footer = document.createElement('footer');\r\n\r\nfooter.classList.add('py-4','bg-dark','flex-shrink-0');\r\nfooter.innerHTML=`\r\n<div class=\"container text-center\">\r\n  <a href='https://www.freepik.com/photos/background' class='text-muted'>This is the footer</a>\r\n</div>`;\r\n\r\ncontentSelector.append(footer);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurentpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayMenu\": () => (/* binding */ DisplayMenu)\n/* harmony export */ });\n\r\n\r\nvar DisplayMenu = (function () {\r\n\r\n\r\n                return {\r\n                    displayMenu: function () {\r\n                            // const main = document.querySelector('main');\r\n            \r\n                            const main = document.querySelector('main');\r\n\r\n                            const homeLink = document.querySelector(\"#home-link\");\r\n                            const menuLink = document.querySelector(\"#menu-link\");\r\n                            const contactLink = document.querySelector('#contact-link');\r\n                            homeLink.classList.remove('active');\r\n                            menuLink.classList.add('active');\r\n                            contactLink.classList.remove('active');\r\n            \r\n                // main.innerHTML = `\r\n                // <div class=\"card-group\">\r\n                // <div class=\"card\">\r\n                //     <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n                //     <div class=\"card-body\">\r\n                //     <h5 class=\"card-title\">Card title</h5>\r\n                //     <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n                //     <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                //     </div>\r\n                // </div>\r\n                // <div class=\"card\">\r\n                //     <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n                //     <div class=\"card-body\">\r\n                //     <h5 class=\"card-title\">Card title</h5>\r\n                //     <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                //     <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                //     </div>\r\n                // </div>\r\n                // <div class=\"card\">\r\n                //     <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n                //     <div class=\"card-body\">\r\n                //     <h5 class=\"card-title\">Card title</h5>\r\n                //     <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n                //     <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                //     </div>\r\n                // </div>\r\n                // </div>\r\n                // <div class=\"card-group\">\r\n                // <div class=\"card\">\r\n                //     <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n                //     <div class=\"card-body\">\r\n                //     <h5 class=\"card-title\">Card title</h5>\r\n                //     <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n                //     <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                //     </div>\r\n                // </div>\r\n                // <div class=\"card\">\r\n                //     <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n                //     <div class=\"card-body\">\r\n                //     <h5 class=\"card-title\">Card title</h5>\r\n                //     <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                //     <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                //     </div>\r\n                // </div>\r\n                // <div class=\"card\">\r\n                //     <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n                //     <div class=\"card-body\">\r\n                //     <h5 class=\"card-title\">Card title</h5>\r\n                //     <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n                //     <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                //     </div>\r\n                // </div>\r\n                // </div>\r\n                // <div class=\"card-group\">\r\n                // <div class=\"card\">\r\n                //     <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n                //     <div class=\"card-body\">\r\n                //     <h5 class=\"card-title\">Card title</h5>\r\n                //     <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n                //     <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                //     </div>\r\n                // </div>\r\n                // <div class=\"card\">\r\n                //     <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n                //     <div class=\"card-body\">\r\n                //     <h5 class=\"card-title\">Card title</h5>\r\n                //     <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                //     <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                //     </div>\r\n                // </div>\r\n                // <div class=\"card\">\r\n                //     <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\r\n                //     <div class=\"card-body\">\r\n                //     <h5 class=\"card-title\">Card title</h5>\r\n                //     <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n                //     <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n                //     </div>\r\n                // </div>\r\n                // </div>`\r\n                \r\n                  }       \r\n            };\r\n        })();\r\n\n\n//# sourceURL=webpack://restaurentpage/./src/menu.js?");

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