import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {TrendingContext} from '../contexts/trendingContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'


const TrendingPage = () => {
  const context = useContext(TrendingContext);
  const movies = context.movies;
  
  return (
    <PageTemplate
      title="Trending Movies this week"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};
export default TrendingPage;