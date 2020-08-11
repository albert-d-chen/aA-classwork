{
    entities: {
        users: {
            1: {
                id: 1,
                username: "shanelle",
                email: 'ilovefeet@gmail.com',
            },
            2: {
                id: 2,
                username: "ayce"
                email: 'hotsaucefeet@gmail.com',
            }
        },
        products: {
            1: {
                id: 1,
                product_name: 'Mamba Focus'
                description: 'Focus of a mamba.'
                type: 'Shoes'
                price: 199.99
                size: 10
                color: 'black'
            },
            2: {
                id: 2,
                product_name: 'Kobe 5 Protro'
                description: 'Become a pro baller.'
                type: 'Shoes'
                price: 99.99
                size: 12
                color: 'white'
            },
        },
        shoppingCart: {
            1: {
                id: 1,
                userId: 1,
                checkedOut: false
            },
            2: {
                id: 2,
                userId: 2,
                checkedOut: false
            }
        },
        cartItems: {
            1: {
                id: 1,
                cartId: 1,
                productId: 1,
                quantity: 1
            },
            2: {
                id: 2,
                cartId: 2,
                productId, 2,
                quantity: 1
            }
        }
        reviews: {
            1: {
                id: 1,
                userId: 1,
                productId: 2,
                body: 'Very cool',
                rating: 5
            },
            2: {
                id: 2,
                userId: 2,
                productId: 1,
                body: 'Very cool',
                rating: 5
            }

        },
    },
    ui: {
        loading: true / false
    },
    errors: {
        login: ["Incorrect username/password combination"],

    },
    session: { currentUserId: 25 }
}