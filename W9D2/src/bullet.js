const MovingObject = require('./moving_object');
const Util = require('./util');

function Bullet(options){
    options.radius = Bullet.RADIUS;
    options.color = Bullet.COLOR;
    MovingObject.call(this, options);
}
Bullet.RADIUS = 10;
Bullet.COLOR = "black";
Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;






module.exports = Bullet;