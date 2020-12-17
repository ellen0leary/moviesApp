import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavouriteMoviesPage from './pages/favouriteMoviePage';
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviePage from "./pages/upcomingMoviePage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import RecommendMovies from "./pages/RecommendationsPage";
import RecommenedContextProvider from "./contexts/recommenedContext";
import TrendingMovies from "./pages/trendingMovie";
import TrendingContextProvider from "./contexts/trendingContext";
import TopRatedPeople from "./pages/topRatedPage";
import TopRatedContextProvider from "./contexts/topRatedContext";
import NowPlayingPage from "./pages/nowPlayingPage";
import NowPlayingContextProvider from "./contexts/nowPlaying";
import LatestPage from "./pages/latestPage";
import LatestContextProvider from "./contexts/lastestContext";

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />     
          <div className="container-fluid">
            <MoviesContextProvider>
              <RecommenedContextProvider>
              <GenresContextProvider>
                <TrendingContextProvider>
                  <TopRatedContextProvider>
                    <NowPlayingContextProvider>
                      <LatestContextProvider>
                <Switch>
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route path="/reviews/:id" component={MovieReviewPage} />
                  <Route exact path="/movies/favorites" component={FavouriteMoviesPage} />
                  <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
                  <Route exact path="/movies/:id/recommened" component={RecommendMovies} />
                  <Route exact path="/movies/trending" component={TrendingMovies} />
                  <Route exact path="/movies/topRated" component={TopRatedPeople} />
                  <Route exact path="/movies/nowPlaying" component={NowPlayingPage} />
                  <Route exact path="/movies/latest" component={LatestPage} />
                  <Route path="/movies/:id" component={MoviePage} />
                  <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
                </LatestContextProvider>
                </NowPlayingContextProvider>
                </TopRatedContextProvider>
                </TrendingContextProvider>
              </GenresContextProvider>
              </RecommenedContextProvider>
            </MoviesContextProvider>
          </div>
        </div>
      </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));