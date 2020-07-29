console.log('Webpack is working!');
const GameView = require("./game_view");
// const MovingObject = require("./moving_object.js");
// window.MovingObject = MovingObject;

// const Asteroid = require("./asteroid.js");
// window.Asteroid = Asteroid;


// const mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// });

// const ast = new Asteroid({
//   pos: [100,100]
// })




window.addEventListener('DOMContentLoaded', function(){

  //const canvasElement = document.getElementsByTagName("canvas")[0];
  const canvasElement = document.getElementById("game-canvas");
  const context = canvasElement.getContext("2d");
  // mo.move();
  // mo.draw(context);
  // ast.move();
  // ast.draw(context);
  

  new GameView(context).start();
})