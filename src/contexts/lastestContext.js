import React, { useEffect, createContext, useReducer } from "react";
import { getLatestMovies } from "../api/tmdb-api";

export const LatestContext = createContext(null);

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
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
    default:
      return state;
  }
};

const LatestContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies:[]});

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getLatestMovies().then((movie) => {
      dispatch({ type: "load", payload: { movie } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LatestContext.Provider
      value={{
        movies: state.movies,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </LatestContext.Provider>
  );
};

export default LatestContextProvider;