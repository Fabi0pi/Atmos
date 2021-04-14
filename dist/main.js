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

/***/ "./dist/js/index.js":
/*!**************************!*\
  !*** ./dist/js/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/function.js */ \"./dist/js/src/function.js\");\n/* IMPORT */\n \n\n\n /* INITIALIZE PARTICLES PLUGIN BACKGROUND */\n window.onload= function() {\n   var particles = Particles.init({\n     selector: '.background',\n     color: '#DA0463'\n   });\n };\n\n\n\n\n//# sourceURL=webpack://atmos/./dist/js/index.js?");

/***/ }),

/***/ "./dist/js/src/function.js":
/*!*********************************!*\
  !*** ./dist/js/src/function.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option.js */ \"./dist/js/src/option.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ \"./dist/js/src/map.js\");\n/********************************FUNCTIONS*************************************/\n/* IMPORT */\n\n\n\n// CONST, VAR\n let latlon;\n\n// EVENTS\n document.querySelector(\".findMe\").addEventListener(\"click\", currentPosition);\n document.querySelector(\".searchCity\").addEventListener(\"click\", searchCity);\n\n\n// SEARCH AIR QUALITY BY INPUT CITY NAME\nfunction searchCity(event) {\n  event.preventDefault();\n  latlon = _option_js__WEBPACK_IMPORTED_MODULE_0__.findCity.value;\n\n  fetch(\"https://api.waqi.info/feed/\" + latlon + \"/?token=\" + _map_js__WEBPACK_IMPORTED_MODULE_1__.air_key)\n  .then((result) => result.json())\n  .then((info) => {\n    (0,_option_js__WEBPACK_IMPORTED_MODULE_0__.changeDom)(info);\n    console.log(info);\n\n    _map_js__WEBPACK_IMPORTED_MODULE_1__.mymap.setView({\n      lat: _.get(info, \"data.city.geo[0]\", \"45.4642\"),\n      lng: _.get(info, \"data.city.geo[1]\", \"9.19\"),\n    },\n    11\n  );\n})\n.catch( error => {\n  console.error(error);\n});\n};\n\n\n// AIR QUALITY IN CURRENT POSITION\nfunction currentPosition(event) {\n  if('geolocation' in navigator) {                                              //CONSTATIAMO SE LA GEOLOCALIZZAZIONE DEL DISPOSITIVO è ATTIVA\n  console.log('Geolocation available');\n  event.preventDefault();\n\n  navigator.geolocation.getCurrentPosition((position) => {\n    console.log(position);\n    latlon  = `geo:${position.coords.latitude};${position.coords.longitude}`;\n    console.log(latlon);\n    _map_js__WEBPACK_IMPORTED_MODULE_1__.mymap.setView({\n      lat: `${position.coords.latitude}`,\n      lng: `${position.coords.longitude}`\n    },\n    12\n  );\n\n  fetch(\"https://api.waqi.info/feed/\" + latlon + \"/?token=\" + _map_js__WEBPACK_IMPORTED_MODULE_1__.air_key)\n  .then((result) => result.json())\n  .then((info) => (0,_option_js__WEBPACK_IMPORTED_MODULE_0__.changeDom)(info))\n  .catch( error => {\n    console.error(error);\n  });\n});\n} else {\n  console.log('Geolocation not available');\n}\n};\n\n \n\n\n//# sourceURL=webpack://atmos/./dist/js/src/function.js?");

/***/ }),

/***/ "./dist/js/src/map.js":
/*!****************************!*\
  !*** ./dist/js/src/map.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"air_key\": () => (/* binding */ air_key),\n/* harmony export */   \"mymap\": () => (/* binding */ mymap)\n/* harmony export */ });\n/************************************MAP***************************************/\n\n     let air_key = \"737a9039c70b8bf38434fc6c7ee5a92cbe620aea\";\n     let map_key = \"pk.eyJ1IjoiZmFiaTBwaSIsImEiOiJja24wMWdmczUwODR3Mm9scnN6YzNvZ3R4In0.qnNRbgYMZfBTecqYIYchRQ\";\n\n// MAP CREATION\nconst mymap = L.map('map').setView([50, 13], 4);\n\nconst tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {\n  attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n  maxZoom: 18,\n  id: 'mapbox/streets-v11',\n  tileSize: 512,\n  zoomOffset: -1,\n  accessToken: map_key,\n}).addTo(mymap);\n\n// AIR INFORMATION\nconst waqiLayer = L.tileLayer(\n  'https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token={accessToken}', {\n    attribution:'Air  Quality  Tiles  &copy;  <a  href=\"http://waqi.info\">waqi.info</a>',\n    accessToken: air_key,\n  }\n);\nmymap.addLayer(tiles).addLayer(waqiLayer);\n\n\n// EXPORT\n\n\n\n//# sourceURL=webpack://atmos/./dist/js/src/map.js?");

/***/ }),

/***/ "./dist/js/src/option.js":
/*!*******************************!*\
  !*** ./dist/js/src/option.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataProcess\": () => (/* binding */ dataProcess),\n/* harmony export */   \"findCity\": () => (/* binding */ findCity),\n/* harmony export */   \"changeDom\": () => (/* binding */ changeDom),\n/* harmony export */   \"cleanContainer\": () => (/* binding */ cleanContainer)\n/* harmony export */ });\n/**************************************OPITONS*********************************/\n\n// VARIABLES\n\nconst dataProcess = document.querySelector(\".dataProcess\");                     // DATAPROCESS: THE RESULT OF THE RESEARCH\nconst findCity = document.querySelector(\".nameCity\");\n\n// ARRAY COLORS AIR QUALITY\nconst colorArray = [\n  \"#05d48f\", //green\n  \"#fde153\", //yellow\n  \"#f8a858\", //orange\n  \"#f04a73\", //red\n  \"#b147e6\", //purple\n  \"#7a5f66\", //brown-ish\n  \"#797e85\", //gray\n];\n\n// UPDATE INFO\nfunction changeDom(information) {\n  cleanContainer();\n  generateDomElement(information);\n};\n\n// DATAPROCESS REGENERATION\nfunction cleanContainer() {\n  while (dataProcess.firstChild) {\n    dataProcess.removeChild(dataProcess.lastChild);\n  }\n};\n\n// CREATE ELEMENTS\nfunction generateDomElement(information) {\n  // ELEMENT\n  const city = document.createElement(\"h1\");\n  const aqi = document.createElement(\"p\");\n  const feedback = document.createElement(\"p\");\n\n  // ELEMENT CLASSES\n  city.classList.add(\"findCity\");\n  aqi.classList.add(\"aqi\");\n  feedback.classList.add(\"feedback\");\n\n  const aqiValue = _.get(information, \"data.aqi\", \"-\");\n  city.textContent = _.get(information, \"data.city.name\", \"No data available\");\n  aqi.textContent = `AQI: ${aqiValue}`;\n\n  // INFO DISPLAY\n  dataProcess.appendChild(city);\n  dataProcess.appendChild(aqi);\n  dataProcess.appendChild(feedback);\n\n  // CALL TYPESAIR FUNCTION\n  typesAirQuality(aqiValue, aqi, feedback);\n};\n\n//MANAGE THE DIFFERENT AIR QUALITY VALUES\nfunction typesAirQuality(aqiValue, aqi, feedback) {\n  if (aqiValue <= 50) {\n    aqi.style.background = colorArray[0];\n    feedback.innerHTML =\n    \"Air quality is considered satisfactory, and air pollution poses little or no risk\";\n  } else if (aqiValue <= 100) {\n    aqi.style.background = colorArray[1];\n    feedback.innerHTML =\n    \"Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.\";\n  } else if (aqiValue <= 150) {\n    aqi.style.background = colorArray[2];\n    feedback.innerHTML =\n    \"Members of sensitive groups may experience health effects. The general public is not likely to be affected.\";\n  } else if (aqiValue <= 200) {\n    aqi.style.background = colorArray[3];\n    feedback.innerHTML =\n    \"Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects\";\n  } else if (aqiValue <= 300) {\n    aqi.style.background = colorArray[4];\n    feedback.innerHTML =\n    \"Health warnings of emergency conditions. The entire population is more likely to be affected.\";\n  } else if (aqiValue > 300) {\n    aqi.style.background = colorArray[5];\n    feedback.innerHTML =\n    \"Health alert: everyone may experience more serious health effects.\";\n  } else {\n    aqi.style.background = colorArray[6];\n    result.innerHTML = \"No data available\";\n    feedback.innerHTML =\n    \"No data available for this city, please search again!\";\n  }\n};\n\n// EXPORTS\n\n\n\n//# sourceURL=webpack://atmos/./dist/js/src/option.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/js/index.js");
/******/ 	
/******/ })()
;