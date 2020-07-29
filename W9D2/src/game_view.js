const Game = require('./game');

function GameView(ctx){
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function(){
    let that = this;
    this.bindKeyHandlers();
    setInterval(this.game.step.bind(this.game), 20);
    setInterval(function(){that.game.draw(that.ctx)}, 20);
}

GameView.prototype.bindKeyHandlers = function(){
    let that = this;
    key('a', function(){that.game.ship.power([-1,0])});
    key('s', function(){that.game.ship.power([0,1])});
    key('w', function(){that.game.ship.power([0,-1])});
    key('d', function(){that.game.ship.power([1,0])});
    key('space', function(){that.game.ship.fireBullet()});
}

module.exports = GameView; 