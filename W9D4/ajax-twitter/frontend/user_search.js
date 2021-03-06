const APIUtil = require('./api_util');
const FollowToggle = require('./follow_toggle');

class UserSearch {
    constructor(el) {
        this.$el = $(el);
        this.$input = this.$el.find('input[name=username]');
        this.$ul = this.$el.find('.users');

        this.$input.on('input', this.handleInput.bind(this));
    }

    handleInput(event) {
        if (this.$input.val() === '') {
            this.renderResults([]);
            return;
        }

        APIUtil.searchUsers(this.$input.val())
            .then((users) => {this.renderResults(users)})
    }

    renderResults(users) {
        this.$ul.empty();

        for (let i = 0; i < users.length; i++) {
            const user = users[i];

            let $a = $('<a></a>');
            let $li = $('<li></li>');

            $a.text(`@${user.username}`);
            $li.append($a);
            this.$ul.append($li);

        }
    }
}

module.exports = UserSearch;