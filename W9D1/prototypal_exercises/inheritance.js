
//surrogate
Function.prototype.inherits1 = function(parent) {
    function Surrogate() {
        Surrogate.prototype = parent.prototype;
        this.prototype = new Surrogate();
        this.prototype.constructor = this;
    }
}

//object.create
Function.prototype.inherits2 = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

function MovingObject(name) { 
    this.name = name;
}

MovingObject.prototype.moves = function() {
    console.log(this.name + 'moves towards Earth');
}

function Ship(name, powerLevel, size) { 
    MovingObject.call(this, name);
    this.powerLevel = powerLevel;
    this.size = size;
}

Ship.inherits2(MovingObject);

Ship.prototype.shoots = function () {
    console.log(this.size + ' ' + this.name + ' shoots with ' + this.powerLevel + ' power');
}

function Asteroid(name, size) { 
    MovingObject.call(this, name);
    this.size = size;
}

Asteroid.inherits2(MovingObject);

Asteroid.prototype.explodes = function () {
    console.log(this.name + ' explodes');
}

const firstShip = new Ship('AA', 'over9000', 'huge');
firstShip.shoots();

const firstAsteroid = new Asteroid('Kepler43b')
firstAsteroid.explodes();