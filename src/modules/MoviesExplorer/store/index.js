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

function addFavoriteStatuses(movies, favorites) {
  const favoritesIds = favorites.map((movie) => movie.movieId);
  return movies.map((movie) => {
    return { ...movie, isFavorite: favoritesIds.includes(movie.id) };
  });
}

function updateFavoriteStatus(movies, movieId, isFavorite) {
  return movies.map((movie) => {
    if (movie.id !== movieId) {
      return movie;
    } else {
      return { ...movie, isFavorite };
    }
  });
}

function moviesReducer(movies = [], action) {
  switch (action.type) {
    case "set": {
      const { allMovies, favorites } = action;
      const adaptedMovies = allMovies.map(adaptMovie);
      const adaptedMoviesWithFavoriteStatus = addFavoriteStatuses(
        adaptedMovies,
        favorites,
      );
      return {
        rawData: allMovies,
        list: adaptedMoviesWithFavoriteStatus,
      };
    }
    case "updateFavoriteStatus": {
      const { movieId, isFavorite } = action;
      return {
        ...movies,
        list: updateFavoriteStatus(movies.list, movieId, isFavorite),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
