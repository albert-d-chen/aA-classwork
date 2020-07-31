const APIUtil = {

    followUser: id => (
            $.ajax({
            method: 'POST',
            url: `/users/${id}/follow`,
            dataType: 'json'
        })
    ),

    unfollowUser: id => (
        $.ajax({
            method: 'DELETE',
            url: `/users/${id}/follow`,
            dataType: 'json'
        })
    ),

    searchUsers: query => (
        $.ajax({
            method: 'GET',
            url: `/user/search`,
            data: {query},
            dataType: 'json'
        })
    )

}

module.exports = APIUtil;