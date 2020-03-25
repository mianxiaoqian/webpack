/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * @Author: qianqian.zhao\n * @Date: 2020-03-25 18:32:18\n * @LastEditors: qianqian.zhao\n * @LastEditTime: 2020-03-25 18:44:58\n * @Description: commonJs 模块\n */\n\n module.exports = {\n   name: '辛巴',\n   age: '2',\n   changeAge () {\n     age = 3;\n   },\n   getAge () {\n     console.log(age);\n   }\n }\n\n document.write('common.js模块,对模块的依赖是动态的, 依赖关系建立发生在代码运行阶段')\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: default, miao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"miao\", function() { return miao; });\n/*\n * @Author: qianqian.zhao\n * @Date: 2020-03-25 18:32:31\n * @LastEditors: qianqian.zhao\n * @LastEditTime: 2020-03-25 18:44:17\n * @Description: es6 模块\n */\n\ndocument.write('es6模块, 对模块的依赖是静态的,依赖关系建立发生在代码编译阶段');\n function add () {\n\n }\n\n const miao = '小花';\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/*\n * @Author: qianqian.zhao\n * @Date: 2020-03-22 18:17:49\n * @LastEditors: qianqian.zhao\n * @LastEditTime: 2020-03-25 18:47:47\n * @Description: \n */\ndocument.write('我的webpack配置')\n\n\nconst requireCommon = false\nlet commonJs = null\nif (requireCommon) {\n  commonJs = __webpack_require__(/*! ./common.js */ \"./src/common.js\")\n}\ndocument.write(_content_js__WEBPACK_IMPORTED_MODULE_0__[\"miao\"]);\n// document.write(commonJs.name);\n// document.write(commonJs.age);\n// commonJs.changeAge();\n// document.write(commonJs.getAge());\n// document.write(commonJs.age);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });