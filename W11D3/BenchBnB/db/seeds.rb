# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.delete_all
User.delete_all

bench1 = Bench.create!(description:'somewhere over the rainbow', lat:37.756528, lng: -122.433500)
bench1 = Bench.create!(description:'where ayce feet at', lat:37.762411, lng: -122.399018)
bench1 = Bench.create!(description:'i know where you at', lat:37.780158, lng: -122.407060)

user1 = User.create!(username: 'alby', password:'password')