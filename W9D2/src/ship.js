const MovingObject = require('./moving_object');
const Util = require('./util');
const Bullet = require('./bullet');
function Ship(options) {
    options.radius = Ship.RADIUS;
    options.color = Ship.COLOR;
    options.vel = [0,0];

    MovingObject.call(this, options);
}
Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function(){
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
}

Ship.prototype.power = function(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function(){
  let bulletVel = [this.vel[0]*2, this.vel[1]*2];
  let bullet = new Bullet({pos: [this.pos[0], this.pos[1]], vel: bulletVel, game: this.game});
  this.game.bullets.push(bullet);
}

Ship.RADIUS = 30;
Ship.COLOR = "blue";

module.exports = Ship;