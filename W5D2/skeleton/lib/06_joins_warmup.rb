# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer

require_relative './sqlzoo.rb'

def example_query
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    WHERE
      title = 'Doctor No'
  SQL
end

def films_from_sixty_two
  # List the films where the yr is 1962 [Show id, title]
  execute(<<-SQL)
    select
      id, title
    from
      movies
    where 
    yr = 1962
  SQL
end
# SELECT
#   id, title
#   FROM
#     movies
#   WHERE
#     yr = 1962

def year_of_kane
  # Give year of 'Citizen Kane'.
  execute(<<-SQL)
    select
      yr
    from movies
    where title = 'Citizen Kane'
  SQL
end
#  SELECT
#     yr
#   FROM
#     movies
#   WHERE
#     title = 'Citizen Kane'
def trek_films
  # List all of the Star Trek movies, include the id, title and yr (all of
  # these movies include the words Star Trek in the title). Order results by
  # year.
  execute(<<-SQL)
 select
 id, title, yr
 from
 movies
 where
title LIKE '%Star Trek%'
order by 
yr
  SQL
end
#  SELECT
#     id, title, yr
#   FROM
#     movies
#   WHERE
#     title LIKE '%Star Trek%'
#   ORDER BY
#     yr
def films_by_id
  # What are the titles of the films with id 1119, 1595, 1768?
  execute(<<-SQL)
  select
  title
  from
  movies
  where
  id IN (1119, 1595, 1768)
  SQL
end
  # SELECT
  #   title
  # FROM
  #   movies
  # WHERE
  #   id IN (1119, 1595, 1768)
def glenn_close_id
  # What id number does the actress 'Glenn Close' have?
  execute(<<-SQL)
  select
  id
  from
  actors
  where
  name = 'Glenn Close'
  SQL
end
  # SELECT
  #   id
  # FROM
  #   actors
  # WHERE
  #   name = 'Glenn Close'
def casablanca_id
  # What is the id of the film 'Casablanca'?
  execute(<<-SQL)
  select
  id
  from
  movies
  where
  title = 'Casablanca'
  SQL
end

  # SELECT
  #   id
  # FROM
  #   movies
  # WHERE
  #   title = 'Casablanca'
def casablanca_cast
  # Obtain the cast list for 'Casablanca'. Use the id value that you obtained
  # in the previous question directly in your query (for example, id = 1).
  execute(<<-SQL)
  select
  actors.name
  from
  actors
  join
  castings on castings.actor_id = actors.id
  join
  movies on castings.movie_id = movies.id
  where
  movies.id = (
    select
    movies.id
    from
    movies
    where
    title = 'Casablanca'
  )

 
  SQL
end

#  SELECT
#     name
#   FROM
#     actors
#   JOIN
#     castings on castings.actor_id = actors.id
#   WHERE
#    movie_id = 27

def alien_cast
  # Obtain the cast list for the film 'Alien'
  execute(<<-SQL)
  select
  actors.name
  from
  actors
  join
  castings on castings.actor_id = actors.id
  join
  movies on castings.movie_id = movies.id
  where
  movies.id = (
    select
    movies.id
    from
    movies
    where
    title = 'Alien'
  )

  SQL
end


# SELECT
#     name
#   FROM
#     actors
#   JOIN
#     castings on castings.actor_id = actors.id
#   JOIN
#     movies on movies.id = movie_id
#   WHERE
#     title = 'Alien'







