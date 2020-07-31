const APIUtil = require('./api_util');

class FollowToggle {
    constructor(el, options) {
        this.$el = $(el);
        this.userId = options.userId || this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state') || options.followState;

        this.render();

        this.$el.on('click', this.handleClick.bind(this));
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.text('Follow!');
            this.$el.prop('disabled', false);
        } else if (this.followState === "followed") { 
            this.$el.text('Unfollow!');
            this.$el.prop('disabled', false);
        } else if (this.followState === "following") {
            this.$el.text('Following...');
            this.$el.prop('disabled', true);
        } else if (this.followState === "unfollowing") {
            this.$el.text('Unfollowing...');
            this.$el.prop('disabled', true);
        }

    }
    
    handleClick(event) {

        event.preventDefault();
        const followToggle = this;

        if (this.followState === "unfollowed") {
            this.followState = "following";
            this.render();
            APIUtil.followUser(this.userId).then( () => {
                followToggle.followState = 'followed';
                followToggle.render();
            }
            )
        } else if (this.followState === "followed") { 
            this.followState = "unfollowing";
            this.render();
            APIUtil.unfollowUser(this.userId).then( () => {
                followToggle.followState = 'unfollowed';
                followToggle.render();
            })
        }
    }
}



module.exports = FollowToggle;

