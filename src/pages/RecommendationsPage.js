import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {RecommenedContext} from '../contexts/recommenedContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'
//import AddToFavoritesButton from '../components/buttons/addToFavorites'

const RecommendMovies = () => {
  const context = useContext(RecommenedContext);
  const movies = context.movies

  return (
    <PageTemplate
      title="Recommened Movies"
      movies={movies} 
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};
export default RecommendMovies;