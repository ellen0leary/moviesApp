import { useEffect, useState } from "react";
import {getLatestMovies} from '../api/tmdb-api'

const useMovie = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getLatestMovies().then(movie => {
      setMovie(movie);
    });
  }, []);
  return [movie, setMovie];
};

export default useMovie