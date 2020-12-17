import React, { useReducer, useEffect, createContext } from "react";
import { getRecommenedMovies } from "../api/tmdb-api";

export const RecommenedContext = createContext(null)

const reducer = (state, action) => {
    switch (action.type) {
        case "load":
      return { movies: action.payload.movies};
      default:
      return state;
    }
}
const RecommenedContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, { movies: [] });
    
    useEffect(() => {
        getRecommenedMovies(props.id).then((movies) => {
          dispatch({ type: "load", payload: { movies } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <RecommenedContext.Provider
          value={{
            movies: state.movies,
          }}
        >
          {props.children}
        </RecommenedContext.Provider>    
    )
}

export default RecommenedContextProvider