# Assignment 1 - ReactJS Movie Database App

Name: Barry Nolan

## Overview

This repository is a React app that uses the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) to get and display information about movies, TV shows, and actors to the user.

### Features
 
+ Top-rated movies of all time page
+ Recent TV shows page
+ Trending people page
+ Details of specific person page
    + List of the person's movie & TV credits, sorted by most popular
+ Details of specific TV show page
+ Image lists for the specific person/TV show pages
+ Details of a specific TV show's season
+ Cast listings for each movie (movie details page), TV show (TV show details page), and TV show's season (Season details page)
+ Filter by language option for TV shows

## Set-up requirements

No set-up requirements necessary :)

## Additional API endpoints

+ Movies
  + List of top-rated movies of all time - /movie/top_rated
  + Returns cast of a specific movie - /movie/:id/credits
+ TV Shows
  + Discover list of TV shows - /discover/tv
  + Returns details of a specific TV show - /tv/:id
  + List of TV show images - /tv/:id/images
  + Returns cast of a specific TV show - /tv/:id/credits
+ Seasons
  + Returns details of a specific season - /tv/:id/season/:season
  + Returns cast of a specific season - /tv/:id/season/:season/credits
+ People
  + List of most popular people right now - /person/popular
  + Returns details of a specific person - /person/:id
  + List of a person's images - /person/:id/images
  + Returns list of movies a specific person acted in - /person/:id/movie_credits
  + Returns list of TV shows a specific person acted in - /person/:id/tv_credits
+ Miscellaneous
  + Returns list of TV show genres - /genre/tv/list
  + Returns list of languages - /configuration/languages

## New routes

+ /movies/top-rated - displays list of top movies of all time
![top movies](https://github.com/baz333/react-movie-assignment/blob/main/top-rated.png?raw=true)

+ /tvshows - displays list of recent TV shows
![recent tv shows](https://github.com/baz333/react-movie-assignment/blob/main/tvshows.png?raw=true)

+ /tvshows/:id - displays details of a specific TV show
![tv show details](https://github.com/baz333/react-movie-assignment/blob/main/tvshows_id.png?raw=true)

+ /tvshows/:id/season/:season - displays details of a specific season
![season details](https://github.com/baz333/react-movie-assignment/blob/main/tvshows_id_season_season.png?raw=true)

+ /people - displays list of popular people right now
![popular people](https://github.com/baz333/react-movie-assignment/blob/main/people.png?raw=true)

+ /people/:id - displays details of a specific person
![person details](https://github.com/baz333/react-movie-assignment/blob/main/people_id.png?raw=true)
Scroll down for person's movie & TV show credits
![cast credits](https://github.com/baz333/react-movie-assignment/blob/main/cast.png?raw=true)
