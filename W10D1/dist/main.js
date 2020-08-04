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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n    constructor (nodes) {\n        this.nodes = nodes;\n    }\n\n    html(str) {\n        if (typeof str === 'string') {\n            this.nodes.forEach((node) => {\n                node.innerHTML = str;\n            })\n        } else if (this.nodes.length > 0) {\n            return this.nodes[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.html('');\n    }\n\n    append() {\n\n    }\n\n    attr(key, value){\n        if (typeof value === 'string') {\n            this.nodes.forEach((node) => {\n                node.setAttribute(key, value);\n            })\n        } else {\n            return this.nodes[0].getAttribute(key);\n        }\n    }\n\n    addClass(newClass) {\n        this.nodes.forEach((node) => {\n            node.classList.add(newClass);\n        })\n    }\n\n    removeClass(target) {\n        this.nodes.forEach((node) => {\n            node.classList.remove(target);\n        })\n    }\n\n    children() {\n        let childNodes = [];\n        this.each((node) => {\n            const childNodeList = node.children;\n            childNodes = childNodes.concat(Array.from(childNodeList));\n        });\n        return new DomNodeCollection(childNodes);\n    }\n\n    parent() {\n        const parentNodes = [];\n        this.nodesforEach(({ parentNode }) => {\n            if (!parentNode.visited) {\n                parentNodes.push(parentNode);\n                parentNode.visited = true;\n            }\n        });\n\n        parentNodes.forEach((node) => {\n            node.visited = false;\n        });\n        return new DomNodeCollection(parentNodes);\n    }\n\n    find(target) {\n        let foundNodes = [];\n        this.nodes.forEach((node) => {\n            const nodeList = node.querySelectorAll(target);\n            foundNodes = foundNodes.concat(Array.from(nodeList));\n        });\n        return new DomNodeCollection(foundNodes);\n    }\n}\n\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import DomNodeCollection from \"./dom_node_collection\";\nconst DomNodeCollection = __webpack_require__ (/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = (arg) => {\n    if (arg instanceof HTMLElement) {\n        return new DomNodeCollection([arg]);\n    } else if (arg instanceof String) {\n        const nodes = document.querySelectorAll(arg);\n        const nodesToArray = Array.from(nodes);\n        return new DomNodeCollection(nodesToArray);\n    }\n\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });