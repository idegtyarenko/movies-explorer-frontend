import { adaptMovie } from "../utils/utils";

const { createContext, useReducer, useContext } = require("react");

const MoviesContext = createContext();
const MoviesDispatchContext = createContext(null);

export function MoviesProvider({ children }) {
  const initialState = {
    rawData: [],
    list: [],
  };
  const [movies, dispatch] = useReducer(moviesReducer, initialState);

  return (
    <MoviesContext.Provider value={movies}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  return useContext(MoviesContext);
}

export function useMoviesDispatch() {
  return useContext(MoviesDispatchContext);
}

function moviesReducer(movies = [], action) {
  switch (action.type) {
    case "set": {
      const { data: rawData } = action;
      const list = rawData.map(adaptMovie);
      return { rawData, list };
    }
    case "like": {
      return movies;
    }
    case "unlike": {
      return movies;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
