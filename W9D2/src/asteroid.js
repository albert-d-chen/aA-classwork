const MovingObject = require("./moving_object.js");
const Ship = require('./ship')
const Bullet = require('./bullet')
const Util = require('./util');

function Asteroid(options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.vel = Util.randomVec(5); 
    MovingObject.call(this, options); //call or apply?
    // this.color = Asteroid.COLOR;
    // this.radius = Asteroid.RADIUS;
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject){
  if(otherObject instanceof Ship){
    //console.log("hit");
    otherObject.relocate();
  }
  else if(otherObject instanceof Bullet){
    this.game.remove(this);
    this.game.remove(otherObject);
  }
  // do we still remove colliding asteroids?
}

Asteroid.COLOR = "red";
Asteroid.RADIUS = 10;


module.exports = Asteroid;