import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {TopRatedContext} from '../contexts/topRatedContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'


const TopRatedPage = () => {
  const context = useContext(TopRatedContext);
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
export default TopRatedPage;