import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {NowPlayingContext} from '../contexts/nowPlaying'
import AddToFavoritesButton from '../components/buttons/addToFavorites'


const NowPlayingPage = () => {
  const context = useContext(NowPlayingContext);
  const movies = context.movies;
  
  return (
    <PageTemplate
      title="Now Playing"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};
export default NowPlayingPage;