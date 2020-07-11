# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({username: 'Joe'})
user2 = User.create({username: 'Charles'})
user3 = User.create({username: 'Karl'})
user4 = User.create({username: 'Lindsey'})
user5 = User.create({username: 'Sarah'})

art1 = Artwork.create({title: 'Love is Dead', image_url: 'art1.com', artist_id: user1.id})
art2 = Artwork.create({title: 'Orange', image_url: 'art2.com', artist_id: user2.id})
art3 = Artwork.create({title: 'Landscape', image_url: 'art3.com', artist_id: user3.id})
art4 = Artwork.create({title: 'Never Give Up', image_url: 'art4.com', artist_id: user4.id})

artshare1 = ArtworkShare.create({artwork_id: art1.id, viewer_id: user5.id})
artshare2 = ArtworkShare.create({artwork_id: art1.id, viewer_id: user3.id})
artshare3 = ArtworkShare.create({artwork_id: art2.id, viewer_id: user1.id})
artshare4 = ArtworkShare.create({artwork_id: art2.id, viewer_id: user3.id})
artshare5 = ArtworkShare.create({artwork_id: art3.id, viewer_id: user2.id})
artshare6 = ArtworkShare.create({artwork_id: art4.id, viewer_id: user5.id})

comment1 = Comment.create({artwork_id: art1.id, user_id: user1.id, body: 'this is the body' })
comment2 = Comment.create({artwork_id: art3.id, user_id: user2.id, body: 'this is the other body' })