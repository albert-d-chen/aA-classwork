class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.pos = null;
        this.$el.on('click', 'ul', this.clickTower);

        this.setupTowers();
        this.render();
    }

    setupTowers() {
        for (let tower = 0; tower < 3; tower++) {
            const $tower = $('<ul></ul>');
            for (let disc = 0; disc < 3; disc++) {
                const $disc = $('<li></li>');
                if (tower < 1) {
                    $tower.append($disc);
                }
            }

            this.$el.append($tower);
        }
    }

    render() {
        // iterate through each tower, and if there's disc 
        this.game.towers.forEach(tower => {

        });
    }

    clickTower(event) {
        const clickedTower = $(event.currentTarget)
        if (this.pos === null) {
            this.pos = clickedTower.index();
        } else {
            if (!this.game.move(this.pos, clickedTower.index())) {
                alert('Invalid move!');
            }
            this.pos = null;
        }
        this.pos = null;
        this.render();

        if (this.game.isWon()) {
            this.$el.off('click');
            alert('Congrats you won!');
        }
    }
}

module.exports = View;