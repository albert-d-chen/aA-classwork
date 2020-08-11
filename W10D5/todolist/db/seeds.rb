# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo1 = Todo.create!(
  title: 'Get a job',
  body: 'I will become employed',
  done: false
)

todo2 = Todo.create!(
  title: 'Maintain personal hygiene',
  body: 'I want to be a sparkling human',
  done: false
)

todo3 = Todo.create!(
  title: 'Exercise',
  body: 'I will exercise more than my typing fingers',
  done: false
)

todo4 = Todo.create!(
  title: 'Contemplate the meaning of life',
  body: 'between homeworks and readings',
  done: false
)

todo5 = Todo.create!(
  title: 'Learn how to make a variety of noodle dishes',
  body: 'noodles make me feel happy and loved',
  done: false
)