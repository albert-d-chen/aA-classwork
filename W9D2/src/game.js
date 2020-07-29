const Asteroid = require('./asteroid');
const Ship = require('./ship');
const Bullet = require('./bullet');
//const Util = require('./util');


function Game(){
  this.asteroids = [];
  this.bullets = [];
  this.ship = new Ship({pos: this.randomPosition(), game: this});
  this.addAsteroids();
};

Game.DIM_X = 800;
Game.DIM_Y = 800;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function (){
    for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
    }
}

Game.prototype.randomPosition = function(){
    return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
}

Game.prototype.draw = function(ctx){
    let allObjects = this.allObjects();
    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);
    // const img = new Image();
    // img.onload = function() {
    //   context.drawImage(img, 0, 0);
    // }
    // img.src = "./space.jpg"
    // img.onload();
    for(let i = 0; i < allObjects.length; i++){
        //console.log(allObjects[i]);
        allObjects[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function(){
    let allObjects = this.allObjects();
    //this.asteroids.forEach(function(ast){ast.move()});
    for(let i = 0; i < allObjects.length; i++){
      //console.log(this.asteroids[i])
      allObjects[i].move(); //.call(this.asteroids[i]);
    }
}

Game.prototype.wrap = function(pos){
  // if x < 0 -> x+=Game.DIM
  if(pos[0] > Game.DIM_X){
    pos[0]%= Game.DIM_X;
  }
  else if(pos[0] < 0){
    pos[0] += Game.DIM_X; // 806 -> 6; -6 -> 794
  }
  if(pos[1] > Game.DIM_Y){
    pos[1] %= Game.DIM_Y;
  }
  else if(pos[1] < 0){
    pos[1] += Game.DIM_Y;
  }
  return pos;
}

Game.prototype.checkCollisions = function() {
    let allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
        for (let j = i + 1; j < allObjects.length; j++) {
            let asteroid1 = allObjects[i];
            let asteroid2 = allObjects[j];

            if (asteroid1.isCollidedWith(asteroid2)) {
                //console.log("hit game");
                asteroid1.collideWith(asteroid2);
            }
        }
    }
}

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(obj){
  if(obj instanceof Asteroid){
    const idx = this.asteroids.indexOf(obj);
    this.asteroids.splice(idx, 1);
  }
  else if(obj instanceof Bullet){
    const idx = this.bullets.indexOf(obj);
    this.bullets.splice(idx, 1);
  }
}

Game.prototype.allObjects = function() {
    // console.log(this.asteroids.concat([this.ship]));
    return this.asteroids.concat([this.ship], this.bullets);
}

Game.prototype.isOutOfBounds = function (pos) {
    return (pos[0] < 0) || (pos[0] > Game.DIM_X) || (pos[1] < 0) || (pos[1] > Game.DIM_Y);
}
module.exports = Game;