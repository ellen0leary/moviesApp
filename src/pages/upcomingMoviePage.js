import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/upcomingMoviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return ("upcoming" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies} 
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};
export default UpcomingMoviePage;