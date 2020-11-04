import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavouriteMoviesPage from './pages/favouriteMoviePage';
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviePage from "./pages/upcomingMoviePage";
import SiteHeader from './components/siteHeader';

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />     
          <div className="container-fluid">
            <Switch>
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavouriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));