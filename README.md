# Assignment 1 - ReactJS app.

Name: Ellen O' Leary (20084694 - Applied Computing)

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 -  The Users is able to get trending movies from this week
 + Feature 2 -  The User is able to get the top rated movies
 + Feature 3 =  The  User is now movies that are currently playing
 + Feature 4 - The user is able to get the latest movie that is out
 + etc

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/reviews - gets the reviews of a movie
+ https://api.themoviedb.org/3/movie/upcoming - get upcoming movies
+ https://api.themoviedb.org/3/movie/${id}/release_dates - gets recommened movies from a movie
+ https://api.themoviedb.org/3/trending/movie/week? - gets movies that are currently trending
+ https://api.themoviedb.org/3/movie/top_rated - gets the top rated movies of all time
+ https://api.themoviedb.org/3/movie/now_playing - gets movies that are currently out
+ https://api.themoviedb.org/3/movie/latest? = get the latest movie that has been realesed

## App Design.

### Component catalogue (If required).

Here is my storybook. I haven't changed anything.

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][recommened]
>I addded a button that should take the user to recommened movies


## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/:id/recommened - lists recommened movies
+ /movies/trending - contains trending movies
+ /movies/topRated - contains top rated movies
+ /movies/nowPlaying - contains now playing movies
+ /movies/latest - contains the latests movies

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][latest]
>Clicking in lasest brings the lasest movie details up

---------------------------------

[stories]: ./public/storybook.png
[recommened]: ./public/recommenedMovies.png
[reviewLink]: ./public/reviewlink.png
[cardLink]: ./public/cardlink.png
[latest]: ./public/lasest.png

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
