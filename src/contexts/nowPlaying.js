import React, { useEffect, createContext, useReducer } from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";

export const NowPlayingContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
      };
    case "load":
      return { movies: action.payload.movies};
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
      case "add-watchlist":
      return {
        upcoming: state.movies.map((m) =>
          m.id === action.payload.movies.id ? { ...m} : m
        ),
        movies: [...state.moes],
      };
    default:
      return state;
  }
};

const NowPlayingContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: []});

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getNowPlayingMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NowPlayingContext.Provider
      value={{
        movies: state.movies,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </NowPlayingContext.Provider>
  );
};

export default NowPlayingContextProvider;