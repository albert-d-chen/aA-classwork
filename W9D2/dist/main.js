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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\")\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Asteroid(options) {\n    options.color = Asteroid.COLOR;\n    options.radius = Asteroid.RADIUS;\n    options.vel = Util.randomVec(5); \n    MovingObject.call(this, options); //call or apply?\n    // this.color = Asteroid.COLOR;\n    // this.radius = Asteroid.RADIUS;\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject){\n  if(otherObject instanceof Ship){\n    //console.log(\"hit\");\n    otherObject.relocate();\n  }\n  else if(otherObject instanceof Bullet){\n    this.game.remove(this);\n    this.game.remove(otherObject);\n  }\n  // do we still remove colliding asteroids?\n}\n\nAsteroid.COLOR = \"red\";\nAsteroid.RADIUS = 10;\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Bullet(options){\n    options.radius = Bullet.RADIUS;\n    options.color = Bullet.COLOR;\n    MovingObject.call(this, options);\n}\nBullet.RADIUS = 10;\nBullet.COLOR = \"black\";\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\n\n\n\n\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n//const Util = require('./util');\n\n\nfunction Game(){\n  this.asteroids = [];\n  this.bullets = [];\n  this.ship = new Ship({pos: this.randomPosition(), game: this});\n  this.addAsteroids();\n};\n\nGame.DIM_X = 800;\nGame.DIM_Y = 800;\nGame.NUM_ASTEROIDS = 10;\n\nGame.prototype.addAsteroids = function (){\n    for(let i = 0; i < Game.NUM_ASTEROIDS; i++){\n        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));\n    }\n}\n\nGame.prototype.randomPosition = function(){\n    return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];\n}\n\nGame.prototype.draw = function(ctx){\n    let allObjects = this.allObjects();\n    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);\n    // const img = new Image();\n    // img.onload = function() {\n    //   context.drawImage(img, 0, 0);\n    // }\n    // img.src = \"./space.jpg\"\n    // img.onload();\n    for(let i = 0; i < allObjects.length; i++){\n        //console.log(allObjects[i]);\n        allObjects[i].draw(ctx);\n    }\n}\n\nGame.prototype.moveObjects = function(){\n    let allObjects = this.allObjects();\n    //this.asteroids.forEach(function(ast){ast.move()});\n    for(let i = 0; i < allObjects.length; i++){\n      //console.log(this.asteroids[i])\n      allObjects[i].move(); //.call(this.asteroids[i]);\n    }\n}\n\nGame.prototype.wrap = function(pos){\n  // if x < 0 -> x+=Game.DIM\n  if(pos[0] > Game.DIM_X){\n    pos[0]%= Game.DIM_X;\n  }\n  else if(pos[0] < 0){\n    pos[0] += Game.DIM_X; // 806 -> 6; -6 -> 794\n  }\n  if(pos[1] > Game.DIM_Y){\n    pos[1] %= Game.DIM_Y;\n  }\n  else if(pos[1] < 0){\n    pos[1] += Game.DIM_Y;\n  }\n  return pos;\n}\n\nGame.prototype.checkCollisions = function() {\n    let allObjects = this.allObjects();\n    for (let i = 0; i < allObjects.length; i++) {\n        for (let j = i + 1; j < allObjects.length; j++) {\n            let asteroid1 = allObjects[i];\n            let asteroid2 = allObjects[j];\n\n            if (asteroid1.isCollidedWith(asteroid2)) {\n                //console.log(\"hit game\");\n                asteroid1.collideWith(asteroid2);\n            }\n        }\n    }\n}\n\nGame.prototype.step = function(){\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(obj){\n  if(obj instanceof Asteroid){\n    const idx = this.asteroids.indexOf(obj);\n    this.asteroids.splice(idx, 1);\n  }\n  else if(obj instanceof Bullet){\n    const idx = this.bullets.indexOf(obj);\n    this.bullets.splice(idx, 1);\n  }\n}\n\nGame.prototype.allObjects = function() {\n    // console.log(this.asteroids.concat([this.ship]));\n    return this.asteroids.concat([this.ship], this.bullets);\n}\n\nGame.prototype.isOutOfBounds = function (pos) {\n    return (pos[0] < 0) || (pos[0] > Game.DIM_X) || (pos[1] < 0) || (pos[1] > Game.DIM_Y);\n}\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx){\n    this.game = new Game();\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n    let that = this;\n    this.bindKeyHandlers();\n    setInterval(this.game.step.bind(this.game), 20);\n    setInterval(function(){that.game.draw(that.ctx)}, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function(){\n    let that = this;\n    key('a', function(){that.game.ship.power([-1,0])});\n    key('s', function(){that.game.ship.power([0,1])});\n    key('w', function(){that.game.ship.power([0,-1])});\n    key('d', function(){that.game.ship.power([1,0])});\n    key('space', function(){that.game.ship.fireBullet()});\n}\n\nmodule.exports = GameView; \n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log('Webpack is working!');\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// const MovingObject = require(\"./moving_object.js\");\n// window.MovingObject = MovingObject;\n\n// const Asteroid = require(\"./asteroid.js\");\n// window.Asteroid = Asteroid;\n\n\n// const mo = new MovingObject({\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// });\n\n// const ast = new Asteroid({\n//   pos: [100,100]\n// })\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function(){\n\n  //const canvasElement = document.getElementsByTagName(\"canvas\")[0];\n  const canvasElement = document.getElementById(\"game-canvas\");\n  const context = canvasElement.getContext(\"2d\");\n  // mo.move();\n  // mo.draw(context);\n  // ast.move();\n  // ast.draw(context);\n  \n\n  new GameView(context).start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject(options){\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    if(this.isWrappable){\n    this.pos = this.game.wrap(this.pos);\n    }\n    else if (this.game.isOutOfBounds(this.pos)){\n        this.game.remove(this);\n    }\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    return Util.distance(this.pos, otherObject.pos) < (this.radius + otherObject.radius);\n}\n\nMovingObject.prototype.collideWith = function (otherObject) {\n    // this.game.remove(this);\n    // this.game.remove(otherObject);\n}\n\nMovingObject.prototype.isWrappable = true;\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nfunction Ship(options) {\n    options.radius = Ship.RADIUS;\n    options.color = Ship.COLOR;\n    options.vel = [0,0];\n\n    MovingObject.call(this, options);\n}\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function(){\n    this.pos = this.game.randomPosition();\n    this.vel = [0,0];\n}\n\nShip.prototype.power = function(impulse){\n    this.vel[0] += impulse[0];\n    this.vel[1] += impulse[1];\n}\n\nShip.prototype.fireBullet = function(){\n  let bulletVel = [this.vel[0]*2, this.vel[1]*2];\n  let bullet = new Bullet({pos: [this.pos[0], this.pos[1]], vel: bulletVel, game: this.game});\n  this.game.bullets.push(bullet);\n}\n\nShip.RADIUS = 30;\nShip.COLOR = \"blue\";\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        Surrogate = function() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n  // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n    distance(pos1, pos2){\n        return Math.sqrt((pos1[0] - pos2[0])**2 + (pos1[1] - pos2[1])**2);\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });