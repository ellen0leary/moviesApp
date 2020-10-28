import React, {useState, useEffect} from "react";
import Header from "../components/headerMovieList";
import MovieList from "../components/movieList";
import FilterControls from "../components/filterControls";
import { createPortal } from "react-dom";

const MovieListPage = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const[genreFilter, setGenreFilter] = useState("0");

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        return json.results
      })
      .then(movies => {
        setMovies(movies);
      });
  }, []);

  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
  })
  .filter(m => {
      return genre > 0? mgenre_ids.includes(Number(genreFilter)) : true;
  });

  return (
    <>
      <Header numMovies={displayedMovies.length} />
      <FilterControls  onUserInput={handleFilterChange}/>
      <MovieList movies={displayedMovies} />
    </>
  );
};

export default MovieListPage;