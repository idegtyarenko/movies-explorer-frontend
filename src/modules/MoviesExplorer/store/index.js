import {
  mapBeatfilmApiMovieToAppModel,
  mapMainApiMovieToAppModel,
} from "../utils/utils";
import { loadPreviousResult } from "../utils/localStorage";

const { createContext, useReducer, useContext } = require("react");

const MoviesDataContext = createContext();
const MoviesDataDispatchContext = createContext(null);

export function MoviesDataProvider({ children }) {
  const initialState = {
    movies: loadPreviousResult() ?? [],
    favorites: {},
    isAllMoviesDownloaded: false,
    isFavoritesDownloaded: false,
  };
  const [moviesData, dispatch] = useReducer(moviesDataReducer, initialState);

  return (
    <MoviesDataContext.Provider value={moviesData}>
      <MoviesDataDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDataDispatchContext.Provider>
    </MoviesDataContext.Provider>
  );
}

export function useMoviesData() {
  return useContext(MoviesDataContext);
}

export function useMoviesDataDispatch() {
  return useContext(MoviesDataDispatchContext);
}

function makeFavoritesObject(favorites) {
  const result = {};
  favorites.forEach((movie) => {
    result[movie.movieId] = movie._id;
  });
  return result;
}

function combineMovieArrays(arrays) {
  return arrays.reduce((acc, array) => {
    const deduplicatedArray = array.filter(
      ({ movieId }) => !acc.find((movie) => movie.movieId === movieId),
    );
    return acc.concat(deduplicatedArray);
  }, []);
}

function moviesDataReducer(moviesData, action) {
  switch (action.type) {
    case "setAllMovies": {
      if (moviesData.isAllMoviesDownloaded) {
        console.error("Repeated fetch of all movies");
        return moviesData;
      }
      const { data } = action;
      return {
        ...moviesData,
        movies: data.map(mapBeatfilmApiMovieToAppModel),
        isAllMoviesDownloaded: true,
      };
    }
    case "setFavorites": {
      const { isFavoritesDownloaded, isAllMoviesDownloaded, movies } =
        moviesData;
      if (isFavoritesDownloaded) {
        console.error("Repeated fetch of favorites");
        return moviesData;
      }
      const { data } = action;
      return {
        ...moviesData,
        movies: isAllMoviesDownloaded
          ? movies
          : combineMovieArrays([movies, data.map(mapMainApiMovieToAppModel)]),
        favorites: makeFavoritesObject(data),
        isFavoritesDownloaded: true,
      };
    }
    case "addToFavorites": {
      const { movieId, _id } = action;
      return {
        ...moviesData,
        favorites: {
          ...moviesData.favorites,
          [movieId]: _id,
        },
      };
    }
    case "removeFromFavorites": {
      const { movieId } = action;
      const { [movieId]: removedKey, ...updatedFavorites } =
        moviesData.favorites;
      return {
        ...moviesData,
        favorites: updatedFavorites,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
